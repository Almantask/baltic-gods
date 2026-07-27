# Fact-Check Reference

Detailed extraction rules, researcher prompt templates, comparison table schemas, and edge-case handling.

---

## Claim extract

The language which originally mentions the target entity. Let's call it language of target.

Search for every file (but only of language of target) where the target entity is mentioned and then look for distinct details in that file: symbols, visuals, looks, tribes, regions, period, references, etymology... Save these claims as something to then search.

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

## Edge Cases

- **No online presence**: Flag entire entry as ❓. Check for 19th-century fabrication (Narbutt pantheon).
- **Conflicting sources**: Report both. Prefer more recent peer-reviewed source. If equal, present both to user.
- **Coordinates**: Verify via Google Maps / OSM. Folklore ±0.1°; archaeological ±0.01°.
- **Multilingual consistency**: Verify `lt`/`lv` translations convey the same meaning as `en`. Flag divergences.
