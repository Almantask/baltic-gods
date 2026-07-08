# Fact-Check Reference

Detailed extraction rules, researcher prompt templates, comparison table schemas, and edge-case handling.

---

## Claim Extraction

### Deity targets

| Source file | Fields to extract |
|---|---|
| `src/content/deities/meta/part-*.ts` | `name`, `domain`, `epithet`, `summary`, `altNames`, `keywords`, `gallery[].title/medium/note`, `locations[].name/coordinates/region/description/siteType/significance`, `materialLegacy`, `symbols`, `regionDetails`, `tribe`, `period`, `references` |
| `src/content/locations/meta.ts` | Every `LocationMeta` whose `deity` matches the target slug — all fields |
| `src/content/stories/meta.ts` | Every `StoryMeta` whose `beings[]` includes the target slug — `title`, `summary`, `regionDetails`, `tribe`, `period`, `references` |
| `src/content/stories/en/[slug].mdx` | Narrative prose — extract verifiable historical claims (dates, named figures, place names, ritual descriptions, cause-and-effect mythological events) |

### Location targets

| Source file | Fields to extract |
|---|---|
| `src/content/locations/meta.ts` | The matching `LocationMeta` entry — all fields |
| `src/content/deities/meta/part-*.ts` | The parent deity's meta that references this location |

Compile results into a **Claim Ledger** — a flat list of (`claim_id`, `source_file`, `field`, `local_value`, `language`) tuples.

---

## Researcher Prompts

### Deity mode — LT researcher

- **TypeName**: `browser-researcher`
- **Role**: LT Fact-Checker (`[Deity Name]`)

> You are fact-checking the Baltic deity **[Deity Name]** against online Lithuanian academic sources.
>
> **Claims to verify** (from our local data):
> [paste claim ledger subset — period, tribe, region, references, key narrative claims]
>
> Search VLE (vle.lt), Alkas.lt, llti.lt, LKMA, and university papers.
> For each claim, report:
> 1. Whether the claim is CONFIRMED, DISPUTED, UNVERIFIED, or WRONG
> 2. The exact URL where the evidence was found
> 3. A **Navigation Brief** — a Ctrl+F term that proves the finding on the target page (NOT the deity name — the *evidentiary phrase*)
> 4. If the source provides additional details not in our data, note them as ADDITIONS

### Deity mode — LV researcher

- **TypeName**: `browser-researcher`
- **Role**: LV Fact-Checker (`[Deity Name]`)

> Same structure as LT, targeting Latvian National Encyclopedia (enciklopedija.lv), LFK archives (lfk.lv), dainuskapis.lv.

### Statement mode — LT researcher

- **TypeName**: `browser-researcher`
- **Role**: LT Statement Verifier

> You are verifying the following Baltic mythology claims against Lithuanian academic sources:
>
> **Claims to verify**:
> 1. [claim 1]
> 2. [claim 2]
> 3. [claim 3]
>
> Search VLE (vle.lt), Alkas.lt, llti.lt, LKMA, and university papers.
> For each claim, report:
> 1. Whether the claim is CONFIRMED, DISPUTED, UNVERIFIED, or WRONG
> 2. The exact URL where the evidence was found
> 3. A **Navigation Brief** — a Ctrl+F term that proves the finding (NOT the entity name — the *evidentiary phrase*)
> 4. The **academic consensus** — is this a mainstream view or a minority/fringe position?

### Statement mode — LV researcher

- **TypeName**: `browser-researcher`
- **Role**: LV Statement Verifier

> Same structure as LT Statement Verifier, targeting Latvian sources (enciklopedija.lv, lfk.lv, dainuskapis.lv).

---

## Comparison Tables

### A. Deity Meta

| Field | Local Value | Discovered Value | Status | Reference/URL | Navigation Brief |
|---|---|---|---|---|---|
| `name` | ... | ... | ✅/⚠️/❌/❓ | ... | ... |
| `domain` | ... | ... | | | |
| `altNames.lt` / `.lv` | ... | ... | | | |
| `regionDetails.en` | ... | ... | | | |
| `tribe.en` | ... | ... | | | |
| `period.en` | ... | ... | | | |
| `references[*]` | ... | ... | | | |
| `summary.en` | ... | ... | | | |
| `keywords` | ... | ... | | | |
| `materialLegacy[*]` | ... | ... | | | |
| `symbols[*].detail` | ... | ... | | | |
| `gallery[*].title/note` | ... | ... | | | |

