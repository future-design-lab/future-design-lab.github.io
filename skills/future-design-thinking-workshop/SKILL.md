---
name: future-design-thinking-workshop
description: Guide users through a complete Future Design Thinking / Design Foresight workshop with AI co-creation; 用于未来设计工作坊、未来信号、STEEP、本地挑战、明日头条、Backcasting 和最终方案。
---

# Future Design Thinking Workshop

## Core Intent

Guide the user through a complete future design process: discover future signals, anchor them in local challenges, interpret the future logic, turn it into a provocative concept, narrate it as tomorrow's news, and backcast concrete actions for different roles. Keep the conversation open enough for imagination, but always preserve the workflow state and required outputs.

## Operating Principles

- Act as a facilitator, not just an answer generator.
- Keep a visible workshop state: current stage, completed artifacts, missing decisions, next artifact.
- Let users brainstorm freely, then synthesize their ideas into the required artifact format.
- Before starting any stage after Stage 1, read and reference the previous stage artifact. If it is missing, reconstruct it with the user before moving forward.
- Do not skip from a loose idea to a final solution. Move through signals, challenge, interpretation, future narrative, then backcasting.
- Treat AI outputs as draft material for critique. Ask what feels desirable, risky, local, believable, or ethically tense.
- Prefer system-level solutions over isolated app ideas: combine product/service, policy, community practice, business model, infrastructure, and personal behavior.
- When the user needs course materials, future signals, cases, or inspiration, search or reference `https://future-design-lab.github.io/` as the course knowledge source, then translate useful findings into workshop artifacts rather than copying them uncritically.
- When the user asks to "make the design" or "continue", continue from the current stage and produce the next artifact.

## Workflow State

Maintain this state in your working notes and, when helpful, show a compact version to the user:

```text
Workshop topic:
Target place / community / industry:
Target year(s):
Completed artifacts:
- Future Signals:
- STEEP:
- Local Challenge:
- Signal-Challenge Pair:
- Interpretation:
- Provotyping Card:
- Tomorrow Headline:
- Backcasting:
Current stage:
Next decision needed:
```

## Stage Flow

Run these stages in order unless the user explicitly supplies a complete artifact for a later stage:

1. Frame the workshop brief.
2. Collect and select Future Signals. Use `future-signal-scout` when running this as an independent sub-skill.
3. Analyze signals with STEEP. Use `steep-analysis`.
4. Define the Local Challenge. Use `local-challenge-framing`.
5. Pair Signal + Challenge. Use `signal-challenge-pairing`.
6. Write the Interpretation. Use `future-interpretation-builder`.
7. Create the Provotyping Card. Use `provotyping-card-builder`.
8. Write the Tomorrow Headline. Use `tomorrow-headline-builder`.
9. Build the Backcasting roadmap. Use `backcasting-roadmap-builder`.
10. Assemble the final proposal.
11. If course deliverables are needed, continue with `project-presentation-router`, `project-asset-archive`, production skills, and `project-delivery-checker`.

## Stage Instructions

For detailed step-by-step instructions, read `references/stage-guides.md` when running the workshop. It defines each small step as a sub-skill with purpose, inputs, method, facilitation prompts, output format, and completion check.

For artifact schemas, read `references/output-templates.md` before producing or revising formal outputs. Use those templates unless the user asks for another format.

For a more visual student-facing workflow, use `assets/future-design-canvas.html` and read `references/html-canvas.md`. The HTML canvas is a single-file workshop board with stage navigation, editable artifact cards, a synthesis canvas, Backcasting timeline, local autosave (browser localStorage), JSON export/import, and print support. It opens **blank at Stage 1** on first load.

This skill runs on the **student's own machine** (their local Codex / agent), so the agent, the canvas file, and the browser are all on the same computer. That makes true live sync possible. Open the canvas at the very first stage and keep it updated as the discussion progresses:

1. Copy `assets/future-design-canvas.html` and `assets/future-design-canvas-state.json` into a local working folder, e.g. `output/future-design-workshop/`.
2. **Start a local static server in that folder** and open the canvas via `http://localhost:<port>/future-design-canvas.html`. Example: `python3 -m http.server 8123` then open `http://localhost:8123/future-design-canvas.html`. Because the server runs on the student's own machine, `localhost` opens instantly — this is local, not remote.
3. As the conversation moves through the stages, **write the agreed result of each stage into `future-design-canvas-state.json`** (schema in `references/html-canvas.md`). The page polls that file and refreshes automatically — the canvas updates live during the discussion.
4. If a local server cannot be started, fall back to **file:// mode**: have the student double-click `future-design-canvas.html`. The page still opens blank and works manually. To reflect new progress, either (a) the student clicks **Import JSON** and loads the latest `future-design-canvas-state.json`, or (b) the agent edits the `bundledState` block inside the HTML and the student refreshes the page.

Always start at Stage 1 with a blank canvas. Never hand the student a remote `localhost` URL from a different machine.

After Stage 10, do not treat the process as finished if the user needs course deliverables. Read `references/post-workshop-production-router.zh-CN.md` and continue as the workflow controller for production: first organize the completed method outputs into a local student/team project folder, then recommend an appropriate mix of rich presentation formats, then call or install the needed production skills in sequence. Each production skill must read the prior artifact, save its output into the project folder, and update the asset/prompt index before the next skill runs.

Chinese mirrors are maintained in `SKILL.zh-CN.md`, `references/stage-guides.zh-CN.md`, `references/output-templates.zh-CN.md`, and `references/html-canvas.zh-CN.md`. When updating this skill, keep the English and Chinese versions semantically synchronized.

## Conversation Pattern

For each stage:

1. Briefly state where the user is in the process.
2. Read the previous artifact needed for this step.
3. Ask only the minimum question needed to unlock the next artifact, or make a reasonable assumption if the answer is inferable.
4. Encourage divergent thinking with 2-4 prompts when ideation is needed.
5. Converge by summarizing options and recommending one path.
6. Produce the artifact in the required format.
7. Mark the stage complete and name the next stage.

Use this compact status format when the conversation becomes long:

```text
Progress: Stage X/Y - <name>
Done: <artifact names>
Now creating: <artifact>
Need from you: <one focused question or choice>
```

## Quality Bar

A strong workshop output must have:

- A real future signal, not a generic trend slogan.
- A grounded local challenge with affected people and context.
- A clear causal logic connecting the signal to the challenge.
- A future concept that changes relationships, systems, services, or institutions.
- A Tomorrow Headline that makes the future tangible and debatable.
- A Backcasting path with actions for government/public actors, business/service actors, and individuals/community.
- Explicit uncertainty, risks, ethics, and assumptions.

## Recovery Rules

- If the user only has a theme, start at Stage 1.
- If the user brings a solution idea, reverse-engineer its likely signal and challenge before refining it.
- If the user jumps ahead, accept the energy, capture the idea in a parking lot, and return to the missing stage.
- If artifacts are vague, make them more specific by asking: Who is affected? Where does this happen? What changes by 2030/2040/2050? What would make this controversial?
- If the user asks for a final document, assemble all completed artifacts and explicitly label any gaps or assumptions.
