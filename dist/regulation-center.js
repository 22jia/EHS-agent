export const industries = [
  '通用','汽车制造','服务业','零售业','食品','饮料烟酒','医疗服务','化工原料和制品','医药制造','非金属矿物制品','金属冶炼加工和制品','化学纤维制造',
  '石油、煤炭及其他燃料加工','采矿','橡胶和塑料制品','设备、机械加工','运输设备制造','电气机械和器材','金属制品、机械和设备修理','计算机、通信和其他电子设备制造业',
  '信息传输、软件和信息技术服务业','建筑与基础设施','电力、热力、燃气及水','住宿和餐饮','金融和房地产','租赁和商务服务','水利、环境和公共设施','文体娱乐',
  '教育科研','邮政业','装卸搬运和仓储业','交通运输','服装鞋帽纺织','造纸和纸制品','印刷','家具制造业','木材加工和木竹藤棕草制品','农林牧渔','废弃资源综合利用',
  '专业技术服务','建材','仪器仪表','公共管理、社会保障和社会组织','居家','批发业','其它'
].map(name=>({code:name,name}));

const regions = ['北京','天津','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区','海南省','重庆','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区'];
const lawTypes = ['综合','环境','安全','健康','劳动保障','可持续发展','ESG','碳排放','公共安全','质量','疫情防控'];
const regulatoryMeta = [
  {type:'安全',authority:'应急管理部门',level:'国家',effective:'现行有效',industry:'通用',region:'全国',ref:'安全生产领域法规示例'},
  {type:'公共安全',authority:'国家消防救援局',level:'国家',effective:'现行有效',industry:'通用',region:'全国',ref:'消防安全领域法规示例'},
  {type:'健康',authority:'卫生健康部门',level:'国家',effective:'现行有效',industry:'通用',region:'全国',ref:'职业健康领域法规示例'},
  {type:'安全',authority:'浙江省人民代表大会常务委员会',level:'地方',effective:'现行有效（演示）',industry:'通用',region:'浙江省',ref:'地方性法规示例'},
  {type:'安全',authority:'上海市人民代表大会常务委员会',level:'地方',effective:'现行有效（演示）',industry:'通用',region:'上海',ref:'地方性法规示例'}
];
const localLawExamples = [
  {name:'浙江省安全生产条例',type:'安全',scope:'浙江省',status:'演示状态 · 请核验',updated:'2026-10-01'},
  {name:'上海市安全生产条例',type:'安全',scope:'上海',status:'演示状态 · 请核验',updated:'2026-10-01'}
];

