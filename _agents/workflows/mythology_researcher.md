---
description: Mythology Researcher Workflow
---
// turbo-all
# Mythology Researcher Workflow
Use this workflow to find, curate, and format multiple new Baltic tales/legends.

## Step 1: Research Search
Find 3-5 new Baltic goddesses, spirits, or mythological events.
- **Goal**: Find name, region, tribe, first mention (e.g., 14th century), and associated sacred sites.
- **Target**: Medeina, Giltinė, Pūķis, Laumas, Perkūnas' Thunder Oak variants.

## Step 2: Content Curation
For each myth:
1.  **Draft a brief story** (3-4 paragraphs) in English.
2.  **Translate the summary** and titles into English, Lithuanian, and Latvian.
3.  **Extract metadata**: Region, Tribe, Year, Academic References, Locations, and Beings.

## Step 3: Type Implementation
Update `src/types/content.ts` (Done in Phase 1).

## Step 4: Metadata Update
Add the new metadata to `src/content/stories/meta.ts`. Include:
- `regionDetails`: { en: "...", lt: "...", lv: "..." }
- `tribe`: { en: "...", lt: "...", lv: "..." }
- `period`: { en: "...", lt: "...", lv: "..." }
- `references`: [ "Author: Title", "Archive ID" ] (MANDATORY)
- `beings`: [ "perkunas", "laima" ] (Mapping to deity slugs)
- `locationIds`: [ "aukstaitija-oaks" ] (Mapping to location IDs)

## Step 5: Store New Files
1.  Create `src/content/stories/en/[slug].mdx`.
2.  Import meta from `../meta`.
3.  Add the full English story text.

## Step 6: Final Review
- Run `npm run lint`
- Verify that every new story has the 4 mandatory metadata fields + locationIds + beings.
- Ensure at least 2 references are present for each entry.
