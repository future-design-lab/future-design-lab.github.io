# Stage Guides

Use this file as the detailed set of "small skills" inside the Future Design Thinking Workshop. Each stage has a job, required inputs, method, output, and completion check.

## How to run each stage (read this first)

For every stage below, follow the same discipline (full rules in `SKILL.md` → Conversation Pattern):

1. **Retrieve before you generate.** Search the course knowledge base `https://future-design-lab.github.io/` (案例库 = `/cases/*` + `materials/extracted/case-*.md`; 语料库 = `/corpus/*` + `materials/extracted/corpus-*.md`). Each stage below names what to pull. Bring 1-3 entries in *with their codes/sources* as sparks.
2. **Diverge first — ask, then wait.** Use the Facilitation prompts as open questions to the user. Pose them and **stop**; do not answer them yourself or pre-fill the artifact. The user's thinking is required input.
3. **Co-write, don't hand over.** Draft the artifact as a proposal for critique, then let the user confirm or revise.
4. **Gate before advancing.** Do not move to the next stage until ALL of: (a) every **Required canvas fields** entry below is filled with real content in `future-design-canvas-state.json`; (b) the **Completion check** genuinely passes; (c) the user has confirmed "this is complete, move on." If any fails, name the thin field and ask the targeted question — do not silently advance `current`.

Required canvas fields map 1:1 to the cards in `future-design-canvas.html`. The canvas state keys per stage are: `brief, signals, steep, challenge, pairing, interpretation, provotyping, headline, backcasting, proposal`.

## Table of Contents

1. Workshop Brief Framing
2. Future Signals
3. STEEP Analysis
4. Local Challenge
5. Signal-Challenge Pairing
6. Interpretation
7. Provotyping Card
8. Tomorrow Headline
9. Backcasting
10. Final Proposal Assembly

## 1. Workshop Brief Framing

Purpose: Define the design arena before collecting signals.

Read first: User request, attached materials, prior conversation.

Method:
- Identify target place, community, industry, or public issue.
- Clarify target years. Default to 2030, 2040, and 2050.
- Clarify the intended output: workshop facilitation, concept proposal, slide content, research plan, or strategy.
- Set boundaries: what must remain local, what can be speculative, and who the proposal should persuade.

Facilitation prompts:
- What place or community should this future belong to?
- Which group should benefit first?
- Are we designing for 2030, 2040, 2050, or all three?
- What would make the future desirable but still debatable?

Output: Workshop Brief.

Required canvas fields (`brief`): `topic`, `context`, `users`, `horizon`, `question` — all filled.

Completion check (gate):
- The topic, target context, primary users, and time horizon are explicit and specific (not "education" but "AI education for K-12 students in first-tier Chinese cities").
- The framing `question` names a real tension worth a future inquiry.

## 2. Future Signals

Purpose: Find weak signals, emerging trends, technologies, product cases, social shifts, policy shifts, or cultural changes that suggest possible futures.

Read first: Workshop Brief.

Retrieve before generating: pull 2-4 concrete signals from the **corpus library (语料库)** — `https://future-design-lab.github.io/corpus/*` or `materials/extracted/corpus-1..4.md` (entries like `IE-01 MOXIE 电解制氧`). Present them with their codes/sources as real observed signals, then ask the user which resonate or collide with their topic.

Method:
- Collect 5-10 signals. If browsing or current research is needed, use up-to-date sources; otherwise ask the user to supply known signals or generate plausible hypotheses and label them as hypotheses.
- Separate signals from trends: a signal is a concrete observed event or case; a trend is the broader direction inferred from several signals.
- For each signal, note source/context, affected actors, and why it matters.
- Select 1-3 signals with the strongest relevance and tension.

Facilitation prompts:
- What small change today could become normal by 2050?
- What new behavior already exists at the edge?
- What technology, policy, or social experiment feels strange now but could scale?
- Which signal creates both opportunity and discomfort?

Output: Future Signals List and Selected Signal.

Required canvas fields (`signals`): `selected`, `trend`, `risk` — all filled.

Completion check (gate):
- At least one selected signal is concrete enough to describe as an observed case, not only an abstract trend.
- The `risk`/tension is named, not just the upside.

## 3. STEEP Analysis

Purpose: Expand each selected signal across macro dimensions so the design does not become technology-only.

Read first: Selected Future Signal(s).

Method:
- Analyze each selected signal through Social, Technological, Economic, Environmental, and Political lenses.
- Write implications, not definitions.
- Identify second-order effects: who gains, who loses, what systems need to change.
- Mark uncertainty and possible ethical tensions.

