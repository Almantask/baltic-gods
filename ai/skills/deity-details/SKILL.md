---
name: deity-details
description: Generates or rewrites comprehensive Baltic deity detail pages in English, Lithuanian, and Latvian (en, lt, lv) with etymology, chronicles, cosmology, detailed visuals (looks, wearables, accessories, clothing/armour), deity/creature relations, habitats, rites, and fact-check navigation briefs. Use when creating, generating, updating, or rewriting a deity details page or compendium entry.
---

# Deity Details Skill

Generates or rewrites academic-grade Baltic deity pages in all 3 target languages (**English - `en`**, **Lithuanian - `lt`**, **Latvian - `lv`**), organizing content into 6 standardized sections.

## Quick Start

```
/deity-details Perkūnas
/deity-details rewrite src/content/stories/en/perkunas.mdx
/deity-details file:src/content/deities/laima.md
```

## Modes of Operation

- **Generation Mode**: Creates a complete 6-section trilingual deity page from scratch.
- **Rewrite / Restructure Mode**: Reads an existing deity page/file, audits content against the 6 sections, fills research gaps, and rewrites the file in the mandatory standardized structure.

If an existing file is found where the structure is not followed - rewrite it in the mandatory standardized structure unless specified otherwise explicitly.

## Page Rewriting & Restructuring Workflow

When asked to rewrite an existing deity page or file:

1. **Read & Audit**: Read target file using `view_file`. Parse existing metadata, claims, narratives, and references.
2. **Gap Analysis**: Compare existing content against the 6 mandatory sections. Identify missing details, missing trilingual translations (`en`, `lt`, `lv`), or missing navigation briefs.
3. **Research Expansion**: If sections are incomplete, trigger targeted research for etymology, chronicles, **detailed looks** (hair/eye/facial hair), **wearables/accessories/clothing/armour**, **relations to other deities and creatures**, sacred sites, and cult rites.
4. **Restructure & Rewrite**: Reformat and expand into the 6-section structure, preserving accurate **positive** claims and enforcing trilingual depth. Section 3 must itemize attested looks and dress as separate traits; Section 2 must list deity/creature relations. Drop ⚠️ Disputed / ❌ Wrong claims from the page entirely. Never narrate gaps (“not attested”, “neužfiksuoti”, “nav apliecinātas”) — omit the missing trait.
5. **Update File**: Overwrite target file using `write_to_file`.
6. **Chat-only rejects & gaps**: Report removed disputed/wrong claims and unattested trait gaps in the chat summary only — never in Sections 1–6.

## Mandatory 6-Section Structure

Every generated or rewritten deity entry must include:

1. **Etymology and Historical Chronicles** (*Etimologija ir istoriniai šaltiniai* / *Etimoloģija un vēsturiskās hronikas*)
2. **Cosmology, Functions, and Sacred Domain** (*Kosmologija, funkcijos ir šventasis domenas* / *Kosmoloģija, funkcijas un svētā domēns*) — includes relations to other deities and creatures
3. **Character and Visuals** (*Būdas ir išvaizda* / *Raksturs un vizuālais tēls*) — detailed looks, wearables, accessories, clothing/armour
4. **Natural Habitat, Related Locations** (*Natūrali buveinė ir susijusios vietos* / *Dabiskā vide un saistītās vietas*)
5. **Sacred Rites, Offerings, and Cult Rites** (*Šventosios apeigos, aukos ir kultas* / *Svētie rituāli, ziedojumi un kults*)
6. **Academic Fact-Check & Navigation Brief** (*Akademiniai šaltiniai ir faktų tikrinimas* / *Akadēmiskā faktu pārbaude un navigācija*) — references **only** for claims that exist in Sections 1–5

## Page vs Chat (Claims & References)

- **Sections 1–5**: verified **positive** claims as narrative only — no URLs, navigation briefs, or “according to [source]” provenance.
- **Section 6 only**: all academic sources, links, and `Ctrl+F` briefs for claims that appear in Sections 1–5 (no orphan references).
- **No negatives on page**: do not state that something is missing or unattested. If sources are silent, omit the topic.
- **Chat summary only**: ⚠️ Disputed / ❌ Wrong findings and research gaps.

## Detailed Guidelines & Templates

- See [REFERENCE.md](REFERENCE.md) for section standards, rewriting rules, claim ledger schemas, and navigation briefs.
- See [EXAMPLES.md](EXAMPLES.md) for a full reference implementation of a deity details entry.

