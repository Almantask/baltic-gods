import type { DeityMeta } from "@/types/content";

export const perkunasMeta: DeityMeta = {
  slug: "perkunas",
  name: "Perkūnas",
  domain: "God",
  epithet: {
    en: "Thunder that cleaves the canopy",
    lt: "Griaustinis, skeliantis dangaus skliautą",
    lv: "Pērkons, kas šķeļ debesu jumtu",
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
  gallery: [
    {
      title: "Bronze axe charm",
      medium: "forged bronze",
      note: "Carried by travelers crossing storm-lines on the Nemunas ridge.",
    },
    {
      title: "Storm-tempered oak plank",
      medium: "river-cured wood",
      note: "Used as altar top in Aukštaitija heights.",
    },
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
      significance: "Offerings of iron nails and barley echo between trees during spring storms.",
    },
    {
      id: "jelgava-stone",
      name: "Jelgava Sky-Stone",
      coordinates: [56.65, 23.72],
      region: "Latvia",
      description: "A glacial erratic etched with spiral burn marks after cloud-fire nights.",
      siteType: "Ritual stones",
      aura: "moss",
      deity: "perkunas",
      significance: "Used to divine the coming of dry thunder over Zemgale fields.",
    },
  ],
  materialLegacy: ["Iron spearhead talismans", "Pitch-black thunderstones tied with flax"],
  symbols: [
    { label: "Element", detail: "Sky-fire over pine crowns" },
    { label: "Offerings", detail: "Barley, iron nails, smoked salt" },
  ],
  regionDetails: {
    en: "Pan-Baltic / Aukštaitija",
    lt: "Visos baltų žemės / Aukštaitija",
    lv: "Visas baltu zemes / Augštaitija",
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
  references: ["Jan Łasicki: De Diis Samagitarum", "Simon Grunau: Preussische Chronik", "Gintaras Beresnevičius: Essays on Baltic Religion"],
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
    lv: "Saules",
  },
  keywords: ["sun", "amber", "weaving", "dawn"],
  gallery: [
    {
      title: "Amber bead clasp",
      medium: "Baltic amber",
      note: "Passed between mothers at solstice vigils.",
    },
    {
      title: "Gold-thread linen panel",
      medium: "flax, gilt thread",
      note: "Displays the solar sledge motif from Žemaitija.",
    },
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
    },
  ],
  materialLegacy: ["Amber earrings with spiral suns", "Sun-etched loom weights"],
  symbols: [
    { label: "Element", detail: "First light on dew" },
    { label: "Offerings", detail: "Flax garlands, gold thread, honey" },
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
    en: "Pre-Christian to Folklore",
    lt: "Ikikrikščioniškasis laikotarpis iki tautosakos",
    lv: "Pirmskristīgā ēra līdz folklorai",
  },
  references: ["Ludwig Rhesa: Dainos", "Jonas Basanavičius: Lithuanian Folklore", "Marija Gimbutas: The Balts"],
};

export const laimaMeta: DeityMeta = {
  slug: "laima",
  name: "Laima",
  domain: "Person",
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
      title: "Birch divination lot",
      medium: "birch bark, charcoal",
      note: "Marked with three lines to foretell safe crossings.",
    },
    {
      title: "River flax braid",
      medium: "flax, beeswax",
      note: "Knotted at weddings to seal fortunes.",
    },
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
    },
  ],
  materialLegacy: ["Carved birch divination staves", "Wax-sealed fate ribbons"],
  symbols: [
    { label: "Element", detail: "Quiet water under birch" },
    { label: "Offerings", detail: "Flax knots, copper coins, whispered vows" },
  ],
  regionDetails: {
    en: "Vidzeme / Latgale",
    lt: "Vidžemė / Latgalia",
    lv: "Vidzeme / Latgale",
  },
  tribe: {
    en: "Latvians",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "18th-19th Century Collections",
    lt: "XVIII-XIX a. tautosakos rinkiniai",
    lv: "18.-19. gs. folkloras krājumi",
  },
  references: ["Krišjānis Barons: Latvju dainas", "Marija Gimbutas", "Vilis Biļķins: Senlatviešu dievības"],
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
      title: "Clay seed jar",
      medium: "fired clay",
      note: "Buried at field corners before plowing.",
    },
    {
      title: "Rye straw torque",
      medium: "braided straw",
      note: "Hung in barns to keep mice away by her favor.",
    },
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
    },
  ],
  materialLegacy: ["Soil-stained prayer cloths", "Hazel-root amulets"],
  symbols: [
    { label: "Element", detail: "Warm loam after rain" },
    { label: "Offerings", detail: "Milk, rye crowns, crushed herbs" },
  ],
  regionDetails: {
    en: "Samogitia / Lithuania Minor",
    lt: "Žemaitija / Mažoji Lietuva",
    lv: "Žemaitija / Mazā Lietuva",
  },
  tribe: {
    en: "Lithuanians / Samogitians",
    lt: "Lietuviai / Žemaičiai",
    lv: "Lietuvieši / Žemaiši",
  },
  period: {
    en: "Late 16th Century Records",
    lt: "XVI a. pabaigos šaltiniai",
    lv: "16. gs. beigu avoti",
  },
  references: ["Jan Łasicki: De Diis Samagitarum", "Jonas Basanavičius", "Norbertas Vėlius: The World Outlook of the Ancient Lithuanians"],
};

export const velniasMeta: DeityMeta = {
  slug: "velnias",
  name: "Velnias",
  domain: "Creature",
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
      title: "Bog iron talon",
      medium: "bog iron",
      note: "Left at crossroads to mislead harmful spirits.",
    },
    {
      title: "Ashen hoof print",
      medium: "ash, oak charcoal",
      note: "Ritual mark to call a protective wanderer.",
    },
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
    },
  ],
  materialLegacy: ["Charcoal crossroads sigils", "Bone whistles carved with spiral horns"],
  symbols: [
    { label: "Element", detail: "Mist over peat" },
    { label: "Offerings", detail: "Bread crusts, charcoal, iron filings" },
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
    en: "Inter-war Period to Recent Collections",
    lt: "Tarpukaris iki šių dienų rinkinių",
    lv: "Starpkaru periods līdz mūsdienu krājumiem",
  },
  references: ["Jonas Basanavičius", "Norbertas Vėlius", "Gintaras Beresnevičius: Of Gods and Men"],
};

export const austejaMeta: DeityMeta = {
  slug: "austeja",
  name: "Austėja",
  domain: "Creature",
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
      title: "Wax comb reliquary",
      medium: "beeswax, linen",
      note: "Holds dried meadow herbs for calm weather.",
    },
    {
      title: "Linden bark skep",
      medium: "linden bark",
      note: "Used as portable hive for blessing new farms.",
    },
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
    },
  ],
  materialLegacy: ["Honey-soaked prayer ribbons", "Bee-wing pressed charms"],
  symbols: [
    { label: "Element", detail: "Warm wax and meadow breath" },
    { label: "Offerings", detail: "Honeycomb, linden blossoms, smoke" },
  ],
  regionDetails: {
    en: "Aukštaitija / Dzūkija",
    lt: "Aukštaitija / Dzūkija",
    lv: "Augštaitija / Dzūkija",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "19th Century Oral Tradition",
    lt: "XIX a. žodinė tradicija",
    lv: "19. gs. mutvārdu tradīcija",
  },
  references: ["Norbertas Vėlius: Mythology of Bees", "Pranas Skardžius: Lithuanian Mythological Names"],
};

export const menulisMeta: DeityMeta = {
  slug: "menulis",
  name: "Mėnulis",
  domain: "God",
  epithet: {
    en: "Keeper of nocturnal crossings",
    lt: "Naktinių kirtimų sargas",
    lv: "Nakts pāreju sargs",
  },
  summary: {
    en: "Silver light on river bends marks the routes of wanderers and wolves alike.",
    lt: "Sidabrinė šviesa upių vingiuose žymi keliautojų ir vilkų takus.",
    lv: "Sudraba gaisma upju līkumos iezīmē ceļotāju un vilku takas.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(160, 192, 210, 0.22)",
  accent: "#c5d9e6",
  altNames: {
    en: "Menulis",
    lt: "Mėnulis",
    lv: "Mēness",
  },
  keywords: ["moon", "night", "tides", "silver"],
  gallery: [
    {
      title: "Silver shard pendant",
      medium: "river silver",
      note: "Hung on boats to travel under waning moons.",
    },
    {
      title: "Night-map cloth",
      medium: "indigo dye",
      note: "Painted with tidal lines for safe nocturnal crossings.",
    },
  ],
  locations: [
    {
      id: "aukstaiciai-lake",
      name: "Lake Moon Ladder",
      coordinates: [55.4, 25.0],
      region: "Lithuania",
      description: "Still water that mirrors silver paths when the moon is young.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "menulis",
      significance: "Fisherfolk wait for the ladder reflection before casting nets.",
    },
    {
      id: "ventspils-shore",
      name: "Ventspils Tide Silver",
      coordinates: [57.39, 21.56],
      region: "Latvia",
      description: "A strand where moonlight pulls phosphorescent curls from the surf.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "menulis",
      significance: "Sailors map moon height against carved posts for omen keeping.",
    },
  ],
  materialLegacy: ["Indigo-tinted tide charts", "Carved moon-phase posts"],
  symbols: [
    { label: "Element", detail: "Cold glow on water" },
    { label: "Offerings", detail: "River silver, white pebbles, silence" },
  ],
  regionDetails: {
    en: "Coast / Lowlands",
    lt: "Pajūris / Žemumos",
    lv: "Piekrastes / Zemienes",
  },
  tribe: {
    en: "Lithuanians / Latvians",
    lt: "Lietuviai / Latviai",
    lv: "Lietuvieši / Latvieši",
  },
  period: {
    en: "Folklore Tradition",
    lt: "Tautosakos tradicija",
    lv: "Folkloras tradīcija",
  },
  references: ["Jonas Basanavičius", "Ludwig Rhesa: Prutena", "Krišjānis Barons"],
};

export const dievasMeta: DeityMeta = {
  slug: "dievas",
  name: "Dievas",
  domain: "God",
  epithet: {
    en: "High stillness above the pines",
    lt: "Aukšta tyla virš pušų",
    lv: "Augsta klusums virs priedēm",
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
      title: "Bronze bell canopy",
      medium: "bronze, linen",
      note: "Hung in farmyards to carry prayers upward.",
    },
    {
      title: "Star-etched staff",
      medium: "ash wood",
      note: "Used by elders to note stellar alignments on solstice nights.",
    },
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
    },
  ],
  materialLegacy: ["Bronze bell miniatures", "Star charts burnt into ash wood"],
  symbols: [
    { label: "Element", detail: "Still air above crowns" },
    { label: "Offerings", detail: "Bells, silence, unbroken bread" },
  ],
  regionDetails: {
    en: "Upper Regions",
    lt: "Aukštutinės žemės",
    lv: "Augšzemes",
  },
  tribe: {
    en: "Lithuanians / Lithuanians Proper",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "16th-17th Century Accounts",
    lt: "XVI-XVII a. aprašymai",
    lv: "16.-17. gs. apraksti",
  },
  references: ["Maciej Stryjkowski: Chronicle of Poland, Lithuania, Samogitia", "Gintaras Beresnevičius", "Jan Łasicki"],
};

