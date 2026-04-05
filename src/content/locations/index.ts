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
  anyksciaiForestMeta,
  salantaiBurialMeta,
  rundaleFieldsMeta,
  turaidaSpringsMeta,
  palangaAmberMeta,
  sventojiOaksMeta,
  sventaragisValleyMeta,
  rambynasHillMeta,
  biruteHillMeta,
  lopaiciaiComplexMeta,
  hillOfCrossesMeta,
  verkiaiGroveMeta,
  kaunasConfluenceMeta,
  zaltvyksleSpringMeta,
  witchesHillMeta,
  satrijaHillMeta,
  medvegalisHillMeta,
  puntukasBoulderMeta,
  dubingiaiSanctuaryMeta,
  zilaiskalnsHillMeta,
  staburagsCliffMeta,
  daugavaBendsMeta,
  ergluKlintisMeta,
  mezotneMoundMeta,
  pokainiForestMeta,
  selpilsMoundMeta,
  terveteMoundMeta,
  lielvardeParkMeta,
  kemeriSanctuaryMeta,
  romuvaSanctuaryMeta,
  balgaFortressMeta,
  ragnitMoundMeta,
  swentomestGroveMeta,
  kaupBurialMeta,
  trusoEmporiumMeta,
  twangsteHillMeta,
  pomeranianStonesMeta,
  labiauFortressMeta,
  tilsitHillMeta,
  turaidaHillMeta,
  talsiHillsMeta,
  kuldigaSpringMeta,
  rezekneHillMeta,
  dobeleMoundMeta,
  araisiLakeMeta,
  girgzduteHillMeta,
  sprudeHillMeta,
  birstonasSpringsMeta,
  durbeSiteMeta,
  alkaHillsMeta,
  belmontoStoneMeta,
  sventojiShrineMeta,
  seimyniskeliaiFortMeta,
  panemuneMoundMeta,
  zagareStonesMeta,
  pagramantisOakMeta,
  anyksciaiSilelisMeta,
  joniskisGroveMeta,
  tytuvenaiSpringMeta,
  imbareFortMeta,
  limbazuEzersMeta,
  sabileHillMeta,
  aizkraukleCenterMeta,
  beverinaCastleMeta,
  cesisHillMeta,
  krustpilsMoundMeta,
  alytusConfluenceMeta,
  kaunoMariosMeta,
  romuvaGroveMeta,
  rundaleSurroundingsMeta,
  grobinaSiteMeta,
  rumsiskesMuseumMeta,
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
import AnyksciaiForestContentEn from "./en/anyksciai-forest.mdx";
import SalantaiBurialContentEn from "./en/salantai-burial.mdx";
import RundaleFieldsContentEn from "./en/rundale-fields.mdx";
import TuraidaSpringsContentEn from "./en/turaida-springs.mdx";
import PalangaAmberContentEn from "./en/palanga-amber.mdx";
import SventojiOaksContentEn from "./en/sventoji-oaks.mdx";
import SventaragisValleyContentEn from "./en/sventaragis-valley.mdx";
import RambynasHillContentEn from "./en/rambynas-hill.mdx";
import BiruteHillContentEn from "./en/birute-hill.mdx";
import LopaiciaiComplexContentEn from "./en/lopaiciai-complex.mdx";
import HillOfCrossesContentEn from "./en/hill-of-crosses.mdx";
import VerkiaiGroveContentEn from "./en/verkiai-grove.mdx";
import KaunasConfluenceContentEn from "./en/kaunas-confluence.mdx";
import ZaltvyksleSpringContentEn from "./en/zaltvyksle-spring.mdx";
import WitchesHillContentEn from "./en/witches-hill.mdx";
import SatrijaHillContentEn from "./en/satrija-hill.mdx";
import MedvegalisHillContentEn from "./en/medvegalis-hill.mdx";
import PuntukasBoulderContentEn from "./en/puntukas-boulder.mdx";
import DubingiaiSanctuaryContentEn from "./en/dubingiai-sanctuary.mdx";
import ZilaiskalnsHillContentEn from "./en/zilaiskalns-hill.mdx";
import StaburagsCliffContentEn from "./en/staburags-cliff.mdx";
import DaugavaBendsContentEn from "./en/daugava-bends.mdx";
import ErgluKlintisContentEn from "./en/erglu-klintis.mdx";
import MezotneMoundContentEn from "./en/mezotne-mound.mdx";
import PokainiForestContentEn from "./en/pokaini-forest.mdx";
import SelpilsMoundContentEn from "./en/selpils-mound.mdx";
import TerveteMoundContentEn from "./en/tervete-mound.mdx";
import LielvardeParkContentEn from "./en/lielvarde-park.mdx";
import KemeriSanctuaryContentEn from "./en/kemeri-sanctuary.mdx";
import RomuvaSanctuaryContentEn from "./en/romuva-sanctuary.mdx";
import BalgaFortressContentEn from "./en/balga-fortress.mdx";
import RagnitMoundContentEn from "./en/ragnit-mound.mdx";
import SwentomestGroveContentEn from "./en/swentomest-grove.mdx";
import KaupBurialContentEn from "./en/kaup-burial.mdx";
import TrusoEmporiumContentEn from "./en/truso-emporium.mdx";
import TwangsteHillContentEn from "./en/twangste-hill.mdx";
import PomeranianStonesContentEn from "./en/pomeranian-stones.mdx";
import LabiauFortressContentEn from "./en/labiau-fortress.mdx";
import TilsitHillContentEn from "./en/tilsit-hill.mdx";
import TuraidaHillContentEn from "./en/turaida-hill.mdx";
import TalsiHillsContentEn from "./en/talsi-hills.mdx";
import KuldigaSpringContentEn from "./en/kuldiga-spring.mdx";
import RezekneHillContentEn from "./en/rezekne-hill.mdx";
import DobeleMoundContentEn from "./en/dobele-mound.mdx";
import AraisiLakeContentEn from "./en/araisi-lake.mdx";
import GirgzduteHillContentEn from "./en/girgzdute-hill.mdx";
import SprudeHillContentEn from "./en/sprude-hill.mdx";
import BirstonasSpringsContentEn from "./en/birstonas-springs.mdx";
import DurbeSiteContentEn from "./en/durbe-site.mdx";
import AlkaHillsContentEn from "./en/alka-hills.mdx";
import BelmontoStoneContentEn from "./en/belmonto-stone.mdx";
import SventojiShrineContentEn from "./en/sventoji-shrine.mdx";
import SeimyniskeliaiFortContentEn from "./en/seimyniskeliai-fort.mdx";
import PanemuneMoundContentEn from "./en/panemune-mound.mdx";
import ZagareStonesContentEn from "./en/zagare-stones.mdx";
import PagramantisOakContentEn from "./en/pagramantis-oak.mdx";
import AnyksciaiSilelisContentEn from "./en/anyksciai-silelis.mdx";
import JoniskisGroveContentEn from "./en/joniskis-grove.mdx";
import TytuvenaiSpringContentEn from "./en/tytuvenai-spring.mdx";
import ImbareFortContentEn from "./en/imbare-fort.mdx";
import LimbazuEzersContentEn from "./en/limbazu-ezers.mdx";
import SabileHillContentEn from "./en/sabile-hill.mdx";
import AizkraukleCenterContentEn from "./en/aizkraukle-center.mdx";
import BeverinaCastleContentEn from "./en/beverina-castle.mdx";
import CesisHillContentEn from "./en/cesis-hill.mdx";
import KrustpilsMoundContentEn from "./en/krustpils-mound.mdx";
import AlytusConfluenceContentEn from "./en/alytus-confluence.mdx";
import KaunoMariosContentEn from "./en/kauno-marios.mdx";
import RomuvaGroveContentEn from "./en/romuva-grove.mdx";
import RundaleSurroundingsContentEn from "./en/rundale-surroundings.mdx";
import GrobinaSiteContentEn from "./en/grobina-site.mdx";
import RumsiskesMuseumContentEn from "./en/rumsiskes-museum.mdx";

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
  { meta: anyksciaiForestMeta, Content: AnyksciaiForestContentEn, contentByLang: { en: AnyksciaiForestContentEn, lt: AnyksciaiForestContentEn, lv: AnyksciaiForestContentEn } },
  { meta: salantaiBurialMeta, Content: SalantaiBurialContentEn, contentByLang: { en: SalantaiBurialContentEn, lt: SalantaiBurialContentEn, lv: SalantaiBurialContentEn } },
  { meta: rundaleFieldsMeta, Content: RundaleFieldsContentEn, contentByLang: { en: RundaleFieldsContentEn, lt: RundaleFieldsContentEn, lv: RundaleFieldsContentEn } },
  { meta: turaidaSpringsMeta, Content: TuraidaSpringsContentEn, contentByLang: { en: TuraidaSpringsContentEn, lt: TuraidaSpringsContentEn, lv: TuraidaSpringsContentEn } },
  { meta: palangaAmberMeta, Content: PalangaAmberContentEn, contentByLang: { en: PalangaAmberContentEn, lt: PalangaAmberContentEn, lv: PalangaAmberContentEn } },
  { meta: sventojiOaksMeta, Content: SventojiOaksContentEn, contentByLang: { en: SventojiOaksContentEn, lt: SventojiOaksContentEn, lv: SventojiOaksContentEn } },
  { meta: sventaragisValleyMeta, Content: SventaragisValleyContentEn, contentByLang: { en: SventaragisValleyContentEn, lt: SventaragisValleyContentEn, lv: SventaragisValleyContentEn } },
  { meta: rambynasHillMeta, Content: RambynasHillContentEn, contentByLang: { en: RambynasHillContentEn, lt: RambynasHillContentEn, lv: RambynasHillContentEn } },
  { meta: biruteHillMeta, Content: BiruteHillContentEn, contentByLang: { en: BiruteHillContentEn, lt: BiruteHillContentEn, lv: BiruteHillContentEn } },
  { meta: lopaiciaiComplexMeta, Content: LopaiciaiComplexContentEn, contentByLang: { en: LopaiciaiComplexContentEn, lt: LopaiciaiComplexContentEn, lv: LopaiciaiComplexContentEn } },
  { meta: hillOfCrossesMeta, Content: HillOfCrossesContentEn, contentByLang: { en: HillOfCrossesContentEn, lt: HillOfCrossesContentEn, lv: HillOfCrossesContentEn } },
  { meta: verkiaiGroveMeta, Content: VerkiaiGroveContentEn, contentByLang: { en: VerkiaiGroveContentEn, lt: VerkiaiGroveContentEn, lv: VerkiaiGroveContentEn } },
  { meta: kaunasConfluenceMeta, Content: KaunasConfluenceContentEn, contentByLang: { en: KaunasConfluenceContentEn, lt: KaunasConfluenceContentEn, lv: KaunasConfluenceContentEn } },
  { meta: zaltvyksleSpringMeta, Content: ZaltvyksleSpringContentEn, contentByLang: { en: ZaltvyksleSpringContentEn, lt: ZaltvyksleSpringContentEn, lv: ZaltvyksleSpringContentEn } },
  { meta: witchesHillMeta, Content: WitchesHillContentEn, contentByLang: { en: WitchesHillContentEn, lt: WitchesHillContentEn, lv: WitchesHillContentEn } },
  { meta: satrijaHillMeta, Content: SatrijaHillContentEn, contentByLang: { en: SatrijaHillContentEn, lt: SatrijaHillContentEn, lv: SatrijaHillContentEn } },
  { meta: medvegalisHillMeta, Content: MedvegalisHillContentEn, contentByLang: { en: MedvegalisHillContentEn, lt: MedvegalisHillContentEn, lv: MedvegalisHillContentEn } },
  { meta: puntukasBoulderMeta, Content: PuntukasBoulderContentEn, contentByLang: { en: PuntukasBoulderContentEn, lt: PuntukasBoulderContentEn, lv: PuntukasBoulderContentEn } },
  { meta: dubingiaiSanctuaryMeta, Content: DubingiaiSanctuaryContentEn, contentByLang: { en: DubingiaiSanctuaryContentEn, lt: DubingiaiSanctuaryContentEn, lv: DubingiaiSanctuaryContentEn } },
  { meta: zilaiskalnsHillMeta, Content: ZilaiskalnsHillContentEn, contentByLang: { en: ZilaiskalnsHillContentEn, lt: ZilaiskalnsHillContentEn, lv: ZilaiskalnsHillContentEn } },
  { meta: staburagsCliffMeta, Content: StaburagsCliffContentEn, contentByLang: { en: StaburagsCliffContentEn, lt: StaburagsCliffContentEn, lv: StaburagsCliffContentEn } },
  { meta: daugavaBendsMeta, Content: DaugavaBendsContentEn, contentByLang: { en: DaugavaBendsContentEn, lt: DaugavaBendsContentEn, lv: DaugavaBendsContentEn } },
  { meta: ergluKlintisMeta, Content: ErgluKlintisContentEn, contentByLang: { en: ErgluKlintisContentEn, lt: ErgluKlintisContentEn, lv: ErgluKlintisContentEn } },
  { meta: mezotneMoundMeta, Content: MezotneMoundContentEn, contentByLang: { en: MezotneMoundContentEn, lt: MezotneMoundContentEn, lv: MezotneMoundContentEn } },
  { meta: pokainiForestMeta, Content: PokainiForestContentEn, contentByLang: { en: PokainiForestContentEn, lt: PokainiForestContentEn, lv: PokainiForestContentEn } },
  { meta: selpilsMoundMeta, Content: SelpilsMoundContentEn, contentByLang: { en: SelpilsMoundContentEn, lt: SelpilsMoundContentEn, lv: SelpilsMoundContentEn } },
  { meta: terveteMoundMeta, Content: TerveteMoundContentEn, contentByLang: { en: TerveteMoundContentEn, lt: TerveteMoundContentEn, lv: TerveteMoundContentEn } },
  { meta: lielvardeParkMeta, Content: LielvardeParkContentEn, contentByLang: { en: LielvardeParkContentEn, lt: LielvardeParkContentEn, lv: LielvardeParkContentEn } },
  { meta: kemeriSanctuaryMeta, Content: KemeriSanctuaryContentEn, contentByLang: { en: KemeriSanctuaryContentEn, lt: KemeriSanctuaryContentEn, lv: KemeriSanctuaryContentEn } },
  { meta: romuvaSanctuaryMeta, Content: RomuvaSanctuaryContentEn, contentByLang: { en: RomuvaSanctuaryContentEn, lt: RomuvaSanctuaryContentEn, lv: RomuvaSanctuaryContentEn } },
  { meta: balgaFortressMeta, Content: BalgaFortressContentEn, contentByLang: { en: BalgaFortressContentEn, lt: BalgaFortressContentEn, lv: BalgaFortressContentEn } },
  { meta: ragnitMoundMeta, Content: RagnitMoundContentEn, contentByLang: { en: RagnitMoundContentEn, lt: RagnitMoundContentEn, lv: RagnitMoundContentEn } },
  { meta: swentomestGroveMeta, Content: SwentomestGroveContentEn, contentByLang: { en: SwentomestGroveContentEn, lt: SwentomestGroveContentEn, lv: SwentomestGroveContentEn } },
  { meta: kaupBurialMeta, Content: KaupBurialContentEn, contentByLang: { en: KaupBurialContentEn, lt: KaupBurialContentEn, lv: KaupBurialContentEn } },
  { meta: trusoEmporiumMeta, Content: TrusoEmporiumContentEn, contentByLang: { en: TrusoEmporiumContentEn, lt: TrusoEmporiumContentEn, lv: TrusoEmporiumContentEn } },
  { meta: twangsteHillMeta, Content: TwangsteHillContentEn, contentByLang: { en: TwangsteHillContentEn, lt: TwangsteHillContentEn, lv: TwangsteHillContentEn } },
  { meta: pomeranianStonesMeta, Content: PomeranianStonesContentEn, contentByLang: { en: PomeranianStonesContentEn, lt: PomeranianStonesContentEn, lv: PomeranianStonesContentEn } },
  { meta: labiauFortressMeta, Content: LabiauFortressContentEn, contentByLang: { en: LabiauFortressContentEn, lt: LabiauFortressContentEn, lv: LabiauFortressContentEn } },
  { meta: tilsitHillMeta, Content: TilsitHillContentEn, contentByLang: { en: TilsitHillContentEn, lt: TilsitHillContentEn, lv: TilsitHillContentEn } },
  { meta: turaidaHillMeta, Content: TuraidaHillContentEn, contentByLang: { en: TuraidaHillContentEn, lt: TuraidaHillContentEn, lv: TuraidaHillContentEn } },
  { meta: talsiHillsMeta, Content: TalsiHillsContentEn, contentByLang: { en: TalsiHillsContentEn, lt: TalsiHillsContentEn, lv: TalsiHillsContentEn } },
  { meta: kuldigaSpringMeta, Content: KuldigaSpringContentEn, contentByLang: { en: KuldigaSpringContentEn, lt: KuldigaSpringContentEn, lv: KuldigaSpringContentEn } },
  { meta: rezekneHillMeta, Content: RezekneHillContentEn, contentByLang: { en: RezekneHillContentEn, lt: RezekneHillContentEn, lv: RezekneHillContentEn } },
  { meta: dobeleMoundMeta, Content: DobeleMoundContentEn, contentByLang: { en: DobeleMoundContentEn, lt: DobeleMoundContentEn, lv: DobeleMoundContentEn } },
  { meta: araisiLakeMeta, Content: AraisiLakeContentEn, contentByLang: { en: AraisiLakeContentEn, lt: AraisiLakeContentEn, lv: AraisiLakeContentEn } },
  { meta: girgzduteHillMeta, Content: GirgzduteHillContentEn, contentByLang: { en: GirgzduteHillContentEn, lt: GirgzduteHillContentEn, lv: GirgzduteHillContentEn } },
  { meta: sprudeHillMeta, Content: SprudeHillContentEn, contentByLang: { en: SprudeHillContentEn, lt: SprudeHillContentEn, lv: SprudeHillContentEn } },
  { meta: birstonasSpringsMeta, Content: BirstonasSpringsContentEn, contentByLang: { en: BirstonasSpringsContentEn, lt: BirstonasSpringsContentEn, lv: BirstonasSpringsContentEn } },
  { meta: durbeSiteMeta, Content: DurbeSiteContentEn, contentByLang: { en: DurbeSiteContentEn, lt: DurbeSiteContentEn, lv: DurbeSiteContentEn } },
  { meta: alkaHillsMeta, Content: AlkaHillsContentEn, contentByLang: { en: AlkaHillsContentEn, lt: AlkaHillsContentEn, lv: AlkaHillsContentEn } },
  { meta: belmontoStoneMeta, Content: BelmontoStoneContentEn, contentByLang: { en: BelmontoStoneContentEn, lt: BelmontoStoneContentEn, lv: BelmontoStoneContentEn } },
  { meta: sventojiShrineMeta, Content: SventojiShrineContentEn, contentByLang: { en: SventojiShrineContentEn, lt: SventojiShrineContentEn, lv: SventojiShrineContentEn } },
  { meta: seimyniskeliaiFortMeta, Content: SeimyniskeliaiFortContentEn, contentByLang: { en: SeimyniskeliaiFortContentEn, lt: SeimyniskeliaiFortContentEn, lv: SeimyniskeliaiFortContentEn } },
  { meta: panemuneMoundMeta, Content: PanemuneMoundContentEn, contentByLang: { en: PanemuneMoundContentEn, lt: PanemuneMoundContentEn, lv: PanemuneMoundContentEn } },
  { meta: zagareStonesMeta, Content: ZagareStonesContentEn, contentByLang: { en: ZagareStonesContentEn, lt: ZagareStonesContentEn, lv: ZagareStonesContentEn } },
  { meta: pagramantisOakMeta, Content: PagramantisOakContentEn, contentByLang: { en: PagramantisOakContentEn, lt: PagramantisOakContentEn, lv: PagramantisOakContentEn } },
  { meta: anyksciaiSilelisMeta, Content: AnyksciaiSilelisContentEn, contentByLang: { en: AnyksciaiSilelisContentEn, lt: AnyksciaiSilelisContentEn, lv: AnyksciaiSilelisContentEn } },
  { meta: joniskisGroveMeta, Content: JoniskisGroveContentEn, contentByLang: { en: JoniskisGroveContentEn, lt: JoniskisGroveContentEn, lv: JoniskisGroveContentEn } },
  { meta: tytuvenaiSpringMeta, Content: TytuvenaiSpringContentEn, contentByLang: { en: TytuvenaiSpringContentEn, lt: TytuvenaiSpringContentEn, lv: TytuvenaiSpringContentEn } },
  { meta: imbareFortMeta, Content: ImbareFortContentEn, contentByLang: { en: ImbareFortContentEn, lt: ImbareFortContentEn, lv: ImbareFortContentEn } },
  { meta: limbazuEzersMeta, Content: LimbazuEzersContentEn, contentByLang: { en: LimbazuEzersContentEn, lt: LimbazuEzersContentEn, lv: LimbazuEzersContentEn } },
  { meta: sabileHillMeta, Content: SabileHillContentEn, contentByLang: { en: SabileHillContentEn, lt: SabileHillContentEn, lv: SabileHillContentEn } },
  { meta: aizkraukleCenterMeta, Content: AizkraukleCenterContentEn, contentByLang: { en: AizkraukleCenterContentEn, lt: AizkraukleCenterContentEn, lv: AizkraukleCenterContentEn } },
  { meta: beverinaCastleMeta, Content: BeverinaCastleContentEn, contentByLang: { en: BeverinaCastleContentEn, lt: BeverinaCastleContentEn, lv: BeverinaCastleContentEn } },
  { meta: cesisHillMeta, Content: CesisHillContentEn, contentByLang: { en: CesisHillContentEn, lt: CesisHillContentEn, lv: CesisHillContentEn } },
  { meta: krustpilsMoundMeta, Content: KrustpilsMoundContentEn, contentByLang: { en: KrustpilsMoundContentEn, lt: KrustpilsMoundContentEn, lv: KrustpilsMoundContentEn } },
  { meta: alytusConfluenceMeta, Content: AlytusConfluenceContentEn, contentByLang: { en: AlytusConfluenceContentEn, lt: AlytusConfluenceContentEn, lv: AlytusConfluenceContentEn } },
  { meta: kaunoMariosMeta, Content: KaunoMariosContentEn, contentByLang: { en: KaunoMariosContentEn, lt: KaunoMariosContentEn, lv: KaunoMariosContentEn } },
  { meta: romuvaGroveMeta, Content: RomuvaGroveContentEn, contentByLang: { en: RomuvaGroveContentEn, lt: RomuvaGroveContentEn, lv: RomuvaGroveContentEn } },
  { meta: rundaleSurroundingsMeta, Content: RundaleSurroundingsContentEn, contentByLang: { en: RundaleSurroundingsContentEn, lt: RundaleSurroundingsContentEn, lv: RundaleSurroundingsContentEn } },
  { meta: grobinaSiteMeta, Content: GrobinaSiteContentEn, contentByLang: { en: GrobinaSiteContentEn, lt: GrobinaSiteContentEn, lv: GrobinaSiteContentEn } },
  { meta: rumsiskesMuseumMeta, Content: RumsiskesMuseumContentEn, contentByLang: { en: RumsiskesMuseumContentEn, lt: RumsiskesMuseumContentEn, lv: RumsiskesMuseumContentEn } },
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