Facilitation prompts:
- What new social norms does this signal imply?
- What technical infrastructure must exist?
- What becomes cheaper, more expensive, or newly valuable?
- What environmental burden or benefit appears?
- What policies, rights, or governance questions emerge?

Output: STEEP Analysis.

Required canvas fields (`steep`): `social`, `tech`, `economic`, `environment`, `political` — all five filled with a future implication (not a definition).

Completion check (gate):
- Each STEEP dimension contains a future implication relevant to the workshop topic. An empty or one-word dimension fails the gate.

## 4. Local Challenge

Purpose: Anchor the future inquiry in a real, situated issue.

Read first: Workshop Brief and STEEP Analysis.

Retrieve before generating: scan the **case library (案例库)** — `/cases/*` or `materials/extracted/case-1..4.md` — for projects facing an analogous lived friction, and ask the user whether the parallel sharpens or reframes their challenge.

Method:
- Define the challenge as a present-tense reality in a place, community, or industry.
- Name the affected people and their lived friction.
- Identify why current approaches are insufficient.
- Connect the challenge to social market context: demand, access, institutions, habits, resources, and constraints.

Facilitation prompts:
- Who experiences the problem most directly?
- What is already happening around them?
- Why have existing solutions failed or stalled?
- How might this challenge become more severe or change shape by 2030/2040/2050?

Output: Local Challenge Brief.

Required canvas fields (`challenge`): `challenge`, `place`, `people`, `pain`, `limits` — all filled.

Completion check (gate):
- The challenge is specific, observable, and linked to named affected actors. A generic "people struggle with X" fails the gate.

## 5. Signal-Challenge Pairing

Purpose: Create the productive collision between future possibility and local reality.

Read first: Selected Signal(s), STEEP Analysis, Local Challenge Brief.

Method:
- Pair one signal with one local challenge.
- Write 2-4 "if this signal grows, then this challenge may transform into..." hypotheses.
- Compare hypotheses using relevance, novelty, local fit, desirability, and controversy.
- Select one main hypothesis.

Facilitation prompts:
- If this signal became normal, what would happen to this challenge?
- What new need, right, service, institution, or relationship would appear?
- What would be exciting? What would be risky?
- Which pairing feels locally meaningful rather than generic?

Output: Signal-Challenge Pair and Future Hypothesis.

Required canvas fields (`pairing`): `signal`, `challenge`, `hypothesis`, `direction` — all filled.

Completion check (gate):
- The chosen hypothesis clearly links one signal to one local challenge through a causal logic ("if this signal grows, then this challenge transforms into…").

## 6. Interpretation

Purpose: Translate the signal-challenge hypothesis into a concise future logic.

Read first: Signal-Challenge Pair and Future Hypothesis.

Method:
- Write a sentence or short paragraph explaining how the future signal changes the local challenge.
- Include actor, system change, value shift, and design opportunity.
- Use "magic if" prompts to expand possibilities, then converge.
- Keep the language strategic and concrete.

Magic-if prompts:
- What if this challenge became a public right rather than a private burden?
- What if AI shifted from automation to community capability-building?
- What if the affected group became producers of solutions, not recipients?
- What if the service moved from centralized institutions to local hubs?
- What if the most vulnerable users defined the system standard?

Output: Interpretation.

Required canvas fields (`interpretation`): `sentence`, `actors`, `system`, `value`, `opportunity` — all filled.

Completion check (gate):
- The interpretation can be understood as the bridge between research and concept, and names the actor, system change, value shift, and design opportunity.

## 7. Provotyping Card

Purpose: Create a provocative future concept card that can be discussed, challenged, and improved.

Read first: Interpretation, plus Future Signals and Local Challenge for grounding.

Retrieve before generating: borrow design methods (设计手法: 具身化 / 仪式化 / 生成 / 迁移 / 通感 / 模拟…) and 未来影响 framings from matching **case library** entries, and ask the user which mechanism fits their concept.

Method:
- Name the concept.
- Describe the future system, product-service, policy, or community model.
- Include target users, core mechanisms, roles, benefits, risks, and evidence from previous artifacts.
- Make it specific enough to imagine but open enough to debate.
- Avoid reducing the concept to "an app" unless the app is only one touchpoint in a broader system.

Facilitation prompts:
- What new service, platform, policy, ritual, or infrastructure appears?
- Who operates it? Who pays? Who governs?
- What does a user do differently because this exists?
- What would critics worry about?

Output: Provotyping Card.

Required canvas fields (`provotyping`): `name`, `oneLine`, `users`, `mechanism`, `risks` — all filled.

Completion check (gate):
- The card explains concept, users, mechanism, value, and controversy. A card that is only an app name fails the gate.

## 8. Tomorrow Headline