export const gabijaMeta: DeityMeta = {
  slug: "gabija",
  name: "Gabija",
  domain: "Person",
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
      title: "Clay hearth tile",
      medium: "fired clay",
      note: "Painted with spirals to cradle embers overnight.",
    },
    {
      title: "Ember spoon",
      medium: "iron",
      note: "Used to carry live coals between farmsteads at weddings.",
    },
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
    },
  ],
  materialLegacy: ["Hearth tile shards", "Ribbon-wrapped ember spoons"],
  symbols: [
    { label: "Element", detail: "Low flame and baking bread" },
    { label: "Offerings", detail: "Bread crusts, salt, glowing coals" },
  ],
  regionDetails: {
    en: "All Domestic Sites",
    lt: "Visos gyvenamosios vietos",
    lv: "Visas dzīvojamās vietas",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "15th-16th Century Chroniclers",
    lt: "XV-XVI a. metraščiai",
    lv: "15.-16. gs. hronikas",
  },
  references: ["Maciej Stryjkowski", "Jan Łasicki: De Diis Samagitarum", "Jonas Basanavičius"],
};

export const bangputysMeta: DeityMeta = {
  slug: "bangputys",
  name: "Bangpūtys",
  domain: "Creature",
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
      title: "Tide bone whistle",
      medium: "whale bone",
      note: "Blown before casting nets to ask for steady currents.",
    },
    {
      title: "Pitch-sealed mast charm",
      medium: "pine pitch, linen",
      note: "Wrapped around masts to keep winds balanced.",
    },
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
    },
  ],
  materialLegacy: ["Amber-studded net weights", "Twin-faced wind vanes"],
  symbols: [
    { label: "Element", detail: "Salt wind over dark water" },
    { label: "Offerings", detail: "Fish scales, rope knots, sea glass" },
  ],
  regionDetails: {
    en: "Curonian Coast / Prussia",
    lt: "Kuršių marių pakrantė / Prūsija",
    lv: "Kuršu krasts / Prūsija",
  },
  tribe: {
    en: "Curonians / Prussians",
    lt: "Kuršiai / Prūsai",
    lv: "Kurši / Prūši",
  },
  period: {
    en: "17th Century Maritime Records",
    lt: "XVII a. jūriniai užrašai",
    lv: "17. gs. jūrniecības avoti",
  },
  references: ["Matthäus Praetorius: Deliciae Prussicae", "Simon Grunau"],
};

export const medineMeta: DeityMeta = {
  slug: "medine",
  name: "Medinė",
  domain: "Creature",
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
      title: "Spruce resin seal",
      medium: "resin, linen",
      note: "Pressed onto axes to remind of measured cuts.",
    },
    {
      title: "Moss-lined reliquary",
      medium: "oak, moss",
      note: "Holds birch bark prayers from wood gatherers.",
    },
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
    },
  ],
  materialLegacy: ["Resin-sealed axes", "Bark slips with charcoal prayers"],
  symbols: [
    { label: "Element", detail: "Sap slow and sure" },
    { label: "Offerings", detail: "Resin drops, moss, quiet footsteps" },
  ],
  regionDetails: {
    en: "Forest Regions",
    lt: "Miškų regionai",
    lv: "Mežu reģioni",
  },
  tribe: {
    en: "Lithuanians / Samogitians",
    lt: "Lietuviai / Žemaičiai",
    lv: "Lietuvieši / Žemaiši",
  },
  period: {
    en: "13th Century Chroniclers",
    lt: "XIII a. metraščiai",
    lv: "13. gs. hronikas",
  },
  references: ["Volhynian Chronicle", "Ipatios Chronicle (1252 mention)", "Norbertas Vėlius"],
};

export const giltineMeta: DeityMeta = {
  slug: "giltine",
  name: "Giltinė",
  domain: "Creature",
  epithet: {
    en: "Tall pale woman at the threshold",
    lt: "Aukšta blyški moteris prie slenksčio",
    lv: "Gara bāla sieviete pie sliekšņa",
  },
  summary: {
    en: "Death comes not as a monster but as a pale woman with a long tongue, licking the dying to ease their passage.",
    lt: "Mirtis ateina ne kaip pabaisos, bet kaip blyški moteris ilgu liežuviu, laižanti mirštančiuosius ir palengvinanti jų perėjimą.",
    lv: "Nāve nāk ne kā briesmonis, bet kā bāla sieviete ar garu mēli, laizot mirstošos, lai atvieglotu viņu pāreju.",
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
      title: "White burial shroud",
      medium: "linen",
      note: "Left at crossroads on All Souls Night for the pale goddess.",
    },
    {
      title: "Iron death-hook",
      medium: "bog iron",
      note: "Traditional Lithuanian grave marker with serpent motif.",
    },
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
    },
  ],
  materialLegacy: ["Linen shrouds with serpent motifs", "Iron death-hooks at gravesides"],
  symbols: [
    { label: "Element", detail: "Cold white mist at dusk" },
    { label: "Offerings", detail: "Milk, white bread, silence" },
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
    en: "16th-17th Century Records",
    lt: "XVI-XVII a. šaltiniai",
    lv: "16.-17. gadsimta avoti",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Matthäus Praetorius: Deliciae Prussicae (~1690)",
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
      title: "Amber fire-dragon amulet",
      medium: "Baltic amber",
      note: "Worn by those seeking pūķis's favour, found in Latvian folk collections.",
    },
    {
      title: "Charred roof-beam",
      medium: "oak, pine pitch",
      note: "Evidence of pūķis visits — scorched entry point in a farmstead loft.",
    },
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
    },
  ],
  materialLegacy: ["Flame-scorched grain offerings", "Red-thread serpent charms"],
  symbols: [
    { label: "Element", detail: "Red fire-trail over barns" },
    { label: "Offerings", detail: "Grain, cream, black bread" },
  ],
  regionDetails: {
    en: "Kurzeme / Zemgale",
    lt: "Kuršas / Žiemgala",
    lv: "Kurzeme / Zemgale",
  },
  tribe: {
    en: "Latvians / Semigallians",
    lt: "Latviai / Žiemgaliai",
    lv: "Latvieši / Zemgaļi",
  },
  period: {
    en: "18th-19th Century Folklore",
    lt: "XVIII-XIX a. tautosaka",
    lv: "18.-19. gadsimta folklora",
  },
  references: [
    "Pēteris Šmits: Latviešu pasakas un teikas (1925–37)",
    "Latvijas Nacionālā enciklopēdija",
  ],
};

export const ausrineMeta: DeityMeta = {
  slug: "ausrine",
  name: "Aušrinė",
  domain: "Creature",
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
      title: "Golden thread brooch",
      medium: "gilded bronze",
      note: "Worn by young women at dawn rituals, symbolising the morning star's light.",
    },
    {
      title: "Dawn water vessel",
      medium: "clay",
      note: "Filled with dew before sunrise and offered with sung prayers.",
    },
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
    },
  ],
  materialLegacy: ["Dawn-water clay vessels", "Morning star embroidery motifs"],
  symbols: [
    { label: "Element", detail: "First light before sunrise" },
    { label: "Offerings", detail: "Dew water, golden thread, smoke" },
  ],
  regionDetails: {
    en: "Žemaitija / Pan-Lithuanian",
    lt: "Žemaitija / Visa Lietuva",
    lv: "Žemaitija / Visa Lietuva",
  },
  tribe: {
    en: "Lithuanians / Samogitians",
    lt: "Lietuviai / Žemaičiai",
    lv: "Lietuvieši / Žemaiši",
  },
  period: {
    en: "16th Century Sources",
    lt: "XVI a. šaltiniai",
    lv: "16. gadsimta avoti",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai (1996–2005)",
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
      title: "Māra's cross pendant",
      medium: "silver",
      note: "Pre-Christian solar cross associated with Māra, still worn in Latvia.",
    },
    {
      title: "Sacred cow skull",
      medium: "bone, red ochre",
      note: "Placed in barn eaves to invoke Māra's protection of cattle.",
    },
  ],
  locations: [
    {
      id: "lielvarde-earth-ground",
      name: "Lielvārde Sacred Ground",
      coordinates: [56.71, 24.80],
      region: "Latvia",
      description: "Ancient Daugava settlement associated with Māra earth rituals and the sacred belt tradition.",
      siteType: "Sacrifice / offering sites",
      aura: "moss",
      deity: "mara",
      significance: "The Lielvārdes josta — a sacred ornamental belt — embodies Māra's cosmic order.",
    },
    {
      id: "zemgale-grain-field",
      name: "Zemgale Grain Fields",
      coordinates: [56.47, 24.43],
      region: "Latvia",
      description: "The broad Zemgale plain where Māra's presence was felt in every plowed furrow.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "mara",
      significance: "On March 25 — Māras diena — farmers first touched the soil to invite her blessing.",
    },
  ],
  materialLegacy: ["Māra's cross amulets", "Sacred cattle skull barn charms"],
  symbols: [
    { label: "Element", detail: "Loam of plowed fields" },
    { label: "Offerings", detail: "Milk, earth, woven cloth" },
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
      title: "Double-grain crown",
      medium: "braided rye",
      note: "Hung above the farmhouse door after harvest — Jumis's symbol.",
    },
    {
      title: "Last sheaf effigy",
      medium: "wheat straw",
      note: "Woven into a human shape, given a name, kept through winter.",
    },
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
    },
  ],
  materialLegacy: ["Braided rye harvest crowns", "Double-grain pressed into clay seals"],
  symbols: [
    { label: "Element", detail: "Two stalks from one root" },
    { label: "Offerings", detail: "Last grain, barley beer, harvest bread" },
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
    en: "13th Century Attestation / 18th-19th Century Collection",
    lt: "XIII a. paliudijimas / XVIII-XIX a. rinkimas",
    lv: "13. gs. apliecinājums / 18.-19. gs. krākums",
  },
  references: [
    "Henricus de Lettis: Chronicon Livoniae (c.1227)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
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
      title: "Horse wreath",
      medium: "oak leaves, herbs",
      note: "Placed on horses' heads on Ūsiņš Day (April 23) before first pasturing.",
    },
    {
      title: "Spring candle cluster",
      medium: "beeswax",
      note: "Lit before dawn on Ūsiņdiena to welcome Ūsiņš's return.",
    },
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
    },
  ],
  materialLegacy: ["Oak-leaf horse wreaths", "Beeswax spring candles"],
  symbols: [
    { label: "Element", detail: "First spring light on dew" },
    { label: "Offerings", detail: "Horse feed, barley beer, candles" },
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
  ],
};

