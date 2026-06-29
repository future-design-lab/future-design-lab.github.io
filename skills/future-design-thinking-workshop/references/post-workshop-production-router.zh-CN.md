# Future Design 后期方案呈现 Skill 路由文档

本文件用于连接 Future Design Thinking Workshop 的前期产出和后期方案呈现。学生完成 `Future Signals -> STEEP -> Local Challenge -> Interpretation -> Provotyping Card -> Tomorrow Headline -> Backcasting -> Final Proposal` 之后，可以根据自己要交付的作品类型选择后续 skill。

核心原则：先完成方案逻辑，再选择媒介。不要为了做 PPT、视频或效果图而重新发散主题；所有后期产出都必须读取并延续前期工作坊产物。

## 0. 进入后期前必须准备的输入包

在调用任何后期 skill 前，先让 AI 整理一份“方案呈现输入包”。建议格式：

```text
项目名称：
一句话概念：
目标未来年份：
目标用户 / 利益相关者：
本地挑战：
未来信号：
核心洞察 / Interpretation：
方案机制：
关键场景：
风险与伦理：
Backcasting 路线：
需要呈现的媒介：PPT / 文档 / 效果图 / 原型 / 图纸 / 故事板 / 视频 / 网站 / 展览物料
现有素材：图片、草图、参考风格、品牌色、课程要求、页数/时长/尺寸
```

如果这份输入包不完整，先回到 `future-design-thinking-workshop` 补齐，不要直接进入制作。

## 1. 总体选择表

| 学生想做什么 | 优先调用 | 是否需要下载 | 适合阶段 | 主要输入 | 主要产物 |
| --- | --- | --- | --- | --- | --- |
| 完整答辩 PPT / 路演 Deck | `Presentations` / `magic-slide` | 通常不需要 | 方案逻辑已稳定后 | 输入包、页数、风格、是否有模板 | `.pptx` 或 HTML 演示 |
| 项目文档 / 设计报告 / 提案书 | `documents` | 通常不需要 | PPT 之前或之后 | 输入包、报告结构、课程格式 | `.docx` / PDF |
| 效果图 / 未来场景图 / 产品图 | `imagegen` | 不需要 | 概念、场景和风格明确后 | 场景描述、构图、比例、参考图 | PNG/JPG 视觉图 |
| 视频、宣传片、分镜动画 | `xyq-nest-skill` 或视频生成类 skill | 当前本地已可用；其他第三方需验证 | 故事板完成后 | 镜头脚本、风格、时长、旁白 | 视频 / 动画片段 |
| 交互原型 / 网站原型 / App 原型 | 前端实现 + `playwright` / `playwright-interactive` | `playwright` 已安装 | 用户流程和关键界面明确后 | 用户任务、页面结构、交互规则 | HTML 原型 / Web App |
| Figma 设计稿 / 设计系统 | OpenAI curated Figma skills | 需要安装 | 需要协作编辑或交付 Figma 文件时 | 页面列表、组件、品牌风格 | Figma 文件 / 组件库 |
| 图纸 / 服务蓝图 / 系统图 / 用户旅程 | `documents` / HTML / Mermaid / imagegen | 通常不需要 | 机制和服务流程明确后 | 流程、角色、触点、空间关系 | 图表、蓝图、图纸页 |
| 故事板 / 使用情境漫画 | `imagegen` + 文档/PPT | 不需要 | 场景脚本完成后 | 角色、场景、镜头、文字 | 分镜图、故事板 PDF/PPT |
| 数据表、路线图、预算、评估表 | `spreadsheets` | 通常不需要 | Backcasting 和执行计划阶段 | 时间线、角色、指标、成本 | `.xlsx` |
| 原型部署 / 作品网页发布 | `vercel-deploy` / `netlify-deploy` / `render-deploy` / `cloudflare-deploy` | 需要安装 | HTML 原型已经可运行后 | 项目文件、部署目标 | 可访问链接 |
| 语音旁白 / 访谈转写 | `speech` / `transcribe` | 可从 curated 安装 | 视频或研究材料整理阶段 | 脚本、音频/视频文件 | 音频 / 转写文本 |

## 2. 常用本地 skill 路由

这些是当前环境里已经可用或随运行时提供的能力，学生可以直接用自然语言调用，不一定需要手动安装。

### 2.1 PPT / 路演 Deck

优先用：`Presentations`

什么时候用：
- 需要提交 `.pptx`。
- 需要答辩、路演、课程汇报。
- 已经有课程模板或参考 PPT，需要沿用版式。

