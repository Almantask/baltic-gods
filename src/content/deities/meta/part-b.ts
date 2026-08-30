import type { DeityMeta } from "@/types/content";

export const vejopatisMeta: DeityMeta = {
  slug: "vejopatis",
  name: "Vėjopatis",
  domain: "God",
  epithet: {
    en: "Western Lithuanian lord of the wind",
    lt: "Vakarų lietuvių vėjo viešpats",
    lv: "Rietumlietuviešu vēja kungs",
  },
  summary: {
    en: "Vėjopatis is the western Lithuanian wind god first recorded by Matthäus Praetorius (~1690) from a two-faced winged cult figure at Karklė on the Curonian Lagoon.",
    lt: "Vėjopatis — vakarų lietuvių vėjo dievas, pirmą kartą Matas Pretorijus (~1690) aprašė iš dviveidės sparnuotos stovylos Karklėje prie Kuršių marių.",
    lv: "Vējopatis ir rietumlietuviešu vēja dievs, ko Matejs Pretorijs (~1690) pirmoreiz fiksēja pēc divsejainas spārnotas kulta figūras Karklē pie Kuršu jomas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(100, 149, 200, 0.24)",
  accent: "#7ab0d4",
  altNames: {
    en: "Wejopatis, Wejpons, Wejdiews, Vejo Dievas",
    lt: "Wejopatis, Wejpons, Wejdiews, Vėjo dievas",
    lv: "Wejopatis, Wejpons, Wejdiews",
  },
  keywords: ["wind", "fishermen", "Curonian Lagoon", "Praetorius"],
  gallery: [
    {
      title: { en: "Curonian Lagoon shore at Karklė", lt: "Kuršių marių krantas ties Karkle", lv: "Kuršu jomas krasts pie Karkles" },
      medium: { en: "natural", lt: "gamtinis", lv: "dabisks" },
      note: { en: "Praetorius saw the bark Vėjopatis figure fastened to a fisherman’s mast at Karklė.", lt: "Pretorijus Karklėje matė žievių Vėjopačio stovylą, pritvirtintą prie žvejo stiebo.", lv: "Pretorijs Karklē redzēja mizas Vējopatis figūru, piestiprinātu pie zvejnieka stieņa." },
    }
  ],
  locations: [
    {
      id: "karkle-lagoon",
      name: "Karklė / Curonian Lagoon",
      coordinates: [55.82, 21.07],
      region: "Lithuania",
      description: "Lagoon fishing settlement where Praetorius recorded a bark two-faced winged cult figure of Vėjopatis on a mast.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "sky",
      deity: "vejopatis",
      significance: "Primary find-spot of the Praetorius cult image; storm-time fishermen’s wind worship.",
    }
  ],
  materialLegacy: ["Bark mast cult figures", "Weather vanes (vėjukas / vėjones)"],
  symbols: [
    { label: "Element", detail: "Storm wind over lagoon waters" },
    { label: "Cult image", detail: "Two faces, wings, fish, barrel, rooster on head" }
  ],
  regionDetails: {
    en: "Lithuania Minor / Curonian Lagoon",
    lt: "Mažoji Lietuva / Kuršių marios",
    lv: "Lietuvas Mazā / Kuršu joma",
  },
  tribe: {
    en: "Western Lithuanians / Lietuvininkai",
    lt: "Vakarų lietuviai / lietuvininkai",
    lv: "Rietumlietuvieši / lietuvinieki",
  },
  period: {
    en: "Late 17th Century (Praetorius c. 1690)",
    lt: "XVII a. pabaiga (Pretorijus ~1690 m.)",
    lv: "17. gs. beigas (Pretorijs ~1690)",
  },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (ms. ~1690)",
    "Visuotinė lietuvių enciklopedija: Vėjopatis (https://www.vle.lt/straipsnis/vejopatis/)",
    "Mažosios Lietuvos enciklopedija: Vėjopatis (https://www.mle.lt/straipsniai/vejopatis)",
    "Dainius Razauskas: Vėjūkas (LLTI, 2004)",
    "Rimantas Balsys: Prūsų ir lietuvių vandens dievai bei dvasios (2005/06)"
  ],
};