export const vakarineMeta: DeityMeta = {
  slug: "vakarine",
  name: "Vakarinė",
  domain: "Creature",
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
      title: "Silver tray of evening light",
      medium: "hammered silver",
      note: "Symbolic vessel for carrying the last warmth of the sun across the horizon.",
    },
    {
      title: "Linen evening cloth",
      medium: "flax",
      note: "Women's offering woven with silver thread, laid at hilltops at dusk for Vakarinė.",
    },
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
    },
  ],
  materialLegacy: ["Silver-thread evening cloths", "Sunset candle rituals", "Venus-observation hilltops"],
  symbols: [
    { label: "Planet", detail: "Venus as Evening Star" },
    { label: "Function", detail: "Prepares the Sun's rest" },
    { label: "Offering", detail: "Flax candles and silver thread" },
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania, Latvia)",
    lt: "Visos baltų žemės (Lietuva, Latvija)",
    lv: "Visu baltu zemes (Lietuva, Latvija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "Ancient — first recorded by Łasicki (1582)",
    lt: "Seniausieji laikai — pirmą kartą užrašyta Łasicki (1582)",
    lv: "Senākie laiki — pirmoreiz pierakstīts no Łasicki (1582)",
  },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Biezais, Haralds: Die himmlische Götterfamilie der alten Letten (1972)",
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
      title: "Bronze sun-disc pendant",
      medium: "cast bronze",
      note: "Baltic Bronze Age pendant representing the Sun forged by the divine smith; found across Lithuania.",
    },
    {
      title: "Iron anvil shard",
      medium: "iron",
      note: "Ritual iron fragments deposited at smithing sites as offerings to the divine craftsman.",
    },
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
    },
  ],
  materialLegacy: ["Bronze Age sun-disc pendants", "Iron ritual deposits at smithing sites", "Amber as divine sparks"],
  symbols: [
    { label: "Attribute", detail: "Hammer and divine anvil" },
    { label: "Creation", detail: "Forged the Sun (Hypatian Codex 1261)" },
    { label: "Alliance", detail: "Works with Dievas and Perkūnas" },
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
      title: "Woven fate cloth",
      medium: "linen with pattern",
      note: "Ritual cloth woven as a dowry offering to Dalia at birth ceremonies.",
    },
    {
      title: "Grain-measuring vessel",
      medium: "clay pot",
      note: "Used to portend the amount of harvest Dalia would allot a household.",
    },
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
    },
  ],
  materialLegacy: ["Birth-offering cloths", "Grain-measuring vessels", "Ritual scissors (fate-cutting)"],
  symbols: [
    { label: "Name", detail: "From 'dalis' (portion, share)" },
    { label: "Function", detail: "Material fate and wealth distribution" },
    { label: "Companion", detail: "Works alongside Laima" },
  ],
  regionDetails: {
    en: "Pan-Baltic (Lithuania, Latvia)",
    lt: "Visos baltų žemės (Lietuva, Latvija)",
    lv: "Visu baltu zemes (Lietuva, Latvija)",
  },
  tribe: {
    en: "All Baltic Tribes",
    lt: "Visos baltų gentys",
    lv: "Visas baltu ciltis",
  },
  period: {
    en: "Ancient — reconstructed from folk tradition and Vėlius (1983)",
    lt: "Seniausieji laikai — atkurta iš liaudies tradicijos ir Vėliaus (1983)",
    lv: "Senākie laiki — rekonstruēts no tautas tradīcijas un Vēliusa (1983)",
  },
  references: [
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const patollaMeta: DeityMeta = {
  slug: "patollo",
  name: "Patollo",
  domain: "Creature",
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
      title: "White burial shroud",
      medium: "linen",
      note: "The white cloth head-covering of Patollo's idol at Romuva, described by Grunau (1529).",
    },
    {
      title: "Skull offering vessel",
      medium: "carved wood",
      note: "Ritual container for ash offerings made to the Lord of Shadows at winter rites.",
    },
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
    },
  ],
  materialLegacy: ["White shroud offerings", "Ash-fire ritual rites", "Winter solstice death ceremonies"],
  symbols: [
    { label: "Appearance", detail: "Pale elder, white head-shroud" },
    { label: "Triad", detail: "Romuva triad with Perkūns and Patrimpas" },
    { label: "Domain", detail: "Death, shadows, and ancestral spirits" },
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
    en: "Medieval — recorded by Simon Grunau (1529)",
    lt: "Viduramžiai — užrašė Simonas Grunau (1529)",
    lv: "Viduslaiki — pierakstīts no Simona Grunau (1529)",
  },
  references: [
    "Grunau, Simon: Preussische Chronik (1529)",
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
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
    en: "Potrimpas, Patrimpo",
    lt: "Potrimpas, Patrimpo",
    lv: "Potrimpas, Patrimpo",
  },
  keywords: ["youth", "harvest", "spring", "fertility", "prussian", "romuva", "rivers", "grain crown"],
  gallery: [
    {
      title: "Grain wreath festival crown",
      medium: "rye and flax",
      note: "Woven crown for Patrimpas celebrations at spring planting, worn by the lead dancer.",
    },
    {
      title: "Spring waters vessel",
      medium: "clay jug",
      note: "Used to carry first river-water of spring as an offering to Patrimpas.",
    },
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
    },
  ],
  materialLegacy: ["Grain crown offerings", "Spring festival wreaths", "First-fish cast-back rituals"],
  symbols: [
    { label: "Appearance", detail: "Beardless youth, grain crown" },
    { label: "Triad", detail: "Romuva triad with Perkūns and Patollo" },
    { label: "Domain", detail: "Spring, youth, rivers, harvest" },
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
    en: "Medieval — recorded by Simon Grunau (1529)",
    lt: "Viduramžiai — užrašė Simonas Grunau (1529)",
    lv: "Viduslaiki — pierakstīts no Simona Grunau (1529)",
  },
  references: [
    "Grunau, Simon: Preussische Chronik (1529)",
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai (1996)",
  ],
};

