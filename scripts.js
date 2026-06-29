const sections = [...document.querySelectorAll(".section[id]")];
const sidebarLinks = [...document.querySelectorAll(".sidebar a")];
const languageButtons = [...document.querySelectorAll("[data-lang-switch]")];
let currentLanguage = "zh";

const translations = {
  zh: {
    "nav.tracks": "赛道",
    "nav.corpus": "语料库",
    "nav.workshop": "工作坊",
    "sidebar.title": "文档目录",
    "sidebar.overview": "项目概览",
    "sidebar.mission": "愿景与规模",
    "sidebar.tracks": "六大赛道",
    "sidebar.timeline": "项目节奏",
    "sidebar.corpus": "语料库",
    "sidebar.workshop": "AI 共创流程",
    "sidebar.outputs": "产出要求",
    "hero.eyebrow": "太空艺术设计实验室",
    "hero.title": "国际太空艺术设计共创营",
    "hero.subtitle": "International Space Art & Design Collaborative Camp",
    "hero.lede":
      "从国际共创、知识赋能到原型制作、评审展览与持续孵化。项目把航天知识转化为可理解、可感知、可体验的未来生活提案。",
    "hero.ctaTracks": "查看六大赛道",
    "hero.ctaWorkshop": "查看工作坊流程",
    "metric.tracks": "赛道",
    "metric.tutors": "导师",
    "metric.regions": "国家和地区",
    "metric.institutions": "院校",
    "mission.eyebrow": "项目主旨",
    "mission.title": "以艺术设计回应未来太空生活",
    "mission.callout":
      "共创营汇聚国际顶尖艺术设计院校师生与全球航天领域专家，通过跨学科协作，将航天任务、太空环境、未来社会与公众体验连接成一个可创作、可展示、可孵化的未来文明实验场。",
    "mission.knowledge": "航天、艺术与设计跨界授课，建立共同知识底座。",
    "mission.cocreation": "跨文化团队围绕六个方向推进概念、原型与展陈方案。",
    "mission.exhibition": "优秀作品进入联合展览，形成太空未来生活的全景叙事。",
    "mission.validation": "后续项目可继续孵化，并面向太空实验或公众传播验证。",
    "tracks.eyebrow": "六大赛道",
    "tracks.title": "六条路径共同回答未来太空生活",
    "track1.title": "航天愿景与未来叙事",
    "track1.desc": "文化载荷、任务叙事、科普传播与公众参与",
    "track1.output": "交付：数字叙事作品、公众互动、展陈载体",
    "track2.title": "空间栖居与数字建造",
    "track2.desc": "火星极地栖居、数字建造、材料与生命支持",
    "track2.output": "交付：系统原型、空间载体、交互系统",
    "track3.title": "创意载荷与公共艺术",
    "track3.desc": "太空环境与载荷约束下的公共艺术边界",
    "track3.output": "交付：核心作品、展陈载体、来源/伦理记录",
    "track4.title": "地外日常与体验设计",
    "track4.desc": "饮食、清洁、节律、社交与游憩的地外生活原型",
    "track4.output": "交付：体验原型、设计档案、概念视频、展板",
    "track5.title": "太空计算与具身智能",
    "track5.desc": "智能体在舱内服务、星表探索与身体增强中的表达",
    "track5.output": "交付：实体原型、视觉方案、视频、展板",
    "track6.title": "太空时尚与人机进化",
    "track6.desc": "服装作为身体与异星世界之间的第二层肌肤",
    "track6.output": "交付：实体服装/可穿戴部件、视觉档案、视频、展板",
    "timeline.eyebrow": "项目节奏",
    "timeline.title": "三阶段完成知识赋能、方案孵化与展览展示",
    "timeline.phase1": "阶段 01",
    "timeline.phase1Title": "专家讲座与知识赋能",
    "timeline.phase1Desc": "跨学科讲座建立航天、艺术、设计与技术的共同语言。",
    "timeline.phase2": "阶段 02",
    "timeline.phase2Title": "创意探索与方案孵化",
    "timeline.phase2Desc": "团队深化概念、完成试验并形成可展示原型。",
    "timeline.phase3": "阶段 03",
    "timeline.phase3Title": "评审遴选与展览展示",
    "timeline.phase3Desc": "通过路演、评审、遴选与联合展览推进持续孵化。",
    "corpus.eyebrow": "语料库",
    "corpus.title": "四组语料为概念生成提供未来信号",
    "corpus.viewDetails": "查看资料页",
    "corpus1.title": "语料包 1：独立于地球",
    "corpus1.short": "独立于地球",
    "corpus1.desc": "火星长期定居所需的关键技术信号，从空气、水、电力到生态自治。",
    "corpus1.signals": "IE-01 到 IE-30",
    "corpus1.use": "生命支持、栖居系统、资源闭环",
    "corpus2.title": "语料包 2：地外迷域",
    "corpus2.short": "地外迷域",
    "corpus2.desc": "宇航员心理、生理及感官异化体验，用于设计情绪支持与感知干预。",
    "corpus2.signals": "AM-01 到 AM-30",
    "corpus2.use": "地外日常、体验设计、太空心理",
    "corpus3.title": "语料包 3：隐藏同款",
    "corpus3.short": "隐藏同款",
    "corpus3.desc": "航天技术向地球日常产品转化的案例库，连接极端环境与民用创新。",
    "corpus3.signals": "HT-01 到 HT-30",
    "corpus3.use": "产品转译、材料创新、生活用品",
    "corpus4.title": "语料包 4：新太空仪式感物件",
    "corpus4.short": "新太空仪式感物件",
    "corpus4.desc": "真实太空物件中的象征、纪念与仪式意义，支撑叙事与公共艺术。",
    "corpus4.signals": "RS-01 到 RS-33",
    "corpus4.use": "文化载荷、纪念物、太空仪式",
    "workshop.eyebrow": "AI 共创工作坊",
    "workshop.title": "Future Design Thinking 工作流",
    "workshop.step1": "浏览并选择未来信号。",
    "workshop.step2": "选择或输入地方挑战，AI 可辅助扩展。",
    "workshop.step3": "生成 Provotyping Card 与 Interpretation 句式。",
    "workshop.step4": "生成未来新闻标题和情境图像。",
    "workshop.step5": "从 2050 目标倒推 2040 与 2030 行动。",
    "outputs.eyebrow": "产出要求",
    "outputs.title": "AI 共创工作坊产出要求",
    "outputs.proto": "由未来信号和地方挑战组合形成，用于界定机会与冲突。",
    "outputs.interpretation": "用一句可讨论、可修改的未来解释串联 A、B、C 要素。",
    "outputs.headline": "以 2030/2040/2050 的新闻标题呈现可感知未来。",
    "outputs.backcasting": "以市长、商业领导者、个体行动者等角色倒推行动路径。",
  },
  en: {
    "nav.tracks": "Tracks",
    "nav.corpus": "Corpus",
    "nav.workshop": "Workshop",
    "sidebar.title": "Documentation",
    "sidebar.overview": "Overview",
    "sidebar.mission": "Mission & Scale",
    "sidebar.tracks": "Six Tracks",
    "sidebar.timeline": "Program Rhythm",
    "sidebar.corpus": "Corpus Library",
    "sidebar.workshop": "AI Workshop Flow",
    "sidebar.outputs": "Outputs",
    "hero.eyebrow": "Space Art & Design Lab",
    "hero.title": "International Space Art & Design Collaborative Camp",
    "hero.subtitle": "Art and Design for Future Life in Space",
    "hero.lede":
      "From international co-creation and knowledge building to prototyping, review, exhibition, and continued incubation. The program translates space knowledge into understandable, perceptible, and experiential proposals for future life.",
    "hero.ctaTracks": "Explore Tracks",
    "hero.ctaWorkshop": "Workshop Flow",
    "metric.tracks": "Tracks",
    "metric.tutors": "Tutors",
    "metric.regions": "Regions",
    "metric.institutions": "Institutions",
    "mission.eyebrow": "Mission",
    "mission.title": "Art and Design for Future Life in Space",
    "mission.callout":
      "The camp brings together leading international art and design schools with global aerospace experts. Through interdisciplinary collaboration, it connects space missions, extraterrestrial environments, future societies, and public experience into a future-civilization laboratory for creation, exhibition, and incubation.",
    "mission.knowledge": "Cross-disciplinary lectures build a shared knowledge base across aerospace, art, and design.",
    "mission.cocreation": "Cross-cultural teams develop concepts, prototypes, and exhibition plans across six directions.",
    "mission.exhibition": "Selected works enter a joint exhibition and form a panoramic narrative of futures in space.",
    "mission.validation": "Projects may continue into incubation and space-oriented or public-facing validation.",
    "tracks.eyebrow": "Six Tracks",
    "tracks.title": "Six paths into future life in space",
    "track1.title": "Space Vision & Future Narratives",
    "track1.desc": "Cultural payloads, mission narratives, science communication, and public participation",
    "track1.output": "Deliverables: digital narrative work, public interaction, exhibition carrier",
    "track2.title": "Space Habitation & Digital Construction",
    "track2.desc": "Martian polar habitation, digital construction, materials, and life-support systems",
    "track2.output": "Deliverables: system prototype, spatial carrier, interactive system",
    "track3.title": "Creative Payloads & Public Art",
    "track3.desc": "Public art under space environments and payload constraints",
    "track3.output": "Deliverables: core artwork, exhibition carrier, source and ethics record",
    "track4.title": "Off-Earth Daily Life & Experience Design",
    "track4.desc": "Dining, hygiene, rhythms, social connection, and recreation beyond Earth",
    "track4.output": "Deliverables: experience prototype, design dossier, concept video, panel",
    "track5.title": "Space Computing & Embodied Intelligence",
    "track5.desc": "Agents for cabin service, planetary exploration, and body augmentation",
    "track5.output": "Deliverables: physical prototype, visual proposal set, video, panel",
    "track6.title": "Space Fashion & Human-Machine Evolution",
    "track6.desc": "Clothing as the second skin between the body and an extraterrestrial world",
    "track6.output": "Deliverables: garment or wearable component, visual archive, video, panel",
    "timeline.eyebrow": "Program Rhythm",
    "timeline.title": "Three phases: knowledge, incubation, and exhibition",
    "timeline.phase1": "Phase 01",
    "timeline.phase1Title": "Expert Lectures & Knowledge Building",
    "timeline.phase1Desc": "Cross-disciplinary lectures build a shared language across aerospace, art, design, and technology.",
    "timeline.phase2": "Phase 02",
    "timeline.phase2Title": "Creative Exploration & Incubation",
    "timeline.phase2Desc": "Teams deepen concepts, test ideas, and form demonstrable prototypes.",
    "timeline.phase3": "Phase 03",
    "timeline.phase3Title": "Expert Review & Exhibition",
    "timeline.phase3Desc": "Roadshows, review, selection, and the joint exhibition support continued incubation.",
    "corpus.eyebrow": "Corpus Library",
    "corpus.title": "Four corpus packs provide future signals for concept generation",
    "corpus.viewDetails": "Open corpus page",
    "corpus1.title": "Corpus 1: Independent from Earth",
    "corpus1.short": "Independent from Earth",
    "corpus1.desc": "Key technology signals for long-term Mars settlement, from air, water, and power to ecological autonomy.",
    "corpus1.signals": "IE-01 to IE-30",
    "corpus1.use": "Life support, habitation systems, resource loops",
    "corpus2.title": "Corpus 2: Alien Mind",
    "corpus2.short": "Alien Mind",
    "corpus2.desc": "Psychological, physiological, and sensory alienation in space, used for emotional support and sensory intervention design.",
    "corpus2.signals": "AM-01 to AM-30",
    "corpus2.use": "Off-Earth daily life, experience design, space psychology",
    "corpus3.title": "Corpus 3: Hidden Twins",
    "corpus3.short": "Hidden Twins",
    "corpus3.desc": "A case library of aerospace technologies translated into everyday terrestrial products.",
    "corpus3.signals": "HT-01 to HT-30",
    "corpus3.use": "Product translation, material innovation, daily-life products",
    "corpus4.title": "Corpus 4: New Space Ritual Objects",
    "corpus4.short": "Space Ritual Objects",
    "corpus4.desc": "Symbolic, commemorative, and ritual meanings embedded in real space artifacts.",
    "corpus4.signals": "RS-01 to RS-33",
    "corpus4.use": "Cultural payloads, commemorative objects, space rituals",
    "workshop.eyebrow": "AI Co-creation Workshop",
    "workshop.title": "Future Design Thinking Workflow",
    "workshop.step1": "Browse and select future signals.",
    "workshop.step2": "Select or enter local challenges, with AI-assisted expansion.",
    "workshop.step3": "Generate a Provotyping Card and an Interpretation sentence.",
    "workshop.step4": "Generate tomorrow's headline and scenario imagery.",
    "workshop.step5": "Backcast actions for 2040 and 2030 from a 2050 goal.",
    "outputs.eyebrow": "Outputs",
    "outputs.title": "AI co-creation workshop outputs",
    "outputs.proto": "A combination of future signals and local challenges used to define opportunities and tensions.",
    "outputs.interpretation": "A discussable and editable sentence that connects the A, B, and C elements.",
    "outputs.headline": "A perceptible future presented as 2030, 2040, or 2050 news headlines.",
    "outputs.backcasting": "Action pathways backcast through roles such as mayor, business leader, and individual actor.",
  },
};

function applyLanguage(lang) {
  const current = translations[lang] ? lang : "zh";
  currentLanguage = current;

  document.documentElement.lang = current === "zh" ? "zh-CN" : "en";
  document.title =
    current === "zh"
      ? "国际太空艺术设计共创营"
      : "International Space Art & Design Collaborative Camp";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[current][key];
    if (value) element.textContent = value;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === current;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("space-camp-language", current);
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    sidebarLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-18% 0px -70% 0px",
    threshold: [0.1, 0.35, 0.6],
  },
);

sections.forEach((section) => observer.observe(section));

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
});

applyLanguage(localStorage.getItem("space-camp-language") || "zh");
