import * as React from "react";
import type { DeityEntry, LocationPoint } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations.
(React as unknown as { default?: typeof React }).default ??= React;

// English content
import AustejaContentEn from "./en/austeja.mdx";
import BangputysContentEn from "./en/bangputys.mdx";
import DievasContentEn from "./en/dievas.mdx";
import GabijaContentEn from "./en/gabija.mdx";
import LaimaContentEn from "./en/laima.mdx";
import MedineContentEn from "./en/medine.mdx";
import MenulisContentEn from "./en/menulis.mdx";
import PerkunasContentEn from "./en/perkunas.mdx";
import SauleContentEn from "./en/saule.mdx";
import VelniasContentEn from "./en/velnias.mdx";
import ZemynaContentEn from "./en/zemyna.mdx";

// Lithuanian content
import AustejaContentLt from "./lt/austeja.mdx";
import BangputysContentLt from "./lt/bangputys.mdx";
import DievasContentLt from "./lt/dievas.mdx";
import GabijaContentLt from "./lt/gabija.mdx";
import LaimaContentLt from "./lt/laima.mdx";
import MedineContentLt from "./lt/medine.mdx";
import MenulisContentLt from "./lt/menulis.mdx";
import PerkunasContentLt from "./lt/perkunas.mdx";
import SauleContentLt from "./lt/saule.mdx";
import VelniasContentLt from "./lt/velnias.mdx";
import ZemynaContentLt from "./lt/zemyna.mdx";

// Latvian content
import AustejaContentLv from "./lv/austeja.mdx";
import BangputysContentLv from "./lv/bangputys.mdx";
import DievasContentLv from "./lv/dievas.mdx";
import GabijaContentLv from "./lv/gabija.mdx";
import LaimaContentLv from "./lv/laima.mdx";
import MedineContentLv from "./lv/medine.mdx";
import MenulisContentLv from "./lv/menulis.mdx";
import PerkunasContentLv from "./lv/perkunas.mdx";
import SauleContentLv from "./lv/saule.mdx";
import VelniasContentLv from "./lv/velnias.mdx";
import ZemynaContentLv from "./lv/zemyna.mdx";

import {
  austejaMeta,
  bangputysMeta,
  dievasMeta,
  gabijaMeta,
  laimaMeta,
  medineMeta,
  menulisMeta,
  perkunasMeta,
  sauleMeta,
  velniasMeta,
  zemynaMeta,
} from "./meta";

export const deities: DeityEntry[] = [
  { meta: perkunasMeta, Content: PerkunasContentEn, contentByLang: { en: PerkunasContentEn, lt: PerkunasContentLt, lv: PerkunasContentLv } },
  { meta: zemynaMeta, Content: ZemynaContentEn, contentByLang: { en: ZemynaContentEn, lt: ZemynaContentLt, lv: ZemynaContentLv } },
  { meta: sauleMeta, Content: SauleContentEn, contentByLang: { en: SauleContentEn, lt: SauleContentLt, lv: SauleContentLv } },
  { meta: laimaMeta, Content: LaimaContentEn, contentByLang: { en: LaimaContentEn, lt: LaimaContentLt, lv: LaimaContentLv } },
  { meta: velniasMeta, Content: VelniasContentEn, contentByLang: { en: VelniasContentEn, lt: VelniasContentLt, lv: VelniasContentLv } },
  { meta: austejaMeta, Content: AustejaContentEn, contentByLang: { en: AustejaContentEn, lt: AustejaContentLt, lv: AustejaContentLv } },
  { meta: menulisMeta, Content: MenulisContentEn, contentByLang: { en: MenulisContentEn, lt: MenulisContentLt, lv: MenulisContentLv } },
  { meta: dievasMeta, Content: DievasContentEn, contentByLang: { en: DievasContentEn, lt: DievasContentLt, lv: DievasContentLv } },
  { meta: gabijaMeta, Content: GabijaContentEn, contentByLang: { en: GabijaContentEn, lt: GabijaContentLt, lv: GabijaContentLv } },
  { meta: bangputysMeta, Content: BangputysContentEn, contentByLang: { en: BangputysContentEn, lt: BangputysContentLt, lv: BangputysContentLv } },
  { meta: medineMeta, Content: MedineContentEn, contentByLang: { en: MedineContentEn, lt: MedineContentLt, lv: MedineContentLv } },
];

export const deityBySlug = Object.fromEntries(
  deities.map((entry) => [entry.meta.slug, entry]),
) as Record<string, DeityEntry>;

export const allLocations: LocationPoint[] = deities.flatMap(
  (entry) => entry.meta.locations,
);

export function findLocationById(id: string) {
  return allLocations.find((location) => location.id === id);
}
