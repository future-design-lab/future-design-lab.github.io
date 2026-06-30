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

## Opening The Canvas + Live Sync

This skill runs on the **student's own machine**, so the agent, the canvas file, and the browser are all on the same computer. Live sync is therefore possible and is the recommended mode. The canvas opens **blank at Stage 1** and autosaves the student's edits in their browser via `localStorage`.

### Recommended: local server (true live sync)

1. Copy `assets/future-design-canvas.html` and `assets/future-design-canvas-state.json` into a local working folder, e.g. `output/future-design-workshop/`.
2. Start a static server in that folder, e.g. `python3 -m http.server 8123` (or `npx serve`).
3. Open `http://localhost:8123/future-design-canvas.html`. This is local to the student's machine, so it opens instantly.
4. During the conversation, after each agreed stage result, **write the current state to `future-design-canvas-state.json`**. The page polls it (~every 1.2s) and refreshes the matching cards automatically — the canvas tracks the discussion live.

### Fallback: `file://` (no server)

If no server can be started, the student double-clicks `future-design-canvas.html`. It still opens blank at Stage 1 and works manually. Two ways to reflect progress:

- The student clicks **Import JSON** and selects the latest `future-design-canvas-state.json`, or
- The agent edits the `bundledState` block in the HTML and the student refreshes the page.

Under `file://`, the page still *attempts* to read the sibling `future-design-canvas-state.json`; some browsers allow same-folder fetch (giving automatic refresh) and some block it via CORS (falling back to manual). Either way the page never errors or hangs.

Never give the student a `localhost` URL that points at a *different* machine — that is what makes the page appear to load forever.

The state file uses this shape (start blank, fill as you go):

```json
{
  "current": 0,
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

The `headline` object may include an `image` field pointing to a relative path (or URL) for the Tomorrow Headline visual. When Stage 8 is complete, generate the fully laid-out headline artifact (see `references/stage-guides.md` Stage 8), **save the image file into the same working folder as `future-design-canvas.html`**, and set `headline.image` to its filename (e.g. `"headline-2040.png"`) so the canvas can render it. Because the canvas loads the image by relative path, it must sit next to the HTML — a bare URL works too, but a local file next to the canvas is the reliable default.

> **Full access / file-write permission required for the headline image.** Generating the artifact AND saving it next to the canvas writes a new file to the student's disk. If the agent is running in a restricted / read-only / ask-every-time mode, this write (and the `future-design-canvas-state.json` update that points to it) will be blocked, the image won't appear on the page, and the live sync will silently miss it. **Before generating the Tomorrow Headline image, tell the student to grant the agent full access / file-write permission** (Codex: run with full-access / approve file writes; Claude Code: allow write to the working folder; other agents: enable file write / "full access" mode). Then save the image, update `headline.image`, and confirm the canvas shows it.

Use zero-based `current`: Stage 1 is `0`, Stage 2 is `1`, and so on. Advance `current` as the discussion moves forward so the live canvas highlights the active stage. Keep `lang` as `zh` or `en`.

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
