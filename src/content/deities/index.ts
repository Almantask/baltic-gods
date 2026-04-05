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
// Batch 3 — Gods
import VejopatisContentEn from "./gods/en/vejopatis.mdx";
import VejopatisContentLt from "./gods/lt/vejopatis.mdx";
import VejopatisContentLv from "./gods/lv/vejopatis.mdx";
import VaizgantasContentEn from "./gods/en/vaizgantas.mdx";
import VaizgantasContentLt from "./gods/lt/vaizgantas.mdx";
import VaizgantasContentLv from "./gods/lv/vaizgantas.mdx";
import RagutisContentEn from "./gods/en/ragutis.mdx";
import RagutisContentLt from "./gods/lt/ragutis.mdx";
import RagutisContentLv from "./gods/lv/ragutis.mdx";
import DimstisContentEn from "./gods/en/dimstipatis.mdx";
import DimstisContentLt from "./gods/lt/dimstipatis.mdx";
import DimstisContentLv from "./gods/lv/dimstipatis.mdx";
import JanisContentEn from "./gods/en/janis.mdx";
import JanisContentLt from "./gods/lt/janis.mdx";
import JanisContentLv from "./gods/lv/janis.mdx";
import MezaMateContentEn from "./gods/en/meza-mate.mdx";
import MezaMateContentLt from "./gods/lt/meza-mate.mdx";
import MezaMateContentLv from "./gods/lv/meza-mate.mdx";
import VeluMateContentEn from "./gods/en/velu-mate.mdx";
import VeluMateContentLt from "./gods/lt/velu-mate.mdx";
import VeluMateContentLv from "./gods/lv/velu-mate.mdx";
import AuschautsContentEn from "./gods/en/auschauts.mdx";
import AuschautsContentLt from "./gods/lt/auschauts.mdx";
import AuschautsContentLv from "./gods/lv/auschauts.mdx";
import KurkeContentEn from "./gods/en/kurke.mdx";
import KurkeContentLt from "./gods/lt/kurke.mdx";
import KurkeContentLv from "./gods/lv/kurke.mdx";
// Batch 3 — Creatures
import AitvarasContentEn from "./creatures/en/aitvaras.mdx";
import AitvarasContentLt from "./creatures/lt/aitvaras.mdx";
import AitvarasContentLv from "./creatures/lv/aitvaras.mdx";
import LaumesContentEn from "./creatures/en/laumes.mdx";
import LaumesContentLt from "./creatures/lt/laumes.mdx";
import LaumesContentLv from "./creatures/lv/laumes.mdx";
import ZaltysContentEn from "./creatures/en/zaltys.mdx";
import ZaltysContentLt from "./creatures/lt/zaltys.mdx";
import ZaltysContentLv from "./creatures/lv/zaltys.mdx";
// Batch 3 — People
import NeringaContentEn from "./people/en/neringa.mdx";
import NeringaContentLt from "./people/lt/neringa.mdx";
import NeringaContentLv from "./people/lv/neringa.mdx";
import SovijusContentEn from "./people/en/sovijus.mdx";
import SovijusContentLt from "./people/lt/sovijus.mdx";
import SovijusContentLv from "./people/lv/sovijus.mdx";
// Batch 4 — Gods (LT)
import PraamziusContentEn from "./gods/en/praamzius.mdx";
import PraamziusContentLt from "./gods/lt/praamzius.mdx";
import PraamziusContentLv from "./gods/lv/praamzius.mdx";
import ZvorunaContentEn from "./gods/en/zvoruna.mdx";
import ZvorunaContentLt from "./gods/lt/zvoruna.mdx";
import ZvorunaContentLv from "./gods/lv/zvoruna.mdx";
import ZemeipatisContentEn from "./gods/en/zemepatis.mdx";
import ZemeipatisContentLt from "./gods/lt/zemepatis.mdx";
import ZemeipatisContentLv from "./gods/lv/zemepatis.mdx";
import GabjaujaContentEn from "./gods/en/gabjauja.mdx";
import GabjaujaContentLt from "./gods/lt/gabjauja.mdx";
import GabjaujaContentLv from "./gods/lv/gabjauja.mdx";
import PilvytisContentEn from "./gods/en/pilvytis.mdx";
import PilvytisContentLt from "./gods/lt/pilvytis.mdx";
import PilvytisContentLv from "./gods/lv/pilvytis.mdx";
import BirzulisContentEn from "./gods/en/birzulis.mdx";
import BirzulisContentLt from "./gods/lt/birzulis.mdx";
import BirzulisContentLv from "./gods/lv/birzulis.mdx";
import KirnisContentEn from "./gods/en/kirnis.mdx";
import KirnisContentLt from "./gods/lt/kirnis.mdx";
import KirnisContentLv from "./gods/lv/kirnis.mdx";
// Batch 4 — Gods (LV)
import DievaDeliContentEn from "./gods/en/dieva-deli.mdx";
import DievaDeliContentLt from "./gods/lt/dieva-deli.mdx";
import DievaDeliContentLv from "./gods/lv/dieva-deli.mdx";
import SaulesMeitasContentEn from "./gods/en/saules-meitas.mdx";
import SaulesMeitasContentLt from "./gods/lt/saules-meitas.mdx";
import SaulesMeitasContentLv from "./gods/lv/saules-meitas.mdx";
import JurasMateContentEn from "./gods/en/juras-mate.mdx";
import JurasMateContentLt from "./gods/lt/juras-mate.mdx";
import JurasMateContentLv from "./gods/lv/juras-mate.mdx";
import UdensMateContentEn from "./gods/en/udens-mate.mdx";
import UdensMateContentLt from "./gods/lt/udens-mate.mdx";
import UdensMateContentLv from "./gods/lv/udens-mate.mdx";
import VejaMateContentEn from "./gods/en/veja-mate.mdx";
import VejaMateContentLt from "./gods/lt/veja-mate.mdx";
import VejaMateContentLv from "./gods/lv/veja-mate.mdx";
// Batch 4 — Gods (PR)
import OkopirmusContentEn from "./gods/en/okopirmus.mdx";
import OkopirmusContentLt from "./gods/lt/okopirmus.mdx";
import OkopirmusContentLv from "./gods/lv/okopirmus.mdx";
import SwayxtixContentEn from "./gods/en/swayxtix.mdx";
import SwayxtixContentLt from "./gods/lt/swayxtix.mdx";
import SwayxtixContentLv from "./gods/lv/swayxtix.mdx";
import BardoaitsContentEn from "./gods/en/bardoaits.mdx";
import BardoaitsContentLt from "./gods/lt/bardoaits.mdx";
import BardoaitsContentLv from "./gods/lv/bardoaits.mdx";
// Batch 4 — Creatures
import KaukaiContentEn from "./creatures/en/kaukai.mdx";
import KaukaiContentLt from "./creatures/lt/kaukai.mdx";
import KaukaiContentLv from "./creatures/lv/kaukai.mdx";
import RaganaContentEn from "./creatures/en/ragana.mdx";
import RaganaContentLt from "./creatures/lt/ragana.mdx";
import RaganaContentLv from "./creatures/lv/ragana.mdx";
import SloguteContentEn from "./creatures/en/slogute.mdx";
import SloguteContentLt from "./creatures/lt/slogute.mdx";
import SloguteContentLv from "./creatures/lv/slogute.mdx";
import VilkacisContentEn from "./creatures/en/vilkacis.mdx";
import VilkacisContentLt from "./creatures/lt/vilkacis.mdx";
import VilkacisContentLv from "./creatures/lv/vilkacis.mdx";
import LietuvensContentEn from "./creatures/en/lietuvens.mdx";
import LietuvensContentLt from "./creatures/lt/lietuvens.mdx";
import LietuvensContentLv from "./creatures/lv/lietuvens.mdx";
// Batch 4 — People
import EgleContentEn from "./people/en/egle.mdx";
import EgleContentLt from "./people/lt/egle.mdx";
import EgleContentLv from "./people/lv/egle.mdx";
import LacplesisContentEn from "./people/en/lacplesis.mdx";
import LacplesisContentLt from "./people/lt/lacplesis.mdx";
import LacplesisContentLv from "./people/lv/lacplesis.mdx";
// Batch 5 — Gods (LT Nature)
import MedziojnaContentEn from "./gods/en/medziojna.mdx";
import MedziojnaContentLt from "./gods/lt/medziojna.mdx";
import MedziojnaContentLv from "./gods/lv/medziojna.mdx";
import EjagusteContentEn from "./gods/en/ejaguste.mdx";
import EjagusteContentLt from "./gods/lt/ejaguste.mdx";
import EjagusteContentLv from "./gods/lv/ejaguste.mdx";
import SilinytisContentEn from "./gods/en/silinytis.mdx";
import SilinytisContentLt from "./gods/lt/silinytis.mdx";
import SilinytisContentLv from "./gods/lv/silinytis.mdx";
import GiraitisContentEn from "./gods/en/giraitis.mdx";
import GiraitisContentLt from "./gods/lt/giraitis.mdx";
import GiraitisContentLv from "./gods/lv/giraitis.mdx";
// Batch 5 — Gods (LV Mates)
import UgunsMateContentEn from "./gods/en/uguns-mate.mdx";
import UgunsMateContentLt from "./gods/lt/uguns-mate.mdx";
import UgunsMateContentLv from "./gods/lv/uguns-mate.mdx";
import MajasMateContentEn from "./gods/en/majas-mate.mdx";
import MajasMateContentLt from "./gods/lt/majas-mate.mdx";
import MajasMateContentLv from "./gods/lv/majas-mate.mdx";
import PirtsMateContentEn from "./gods/en/pirts-mate.mdx";
import PirtsMateContentLt from "./gods/lt/pirts-mate.mdx";
import PirtsMateContentLv from "./gods/lv/pirts-mate.mdx";
import LopuMateContentEn from "./gods/en/lopu-mate.mdx";
import LopuMateContentLt from "./gods/lt/lopu-mate.mdx";
import LopuMateContentLv from "./gods/lv/lopu-mate.mdx";
// Batch 5 — Gods (PR)
import PuschkaitisContentEn from "./gods/en/puschkaitis.mdx";
import PuschkaitisContentLt from "./gods/lt/puschkaitis.mdx";
import PuschkaitisContentLv from "./gods/lv/puschkaitis.mdx";
import CurchoContentEn from "./gods/en/curcho.mdx";
import CurchoContentLt from "./gods/lt/curcho.mdx";
import CurchoContentLv from "./gods/lv/curcho.mdx";
// Batch 6 — Gods (LT Agricultural)
import PliuktisContentEn from "./gods/en/pliuktis.mdx";
import PliuktisContentLt from "./gods/lt/pliuktis.mdx";
import PliuktisContentLv from "./gods/lv/pliuktis.mdx";
import KaupolisContentEn from "./gods/en/kaupolis.mdx";
import KaupolisContentLt from "./gods/lt/kaupolis.mdx";
import KaupolisContentLv from "./gods/lv/kaupolis.mdx";
import LygynaContentEn from "./gods/en/lygyna.mdx";
import LygynaContentLt from "./gods/lt/lygyna.mdx";
import LygynaContentLv from "./gods/lv/lygyna.mdx";
import RugucysContentEn from "./gods/en/ruguczys.mdx";
import RugucysContentLt from "./gods/lt/ruguczys.mdx";
import RugucysContentLv from "./gods/lv/ruguczys.mdx";
// Batch 6 — People (LT)
import BiruteContentEn from "./people/en/birute.mdx";
import BiruteContentLt from "./people/lt/birute.mdx";
import BiruteContentLv from "./people/lv/birute.mdx";
// Batch 6 — Gods (LV Mates)
import PienaMateContentEn from "./gods/en/piena-mate.mdx";
import PienaMateContentLt from "./gods/lt/piena-mate.mdx";
import PienaMateContentLv from "./gods/lv/piena-mate.mdx";
import VilkuMateContentEn from "./gods/en/vilku-mate.mdx";
import VilkuMateContentLt from "./gods/lt/vilku-mate.mdx";
import VilkuMateContentLv from "./gods/lv/vilku-mate.mdx";
import TirumaMateContentEn from "./gods/en/tiruma-mate.mdx";
import TirumaMateContentLt from "./gods/lt/tiruma-mate.mdx";
import TirumaMateContentLv from "./gods/lv/tiruma-mate.mdx";
import KapuMateContentEn from "./gods/en/kapu-mate.mdx";
import KapuMateContentLt from "./gods/lt/kapu-mate.mdx";
import KapuMateContentLv from "./gods/lv/kapu-mate.mdx";
import CelaMateContentEn from "./gods/en/cela-mate.mdx";
import CelaMateContentLt from "./gods/lt/cela-mate.mdx";
import CelaMateContentLv from "./gods/lv/cela-mate.mdx";

