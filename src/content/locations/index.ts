import * as React from "react";
import type { Language, LocationMeta, LocationPoint } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations (parity with other content modules).
(React as unknown as { default?: typeof React }).default ??= React;

import {
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

const translateField = (value: Record<Language, string>, language: Language) =>
  value[language] ?? value.en;

export function localizeLocation(meta: LocationMeta, language: Language): LocationPoint {
  return {
    id: meta.id,
    name: translateField(meta.name, language),
    coordinates: meta.coordinates,
    region: meta.region,
    description: translateField(meta.description, language),
    siteType: meta.siteType,
    aura: meta.aura,
    deity: meta.deity,
    significance: translateField(meta.significance, language),
  };
}

export function getLocations(language: Language): LocationPoint[] {
  return locationMetas.map((meta) => localizeLocation(meta, language));
}

export function getLocationMetaById(id: string): LocationMeta | undefined {
  return locationMetas.find((meta) => meta.id === id);
}

export function getLocationById(id: string, language: Language): LocationPoint | undefined {
  const meta = getLocationMetaById(id);
  if (!meta) return undefined;
  return localizeLocation(meta, language);
}

export function getLocationsForDeity(deity: string, language: Language): LocationPoint[] {
  return locationMetas
    .filter((meta) => meta.deity === deity)
    .map((meta) => localizeLocation(meta, language));
}
