import * as React from "react";
import type { DeityEntry, LocationPoint } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations.
(React as unknown as { default?: typeof React }).default ??= React;

// Gods
import AutrimpasContentEn from "./creatures/en/autrimpas.mdx";
import AutrimpasContentLt from "./creatures/lt/autrimpas.mdx";
import AutrimpasContentLv from "./creatures/lv/autrimpas.mdx";
import DaliaContentEn from "./gods/en/dalia.mdx";
import DaliaContentLt from "./gods/lt/dalia.mdx";
import DaliaContentLv from "./gods/lv/dalia.mdx";
import DievasContentEn from "./gods/en/dievas.mdx";
import DievasContentLt from "./gods/lt/dievas.mdx";
import DievasContentLv from "./gods/lv/dievas.mdx";
import JumisContentEn from "./gods/en/jumis.mdx";
import JumisContentLt from "./gods/lt/jumis.mdx";
import JumisContentLv from "./gods/lv/jumis.mdx";
import MaraContentEn from "./gods/en/mara.mdx";
import MaraContentLt from "./gods/lt/mara.mdx";
import MaraContentLv from "./gods/lv/mara.mdx";
import MenulisContentEn from "./gods/en/menulis.mdx";
import MenulisContentLt from "./gods/lt/menulis.mdx";
import MenulisContentLv from "./gods/lv/menulis.mdx";
import PerkunasContentEn from "./gods/en/perkunas.mdx";
import PerkunasContentLt from "./gods/lt/perkunas.mdx";
import PerkunasContentLv from "./gods/lv/perkunas.mdx";
import SauleContentEn from "./gods/en/saule.mdx";
import SauleContentLt from "./gods/lt/saule.mdx";
import SauleContentLv from "./gods/lv/saule.mdx";
import TeliavelisContentEn from "./gods/en/teliavelis.mdx";
import TeliavelisContentLt from "./gods/lt/teliavelis.mdx";
import TeliavelisContentLv from "./gods/lv/teliavelis.mdx";
import UsinsContentEn from "./gods/en/usins.mdx";
import UsinsContentLt from "./gods/lt/usins.mdx";
import UsinsContentLv from "./gods/lv/usins.mdx";
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
import AusrineContentEn from "./creatures/en/ausrine.mdx";
import AusrineContentLt from "./creatures/lt/ausrine.mdx";
import AusrineContentLv from "./creatures/lv/ausrine.mdx";
import BangputysContentEn from "./creatures/en/bangputys.mdx";
import BangputysContentLt from "./creatures/lt/bangputys.mdx";
import BangputysContentLv from "./creatures/lv/bangputys.mdx";
import GiltineContentEn from "./creatures/en/giltine.mdx";
import GiltineContentLt from "./creatures/lt/giltine.mdx";
import GiltineContentLv from "./creatures/lv/giltine.mdx";
import MedineContentEn from "./creatures/en/medine.mdx";
import MedineContentLt from "./creatures/lt/medine.mdx";
import MedineContentLv from "./creatures/lv/medine.mdx";
import PatolloContentEn from "./creatures/en/patollo.mdx";
import PatolloContentLt from "./creatures/lt/patollo.mdx";
import PatolloContentLv from "./creatures/lv/patollo.mdx";
import PatrimpasContentEn from "./gods/en/patrimpas.mdx";
import PatrimpasContentLt from "./gods/lt/patrimpas.mdx";
import PatrimpasContentLv from "./gods/lv/patrimpas.mdx";
import PukisContentEn from "./creatures/en/pukis.mdx";
import PukisContentLt from "./creatures/lt/pukis.mdx";
import PukisContentLv from "./creatures/lv/pukis.mdx";
import VelniasContentEn from "./creatures/en/velnias.mdx";
import VelniasContentLt from "./creatures/lt/velnias.mdx";
import VelniasContentLv from "./creatures/lv/velnias.mdx";
import VakarineContentEn from "./creatures/en/vakarine.mdx";
import VakarineContentLt from "./creatures/lt/vakarine.mdx";
import VakarineContentLv from "./creatures/lv/vakarine.mdx";

import {
  austejaMeta,
  ausrineMeta,
  autrimpasMeta,
  bangputysMeta,
  daliaMeta,
  dievasMeta,
  gabijaMeta,
  giltineMeta,
  jumisMeta,
  laimaMeta,
  maraMeta,
  medineMeta,
  menulisMeta,
  patollaMeta,
  patrimpAsMeta,
  perkunasMeta,
  pukisMeta,
  sauleMeta,
  teliavelIsMeta,
  usinsMeta,
  vakarineMeta,
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
  { meta: giltineMeta, Content: GiltineContentEn, contentByLang: { en: GiltineContentEn, lt: GiltineContentLt, lv: GiltineContentLv } },
  { meta: pukisMeta, Content: PukisContentEn, contentByLang: { en: PukisContentEn, lt: PukisContentLt, lv: PukisContentLv } },
  { meta: ausrineMeta, Content: AusrineContentEn, contentByLang: { en: AusrineContentEn, lt: AusrineContentLt, lv: AusrineContentLv } },
  { meta: maraMeta, Content: MaraContentEn, contentByLang: { en: MaraContentEn, lt: MaraContentLt, lv: MaraContentLv } },
  { meta: jumisMeta, Content: JumisContentEn, contentByLang: { en: JumisContentEn, lt: JumisContentLt, lv: JumisContentLv } },
  { meta: usinsMeta, Content: UsinsContentEn, contentByLang: { en: UsinsContentEn, lt: UsinsContentLt, lv: UsinsContentLv } },
  { meta: vakarineMeta, Content: VakarineContentEn, contentByLang: { en: VakarineContentEn, lt: VakarineContentLt, lv: VakarineContentLv } },
  { meta: teliavelIsMeta, Content: TeliavelisContentEn, contentByLang: { en: TeliavelisContentEn, lt: TeliavelisContentLt, lv: TeliavelisContentLv } },
  { meta: daliaMeta, Content: DaliaContentEn, contentByLang: { en: DaliaContentEn, lt: DaliaContentLt, lv: DaliaContentLv } },
  { meta: patollaMeta, Content: PatolloContentEn, contentByLang: { en: PatolloContentEn, lt: PatolloContentLt, lv: PatolloContentLv } },
  { meta: patrimpAsMeta, Content: PatrimpasContentEn, contentByLang: { en: PatrimpasContentEn, lt: PatrimpasContentLt, lv: PatrimpasContentLv } },
  { meta: autrimpasMeta, Content: AutrimpasContentEn, contentByLang: { en: AutrimpasContentEn, lt: AutrimpasContentLt, lv: AutrimpasContentLv } },
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
