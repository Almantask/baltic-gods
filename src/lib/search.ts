import { allLocations, deities } from "@/content/deities";
import { stories } from "@/content/stories";
import type { DeityEntry, Domain, StoryEntry } from "@/types/content";

const normalize = (value: string) => value.toLowerCase().trim();

export function filterDeities({
  query,
  domain,
}: { query?: string; domain?: Domain }) {
  const normalized = normalize(query ?? "");
  return deities.filter((entry) => {
    if (domain && entry.meta.domain !== domain) return false;
    if (!normalized) return true;
    return (
      entry.meta.name.toLowerCase().includes(normalized) ||
      entry.meta.keywords.some((k) => k.toLowerCase().includes(normalized)) ||
      Object.values(entry.meta.epithet).some((v) => v.toLowerCase().includes(normalized))
    );
  });
}

export function searchLocations(query?: string) {
  const normalized = normalize(query ?? "");
  if (!normalized) return allLocations;
  return allLocations.filter((loc) => {
    return (
      loc.name.toLowerCase().includes(normalized) ||
      loc.region.toLowerCase().includes(normalized) ||
      loc.siteType.toLowerCase().includes(normalized) ||
      loc.significance.toLowerCase().includes(normalized)
    );
  });
}

export function getDeity(slug: string): DeityEntry | undefined {
  return deities.find((entry) => entry.meta.slug === slug);
}

export function filterStories(query?: string): StoryEntry[] {
  const normalized = normalize(query ?? "");
  if (!normalized) return stories;
  return stories.filter((entry) => {
    return (
      entry.meta.title.toLowerCase().includes(normalized) ||
      entry.meta.summary.toLowerCase().includes(normalized) ||
      entry.meta.content.toLowerCase().includes(normalized)
    );
  });
}
