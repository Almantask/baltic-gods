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
  - **Prompt**: Search for academic references, VLE (vle.lt), Alkas.lt, llti.lt, and university papers regarding '[Deity Name]'. Retrieve primary sources, regional details, tribal affiliations, and earliest historical mentions with exact URLs. For each source, note down any specific search terms used or navigation actions (links/buttons to click) to find the relevant information.
- **Latvian/General Deity**:
  - **TypeName**: `browser-researcher`
  - **Role**: LV Browser Crawler (`[Deity Name]`)
  - **Prompt**: Search for Latvian academic articles, National Encyclopedia (enciklopedija.lv), and LFK archives (lfk.lv) regarding '[Deity Name]'. Retrieve dainas, regional details, tribal affiliations, and earliest historical mentions with exact URLs. For each source, note down any specific search terms used or navigation actions (links/buttons to click) to find the relevant information.

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

   | Field | Local Value | Discovered Value | Status | Reference/URL | Navigation Brief |

   - ALWAYS include a URL for each discovered value. If no URL is found, mark the reference as `MISSING` and note that the source could not be verified.
   - **Navigation Brief** — provide a Ctrl+F query or search term that locates the **discovered value or its evidence** on the target page. The brief must help a reviewer verify the *finding*, not re-find the deity.
     - ❌ **BAD**: `Ctrl+F: 'Milda'` (the deity name you already searched — this proves nothing)
     - ✅ **GOOD**: `Ctrl+F: 'tariamoji'` (Lithuanian for "purported" — proves the disputed status)
     - ✅ **GOOD**: `Ctrl+F: '1835'` (proves the date of earliest mention)
     - The brief must NEVER be the same term used to find the page. It must be a term that **proves the point** of the discovered value.

3. **Propose Modifications**:
   - If mismatches or missing academic references are found, draft the proposed edits to [meta.ts](file:///c:/Users/ITWORK/source/repos/baltic-gods/src/content/deities/meta.ts) and the MDX files.
   - When drafting reference updates for `meta.ts`, format the reference string to include the navigation brief if it is not immediately obvious (e.g., `"Author: Title (Ctrl+F: 'evidentiary phrase')"` or `"URL (click 'link name')"`).
     The navigation brief in the reference string must follow the same rule: it must point to the **evidentiary phrase** that supports the claim, never the deity name itself.
   - If the local data is correct and verified, confirm that no changes are needed.
