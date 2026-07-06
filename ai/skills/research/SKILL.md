---
name: research
description: Runs the full fanned-out parallel research workflow (2 LT browser agents, 2 LV browser agents, and 1 LLM agent) for a given deity, then cross-checks and merges results. Use when the user requests deep research or types /research for a deity.
---

# Research Skill

Runs the full fanned-out parallel research pipeline to gather online academic references, folk database contents, and internal LLM training knowledge, then performs a complete review, fact-check, and data merge.

## Quick Start

```
/research Medažeina
```

## Parallel Research Workflow

When a deep research task is initiated for a deity:

### 1. Spawn Subagents (In Parallel)
Use the `invoke_subagent` tool to spawn 5 concurrent research subagents:

- **LT Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser_researcher`
  - **Role**: LT Academic Archivist
  - **Prompt**: Search for academic articles, VLE (vle.lt), Alkas.lt, and ResearchGate papers about '[Deity Name]'. Focus on etymology, earliest mentions, and historical context. Identify specific URLs.
- **LT Browser Researcher 2 (Folklore & Chronicles)**:
  - **TypeName**: `browser_researcher`
  - **Role**: LT Folklorist & Chronicler
  - **Prompt**: Search Jonas Basanavičius folklore archives, llti.lt, and historical chronicles (Łasicki, Stryjkowski) for tales, sacred groves, stones, and rituals associated with '[Deity Name]'. Identify specific URLs.
- **LV Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser_researcher`
  - **Role**: LV Academic Archivist
  - **Prompt**: Search Latvian National Encyclopedia (enciklopedija.lv) and LU/LKA academic repositories for '[Deity Name]'. Focus on linguistic reconstructions, Livonian chronicles, and academic interpretations. Identify specific URLs.
- **LV Browser Researcher 2 (Folklore & Dainas)**:
  - **TypeName**: `browser_researcher`
  - **Role**: LV Folklorist & Dainas collector
  - **Prompt**: Search lfk.lv (Latvian Folklore Archives) and dainuskapis.lv (Krišjānis Barons Dainas) for folk songs, tales, sacred mounds, and rituals associated with '[Deity Name]'. Identify specific URLs.
- **LLM Researcher**:
  - **TypeName**: `llm_researcher`
  - **Role**: LLM Internal Knowledge Researcher
  - **Prompt**: Query internal knowledge database for '[Deity Name]'. Identify cognates across Baltic tribes, known visual iconography, and flag any 19th-century romantic additions or potential hallucination risks.

---

### 2. Review and Merge Reports
Once all 5 subagents report back:

1. **Cross-Check Inconsistencies**:
   - Compare sub-regions, tribal details, and historical periods across all 5 reports.
   - Compile a list of contradictions and flag them for resolution.
2. **Validate Academic References (MANDATORY)**:
   - Ensure there are **at least 2 verifiable primary or secondary academic references**.
   - If references are lacking or unverified, stop and flag the deity as unverified to the user.
3. **Filter Out Romantic Pantheons**:
   - Identify 19th-century fabrications (e.g. Narbutt pantheon) and ensure they are removed or labeled clearly.
4. **Localize Metadata & Summaries**:
   - Formulate summaries and titles for `{ en, lt, lv }`.
5. **Code Ingestion**:
   - Write/update the deity metadata in [deities/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) or [stories/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/stories/meta.ts).
   - Write the story content MDX files in `src/content/stories/en/[slug].mdx`.
   - Update `ai/research/baltic_mythology_checklist.md` with the new records.