import {
  aitvarasMeta,
  auschautsMeta,
  austejaMeta,
  ausrineMeta,
  autrimpasMeta,
  bangputysMeta,
  daliaMeta,
  dimstipatisMeta,
  dievasMeta,
  gabijaMeta,
  giltineMeta,
  janisMeta,
  jumisMeta,
  kurkeMeta,
  laimaMeta,
  laumesMeta,
  maraMeta,
  medineMeta,
  menulisMeta,
  mezaMateMeta,
  neringaMeta,
  patollaMeta,
  patrimpAsMeta,
  perkunasMeta,
  pukisMeta,
  ragutisMeta,
  sauleMeta,
  sovijusMeta,
  teliavelIsMeta,
  usinsMeta,
  vakarineMeta,
  vaizgantasMeta,
  vejopatisMeta,
  velniasMeta,
  veluMateMeta,
  zaltysMeta,
  zemynaMeta,
  // Batch 4
  praamziusMeta,
  zvorunaMeta,
  zemepatisMetaData,
  gabjaujaMetaData,
  pilvytisMetaData,
  birzulisMeta,
  kirnisMeta,
  dievaDeliMeta,
  saulesMeitasMeta,
  jurasMateMeta,
  udensMateMeta,
  vejaMateMeta,
  okopirmusMeta,
  swayxtixMeta,
  bardoaitsMeta,
  kaukaiMeta,
  raganaMeta,
  sloguteMeta,
  vilkacisMeta,
  lietuvensMeta,
  egleMeta,
  lacplesisMeta,
  // Batch 5
  medziojnaMeta,
  ejagusteMeta,
  silinytisMeta,
  giraitisMeta,
  ugunsMateMetaData,
  majasMateMetaData,
  pirtsMateMetaData,
  lopuMateMetaData,
  puschkaitisMeta,
  curchoMeta,
  // Batch 6
  pliuktisMeta,
  kaupolisMeta,
  lygynaMeta,
  rugucysMeta,
  biruteMeta,
  pienaMateMetaData,
  vilkuMateMetaData,
  tirumaMateMetaData,
  kapuMateMetaData,
  celaMateMetaData,
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
  // Batch 3
  { meta: vejopatisMeta, Content: VejopatisContentEn, contentByLang: { en: VejopatisContentEn, lt: VejopatisContentLt, lv: VejopatisContentLv } },
  { meta: vaizgantasMeta, Content: VaizgantasContentEn, contentByLang: { en: VaizgantasContentEn, lt: VaizgantasContentLt, lv: VaizgantasContentLv } },
  { meta: ragutisMeta, Content: RagutisContentEn, contentByLang: { en: RagutisContentEn, lt: RagutisContentLt, lv: RagutisContentLv } },
  { meta: dimstipatisMeta, Content: DimstisContentEn, contentByLang: { en: DimstisContentEn, lt: DimstisContentLt, lv: DimstisContentLv } },
  { meta: janisMeta, Content: JanisContentEn, contentByLang: { en: JanisContentEn, lt: JanisContentLt, lv: JanisContentLv } },
  { meta: mezaMateMeta, Content: MezaMateContentEn, contentByLang: { en: MezaMateContentEn, lt: MezaMateContentLt, lv: MezaMateContentLv } },
  { meta: veluMateMeta, Content: VeluMateContentEn, contentByLang: { en: VeluMateContentEn, lt: VeluMateContentLt, lv: VeluMateContentLv } },
  { meta: auschautsMeta, Content: AuschautsContentEn, contentByLang: { en: AuschautsContentEn, lt: AuschautsContentLt, lv: AuschautsContentLv } },
  { meta: kurkeMeta, Content: KurkeContentEn, contentByLang: { en: KurkeContentEn, lt: KurkeContentLt, lv: KurkeContentLv } },
  { meta: aitvarasMeta, Content: AitvarasContentEn, contentByLang: { en: AitvarasContentEn, lt: AitvarasContentLt, lv: AitvarasContentLv } },
  { meta: laumesMeta, Content: LaumesContentEn, contentByLang: { en: LaumesContentEn, lt: LaumesContentLt, lv: LaumesContentLv } },
  { meta: zaltysMeta, Content: ZaltysContentEn, contentByLang: { en: ZaltysContentEn, lt: ZaltysContentLt, lv: ZaltysContentLv } },
  { meta: neringaMeta, Content: NeringaContentEn, contentByLang: { en: NeringaContentEn, lt: NeringaContentLt, lv: NeringaContentLv } },
  { meta: sovijusMeta, Content: SovijusContentEn, contentByLang: { en: SovijusContentEn, lt: SovijusContentLt, lv: SovijusContentLv } },
  // Batch 4
  { meta: praamziusMeta, Content: PraamziusContentEn, contentByLang: { en: PraamziusContentEn, lt: PraamziusContentLt, lv: PraamziusContentLv } },
  { meta: zvorunaMeta, Content: ZvorunaContentEn, contentByLang: { en: ZvorunaContentEn, lt: ZvorunaContentLt, lv: ZvorunaContentLv } },
  { meta: zemepatisMetaData, Content: ZemeipatisContentEn, contentByLang: { en: ZemeipatisContentEn, lt: ZemeipatisContentLt, lv: ZemeipatisContentLv } },
  { meta: gabjaujaMetaData, Content: GabjaujaContentEn, contentByLang: { en: GabjaujaContentEn, lt: GabjaujaContentLt, lv: GabjaujaContentLv } },
  { meta: pilvytisMetaData, Content: PilvytisContentEn, contentByLang: { en: PilvytisContentEn, lt: PilvytisContentLt, lv: PilvytisContentLv } },
  { meta: birzulisMeta, Content: BirzulisContentEn, contentByLang: { en: BirzulisContentEn, lt: BirzulisContentLt, lv: BirzulisContentLv } },
  { meta: kirnisMeta, Content: KirnisContentEn, contentByLang: { en: KirnisContentEn, lt: KirnisContentLt, lv: KirnisContentLv } },
  { meta: dievaDeliMeta, Content: DievaDeliContentEn, contentByLang: { en: DievaDeliContentEn, lt: DievaDeliContentLt, lv: DievaDeliContentLv } },
  { meta: saulesMeitasMeta, Content: SaulesMeitasContentEn, contentByLang: { en: SaulesMeitasContentEn, lt: SaulesMeitasContentLt, lv: SaulesMeitasContentLv } },
  { meta: jurasMateMeta, Content: JurasMateContentEn, contentByLang: { en: JurasMateContentEn, lt: JurasMateContentLt, lv: JurasMateContentLv } },
  { meta: udensMateMeta, Content: UdensMateContentEn, contentByLang: { en: UdensMateContentEn, lt: UdensMateContentLt, lv: UdensMateContentLv } },
  { meta: vejaMateMeta, Content: VejaMateContentEn, contentByLang: { en: VejaMateContentEn, lt: VejaMateContentLt, lv: VejaMateContentLv } },
  { meta: okopirmusMeta, Content: OkopirmusContentEn, contentByLang: { en: OkopirmusContentEn, lt: OkopirmusContentLt, lv: OkopirmusContentLv } },
  { meta: swayxtixMeta, Content: SwayxtixContentEn, contentByLang: { en: SwayxtixContentEn, lt: SwayxtixContentLt, lv: SwayxtixContentLv } },
  { meta: bardoaitsMeta, Content: BardoaitsContentEn, contentByLang: { en: BardoaitsContentEn, lt: BardoaitsContentLt, lv: BardoaitsContentLv } },
  { meta: kaukaiMeta, Content: KaukaiContentEn, contentByLang: { en: KaukaiContentEn, lt: KaukaiContentLt, lv: KaukaiContentLv } },
  { meta: raganaMeta, Content: RaganaContentEn, contentByLang: { en: RaganaContentEn, lt: RaganaContentLt, lv: RaganaContentLv } },
  { meta: sloguteMeta, Content: SloguteContentEn, contentByLang: { en: SloguteContentEn, lt: SloguteContentLt, lv: SloguteContentLv } },
  { meta: vilkacisMeta, Content: VilkacisContentEn, contentByLang: { en: VilkacisContentEn, lt: VilkacisContentLt, lv: VilkacisContentLv } },
  { meta: lietuvensMeta, Content: LietuvensContentEn, contentByLang: { en: LietuvensContentEn, lt: LietuvensContentLt, lv: LietuvensContentLv } },
  { meta: egleMeta, Content: EgleContentEn, contentByLang: { en: EgleContentEn, lt: EgleContentLt, lv: EgleContentLv } },
  { meta: lacplesisMeta, Content: LacplesisContentEn, contentByLang: { en: LacplesisContentEn, lt: LacplesisContentLt, lv: LacplesisContentLv } },
  // Batch 5
  { meta: medziojnaMeta, Content: MedziojnaContentEn, contentByLang: { en: MedziojnaContentEn, lt: MedziojnaContentLt, lv: MedziojnaContentLv } },
  { meta: ejagusteMeta, Content: EjagusteContentEn, contentByLang: { en: EjagusteContentEn, lt: EjagusteContentLt, lv: EjagusteContentLv } },
  { meta: silinytisMeta, Content: SilinytisContentEn, contentByLang: { en: SilinytisContentEn, lt: SilinytisContentLt, lv: SilinytisContentLv } },
  { meta: giraitisMeta, Content: GiraitisContentEn, contentByLang: { en: GiraitisContentEn, lt: GiraitisContentLt, lv: GiraitisContentLv } },
  { meta: ugunsMateMetaData, Content: UgunsMateContentEn, contentByLang: { en: UgunsMateContentEn, lt: UgunsMateContentLt, lv: UgunsMateContentLv } },
  { meta: majasMateMetaData, Content: MajasMateContentEn, contentByLang: { en: MajasMateContentEn, lt: MajasMateContentLt, lv: MajasMateContentLv } },
  { meta: pirtsMateMetaData, Content: PirtsMateContentEn, contentByLang: { en: PirtsMateContentEn, lt: PirtsMateContentLt, lv: PirtsMateContentLv } },
  { meta: lopuMateMetaData, Content: LopuMateContentEn, contentByLang: { en: LopuMateContentEn, lt: LopuMateContentLt, lv: LopuMateContentLv } },
  { meta: puschkaitisMeta, Content: PuschkaitisContentEn, contentByLang: { en: PuschkaitisContentEn, lt: PuschkaitisContentLt, lv: PuschkaitisContentLv } },
  { meta: curchoMeta, Content: CurchoContentEn, contentByLang: { en: CurchoContentEn, lt: CurchoContentLt, lv: CurchoContentLv } },
  // Batch 6
  { meta: pliuktisMeta, Content: PliuktisContentEn, contentByLang: { en: PliuktisContentEn, lt: PliuktisContentLt, lv: PliuktisContentLv } },
  { meta: kaupolisMeta, Content: KaupolisContentEn, contentByLang: { en: KaupolisContentEn, lt: KaupolisContentLt, lv: KaupolisContentLv } },
  { meta: lygynaMeta, Content: LygynaContentEn, contentByLang: { en: LygynaContentEn, lt: LygynaContentLt, lv: LygynaContentLv } },
  { meta: rugucysMeta, Content: RugucysContentEn, contentByLang: { en: RugucysContentEn, lt: RugucysContentLt, lv: RugucysContentLv } },
  { meta: biruteMeta, Content: BiruteContentEn, contentByLang: { en: BiruteContentEn, lt: BiruteContentLt, lv: BiruteContentLv } },
  { meta: pienaMateMetaData, Content: PienaMateContentEn, contentByLang: { en: PienaMateContentEn, lt: PienaMateContentLt, lv: PienaMateContentLv } },
  { meta: vilkuMateMetaData, Content: VilkuMateContentEn, contentByLang: { en: VilkuMateContentEn, lt: VilkuMateContentLt, lv: VilkuMateContentLv } },
  { meta: tirumaMateMetaData, Content: TirumaMateContentEn, contentByLang: { en: TirumaMateContentEn, lt: TirumaMateContentLt, lv: TirumaMateContentLv } },
  { meta: kapuMateMetaData, Content: KapuMateContentEn, contentByLang: { en: KapuMateContentEn, lt: KapuMateContentLt, lv: KapuMateContentLv } },
  { meta: celaMateMetaData, Content: CelaMateContentEn, contentByLang: { en: CelaMateContentEn, lt: CelaMateContentLt, lv: CelaMateContentLv } },
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
