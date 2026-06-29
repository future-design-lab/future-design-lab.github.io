---
name: future-design-project-controller
description: Orchestrate the full Future Design student project workflow from method exploration through production skills, local asset archiving, and final delivery check.
---

# Future Design Project Controller

Purpose: coordinate the big workflow and call smaller skills in order.

Default sequence:
1. `future-signal-scout`
2. `steep-analysis`
3. `local-challenge-framing`
4. `signal-challenge-pairing`
5. `future-interpretation-builder`
6. `provotyping-card-builder`
7. `tomorrow-headline-builder`
8. `backcasting-roadmap-builder`
9. `project-presentation-router`
10. `project-asset-archive`
11. Production skills as needed: `documents`, `imagegen`, `Presentations`, `playwright`, Figma skills, `xyq-nest-skill`, `spreadsheets`, deploy skills.
12. `project-delivery-checker`

Rules:
- Do not skip missing method artifacts.
- Every later skill reads the previous artifact.
- Every generated asset is saved into the local project archive.
- Keep the user oriented with current stage, completed artifacts, and next decision.