export const templateSeed = [
  {id:'TPL-001',name:'机械加工车间综合安全检查',industry:'设备、机械加工',industryName:'设备、机械加工',type:'安全',region:'全国',status:'已发布',updated:'2026-10-12',source:'工贸企业重大事故隐患判定标准；机械安全相关要求',items:[
    {id:'T1',category:'机械防护',text:'检查车床、铣床、冲床等设备的旋转/往复运动部位防护罩是否安装牢固，防护罩开启后设备是否不能启动。',method:'逐台检查防护罩固定点；在安全条件下验证联锁，不得将手伸入危险区。',criteria:'危险运动部位不可直接触及；防护装置无缺失、松动或被旁路，联锁动作有效。',evidence:'设备全景与防护罩近照；联锁测试记录',risk:'高',source:'机械安全检查要求'},
    {id:'T2',category:'急停装置',text:'检查设备急停按钮是否醒目、可触及，按下后能否停止危险运动，复位后是否需重新启动。',method:'在设备空载且按规程允许时逐台测试急停，记录设备编号与结果。',criteria:'急停按钮无破损、无遮挡；触发后危险运动停止，复位不会导致设备自动重启。',evidence:'急停位置照片；设备编号与测试记录',risk:'高',source:'机械安全检查要求'},
    {id:'T3',category:'检维修作业',text:'检查清理、排障和检维修作业是否执行停机、断能、上锁挂牌，是否有防止他人误启动的措施。',method:'抽查当班检维修作业票与现场锁具；访谈作业人员并核对设备能源隔离点。',criteria:'作业前识别并隔离电、气、液压等危险能源；锁具挂牌对应到人，作业结束后按流程解除。',evidence:'作业票、锁具挂牌照片、能源隔离清单',risk:'高',source:'检维修作业安全管理要求'},
    {id:'T4',category:'电气安全',text:'检查配电箱/柜前是否堆物，箱门、接地、标识和防护盖板是否完好，电缆是否破损或私拉乱接。',method:'检查配电设施外观及周边通道；查阅最近一次电气巡检记录。',criteria:'操作和检修空间无占用；带电部位有防护；箱体接地连接可靠；无可见裸露导体和临时违规接线。',evidence:'配电箱全景、内部防护照片；电气巡检记录',risk:'高',source:'用电安全检查要求'},
    {id:'T5',category:'起重与吊装',text:'检查车间起重设备的安全装置、吊钩防脱装置、钢丝绳/吊带和额定载荷标识。',method:'核对设备点检和检验资料；目视检查吊具磨损、变形、断丝及防脱装置。',criteria:'安全装置和防脱装置有效；吊具无明显损伤超限；额定载荷标识清楚，检验在有效期内。',evidence:'设备铭牌、吊具状态照片、检验/点检记录',risk:'高',source:'特种设备及起重作业要求'},
    {id:'T6',category:'消防器材',text:'检查灭火器是否在指定点位、易于取用，压力指示和铅封是否正常，器材标识是否可辨识。',method:'按点位图逐点核对配置；查看压力表指针、铅封和检查卡。',criteria:'器材未被遮挡或挪用；压力指示在工作区间；无锈蚀、破损、过期或检查记录缺失。',evidence:'灭火器点位照片、检查卡',risk:'中',source:'消防设施管理要求'},
    {id:'T7',category:'疏散通道',text:'检查安全出口、疏散通道和消防车通道是否被物料、车辆或临时设施占用。',method:'沿疏散路线从作业区走查至室外安全出口，检查门扇开启和指示标识。',criteria:'疏散路线连续畅通；安全出口可正常开启；指示标志清晰可见，应急照明无明显故障。',evidence:'通道全景与出口照片；应急照明测试记录',risk:'高',source:'消防安全管理要求'},
    {id:'T8',category:'化学品与危废',text:'检查现场化学品容器标签、二次容纳和相容性分区；检查危险废物暂存容器标识与台账。',method:'抽查现场容器与化学品清单；核对危废标签、暂存区防渗和出入库记录。',criteria:'容器标识可识别；无泄漏；需隔离的物质分区存放；危险废物类别、标签和台账信息一致。',evidence:'容器及暂存区照片；化学品清单、危废台账',risk:'高',source:'环境与危险化学品管理要求'}]},
  {id:'TPL-002',name:'消防设施与疏散系统月度检查',industry:'通用',industryName:'通用',type:'公共安全',region:'全国',status:'已发布',updated:'2026-10-08',source:'消防安全领域要求',items:[
    {id:'T9',category:'灭火器',text:'逐具检查灭火器配置点位、压力指示、保险销/铅封、筒体和检验标识。',method:'按消防器材清单逐点核对并检查器材外观、压力表和检查卡。',criteria:'器材在位且无遮挡；压力正常；筒体无严重锈蚀、变形；检验/维修期限符合设备标识要求。',evidence:'器材照片、点位检查清单',risk:'中',source:'消防设施管理要求'},
    {id:'T10',category:'消火栓系统',text:'检查室内消火栓箱门、箱内水带/水枪/接口及周边取用空间。',method:'抽查消火栓箱开启状态和器材完整性；按计划由授权人员测试供水功能。',criteria:'箱体可开启，器材齐全无明显损坏，栓口无遮挡；测试异常已登记并安排维修。',evidence:'箱内器材照片；系统测试/维保记录',risk:'高',source:'消防设施维护要求'},
    {id:'T11',category:'安全出口',text:'检查安全出口数量和位置标志是否清楚，出口门是否能从疏散方向开启且无锁闭障碍。',method:'现场沿疏散路线逐个核对出口和门的开启情况。',criteria:'出口标识可辨；门可正常开启；出口及门前无堆物、门禁故障或影响疏散的障碍。',evidence:'出口标识、门开启状态照片',risk:'高',source:'建筑消防疏散要求'},
    {id:'T12',category:'疏散通道',text:'检查疏散通道、楼梯间及防火门周边是否被占用，防火门是否保持应有的关闭状态。',method:'按楼层路线巡查并记录堵塞点、防火门损坏或常开情况。',criteria:'通道无堆物；防火门闭门功能正常且未被楔开；发现的问题有责任人和整改期限。',evidence:'通道照片、问题整改记录',risk:'高',source:'消防安全管理要求'},
    {id:'T13',category:'应急照明与指示',text:'检查应急照明、疏散指示灯具外观、供电指示和抽测功能。',method:'逐层查看灯具状态，按维护计划切断正常照明电源抽测应急启动。',criteria:'灯具无破损/遮挡；断电后可按设备设计状态启动；故障点已登记报修。',evidence:'灯具照片、功能抽测记录',risk:'中',source:'消防设施维护要求'},
    {id:'T14',category:'火灾报警系统',text:'检查火灾报警控制器有无故障/屏蔽信息，值班人员是否能说明报警处置流程。',method:'由系统管理人员查看控制器状态和运行记录，抽问值班人员。',criteria:'无未处理的故障或屏蔽点；异常有记录、报修和复核；值班记录连续。',evidence:'控制器状态照片、值班及维保记录',risk:'高',source:'消防控制室管理要求'},
    {id:'T15',category:'消防控制室',text:'检查值班安排、值班记录、应急通讯设备和消防设施操作人员资格/培训情况。',method:'查阅近期值班记录和人员培训/资格资料，现场测试通讯。',criteria:'值班制度落实；记录填写完整；通讯可用；在岗人员掌握报警确认与初期处置流程。',evidence:'排班表、值班记录、培训资料',risk:'中',source:'消防控制室管理要求'},
    {id:'T16',category:'维护与整改',text:'检查本月消防设施故障、维保发现问题是否形成工单并完成复核销项。',method:'抽取维保报告与故障台账，追溯至少一项从发现到复核的记录。',criteria:'问题有责任人、计划期限和处理证据；逾期事项有升级跟踪；复核结果可追溯。',evidence:'维保报告、维修工单、复核记录',risk:'中',source:'消防设施维护管理要求'}]},
  {id:'TPL-003',name:'职业健康与个体防护检查',industry:'设备、机械加工',industryName:'设备、机械加工',type:'健康',region:'全国',status:'草稿',updated:'2026-10-04',source:'职业健康领域要求',items:[
    {id:'T17',category:'危害告知',text:'检查存在职业病危害因素的岗位是否设置危害告知卡，内容是否与岗位实际一致。',method:'将岗位告知内容与职业病危害因素检测/评价资料对照。',criteria:'告知卡位置醒目、字迹清晰，危害因素、防护措施和应急内容与岗位相符。',evidence:'岗位告知卡照片、危害因素检测资料',risk:'中',source:'职业病危害告知要求'},
    {id:'T18',category:'个体防护用品',text:'抽查噪声、粉尘、化学品接触岗位的防护用品种类、适配性、领用和现场佩戴情况。',method:'现场观察佩戴；核对用品采购/发放记录和适用防护等级说明。',criteria:'用品与危害因素相适配；在有效/完好状态；员工会正确佩戴和维护；发放记录可追溯。',evidence:'用品型号标签、佩戴照片、发放记录',risk:'高',source:'职业病防护用品管理要求'},
    {id:'T19',category:'职业健康检查',text:'检查接触职业病危害岗位人员的上岗前、在岗期间和离岗时职业健康检查安排及结果处置。',method:'抽查岗位人员名册、检查计划与个体结果告知/复查安排，注意保护个人健康信息。',criteria:'检查安排覆盖在岗人员且处于计划周期；异常结果按流程告知、复查和调整岗位。',evidence:'去标识化检查台账、复查和岗位调整记录',risk:'高',source:'职业健康监护要求'},
    {id:'T20',category:'危害因素检测',text:'检查工作场所职业病危害因素定期检测是否覆盖重点岗位，超标或异常结果是否有治理措施。',method:'对照岗位清单核查检测点位和报告；追溯异常项治理与复测。',criteria:'检测覆盖主要危害岗位；报告在适用周期内；异常项有控制措施、责任人和验证记录。',evidence:'检测报告、治理方案、复测结果',risk:'高',source:'职业病危害因素检测要求'},
    {id:'T21',category:'培训与应急',text:'检查接害岗位员工是否接受职业健康培训，是否了解危害因素、防护用品使用及泄漏/暴露处置。',method:'抽问员工并核查培训签到、课程内容和现场应急物资。',criteria:'抽问人员能说出主要危害与防护方法；培训记录覆盖岗位；应急物资可取用且在状态有效。',evidence:'培训记录、应急物资照片、现场访谈记录',risk:'中',source:'职业健康培训与应急要求'}]}
];

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function renderCheckSkillDetails(item) {
  const fields = [['检查优先级', item.priority], ['优先关注原因', item.priorityReason], ['适用条件', item.applicabilityConditions], ['依据关系', item.basisType], ['依据说明', item.basisExplanation], ['整改方向', item.remediation], ['复查要点', item.verification]];
  const rows = fields.filter(([, value]) => value).map(([label, value]) => `<p><b>${label}：</b>${esc(value)}</p>`).join('');
  return rows ? `<div class="inspection-reference">${rows}</div>` : '';
}
const selected = (a,b) => a===b ? 'selected' : '';

