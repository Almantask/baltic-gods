import * as React from "react";
import type { DeityEntry, LocationPoint } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations.
(React as unknown as { default?: typeof React }).default ??= React;

// Gods
import DievasContentEn from "./gods/en/dievas.mdx";
import DievasContentLt from "./gods/lt/dievas.mdx";
import DievasContentLv from "./gods/lv/dievas.mdx";
import MenulisContentEn from "./gods/en/menulis.mdx";
import MenulisContentLt from "./gods/lt/menulis.mdx";
import MenulisContentLv from "./gods/lv/menulis.mdx";
import PerkunasContentEn from "./gods/en/perkunas.mdx";
import PerkunasContentLt from "./gods/lt/perkunas.mdx";
import PerkunasContentLv from "./gods/lv/perkunas.mdx";
import SauleContentEn from "./gods/en/saule.mdx";
import SauleContentLt from "./gods/lt/saule.mdx";
import SauleContentLv from "./gods/lv/saule.mdx";
import ZemynaContentEn from "./gods/en/zemyna.mdx";
import ZemynaContentLt from "./gods/lt/zemyna.mdx";
import ZemynaContentLv from "./gods/lv/zemyna.mdx";

// People
import GabijaContentEn from "./people/en/gabija.mdx";
import GabijaContentLt from "./people/lt/gabija.mdx";
import GabijaContentLv from "./people/lv/gabija.mdx";
import LaimaContentEn from "./people/en/laima.mdx";
import LaimaContentLt from "./people/lt/laima.mdx";
import LaimaContentLv from "./people/lv/laima.mdx";

// Creatures
import AustejaContentEn from "./creatures/en/austeja.mdx";
import AustejaContentLt from "./creatures/lt/austeja.mdx";
import AustejaContentLv from "./creatures/lv/austeja.mdx";
import BangputysContentEn from "./creatures/en/bangputys.mdx";
import BangputysContentLt from "./creatures/lt/bangputys.mdx";
import BangputysContentLv from "./creatures/lv/bangputys.mdx";
import MedineContentEn from "./creatures/en/medine.mdx";
import MedineContentLt from "./creatures/lt/medine.mdx";
import MedineContentLv from "./creatures/lv/medine.mdx";
import VelniasContentEn from "./creatures/en/velnias.mdx";
import VelniasContentLt from "./creatures/lt/velnias.mdx";
import VelniasContentLv from "./creatures/lv/velnias.mdx";

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
