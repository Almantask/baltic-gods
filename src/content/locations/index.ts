import type { Language, LocationMeta, LocationPoint } from "@/types/content";
import {
  aukstaiciaiLakeMeta,
  aukstaitijaOaksMeta,
  druskininkaiMistMeta,
  dzukijaMeadowMeta,
  gaujaCorridorMeta,
  jelgavaStoneMeta,
  jurmalaShoreMeta,
  kaunasHearthMeta,
  klaipedaDriftMeta,
  kolkaSurgeMeta,
  kernaveMoundsMeta,
  latgaleHiveMeta,
  madonaEmberMeta,
  nidaDunesMeta,
  rigaSpiresMeta,
  samogitiaStandMeta,
  siguldaSpringsMeta,
  siauliaiHillMeta,
  telsiaiAltarsMeta,
  ventspilsShoreMeta,
  vilniusThreadMeta,
  zemaitijaSkyMeta,
} from "./meta";

export const locationMetas: LocationMeta[] = [
  aukstaitijaOaksMeta,
  jelgavaStoneMeta,
  siauliaiHillMeta,
  jurmalaShoreMeta,
  siguldaSpringsMeta,
  vilniusThreadMeta,
  kernaveMoundsMeta,
  telsiaiAltarsMeta,
  druskininkaiMistMeta,
  nidaDunesMeta,
  dzukijaMeadowMeta,
  latgaleHiveMeta,
  aukstaiciaiLakeMeta,
  ventspilsShoreMeta,
  rigaSpiresMeta,
  zemaitijaSkyMeta,
  kaunasHearthMeta,
  madonaEmberMeta,
  klaipedaDriftMeta,
  kolkaSurgeMeta,
  samogitiaStandMeta,
  gaujaCorridorMeta,
];

export const locationById = Object.fromEntries(
  locationMetas.map((loc) => [loc.id, loc]),
) as Record<string, LocationMeta>;

function toLocationPoint(meta: LocationMeta, language: Language, fallback?: LocationPoint): LocationPoint {
  return {
    id: meta.id,
    name: meta.name[language] ?? fallback?.name ?? meta.name.en,
    coordinates: meta.coordinates,
    region: meta.region,
    description: meta.description[language] ?? fallback?.description ?? meta.description.en,
    siteType: meta.siteType,
    aura: meta.aura,
    deity: meta.deity,
    significance: meta.significance[language] ?? fallback?.significance ?? meta.significance.en,
  };
}

export function getLocationPoints(language: Language = "en") {
  return locationMetas.map((meta) => toLocationPoint(meta, language));
}

export function findLocationPoint(
  id: string,
  language: Language = "en",
  fallback?: LocationPoint,
) {
  const meta = locationById[id];
  if (!meta) return fallback;
  return toLocationPoint(meta, language, fallback);
}

export function getLocationsForDeity(deitySlug: string, language: Language = "en") {
  return locationMetas
    .filter((meta) => meta.deity === deitySlug)
    .map((meta) => toLocationPoint(meta, language));
}
