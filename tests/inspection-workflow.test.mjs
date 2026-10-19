import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, copyFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';

test('inspection evidence and nonconformity survive conversion and repeat requests', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'ehs-flow-'));
  const port = 22000 + Math.floor(Math.random() * 10000);
  await copyFile(new URL('../server.js', import.meta.url), join(dir, 'server.mjs'));
  const child = spawn(process.execPath, [join(dir, 'server.mjs')], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'] });
  const base = `http://localhost:${port}`;
  const request = async (path, method = 'GET', input) => {
    const res = await fetch(base + path, { method, headers: { 'content-type': 'application/json' }, ...(input ? { body: JSON.stringify(input) } : {}) });
    return { status: res.status, data: await res.json() };
  };
  try {
    await new Promise((resolve, reject) => { child.stdout.once('data', resolve); child.once('error', reject); child.once('exit', code => reject(new Error(`Server exited ${code}`))); });
    await request('/api/checks', 'POST', { id: 'CHECK-TEST', title: '测试检查', site: '测试区域', checkItems: [{ id: 'one', text: '防护罩固定牢固', category: '机械安全', risk: '高', result: '不符合', note: '右侧固定螺栓缺失', source: '设备检查标准' }, { id: 'two', text: '急停正常', result: '符合' }] });
    assert.equal((await request('/api/checks/CHECK-TEST', 'PATCH', { status: '已完成' })).status, 400);
    const photo = await request('/api/checks/CHECK-TEST/items/0/evidence', 'POST', { fileName: '现场.png', fileData: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jQ1sAAAAASUVORK5CYII=' });
    assert.equal(photo.status, 201);
    const converted = await request('/api/checks/CHECK-TEST/items/0/issue', 'POST', { owner: '设备部', deadline: '2026-10-26' });
    assert.equal(converted.status, 201);
    assert.equal(converted.data.inspectionNote, '右侧固定螺栓缺失');
    assert.equal(converted.data.owner, '设备部');
    assert.equal(converted.data.checkId, 'CHECK-TEST');
    assert.equal(converted.data.sourcePhotos[0].id, photo.data.id);
    const again = await request('/api/checks/CHECK-TEST/items/0/issue', 'POST', {});
    assert.equal(again.data.id, converted.data.id);
    assert.equal((await request('/api/issues')).data.filter(i => i.checkId === 'CHECK-TEST').length, 1);
    assert.equal((await request('/api/checks')).data.find(i => i.id === 'CHECK-TEST').checkItems[0].issueId, converted.data.id);
    assert.equal((await request('/api/checks/CHECK-TEST', 'PATCH', { status: '已完成' })).status, 200);
    assert.equal((await fetch(base + `/api/checks/CHECK-TEST/evidence/${photo.data.id}?inline=1`)).status, 200);
    assert.equal((await request('/api/checks/CHECK-TEST/items/1/issue', 'POST', {})).status, 400);
    assert.equal((await request('/api/issues/' + converted.data.id, 'PATCH', { status: '已完成' })).status, 400);
    const evidencePath = '/api/issues/' + converted.data.id + '/evidence';
    assert.equal((await request(evidencePath, 'POST', { note: '无效时间', rectifiedAt: 'invalid' })).status, 400);
    assert.equal((await request(evidencePath, 'POST', { note: '空时间', rectifiedAt: '' })).status, 400);
    const firstTime = '2026-10-18T09:30:00.000Z';
    const firstRound = await request(evidencePath, 'POST', { note: '二次整改，更换螺栓并复查', rectifiedAt: firstTime, roundId: 'round-one' });
    assert.equal(firstRound.status, 201);
    assert.equal(firstRound.data.rectifiedAt, firstTime);
    assert.notEqual(firstRound.data.createdAt, firstTime);
    assert.equal(firstRound.data.roundId, 'round-one');
    const secondRound = await request(evidencePath, 'POST', { note: '三次整改，补充复查记录', rectifiedAt: '2026-10-19T03:00:00.000Z', fileName: '复查.txt', fileData: Buffer.from('复查记录').toString('base64') });
    assert.equal(secondRound.status, 201);
    const history = (await request('/api/issues')).data.find(i => i.id === converted.data.id).evidenceHistory;
    assert.equal(history.length, 2);
    assert.equal(history[0].rectifiedAt, firstTime);
    assert.equal(history[1].fileName, '复查.txt');
    assert.equal((await fetch(base + evidencePath + '/' + secondRound.data.id)).status, 200);
    const closed = await request('/api/issues/' + converted.data.id, 'PATCH', { status: '已完成', reviewer: '复查员', reviewNote: '确认防护罩固定牢固' });
    assert.equal(closed.status, 200);
    assert.ok(closed.data.reviewedAt);
  } finally {
    child.kill();
    await new Promise(resolve => child.exitCode !== null ? resolve() : child.once('exit', resolve));
    await rm(dir, { recursive: true, force: true });
  }
});
