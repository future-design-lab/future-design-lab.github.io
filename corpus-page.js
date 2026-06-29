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
    back: "返回首页",
    sidebarTitle: "语料库",
    loading: "正在读取语料素材...",
    entryCount: "条信号",
    detail: "资料详情",
    source: "原始素材",
  },
  en: {
    back: "Back Home",
    sidebarTitle: "Corpus Library",
    loading: "Loading corpus material...",
    entryCount: "signals",
    detail: "Corpus Detail",
    source: "Source Material",
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
      const highlighted = line.replace(
        /^(说明|出处|信号标签|感知类别|关键词|产品类别|引用)：?/,
        "<strong>$1：</strong>",
      );
      return `<p>${highlighted}</p>`;
    })
    .join("");
}

async function renderCorpus() {
  overviewNode.textContent = ui[currentLanguage].loading;
  const response = await fetch(page.dataset.source);
  if (!response.ok) throw new Error(`Failed to load ${page.dataset.source}`);

  const markdown = await response.text();
  const parsed = parseCorpusMarkdown(markdown);

  overviewNode.textContent = parsed.overview || page.dataset[`subtitle${currentLanguage}`];
  countNode.textContent = `${parsed.entries.length} ${ui[currentLanguage].entryCount}`;
  metaNode.innerHTML = `
    <span>${page.dataset.range}</span>
    <span>${page.dataset.use}</span>
    <span>${ui[currentLanguage].source}: ${page.dataset.sourceName}</span>
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
renderCorpus().catch((error) => {
  overviewNode.textContent = error.message;
});
