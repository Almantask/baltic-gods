---
name: research
description: Gathers a rich variety of interesting facts, legends, sacred locations, deity relationships, and folk superstitions about a deity or mythological subject, timeboxed to 1 minute of parallel research. Use when researching a deity, looking up myths, legends, folk beliefs, or folklore databases.
---

# Research Skill

Gathers as many interesting and diverse facts (legends, locations, relationships, people superstitions, rumors, etc.) as possible on a given subject, using a 1-minute timeboxed parallel research pipeline.

## Quick Start

```
/research Medažeina
```

## Parallel Research Workflow

When a research task is initiated for a subject:

### 1. Spawn Subagents (In Parallel)
Use `invoke_subagent` to spawn 5 concurrent research subagents, timeboxed to 1 minute each:

- **LT Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LT Academic Archivist
  - **Prompt**: Search for academic articles, VLE (vle.lt), Alkas.lt, and folklore studies about '[Subject]'. Focus on extracting interesting facts, legends, or early recorded beliefs. Gather as many distinct details as possible. Identify specific URLs.
- **LT Browser Researcher 2 (Folklore & Chronicles)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LT Folklorist & Chronicler
  - **Prompt**: Search Jonas Basanavičius folklore archives, llti.lt, and historical chronicles (Łasicki, Stryjkowski) for tales, sacred groves, stones, and rituals associated with '[Subject]'. Extract unique legends, superstitions, local rumors, and relationships to other beings. Identify specific URLs.
- **LV Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Academic Archivist
  - **Prompt**: Search Latvian National Encyclopedia (enciklopedija.lv) and academic repositories for '[Subject]'. Identify interesting facts, linguistic links, connections to nature, and historical details. Avoid dry bibliographies, focus on narrative details. Identify specific URLs.
- **LV Browser Researcher 2 (Folklore & Dainas)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Folklorist & Dainas collector
  - **Prompt**: Search lfk.lv (Latvian Folklore Archives) and dainuskapis.lv (Krišjānis Barons Dainas) for folk songs, tales, sacred mounds, and rituals associated with '[Subject]'. Extract as many distinct legends, superstitions, and local beliefs as possible. Identify specific URLs.
- **LLM Researcher**:
  - **TypeName**: `llm-researcher`
  - **Role**: LLM Internal Knowledge Researcher
  - **Prompt**: Query internal knowledge database for '[Subject]'. Extract interesting stories, visual descriptions/iconography, relationships to other deities, cognates across Baltic tribes, and folk superstitions. Flag potential 19th-century romantic additions/speculations.

---

### 2. Review and Merge Reports
Once all 5 subagents report back:

1. **Synthesize and Categorize Facts**:
   - Consolidate all gathered details.
   - Organize facts into categories:
     - **Legends & Tales**: Narratives, stories, myths.
     - **Sacred Locations**: Groves, stones, hills, geographical sites.
     - **Relationships & Connections**: Cognates, families, dynamics with other spirits/deities.
     - **Folk Superstitions & Rituals**: Offerings, taboos, peasant beliefs, agricultural associations.
     - **Speculations & Rumors**: Chronicler accounts, potential romantic additions.
2. **Prioritize Diverse Facts**:
   - Focus on maximizing the number of interesting, narrative facts rather than dry academic dates/authors.
3. **Validate Academic References (MANDATORY)**:
   - Ensure there are **at least 2 academic references** captured as secondary context, but keep these separate from the main fact sheet.
4. **Localize Metadata & Summaries**:
   - Formulate titles, summaries, and facts for `{ en, lt, lv }`.
5. **Code Ingestion**:
   - Update metadata in [deities/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) or [stories/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/stories/meta.ts).
   - Write the story content MDX files in `src/content/stories/en/[slug].mdx`.
   - Update `ai/research/baltic_mythology_checklist.md` with the new records.