调用方式示例：

```text
用 Presentations skill，把我的 Future Design 方案做成 12 页答辩 PPT。请先读取方案输入包，结构包括：问题背景、未来信号、洞察、方案机制、用户场景、明日头条、Backcasting、风险与下一步实验。风格要简洁、未来感、适合课程答辩。
```

需要先准备：
- 方案呈现输入包。
- 页数或时长。
- 是否有模板。
- 是否需要中文、英文或双语。
- 是否需要插入效果图、图表、故事板。

质量检查：
- 每页只讲一个重点。
- 不要把工作坊所有文字原样塞进 PPT。
- 需要把 `STEEP / Interpretation / Backcasting` 转成视觉结构。

备选：`magic-slide`

适合：
- 想快速做 HTML 演示。
- 希望有轻量转场和网页预览。
- 不一定需要 `.pptx` 文件。

### 2.2 项目文档 / 设计报告 / 提案书

优先用：`documents`

什么时候用：
- 需要正式项目文档、设计报告、提案书、研究总结。
- 需要 `.docx`，之后可导出 PDF。
- 需要结构化写清楚方法、过程、产物和最终方案。

调用方式示例：

```text
用 documents skill，把这个 Future Design 项目整理成一份中文项目报告。请包含：摘要、研究背景、未来信号、STEEP 分析、本地挑战、未来解释、方案说明、用户场景、Backcasting、风险伦理、下一步实验。格式要适合课程提交。
```

建议报告结构：
1. 封面与摘要
2. 设计问题与研究语境
3. Future Signals
4. STEEP 分析
5. Local Challenge
6. Interpretation
7. Provotyping Card / 方案概念
8. Tomorrow Headline
9. 用户场景与服务流程
10. Backcasting 路线
11. 风险、伦理与假设
12. 迭代计划

### 2.3 效果图 / 场景图 / 产品图 / 海报

优先用：`imagegen`

什么时候用：
- 需要未来生活场景图。
- 需要产品外观、服务触点、空间氛围、海报、头图、概念视觉。
- 需要把抽象方案变成可以被观看和讨论的图像。

调用方式示例：

```text
用 imagegen 生成一张 2040 年北京中小学 AI 学科增强课堂的未来场景图。画面需要有学生、教师大屏、AI 协作记录、家长可读的学习证据卡界面。风格简洁高级、真实可信、课程展示用，16:9。
```

建议每个项目至少生成：
- 一张未来场景主视觉。
- 一张产品/服务界面效果图。
- 一张用户使用情境图。
- 一张宣传海报或明日头条图。

注意：
- 图像提示词必须来自方案机制和用户场景，不要只写“未来感、高科技”。
- 如果图里包含文字，尽量让文字短、明确；复杂文字交给 PPT 或文档排版。

### 2.4 交互原型 / 网站原型 / App 原型

优先用：前端实现 + `playwright` / `playwright-interactive`

什么时候用：
- 学生需要展示“这个服务怎么被使用”。
- 需要点击、切换、填写、浏览、选择等交互。
- 方案是平台、App、仪表盘、教育工具、公共服务系统。

调用方式示例：

```text
基于我的 Future Design 方案，做一个可点击的 HTML 交互原型。用户流程包括：首页介绍、用户选择、AI 学科任务、学习过程记录、能力证据卡、家长报告。请用 playwright 检查不同屏幕比例下是否美观可用。
```

建议流程：
1. 先用 `future-design-thinking-workshop` 确认方案机制和用户旅程。
2. 让 AI 生成信息架构和关键页面列表。
3. 生成 HTML/CSS/JS 原型。
4. 用 `playwright` 检查桌面、移动端、窄屏预览。
5. 修正布局、交互和文字。
6. 需要发布时，再安装部署类 skill。

可选辅助：
- `taste-design`：强化视觉系统和高级感。
- `emil-design-eng`：打磨 UI 细节、交互和微动效。
- `smooth-ui-animation` / `gsap-motion`：做动效。
- `animation-performance`：检查动画性能。

### 2.5 视频 / 宣传片 / 分镜动画

优先用：`xyq-nest-skill`

什么时候用：
- 需要生成宣传视频、概念短片、未来新闻片段、故事板动画。
- 需要用图生视频、文生视频、续写镜头、复刻风格。
- 需要把未来方案变成“可感知的叙事”。

调用方式示例：

