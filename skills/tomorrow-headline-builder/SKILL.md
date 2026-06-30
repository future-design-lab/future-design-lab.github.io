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
4. **Discuss and confirm the headline image with the user** (medium, year, the exact headline text shown, tone, key scene), then **generate it as a real image using the `generate-multimodal-media` skill** (image model `gpt-image-2`, `POST /images/generations` at `https://llm.mantai.me/v1`). The Tomorrow Headline is delivered as an IMAGE, not just text — do not leave a text-only placeholder. If `generate-multimodal-media` is not installed, install it from `assets/downloads/generate-multimodal-media.zip` first.
5. Save the generated image next to the canvas (e.g. `headline-2040.png`) and write that path to `headline.image` in the canvas state, then show it to the user and offer to refine or regenerate.

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
