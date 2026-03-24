import type { StoryEntry } from "@/types/content";

import {
  thunderOakMeta,
  weavingOfLaimaMeta,
  velniasAndTheFiddlerMeta,
  sauleAndMenulisMeta,
  zemynasBlessingMeta,
  austejaAndTheGoldenHiveMeta,
  gabijasHearthMeta,
  bangputysAndTheAmberFleetMeta,
} from "./meta";

export const stories: StoryEntry[] = [
  { meta: thunderOakMeta },
  { meta: weavingOfLaimaMeta },
  { meta: velniasAndTheFiddlerMeta },
  { meta: sauleAndMenulisMeta },
  { meta: zemynasBlessingMeta },
  { meta: austejaAndTheGoldenHiveMeta },
  { meta: gabijasHearthMeta },
  { meta: bangputysAndTheAmberFleetMeta },
];

export const storyBySlug = Object.fromEntries(
  stories.map((entry) => [entry.meta.slug, entry]),
) as Record<string, StoryEntry>;
