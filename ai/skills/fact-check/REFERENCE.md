# Fact-Check Reference

Detailed extraction rules, researcher prompt templates, comparison table schemas, and edge-case handling.

---

## Claim Extraction & Pre-Verification Ledger (Deity Details Focus)

Search for every file where the target entity is mentioned and extract all distinct claims categorized strictly by the 6 sections of the [deity-details skill](../deity-details/SKILL.md):

1. **Etymology and Historical Chronicles**: PIE word roots, name variants, epithets, chronicler accounts (Malalas, Dusburg, Długosz, Łasicki, Stryjkowski).
2. **Cosmology, Functions, and Sacred Domain**: Tripartite position (Sky, Earth, Underworld), meteorological role, divine duties, **relations to other deities and creatures** (kin, spouses, lovers, parents/children, allies, rivals/enemies, servants; mounts, companion animals, hostile beasts — one claim per relation).
3. **Character and Visuals** (extract **atomically** — never one bundled “looks like X” row):
   - **Detailed looks**: age, physique, face; **hair color & style**; **eye color**; **facial hair** (beard/moustache color & form); skin/complexion if attested.
   - **Wearables**: clothing layers; **armour** (material); cloaks, belts, footwear; headgear/crowns.
   - **Accessories**: jewelry, amulets, chains, belts; held weapons/tools; vehicles and what draws them.
   - Iconographic flora/fauna/metals/colors/pose/background when distinct from §2 relation claims.
4. **Natural Habitat, Related Locations**: Sacred geography, specific historical sites.
5. **Sacred Rites, Offerings, and Cult Rites**: Seasonal feasts, sacrificial offerings.
6. **Academic Fact-Check & Navigation Brief**: Academic citations, references, and exact `Ctrl+F` evidentiary phrases.

### Appearance & relations extraction checklist

Before closing the ledger, check each item. If a trait is missing locally, mark the ledger row **gap (chat only)** — do **not** write “not attested” (or any absence sentence) onto the deity page:

- [ ] Hair color / style
- [ ] Eye color
- [ ] Facial hair
- [ ] Clothing
- [ ] Armour
- [ ] Accessories / jewelry / amulets
- [ ] Weapons / held items
- [ ] Vehicle / mount
- [ ] Each named deity relation (type + counterpart)
- [ ] Each named creature relation (companion, mount, adversary, offering-animal-as-avatar)

### No-negative page rule

Page Sections 1–5 state only what sources affirm. Forbidden on-page phrasing includes: “not attested”, “unattested”, “no evidence of…”, “armour is not recorded”, “metaliniai šarvai neužfiksuoti”, “hair/eye color unknown”. Report absences in the chat / ledger only; omit the trait from the page and from Section 6.

### Sources only in Section 6

Sections 1–5 are claim narrative only. Put **all** provenance in Section 6:

- Forbidden in §§1–5: URLs, `Ctrl+F` briefs, encyclopedia/site names as citations (VLE, MLE, Alkas, enciklopedija.lv, …), modern author name-drops used as “according to…”, parentheticals like `(VLE)`, bibliographic years as evidence tags.
- Allowed in §1 as **chronicle content** (not as citation tags): naming primary historical texts that are themselves the subject of the section (e.g. Hypatian Codex, Dusburg, Malalas) when narrating what those chronicles record.
- Secondary scholarship (Laurinkienė, Biezais, Gimbutas, Vėlius, …) and verification links belong **only** in Section 6.

Before spawning researchers, format and output these claims in the **Pre-Verification Claim Ledger**:

| # | Deity Details Section | Extracted Claim Statement | Source File / Metadata Field | Status |
|---|---|---|---|---|

## Researcher Prompts

### Deity mode — LT researcher

- **TypeName**: `browser-researcher`
- **Role**: LT Fact-Checker (`[Deity Name]`)

> You are fact-checking the Baltic deity **[Deity Name]** against online Lithuanian academic sources.
>
> **Claims to verify** (from our local data):
> [paste claim ledger — include every atomic look/wearable/relation row]
>
> Pay special attention to **visual traits** (hair, eyes, facial hair, clothing, armour, accessories) and **relations** (other deities, creatures). Confirm or refute each trait separately; do not accept bundled descriptions.
>
> Search VLE (vle.lt), Alkas.lt, llti.lt, LKMA, and university papers.
> For each claim, report:
> 1. Whether the claim is CONFIRMED, DISPUTED, UNVERIFIED, or WRONG
> 2. The exact URL where the evidence was found
> 3. A **Navigation Brief** — a Ctrl+F term that proves the finding on the target page (NOT the deity name — the *evidentiary phrase*)
> 4. If the source provides additional details not in our data, note them as ADDITIONS (especially extra looks, wearables, or pantheon/creature links)

### Deity mode — LV researcher

- **TypeName**: `browser-researcher`
- **Role**: LV Fact-Checker (`[Deity Name]`)

> Same structure as LT, targeting Latvian National Encyclopedia (enciklopedija.lv), LFK archives (lfk.lv), dainuskapis.lv. Verify atomic visual traits and deity/creature relations the same way.

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

After researchers return, build a comparison table (one row per claim):

| # | Claim | LT Verdict | LV Verdict | Final | Page? | Source URL | Navigation Brief |
|---|---|---|---|---|---|---|---|

**Final status → destination:**

| Status | Destination |
|---|---|
| ✅ Confirmed | Keep/write **positive** claim in Sections 1–5; add Section 6 row + references. Do **not** write “X is unattested” even when confirmation is of an absence. |
| ⚠️ Disputed | **Chat summary only** — remove from page if present; no Section 6 row |
| ❌ Wrong | **Chat summary only** — remove from page if present; no Section 6 row |
| ❓ Unverified / gap | Omit from page (no absence sentence); no Section 6 row unless user explicitly keeps a positive claim |

### Page write-back rules

1. Section 6 may only cite claims that **exist** in Sections 1–5 after cleanup.
2. Do not leave orphan references (sources that only refute or discuss removed claims).
3. Chat summary must include every ⚠️ / ❌ claim with verdict, URL, and navigation brief so the user can audit removals.

### Chat summary template (rejects)

```
## Fact-check removals (not on page)
| Claim | Status | Why | Source | Nav brief |
|---|---|---|---|---|
| … | ⚠️ Disputed / ❌ Wrong | … | … | Ctrl+F: '…' |
```

---

## Edge Cases

- **No online presence**: Flag entire entry as ❓. Check for 19th-century fabrication (Narbutt pantheon). Report in chat; do not assert on the page.
- **Conflicting sources**: Report both in chat. Prefer more recent peer-reviewed source. If equal, present both to user — do not keep a disputed claim on the page pending decision.
- **Coordinates**: Verify via Google Maps / OSM. Folklore ±0.1°; archaeological ±0.01°.
- **Multilingual consistency**: Verify `lt`/`lv` translations convey the same meaning as `en`. Flag divergences.
