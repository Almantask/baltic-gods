---
name: research
description: Gathers a rich variety of interesting facts, legends, sacred locations, deity/creature relationships, detailed looks (hair, eyes, facial hair), wearables/accessories/clothing/armour, and folk superstitions about a deity or mythological subject, timeboxed to 1 minute of parallel research. Use when researching a deity, looking up myths, legends, folk beliefs, appearance/iconography, pantheon relations, or preparing content for deity details pages.
---

# Research Skill

Gathers as many interesting and diverse facts (legends, locations, relationships, looks/dress, folk superstitions, rumors, etc.) as possible on a given subject, using a 1-minute timeboxed parallel research pipeline.

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
  - **Prompt**: Search for academic articles, VLE (vle.lt), Alkas.lt, and folklore studies about '[Subject]'. Focus on etymology, chronicle mentions, pantheon position, and academic findings. Gather distinct details with specific URLs.
- **LT Browser Researcher 2 (Folklore, Looks & Chronicles)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LT Folklorist & Chronicler
  - **Prompt**: Search Jonas Basanavičius folklore archives, llti.lt, and historical chronicles (Łasicki, Stryjkowski, Grunau) for tales, sacred groves, stones, rites, **character descriptions**, and **relations to other deities/creatures** for '[Subject]'. Extract **atomic visual traits**: hair color/style, eye color, facial hair, clothing, armour, accessories, weapons, mounts. Identify specific URLs.
- **LV Browser Researcher 1 (Academic)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Academic Archivist
  - **Prompt**: Search Latvian National Encyclopedia (enciklopedija.lv), Biezais, and academic repositories for '[Subject]'. Extract facts, etymology, nature connections, and deity/creature relations with specific URLs.
- **LV Browser Researcher 2 (Folklore, Dainas & Looks)**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Folklorist & Dainas collector
  - **Prompt**: Search lfk.lv (Latvian Folklore Archives) and dainuskapis.lv (Krišjānis Barons Dainas) for folk songs, sacred sites, rites, **visual traits** (beard, hair, eyes, dress, armour, accessories, weapons, horses/goats), and **relations** (Dievs, Saule, Velns, etc.) for '[Subject]'. Identify specific URLs.
- **LLM Researcher**:
  - **TypeName**: `llm-researcher`
  - **Role**: LLM Internal Knowledge Researcher
  - **Prompt**: Query internal knowledge for '[Subject]'. Extract cosmology, **iconography/looks/wearables**, **pantheon and creature relationships**, and folk superstitions. Flag potential 19th-century romantic additions (esp. invented armour, eye color, or kinship).

---

### 2. Review and Merge Reports

Once all 5 subagents report back:

1. **Map to Deity Details Sections**:
   Organize all gathered facts directly into the 6 sections defined in the [deity-details skill](../deity-details/SKILL.md):
   - **Section 1**: Etymology & Historical Chronicles
   - **Section 2**: Cosmology, Functions, & Sacred Domain (**include deity + creature relations**)
   - **Section 3**: Character & Visuals (**atomic looks, wearables, accessories, clothing/armour**)
   - **Section 4**: Natural Habitat & Related Locations
   - **Section 5**: Sacred Rites, Offerings, & Cult Rites
   - **Section 6**: Academic Fact-Check & Navigation Brief
2. **Appearance & relations pass (MANDATORY)**:
   - List every attested look trait separately (hair, eyes, facial hair, dress, armour, accessories).
   - List every deity/creature relation with type (rival, spouse, mount, ally, …).
   - Note gaps in research notes / chat only — do **not** invent traits, and do **not** write absence claims onto deity pages (e.g. “armour not attested”, “metaliniai šarvai neužfiksuoti”). Omit missing traits entirely from page copy.
3. **Validate Academic References (MANDATORY)**:
   - Capture **at least 2 academic references** with exact navigation briefs for manual verification.
4. **Localize Metadata & Trilingual Content**:
   - Formulate content for all 3 project languages (`en`, `lt`, `lv`).
5. **Code Ingestion & Deity Page Generation**:
   - Execute the [deity-details skill](../deity-details/SKILL.md) to generate or update complete deity compendium entries.
   - Put gathered URLs and academic citations **only** into Section 6 — Sections 1–5 stay source-free narrative.
   - Update metadata in [deities/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) and stories in `src/content/stories/`.
   - Update `ai/research/baltic_mythology_checklist.md` with new records.