```text
用 xyq-nest-skill，把我的方案做成 60 秒未来教育宣传视频。请先生成 6 个镜头的分镜脚本，每个镜头包含画面、旁白、字幕和转场，再根据分镜生成视频素材。
```

视频前必须先有：
- 一句话概念。
- 目标观众。
- 3-6 个关键场景。
- 每个场景要传达的信息。
- 风格参考和时长。

推荐视频结构：
1. 问题冲突：现在的痛点。
2. 未来变化：信号带来的新可能。
3. 方案出现：核心产品/服务。
4. 用户体验：一个人如何使用。
5. 系统影响：学校、社区、政府、企业如何协作。
6. 结尾主张：未来愿景与行动号召。

### 2.6 故事板 / 用户旅程 / 服务蓝图 / 系统图

优先用：`documents`、HTML、Mermaid、`imagegen`

什么时候用：
- 需要把服务流程、角色关系、空间触点讲清楚。
- 需要课程评审快速理解“谁在什么时候做什么”。
- 需要展示前台体验和后台系统。

调用方式示例：

```text
请把我的方案整理成一张服务蓝图：上方是用户旅程，中间是前台触点，下方是后台系统、数据流和政策支持。先输出结构，再做成适合放进 PPT 的图。
```

推荐图形：
- 用户旅程图：适合讲体验。
- 服务蓝图：适合讲服务系统。
- 系统关系图：适合讲多主体协作。
- Backcasting 路线图：适合讲实施路径。
- 故事板：适合讲使用场景。

### 2.7 数据表 / 实施路线 / 预算 / 评价指标

优先用：`spreadsheets`

什么时候用：
- 需要做路线图、预算、行动清单、评估指标。
- 需要把 Backcasting 变成可执行计划。
- 需要比较多个方案。

调用方式示例：

```text
用 spreadsheets skill，把 Backcasting 路线整理成一个执行计划表。列包括年份、行动、负责角色、资源、风险、评估指标、优先级。
```

## 3. 需要安装的 OpenAI curated skills

OpenAI skills 仓库提供 curated skill 列表，可通过 `$skill-installer` 安装。注意：OpenAI skills 仓库页面提示该仓库已转向插件示例，但 curated skills 仍可通过 `$skill-installer` 查询和安装；安装后需要重启 Codex 才能被识别。

参考来源：
- OpenAI skills 仓库：https://github.com/openai/skills
- curated skills 目录：https://github.com/openai/skills/tree/main/skills/.curated

### 3.1 Figma 相关

适合需求：
- 需要交付 Figma 设计稿。
- 需要多人协作修改界面。
- 需要从方案生成完整 UI 文件、组件库或设计系统。

可安装：
- `figma`
- `figma-use`
- `figma-create-new-file`
- `figma-generate-design`
- `figma-generate-library`
- `figma-create-design-system-rules`
- `figma-implement-design`
- `figma-code-connect-components`

安装方式示例：

```text
$skill-installer figma
$skill-installer figma-generate-design
$skill-installer figma-create-design-system-rules
```

什么时候安装：
- 学生明确要 Figma 文件，而不是网页原型或图片。
- 课程要求提交 UI 设计稿。
- 团队需要多人在 Figma 中继续编辑。

### 3.2 部署相关

适合需求：
- 需要把 HTML 原型发布成在线链接。
- 需要评审老师直接打开访问。
- 需要展示交互系统而不是静态截图。

可安装：
- `vercel-deploy`
- `netlify-deploy`
- `render-deploy`
- `cloudflare-deploy`

安装方式示例：

```text
$skill-installer vercel-deploy
```

什么时候安装：
- HTML 原型已完成，并在本地测试通过。
- 学生有对应平台账号或课程统一账号。
- 项目不含敏感数据和隐私信息。

### 3.3 音频 / 转写相关

适合需求：
- 做视频旁白。
- 把访谈音频转成文本。
- 把展示稿转成语音素材。

可安装：
- `speech`
- `transcribe`

安装方式示例：

```text
$skill-installer speech
$skill-installer transcribe
```

什么时候安装：
- 需要声音、旁白或访谈整理。
- 视频脚本已经定稿。

### 3.4 PDF / 截图 / 浏览器检查

可安装或已安装：
- `pdf`
- `screenshot`
- `playwright`
- `playwright-interactive`

当前环境中 `playwright`、`playwright-interactive`、`screenshot` 已安装；`pdf` 可从 curated 安装或使用当前运行时的 PDF skill。

