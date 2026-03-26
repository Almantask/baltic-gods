import { findLocationPoint, getLocationPoints } from "@/content/locations";
import type { Language, LocationPoint, StoryMeta } from "@/types/content";

const LABEL_FALLBACKS: Record<string, string> = {
  "curonian spit": "nida-dunes",
  "palanga amber coast": "klaipeda-drift",
  "rambynas hill": "telsiai-altars",
  "sventoji oak sanctuary": "aukstaitija-oaks",
  "turaida sacred spring": "sigulda-springs",
};

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const tokenize = (value: string) => normalize(value).split(/[^a-z0-9]+/).filter(Boolean);

function matchLabelToLocation(
  label: string,
  candidates: LocationPoint[],
  beings: string[],
  excludeIds: Set<string>,
) {
  const labelTokens = tokenize(label);
  const normalizedLabel = normalize(label);
  let best: LocationPoint | null = null;
  let bestScore = 0;

  for (const candidate of candidates) {
    if (excludeIds.has(candidate.id)) continue;
    const nameTokens = tokenize(candidate.name);
    const tokenOverlap = nameTokens.filter((token) => labelTokens.includes(token)).length;
    const partialMatch = normalizedLabel.includes(normalize(candidate.name)) ||
      normalize(candidate.name).includes(normalizedLabel);
    const deityBoost = beings.includes(candidate.deity) ? 0.5 : 0;
    const score = tokenOverlap + deityBoost + (partialMatch ? 2 : 0);

    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  }

  if (!best || bestScore === 0) return null;
  return best;
}

export function getStoryLocations(meta: StoryMeta, language: Language) {
  const allLocationsEn = getLocationPoints("en");
  const selected = new Map<string, LocationPoint>();
  const selectedIds = new Set<string>();
  const addById = (id?: string) => {
    if (!id || selectedIds.has(id)) return;
    const location = findLocationPoint(id, language);
    if (location) {
      selectedIds.add(id);
      selected.set(id, location);
    }
  };

  (meta.locationIds ?? []).forEach(addById);

  for (const label of meta.locations) {
    const fallbackId = LABEL_FALLBACKS[normalize(label)];
    if (fallbackId) {
      addById(fallbackId);
      continue;
    }

    const matched = matchLabelToLocation(label, allLocationsEn, meta.beings, selectedIds);
    if (matched) addById(matched.id);
  }

  if (selected.size === 0) {
    allLocationsEn
      .filter((loc) => meta.beings.includes(loc.deity))
      .slice(0, 3)
      .forEach((loc) => addById(loc.id));
  }

  return Array.from(selected.values());
}
