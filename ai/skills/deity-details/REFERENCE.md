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
- **Relations to Deities & Creatures (MANDATORY)**: Map kin, spouses, lovers, parents/children, allies, rivals, servants, and hostile beings. Include mythic creatures (goats, serpents, horses, birds, chthonic beasts) as companions, mounts, offerings-as-avatars, or adversaries. State relation type + counterparty for each claim (e.g. “eternal duel with Velnias”; “chariot goats / ožiai”).

### 3. Character and Visuals
Treat every distinct visual trait as its own claim. Do **not** bundle “red beard, copper armor, flashing eyes” into one sentence without source-level support for each part.

- **Detailed looks (`en`, `lt`, `lv`)**: Age/apparent age; sex/gender presentation; physique/build; pose/stance; face shape; **hair color & style**; **eye color**; **facial hair** (beard/moustache color, length); skin/complexion if attested; expression.
- **Wearables & dress (`en`, `lt`, `lv`)**: Clothing layers; **armour** (material: copper, iron, leather, none); cloaks, belts, footwear; headgear/crowns; jewelry.
- **Accessories & held items (`en`, `lt`, `lv`)**: Amulets, chains, belts, bags; weapons/tools (axe, hammer, bow, whip, thunderstone); vehicles (chariot, boat, sledge) and what draws them.
- **Sacred symbols & fauna/flora**: Associated trees, metals, colors, plants; companion or zoomorphic animals (distinct from Section 2 relation claims when purely iconographic).
- **Anthropomorphic & zoomorphic forms**: Shape-shifting, animal avatars, idol descriptions from chronicles (e.g. Grunau black-bearded idol vs folk *rudabarzdis*).
- **Gap rule**: If a trait is not attested, **omit it silently** — never invent hair/eye/armour details, and never write an absence sentence on the page (“not attested”, “neužfiksuoti”, “nav apliecinātas”, “unknown eye color”). Gaps belong in research notes / chat only.

### 4. Natural Habitat, Related Locations
- **Sacred Geography (`en`, `lt`, `lv`)**: Identify historical sanctuaries, sacred groves (*šventvietės*, *elkai*), sacred hills (*alkakalniai*), rivers, and boundary stones.
- **Specific Sites (`en`, `lt`, `lv`)**: List concrete geographic locations in Lithuania, Latvia, and Prussia (Rambynas hill, Stelmužė oak, Pokaini forest, Daugava river sites).
- **Environmental Domain**: Explain associations with weather patterns, seasonal cycles, wilderness vs. domestic spaces.

### 5. Sacred Rites, Offerings, and Cult Rites
- **Ritual Practice (`en`, `lt`, `lv`)**: Describe communal and individual cult practices, priestly roles (*krivis*, *vaidelotė*, *būrejas*), and calendar festivals.
- **Sacrificial Offerings (`en`, `lt`, `lv`)**: List specific traditional offerings (animals, beer, mead, grain, coins, wax, fabric) and ritual consumption patterns.
- **Incantations & Taboos (`en`, `lt`, `lv`)**: Document folk prayers, protective charms, daina incantations, and behavioral taboos.

### 6. Academic Fact-Check & Navigation Brief
- **Sole home for sources**: All URLs, encyclopedia citations, modern scholarship, and `Ctrl+F` navigation briefs live **only** here. Sections 1–5 must not name VLE/MLE/Alkas/authors as claim provenance (primary chronicle names may appear in §1 as narrative content).
- **Page-only verified claims**: Section 6 lists **only** claims that appear in Sections 1–5 after fact-check. Do not add verification rows or citations for claims removed from the page.
- **Exclude disputed/wrong**: ⚠️ Disputed and ❌ Wrong claims must be stripped from Sections 1–5 and must **not** appear in Section 6. Report them in the **chat summary only**.
- **Trilingual Claim Verification Ledger**: Summarize key factual statements retained on the page with verification status in EN, LT, and LV (typically ✅ Confirmed only).
- **Academic Sources**: At least 2 peer-reviewed or primary historical sources **that support retained claims** (e.g., Norbertas Vėlius, Gintaras Beresnevičius, Marija Gimbutas, Janīna Kursīte, Haralds Biezais). Drop sources whose only purpose was to refute a claim no longer on the page.
- **Navigation Brief Rules**:
  - Point directly to the **evidentiary phrase** or key keyword within cited texts.
  - Format: `Ctrl+F: 'evidentiary phrase'` (never generic names).
  - Include full source title, page/chapter number, or archive link.
  - Every navigation brief must correspond to a claim still present in Sections 1–5.

## Trilingual Claim Verification Table Schema

| # | Claim (EN) | Claim (LT) | Claim (LV) | Source / Citation | Status | Navigation Brief |
|---|---|---|---|---|---|---|

---

## Page Rewriting & Migration Guidelines

When rewriting an existing deity page (MDX or Markdown) into the 6-section structure:

1. **Preserve Fact Integrity**: Retain verified claims, historical citations, primary source quotes, location IDs, and academic references that still support content on the page. Remove disputed/wrong claims and any references that only served those claims.
2. **Re-Map Headings**: Reorganize existing content blocks into the 6 standard headings:
   - *1. Etymology and Historical Chronicles*
   - *2. Cosmology, Functions, and Sacred Domain*
   - *3. Character and Visuals*
   - *4. Natural Habitat, Related Locations*
   - *5. Sacred Rites, Offerings, and Cult Rites*
   - *6. Academic Fact-Check & Navigation Brief*
3. **Fill Gaps**: Perform supplementary research for any empty or underspecified section.
4. **Expand Trilingual Coverage**: Provide `en`, `lt`, and `lv` translations for all sections.
5. **Generate Navigation Briefs**: Construct explicit `Ctrl+F` navigation briefs only for claims retained in Sections 1–5 and listed in Section 6.
6. **Chat Summary for Rejects**: If rewriting after fact-check, put ⚠️ Disputed / ❌ Wrong removals in the chat summary — not on the page.