Purpose: Make the future tangible by writing fictional news from inside the future.

Read first: Provotyping Card and Interpretation.

Method:
- Pick a future year. Use 2030 for early implementation, 2040 for scaled systems, 2050 for transformed society.
- Write a news title and short article. Include place, actors, what changed, how it was achieved, and why it matters. Add a quote or controversy if useful. Optionally create separate headlines for 2030, 2040, and 2050.
- **The Tomorrow Headline is delivered as a generated IMAGE, not as text on the page.** The canvas `headline.image` field must hold a real image path — text alone does not satisfy this stage. The image should look like a newspaper front page, a 微博/social-media trending headline card, a news website hero, a civic announcement poster, a dramatic launch visual, or a future media screenshot — a believable piece of future news media, not a generic illustration.
- **Generate the image with the `generate-multimodal-media` skill** (do not just describe it, and do not leave a text placeholder):
  1. First discuss with the user and **agree on the headline image**: which medium (报纸头版 / 微博热搜 / 新闻网站 / 公告海报 / 发布会大屏), the future year, the headline text shown in the image, the visual tone, and the key scene. Confirm before generating.
  2. Once confirmed, **call `generate-multimodal-media`** to produce the image (image model `gpt-image-2` via `POST /images/generations` at `https://llm.mantai.me/v1`; the skill handles `MANTA_API_KEY`). If that skill is not yet installed, install it from `assets/downloads/generate-multimodal-media.zip` first.
  3. Build the image prompt from the agreed details: the medium/layout, the actual headline + subheadline text to render, place and year, the central future scene, and a news/launch mood. Aim for a wide news layout (e.g. `size` 1536x1024 or similar) so it reads as a front page / hero.
  4. **Save the returned image** into the project / live-preview folder (next to `future-design-canvas.html`, e.g. `headline-2040.png`) and write that path to `headline.image` in `future-design-canvas-state.json` so the canvas renders it.
  5. Show the result to the user and offer to regenerate or refine (different medium, tone, or headline wording) before locking the stage.

Facilitation prompts:
- What would a newspaper report if this concept succeeded?
- What measurable change would make the headline credible?
- Who celebrates this future? Who questions it?
- What image would accompany the article?

Output: Tomorrow Headline text + Tomorrow Headline image.

Required canvas fields (`headline`): `year`, `place`, `headline`, `subheadline`, `story`, `image` — all filled (`image` = path to the generated visual once produced).

Completion check (gate):
- The headline reads like a plausible future news story, not a marketing slogan.
- `headline.image` points to a **real generated image file** (produced via `generate-multimodal-media`), saved next to the canvas and rendering on the page. A text-only headline with no image **fails** this gate.
- The image makes the future scenario immediately visible and carries a news or launch feeling rather than reading as a generic illustration.

## 9. Backcasting

Purpose: Convert the preferred future into a roadmap from future to present.

Read first: Tomorrow Headline and Provotyping Card.

Method:
- Start with the 2050 goal. Do not begin with today's constraints.
- Define what must be true by 2040 for the 2050 goal to be possible.
- Define what pilots, policies, partnerships, and behaviors must start by 2030.
- Use role columns. Default roles: public actor/government, business/service actor, individual/community.
- For each cell, write concrete actions, not aspirations.

Facilitation prompts:
- If the 2050 headline is true, what institutions must exist?
- What must be proven by 2030?
- What must scale by 2040?
- What must each role do that no other role can do?

Output: Backcasting Roadmap.

Required canvas fields (`backcasting`): `goal2050`, `measures2040`, `measures2030`, `public`, `business`, `community` — all filled.

Completion check (gate):
- The roadmap has 2050 goals, 2040 system-building measures, and 2030 starter actions across all three role columns (public / business / community). A blank role column fails the gate.

## 10. Final Proposal Assembly

Purpose: Package the workshop outputs into a coherent design proposal.

Read first: All completed artifacts.

Method:
- Present the logic in this order: brief, signals, STEEP, local challenge, pairing, interpretation, provotyping card, tomorrow headline, backcasting, risks, next experiments.
- Preserve the chain of reasoning so readers can see how the proposal emerged.
- Add assumptions and open questions.
- Add immediate next steps for validation or prototyping.

Facilitation prompts:
- What does the audience need to believe first?
- Which artifact best communicates the future?
- What needs testing with real stakeholders?
- What is the smallest pilot that can create evidence?

Output: Final Future Design Proposal.

Required canvas fields (`proposal`): `title`, `summary`, `risks`, `experiments` — all filled.

Completion check (gate):
- The proposal can stand alone and includes both imagination and implementation logic, plus named risks and concrete next experiments.