export function renderRegulations(ctx) {
  const {layout,head,state,save,markSynced,goChecks} = ctx;
  state.templates ||= [];
  for (const law of localLawExamples) if(!state.regulations.some(item=>item.name===law.name)) state.regulations.push(law);
  let templates = [...templateSeed,...state.templates];
  let active = 'laws';
  let selectedLawId = null;
  let selectedTemplateId = null;
  let favorites = JSON.parse(localStorage.getItem('ehs-law-favorites') || '[]');
  let expandedIndustry = false;
  let expandedRegion = false;
  const el = (id) => document.getElementById(id);
  const typeAliases = {'安全生产':'安全','消防安全':'公共安全','职业健康':'健康','环境保护':'环境','质量管理':'质量','疫情防控':'疫情防控'};
  const safeType = item => typeAliases[item.type] || item.type || '综合';

  function shell(content) {
    const tabs=active==='upload'?'':`<div class="compliance-tabs" role="tablist"><button class="compliance-tab ${active==='laws'?'active':''}" data-center="laws">法规库 <span>${state.regulations.length}</span></button><button class="compliance-tab ${active==='templates'||active==='template-detail'?'active':''}" data-center="templates">模板检查库 <span>${templates.length}</span></button><button class="compliance-tab ${active==='agent'?'active':''}" data-center="agent"><span class="agent-spark">✳</span>法规转检查助手</button></div>`;
    layout(active==='upload'?content:`${head('Compliance Center','法规中心','按适用行业与地区管理法规要求、检查模板，并把检查发现转成整改行动。')}${tabs}${content}`);
    document.querySelectorAll('[data-center]').forEach(button=>button.onclick=()=>{active=button.dataset.center;draw();});
  }
  function industrySelect(id,value='通用') { const resolved=industries.some(i=>i.code===value)?value:(id.includes('agent')||id.includes('upload')?'通用':'');return `<select class="select" id="${id}"><option value="">全部行业</option>${industries.map(i=>`<option value="${esc(i.code)}" ${selected(i.code,resolved)}>${esc(i.name)}</option>`).join('')}</select>`; }
  function regionSelect(id,value='全国') { return `<select class="select" id="${id}"><option value="全国">全国</option>${regions.map(r=>`<option ${selected(r,value)}>${r}</option>`).join('')}</select>`; }
  function lawTypeSelect(id,value='全部类型') { return `<select class="select" id="${id}"><option>全部类型</option>${lawTypes.map(t=>`<option ${selected(t,value)}>${t}</option>`).join('')}</select>`; }
  function metadata(reg,index) { const normalizeRegion=value=>value==='通用'||value==='制造业'||!value?'全国':value==='北京市'?'北京':value==='上海市'?'上海':value; if(reg.industry||reg.authority||reg.level)return {type:safeType(reg),authority:reg.authority||'待核验',level:reg.level||'国家/地方',effective:reg.status||'待核验',industry:industries.some(i=>i.code===reg.industry)?reg.industry:'通用',region:normalizeRegion(reg.scope),ref:reg.documentNo||'已上传法规'}; const item=regulatoryMeta[index];return item?{...item,type:safeType(reg),industry:'通用',region:normalizeRegion(item.region)}:{type:safeType(reg),authority:'待核验',level:'国家/地方',effective:reg.status||'待核验',industry:'通用',region:normalizeRegion(reg.scope),ref:'演示记录'}; }

  function lawsView() {
    const industryExpanded = expandedIndustry ? industries : industries.slice(0,12);
    const regionExpanded = expandedRegion ? regions : regions.slice(0,16);
    return `<div class="taxonomy-panel"><div class="taxonomy-row"><strong>行业</strong><div class="taxonomy-options" id="industry-chips"><button class="tax-chip active" data-industry="">通用</button>${industryExpanded.map(i=>`<button class="tax-chip" data-industry="${esc(i.code)}">${esc(i.name)}</button>`).join('')}</div><button class="expand-tax" data-expand="industry">${expandedIndustry?'收起':'展开'}⌄</button></div><div class="taxonomy-row"><strong>类型</strong><div class="taxonomy-options" id="type-chips"><button class="tax-chip active" data-type="全部类型">全部</button>${lawTypes.map(t=>`<button class="tax-chip" data-type="${t}">${t}</button>`).join('')}</div></div><div class="taxonomy-row"><strong>地区</strong><div class="taxonomy-options" id="region-chips"><button class="tax-chip active" data-region="全国">全国</button>${regionExpanded.map(r=>`<button class="tax-chip" data-region="${r}">${esc(r)}</button>`).join('')}</div><button class="expand-tax" data-expand="region">${expandedRegion?'收起':'展开'}⌄</button></div><div class="taxonomy-foot">行业类型、法规类型和地区分类按你提供的法规中心参考图配置。</div></div><div class="center-toolbar"><label class="center-search"><span>⌕</span><input id="law-search" placeholder="搜索法规名称、发布机关或关键词"/></label>${industrySelect('law-industry','')} ${lawTypeSelect('law-type')} ${regionSelect('law-region')}<button class="button" id="law-clear">重置筛选</button><span class="admin-mark">管理员模式 · 演示</span><button class="button primary" id="upload-law">↑ 上传法规</button></div><div class="center-result-head"><label><input type="checkbox" id="select-all-laws"/> 全选</label><span id="law-count">法规记录 ${state.regulations.length} 条</span><button class="text-action" id="download-laws">导出列表</button></div><div class="law-list" id="law-list"></div><div class="source-note">法规名称与状态仅为演示数据，尚未接入官方法规库。正式使用前需核验原文、版本、效力及属地适用性。分类参考：<a href="https://www.stats.gov.cn/sj/tjbz/gmjjhyfl/" target="_blank" rel="noreferrer">国家统计局行业分类</a></div>`;
  }

  function drawLaws() {
    const query=(el('law-search')?.value||'').trim().toLowerCase();
    const industry=el('law-industry')?.value||'';
    const type=el('law-type')?.value||'全部类型';
    const region=el('law-region')?.value||'全国';
    const rows=state.regulations.map((r,i)=>({r,m:metadata(r,i),i})).filter(({r,m})=>(!query||`${r.name} ${r.type} ${r.scope} ${m.authority}`.toLowerCase().includes(query))&&(!industry||m.industry===industry)&&(type==='全部类型'||m.type===type)&&(region==='全国'||m.region==='全国'||m.region===region));
    el('law-list').innerHTML=rows.length?rows.map(({r,m,i})=>`<article class="law-row"><input class="law-check" type="checkbox" data-law="${i}"/><div class="law-main"><div class="law-title-line"><h3 data-law-detail="${esc(r.id||r.name)}">${esc(r.name)}</h3><span class="law-type-tag">${esc(m.type)}</span>${r.fileName?'<span class="attachment-chip">含附件</span>':''}</div><div class="law-meta"><span>${esc(m.level)} · ${esc(m.authority)}</span><span>适用行业：${esc(m.industry)}</span><span>适用地区：${esc(m.region)}</span></div><div class="law-meta"><span>效力状态：${esc(m.effective)}</span><span>更新时间：${esc(r.updated||'待核验')}</span></div></div><button class="button law-action" data-use-law="${i}">生成检查项</button></article>`).join(''):'<div class="empty">没有匹配的法规记录</div>';
    el('law-count').textContent=`筛选结果 ${rows.length} 条 · 库内 ${state.regulations.length} 条`;
    document.querySelectorAll('[data-use-law]').forEach(b=>b.onclick=()=>{active='agent';draw(b.dataset.useLaw);});
    document.querySelectorAll('[data-law-detail]').forEach(b=>b.onclick=()=>{selectedLawId=b.dataset.lawDetail;active='detail';draw();});
    const all=el('select-all-laws'); if(all) all.onchange=()=>document.querySelectorAll('.law-check').forEach(c=>c.checked=all.checked);
    el('download-laws').onclick=()=>{const blob=new Blob([JSON.stringify(rows.map(x=>x.r),null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='法规库筛选结果.json';a.click();URL.revokeObjectURL(a.href);};
  }

  function detailView() {
    const law=state.regulations.find(item=>(item.id||item.name)===selectedLawId)||state.regulations.find(item=>item.name===selectedLawId);
    if(!law){active='laws';return lawsView();}
    const index=state.regulations.indexOf(law), meta=metadata(law,index), related=state.regulations.filter((item,i)=>i!==index&&safeType(item)===meta.type).slice(0,4);
    const preview=law.contentHtml?`<div class="law-document-text">${sanitizeContentHtml(law.contentHtml)}</div>`:law.content?`<div class="law-document-text">${esc(law.content).replace(/\n/g,'<br/>')}</div>`:law.filePath&&((law.fileMime||'').includes('pdf')||law.fileName?.toLowerCase().endsWith('.pdf'))?`<iframe class="law-pdf-viewer" src="/api/regulations/${encodeURIComponent(law.id)}/file?inline=1" title="${esc(law.name)} PDF 正文"></iframe>`:`<div class="document-unavailable"><span class="document-icon">▤</span><b>法规正文待补充</b><p>请管理员上传法规原文或附件。当前记录仅展示法规元数据，不包含经核验的正文内容。</p></div>`;
    return `<div class="detail-breadcrumb"><button class="text-action" id="back-laws">← 返回法规库</button><span>法规中心　/　详情</span></div><div class="detail-toolbar"><span>正文与附件</span><div><button class="button" id="favorite-law">${favorites.includes(law.id||law.name)?'★ 已收藏':'☆ 收藏'}</button>${law.filePath?`<a class="button primary" href="/api/regulations/${encodeURIComponent(law.id)}/file">↓ 下载</a>`:law.fileDataUrl?`<a class="button primary" href="${law.fileDataUrl}" download="${esc(law.fileName)}">↓ 下载</a>`:''}</div></div><div class="law-detail-layout"><main class="law-detail-main"><section class="detail-card law-overview"><h1>${esc(law.name)}</h1><div class="detail-rule"></div><div class="law-facts"><div><span>发布日期</span><b>${esc(law.publishDate||'待补充')}</b></div><div><span>施行日期</span><b>${esc(law.effectiveDate||'待补充')}</b></div><div><span>时效性</span><b>${esc(law.status||meta.effective)}</b></div><div><span>效力位阶</span><b>${esc(law.level||meta.level)}</b></div><div><span>法规类别</span><b>${esc(meta.type)}</b></div><div><span>修改依据</span><b>${esc(law.amendment||'—')}</b></div><div><span>发文字号</span><b>${esc(law.documentNo||'待补充')}</b></div><div><span>发布机关</span><b>${esc(law.authority||meta.authority)}</b></div><div><span>知识附件</span><b>${law.fileName?esc(law.fileName):'—'}</b></div><div><span>适用地区</span><b>${esc(law.scope||meta.region)}</b></div></div></section><section class="detail-card attachment-section"><h3>附件</h3>${law.fileName?`<a class="attachment-link" href="/api/regulations/${encodeURIComponent(law.id)}/file">▤　${esc(law.fileName)} <small>${esc(law.fileMime||'法规附件')} · 下载</small></a>`:'<div class="attachment-empty">暂无附件</div>'}</section><section class="detail-card article-section"><h3>详情</h3><div class="detail-rule"></div><h2>${esc(law.name)}</h2>${preview}</section></main><aside class="law-citations"><h2>引用</h2><section class="citation-card"><h3>⚖　引用法规 (${related.length})</h3>${related.map(r=>`<button data-related="${esc(r.id||r.name)}">·　${esc(r.name)}</button>`).join('')||'<p>暂无关联法规</p>'}</section><section class="citation-card citation-empty"><h3>▤　引用标准 (0)</h3></section><section class="citation-card citation-empty"><h3>▣　引用案例 (0)</h3></section><section class="citation-card citation-empty"><h3>▤　引用知识 (0)</h3></section><button class="button primary citation-agent" id="detail-agent">将法规转为检查项</button></aside></div>`;
  }

  function sanitizeContentHtml(html) {
    const doc=new DOMParser().parseFromString(`<div>${html||''}</div>`,'text/html'), allowed=new Set(['P','BR','HR','H1','H2','H3','BLOCKQUOTE','UL','OL','LI','STRONG','B','EM','I','U','S','A','SPAN','FONT','PRE','CODE','DIV']);
    const clean=node=>{for(const child of [...node.children]){if(!allowed.has(child.tagName)){child.replaceWith(doc.createTextNode(child.textContent));continue;}for(const attr of [...child.attributes])if(!['href','size','color','face'].includes(attr.name))child.removeAttribute(attr.name);if(child.tagName==='A'&&child.hasAttribute('href')&&!/^https?:|^mailto:/i.test(child.getAttribute('href')))child.removeAttribute('href');clean(child);}};
    const root=doc.body.firstElementChild;clean(root);return root.innerHTML;
  }
  function markdownToHtml(markdown) {
    const inline=s=>esc(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>').replace(/~~(.+?)~~/g,'<s>$1</s>');
    let mode='',items=[];const out=[],flush=()=>{if(items.length){out.push(`<${mode}>${items.map(x=>`<li>${inline(x)}</li>`).join('')}</${mode}>`);items=[];mode='';}};
    for(const raw of markdown.replace(/\r/g,'').split('\n')){const line=raw.trim();let m;if(!line){flush();continue;}if((m=line.match(/^([-*+] |\d+\. )(.*)$/))){const next=/^\d/.test(m[1])?'ol':'ul';if(mode!==next)flush();mode=next;items.push(m[2]);continue;}flush();if((m=line.match(/^(#{1,3})\s+(.+)$/)))out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`);else if((m=line.match(/^>\s?(.*)$/)))out.push(`<blockquote>${inline(m[1])}</blockquote>`);else if(/^---+$/.test(line))out.push('<hr>');else out.push(`<p>${inline(line)}</p>`);}flush();return out.join('');
  }
  function uploadView() {
    return `<div class="upload-page"><div class="upload-page-top"><button class="text-action" id="cancel-upload">← 返回法规库</button><span class="admin-mark">管理员模式 · 演示身份</span></div><div class="upload-page-heading"><div><div class="eyebrow">REGULATION LIBRARY</div><h1>上传法规</h1><p>录入法规信息、上传原文并整理可读正文摘录。</p></div><button class="button primary" id="save-law">保存法规</button></div><div class="upload-page-grid"><section class="upload-section"><div class="upload-section-heading"><b>基本信息</b><span>法规元数据</span></div><div class="upload-fields"><label class="upload-name-field">法规名称<input id="upload-name" required placeholder="输入法规全称"/></label><label>发文字号<input id="upload-no" placeholder="例如：浙人大常〔2025〕XX号"/></label><label>法规类型<select id="upload-type">${lawTypes.map(t=>`<option>${t}</option>`).join('')}</select></label><label>效力位阶<select id="upload-level"><option>国家法律</option><option>行政法规</option><option>部门规章</option><option>地方性法规</option><option>地方政府规章</option><option>国家标准</option><option>行业标准</option></select></label><label>适用行业${industrySelect('upload-industry','通用')}</label><label>适用地区${regionSelect('upload-region','全国')}</label><label>发布机关<input id="upload-authority" placeholder="发布/制定机关"/></label><label>施行日期<input id="upload-date" type="date"/></label><label class="upload-file-field">法规文件<input id="upload-file" type="file" accept=".pdf,.docx,.txt,.md"/><small>支持 PDF、DOCX、TXT、MD，单文件最大 12 MB。选择 MD 文件会自动载入正文。</small></label></div><p class="upload-warning">法规有效性和适用范围需管理员人工核验；当前系统尚未接入真实账号权限。</p></section><section class="upload-section excerpt-section"><div class="upload-section-heading"><b>正文摘录</b><span>支持 Markdown 导入与格式编辑</span></div><div class="editor-toolbar"><button type="button" data-command="bold" title="粗体"><b>B</b></button><button type="button" data-command="italic" title="斜体"><i>I</i></button><button type="button" data-command="underline" title="下划线"><u>U</u></button><i></i><button type="button" data-block="h1" title="一级标题">H1</button><button type="button" data-block="h2" title="二级标题">H2</button><button type="button" data-block="p" title="正文">正文</button><button type="button" data-command="insertUnorderedList" title="项目符号列表">• 列表</button><button type="button" data-command="insertOrderedList" title="编号列表">1. 列表</button><button type="button" data-command="formatBlock" data-value="blockquote" title="引用">❞ 引用</button><i></i><label>字号<select id="editor-size"><option value="3">默认</option><option value="2">小</option><option value="4">大</option><option value="5">特大</option></select></label><button type="button" data-command="removeFormat" title="清除格式">清除</button><label class="md-import">导入 MD<input id="md-import" type="file" accept=".md,.markdown,text/markdown" hidden></label></div><div id="upload-editor" class="upload-editor" contenteditable="true" data-placeholder="粘贴法规条文，或使用“导入 MD”读取 Markdown 文件"></div><div class="editor-foot"><span>正文摘录将随法规记录保存并显示在详情页</span><span id="editor-count">0 字</span></div><div class="upload-page-actions"><button class="button" id="cancel-upload-bottom">取消</button><button class="button primary" id="save-law-bottom">保存法规</button></div></section></div></div>`;
  }
  function bindUploadPage() {
    const editor=el('upload-editor');const cancel=()=>{active='laws';draw();};el('cancel-upload').onclick=cancel;el('cancel-upload-bottom').onclick=cancel;
    const count=()=>el('editor-count').textContent=`${editor.innerText.trim().length} 字`;editor.oninput=count;
    document.querySelectorAll('.editor-toolbar [data-command]').forEach(button=>button.onclick=()=>{editor.focus();document.execCommand(button.dataset.command,false,button.dataset.value||null);count();});
    document.querySelectorAll('.editor-toolbar [data-block]').forEach(button=>button.onclick=()=>{editor.focus();document.execCommand('formatBlock',false,button.dataset.block);count();});
    el('editor-size').onchange=event=>{editor.focus();document.execCommand('fontSize',false,event.target.value);event.target.value='3';};
    const readMarkdown=async file=>{if(file.size>12*1024*1024)return alert('文件大小不能超过 12 MB');editor.innerHTML=markdownToHtml(await file.text());count();};
    el('md-import').onchange=e=>{if(e.target.files[0])readMarkdown(e.target.files[0]);};
    el('upload-file').onchange=e=>{const file=e.target.files[0];if(file?.name.toLowerCase().endsWith('.md'))readMarkdown(file);};
    const saveLaw=async()=>{const name=el('upload-name').value.trim(),file=el('upload-file').files[0];if(!name)return alert('请填写法规名称');if(file&&file.size>12*1024*1024)return alert('文件大小不能超过 12 MB');let fileData;if(file)fileData=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result).split(',')[1]);reader.onerror=reject;reader.readAsDataURL(file);});const ind=industries.find(x=>x.code===el('upload-industry').value),contentHtml=sanitizeContentHtml(editor.innerHTML),content=editor.innerText.trim();const item={id:`LAW-${Date.now()}`,name,documentNo:el('upload-no').value.trim(),type:el('upload-type').value,level:el('upload-level').value,industry:ind.code,industryName:ind.name,scope:el('upload-region').value,authority:el('upload-authority').value.trim()||'待核验',publishDate:'待补充',effectiveDate:el('upload-date').value||'待补充',status:'待核验',updated:new Date().toISOString().slice(0,10),...(file?{fileName:file.name,fileMime:file.type||'application/octet-stream',fileData}:{}),content,contentHtml};try{const response=await fetch('/api/regulations',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(item)});if(!response.ok)throw new Error((await response.json()).error||'保存失败');const saved=await response.json();delete saved.fileData;state.regulations.unshift(saved);save();active='laws';draw();}catch(error){alert(`法规保存失败：${error.message}`);}};el('save-law').onclick=saveLaw;el('save-law-bottom').onclick=saveLaw;
  }

  function templatesView() {
    return `<div class="library-toolbar"><div><h3>检查模板</h3><p>每个模板包含逐项核查方法、合格标准、现场证据和法规来源。</p></div><button class="button primary" id="open-agent">✳ 从法规生成模板</button></div><div class="center-toolbar">${industrySelect('template-industry','')} ${lawTypeSelect('template-type')} ${regionSelect('template-region','全国')}<label class="center-search"><span>⌕</span><input id="template-search" placeholder="搜索模板名称或法规来源"/></label></div><div class="template-list" id="template-grid"></div><div class="source-note">演示模板需结合企业工艺和适用法规审核后使用，不替代法定标准或专业判断。</div>`;
  }
  function drawTemplates() {
    const query=(el('template-search')?.value||'').trim().toLowerCase(), industry=el('template-industry')?.value||'', type=el('template-type')?.value||'全部类型', region=el('template-region')?.value||'全国';
    const rows=templates.filter(t=>(!query||`${t.name} ${t.source}`.toLowerCase().includes(query))&&(!industry||industry===t.industry)&&(type==='全部类型'||type===t.type)&&(region==='全国'||region===t.region||t.region==='全国'));
    el('template-grid').innerHTML=rows.map(t=>`<article class="template-row"><div class="template-row-main"><span class="law-type-tag">${esc(t.type)}</span><h3>${esc(t.name)}</h3><span class="pill ${t.status==='已发布'?'done':'neutral'}">${esc(t.status)}</span><small>${esc(t.industryName||t.industry)} · ${esc(t.region)} · ${t.items.length} 个检查细则</small><small class="template-row-source">依据：${esc(t.source)}</small></div><button class="button" data-template="${esc(t.id)}">查看检查细则 <span>→</span></button></article>`).join('')||'<div class="empty">没有匹配的模板</div>';
    document.querySelectorAll('[data-template]').forEach(b=>b.onclick=()=>showTemplate(b.dataset.template));
  }
  function showTemplate(id) {
    if(!templates.some(x=>x.id===id))return;selectedTemplateId=id;active='template-detail';draw();
  }

  function templateDetailView() {
    const t=templates.find(x=>x.id===selectedTemplateId);if(!t){active='templates';return templatesView();}
    return `<div class="detail-breadcrumb"><button class="text-action" id="back-templates">← 返回模板检查库</button><span>${esc(t.industryName||t.industry)}　/　${esc(t.region)}</span></div><div class="template-detail-heading"><div><span class="law-type-tag">${esc(t.type)}</span><h2>${esc(t.name)}</h2><p>适用行业：${esc(t.industryName||t.industry)}　·　适用地区：${esc(t.region)}　·　依据：${esc(t.source)}</p></div><button class="button primary" id="run-template">用此模板创建检查</button></div><div class="template-detail-toolbar"><b>检查细则 <span>${t.items.length}</span></b><small>逐项记录现场结果与证据；不符合项可转为整改任务</small></div><div class="checklist-detail">${t.items.map((it,i)=>`<article class="check-spec"><div class="check-spec-number">${String(i+1).padStart(2,'0')}</div><div class="check-spec-body"><div class="check-spec-heading"><span>${esc(it.category||'检查项')}</span><span class="risk ${it.risk==='高'?'high':it.risk==='低'?'low':'medium'}">${esc(it.risk||'中')}风险</span></div><h3>${esc(it.text)}</h3>${renderCheckSkillDetails(it)}${it.sourceQuote?`<blockquote class="source-quote">${esc(it.sourceQuote)}</blockquote>`:''}<div class="check-spec-grid"><div><b>核查方法</b><p>${esc(it.method||'对照现场设施、记录和相关要求进行核查，并记录发现。')}</p></div><div><b>合格判定标准</b><p>${esc(it.criteria||'现场状态符合适用法规要求，无缺失、失效或未受控情形。')}</p></div><div><b>建议留存证据</b><p>${esc(it.evidence||'现场照片、检查记录及必要的设备/培训资料')}</p></div><div><b>依据来源</b><p>${esc(it.source||t.source)}</p></div></div></div></article>`).join('')}</div><div class="template-detail-footer"><span>检查结果选择“不符合”后，可登记责任人、期限并进入整改跟踪。</span><button class="button primary" id="run-template-bottom">创建现场检查任务</button></div>`;
  }

  function agentView(regIndex, regionValue) {
    const chosen=Number.isInteger(Number(regIndex))?Number(regIndex):0;
    const reg=state.regulations[chosen]||state.regulations[0];
    const meta=metadata(reg,chosen);
    return `<div class="agent-workspace"><aside class="agent-setup"><div class="agent-step"><span>01</span><div><b>选择法规依据</b><small>从法规库选择适用要求</small></div></div><label class="field"><span>法规/标准</span><select id="agent-law">${state.regulations.map((r,i)=>`<option value="${i}" ${selected(i,chosen)}>${esc(r.name)}</option>`).join('')}</select></label><label class="field"><span>行业分类 · GB/T 4754-2017</span>${industrySelect('agent-industry',meta.industry||'C')}</label><label class="field"><span>适用地区</span>${regionSelect('agent-region',regionValue||meta.region||'全国')}</label><label class="field"><span>企业/工艺补充说明</span><textarea id="agent-context" placeholder="填写实际工艺、设备、物料及本次作业，例如：焊装线本班检修，有承包商进场；防护门故障尚未修复"></textarea></label><button class="button primary generate-button" id="generate-items">生成检查项 <span>→</span></button><div class="agent-disclaimer">由配置的大模型生成建议；法规正文和适用性需 EHS 专业人员复核。</div></aside><section class="agent-conversation"><div class="agent-step"><span>02</span><div><b>法规要求转成企业检查项</b><small>每项保留来源与证据要求，可编辑后保存为模板</small></div></div><div class="chat-message agent-message"><div class="agent-avatar">✳</div><div><b>合规助手</b><p>选择适用法规和行业场景后，我会拆解义务要求，优先关注实际作业与关键防护，生成逐项可判定的检查内容、证据和整改复查要点。</p></div></div><div id="generated-area"><div class="agent-empty"><span>01</span><b>选择法规后生成检查项</b><small>结果会展示法规依据与建议证据</small></div></div><div class="agent-prompt"><textarea id="agent-prompt" placeholder="补充企业特有工艺、设备或现场场景…"></textarea><button class="icon-send" id="prompt-generate" title="生成检查项" aria-label="生成检查项">↑</button></div></section></div>`;
  }
  async function generateItems() {
    const lawIndex=Number(el('agent-law').value),law=state.regulations[lawIndex],meta=metadata(law,lawIndex),context=el('agent-context').value.trim(),industryCode=el('agent-industry').value,industry=industries.find(x=>x.code===industryCode),button=el('generate-items');
    if(!law)return alert('请先选择法规');button.disabled=true;button.textContent='模型正在生成…';['agent-law','agent-industry','agent-region','agent-context','agent-prompt','prompt-generate'].forEach(id=>el(id).disabled=true);
    let items, generation;
    try{const response=await fetch('/api/agent/generate-check-items',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({law:{id:law.id,name:law.name},industry:industry.name,region:el('agent-region').value,context})});const result=await response.json();if(!response.ok)throw new Error(result.error||'模型请求失败');generation=result;items=result.items.map((it,i)=>({...it,id:`AI-${Date.now()}-${i}`,source:`${law.name} · ${it.source||'需人工核对'}`,status:'待检查',selected:true}));}
    catch(error){el('generated-area').innerHTML=`<div class="generation-warning" role="alert"><b>生成失败</b><p>${esc(error.message)}</p><p>请确认法规、地区及企业说明后重试。</p></div>`;return;}
    finally{['agent-law','agent-industry','agent-region','agent-context','agent-prompt','prompt-generate'].forEach(id=>el(id).disabled=false);button.disabled=false;button.innerHTML='生成检查项 <span>→</span>';}
    if(!items.length){
      el('generated-area').innerHTML=`<div class="generation-warning" role="status"><b>本次未生成可用检查项</b><p>${esc(generation.reason||'请查看下面的原因，补充后可重新生成。')}</p></div>${(generation.warnings||[]).map(w=>`<div class="generation-warning">${esc(w)}</div>`).join('')}${generation.rejectedItems?.length?`<details class="generation-warning" open><summary>未通过校验的原因</summary><ul>${generation.rejectedItems.map(item=>`<li>第 ${esc(item.index)} 项：${esc(item.reason)}</li>`).join('')}</ul></details>`:''}${generation.requiredInformation?.length?`<div class="generation-warning"><b>待补充资料</b><ul>${generation.requiredInformation.map(value=>`<li>${esc(value)}</li>`).join('')}</ul></div>`:''}`;
      return;
    }
    el('generated-area').innerHTML=`<div class="generated-source"><span>模型生成 · 引用依据</span><b>${esc(law.name)}</b><small>${esc(meta.authority)} · ${esc(meta.region)} · ${esc(industry.name)} · ${esc(el('agent-region').value)} · 已读取库内正文 ${esc(generation.source.contentLength)} 字</small></div>${(generation.warnings||[]).map(w=>`<div class="generation-warning" role="status">${esc(w)}</div>`).join('')}${generation.contextSummary?`<div class="generated-source"><b>本次场景</b><p>${esc(generation.contextSummary)}</p></div>`:''}${[['待补充资料',generation.requiredInformation],['尚未覆盖的义务',generation.uncoveredObligations]].map(([label,values])=>values?.length?`<div class="generation-warning"><b>${label}</b><ul>${values.map(value=>`<li>${esc(value)}</li>`).join('')}</ul></div>`:'').join('')}<div class="generated-list">${items.map((it,i)=>`<article class="generated-item"><input type="checkbox" ${it.applicability==='条件适用'?'':'checked'} data-generated="${i}" id="generated-${i}"/><div><div class="generated-item-title"><b>${String(i+1).padStart(2,'0')}</b><strong>${esc(it.text)}</strong><span class="risk ${it.risk==='高'?'high':it.risk==='低'?'low':'medium'}">${esc(it.risk)}风险</span></div><p><b>核查方法：</b>${esc(it.method||'待补充')}<br/><b>合格标准：</b>${esc(it.criteria||'待补充')}<br/><b>建议证据：</b>${esc(it.evidence||'待补充')}</p>${renderCheckSkillDetails(it)}<small>来源：${esc(it.source)}</small><blockquote class="source-quote">${esc(it.sourceQuote)}</blockquote><div class="item-applicability"><b>${esc(it.applicability)}</b> · 义务主体：${esc(it.obligationSubject)}<p>${esc(it.applicabilityReason)}</p>${it.applicability==='条件适用'?'<small>确认企业满足上述适用条件后再勾选此项。</small>':''}</div><label class="result-select">检查结果 <select data-result="${i}"><option>待检查</option><option>符合</option><option>不符合</option><option>不适用</option><option>待核验</option></select></label></div></article>`).join('')}</div><div class="generated-actions"><button class="button" id="save-template">保存为检查模板</button><button class="button" id="create-check">创建现场检查任务</button><button class="button primary" id="create-issues">将不符合项转为整改任务 <span id="nonconform-count">0</span></button></div><div class="flow-caption">法规要求 <span>→</span> 企业检查项 <span>→</span> 检查结果 <span>→</span> 整改任务</div>`;
    const picked=()=>items.filter((_,i)=>document.querySelector(`[data-generated="${i}"]`)?.checked);
    el('create-check').onclick=()=>{const selectedItems=picked();if(!selectedItems.length)return alert('请至少选择一条检查项');const check={id:`CHK-${Date.now()}`,title:`${law.name} · 合规检查`,site:`${el('agent-region').value} · 全厂区`,owner:'林安',date:new Date().toISOString().slice(0,10),status:'待开始',progress:'0%',items:selectedItems.length,templateId:null,checkItems:selectedItems.map(({status,selected,...item})=>({...item,result:'待检查',note:'',evidenceNote:''}))};state.checks.unshift(check);save();goChecks();};
    el('save-template').onclick=()=>{const selectedItems=picked();if(!selectedItems.length)return alert('请至少选择一条检查项');const name=`${industry.name}${meta.type}合规检查`;state.templates.unshift({id:`TPL-${Date.now()}`,name,industry:industry.code,industryName:industry.name,type:meta.type,region:el('agent-region').value,status:'草稿',updated:new Date().toISOString().slice(0,10),source:law.name,items:selectedItems.map(({status,selected,...item})=>({...item,result:'待检查'}))});templates=[...templateSeed,...state.templates];save();active='templates';draw();};
    const updateCount=()=>{const count=items.filter((_,i)=>el(`result-${i}`)?.value==='不符合'&&el(`generated-${i}`)?.checked).length;el('nonconform-count').textContent=count;};
    document.querySelectorAll('[data-result]').forEach(s=>{s.id=`result-${s.dataset.result}`;s.onchange=updateCount;});
    el('create-issues').onclick=()=>{const failed=items.filter((_,i)=>el(`result-${i}`)?.value==='不符合'&&el(`generated-${i}`)?.checked);if(!failed.length)return alert('请先把检查项结果设为“不符合”，并勾选要转为整改的项目');for(const [i,it] of failed.entries())state.issues.unshift({id:`R-${Date.now()}-${i}`,title:it.text,category:meta.type,location:el('agent-region').value, risk:it.risk,owner:'待分配',deadline:new Date(Date.now()+7*86400000).toISOString().slice(0,10),status:'待整改',sourceLaw:law.name,evidence:it.evidence});save();document.querySelector('#generated-area').insertAdjacentHTML('beforeend',`<div class="success-inline">已生成 ${failed.length} 条整改任务，可在「整改闭环」中分派责任人和跟踪进度。</div>`);};
  }

  function draw(regIndex) {
    const content=active==='upload'?uploadView():active==='laws'?lawsView():active==='templates'?templatesView():active==='template-detail'?templateDetailView():active==='detail'?detailView():agentView(regIndex);
    shell(content);
    if(active==='upload'){
      bindUploadPage();
    } else if(active==='laws'){
      drawLaws();
      ['law-search','law-industry','law-type','law-region'].forEach(id=>{const n=el(id);n.oninput=drawLaws;n.onchange=drawLaws;});
      document.querySelectorAll('[data-expand]').forEach(b=>b.onclick=()=>{if(b.dataset.expand==='industry')expandedIndustry=!expandedIndustry;else expandedRegion=!expandedRegion;draw();});
      document.querySelectorAll('[data-industry]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-industry]').forEach(x=>x.classList.remove('active'));b.classList.add('active');el('law-industry').value=b.dataset.industry;drawLaws();});
      document.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-type]').forEach(x=>x.classList.remove('active'));b.classList.add('active');el('law-type').value=b.dataset.type;drawLaws();});
      document.querySelectorAll('[data-region]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-region]').forEach(x=>x.classList.remove('active'));b.classList.add('active');el('law-region').value=b.dataset.region;drawLaws();});
      el('law-clear').onclick=()=>{el('law-search').value='';el('law-industry').value='';el('law-type').value='全部类型';el('law-region').value='全国';drawLaws();};
      el('upload-law').onclick=()=>{active='upload';draw();};
    } else if(active==='templates') {
      drawTemplates();['template-search','template-industry','template-type','template-region'].forEach(id=>{el(id).oninput=drawTemplates;el(id).onchange=drawTemplates;});el('open-agent').onclick=()=>{active='agent';draw();};
    } else if(active==='template-detail') {
      el('back-templates').onclick=()=>{active='templates';draw();};const run=()=>{const t=templates.find(x=>x.id===selectedTemplateId);state.checks.unshift({id:`CHK-${Date.now()}`,title:t.name,site:`${t.region} · 全厂区`,owner:'林安',date:new Date().toISOString().slice(0,10),status:'待开始',progress:'0%',items:t.items.length,templateId:t.id,checkItems:structuredClone(t.items).map(item=>({...item,result:'待检查',note:'',evidenceNote:'',attachments:[]}))});save();goChecks();};el('run-template').onclick=run;el('run-template-bottom').onclick=run;
    } else if(active==='detail') {
      el('back-laws').onclick=()=>{active='laws';draw();};el('favorite-law').onclick=()=>{if(favorites.includes(selectedLawId))favorites=favorites.filter(x=>x!==selectedLawId);else favorites.push(selectedLawId);localStorage.setItem('ehs-law-favorites',JSON.stringify(favorites));draw();};el('detail-agent').onclick=()=>{const i=state.regulations.findIndex(r=>(r.id||r.name)===selectedLawId);active='agent';draw(i,metadata(state.regulations[i],i).region);};document.querySelectorAll('[data-related]').forEach(b=>b.onclick=()=>{selectedLawId=b.dataset.related;draw();});
    } else {
      el('agent-industry').closest('.field').querySelector('span').textContent='行业类型';
      el('agent-law').onchange=()=>draw(el('agent-law').value);['agent-industry','agent-region','agent-context'].forEach(id=>el(id).addEventListener('change',()=>{el('generated-area').innerHTML='';}));el('generate-items').onclick=generateItems;el('prompt-generate').onclick=()=>{el('agent-context').value=el('agent-prompt').value;generateItems();};
    }
  }
  draw();
}
