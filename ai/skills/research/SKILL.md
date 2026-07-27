---
name: research
description: Gathers a rich variety of interesting facts, legends, sacred locations, deity relationships, and folk superstitions about a deity or mythological subject, timeboxed to 1 minute of parallel research. Use when researching a deity, looking up myths, legends, folk beliefs, or preparing content for deity details pages.
---

# Research Skill

Gathers as many interesting and diverse facts (legends, locations, relationships, folk superstitions, rumors, etc.) as possible on a given subject, using a 1-minute timeboxed parallel research pipeline.

## Quick Start

```
/research Medažeina
/research Perkūnas
```

## Parallel Research Workflow

When a research task is initiated for a subject:

### 1. Spawn Subagents (In Parallel)
Use `invoke_subagent` to spawn 5 concurrent research subagents, timeboxed to 1 minute each:

- **LT Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LT Academic Archivist
  - **Prompt**: Search for academic articles, VLE (vle.lt), Alkas.lt, and folklore studies about '[Subject]'. Focus on etymology, chronicle mentions, and academic findings. Gather distinct details with specific URLs.
- **LT Browser Researcher 2 (Folklore & Chronicles)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LT Folklorist & Chronicler
  - **Prompt**: Search Jonas Basanavičius folklore archives, llti.lt, and historical chronicles (Łasicki, Stryjkowski) for tales, sacred groves, stones, rites, and character descriptions associated with '[Subject]'. Identify specific URLs.
- **LV Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Academic Archivist
  - **Prompt**: Search Latvian National Encyclopedia (enciklopedija.lv) and academic repositories for '[Subject]'. Extract facts, etymology, and nature connections with specific URLs.
- **LV Browser Researcher 2 (Folklore & Dainas)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Folklorist & Dainas collector
  - **Prompt**: Search lfk.lv (Latvian Folklore Archives) and dainuskapis.lv (Krišjānis Barons Dainas) for folk songs, sacred sites, rites, and visual traits for '[Subject]'. Identify specific URLs.
- **LLM Researcher**:
  - **TypeName**: `llm-researcher`
  - **Role**: LLM Internal Knowledge Researcher
  - **Prompt**: Query internal knowledge for '[Subject]'. Extract cosmology, iconography, pantheon relationships, and folk superstitions. Flag potential 19th-century romantic additions.

---

### 2. Review and Merge Reports

Once all 5 subagents report back:

1. **Map to Deity Details Sections**:
   Organize all gathered facts directly into the 6 sections defined in the [deity-details skill](../deity-details/SKILL.md):
   - **Section 1**: Etymology & Historical Chronicles
   - **Section 2**: Cosmology, Functions, & Sacred Domain
   - **Section 3**: Character & Visuals
   - **Section 4**: Natural Habitat & Related Locations
   - **Section 5**: Sacred Rites, Offerings, & Cult Rites
   - **Section 6**: Academic Fact-Check & Navigation Brief
2. **Validate Academic References (MANDATORY)**:
   - Capture **at least 2 academic references** with exact navigation briefs for manual verification.
3. **Localize Metadata & Trilingual Content**:
   - Formulate content for all 3 project languages (`en`, `lt`, `lv`).
4. **Code Ingestion & Deity Page Generation**:
   - Execute the [deity-details skill](../deity-details/SKILL.md) to generate or update complete deity compendium entries.
   - Update metadata in [deities/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) and stories in `src/content/stories/`.
   - Update `ai/research/baltic_mythology_checklist.md` with new records.

