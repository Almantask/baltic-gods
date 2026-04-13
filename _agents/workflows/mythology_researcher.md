---
description: Mythology Researcher Workflow
---

// turbo-all
# Mythology Researcher Workflow

This workflow orchestrates two distinct AI agents to ensure mythological accuracy and rich content creation:
1. **LLM Researcher**: Retrieves raw mythological data, tales, and historical context from internal knowledge.
2. **Editor**: Verifies the researcher's findings using web search tools, cross-references academic sources, and explicitly flags any claims lacking verifiable references.

Select the appropriate workflow variant below based on the task at hand.

---

## Variant 1: Researching a specific tale/entity/legend/person/place

**Step 1: LLM Researcher - Initial Data Gathering**
- Find the specific mythological entity, place, or tale requested.
- **Target**: Extract name, region, tribe, period/first mention (e.g., 14th century), and associated sacred sites or beings.
- Draft a brief story (3-4 paragraphs) in English based on internal knowledge.

**Step 2: Editor - Verification & Referencing**
- Fact-check the LLM Researcher's draft by searching the web.
- **Target**: Find at least 2 primary or secondary academic references for the entity/tale.
- **FLAGGING**: If no reliable academic references can be found, **stop and flag** the entity for the user before proceeding. Never commit unverified claims.
- Validate the region, tribe, and historical period against search results.

**Step 3: Content Creation & Storage**
- Create `src/content/stories/en/[slug].mdx` with the verified English content.
- Update `src/content/stories/meta.ts` (or `deities/meta.ts`) with the validated metadata (`regionDetails`, `tribe`, `period`, `references`, `beings`, `locationIds`).

---

## Variant 2: Fact checking, cross referencing, and flagging

**Step 1: LLM Researcher - Content Review**
- Review existing `.mdx` stories or metadata entries in `src/content/`.
- Extract key claims, dates, tribal associations, regional specifics, and deity relationships.

**Step 2: Editor - Web Cross-Referencing**
- Use web search to cross-reference the extracted claims against academic sources, mythology databases, or established encyclopedias.
- Identify any discrepancies between the existing codebase content and verified external research.

**Step 3: Flagging & Correction**
- **FLAG**: Explicitly flag any unverified claims or statements missing references.
- Propose corrections to the `.mdx` files or metadata.
- Ensure the `references` array in metadata contains at least 2 verifiable sources per entry.

---

## Variant 3: Translating all content to 3 languages

**Step 1: LLM Researcher - Translation Generation**
- Take the verified English markdown content and metadata summaries.
- Translate the story, titles, and metadata fields (`regionDetails`, `tribe`, `period`) into **Lithuanian (lt)** and **Latvian (lv)**.
- Ensure mythological terms are accurately localized natively (e.g., Perkūnas vs Pērkons).

**Step 2: Editor - Linguistic Verification**
- Quality-check the Latvian and Lithuanian translations for accuracy.
- Search the web for localized mythological terminology if a specific translation is ambiguous or if dialects require specific spellings.

**Step 3: Storage**
- Create and store the translated files:
  - `src/content/stories/lt/[slug].mdx`
  - `src/content/stories/lv/[slug].mdx`
- Update `meta.ts` objects to ensure { en, lt, lv } formats are completed for regional, tribal, and period data.