# Deity Details Reference Guide

This reference defines content rules, structural schemas, and academic standards for constructing Baltic deity detail pages across all 3 project languages: **English (`en`)**, **Lithuanian (`lt`)**, and **Latvian (`lv`)**.

## Trilingual Generation Standards

Every generated deity details document **must** include complete text in all three languages. For every section, content must be structured either into sub-blocks by language (`### EN`, `### LT`, `### LV`) or using trilingual field maps:

- **English (`en`)**: Academic & accessible English terminology.
- **Lithuanian (`lt`)**: Authentic Lithuanian terminology (*ąžuolas*, *alkakalnis*, *vaidelotė*, *krivis*).
- **Latvian (`lv`)**: Authentic Latvian terminology (*ozols*, *pērkonkalns*, *dainas*, *ziedojums*).

---

## Section Guidelines (Trilingual Requirements)

### 1. Etymology and Historical Chronicles
- **Etymological Analysis (`en`, `lt`, `lv`)**: Trace PIE roots. Document LT, LV, and Old Prussian name variants, dialectal epithets, and cognates (e.g., Slavic Perun, Vedic Parjanya).
- **Chronicle Inventory (`en`, `lt`, `lv`)**: Document specific historical texts chronologically.
- **Historiographical Context**: Distinguish authentic folk tradition from chronicler misinterpretations across all 3 languages.

### 2. Cosmology, Functions, and Sacred Domain
- **Cosmic Sphere (`en`, `lt`, `lv`)**: Position the deity within the tripartite worldview (Sky / Upper World, Earth / Middle World, Underworld / Water realm).
- **Functional Scope (`en`, `lt`, `lv`)**: Detail primary domain (thunder, fate, fertility, wilderness) and secondary roles (oaths, trade, war, healing).
- **Pantheon Interrelations**: Map relationships to other Baltic deities.

### 3. Character and Visuals
- **Iconography (`en`, `lt`, `lv`)**: Detail visual descriptions from dainas, sagas, and folk tales. Iconography, age, clothing/armor, weapons/items, face, body, hair, eye color, physique, pose,
- **Sacred Symbols & Attributes (`en`, `lt`, `lv`)**: List associated weapons, trees, animals, metals, and symbols.
- **Anthropomorphic & Zoomorphic Forms**: Document shape-shifting capabilities and symbolic manifestations.

### 4. Natural Habitat, Related Locations
- **Sacred Geography (`en`, `lt`, `lv`)**: Identify historical sanctuaries, sacred groves (*šventvietės*, *elkai*), sacred hills (*alkakalniai*), rivers, and boundary stones.
- **Specific Sites (`en`, `lt`, `lv`)**: List concrete geographic locations in Lithuania, Latvia, and Prussia (Rambynas hill, Stelmužė oak, Pokaini forest, Daugava river sites).
- **Environmental Domain**: Explain associations with weather patterns, seasonal cycles, wilderness vs. domestic spaces.

### 5. Sacred Rites, Offerings, and Cult Rites
- **Ritual Practice (`en`, `lt`, `lv`)**: Describe communal and individual cult practices, priestly roles (*krivis*, *vaidelotė*, *būrejas*), and calendar festivals.
- **Sacrificial Offerings (`en`, `lt`, `lv`)**: List specific traditional offerings (animals, beer, mead, grain, coins, wax, fabric) and ritual consumption patterns.
- **Incantations & Taboos (`en`, `lt`, `lv`)**: Document folk prayers, protective charms, daina incantations, and behavioral taboos.

### 6. Academic Fact-Check & Navigation Brief
- **Trilingual Claim Verification Ledger**: Summarize key factual statements made in the document with verification status in EN, LT, and LV.
- **Academic Sources**: Require at least 2 peer-reviewed academic or primary historical sources (e.g., Norbertas Vėlius, Gintaras Beresnevičius, Marija Gimbutas, Janīna Kursīte, Haralds Biezais).
- **Navigation Brief Rules**:
  - Point directly to the **evidentiary phrase** or key keyword within cited texts.
  - Format: `Ctrl+F: 'evidentiary phrase'` (never generic names).
  - Include full source title, page/chapter number, or archive link.

## Trilingual Claim Verification Table Schema

| # | Claim (EN) | Claim (LT) | Claim (LV) | Source / Citation | Status | Navigation Brief |
|---|---|---|---|---|---|---|

---

## Page Rewriting & Migration Guidelines

When rewriting an existing deity page (MDX or Markdown) into the 6-section structure:

1. **Preserve Fact Integrity**: Retain all verified claims, historical citations, primary source quotes, location IDs, and academic references from the original document.
2. **Re-Map Headings**: Reorganize existing content blocks into the 6 standard headings:
   - *1. Etymology and Historical Chronicles*
   - *2. Cosmology, Functions, and Sacred Domain*
   - *3. Character and Visuals*
   - *4. Natural Habitat, Related Locations*
   - *5. Sacred Rites, Offerings, and Cult Rites*
   - *6. Academic Fact-Check & Navigation Brief*
3. **Fill Gaps**: Perform supplementary research for any empty or underspecified section.
4. **Expand Trilingual Coverage**: Provide `en`, `lt`, and `lv` translations for all sections.
5. **Generate Navigation Briefs**: Construct explicit `Ctrl+F` navigation briefs for all claims transferred into Section 6.