**Verification priority** (most → least critical): `period` → `tribe` → `references` → `regionDetails` → `domain` → `altNames` → `summary` → `keywords` → `materialLegacy` → `symbols` → `gallery`

### B. Location Meta

| Field | Local Value | Discovered Value | Status | Reference/URL | Navigation Brief |
|---|---|---|---|---|---|
| `name.en/.lt/.lv` | ... | ... | ✅/⚠️/❌/❓ | ... | ... |
| `coordinates` | [lat, lon] | [lat, lon] | | | |
| `region` | ... | ... | | | |
| `description.en` | ... | ... | | | |
| `siteType` | ... | ... | | | |
| `significance.en` | ... | ... | | | |
| `tribe.en` | ... | ... | | | |
| `period.en` | ... | ... | | | |
| `references[*]` | ... | ... | | | |

**Location rules**: coordinates tolerance ±0.1° for folklore sites, ±0.01° for archaeological. Region must be `"Lithuania"`, `"Latvia"`, or `"Old Prussia"`.

### C. Story Meta

| Field | Local Value | Discovered Value | Status | Reference/URL | Navigation Brief |
|---|---|---|---|---|---|
| `title.en` | ... | ... | ✅/⚠️/❌/❓ | ... | ... |
| `summary.en` | ... | ... | | | |
| `beings[]` | [...] | [...] | | | |
| `regionDetails.en` | ... | ... | | | |
| `tribe.en` | ... | ... | | | |
| `period.en` | ... | ... | | | |
| `references[*]` | ... | ... | | | |

### D. Narrative Content (MDX)

Extract discrete verifiable claims from prose:

| Claim | Source Line | Local Text | Discovered Value | Status | Reference/URL | Navigation Brief |
|---|---|---|---|---|---|---|
| Earliest mention date | L6 | "13th century" | ... | | | |
| Named figure | L8 | "priestess named Eglė" | ... | | | |

**Verifiable**: Named figures/beings, dates/periods, real place names, described rituals, attributed sources, historical events.
**Not verifiable**: Poetic descriptions, invented dialogue, generic statements.

### E. Statement Verdict

| # | Claim | LT Verdict | LV Verdict | Final Status | Reference/URL | Navigation Brief | Notes |
|---|---|---|---|---|---|---|---|
| 1 | [atomic claim] | ✅/⚠️/❌/❓ | ✅/⚠️/❌/❓ | ... | ... | ... | ... |

**Resolution**: Both agree → use that verdict. One confirms, other silent → ✅ single-source. Disagree → ⚠️ present both.

---

## Status Definitions

| Status | Meaning | Action |
|---|---|---|
| ✅ Confirmed | Matches ≥1 academic source with URL | No action |
| ⚠️ Disputed | Sources disagree or explicitly question the claim | Flag for user review |
| ❌ Wrong | Contradicts reliable academic source | Draft correction |
| ❓ Unverified | No source found | Flag; suggest further research |

---

## Proposed Modification Format

```typescript
// BEFORE (line XX of src/content/deities/meta/part-a.ts)
period: { en: "13th-16th Century Records", ... },

// AFTER — corrected per VLE (https://...)
period: { en: "13th Century (First mention by Peter of Dusburg, 1326)", ... },
```

Include navigation briefs in reference strings for non-obvious sources:

```typescript
references: [
  "Peter of Dusburg: Chronicon terrae Prussiae (1326) (Ctrl+F: 'Percunis')",
],
```

---

## Edge Cases

- **No online presence**: Flag entire entry as ❓. Check for 19th-century fabrication (Narbutt pantheon).
- **Conflicting sources**: Report both. Prefer more recent peer-reviewed source. If equal, present both to user.
- **Coordinates**: Verify via Google Maps / OSM. Folklore ±0.1°; archaeological ±0.01°.
- **Multilingual consistency**: Verify `lt`/`lv` translations convey the same meaning as `en`. Flag divergences.
