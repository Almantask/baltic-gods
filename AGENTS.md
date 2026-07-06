# Baltic Gods — Project Instructions for AI Agents

This is a **Next.js** web application that serves as a digital compendium of Baltic mythology (Lithuanian, Latvian, Old Prussian).

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: PostCSS
- **Content**: MDX files for stories, TypeScript meta files for structured data
- **Testing**: Jest (unit), Playwright (E2E)
- **Linting**: ESLint

## Orchestrated Development & Research Pipeline

The project uses a two-stage orchestrated pipeline for features and mythological content:

### Stage 1: Development & Data Gathering (Parallel)
- **Senior Frontend Engineer**: Expert in Next.js, TypeScript, and modern frontend best practices. Specialized in Gemini and GitHub integrations.
- **Senior QA Engineer**: Expert in automated testing, ensuring code quality and regression prevention. Specialized in Playwright, Jest, and Testing Library.
- **Research Orchestrator**: Coordinates Baltic mythology research. Spawns Browser and LLM researchers, cross-checks findings, and synthesizes finalized metadata and content.
  - **LLM Researcher**: Investigates Baltic mythology using internal knowledge and flags potential hallucinations.
  - **Browser Researcher**: Investigates Baltic mythology using internet search and browser capabilities for real-world verification.

### Stage 2: Quality Control & Validation (Parallel)
- **Code Reviewer**: Specialized in code efficiency, performance optimization, and architectural integrity.
- **Product Designer**: Expert in UX, UI, and accessibility. Focused on the usability and aesthetic appeal of the platform.

### Stage 3: Post-Review Fixes (Iterative)
- **Senior Frontend Engineer & QA**: Addresses technical/UX feedback and updates tests.
- **Research Orchestrator**: Resolves content inconsistencies and ensures full verification.

All coordination is managed by the **Orchestrator** agent as defined in `ai/workflows/orchestrated_dev_pipeline.md`.

## Project Structure

```
src/
  content/
    deities/meta.ts    — Deity metadata (DeityMeta interface)
    stories/
      meta.ts          — Story metadata (StoryMeta interface)
      en/[slug].mdx    — English story content
      lt/[slug].mdx    — Lithuanian translations
      lv/[slug].mdx    — Latvian translations
  types/content.ts     — TypeScript interfaces for all content types
ai/
  research/            — Research files and checklist
  skills/              — Antigravity skill definitions
  agents/              — Antigravity agent definitions (source of truth)
  workflows/           — Antigravity workflow definitions (source of truth)
.github/agents/        — VS Code Copilot custom agents (symbolic links)
.gemini/agents/        — Gemini CLI agents (symbolic links)
```

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm test             # Run Jest tests
npx playwright test  # Run E2E tests
```

## Content Guidelines

### Metadata Requirements (MANDATORY)

Every deity and story entry **must** include:
1. **Region** — sub-region (Samogitia, Aukštaitija, Latgale, etc.)
2. **Tribe** — specific group (Curonians, Semigallians, Lithuanians, Pruthenians)
3. **Period** — century of earliest known mention
4. **References** — at least 2 primary/secondary academic sources

### Multilingual Content

All summaries and titles must be provided in three languages:
- `en` — English
- `lt` — Lithuanian
- `lv` — Latvian

### Metadata Schema

```typescript
// regionDetails, tribe, period use this shape:
{ en: "...", lt: "...", lv: "..." }

// references is an array of strings:
["Author: Title", "Archive ID"]

// beings maps to deity slugs:
["perkunas", "laima"]

// locationIds maps to location IDs:
["aukstaitija-oaks"]
```

## Code Style

- Use TypeScript strict mode
- Prefer named exports
- MDX stories import meta from `../meta`
- Use semantic HTML elements
- Follow existing patterns in `src/content/` for new entries

## Research & Verification

- The research checklist is at `ai/research/baltic_mythology_checklist.md`
- Academic sources are catalogued at `ai/agents/research_orchestrator/resources/sources.md`
- Never commit unverified mythology claims — flag uncertainties explicitly
- Prioritize native-language (Lithuanian/Latvian) sources over English summaries
