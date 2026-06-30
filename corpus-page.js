const languageButtons = [...document.querySelectorAll("[data-lang-switch]")];
const page = document.querySelector("[data-corpus-page]");
const titleNode = document.querySelector("#corpus-title");
const subtitleNode = document.querySelector("#corpus-subtitle");
const overviewNode = document.querySelector("#corpus-overview");
const metaNode = document.querySelector("#corpus-meta");
const entriesNode = document.querySelector("#corpus-entries");
const countNode = document.querySelector("#corpus-count");
let currentLanguage = "zh";

const ui = {
  zh: {
    "sidebar.title": "文档目录",
    "sidebar.intro": "项目介绍",
    "sidebar.tracksTime": "赛道与节奏",
    "sidebar.corpus": "语料库",
    "sidebar.cases": "案例库",
    "sidebar.workshop": "共创流程",
    "sidebar.skills": "Skill 系统",
    "sidebar.outputs": "产出要求",
    "nav.overview": "概览",
    "nav.materials": "素材",
    "nav.workshop": "工作坊",
    "nav.getStarted": "开始使用",
    "corpus1.short": "独立于地球",
    "corpus2.short": "地外迷域",
    "corpus3.short": "隐藏同款",
    "corpus4.short": "新太空仪式感物件",
    "case1.short": "具身体验与交互设计",
    "case2.short": "文化结构与仪式演化",
    "case3.short": "时间重构与情感连接",
    "case4.short": "非地理性共享空间",
    loading: "正在读取语料素材...",
    entryCount: "条信号",
    detail: "资料详情",
    "sidebar.tools": "工具使用",
    "tools.codex": "Codex 配置",
    "tools.skills": "Skill 安装",
    "tools.verify": "环境验证",
  },
  en: {
    "sidebar.title": "Documentation",
    "sidebar.intro": "About",
    "sidebar.tracksTime": "Tracks & Timeline",
    "sidebar.corpus": "Corpus Library",
    "sidebar.cases": "Case Library",
    "sidebar.workshop": "Workshop Flow",
    "sidebar.skills": "Skill System",
    "sidebar.outputs": "Outputs",
    "nav.overview": "Overview",
    "nav.materials": "Materials",
    "nav.workshop": "Workshop",
    "nav.getStarted": "Get Started",
    "corpus1.short": "Independent from Earth",
    "corpus2.short": "Alien Mind",
    "corpus3.short": "Hidden Twins",
    "corpus4.short": "Space Ritual Objects",
    "case1.short": "Embodied Experience & Interaction",
    "case2.short": "Cultural Structure & Ritual",
    "case3.short": "Time Reconstruction & Emotion",
    "case4.short": "Non-geographic Shared Space",
    loading: "Loading corpus material...",
    entryCount: "signals",
    detail: "Corpus Detail",
    "sidebar.tools": "Tools",
    "tools.codex": "Codex Setup",
    "tools.skills": "Skill Install",
    "tools.verify": "Verify Setup",
  },
};

function applyLanguage(lang) {
  currentLanguage = ui[lang] ? lang : "zh";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (ui[currentLanguage][key]) element.textContent = ui[currentLanguage][key];
  });

  titleNode.textContent = page.dataset[`title${currentLanguage}`];
  subtitleNode.textContent = page.dataset[`subtitle${currentLanguage}`];
  document.title = titleNode.textContent;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("space-camp-language", currentLanguage);

  renderCorpus().catch((error) => {
    overviewNode.textContent = error.message;
  });
}

function normalizeEntryTitle(line) {
  return line
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/^✅\s*/, "")
    .trim();
}

function parseCorpusMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const entries = [];
  const overviewLines = [];
  let current = null;
  const entryPattern = /^([A-Z]{2}[\u2010-\u2015-]\d{2})\s*[｜|]\s*(.+)$/;

  lines.forEach((line) => {
    const cleaned = normalizeEntryTitle(line);
    const match = cleaned.match(entryPattern);

    if (match) {
      if (current) entries.push(current);
      current = {
        code: match[1].replace(/[\u2010-\u2015]/g, "-"),
        title: match[2].trim(),
        body: [],
      };
      return;
    }

    if (current) {
      current.body.push(line);
    } else if (line.trim()) {
      overviewLines.push(line.trim());
    }
  });

  if (current) entries.push(current);

  return {
    overview: overviewLines
      .filter((line) => !line.startsWith("**"))
      .join(" ")
      .replace(/\*\*/g, "")
      .trim(),
    entries,
  };
}

function cleanMarkdownLine(line) {
  return line
    .replace(/\*\*/g, "")
    .replace(/^#+\s*/, "")
    .replace(/^[-*]\s*/, "")
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]")
    .trim();
}

function renderEntryBody(lines) {
  return lines
    .map(cleanMarkdownLine)
    .filter(Boolean)
    .map((line) => {
      const colon = currentLanguage === "zh" ? "：" : ":";
      const highlighted = line.replace(
        /^(说明|出处|信号标签|感知类别|关键词|产品类别|引用|启发|技术载体|未来影响|相关原理|设计对象|设计手法|标签|Description|Source|Signal Tags|Perception|Keywords|Category|Citation|Insight|Technology|Future Impact|Principle|Design Object|Design Method|Tags)\s*[:：]?\s*/,
        `<strong>$1${colon}</strong> `,
      );
      return `<p>${highlighted}</p>`;
    })
    .join("");
}

const markdownCache = new Map();

async function fetchMarkdown(url) {
  if (markdownCache.has(url)) return markdownCache.get(url);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to load ${url}`);
  const text = await response.text();
  markdownCache.set(url, text);
  return text;
}

async function renderCorpus() {
  const source = page.dataset[`source${currentLanguage}`];
  overviewNode.textContent = ui[currentLanguage].loading;

  const markdown = await fetchMarkdown(source);
  const parsed = parseCorpusMarkdown(markdown);

  overviewNode.textContent = parsed.overview || page.dataset[`subtitle${currentLanguage}`];
  const unitLabel = page.dataset[`unit${currentLanguage}`] || ui[currentLanguage].entryCount;
  countNode.textContent = `${parsed.entries.length} ${unitLabel}`;
  metaNode.innerHTML = `
    <span>${page.dataset[`range${currentLanguage}`]}</span>
    <span>${page.dataset[`use${currentLanguage}`]}</span>
  `;
  entriesNode.innerHTML = parsed.entries
    .map(
      (entry, index) => `
        <details class="corpus-entry" ${index === 0 ? "open" : ""}>
          <summary>
            <span class="corpus-entry-code">${entry.code}</span>
            <span class="corpus-entry-title">${entry.title}</span>
          </summary>
          <div class="corpus-entry-body">${renderEntryBody(entry.body)}</div>
        </details>
      `,
    )
    .join("");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
});

applyLanguage(localStorage.getItem("space-camp-language") || "zh");
