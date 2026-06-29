---
name: project-asset-archive
description: Create and maintain a structured local project archive for Future Design student projects, including method outputs, generated assets, prompts, and final deliverables.
---

# Project Asset Archive

Purpose: keep each student's project organized locally from method to final submission.

Create this structure:

```text
<project-root>/
├── 00_project-brief/
├── 01_method-process/
├── 02_research-materials/
├── 03_visual-assets/
├── 04_prototypes/
├── 05_documents/
├── 06_presentations/
├── 07_video-audio/
├── 08_delivery/
└── 09_ai-process-log/
```

Maintain:
- `00_project-brief/project-input-package.md`
- `09_ai-process-log/asset-index.md`
- `09_ai-process-log/prompts.md`
- `09_ai-process-log/version-history.md`

Rules:
- Save source files and final exports separately.
- Never overwrite meaningful versions; use `v01`, `v02`, or `final`.
- Log important prompts and asset paths.
- Put final submission files in `08_delivery/final-submission/`.
