# EHS Loop

制造业 EHS 现场检查与整改闭环系统的第一阶段生产化骨架。

## 本地运行

```bash
npm start
```

打开 <http://localhost:4173>。服务同时托管 `dist/` 静态前端和 `/api` 数据接口，演示数据首次启动时写入 `data/ehs.json`。

## API

- `GET /api/health`
- `GET /api/checks`
- `POST /api/checks`
- `GET /api/issues`
- `PATCH /api/issues/:id`
- `GET /api/regulations`
- `POST /api/agent/generate-check-items`

## 法规检查助手 Skill

后端每次生成时读取 `skills/ehs-law-to-checks/SKILL.md` 和 `references/examples.md`，作为模型系统指令。运行目录需完整部署 `skills/ehs-law-to-checks/`；文件缺失或为空时明确报错，不退回旧提示词。后续规则更新以该运行目录为准，`deliverables/` 中的草案仅用于历史评审。

接口仍从库内读取所选法规全文，并传入行业、地区、企业补充说明及库内版本信息。模型输出需要包含适用条件、检查优先级及理由、依据关系及说明、检查方法、判定标准、证据、整改方向、复查要点；不满足字段约定或引文核验的项目会被排除并返回提示。检查优先级与风险字段独立，生成结果统一初始化为“待检查”。

后端为完整法规的全部条文段落提供 `citationId`，按企业说明优先排列相关段落；未填写说明时也能使用原文编号；模型选择段落后，条号和原文由后端绑定，避免抄写或拼接错误。段落编号不代表适用性已经确认，完整法规仍传入模型。结果全部被校验排除时，携带错误原因纠正重试一次。

返回结果还包括 `contextSummary`、`requiredInformation`、`uncoveredObligations` 和 `skill`。页面展示这些信息，保存模板、创建现场检查时保留新增字段。现场“待核验”不计入已完成检查。

当前企业上下文来自页面的企业/工艺补充说明，尚未自动检索企业资料库或外部技术标准。Skill 接入与字段、引用校验不等于对生成内容完成专业合规审核，使用前仍需结合真实现场复核。

当前使用 JSON 文件作为开发期持久化适配器，接口边界可直接替换为 PostgreSQL 仓储。正式上线前应接入认证、组织隔离、对象存储和审计日志。