export const autrimpasMeta: DeityMeta = {
  slug: "autrimpas",
  name: "Autrimpas",
  domain: "Creature",
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
      title: "Amber sea offering",
      medium: "amber",
      note: "Raw amber cast into the sea as first-catch offering to Autrimpas before offshore voyages.",
    },
    {
      title: "Carved driftwood fish",
      medium: "driftwood",
      note: "Votive fish carvings left at shore shrines to ensure abundant catch.",
    },
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
    },
  ],
  materialLegacy: ["Amber sea-castings", "Net-carved votive offerings", "First-catch rituals"],
  symbols: [
    { label: "Domain", detail: "Sea, storms, and maritime bounty" },
    { label: "Comparison", detail: "Chronicles compare him to Neptune" },
    { label: "Offering", detail: "First fish of the catch" },
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
    en: "Medieval — recorded in Grunau (1529) and Sudovian Book (16th c.)",
    lt: "Viduramžiai — Grunau (1529) ir Sūduvių knygelė (XVI a.)",
    lv: "Viduslaiki — Grunau (1529) un Sudāviešu grāmatiņa (16. gs.)",
  },
  references: [
    "Grunau, Simon: Preussische Chronik (1529)",
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

// ── Batch 3 additions ──────────────────────────────────────────────────────

export const vejopatisMeta: DeityMeta = {
  slug: "vejopatis",
  name: "Vėjopatis",
  domain: "God",
  epithet: {
    en: "Lord of the winds between worlds",
    lt: "Vėjų valdovas tarp pasaulių",
    lv: "Vēju kungs starp pasaulēm",
  },
  summary: {
    en: "Vėjopatis governs the wind that stirs the treetops and carries the souls of the dead toward the afterlife realm of Dausos.",
    lt: "Vėjopatis valdo vėją, kuris judina medžių viršūnes ir neša mirusiųjų vėles link Dausų.",
    lv: "Vējopatiss pārvalda vēju, kas šūpo koku galotnēs un nes mirušo dvēseles uz Dausos aizsauli.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(100, 149, 200, 0.24)",
  accent: "#7ab0d4",
  altNames: {
    en: "Vejopatis, Vejo Dievas",
    lt: "Vėjopatis, Vėjo Dievas",
    lv: "Vējopatiss",
  },
  keywords: ["wind", "souls", "afterlife", "Dausos"],
  gallery: [
    {
      title: "Wind-bent hilltop pine",
      medium: "natural",
      note: "Pines on Samogitian ridges bent by prevailing westerlies, treated as Vėjopatis shrines.",
    },
  ],
  locations: [
    {
      id: "zemaitija-sky",
      name: "Žemaitija Sky Fields",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Open highlands where the wind never ceases and the dead pass through toward Dausos.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "vejopatis",
      significance: "Linen strips tied to pines; feathers scattered on wind to honor soul passages.",
    },
  ],
  materialLegacy: ["Linen wind-offerings on hilltops", "Wind-carved pine shrines"],
  symbols: [
    { label: "Element", detail: "Moving air and breath" },
    { label: "Offerings", detail: "Linen strips, feathers, grain scattered to wind" },
  ],
  regionDetails: {
    en: "Samogitia / Lithuania",
    lt: "Žemaitija / Lietuva",
    lv: "Žemaitija / Lietuva",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "16th Century (Łasicki 1582)",
    lt: "XVI a. (Łasicki 1582)",
    lv: "16. gs. (Łasicki 1582)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai (1996–2005)",
  ],
};

export const vaizgantasMeta: DeityMeta = {
  slug: "vaizgantas",
  name: "Vaižgantas",
  domain: "God",
  epithet: {
    en: "Master of bound flax and twisted hemp",
    lt: "Rišto lino ir susuktos kanapės valdovas",
    lv: "Sasieta lina un savītas kaņepju meistars",
  },
  summary: {
    en: "Vaižgantas presides over flax and hemp, the sacred fibres from which Baltic peoples wove clothing, nets, and ritual textiles for generations.",
    lt: "Vaižgantas globoja liną ir kanapę — šventus augalus, iš kurių baltai audinius, tinklus ir apeiginius rūbus.",
    lv: "Vaigantas valda linu un kaņepes — svētās šķiedras, no kurām baltu tautas avija drēbes, tīklus un rituālos audekļus.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(190, 200, 140, 0.26)",
  accent: "#b8c87a",
  altNames: {
    en: "Waizganthos, Wajzganthos",
    lt: "Vaižgantas",
    lv: "Vaigantas",
  },
  keywords: ["flax", "hemp", "weaving", "fibres"],
  gallery: [
    {
      title: "Linen distaff bundle",
      medium: "prepared flax",
      note: "Placed at field altars in Samogitia at flax-sowing time.",
    },
  ],
  locations: [
    {
      id: "telsiai-altars",
      name: "Telšiai Clay Altars",
      coordinates: [55.98, 22.25],
      region: "Lithuania",
      description: "Low clay mounds where flax bundles were offered before spring sowing.",
      siteType: "Field altars",
      aura: "green",
      deity: "vaizgantas",
      significance: "First flax bundle of each harvest left for Vaižgantas.",
    },
  ],
  materialLegacy: ["Distaff rituals", "First-flax offerings at field altars"],
  symbols: [
    { label: "Element", detail: "Growing green stalk" },
    { label: "Offerings", detail: "Flax bundles, hemp seed, linen cloth" },
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
    en: "16th Century (Łasicki 1582)",
    lt: "XVI a. (Łasicki 1582)",
    lv: "16. gs. (Łasicki 1582)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const ragutisMeta: DeityMeta = {
  slug: "ragutis",
  name: "Ragutis",
  domain: "God",
  epithet: {
    en: "God of the fermenting grain and communal cup",
    lt: "Besiruošiančio grūdo ir bendro puodelio dievas",
    lv: "Rūgstošās labības un kopīgā kausa dievs",
  },
  summary: {
    en: "Ragutis and his consort Ragutienė preside over beer brewing, sacred feasting, and the drinking of mead at communal celebrations that bound communities together.",
    lt: "Ragutis su žmona Ragutiene valdo alaus darymą, šventines puotas ir midaus gėrimą, rišantį bendruomenes.",
    lv: "Ragutis un viņa sieva Ragutienė valda alus darīšanu, svētku mielastus un medus dzērienu dzeršanu.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(180, 130, 60, 0.28)",
  accent: "#c49a3a",
  altNames: {
    en: "Ragutis, Ragutiene",
    lt: "Ragutis, Ragutienė",
    lv: "Ragutis",
  },
  keywords: ["beer", "brewing", "mead", "feasting"],
  gallery: [
    {
      title: "Clay brewing vessel",
      medium: "fired clay",
      note: "Ringed with ochre bands; used in communal harvest ceremonies.",
    },
  ],
  locations: [
    {
      id: "kaunas-hearth",
      name: "Kaunas Hearth Archive",
      coordinates: [54.9, 23.9],
      region: "Lithuania",
      description: "A sacred hearth complex where communal feasts honored the brewing gods.",
      siteType: "Communal feast sites",
      aura: "amber",
      deity: "ragutis",
      significance: "First barrel of autumn ale poured over the hearth before consumption.",
    },
  ],
  materialLegacy: ["Clay brewing vessels", "Carved wooden ale cups"],
  symbols: [
    { label: "Element", detail: "Fermentation" },
    { label: "Offerings", detail: "First ale, honey mead, barley grain" },
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
    en: "16th Century (Łasicki 1582)",
    lt: "XVI a. (Łasicki 1582)",
    lv: "16. gs. (Łasicki 1582)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const dimstipatisMeta: DeityMeta = {
  slug: "dimstipatis",
  name: "Dimstipatis",
  domain: "God",
  epithet: {
    en: "Guardian of the threshold and farmstead yard",
    lt: "Slenksčio ir kiemo sargybinis",
    lv: "Sliekšņa un sētas sargs",
  },
  summary: {
    en: "Dimstipatis watches over the farmstead and its yard, protecting all who dwell there from misfortune, evil spirits, and the disorder of the outside world.",
    lt: "Dimstipatis saugo sodybą ir kiemą, gindamas visus gyventojus nuo nelaimių, piktų dvasių ir išorinio pasaulio suirimo.",
    lv: "Dimstipatis sargā saimniecību un tās pagalmu, aizsargājot visus iemītniekus no nelaimes, ļaunajiem gariem un ārpasaules haosa.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(120, 100, 70, 0.26)",
  accent: "#9e8b68",
  altNames: {
    en: "Dimstipatis, Dimstis",
    lt: "Dimstipatis",
    lv: "Dimstipatis",
  },
  keywords: ["household", "farmstead", "threshold", "protection"],
  gallery: [
    {
      title: "Carved gate post",
      medium: "oak",
      note: "Gate posts carved with protective sun-wheels and snake motifs.",
    },
  ],
  locations: [
    {
      id: "vilnius-thread",
      name: "Vilnius Loom Threshold",
      coordinates: [54.69, 25.28],
      region: "Lithuania",
      description: "A ritual threshold stone at the entrance of a traditional farmstead.",
      siteType: "Household ritual sites",
      aura: "moss",
      deity: "dimstipatis",
      significance: "New families scraped their feet on it before entering to honor the house guardian.",
    },
  ],
  materialLegacy: ["Carved gate posts with sun-wheels", "Threshold offering stones"],
  symbols: [
    { label: "Element", detail: "Earth and wood" },
    { label: "Offerings", detail: "Salt, bread, first milk of spring" },
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
    en: "16th Century (Łasicki 1582)",
    lt: "XVI a. (Łasicki 1582)",
    lv: "16. gs. (Łasicki 1582)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const janisMeta: DeityMeta = {
  slug: "janis",
  name: "Jānis",
  domain: "God",
  epithet: {
    en: "Lord of midsummer fire and the long night's song",
    lt: "Vasaros saulėgrįžos ugnies ir ilgosios nakties giesmės valdovas",
    lv: "Vasarsvētku uguns un garajās nakts dziesmas kungs",
  },
  summary: {
    en: "Jānis is the Latvian deity of midsummer whose festival, Jāņi, draws an entire people out to build bonfires, weave oak-leaf wreaths, and sing through the brief solstice night.",
    lt: "Jānis — latvių vasarvidžio dievas, kurio šventė Jāņi surenka visą tautą laužų kurti, ąžuolų lapų vainikų pinti ir giedoti trumpą saulėgrįžos naktį.",
    lv: "Jānis ir latviešu vasarsvētku dievība; viņa svētki Jāņi aicina visu tautu kopā ku rt ugunskurus, pīt ozollapu vainagus un dziedāt īsajā saulgriežu naktī.",
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
      title: "Oak-leaf wreath",
      medium: "oak leaves, grass",
      note: "Woven by women before the festival and worn throughout the night.",
    },
    {
      title: "Midsummer bonfire",
      medium: "oak wood",
      note: "Lit on hilltops so neighboring homesteads can see the glow.",
    },
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
    },
  ],
  materialLegacy: ["Oak-leaf wreaths", "Midsummer fire embers kept as charms"],
  symbols: [
    { label: "Element", detail: "Midsummer fire" },
    { label: "Offerings", detail: "Oak leaves, Jāņu siers (Midsummer cheese), ale" },
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
    en: "Pre-Christian era, documented from Barons Dainas (1894–1915)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas Barono Dainose (1894–1915)",
    lv: "Pirmskristīgā ēra, dokumentēta Barona Dainās (1894–1915)",
  },
  references: [
    "Krišjānis Barons: Latvju dainas, 6 vols (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "LNE: Latvijas Nacionālā enciklopēdija",
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
      title: "Old-growth linden shrine",
      medium: "natural",
      note: "Hollowed linden trees served as her dwelling; offerings left in the cavity.",
    },
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
    },
  ],
  materialLegacy: ["Hollow linden offerings", "Bark coins left on stumps"],
  symbols: [
    { label: "Element", detail: "Living forest" },
    { label: "Offerings", detail: "Bread, salt, first mushrooms, apology before felling" },
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
    en: "Pre-Christian era, documented from Barons Dainas (1894–1915)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas Barono Dainose (1894–1915)",
    lv: "Pirmskristīgā ēra, dokumentēta Barona Dainās (1894–1915)",
  },
  references: [
    "Krišjānis Barons: Latvju dainas, 6 vols (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
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
    en: "Velu mate, Mother of Shades",
    lt: "Mirusiųjų Motina",
    lv: "Veļu māte",
  },
  keywords: ["death", "underworld", "ancestors", "souls"],
  gallery: [
    {
      title: "Ancestral offering bowl",
      medium: "birch bark",
      note: "Left at gravesides during Veļu laiks with food for the returning dead.",
    },
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
    },
  ],
  materialLegacy: ["Birch-bark offering bowls", "Candles floated on autumn springs"],
  symbols: [
    { label: "Element", detail: "Still water and shadow" },
    { label: "Offerings", detail: "Food left for the dead, candles, autumn flowers" },
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
    en: "Pre-Christian era, documented from Barons Dainas (1894–1915)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas Barono Dainose (1894–1915)",
    lv: "Pirmskristīgā ēra, dokumentēta Barona Dainās (1894–1915)",
  },
  references: [
    "Krišjānis Barons: Latvju dainas, 6 vols (1894–1915)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
  ],
};

export const auschautsMeta: DeityMeta = {
  slug: "auschauts",
  name: "Auschauts",
  domain: "God",
  epithet: {
    en: "Healer of sick men and ailing horses",
    lt: "Ligonių ir sergančių arklių gydytojas",
    lv: "Slimo cilvēku un slimo zirgu dziedātājs",
  },
  summary: {
    en: "Auschauts is the Old Prussian deity of health and healing, invoked by the sick and by those whose livestock had fallen ill, offering cures through ritual prayer and herbal remedy.",
    lt: "Auschauts — senprūsių sveikatos ir gydymo dievas, kurį šaukdavosi ligoniai ir tie, kurių galvijai susirgo, siūlydamas išgijimo per apeiginę maldą ir žolinius vaistus.",
    lv: "Auschauts ir seno prūšu veselības un dziedināšanas dievs, kuru piesauca slimnieki un tie, kuru lopi saslima.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(70, 150, 130, 0.26)",
  accent: "#5aad9e",
  altNames: {
    en: "Auschauts, Auschaut",
    lt: "Auschauts",
    lv: "Auskauts",
  },
  keywords: ["health", "healing", "medicine", "livestock"],
  gallery: [
    {
      title: "Healing herb bundle",
      medium: "dried herbs",
      note: "Bundles of medicinal plants offered at Auschauts's shrine before illness treatment.",
    },
  ],
  locations: [
    {
      id: "samogitia-stand",
      name: "Samogitian Spruce Stand",
      coordinates: [55.7, 22.4],
      region: "Lithuania",
      description: "An ancient spruce grove where healing rituals were performed under Old Prussian influence.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "auschauts",
      significance: "Sick animals and people were brought here for ritual healing prayers.",
    },
  ],
  materialLegacy: ["Healing herb bundles", "Carved wooden healing charms"],
  symbols: [
    { label: "Element", detail: "Fresh herbs and clean water" },
    { label: "Offerings", detail: "Medicinal herbs, clean spring water, white cloth" },
  ],
  regionDetails: {
    en: "Old Prussia / Samland",
    lt: "Senoji Prūsija / Semba",
    lv: "Vecā Prūsija / Semba",
  },
  tribe: {
    en: "Old Prussians / Sudovians",
    lt: "Senprūsiai / Sūduviai",
    lv: "Vecie prūši / Sudāvieši",
  },
  period: {
    en: "16th Century (Sudovian Book)",
    lt: "XVI a. (Sūduvių knygelė)",
    lv: "16. gs. (Sudāviešu grāmatiņa)",
  },
  references: [
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Jan Łasicki: De Diis Samagitarum (1582)",
  ],
};

export const kurkeMeta: DeityMeta = {
  slug: "kurke",
  name: "Kurke",
  domain: "God",
  epithet: {
    en: "Guardian of the granary and harvest bounty",
    lt: "Jauno sėklavaizdžio ir derliaus gausos sargybinis",
    lv: "Klēts un ražas pārpilnības sargs",
  },
  summary: {
    en: "Kurke is the Old Prussian deity of grain and harvest, unique in being explicitly named in the 1249 Treaty of Christburg as one of the gods that newly baptised Prussians must renounce.",
    lt: "Kurke — senprūsių grūdų ir derliaus dievas, išskirtinis tuo, kad 1249 m. Christburgo sutartyje yra aiškiai įvardintas kaip vienas iš dievų, kurių pakrikštytieji prūsai privalo atsisakyti.",
    lv: "Kurke ir seno prūšu labības un ražas dievs, īpašs ar to, ka 1249. gada Kristburgas līgumā ir skaidri minēts kā viens no dieviem, no kuriem kristītajiem prūšiem jāatsakās.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(200, 165, 70, 0.26)",
  accent: "#c8a044",
  altNames: {
    en: "Kurke, Curche, Curcho",
    lt: "Kurke, Kurkė",
    lv: "Kurkis",
  },
  keywords: ["grain", "harvest", "food", "granary"],
  gallery: [
    {
      title: "Last-sheaf idol",
      medium: "bound rye stalks",
      note: "Effigy made from the last sheaf of harvest, identified with Curche.",
    },
  ],
  locations: [
    {
      id: "kolka-surge",
      name: "Kolka Surge Watch",
      coordinates: [57.74, 22.6],
      region: "Latvia",
      description: "A coastal site where harvest offering fires burned after the grain was safely stored.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "kurke",
      significance: "Grain effigies burned and ale poured to Curche after harvest completion.",
    },
  ],
  materialLegacy: ["Last-sheaf effigies", "Grain harvest fire offerings"],
  symbols: [
    { label: "Element", detail: "Ripe grain and autumn fire" },
    { label: "Offerings", detail: "First bread, last sheaf, barley ale" },
  ],
  regionDetails: {
    en: "Old Prussia / Natangia",
    lt: "Senoji Prūsija / Natangija",
    lv: "Vecā Prūsija / Natangija",
  },
  tribe: {
    en: "Old Prussians",
    lt: "Senprūsiai",
    lv: "Vecie prūši",
  },
  period: {
    en: "13th Century (Treaty of Christburg, 1249)",
    lt: "XIII a. (Christburgo sutartis, 1249 m.)",
    lv: "13. gs. (Kristburgas līgums, 1249)",
  },
  references: [
    "Treaty of Christburg (1249) — Collectio Episcopi Varmiensis",
    "Matthäus Praetorius: Deliciae Prussicae (ms. ~1690)",
    "Christoph Hartknoch: Alt- und neues Prussien (1684)",
  ],
};

export const aitvarasMeta: DeityMeta = {
  slug: "aitvaras",
  name: "Aitvaras",
  domain: "Creature",
  epithet: {
    en: "Fiery serpent of stolen plenty",
    lt: "Ugningoji ugnies žalčio velnio gausybė",
    lv: "Ugunīgā čūska ar zagutu pārpilnību",
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
      title: "Comet-streak carving",
      medium: "carved wood",
      note: "Rooftop carving representing the Aitvaras's nightly flight.",
    },
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
    },
  ],
  materialLegacy: ["Rooftop fire-serpent carvings", "Attic grain-offerings"],
  symbols: [
    { label: "Element", detail: "Fire and grain" },
    { label: "Offerings", detail: "Omelet, grain, first milk — fed regularly to keep it loyal" },
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
    en: "16th Century (Łasicki 1582), documented in Witch Trial Records",
    lt: "XVI a. (Łasicki 1582), užrašyta raganų teismų protokoluose",
    lv: "16. gs. (Łasicki 1582), dokumentēts raganu tiesas protokolos",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Witch Trial Records: LT ecclesiastical court records 16th–17th c.",
  ],
};

export const laumesMeta: DeityMeta = {
  slug: "laumes",
  name: "Laumės",
  domain: "Creature",
  epithet: {
    en: "Spinners of fate in moonlit forest clearings",
    lt: "Likimo verpėjos mėnesienos nušviestuose miško proskynose",
    lv: "Likteņa vērpējas mēnessgaismas meža klajumos",
  },
  summary: {
    en: "The Laumės are beautiful ambivalent forest spirits who spin the threads of fate, care for orphaned children, and may steal unbaptised infants in the night, leaving changelings in their place.",
    lt: "Laumės — gražios dviprasmiškos miško dvasios, nusukančios likimo siūlus, globojančios našlaičius vaikus ir galimos vogti nekrikštytų kūdikių naktį, vietoje jų palikdamos pakaitinius.",
    lv: "Laumes ir skaistas, nepastāvīgas meža garienes, kas vērpj likteņa pavedienus, rūpējas par bāreņiem un var naktī nozagt nekristītus zīdaiņus, atstājot to vietā pamainīšanus.",
  },
  heroImage:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(120, 80, 160, 0.26)",
  accent: "#9060c0",
  altNames: {
    en: "Laumes, Lauma",
    lt: "Laumė, Laumės",
    lv: "Lauma",
  },
  keywords: ["fate", "weaving", "forest", "spirits"],
  gallery: [
    {
      title: "Linen spindle found in forest",
      medium: "carved bone",
      note: "Laumės were said to leave their spindles behind when disturbed at their nighttime work.",
    },
  ],
  locations: [
    {
      id: "anyksciai-forest",
      name: "Anykščiai Forest",
      coordinates: [55.52, 25.1],
      region: "Lithuania",
      description: "Dense old-growth forest where Laumės were said to gather on moonlit nights.",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "laumes",
      significance: "Women left spindle whorls at forest edges to honour the Laumės.",
    },
  ],
  materialLegacy: ["Spindle whorls left at forest edges", "White linen strips in oak clearings"],
  symbols: [
    { label: "Element", detail: "Moonlight and loom" },
    { label: "Offerings", detail: "Linen thread, white flowers, milk" },
  ],
  regionDetails: {
    en: "Pan-Baltic / Lithuania",
    lt: "Visos baltų žemės / Lietuva",
    lv: "Visas baltu zemes / Lietuva",
  },
  tribe: {
    en: "Lithuanians",
    lt: "Lietuviai",
    lv: "Lietuvieši",
  },
  period: {
    en: "Pre-Christian era, documented from Łasicki (1582) and Gimbutas (1999)",
    lt: "Ikikrikščioniškasis laikotarpis, užrašytas Łasicki (1582) ir Gimbutas (1999)",
    lv: "Pirmskristīgā ēra, dokumentēta Łasicki (1582) un Gimbutas (1999)",
  },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582)",
    "Marija Gimbutas: The Living Goddesses (1999)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
  ],
};

export const zaltysMeta: DeityMeta = {
  slug: "zaltys",
  name: "Žaltys",
  domain: "Creature",
  epithet: {
    en: "Holy grass snake beneath the hearthstone",
    lt: "Šventasis žaltys po akmeniu prie židinio",
    lv: "Svētā zālāja čūska zem pavarda akmens",
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
      title: "Hearth snake shelter",
      medium: "smooth river stones",
      note: "Stones arranged at the base of the hearth to provide shelter for the sacred snake.",
    },
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
    },
  ],
  materialLegacy: ["Hearth-snake milk bowls", "Snake-motif amber pendants"],
  symbols: [
    { label: "Element", detail: "Earth and household fire" },
    { label: "Offerings", detail: "Fresh milk, bread, warm hearth shelter" },
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
      title: "Amber bead from Nida dunes",
      medium: "Baltic amber",
      note: "Amber beads found at her feet according to legend.",
    },
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
    },
  ],
  materialLegacy: ["Amber sculptures on Curonian coast", "Fishermen's votive offerings"],
  symbols: [
    { label: "Element", detail: "Sand, sea, creation" },
    { label: "Offerings", detail: "Amber, first fish of season, amber-ale libation" },
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
    "Jonas Basanavičius: Lietuviškos pasakos (1898–1902)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
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
      title: "Funerary pyre reconstruction",
      medium: "oak and pine",
      note: "The pre-Christian Lithuanian funeral rite introduced according to legend by Sovijus.",
    },
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
    },
  ],
  materialLegacy: ["Cremation urn burials across Baltic region", "Fire-starting ritual tools"],
  symbols: [
    { label: "Element", detail: "Purifying fire" },
    { label: "Offerings", detail: "Cremation fire, grain—placed in funerary urn" },
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
    en: "13th Century (Hypatian Chronicle, 1261)",
    lt: "XIII a. (Ipatijaus metraštis, 1261 m.)",
    lv: "13. gs. (Hipātija hronika, 1261)",
  },
  references: [
    "Hypatian (Ipatios) Chronicle (1261)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const praamziusMeta: DeityMeta = {
  slug: "praamzius",
  name: { en: "Praamžius", lt: "Praamžius", lv: "Praamžius" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of Eternity and First Cause",
    lt: "Amžinybės ir pirmosios priežasties dievas",
    lv: "Mūžības un pirmcēloņa dievs",
  },
  summary: {
    en: "Praamžius is the epithet of the supreme Lithuanian deity representing time, eternity, and the primordial first cause. He is the distant cosmic orderer who set the world in motion.",
    lt: "Praamžius yra aukščiausiojo lietuvių dievybės epitetas, reiškiantis laiką, amžinybę ir pirmąją priežastį. Jis yra tolimas kosminio dėsnio kūrėjas.",
    lv: "Praamžius ir augstākā lietuviešu dievības epitets, kas simbolizē laiku, mūžību un pirmatnējo cēloni. Viņš ir kosmiskās kārtības noteicējs.",
  },
  attributes: ["Eternity", "Time", "First Cause", "Creation", "Cosmic Order"],
  symbols: ["Sky vault", "Endless circle", "Oak", "Rainbow", "Scepter"],
  locations: [],
  regionDetails: {
    en: "Lithuania, Samogitia",
    lt: "Lietuva, Žemaitija",
    lv: "Lietuva, Žemaitija",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "19th Century (Narbutt reconstruction); Proto-Indo-European roots",
    lt: "19 a. (Narbuto rekonstrukcija); indoeuropietiškosios šaknys",
    lv: "19. gs. (Narbuta rekonstrukcija); protoindoeiropiešu saknes",
  },
  references: [
    "Narbutt, Teodor: Mitologia litewska (1835)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const zvorunaMeta: DeityMeta = {
  slug: "zvoruna",
  name: { en: "Žvorūna", lt: "Žvorūna", lv: "Žvorūna" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Wild Beasts and the Hunt",
    lt: "Laukinių žvėrių ir medžioklės deivė",
    lv: "Meža zvēru un medību dieviete",
  },
  summary: {
    en: "Žvorūna is the fierce Lithuanian and Samogitian goddess of wild animals and the hunt. Often identified with Medeina, her name emphasizes sovereignty over wild beasts (žvėris).",
    lt: "Žvorūna yra lietuvių ir žemaičių laukinių žvėrių bei medžioklės deivė. Dažnai tapatinama su Medeina, jos vardas pabrėžia valdžią laukiniams žvėrims.",
    lv: "Žvorūna ir lietuviešu un žemaitiešu meža zvēru un medību dieviete. Bieži identificēta ar Medeinu, viņas vārds uzsver varu pār mežonīgajiem zvēriem.",
  },
  attributes: ["Hunt", "Wild Animals", "Forest", "Protection", "Balance"],
  symbols: ["Wolf", "Bow and arrow", "Animal tooth", "Forest glade"],
  locations: [],
  regionDetails: {
    en: "Lithuania (Samogitia)",
    lt: "Lietuva (Žemaitija)",
    lv: "Lietuva (Žemaitija)",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "13th Century (Hypatian Codex, 1252)",
    lt: "13 a. (Ipatijaus kodeksas, 1252)",
    lv: "13. gs. (Hipātija hronika, 1252)",
  },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const zemepatisMetaData: DeityMeta = {
  slug: "zemepatis",
  name: { en: "Žemėpatis", lt: "Žemėpatis", lv: "Žemėpatis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Lord of the Homestead and Cultivated Earth",
    lt: "Sodybos ir dirbamos žemės šeimininkas",
    lv: "Sētas un kultivētās zemes kungs",
  },
  summary: {
    en: "Žemėpatis is the divine master of the farmstead and the cultivated earth. As the masculine counterpart to Žemyna, he guards the household's fields, granaries, and the sacred Žaltys snake.",
    lt: "Žemėpatis yra sodybos ir dirbamos žemės dieviškas šeimininkas. Kaip Žemynos vyriškas atitikmuo, jis saugo namų laukus, daržines ir šventąjį žaltį.",
    lv: "Žemėpatis ir sētas un kultivētās zemes dievišķais kungs. Kā vīrišķais Žemynas ekvivalents, viņš sargā mājsaimniecības laukus, klētis un svēto žalti.",
  },
  attributes: ["Farmstead", "Agricultural land", "Boundaries", "Domestic prosperity", "Snake cult"],
  symbols: ["Soil", "Farmstead boundary", "Žaltys (sacred snake)", "Bread", "Ale"],
  locations: [],
  regionDetails: {
    en: "Lithuania, Samogitia",
    lt: "Lietuva, Žemaitija",
    lv: "Lietuva, Žemaitija",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "16th Century (Mažvydas Catechism, 1547)",
    lt: "16 a. (Mažvydo katekizmas, 1547)",
    lv: "16. gs. (Mažvyda katehisms, 1547)",
  },
  references: [
    "Mažvydas, Martynas: Katekizmas (1547)",
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const gabjaujaMetaData: DeityMeta = {
  slug: "gabjauja",
  name: { en: "Gabjauja", lt: "Gabjauja", lv: "Gabjauja" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of the Grain Barn and Harvest",
    lt: "Jaujos ir derliaus deivė",
    lv: "Labības šķūņa un ražas dieviete",
  },
  summary: {
    en: "Gabjauja is the Samogitian goddess of the threshing barn (jauja) and harvest. She protects stored grain from fire, rot, and theft, ensuring winter survival for the community.",
    lt: "Gabjauja yra žemaitiška jaujos ir derliaus deivė. Ji saugo supiltus javus nuo gaisro, puvimo ir vagysčių, užtikrindama bendruomenės išgyvenimą žiemą.",
    lv: "Gabjauja ir žemaitiešu labības šķūņa (jaujas) un ražas dieviete. Viņa aizsargā sakrāto labību no ugunsgrēkiem, nodrošinot kopienas izdzīvošanu ziemā.",
  },
  attributes: ["Harvest", "Grain barn", "Fire", "Agricultural safety", "Threshing"],
  symbols: ["Grain ear", "Threshing barn", "Sickle", "Rooster", "Bread"],
  locations: [],
  regionDetails: {
    en: "Lithuania (Samogitia)",
    lt: "Lietuva (Žemaitija)",
    lv: "Lietuva (Žemaitija)",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "16th Century (Łasicki, 1582)",
    lt: "16 a. (Lasickis, 1582)",
    lv: "16. gs. (Łasicki, 1582)",
  },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const pilvytisMetaData: DeityMeta = {
  slug: "pilvytis",
  name: { en: "Pilvytis", lt: "Pilvytis", lv: "Pilvytis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of Wealth and Full Granaries",
    lt: "Turtų ir pilnų aruodų dievas",
    lv: "Bagātības un pilnu klētu dievs",
  },
  summary: {
    en: "Pilvytis is the Lithuanian god of wealth, material abundance, and full granaries. His name derives from pilvas (belly/fullness), symbolizing prosperity and satiety.",
    lt: "Pilvytis yra lietuvių turtų, materialinės gausos ir pilnų aruodų dievas. Jo vardas kildinamas iš žodžio „pilvas", simbolizuojančio pilnatvę ir sotumą.",
    lv: "Pilvytis ir lietuviešu bagātības, materiālās pārpilnības un pilnu klēšu dievs. Viņa vārds cēlies no vārda „pilvas" (vēders/pilnums), simbolizējot pārticību.",
  },
  attributes: ["Wealth", "Abundance", "Granaries", "Prosperity", "Material security"],
  symbols: ["Granary (klėtis)", "Grain sack", "Coin", "Horn of plenty", "Sieve"],
  locations: [],
  regionDetails: {
    en: "Lithuania, Samogitia",
    lt: "Lietuva, Žemaitija",
    lv: "Lietuva, Žemaitija",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "16th Century (Łasicki, 1582)",
    lt: "16 a. (Lasickis, 1582)",
    lv: "16. gs. (Łasicki, 1582)",
  },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const birzulisMeta: DeityMeta = {
  slug: "birzulis",
  name: { en: "Biržulis", lt: "Biržulis", lv: "Biržulis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of the Birch Forest",
    lt: "Beržynų dvasia",
    lv: "Bērzu meža gars",
  },
  summary: {
    en: "Biržulis is the Lithuanian guardian spirit of birch forests and birch sap. Recorded by Łasicki as silvae betulinae deus, he is associated with spring renewal and sap-flow.",
    lt: "Biržulis yra lietuvių beržynų ir beržų sulos globėjas. Lasickio pavadintas silvae betulinae deus, jis siejamas su pavasariniu atgimimu.",
    lv: "Biržulis ir lietuviešu bērzu mežu un bērzu sulas aizbildnis. Łasicki to nosauca par silvae betulinae deus, tas saistāms ar pavasara atdzimšanu.",
  },
  attributes: ["Birch forest", "Spring sap", "Renewal", "White birch", "Spring"],
  symbols: ["Birch leaf", "Birch sap", "White bark", "Spring catkin"],
  locations: [],
  regionDetails: {
    en: "Lithuania (Aukštaitija, Samogitia)",
    lt: "Lietuva (Aukštaitija, Žemaitija)",
    lv: "Lietuva (Aukštaitija, Žemaitija)",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "16th Century (Łasicki, 1582)",
    lt: "16 a. (Lasickis, 1582)",
    lv: "16. gs. (Łasicki, 1582)",
  },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Būga, Kazimieras: Rinktiniai raštai (1958–62)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kirnisMeta: DeityMeta = {
  slug: "kirnis",
  name: { en: "Kirnis", lt: "Kirnis", lv: "Kirnis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of Cherry Trees and Orchards",
    lt: "Vyšnių ir sodų globėjas",
    lv: "Ķiršu koku un dārzu aizbildnis",
  },
  summary: {
    en: "Kirnis is the Lithuanian orchard spirit who watches over cherry trees and their fruit. Recorded by Łasicki as deus cerasorum, he ensures sweet harvests and protects trees from pests.",
    lt: "Kirnis yra lietuvių sodų dvasia, sauganti vyšnias ir jų vaisius. Lasickio pavadintas deus cerasorum, jis užtikrina saldų derlių ir saugo medžius.",
    lv: "Kirnis ir lietuviešu dārzu gars, kas sargā ķiršu kokus un to augļus. Łasicki to nosauca par deus cerasorum — viņš nodrošina saldu ražu.",
  },
  attributes: ["Cherry trees", "Orchards", "Harvest", "Fruit", "Spring blossom"],
  symbols: ["Cherry blossom", "Red fruit", "Cherry wood", "Basket"],
  locations: [],
  regionDetails: {
    en: "Lithuania (Samogitia)",
    lt: "Lietuva (Žemaitija)",
    lv: "Lietuva (Žemaitija)",
  },
  tribe: {
    en: "Lithuanians, Samogitians",
    lt: "Lietuviai, žemaičiai",
    lv: "Lietuvieši, žemaiši",
  },
  period: {
    en: "16th Century (Łasicki, 1582)",
    lt: "16 a. (Lasickis, 1582)",
    lv: "16. gs. (Łasicki, 1582)",
  },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const dievaDeliMeta: DeityMeta = {
  slug: "dieva-deli",
  name: { en: "Dieva dēli", lt: "Dievo sūnūs", lv: "Dieva dēli" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Divine Twins, Sons of Dievs",
    lt: "Dieviškieji dvyniai, Dievo sūnūs",
    lv: "Dieva dēli — debesu jātnieki",
  },
  summary: {
    en: "Dieva dēli are the divine twin sons of the sky god Dievs in Latvian mythology. They are celestial horse-riders who court the Saules meitas and protect horses and travelers.",
    lt: "Dieva dēli yra dieviškieji dvyniai, dangiškojo dievo Dievo sūnūs latvių mitologijoje. Jie yra dangiškieji raiteliai, kurie veda Saulės dukteris ir saugo arklius.",
    lv: "Dieva dēli ir debesu jātnieki, Dieva dēli latviešu mitoloģijā. Viņi ir debesu jahnieki, kas precas ar Saules meitām un sargā zirgus un ceļiniekus.",
  },
  attributes: ["Divine twins", "Horses", "Celestial riders", "Agriculture", "Protection"],
  symbols: ["Two horses", "Twin stars", "Golden stirrups", "Gray horse"],
  locations: [],
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
    "Biezais, Haralds: Die himmlische Götterfamilie der alten Letten (1972)",
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1926)",
  ],
};

export const saulesMeitasMeta: DeityMeta = {
  slug: "saules-meitas",
  name: { en: "Saules meitas", lt: "Saulės dukterys", lv: "Saules meitas" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Daughters of the Sun, Celestial Maidens",
    lt: "Saulės dukterys, dangiškosios mergelės",
    lv: "Saules meitas — debesu jaunavas",
  },
  summary: {
    en: "Saules meitas are the golden-haired celestial daughters of the Sun in Latvian mythology. They weave sunlight and are the brides pursued by the Dieva dēli in the celestial wedding cycle.",
    lt: "Saules meitas yra aukso plaukų dangiškosios Saulės dukterys latvių mitologijoje. Jos audžia saulės spinduliais ir yra Dievo sūnų vešimosi objektas.",
    lv: "Saules meitas ir zeltainas debesu jaunavas latviešu mitoloģijā. Viņas auž saules starus un ir Dieva dēlu precamās jaunavas debesu kāzu ciklā.",
  },
  attributes: ["Sunlight", "Weaving", "Celestial maidens", "Dawn/dusk", "Dowry"],
  symbols: ["Golden ring", "Golden scarf", "Sunray weaving", "Loom", "Morning dew"],
  locations: [],
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
    "Biezais, Haralds: Die himmlische Götterfamilie der alten Letten (1972)",
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "LNE: Latvijas Nacionālā enciklopēdija (enciklopedija.lv)",
  ],
};

export const jurasMateMeta: DeityMeta = {
  slug: "juras-mate",
  name: { en: "Jūras māte", lt: "Jūros motina", lv: "Jūras māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of the Sea",
    lt: "Jūros motina",
    lv: "Jūras māte",
  },
  summary: {
    en: "Jūras māte is the sovereign of the Baltic Sea in Latvian mythology. She commands waves and sea-wealth from her amber palace on the sea floor, blessing fishermen who honor her.",
    lt: "Jūras māte yra Baltijos jūros valdovė latvių mitologijoje. Ji valdo bangas ir jūros turtus iš savo gintarų rūmų jūros dugne, laimindama žvejus.",
    lv: "Jūras māte ir Baltijas jūras valdniece latviešu mitoloģijā. Viņa valda viļņus un jūras bagātības no savas dzintara pils jūras dibenā.",
  },
  attributes: ["Sea", "Waves", "Fish", "Amber", "Sailors", "Fishermen"],
  symbols: ["Sea-foam", "Amber", "Fishing net", "Wave-crest"],
  locations: [],
  regionDetails: {
    en: "Coastal Latvia (Kurzeme, Vidzeme, Latgale)",
    lt: "Pakrantės Latvija (Kurzeme, Vidzeme, Latgalė)",
    lv: "Piekrastes Latvija (Kurzeme, Vidzeme, Latgale)",
  },
  tribe: {
    en: "Latvians, Curonians",
    lt: "Latviai, kuršiai",
    lv: "Latvieši, kurši",
  },
  period: {
    en: "19th–20th c. dainas (Barons); older coastal tradition",
    lt: "19–20 a. dainos (Baronas); senesnė pakrantės tradicija",
    lv: "19.–20. gs. dainas (Barons); senāka piekrastes tradīcija",
  },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "Biezais, Haralds: Die himmlische Götterfamilie der baltischen Völker (1972)",
  ],
};

export const udensMateMeta: DeityMeta = {
  slug: "udens-mate",
  name: { en: "Ūdens māte", lt: "Vandens motina", lv: "Ūdens māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of Fresh Water",
    lt: "Gėlo vandens motina",
    lv: "Ūdens māte",
  },
  summary: {
    en: "Ūdens māte is the Latvian spirit of fresh water — lakes, springs, and wells. Women brought offerings to riverbanks to ensure pure water and invoke her blessing for life transitions.",
    lt: "Ūdens māte yra latvių gėlo vandens — ežerų, šaltinių ir šulinių — dvasia. Moterys nešdavo dovanas upių pakrantėms, prašydamos švaraus vandens.",
    lv: "Ūdens māte ir latviešu saldūdens — ezeru, avotu un aku — gars. Sievietes nesa ziedojumus upju krastos, lūdzot tīru ūdeni un svētību.",
  },
  attributes: ["Fresh water", "Lakes", "Springs", "Wells", "Purity", "Life transitions"],
  symbols: ["Spring-well", "Riverbend", "Silver water-drops", "Beads", "Woven ribbons"],
  locations: [],
  regionDetails: {
    en: "Latvia (Pan-Latvian)",
    lt: "Latvija (visos Latvijos rajonuose)",
    lv: "Latvija (visā Latvijā)",
  },
  tribe: {
    en: "Latvians (Pan-Latvian)",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "19th–20th c. dainas (Barons); archaic oral tradition",
    lt: "19–20 a. dainos (Baronas); archajinė žodinė tradicija",
    lv: "19.–20. gs. dainas (Barons); sena mutvārdu tradīcija",
  },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "Biezais, Haralds: Die himmlische Götterfamilie der baltischen Völker (1972)",
  ],
};

export const vejaMateMeta: DeityMeta = {
  slug: "veja-mate",
  name: { en: "Vēja māte", lt: "Vėjo motina", lv: "Vēja māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of the Wind",
    lt: "Vėjo motina",
    lv: "Vēja māte",
  },
  summary: {
    en: "Vēja māte is the Latvian mistress of wind and air. She regulates the four cardinal winds, powers sailboats, and winnows grain for farmers — vital but destructive if angered.",
    lt: "Vēja māte yra latvių vėjo ir oro šeimininkė. Ji reguliuoja keturis vėjus, pučia burius ir kelia grūdus žemdirbiams — gyvybiškai svarbi, bet pavojinga supykusi.",
    lv: "Vēja māte ir latviešu vēja un gaisa valdniece. Viņa regulē četrus vēju virzienos, dzen buras un palīdz zemniekiem sijāt labību — vitāli svarīga, bet bīstama uzdusmota.",
  },
  attributes: ["Wind", "Air", "Four cardinal winds", "Sailing", "Winnowing"],
  symbols: ["Wind-vane", "Tree-tops in motion", "Cloud-streaks", "Sail"],
  locations: [],
  regionDetails: {
    en: "Latvia (Pan-Latvian)",
    lt: "Latvija (visos Latvijos rajonuose)",
    lv: "Latvija (visā Latvijā)",
  },
  tribe: {
    en: "Latvians (Pan-Latvian)",
    lt: "Latviai",
    lv: "Latvieši",
  },
  period: {
    en: "19th–20th c. dainas (Barons); archaic oral tradition",
    lt: "19–20 a. dainos (Baronas); archajinė žodinė tradicija",
    lv: "19.–20. gs. dainas (Barons); sena mutvārdu tradīcija",
  },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Latvijas Nacionālā enciklopēdija (enciklopedija.lv)",
  ],
};

export const okopirmusMeta: DeityMeta = {
  slug: "okopirmus",
  name: { en: "Okopirmus", lt: "Okopirmas", lv: "Okopirms" },
  domain: "God",
  culture: "PR",
  title: {
    en: "The Very First — Supreme Sky God of the Old Prussians",
    lt: "Pats Pirmasis — prūsų aukščiausias dangaus dievas",
    lv: "Pats Pirmais — prūšu augstākais debesu dievs",
  },
  summary: {
    en: "Okopirmus ('The Very First') is the supreme sky deity of the Old Prussians. He sits above the Romuva triad as the primordial creator and cosmic orderer, equivalent to the Baltic sky-father Dievas.",
    lt: "Okopirmas ('Pats Pirmasis') yra aukščiausias prūsų dangaus dievas. Jis sėdi virš Romuvos trejybės kaip pirminis kūrėjas ir kosminio dėsnio tvarkytojas.",
    lv: "Okopirms ('Pats Pirmais') ir augstākais prūšu debesu dievs. Viņš atrodas virs Romuvas triādes kā pirmatnējais radītājs un kosmiskās kārtības uzturētājs.",
  },
  attributes: ["Sky", "Creation", "First cause", "Cosmic order", "Primordial"],
  symbols: ["Sky vault", "Sun-wheel", "White falcon", "White horse"],
  locations: [],
  regionDetails: {
    en: "Old Prussia (Sambia, Nadruvia)",
    lt: "Senoji Prūsija (Semba, Nadruvija)",
    lv: "Senā Prūsija (Sembija, Nadruvija)",
  },
  tribe: {
    en: "Old Prussians (Prūsai)",
    lt: "Prūsai",
    lv: "Prūši",
  },
  period: {
    en: "16th Century (Grunau 1529; Sudovian Book)",
    lt: "16 a. (Grunau, 1529; Sūduvių knygelė)",
    lv: "16. gs. (Grunau, 1529; Sūduviešu grāmata)",
  },
  references: [
    "Grunau, Simon: Preussische Chronik (1529)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai (2003)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const swayxtixMeta: DeityMeta = {
  slug: "swayxtix",
  name: { en: "Swayxtix", lt: "Svaikstikas", lv: "Svaikstiks" },
  domain: "God",
  culture: "PR",
  title: {
    en: "God of Celestial Light and the Shining Sun",
    lt: "Dangaus šviesos ir švytinčios saulės dievas",
    lv: "Debesu gaismas un spīdošās saules dievs",
  },
  summary: {
    en: "Swayxtix is the Prussian deity of celestial light and the life-giving radiance of the sun. His name derives from Old Prussian swāigstan (light/shining); he blesses crops and promotes growth.",
    lt: "Svaikstikas yra prūsų dangaus šviesos ir gyvybę teikiančio saulės spindesio dievas. Jo vardas kildinamas iš senprūsių žodžio swāigstan (šviesa/blizgesys).",
    lv: "Svaikstiks ir prūšu debesu gaismas un dzīvību dodošā saules mirdzuma dievs. Viņa vārds cēlies no senprūšu vārda swāigstan (gaisma/spīdums).",
  },
  attributes: ["Celestial light", "Sun", "Growth", "Clarity", "Blessing crops"],
  symbols: ["Sun-disc", "Glowing flame", "Star-burst", "Golden spear"],
  locations: [],
  regionDetails: {
    en: "Old Prussia",
    lt: "Senoji Prūsija",
    lv: "Senā Prūsija",
  },
  tribe: {
    en: "Old Prussians (Prūsai)",
    lt: "Prūsai",
    lv: "Prūši",
  },
  period: {
    en: "16th Century (Grunau 1529; Sudovian Book)",
    lt: "16 a. (Grunau, 1529; Sūduvių knygelė)",
    lv: "16. gs. (Grunau, 1529; Sūduviešu grāmata)",
  },
  references: [
    "Grunau, Simon: Preussische Chronik (1529)",
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const bardoaitsMeta: DeityMeta = {
  slug: "bardoaits",
  name: { en: "Bardoaits", lt: "Bardaitis", lv: "Bardoaits" },
  domain: "God",
  culture: "PR",
  title: {
    en: "God of Ships, Sailors, and Harbors",
    lt: "Laivų, jūreivių ir uostų dievas",
    lv: "Kuģu, jūrnieku un ostu dievs",
  },
  summary: {
    en: "Bardoaits is the Old Prussian god of ships and seafarers. Recorded in the Sudovian Book, he protects sailors on the Baltic Sea and ensures safe harbors for the Sambian fishing communities.",
    lt: "Bardaitis yra senprūsių laivų ir jūreivių dievas. Minimas Sūduvių knygelėje, jis saugo jūreivius Baltijoje ir užtikrina saugius uostus sembų žvejų bendruomenėms.",
    lv: "Bardoaits ir senprūšu kuģu un jūrnieku dievs. Minēts Sūduviešu grāmatā, viņš sargā jūrniekus Baltijas jūrā un nodrošina drošas ostas Sembijas zvejnieku kopienām.",
  },
  attributes: ["Ships", "Sailors", "Harbor", "Fishing", "Sea safety", "Calm voyage"],
  symbols: ["Ship's prow", "Anchor-stone", "Fishing net", "Calm horizon"],
  locations: [],
  regionDetails: {
    en: "Old Prussian Coast (Sambia, Natangia)",
    lt: "Prūsų pajūris (Semba, Natangija)",
    lv: "Prūšu piekraste (Sembija, Natangija)",
  },
  tribe: {
    en: "Old Prussians (Prūsai/Sembai)",
    lt: "Prūsai (Sembai)",
    lv: "Prūši (Sembieši)",
  },
  period: {
    en: "16th Century (Sudovian Book)",
    lt: "16 a. (Sūduvių knygelė)",
    lv: "16. gs. (Sūduviešu grāmata)",
  },
  references: [
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Būga, Kazimieras: Rinktiniai raštai (1958)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kaukaiMeta: DeityMeta = {
  slug: "kaukai",
  name: { en: "Kaukai", lt: "Kaukai", lv: "Kauki" },
  domain: "Creature",
  culture: "LT",
  title: {
    en: "Benevolent Wealth Dwarves of the Underground",
    lt: "Geranoriški požemio turto nykštukai",
    lv: "Labsirdīgie zemes rūķi",
  },
  summary: {
    en: "Kaukai are small, industrious Lithuanian underground spirits that help with farmwork and bring prosperity if offered milk and simple food. They dwell beneath elder trees and stone-altars.",
    lt: "Kaukai yra maži, darbštūs lietuvių požemio dvasios, padedančios ūkio darbuose ir nešančios gerovę, jei vaišinamos pienu. Gyvena po alyvmedžiais ir akmenų altoriais.",
    lv: "Kaukai ir mazi, čakli lietuviešu pazemes garās, kas palīdz lauku darbos un nes pārticību, ja tiek mieloti ar pienu. Dzīvo zem plostiem un akmens altāriem.",
  },
  attributes: ["Underground", "Farm help", "Prosperity", "Dwarves", "Elder tree"],
  symbols: ["Elder tree roots", "Bowl of milk", "Small beard", "Stone altar"],
  locations: [],
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
    en: "17th Century (Jesuit records, Praetorius)",
    lt: "17 a. (jėzuitų ataskaitos, Pretorijus)",
    lv: "17. gs. (jezuītu ziņojumi, Pretorijus)",
  },
  references: [
    "Praetorius, Matthaeus: Deliciae Prussicae (c.1690)",
    "Vėlius, Norbertas: Mitinės lietuvių sakmių būtybės (1977)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const raganaMeta: DeityMeta = {
  slug: "ragana",
  name: { en: "Ragana", lt: "Ragana", lv: "Ragana" },
  domain: "Creature",
  culture: "LT",
  title: {
    en: "Lithuanian Witch and Seer",
    lt: "Lietuvių ragana ir regėtoja",
    lv: "Lietuviešu ragana un pareģe",
  },
  summary: {
    en: "Ragana is the most prominent witch-figure in Baltic tradition. Etymologically a 'seer' (regėti), she evolved from a goddess of wisdom into a shape-shifting forest witch feared and sought for healing.",
    lt: "Ragana yra gausiausiais mitų aprašyta ragana baltų tradicijoje. Etimologiškai 'regėtoja', ji evoliucionavo nuo išminties deivės iki formas keičiančios miško raganos.",
    lv: "Ragana ir izslavенākā ragana Baltijas tradīcijā. Etimoloģiski 'pareģe' (regēt), viņa attīstījās no gudrības dievietes par formas mainošu meža raganu.",
  },
  attributes: ["Witch", "Seer", "Shape-shifting", "Herbs", "Forest", "Šatrija Hill"],
  symbols: ["Broom", "Cauldron", "Cat", "Šatrija Hill"],
  locations: [],
  regionDetails: {
    en: "Lithuania (Samogitia, Šatrija focus)",
    lt: "Lietuva (Žemaitija, Šatrija kalnas)",
    lv: "Lietuva (Žemaitija, Šatrija kalns)",
  },
  tribe: {
    en: "Lithuanians, Curonians",
    lt: "Lietuviai, kuršiai",
    lv: "Lietuvieši, kurši",
  },
  period: {
    en: "Archaic to Early Modern (witchcraft trial records)",
    lt: "Nuo archajiško iki ankstyvojo naujojo laikotarpio (raganų bylos)",
    lv: "No arhaiskā līdz agrīnajam jaunajam laikam (raganu tiesas lietas)",
  },
  references: [
    "Vėlius, Norbertas: Senovės lietuvių raganos ir jų kultas (1977)",
    "Basanavičius, Jonas: Iš gyvenimo vėlių bei velnių (1903)",
    "VLE: Ragana (vle.lt)",
  ],
};

export const sloguteMeta: DeityMeta = {
  slug: "slogute",
  name: { en: "Slogutė", lt: "Slogutė", lv: "Slogutė" },
  domain: "Creature",
  culture: "LT",
  title: {
    en: "Spirit of Sleep Paralysis and Nightmares",
    lt: "Miego paralyžiaus ir košmarų dvasia",
    lv: "Miega paralīzes un murgu gars",
  },
  summary: {
    en: "Slogutė is the Lithuanian personification of sleep paralysis. She sits on the chest of sleepers, making it impossible to breathe or move. Iron objects near the bed are the traditional protection.",
    lt: "Slogutė yra lietuvių miego paralyžiaus personifikacija. Ji sėdi ant miegančio krūtinės, neleisdama kvėpuoti. Tradicinė apsauga — geležiniai daiktai prie lovos.",
    lv: "Slogutė ir lietuviešu miega paralīzes personifikācija. Viņa sēž uz guļošā krūtīm, neļaujot elpot. Tradicionālā aizsardzība — dzelzs priekšmeti pie gultas.",
  },
  attributes: ["Sleep paralysis", "Nightmare", "Night", "Breath", "Fear"],
  symbols: ["Iron knife", "Scissors", "Weight on the chest"],
  locations: [],
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
    en: "Archaic oral tradition (documented in Vėlius ethnographies)",
    lt: "Archajiška žodinė tradicija (dokumentuota Vėliaus etnografijose)",
    lv: "Arhaiska mutvārdu tradīcija (dokumentēta Vēliusa etnogrāfijās)",
  },
  references: [
    "Vėlius, Norbertas: Mitinės lietuvių sakmių būtybės (1977)",
    "VLE: Slogutė (vle.lt)",
    "Basanavičius, Jonas: Lietuviškos pasakos (1898)",
  ],
};

export const vilkacisMeta: DeityMeta = {
  slug: "vilkacis",
  name: { en: "Vilkacis", lt: "Vilkacis", lv: "Vilkatis" },
  domain: "Creature",
  culture: "LT",
  title: {
    en: "Lithuanian Werewolf — Human Transformed into Wolf",
    lt: "Lietuvių vilkacis — žmogus, virtęs vilku",
    lv: "Lietuviešu vilkatis — cilvēks, kas pārvērties par vilku",
  },
  summary: {
    en: "The Vilkacis is a human who has transformed into a wolf through a curse or ritual. Unlike horror-movie werewolves, Baltic vilkaciai retain human intelligence and can fight for good or ill.",
    lt: "Vilkacis — tai žmogus, prakeikimo ar ritualo metu pavirtęs vilku. Priešingai kino siaubo filmams, baltų vilkaciai išsaugo žmogišką intelektą.",
    lv: "Vilkatis ir cilvēks, kurš pārvērties par vilku lāsta vai rituāla dēļ. Atšķirībā no šausmu filmām, Baltijas vilkaši saglabā cilvēcisko intelektu.",
  },
  attributes: ["Werewolf", "Transformation", "Wolf", "Curse", "Strength"],
  symbols: ["Wolf pelt", "Belt of transformation", "Iron teeth", "Forest path"],
  locations: [],
  regionDetails: {
    en: "Lithuania, Latvia (Pan-Baltic)",
    lt: "Lietuva, Latvija (visos Baltijos kraštai)",
    lv: "Lietuva, Latvija (visa Baltijas region)",
  },
  tribe: {
    en: "Lithuanians, Latvians",
    lt: "Lietuviai, latviai",
    lv: "Lietuvieši, latvieši",
  },
  period: {
    en: "16th–17th c. witchcraft trial records",
    lt: "16–17 a. raganų bylos",
    lv: "16.–17. gs. raganu tiesas lietas",
  },
  references: [
    "Vėlius, Norbertas: Mitinės lietuvių sakmių būtybės (1977)",
    "Basanavičius, Jonas: Iš gyvenimo vėlių bei velnių (1903)",
    "VLE: Vilkolakis (vle.lt)",
  ],
};

export const lietuvensMeta: DeityMeta = {
  slug: "lietuvens",
  name: { en: "Lietuvēns", lt: "Lietuvēns", lv: "Lietuvēns" },
  domain: "Creature",
  culture: "LV",
  title: {
    en: "Latvian Nightmare Spirit",
    lt: "Latvių košmarų dvasia",
    lv: "Latvijas murgu gars",
  },
  summary: {
    en: "Lietuvēns is the Latvian equivalent of the nightmare spirit. The soul of one who died unnaturally, he enters through keyholes to press on the chests of sleeping people and livestock.",
    lt: "Lietuvēns yra latvių košmarų dvasios atitikmuo. Nenatūralia mirtimi mirusio siela, jis patenka per raktadėtes ir spaudžia miegančiųjų krūtines.",
    lv: "Lietuvēns ir latviešu murgu gara ekvivalents. Pārdabiskā nāvē miruša dvēsele, viņš iekļūst caur atslēgu caurumiem un spiež guļošo krūtīs.",
  },
  attributes: ["Nightmare", "Sleep paralysis", "Unnatural death", "Night", "Fear"],
  symbols: ["Keyhole", "Sweating horse", "Weight on the chest"],
  locations: [],
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
    en: "Archaic oral tradition (documented in Šmits ethnographies)",
    lt: "Archajiška žodinė tradicija (dokumentuota Šmitso etnografijose)",
    lv: "Arhaiska mutvārdu tradīcija (dokumentēta Šmita etnogrāfijās)",
  },
  references: [
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Latvijas Nacionālā enciklopēdija (enciklopedija.lv)",
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
  ],
};

export const egleMeta: DeityMeta = {
  slug: "egle",
  name: { en: "Eglė", lt: "Eglė", lv: "Egle" },
  domain: "Person",
  culture: "LT",
  title: {
    en: "Queen of Serpents",
    lt: "Žalčių karalienė",
    lv: "Čūsku karaliene",
  },
  summary: {
    en: "Eglė is the heroine of Lithuania's most archetypal myth, Eglė žalčių karalienė. She marries the serpent king Žilvinas and, after his betrayal and murder, transforms herself and her children into trees.",
    lt: "Eglė yra lietuvių archetipinės mitologinės pasakos Eglė žalčių karalienė herojė. Ji išteka už žalčių karaliaus Žilvino, o po jo išdavystės ir nužudymo paverčiama medžiais kartu su vaikais.",
    lv: "Egle ir lietuviešu arhetipiskākā mīta Eglė žalčių karalienė varonis. Viņa apprecas ar čūsku karali Žilvinu un pēc viņa nodevības un nāves pārvēršas par egli kopā ar saviem bērniem.",
  },
  attributes: ["Transformation", "Oath", "Serpent world", "Metamorphosis", "Trees"],
  symbols: ["Spruce tree", "Snake-crown", "Underwater palace", "Her children's names"],
  locations: [],
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
    en: "Archaic; collected 19th–20th c. by Basanavičius",
    lt: "Archajiškas; surinkta 19–20 a. Basanavičiaus",
    lv: "Arhaiska; pierakstīta 19.–20. gs. Basanavičiusa",
  },
  references: [
    "Basanavičius, Jonas: Lietuviškos pasakos (1898)",
    "Vėlius, Norbertas: Eglė žalčių karalienė (1998)",
    "VLE: Eglė (vle.lt)",
  ],
};

export const lacplesisMeta: DeityMeta = {
  slug: "lacplesis",
  name: { en: "Lāčplēsis", lt: "Lāčplēsis", lv: "Lāčplēsis" },
  domain: "Person",
  culture: "LV",
  title: {
    en: "Bear-Slayer — Latvian National Hero",
    lt: "Meškaskerys — latvių tautinis herojus",
    lv: "Lāčplēsis — latviešu tautiskais varonis",
  },
  summary: {
    en: "Lāčplēsis (Bear-Slayer) is the central hero of the Latvian national epic. Son of a man and a bear, his supernatural strength in his ears was the source of his power and ultimately his downfall.",
    lt: "Lāčplēsis (Meškaskerys) yra latvių tautinio epo centras. Žmogaus ir meškos sūnus, jo antgamtinė jėga buvo ausyse — tai buvo jo galios ir jo žlugimo šaltinis.",
    lv: "Lāčplēsis ir latviešu nacionālā epa centrālais varonis. Cilvēka un lāča dēls, viņa pārdabiskais spēks bija ausīs — tas bija viņa varas un galu galā bojāejas avots.",
  },
  attributes: ["Bear-ears", "Strength", "National hero", "Daugava", "Resistance"],
  symbols: ["Bear-ears", "Giant boulder", "Daugava river", "Oak-staff"],
  locations: [],
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
    lt: "19 a. literatūrinė sintezė (Pumpuriai, 1888), pagrįsta archajiška tautosaka",
    lv: "19. gs. literārā sintēze (Pumpurs, 1888) no arhaiskā folkloras",
  },
  references: [
    "Pumpurs, Andrejs: Lāčplēsis (1888)",
    "Kursīte, Janīna: Mītiskais folklorā (1999)",
    "LNE: Latvijas Nacionālā enciklopēdija (enciklopedija.lv)",
  ],
};

export const deitiesMeta = {
  perkunasMeta,
  sauleMeta,
  laimaMeta,
  velniasMeta,
  austejaMeta,
  menulisMeta,
  dievasMeta,
  gabijaMeta,
  bangputysMeta,
  medineMeta,
  giltineMeta,
  pukisMeta,
  ausrineMeta,
  maraMeta,
  jumisMeta,
  usinsMeta,
  vakarineMeta,
  teliavelIsMeta,
  daliaMeta,
  patollaMeta,
  patrimpAsMeta,
  autrimpasMeta,
  vejopatisMeta,
  vaizgantasMeta,
  ragutisMeta,
  dimstipatisMeta,
  janisMeta,
  mezaMateMeta,
  veluMateMeta,
  auschautsMeta,
  kurkeMeta,
  aitvarasMeta,
  laumesMeta,
  zaltysMeta,
  neringaMeta,
  sovijusMeta,
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
};