export const vaizgantasMeta: DeityMeta = {
  slug: "vaizgantas",
  name: "Vaižgantas",
  domain: "God",
  epithet: {
    en: "Guardian of flax and hemp",
    lt: "Linų ir kanapių globėjas",
    lv: "Linu un kaņepju aizgādnis",
  },
  summary: {
    en: "Vaižgantas is the Lithuanian god of flax and hemp, honoured by Samogitian maidens on the third day after Ilgės with ale, cakes, and a one-legged standing rite.",
    lt: "Vaižgantas – lietuvių linų ir kanapių dievas, garbintas žemaičių merginų trečią dieną po Ilgių alumi, paplotėliais ir stovėjimu ant vienos kojos.",
    lv: "Vaižgants ir lietuviešu linu un kaņepju dievs, ko žemaišu meitenes godināja trešajā dienā pēc Ilģiem ar alu, plāceņiem un stāvēšanu uz vienas kājas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(190, 200, 140, 0.26)",
  accent: "#b8c87a",
  altNames: {
    en: "Waizganthos, Vaisgamta, Vaisgamtis",
    lt: "Waizganthos, Vaisgamta, Vaisgamtis",
    lv: "Vaižgants, Waizganthos, Vaisgamta",
  },
  keywords: ["flax", "hemp", "Ilgės", "fibres"],
  gallery: [
    {
      title: { en: "Sikės cakes and ale jug", lt: "Sikės ir alaus ąsotis", lv: "Sikės plāceņi un ala krūze" },
      medium: { en: "ritual offering props", lt: "apeiginiai aukojimo atributai", lv: "rituāla ziedojuma rekvizīti" },
      note: {
        en: "Łasicki: tallest maiden stands on one foot after Ilgės, offering sikės cakes and ale for tall flax.",
        lt: "Łasickis: aukščiausia mergina po Ilgių stovi ant vienos kojos, aukoja sikės ir alų už aukštus linus.",
        lv: "Łasickis: garākā meita pēc Ilģiem stāv uz vienas kājas, ziedo sikės un alu par gariem liniem.",
      },
    }
  ],
  locations: [
    {
      id: "samogitia-ilges-flax-rite",
      name: "Samogitian post-Ilgės flax rite",
      coordinates: [55.7, 22.0],
      region: "Lithuania",
      description: "Household rite among Samogitian maidens on the third day after Ilgės, with ale libation and sikės cakes for flax and hemp.",
      siteType: "Household ritual sites",
      aura: "green",
      deity: "vaizgantas",
      significance: "Primary written setting of the Waizganthos cult in Łasicki’s De diis Samagitarum.",
    }
  ],
  materialLegacy: ["Post-Ilgės one-legged rite", "Sikės cake offerings", "Ale libations for flax"],
  symbols: [
    { label: "Element", detail: "Growing flax stalk" },
    { label: "Offerings", detail: "Sikės cakes, ale; cock and lamb (Praetorius)" }
  ],
  regionDetails: {
    en: "Samogitia / Lithuania",
    lt: "Žemaitija / Lietuva",
    lv: "Žemaitija / Lietuva",
  },
  tribe: {
    en: "Samogitians",
    lt: "Žemaičiai",
    lv: "Žemaiši",
  },
  period: {
    en: "16th Century (Łasicki ~1582; printed 1615)",
    lt: "XVI a. (Łasickis ~1582; spausdinta 1615)",
    lv: "16. gs. (Łasickis ~1582; iespiests 1615)",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum (c. 1582; printed 1615)",
    "Visuotinė lietuvių enciklopedija: Vaižgantas (https://www.vle.lt/straipsnis/vaizgantas/)",
    "Matthäus Praetorius: Deliciae Prussicae (fertility offerings)",
    "Mitoloģijas enciklopēdija, vol. 2 (Rīga, 1994)"
  ],
};

export const ragutisMeta: DeityMeta = {
  slug: "ragutis",
  name: "Ragutis",
  domain: "God",
  epithet: {
    en: "Household god of fermentation, beer, and sourdough",
    lt: "Namų rūgimo, alaus ir raugo dievas",
    lv: "Mājas rūgšanas, alus un ierauga dievs",
  },
  summary: {
    en: "Ragutis (popular form of the Rūgutis / Raugupatis / Raugų Žemėpatis complex) governs household fermentation: beer, mead, and rising dough.",
    lt: "Ragutis (populiarioji Rūgučio / Raugupatio / Raugų Žemėpačio komplekso forma) globoja namų rūgimą: alų, midų ir kylančią tešlą.",
    lv: "Ragutis (populārā Rūgutis / Raugupatis / Raugų Žemėpatis kompleksa forma) pārrauga mājas rūgšanu: alu, medu un ceļošos mīklas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(180, 130, 60, 0.28)",
  accent: "#c49a3a",
  altNames: {
    en: "Ragutis, Rūgutis, Raugupatis, Raugų Žemėpatis, Ruguczis",
    lt: "Ragutis, Rūgutis, Raugupatis, Raugų Žemėpatis, Ruguczis",
    lv: "Ragutis, Rūgutis, Raugupatis, Rugučis, Raugų Žemėpatis",
  },
  keywords: ["beer", "brewing", "mead", "fermentation", "sourdough", "household"],
  gallery: [],
  locations: [],
  materialLegacy: [],
  symbols: [
    { label: "Element", detail: "Fermentation and sourdough starter (raugas)" },
    { label: "Offerings", detail: "First draught of ale or mead; speckled young hens" }
  ],
  regionDetails: {
    en: "Samogitia / Lithuania",
    lt: "Žemaitija / Lietuva",
    lv: "Žemaitija / Lietuva",
  },
  tribe: {
    en: "Samogitians & Lithuanians",
    lt: "Žemaičiai ir Lietuviai",
    lv: "Žemaiši un Lietuvieši",
  },
  period: {
    en: "16th–17th c. (Łasicki Rauguzemapati; Stryjkowski 1582 Ruguczis; Prätorius Raugupatis); Narbutt 1835 form Ragutis",
    lt: "XVI–XVII a. (Łasickis Rauguzemapati; Strijkovskis 1582 Ruguczis; Pretorijus Raugupatis); Narbutas 1835 forma Ragutis",
    lv: "16.–17. gs. (Łasickis Rauguzemapati; Strikowskis 1582 Ruguczis; Pretorijs Raugupatis); Narbuts 1835 forma Ragutis",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum (publ. 1615: Rauguzemapati / Nulaidimos)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582: Ruguczis)",
    "Matthäus Prätorius: Deliciae Prussicae (Raugupatis)",
    "Daiva Vaitkevičienė: Raugpatis — Mitologijos Lietuvoje enciklopedija (mle.lt)",
    "Visuotinė lietuvių enciklopedija: Ragutis (https://www.vle.lt/straipsnis/ragutis/)",
    "Mitoloģijas enciklopēdija 2 (Rīga, 1994: Raugupatis / Rugučis)"
  ],
};

export const dimstipatisMeta: DeityMeta = {
  slug: "dimstipatis",
  name: "Dimstipatis",
  domain: "God",
  epithet: {
    en: "Lord of the homestead and household fire",
    lt: "Sodybos ir namų ugnies viešpats",
    lv: "Sētas un mājas uguns kungs",
  },
  summary: {
    en: "Dimstipatis is the Lithuanian lord of the homestead and hearth fire, guarding the dwelling from blaze and securing property and family.",
    lt: "Dimstipatis — lietuvių sodybos ir židinio viešpats, saugantis būstą nuo gaisro ir ginantis turtą bei šeimyną.",
    lv: "Dimstipatis ir lietuviešu sētas un pavarda kungs, kas sargā mājokli no ugunsgrēka un aizstāv mantu un saimi.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(120, 100, 70, 0.26)",
  accent: "#9e8b68",
  altNames: {
    en: "Dimstipatis, Dimstipan; Latvian parallel Mājas kungs / mājas gars",
    lt: "Dimstipatis, Dimstipan; latvių atitikmuo Mājas kungs / mājas gars",
    lv: "Dimstipatis, Dimstipan; Mājas kungs, mājas gars",
  },
  keywords: ["household", "farmstead", "hearth", "fire-protection", "homestead"],
  gallery: [
    {
      title: { en: "Homestead hearth", lt: "Sodybos židinys", lv: "Sētas pavards" },
      medium: { en: "hearth fire", lt: "židinio ugnis", lv: "pavarda uguns" },
      note: {
        en: "Bones, scraps, and dish-wash water from Dimstipatis feasts were poured into the hearth.",
        lt: "Dimstipačio puotos kaulai, likučiai ir indų plovimo vanduo būdavo pilami į židinį.",
        lv: "Dimstipatis mielasta kaulus, atliekas un trauku mazgāšanas ūdeni ielēja pavardā.",
      },
    }
  ],
  locations: [
    {
      id: "zemaitkiemis-hearth",
      name: "Žemaitkiemis Homestead Hearth District",
      coordinates: [55.25, 24.98],
      region: "Lithuania",
      description: "Aukštaitija district named in Lavinskis’s 1583 report of Dimstipan worship and offerings.",
      siteType: "Hearth cult zones",
      aura: "moss",
      deity: "dimstipatis",
      significance: "Earliest named cult area for Dimstipatis (Dimstipan) among the Aukštaitians.",
    }
  ],
  materialLegacy: [
    "Black hen hearth offerings",
    "Rooster bones burned in the hearth",
    "Housewives’ piglet feast rites",
  ],
  symbols: [
    { label: "Element", detail: "Homestead hearth fire" },
    { label: "Offerings", detail: "Black hens, rooster, piglet; wash-water poured into the hearth" }
  ],
  regionDetails: {
    en: "Aukštaitija / Lithuania",
    lt: "Aukštaitija / Lietuva",
    lv: "Aukštaitija / Lietuva",
  },
  tribe: {
    en: "Lithuanians (Aukštaitians)",
    lt: "Lietuviai (aukštaičiai)",
    lv: "Lietuvieši (aukštaiši)",
  },
  period: {
    en: "16th Century (Jokūbas Lavinskis / Jakub Ławiński, Jesuit letter 1583)",
    lt: "XVI a. (Jokūbas Lavinskis, jėzuitų laiškas 1583 m.)",
    lv: "16. gs. (Jokūbas Lavinskis, jezuītu vēstule 1583. g.)",
  },
  references: [
    "Jokūbas Lavinskis (Jakub Ławiński): Jesuit Mission Letter to Paul Campana (1583)",
    "Jesuit annual reports 1604–1605 (BRMŠ Vol. 2)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (2001)",
    "Gintaras Beresnevičius: Laukpatis ir Dimstipatis (2007)",
    "Visuotinė lietuvių enciklopedija: Dimstipatis (https://www.vle.lt/straipsnis/dimstipatis/)",
    "Pēteris Šmits: Latviešu mitoloģija (1918) — Mājas kungs // Dimstipatis",
  ],
};

export const janisMeta: DeityMeta = {
  slug: "janis",
  name: "Jānis",
  domain: "God",
  epithet: {
    en: "Lord of midsummer fire and the long night's song",
    lt: "Vasaros saulėgrįžos ugnies ir ilgosios nakties giesmės valdovas",
    lv: "Vasaras saulgriežu uguns un garās nakts dziesmu kungs",
  },
  summary: {
    en: "Jānis is the Latvian deity of midsummer whose festival, Jāņi, draws an entire people out to build bonfires, weave oak-leaf wreaths, and sing through the brief solstice night.",
    lt: "Jānis — latvių vasarvidžio dievas, kurio šventė Jāņi surenka visą tautą laužų kurti, ąžuolų lapų vainikų pinti ir giedoti trumpą saulėgrįžos naktį.",
    lv: "Jānis ir latviešu vasarsvētku dievība; viņa svētki Jāņi aicina visu tautu kopā kurts ugunskurus, pīt ozollapu vainagus un dziedāt īsajā saulgriežu naktī.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1469722064285-b88c8e8e1e5a?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(220, 180, 60, 0.25)",
  accent: "#e0b840",
  altNames: {
    en: "Janis, Jānis",
    lt: "Jānis, Janiai",
    lv: "Jānis",
  },
  keywords: ["midsummer", "solstice", "bonfire", "fertility"],
  gallery: [
    {
      title: { en: "Oak-leaf wreath", lt: "Ąžuolo lapų vainikas", lv: "Ozola lapu vainags" },
      medium: { en: "oak leaves, grass", lt: "ąžuolo lapai, žolė", lv: "ozola lapas, zāle" },
      note: { en: "Woven by women before the festival and worn throughout the night.", lt: "Moterų pintas prieš šventę ir dėvimas visą naktį.", lv: "Austas sievietēm pirms svētkiem un nests cauru nakti." },
    },
    {
      title: { en: "Midsummer bonfire", lt: "Joninių laužas", lv: "Vasaras saulgriežu ugunskurs" },
      medium: { en: "oak wood", lt: "ąžuolo medis", lv: "ozola malka" },
      note: { en: "Lit on hilltops so neighboring homesteads can see the glow.", lt: "Uždegamas ant kalvų, kad kaimyniniai ūkiai galėtų matyti liepsną.", lv: "Aizdedzināts uz pakalniem, lai kaimiņu mājas varētu redzēt mirdzumu." },
    }
  ],
  locations: [
    {
      id: "gauja-corridor",
      name: "Gauja Shadow Corridor",
      coordinates: [57.1, 25.0],
      region: "Latvia",
      description: "A river valley where Jāņi bonfires are still lit on midsummer eve.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "janis",
      significance: "Couples leap over fire for luck; cheese and ale are shared at dawn.",
    }
  ],
  materialLegacy: [
    "Oak-leaf wreaths (ozollapu vainagi)",
    "Midsummer caraway cheese molds",
    "Elevated fire poles (pūdelis)",
    "Protective birch and rowan branches (zāļošana)",
  ],
  symbols: [
    { label: "Element", detail: "Midsummer fire and solar light" },
    { label: "Sacred foods", detail: "Round caraway cheese (Jāņu siers), barley beer (Jāņu alus)" },
    { label: "Flora", detail: "Oak leaves, birch boughs, fern blossom (papardes zieds), calamus, rowan" },
    { label: "Fauna & Mount", detail: "Golden / dapple-grey steed (kumeļš), rooster (gailis)" }
  ],
  regionDetails: {
    en: "Pan-Latvian",
    lt: "Visa Latvija",
    lv: "Visa Latvija",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "Pre-Christian era, documented from 17th c. (Paul Einhorn 1636, 1649) & Barons Dainas (1894–1915)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas nuo XVII a. (P. Einhorn 1636, 1649) ir Barono Dainose (1894–1915)",
    lv: "Pirmskristīgā ēra, dokumentēta no 17. gs. (P. Einhorns 1636, 1649) un Barona Dainās (1894–1915)",
  },
  references: [
    "Krišjānis Barons: Latvju dainas, Vol. 3 (1894–1915)",
    "Paul Einhorn: Historia Lettica (1649) / Reformatio gentis Letticae (1636)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "Latvijas Nacionālā enciklopēdija: Jāņi (https://enciklopedija.lv/skirklis/133649)",
    "Dainius Razauskas: Ar tikrai Jonas ir Joninės krikščioniški žodžiai? (Alkas.lt, 2012)",
  ],
};

export const mezaMateMeta: DeityMeta = {
  slug: "meza-mate",
  name: "Meža māte",
  domain: "God",
  epithet: {
    en: "Mother of the deep forest silence",
    lt: "Gilios miško tylos motina",
    lv: "Dziļā meža klusuma māte",
  },
  summary: {
    en: "Meža māte is the Latvian spirit guardian of forests, the mother of all woodland creatures and sacred trees, whose permission must be sought before felling timber or hunting game.",
    lt: "Meža māte — latvių miškų sargybinė dvasia, visų miško gyvūnų ir šventų medžių motina, kurios sutikimo reikia prieš kertant medžius ar medžiojant.",
    lv: "Meža māte ir latviešu meža sargātāja, visu meža radību un svēto koku māte, kuras atļauju jālūdz pirms koku ciršanas vai medīšanas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(40, 90, 50, 0.28)",
  accent: "#5a9e6f",
  altNames: {
    en: "Meza mate, Forest Mother",
    lt: "Miško Motina",
    lv: "Meža māte",
  },
  keywords: ["forest", "nature", "trees", "animals"],
  gallery: [
    {
      title: { en: "Old-growth linden shrine", lt: "Senos liepos šventovė", lv: "Sena liepa svētnīca" },
      medium: { en: "natural", lt: "gamtinis", lv: "dabisks" },
      note: { en: "Hollowed linden trees served as her dwelling; offerings left in the cavity.", lt: "Tuščiaviduriės liepos tarnavo jos buveinei; aukos paliktos ertmėje.", lv: "Dobumainas liepas kalpoja kā viņas mājoklis; upuri atstāti dobumā." },
    }
  ],
  locations: [
    {
      id: "gauja-corridor",
      name: "Gauja Shadow Corridor",
      coordinates: [57.1, 25.0],
      region: "Latvia",
      description: "A dense river-valley forest where Meža māte's presence is felt in the tree canopy.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "meza-mate",
      significance: "Woodcutters kneel at the oldest tree to ask forgiveness before felling.",
    }
  ],
  materialLegacy: [
    "Hollow linden tree offering shrines",
    "Copper coins hammered into stumps",
    "Woolen thread and ribbon branch votives",
    "Tree-felling permission rites",
  ],
  symbols: [
    { label: "Element", detail: "Living old-growth forest and moss" },
    { label: "Flora", detail: "Hollowed linden (liepa), spruce (egle), fir, moss, fern" },
    { label: "Fauna", detail: "Wolves (Meža mātes suņi), bears, deer, owls, forest birds" },
    { label: "Offerings", detail: "Bread, salt, butter, cheese, first mushrooms/berries, copper coins" },
  ],
  regionDetails: {
    en: "Pan-Latvian",
    lt: "Visa Latvija",
    lv: "Visa Latvija",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "Pre-Christian era, documented from 17th c. (Paul Einhorn 1636, 1649) & Barons Dainas (1894–1915)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas nuo XVII a. (P. Einhorn 1636, 1649) ir Barono Dainose (1894–1915)",
    lv: "Pirmskristīgā ēra, dokumentēta no 17. gs. (P. Einhorns 1636, 1649) un Barona Dainās (1894–1915)",
  },
  references: [
    "Krišjānis Barons: Latvju dainas, Vol. 3 (1894–1915)",
    "Paul Einhorn: Historia Lettica (1649) / Reformatio gentis Letticae (1636)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/103988-latvie%C5%A1u-mitolo%C4%A3ija)",
    "Visuotinė lietuvių enciklopedija: Medeina (https://www.vle.lt/straipsnis/medeina/)",
  ],
};

export const veluMateMeta: DeityMeta = {
  slug: "velu-mate",
  name: "Veļu māte",
  domain: "God",
  epithet: {
    en: "Queen who receives the dead at the final threshold",
    lt: "Karalienė, priimanti mirusiuosius paskutiniajame slenkstyje",
    lv: "Karaliene, kas uzņem mirušos pie pēdējā sliekšņa",
  },
  summary: {
    en: "Veļu māte is the Latvian Mother of the Dead who rules the underworld realm where ancestral shades dwell, welcoming each soul that crosses the boundary between the living and the dead.",
    lt: "Veļu māte — latvių mirusiųjų motina, valdanti požeminę karalystę, kur gyvena protėvių vėlės, sveikinanti kiekvieną sielą, kertančią ribą tarp gyvųjų ir mirusiųjų.",
    lv: "Veļu māte ir latviešu Mirušo māte, kas valda pazemes valstību, kur mīt senču dvēseles, sagaidot katru dvēseli, kas šķērso robežu starp dzīvajiem un mirušajiem.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(70, 50, 100, 0.28)",
  accent: "#8b7ab8",
  altNames: {
    en: "Velu mate, Mother of Shades, Kapu mate, Smilsu mate",
    lt: "Mirusiųjų Motina, Vėlių Motina, Kapų Motina",
    lv: "Veļu māte, Kapu māte, Smilšu māte",
  },
  keywords: ["death", "underworld", "ancestors", "souls"],
  gallery: [
    {
      title: { en: "Ancestral offering bowl", lt: "Protėvių aukojimo dubenėlis", lv: "Senču upura bļoda" },
      medium: { en: "birch bark", lt: "beržo žievė", lv: "bērza miza" },
      note: { en: "Left at gravesides during Veļu laiks with food for the returning dead.", lt: "Paliekama kapų pusėje Veļu laiks metu su maistu sugrįžtantiesiems mirusiesiems.", lv: "Atstāta kapa pusē Veļu laiku laikā ar pārtiku atgriežošajiem mirušajiem." },
    }
  ],
  locations: [
    {
      id: "sigulda-springs",
      name: "Sigulda Fate Springs",
      coordinates: [57.15, 24.86],
      region: "Latvia",
      description: "Spring-fed pools where the boundary between living and dead is felt thin.",
      siteType: "Sacred springs",
      aura: "mist",
      deity: "velu-mate",
      significance: "During Veļu laiks (late October), food and candles float in these springs.",
    }
  ],
  materialLegacy: [
    "Bathhouse and granary ancestral feast setups",
    "Grave coins hammered or placed in burial soil",
    "White linen shrouds and offerings",
    "Candles and food placed on autumn cemetery mounds",
  ],
  symbols: [
    { label: "Element", detail: "Sandy hill (Smilšu kalns) and still threshold waters" },
    { label: "Attributes", detail: "Golden underworld key (kapa atslēdziņa), white linen (balts paladziņš), light basket" },
    { label: "Fauna", detail: "White horse (soul carrier), black rooster and hen (threshold sacrifice)" },
    { label: "Offerings", detail: "Barley porridge, freshly baked bread, boiled pork/beef, beer, wax candles, grave coins" },
  ],
  regionDetails: {
    en: "Pan-Latvian",
    lt: "Visa Latvija",
    lv: "Visa Latvija",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "Pre-Christian era, documented from 17th c. (Paul Einhorn 1636, 1649) & Barons Dainas (1894–1915)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas nuo XVII a. (P. Einhorn 1636, 1649) ir Barono Dainose (1894–1915)",
    lv: "Pirmskristīgā ēra, dokumentēta no 17. gs. (P. Einhorns 1636, 1649) un Barona Dainās (1894–1915)",
  },
  references: [
    "Krišjānis Barons: Latvju dainas, Vol. 3 (1894–1915)",
    "Paul Einhorn: Historia Lettica (1649) / Reformatio gentis Letticae (1636)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/103988-latvie%C5%A1u-mitolo%C4%A3ija)",
    "Nijolė Laurinkienė: Vėlių deivė Veliona (Alkas.lt / LLTI, 2013)",
    "Visuotinė lietuvių enciklopedija: Ilgės / Vėlė (https://www.vle.lt/straipsnis/ilges-1/)",
  ],
};

export const auschautsMeta: DeityMeta = {
  slug: "auschauts",
  name: "Auschauts",
  domain: "God",
  epithet: {
    en: "Guardian of health and recovery from sickness",
    lt: "Sveikatos ir pasveikimo nuo ligų globėjas",
    lv: "Veselības un atveseļošanās aizgādnis",
  },
  summary: {
    en: "Auschauts is the Old Prussian deity of health and healing, recorded in 16th-century chronicles as the guardian of the sick and healthy who dispels illness and restores bodily vitality.",
    lt: "Auschauts (Aušautas) — senprūsių sveikatos ir gydymo dievas, XVI a. šaltiniuose minimas kaip sergančiųjų ir sveikųjų globėjas, nubaidantis ligas ir sugrąžinantis kūno gajumą.",
    lv: "Auschauts ir seno prūšu veselības un dziedināšanas dievs, 16. gadsimta avotos minēts kā slimo un veselo aizgādnis, kurš aizdzen kaites un atjauno spēku.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(70, 150, 130, 0.26)",
  accent: "#5aad9e",
  altNames: {
    en: "Auschauts, Auschaut, Auschlavis",
    lt: "Aušautas, Auschlavis",
    lv: "Auskauts, Aušlavis",
  },
  keywords: ["health", "healing", "medicine", "wellness", "vitality"],
  gallery: [
    {
      title: { en: "Sacred healing spring", lt: "Šventasis gydomasis šaltinis", lv: "Svētais dziedniecības avots" },
      medium: { en: "natural", lt: "gamtinis", lv: "dabisks" },
      note: { en: "Freshwater springs near Prussian sacred groves where the sick washed for recovery.", lt: "Gėlo vandens šaltiniai prie prūsų šventviečių, kur ligoniai prausėsi sveikatai atgauti.", lv: "Saldūdens avoti pie prūšu svētvietām, kur slimnieki mazgājās atveseļošanai." },
    }
  ],
  locations: [
    {
      id: "sambia-healing-grove",
      name: "Sambia Sacred Healing Grove",
      coordinates: [54.85, 20.3],
      region: "Old Prussia",
      description: "An ancient Sambian sacred grove where ritual healing prayers and offerings were made to preserve health.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "auschauts",
      significance: "The sick washed in sacred waters and offered prayers for recovery.",
    }
  ],
  materialLegacy: [
    "Sacred healing spring washing sites",
    "Votive linen towels and wax offerings",
    "Communal health supplication rites",
  ],
  symbols: [
    { label: "Domain", detail: "Health, bodily vigor, and recovery from disease" },
    { label: "Elements", detail: "Clean spring water and healing grove sanctuaries" },
    { label: "Offerings", detail: "Clean spring water, white linen, bread, wax, honey, grain, coins" },
  ],
  regionDetails: {
    en: "Old Prussia / Samland (Sambia)",
    lt: "Senoji Prūsija / Semba",
    lv: "Vecā Prūsija / Semba",
  },
  tribe: {
    en: "Old Prussians / Sudovians",
    lt: "Senprūsiai / Sūduviai",
    lv: "Vecie prūši / Sudāvieši",
  },
  period: {
    en: "16th Century (Constitutiones Synodales 1530 & Sudovian Book)",
    lt: "XVI a. (Constitutiones Synodales 1530 m. ir Sūduvių knygelė)",
    lv: "16. gs. (Constitutiones Synodales 1530 un Sudāviešu grāmatiņa)",
  },
  references: [
    "Constitutiones Synodales (1530: 'Auschlavis der krancken und gesunden Gott')",
    "Sudauer Büchlein / Sudovian Book (c. 1520–1530: 'Auschauts bewarhet die krancken und gesunden')",
    "Jan Malecki: Libellus de sacrificiis et idolatria veterum Borussorum (1551)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (2001)",
    "Rolandas Kregždys: Sūduvių knygelės etnomitologinė faktografija (Baltu filoloģija 27(1), 2018)",
    "Visuotinė lietuvių enciklopedija: Aušautas (https://www.vle.lt/straipsnis/ausautas/)",
  ],
};

export const kurkeMeta: DeityMeta = {
  slug: "kurke",
  name: "Kurke",
  domain: "God",
  epithet: {
    en: "Guardian of the granary and harvest bounty",
    lt: "Javų dvasia ir derliaus gausos sargybinis",
    lv: "Klēts un ražas pārpilnības sargs",
  },
  summary: {
    en: "Kurke is the Old Prussian deity of grain, harvest, and vegetative fertility, famously recorded in the 1249 Treaty of Christburg as an annual harvest idol woven from the last sheaf of the field.",
    lt: "Kurke (Curche) — senprūsių javų, derliaus ir augalijos vaisingumo dievas, 1249 m. Christburgo sutartyje paminėtas kaip kasmetinis derliaus stabas, nupintas iš paskutinio lauko pėdo.",
    lv: "Kurke (Curche) ir seno prūšu labības, ražas un auglības dievs, kas 1249. gada Kristburgas līgumā fiksēts kā ikgadējs ražas elks, sasiets no pēdējā lauka kūļa.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 165, 70, 0.26)",
  accent: "#c8a044",
  altNames: {
    en: "Kurke, Curche, Curcho, Kurko",
    lt: "Kurke, Curche, Kurkė, Kurko",
    lv: "Kurke, Curche, Kurkis",
  },
  keywords: ["grain", "harvest", "food", "granary", "fertility", "crops"],
  gallery: [
    {
      title: { en: "Last-sheaf idol", lt: "Paskutinio pėdo stabas", lv: "Pēdējā kūļa elks" },
      medium: { en: "bound rye stalks", lt: "surišti rugių stiebeliai", lv: "sasieti rudzu stublāji" },
      note: { en: "Effigy made from the last sheaf of harvest, identified with Curche.", lt: "Atvaizdas, pagamintas iš paskutinio derliaus pėdo, tapatinamas su Kurkiu.", lv: "Efigija izgatavota no pēdējā ražas kūļa, identificēta ar Curche." },
    }
  ],
  locations: [
    {
      id: "natangia-harvest-altar",
      name: "Natangia Harvest Shrine",
      coordinates: [54.4, 20.6],
      region: "Old Prussia",
      description: "An Old Prussian field shrine in Natangia where harvest offering fires burned after the grain was safely stored.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "kurke",
      significance: "Grain effigies brought into farmsteads and ale poured to Curche after harvest completion.",
    }
  ],
  materialLegacy: [
    "Last-sheaf harvest effigies (Curche idols)",
    "Granary winter grain protective charms",
    "Harvest feast libation and bread rites",
  ],
  symbols: [
    { label: "Element", detail: "Ripe rye stalks, grain ears, and threshing floor" },
    { label: "Attributes", detail: "Bound last sheaf, grain stalks, harvest wreath" },
    { label: "Fauna", detail: "Harvest rooster (sacrificial field bird)" },
    { label: "Offerings", detail: "Freshly baked new bread, barley ale (sambaris), grain porridge, honey" },
  ],
  regionDetails: {
    en: "Old Prussia / Pomesania, Warmia & Natangia",
    lt: "Senoji Prūsija / Pamedė, Varmė ir Natanga",
    lv: "Vecā Prūsija / Pamedija, Varme un Natanga",
  },
  tribe: {
    en: "Old Prussians (Pomesanians, Warmians, Natangians)",
    lt: "Senprūsiai (Pamedėnai, Varmiai, Natangai)",
    lv: "Vecie prūši (Pamedieši, Varmieši, Natangi)",
  },
  period: {
    en: "13th Century (Treaty of Christburg, 1249)",
    lt: "XIII a. (Christburgo sutartis, 1249 m.)",
    lv: "13. gs. (Kristburgas līgums, 1249)",
  },
  references: [
    "Treaty of Christburg (1249: 'idolum... cui nomen imponebant Curche') — BRMŠ Vol. 1 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas I: Kristburgo sutartis (2012)",
    "Simon Grunau: Preussische Chronik (c. 1520s: 'Curcho, der Gott der Speise und des Tranks')",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690) — BRMŠ Vol. 3 (2003)",
    "Christoph Hartknoch: Alt- und neues Preussen (1684)",
    "Latvijas Nacionālā enciklopēdija: Jumis (https://enciklopedija.lv/skirklis/114881-Jumis)",
    "Visuotinė lietuvių enciklopedija: Christburgo taika (https://www.vle.lt/straipsnis/christburgo-taika/)",
  ],
};

export const aitvarasMeta: DeityMeta = {
  slug: "aitvaras",
  name: "Aitvaras",
  domain: "Creature",
  epithet: {
    en: "Fiery serpent of stolen plenty",
    lt: "Ugninis turtus nešantis žaltys",
    lv: "Ugunīgā čūska ar zagto pārpilnību",
  },
  summary: {
    en: "The Aitvaras is a household spirit appearing as a flying fiery serpent or comet-streak across the night sky, bringing grain and wealth to its master by stealing from neighbouring households.",
    lt: "Aitvaras — naminis dvasinis būtis, pasirodantis kaip skrendantis ugninis žaltys ar kometos pėdsakas naktiniame danguje, atnešantis grūdų ir turtų šeimininkui, vogiant iš kaimynų.",
    lv: "Aitvaras ir mājas gars, kas izskatās kā lidojoša ugunīga čūska vai komētas svītra nakts debesīs, nesot graudu un bagātību savam saimniekam, zagjot no kaimiņiem.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(220, 100, 40, 0.28)",
  accent: "#e06030",
  altNames: {
    en: "Aitvaras, Aitvaros",
    lt: "Aitvaras",
    lv: "Aitvaras",
  },
  keywords: ["fire", "serpent", "wealth", "household"],
  gallery: [
    {
      title: { en: "Comet-streak carving", lt: "Kometos brūkšnio drožinys", lv: "Komētas svītra grebums" },
      medium: { en: "carved wood", lt: "drožinėtas medis", lv: "griests koks" },
      note: { en: "Rooftop carving representing the Aitvaras's nightly flight.", lt: "Stogo drožinys, vaizduojantis Aitvaro naktinius skrydžius.", lv: "Jumta grebums, kas attēlo Aitvara naktiskos lidojumus." },
    }
  ],
  locations: [
    {
      id: "kernave-mounds",
      name: "Kernavė Earth Ridges",
      coordinates: [54.88, 24.84],
      region: "Lithuania",
      description: "Ridge settlements where Aitvaras sightings are recorded in folklore.",
      siteType: "Settlement sites",
      aura: "amber",
      deity: "aitvaras",
      significance: "Wealthy farm households credited their fortune to an Aitvaras living in the rafters.",
    }
  ],
  materialLegacy: ["Rooftop fire-serpent carvings", "Attic grain-offerings"],
  symbols: [
    { label: "Element", detail: "Fire and grain" },
    { label: "Offerings", detail: "Omelet, grain, first milk — fed regularly to keep it loyal" }
  ],
  regionDetails: {
    en: "Lithuania / Samogitia",
    lt: "Lietuva / Žemaitija",
    lv: "Lietuva / Žemaitija",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "16th Century (Łasicki 1582, Mažvydas 1547), documented in Witch Trial Records",
    lt: "XVI a. (Łasicki 1582, Mažvydas 1547), užrašyta raganų teismų protokoluose",
    lv: "16. gs. (Łasicki 1582, Mažvydas 1547)",
  },
  references: [
    "Martynas Mažvydas: Catechismus (1547)",
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Norbertas Vėlius: Mitinės būtybės lietuvių sakmėse: Aitvaras (1977)",
    "Visuotinė lietuvių enciklopedija: Aitvaras (https://www.vle.lt/straipsnis/aitvaras/)"
  ],
};

export const laumesMeta: DeityMeta = {
  slug: "laumes",
  name: "Laumės",
  domain: "God",
  epithet: {
    en: "Weavers of fate and guardians of moonlit waters",
    lt: "Likimo verpėjos ir naktinių vandenų sergėtojos",
    lv: "Likteņa vērpējas un mēnessgaismas ūdeņu sargātājas",
  },
  summary: {
    en: "The Laumės (Latvian: Laumas) are ancient Baltic female nature spirits and fate beings associated with atmospheric waters, textile craft, childbirth, and moral reciprocity, rewarding diligent spinners and punishing greed.",
    lt: "Laumės (latv. Laumas) — senosios baltų mitinės būtybės ir moteriškos dvasios, siejamos su atmosferos vandenimis, verpimu, audimu, gimdymu ir moraliniu teisingumu, apdovanojančios darbščiuosius ir baudžiančios tinginystę.",
    lv: "Laumes (lietuviešu: Laumės) ir senas baltu mītiskās būtnes un dabas gari, kas saistīti ar atmosfēras ūdeņiem, vērpšanu, aušanu, dzemdībām un likteņa taisnīgumu, apbalvojot čaklās vērpējas un sodot slinkumu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(120, 80, 160, 0.26)",
  accent: "#9060c0",
  altNames: {
    en: "Laumes, Lauma, Laumė",
    lt: "Laumė, Laumės",
    lv: "Lauma, Laumas",
  },
  keywords: ["fate", "weaving", "forest", "spirits", "water", "textiles", "spinning"],
  gallery: [
    {
      title: { en: "Linen spindle found in forest", lt: "Miške rasta lino verpstė", lv: "Mežā atrastā linu vārpsta" },
      medium: { en: "carved bone", lt: "drožinėtas kaulas", lv: "griezts kauls" },
      note: { en: "Laumės were said to leave their spindles and beaters behind when surprised at their nighttime work.", lt: "Sakoma, kad laumės palieka savo verpstis ir skalbiklius, kai jas užklumpa naktį.", lv: "Tika stāstīts, ka Laumes atstāj savas vārpstas un vāles, kad tās pārsteidz nakts darbā." },
    }
  ],
  locations: [
    {
      id: "anyksciai-forest",
      name: "Anykščiai Forest",
      coordinates: [55.52, 25.1],
      region: "Lithuania",
      description: "Dense old-growth forest and riverbanks where Laumės gathered on moonlit nights to wash linen and spin fate.",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "laumes",
      significance: "Women left lengths of woven linen and thread at forest springs to honour the Laumės.",
    }
  ],
  materialLegacy: [
    "Cult stones (Laumės akmenys / Laumių pirtys)",
    "Spindle whorls and votive linen bands left at springs",
    "Belemnite lightning fossils (Laumės papai / pirštai)",
  ],
  symbols: [
    { label: "Element", detail: "Atmospheric waters, rain, morning dew, and moonlight" },
    { label: "Attributes", detail: "Wooden distaff (verpstė), spindle, linen yarn, and laundry beater" },
    { label: "Fauna", detail: "Dragonfly (laumžirgis), toad/frog, and chicken/hen" },
    { label: "Offerings", detail: "Linen cloth and thread, raw wool, freshly baked bread, milk, and eggs" },
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania, Latvia, Old Prussia)",
    lt: "Visos baltų žemės (Lietuva, Latvija, Senoji Prūsija)",
    lv: "Visas baltu zemes (Lietuva, Latvija, Senā Prūsija)",
  },
  tribe: {
    en: "Lithuanians, Latvians, Old Prussians",
    lt: "Lietuviai, latviai, senprūsiai",
    lv: "Lietuvieši, latvieši, senprūši",
  },
  period: {
    en: "Pre-Christian era, documented in 16th c. (Łasicki 1582, Praetorius c. 1690)",
    lt: "Ikikrikščioniškoji epocha, užfiksuota XVI a. (Łasicki 1582, Pretorijus ~1690)",
    lv: "Pirmskristīgā ēra, dokumentēta 16. gs. (Łasicki 1582, Praetorius ap 1690)",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum (1582) — BRMŠ Vol. 2 (2001)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690) — BRMŠ Vol. 3 (2003)",
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977) & Laumių dovanos (1979)",
    "Paul Einhorn: Historia Lettica (1649)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Sandis Laime: Latvian Laumas: Reflections on the Witchisation of Tradition (Tautosakos darbai 62, 2021)",
    "Visuotinė lietuvių enciklopedija: Laumė (https://www.vle.lt/straipsnis/laume/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/117967)",
  ],
};

export const zaltysMeta: DeityMeta = {
  slug: "zaltys",
  name: "Žaltys",
  domain: "Creature",
  epithet: {
    en: "Holy grass snake beneath the hearthstone",
    lt: "Šventasis žaltys po akmeniu prie židinio",
    lv: "Svētais zalktis zem pavarda akmens",
  },
  summary: {
    en: "The Žaltys is the sacred grass snake kept in Baltic homes as a household guardian, fed milk and given sanctuary beneath the hearth, whose killing was the gravest imaginable sacrilege.",
    lt: "Žaltys — šventoji žalčio gyvatė, laikoma baltų namuose kaip namų sargybinis, maitinama pienu ir saugoma po židiniu — jos nužudymas buvo didžiausia įsivaizduojama šventvagystė.",
    lv: "Žaltys ir svētā zālāja čūska, kas turēta baltu mājās kā mājas aizstāvis, barota ar pienu un glabāta zem pavarda; tā nogalināšana bija vislielākais iedomājamais svētniecības pārkāpums.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(60, 120, 80, 0.26)",
  accent: "#4a9e65",
  altNames: {
    en: "Zaltys, Zalktis (Latvian)",
    lt: "Žaltys",
    lv: "Zalktis",
  },
  keywords: ["snake", "household", "sacred", "protection"],
  gallery: [
    {
      title: { en: "Hearth snake shelter", lt: "Židinio žalčio prieglobstis", lv: "Pavarda čūskas patversme" },
      medium: { en: "smooth river stones", lt: "lygūs upės akmenys", lv: "gludi upes akmeņi" },
      note: { en: "Stones arranged at the base of the hearth to provide shelter for the sacred snake.", lt: "Akmenys sudėti prie židinio pamato suteikti prieglobstį šventajai gyvatei.", lv: "Akmeņi sakārtoti pie pavarda pamata, lai nodrošinātu pajumti svētajai čūskai." },
    }
  ],
  locations: [
    {
      id: "kernave-mounds",
      name: "Kernavė Earth Ridges",
      coordinates: [54.88, 24.84],
      region: "Lithuania",
      description: "Settlement site with archaeological evidence of grass snake veneration beneath hearths.",
      siteType: "Settlement sites",
      aura: "moss",
      deity: "zaltys",
      significance: "Milk bowls placed by hearths for the household snake.",
    }
  ],
  materialLegacy: ["Hearth-snake milk bowls", "Snake-motif amber pendants"],
  symbols: [
    { label: "Element", detail: "Earth and household fire" },
    { label: "Offerings", detail: "Fresh milk, bread, warm hearth shelter" }
  ],
  regionDetails: {
    en: "Pan-Baltic",
    lt: "Visos baltų žemės",
    lv: "Visas baltu zemes",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "Pre-Christian era, documented from Łasicki (1582) and Latvian Dainas",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas Łasicki (1582) ir Latvių Dainose",
    lv: "Pirmskristīgā ēra, dokumentēta Łasicki (1582) un Latvju Dainās",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Visuotinė lietuvių enciklopedija: Žaltys (https://www.vle.lt/straipsnis/zaltys/)"
  ],
};

export const neringaMeta: DeityMeta = {
  slug: "neringa",
  name: "Neringa",
  domain: "Person",
  epithet: {
    en: "The giantess who shaped the coast from sea-spray",
    lt: "Milžinė, sukūrusi pajūrį iš jūros purslų",
    lv: "Milzene, kas veidoja piekrasti no jūras šļakatām",
  },
  summary: {
    en: "Neringa is the benevolent giantess of Lithuanian folklore who created the Curonian Spit by filling her apron with sand and carrying it out to sea, forming a great sandbar to protect fishermen from the dragon Naglis.",
    lt: "Neringa — geranoriška lietuviška milžinė, sukūrusi Kuršių neriją, apklodama prijuostę smėlio ir nunešdama jį į jūrą, suformuodama didžiulę rėvą apsaugoti žvejus nuo drakono Naglio.",
    lv: "Neringa ir labestīgā lietuviešu milzene, kas, piepildījusi priekšautu ar smiltīm un aiznesdama tās jūrā, radīja Kuršu kāpas un lielisko smilšu lēzumu zvejas aizsardzībai pret pūķi Nagli.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(60, 120, 180, 0.24)",
  accent: "#4a90d0",
  altNames: {
    en: "Neringa, Nering",
    lt: "Neringa",
    lv: "Neringa",
  },
  keywords: ["giant", "coast", "creation", "sea"],
  gallery: [
    {
      title: { en: "Amber bead from Nida dunes", lt: "Gintaro karoliukas iš Nidos kopų", lv: "Dzintara pērlīte no Nidas kāpām" },
      medium: { en: "Baltic amber", lt: "Baltijos gintaras", lv: "Baltijas dzintars" },
      note: { en: "Amber beads found at her feet according to legend.", lt: "Gintaro karoliai, rasti prie jos kojų pagal legendą.", lv: "Dzintara pērlītes atrasts pie viņas kājām saskaņā ar leģendu." },
    }
  ],
  locations: [
    {
      id: "nida-dunes",
      name: "Nida Dunes",
      coordinates: [55.3, 21.0],
      region: "Lithuania",
      description: "The high amber-coloured dunes of the Curonian Spit, shaped by Neringa in legend.",
      siteType: "Legendary creation sites",
      aura: "amber",
      deity: "neringa",
      significance: "Fishermen still pour drops of amber-coloured ale into the surf before long voyages.",
    }
  ],
  materialLegacy: ["Amber sculptures on Curonian coast", "Fishermen's votive offerings"],
  symbols: [
    { label: "Element", detail: "Sand, sea, creation" },
    { label: "Offerings", detail: "Amber, first fish of season, amber-ale libation" }
  ],
  regionDetails: {
    en: "Lithuanian Coast / Curonian Spit",
    lt: "Lietuvos pajūris / Kuršių nerija",
    lv: "Lietuvas piekraste / Kuršu kāpas",
  },
  tribe: {
    en: "Curonians / Lithuanians",
    lt: "Kuršiai / Lietuviai",
    lv: "Kuršnieki / Lietuvieši",
  },
  period: {
    en: "Folk tradition, documented 19th–20th century",
    lt: "Liaudies tradicija, užrašyta XIX–XX a.",
    lv: "Tautas tradīcija, dokumentēta 19.–20. gs.",
  },
  references: [
    "Wilhelm von Tettau, J. D. H. Temme: Die Volkssagen Ostpreußens, Litthauens und Westpreußens (1837)",
    "Jonas Basanavičius: Lietuviškos pasakos (1898–1902)",
    "Norbertas Vėlius: Chtoninis lietuvių tautosakos pasaulis (1987)",
    "Visuotinė lietuvių enciklopedija: Neringa (https://www.vle.lt/)",
    "Visuotinė lietuvių enciklopedija: Neringa (https://www.vle.lt/straipsnis/neringa/)"
  ],
};

export const sovijusMeta: DeityMeta = {
  slug: "sovijus",
  name: "Sovijus",
  domain: "Person",
  epithet: {
    en: "The first man to walk the road of fire",
    lt: "Pirmasis žmogus, nuėjęs ugnies keliu",
    lv: "Pirmais cilvēks, kas gāja uguns ceļu",
  },
  summary: {
    en: "Sovijus was a legendary Lithuanian hero who, after death, demanded to be cremated rather than buried, descending nine times through the gates of the underworld until his sons finally burned his body, founding the cremation rites of the Baltic peoples.",
    lt: "Sovijus — legendinis lietuvių herojus, po mirties pareikalavęs jį sudeginti, o ne palaidoti, devynis kartus nusileisdamas per požemio vartus, kol jo sūnūs pagaliau sudegino jo kūną, įkurdami baltų kremavimo papročius.",
    lv: "Sovijs bija leģendārs lietuviešu varonis, kurš pēc nāves pieprasīja, lai viņu sadedzina, nevis apraktu; viņš deviņas reizes nonāca pazemes vārtos, līdz viņa dēli beidzot sadedzināja viņa ķermeni, dibinot baltu kremācijas tradīcijas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1625043658498-40c22e2a4ca7?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 80, 50, 0.26)",
  accent: "#d06040",
  altNames: {
    en: "Sovijus, Sovij",
    lt: "Sovijus",
    lv: "Sovijs",
  },
  keywords: ["cremation", "afterlife", "fire", "ancestor"],
  gallery: [
    {
      title: { en: "Funerary pyre reconstruction", lt: "Laidotuvių laužo rekonstrukcija", lv: "Bēru sārta rekonstrukcija" },
      medium: { en: "oak and pine", lt: "ąžuolas ir pušis", lv: "ozols un priede" },
      note: { en: "The pre-Christian Lithuanian funeral rite introduced according to legend by Sovijus.", lt: "Ikrikščioniška lietuvių laidotuvių apeiga, pagal legendą pristatyta Sovijaus.", lv: "Pirms-kristīgais lietuviešu bēru rituāls, ko pēc leģendas ieviesa Sovijus." },
    }
  ],
  locations: [
    {
      id: "kernave-mounds",
      name: "Kernavė Earth Ridges",
      coordinates: [54.88, 24.84],
      region: "Lithuania",
      description: "Burial mounds at the sacred Kernavė complex, site of pre-Christian cremation burials.",
      siteType: "Burial/cremation sites",
      aura: "amber",
      deity: "sovijus",
      significance: "Pre-Christian cremation burials performed here, with ashes placed in urns beneath mounds.",
    }
  ],
  materialLegacy: ["Cremation urn burials across Baltic region", "Fire-starting ritual tools"],
  symbols: [
    { label: "Element", detail: "Purifying fire" },
    { label: "Offerings", detail: "Cremation fire, grain—placed in funerary urn" }
  ],
  regionDetails: {
    en: "Lithuania",
    lt: "Lietuva",
    lv: "Lietuva",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "13th Century (Slavonic Malalas Chronicle insertion 1261)",
    lt: "XIII a. (Jono Malalos kronikos slaviškasis intarpas 1261 m.)",
    lv: "13. gs. (Slāvu Malalas hronikas ieraksts 1261)",
  },
  references: [
    "Jono Malalos kronikos 1261 m. slaviškasis intarpas (BRMŠ Vol. 1, 1996)",
    "Gintaras Beresnevičius: Dausos (1990) ir Baltų religinės reformos (1995)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Visuotinė lietuvių enciklopedija: Sovijaus mitas (https://www.vle.lt/)",
    "Visuotinė lietuvių enciklopedija: Sovijus (https://www.vle.lt/straipsnis/sovijus/)"
  ],
};

export const praamziusMeta: DeityMeta = {
  slug: "praamzius",
  name: "Praamžius",
  altNames: {
    en: "Praamžius, Pramžius, Praamžis",
    lt: "Praamžius, Pramžius, Prakorimas",
    lv: "Praamžius, Debesu tēvs",
  },
  domain: "God",
  epithet: {
    en: "Primordial Lord of eternity and cosmic order",
    lt: "Amžinybės, laiko ir visuotinės darnos kūrėjas",
    lv: "Mūžības, laika un pirmatnējās kārtības valdnieks",
  },
  summary: {
    en: "Praamžius (also Pramžius, Prakorimas) is the supreme Lithuanian theonym and epithet for the primordial celestial creator, representing beginningless time, the Great Deluge, and the establishment of cosmic moral order.",
    lt: "Praamžius (Pramžius, Prakorimas) — aukščiausiojo dangaus dievo teonimas ir epitetas lietuvių mitologijoje, reiškiantis bepradį laiką, kosminę tvarką, Didįjį tvaną ir pasaulio atgimimą.",
    lv: "Praamžius (Pramžius, Prakorimas) ir augstākā debesu dieva vārds un epitets lietuviešu mitoloģijā, kas iemieso mūžību, pirmatnējo laiku, Lielos plūdus un kosmiskās kārtības pamatus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Eternity", "Time", "First Cause", "Creation", "Cosmic Order", "Deluge", "Rainbow"],
  gallery: [],
  locations: [
    {
      id: "rambynas-hill",
      name: "Rambynas Sacred Hill",
      coordinates: [55.086, 21.905],
      region: "Lithuania",
      description: "A famous sacred mountain on the Nemunas river where sacred fires and libations were offered to the supreme celestial orderer in folklore and Romantic mythology.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "praamzius",
      significance: "Sacred hill site documented in Romantic mythology and deluge folktales where sky offerings were dedicated to Praamžius.",
    }
  ],
  materialLegacy: [
    "Sacred hill altar sites (alkakalniai)",
    "Oak grove libation sanctuaries",
    "Deluge myth and rainbow folklore cycles",
  ],
  symbols: [
    { label: "Element", detail: "Celestial sky vault, daylight, and rainbow (Linksminė)" },
    { label: "Attributes", detail: "Cosmic nutshell of salvation, traveler's staff, endless circle" },
    { label: "Flora", detail: "Sacred oak (ąžuolas) and hazelnut (riešutas)" },
    { label: "Offerings", detail: "Mead and beer libations, spring water, first fruits of harvest" },
  ],
  regionDetails: {
    en: "Lithuania, Samogitia & Pan-Baltic",
    lt: "Lietuva, Žemaitija ir visos baltų žemės",
    lv: "Lietuva, Žemaitija un visas baltu zemes",
  },
  tribe: {
    en: "Lithuanians, Samogitians, Balts",
    lt: "Lietuviai, žemaičiai, baltai",
    lv: "Lietuvieši, žemaiši, balti",
  },
  period: {
    en: "Archaic deluge folklore recorded 16th–19th c. (Stryjkowski 1582, Narbutt 1835)",
    lt: "Archajiškoji tvanų tautosaka, užfiksuota XVI–XIX a. (Strijkovskis 1582, Narbutas 1835)",
    lv: "Arhaiskā plūdu folklora, fiksēta 16.–19. gs. (Strijkovskis 1582, Narbuts 1835)",
  },
  references: [
    "Teodor Narbutt: Mitologia litewska (1835)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (2004)",
    "Maciej Stryjkowski: Kronika polska, litewska, żmódzka (1582: 'Prokorimos')",
    "Visuotinė lietuvių enciklopedija: Praamžius (https://www.vle.lt/straipsnis/praamzius/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/10255-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const zvorunaMeta: DeityMeta = {
  slug: "zvoruna",
  name: "Žvorūna",
  altNames: {
    en: "Žvorūna, Žvorūnė, Zvoruna",
    lt: "Žvorūna, Žvorūnė, Žvėrinė",
    lv: "Žvorūna, Meža māte",
  },
  domain: "God",
  epithet: {
    en: "Sovereign Mistress of wild beasts and the hunt",
    lt: "Laukinių žvėrių valdovė ir medžioklės globėja",
    lv: "Mežonīgo zvēru valdniece un medību sargātāja",
  },
  summary: {
    en: "Žvorūna (also Žvorūnė) is the ancient Baltic goddess of wild animals, predators, and the hunt, first recorded in 13th-century chronicles among King Mindaugas's deities. Complementing Medeina, she governs forest fauna and enforces the sacred balance of hunting.",
    lt: "Žvorūna (Žvorūnė) — senoji baltų laukinių žvėrių, plėšrūnų ir medžioklės deivė, minima XIII a. metraščiuose tarp karaliaus Mindaugo dievų. Kartu su Medeina ji valdo miško gyvūniją ir saugo medžioklės moralinę pusiausvyrą.",
    lv: "Žvorūna (Žvorūnė) ir sena baltu meža zvēru, plēsoņu un medību dieviete, kas 13. gs. hronikās minēta starp karaļa Mindauga dieviem. Līdzās Medeinai viņa valda pār meža faunu un uztur medību ētisko līdzsvaru.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(60, 80, 60, 0.28)",
  accent: "#4a7a5a",
  keywords: ["Hunt", "Wild Animals", "Forest", "Wolves", "Game", "Medeina"],
  gallery: [],
  locations: [
    {
      id: "sirveta-sacred-grove",
      name: "Sirvėta Sacred Forest & Hare Sanctuary",
      coordinates: [55.195, 26.248],
      region: "Lithuania",
      description: "Ancient Aukštaitian forest and cult stone complex (Kiškių bažnyčios / Vilko pėdos) associated with the royal 13th-century cult of Žvėrūna-Medeina.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "zvoruna",
      significance: "Sacred grove complex identified by archaeologists where hunters made offerings to the sovereign mistress of wolves and wild beasts.",
    }
  ],
  materialLegacy: [
    "Sacred cult stones (Kiškių bažnyčios / Vilko pėdos)",
    "Forest root libation sanctuaries and animal skull markers",
    "Wolf tooth and claw protective talismans",
  ],
  symbols: [
    { label: "Fauna", detail: "Wolf (her holy hound), hare, bear, stag, and elk" },
    { label: "Attributes", detail: "Zoomorphic wolf-maiden form (vilkmergė), sacred grove canopy" },
    { label: "Element", detail: "Dense primeval forest, autumn twilight, and hunting trail" },
    { label: "Offerings", detail: "First portion of game (meat, fat, blood), bread, salt, and honey at tree roots" },
  ],
  regionDetails: {
    en: "Lithuania (Aukštaitija, Samogitia) & Pan-Baltic",
    lt: "Lietuva (Aukštaitija, Žemaitija) ir visos baltų žemės",
    lv: "Lietuva (Aukštaitija, Žemaitija) un visas baltu zemes",
  },
  tribe: {
    en: "Lithuanians, Samogitians, Balts",
    lt: "Lietuviai, žemaičiai, baltai",
    lv: "Lietuvieši, žemaiši, balti",
  },
  period: {
    en: "13th Century (Hypatian Codex 1252, Malalas Chronicle 1261)",
    lt: "XIII a. (Ipatijaus metraštis 1252 m., Malalos kronika 1261 m.)",
    lv: "13. gs. (Hipātijas hronika 1252, Malalas hronika 1261)",
  },
  references: [
    "Hypatian Chronicle (1252) — BRMŠ Vol. 1 (1996)",
    "John Malalas Chronicle / Sovijus Myth (1261) — BRMŠ Vol. 1 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979) & Žvėrūna Medeina (1993)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Vykintas Vaitkevičius: Nauja Žvėrūnos-Medeinos perspektyva (Lietuvos archeologija 24, 2003)",
    "Visuotinė lietuvių enciklopedija: Žvorūnė (https://www.vle.lt/straipsnis/zvorune/)",
    "Visuotinė lietuvių enciklopedija: Medeina (https://www.vle.lt/straipsnis/medeina/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/140228-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const zemepatisMeta: DeityMeta = {
  slug: "zemepatis",
  name: "Žemėpatis",
  altNames: {
    en: "Žemėpatis, Žemėpatys, Žemininkas",
    lt: "Žemėpatis, Žemėpatys, Žemininkas",
    lv: "Žemēpatis, Mājas kungs, Sētas tēvs",
  },
  domain: "God",
  epithet: {
    en: "Lord of the Homestead and Cultivated Earth",
    lt: "Sodybos ir dirbamos žemės šeimininkas",
    lv: "Sētas un kultivētās zemes kungs",
  },
  summary: {
    en: "Žemėpatis (also Žemininkas) is the ancient Baltic god of the farmstead, cultivated soil, and domestic prosperity. As the masculine counterpart to Žemyna, he guards the household's fields, boundaries, granaries, and the sacred Žaltys grass snake.",
    lt: "Žemėpatis (Žemininkas) — senosios lietuvių religijos sodybos, dirbamos žemės ir ūkio gerovės dievas. Kaip Žemynos vyriškasis atitikmuo, jis saugo laukus, ežias, svirnus ir šventąjį naminį žaltį.",
    lv: "Žemēpatis (arī Žemininks, latviešu folklorā Mājas kungs) ir sena baltu sētas, apstrādātās zemes un saimniecības labklājības dievība. Kā Zemes mātes / Žemynas vīrišķais partneris viņš sargā laukus, robežas, klētis un svēto zalkti.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(60, 80, 60, 0.28)",
  accent: "#7a8a4a",
  keywords: ["Farmstead", "Cultivated Land", "Boundaries", "Domestic Prosperity", "Žaltys", "Sambariai"],
  gallery: [],
  locations: [
    {
      id: "raseiniai-farmstead-threshold",
      name: "Raseiniai Farmstead Boundary & Threshold",
      coordinates: [55.371, 23.117],
      region: "Lithuania",
      description: "A traditional Samogitian farmstead boundary site in the historic Raseiniai region where threshold libations and domestic rites were maintained.",
      siteType: "Household ritual sites",
      aura: "green",
      deity: "zemepatis",
      significance: "Bread, ale, and threshold libations were poured at farmstead boundary stones each spring to invoke Žemėpatis' protection over fields and livestock.",
    }
  ],
  materialLegacy: [
    "Farmstead boundary stones (ežių akmenys)",
    "Hearthstone and millstone offering niches",
    "Ceremonial beer ladles (kaušai) and first-furrow offering cups",
  ],
  symbols: [
    { label: "Fauna", detail: "Žaltys / grass snake (sacred domestic guardian), black rooster" },
    { label: "Attributes", detail: "Ceremonial beer ladle (kaušas), sheaf of ripe rye, bread loaf, boundary furrow" },
    { label: "Element", detail: "Cultivated soil, farmstead courtyard, hearth, granary (svirnas / klėtis)" },
    { label: "Offerings", detail: "Freshly baked rye bread, barley beer (sambarinis alus), milk, poultry, first grain" },
  ],
  regionDetails: {
    en: "Lithuania (Aukštaitija, Samogitia, Lithuania Minor) & Baltic",
    lt: "Lietuva (Aukštaitija, Žemaitija, Mažoji Lietuva) ir baltų kraštai",
    lv: "Lietuva (Augštaitija, Žemaitija, Mazā Lietuva) un baltu zemes",
  },
  tribe: {
    en: "Lithuanians, Samogitians, Balts",
    lt: "Lietuviai, žemaičiai, baltai",
    lv: "Lietuvieši, žemaiši, balti",
  },
  period: {
    en: "16th Century (Mažvydas 1547, Malecki 1551, Łasicki 1582, Praetorius c. 1690)",
    lt: "XVI a. (Mažvydas 1547 m., Maleckis 1551 m., Łasickis 1582 m., Pretorijus ~1690 m.)",
    lv: "16. gs. (Mažvīds 1547, Maleckis 1551, Lasickis 1582, Pretorijs ap 1690)",
  },
  references: [
    "Martynas Mažvydas: Catechismus (1547) — BRMŠ Vol. 2 (2001)",
    "Jan Łasicki: De diis Samagitarum (1582) — BRMŠ Vol. 2 (2001)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690) — BRMŠ Vol. 3 (2003)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Visuotinė lietuvių enciklopedija: Žemėpatis (https://www.vle.lt/straipsnis/zemepatis/)",
    "Visuotinė lietuvių enciklopedija: Dimstipatis (https://www.vle.lt/straipsnis/dimstipatis/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/153186-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const gabjaujaMeta: DeityMeta = {
  slug: "gabjauja",
  name: "Gabjauja",
  altNames: {
    en: "Gabjauja, Gabjaujė, Gabjaujis",
    lt: "Gabjauja, Gabjaujė, Gabjaujis",
    lv: "Gabjauja, Rijas māte",
  },
  domain: "God",
  epithet: {
    en: "Goddess of the Threshing Barn and Harvest Kiln",
    lt: "Jaujos ugnies ir nuimto derliaus deivė",
    lv: "Rijas uguns un novāktās ražas dieviete",
  },
  summary: {
    en: "Gabjauja (also Gabjaujė, Gabjaujis) is the Baltic goddess of the threshing barn (jauja) and harvest fire. As a specialized hypostasis of Gabija, she protects drying grain from destructive fires, rot, and dampness, ensuring the community's winter survival.",
    lt: "Gabjauja (Gabjaujė, Gabjaujis) — baltų jaujos ugnies ir nuimto derliaus deivė. Kaip Gabijos funkcinė hipostazė, ji saugo džiūstančius javus nuo pražūtingų gaisrų, pelėsio ir drėgmės, užtikrindama bendruomenės išlikimą žiemą.",
    lv: "Gabjauja (latviešu folklorā Rijas māte) ir sena baltu rijas uguns un novāktās ražas dieviete. Kā mājas uguns deivietes funkcionālā izpausme viņa sargā žūstošo labību no postošiem ugunsgrēkiem un puves.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Harvest", "Grain barn", "Fire", "Agricultural safety", "Threshing", "Jauja", "Rija"],
  gallery: [],
  locations: [
    {
      id: "telsiai-open-air-museum",
      name: "Telšiai Samogitian Village Open-Air Museum",
      coordinates: [55.977, 22.258],
      region: "Lithuania",
      description: "A historic Samogitian open-air museum in Telšiai featuring authentic 18th–19th century timber threshing barns (jaujos) with hearth drying chambers.",
      siteType: "Field altars",
      aura: "amber",
      deity: "gabjauja",
      significance: "A small fire was kept burning in the barn's drying chamber; bread loaves and the first sheaf of the harvest were offered to Gabjauja before threshing began.",
    }
  ],
  materialLegacy: [
    "Fieldstone kiln hearths (jaujos krosnys / krāsnis)",
    "Wooden threshing pestles (brūkliai) and ceremonial beer ladles",
    "Preserved timber threshing barns (jaujos / rijas)",
  ],
  symbols: [
    { label: "Element", detail: "Kiln fire, glowing embers, grain drying racks (ardai / ārdi)" },
    { label: "Fauna", detail: "Solid-colored rooster (black or white, solar/fire bird)" },
    { label: "Attributes", detail: "Kiln hearth stones, sheaf of unthreshed rye, threshing flail (spragilas), bread loaf" },
    { label: "Offerings", detail: "Boiled rooster, freshly baked bread from new grain, beer poured onto hot kiln stones" },
  ],
  regionDetails: {
    en: "Lithuania (Samogitia, Aukštaitija, Lithuania Minor) & Baltic",
    lt: "Lietuva (Žemaitija, Aukštaitija, Mažoji Lietuva) ir baltų kraštai",
    lv: "Lietuva (Žemaitija, Augštaitija, Mazā Lietuva) un baltu zemes",
  },
  tribe: {
    en: "Lithuanians, Samogitians, Balts",
    lt: "Lietuviai, žemaičiai, baltai",
    lv: "Lietuvieši, žemaiši, balti",
  },
  period: {
    en: "16th–17th Century (Łasicki 1582, Sapūnas & Schultz 1673, Praetorius c. 1690)",
    lt: "XVI–XVII a. (Łasickis 1582 m., Sapūnas ir Šulcas 1673 m., Pretorijus ~1690 m.)",
    lv: "16.–17. gs. (Lasickis 1582, Sapūns un Šulcs 1673, Pretorijs ap 1690)",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum (1582) — BRMŠ Vol. 2 (2001)",
    "Kristupas Sapūnas & Teofilis Šulcas: Compendium Grammaticae Lithvanicae (1673)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690) — BRMŠ Vol. 3 (2003)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979) & Vulcanus Jagaubis (1976)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Visuotinė lietuvių enciklopedija: Gabija (https://www.vle.lt/straipsnis/gabija/)",
    "Visuotinė lietuvių enciklopedija: Jauja (https://www.vle.lt/straipsnis/jauja/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/102927-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const pilvytisMeta: DeityMeta = {
  slug: "pilvytis",
  name: "Pilvytis",
  altNames: {
    en: "Pilvytis, Pilnitis, Pilwitus, Pilvittus",
    lt: "Pilvytis, Pilnitis, Pilvytis",
    lv: "Pilvītis, Pilnītis",
  },
  domain: "God",
  epithet: {
    en: "Old Prussian God of Wealth and Overflowing Granaries",
    lt: "Prūsų turtų ir pilnų aruodų dievas",
    lv: "Prūšu bagātības un pilnu klētu dievs",
  },
  summary: {
    en: "Pilvytis (historically Pilnitis / Pilwitus) is the Old Prussian and Baltic god of wealth, material abundance, and overflowing granaries (deus divitiarum). Derived from the Baltic root *piln- ('full/abundant'), he ensures that farmstead storage bins remain packed with grain through the winter.",
    lt: "Pilvytis (istoriniuose šaltiniuose — Pilnitis, Pilwitus) yra prūsų ir baltų turtų, gausumo ir pilnų kluonų bei aruodų dievas (deus divitiarum). Kilęs iš baltų šaknies *piln- („pilnas“), jis laiduoja gausų derlių klojimuose ir saugo nuo bado.",
    lv: "Pilvytis (vēsturiskajos avotos Pilnitis, Pilwitus) ir prūšu un baltu bagātības, pārticības un pilnu klēšu dievs (deus divitiarum). Cēlies no saknes *piln- („pilns“), viņš nodrošina graudu krājumu pārpilnību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Wealth", "Abundance", "Granaries", "Prosperity", "Material security", "Old Prussia", "Pilnitis"],
  gallery: [],
  locations: [
    {
      id: "suduva-historic-granaries",
      name: "Sūduva Agricultural Heartland & Historic Granaries",
      coordinates: [54.639, 22.763],
      region: "Lithuania",
      description: "Fertile agricultural heartland of Sūduva (Yotvingia) where communal granaries (klėtis) stood as the centre of harvest abundance rites documented in the 16th-century Sudovian Book.",
      siteType: "Field altars",
      aura: "amber",
      deity: "pilvytis",
      significance: "First portions of every harvest were set aside and ritually offered to Pilvytis (Pilwitus) to ensure the granary remained full through the winter months.",
    }
  ],
  materialLegacy: [
    "Historic timber granaries (klėtys / svirnai) and grain bins (aruodai)",
    "Wooden grain measures (saikai / pūrai) and harvest storage vessels",
  ],
  symbols: [
    { label: "Domain", detail: "Material wealth, harvest abundance, overflowing granaries" },
    { label: "Attributes", detail: "Grain bins (aruodai), sheaf of heavy ears, wooden grain measure, beer scoop" },
    { label: "Offerings", detail: "First measure of threshed grain, newly baked bread, spring beer libation" },
  ],
  regionDetails: {
    en: "Old Prussia (Sūduva, Sambia, Pomesania) & Baltic",
    lt: "Senoji Prūsija (Sūduva, Semba, Pamedė) ir baltų žemės",
    lv: "Senā Prūsija (Sudāvija, Semba, Pamedija) un baltu zemes",
  },
  tribe: {
    en: "Sudovians, Old Prussians, Lithuanians",
    lt: "Sūduviai, senprūsiai, lietuviai",
    lv: "Sudāvieši, vecie prūši, lietuvieši",
  },
  period: {
    en: "16th Century (Sudovian Book c. 1520s, Synod 1530, Malecki 1551, Łasicki 1582)",
    lt: "XVI a. (Sūduvių knygelė ~1520 m., Sinodo nutarimas 1530 m., Maleckis 1551 m., Łasickis 1582 m.)",
    lv: "16. gs. (Sudāviešu grāmatiņa ap 1520, Sinodes lēmums 1530, Maleckis 1551, Lasickis 1582)",
  },
  references: [
    "Sudauer Büchlein / Sudovian Book (c. 1520–1530: 'Pilwitus/Pilnitis deus divitiarum')",
    "Constitutiones Synodales Sambiensis et Pomesaniensis (1530: 'Pilnitis der vberfluß machet')",
    "Jan Malecki: Libellus de sacrificiis et idolatria veterum Borussorum (1551)",
    "Alessandro Guagnini: Sarmatiae Europeae Descriptio (1578)",
    "Jonas Bretkūnas: Chronicon Borussiae (1578–1580)",
    "Jan Łasicki: De diis Samagitarum (1582) — BRMŠ Vol. 2 (2001)",
    "Vytautas Mažiulis: Prūsų kalbos etimologijos žodynas, Vol. 3 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas II: Sūduvių knygelė (2020)",
    "Visuotinė lietuvių enciklopedija: Pilvytis (https://www.vle.lt/straipsnis/pilvytis/)",
  ],
};

export const birzulisMeta: DeityMeta = {
  slug: "birzulis",
  name: "Biržulis",
  altNames: {
    en: "Biržulis, Beržulis",
    lt: "Biržulis, Beržulis",
    lv: "Biržulis, Bērzulis",
  },
  domain: "God",
  epithet: {
    en: "Spirit of the Birch Groves and Vernal Renewal",
    lt: "Beržynų ir pavasario atgimimo dvasia",
    lv: "Bērzu biržu un pavasara atdzimšanas gars",
  },
  summary: {
    en: "Biržulis (also Beržulis) is the Baltic spirit of birch groves and spring renewal, recorded by Jan Łasicki (1582). Modern scholarship analyzes the figure as a dendrolatric birch numen or a 16th-century toponymic recording connected with the sacred prehistoric landscape of Lake Biržulis in Samogitia.",
    lt: "Biržulis (arba Beržulis) — baltų beržynų ir pavasario atgimimo dvasia, minima Jano Lasickio (1582 m.). Mokslo tyrimuose vertinamas kaip dendrolatrinis beržų kulto globėjas arba toponiminė sąsaja su sakraliuoju Biržulio ežero kraštovaizdžiu Žemaitijoje.",
    lv: "Biržulis (arī Bērzulis) ir baltu bērzu biržu un pavasara atdzimšanas gars, fiksēts Jana Lasicka hronikā (1582). Mūsdienu pētījumos saistīts ar koku kulta tradīcijām un Žemaitijas Biržuļa ezera sakrālo telpu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Birch forest", "Spring sap", "Renewal", "White birch", "Spring", "Lake Biržulis", "Samogitia"],
  gallery: [],
  locations: [
    {
      id: "samogitia-birzulis-lake",
      name: "Lake Biržulis Sacred Grove",
      coordinates: [55.770, 22.428],
      region: "Lithuania",
      description: "A stand of ancient white birches near Lake Biržulis in Telšiai district (Samogitia), an ancient sacral landscape associated with spring sap-rise rites.",
      siteType: "Sacred groves",
      aura: "green",
      deity: "birzulis",
      significance: "In early spring, small clay cups of fresh birch sap were left at the grove's oldest tree as offerings to honour the spirit of forest renewal.",
    }
  ],
  materialLegacy: [
    "Lake Biržulis archaeological complex (Donkalnis and Spiginas Mesolithic/Neolithic ritual sites)",
    "Traditional birch-bark vessels (tošinės dėžutės) and spring sap collection tools",
  ],
  symbols: [
    { label: "Flora", detail: "White birch (Betula pendula), birch bark (tošis / tāss), green catkins" },
    { label: "Attributes", detail: "Spring sap (beržų sula / bērzu sula), Whitsuntide green boughs (meijas), bathhouse whisk (vanta)" },
    { label: "Domain", detail: "Vernal sap rise, birch groves, seasonal forest renewal" },
  ],
  regionDetails: {
    en: "Lithuania (Samogitia, Aukštaitija) & Baltic",
    lt: "Lietuva (Žemaitija, Aukštaitija) ir baltų kraštai",
    lv: "Lietuva (Žemaitija, Augštaitija) un baltu zemes",
  },
  tribe: {
    en: "Samogitians, Lithuanians, Balts",
    lt: "Žemaičiai, lietuviai, baltai",
    lv: "Žemaiši, lietuvieši, balti",
  },
  period: {
    en: "16th Century (Łasicki 1582)",
    lt: "XVI a. (Łasicki 1582 m.)",
    lv: "16. gs. (Lasickis 1582)",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum (1582) — BRMŠ Vol. 2 (2001)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1962)",
    "Vytautas Ališauskas: Jano Lasickio Samogitijos dievai: teocentrinis modelis ar apverstas pasaulis? (2003 / 2012)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (2001)",
    "Visuotinė lietuvių enciklopedija: Jan Łasicki (https://www.vle.lt/straipsnis/jan-lasicki/)",
    "Visuotinė lietuvių enciklopedija: Biržulis (https://www.vle.lt/straipsnis/birzulis/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/3685-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const kirnisMeta: DeityMeta = {
  slug: "kirnis",
  name: "Kirnis",
  altNames: {
    en: "Kirnis, Kirnus",
    lt: "Kirnis, Kirnys",
    lv: "Kirnis, Ķirnis",
  },
  domain: "God",
  epithet: {
    en: "Guardian of Copses, Cherry Trees, and Orchard Flora",
    lt: "Krūmynų, vyšnių ir sodų globėjas",
    lv: "Krūmāju, ķiršu un dārzu aizbildnis",
  },
  summary: {
    en: "Kirnis is recorded in Jan Łasicki's 16th-century treatise (1582) as the guardian spirit of cherry trees at a Samogitian lake fortress. Modern scholarship analyzes Kirnis as a dendrolatric numen of marshy copses and brushwood derived from Baltic *kirna ('waterlogged thicket, stump'), paralleled by Latvian Krūmu māte.",
    lt: "Kirnis Jano Lasickio XVI a. traktate (1582 m.) įvardytas kaip prie paežerės tvirtovės augančių vyšnių globėjas. Šiuolaikinis mokslas jį vertina kaip krūmynų ir pelkėtų lūžtvių dendrolatrinę dvasią (iš baltų *kirna), kurios atitikmuo latvių tradicijoje yra Krūmu māte.",
    lv: "Kirnis Jana Lasicka 16. gs. traktātā (1582) fiksēts kā ezera cietokšņa ķiršu koku aizgādnis. Akadēmiskajos pētījumos saistīts ar baltu koku kultu un vārdu *kirna ('purvains krūmājs'), kuram latviešu folklorā atbilst Krūmu māte.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Cherry trees", "Orchards", "Harvest", "Fruit", "Spring blossom", "Plateliai", "Samogitia"],
  gallery: [],
  locations: [
    {
      id: "samogitia-plateliai-kirnis-grove",
      name: "Lake Plateliai Castle Island Cherry Grove",
      coordinates: [56.043, 21.815],
      region: "Lithuania",
      description: "The historical island fortress and shore groves of Lake Plateliai in Samogitia, identified by historical research as the site where royal surveyor Jakub Laskowski recorded the cherry tree rites dedicated to Kirnis.",
      siteType: "Sacred groves",
      aura: "green",
      deity: "kirnis",
      significance: "Site of the 16th-century recorded rite where wax candles were fixed in tree branches and cockerels offered to propitiate the guardian of orchard trees.",
    }
  ],
  materialLegacy: [
    "Lake Plateliai Castle Island (Pilies sala) archaeological complex and medieval bridge site",
    "Traditional Baltic orchard candle-lighting and apiary protection traditions",
  ],
  symbols: [
    { label: "Flora", detail: "Wild cherry (Prunus cerasus / padus), flowering brushwood, swamp copses (kirna)" },
    { label: "Sacred offerings", detail: "Slaughtered cockerel (gallus mactatus), lit wax candles (candelas cereas) fixed in branches" },
    { label: "Domain", detail: "Orchards, lake fortress groves, marshland brushwood" },
  ],
  regionDetails: {
    en: "Lithuania (Samogitia) & Baltic",
    lt: "Lietuva (Žemaitija) ir baltų kraštai",
    lv: "Lietuva (Žemaitija) un baltu zemes",
  },
  tribe: {
    en: "Samogitians, Lithuanians, Balts",
    lt: "Žemaičiai, lietuviai, baltai",
    lv: "Žemaiši, lietuvieši, balti",
  },
  period: {
    en: "16th Century (Łasicki 1582)",
    lt: "XVI a. (Łasicki 1582 m.)",
    lv: "16. gs. (Lasickis 1582)",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum (1582; publ. 1615) — BRMŠ Vol. 2 (2001)",
    "Vytautas Ališauskas: Jono Lasickio pasakojimas apie žemaičių dievus: tekstas ir kontekstai (2012)",
    "Rolandas Kregždys: Lietuvių kalbos leksemų morfologinio ir semasiologinio lygmenų interferencinio ryšio kvintesencija: Kirnis (Acta Linguistica Lithuanica 70, 2014)",
    "Dalia Senvaitytė: Mitologinės Kirnio interpretacijos (Liaudies kultūra, 2002, Nr. 6)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (2001)",
    "Krišjāņa Barona Dainu skapis: Daina No. 34048-0 (Krūmu māte, Mežu māte)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/3685-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const dievaDeliMeta: DeityMeta = {
  slug: "dieva-deli",
  name: "Dieva dēli",
  altNames: {
    en: "Dieva dēli, Sons of Dievs, Baltic Divine Twins",
    lt: "Dieva dēli, Dievo sūneliai, Ašvieniai",
    lv: "Dieva dēli, Debesu jātnieki",
  },
  domain: "God",
  epithet: {
    en: "Divine Twins, Celestial Horse-Riders of the Sky",
    lt: "Dieviškieji dvyniai, dangiškieji žirgininkai",
    lv: "Dieva dēli — debesu jātnieki un zvaigžņu brāļi",
  },
  summary: {
    en: "Dieva dēli are the celestial divine twins of Baltic mythology, direct cognates to the Proto-Indo-European Divine Twins (*Diwós Sūnéwes, Vedic Aśvins, Greek Dioskouroi). Riding across the Sky Mountain on golden or gray steeds, they court the Daughters of the Sun (Saules meitas), unlock the earth in spring, and serve as the supreme protectors of horses and travelers.",
    lt: "Dieva dēli (liet. Dievo sūneliai / Ašvieniai) — baltų mitologijos dieviškieji dvyniai, tiesiogiai tęsiantys indoeuropiečių dangiškųjų dvynių tradiciją (*Diwós Sūnéwes, vedų Ašvinus, graikų Dioskūrus). Jodami per Dangaus kalną auksiniais ar širvais žirgais, jie veda Saulės dukteris, atrakina žemę pavasariui ir globoja arklius bei keliautojus.",
    lv: "Dieva dēli ir latviešu un baltu mitoloģijas debesu dvīņi, kas tieši pārmanto protoindoeiropiešu dievišķo dvīņu tradīciju (*Diwós Sūnéwes, vēdiskos Ašvinus, sengrieķu Dioskūrus). Jājot pa Debesu kalnu uz zelta vai pelēkiem zirgiem, viņi prec Saules meitas, atslēdz zemi pavasarim un ir augstākie zirgu un ceļinieku aizbildņi.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Divine twins", "Horses", "Celestial riders", "Agriculture", "Protection", "Debesu kalns", "Saules meitas"],
  gallery: [],
  locations: [
    {
      id: "vidzeme-twin-hilltop",
      name: "Vidzeme Twin Hilltop",
      coordinates: [56.870, 25.960],
      region: "Latvia",
      description: "A pair of adjacent hilltops in the Vidzeme highlands associated with the divine twins, where Midsummer horse races were held in their honour.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "dieva-deli",
      significance: "At summer solstice and spring horse turnout, young men raced horses between the twin hills to re-enact the celestial ride of the Dieva dēli courting the Daughters of the Sun.",
    }
  ],
  materialLegacy: [
    "Crossed horse-head roof gable carvings (žirgeliai / lėkiai / zirgu galvas) in traditional Baltic wooden architecture",
    "Spring horse-blessing, nocturnal pasturing, and egg-offering traditions (Ūsiņi / Jurginės) across Latvia and Lithuania",
    "Sacred twin-hilltop landscape complexes in Vidzeme and Aukštaitija",
  ],
  symbols: [
    { label: "Celestial fauna", detail: "Pair of matching steeds (pelēki, zelta, sirmi zirgi / širvi žirgeliai)" },
    { label: "Astral regalia", detail: "Golden spurs (zelta pieši), silver riding coats, golden whips and swords, morning dew (rasa)" },
    { label: "Architectural emblem", detail: "Crossed horse heads (žirgeliai / zirgu galvas / lėkiai) on roof gables" },
    { label: "Sacred realm", detail: "Sky Mountain (Debesu kalns), morning horizon, celestial sea, horse stables" },
  ],
  regionDetails: {
    en: "Latvia, Lithuania (Pan-Baltic)",
    lt: "Latvija, Lietuva (visos Baltijos gentys)",
    lv: "Latvija, Lietuva (visas Baltijas ciltis)",
  },
  tribe: {
    en: "All Baltic tribes (Pan-Baltic)",
    lt: "Visos baltų gentys",
    lv: "Visas Baltijas ciltis",
  },
  period: {
    en: "Proto-Indo-European origin; documented in 19th–20th c. dainas",
    lt: "Protoindoeuropietiška kilmė; dokumentuota 19–20 a. dainose",
    lv: "Protoindoeiropiešu izcelsme; dokumentēta 19.–20. gs. dainās",
  },
  references: [
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "Krišjānis Barons: Latvju dainas (Dainu skapis, LD 33731–34075: Debesu sēta)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/10307-latvie%C5%A1u-mitolo%C4%A3ija)",
    "Latvijas Nacionālā enciklopēdija: Ūsiņi (https://enciklopedija.lv/skirklis/114948-%C5%AAsi%C5%86i)",
    "Visuotinė lietuvių enciklopedija: Dioskūrai (https://www.vle.lt/straipsnis/dioskurai/)",
  ],
};

export const saulesMeitasMeta: DeityMeta = {
  slug: "saules-meitas",
  name: "Saules meitas",
  altNames: {
    en: "Saules meitas, Daughters of the Sun, Solar Maidens",
    lt: "Saules meitas, Saulės dukterys, Saulės dukros",
    lv: "Saules meitas, Saules meita, Debesu jaunavas",
  },
  domain: "God",
  epithet: {
    en: "Daughters of the Sun, Radiant Celestial Maidens",
    lt: "Saulės dukterys, dangiškosios mergelės",
    lv: "Saules meitas — debesu jaunavas un saules staru audējas",
  },
  summary: {
    en: "Saules meitas are the golden-haired celestial daughters of the Sun in Baltic mythology, representing atmospheric dawn light, sunset glow, and morning dew. As the central brides of the celestial wedding cycle (Debesu kāzas), they are courted by the Dieva dēli, wash Saule's radiant garments in the cosmic sea, and serve as supreme patronesses of spinning, weaving, and bridal dowries.",
    lt: "Saules meitas (liet. Saulės dukterys) — dangiškosios deivės Saulės dukterys baltų mitologijoje, personifikuojančios aušros rausvumą, vakaro žarą, rytmetinę rasą bei planetines šviesules. Būdamos pagrindinės dangiškųjų vestuvių (Debesu kāzas) nuotakos, jos yra Dievo sūnelių piršlybų objektas, skalbia Saulės auksines drobes dangiškojoje jūroje ir globoja moterų verpimą, audimą bei kraitį.",
    lv: "Saules meitas ir latviešu un baltu mitoloģijas zeltmatainās debesu jaunavas, kas iemieso rītausmas sārtumu, vakara krēslu, rasu un saules staru vizuļošanu. Būdamas galvenās debesu kāzu līgavas, viņas prec Dieva dēli, mazgā un žāvē Saules zelta villainītes debesu jūrmalā un ir augstākās vērpēju, audēju un pūra darinātāju aizbildnes.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sunlight", "Weaving", "Celestial maidens", "Dawn/dusk", "Dowry", "Debesu kāzas", "Dieva dēli"],
  symbols: [
    { label: "Sacred light & dew", detail: "Morning dew (rasa), dawn twilight, sunset glow, sunbeams" },
    { label: "Celestial regalia", detail: "Golden crown (zelta vainags / kronis), golden ring (zelta gredzentiņš), silver brooches (saktas), golden shoes (zelta kurpes)" },
    { label: "Textile & craft tools", detail: "Golden distaff (zelta ērkulis), golden loom, silver hay rake, gossamer bee-wing shawls (bites spārnu villainītes)" },
    { label: "Sacred realm", detail: "Sky Mountain (Debesu kalns), Tree of Dawn (Austras koks), celestial Sea shore (Debesu jūra)" },
  ],
  locations: [
    {
      id: "latvia-amber-shore-sun",
      name: "Amber Shore of the Sun Daughters",
      coordinates: [56.5, 21.0],
      region: "Latvia",
      description: "The amber-strewn Liepāja and Curonian coastline where Saules meitas were envisioned stepping into the dawn surf, trailing golden sunlight across the Baltic waves.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "saules-meitas",
      significance: "At the summer solstice, young women waded into the morning surf at sunrise, casting flower wreaths onto the waves as offerings to the daughters of the Sun.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Midsummer (Jāņi / Rasos) sunrise dew-bathing and flower-wreath water-casting customs across Latvia and Lithuania",
    "Traditional bridal dowry (pūrs / kraitis) blessing songs and textile-weaving rituals invoking the solar maidens",
    "Classical mythological dainas in Krišjāņa Barona Dainu skapis (LD 33731–34075) dedicated to the celestial wedding",
  ],
  regionDetails: {
    en: "Latvia, Lithuania (Pan-Baltic)",
    lt: "Latvija, Lietuva (visos Baltijos gentys)",
    lv: "Latvija, Lietuva (visas Baltijas ciltis)",
  },
  tribe: {
    en: "All Baltic tribes (Pan-Baltic)",
    lt: "Visos baltų gentys",
    lv: "Visas Baltijas ciltis",
  },
  period: {
    en: "Proto-Indo-European origin; documented in 19th–20th c. dainas",
    lt: "Protoindoeuropietiška kilmė; dokumentuota 19–20 a. dainose",
    lv: "Protoindoeiropiešu izcelsme; dokumentēta 19.–20. gs. dainās",
  },
  references: [
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "Krišjānis Barons: Latvju dainas (Dainu skapis, LD 33731–34075: Debesu sēta / Saule, Mēness, Auseklis, zvaigznes. Dieva dēli un Saules meitas)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Vaira Vīķe-Freiberga: Saules dainas (1988)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/26197-latvie%C5%A1u-mitolo%C4%A3ija)",
    "Latvijas Nacionālā enciklopēdija: Jāņi tradicionālajā kultūrā (https://enciklopedija.lv/skirklis/114979)",
    "Visuotinė lietuvių enciklopedija: Saulė (https://www.vle.lt/straipsnis/saule/)",
  ],
};

export const jurasMateMeta: DeityMeta = {
  slug: "juras-mate",
  name: "Jūras māte",
  altNames: {
    en: "Jūras māte, Mother of the Sea, Sea Mother",
    lt: "Jūras māte, Jūros motina, Jūros motė",
    lv: "Jūras māte, Mierjemā, Jūras valdniece",
  },
  domain: "God",
  epithet: {
    en: "Mother of the Sea, Sovereign of the Oceanic Depths",
    lt: "Jūros motina, vandenų gelmių valdovė",
    lv: "Jūras māte — jūras dzelmes un zivju ganāmpulku valdniece",
  },
  summary: {
    en: "Jūras māte is the supreme goddess of the Baltic Sea in Latvian mythology, commanding marine depths, currents, swells, and fish shoals. Residing at the seabed where she measures silver coins and casts golden amber ashore, she serves as the revered protector and arbiter of coastal fishermen who offer her beer and bread libations before setting sail.",
    lt: "Jūras māte (liet. Jūros motina) — aukščiausioji Baltijos jūros deivė latvių mitologijoje, valdanti vandenų gelmes, bangas, povandenines sroves bei žuvų kaimenes. Gyvendama jūros dugne, kur matuoja sidabro dūlerius ir į krantą meta gintarą, ji yra pakrantės žvejų globėja ir teisėja, kuriai prieš išplaukiant buvo liejamos alaus ir pieno libacijos.",
    lv: "Jūras māte ir augstākā Baltijas jūras dievība latviešu mitoloģijā, kas pārvalda jūras dzelmi, viļņus, straumes un visus zivju ganāmpulkus. Mītot jūras dibenā, kur mēro sudraba dālderus un izskalo dzintaru, viņa ir piekrastes zvejnieku galvenā aizbildne un soģe, kurai pirms laivu iestumšanas jūrā tika ziedots alus, piens un maize.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sea", "Waves", "Fish", "Amber", "Sailors", "Fishermen", "Mātes", "Baltic Sea"],
  symbols: [
    { label: "Ocean elements", detail: "White sea-foam (jūras putas), breaker waves (baltas sagšas), Baltic amber, deep sea boulder" },
    { label: "Marine fauna", detail: "Fish herds (herring, flounder, salmon, cod), marine seals (roņi), seagulls" },
    { label: "Ritual offerings", detail: "Draughts of beer, sweet milk, bread with salt, silver coins (dālderīši), first catch" },
    { label: "Sacred loci", detail: "Baltic Sea seabed (jūras dibens), Cape Kolka (Kolkasrags), coastal dune bars" },
  ],
  locations: [
    {
      id: "ventspils-sea-coast",
      name: "Ventspils Sea Coast",
      coordinates: [57.4, 21.6],
      region: "Latvia",
      description: "The windswept Baltic coastline near Ventspils, where Latvian fishermen cast offerings into the waves before setting out to sea.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "juras-mate",
      significance: "Fishermen poured beer or threw bread onto the waves before each voyage, invoking Jūras māte's protection and asking her to fill their nets with fish.",
    },
    {
      id: "kolka-surge-watch",
      name: "Cape Kolka (Kolkasrags)",
      coordinates: [57.758, 22.603],
      region: "Latvia",
      description: "The prominent coastal horn where the open Baltic Sea (Dižjūra) and the Gulf of Riga (Mazjūra) collide in perpetual wave turmoil.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "juras-mate",
      significance: "The foremost mythic site of wave collision, where coastal Livonians and Latvians invoked Jūras māte and Bangu māte to pacify the clash of the two seas.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Pre-launch sea-libation customs (pouring beer and casting salted bread into incoming waves) along Kurzeme and Vidzeme",
    "Memorial wreath-casting rituals on beach dunes commemorating fishermen lost at sea without graves on land",
    "Classical maritime daina cycles in Krišjāņa Barona Dainu skapis (LD 30770–30950) dedicated to the Sea Mother",
  ],
  regionDetails: {
    en: "Coastal Latvia & Lithuania (Kurzeme, Vidzeme, Livonian Coast, Curonian Spit)",
    lt: "Pakrantės Latvija ir Lietuva (Kuržemė, Vidžemė, Lyvių pakrantė, Kuršių nerija)",
    lv: "Piekrastes Latvija un Lietuva (Kurzeme, Vidzeme, Lībiešu krasts, Kuršu kāpas)",
  },
  tribe: {
    en: "Latvians, Curonians, Livonians",
    lt: "Latviai, kuršiai, lyviai",
    lv: "Latvieši, kurši, lībieši",
  },
  period: {
    en: "17th Century (Paul Einhorn 1636, 1649); 19th–20th c. dainas",
    lt: "XVII a. (Paul Einhorn 1636, 1649 m.); XIX–XX a. dainos",
    lv: "17. gs. (Paul Einhorn 1636, 1649); 19.–20. gs. dainas",
  },
  references: [
    "Paul Einhorn: Reformatio Gentis Letticae (1636) & Historia Lettica (1649)",
    "Krišjānis Barons: Latvju dainas (Dainu skapis, LD 30770–30950: Jūrniecības un zvejniecības dziesmas)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Vaira Vīķe-Freiberga: Saules dainas (1988)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/26197-latvie%C5%A1u-mitolo%C4%A3ija)",
    "Visuotinė lietuvių enciklopedija: Bangpūtys (https://www.vle.lt/straipsnis/bangputys/)",
  ],
};

export const udensMateMeta: DeityMeta = {
  slug: "udens-mate",
  name: "Ūdens māte",
  altNames: {
    en: "Ūdens māte, Mother of Fresh Water, Water Mother",
    lt: "Ūdens māte, Vandens motina, Vandens motė",
    lv: "Ūdens māte, Upes māte, Avota māte",
  },
  domain: "God",
  epithet: {
    en: "Mother of Fresh Water, Guardian of Springs and Rivers",
    lt: "Gėlo vandens motina, šaltinių ir upių globėja",
    lv: "Ūdens māte — saldūdeņu, avotu un upju aizbildne",
  },
  summary: {
    en: "Ūdens māte is the supreme goddess of inland freshwater in Baltic mythology, presiding over rivers, lakes, sacred springs, and domestic wells. As the guardian of life-giving water and healing dawn springs, she receives silver coin and woven ribbon offerings and oversees the sacred boundary between the living world and the ancestral realm.",
    lt: "Ūdens māte (liet. Vandens motina) — aukščiausioji vidaus gėlųjų vandenų deivė baltų mitologijoje, valdanti upes, ežerus, šventuosius šaltinius bei sodybų šulinius. Būdama gyvybę teikiančio bei gydomojo aušros vandens globėja, ji priima sidabro monetų bei austų juostų aukas ir sergi sakralią ribą tarp šio pasaulio ir vėlių karalystės.",
    lv: "Ūdens māte ir augstākā iekšzemes saldūdeņu dievība latviešu mitoloģijā, kas pārrauga upes, ezerus, svētavotus un sētas akas. Būdama dzīvības uzturētāja un dziednieciskā rīta ūdens sargātāja, viņa saņem sudraba naudas un prievīšu ziedojumus un pārrauga svēto robežu starp šo sauli un viņsauli.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fresh water", "Lakes", "Springs", "Wells", "Purity", "Life transitions", "Mātes", "Healing"],
  symbols: [
    { label: "Water elements", detail: "Freshwater spring (svētavots), clear riverbend, rising water bubbles, water reeds" },
    { label: "Votive objects", detail: "Silver coins (sudraba nauda), woven wool ribbons (prievītes / dzīpari), bread with salt" },
    { label: "Sacred fauna", detail: "Silver pike (līdakas), wild ducks, white swans, grass snakes (zalkši)" },
    { label: "Sacred realm", detail: "Hillside springheads, river confluences, Gauja sandstone caves, domestic wells" },
  ],
  locations: [
    {
      id: "cesis-svetavots-spring",
      name: "Cēsis Svētavots (Gauja Sacred Spring)",
      coordinates: [57.301, 25.295],
      region: "Latvia",
      description: "An ancient natural sacred sandstone cave spring in the Gauja valley near Cēsis, historically celebrated as a sanctuary where offerings of coins, ribbons, and bread were dedicated to Ūdens māte.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "udens-mate",
      significance: "Women and healers offered silver coins, ribbons, and bread at this spring at sunrise to receive Ūdens māte's blessings for health, sight restoration, and life transitions.",
    },
    {
      id: "bolenu-eye-spring",
      name: "Bolēnu Eye Sacred Spring (Bolēnu acs)",
      coordinates: [56.915, 26.012],
      region: "Latvia",
      description: "A prominent healing spring in the Vidzeme highlands flowing eastward, historically venerated for sunrise eye-healing and votive rituals.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "udens-mate",
      significance: "Visited before sunrise in total silence, where offerings of silver coins and woolen threads were left in exchange for curative spring water.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Votive offerings of silver coins, bread, and woven ribbons deposited at sacred springs (svētavoti) across Latvia and Lithuania",
    "Silent dawn eastward-flowing water washing rituals (mēmā mazgāšanās) for lustral healing and bridal purification",
    "Classical freshwater dainas in Krišjāņa Barona Dainu skapis (LD 30774, LD 30890, LD 31009) dedicated to the Water Mother",
  ],
  regionDetails: {
    en: "Latvia & Lithuania (Pan-Baltic freshwater cult)",
    lt: "Latvija ir Lietuva (visas gėlųjų vandenų kulto arealas)",
    lv: "Latvija un Lietuva (visā Baltijas saldūdeņu kulta areālā)",
  },
  tribe: {
    en: "Latvians, Lithuanians, Curonians, Semigallians, Selonians",
    lt: "Latviai, lietuviai, kuršiai, žiemgaliai, sėliai",
    lv: "Latvieši, lietuvieši, kurši, zemgaļi, sēļi",
  },
  period: {
    en: "17th Century (Paul Einhorn 1636, 1649); 19th–20th c. dainas",
    lt: "XVII a. (Paul Einhorn 1636, 1649 m.); XIX–XX a. dainos",
    lv: "17. gs. (Paul Einhorn 1636, 1649); 19.–20. gs. dainas",
  },
  references: [
    "Paul Einhorn: Reformatio Gentis Letticae (1636) & Historia Lettica (1649)",
    "Krišjānis Barons: Latvju dainas (Dainu skapis, LD 30770–31050: Ūdens un zvejniecības dziesmas)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Daiva Vaitkevičienė: Ugnis ir vanduo baltų mitologijoje (2014)",
    "Vykintas Vaitkevičius: Alkai: baltų šventviečių studija (2003)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/117399-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const vejaMateMeta: DeityMeta = {
  slug: "veja-mate",
  name: "Vēja māte",
  altNames: {
    en: "Vēja māte, Mother of the Wind, Wind Mother",
    lt: "Vēja māte, Vėjo motina, Vėjo motė",
    lv: "Vēja māte, Vēja valdniece, Vēja māmuliņa",
  },
  domain: "God",
  epithet: {
    en: "Mother of the Wind, Sovereign of the Four Cardinal Winds",
    lt: "Vėjo motina, keturių pasaulio vėjų valdovė",
    lv: "Vēja māte — četru vēju un gaisa stihijas valdniece",
  },
  summary: {
    en: "Vēja māte is the supreme goddess of atmospheric air and winds in Baltic mythology, commanding breezes, gales, storms, and the Four Wind Sons. Partnered with Jūras māte to lift sailing vessels and invoked by farmers to winnow harvest grain, she embodies both gentle aerial nourishment and the furious force of oceanic squalls.",
    lt: "Vēja māte (liet. Vėjo motina) — aukščiausioji oro ir vėjų deivė baltų mitologijoje, valdanti dangiškąsias sroves, audras, pūgas bei keturis pasaulio šalių vėjus (Vėjo sūnus). Veikdama kartu su Jūros motina laivų burėms kelti ir padėdama žemdirbiams vėtyti javus kluone, ji įkūnija ir švelnią oro gyvybę, ir griaunančią vėtrą.",
    lv: "Vēja māte ir augstākā gaisa un vēju dievība latviešu mitoloģijā, kas valda pār vētrām, brīzēm, puteņiem un četriem Vēja dēliem. Darbojoties kopā ar Jūras māti zēģeļu piepildīšanā un palīdzot zemniekiem vētīt labību rijā, viņa iemieso gan labvēlīgu dzīvības dvesmu, gan nepielūdzamu vētru varenību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Wind", "Air", "Four cardinal winds", "Sailing", "Winnowing", "Mātes", "Storms", "Kolkasrags"],
  symbols: [
    { label: "Atmospheric elements", detail: "Sea-foam weaving loom (putu audi), cloud shawls (miglas sagša), four wind arrows" },
    { label: "Cardinal sons", detail: "Ziemeļvējš (North), Dienvidvējš (South), Austrumvējš (East), Rietumvējš (West)" },
    { label: "Votive offerings", detail: "Handful of flour (sauja miltu), grain scatterings, tobacco and silver coins tossed into wind" },
    { label: "Sacred loci", detail: "Cape Kolka (Kolkasrags), Gaiziņkalns summit, forest canopies (mežu galotnes), coastal sand dunes" },
  ],
  locations: [
    {
      id: "kolka-wind-crossroads",
      name: "Cape Kolka Promontory (Kolkasrags)",
      coordinates: [57.758, 22.603],
      region: "Latvia",
      description: "The windswept coastal horn of Kurzeme where the winds of the Baltic Sea and the Gulf of Riga collide, venerated as the meeting place of Vēja māte and Jūras māte.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "sky",
      deity: "veja-mate",
      significance: "Sailors and coastal fishermen cast coins, bread, and tobacco into oncoming gusts to buy favorable wind and appease Vēja māte before navigating dangerous sandbanks.",
    },
    {
      id: "gaizinkalns-wind-summit",
      name: "Gaiziņkalns High Summit",
      coordinates: [56.873, 25.96],
      region: "Latvia",
      description: "The highest summit of the Vidzeme Upland, where prevailing winds sweep unobstructed across the Latvian landscape, historically associated with wind invocations.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "veja-mate",
      significance: "Elevated ridge where farmers observed atmospheric signs and offered grain portions to Vēja māte to secure ideal drafts for seasonal winnowing.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Agricultural winnowing offerings (tossing a handful of flour or grain into the wind on the threshing floor) across Latvia and Lithuania",
    "Maritime 'wind-buying' customs (casting coins, tobacco, or breadcrumbs into oncoming squalls) along the Baltic coastline",
    "Strict folk whistling taboos (svilpošanas aizliegums) preserved in oral tradition and ethnographic collections",
  ],
  regionDetails: {
    en: "Latvia & Lithuania (Coastal Baltic, Vidzeme Highlands, Curonian Spit)",
    lt: "Latvija ir Lietuva (Baltijos pajūris, Vidžemės aukštumos, Kuršių nerija)",
    lv: "Latvija un Lietuva (Baltijas piekraste, Vidzemes augstiene, Kuršu kāpas)",
  },
  tribe: {
    en: "Latvians, Curonians, Semigallians, Lithuanians, Livonians",
    lt: "Latviai, kuršiai, žiemgaliai, lietuviai, lyviai",
    lv: "Latvieši, kurši, zemgaļi, lietuvieši, lībieši",
  },
  period: {
    en: "17th Century (Paul Einhorn 1636, 1649; M. Praetorius c. 1690); 19th–20th c. dainas",
    lt: "XVII a. (Paul Einhorn 1636, 1649 m.; M. Praetorius apie 1690 m.); XIX–XX a. dainos",
    lv: "17. gs. (Paul Einhorn 1636, 1649; M. Praetorius ap 1690); 19.–20. gs. dainas",
  },
  references: [
    "Paul Einhorn: Reformatio Gentis Letticae (1636) & Historia Lettica (1649)",
    "Matthäus Praetorius: Deliciae Prussicae oder Preussische Schaubühne (c. 1690)",
    "Krišjānis Barons: Latvju dainas (Dainu skapis, LD 30890, LD 30910, LD 31003, LD 2867, LD 30730, LD 30825, LD 33983)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Dainius Razauskas: Vėjūkas: lietuvių vėjo demono vardo ir įvaizdžio rekonstrukcija (2004)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/102927-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const okopirmusMeta: DeityMeta = {
  slug: "okopirmus",
  name: "Okopirmus",
  altNames: {
    en: "Okopirmus, Occopirnys, Ockopirmus, Ukapirmas",
    lt: "Okopirmas, Ukapirmas, Pats Pirmasis",
    lv: "Okopirms, Ukapirms, Pats Pirmais",
  },
  domain: "God",
  epithet: {
    en: "The Absolute First — Supreme Sky God and Primordial Creator of Old Prussia",
    lt: "Pats Pirmasis — prūsų aukščiausiasis dangaus dievas ir visatos kūrėjas",
    lv: "Pats Pirmais — senprūšu augstākais debesu dievs un pirmatnējais radītājs",
  },
  summary: {
    en: "Okopirmus ('The Absolute First') is the supreme sky deity and primordial creator in Old Prussian mythology. Positioned at the apex of 16th-century Prussian pantheon records above the active cultic triad of Perkūnas, Patrimpas, and Peckols, he embodies the transcendent celestial sovereign (deus otiosus) who established cosmic order, daylight, and the paths of the stars.",
    lt: "Okopirmas („Pats Pirmasis“) — aukščiausiasis dangaus dievas ir pirminis kūrėjas senovės prūsų mitologijoje. Užimdamas pirmąją vietą XVI a. prūsų panteono šaltiniuose virš Perkūno, Patrimpo ir Pikolo trejybės, jis įkūnija transcendentinį dangiškąjį valdovą (deus otiosus), nustačiusį kosminę tvarką, dienos šviesą ir žvaigždžių skliautą.",
    lv: "Okopirms („Pats Pirmais“) ir augstākais debesu dievs un pirmatnējais radītājs senprūšu mitoloģijā. Ieņemot pirmo vietu 16. gadsimta prūšu dievu sarakstos virs Pērkona, Patrimpa un Pekola triādes, viņš iemieso transcendentālo debesu valdnieku (deus otiosus), kurš iedibinājis kosmisko kārtību, dienas gaismu un zvaigžņu ceļus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sky", "Creation", "First cause", "Cosmic order", "Old Prussia", "Deus otiosus", "Sambia", "Sudovian Book"],
  symbols: [
    { label: "Cosmic realm", detail: "Celestial firmament (dangaus skliautas / coelum), daytime light, stellar constellations" },
    { label: "Sacred fire", detail: "Undying open-air flame, primordial creative light, sanctuary hilltop fires" },
    { label: "Ritual offerings", detail: "Premier libation (pirmasis nuliejimas), opening invocation draughts of mead and beer" },
    { label: "Sacred loci", detail: "Sambia peninsula (Semba), Sudovia (Sūduva), high sanctuary mounds (alkai)" },
  ],
  locations: [
    {
      id: "sambia-sacred-fire-site",
      name: "Sambian Celestial Fire Sanctuary (Semba)",
      coordinates: [54.9, 20.5],
      region: "Old Prussia",
      description: "An ancient open-air sanctuary mound in the Sambia peninsula where the eternal fire of the supreme sky god was venerated under the open firmament.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "okopirmus",
      significance: "Historical center where Sambian priests (Wurschaiti) invoked Okopirmus at the head of the pantheon during communal assemblies and poured the premier libation.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Opening ceremonial libations (pirmasis nuliejimas) poured to the First God before communal sacrifices in Prussian rituals",
    "Synodal and ethnographic catalogues (Constitutiones Synodales 1530 and Sudauer Büchlein c. 1520s) recording Okopirmus at Position #1",
    "Open-air sanctuary mounds across Sambia and Sudovia dedicated to the celestial vault and undying fire",
  ],
  regionDetails: {
    en: "Old Prussia (Sambia, Sudovia, Pomesania, Nadruvia)",
    lt: "Senoji Prūsija (Semba, Sūduva, Pamedė, Nadruvija)",
    lv: "Senā Prūsija (Sembija, Sūduva, Pamede, Nadruvija)",
  },
  tribe: {
    en: "Old Prussians (Sambians, Sudovians, Pomesanians, Nadruvians)",
    lt: "Prūsai (sembai, sūduviai, pamedėnai, nadruviai)",
    lv: "Prūši (sembji, sūdavi, pamedieši, nadruvieši)",
  },
  period: {
    en: "16th Century (Constitutiones Synodales 1530; Sudovian Book c. 1520s–1561)",
    lt: "XVI a. (Constitutiones Synodales 1530 m., Sūduvių knygelė c. 1520–1561 m.)",
    lv: "16. gs. (Constitutiones Synodales 1530; Sūduvu grāmatiņa ap 1520–1561)",
  },
  references: [
    "Constitutiones Synodales (1530 synod of Sambia and Pomesania: 'Occopirnys quem Saturnum nominant')",
    "Sudauer Büchlein / Sudovian Book (c. 1520s–1530, printed 1561: 'Ockopirmus der erste Gott Himmels vnd Gestirnes')",
    "Jan Malecki: Libellus de sacrificiis et idolatria veterum Borussorum (1551/1563)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582)",
    "Vladimir Toporov: Prusskij Jazyk (Vol. 5: O)",
    "Vytautas Mažiulis: Prūsų kalbos etimologijos žodynas",
    "Gintaras Beresnevičius: Prūsų religija ir mitologija (2004)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas II (2020)",
    "Visuotinė lietuvių enciklopedija: Okopirmas (https://www.vle.lt/straipsnis/okopirmas/)",
  ],
};

export const swayxtixMeta: DeityMeta = {
  slug: "swayxtix",
  name: "Swayxtix",
  altNames: {
    en: "Swayxtix, Suwayxtix, Swaxtix, Suaixtix, Swaixte",
    lt: "Svaikstikas, Švaistikas, Svaistiks",
    lv: "Svaikstiks, Zvaigždtiks",
  },
  domain: "God",
  epithet: {
    en: "The Light-Giver — God of Celestial Daylight, Sunbeams, and Illumination",
    lt: "Šviesdarys — dangiškosios dienos šviesos, saulės spindulių ir spindesio dievas",
    lv: "Gaismas Devējs — debesu dienas gaismas, saules starojuma un mirdzuma dievs",
  },
  summary: {
    en: "Swayxtix ('The Light-Giver') is the Old Prussian deity of celestial daylight, solar rays, and illumination. Holding Position #2 in 16th-century Prussian pantheon catalogues directly below Okopirmus, he governs the vitalizing daytime light (swāigstan) that promotes the growth and ripening of agricultural crops, pastures, and livestock.",
    lt: "Svaikstikas („Šviesdarys“) — senovės prūsų dangiškosios dienos šviesos, saulės spindulių ir spindesio dievas. Užimdamas antrąją vietą XVI a. prūsų panteono šaltiniuose iškart po Okopirmo, jis valdo gyvybinę šviesą (swāigstan), skatinančią javų derėjimą, ganyklų vešėjimą ir galvijų augimą.",
    lv: "Svaikstiks („Gaismas Devējs“) ir senprūšu debesu dienas gaismas, saules starojuma un mirdzuma dievs. Ieņemot 2. vietu 16. gadsimta prūšu dievu sarakstos tūlīt aiz Okopirma, viņš pārvalda dzīvības gaismu (swāigstan), kas briedina labību, ganību zāli un sekmē lopu augšanu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Celestial light", "Sunbeams", "Daylight", "Crop ripening", "Old Prussia", "Sambia", "Sudovian Book", "Swāigstan"],
  symbols: [
    { label: "Celestial light", detail: "Daylight atmosphere (swāigstan / Liecht), morning sunrise rays, solar illumination" },
    { label: "Sacred geometry", detail: "Radial sun-disc (saulutė), rosettes, multi-pointed starburst motifs on Baltic textiles" },
    { label: "Ritual offerings", detail: "Second ceremonial libation (Trankopfer), dawn bread and grain offerings for crop ripening" },
    { label: "Sacred loci", detail: "Sambia peninsula (Semba), Sudovia (Sūduva), high eastern sunrise ridges (alkakalniai)" },
  ],
  locations: [
    {
      id: "old-prussia-star-hill",
      name: "Sambian Sunrise Sanctuary Ridge (Semba)",
      coordinates: [54.8, 20.3],
      region: "Old Prussia",
      description: "A prominent open-air sanctuary ridge in the Sambia peninsula oriented toward the eastern horizon where Prussian worshippers greeted the rising dawn light.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "swayxtix",
      significance: "Site of traditional dawn prayers and seasonal libations offered to Swayxtix at daybreak to invoke life-giving light and warmth for ripening cereal fields.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Liturgical Position #2 in 16th-century Prussian synodal registers (Constitutiones Synodales 1530) and the Sudovian Book",
    "Traditional dawn libation rites pouring the second ceremonial cup of beer or mead for sunlight (schein) and crop growth",
    "Solar rosettes and radial sunburst symbols carved on Baltic wooden farmsteads and woven into ritual sashes",
  ],
  regionDetails: {
    en: "Old Prussia (Sambia, Sudovia, Pomesania)",
    lt: "Senoji Prūsija (Semba, Sūduva, Pamedė)",
    lv: "Senā Prūsija (Sembija, Sūduva, Pamede)",
  },
  tribe: {
    en: "Old Prussians (Sambians, Sudovians, Pomesanians)",
    lt: "Prūsai (sembai, sūduviai, pamedėnai)",
    lv: "Prūši (sembji, sūdavi, pamedieši)",
  },
  period: {
    en: "16th Century (Constitutiones Synodales 1530; Sudovian Book c. 1520s–1561)",
    lt: "XVI a. (Constitutiones Synodales 1530 m., Sūduvių knygelė c. 1520–1561 m.)",
    lv: "16. gs. (Constitutiones Synodales 1530; Sūduvu grāmatiņa ap 1520–1561)",
  },
  references: [
    "Constitutiones Synodales (1530 synod of Sambia and Pomesania: 'Suaixtix / Swaixte — Sol')",
    "Sudauer Büchlein / Sudovian Book (c. 1520s–1530, printed 1561: 'Suwaixtix [Swayxtix], der ander Gott des Liechts / Sol')",
    "Jan Malecki: Libellus de sacrificiis et idolatria veterum Borussorum (1551/1563: 'Swayxtix deus lucis')",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582: 'Swaistiks')",
    "Vladimir Toporov: Prusskij Jazyk (Vol. 5: S)",
    "Vytautas Mažiulis: Prūsų kalbos etimologijos žodynas",
    "Rolandas Kregždys: „Sūduvių knygelės“ etnomitologinė faktografija: mitonimų Swayxtix, Auschauts etimologinė raida (Baltu filoloģija, 2018)",
    "Gintaras Beresnevičius: Prūsų religija ir mitologija (2004)",
    "Visuotinė lietuvių enciklopedija: Svaikstikas (https://www.vle.lt/straipsnis/svaikstikas/)",
  ],
};

export const bardoaitsMeta: DeityMeta = {
  slug: "bardoaits",
  name: "Bardoaits",
  altNames: {
    en: "Bardoaits, Bardoayts, Bardoyts, Gardoaits",
    lt: "Bardaitis, Gardaitis, Gardoaitis",
    lv: "Bardoaits, Gardoaits",
  },
  domain: "God",
  epithet: {
    en: "Guardian of Ships — God of Maritime Navigation, Sailors, and Safe Harbors",
    lt: "Laivų globėjas — prūsų laivybos, jūreivių ir saugių uostų dievas",
    lv: "Kuģu aizstāvis — senprūšu kuģniecības, jūrnieku un drošu ostu dievs",
  },
  summary: {
    en: "Bardoaits ('Guardian of Ships') is the Old Prussian deity of seafaring, watercraft, and maritime navigation. Holding Position #6 in 16th-century Prussian pantheon records as the human-maritime culmination of the water triad (following Autrimpus and Potrimpus), he protects ships, oarsmen, and coastal fishermen across the Baltic Sea and lagoons, ensuring safe harbor entry and preventing shipwrecks.",
    lt: "Bardaitis („Laivų globėjas“) — senovės prūsų laivybos, valčių ir jūreivystės dievas. Užimdamas 6-ąją vietą XVI a. prūsų panteono šaltiniuose kaip vandenų triados žmogiškasis-jūrinis vainikavimas (po Autrimpo ir Patrimpo), jis saugo laivus, irkluotojus ir žvejus Baltijos jūroje bei mariose, užtikrindamas saugų sugrįžimą į uostą ir saugodamas nuo sudužimo.",
    lv: "Bardoaits („Kuģu aizstāvis“) ir senprūšu kuģniecības, laivu un jūrniecības dievs. Ieņemot 6. vietu 16. gadsimta prūšu dievu sarakstos kā ūdens triādes noslēgums (sekojot Autrimpam un Patrimpam), viņš sargā kuģus, airētājus un piekrastes zvejniekus Baltijas jūrā un jomās, nodrošinot drošu atgriešanos ostā.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Ships", "Sailors", "Harbor", "Navigation", "Old Prussia", "Sambia", "Sudovian Book", "Boiled fish sacrifice"],
  symbols: [
    { label: "Watercraft", detail: "Ship's prow (laivo priekis), wooden boat stems, oars, rudder, intact hull" },
    { label: "Nautical emblems", detail: "Weathercocks (vėtrungės), stone anchors, fishing nets, calm harbor waters" },
    { label: "Ritual offerings", detail: "Boiled fish dedications (gekochte Fische), pre-launch boat-prow libations" },
    { label: "Sacred loci", detail: "Sambia peninsula (Semba), Curonian Lagoon (Kuršių marios), Vistula Lagoon (Aistmarės), coastal harbor mouths" },
  ],
  locations: [
    {
      id: "sambia-coastal-harbor",
      name: "Sambian Coastal Harbor Site (Semba)",
      coordinates: [54.85, 20.1],
      region: "Old Prussia",
      description: "A sheltered natural cove and boat-landing beach on the Sambia peninsula coast where Prussian and Sudovian fishermen beached their watercraft.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "bardoaits",
      significance: "Traditional staging point where coastal fishermen dedicated boiled fish and poured pre-sailing boat-prow libations to Bardoaits before navigating the Baltic surf.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Liturgical Position #6 in 16th-century Prussian synodal registers (Constitutiones Synodales 1530) and the Sudovian Book ('Bardoayts der Schiffe / deus navium')",
    "Traditional boiled fish dedication ritual (gekochte Fische) performed by Baltic fishermen before launching vessels or upon safe return",
    "Carved wooden boat stems, weathercocks (vėtrungės), and miniature boat charms preserved in coastal Baltic material culture",
  ],
  regionDetails: {
    en: "Old Prussian Coast (Sambia, Natangia, Curonian Lagoon, Vistula Lagoon)",
    lt: "Prūsų pajūris (Semba, Natangija, Kuršių marios, Aistmarės)",
    lv: "Prūšu piekraste (Sembija, Natangija, Kuršu joma, Prūšu joma)",
  },
  tribe: {
    en: "Old Prussians (Sambians, Natangians, Sudovians)",
    lt: "Prūsai (sembai, natangai, sūduviai)",
    lv: "Prūši (sembji, natangi, sūdavi)",
  },
  period: {
    en: "16th Century (Constitutiones Synodales 1530; Sudovian Book c. 1520s–1561; Malecki 1551/1563)",
    lt: "XVI a. (Constitutiones Synodales 1530 m., Sūduvių knygelė c. 1520–1561 m., Maleckis 1551/1563 m.)",
    lv: "16. gs. (Constitutiones Synodales 1530; Sūduvu grāmatiņa ap 1520–1561; Maleckis 1551/1563)",
  },
  references: [
    "Constitutiones Synodales (1530 synod of Sambia and Pomesania: 'Bardoayts der Schiffe')",
    "Sudauer Büchlein / Sudovian Book (c. 1520s–1530, printed 1561: '6. Bardoayts der Schiffe / Bardoayts deus navium')",
    "Jan Malecki: Libellus de sacrificiis et idolatria veterum Borussorum (1551/1563: 'Bardoayts deus navium')",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582: 'Bardoyts / Gardoaits')",
    "Kazimieras Būga: Rinktiniai raštai (t. 1, 1958)",
    "Vladimir Toporov: Prusskij Jazyk (Vol. 1: A–D)",
    "Vytautas Mažiulis: Prūsų kalbos etimologijos žodynas",
    "Rolandas Kregždys: Teonimų, minimų Sūduvių knygelėje, etimologinė analizė (Res humanitariae, 2008)",
    "Gintaras Beresnevičius: Prūsų religija ir mitologija (2004)",
    "Visuotinė lietuvių enciklopedija: Bardaitis (https://www.vle.lt/straipsnis/bardaitis/)",
  ],
};

export const kaukaiMeta: DeityMeta = {
  slug: "kaukai",
  name: "Kaukai",
  altNames: { en: "Kaukai", lt: "Kaukai", lv: "Kauki" },
  domain: "Creature",
  epithet: {
    en: "Benevolent Wealth Dwarves of the Underground",
    lt: "Geranoriški požemio turto nykštukai",
    lv: "Labsirdīgie zemes rūķi",
  },
  summary: {
    en: "Kaukai are small, industrious Lithuanian and Prussian underground spirits that help with farmwork and bring prosperity if offered milk and simple food. They dwell beneath elder trees and hearthstones.",
    lt: "Kaukai yra maži, darbštūs lietuvių ir prūsų požemio dvasios, padedančios ūkio darbuose ir nešančios gerovę, jei vaišinamos pienu. Gyvena po alyvmedžiais ir krosnimis.",
    lv: "Kaukai ir mazi, čakli lietuviešu un prūšu pazemes garās, kas palīdz lauku darbos un nes pārticību, ja tiek mieloti ar pienu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Underground", "Farm help", "Prosperity", "Dwarves", "Elder tree"],
  symbols: [
    { label: "Sacred symbols", detail: "Elder tree roots, Bowl of milk, Small beard, Stone altar" }
  ],
  locations: [
    {
      id: "lithuania-elder-threshold",
      name: "Lithuanian Elder-Tree Threshold",
      coordinates: [55.5, 24.0],
      region: "Lithuania",
      description: "The root hollow beneath the elder tree at the farmstead threshold, regarded as the underground home of the Kaukai household spirits.",
      siteType: "Household ritual sites",
      aura: "green",
      deity: "kaukai",
      significance: "Each evening, small bowls of milk and porridge were left under the elder tree; the Kaukai who received these offerings would invisibly complete farmwork during the night.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Lithuania & Old Prussia (Pan-Baltic)",
    lt: "Lietuva ir Senoji Prūsija (visos Baltijos žemės)",
    lv: "Lietuva un Vecā Prūsija (visas Baltijas zemes)",
  },
  tribe: {
    en: "Lithuanians, Old Prussians",
    lt: "Lietuviai, prūsai",
    lv: "Lietuvieši, prūši",
  },
  period: {
    en: "16th–17th Century (Sudovian Book 1520s, Łasicki 1582, Praetorius c. 1690)",
    lt: "XVI–XVII a. (Sūduvių knygelė ~1520 m., Łasicki 1582 m., Pretorijus ~1690 m.)",
    lv: "16.–17. gs. (Sudāviešu grāmatiņa ~1520, Łasicki 1582, Pretorijs ~1690)",
  },
  references: [
    "Sudauer Büchlein / Sudovian Book (c. 1520–1530)",
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690)",
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977)",
    "Visuotinė lietuvių enciklopedija: Kaukai (https://www.vle.lt/straipsnis/kaukai/)"
  ],
};

export const raganaMeta: DeityMeta = {
  slug: "ragana",
  name: "Ragana",
  altNames: { en: "Ragana", lt: "Ragana", lv: "Ragana" },
  domain: "God",
  epithet: {
    en: "Lithuanian Witch and Seer",
    lt: "Lietuvių ragana ir regėtoja",
    lv: "Lietuviešu ragana un pareģe",
  },
  summary: {
    en: "Ragana is the most prominent witch-figure in Baltic tradition. Etymologically a 'seer' (regėti), she evolved from an ancient goddess of wisdom into a shape-shifting forest witch feared and sought for healing.",
    lt: "Ragana yra gausiausiai mitų aprašyta ragana baltų tradicijoje. Etimologiškai 'regėtoja', ji evoliucionavo nuo išminties deivės iki formas keičiančios miško raganos.",
    lv: "Ragana ir izslavētākā ragana Baltijas tradīcijā. Etimoloģiski 'pareģe' (regēt), viņa attīstījās no gudrības dievietes par formas mainošu meža raganu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Witch", "Seer", "Shape-shifting", "Herbs", "Forest", "Šatrija Hill"],
  symbols: [
    { label: "Sacred symbols", detail: "Broom, Cauldron, Cat, Šatrija Hill" }
  ],
  locations: [
    {
      id: "satrija-hill-crossroads",
      name: "Šatrija Hill Crossroads",
      coordinates: [55.872, 22.570],
      region: "Lithuania",
      description: "The legendary Šatrija Hill in Samogitia, where the ragana was said to gather with other witches at crossroads beneath the moonlit sky.",
      siteType: "Mythic hills / burial mounds",
      aura: "mist",
      deity: "ragana",
      significance: "The hill's summit crossroads served as a liminal meeting point where the boundary between the human world and the spirit world grew thin enough for the witch to pass through.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Lithuania (Samogitia, Šatrija focus)",
    lt: "Lietuva (Žemaitija, Šatrija kalnas)",
    lv: "Lietuva (Žemaitija, Šatrija kalns)",
  },
  tribe: {
    en: "Lithuanians, Samogitians, Latvians",
    lt: "Lietuviai, žemaičiai, latviai",
    lv: "Lietuvieši, žemaiši, latvieši",
  },
  period: {
    en: "Pre-Christian era; documented in 16th–18th c. Witchcraft Trial Records",
    lt: "Ikikrikščioniškasis laikotarpis; užrašytas XVI–XVIII a. raganų teismų protokoluose",
    lv: "Pirmskristīgā ēra; dokumentēta 16.–18. gs. raganu tiesas protokolos",
  },
  references: [
    "Norbertas Vėlius: Senovės lietuvių raganos ir jų kultas (1977)",
    "Jonas Basanavičius: Iš gyvenimo vėlių bei velnių (1903)",
    "Witchcraft Trial Records (16th–18th c. Lithuania & Latvia)",
    "Visuotinė lietuvių enciklopedija: Ragana (https://www.vle.lt/)",
    "Visuotinė lietuvių enciklopedija: Ragana (https://www.vle.lt/straipsnis/ragana/)"
  ],
};

export const sloguteMeta: DeityMeta = {
  slug: "slogute",
  name: "Slogutė",
  altNames: { en: "Slogutė", lt: "Slogutė", lv: "Slogutė" },
  domain: "Creature",
  epithet: {
    en: "Spirit of Sleep Paralysis and Nightmares",
    lt: "Miego paralyžiaus ir košmarų dvasia",
    lv: "Miega paralīzes un murgu gars",
  },
  summary: {
    en: "Slogutė is the Lithuanian personification of sleep paralysis. She sits on the chest of sleepers, making it impossible to breathe or move. Iron objects near the bed are the traditional protection.",
    lt: "Slogutė yra lietuvių miego paralyžiaus personifikacija. Ji sėdi ant miegančio krūtinės, neleisdama kvėpuoti. Tradicinė apsauga — geležiniai daiktai prie lovos.",
    lv: "Slogutė ir lietuviešu miega paralīzes personifikācija. Viņa sēž uz guļošā krūtīm, neļaujot elpot. Tradicionālā aizsardzība — dzelzs priekšmeti pie gultas.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sleep paralysis", "Nightmare", "Night", "Breath", "Fear"],
  symbols: [
    { label: "Sacred symbols", detail: "Iron knife, Scissors, Weight on the chest" }
  ],
  locations: [
    {
      id: "lithuania-hearth-threshold-night",
      name: "Lithuanian Hearth Threshold at Night",
      coordinates: [55.6, 24.2],
      region: "Lithuania",
      description: "The liminal space of the hearth threshold within a Lithuanian farmstead home, where the boundary between the sleeping world and the spirit world was considered dangerously thin at night.",
      siteType: "Hearth cult zones",
      aura: "mist",
      deity: "slogute",
      significance: "Iron objects — a knife or scissors — were placed beneath the sleeper's pillow or across the threshold to prevent Slogutė from crossing over and pressing upon the chest.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Lithuania (Pan-Lithuanian)",
    lt: "Lietuva (visos Lietuvos regionai)",
    lv: "Lietuva (visā Lietuvā)",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "Archaic oral tradition, collected 19th–20th c.",
    lt: "Archajiška žodinė tradicija, surinkta XIX–XX a.",
    lv: "Arhaiska mutvārdu tradīcija, vākta 19.–20. gs.",
  },
  references: [
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977)",
    "Jonas Basanavičius: Lietuviškos pasakos (1898–1902)",
    "Visuotinė lietuvių enciklopedija: Slogutė (https://www.vle.lt/)",
    "Visuotinė lietuvių enciklopedija: Slogutė (https://www.vle.lt/straipsnis/slogute/)"
  ],
};

export const vilkacisMeta: DeityMeta = {
  slug: "vilkacis",
  name: "Vilkacis",
  altNames: { en: "Vilkacis", lt: "Vilkacis", lv: "Vilkatis" },
  domain: "Creature",
  epithet: {
    en: "Lithuanian Werewolf — Human Transformed into Wolf",
    lt: "Lietuvių vilkacis — žmogus, virtęs vilku",
    lv: "Lietuviešu vilkatis — cilvēks, kas pārvērties par vilku",
  },
  summary: {
    en: "The Vilkacis is a human who has transformed into a wolf through a curse or ritual. Unlike horror-movie werewolves, Baltic vilkaciai retain human intelligence and can fight for good or ill.",
    lt: "Vilkacis — tai žmogus, prakeikimo ar ritualo metu pavirtęs vilku. Priešingai kino siaubo filmams, baltų vilkaciai išsaugo žmogišką intelektą.",
    lv: "Vilkatis ir cilvēks, kurš pārvērties par vilku lāsta vai rituāla dēļ. Atšķirībā no šausmu filmām, Baltijas vilkaši saglabā cilvēcisko intelektu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Werewolf", "Transformation", "Wolf", "Curse", "Strength"],
  symbols: [
    { label: "Sacred symbols", detail: "Wolf pelt, Belt of transformation, Iron teeth, Forest path" }
  ],
  locations: [
    {
      id: "latvia-wolf-forest-edge",
      name: "Latvian Wolf Forest Edge",
      coordinates: [57.0, 25.0],
      region: "Latvia",
      description: "The dark fringe of old forest in central Latvia where the boundary between human settlement and wilderness dissolved — the traditional haunt of the Vilkacis.",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "vilkacis",
      significance: "Accounts record that those cursed to become vilkaciai would retreat to this forest edge at the full moon; villagers left offerings of bread at the treeline to appease them.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Lithuania, Latvia (Pan-Baltic)",
    lt: "Lietuva, Latvija (visose Baltijos kraštuose)",
    lv: "Lietuva, Latvija (visā Baltijas reģionā)",
  },
  tribe: {
    en: "Lithuanians, Latvians",
    lt: "Lietuviai, latviai",
    lv: "Lietuvieši, latvieši",
  },
  period: {
    en: "16th–17th c. witchcraft trial records",
    lt: "XVI–XVII a. raganų teismų protokolai",
    lv: "16.–17. gs. raganu tiesas lietas",
  },
  references: [
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977)",
    "Jonas Basanavičius: Iš gyvenimo vėlių bei velnių (1903)",
    "Witchcraft Trial Records (16th–17th c. Lithuania & Latvia)",
    "Visuotinė lietuvių enciklopedija: Vilkolakis (https://www.vle.lt/)",
    "Visuotinė lietuvių enciklopedija: Vilkacis (https://www.vle.lt/straipsnis/vilkacis/)"
  ],
};

export const lietuvensMeta: DeityMeta = {
  slug: "lietuvens",
  name: "Lietuvēns",
  altNames: { en: "Lietuvēns", lt: "Lietuvēns", lv: "Lietuvēns" },
  domain: "Creature",
  epithet: {
    en: "Latvian Nightmare Spirit",
    lt: "Latvių košmarų dvasia",
    lv: "Latvijas murgu gars",
  },
  summary: {
    en: "Lietuvēns is the Latvian equivalent of the nightmare spirit. The soul of one who died unnaturally, he enters through keyholes to press on the chests of sleeping people and livestock.",
    lt: "Lietuvēns yra latvių košmarų dvasios atitikmuo. Nenatūralia mirtimi mirusio siela, jis patenka per raktadėtes ir spaudžia miegančiųjų krūtines.",
    lv: "Lietuvēns ir latviešu murgu gara ekvivalents. Pārdabiskā nāvē miruša dvēsele, viņš iekļūst caur atslēgu caurumiem un spiež guļošo krūtīs.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Nightmare", "Sleep paralysis", "Unnatural death", "Night", "Fear"],
  symbols: [
    { label: "Sacred symbols", detail: "Keyhole, Sweating horse, Weight on the chest" }
  ],
  locations: [
    {
      id: "latvia-misty-lakeside-night",
      name: "Latvian Misty Lakeside",
      coordinates: [56.8, 26.1],
      region: "Latvia",
      description: "A low-lying misty lakeshore in the Gauja region where the spirits of those who died unnaturally were said to linger and venture out at night.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "lietuvens",
      significance: "Folk tradition held that the Lietuvēns arose from stagnant water near such lakeshores; iron was thrown into the water at dawn to drive the nightmare spirit back.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Latvia (Pan-Latvian)",
    lt: "Latvija (visos Latvijos rajonuose)",
    lv: "Latvija (visā Latvijā)",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "Archaic oral tradition, collected 19th–20th c.",
    lt: "Archajiška žodinė tradicija, surinkta XIX–XX a.",
    lv: "Arhaiska mutvārdu tradīcija, vākta 19.–20. gs.",
  },
  references: [
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Visuotinė lietuvių enciklopedija: Lietuvēns (https://www.vle.lt/straipsnis/lietuvens/)"
  ],
};

export const egleMeta: DeityMeta = {
  slug: "egle",
  name: "Eglė",
  altNames: { en: "Eglė", lt: "Eglė", lv: "Egle" },
  domain: "Person",
  epithet: {
    en: "Queen of Serpents",
    lt: "Žalčių karalienė",
    lv: "Čūsku karaliene",
  },
  summary: {
    en: "Eglė is the heroine of Lithuania's most archetypal myth, Eglė žalčių karalienė. She marries the serpent king Žilvinas and, after his betrayal and murder, transforms herself and her children into trees.",
    lt: "Eglė yra lietuvių archetipinės mitologinės pasakos Eglė žalčių karalienė herojė. Ji išteka už žalčių karaliaus Žilvino, o po jo išdavystės ir nužudymo paverčiama medžiais kartu su vaikais.",
    lv: "Egle ir lietuviešu arhetipiskākā mīta Eglė žalčių karalienė varonis. Viņa apprecas ar čūsku karali Žilvinu un pēc viņa nodevības un nāves pārvēršas par egli kopā ar saviem bērniem.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Transformation", "Oath", "Serpent world", "Metamorphosis", "Trees"],
  symbols: [
    { label: "Sacred symbols", detail: "Spruce tree, Snake-crown, Underwater palace, Her children's names" }
  ],
  locations: [
    {
      id: "curonian-lagoon-shore-egle",
      name: "Curonian Lagoon Shore",
      coordinates: [55.3, 21.2],
      region: "Lithuania",
      description: "The sheltered amber-tinted shore of the Curonian Lagoon where Eglė first encountered the serpent king Žilvinas rising from the waves to claim her as his bride.",
      siteType: "Legendary creation sites",
      aura: "amber",
      deity: "egle",
      significance: "The lagoon shore marks the mythic threshold between the human world and the underwater serpent kingdom; offerings of flowers were cast into the water in remembrance of Eglė's oath.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Lithuania (Curonian coast, Pan-Lithuanian)",
    lt: "Lietuva (Kuršių pajūris, visoje Lietuvoje)",
    lv: "Lietuva (Kurzemes piekraste, visā Lietuvā)",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "Archaic oral tradition, collected 19th–20th c. by Basanavičius",
    lt: "Archajiška žodinė tradicija, surinkta XIX–XX a. Basanavičiaus",
    lv: "Arhaiska mutvārdu tradīcija, pierakstīta 19.–20. gs. Basanavičiusa",
  },
  references: [
    "Jonas Basanavičius: Lietuviškos pasakos (1898–1902)",
    "Norbertas Vėlius: Eglė žalčių karalienė (1998)",
    "Visuotinė lietuvių enciklopedija: Eglė (https://www.vle.lt/)",
    "Visuotinė lietuvių enciklopedija: Eglė (https://www.vle.lt/straipsnis/egle/)"
  ],
};

export const lacplesisMeta: DeityMeta = {
  slug: "lacplesis",
  name: "Lāčplēsis",
  altNames: { en: "Lāčplēsis", lt: "Lāčplēsis", lv: "Lāčplēsis" },
  domain: "Person",
  epithet: {
    en: "Bear-Slayer — Latvian National Hero",
    lt: "Meškaskerys — latvių tautinis herojus",
    lv: "Lāčplēsis — latviešu tautiskais varonis",
  },
  summary: {
    en: "Lāčplēsis (Bear-Slayer) is the central hero of the Latvian national epic. Son of a man and a bear, his supernatural strength in his ears was the source of his power and ultimately his downfall.",
    lt: "Lāčplēsis (Meškaskerys) yra latvių tautinio epo centras. Žmogaus ir meškos sūnus, jo antgamtinė jėga buvo ausyse — tai buvo jo galios ir jo žlugimo šaltinis.",
    lv: "Lāčplēsis ir latviešu nacionālā epa centrālais varonis. Cilvēka un lāča dēls, viņa pārdabiskais spēks bija ausīs — tas bija viņa varas un galu galā bojāejas avots.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Bear-ears", "Strength", "National hero", "Daugava", "Resistance"],
  symbols: [
    { label: "Sacred symbols", detail: "Bear-ears, Giant boulder, Daugava river, Oak-staff" }
  ],
  locations: [
    {
      id: "daugava-staburags-canyon",
      name: "Staburags — Daugava River Canyon",
      coordinates: [56.7, 25.1],
      region: "Latvia",
      description: "The Staburags cliff on the Daugava River, legendary site of Lāčplēsis's final battle where the hero and the Black Knight plunged into the river together.",
      siteType: "Mythic hills / burial mounds",
      aura: "moss",
      deity: "lacplesis",
      significance: "Latvians regarded Staburags as a sacred memorial to the bear-slayer; midsummer bonfires were lit on the cliffs above, and the hero's return was awaited each Jāņi festival. The cliff was submerged in 1966 by the Pļaviņas hydroelectric dam, making it a legendary site that now exists only in memory and myth.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: {
    en: "Latvia (Daugava basin, Vidzeme, Kurzeme)",
    lt: "Latvija (Dauguvos baseinas, Vidzeme, Kurzeme)",
    lv: "Latvija (Daugavas ielejas, Vidzeme, Kurzeme)",
  },
  tribe: {
    en: "Latvians (Pan-Latvian)",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "19th c. literary synthesis (Pumpurs, 1888) of archaic folklore",
    lt: "XIX a. literatūrinė sintezė (Pumpurs, 1888), pagrįsta archajiška tautosaka",
    lv: "19. gs. literārā sintēze (Pumpurs, 1888) no arhaiskā folkloras",
  },
  references: [
    "Andrejs Pumpurs: Lāčplēsis (1888)",
    "Janīna Kursīte: Mītiskais folklorā (1999)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Visuotinė lietuvių enciklopedija: Lāčplēsis (https://www.vle.lt/straipsnis/lacplesis/)"
  ],
};

// Batch 5
