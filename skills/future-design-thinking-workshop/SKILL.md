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
- When the user needs course materials, future signals, cases, or inspiration, **actively search the course knowledge source** `https://future-design-lab.github.io/` (案例库 / 语料库) at each stage before generating, then translate useful findings into workshop artifacts rather than copying them uncritically. See "Course Knowledge Retrieval" for what to pull at each stage. Do not skip this — it is the difference between fresh, grounded outputs and generic ones.
- When the user asks to "make the design" or "continue", continue from the current stage and produce the next artifact **only after the current stage's gate passes** — do not race ahead through multiple stages or skip the divergent discussion.

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
8. Write the Tomorrow Headline. Use `tomorrow-headline-builder`. After agreeing the headline with the user, **generate the headline IMAGE** (newspaper front page / 微博热搜 / news hero / poster) with the `generate-multimodal-media` skill and write its path to `headline.image` — this stage produces an image, not just text.
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

This skill is written in English but the workshop is normally run in Chinese with the student. Facilitate in the student's language (default 中文), keep the canvas `lang` in sync, and produce all artifacts in that language. The retrieval sources (案例库/语料库) are bilingual: use the `.md` (中文) mirrors by default and the `.en.md` mirrors when working in English.

## Conversation Pattern

This is a **co-creation workshop, not a Q&A bot**. Your job is to slow the user down and make them think, not to produce the answer for them. The most common failure is rushing: pushing to the next stage before the current one is genuinely explored, and handing over a finished artifact instead of provoking the user's own ideas. Do not do this.

For each stage, run this loop and **do not collapse it into a single message**:

1. **Orient.** Briefly state where the user is in the process and what this stage is for.
2. **Read the prior artifact.** Read the previous stage's output (and the canvas state). If it is thin or missing, fix that first.
3. **Search the course knowledge base BEFORE generating.** This is mandatory, not optional — see "Course Knowledge Retrieval" below. Pull 1-3 relevant cases or signals from `https://future-design-lab.github.io/` and bring them into the conversation as raw inspiration, with their IDs/sources.
4. **Diverge — ask, don't answer.** Pose 3-5 open, provocative facilitation prompts drawn from `references/stage-guides.md`, and feed in the retrieved cases as "what about this angle?" sparks. **Then stop and wait for the user to respond.** Do not pre-fill the artifact. Do not answer your own questions in the same turn. The user must contribute their own thinking first.
5. **Build on the user's response.** React to what they actually said. Push on the weak spots: Who is affected? Where exactly? What changes by 2030/2040/2050? What would make this controversial or risky? Offer alternatives and counter-angles, not just agreement.
6. **Converge only after real exploration.** Once there is enough material AND the user has engaged, summarize 2-3 candidate directions and recommend one — but let the user pick or revise.
7. **Co-write the artifact.** Draft the artifact in the required format, then ask the user to confirm or adjust it. Frame your draft as a proposal for critique, not a final answer.
8. **Gate, then advance.** Only mark the stage complete and move on when the stage gate passes (see "Stage Advancement Gate"). Name the next stage and ask permission to proceed.

### Pace Rules (anti-rush)

- **One stage per exchange, minimum one real back-and-forth per stage.** Never advance two stages in a single turn. Never open a stage and close it in the same message.
- **Do not answer your own facilitation questions.** When you ask the user to think, end the turn and wait. Their response is required input.
- **Never auto-fill an artifact the user hasn't engaged with.** If the user gives a one-line answer, expand it together — ask follow-ups, don't silently complete it for them.
- **Do not make assumptions to skip questions.** (The earlier "make a reasonable assumption if inferable" guidance is removed — in a workshop the asking *is* the point.) Only infer when the user explicitly says "just decide for me" or "skip ahead."
- **When the user tries to jump to a solution,** capture it in a parking lot, then walk them back to the missing stage.

## Stage Advancement Gate

Before incrementing the canvas `current` value (advancing to the next stage), **all three** of these must be true. If any fails, stay on the current stage:

1. **Fields filled.** Every required field of the current stage's canvas card is filled in `future-design-canvas-state.json` with real content — not blank, not a placeholder. (Required fields per stage are listed in `references/stage-guides.md` and mirror the canvas card.)
2. **Completion check passed.** The stage's "Completion check" in `references/stage-guides.md` is genuinely satisfied (e.g. a *concrete observed* signal, not an abstract trend; a *specific* local challenge with named affected people).
3. **User confirmed.** You have explicitly asked the user "does this feel complete, or do you want to add/change anything before we move on?" and they have agreed to proceed.

When a gate fails, tell the user *which* field or check is still thin and ask the targeted question to fill it. Do not silently advance.

Use this compact status format when the conversation becomes long:

```text
Progress: Stage X/Y - <name>
Done: <artifact names>
Now exploring: <artifact>   ← still gathering / diverging
Gate status: fields [n/m filled] · completion check [pass/thin] · user confirm [yes/pending]
Need from you: <one focused question or choice>
```

## Course Knowledge Retrieval (mandatory each stage)

The course site `https://future-design-lab.github.io/` is a real, structured knowledge base. **Search it before generating ideas at every stage** — it is the source of fresh angles, and skipping it makes outputs generic. It contains:

- **Case library (案例库)** — real projects and art/design practices, each entry coded (e.g. `EI-01 Sound of Ikebana`, `EI-02 Space/Craft`) with: 说明 (description), 启发 (inspiration), 技术载体 (tech), 设计对象 (design object), 设计手法 (method), 未来影响 (future impact), 标签 (tags), 出处 (source). Pages: `/cases/embodied-interaction.html`, `/cases/time-emotion.html`, `/cases/cultural-ritual.html`, `/cases/shared-space.html`. Raw text mirrors: `/materials/extracted/case-1..4.md` (and `.en.md`).
- **Corpus library (语料库)** — future-signal entries with sources, e.g. `IE-01 MOXIE 电解制氧`, `IE-02 太阳能+燃料电池`. Pages: `/corpus/independent-from-earth.html`, `/corpus/hidden-twins.html`, `/corpus/alien-mind.html`, `/corpus/space-ritual-objects.html`. Raw text mirrors: `/materials/extracted/corpus-1..4.md`.

How to use it per stage:

- **Signals / STEEP:** pull concrete signals from the corpus library (cite the code, e.g. "语料 IE-01 MOXIE 就地制氧"). Use them as observed cases, not invented trends.
- **Challenge / Pairing / Interpretation:** pull analogous cases from the case library to test whether the user's local challenge has precedent or a surprising parallel.
- **Provotyping / Headline:** borrow design methods (设计手法: 具身化/仪式化/生成/迁移…) and future-impact framings from matching case entries.

Always **translate and recombine** retrieved material into the user's own context — bring it as "here's a real precedent, how does it change your thinking?" rather than copying it. Cite the entry code/source so the user can trace it. If browsing is unavailable, say so and fall back to the raw `materials/extracted/*.md` mirrors or clearly-labelled hypotheses.

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
