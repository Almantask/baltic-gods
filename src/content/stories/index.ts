import * as React from "react";
import type { StoryEntry } from "@/types/content";

// Ensure React has a default export for MDX runtime expectations.
(React as unknown as { default?: typeof React }).default ??= React;

// English
import ThunderOakEn from "./en/thunder-oak-of-perkunas.mdx";
import WeavingOfLaimaEn from "./en/the-weaving-of-laima.mdx";
import VelniasAndTheFiddlerEn from "./en/velnias-and-the-fiddler.mdx";
import SauleAndMenulisEn from "./en/the-wedding-of-saule-and-menulis.mdx";
import ZemynasBlessingEn from "./en/zemynas-blessing.mdx";
import AustejaAndTheGoldenHiveEn from "./en/austeja-and-the-golden-hive.mdx";
import GabijasHearthEn from "./en/gabijas-eternal-hearth.mdx";
import BangputysAndTheAmberFleetEn from "./en/bangputys-and-the-amber-fleet.mdx";
import MedeinaEn from "./en/medeina-and-the-sacred-hare.mdx";
import GiltineEn from "./en/giltine-and-the-death-watch.mdx";
import PukisEn from "./en/pukis-and-the-dragon-wealth.mdx";
import EgleEn from "./en/egle-queen-of-serpents.mdx";
import JurateEn from "./en/jurate-and-kastytis.mdx";
import PerkunasDevilEn from "./en/perkunas-and-the-devil.mdx";

// Lithuanian
import ThunderOakLt from "./lt/thunder-oak-of-perkunas.mdx";
import WeavingOfLaimaLt from "./lt/the-weaving-of-laima.mdx";
import VelniasAndTheFiddlerLt from "./lt/velnias-and-the-fiddler.mdx";
import SauleAndMenulisLt from "./lt/the-wedding-of-saule-and-menulis.mdx";
import ZemynasBlessingLt from "./lt/zemynas-blessing.mdx";
import AustejaAndTheGoldenHiveLt from "./lt/austeja-and-the-golden-hive.mdx";
import GabijasHearthLt from "./lt/gabijas-eternal-hearth.mdx";
import BangputysAndTheAmberFleetLt from "./lt/bangputys-and-the-amber-fleet.mdx";
import MedeinaLt from "./lt/medeina-and-the-sacred-hare.mdx";
import GiltineLt from "./lt/giltine-and-the-death-watch.mdx";
import PukisLt from "./lt/pukis-and-the-dragon-wealth.mdx";
import EgleLt from "./lt/egle-queen-of-serpents.mdx";
import JurateLt from "./lt/jurate-and-kastytis.mdx";
import PerkunasDevilLt from "./lt/perkunas-and-the-devil.mdx";

// Latvian
import ThunderOakLv from "./lv/thunder-oak-of-perkunas.mdx";
import WeavingOfLaimaLv from "./lv/the-weaving-of-laima.mdx";
import VelniasAndTheFiddlerLv from "./lv/velnias-and-the-fiddler.mdx";
import SauleAndMenulisLv from "./lv/the-wedding-of-saule-and-menulis.mdx";
import ZemynasBlessingLv from "./lv/zemynas-blessing.mdx";
import AustejaAndTheGoldenHiveLv from "./lv/austeja-and-the-golden-hive.mdx";
import GabijasHearthLv from "./lv/gabijas-eternal-hearth.mdx";
import BangputysAndTheAmberFleetLv from "./lv/bangputys-and-the-amber-fleet.mdx";
import MedeinaLv from "./lv/medeina-and-the-sacred-hare.mdx";
import GiltineLv from "./lv/giltine-and-the-death-watch.mdx";
import PukisLv from "./lv/pukis-and-the-dragon-wealth.mdx";
import EgleLv from "./lv/egle-queen-of-serpents.mdx";
import JurateLv from "./lv/jurate-and-kastytis.mdx";
import PerkunasDevilLv from "./lv/perkunas-and-the-devil.mdx";

import {
  thunderOakMeta,
  weavingOfLaimaMeta,
  velniasAndTheFiddlerMeta,
  sauleAndMenulisMeta,
  zemynasBlessingMeta,
  austejaAndTheGoldenHiveMeta,
  gabijasHearthMeta,
  bangputysAndTheAmberFleetMeta,
  medeinaSacredHareMeta,
  giltineDeathWatchMeta,
  pukisWealthMeta,
  egleQueenOfSerpentsMeta,
  jurateAndKastytisMeta,
  perkunasAndTheDevilMeta,
} from "./meta";

export const stories: StoryEntry[] = [
  { meta: thunderOakMeta, Content: ThunderOakEn, contentByLang: { en: ThunderOakEn, lt: ThunderOakLt, lv: ThunderOakLv } },
  { meta: weavingOfLaimaMeta, Content: WeavingOfLaimaEn, contentByLang: { en: WeavingOfLaimaEn, lt: WeavingOfLaimaLt, lv: WeavingOfLaimaLv } },
  { meta: velniasAndTheFiddlerMeta, Content: VelniasAndTheFiddlerEn, contentByLang: { en: VelniasAndTheFiddlerEn, lt: VelniasAndTheFiddlerLt, lv: VelniasAndTheFiddlerLv } },
  { meta: sauleAndMenulisMeta, Content: SauleAndMenulisEn, contentByLang: { en: SauleAndMenulisEn, lt: SauleAndMenulisLt, lv: SauleAndMenulisLv } },
  { meta: zemynasBlessingMeta, Content: ZemynasBlessingEn, contentByLang: { en: ZemynasBlessingEn, lt: ZemynasBlessingLt, lv: ZemynasBlessingLv } },
  { meta: austejaAndTheGoldenHiveMeta, Content: AustejaAndTheGoldenHiveEn, contentByLang: { en: AustejaAndTheGoldenHiveEn, lt: AustejaAndTheGoldenHiveLt, lv: AustejaAndTheGoldenHiveLv } },
  { meta: gabijasHearthMeta, Content: GabijasHearthEn, contentByLang: { en: GabijasHearthEn, lt: GabijasHearthLt, lv: GabijasHearthLv } },
  { meta: bangputysAndTheAmberFleetMeta, Content: BangputysAndTheAmberFleetEn, contentByLang: { en: BangputysAndTheAmberFleetEn, lt: BangputysAndTheAmberFleetLt, lv: BangputysAndTheAmberFleetLv } },
  { meta: medeinaSacredHareMeta, Content: MedeinaEn, contentByLang: { en: MedeinaEn, lt: MedeinaLt, lv: MedeinaLv } },
  { meta: giltineDeathWatchMeta, Content: GiltineEn, contentByLang: { en: GiltineEn, lt: GiltineLt, lv: GiltineLv } },
  { meta: pukisWealthMeta, Content: PukisEn, contentByLang: { en: PukisEn, lt: PukisLt, lv: PukisLv } },
  { meta: egleQueenOfSerpentsMeta, Content: EgleEn, contentByLang: { en: EgleEn, lt: EgleLt, lv: EgleLv } },
  { meta: jurateAndKastytisMeta, Content: JurateEn, contentByLang: { en: JurateEn, lt: JurateLt, lv: JurateLv } },
  { meta: perkunasAndTheDevilMeta, Content: PerkunasDevilEn, contentByLang: { en: PerkunasDevilEn, lt: PerkunasDevilLt, lv: PerkunasDevilLv } },
];

export const storyBySlug = Object.fromEntries(
  stories.map((entry) => [entry.meta.slug, entry]),
) as Record<string, StoryEntry>;
