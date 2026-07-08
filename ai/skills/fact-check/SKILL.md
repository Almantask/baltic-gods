---
name: fact-check
description: Spawns specialized browser researchers to verify Baltic mythology facts against online academic sources. Supports 2 modes - local verification, statement-based verification.
---

# Fact-Check Skill

Verifies Baltic mythology facts against online academic sources. Three modes:

- **Deity/Location mode** — extracts every claim from local metadata and narrative files, then validates each against online sources.
- **Statement mode** — takes an arbitrary claim or paragraph, decomposes it into atomic facts, and verifies each independently.

## Quick Start

```
/fact-check Perkūnas
/fact-check Perkūnas, Laima
/fact-check location:aukstaitija-oaks
/fact-check Mėnulis is a brother of Saulė
/fact-check Perkūnas was first mentioned in the 13th century by Peter of Dusburg
```

## Mode A: Local

1. **Extract claims** — read every local file mentioning the target and build a **Claim Ledger**. See [REFERENCE.md § Claim Extraction](REFERENCE.md) for file-by-field rules.
2. **Spawn researchers** — invoke parallel `browser-researcher` subagents (1 LT + 1 LV per target). Pass them the claim ledger. See [REFERENCE.md § Researcher Prompts](REFERENCE.md).
3. **Compare & report** — build per-content-type comparison tables. Mark each field: ✅ Confirmed · ⚠️ Disputed · ❌ Wrong · ❓ Unverified. See [REFERENCE.md § Comparison Tables](REFERENCE.md).
4. **Propose modifications** if mismatches are found — draft edits to `meta.ts` / `meta/part-*.ts` / MDX files.

Spawn all researchers in parallel across targets. Example: `/fact-check Perkūnas, Laima` → 4 subagents total.

## Mode B: Statement

1. **Decompose** — break the input into independently verifiable atomic claims (one predicate each).
2. **Cross-reference local data** — check if mentioned entities exist in `src/content/deities/meta/part-*.ts` or `src/content/stories/meta.ts`. Note any supporting/contradicting local data.
3. **Spawn researchers** — invoke 1 LT + 1 LV `browser-researcher` with the decomposed claims. See [REFERENCE.md § Statement Prompts](REFERENCE.md).
4. **Produce verdict table** — one row per atomic claim with LT/LV verdicts, final status, URL, and navigation brief.
5. **Summary verdict** — clear statement of overall conclusion with sources.

**Example**:

| # | Claim | Final Status | Notes | Reference/URL | Navigation Brief |
|---|---|---|---|---|---|
| 1 | Mėnulis is a brother of Saulė | ❌ WRONG | Mėnulis is the *husband*, not brother | [URL] | [What to search to manually verify] |

## Navigation Brief Rules (MANDATORY)

The brief must point to the **evidentiary phrase** — never the search term or entity name.

- ❌ `Ctrl+F: 'Perkūnas'` — deity name, proves nothing
- ✅ `Ctrl+F: 'tariamoji'` — proves disputed status
- ✅ `Ctrl+F: '1835'` — proves earliest mention date
- ✅ `Ctrl+F: 'De Diis Samagitarum'` — proves source attribution

Full rules and edge cases in [REFERENCE.md](REFERENCE.md).
