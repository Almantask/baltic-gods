import type { DeityMeta } from "@/types/content";

export const perkunasMeta: DeityMeta = {
  slug: "perkunas",
  name: "Perkūnas",
  domain: "God",
  epithet: {
    en: "Thunder that cleaves the canopy",
    lt: "Griaustinis, skeliantis dangaus skliautą / Dievaitis",
    lv: "Pērkoņtēvs / Vecais tēvs (Trīs zibeņi celmu skalda)",
  },
  summary: {
    en: "Lightning keeps time with the oaks while iron-etched prayers echo over hills and lake skin.",
    lt: "Žaibas diktuoja ritmą ąžuolams, o geležimi raižytos maldos aidi virš kalvų ir ežerų.",
    lv: "Zibens skaita laiku ar ozoliem, kamēr dzelzī iegravētas lūgšanas atbalsojas pār pakalniem un ezeriem.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(216, 150, 70, 0.22)",
  accent: "#d6a74f",
  altNames: {
    en: "Perkunas",
    lt: "Perkūnas",
    lv: "Pērkons",
  },
  keywords: ["thunder", "storm", "oak", "justice"],
  keywordsByLang: {
    thunder: { en: "thunder", lt: "griaustinis", lv: "pērkons" },
    storm: { en: "storm", lt: "audra", lv: "vētra" },
    oak: { en: "oak", lt: "ąžuolas", lv: "ozols" },
    justice: { en: "justice", lt: "teisingumas", lv: "taisnīgums" },
  },
  gallery: [
    {
      title: { en: "Bronze axe charm", lt: "Bronzinis kirvis talismanas", lv: "Bronzas cirvis-talismans" },
      medium: { en: "forged bronze", lt: "nukaltas bronza", lv: "kalta bronza" },
      note: { en: "Carried by travelers crossing storm-lines on the Nemunas ridge.", lt: "Nešiojamas keliautojų, kertančių audros linijas Nemuno aukštumose.", lv: "Nests ceļotāju, šķērsojot vētras līnijas Nemuna kalnajā joslā." },
    },
    {
      title: { en: "Storm-tempered oak plank", lt: "Audros grūdintas ąžuolo lentas", lv: "Vētrā sacietēta ozola dēlis" },
      medium: { en: "river-cured wood", lt: "upėje grūdintas medis", lv: "upē cietināts koks" },
      note: { en: "Used as altar top in Aukštaitija heights.", lt: "Naudotas kaip altoriaus viršus Aukštaitijos aukštumose.", lv: "Izmantots kā altāra virsma Aukštaitijas augstienēs." },
    }
  ],
  locations: [
    {
      id: "aukstaitija-oaks",
      name: "Aukštaitija Thunder Oaks",
      coordinates: [55.3, 26.0],
      region: "Lithuania",
      description: "A ridge where split oaks are left upright to ring when storms roll north.",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "perkunas",
      significance: "Lightning-split oaks left upright in Aukštaitija storm folklore geography.",
    },
    {
      id: "sventoji-oaks",
      name: "Šventoji Oak Sanctuary",
      coordinates: [56.03, 21.08],
      region: "Lithuania",
      description: "Coastal oak grove near the Šventoji; regional sacred landscape with archaeological cult finds.",
      siteType: "\"World tree\" analog sites",
      aura: "mist",
      deity: "perkunas",
      significance: "Regional sacred landscape near the Šventoji.",
    }
  ],
  materialLegacy: ["Iron spearhead talismans", "Pitch-black thunderstones tied with flax"],
  symbols: [
    { label: "Element", detail: "Sky-fire over pine crowns" },
    { label: "Offerings", detail: "Black goat, beer (Fabricius); barley in dainas" }
  ],
  regionDetails: {
    en: "Pan-Baltic / Lithuania",
    lt: "Visos baltų žemės / Lietuva",
    lv: "Visas baltu zemes / Lietuva",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "13th-16th Century Records",
    lt: "XIII-XVI a. šaltiniai",
    lv: "13.-16. gs. avoti",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: Perkūnas (https://www.vle.lt/straipsnis/perkunas/)",
    "Haralds Biezais: Pērkons (Encyclopedia of Religion / Encyclopedia.com)",
    "Jono Malalos kronikos intarpas (1261 m.)",
    "Atskaņu hronika (13. gs. pabaiga / Livländische Reimchronik)",
    "Petras Dusburgietis: Chronicon terrae Prussiae (1326)",
    "Simonas Grunau: Preussische Chronik (c. 1517–1526)",
    "Nijolė Laurinkienė: Senovės lietuvių dievas Perkūnas (LLTI 1996 / FFC 327 Helsinki 2023)",
    "Asta Skujytė-Razmienė: The God Perkūnas (Re)Introduced (Tautosakos darbai, 2024)"
  ],
};

export const sauleMeta: DeityMeta = {
  slug: "saule",
  name: "Saulė",
  domain: "God",
  epithet: {
    en: "Amber wheel of morning",
    lt: "Gintarinis ryto ratas",
    lv: "Dzintara rīta ritenis",
  },
  summary: {
    en: "The sun-mother rides a burning sledge over marsh mist, pouring warmth into flax fields.",
    lt: "Saulė-motina joja degančiomis rogėmis virš pelkių rūko, liedama šilumą į linų laukus.",
    lv: "Saules māte brauc ar degošām kamanām pār purva miglu, lejot siltumu linu laukos.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(228, 172, 84, 0.26)",
  accent: "#e3b45c",
  altNames: {
    en: "Saule",
    lt: "Saulė",
    lv: "Saule",
  },
  keywords: ["sun", "amber", "weaving", "dawn"],
  gallery: [
    {
      title: { en: "Amber bead clasp", lt: "Gintaro karolių sagė", lv: "Dzintara pērlīšu sakta" },
      medium: { en: "Baltic amber", lt: "Baltijos gintaras", lv: "Baltijas dzintars" },
      note: { en: "Passed between mothers at solstice vigils.", lt: "Perduodama tarp motinų saulėgrįžos budėjimuose.", lv: "Nodota starp mātēm saulgriežu nakts novērošanas laikā." },
    },
    {
      title: { en: "Gold-thread linen panel", lt: "Aukso siūlo drobės plokštė", lv: "Zeltdiegā linu panelis" },
      medium: { en: "flax, gilt thread", lt: "linai, paauksuotas siūlas", lv: "lini, zeltīts diegs" },
      note: { en: "Displays the solar sledge motif from Žemaitija.", lt: "Vaizduoja saulės rogių motyvą iš Žemaitijos.", lv: "Attēlo saules ragavas motīvu no Žemaitijas." },
    }
  ],
  locations: [
    {
      id: "siauliai-hill",
      name: "Saulės Kalnas",
      coordinates: [55.93, 23.32],
      region: "Lithuania",
      description:
        "A low hill where sunrise paints the grass in amber and bells are left to ring at dawn.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "saule",
      significance: "Families bring flax garlands for warmth and weaving luck.",
    },
    {
      id: "jurmala-shore",
      name: "Jūrmala Veil",
      coordinates: [56.97, 23.78],
      region: "Latvia",
      description: "A strand of sand where sea haze glows gold at dusk.",
      siteType: "Seasonal festival locations",
      aura: "mist",
      deity: "saule",
      significance: "Fisherfolk lay amber beads for calm waters before departure.",
    }
  ],
  materialLegacy: ["Amber earrings with spiral suns", "Sun-etched loom weights"],
  symbols: [
    { label: "Element", detail: "First light on dew" },
    { label: "Offerings", detail: "Flax garlands, gold thread, honey" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Aukštaitija, Samogitia, Kurzeme, Latgale)",
    lt: "Visos baltų žemės (Aukštaitija, Žemaitija, Kuršas, Latgala)",
    lv: "Visas baltu zemes (Augšzeme, Kurzeme, Latgale, Vidzeme, Zemgale)",
  },
  tribe: {
    en: "All Baltic Tribes (Lithuanians, Latvians, Curonians, Semigallians, Old Prussians)",
    lt: "Visos baltų gentys (lietuviai, latviai, kuršiai, žiemgaliai, prūsai)",
    lv: "Visas baltu ciltis (latvieši, lietuvieši, kurši, zemgaļi, prūši)",
  },
  period: {
    en: "13th Century (Earliest mention in 1262 Chronograph)",
    lt: "XIII a. (ankstyviausias paminėjimas 1262 m. chronografe)",
    lv: "13. gadsimts (agrākā pieminēšana 1262. gada hronogrāfā)",
  },
  references: [
    "Ludwig Rhesa: Dainos",
    "Jonas Basanavičius: Lithuanian Folklore",
    "Marija Gimbutas: The Balts",
    "Visuotinė lietuvių enciklopedija: Saulė (https://www.vle.lt/straipsnis/saule/)",
    "Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/149867)",
    "Nijolė Laurinkienė: Dangus baltų mitiniame pasaulėvaizdyje (2019)"
  ],
};

export const laimaMeta: DeityMeta = {
  slug: "laima",
  name: "Laima",
  domain: "God",
  epithet: {
    en: "Weaver of fates at the spring edge",
    lt: "Likimų audėja prie šaltinio krašto",
    lv: "Likteņu audēja pie avota malas",
  },
  summary: {
    en: "Destiny is braided quietly where birch bark curls, and choices are tied with river flax.",
    lt: "Likimas tyliai pinamas ten, kur raitosi beržo žievė, o pasirinkimai rišami upės linais.",
    lv: "Liktenis klusi tiek pīts tur, kur bērza tāss lokās, un izvēles sasietas ar upes liniem.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(107, 156, 126, 0.26)",
  accent: "#9cc29b",
  altNames: {
    en: "Laima",
    lt: "Laima",
    lv: "Laima",
  },
  keywords: ["fate", "birch", "springs", "threads"],
  gallery: [
    {
      title: { en: "Birch divination lot", lt: "Beržo burtų skirtukas", lv: "Bērza zīlēšanas kauliņš" },
      medium: { en: "birch bark, charcoal", lt: "beržo žievė, anglis", lv: "bērza mizas, ogle" },
      note: { en: "Marked with three lines to foretell safe crossings.", lt: "Pažymėtas trimis linijomis, pranašaujančiomis saugias perėjas.", lv: "Iezīmēts ar trim svītrām, lai pareģotu drošas pārejas." },
    },
    {
      title: { en: "River flax braid", lt: "Upinė lino pyne", lv: "Upes linu pine" },
      medium: { en: "flax, beeswax", lt: "linai, bičių vaškas", lv: "lini, bišu vasks" },
      note: { en: "Knotted at weddings to seal fortunes.", lt: "Mezgamas vestuvėse, siekiant užantspauduoti likimus.", lv: "Sasiets kāzās, lai aizzīmogotu likteņus." },
    }
  ],
  locations: [
    {
      id: "sigulda-springs",
      name: "Sigulda Fate Springs",
      coordinates: [57.12, 24.85],
      region: "Latvia",
      description: "Birch-ringed springs where ribbons are submerged to ask for gentler paths.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "laima",
      significance: "Forest singers read ripples to divine travel omens.",
    },
    {
      id: "vilnius-thread",
      name: "Vilnius Loom Threshold",
      coordinates: [54.68, 25.28],
      region: "Lithuania",
      description: "A hidden loft above an old loom where threads are tied and left to decide direction.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "laima",
      significance: "Midwives climb here before births to braid names into cloth.",
    }
  ],
  materialLegacy: ["Carved birch divination staves", "Wax-sealed fate ribbons"],
  symbols: [
    { label: "Element", detail: "Quiet water under birch" },
    { label: "Offerings", detail: "Flax knots, copper coins, whispered vows" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania & Latvia)",
    lt: "Visos baltų žemės (Lietuva ir Latvija)",
    lv: "Visas baltu zemes (Lietuva un Latvija)",
  },
  tribe: {
    en: "All Baltic Tribes (Lithuanians, Latvians, Curonians, Semigallians)",
    lt: "Visos baltų gentys (lietuviai, latviai, kuršiai, žiemgaliai)",
    lv: "Visas baltu ciltis (latvieši, lietuvieši, kurši, zemgaļi)",
  },
  period: {
    en: "17th Century Records (Earliest mention 1636 P. Einhorn / 1653 D. Klein)",
    lt: "XVII a. šaltiniai (ankstyviausias paminėjimas 1636 m. P. Einhorn / 1653 m. D. Klein)",
    lv: "17. gadsimta avoti (agrākā pieminēšana 1636. g. P. Einhorns)",
  },
  references: [
    "Paul Einhorn: Historia Lettica (1636)",
    "Daniel Klein: Grammatica Litvanica (1653)",
    "Visuotinė lietuvių enciklopedija: Laimė (https://www.vle.lt/straipsnis/laime/)",
    "Nacionālā enciklopēdija: Latviešu mitoloģija - Laima (https://enciklopedija.lv/skirklis/149867)",
    "Krišjānis Barons: Latvju dainas",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai (1996-2005)",
    "Vilis Biļķins: Senlatviešu dievības"
  ],
};

export const zemynaMeta: DeityMeta = {
  slug: "zemyna",
  name: "Žemyna",
  domain: "God",
  epithet: {
    en: "Breath of fertile soil",
    lt: "Derlingos žemės alsavimas",
    lv: "Auglīgās zemes elpa",
  },
  summary: {
    en: "She keeps the pulse under rye fields and moss, waking seeds with heavy patience.",
    lt: "Ji saugo pulsą po rugių laukais ir samanomis, žadindama sėklas sunkia kantrybe.",
    lv: "Viņa uztur pulsu zem rudzu laukiem un sūnām, modinot sēklas ar smagu pacietību.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 148, 110, 0.24)",
  accent: "#9bb07a",
  altNames: {
    en: "Zemyna",
    lt: "Žemyna",
    lv: "Zemes māte",
  },
  keywords: ["soil", "harvest", "mounds", "grains"],
  gallery: [
    {
      title: { en: "Clay seed jar", lt: "Molinė sėklų ąsotis", lv: "Māla sēklu trauks" },
      medium: { en: "fired clay", lt: "degtas molis", lv: "apdedzināts māls" },
      note: { en: "Buried at field corners before plowing.", lt: "Laidojamas laukų kampuose prieš ariant.", lv: "Aprakts lauku stūros pirms aršanas." },
    },
    {
      title: { en: "Rye straw torque", lt: "Rugių šiaudų apykaklė", lv: "Rudzu salmu kaklagredzens" },
      medium: { en: "braided straw", lt: "pintas šiaudas", lv: "pīts salms" },
      note: { en: "Hung in barns to keep mice away by her favor.", lt: "Kabinamas tvarte, siekiant jos malone atbaidyti peles.", lv: "Karāts stallī, lai ar viņas labvēlību atbaidītu peles." },
    }
  ],
  locations: [
    {
      id: "kernave-mounds",
      name: "Kernavė Earth Ridges",
      coordinates: [54.88, 24.85],
      region: "Lithuania",
      description: "Ancient mounds where soil is turned by hand each equinox.",
      siteType: "Mythic hills / burial mounds",
      aura: "moss",
      deity: "zemyna",
      significance: "Families pour milk into the earth and press their palms into the soil.",
    },
    {
      id: "telsiai-altars",
      name: "Telšiai Clay Altars",
      coordinates: [55.98, 22.25],
      region: "Lithuania",
      description: "Low clay pads hidden in hazel groves for grain thanks-giving.",
      siteType: "Sacrifice / offering sites",
      aura: "amber",
      deity: "zemyna",
      significance: "Rye crowns are left to dry as a pledge to the next harvest.",
    }
  ],
  materialLegacy: ["Soil-stained prayer cloths", "Hazel-root amulets"],
  symbols: [
    { label: "Element", detail: "Warm loam after rain" },
    { label: "Offerings", detail: "Milk, rye crowns, crushed herbs" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania & Latvia)",
    lt: "Visos baltų žemės (Lietuva ir Latvija)",
    lv: "Visas baltu zemes (Lietuva un Latvija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "16th Century Records (1547 M. Mažvydas, 1582 J. Łasicki)",
    lt: "XVI a. šaltiniai (1547 m. M. Mažvydas, 1582 m. J. Lasickis)",
    lv: "16. gadsimta avoti (1547. g. M. Mažvīds, 1582. g. J. Lasickis)",
  },
  references: [
    "Martynas Mažvydas: Catechismus (1547)",
    "Jan Łasicki: De Diis Samagitarum (1582/1615)",
    "Visuotinė lietuvių enciklopedija: Žemyna (https://www.vle.lt/straipsnis/zemyna/)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Jonas Basanavičius"
  ],
};

export const velniasMeta: DeityMeta = {
  slug: "velnias",
  name: "Velnias",
  domain: "God",
  epithet: {
    en: "Keeper of hollows and bargains",
    lt: "Daubų ir sandėrių sargas",
    lv: "Dobumu un darījumu sargs",
  },
  summary: {
    en: "A horned shadow in marsh fog, guiding wanderers who pay respect and misguiding those who mock.",
    lt: "Raguotas šešėlis pelkių rūke, vedantis pagarbius keliautojus ir klaidinantis pašaipūnus.",
    lv: "Ragains ēna purva miglā, vadot ceļotājus, kas izrāda cieņu, un maldina tos, kas zobojas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1509024121564-13f14ac0b9b9?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(86, 102, 90, 0.3)",
  accent: "#8fa687",
  altNames: {
    en: "Velnias",
    lt: "Velnias",
    lv: "Velns",
  },
  keywords: ["trickster", "forest", "crossroads", "night"],
  gallery: [
    {
      title: { en: "Bog iron talon", lt: "Pelkių geležies letena", lv: "Purva dzelzs nags" },
      medium: { en: "bog iron", lt: "pelkių geležis", lv: "purva dzelzs" },
      note: { en: "Left at crossroads to mislead harmful spirits.", lt: "Palikta kryžkelėse, siekiant suklaidinti kenksmingąsias dvasias.", lv: "Atstāts krustceļos, lai maldinātu kaitīgos garus." },
    },
    {
      title: { en: "Ashen hoof print", lt: "Pelenų kanopų žymė", lv: "Pelnu naga nospiedums" },
      medium: { en: "ash, oak charcoal", lt: "pelenai, ąžuolo anglis", lv: "pelni, ozola ogle" },
      note: { en: "Ritual mark to call a protective wanderer.", lt: "Apeiginė žymė, kviečianti globėjišką klajoklį.", lv: "Rituāla zīme, lai izsauktu aizsardzošu klaidoni." },
    }
  ],
  locations: [
    {
      id: "druskininkai-mist",
      name: "Nemunas Mist Hollow",
      coordinates: [54.02, 23.97],
      region: "Lithuania",
      description: "A bog clearing where will-o-wisps mirror hoofbeats.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "velnias",
      significance: "Travelers leave rye bread and silver to trade for safe passage.",
    },
    {
      id: "nida-dunes",
      name: "Curonian Hollow",
      coordinates: [55.3, 20.99],
      region: "Lithuania",
      description: "Wind-carved dunes that hide charcoal symbols under sand.",
      siteType: "Sacrifice / offering sites",
      aura: "amber",
      deity: "velnias",
      significance: "Fishermen ask for misdirection of storms toward open water.",
    }
  ],
  materialLegacy: ["Charcoal crossroads sigils", "Bone whistles carved with spiral horns"],
  symbols: [
    { label: "Element", detail: "Mist over peat" },
    { label: "Offerings", detail: "Bread crusts, charcoal, iron filings" }
  ],
  regionDetails: {
    en: "All Regions",
    lt: "Visi regionai",
    lv: "Visi reģioni",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "13th Century Records (Earliest mention in 1261 Malalas Chronicle)",
    lt: "XIII a. šaltiniai (ankstyviausias paminėjimas 1261 m. Malalos kronikoje)",
    lv: "13. gadsimta avoti (agrākā pieminēšana 1261. g. Malalas hronikā)",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: Velnias (https://www.vle.lt/straipsnis/velnias/)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis: folklorinio velnio analizė (Vaga, 1987)",
    "Gintaras Beresnevičius: Dausos (1990) & Trumpas lietuvių mitologijos žodynas (2004)",
    "Jonas Basanavičius"
  ],
};

export const austejaMeta: DeityMeta = {
  slug: "austeja",
  name: "Austėja",
  domain: "God",
  epithet: {
    en: "Mistress of bees and blooming edges",
    lt: "Bičių ir žydinčių pakraščių valdovė",
    lv: "Bišu un ziedošo malu valdniece",
  },
  summary: {
    en: "She hums in the timberline, swarming over hollow lindens and calming storms with honeyed smoke.",
    lt: "Ji dūzgia miško pakraštyje, spiečiasi virš tuščiavidurių liepų ir ramina audras medaus dūmais.",
    lv: "Viņa dūc meža malā, spietos pār dobajām liepām un nomierina vētras ar medus dūmiem.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(130, 150, 104, 0.25)",
  accent: "#b2c37a",
  altNames: {
    en: "Austeja",
    lt: "Austėja",
    lv: "Austeja",
  },
  keywords: ["bees", "honey", "linden", "meadow"],
  gallery: [
    {
      title: { en: "Wax comb reliquary", lt: "Vaško korių relikvijorius", lv: "Vaska šūnu relikvijas kastīte" },
      medium: { en: "beeswax, linen", lt: "bičių vaškas, linas", lv: "bišu vasks, lins" },
      note: { en: "Holds dried meadow herbs for calm weather.", lt: "Laiko džiovintas pievų žoles ramiam orui.", lv: "Glabā žāvētas pļavas zāles mierīgam laikam." },
    },
    {
      title: { en: "Linden bark skep", lt: "Liepų žievės avilys", lv: "Liepu mizas strops" },
      medium: { en: "linden bark", lt: "liepų žievė", lv: "liepu miza" },
      note: { en: "Used as portable hive for blessing new farms.", lt: "Naudotas kaip nešiojamas avilys naujiems ūkiams palaiminti.", lv: "Izmantots kā pārnēsājams strops jaunu saimniecību svētīšanai." },
    }
  ],
  locations: [
    {
      id: "dzukija-meadow",
      name: "Dzūkija Honey Verge",
      coordinates: [54.1, 24.0],
      region: "Lithuania",
      description: "A meadow ringed by lindens where hives are set on carved stands.",
      siteType: "Sacrifice / offering sites",
      aura: "moss",
      deity: "austeja",
      significance:
        "Smoke is wafted toward storms to keep bees calm and travelers patient.",
    },
    {
      id: "latgale-hive",
      name: "Latgale Hollow Linden",
      coordinates: [56.3, 27.0],
      region: "Latvia",
      description: "An old tree fitted with clay plugs and guarded by woven charms.",
      siteType: "\"World tree\" analog sites",
      aura: "amber",
      deity: "austeja",
      significance:
        "Villagers whisper requests into the hollow before leaving honeycomb as thanks.",
    }
  ],
  materialLegacy: ["Honey-soaked prayer ribbons", "Bee-wing pressed charms"],
  symbols: [
    { label: "Element", detail: "Warm wax and meadow breath" },
    { label: "Offerings", detail: "Honeycomb, linden blossoms, smoke" }
  ],
  regionDetails: {
    en: "Aukštaitija / Dzūkija / Pan-Baltic",
    lt: "Aukštaitija / Dzūkija / Visos baltų žemės",
    lv: "Augštaitija / Dzūkija / Visas baltu zemes",
  },
  tribe: {
    en: "Lithuanians & Samogitians",
    lt: "Lietuviai ir Žemaičiai",
    lv: "Lietuvieši un Žemaiši",
  },
  period: {
    en: "16th Century Records (1580/1582 J. Łasicki)",
    lt: "XVI a. šaltiniai (1580/1582 m. J. Lasickis)",
    lv: "16. gadsimta avoti (1580/1582. g. J. Lasickis)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582/1615)",
    "Norbertas Vėlius: Senovės lietuvių pasaulėžiūra (1983)",
    "Visuotinė lietuvių enciklopedija: Austėja",
    "Visuotinė lietuvių enciklopedija: Austėja (https://www.vle.lt/straipsnis/austeja/)"
  ],
};

export const menulisMeta: DeityMeta = {
  slug: "menulis",
  name: "Mėnulis",
  domain: "God",
  epithet: {
    en: "Nocturnal Warrior & Guardian of Lunar Cycles",
    lt: "Naktinių žygių karys ir mėnulio ciklų sargas",
    lv: "Nakts gājienu karavīrs un mēness fāžu sargs",
  },
  summary: {
    en: "The masculine Baltic moon god who rides across the night sky in silver armor, counting stars and guiding travelers, warriors, and agricultural rhythms.",
    lt: "Vyriškasis baltų nakties dievas, sidabro šarvais skriejantis nakties dangumi, skaičiuojantis žvaigždes ir valdantis naktinius žygius bei sėjos ciklus.",
    lv: "Vīrišķā baltu nakts dievība, kas sudraba bruņās jāj pār nakts debess velvi, skaita zvaigznes un valda pār nakts gājieniem un sējas cikliem.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(160, 192, 210, 0.22)",
  accent: "#c5d9e6",
  altNames: {
    en: "Menulis / Mēness",
    lt: "Mėnulis / Mėnuo / Dievaitis",
    lv: "Mēness / Mēnestiņš",
  },
  keywords: ["moon", "night", "lunar cycles", "silver armor", "star counter", "jaunatis", "dainas"],
  gallery: [
    {
      title: { en: "Silver Shard Pendant", lt: "Sidabro šukės pakabukas", lv: "Sudraba lauskas kulons" },
      medium: { en: "River silver & Baltic amber", lt: "Upės sidabras ir baltų gintaras", lv: "Upes sudrabs un baltu dzintars" },
      note: { en: "Worn by night travelers and sailors under waning moons for guidance.", lt: "Nešiojamas naktinių keliautojų ir jūreivių delčioje apsaugai.", lv: "Valkāts nakts ceļotāju un jūrnieku vidū dilstošā mēnesī aizsardzībai." },
    },
    {
      title: { en: "Star-Counter Woven Belt", lt: "Žvaigždžių skaičiuotojo juosta", lv: "Zvaigžņu skaitītāja josta" },
      medium: { en: "Woven wool with silver thread", lt: "Austinė vilna su sidabro siūlu", lv: "Austā vilna ar sudraba diegu" },
      note: { en: "Traditional motif representing Mėness counting nocturnal stars.", lt: "Tradicinis raštas, vaizduojantis Mėnesį, skaičiuojantį nakties žvaigždes.", lv: "Tradicionāls raksts, kas attēlo Mēnesi skaitām nakts zvaigznes." },
    }
  ],
  locations: [
    {
      id: "aukstaiciai-lake",
      name: "Lake Moon Ladder",
      coordinates: [55.4, 25.0],
      region: "Lithuania",
      description: "Still water that mirrors silver paths when the new crescent moon rises.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "menulis",
      significance: "Fisherfolk and travelers observed the lunar mirror path before night journeys.",
    },
    {
      id: "ventspils-shore",
      name: "Ventspils Tide Silver Shore",
      coordinates: [57.39, 21.56],
      region: "Latvia",
      description: "A coastal strand where moonlight pulls phosphorescent reflections from the Baltic surf.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "menulis",
      significance: "Sailors mapped moon height against carved wooden posts for nocturnal weather omens.",
    }
  ],
  materialLegacy: [
    "Carved wooden moon-phase posts",
    "Silver crescent amulets (rageliai / mēnestiņi)",
    "Traditional wrought-iron roof crosses with lunar horns"
  ],
  symbols: [
    { label: { en: "Celestial Steed", lt: "Sidabro žirgas", lv: "Sudraba zirgs" }, detail: { en: "Silver armor & crescent sword", lt: "Sidabriniai šarvai ir pusmėnulio kardas", lv: "Sudraba bruņas un pusmēness zobens" } },
    { label: { en: "Offerings", lt: "Aukos", lv: "Ziedojumi" }, detail: { en: "Silver coins shaken at new moon, white bread, silence", lt: "Sidabrinės monetos per jaunatį, balta duona, tyla", lv: "Sudraba monētas jaunā mēnesī, baltmaize, klusums" } }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania, Latvia, Old Prussia)",
    lt: "Visos baltų žemės (Lietuva, Latvija, Senoji Prūsija)",
    lv: "Visas baltu zemes (Lietuva, Latvija, Senprūsija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "16th Century Chronicles, Oral Dainas Corpus & VLE / LNE Archival Records",
    lt: "XVI a. metraščiai, tautosakos dainynas ir VLE / LNE archyvai",
    lv: "16. gs. hronikas, dainu korpuss un VLE / LNE arhīvu ieraksti",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: Mėnulis (https://www.vle.lt/straipsnis/menulis/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija - Mēness (https://enciklopedija.lv/skirklis/8592)",
    "Krišjānis Barons: Latvju dainas (LD 33820-34086, celestial dainas)",
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "Algirdas Julius Greimas: Of Gods and Men (1992)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai (1996)"
  ],
};

export const dievasMeta: DeityMeta = {
  slug: "dievas",
  name: "Dievas",
  domain: "God",
  epithet: {
    en: "The Highest All-Powerful One / Sky Father",
    lt: "Aukštėjas Visagistis / Dievas Senelis",
    lv: "Mīļais Dieviņš / Debess tēvs / Balts Dieviņš",
  },
  summary: {
    en: "A distant, patient presence felt in the pause between wind gusts and bell chimes.",
    lt: "Tolima, kantri esatis, jaučiama pauzėje tarp vėjo gūsių ir varpų skambėjimo.",
    lv: "Tāla, pacietīga klātbūtne, jūtama pauzē starp vēja brāzmām un zvanu skaņām.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 138, 152, 0.2)",
  accent: "#b3c0c9",
  altNames: {
    en: "Dievas",
    lt: "Dievas",
    lv: "Dievs",
  },
  keywords: ["sky", "order", "stillness", "bells"],
  gallery: [
    {
      title: { en: "Bronze bell canopy", lt: "Bronzinis varpų stogelis", lv: "Bronzas zvanu nojume" },
      medium: { en: "bronze, linen", lt: "bronza, linas", lv: "bronza, lins" },
      note: { en: "Hung in farmyards to carry prayers upward.", lt: "Kabinamas ūkio kiemeliuose, kad maldas nešiotų aukštyn.", lv: "Karāts saimniecību pagalmos, lai nestas lūgšanas augšup." },
    },
    {
      title: { en: "Star-etched staff", lt: "Žvaigždėmis išraižytas štabas", lv: "Zvaigznēs iezīmėts spieķis" },
      medium: { en: "ash wood", lt: "uosio medis", lv: "ošu koks" },
      note: { en: "Used by elders to note stellar alignments on solstice nights.", lt: "Senolių naudotas žvaigždžių padėčiai fiksuoti saulėgrįžos naktimis.", lv: "Izmantots no vecajiem zvaigžņu izlīdzinājumu atzīmēšanai saulgrieža naktīs." },
    }
  ],
  locations: [
    {
      id: "riga-spires",
      name: "Riga Spire Line",
      coordinates: [56.95, 24.11],
      region: "Latvia",
      description: "Church spires and old bell towers mapped to trace sky order.",
      siteType: "Mythic hills / burial mounds",
      aura: "amber",
      deity: "dievas",
      significance:
        "Bells ring once at midnight to remind sleepers of the high god's distance and care.",
    },
    {
      id: "zemaitija-sky",
      name: "Žemaitija Star Field",
      coordinates: [55.57, 22.35],
      region: "Lithuania",
      description: "A clearing where star charts are pinned to pine trunks.",
      siteType: "Seasonal festival locations",
      aura: "moss",
      deity: "dievas",
      significance: "Night vigils trace constellations while reciting ancestral lines.",
    }
  ],
  materialLegacy: ["Bronze bell miniatures", "Star charts burnt into ash wood"],
  symbols: [
    { label: "Element", detail: "Still air above crowns" },
    { label: "Offerings", detail: "Bells, silence, unbroken bread" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania, Latvia, Prussia)",
    lt: "Visos baltų žemės (Lietuva, Latvija, Prūsija)",
    lv: "Visas baltu zemes (Lietuva, Latvija, Prūsija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "13th Century Records (1261 Malalas Chronicle insert; Elbing Vocab c. 1400)",
    lt: "XIII a. šaltiniai (1261 m. Malalos kronikos intarpas; Elbingo žodynėlis apie 1400 m.)",
    lv: "13. gadsimta avoti (1261. g. Malalas hronika; Elbingas vārdnīca ap 1400. g.)",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: Dievas",
    "Algirdas Julius Greimas: Of Gods and Men (1992)",
    "Maciej Stryjkowski: Kronika polska, litewska, żmódzka (1582)",
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Visuotinė lietuvių enciklopedija: Dievas (https://www.vle.lt/straipsnis/dievas/)"
  ],
};

export const gabijaMeta: DeityMeta = {
  slug: "gabija",
  name: "Gabija",
  domain: "God",
  epithet: {
    en: "Ember in the hearth",
    lt: "Žarija židinyje",
    lv: "Kvēle pavardā",
  },
  summary: {
    en: "She curls in coals, guarding thresholds and keeping homes knit together with heat.",
    lt: "Ji rangosi žarijose, saugodama slenkščius ir šiluma rišdama namus.",
    lv: "Viņa tinas oglēs, sargājot sliekšņus un turot mājas kopā ar siltumu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  altNames: {
    en: "Gabija",
    lt: "Gabija",
    lv: "Uguns māte",
  },
  keywords: ["fire", "home", "hearth", "protection"],
  gallery: [
    {
      title: { en: "Clay hearth tile", lt: "Molinė židinio plytelė", lv: "Māla pavarda flīze" },
      medium: { en: "fired clay", lt: "degtas molis", lv: "apdedzināts māls" },
      note: { en: "Painted with spirals to cradle embers overnight.", lt: "Nutapyta spiralėmis žarijoms priglausti per naktį.", lv: "Gleznota ar spirālēm, lai šūpotu ogles nakti." },
    },
    {
      title: { en: "Ember spoon", lt: "Žarijų kaušelis", lv: "Ogļu karote" },
      medium: { en: "iron", lt: "geležis", lv: "dzelzs" },
      note: { en: "Used to carry live coals between farmsteads at weddings.", lt: "Naudotas gyvoms žarijoms nešti tarp ūkių vestuvių metu.", lv: "Izmantots dzīvu ogļu nešanai starp saimniecībām kāzu laikā." },
    }
  ],
  locations: [
    {
      id: "kaunas-hearth",
      name: "Kaunas Hearth Archive",
      coordinates: [54.9, 23.9],
      region: "Lithuania",
      description: "An old brick kiln where communal embers are kept during storms.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "gabija",
      significance: "Families relight stoves from the shared flame after lightning nights.",
    },
    {
      id: "madona-ember",
      name: "Madona Ember Seat",
      coordinates: [56.86, 26.22],
      region: "Latvia",
      description: "A stone bench blackened by generations of midnight vigils.",
      siteType: "Hearth cult zones",
      aura: "moss",
      deity: "gabija",
      significance: "Travelers rest here to warm hands and leave bread for safe homes.",
    }
  ],
  materialLegacy: ["Hearth tile shards", "Ribbon-wrapped ember spoons"],
  symbols: [
    { label: "Element", detail: "Low flame and baking bread" },
    { label: "Offerings", detail: "Bread crusts, salt, glowing coals" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania & Latvia)",
    lt: "Visos baltų žemės (Lietuva ir Latvija)",
    lv: "Visas baltu zemes (Lietuva un Latvija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "16th Century Records (1582 Jan Łasicki, 1583 Jesuit Reports)",
    lt: "XVI a. šaltiniai (1582 m. Jonas Lasickis, 1583 m. jėzuitų ataskaitos)",
    lv: "16. gadsimta avoti (1582. g. J. Lasickis)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582/1615) (search: 'Gabie')",
    "Daiva Vaitkevičienė: Ugnies raiškos lietuvių mitologijoje (LLTI, 2001) (search: 'Gabija')",
    "Visuotinė lietuvių enciklopedija: Gabija (https://www.vle.lt/straipsnis/gabija-1/)",
    "Latviešu tautas ticējumi: Uguns (http://valoda.ailab.lv/folklora/ticejumi/uguns.htm) (search: 'Uguns māte')"
  ],
};

export const bangputysMeta: DeityMeta = {
  slug: "bangputys",
  name: "Bangpūtys",
  domain: "God",
  epithet: {
    en: "Two-faced wind of the Baltic",
    lt: "Dviveidis Baltijos vėjas",
    lv: "Baltijas divseju vējš",
  },
  summary: {
    en: "His cheeks hold both roar and lull; fishermen watch his mood in the curl of grass and wave.",
    lt: "Jo skruostuose telpa ir riaumojimas, ir ramybė; žvejai seka jo nuotaiką žolės ir bangų raibuliuose.",
    lv: "Viņa vaigos mīt gan rēciens, gan klusums; zvejnieki vēro viņa garastāvokli zāles un viļņu lokos.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(87, 132, 160, 0.28)",
  accent: "#7bb4d1",
  altNames: {
    en: "Bangputys",
    lt: "Bangpūtys",
    lv: "Bangputis",
  },
  keywords: ["wind", "sea", "storm", "sail"],
  gallery: [
    {
      title: { en: "Tide bone whistle", lt: "Potvynio kaulinis švilpukas", lv: "Paisuma kaula svilpe" },
      medium: { en: "whale bone", lt: "banginio kaulas", lv: "vaļa kauls" },
      note: { en: "Blown before casting nets to ask for steady currents.", lt: "Pučiamas prieš tinklų metimą prašyti pastovių srovių.", lv: "Pūsta pirms tīklu mešanas, lūdzot pastāvīgas straumes." },
    },
    {
      title: { en: "Pitch-sealed mast charm", lt: "Derva užantspauduotas stiebo talismanas", lv: "Darvas noslēgts masta talismans" },
      medium: { en: "pine pitch, linen", lt: "pušų derva, linas", lv: "priedes darva, lins" },
      note: { en: "Wrapped around masts to keep winds balanced.", lt: "Vyniojamas aplink stiebus, kad vėjai išliktų subalansuoti.", lv: "Ietīts ap mastiem, lai vēji paliktu līdzsvaroti." },
    }
  ],
  locations: [
    {
      id: "klaipeda-drift",
      name: "Klaipėda Drift Line",
      coordinates: [55.72, 21.12],
      region: "Lithuania",
      description: "Coastal stretch where amber often surfaces after gales.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "bangputys",
      significance:
        "Sailors watch sand patterns to read Bangpūtys' double nature for the day.",
    },
    {
      id: "kolka-surge",
      name: "Kolka Surge Watch",
      coordinates: [57.75, 22.58],
      region: "Latvia",
      description: "Sharp cape where two seas meet and winds tangle.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "bangputys",
      significance: "Wind vanes carved as twin faces stand here to turn storms away from boats.",
    }
  ],
  materialLegacy: ["Amber-studded net weights", "Twin-faced wind vanes"],
  symbols: [
    { label: "Element", detail: "Salt wind over dark water" },
    { label: "Offerings", detail: "Fish scales, rope knots, sea glass" }
  ],
  regionDetails: {
    en: "Curonian Coast / Prussia",
    lt: "Kuršių marių pakrantė / Prūsija",
    lv: "Kuršu krasts / Prūsija",
  },
  tribe: {
    en: "Curonians / Prussians / Western Lithuanians",
    lt: "Kuršiai / Prūsai / Pajūrio lietuviai",
    lv: "Kurši / Prūši / Piekrastes lietuvieši",
  },
  period: {
    en: "17th Century Maritime Records (Matthäus Praetorius ~1690)",
    lt: "XVII a. jūriniai užrašai (Matthäus Praetorius ~1690 m.)",
    lv: "17. gs. jūrniecības avoti (Matthäus Praetorius ~1690. g.)",
  },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
    "Rimantas Balsys: Lietuvių ir prūsų dievai, deivės, dvasios: nuo apeigos iki prietaro (2010)",
    "Visuotinė lietuvių enciklopedija: Bangpūtys (https://www.vle.lt/straipsnis/bangputys/)"
  ],
};

export const medineMeta: DeityMeta = {
  slug: "medine",
  name: "Medinė",
  domain: "God",
  epithet: {
    en: "Lady of bark and shadow",
    lt: "Žievės ir šešėlių valdovė",
    lv: "Mizas un ēnu valdniece",
  },
  summary: {
    en: "She is the hush inside spruce trunks, guiding woodcutters who step softly and warning those who rush.",
    lt: "Ji yra tyla eglių kamienų viduje, vedanti miškakirčius, žingsniuojančius švelniai, ir perspėjanti skubančius.",
    lv: "Viņa ir klusums egļu stumbru iekšienē, vadot malkas cirtējus, kas soļo klusi, un brīdinot tos, kas steidzas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(82, 102, 84, 0.24)",
  accent: "#7aa27a",
  altNames: {
    en: "Medine",
    lt: "Medinė",
    lv: "Meža māte",
  },
  keywords: ["forest", "bark", "guardian", "path"],
  gallery: [
    {
      title: { en: "Spruce resin seal", lt: "Eglės dervos antspaudas", lv: "Egles sveķu zīmogs" },
      medium: { en: "resin, linen", lt: "derva, linas", lv: "sveķi, lins" },
      note: { en: "Pressed onto axes to remind of measured cuts.", lt: "Spaudžiamas ant kirvių, primenantis apie subalansuotus kirčius.", lv: "Nospiestas uz cirvjiem, lai atgādinātu par mērenajiem cirtieniem." },
    },
    {
      title: { en: "Moss-lined reliquary", lt: "Samanomis išklotas relikvijorius", lv: "Ar sūnām izklāta relikvijas kastīte" },
      medium: { en: "oak, moss", lt: "ąžuolas, samanos", lv: "ozols, sūnas" },
      note: { en: "Holds birch bark prayers from wood gatherers.", lt: "Laiko beržo žievės maldas iš malkakirčių.", lv: "Glabā bērza mizas lūgšanas no malkas vācējiem." },
    }
  ],
  locations: [
    {
      id: "samogitia-stand",
      name: "Samogitian Spruce Stand",
      coordinates: [55.5, 22.0],
      region: "Lithuania",
      description: "Tall spruces where ribbons mark paths approved for cutting.",
      siteType: "\"World tree\" analog sites",
      aura: "moss",
      deity: "medine",
      significance: "Cutting begins only after tapping trunks to listen for hollow refusal.",
    },
    {
      id: "gauja-corridor",
      name: "Gauja Shadow Corridor",
      coordinates: [57.25, 24.9],
      region: "Latvia",
      description: "A shaded walk where the light falls in narrow amber bands.",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "medine",
      significance: "Pilgrims hang bark slips with family names asking for safe timber gathering.",
    }
  ],
  materialLegacy: ["Resin-sealed axes", "Bark slips with charcoal prayers"],
  symbols: [
    { label: "Element", detail: "Sap slow and sure" },
    { label: "Offerings", detail: "Resin drops, moss, quiet footsteps" }
  ],
  regionDetails: {
    en: "Forest Regions / Samogitia & Aukštaitija",
    lt: "Miškų regionai / Žemaitija ir Aukštaitija",
    lv: "Mežu reģioni / Žemaitija un Augštaitija",
  },
  tribe: {
    en: "Lithuanians / Samogitians",
    lt: "Lietuviai / Žemaičiai",
    lv: "Lietuvieši / Žemaiši",
  },
  period: {
    en: "13th Century Chroniclers (1252 Volhynian Chron. 'Medein', 1261 Malalas)",
    lt: "XIII a. šaltiniai (1252 m. Ipatijaus metraštis 'Medein', 1261 m. Malalos chronografas)",
    lv: "13. gadsimta hronikas (1252. g. Volīnijas hronika 'Medein')",
  },
  references: [
    "Volhynian / Hypatian Chronicle (1252 mention: 'Medein')",
    "Malalas Chronicle Slavonic translation (1261)",
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Visuotinė lietuvių enciklopedija: Medeina (https://www.vle.lt/straipsnis/medeina/)"
  ],
};

export const giltineMeta: DeityMeta = {
  slug: "giltine",
  name: "Giltinė",
  domain: "God",
  epithet: {
    en: "Tall pale woman at the threshold",
    lt: "Aukšta blyški moteris prie slenksčio",
    lv: "Gara bāla sieviete pie sliekšņa",
  },
  summary: {
    en: "The Baltic goddess of death and sister of Laima; she appears as a tall pale woman clad in white, inflicting fatal venom with her long tongue at the mortal threshold.",
    lt: "Lietuvių mirties deivė ir Laimos sesuo; vaizduojama kaip aukšta blyški moteris baltais drabužiais, nešanti mirtį savo nuodingu liežuviu prie žmogiškojo slenksčio.",
    lv: "Baltu nāves dieviete un Laimas māsa; attēlota kā gara bāla sieviete baltās drēbēs, kas nes nāvi ar savu indīgo mēli pie cilvēka sliekšņa.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 90, 110, 0.32)",
  accent: "#8898aa",
  altNames: {
    en: "Giltinė",
    lt: "Giltinė",
    lv: "Giltinė",
  },
  keywords: ["death", "white", "serpent", "threshold"],
  gallery: [
    {
      title: { en: "White burial shroud", lt: "Baltasis laidotuvių drobulė", lv: "Baltais bēru lins" },
      medium: { en: "linen", lt: "linas", lv: "lins" },
      note: { en: "Left at crossroads on All Souls Night for the pale goddess.", lt: "Palikta kryžkelėse Vėlinių naktį blyškiajai deivei.", lv: "Atstāts krustceļos Visu dvēseļu naktī bālajai dievietei." },
    },
    {
      title: { en: "Iron death-hook", lt: "Geležinis mirties kablys", lv: "Dzelzs nāves āķis" },
      medium: { en: "bog iron", lt: "pelkių geležis", lv: "purva dzelzs" },
      note: { en: "Traditional Lithuanian grave marker with serpent motif.", lt: "Tradicinis lietuviškos kapavietės ženklas su žalčio motyvu.", lv: "Tradicionāls lietuviešu kapa marķieris ar čūskas motīvu." },
    }
  ],
  locations: [
    {
      id: "salantai-burial",
      name: "Salantai Burial Mounds",
      coordinates: [56.05, 21.57],
      region: "Lithuania",
      description: "Ancient burial mounds in Samogitia where offerings were laid for the dead.",
      siteType: "Mythic hills / burial mounds",
      aura: "mist",
      deity: "giltine",
      significance: "Families left milk and bread at the mound edge on Vėlinės night.",
    },
    {
      id: "dzukija-crossroads",
      name: "Dzūkija Crossroads",
      coordinates: [54.15, 24.12],
      region: "Lithuania",
      description: "A forested crossroads where travellers left offerings not to be taken.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "giltine",
      significance: "A white stone marks where the pale goddess was seen standing at midnight.",
    }
  ],
  materialLegacy: ["Linen shrouds with serpent motifs", "Iron death-hooks at gravesides"],
  symbols: [
    { label: "Element", detail: "Cold white mist at dusk" },
    { label: "Offerings", detail: "Milk, white bread, silence" }
  ],
  regionDetails: {
    en: "Samogitia / All Lithuania",
    lt: "Žemaitija / Visa Lietuva",
    lv: "Žemaitija / Visa Lietuva",
  },
  tribe: {
    en: "Lithuanians / Samogitians",
    lt: "Lietuviai / Žemaičiai",
    lv: "Lietuvieši / Žemaiši",
  },
  period: {
    en: "16th-17th Century Records (1582 Jan Łasicki, 1690 M. Praetorius)",
    lt: "XVI-XVII a. šaltiniai (1582 m. Jonas Lasickis, 1690 m. M. Praetorius)",
    lv: "16.-17. gadsimta avoti (1582. g. J. Lasickis)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Visuotinė lietuvių enciklopedija: Giltinė (https://www.vle.lt/straipsnis/giltine/)"
  ],
};

export const pukisMeta: DeityMeta = {
  slug: "pukis",
  name: "Pūķis",
  domain: "Creature",
  epithet: {
    en: "Fire-breath in the hayloft",
    lt: "Ugnies kvapas šieno saugykloje",
    lv: "Ugunīgā elpa siena šķūnī",
  },
  summary: {
    en: "A domestic fire-serpent that brings wealth to its keeper but demands secrecy and surrender of the soul at its contract's end.",
    lt: "Naminis ugnies gyvatė, nešanti turtus savo šeimininkui, bet reikalaujanti paslapties ir sielos pardavimo sutarties pabaigoje.",
    lv: "Mājas uguns čūska, kas nes bagātību savam turētājam, bet prasa noslēpumu un dvēseles atdošanu līguma beigās.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(190, 100, 50, 0.3)",
  accent: "#d4754e",
  altNames: {
    en: "Pūķis",
    lt: "Pūķis",
    lv: "Pūķis",
  },
  keywords: ["dragon", "wealth", "fire", "serpent", "household"],
  gallery: [
    {
      title: { en: "Amber fire-dragon amulet", lt: "Gintarinis ugniagesio drakono amuletas", lv: "Dzintara uguns-pūķa amulets" },
      medium: { en: "Baltic amber", lt: "Baltijos gintaras", lv: "Baltijas dzintars" },
      note: { en: "Worn by those seeking pūķis's favour, found in Latvian folk collections.", lt: "Nešiojamas tų, kurie ieško pūķio palankumo; rastas latvių tautosakos kolekcijose.", lv: "Nests tiem, kas meklē pūķa labvēlību; atrasts latviešu folkloras kolekcijās." },
    },
    {
      title: { en: "Charred roof-beam", lt: "Sudegusi stogo sija", lv: "Piesvilinēta jumta sija" },
      medium: { en: "oak, pine pitch", lt: "ąžuolas, pušų derva", lv: "ozols, priedes darva" },
      note: { en: "Evidence of pūķis visits — scorched entry point in a farmstead loft.", lt: "Pūķio apsilankymų įrodymas — apdegęs įėjimo taškas ūkinio pastato palėpėje.", lv: "Pūķa apciemojumu liecība — apdeguša ieeja saimniecības bēniņos." },
    }
  ],
  locations: [
    {
      id: "rundale-fields",
      name: "Rundale Fields",
      coordinates: [56.41, 24.02],
      region: "Latvia",
      description: "The Zemgale plain where pūķis tales concentrate, near the Rundale estate.",
      siteType: "Sacrifice / offering sites",
      aura: "amber",
      deity: "pukis",
      significance: "Farmers who found scorched circles in grain fields believed pūķis had visited.",
    },
    {
      id: "liepaja-shore",
      name: "Liepāja Shore",
      coordinates: [56.51, 21.01],
      region: "Latvia",
      description: "Coastal dunes where the flying fire-serpent was said to enter from the sea.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "pukis",
      significance: "Fishermen left grain on the dunes to invite prosperity and ward off bad catches.",
    }
  ],
  materialLegacy: ["Flame-scorched grain offerings", "Red-thread serpent charms"],
  symbols: [
    { label: "Element", detail: "Red fire-trail over barns" },
    { label: "Offerings", detail: "Grain, cream, black bread" }
  ],
  regionDetails: {
    en: "Kurzeme / Zemgale / Lower Lithuania",
    lt: "Kuršas / Žiemgala / Pajūrio Lietuva",
    lv: "Kurzeme / Zemgale / Piekrastes Lietuva",
  },
  tribe: {
    en: "Latvians / Semigallians / Curonians",
    lt: "Latviai / Žiemgaliai / Kuršiai",
    lv: "Latvieši / Zemgaļi / Kurši",
  },
  period: {
    en: "17th-19th Century Records (1690 M. Praetorius, P. Šmits)",
    lt: "XVII-XIX a. šaltiniai (1690 m. M. Praetorius, P. Šmits)",
    lv: "17.-19. gadsimta avoti (1690. g. M. Praetorius)",
  },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
    "Pēteris Šmits: Latviešu pasakas un teikas (1925–37)",
    "Latvijas Nacionālā enciklopēdija",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/P%C5%AB%C4%B7is)"
  ],
};

export const ausrineMeta: DeityMeta = {
  slug: "ausrine",
  name: "Aušrinė",
  domain: "God",
  epithet: {
    en: "Handmaiden who kindles the sky",
    lt: "Tarnaitė, uždeganti dangų",
    lv: "Kalpone, kas iededzina debesis",
  },
  summary: {
    en: "The morning star goddess rises before dawn to prepare Saulė's bed, kindle her fire, and saddle her horses for the daily journey.",
    lt: "Ryto žvaigždės deivė kyla prieš aušrą, kad paruoštų Saulės lovą, užkurtų jos ugnį ir jodintų jos žirgus kasdienei kelionei.",
    lv: "Rīta zvaigznes dieviete ceļas pirms rītausmas, lai sagatavotu Saules gultu, iekurtu uguni un sedlotu viņas zirgus ikdienas ceļojumam.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(255, 200, 100, 0.2)",
  accent: "#f0c060",
  altNames: {
    en: "Ausrine",
    lt: "Aušrinė",
    lv: "Auseklis",
  },
  keywords: ["dawn", "morning star", "fire", "Venus"],
  gallery: [
    {
      title: { en: "Golden thread brooch", lt: "Aukso siūlo sagė", lv: "Zelta diegā sakta" },
      medium: { en: "gilded bronze", lt: "paauksuota bronza", lv: "apzeltīta bronza" },
      note: { en: "Worn by young women at dawn rituals, symbolising the morning star's light.", lt: "Nešiojama jaunų moterų aušros apeigose, simbolizuojančiose ryto žvaigždės šviesą.", lv: "Nesta jaunām sievietēm rīta ausmas rituālos, simbolizējot rīta zvaigznes gaismu." },
    },
    {
      title: { en: "Dawn water vessel", lt: "Aušros vandens indas", lv: "Ausmas ūdens trauks" },
      medium: { en: "clay", lt: "molis", lv: "māls" },
      note: { en: "Filled with dew before sunrise and offered with sung prayers.", lt: "Prisipildytas rasos prieš saulėtekį ir paaukotas dainuojant maldas.", lv: "Piepildīts ar rasu pirms saullēkta un upurēts ar dziedātām lūgšanām." },
    }
  ],
  locations: [
    {
      id: "palanga-dawn-shore",
      name: "Palanga Dawn Shore",
      coordinates: [55.92, 21.07],
      region: "Lithuania",
      description: "The amber coast where dawn prayers were sung to the morning star.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "ausrine",
      significance: "Girls washed their faces in sea dew at first light to receive Aušrinė's blessing.",
    },
    {
      id: "siauliai-morning",
      name: "Šiauliai Dawn Ridge",
      coordinates: [55.93, 23.32],
      region: "Lithuania",
      description: "A ridge east of Šiauliai from which the morning star is visible above the plain.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "ausrine",
      significance: "Farmers watched for Aušrinė before planting to know when to begin work.",
    }
  ],
  materialLegacy: ["Dawn-water clay vessels", "Morning star embroidery motifs"],
  symbols: [
    { label: "Element", detail: "First light before sunrise" },
    { label: "Offerings", detail: "Dew water, golden thread, smoke" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania & Latvia)",
    lt: "Visos baltų žemės (Lietuva ir Latvija)",
    lv: "Visas baltu zemes (Lietuva un Latvija)",
  },
  tribe: {
    en: "Lithuanians / Samogitians / Latvians",
    lt: "Lietuviai / Žemaičiai / Latviai",
    lv: "Lietuvieši / Žemaiši / Latvieši",
  },
  period: {
    en: "16th Century Sources (1582 Jan Łasicki 'Ausca')",
    lt: "XVI a. šaltiniai (1582 m. Jonas Lasickis 'Ausca')",
    lv: "16. gadsimta avoti (1582. g. J. Lasickis 'Ausca')",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Krišjānis Barons: Latvju dainas (Auseklis)",
    "Visuotinė lietuvių enciklopedija: Aušrinė (https://www.vle.lt/straipsnis/ausrine/)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai (1996–2005)"
  ],
};

export const maraMeta: DeityMeta = {
  slug: "mara",
  name: "Māra",
  domain: "God",
  epithet: {
    en: "Great Mother of the material world",
    lt: "Didžioji Motina materialaus pasaulio",
    lv: "Lielā Māte materiālās pasaules",
  },
  summary: {
    en: "Māra governs all physical existence — cattle, earth, cloth, and death — receiving souls when they leave Dievs's sky to return to her earth.",
    lt: "Māra valdo visą fizinę egzistenciją — galvijus, žemę, audinį ir mirtį — priimdama sielas, kai jos palieka Dievs dangų ir grįžta į jos žemę.",
    lv: "Māra pārvalda visu fizisko esamību — lopus, zemi, audumu un nāvi — saņemot dvēseles, kad tās pamet Dieva debesis, lai atgrieztos viņas zemē.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1510784722466-f2aa240d9565?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(120, 90, 70, 0.26)",
  accent: "#b07850",
  altNames: {
    en: "Mara",
    lt: "Māra",
    lv: "Māra",
  },
  keywords: ["earth", "cattle", "weaving", "death", "rebirth"],
  gallery: [
    {
      title: { en: "Māra's cross pendant", lt: "Māros kryžiaus pakabukas", lv: "Māras krusta kulons" },
      medium: { en: "silver", lt: "sidabras", lv: "sudrabs" },
      note: { en: "Pre-Christian solar cross associated with Māra, still worn in Latvia.", lt: "Ikrikščioniškas saulės kryžius, susijęs su Māra; tebenešiojamas Latvijoje.", lv: "Pirms-kristīgs saules krusts, kas saistīts ar Māru; joprojām nēsāts Latvijā." },
    },
    {
      title: { en: "Sacred cow skull", lt: "Šventosios karvės kaukolė", lv: "Svētā govs galvaskauss" },
      medium: { en: "bone, red ochre", lt: "kaulas, raudonasis ochras", lv: "kauls, sarkanā okra" },
      note: { en: "Placed in barn eaves to invoke Māra's protection of cattle.", lt: "Dedama tvarto stogtarpyje, kviečiant Māros karvelių globą.", lv: "Novietots staļļa jumta pakājē, lai aicinātu Māras lopu aizsardzību." },
    }
  ],
  locations: [
    {
      id: "gauja-cliff",
      name: "Gauja Valley Clay Cliff",
      coordinates: [57.15, 24.85],
      region: "Latvia",
      description: "Red sandstone bank where milk was poured into hollows at springtime.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "mara",
      significance: "On March 25 — Māras diena — farmers first touched the soil to invite her blessing.",
    },
    {
      id: "eleja-stone",
      name: "Eleja Hollow Stone",
      coordinates: [56.4259, 23.6934],
      region: "Latvia",
      description: "A massive glacial erratic boulder with a deep hollow cup-mark on its upper surface, integrated into the stone wall of Eleja Manor park.",
      siteType: "Ritual stones",
      aura: "moss",
      deity: "mara",
      significance: "Historically revered as a sacred offering stone where peasants left libations of milk, grain, or beer to secure soil fertility.",
    }
  ],
  materialLegacy: ["Māra's cross amulets", "Sacred cattle skull barn charms"],
  symbols: [
    { label: "Element", detail: "Loam of plowed fields" },
    { label: "Offerings", detail: "Milk, earth, woven cloth" }
  ],
  regionDetails: {
    en: "Kurzeme / Vidzeme / All Latvia",
    lt: "Kuršas / Vidžemė / Visa Latvija",
    lv: "Kurzeme / Vidzeme / Visa Latvija",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "18th-19th Century Collections",
    lt: "XVIII-XIX a. tautosakos rinkiniai",
    lv: "18.-19. gadsimta folkloras krājumi",
  },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/M%C4%81ra)"
  ],
};

export const jumisMeta: DeityMeta = {
  slug: "jumis",
  name: "Jumis",
  domain: "God",
  epithet: {
    en: "Double-stalked blessing of the harvest",
    lt: "Dviguba derliaus palaima",
    lv: "Divkāšu ražas svētība",
  },
  summary: {
    en: "Jumis is found in grain fields as a double-headed stalk — two stalks grown from one root — and the farmer who finds it is blessed with abundance for the year.",
    lt: "Jumis randamas javų laukuose kaip dvigalvė stiebas — du stiebai, augantys iš vieno šakniagumbio — ir ūkininkas, jį radęs, gaus gausybės palaiminimą metams.",
    lv: "Jumis atrodams labības laukos kā divgalvu stiebrs — divi stiebri augot no vienas saknes — un zemnieks, kurš to atrod, tiek apveltīts ar bagātību gadam.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 170, 80, 0.25)",
  accent: "#d4a94b",
  altNames: {
    en: "Jumis",
    lt: "Jumis",
    lv: "Jumis",
  },
  keywords: ["grain", "harvest", "double", "fertility", "last-sheaf"],
  gallery: [
    {
      title: { en: "Double-grain crown", lt: "Dvigubų grūdų karūna", lv: "Dubultgraudu vainags" },
      medium: { en: "braided rye", lt: "pinami rugiai", lv: "pīti rudzi" },
      note: { en: "Hung above the farmhouse door after harvest — Jumis's symbol.", lt: "Kabinama virš sodybos durų po derliaus — Jumio simbolis.", lv: "Karāts virs lauku mājas durvīm pēc ražas — Jumja simbols." },
    },
    {
      title: { en: "Last sheaf effigy", lt: "Paskutinio pėdo efigija", lv: "Pēdējā kūļa efigija" },
      medium: { en: "wheat straw", lt: "kviečių šiaudai", lv: "kviešu salmi" },
      note: { en: "Woven into a human shape, given a name, kept through winter.", lt: "Nupinta žmogaus pavidalu, pavadinta vardu, saugoma per žiemą.", lv: "Austas cilvēka formā, dots vārds, paturēts cauru ziemu." },
    }
  ],
  locations: [
    {
      id: "krustpils-last-sheaf",
      name: "Krustpils Harvest Ground",
      coordinates: [56.50, 26.00],
      region: "Latvia",
      description: "Daugava basin fields where last-sheaf Jumis rituals were documented into the early 20th century.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "jumis",
      significance: "The last sheaf of rye was braided and placed to protect the winter grain store.",
    },
    {
      id: "vidzeme-rye-ridge",
      name: "Vidzeme Rye Ridge",
      coordinates: [57.10, 25.20],
      region: "Latvia",
      description: "Highland rye fields of Vidzeme where double-stalked grains were treated as sacred finds.",
      siteType: "Sacrifice / offering sites",
      aura: "amber",
      deity: "jumis",
      significance: "Finding a jumis stalk was reason to call the entire village for a feast.",
    }
  ],
  materialLegacy: ["Braided rye harvest crowns", "Double-grain pressed into clay seals"],
  symbols: [
    { label: "Element", detail: "Two stalks from one root" },
    { label: "Offerings", detail: "Last grain, barley beer, harvest bread" }
  ],
  regionDetails: {
    en: "Vidzeme / Zemgale",
    lt: "Vidžemė / Žiemgala",
    lv: "Vidzeme / Zemgale",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "18th Century Records (1704 L. Depkin, 1777 J. Lange, 1789 G. F. Stender) & Oral Dainas",
    lt: "XVIII a. šaltiniai (1704 m. L. Depkinas, 1777 m. J. Lange, 1789 m. G. F. Stenderis) ir dainos",
    lv: "18. gadsimta avoti (1704. g. L. Depkins, 1777. g. J. Lange, 1789. g. G. F. Stenders) un dainas",
  },
  references: [
    "Liene Neulande: Jumis senlatviešu reliģijā (Stockholm 1977 / Rīga 2001)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/33827)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija"
  ],
};

export const usinsMeta: DeityMeta = {
  slug: "usins",
  name: "Ūsiņš",
  domain: "God",
  epithet: {
    en: "Light-bringer riding white horses at dawn",
    lt: "Šviesos nešėjas, jojantis baltaisiais žirgais aušroje",
    lv: "Gaismas nesējs, jājot baltiem zirgiem rītausmā",
  },
  summary: {
    en: "The spring deity who opens the pasture season, blesses horses, and carries light across the land at the turning point between dark and growing months.",
    lt: "Pavasario dievybė, atverianti ganyklos sezoną, laiminanti žirgus ir nešanti šviesą per žemę tamsių ir augančių mėnesių sandūroje.",
    lv: "Pavasara dievība, kas atver ganu sezonu, svētī zirgus un nes gaismu pāri zemei tumšo un augošo mēnešu pavērsienā.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1534082456-9d7e4139e8a6?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 160, 90, 0.22)",
  accent: "#c9a060",
  altNames: {
    en: "Usins",
    lt: "Ūsiņš",
    lv: "Ūsiņš",
  },
  keywords: ["light", "horses", "spring", "bees", "pasture"],
  gallery: [
    {
      title: { en: "Horse wreath", lt: "Žirgų vainikas", lv: "Zirgu vainags" },
      medium: { en: "oak leaves, herbs", lt: "ąžuolo lapai, žolės", lv: "ozola lapas, garšaugi" },
      note: { en: "Placed on horses' heads on Ūsiņš Day (April 23) before first pasturing.", lt: "Dedamas ant žirgų galvų Ūsiņo dieną (balandžio 23 d.) prieš pirmąjį ganymą.", lv: "Novietots uz zirgu galvām Ūsiņa dienā (23. aprīlī) pirms pirmās ganīšanas." },
    },
    {
      title: { en: "Spring candle cluster", lt: "Pavasario žvakių grupelė", lv: "Pavasara sveces pušķis" },
      medium: { en: "beeswax", lt: "bičių vaškas", lv: "bišu vasks" },
      note: { en: "Lit before dawn on Ūsiņdiena to welcome Ūsiņš's return.", lt: "Uždegama prieš aušrą Ūsiņo dieną, sveikant sugrįžtantį Ūsiņą.", lv: "Aizdegtas pirms ausmas Ūsiņdienā, lai sagaidītu Ūsiņa atgriešanos." },
    }
  ],
  locations: [
    {
      id: "jelgava-pasture",
      name: "Jelgava Spring Pasture",
      coordinates: [56.65, 23.72],
      region: "Latvia",
      description: "The broad Zemgale meadows where horse-blessing rituals were performed at spring opening.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "usins",
      significance: "Horses decorated with oak wreaths were led here at dawn on Ūsiņdiena.",
    },
    {
      id: "sabile-horse-meadow",
      name: "Sabile Horse Meadow",
      coordinates: [57.05, 22.55],
      region: "Latvia",
      description: "Ancient Curonian meadow associated with sacred horse ritual and light-deity worship.",
      siteType: "Seasonal festival locations",
      aura: "moss",
      deity: "usins",
      significance: "Farmers brought their best horse here for Ūsiņš to bless before the growing season.",
    }
  ],
  materialLegacy: ["Oak-leaf horse wreaths", "Beeswax spring candles"],
  symbols: [
    { label: "Element", detail: "First spring light on dew" },
    { label: "Offerings", detail: "Horse feed, barley beer, candles" }
  ],
  regionDetails: {
    en: "Kurzeme / Vidzeme",
    lt: "Kuršas / Vidžemė",
    lv: "Kurzeme / Vidzeme",
  },
  tribe: {
    en: "Latvians / Curonians",
    lt: "Latviai / Kuršiai",
    lv: "Latvieši / Kurši",
  },
  period: {
    en: "17th Century Attestation (Fabricius 1610)",
    lt: "XVII a. paliudijimas (Fabricijus 1610)",
    lv: "17. gs. apliecinājums (Fabricius 1610)",
  },
  references: [
    "Dionysius Fabricius: Livonicae historiae compendiosa series (1610)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/%C5%AAsi%C5%86%C5%A1)"
  ],
};

export const vakarineMeta: DeityMeta = {
  slug: "vakarine",
  name: "Vakarinė",
  domain: "God",
  epithet: {
    en: "Silver lamp that tucks the sun to rest",
    lt: "Sidabrinis žibintas, guldantis saulę miegoti",
    lv: "Sudraba lukturis, kas noliek sauli gulēt",
  },
  summary: {
    en: "Vakarinė is the goddess of the Evening Star, Venus at dusk. Sister of Aušrinė, she prepares Saulė's bed as the sun descends into the western sea.",
    lt: "Vakarinė yra vakaro žvaigždės deivė, Venera sutemų metu. Aušrinės sesuo, ji pakloja Saulei lovą, kai ši leidžiasi į vakarų jūrą.",
    lv: "Vakarīne ir vakara zvaigznes dieviete, Venera krēslas laikā. Auseklītes māsa, viņa sagatavo Saulei gultu, kad tā varētu nolaisties rietumu jūrā.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 50, 120, 0.28)",
  accent: "#9370db",
  altNames: {
    en: "Vakarine, Evening Star",
    lt: "Vakarinė, Vakaro žvaigždė",
    lv: "Vakarīne, Vakara zvaigzne",
  },
  keywords: ["evening star", "venus", "sunset", "twilight", "celestial handmaiden", "sun's bed"],
  gallery: [
    {
      title: { en: "Silver tray of evening light", lt: "Sidabrinė vakaro šviesos lėkštė", lv: "Sudraba vakara gaismas paplāte" },
      medium: { en: "hammered silver", lt: "kaustas sidabras", lv: "kalts sudrabs" },
      note: { en: "Symbolic vessel for carrying the last warmth of the sun across the horizon.", lt: "Simbolinis indas, skirtas nešti paskutiniam saulės šilumos mirkui per horizontą.", lv: "Simbolisks trauks pēdējā saules siltuma nešanai pāri horizontam." },
    },
    {
      title: { en: "Linen evening cloth", lt: "Lino vakaro audeklas", lv: "Linu vakara audums" },
      medium: { en: "flax", lt: "linai", lv: "lini" },
      note: { en: "Women's offering woven with silver thread, laid at hilltops at dusk for Vakarinė.", lt: "Moterų pasiūlymas, austas sidabro siūlu, dedamas ant kalvų sutemos metu Vakarinei.", lv: "Sieviešu upuris, austs ar sudraba diegs, likts uz pakalniem krēslā Vakarinei." },
    }
  ],
  locations: [
    {
      id: "samogitia-sunset-hill",
      name: "Samogitian Sunset Hill",
      coordinates: [55.92, 22.28],
      region: "Lithuania",
      description: "A hilltop in Samogitia where folk songs about Vakarinė were sung at dusk after harvest.",
      siteType: "Mythic hills / burial mounds",
      aura: "amber",
      deity: "vakarine",
      significance: "Women gathered here at sunset to sing autumn songs to Vakarinė, lighting candles as the first star appeared.",
    },
    {
      id: "jurmala-evening-shore",
      name: "Jūrmala Evening Shore",
      coordinates: [56.97, 23.77],
      region: "Latvia",
      description: "Baltic shore where Latvian songs describe the Evening Star guiding Saule to rest in the western sea.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "vakarine",
      significance: "Fishermen noted the Evening Star as Saule's lamp being set into the waves, guiding boats safely to shore.",
    }
  ],
  materialLegacy: ["Silver-thread evening cloths", "Sunset candle rituals", "Venus-observation hilltops"],
  symbols: [
    { label: "Planet", detail: "Venus as Evening Star" },
    { label: "Function", detail: "Prepares the Sun's rest" },
    { label: "Offering", detail: "Flax candles and silver thread" }
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania & Latvia)",
    lt: "Visos baltų žemės (Lietuva ir Latvija)",
    lv: "Visas baltu zemes (Lietuva un Latvija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "16th Century Sources (1582 Jan Łasicki)",
    lt: "XVI a. šaltiniai (1582 m. Jonas Lasickis)",
    lv: "16. gadsimta avoti (1582. g. J. Lasickis)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "Visuotinė lietuvių enciklopedija: Vakarinė (https://www.vle.lt/straipsnis/vakarine/)"
  ],
};

export const teliavelIsMeta: DeityMeta = {
  slug: "teliavelis",
  name: "Teliavelis",
  domain: "God",
  epithet: {
    en: "Blacksmith who hammered the Sun into the sky",
    lt: "Kalvis, nukalęs Saulę ir įmetęs ją į dangų",
    lv: "Kalējs, kurš nokalēja Sauli un iemeta to debesīs",
  },
  summary: {
    en: "Teliavelis is the divine blacksmith of Lithuanian mythology, first recorded in the 13th-century Hypatian Codex. He forged the Sun and hurled it into the sky, giving light to the world.",
    lt: "Teliavelis yra lietuvių mitologijos dangiškasis kalvis, pirmą kartą paminėtas XIII a. Ipatijaus metraštyje. Jis nukalė Saulę ir įmetė ją į dangų, suteikdamas pasauliui šviesą.",
    lv: "Teliavelis ir lietuviešu mitoloģijas debesu kalējs, kas pirmo reizi minēts 13. gadsimta Hipātija hronikā. Viņš nokalēja Sauli un iemeta to debesīs, dāvājot pasaulei gaismu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1565120130891-55ba6d2eecb8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 100, 20, 0.28)",
  accent: "#c87832",
  altNames: {
    en: "Teliavel, Kalvelis, Celestial Smith",
    lt: "Teliavelis, Kalvelis, Dangiškasis kalvis",
    lv: "Teliavelis, Kalvējs, Debesu kalējs",
  },
  keywords: ["blacksmith", "sun", "forge", "creation myth", "fire", "celestial smith", "cultural hero"],
  gallery: [
    {
      title: { en: "Bronze sun-disc pendant", lt: "Bronzinis saulės disko pakabukas", lv: "Bronzas saules diska kulons" },
      medium: { en: "cast bronze", lt: "liedinė bronza", lv: "lieta bronza" },
      note: { en: "Baltic Bronze Age pendant representing the Sun forged by the divine smith; found across Lithuania.", lt: "Baltų bronzos amžiaus pakabukas, vaizduojantis Saulę, nukalatą dieviškojo kalvio; rastas visoje Lietuvoje.", lv: "Baltu bronzas laikmeta kulons, kas attēlo Sauli, kalt dievišķajam kalējam; atrasts visā Lietuvā." },
    },
    {
      title: { en: "Iron anvil shard", lt: "Geležinė priekalo šukė", lv: "Dzelzs laktas lauska" },
      medium: { en: "iron", lt: "geležis", lv: "dzelzs" },
      note: { en: "Ritual iron fragments deposited at smithing sites as offerings to the divine craftsman.", lt: "Ritualiniai geležies fragmentai, padėti kalvystės vietose kaip pasiūlymai dieviškajam meistrui.", lv: "Rituāli dzelzs gabali, novietoti kaldināšanas vietās kā upuri dievišķajam amatniekam." },
    }
  ],
  locations: [
    {
      id: "kernave-forge-mound",
      name: "Kernave Forge Mound",
      coordinates: [54.88, 24.84],
      region: "Lithuania",
      description: "Sacred mound near Kernave associated in folk tradition with the celestial forge of Teliavelis.",
      siteType: "Mythic hills / burial mounds",
      aura: "amber",
      deity: "teliavelis",
      significance: "Folk memory associates the amber found on mound slopes with sparks from Teliavelis's divine anvil.",
    }
  ],
  materialLegacy: ["Bronze Age sun-disc pendants", "Iron ritual deposits at smithing sites", "Amber as divine sparks"],
  symbols: [
    { label: "Attribute", detail: "Hammer and divine anvil" },
    { label: "Creation", detail: "Forged the Sun (Hypatian Codex 1261)" },
    { label: "Alliance", detail: "Works with Dievas and Perkūnas" }
  ],
  regionDetails: {
    en: "Lithuania (Aukštaitija)",
    lt: "Lietuva (Aukštaitija)",
    lv: "Lietuva (Augštaitija)",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "13th Century (Hypatian Codex 1252/1261)",
    lt: "XIII a. (Ipatijaus metraštis 1252/1261)",
    lv: "13. gadsimts (Hipātija hronika 1252/1261)",
  },
  references: [
    "Hypatian Codex / Ipat'evskaja letopis' (13th c.) — first attestation at Mindaugas's court",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
    "Visuotinė lietuvių enciklopedija: Teliavelis (https://www.vle.lt/straipsnis/teliavelis/)"
  ],
};

export const daliaMeta: DeityMeta = {
  slug: "dalia",
  name: "Dalia",
  domain: "God",
  epithet: {
    en: "Weaver of the portion each life receives",
    lt: "Audėja, išaudžianti tai, kas kiekvienam priklauso",
    lv: "Audēja, kas nosauc katras dzīves daļu",
  },
  summary: {
    en: "Dalia is the Lithuanian goddess of fate and allotted portion. While Laima governs life's overall course, Dalia decides each person's share of earthly wealth, livestock, and property.",
    lt: "Dalia yra lietuvių likimo ir dalios deivė. Laima lemia bendrąjį gyvenimo kelią, o Dalia nustato kiekvieno žmogaus dalią — turtą, gyvulius ir žemę.",
    lv: "Dalia ir lietuviešu likteņa un daļas dieviete. Laima nosaka kopējo dzīves gaitu, savukārt Dalia nosaka katras personas zemes mantu, lopus un īpašumu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 120, 150, 0.24)",
  accent: "#5892a8",
  altNames: {
    en: "Dalia, Goddess of Portion",
    lt: "Dalia, Dalios deivė",
    lv: "Dalia, Daļas dieviete",
  },
  keywords: ["fate", "portion", "wealth", "weaving", "destiny", "material fortune", "dalis"],
  gallery: [
    {
      title: { en: "Woven fate cloth", lt: "Austinis likimo audeklas", lv: "Austas likteņa audums" },
      medium: { en: "linen with pattern", lt: "linas su raštu", lv: "lins ar rakstu" },
      note: { en: "Ritual cloth woven as a dowry offering to Dalia at birth ceremonies.", lt: "Ritualinis audeklas, austs kaip kraičio pasiūlymas Daliai gimdymo apeigose.", lv: "Rituāls audums, austs kā pūra upuris Dalijai dzimšanas ceremonijās." },
    },
    {
      title: { en: "Grain-measuring vessel", lt: "Grūdų matavimo indas", lv: "Graudu mēršanas trauks" },
      medium: { en: "clay pot", lt: "molinis puodas", lv: "māla pods" },
      note: { en: "Used to portend the amount of harvest Dalia would allot a household.", lt: "Naudotas numanyti derliaus kiekiui, kurį Dalia skirtų namų ūkiui.", lv: "Izmantots, lai pareģotu ražas apjomu, ko Dalia piešķirtu mājsaimniecībai." },
    }
  ],
  locations: [
    {
      id: "zemaitija-fate-spring",
      name: "Samogitian Fate Spring",
      coordinates: [55.84, 22.18],
      region: "Lithuania",
      description: "Sacred spring in Samogitia where offerings were made to the fate goddesses, particularly at births.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "dalia",
      significance: "Women brought woven cloth and grain to Dalia at this spring to secure the newborn's material fortune.",
    }
  ],
  materialLegacy: ["Birth-offering cloths", "Grain-measuring vessels", "Ritual scissors (fate-cutting)"],
  symbols: [
    { label: "Name", detail: "From 'dalis' (portion, share)" },
    { label: "Function", detail: "Material fate and wealth distribution" },
    { label: "Companion", detail: "Works alongside Laima" }
  ],
  regionDetails: {
    en: "Lithuania (Aukštaitija & Samogitia)",
    lt: "Lietuva (Aukštaitija ir Žemaitija)",
    lv: "Lietuva (Augštaitija un Žemaitija)",
  },
  tribe: {
    en: "Lithuanians & Samogitians",
    lt: "Lietuviai ir Žemaičiai",
    lv: "Lietuvieši un Žemaiši",
  },
  period: {
    en: "19th-20th Century Folklore Reconstruction (N. Vėlius 1983)",
    lt: "XIX-XX a. tautosakos rekonstrukcija (N. Vėlius 1983)",
    lv: "19.-20. gs. folkloras rekonstrukcija",
  },
  references: [
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Algirdas Julius Greimas: Of Gods and Men (1992)",
    "Visuotinė lietuvių enciklopedija: Dalia (https://www.vle.lt/straipsnis/dalia/)"
  ],
};

export const patollaMeta: DeityMeta = {
  slug: "patollo",
  name: "Patollo",
  domain: "God",
  epithet: {
    en: "Pale elder shrouded in white at the world's root",
    lt: "Blyškus senis, baltu drobule aprištu galva prie pasaulio šaknų",
    lv: "Bāls vecis baltā drānā pasaules saknēs",
  },
  summary: {
    en: "Patollo (Peckols) is the Old Prussian god of the underworld and death, one of the sacred triad at Romuva. He is depicted as a pale, corpse-faced elder wrapped in a white shroud.",
    lt: "Pikulis (Peckols, Patollo) yra senprūsių požemio ir mirties dievas, vienas iš trijų Romovės šventyklos dievų. Jis vaizduojamas kaip blyškiaveidis senolis, suvyniotas balto drobės.",
    lv: "Pikulis (Peckols, Patollo) ir seno prūšu pazemes un nāves dievs, viens no trim Romuvesas svētnīcas dieviem. Viņš tiek tēlots kā bāla sejas vecis, aptīts baltā drānā.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1544985361-b420d7a77043?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(30, 30, 50, 0.44)",
  accent: "#505570",
  altNames: {
    en: "Peckols, Pikulis, Pikuolas",
    lt: "Pikulis, Pikuolas, Peckols",
    lv: "Pikulis, Peckols, Patollo",
  },
  keywords: ["underworld", "death", "romuva", "prussian", "darkness", "shroud", "ancestral spirits"],
  gallery: [
    {
      title: { en: "White burial shroud", lt: "Baltasis laidotuvių drobulė", lv: "Baltais bēru lins" },
      medium: { en: "linen", lt: "linas", lv: "lins" },
      note: { en: "The white cloth head-covering of Patollo's idol at Romuva, described by Grunau (1529).", lt: "Baltasis Patolo stabulo galvos apdangalas Romuvoje, aprašytas Grunau (1529).", lv: "Baltā galvas pārklāja Patollo elka Romuvā, aprakstīts Grunau (1529)." },
    },
    {
      title: { en: "Skull offering vessel", lt: "Kaukolės aukojimo indas", lv: "Galvaskausa upura trauks" },
      medium: { en: "carved wood", lt: "drožinėtas medis", lv: "griests koks" },
      note: { en: "Ritual container for ash offerings made to the Lord of Shadows at winter rites.", lt: "Ritualinis pelenų paaukojimų Šešėlių Valdovui žiemos apeigose indas.", lv: "Rituāls trauks pelnu upuriem Ēnu Kungam ziemas rituālos." },
    }
  ],
  locations: [
    {
      id: "romuva-sacred-oak",
      name: "Romuva Sacred Oak Grove",
      coordinates: [55.45, 21.52],
      region: "Lithuania",
      description: "The legendary sacred grove of Romuva where the three divine idols stood beneath an eternal oak. Patollo occupied the shadowed northern side.",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "patollo",
      significance: "An eternal sacred fire burned day and night; Patollo's white-shrouded idol stood on the shadow side of the great oak.",
    }
  ],
  materialLegacy: ["White shroud offerings", "Ash-fire ritual rites", "Winter solstice death ceremonies"],
  symbols: [
    { label: "Appearance", detail: "Pale elder, white head-shroud" },
    { label: "Triad", detail: "Romuva triad with Perkūns and Patrimpas" },
    { label: "Domain", detail: "Death, shadows, and ancestral spirits" }
  ],
  regionDetails: {
    en: "Old Prussia (Nadruvia / Romuva region)",
    lt: "Senoji Prūsija (Nadruvija / Romovos sritis)",
    lv: "Senā Prūsija (Nadruvia / Romuvesas apgabals)",
  },
  tribe: {
    en: "Old Prussians (Prūsai)",
    lt: "Senprūsiai (Prūsai)",
    lv: "Senie prūši (Prūsi)",
  },
  period: {
    en: "Medieval — 1418 Warmia Document ('patollu') & Simon Grunau (1529)",
    lt: "Viduramžiai — 1418 m. Varmės dokumentas ('patollu') ir Simonas Grunau (1529)",
    lv: "Viduslaiki — 1418. g. Vārmijas dokuments un Simonas Grunau (1529)",
  },
  references: [
    "Collatio Episcopi Warmiensis (1418 Warmia document: 'patollu')",
    "Simon Grunau: Preussische Chronik (c. 1526; triad structure is a 16th-century pseudo-mythological construction, though individual deities possess genuine Old Prussian roots)",
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Wilhelm Mannhardt: Letto-Preussische Götterlehre (1936)",
    "Visuotinė lietuvių enciklopedija: Patulas (https://www.vle.lt/straipsnis/patulas/)"
  ],
};

export const patrimpAsMeta: DeityMeta = {
  slug: "patrimpas",
  name: "Patrimpas",
  domain: "God",
  epithet: {
    en: "Laughing youth crowned with grain at spring's threshold",
    lt: "Juokiasi jaunuolis su varpų vainiku pavasario slenkstyje",
    lv: "Smejošs jaunietis ar vārpu vainagu pavasara slieksnī",
  },
  summary: {
    en: "Patrimpas (Potrimpas) is the Old Prussian god of spring, youth, and field fertility. The joyful member of the Romuva triad, he is depicted as a beardless youth crowned with grain and flowers.",
    lt: "Patrimpas (Potrimpas) yra senprūsių pavasario, jaunystės ir laukų derlingumo dievas. Linksmiausias Romovės trejybės narys, vaizduojamas kaip bebarzdis jaunuolis su varpų vainiku.",
    lv: "Patrimps (Potrimpas) ir seno prūšu pavasara, jaunības un lauku auglības dievs. Romuvesas trejādības priecīgākais loceklis, attēlots kā bezbārdains jaunietis ar vārpu vainagu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 150, 60, 0.22)",
  accent: "#6ca846",
  altNames: {
    en: "Potrimpas, Patrimpo, Natrimpe",
    lt: "Potrimpas, Patrimpo, Natrimpe",
    lv: "Potrimpas, Patrimpo",
  },
  keywords: ["youth", "harvest", "spring", "fertility", "prussian", "romuva", "rivers", "grain crown"],
  gallery: [
    {
      title: { en: "Grain wreath festival crown", lt: "Grūdų vainiko šventės karūna", lv: "Graudu vainaga svētku kronis" },
      medium: { en: "rye and flax", lt: "rugiai ir linai", lv: "rudzi un lini" },
      note: { en: "Woven crown for Patrimpas celebrations at spring planting, worn by the lead dancer.", lt: "Pintoji karūna Patrimpaso šventėms pavasarinio sėjimo metu, nešiojama vyriausiojo šokėjo.", lv: "Pīts kronis Patrimpas svinībām pavasara sējas laikā, nests vadošā dejotāja." },
    },
    {
      title: { en: "Spring waters vessel", lt: "Pavasario vandenų indas", lv: "Pavasara ūdeņu trauks" },
      medium: { en: "clay jug", lt: "molinis ąsotis", lv: "māla krūze" },
      note: { en: "Used to carry first river-water of spring as an offering to Patrimpas.", lt: "Naudotas pirmajam pavasario upės vandeniui nešti kaip pasiūlymas Patrimpasui.", lv: "Izmantots pirmā pavasara ūdens nešanai kā upuris Patrimpam." },
    }
  ],
  locations: [
    {
      id: "romuva-spring-meadow",
      name: "Romuva Sacred Meadow",
      coordinates: [55.47, 21.54],
      region: "Lithuania",
      description: "Sacred meadow by the Romuva oak grove where Patrimpas spring festivals were held with singing and planting rituals.",
      siteType: "Seasonal festival locations",
      aura: "moss",
      deity: "patrimpas",
      significance: "Youth danced and sang here to invoke Patrimpas's blessing on fields and newborn livestock at each spring planting.",
    }
  ],
  materialLegacy: ["Grain crown offerings", "Spring festival wreaths", "First-fish cast-back rituals"],
  symbols: [
    { label: "Appearance", detail: "Beardless youth, grain crown" },
    { label: "Triad", detail: "Romuva triad with Perkūns and Patollo" },
    { label: "Domain", detail: "Spring, youth, rivers, harvest" }
  ],
  regionDetails: {
    en: "Old Prussia (Nadruvia / Romuva region)",
    lt: "Senoji Prūsija (Nadruvija / Romovos sritis)",
    lv: "Senā Prūsija (Nadruvia / Romuvesas apgabals)",
  },
  tribe: {
    en: "Old Prussians (Prūsai)",
    lt: "Senprūsiai (Prūsai)",
    lv: "Senie prūši (Prūsi)",
  },
  period: {
    en: "Medieval — recorded in 1418 Warmia document ('Natrimpe') and Simon Grunau (1529)",
    lt: "Viduramžiai — 1418 m. Varmės dokumentas ('Natrimpe') ir Simonas Grunau (1529)",
    lv: "Viduslaiki — 1418. g. Vārmijas dokuments ('Natrimpe') un Simonas Grunau (1529)",
  },
  references: [
    "Collatio Episcopi Warmiensis (1418 Warmia document: 'Natrimpe')",
    "Simon Grunau: Preussische Chronik (c. 1526; triad structure is a 16th-century pseudo-mythological construction, though individual deities possess genuine Old Prussian roots)",
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai (1996)",
    "Visuotinė lietuvių enciklopedija: Patrimpas (https://www.vle.lt/straipsnis/patrimpas/)"
  ],
};

export const autrimpasMeta: DeityMeta = {
  slug: "autrimpas",
  name: "Autrimpas",
  domain: "God",
  epithet: {
    en: "Neptune of the amber sea, lord of the Baltic deep",
    lt: "Gintarų jūros Neptūnas, Baltijos gelmių valdovas",
    lv: "Dzintara jūras Neptūns, Baltijas dziļumu valdnieks",
  },
  summary: {
    en: "Autrimpas is the Old Prussian god of the sea and open waters. Worshipped by the coastal Sambians, he governed storms, safe passage, and the abundant depths of the Baltic.",
    lt: "Autrimpas yra senprūsių jūros ir atvirų vandenų dievas. Garbintas Sambijos pakrantės prūsų, jis valdė audras, saugų plaukimą ir Baltijos gelmių gausą.",
    lv: "Autrimps ir seno prūšu jūras un brīvo ūdeņu dievs. Piekrastes sembiešu pielūgts, viņš valdīja vētras, drošu kuģošanu un Baltijas bagātīgos dziļumus.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(30, 80, 140, 0.28)",
  accent: "#2055a0",
  altNames: {
    en: "Autrimpus, Autrimps",
    lt: "Autrimpas, Autrimpus",
    lv: "Autrimps, Autrimpas",
  },
  keywords: ["sea", "ocean", "prussian", "sailors", "fish", "waves", "baltic coast", "neptune"],
  gallery: [
    {
      title: { en: "Amber sea offering", lt: "Gintaro jūros auka", lv: "Dzintara jūras upuris" },
      medium: { en: "amber", lt: "gintaras", lv: "dzintars" },
      note: { en: "Raw amber cast into the sea as first-catch offering to Autrimpas before offshore voyages.", lt: "Neapdorotas gintaras metamas į jūrą kaip pirmojo laimikio auka prieš jūrinius žygius.", lv: "Neapstrādāts dzintars iemests jūrā kā pirmā loma upuris pirms jūras braucieniem." },
    },
    {
      title: { en: "Carved driftwood fish", lt: "Drožinėtas sujudusios medienos žuvis", lv: "Grebts dreifkoka zivs" },
      medium: { en: "driftwood", lt: "sujudusi mediena", lv: "dreifkoks" },
      note: { en: "Votive fish carvings left at shore shrines to ensure abundant catch.", lt: "Votyvų žuviniai drožiniai, palikti prie kranto šventovių, siekiant užtikrinti gausų laimikį.", lv: "Votīvas zivju grebumi atstāti krasta svētnīcās, lai nodrošinātu bagātīgu lomu." },
    }
  ],
  locations: [
    {
      id: "klaipeda-sea-shrine",
      name: "Klaipėda Coastal Shrine",
      coordinates: [55.71, 21.12],
      region: "Lithuania",
      description: "Ancient shoreline offering site at the Lithuanian Baltic coast where first-catch rituals were performed.",
      siteType: "Sacrifice / offering sites",
      aura: "amber",
      deity: "autrimpas",
      significance: "Prussian and later Lithuanian fishermen cast the first fish of the season back into the sea as tribute to the Lord of the Baltic Deep.",
    }
  ],
  materialLegacy: ["Amber sea-castings", "Net-carved votive offerings", "First-catch rituals"],
  symbols: [
    { label: "Domain", detail: "Sea, storms, and maritime bounty" },
    { label: "Comparison", detail: "Chronicles compare him to Neptune" },
    { label: "Offering", detail: "First fish of the catch" }
  ],
  regionDetails: {
    en: "Old Prussia (Sambia / Baltic Coast)",
    lt: "Senoji Prūsija (Sembija / Baltijos pajūris)",
    lv: "Senā Prūsija (Sembija / Baltijas piekraste)",
  },
  tribe: {
    en: "Old Prussians / Sambians",
    lt: "Senprūsiai / Sambiai",
    lv: "Senie prūši / sembi",
  },
  period: {
    en: "16th Century (Sudovian Book c. 1520–1530 & Jan Malecki 1551)",
    lt: "XVI a. (Sūduvių knygelė ~1520–1530 m. ir J. Maleckis 1551 m.)",
    lv: "16. gs. (Sudāviešu grāmatiņa ~1520–1530 un J. Maļeckis 1551)",
  },
  references: [
    "Sudauer Büchlein / Sudovian Book (c. 1520–1530)",
    "Jan Malecki: Libellus de sacrificiis et idolatria (1551)",
    "Gintaras Beresnevičius: Autrimpas (Visuotinė lietuvių enciklopedija, T. II, 2002)",
    "Visuotinė lietuvių enciklopedija: Autrimpas (https://www.vle.lt/straipsnis/autrimpas/)"
  ],
};

// ── Batch 3 additions ──────────────────────────────────────────────────────