适合需求：
- PDF 读取和生成。
- 桌面截图。
- 检查网页原型。
- 从现有 PDF 课程材料中提取信息。

## 4. 第三方 / 网上 skill 的使用原则

网上可能有很多第三方 Agent Skills，但课程使用时不要直接让学生随便安装。建议教师先验证：

1. 是否有清楚的 `SKILL.md`。
2. 是否只做它声称的任务。
3. 是否要求不必要的权限、密钥或外部账号。
4. 是否会读取、上传或泄露学生文件。
5. 是否能稳定产出课程需要的格式。
6. 是否和本课程方法论兼容。

学生使用第三方 skill 前，必须说明：

```text
我要安装的 skill 来源：
它要解决的具体产出：
它需要读取的输入：
它会生成的文件：
是否涉及账号、API Key、个人信息或外部上传：
```

如果无法回答这些问题，不建议安装。

## 5. 推荐后期工作流

### 路径 A：标准课程汇报

适合大多数学生。

1. `future-design-thinking-workshop`：完成完整方案。
2. `documents`：生成项目文档或报告。
3. `imagegen`：生成 3-5 张关键视觉。
4. `Presentations`：生成答辩 PPT。
5. `pdf`：导出或检查最终 PDF。

### 路径 B：交互产品 / 平台方案

适合 App、平台、系统服务。

1. `future-design-thinking-workshop`：完成方案逻辑。
2. 前端实现：生成 HTML 原型。
3. `taste-design` / `emil-design-eng`：打磨视觉和交互。
4. `playwright`：检查不同屏幕比例和点击流程。
5. `imagegen`：生成宣传图和场景图。
6. `Presentations`：生成答辩 Deck。
7. 安装 `vercel-deploy` 或 `netlify-deploy`：发布链接。

### 路径 C：未来服务 / 公共系统方案

适合城市、教育、社区、公共服务、社会创新。

1. `future-design-thinking-workshop`：完成方案逻辑。
2. `documents`：生成项目报告。
3. HTML / Mermaid：生成系统图、服务蓝图、利益相关者图。
4. `imagegen`：生成未来场景图、服务触点图。
5. `spreadsheets`：生成行动路线和评估指标。
6. `Presentations`：生成最终展示。

### 路径 D：概念影像 / 未来叙事

适合概念短片、宣传片、未来新闻、故事片段。

1. `future-design-thinking-workshop`：完成方案逻辑和 Tomorrow Headline。
2. `imagegen`：生成主视觉和关键镜头图。
3. `documents`：生成脚本、旁白、分镜表。
4. `xyq-nest-skill`：生成视频或动画。
5. `speech`：需要时生成旁白。
6. `Presentations`：把视频和关键视觉整合进答辩。

### 路径 E：Figma UI / 设计系统

适合需要专业 UI 设计稿的项目。

1. `future-design-thinking-workshop`：完成用户、场景、功能机制。
2. 安装 `figma` 与 `figma-generate-design`。
3. 用 AI 生成页面清单和组件清单。
4. 生成 Figma 初稿。
5. 安装或使用 `figma-create-design-system-rules` 形成规范。
6. 导出关键页面到 PPT 或项目文档。

## 6. 学生向 AI 发出的通用指令模板

完成前期方案后，可以这样说：

```text
我已经完成 Future Design Thinking Workshop。请先读取并整理我的方案输入包，然后根据我要做的交付物推荐后续 skill 路线。

我的目标交付物是：<PPT / 文档 / 效果图 / 交互原型 / 图纸 / 故事板 / 视频 / Figma / 网站发布>
课程要求是：<页数、时长、格式、评分标准>
我已有素材：<图片、草图、文字、参考链接>
我希望风格：<简洁、未来感、真实可信、学术、商业路演、公共服务等>

请告诉我：
1. 应该调用哪些 skill；
2. 哪些需要先安装；
3. 每一步要读取上一步的什么产物；
4. 每一步会生成什么文件；
5. 做完后如何检查质量。
```

## 7. 最小可行组合

如果学生不知道怎么选，就用这个组合：

```text
future-design-thinking-workshop
-> documents
-> imagegen
-> Presentations
```

这条路线能覆盖大多数课程提交：完整逻辑、正式文档、关键视觉和最终展示。

如果项目强调“能点、能体验”，再加：

```text
-> HTML prototype
-> playwright
```

如果项目强调“能传播、能感染人”，再加：

```text
-> imagegen storyboard
-> xyq-nest-skill video
```

