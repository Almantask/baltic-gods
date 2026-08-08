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
    en: "13th Century (Sun forged by Teliavelis in 1261 Malalas insertion)",
    lt: "XIII a. (Saulę nukala Teliavelis 1261 m. Malalos intarpe)",
    lv: "13. gadsimts (Sauli kaļ Teliavelis 1261. gada Malalas iestarpinājumā)",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: Saulės kultas (https://www.vle.lt/straipsnis/saules-kultas/)",
    "Visuotinė lietuvių enciklopedija: Saulės dukterys (https://www.vle.lt/straipsnis/saules-dukterys/)",
    "Liudvikas Rėza: Dainos (Mėnuo Saulužę vedė)",
    "Nijolė Laurinkienė: Dangiškųjų vestuvių mitas (LK 2018)",
    "Nacionālā enciklopēdija: Jāņi (https://enciklopedija.lv/skirklis/262616)",
    "Vaira Vīķe-Freiberga: Trejādās saules (aptuveni 4000 saules dainu)",
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "UNESCO: Kryždirbystė ir kryžių simbolika Lietuvoje (2008)"
  ],
};

export const laimaMeta: DeityMeta = {
  slug: "laima",
  name: "Laima",
  domain: "God",
  epithet: {
    en: "Allotter of fate at the birth threshold",
    lt: "Likimo lėmėja prie gimimo slenksčio",
    lv: "Likteņa noliecēja pie dzimšanas sliekšņa",
  },
  summary: {
    en: "She seals an unalterable lifespan at the bathhouse door, where hen, linden broom, and spoken lot meet.",
    lt: "Ji užantspauduoja nepakeičiamą amžių prie pirties durų, kur susitinka višta, liepos šluotelė ir ištarta dalia.",
    lv: "Viņa aizzīmogo nepārkāpjamu mūžu pie pirts durvīm, kur sastopas vista, liepas slotiņa un noliktais mūžs.",
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
  keywords: ["fate", "linden", "pirts", "cuckoo", "childbirth"],
  gallery: [
    {
      title: { en: "Linden fate broom", lt: "Liepos likimo šluotelė", lv: "Liepas likteņa slotiņa" },
      medium: { en: "linden twigs, flax cord", lt: "liepos šakelės, lino virvė", lv: "liepas zariņi, linu aukla" },
      note: { en: "Kept in the bathhouse as Laima's health broom.", lt: "Laikoma pirtyje kaip Laimos sveikatos šluotelė.", lv: "Turēta pirtī kā Laimas veselības slotiņa." },
    },
    {
      title: { en: "Birth-hen offering band", lt: "Gimdymui aukojamos vištos juosta", lv: "Dzemdību vistas upura prievīte" },
      medium: { en: "woven band, beeswax", lt: "austa juosta, bičių vaškas", lv: "austā prievīte, bišu vasks" },
      note: { en: "Tied when thanking Laima after a safe delivery.", lt: "Rišama dėkojant Laimai po sėkmingo gimdymo.", lv: "Sasiets, pateicoties Laimai pēc drošām dzemdībām." },
    }
  ],
  locations: [
    {
      id: "laima-footprint-stones",
      name: "Laima Footprint Stones",
      coordinates: [55.35, 23.10],
      region: "Lithuania",
      description: "Sacred stones marked as Laima's footprints where bread, wool, flax, and coins were offered.",
      siteType: "Ritual stones",
      aura: "moss",
      deity: "laima",
      significance: "Women left household offerings to secure fortune and healing.",
    },
    {
      id: "baltic-pirts-birth",
      name: "Baltic Birth Bathhouse",
      coordinates: [56.95, 24.10],
      region: "Latvia",
      description: "The pirts as Laima's primary birth sanctuary, with threshold offerings of hen and drink.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "laima",
      significance: "Midwives invoked Laima at the bathhouse door and bathed the newborn in sacred first water.",
    }
  ],
  materialLegacy: ["Linden broom amulets (Laimas slotiņa)", "Birth-offering hen rites", "Footprint-stone votives"],
  symbols: [
    { label: "Tree", detail: "Linden (liepa)" },
    { label: "Messenger", detail: "Cuckoo (gegutė / dzeguze)" },
    { label: "Offerings", detail: "Hen, bread, ale, flax, coins" }
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
    en: "17th Century Records (Einhorn Historia Lettica 1649; LT Laimele 1666; Praetorius ~1690)",
    lt: "XVII a. šaltiniai (Einhornas Historia Lettica 1649; LT Laimele 1666; Pretorijus ~1690)",
    lv: "17. gadsimta avoti (Einhorns Historia Lettica 1649; LT Laimele 1666; Pretorijs ~1690)",
  },
  references: [
    "Paul Einhorn: Historia Lettica (1649)",
    "Martini / Klein hymnbook tradition: Laimele (1666)",
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
    "Visuotinė lietuvių enciklopedija: Laimė (https://www.vle.lt/straipsnis/laime-1/)",
    "Mitologijos enciklopedija / MLE: Laima (https://www.mle.lt/straipsniai/laima-1)",
    "Krišjānis Barons: Latvju dainas",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten",
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės"
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
      title: { en: "Libation cup", lt: "Aukojimo kaušelis", lv: "Ziedojuma kauss" },
      medium: { en: "wood / ceramic", lt: "medis / keramika", lv: "koks / keramika" },
      note: {
        en: "Ale poured to the earth before the household drinks (*žemyneliauti*).",
        lt: "Alus nupilamas žemei prieš geriant patiems (*žemyneliauti*).",
        lv: "Alus tiek noliets zemei pirms saimniecība dzer (*žemyneliauti*).",
      },
    },
    {
      title: { en: "Harvest bread", lt: "Derliaus duona", lv: "Ražas maize" },
      medium: { en: "rye bread", lt: "ruginė duona", lv: "rudzu maize" },
      note: {
        en: "Bread offered or buried for Žemyna at sowing and wakes.",
        lt: "Duona aukojama ar užkasama Žemynai sėjos ir šermenų metu.",
        lv: "Maize ziedota vai aprakta Žemynai sējas un bedību laikā.",
      },
    }
  ],
  locations: [
    {
      id: "kernave-mounds",
      name: "Kernavė Earth Ridges",
      coordinates: [54.88, 24.85],
      region: "Lithuania",
      description: "Ancient mounds in a landscape of cultivated earth and ancestral burial.",
      siteType: "Mythic hills / burial mounds",
      aura: "moss",
      deity: "zemyna",
      significance: "Landscape of cultivated earth and ancestral burial aligned with Žemyna’s life–death domain.",
    },
    {
      id: "telsiai-altars",
      name: "Telšiai Clay Altars",
      coordinates: [55.98, 22.25],
      region: "Lithuania",
      description: "Samogitian landscape of homestead and field cult.",
      siteType: "Sacrifice / offering sites",
      aura: "amber",
      deity: "zemyna",
      significance: "Regional earth-cult setting of the homestead-and-field offering pattern.",
    }
  ],
  materialLegacy: ["Libation vessels", "Rye bread offerings"],
  symbols: [
    { label: "Element", detail: "Cultivated earth / warm loam" },
    { label: "Offerings", detail: "Beer libation, bread, grain" }
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
    en: "16th–17th c. records (Łasicki; Prätorius)",
    lt: "XVI–XVII a. šaltiniai (Łasickis; Pretorijus)",
    lv: "16.–17. gs. avoti (Łasickis; Pretorijs)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (late 16th c. / 1615)",
    "Matthäus Prätorius: Deliciae Prussicae (late 17th c.)",
    "Visuotinė lietuvių enciklopedija: Žemyna (https://www.vle.lt/straipsnis/zemyna/)",
    "Nijolė Laurinkienė: Žemyna ir jos mitinis pasaulis (2013)",
    "Norbertas Vėlius (ed.): Baltų religijos ir mitologijos šaltiniai (BRMŠ)"
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
      description: "A bog clearing associated in local lore with marsh spirits and night lights.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "velnias",
      significance: "Named landscape of the Velnias habitat type (bogs and waters); specific offering formulas remain unverified.",
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
      significance: "Coastal liminal landscape linked to the deity in project lore; not confirmed as a historical Velns cult center.",
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
    en: "16th Century Records (Wolfenbüttel Postil, 1573: velinas)",
    lt: "XVI a. šaltiniai (Wolfenbüttelio postilė, 1573: velinas)",
    lv: "16. gadsimta avoti (Volfenbiteles postilla, 1573: velinas)",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: velnias (https://www.vle.lt/straipsnis/velnias/)",
    "Mažosios Lietuvos enciklopedija: velnias (https://www.mle.lt/straipsniai/velnias)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (Vaga, 1987)",
    "Pēteris Šmits: Latviešu tautas ticējumi — Velns (http://valoda.ailab.lv/folklora/ticejumi/velns.htm)",
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
    en: "Bee goddess of the swarm and the woven comb, called on when hives rise and honey is taken.",
    lt: "Bičių deivė spiečiaus ir austų korių — šaukiama, kai aviliai kyla ir imamas medus.",
    lv: "Bišu dieviete spietam un austajai kārei — piesaucama, kad stropti ceļas un ņem medu.",
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
    "Jan Łasicki: De diis samagitarum (c. 1580; publ. 1615)",
    "Dainius Razauskas: Iš baltų mitinio vaizdyno juodraščių: Austėja (Liaudies kultūra, 2009)",
    "Visuotinė lietuvių enciklopedija: bičiulystė (https://www.vle.lt/straipsnis/biciulyste/)",
    "Visuotinė lietuvių enciklopedija: Bitininkystės muziejus (https://www.vle.lt/straipsnis/bitininkystes-muziejus/)"
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
    en: "Elbing Vocabulary (c. 13th–14th c., OPr. Deywis); living daina / sakmė tradition",
    lt: "Elbingo žodynėlis (apie XIII–XIV a., prūs. Deywis); gyvoji dainų / sakmių tradicija",
    lv: "Elbingas vārdnīca (ap 13.–14. gs., senpr. Deywis); dzīvā dainu / teiku tradīcija",
  },
  references: [
    "epupa.valoda.lv: Dievs (Karulis etymology; LD 33682 sudrabiņa mētelītis)",
    "Gintaras Beresnevičius: Trumpas lietuvių ir prūsų religijos žodynas",
    "Haralds Biezais: Die himmlische Götterfamilie der alten Letten (1972)",
    "Algirdas Julius Greimas: Of Gods and Men (1992)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai",
    "Elbing Vocabulary: Old Prussian Deywis = Got",
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
    en: "Late 16th Century (Łasicki De diis Samagitarum, pub. 1615)",
    lt: "XVI a. pabaiga (Łasickis De diis Samagitarum, išl. 1615)",
    lv: "16. gs. beigas (Łasickis De diis Samagitarum, publ. 1615)",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum (pub. 1615) (search: 'Gabie')",
    "Visuotinė lietuvių enciklopedija: Gabija (https://www.vle.lt/straipsnis/gabija-1/) (search: 'gaubiama pelenais')",
    "LT Wikipedia: Gabija (https://lt.wikipedia.org/wiki/Gabija) (search: 'Gabie deuaite')",
    "Latviešu tautas ticējumi: Uguns (http://valoda.ailab.lv/folklora/ticejumi/uguns.htm) (search: 'apraust ar pelniem')"
  ],
};

export const bangputysMeta: DeityMeta = {
  slug: "bangputys",
  name: "Bangpūtys",
  domain: "God",
  epithet: {
    en: "Storm-wave blower of the lagoon",
    lt: "Marių audros bangų pūtėjas",
    lv: "Jomas vētras viļņu pūtējs",
  },
  summary: {
    en: "Lithuania Minor fishermen feared his sudden anger over the Curonian Lagoon and burned a spoon to keep the storm at bay.",
    lt: "Mažosios Lietuvos žvejai bijojo jo ūmaus pykčio Kuršių mariose ir degino šaukštą, kad audra liktų nuošaly.",
    lv: "Mazās Lietuvas zvejnieki baidījās no viņa straujām dusmām Kuršu jomā un dedzināja karoti, lai vētra paliktu malā.",
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
        "Coastal amber strand near the Klaipėda–Pamarys fishing world associated with Bangpūtys lore.",
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
      significance:
        "Latvian comparative coastal site for sea- and wind-mother lore (Jūras māte / Vēja māte).",
    }
  ],
  materialLegacy: ["Burned spoon offering", "Wooden coastal cult image"],
  symbols: [
    { label: "Element", detail: "Storm wind over lagoon water" },
    { label: "Offerings", detail: "Burned spoon, first pike, first catch to beggars" }
  ],
  regionDetails: {
    en: "Curonian Lagoon / Nemunas delta / Lithuania Minor",
    lt: "Kuršių marios / Nemuno delta / Mažoji Lietuva",
    lv: "Kuršu joma / Nemunas delta / Mazā Lietuva",
  },
  tribe: {
    en: "Western Lithuanians / Prussians (Scalvians, Nadruvians)",
    lt: "Vakarų lietuviai / Prūsai (skalviai, nadruviai)",
    lv: "Rietumlietuvieši / Prūši (skalvi, nadruvi)",
  },
  period: {
    en: "17th Century Maritime Records (Matthäus Praetorius ~1690)",
    lt: "XVII a. jūriniai užrašai (Matthäus Praetorius ~1690 m.)",
    lv: "17. gs. jūrniecības avoti (Matthäus Praetorius ~1690. g.)",
  },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
    "Rimantas Balsys: Prūsų ir lietuvių vandens dievai bei dvasios (2005/06)",
    "Dainius Elertas: Bangpūčio mitologema baltų pasaulėžiūroje",
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
      id: "kiskio-baznycia-genionys",
      name: "Hare Church stone (Genionys)",
      coordinates: [54.386, 24.534],
      region: "Lithuania",
      description: "Granite boulder in Šilaitis forest near Genionys (Varėna), one of the Hare Church sites linked to Medeina’s hare cult.",
      siteType: "Sacred stones",
      aura: "moss",
      deity: "medine",
      significance: "Vaitkevičius associates Kiškio bažnyčios with Medeina / hare-goddess woodland cult.",
    },
    {
      id: "vilkpedes-belt",
      name: "Wolf-footprint stones (Vilkpėdės)",
      coordinates: [54.7, 24.4],
      region: "Lithuania",
      description: "Eastern Lithuanian stones with hollows resembling wolf tracks in the Nemunas–Neris woodland belt.",
      siteType: "Sacred stones",
      aura: "moss",
      deity: "medine",
      significance: "Mapped with Hare Churches as landscape markers of Žvėrūna-Medeina cult.",
    }
  ],
  materialLegacy: ["Hare Church offering stones", "Wolf-footprint hollows"],
  symbols: [
    { label: "Sacred animals", detail: "Hare, wolf" },
    { label: "Forms", detail: "Huntress maiden, she-wolf" }
  ],
  regionDetails: {
    en: "Eastern Lithuania forests / Baltic woodlands",
    lt: "Rytų Lietuvos miškai / baltų girios",
    lv: "Austrumlietuvas meži / baltu birzis",
  },
  tribe: {
    en: "Lithuanians / Samogitians",
    lt: "Lietuviai / Žemaičiai",
    lv: "Lietuvieši / Žemaiši",
  },
  period: {
    en: "13th century (1252 Hypatian 'Medeina'; 1261 Malalas 'Žvorūna')",
    lt: "XIII a. (1252 m. Ipatijaus 'Medeina'; 1261 m. Malalos 'Žvorūna')",
    lv: "13. gs. (1252. g. Ipatjeva 'Medeina'; 1261. g. Malalas 'Žvorūna')",
  },
  references: [
    "Volhynian / Hypatian Chronicle (1252: Medeina; BRMŠ I)",
    "Malalas Chronicle Slavonic insertion (1261: Žvorūna)",
    "Jan Łasicki: De Diis Samagitarum (Modeina et Ragaina)",
    "Algirdas J. Greimas: Žvėruna Medeina / Tautos atminties beieškant",
    "Vykintas Vaitkevičius: Nauja Žvėrūnos-Medeinos perspektyva (Lietuvos archeologija 24, 2003)",
    "Visuotinė lietuvių enciklopedija: Medeina (https://www.vle.lt/straipsnis/medeina/)",
    "Mitologijos Lietuvių Enciklopedija: Medeina (https://www.mle.lt/straipsniai/medeina)"
  ],
};

