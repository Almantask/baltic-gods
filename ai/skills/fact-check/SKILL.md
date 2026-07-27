---
name: fact-check
description: Spawns specialized browser researchers to verify Baltic mythology facts against online academic sources. Lists all extracted claims in a Pre-Verification Claim Ledger before running verification, feeding directly into Section 6 of deity detail pages. Use when verifying claims or updating deity details pages.
---

# Fact-Check Skill

Verifies Baltic mythology facts against online academic sources. Two modes:

- **Deity/Location mode** — extracts claims from local files categorized by [deity-details](../deity-details/SKILL.md) sections, outputs a Pre-Verification Claim Ledger, validates each against online sources, and populates Section 6 (*Academic Fact-Check & Navigation Brief*) of [deity-details](../deity-details/SKILL.md).
- **Statement mode** — decomposes an arbitrary claim or paragraph into atomic facts, lists all extracted claims, and verifies each independently with evidence navigation briefs.

## Quick Start

```
/fact-check Perkūnas
/fact-check Perkūnas, Laima
/fact-check location:aukstaitija-oaks
/fact-check Mėnulis is a brother of Saulė
```

## Mandatory Claim Listing Requirement (Deity Details Focus)

Before spawning research subagents, the agent **MUST** output a complete **Pre-Verification Claim Ledger** listing every claim categorized strictly by the 6 sections of the [deity-details skill](../deity-details/SKILL.md):

1. **Section 1: Etymology & Historical Chronicles** (PIE roots, names, Malalas, Dusburg, Długosz, Łasicki).
2. **Section 2: Cosmology, Functions, & Sacred Domain** (Celestial/chthonic sphere, atmospheric role, pantheon rivalries).
3. **Section 3: Character & Visuals** (Iconography, attire, chariot, animals, plants, metals, weapons).
4. **Section 4: Natural Habitat & Related Locations** (Sacred groves, hillforts, springs, specific regional sites).
5. **Section 5: Sacred Rites, Offerings, & Cult Rites** (Festivals, sacrifices, taboos, folk incantations).
6. **Section 6: Academic References & Citations** (Primary/secondary academic sources).

---

## Mode A: Local Deity Verification

1. **Extract & List Claims (MANDATORY)**:
   - Read local files mentioning the target entity.
   - Group all extracted claims into the 6 [deity-details](../deity-details/SKILL.md) section categories.
   - **Output the Pre-Verification Claim Ledger** table listing all claims to be verified.
2. **Spawn Researchers**: Invoke parallel `browser-researcher` subagents (1 LT + 1 LV per target) with the claim ledger. See [REFERENCE.md § Researcher Prompts](REFERENCE.md).
3. **Compare & Report**: Build comparison tables: ✅ Confirmed · ⚠️ Disputed · ❌ Wrong · ❓ Unverified. See [REFERENCE.md § Comparison Tables](REFERENCE.md).
4. **Feed into Deity Details Page**:
   - Transfer verified claims and evidence briefs directly into **Section 6** (*Academic Fact-Check & Navigation Brief*) of the target's [deity-details page](../deity-details/SKILL.md).

Spawn all researchers in parallel across targets. Example: `/fact-check Perkūnas, Laima` → 4 subagents total.

---

## Mode B: Statement Verification

1. **Decompose & List Claims (MANDATORY)**:
   - Break the input into independently verifiable atomic claims (one predicate each).
   - **Output the complete list of claims to be verified** in a table before proceeding.
2. **Spawn Researchers**: Invoke 1 LT + 1 LV `browser-researcher` with the decomposed claims list.
3. **Produce Verdict Table**: One row per atomic claim with LT/LV verdicts, final status, URL, and navigation brief.
4. **Summary Verdict**: Clear statement of overall conclusion with sources.

### Pre-Verification Claim Ledger Schema (Deity Details Aligned)

| # | Deity Details Section | Claim Statement | Target Source / Domain | Status |
|---|---|---|---|---|
| 1 | 1. Etymology & Chronicles | Derived from PIE *\*per-kw-u-* ("oak tree") | VLE / Academic | ⏳ Pending Verification |
| 2 | 1. Etymology & Chronicles | Mentioned in 1261 Malalas Chronicle insertion | *Volhynian Chronicle* | ⏳ Pending Verification |
| 3 | 2. Cosmology & Functions | Controls thunder and spring agricultural rain | Mythological studies | ⏳ Pending Verification |
| 4 | 3. Character & Visuals | Red beard, rides chariot, holds thunderstone axe | Folklore archives | ⏳ Pending Verification |
| 5 | 4. Habitat & Locations | Romuva sanctuary in Nadruvia, Rambynas hill | Geographical / Historical | ⏳ Pending Verification |
| 6 | 5. Rites & Offerings | Offerings of black goat, beer, wax at oak roots | Folkloric rites | ⏳ Pending Verification |

## Navigation Brief Rules (MANDATORY)

The brief must point to the **evidentiary phrase** — never the search term or entity name.

- ❌ `Ctrl+F: 'Perkūnas'` — deity name, proves nothing
- ✅ `Ctrl+F: 'tariamoji'` — proves disputed status
- ✅ `Ctrl+F: '1835'` — proves earliest mention date
- ✅ `Ctrl+F: 'De Diis Samagitarum'` — proves source attribution

Full rules and edge cases in [REFERENCE.md](REFERENCE.md).



