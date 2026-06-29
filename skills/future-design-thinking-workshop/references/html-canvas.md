# HTML Canvas Guide

Use `assets/future-design-canvas.html` when the user wants a more visual, student-facing workflow or asks to turn workshop outputs into a canvas, worksheet, classroom board, printable artifact, or presentation-friendly intermediate output.

## What The Canvas Does

- Shows the 10-stage Future Design Thinking flow as clickable navigation.
- Gives each stage a compact explanation, facilitation prompts, and editable fields.
- Mirrors key artifacts into a full workshop canvas so students can see the whole logic chain.
- Includes a Backcasting timeline and role matrix for 2030, 2040, and 2050.
- Saves work locally in the browser.
- Exports and imports JSON for sharing or continuing work.
- Prints cleanly as a workshop record.

## When To Use

Use the HTML canvas when:

- The user says students find text-heavy workflows tiring.
- The user wants a visual, interactive, or classroom-friendly version.
- The workshop is run live and needs a shared structure.
- The user wants outputs that can later become slides or a proposal.
- The user asks for "canvas", "HTML", "visual board", "worksheet", "template", or "interactive".

## How To Use

1. Copy `assets/future-design-canvas.html` into the target project or output folder.
2. If the user has existing artifacts, prefill the matching fields in the HTML or provide JSON matching the canvas schema.
3. Tell students to work stage by stage, using the left navigation and completing the current card before moving on.
4. Use the canvas summary as the source of truth when continuing the conversation.
5. When the user asks for a final proposal, export JSON from the canvas and assemble the final output using `output-templates.md`.

## Live Preview Workflow

Use this workflow when the user expects the skill conversation and the HTML preview to stay connected.

1. Create a working preview folder in the current workspace, for example `output/future-design-workshop/`.
2. Copy `assets/future-design-canvas.html` and `assets/future-design-canvas-state.json` into that folder.
3. Start a local static server from that folder.
4. Open `http://localhost:<port>/future-design-canvas.html` in the right-side browser preview.
5. During the conversation, keep a workshop state object in memory.
6. After every meaningful user answer or AI synthesis, write the current state to `future-design-canvas-state.json`.
7. The HTML page will poll that JSON file and refresh the canvas automatically.

The state file may use this shape:

```json
{
  "current": 1,
  "lang": "zh",
  "data": {
    "brief": {},
    "signals": {},
    "steep": {},
    "challenge": {},
    "pairing": {},
    "interpretation": {},
    "provotyping": {},
    "headline": {},
    "backcasting": {},
    "proposal": {}
  }
}
```

The `headline` object may include an `image` field pointing to a relative path or URL for the Tomorrow Headline visual. When Stage 8 is complete, generate a newspaper front page, web headline, or launch-poster style image and write it to `headline.image`.

Use zero-based `current`: Stage 1 is `0`, Stage 2 is `1`, and so on. Keep `lang` as `zh` or `en`.

If the HTML is opened directly as `file://`, it still works manually, but live AI updates require the local server so the page can fetch `future-design-canvas-state.json`.

## Facilitation Rule

When guiding students with the canvas, keep each interaction short:

```text
You are on Stage X.
Look at this card.
Answer these 1-2 fields first.
Then I will help synthesize it into the canvas.
```

## Canvas Data Schema

The HTML export uses these keys:

```json
{
  "brief": {},
  "signals": {},
  "steep": {},
  "challenge": {},
  "pairing": {},
  "interpretation": {},
  "provotyping": {},
  "headline": {},
  "backcasting": {},
  "proposal": {}
}
```

Treat exported JSON as the user's latest artifact state. Before continuing a stage, read the relevant previous object.

## Update Rule

If the stage flow, artifact names, or output templates change, update the HTML labels and fields in `assets/future-design-canvas.html`, then mirror the change in `html-canvas.zh-CN.md`.