export const giltineMeta: DeityMeta = {
  slug: "giltine",
  name: "Giltinė",
  domain: "God",
  epithet: {
    en: "Death-woman with the venomous tongue",
    lt: "Mirties moteris su nuodingu liežuviu",
    lv: "Nāves sieviete ar indīgo mēli",
  },
  summary: {
    en: "Lithuanian personification of death and sister of Laima; an elderly woman in white who stings the dying with a long poisonous tongue when their allotted time has come.",
    lt: "Lietuvių mirties personifikacija ir Laimos sesuo; senyva moteris baltais drabužiais, kuri geldama ilgu nuodingu liežuviu nutraukia gyvenimą, kai ateina skirtasis laikas.",
    lv: "Lietuviešu nāves personifikācija un Laimas māsa; veca sieviete baltās drēbēs, kas ar garu indīgu mēli dzeļ mirstošos, kad pienācis nozīmētais laiks.",
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
  keywords: ["death", "white", "tongue", "Laima"],
  gallery: [
    {
      title: { en: "White burial shroud", lt: "Baltoji laidotuvių drobulė", lv: "Baltais bēru līķauts" },
      medium: { en: "linen", lt: "linas", lv: "lins" },
      note: {
        en: "Folk image of Giltinė as a thin woman wrapped in white.",
        lt: "Liaudies vaizdinys: liesa moteris, apsigaubusi balta drobule.",
        lv: "Tautas tēls: liesa sieviete, ietusies baltā līķautā.",
      },
    },
    {
      title: { en: "Scythe of later iconography", lt: "Vėlesnės ikonografijos dalgis", lv: "Vēlākās ikonogrāfijas izkapts" },
      medium: { en: "iron", lt: "geležis", lv: "dzelzs" },
      note: {
        en: "Christian danse macabre overlay: skeletal death with a scythe.",
        lt: "Krikščioniškasis danse macabre sluoksnis: griaučiai su dalgiu.",
        lv: "Kristīgais danse macabre slānis: skelets ar izkaptī.",
      },
    }
  ],
  locations: [
    {
      id: "salantai-burial",
      name: "Salantai Burial Mounds",
      coordinates: [56.05, 21.57],
      region: "Lithuania",
      description: "Ancient burial mounds in Samogitia associated with ancestor remembrance.",
      siteType: "Mythic hills / burial mounds",
      aura: "mist",
      deity: "giltine",
      significance: "Samogitian burial landscape linked in local storytelling to death-watch lore.",
    },
  ],
  materialLegacy: ["White linen shrouds / cloaks", "Scythe imagery in later Christian overlay"],
  symbols: [
    { label: "Element", detail: "Venomous tongue / sting of death" },
    { label: "Omens", detail: "Owl hoot, dog barking, threefold knock" }
  ],
  regionDetails: {
    en: "Lithuania (Prussian–Lithuanian written sources; later all-Lithuanian folklore)",
    lt: "Lietuva (prūsų–lietuvių rašytiniai šaltiniai; vėliau visos Lietuvos tautosaka)",
    lv: "Lietuva (prūšu–lietuviešu rakstiskie avoti; vēlāk visas Lietuvas folklore)",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "Late 17th Century (first clear mention: Matthäus Praetorius, ~1690)",
    lt: "XVII a. pabaiga (pirmasis aiškus paminėjimas: Matas Pretorijus, ~1690)",
    lv: "17. gadsimta beigas (pirmais skaidrais minējums: Mateuss Pretorijs, ~1690)",
  },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
    "Mitologijos enciklopedija (Vaga, 1999) / MLE: Giltinė",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Visuotinė lietuvių enciklopedija: giltinė (https://www.vle.lt/straipsnis/giltine/)"
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
    en: "Morning star who kindles Saulė’s fire",
    lt: "Ryto žvaigždė, uždeganti Saulės ugnį",
    lv: "Rīta zvaigzne, Dieva dēls",
  },
  summary: {
    en: "Lithuanian morning-star goddess of Venus who kindles Saulė’s fire; her Latvian counterpart Auseklis is a young male Dieva dēls and suitor in the heavenly-wedding cycle.",
    lt: "Lietuvių Veneros ryto žvaigždės deivė, prakuranti Saulei ugnį; latviškas atitikmuo Auseklis – jaunas vyriškas Dieva sūnus ir dangiškųjų vestuvių piršlys.",
    lv: "Lietuviešu rīta zvaigznes dieviete Aušrinė kurina Saulei uguni; latviešu Auseklis ir jauns vīriešu Dieva dēls un debesu kāzu precinieks.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(255, 200, 100, 0.2)",
  accent: "#f0c060",
  altNames: {
    en: "Ausrine, Auseklis",
    lt: "Aušrinė, Auseklis",
    lv: "Auseklis, Aušrinė",
  },
  keywords: ["dawn", "morning star", "Venus", "Auseklis", "celestial wedding"],
  gallery: [
    {
      title: { en: "Auseklītis star motif", lt: "Auseklītis žvaigždės motyvas", lv: "Auseklīša zvaigznes motīvs" },
      medium: { en: "textile embroidery", lt: "audinių siuvinėjimas", lv: "audumu izšuvums" },
      note: {
        en: "Eight-pointed morning-star mark used in Latvian raksti as a protective ornament.",
        lt: "Aštuoniakampis ryto žvaigždės ženklas latvių rakstuose kaip apsauginis ornamentas.",
        lv: "Astoņstaru rīta zvaigznes zīme latviešu rakstos kā aizsardzības ornaments.",
      },
    },
    {
      title: { en: "Silk and gold coats (dainas)", lt: "Šilko ir aukso rūbai (dainos)", lv: "Zīda un zelta svārki (dainas)" },
      medium: { en: "folk textile imagery", lt: "tautosakos tekstilės vaizdinys", lv: "tautasdziesmu tekstila tēls" },
      note: {
        en: "Auseklis sews silk, velvet, or gold coats and striped garments for Saule in Latvian songs.",
        lt: "Auseklis latvių dainose siuva šilko, aksomo ar aukso rūbus ir dryžuotus Saulės drabužius.",
        lv: "Auseklis dainās šuj zīda, samta vai zelta svārkus un svītrainus Saules tērpus.",
      },
    }
  ],
  locations: [
    {
      id: "ausrines-kalnas-kaltinenai",
      name: "Aušrinės kalnas (Kaltinėnai)",
      coordinates: [55.57, 22.46],
      region: "Lithuania",
      description: "Samogitian hill near Kaltinėnai / Kaušai remembered for dawn prayers and offerings to Aušrinė.",
      siteType: "Mythic hills / burial mounds",
      aura: "amber",
      deity: "ausrine",
      significance: "Folklore records burnt offerings and a local retelling of the Moon’s love for Aušrinė and Perkūnas’s crescent-forming blow.",
    }
  ],
  materialLegacy: ["Auseklītis textile motifs", "Protective eight-pointed star marks"],
  symbols: [
    { label: "Element", detail: "Morning star (Venus) / first eastern light" },
    { label: "Offerings", detail: "Burnt offerings and dawn prayers (Aušrinės kalnas)" }
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
    en: "Folklore core (Rėza 1825); LV written 1638 (Mancelius)",
    lt: "Tautosakos branduolys (Rėza 1825); LV rašytinis 1638 (Mancelis)",
    lv: "Folkloras kodols (Rēza 1825); LV rakstīts 1638 (Mancelis)",
  },
  references: [
    "Visuotinė lietuvių enciklopedija: Aušrinė (https://www.vle.lt/straipsnis/ausrine-1/)",
    "Nijolė Laurinkienė: Dangiškųjų vestuvių mitas (2018)",
    "Dainius Razauskas: Iš baltų mitinio vaizdyno juodraščių: Aušrinė (ir Vakarinė) (2011)",
    "Krišjānis Barons: Latvju dainas (Auseklis)",
    "Haralds Biezais: Seno latviešu dievu ģimene",
    "Latvijas Nacionālā enciklopēdija: auseklis (https://enciklopedija.lv/skirklis/113676)"
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
      title: { en: "Last-sheaf Jumis knot", lt: "Paskutinio pėdo Jumio mazgas", lv: "Pēdējā kūļa Jumja mezgls" },
      medium: { en: "wheat straw", lt: "kviečių šiaudai", lv: "kviešu salmi" },
      note: { en: "Last stalks knotted or braided and brought home for the winter store.", lt: "Paskutiniai stiebai surišami ar supinami ir parnešami namo žiemos atsargoms.", lv: "Pēdējie stiebri sasieti vai pīti un nestī mājās ziemas krājumam." },
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
    "Visuotinė lietuvių enciklopedija: Jumis (https://www.vle.lt/straipsnis/jumis/)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Pēteris Šmits: Latviešu tautas ticējumi / Latviešu mitoloģija"
  ],
};

export const usinsMeta: DeityMeta = {
  slug: "usins",
  name: "Ūsiņš",
  domain: "God",
  epithet: {
    en: "Spring light-bringer and herdsman of the first night pasture",
    lt: "Pavasario šviesos nešėjas ir pirmosios naktigonės ganovas",
    lv: "Pavasara gaismas nesējs un pirmās pieguļas ganītājs",
  },
  summary: {
    en: "The Latvian spring and horse deity who brings green growth, rides to the first pieguļa, and receives rooster blood, oats, and pantāgs at the opening of the pasture year.",
    lt: "Latvių pavasario ir žirgų dievybė, atnešanti žalumą, išjojanti į pirmąją naktigonę ir priimanti gaidžio kraują, avižas bei pantāgą ganyklų metų pradžioje.",
    lv: "Latviešu pavasara un zirgu dievība, kas atnes zaļumu, izjāj pirmajā pieguļā un saņem gaiļa asinis, auzas un pantāgu ganību gada sākumā.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1534082456-9d7e4139e8a6?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 160, 90, 0.22)",
  accent: "#c9a060",
  altNames: {
    en: "Usins, Uschinge, Ūsinis",
    lt: "Ūsinis, Uschinge",
    lv: "Ūsiņš, Uschinge, Ūsinis",
  },
  keywords: ["light", "horses", "spring", "pasture", "pieguļa"],
  gallery: [
    {
      title: { en: "Manger oats offering", lt: "Avižų auka ėdžiose", lv: "Auzu ziedojums silē" },
      medium: { en: "oats, rooster blood", lt: "avižos, gaidžio kraujas", lv: "auzas, gaiļa asinis" },
      note: { en: "On Ūsiņš Day the master mixes rooster blood with oats in the horse manger.", lt: "Ūsiņo dieną šeimininkas maišo gaidžio kraują su avižomis žirgų ėdžiose.", lv: "Ūsiņa dienā saimnieks sajauc gaiļa asinis ar auzām zirgu silē." },
    },
    {
      title: { en: "Ūsiņa zīme", lt: "Ūsiņa zīme", lv: "Ūsiņa zīme" },
      medium: { en: "protective mark", lt: "apsauginis ženklas", lv: "aizsardzības zīme" },
      note: { en: "Paired back-to-back E / key-like sign marked on objects and thresholds for protection.", lt: "Poriniai nugara į nugara E / rakto ženklas ant daiktų ir slenksčių apsaugai.", lv: "Divu ar mugurām pretī saliktu E / atslēgaiņa zīme uz priekšmetiem un sliekšņiem aizsardzībai." },
    }
  ],
  locations: [
    {
      id: "usinakmens",
      name: "Ūsiņakmens",
      coordinates: [57.56175, 25.89873],
      region: "Latvia",
      description: "Large hollowed stone in the Vidzeme highland whose folk name invokes Ūsiņš within the night-pasture offering landscape.",
      siteType: "Sacred stones",
      aura: "amber",
      deity: "usins",
      significance: "Named for Ūsiņš in Vidzeme folk geography; pantāgs and horse offerings belong to the wider highland pieguļa complex.",
    }
  ],
  materialLegacy: ["Ūsiņa zīme marks", "Rooster-blood oats in the manger"],
  symbols: [
    { label: "Element", detail: "First spring light and green clover" },
    { label: "Offerings", detail: "Rooster, oats, pantāgs, eggs, beer" }
  ],
  regionDetails: {
    en: "Vidzeme highland",
    lt: "Vidžemės aukštuma",
    lv: "Vidzemes augstiene",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "17th Century Attestation (Stribingius 1606)",
    lt: "XVII a. paliudijimas (Stribingius 1606)",
    lv: "17. gs. apliecinājums (Stribingius 1606)",
  },
  references: [
    "Joannis Stribingius: Livonian Jesuit report (1606)",
    "Haralds Biezais: Lichtgott der alten Letten",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "VLE: Ūsinis (https://www.vle.lt/straipsnis/usinis/)"
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
    en: "Mythical smith who forged the Sun and cast it into the sky",
    lt: "Mitinis kalvis, nukalęs Saulę ir įmetęs ją į dangų",
    lv: "Mītiskais kalējs, kas nokalēja Sauli un iemeta to debesīs",
  },
  summary: {
    en: "Teliavelis is the mythical smith of early Lithuanian religion, first recorded in the 13th-century Hypatian Codex and the 1261 Malalas insertion. He forged the Sun and hurled it into the sky.",
    lt: "Teliavelis yra ankstyvosios lietuvių religijos mitinis kalvis, pirmą kartą paminėtas XIII a. Ipatijaus metraštyje ir 1261 m. Malalos intarpe. Jis nukalė Saulę ir įmetė ją į dangų.",
    lv: "Teljavelis ir agrīnās lietuviešu reliģijas mītiskais kalējs, kas pirmo reizi minēts 13. gadsimta Ipatjeva hronikā un 1261. gada Malalas iestarpinājumā. Viņš nokalēja Sauli un iemeta to debesīs.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1565120130891-55ba6d2eecb8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 100, 20, 0.28)",
  accent: "#c87832",
  altNames: {
    en: "Teliavel, Kalevelis, Kalvelis",
    lt: "Teliavelis, Kalevelis, Kalvelis",
    lv: "Teljavelis, Kalevelis, Kalvelis",
  },
  keywords: ["blacksmith", "sun", "forge", "creation myth", "cultural hero", "chthonic smith"],
  gallery: [
    {
      title: { en: "Bronze sun-disc pendant", lt: "Bronzinis saulės disko pakabukas", lv: "Bronzas saules diska kulons" },
      medium: { en: "cast bronze", lt: "liedinė bronza", lv: "lieta bronza" },
      note: { en: "Baltic Bronze Age sun-disc pendant; iconographically related to the solar metal wrought in the smith myth.", lt: "Baltų bronzos amžiaus saulės disko pakabukas; ikonografiškai siejamas su saulės metalu kalvio mite.", lv: "Baltu bronzas laikmeta saules diska kulons; ikonogrāfiski saistīts ar saules metālu kalēja mītā." },
    },
  ],
  locations: [],
  materialLegacy: ["Bronze Age sun-disc pendants", "Iron hammer cult (Piccolomini)"],
  symbols: [
    { label: "Attribute", detail: "Iron / divine hammer" },
    { label: "Creation", detail: "Forged the Sun (Malalas 1261)" },
    { label: "Sphere", detail: "Chthonic smith / cultural hero" },
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
    en: "13th Century (Hypatian Codex 1252; Malalas 1261)",
    lt: "XIII a. (Ipatijaus metraštis 1252; Malala 1261)",
    lv: "13. gadsimts (Ipatjeva hronika 1252; Malala 1261)",
  },
  references: [
    "Hypatian Codex / Ipat'evskaja letopis' (1252) — Mindaugas sacrifices; Teliavelis second after Nunadievis",
    "Slavonic Malalas chronicle insertion (1261) — smith who forged the sun",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Visuotinė lietuvių enciklopedija: Teliavelis (https://www.vle.lt/straipsnis/teliavelis/)",
    "dainuskapis.lv: Debess kalējs (comparative LV sky-forge dainas; = Pērkons)",
  ],
};

export const daliaMeta: DeityMeta = {
  slug: "dalia",
  name: "Dalia",
  domain: "God",
  epithet: {
    en: "The personal share of fortune each life carries",
    lt: "Asmeninė laimės dalis, einanti su kiekvienu gyvenimu",
    lv: "Personīgā veiksmes daļa, kas iet ar katru mūžu",
  },
  summary: {
    en: "Dalia is the Lithuanian personified share of fate and material fortune. Beside Laima’s broader life-course, she figures each person’s allotted portion of earthly goods and prosperity.",
    lt: "Dalia yra lietuvių įasmeninta likimo ir materialiosios sėkmės dalis. Šalia Laimos platesnio gyvenimo kelio ji įkūnija kiekvienam skirtą žemiškųjų gėrybių dalį.",
    lv: "Dalia ir lietuviešu personificētā likteņa un materiālās veiksmes daļa. Blakus Laimas plašākajam mūža kursam viņa iemieso katram piešķirto zemes mantu daļu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 120, 150, 0.24)",
  accent: "#5892a8",
  altNames: {
    en: "Dalia, Laimė–Dalia (portion of fortune)",
    lt: "Dalia, Laimė–Dalia (laimės dalis)",
    lv: "Dalia, Laimė–Dalia (veiksmes daļa)",
  },
  keywords: ["fate", "portion", "wealth", "destiny", "material fortune", "dalis", "swan"],
  gallery: [
    {
      title: { en: "Swan of personal fortune", lt: "Asmeninės dalios gulbė", lv: "Personīgās daļas gulbis" },
      medium: { en: "folk motif", lt: "liaudies motyvas", lv: "tautas motīvs" },
      note: { en: "In tales the personal goddess Dalia may appear as a swan — a dwelling of the laimė–dalia share.", lt: "Pasakose asmeninė deivė Dalia gali pasirodyti gulbės pavidalu — laimės–dalios buveinė.", lv: "Pasakās personīgā dieviete Dalia var parādīties kā gulbis — laimė–dalia daļas mājvieta." },
    },
    {
      title: { en: "Fair maiden of the kindly share", lt: "Gerosios dalies daili merga", lv: "Labās daļas daiļa meita" },
      medium: { en: "folklore figure", lt: "tautosakos figūra", lv: "folkloras figūra" },
      note: { en: "The kindly share may appear as a fair maiden, opposed to Nelaimė as an old woman.", lt: "Gera dalis gali pasirodyti kaip daili merga, priešingai Nelaimei kaip senai bobai.", lv: "Labā daļa var parādīties kā daiļa meita, pretstatā Nelaimė kā vecai sievai." },
    }
  ],
  locations: [],
  materialLegacy: ["Songs of seeking Laimė–Dalia", "Birth-allotment belief (Senelis Dievas / Laima)"],
  symbols: [
    { label: "Name", detail: "From 'dalis' (portion, share)" },
    { label: "Function", detail: "Material fate and wealth distribution" },
    { label: "Companion", detail: "Works alongside Laima" },
    { label: "Forms", detail: "Woman, swan, duck, lamb, dog" }
  ],
  regionDetails: {
    en: "Lithuania (folk tradition)",
    lt: "Lietuva (tautosakos tradicija)",
    lv: "Lietuva (folkloras tradīcija)",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "Folklore attestation; scholarly synthesis (Greimas; Balys)",
    lt: "Tautosakos paliudijimas; mokslinė sintezė (Greimas; Balys)",
    lv: "Folkloras liecības; zinātniskā sintēze (Greimas; Balys)",
  },
  references: [
    "Algirdas Julius Greimas: Of Gods and Men / Apie dievus ir žmones; Aušrinė ir Laima",
    "Visuotinė lietuvių enciklopedija: Dalia (https://www.vle.lt/straipsnis/dalia/)",
    "Mitologijos enciklopedija / MLE: Laima (https://www.mle.lt/straipsniai/laima-1)",
    "Marija Gimbutas: The Living Goddesses (2001)"
  ],
};

export const patollaMeta: DeityMeta = {
  slug: "patollo",
  name: "Patollo",
  domain: "God",
  epithet: {
    en: "Corpse-pale elder with white cloth about the head",
    lt: "Mirtinai išblyškęs senis, baltu audeklu apsigobęs galvą",
    lv: "Miroņbāls sirmgalvis ar līķautu ap galvu",
  },
  summary: {
    en: "Patollo (Patulas / Peckols) is the Old Prussian god of the underworld and death in Grunau’s Romuva triad. He appears as a corpse-pale elder with a long grey beard and white cloth about the head; his attributes are human, horse, and cow skulls.",
    lt: "Patulas (Patollo / Peckols) yra senprūsių požemio ir mirties dievas Grunau Romovės triadoje. Vaizduojamas kaip mirtinai išblyškęs senis su ilga žila barzda ir baltu audeklu ant galvos; jo atributai — žmogaus, arklio ir karvės kaukolės.",
    lv: "Patollo (Patulas / Peckols) ir seno prūšu pazemes un nāves dievs Grunava Romuves triādē. Tēlots kā miroņbāls sirmgalvis ar garu sirmu bārdu un līķautu ap galvu; viņa atribūti ir cilvēka, zirga un govs galvaskausi.",
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
  keywords: ["underworld", "death", "romuva", "prussian", "darkness", "skulls", "grey beard"],
  gallery: [
    {
      title: { en: "White head-cloth", lt: "Baltasis galvos audeklas", lv: "Baltais līķauts" },
      medium: { en: "linen", lt: "linas", lv: "lins" },
      note: { en: "White cloth wrapped about Patollo's head on Widewuto's banner and the Romuva oak idol (Grunau).", lt: "Baltasis audeklas, kuriuo Patulo galva apsigobusi Vaidevučio vėliavoje ir Romovės ąžuolo stabe (Grunau).", lv: "Baltais audums ap Patollo galvu Videvuta karogā un Romuves ozola elkā (Grunavs)." },
    },
    {
      title: { en: "Triad skull attributes", lt: "Triados kaukolių atributai", lv: "Triādes galvaskausu atribūti" },
      medium: { en: "bone", lt: "kaulas", lv: "kauls" },
      note: { en: "Human, horse, and cow skulls set before Patollo's oak niche — his signs in Grunau's sanctuary tableau.", lt: "Žmogaus, arklio ir karvės kaukolės prieš Patulo ąžuolo nišą — jo ženklai Grunau šventvietės aprašyme.", lv: "Cilvēka, zirga un govs galvaskausi Patollo ozola nišas priekšā — viņa zīmes Grunava svētnīcas ainā." },
    }
  ],
  locations: [
    {
      id: "romuva-sacred-oak",
      name: "Romuva Sacred Oak Grove",
      coordinates: [55.45, 21.52],
      region: "Lithuania",
      description: "The legendary Rikojotas / Romuva grove where three divine idols stood in niches of an evergreen oak. Exact site in Nadruvia remains debated.",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "patollo",
      significance: "Eternal sacred fire burned by the oak (Perkūnas's sign); Patollo's niche was marked by human, horse, and cow skulls.",
    }
  ],
  materialLegacy: ["White head-cloth idol image", "Human–horse–cow skull attributes", "Blood and precious-gift offerings"],
  symbols: [
    { label: "Appearance", detail: "Corpse-pale elder, grey beard, white head-cloth" },
    { label: "Triad", detail: "Romuva triad with Perkūns and Patrimpas" },
    { label: "Domain", detail: "Underworld, death, and night haunting" }
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
    en: "Medieval — 1418 Warmia Document ('patollu') & Simon Grunau (c. 1510–1529)",
    lt: "Viduramžiai — 1418 m. Varmės dokumentas ('patollu') ir Simonas Grunau (apie 1510–1529)",
    lv: "Viduslaiki — 1418. g. Vārmijas dokuments un Simons Grunavs (ap 1510–1529)",
  },
  references: [
    "Collatio Episcopi Warmiensis (1418 Warmia document: 'patollu')",
    "Simon Grunau: Preussische Chronik (c. 1510–1529; triad tableau is a 16th-century chronicle construction; individual names appear earlier)",
    "Sudauer Büchlein / Sudovian Book (16th c.: Peckols)",
    "Wilhelm Mannhardt: Letto-Preussische Götterlehre (1936)",
    "Visuotinė lietuvių enciklopedija: Patulas (https://www.vle.lt/straipsnis/patulas/)",
    "Mitologijos Lietuvoje enciklopedija: Patulas (https://www.mle.lt/straipsniai/patulas)"
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
    en: "Sea and lagoon god of the Prussian lists",
    lt: "Prūsų sąrašų jūrų ir marių dievas",
    lv: "Prūšu sarakstu jūru un līču dievs",
  },
  summary: {
    en: "Autrimpas is the Old Prussian sea and lagoon deity named in the Sudovian Book and by Malecki, equated with Neptune and listed beside Patrimpas and Bardaitis.",
    lt: "Autrimpas yra senprūsių jūrų ir marių dievybė, įrašyta Sūduvių knygelėje ir Maleckio, tapatinama su Neptūnu ir minima greta Patrimpo bei Bardaičio.",
    lv: "Autrimps ir seno prūšu jūru un līču dievība, ierakstīta Sūduvu grāmatā un Maļecka, pielīdzināta Neptūnam un minēta līdzās Patrimpo un Bārdaitim.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(30, 80, 140, 0.28)",
  accent: "#2055a0",
  altNames: {
    en: "Autrimpus, Autrimps, Antrimpas, Autrympus, Natrimpe",
    lt: "Autrimpas, Autrimpus, Antrimpas, Autrympus, Natrimpe",
    lv: "Autrimps, Autrimpas, Antrimpas, Autrympus, Natrimpe",
  },
  keywords: ["sea", "lagoon", "prussian", "sudovian book", "neptune", "patrimpas", "bardaitis"],
  gallery: [],
  locations: [],
  materialLegacy: [],
  symbols: [
    { label: "Domain", detail: "Seas and great lagoons / large waters" },
    { label: "Comparison", detail: "Sixteenth-century lists equate him with Neptune" },
    { label: "Companions", detail: "Listed beside Patrimpas and Bardaitis" }
  ],
  regionDetails: {
    en: "Old Prussia (Baltic seas and lagoons)",
    lt: "Senoji Prūsija (Baltijos jūros ir marios)",
    lv: "Senā Prūsija (Baltijas jūras un līči)",
  },
  tribe: {
    en: "Old Prussians (Sudovian Book tradition)",
    lt: "Senprūsiai (Sūduvių knygelės tradicija)",
    lv: "Senie prūši (Sūduvu grāmatas tradīcija)",
  },
  period: {
    en: "16th Century (Sudovian Book & Jan Malecki 1551)",
    lt: "XVI a. (Sūduvių knygelė ir J. Maleckis 1551 m.)",
    lv: "16. gs. (Sūduvu grāmata un J. Maļeckis 1551)",
  },
  references: [
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Jan Malecki: Libellus de sacrificiis et idolatria (1551)",
    "Mitologijos enciklopedija / MLE: Autrimpas (https://www.mle.lt/straipsniai/autrimpas)",
    "Mitoloģijas enciklopēdija (Rīga, 1994): Autrimps"
  ],
};

// ── Batch 3 additions ──────────────────────────────────────────────────────
