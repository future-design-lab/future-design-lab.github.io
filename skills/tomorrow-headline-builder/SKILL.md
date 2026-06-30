---
name: tomorrow-headline-builder
description: Create a Tomorrow Headline text and future media visual brief for Future Design concepts; 用于明日头条、未来新闻、未来媒体叙事和视觉简报。
---

# Tomorrow Headline Builder

Read first: Provotyping Card, Interpretation, target year, and place.

Method:
1. Choose a target year and media format (报纸头版 / 微博热搜 / news website hero / civic poster / launch screen).
2. Write a headline, subheadline, and short article.
3. Make the story concrete: who did what, where, and with what consequences.
4. **Discuss and confirm the headline artifact with the user** (media format, year, the exact headline + subheadline + body text to typeset, masthead/site/platform name, tone, key scene), then **generate it as a fully laid-out media artifact using the `generate-multimodal-media` skill** (image model `gpt-image-2`, `POST /images/generations` at `https://llm.mantai.me/v1`). The Tomorrow Headline is a finished, designed media piece with the headline and key text **typeset into the layout** — a newspaper front page / 微博热搜 banner / news hero / poster / launch screen — NOT a bare scenic photo and NOT a text-only placeholder. Write the image prompt as a layout brief: name each text block, quote its exact wording so it renders as legible type, and place the masthead, photo area, caption, and date. If `generate-multimodal-media` is not installed, install it from `assets/downloads/generate-multimodal-media.zip` first.
5. **Remind the user to grant the agent full access / file-write permission first** (Codex full-access / Claude Code allow-write / other agents "full access" mode) — saving the image and updating the state file are disk writes that a restricted mode will block, leaving the canvas empty. Then save the generated artifact next to the canvas (e.g. `headline-2040.png`), set `headline.image` to that filename in `future-design-canvas-state.json`, and write the state file so the canvas (polls ~1.2s) renders it. Confirm the canvas shows it and the typography is legible; refine and regenerate if the layout is wrong, the text is garbled, the image didn't appear, or it reads as a plain photo.

Output:

```text
## Tomorrow Headline
Year:
Place:
Media format:
Headline:
Subheadline:
Story:
Controversy / public debate:
Visual brief:
Image path:
```
