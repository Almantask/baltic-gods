# Baltic Gods — Project Instructions for AI Agents

This is a **Next.js** web application that serves as a digital compendium of Baltic mythology (Lithuanian, Latvian, Old Prussian).

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: PostCSS
- **Content**: MDX files for stories, TypeScript meta files for structured data
- **Testing**: Jest (unit), Playwright (E2E)
- **Linting**: ESLint

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
_agents/
  research/            — Research files and checklist
  skills/              — Skill definitions (mythology_researcher)
  agents/              — Legacy agent definitions
  workflows/           — Workflow definitions
.github/agents/        — VS Code Copilot custom agent definitions
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

- The research checklist is at `_agents/research/baltic_mythology_checklist.md`
- Academic sources are catalogued at `_agents/skills/mythology_researcher/resources/sources.md`
- Never commit unverified mythology claims — flag uncertainties explicitly
- Prioritize native-language (Lithuanian/Latvian) sources over English summaries
