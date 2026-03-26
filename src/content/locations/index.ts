import * as React from "react";
import type { Language, LocationEntry, LocationMeta, LocationPoint } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations.
(React as unknown as { default?: typeof React }).default ??= React;
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
import AukstaitijaOaksContentEn from "./en/aukstaitija-oaks.mdx";
import JelgavaStoneContentEn from "./en/jelgava-stone.mdx";
import SiauliaiHillContentEn from "./en/siauliai-hill.mdx";
import JurmalaShoreContentEn from "./en/jurmala-shore.mdx";
import SiguldaSpringsContentEn from "./en/sigulda-springs.mdx";
import VilniusThreadContentEn from "./en/vilnius-thread.mdx";
import KernaveMoundsContentEn from "./en/kernave-mounds.mdx";
import TelsiaiAltarsContentEn from "./en/telsiai-altars.mdx";
import DruskininkaiMistContentEn from "./en/druskininkai-mist.mdx";
import NidaDunesContentEn from "./en/nida-dunes.mdx";
import DzukijaMeadowContentEn from "./en/dzukija-meadow.mdx";
import LatgaleHiveContentEn from "./en/latgale-hive.mdx";
import AukstaiciaiLakeContentEn from "./en/aukstaiciai-lake.mdx";
import VentspilsShoreContentEn from "./en/ventspils-shore.mdx";
import RigaSpiresContentEn from "./en/riga-spires.mdx";
import ZemaitijaSkyContentEn from "./en/zemaitija-sky.mdx";
import KaunasHearthContentEn from "./en/kaunas-hearth.mdx";
import MadonaEmberContentEn from "./en/madona-ember.mdx";
import KlaipedaDriftContentEn from "./en/klaipeda-drift.mdx";
import KolkaSurgeContentEn from "./en/kolka-surge.mdx";
import SamogitiaStandContentEn from "./en/samogitia-stand.mdx";
import GaujaCorridorContentEn from "./en/gauja-corridor.mdx";

export const locationEntries: LocationEntry[] = [
  { meta: aukstaitijaOaksMeta, Content: AukstaitijaOaksContentEn, contentByLang: { en: AukstaitijaOaksContentEn, lt: AukstaitijaOaksContentEn, lv: AukstaitijaOaksContentEn } },
  { meta: jelgavaStoneMeta, Content: JelgavaStoneContentEn, contentByLang: { en: JelgavaStoneContentEn, lt: JelgavaStoneContentEn, lv: JelgavaStoneContentEn } },
  { meta: siauliaiHillMeta, Content: SiauliaiHillContentEn, contentByLang: { en: SiauliaiHillContentEn, lt: SiauliaiHillContentEn, lv: SiauliaiHillContentEn } },
  { meta: jurmalaShoreMeta, Content: JurmalaShoreContentEn, contentByLang: { en: JurmalaShoreContentEn, lt: JurmalaShoreContentEn, lv: JurmalaShoreContentEn } },
  { meta: siguldaSpringsMeta, Content: SiguldaSpringsContentEn, contentByLang: { en: SiguldaSpringsContentEn, lt: SiguldaSpringsContentEn, lv: SiguldaSpringsContentEn } },
  { meta: vilniusThreadMeta, Content: VilniusThreadContentEn, contentByLang: { en: VilniusThreadContentEn, lt: VilniusThreadContentEn, lv: VilniusThreadContentEn } },
  { meta: kernaveMoundsMeta, Content: KernaveMoundsContentEn, contentByLang: { en: KernaveMoundsContentEn, lt: KernaveMoundsContentEn, lv: KernaveMoundsContentEn } },
  { meta: telsiaiAltarsMeta, Content: TelsiaiAltarsContentEn, contentByLang: { en: TelsiaiAltarsContentEn, lt: TelsiaiAltarsContentEn, lv: TelsiaiAltarsContentEn } },
  { meta: druskininkaiMistMeta, Content: DruskininkaiMistContentEn, contentByLang: { en: DruskininkaiMistContentEn, lt: DruskininkaiMistContentEn, lv: DruskininkaiMistContentEn } },
  { meta: nidaDunesMeta, Content: NidaDunesContentEn, contentByLang: { en: NidaDunesContentEn, lt: NidaDunesContentEn, lv: NidaDunesContentEn } },
  { meta: dzukijaMeadowMeta, Content: DzukijaMeadowContentEn, contentByLang: { en: DzukijaMeadowContentEn, lt: DzukijaMeadowContentEn, lv: DzukijaMeadowContentEn } },
  { meta: latgaleHiveMeta, Content: LatgaleHiveContentEn, contentByLang: { en: LatgaleHiveContentEn, lt: LatgaleHiveContentEn, lv: LatgaleHiveContentEn } },
  { meta: aukstaiciaiLakeMeta, Content: AukstaiciaiLakeContentEn, contentByLang: { en: AukstaiciaiLakeContentEn, lt: AukstaiciaiLakeContentEn, lv: AukstaiciaiLakeContentEn } },
  { meta: ventspilsShoreMeta, Content: VentspilsShoreContentEn, contentByLang: { en: VentspilsShoreContentEn, lt: VentspilsShoreContentEn, lv: VentspilsShoreContentEn } },
  { meta: rigaSpiresMeta, Content: RigaSpiresContentEn, contentByLang: { en: RigaSpiresContentEn, lt: RigaSpiresContentEn, lv: RigaSpiresContentEn } },
  { meta: zemaitijaSkyMeta, Content: ZemaitijaSkyContentEn, contentByLang: { en: ZemaitijaSkyContentEn, lt: ZemaitijaSkyContentEn, lv: ZemaitijaSkyContentEn } },
  { meta: kaunasHearthMeta, Content: KaunasHearthContentEn, contentByLang: { en: KaunasHearthContentEn, lt: KaunasHearthContentEn, lv: KaunasHearthContentEn } },
  { meta: madonaEmberMeta, Content: MadonaEmberContentEn, contentByLang: { en: MadonaEmberContentEn, lt: MadonaEmberContentEn, lv: MadonaEmberContentEn } },
  { meta: klaipedaDriftMeta, Content: KlaipedaDriftContentEn, contentByLang: { en: KlaipedaDriftContentEn, lt: KlaipedaDriftContentEn, lv: KlaipedaDriftContentEn } },
  { meta: kolkaSurgeMeta, Content: KolkaSurgeContentEn, contentByLang: { en: KolkaSurgeContentEn, lt: KolkaSurgeContentEn, lv: KolkaSurgeContentEn } },
  { meta: samogitiaStandMeta, Content: SamogitiaStandContentEn, contentByLang: { en: SamogitiaStandContentEn, lt: SamogitiaStandContentEn, lv: SamogitiaStandContentEn } },
  { meta: gaujaCorridorMeta, Content: GaujaCorridorContentEn, contentByLang: { en: GaujaCorridorContentEn, lt: GaujaCorridorContentEn, lv: GaujaCorridorContentEn } },
];

export const locationMetas: LocationMeta[] = locationEntries.map((entry) => entry.meta);

export const locationById = Object.fromEntries(
  locationEntries.map((entry) => [entry.meta.id, entry.meta]),
) as Record<string, LocationMeta>;

export const locationEntryById = Object.fromEntries(
  locationEntries.map((entry) => [entry.meta.id, entry]),
) as Record<string, LocationEntry>;

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
  return locationEntries.map((entry) => toLocationPoint(entry.meta, language));
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
  return locationEntries
    .filter((entry) => entry.meta.deity === deitySlug)
    .map((entry) => toLocationPoint(entry.meta, language));
}
