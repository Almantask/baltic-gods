---
name: fact-check
description: Spawns specialized browser researchers to crawl web and compare facts about one or more deities against existing local data. Use when the user requests a fact-check or types /fact-check for one or more deities.
---

# Fact-Check Skill

Spawns specialized `browser-researcher` subagents to search online archives for Baltic deity facts, then performs a comparison check against the local compendium.

## Quick Start

```
/fact-check Perkūnas, Laima
```

## Spawning Workflows

When fact-checking is requested for one or more target deities:

### 1. Identify Target Deities
Extract the list of deities to verify. If multiple deities are requested, you will spawn parallel subagent sets for each target concurrently.

### 2. Invoke Browser Researchers
For each target deity, invoke specialized `browser-researcher` subagents, timeboxed to 1 minute each:

- **Lithuanian/General Deity**:
  - **TypeName**: `browser-researcher`
  - **Role**: LT Browser Crawler (`[Deity Name]`)
  - **Prompt**: Search for academic references, VLE (vle.lt), Alkas.lt, llti.lt, and university papers regarding '[Deity Name]'. Retrieve primary sources, regional details, tribal affiliations, and earliest historical mentions with exact URLs.
- **Latvian/General Deity**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Browser Crawler (`[Deity Name]`)
  - **Prompt**: Search for Latvian academic articles, National Encyclopedia (enciklopedija.lv), and LFK archives (lfk.lv) regarding '[Deity Name]'. Retrieve dainas, regional details, tribal affiliations, and earliest historical mentions with exact URLs.

IMPORTANT: spawn subagents in parallel for each deity. Do not wait for previous deity results. For example, if the user requests `/fact-check Perkūnas, Laima`, you must spawn 2 parallel sets of browser researchers (one for Perkūnas and one for Laima) concurrently (4 subagents in total: 2 for Perkūnas, 2 for Laima; 2 in LV, 2 in LT).

*Note: If the origin/tribe of the deity is unknown, spawn both LT and LV browser crawlers.*

---

## Comparison & Reporting

Once the subagents complete their crawl and send their reports:

1. **Locate Existing Data**:
   - Read the existing metadata from [deities/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) or [stories/meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/stories/meta.ts) for the target deity.
   - Read any associated MDX files under `src/content/stories/`.

2. **Generate the Comparison Table**:
   Output a comparison report formatted as a Markdown table:

   | Field | Local Value | Discovered Value | Status | Reference/URL |
   | :--- | :--- | :--- | :--- | :--- |
   | **Region** | *e.g. Samogitia* | *e.g. Samogitia* | `MATCH` / `MISMATCH` / `MISSING` | [Link](url) |
   | **Tribe** | *e.g. Curonians* | *e.g. Semigallians* | `MISMATCH` | [Link](url) |
   | **Period** | *e.g. 16th Cent.* | *e.g. 15th Cent.* | `MISMATCH` | [Link](url) |
   | **References** | *e.g. 1 ref* | *e.g. 3 refs found* | `INCOMPLETE` (needs 2+) | [Link](url) |

3. **Propose Modifications**:
   - If mismatches or missing academic references are found, draft the proposed edits to [meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) and the MDX story files.
   - If the local data is correct and verified, confirm that no changes are needed.
