# AGENTS.md

This repository is the public documentation site for Future Design Lab's space art and design camp/materials.

## Project Goal

Build and maintain a static documentation website for:

- International Space Art & Design Collaborative Camp overview
- Six design tracks
- AI co-creation workshop workflow
- Corpus/material packs used by workshop participants

The site should feel like a standard technical documentation site, not a one-off event page. Avoid edition-specific dates and copy that makes the site only serve one cohort.

## Repository And Deployment

- Local repo: `/Users/huyong/code/mantai/future-design-lab`
- GitHub repo: `https://github.com/future-design-lab/future-design-lab.github.io`
- Production URL: `https://future-design-lab.github.io/`
- Branch: `main`
- GitHub Pages source: `main` branch, root folder `/`
- Repository is public because the current organization plan does not support GitHub Pages for private repositories.

Use the bundled Git if system Git has push transport issues:

```bash
/Users/huyong/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/git push
```

After pushing, check GitHub Pages build status:

```bash
gh api repos/future-design-lab/future-design-lab.github.io/pages/builds/latest --jq '{status,error,created_at,updated_at}'
```

The published site may show cached content for a short time. Use a cache-busting URL while checking:

```bash
curl -s -H 'Cache-Control: no-cache' 'https://future-design-lab.github.io/?v=<commit>'
```

## Site Structure

Primary files:

- `index.html`: main documentation landing page
- `styles.css`: shared styling for home and corpus pages
- `scripts.js`: home page interactions and bilingual text switching
- `corpus-page.js`: shared logic for corpus and case detail pages
- `corpus/*.html`: standard doc subpages for each corpus pack
- `cases/*.html`: standard doc subpages for each workshop case-library theme (reuse `corpus-page.js`)
- `materials/extracted/*.md`: parsed text sources used by the site (`corpus-*.md` for corpus packs, `case-*.md` for case libraries)
- `assets/hero/*`: images extracted from the deck
- `assets/workshop/*`: rendered pages from the workshop PDF

Local-only source files:

- `materials/originals/` contains PPTX/DOCX/PDF source material.
- This folder is ignored by Git via `.gitignore` and should not be committed.

## Navigation Model

Keep the site as a documentation site with a persistent left sidebar.

Home page sidebar sections:

- Overview
- Mission & Scale
- Six Tracks
- Program Rhythm
- Corpus Library
  - Independent from Earth
  - Alien Mind
  - Hidden Twins
  - Space Ritual Objects
- Case Library
  - Embodied Experience & Interaction Design
  - Cultural Structure & Ritual Evolution
  - Time Reconstruction & Emotional Connection
  - Non-geographic Shared Space
- AI Workshop Flow
- Outputs

Corpus pages should use the same doc-shell navigation. Do not show a standalone "Back Home" link on corpus pages. Users should feel they are still inside the same documentation site.

## Corpus Pages

Current corpus pages:

- `corpus/independent-from-earth.html`
- `corpus/alien-mind.html`
- `corpus/hidden-twins.html`
- `corpus/space-ritual-objects.html`

Each corpus page declares metadata on the `<body>`:

- `data-source`: markdown source file
- `data-titlezh` / `data-titleen`
- `data-subtitlezh` / `data-subtitleen`
- `data-range`
- `data-use`

`corpus-page.js` fetches the markdown, parses entries such as `IE-01｜...`, `AM-01｜...`, `HT-01｜...`, and `RS-01｜...`, then renders them as expandable `<details>` blocks.

Do not display implementation/source labels like `原始素材: corpus-1.md` or `Source Material: corpus-1.md` on the public pages.

## Bilingual Behavior

The site supports Chinese and English via the top-right language switch.

- Home page translations live in `scripts.js`.
- Corpus page shared UI translations live in `corpus-page.js`.
- The language preference is stored in `localStorage` under `space-camp-language`.
- Switching language should update `document.documentElement.lang` and visible text.

When adding new user-facing text, add translation keys or an equivalent bilingual data attribute. Do not hard-code only one language unless it is a proper noun or source title.

## Content Principles

- Avoid specific cohort dates in the public site. Use generic phases such as `Phase 01`, `Phase 02`, `Phase 03`.
- Do not make the site read like a temporary event flyer.
- Keep original corpus/source material available in `materials/extracted`, but surface it through readable documentation pages.
- Preserve the restrained technical-doc aesthetic.
- Keep cards and panels at `8px` border radius or less.
- Avoid nested cards and decorative orb/gradient backgrounds.

## Local Preview

Run from the repository root:

```bash
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

Key local pages to check:

```text
http://127.0.0.1:4173/
http://127.0.0.1:4173/corpus/independent-from-earth.html
http://127.0.0.1:4173/corpus/alien-mind.html
http://127.0.0.1:4173/corpus/hidden-twins.html
http://127.0.0.1:4173/corpus/space-ritual-objects.html
http://127.0.0.1:4173/cases/embodied-interaction.html
http://127.0.0.1:4173/cases/cultural-ritual.html
http://127.0.0.1:4173/cases/time-emotion.html
http://127.0.0.1:4173/cases/shared-space.html
```

## Verification Checklist

Before committing:

1. Run local server.
2. Check desktop and mobile widths.
3. Confirm no broken images.
4. Confirm no text horizontal overflow, especially long URLs in corpus entries.
5. Confirm corpus pages parse the expected counts:
   - `corpus-1`: 30 entries
   - `corpus-2`: 30 entries
   - `corpus-3`: 30 entries
   - `corpus-4`: 33 entries
   - `case-1`: 20 entries
   - `case-2`: 20 entries
   - `case-3`: 17 entries
   - `case-4`: 20 entries
6. Confirm public-facing pages do not show implementation/source labels such as `原始素材: corpus-1.md`.
7. Confirm there are no visible cohort-specific dates on the public home page.

Example Playwright check uses system Chrome and bundled Node modules:

```bash
NODE_PATH=/Users/huyong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
/Users/huyong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node - <<'JS'
(async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }});
  await page.goto('http://127.0.0.1:4173/corpus/independent-from-earth.html', { waitUntil: 'networkidle' });
  console.log({
    title: await page.title(),
    entries: await page.locator('.corpus-entry').count(),
    hasSourceLabel: (await page.locator('body').innerText()).includes('原始素材')
  });
  await browser.close();
})();
JS
```

## Common Git Workflow

```bash
cd /Users/huyong/code/mantai/future-design-lab
git status --short
git add <files>
git commit -m "Describe the change"
/Users/huyong/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/git push
```

If `gh` reports bad credentials, re-authenticate:

```bash
GH_PROMPT_DISABLED=1 gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key
gh auth status
```

## Current Known State

The site has already been deployed to GitHub Pages. Recent work added standard corpus subpages and unified their sidebar with the main documentation shell. If production appears stale immediately after a push, wait for Pages to finish building and refresh with a cache-busting query string.
