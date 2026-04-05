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

// Batch 5
export const medziojnaMeta: DeityMeta = {
  slug: "medziojna",
  name: { en: "Medziojna", lt: "Medziojna", lv: "Medziojna" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of the Hunt",
    lt: "Medžioklės deivė",
    lv: "Medību dieviete",
  },
  summary: {
    en: "Medziojna is the Lithuanian goddess of the hunt and the chase, invoked by hunters for fortune and swift pursuit of game.",
    lt: "Medziojna yra lietuvių medžioklės ir vijimosi deivė, kurią šaukiasi medžiotojai sėkmingai garybai.",
    lv: "Medziojna ir lietuviešu medību un vajāšanas dieviete, ko mednieki piesauc par veiksmi.",
  },
  attributes: ["Hunting", "Chase", "Fortune"],
  symbols: ["Bow", "Hunting horn", "Spear"],
  locations: [],
  region: { en: "Samogitia", lt: "Žemaitija", lv: "Žemaitija" },
  tribe: { en: "Samogitian Lithuanians", lt: "Žemaičiai", lv: "Samogitijas lietuvieši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio paminėta)", lv: "16. gadsimts (Łasicki pierakstīts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const ejagusteMeta: DeityMeta = {
  slug: "ejaguste",
  name: { en: "Ejagustė", lt: "Ejagustė", lv: "Ejaguste" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of Hunting Fortune",
    lt: "Medžioklės sėkmės dvasia",
    lv: "Medību veiksmes gars",
  },
  summary: {
    en: "Ejagustė is the Lithuanian spirit of hunting luck, ensuring favorable outcomes in the chase.",
    lt: "Ejagustė yra lietuvių medžioklės sėkmės dvasia, užtikrinanti palankų medžioklės rezultatą.",
    lv: "Ejaguste ir lietuviešu medību veiksmes gars, kas nodrošina labvēlīgus medību rezultātus.",
  },
  attributes: ["Hunting luck", "Fortune", "Chase"],
  symbols: ["Bow", "Footsteps", "Game animal"],
  locations: [],
  region: { en: "Samogitia", lt: "Žemaitija", lv: "Žemaitija" },
  tribe: { en: "Samogitian Lithuanians", lt: "Žemaičiai", lv: "Samogitijas lietuvieši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio paminėta)", lv: "16. gadsimts (Łasicki pierakstīts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const silinytisMeta: DeityMeta = {
  slug: "silinytis",
  name: { en: "Šilinytis", lt: "Šilinytis", lv: "Šilinytis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of the Pine Forest",
    lt: "Pušyno saugotojas",
    lv: "Priežu meža sargs",
  },
  summary: {
    en: "Šilinytis is the Lithuanian spirit of the pine forest, guardian of the sandy-soiled šilas groves and the life that thrives within them.",
    lt: "Šilinytis yra lietuvių pušyno dvasia, šilų globėjas ir jų augmenijos saugotojas.",
    lv: "Šilinytis ir lietuviešu priežu meža gars, kas sargā smilšaino šilu birzis un to dzīvību.",
  },
  attributes: ["Pine forest", "Resin", "Heather", "Moss"],
  symbols: ["Pine cone", "Heather", "Moss", "Resin"],
  locations: [],
  region: { en: "Samogitia / Aukštaitija", lt: "Žemaitija / Aukštaitija", lv: "Žemaitija / Aukštaitija" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio paminėta)", lv: "16. gadsimts (Łasicki pierakstīts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const giraitisMeta: DeityMeta = {
  slug: "giraitis",
  name: { en: "Giraitis", lt: "Giraitis", lv: "Giraitis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of the Sacred Grove",
    lt: "Šventosios giraitės saugotojas",
    lv: "Svētā birzs sargs",
  },
  summary: {
    en: "Giraitis is the Lithuanian spirit of sacred groves, presiding over the sanctified clusters of trees that communities held inviolable.",
    lt: "Giraitis yra lietuvių šventųjų giraitių dvasia, valdantis sakralias medžių grupes ir jų ramybę.",
    lv: "Giraitis ir lietuviešu svēto birzu gars, kas valda apvienotajās koku grupās.",
  },
  attributes: ["Sacred grove", "Trees", "Forest peace"],
  symbols: ["Oak branch", "Birch catkin", "Sacred grove boundary"],
  locations: [],
  region: { en: "Samogitia / Pan-Lithuanian", lt: "Žemaitija / visos Lietuvos", lv: "Žemaitija / visas Lietuvas" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "16th–17th Century Records", lt: "XVI–XVII a. šaltiniai", lv: "16.–17. gadsimta avoti" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Mierzyński, Antoni: Mythologiae Lituanicae Monumenta (1892)",
  ],
};

export const ugunsMateMetaData: DeityMeta = {
  slug: "uguns-mate",
  name: { en: "Uguns māte", lt: "Ugnies motina", lv: "Uguns māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of Fire and the Hearth",
    lt: "Ugnies ir židinio motina",
    lv: "Uguns un pavarda māte",
  },
  summary: {
    en: "Uguns māte is the Latvian goddess of the sacred hearth fire, guardian of the family's warmth, health, and spiritual continuity.",
    lt: "Uguns māte yra latvių šventosios krosninės ugnies deivė, šeimos šilumos ir dvasinės tęstinumo saugotoja.",
    lv: "Uguns māte ir latvju svētās pavarda uguns dieviete, ģimenes siltuma un garīgās turpinātības sargātāja.",
  },
  attributes: ["Fire", "Hearth", "Home protection", "Family"],
  symbols: ["Hearth-stone", "Golden flame", "Salt-grain", "Ash-pile"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Uguns māte (enciklopedija.lv)",
  ],
};

export const majasMateMetaData: DeityMeta = {
  slug: "majas-mate",
  name: { en: "Mājas māte", lt: "Namų motina", lv: "Mājas māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of the House",
    lt: "Namų motina",
    lv: "Mājas māte",
  },
  summary: {
    en: "Mājas māte is the Latvian spirit of the household, governing domestic harmony, children's health, and the luck that resides within family walls.",
    lt: "Mājas māte yra latvių namų dvasia, valdanti namų darną, vaikų sveikatą ir šeimos laimę.",
    lv: "Mājas māte ir latvju mājas gars, kas valda mājas harmoniju, bērnu veselību un ģimenes laimi.",
  },
  attributes: ["House", "Harmony", "Luck", "Children"],
  symbols: ["Threshold", "Key", "Loom"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Mājas māte (enciklopedija.lv)",
  ],
};

export const pirtsMateMetaData: DeityMeta = {
  slug: "pirts-mate",
  name: { en: "Pirts māte", lt: "Pirties motina", lv: "Pirts māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of the Bathhouse",
    lt: "Pirties motina",
    lv: "Pirts māte",
  },
  summary: {
    en: "Pirts māte is the guardian spirit of the Latvian sauna, presiding over cleansing, childbirth, and the threshold between physical and spiritual wellness.",
    lt: "Pirts māte yra latvių pirties saugotoja, valdanti valymo ritualus, gimdymą ir ribą tarp kūno ir dvasinės sveikatos.",
    lv: "Pirts māte ir latvju pirts sargātāja, kas valda attīrīšanas rituālus, dzemdības un robežu starp fizisko un garīgo veselību.",
  },
  attributes: ["Bathhouse", "Cleansing", "Childbirth", "Healing"],
  symbols: ["Birch-branch slota", "Steam", "Wooden bucket"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Pirts māte (enciklopedija.lv)",
  ],
};

export const lopuMateMetaData: DeityMeta = {
  slug: "lopu-mate",
  name: { en: "Lopu māte", lt: "Gyvulių motina", lv: "Lopu māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of Livestock",
    lt: "Gyvulių motina",
    lv: "Lopu māte",
  },
  summary: {
    en: "Lopu māte is the Latvian guardian of farm animals, walking through barns to count and protect the herds through each season.",
    lt: "Lopu māte yra latvių ūkio gyvulių saugotoja, einanti per tvartelį skaičiuoti ir saugoti bandas kiekvienais metų laikais.",
    lv: "Lopu māte ir latvju lauksaimniecības dzīvnieku sargātāja, staigājot pa stalliem, skaitot un sargājot ganāmpulkus cauri gadalaikiem.",
  },
  attributes: ["Livestock", "Cattle", "Seasonal protection", "Herds"],
  symbols: ["Barn-key", "Woven hay", "Cattle"],
  locations: [],
  region: { en: "Latvia (Agricultural regions)", lt: "Latvija (žemdirbystės regionai)", lv: "Latvija (lauksaimniecības reģioni)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "LNE: Lopu māte (enciklopedija.lv)",
    "Kursīte, Janīna: Mītiskais folklorā (1999)",
  ],
};

export const puschkaitisMeta: DeityMeta = {
  slug: "puschkaitis",
  name: { en: "Puschkaitis", lt: "Puschkaitis", lv: "Puškaitss" },
  domain: "God",
  culture: "PR",
  title: {
    en: "Earth Lord beneath the Elder Tree",
    lt: "Žemės valdovas po juodalksniu",
    lv: "Zemes kungs zem melnalkšņa",
  },
  summary: {
    en: "Puschkaitis is the Old Prussian deity of the earth beneath trees, ruler of the Kaukai and Markopoles household spirits who bring agricultural abundance.",
    lt: "Puschkaitis yra senovės prūsų žemės po medžiais dievas, Kaukų ir Markopolių namų dvasinių valdovas.",
    lv: "Puschkaitis ir vecprūšu zemes zem kokiem dievs, Kaukai un Markopoles mājas garu valdnieks.",
  },
  attributes: ["Earth", "Elder tree", "Fertility", "Household abundance"],
  symbols: ["Elder tree", "Stone altar", "Porridge bowl"],
  locations: [],
  region: { en: "Old Prussia (Sambia, Sudovia)", lt: "Senoji Prūsija (Semba, Sūduva)", lv: "Senprūsija (Sambija, Sūdava)" },
  tribe: { en: "Old Prussian (Prūsai)", lt: "Senovės prūsai (Prūsai)", lv: "Vecprūši (Prūsai)" },
  period: { en: "16th–17th Century Records", lt: "XVI–XVII a. šaltiniai", lv: "16.–17. gadsimta avoti" },
  references: [
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Praetorius, Matthäus: Deliciae Prussicae (ms. ~1690)",
    "Mannhardt, Wilhelm: Letto-Preussische Götterlehre (1936)",
  ],
};

export const curchoMeta: DeityMeta = {
  slug: "curcho",
  name: { en: "Curcho", lt: "Kurkė", lv: "Kurķis" },
  domain: "God",
  culture: "PR",
  title: {
    en: "Spirit of the Harvest and Abundance",
    lt: "Derliaus ir gausos dvasia",
    lv: "Ražas un pārticības gars",
  },
  summary: {
    en: "Curcho is the Old Prussian harvest spirit, a ritual personification of the grain's vital force to whom the first-fruits of every sowing were offered.",
    lt: "Curcho yra senovės prūsų derliaus dvasia, ritualinė javų gyvybinės jėgos personifikacija, kuriai aukojami pirmieji javai.",
    lv: "Curcho ir vecprūšu ražas gars, rituāla graudu dzīvīgā spēka personifikācija, kuram tiek ziedoti pirmie ražas augļi.",
  },
  attributes: ["Harvest", "Grain", "First-fruits", "Agricultural cycle"],
  symbols: ["Grain sheaf", "Flour", "Beer pitcher", "Woven straw figure"],
  locations: [],
  region: { en: "Old Prussia", lt: "Senoji Prūsija", lv: "Senprūsija" },
  tribe: { en: "Old Prussian (Prūsai)", lt: "Senovės prūsai (Prūsai)", lv: "Vecprūši (Prūsai)" },
  period: { en: "16th–17th Century Records", lt: "XVI–XVII a. šaltiniai", lv: "16.–17. gadsimta avoti" },
  references: [
    "Sudauer Büchlein / Sudovian Book (16th c.)",
    "Hartknoch, Christoph: Alt- und neues Prussien (1684)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai (1996)",
  ],
};

// Batch 6
export const pliuktisMeta: DeityMeta = {
  slug: "pliuktis",
  name: { en: "Pliuktis", lt: "Pliuktis", lv: "Pliuktis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of Rain",
    lt: "Lietaus dievas",
    lv: "Lietus dievs",
  },
  summary: {
    en: "Pliuktis is the Lithuanian god of rain, invoked during drought to send the life-giving precipitation needed for crops.",
    lt: "Pliuktis yra lietuvių lietaus dievas, šaukiamas sausrų metu siųsti gyvybę teikiančio lietaus javams.",
    lv: "Pliuktis ir lietuviešu lietus dievs, piesaukts sausuma laikā, lai sūtītu dzīvību dodošos nokrišņus ražai.",
  },
  attributes: ["Rain", "Precipitation", "Crops", "Drought relief"],
  symbols: ["Water drop", "Splashing water", "Rain cloud", "Sieve"],
  locations: [],
  region: { en: "Samogitia", lt: "Žemaitija", lv: "Žemaitija" },
  tribe: { en: "Samogitian Lithuanians", lt: "Žemaičiai", lv: "Samogitijas lietuvieši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio paminėta)", lv: "16. gadsimts (Łasicki pierakstīts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kaupolisMeta: DeityMeta = {
  slug: "kaupolis",
  name: { en: "Kaupolis", lt: "Kaupolis", lv: "Kaupolis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Deity of the Flourishing Earth and Midsummer",
    lt: "Klestinčios žemės ir vasaros saulėgrįžos dievas",
    lv: "Ziedošās zemes un vasaras saulgriežu dievs",
  },
  summary: {
    en: "Kaupolis and Kupolė are the Lithuanian deities of springtime growth, blooming vegetation, and the midsummer solstice festival.",
    lt: "Kaupolis ir Kupolė yra lietuvių pavasario augmenijos ir vasaros saulėgrįžos šventės dievybės.",
    lv: "Kaupolis un Kupolė ir lietuviešu pavasara augšanas un vasaras saulgriežu svētku dievības.",
  },
  attributes: ["Midsummer", "Blooming", "Solstice", "Herbs", "Growth"],
  symbols: ["Spring flower", "Midsummer wreath", "Tribranced pole", "Morning dew"],
  locations: [],
  region: { en: "Lithuania (Pan-Lithuanian)", lt: "Lietuva (visos)", lv: "Lietuva (visā)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "Proto-Baltic / 16th Century Records", lt: "Protobaltiška / XVI a. šaltiniai", lv: "Protobaltu / 16. gadsimta avoti" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Greimas, Algirdas J.: Tautos atminties beieškant (1990)",
  ],
};

export const lygynaMeta: DeityMeta = {
  slug: "lygyna",
  name: { en: "Lygyna", lt: "Lygyna", lv: "Lygyna" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Field Purity",
    lt: "Laukų tyrumo deivė",
    lv: "Lauku tīrības dieviete",
  },
  summary: {
    en: "Lygyna is the Lithuanian goddess invoked to prevent weeds and cockle from contaminating grain fields, ensuring a pure and bountiful harvest.",
    lt: "Lygyna yra lietuvių deivė, šaukiama apsaugoti javų laukus nuo raugių, užtikrinant tyrą derlių.",
    lv: "Lygyna ir lietuviešu dieviete, kas tiek piesaukta, lai novērstu nezāles graudu laukos un nodrošinātu tīru ražu.",
  },
  attributes: ["Field purity", "Weeds", "Grain health", "Agriculture"],
  symbols: ["Weed cockle", "Grain ear", "Sieve", "Level field"],
  locations: [],
  region: { en: "Samogitia", lt: "Žemaitija", lv: "Žemaitija" },
  tribe: { en: "Samogitian Lithuanians", lt: "Žemaičiai", lv: "Samogitijas lietuvieši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio paminėta)", lv: "16. gadsimts (Łasicki pierakstīts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const rugucysMeta: DeityMeta = {
  slug: "ruguczys",
  name: { en: "Ruguczys", lt: "Rugučys", lv: "Rugučys" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of Fermentation and Yeast",
    lt: "Rūgimo ir raugo dievas",
    lv: "Rūgšanas un rauga dievs",
  },
  summary: {
    en: "Ruguczys is the Lithuanian deity of fermentation, souring, and yeast, guardian of the living transformations in bread-making and brewing.",
    lt: "Rugučys yra lietuvių rūgimo, rūgštimo ir raugo dievas, gyvo virtimo duonoje ir aluje globėjas.",
    lv: "Rugučys ir lietuviešu rūgšanas, skābuma un rauga dievs, kas sargā dzīvās pārmaiņas maizes cepšanā un alus brūvēšanā.",
  },
  attributes: ["Fermentation", "Yeast", "Sourdough", "Brewing", "Transformation"],
  symbols: ["Sourdough bread", "Yeast bubbles", "Wooden dough bowl", "Hops"],
  locations: [],
  region: { en: "Samogitia", lt: "Žemaitija", lv: "Žemaitija" },
  tribe: { en: "Samogitian Lithuanians", lt: "Žemaičiai", lv: "Samogitijas lietuvieši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio paminėta)", lv: "16. gadsimts (Łasicki pierakstīts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const biruteMeta: DeityMeta = {
  slug: "birute",
  name: { en: "Birutė", lt: "Birutė", lv: "Birutė" },
  domain: "Person",
  culture: "LT",
  title: {
    en: "Sacred Priestess and Duchess of Lithuania",
    lt: "Šventoji vaidilutė ir Lietuvos kunigaikštienė",
    lv: "Svētā priestere un Lietuvas hercogiene",
  },
  summary: {
    en: "Birutė was the sacred priestess of Palanga who became wife of Grand Duke Kęstutis and mother of Vytautas the Great, venerated as a guardian spirit of the Lithuanian coast.",
    lt: "Birutė buvo Palangos šventoji vaidilutė, tapusi Didžiojo kunigaikščio Kęstučio žmona ir Vytauto Didžiojo motina, gerbiama kaip Lietuvos pakrantės saugotoja.",
    lv: "Birutė bija Palangas svētā priestere, kas kļuva par Lielkņaza Kęstutis sievu un Vytautas Lielā māti, cienīta kā Lietuvas piekrastes sargātāja.",
  },
  attributes: ["Sacred fire", "Devotion", "Ancestry", "Priesthood"],
  symbols: ["Sacred flame", "Palanga hill", "White linden", "Amber necklace"],
  locations: [],
  region: { en: "Palanga (Coastal Samogitia)", lt: "Palanga (Žemaitijos pakrantė)", lv: "Palanga (Samogitijas piekraste)" },
  tribe: { en: "Samogitians / Curonians", lt: "Žemaičiai / Kuršiai", lv: "Samogitijas / Kureši" },
  period: { en: "14th Century (Historical) / 15th–16th Century (Cult)", lt: "XIV a. (istorinė) / XV–XVI a. (kultas)", lv: "14. gadsimts (vēsturiska) / 15.–16. gadsimts (kults)" },
  references: [
    "Bychowiec Chronicle (16th Century MS)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 4 (2005)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const pienaMateMetaData: DeityMeta = {
  slug: "piena-mate",
  name: { en: "Piena māte", lt: "Piena māte", lv: "Piena māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of Milk",
    lt: "Pieno motina",
    lv: "Piena māte",
  },
  summary: {
    en: "Piena māte is the Latvian guardian of milk and dairy production, invoked to protect the milk's purity and the health of milking animals.",
    lt: "Piena māte yra latvių pieno ir pienininkystės globėja, šaukiama saugoti pieno tyrumą ir melžiamų gyvulių sveikatą.",
    lv: "Piena māte ir latvju piena un piensaimniecības sargātāja, ko piesauc, lai aizsargātu piena tīrību un slaucamo dzīvnieku veselību.",
  },
  attributes: ["Milk", "Dairy", "Cattle", "Abundance"],
  symbols: ["Milk pail", "White cow", "Cream pitcher", "Woven cloth"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Piena māte (enciklopedija.lv)",
  ],
};

export const vilkuMateMetaData: DeityMeta = {
  slug: "vilku-mate",
  name: { en: "Vilku māte", lt: "Vilkų motina", lv: "Vilku māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of Wolves",
    lt: "Vilkų motina",
    lv: "Vilku māte",
  },
  summary: {
    en: "Vilku māte is the ambivalent Latvian deity who is both the ruling spirit of wolves and the protector of livestock against them.",
    lt: "Vilku māte yra dviprasmiška latvių dievybė, kuri yra ir vilkų valdovė, ir gyvulių apsaugotoja nuo jų.",
    lv: "Vilku māte ir neviennozīmīga latvju dievība, kas ir gan vilku valdniece, gan mājlopu aizsargātāja pret tiem.",
  },
  attributes: ["Wolves", "Livestock protection", "Wild boundary", "Mediation"],
  symbols: ["Wolf paw", "Sheepfold gate", "Forest boundary"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Vilku māte (enciklopedija.lv)",
  ],
};

export const tirumaMateMetaData: DeityMeta = {
  slug: "tiruma-mate",
  name: { en: "Tīruma māte", lt: "Dirvonų motina", lv: "Tīruma māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of the Plowed Field",
    lt: "Suartos lauko motina",
    lv: "Tīruma māte",
  },
  summary: {
    en: "Tīruma māte is the Latvian goddess of the open arable land, guardian of the furrow and the soil's fertility across each plowing season.",
    lt: "Tīruma māte yra latvių ariamo lauko deivė, vagos ir dirvos derlingumo saugotoja kiekvieną arimo sezoną.",
    lv: "Tīruma māte ir latvju aramzemes dieviete, vagas un augsnes auglības sargātāja katrā aruma sezonā.",
  },
  attributes: ["Plowed field", "Soil fertility", "Furrow", "Harvest"],
  symbols: ["Plowing stick", "First furrow", "Grain ear", "Dark soil"],
  locations: [],
  region: { en: "Latvia (Agricultural regions)", lt: "Latvija (žemdirbystės regionai)", lv: "Latvija (lauksaimniecības reģioni)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "Kursīte, Janīna: Mītiskais folklorā (1999)",
  ],
};

export const kapuMateMetaData: DeityMeta = {
  slug: "kapu-mate",
  name: { en: "Kapu māte", lt: "Kapų motina", lv: "Kapu māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of Graves",
    lt: "Kapų motina",
    lv: "Kapu māte",
  },
  summary: {
    en: "Kapu māte is the Latvian guardian of burial grounds, watching over the graves of the dead and the peace of those interred within them.",
    lt: "Kapu māte yra latvių kapinių saugotoja, sauganti mirusiųjų kapus ir jų ramybę.",
    lv: "Kapu māte ir latvju kapu sargātāja, kas uzrauga mirušo kapus un tur apglabāto mieru.",
  },
  attributes: ["Graves", "Burial", "Dead", "Peace"],
  symbols: ["Burial mound", "Candle", "Oak branch", "Grave cross"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Kapu māte (enciklopedija.lv)",
  ],
};

export const celaMateMetaData: DeityMeta = {
  slug: "cela-mate",
  name: { en: "Ceļa māte", lt: "Kelio motina", lv: "Ceļa māte" },
  domain: "God",
  culture: "LV",
  title: {
    en: "Mother of the Road",
    lt: "Kelio motina",
    lv: "Ceļa māte",
  },
  summary: {
    en: "Ceļa māte is the Latvian guardian of travelers and roads, invoked before journeys to ensure safe passage and return.",
    lt: "Ceļa māte yra latvių keliautojų ir kelių saugotoja, šaukiama prieš keliones saugiam pervažiavimui ir sugrįžimui.",
    lv: "Ceļa māte ir latvju ceļotāju un ceļu sargātāja, ko piesauc pirms ceļojumiem, lai nodrošinātu drošu braucienu un atgriešanos.",
  },
  attributes: ["Travel", "Roads", "Safety", "Return"],
  symbols: ["Road stone", "Walking stick", "Sunrise", "Crossroads"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (visos regionuose)", lv: "Latvija (visā Latvijā)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic / Oral Tradition", lt: "Archajiška / žodinė tradicija", lv: "Arhaiskā / mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "LNE: Ceļa māte (enciklopedija.lv)",
  ],
};

// ─── Batch 7 ─────────────────────────────────────────────────────────────────

export const girstisMeta: DeityMeta = {
  slug: "girstis",
  name: { en: "Girstis", lt: "Girstis", lv: "Girstis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Forest Spirit of the Thickets",
    lt: "Miško tankmių dvasia",
    lv: "Brikšņu meža gars",
  },
  summary: {
    en: "Girstis is a Lithuanian forest deity who guards the undergrowth and thickets of the sacred groves, documented by Jan Łasicki in his 16th-century catalogue of Samogitian gods.",
    lt: "Girstis yra lietuvių miško dvasia, saugojanti šventų girių tankmynus, užfiksuota Jano Lasickio XVI a. dievybių sąraše.",
    lv: "Girstis ir lietuviešu meža gars, kas sargā svēto birzu brikšņus, dokumentēts Jāņa Lasicija 16. gadsimta sarakstā.",
  },
  attributes: ["Forest", "Thickets", "Undergrowth", "Sacred groves"],
  symbols: ["Branch", "Thicket", "Forest shadow", "Moss"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const jundaMeta: DeityMeta = {
  slug: "junda",
  name: { en: "Junda", lt: "Junda", lv: "Junda" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of War and Victory",
    lt: "Karo ir pergalės deivė",
    lv: "Kara un uzvaras dieviete",
  },
  summary: {
    en: "Junda is the Lithuanian goddess of war and conquest, embodying the fierce spirit of Baltic warriors, first systematized by 19th-century historian Teodor Narbutt.",
    lt: "Junda yra lietuvių karo ir pergalės deivė, įkūnijanti baltų karių narsą ir T. Narbyto XIX a. mitologijos rekonstrukcijoje.",
    lv: "Junda ir lietuviešu kara un uzvaras dieviete, kas iemieso senbaltu karotāju drosmi un 19. gadsimta mitoloģijas rekonstrukcijās.",
  },
  attributes: ["War", "Victory", "Conquest", "Battle"],
  symbols: ["Sword", "Shield", "Spear", "Victory wreath"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "19th Century (Reconstructed)", lt: "XIX a. (rekonstruotas)", lv: "19. gadsimts (rekonstruēts)" },
  references: [
    "Narbutt, Teodor: Dzieje starożytne narodu litewskiego (1835)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 4 (2005)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kovasMeta: DeityMeta = {
  slug: "kovas",
  name: { en: "Kovas", lt: "Kovas", lv: "Kovas" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of War and Combat",
    lt: "Karo ir kovos dievas",
    lv: "Kara un cīņas dievs",
  },
  summary: {
    en: "Kovas is the Lithuanian god of war and combat, whose name is synonymous with struggle and the month of March — the traditional start of the Baltic campaign season.",
    lt: "Kovas yra lietuvių karo ir kovos dievas, kurio vardas reiškia kovą ir kovo mėnesį – tradicinę karo žygių pradžią.",
    lv: "Kovas ir lietuviešu kara un cīņas dievs, kura vārds ir sinonīms cīņai un marta mēnesim — tradicionālā karagājienu sākuma laikam.",
  },
  attributes: ["War", "Combat", "March", "Military valor"],
  symbols: ["Sword", "Rook bird", "Spear", "Warhorse"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const linksmineMeta: DeityMeta = {
  slug: "linksmine",
  name: { en: "Linksmine", lt: "Linksminė", lv: "Linksmine" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Lady of Joy and Merriment",
    lt: "Džiaugsmo ir linksmumo deivė",
    lv: "Prieka un jautrības dieviete",
  },
  summary: {
    en: "Linksminė is the Lithuanian goddess of happiness and merriment, invoked at weddings and harvest festivals to ensure joyful atmospheres and the divine blessing of laughter.",
    lt: "Linksminė yra lietuvių džiaugsmo deivė, šaukiama per vestuves ir derliaus šventes, kad namai spindėtų šviesa ir daina.",
    lv: "Linksminė ir lietuviešu prieka un jautrības dieviete, ko piesauca kāzās un ražas svētkos.",
  },
  attributes: ["Joy", "Happiness", "Merriment", "Song"],
  symbols: ["Smile", "Wine cup", "Song", "Sunrays"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const rasaMeta: DeityMeta = {
  slug: "rasa",
  name: { en: "Rasa", lt: "Rasa", lv: "Rasa" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Morning Dew",
    lt: "Ryto rasos deivė",
    lv: "Rīta rasas dieviete",
  },
  summary: {
    en: "Rasa is the Baltic goddess of morning dew and dawn freshness, a daughter of the Sun goddess Saulė who purifies and nourishes summer vegetation.",
    lt: "Rasa yra baltų ryto rasos deivė, Saulės dukra, kuri prausdama gamtą suteikia jai gijamąją galią.",
    lv: "Rasa ir baltu rīta rasas dieviete, Saules meita, kas mazgā un atjauno vasaras augu pasauli.",
  },
  attributes: ["Dew", "Dawn", "Purification", "Vegetation"],
  symbols: ["Water drop", "Flower petal", "Dawn light", "Silver bowl"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Ancient Origins", lt: "Seniausi laikai", lv: "Senākais periods" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 4 (2005)",
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const gardaitisMeta: DeityMeta = {
  slug: "gardaitis",
  name: { en: "Gardaitis", lt: "Gardaitis", lv: "Gardaitis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Protector of Boats and Sailors",
    lt: "Laivų ir jūreivių globėjas",
    lv: "Laivu un jūrnieku aizbildnis",
  },
  summary: {
    en: "Gardaitis is the Lithuanian deity of boats and sailors, invoked during storms to ensure the safety of vessels and their crews on coastal and maritime voyages.",
    lt: "Gardaitis yra lietuvių laivų ir jūreivių dievas, šaukiamas audros metu, saugantis laivus ir įgulas nuo pavojų vandenyse.",
    lv: "Gardaitis ir lietuviešu laivu un jūrnieku dievs, ko piesauca vētrās, lai nodrošinātu kuģu un to apkalpes drošību.",
  },
  attributes: ["Boats", "Sailors", "Sea voyages", "Wind"],
  symbols: ["Ship", "Sail", "Windbag", "Sea-stars"],
  locations: [],
  region: { en: "Lithuania (Coastal / Samogitia)", lt: "Lietuva (pajūrys / Žemaitija)", lv: "Lietuva (piekraste / Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians, Curonians", lt: "Lietuviai, žemaičiai, kuršiai", lv: "Lietuvieši, žemaiši, kurši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const ganiklisMeta: DeityMeta = {
  slug: "ganiklis",
  name: { en: "Ganiklis", lt: "Ganiklis", lv: "Ganiklis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Master of Shepherds",
    lt: "Piemenų globėjas",
    lv: "Ganu saimnieks",
  },
  summary: {
    en: "Ganiklis is the Lithuanian deity of shepherds and livestock grazing, invoked to ensure animals were not lost or attacked by wolves during the pasturing season.",
    lt: "Ganiklis yra lietuvių piemenų ir ganymo dievas, šaukiamas piemens apsaugai ir gyvulių saugumui ganymo laiku.",
    lv: "Ganiklis ir lietuviešu ganu un lopu ganīšanas dievs, ko piesauca, lai lopus sargātu no vilkiem un pazušanas.",
  },
  attributes: ["Shepherds", "Livestock", "Grazing", "Pastures"],
  symbols: ["Shepherd's horn", "Staff", "Sheep", "Cowbell"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const javineMeta: DeityMeta = {
  slug: "javine",
  name: { en: "Javine", lt: "Javinė", lv: "Javine" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Grain and Barns",
    lt: "Javų ir kluono deivė",
    lv: "Labības un rijas dieviete",
  },
  summary: {
    en: "Javinė is the Lithuanian deity who protects harvested grain and the threshing barn, guarding the stored bounty against rot, fire, and dark spirits until the next sowing.",
    lt: "Javinė yra lietuvių deivė, saugojanti nupjautus javus ir klojimą nuo drėgmės, ugnies ir piktųjų dvasių.",
    lv: "Javinė ir lietuviešu dieviete, kas sargā novāktus labības kūļus un rijā glabātās graudu krājumus.",
  },
  attributes: ["Grain", "Harvest", "Barns", "Food preservation"],
  symbols: ["Wheat sheaf", "Wooden barn", "Sickle"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "Medieval to 18th Century", lt: "Viduramžiai – XVIII a.", lv: "Viduslaiki – 18. gadsimts" },
  references: [
    "Dundulienė, Pranė: Gyvūnai ir augalai lietuvių mitologijoje (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Ruigys, Pilypas: Littauisch-Deutsches Lexikon (1747)",
  ],
};

export const geguteMeta: DeityMeta = {
  slug: "gegute",
  name: { en: "Gegute", lt: "Gegutė", lv: "Dzeguze" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Oracle Cuckoo of Fate",
    lt: "Likimo pranašė gegutė",
    lv: "Likteņa vēstnese dzeguze",
  },
  summary: {
    en: "Gegutė is the sacred cuckoo bird in Baltic mythology, an avatar and oracle of the fate goddess Laima, whose call predicts life spans, fortune, and the seasons.",
    lt: "Gegutė yra šventas paukštis lietuvių mitologijoje, likimo deivės Laimos pranašė, kurios kukavimas skelbia ateitį.",
    lv: "Dzeguze ir svēts putns baltu mitoloģijā, Laimas vēstnese, kuras dziesma paredz mūža ilgumu un likteni.",
  },
  attributes: ["Fate", "Prophecy", "Spring", "Transformation"],
  symbols: ["Cuckoo bird", "Spring branch", "Morning shadow"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians, Prussians", lt: "Lietuviai, latviai, prūsai", lv: "Lietuvieši, latvieši, prūši" },
  period: { en: "Ancient Origins", lt: "Seniausi laikai", lv: "Senākais periods" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const pergrubrijusMeta: DeityMeta = {
  slug: "pergrubrijus",
  name: { en: "Pergrubrijus", lt: "Pergrubrijus", lv: "Pergrubrijus" },
  domain: "God",
  culture: "PR",
  title: {
    en: "Lord of Spring and the Greening Earth",
    lt: "Pavasario ir želdimo dievas",
    lv: "Pavasara un zaļuma dievs",
  },
  summary: {
    en: "Pergrubrijus is the Prussian and Lithuanian deity of spring who unlocks the frozen earth with his key, bringing forth the first greenery and blessing the new agricultural year.",
    lt: "Pergrubrijus yra prūsų ir lietuvių pavasario dievas, kuris raktu atrakina įšalusią žemę ir leidžia jai sužaliuoti.",
    lv: "Pergrubrijus ir prūšu un lietuviešu pavasara dievs, kas ar atslēgu atver sasalušo zemi un atved pirmo zaļumu.",
  },
  attributes: ["Spring", "Vegetation", "Fertility", "Earth awakening"],
  symbols: ["Green sprout", "Key", "Plough", "Birch branch"],
  locations: [],
  region: { en: "Prussia, Lithuania, Samogitia", lt: "Prūsija, Lietuva, Žemaitija", lv: "Prūsija, Lietuva, Žemaitija" },
  tribe: { en: "Prussians, Sudovians, Lithuanians", lt: "Prūsai, sūduviai, lietuviai", lv: "Prūši, sudavieši, lietuvieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Sudovian Book (Suduviu knygele), 16th c.",
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

// ─── Batch 8 ─────────────────────────────────────────────────────────────────

export const indrajaMeta: DeityMeta = {
  slug: "indraja",
  name: { en: "Indraja", lt: "Indraja", lv: "Indraja" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Jupiter",
    lt: "Jupiterio deivė",
    lv: "Jupitera dieviete",
  },
  summary: {
    en: "Indraja is the Lithuanian personification of the planet Jupiter, a daughter of the Sun goddess Saulė who adds her radiant light to the celestial family traveling through the sky.",
    lt: "Indraja yra lietuvių Jupiterio planetos personifikacija, Saulės deivės dukra, pridedanti savo spindesį dangaus palydai.",
    lv: "Indraja ir lietuviešu Jupitera planētas personifikācija, Saules dievietes meita, kas papildina debesu ģimenes mirdzumu.",
  },
  attributes: ["Jupiter", "Celestial light", "Cosmic order", "Planets"],
  symbols: ["Bright star", "Planetary light", "Celestial sphere"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const vaivaMeta: DeityMeta = {
  slug: "vaiva",
  name: { en: "Vaiva", lt: "Vaiva", lv: "Varavīksne" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Rainbow — Belt of Laima",
    lt: "Vaivorykštė — Laimos juosta",
    lv: "Varavīksne — Laimas josta",
  },
  summary: {
    en: "Vaiva is the personified rainbow in Baltic mythology, known as the Belt of Laima, appearing after storms to signal the return of celestial order and the blessing of life-giving water.",
    lt: "Vaiva yra baltų mitologijoje personifikuota vaivorykštė, Laimos juosta, rodanti po audros, kad dangaus tvarka atkurta.",
    lv: "Varavīksne ir personificēta varavīksne baltu mitoloģijā, Laimas josta, kas pēc vētras signalizē par debesu kārtības atjaunošanu.",
  },
  attributes: ["Rainbow", "Celestial bridge", "After-storm", "Water cycle"],
  symbols: ["Rainbow arc", "Seven-colored belt", "Rain drop", "Weaving loom"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to Present Folklore", lt: "Viduramžiai – šiuolaikinė tautosaka", lv: "Viduslaiki – mūsdienu folklora" },
  references: [
    "Basanavičius, Jonas: Lietuviškos pasakos (1898–1902)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Gyvūnai ir augalai lietuvių mitologijoje (1983)",
  ],
};

export const bubilasMeta: DeityMeta = {
  slug: "bubilas",
  name: { en: "Bubilas", lt: "Bubilas", lv: "Bubilas" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Bee-Master and Honey God",
    lt: "Bičių meistras ir medaus dievas",
    lv: "Bišu meistars un medus dievs",
  },
  summary: {
    en: "Bubilas is the Lithuanian god of bees, drones, and honey production, the masculine counterpart to Austėja, who presides over the hive's strength and the abundance of the mead harvest.",
    lt: "Bubilas yra lietuvių bičių, tranų ir medaus gausos dievas, vyriškasis Austėjos atitikmuo, rūpinantis avilio stiprumu ir midaus derliumi.",
    lv: "Bubilas ir lietuviešu bišu, tranu un medus ražošanas dievs, vīrišķais Austējas atbilsme, kas pārskata stropu spēku.",
  },
  attributes: ["Bees", "Drones", "Honey", "Mead", "Hive"],
  symbols: ["Bee", "Honeycomb", "Drone", "Mead mug"],
  locations: [],
  region: { en: "Lithuania (Aukštaitija / Samogitia)", lt: "Lietuva (Aukštaitija / Žemaitija)", lv: "Lietuva (Augšzeme / Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const mildaMeta: DeityMeta = {
  slug: "milda",
  name: { en: "Milda", lt: "Milda", lv: "Milda" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Love (Disputed)",
    lt: "Meilės deivė (ginčytina)",
    lv: "Mīlestības dieviete (apstrīdēts)",
  },
  summary: {
    en: "Milda is the purported Lithuanian goddess of love and beauty, a figure popularized by 19th-century Romantic historian Teodor Narbutt. Contemporary scholars classify her as a literary reconstruction without authentic pre-Christian sources.",
    lt: "Milda yra tariama lietuvių meilės ir grožio deivė, T. Narbyto XIX a. romantinė rekonstrukcija; šiuolaikiniai mokslininkai laiko ją neautentišku išradimu.",
    lv: "Milda ir apgalvotā lietuviešu mīlestības un skaistuma dieviete, 19. gadsimta romantiskā rekonstrukcija; mūsdienu pētnieki to uzskata par vēlāku literāru izgudrojumu.",
  },
  attributes: ["Love", "Beauty", "Courtship", "Spring"],
  symbols: ["Myrtle", "Dove", "Heart", "May flowers"],
  locations: [],
  region: { en: "Lithuania (Romantic Literature)", lt: "Lietuva (romantinė literatūra)", lv: "Lietuva (romantiskā literatūra)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "19th Century (Reconstructed / Disputed)", lt: "XIX a. (rekonstruotas / ginčytina)", lv: "19. gadsimts (rekonstruēts / apstrīdēts)" },
  references: [
    "Narbutt, Teodor: Dzieje starożytne narodu litewskiego (1835)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Balsys, Rimantas: Lietuvių ir prūsų dievai, deivės, dvasios (2010)",
  ],
};

export const asviniaiMeta: DeityMeta = {
  slug: "asvieniai",
  name: { en: "Asvieniai", lt: "Ašvieniai", lv: "Dieva dēli" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Divine Horse Twins",
    lt: "Dieviškieji arklių dvyniai",
    lv: "Dievišķie zirgu dvīņi",
  },
  summary: {
    en: "Ašvieniai are the Baltic divine horse twins who pull the chariot of the Sun goddess Saulė across the sky, guardians of the solar cycle, immortalized in the crossed horse-head roof finials of traditional Baltic homes.",
    lt: "Ašvieniai yra baltų dieviškieji arklių dvyniai, traukiantys Saulės vežimą per dangų ir saugantys namus, įamžinti tradicinių namų žirgeliais ant kraigo.",
    lv: "Dieva dēli ir baltu dievišķie zirgu dvīņi, kas velk Saules vezumu pāri debesīm, mūžinājuši krustoto zirgugalvu jumta rotājumos.",
  },
  attributes: ["Solar chariot", "Horse twins", "Divine protection", "Dawn"],
  symbols: ["Crossed horse heads", "Chariot wheel", "White horse", "Rising sun"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Proto-Baltic to Present", lt: "Protobaltiški laikai – dabartis", lv: "Protobaltu laiki – mūsdienas" },
  references: [
    "Dundulienė, Pranė: Gyvūnai ir augalai lietuvių mitologijoje (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
  ],
};

export const erketusMeta: DeityMeta = {
  slug: "erketus",
  name: { en: "Erketus", lt: "Erketus", lv: "Erketus" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of Thorns and Protective Barriers",
    lt: "Erškėčių ir apsauginių kliūčių dvasia",
    lv: "Ērkšķu un aizsargbarjeru gars",
  },
  summary: {
    en: "Erketus is the Lithuanian spirit of thorns and briers, the divine guardian of protective hedges and natural barriers that separated the sacred farmstead from the wild forest beyond.",
    lt: "Erketus yra lietuvių erškėčių ir dygliuotų kliūčių dvasia, apsauginių gyvatvorių sargas, skiriančių šventą sodybą nuo laukinio miško.",
    lv: "Erketus ir lietuviešu ērkšķu un dzeloņu gars, aizsardzības dzīvžogu sargs, kas atdalīja sētu no savvaļas meža.",
  },
  attributes: ["Thorns", "Briers", "Protective barriers", "Boundaries"],
  symbols: ["Thorn", "Brier", "Barb", "Defensive hedge", "Hawthorn"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const veliuonaMeta: DeityMeta = {
  slug: "veliuona",
  name: { en: "Veliuona", lt: "Veliuona", lv: "Veliuona" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Mistress of the Dead",
    lt: "Vėlių valdovė",
    lv: "Mirušo valdniece",
  },
  summary: {
    en: "Veliuona is the Lithuanian goddess of death and the realm of ancestral spirits, the solemn guardian who receives the departed and maintains the boundary between the living and the dead.",
    lt: "Veliuona yra lietuvių mirties ir protėvių vėlių karalystės deivė, iškilmingoji sargė, priimanti mirusius ir sauganti gyvenimo bei mirties ribą.",
    lv: "Veliuona ir lietuviešu nāves un senču garu valstības dieviete, svinīgā sargātāja, kas uztur robežu starp dzīvajiem un mirušajiem.",
  },
  attributes: ["Death", "Ancestral spirits", "Underworld", "Funerary rites"],
  symbols: ["Grave mound", "Night sky", "Spirit lights", "Ancient tree"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const lauksargisMeta: DeityMeta = {
  slug: "lauksargis",
  name: { en: "Lauksargis", lt: "Lauksargis", lv: "Lauku māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of the Fields",
    lt: "Laukų sargas",
    lv: "Lauku sargs",
  },
  summary: {
    en: "Lauksargis is the Baltic field guardian deity, protector of crops and agricultural boundaries, invoked before sowing to ensure the land's safety and the health of the harvest.",
    lt: "Lauksargis yra baltų laukų sargo dievybė, pasėlių ir žemės ribų globėjas, šaukiamas prieš sėją užtikrinti derliaus saugumą.",
    lv: "Lauksargis ir baltu lauku sargātājs, kultūraugu un lauksaimniecības robežu aizsargs, ko piesauca pirms sējas.",
  },
  attributes: ["Fields", "Crops", "Boundaries", "Plowing", "Harvest protection"],
  symbols: ["Plowshare", "Boundary stone", "Woven sheaf", "Field lark"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 18th Century", lt: "Viduramžiai – XVIII a.", lv: "Viduslaiki – 18. gadsimts" },
  references: [
    "Mažvydas, Martynas: Katekizmas (1547)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Žemdirbystė lietuvių mitologijoje (1963)",
  ],
};

export const drebkulysMeta: DeityMeta = {
  slug: "drebkulys",
  name: { en: "Drebkulys", lt: "Drebkulys", lv: "Drebkulys" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of the Shivering Fever",
    lt: "Karštinės ir drebulio dvasia",
    lv: "Drudža drebēšanas gars",
  },
  summary: {
    en: "Drebkulys is the Lithuanian spirit of fever and chills, the personification of the shaking sickness recorded by Jan Łasicki, representing the archaic Baltic belief that every illness was governed by its own divine force.",
    lt: "Drebkulys yra lietuvių karštinės ir drebulio dvasia, krečiančios ligos personifikacija, užrašyta Jano Lasickio — liudijimas archajinio tikėjimo, kad kiekvieną ligą valdo savita dvasia.",
    lv: "Drebkulys ir lietuviešu drudža un drebuļa gars, locītavās kratošās slimības personifikācija pēc Jana Lasicija, kas atspoguļo senu baltu uzskatu par slimību garu varu.",
  },
  attributes: ["Fever", "Chills", "Shivering", "Illness"],
  symbols: ["Trembling hand", "Pale face", "Shivering figure"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const apidemeMeta: DeityMeta = {
  slug: "apideme",
  name: { en: "Apideme", lt: "Apidėmė", lv: "Apidēme" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of the Homestead's Edge",
    lt: "Sodybos ribų saugotoja",
    lv: "Mājas robežu sargātāja",
  },
  summary: {
    en: "Apidėmė is the Lithuanian spirit of the homestead boundary, the divine guardian of fences and thresholds who was offered sacrifices when a family moved to ensure she would follow and protect the new farmstead.",
    lt: "Apidėmė yra lietuvių sodybos ribų dvasia, dieviškoji tvorų ir slenksčio sargė, kuriai aukojama kraustantis, kad ji sektų ir saugotų naują sodybą.",
    lv: "Apidēme ir lietuviešu mājas robežu gars, žogu un sliekšņa dievišķā sargātāja, kurai upuroja pārceļoties, lai viņa sekotu un sargātu jauno saimniecību.",
  },
  attributes: ["Homestead", "Boundaries", "Fences", "Threshold", "Moving"],
  symbols: ["Threshold", "Fence gate", "Corner stone", "Rooster"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De diis Samagitarum caeterisque Sarmatum (1582)",
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
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
  // Batch 7
  girstisMeta,
  jundaMeta,
  kovasMeta,
  linksmineMeta,
  rasaMeta,
  gardaitisMeta,
  ganiklisMeta,
  javineMeta,
  geguteMeta,
  pergrubrijusMeta,
  // Batch 8
  indrajaMeta,
  vaivaMeta,
  bubilasMeta,
  mildaMeta,
  asviniaiMeta,
  erketusMeta,
  veliuonaMeta,
  lauksargisMeta,
  drebkulysMeta,
  apidemeMeta,
  // Batch 9
  sietynasMeta,
  rungisMeta,
  kizmasMeta,
  samanisMeta,
  krumineMeta,
  lazdonaMeta,
  diviriksMeta,
  pagirnisMeta,
  jievarasMeta,
  atlaibosMeta,
  // Batch 10
  ratainicaMeta,
  aspelenieMeta,
  kempeMeta,
  kaurirarisMeta,
  kelukisMeta,
  kurvaitisMeta,
  upinisMeta,
  deivesValdytojsMeta,
  deiveMeta,
  girinisMeta,
  // Batch 11
  pagirinisMeta,
  babilosMeta,
  sutvarasMeta,
  tavalasMeta,
  gulbisMeta,
  ugniazaltisMeta,
  ausklautsMeta,
  bentisMeta,
  lietuvonisMeta,
  kalvelisMeta,
  // Batch 12
  kirkisMeta,
  piziusMeta,
  devintosMeta,
  gulbiMeta,
  vaivoraMeta,
  perkunasTikrasMeta,
  zemininkasMeta,
  prigirstisMeta,
  salausMeta,
  // Batch 13
  srutisMeta,
  skalsaMeta,
  dausosMeta,
  laimeAbstractMeta,
  negaliMeta,
  dievaitisMeta,
  birdGoddessMeta,
  snakeGoddessMeta,
  whiteLadyMeta,
  deerMotherMeta,
  // Batch 14
  velnioMotinaMeta, ausraMeta, spindulysMeta, maroDeiveMeta, pjutisDievasMeta,
  // Batch 15
  perkunoOzelisMeta, perkunoKulkaMeta, perkunoRyksteMeta, pincukasMeta,
  ezeruSeimininkeMeta, milineMeta, ziburinisMeta, debesuKareivisMeta, duobkasisMeta,
  // Batch 16
  sutartiniuDievaiciaiMeta, ladutisMeta, deivesCultMeta, gabijosUgnisMeta,
  zaltvykslesMeta, tavalisMeta, tiklisMeta, algisMeta, bendikasMeta,
  slaitisMeta, vetustisMeta, saukstisMeta,
  // Batch 17
  martinsMeta, jodsMeta, banguMateMeta, upesMateMeta,
  lietusMateMeta, miglasMateMeta, salnaMateMeta,
  // Batch 18
  debessMateMeta, zvaigznesMateMeta, saulesMateMeta2, menessMate2Meta,
  ritaMateMeta, vakараMateMeta, naktsMateMeta, dienasMateMeta,
};

// ─── Batch 9 ─────────────────────────────────────────────────────────────────

export const sietynasMeta: DeityMeta = {
  slug: "sietynas",
  name: { en: "Sietynas", lt: "Sietynas", lv: "Sietiņš" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Pleiades — Celestial Sieve of the Seasons",
    lt: "Plejadės — dangaus sietuvas",
    lv: "Plejādes — debesu siets",
  },
  summary: {
    en: "Sietynas is the Baltic personification of the Pleiades star cluster, the celestial sieve used by the gods to sift fine rain from destructive floods, and the cosmic calendar by which farmers timed their plowing and sowing.",
    lt: "Sietynas yra baltų Plejadžių žvaigždžių spiečiaus personifikacija, dangaus sietuvas sijojantis smulkų lietų, ir kosminis kalendorius ūkininkams.",
    lv: "Sietiņš ir baltu Plejāžu zvaigznāja personifikācija, debesu siets, kas sijā smalkus lietus no plūdiem, un kosmiskais kalendārs zemniekiem.",
  },
  attributes: ["Pleiades", "Star cluster", "Seasons", "Agricultural calendar", "Rain"],
  symbols: ["Sieve", "Seven stars", "Dew", "Fine rain", "Net"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Ancient to Present Folklore", lt: "Senovė – dabartinė tautosaka", lv: "Senatnē – mūsdienu folklora" },
  references: [
    "Vaiškūnas, Jonas: Skaitant dangaus ženklus (2012)",
    "Klimka, Libertas: Senovės lietuvių kosmogonija (1994)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const rungisMeta: DeityMeta = {
  slug: "rungis",
  name: { en: "Rungis", lt: "Rungis", lv: "Rungis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of the Fertile Dung",
    lt: "Derlingojo mėšlo dvasia",
    lv: "Auglīgā mēsla gars",
  },
  summary: {
    en: "Rungis is the Lithuanian spirit who lives in the dung of the farmstead, the divine guardian of manure's fertilising power who ensures that the fields receive the vital nutrients needed for a successful harvest.",
    lt: "Rungis yra lietuvių dvasia, gyvenanti sodybos mėšle, dieviškasis tręšimo galios sargas, užtikrinantis, kad laukai gautų gyvybiškai svarbias maistines medžiagas.",
    lv: "Rungis ir lietuviešu gars, kas dzīvo sētas kūtsmēslos, dievišķais mēslošanas spēka sargs, kurš gādā par tīrumu apgādi ar augšanai nepieciešamajām barības vielām.",
  },
  attributes: ["Manure", "Fertilisation", "Soil health", "Farmstead cycle"],
  symbols: ["Dung heap", "Pitchfork", "Sprout", "Fertile soil"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kizmasMeta: DeityMeta = {
  slug: "kizmas",
  name: { en: "Kizmas", lt: "Kizmas", lv: "Kizmas" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of the Woodpile",
    lt: "Malkų krūvų sargas",
    lv: "Malku kaudzes sargs",
  },
  summary: {
    en: "Kizmas is the Lithuanian spirit who guards the stacks of firewood and tree fragments prepared for winter, the divine protector of the household's fuel supply and the guarantee of warmth through the long cold months.",
    lt: "Kizmas yra lietuvių dvasia, sauganti malkas ir medžio atplaišas, paruoštas žiemai, dieviška namų kuro atsargų sargė.",
    lv: "Kizmas ir lietuviešu gars, kas sargā malku grēdas un koka šķembas, ko sagatavo ziemai, mājokļa kurināmā sargātājs.",
  },
  attributes: ["Firewood", "Woodpiles", "Winter survival", "Household fuel"],
  symbols: ["Woodpile", "Log", "Axe", "Hearth fire", "Winter branch"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const samanisMeta: DeityMeta = {
  slug: "samanis",
  name: { en: "Samanis", lt: "Samanis", lv: "Samanis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of the Moss",
    lt: "Samanų dvasia",
    lv: "Sūnu gars",
  },
  summary: {
    en: "Samanis is the Lithuanian spirit of the moss, the divine guardian of the forest floor's soft green carpet who maintains the moisture and life of the ancient woodland by dwelling within the living mat of mosses and lichens.",
    lt: "Samanis yra lietuvių samanų dvasia, miško paklotės minkšto žaliojo kilimo dieviškasis sargas, gyvenas pačiose samanose.",
    lv: "Samanis ir lietuviešu sūnu gars, meža grīdas mīkstā zaļā paklāja dievišķais sargs, kas uztur mitrumu dzīvo sūnu paklājā.",
  },
  attributes: ["Moss", "Forest floor", "Moisture", "Lichens"],
  symbols: ["Moss", "Lichen", "Greenery", "Damp soil", "Forest floor"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const krumineMeta: DeityMeta = {
  slug: "krumine",
  name: { en: "Krumine", lt: "Krūminė", lv: "Krūminė" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Bushes and the First Grain Ears",
    lt: "Krūmų ir pirmųjų varpų deivė",
    lv: "Krūmu un pirmās vārpas dieviete",
  },
  summary: {
    en: "Krūminė is the Lithuanian goddess of bushes, thickets, and the first ears of grain, the divine guardian of the boundary between the wild woodland edge and the cultivated field who blesses the very first growth of the harvest season.",
    lt: "Krūminė yra lietuvių krūmų, tankmių ir pirmųjų javų varpų deivė, apsauganti žemdirbystės laukų ir miško paribio pasienį.",
    lv: "Krūminė ir lietuviešu krūmu, brikšņu un pirmās labības vārpas dieviete, kas svētī pirmos augšanas sākumus.",
  },
  attributes: ["Bushes", "Thickets", "First grain ears", "Meadows", "Wild-cultivated boundary"],
  symbols: ["Bush", "Grain ear", "Scrubland", "Meadow flower"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const lazdonaMeta: DeityMeta = {
  slug: "lazdona",
  name: { en: "Lazdona", lt: "Lazdona", lv: "Lazdu māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Goddess of Hazel Trees and Wisdom",
    lt: "Lazdynų ir išminties deivė",
    lv: "Lazdas koka un gudrības dieviete",
  },
  summary: {
    en: "Lazdona is the Baltic goddess of hazel trees and their precious nuts, guardian of the sacred groves whose branches ward off lightning and serpents, and whose bounty of nuts provided both nourishment and the tools of divination.",
    lt: "Lazdona yra baltų lazdynų ir jų brangių riešutų deivė, šakų apsaugančių nuo žaibo ir gyvačių šventosios giraitės globėja.",
    lv: "Lazdu māte ir baltu lazdu koku un to vērtīgo riekstu dieviete, svēto birztalas sargātāja, kuras zari pasargā no zibens un čūskām.",
  },
  attributes: ["Hazel tree", "Hazelnuts", "Wisdom", "Divination", "Protection from lightning"],
  symbols: ["Hazelnut", "Hazel branch", "Hazel staff", "Squirrel"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 17th Century", lt: "Viduramžiai – XVII a.", lv: "Viduslaiki – 17. gadsimts" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Medis lietuvių mitologijoje (1979)",
  ],
};

export const diviriksMeta: DeityMeta = {
  slug: "diviriks",
  name: { en: "Diviriks", lt: "Diviriks", lv: "Diviriks" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Leader of the Gods",
    lt: "Dievų valdovas",
    lv: "Dievu vadonis",
  },
  summary: {
    en: "Diviriks is the ancient Baltic title for the supreme leader of the divine assembly, recorded in 13th-century chronicles as a deity worshipped by King Mindaugas, and interpreted by scholars as an epithet for Perkūnas in his role as sovereign arbiter of justice and war.",
    lt: "Diviriks yra senovinis baltų titulas aukščiausiąjam dievų susirinkimo pirmininkui, XIII a. kronikose užfiksuotas kaip Mindaugo garbinta dievybė.",
    lv: "Diviriks ir senais baltu nosaukums dievu pulcēšanās augstākajam vadītājam, 13. gadsimta hronikās pierakstīts kā Mindaugas pielūgta dievība.",
  },
  attributes: ["Leadership", "Divine sovereignty", "Justice", "War", "Thunder"],
  symbols: ["Lightning", "Scepter", "Oak tree", "Throne"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "13th Century (Recorded)", lt: "XIII a. (užrašytas)", lv: "13. gadsimts (dokumentēts)" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Beresnevičius, Gintaras: Baltų religinės reformos (1995)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const pagirnisMeta: DeityMeta = {
  slug: "pagirnis",
  name: { en: "Pagirnis", lt: "Pagirnis", lv: "Pagirnis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardian of the Quern",
    lt: "Girnų sargas",
    lv: "Dzirnakmens sargs",
  },
  summary: {
    en: "Pagirnis is the Lithuanian spirit who dwells beneath the quern stone, guardian of the sacred grinding process by which grain becomes flour and the family's daily bread, invoked with offerings of the first flour before each grinding session.",
    lt: "Pagirnis yra lietuvių dvasia, gyvenanti po girnomis, šventojo malimo proceso sargas, kuriam aukojama pirmoji miltų sauja.",
    lv: "Pagirnis ir lietuviešu gars, kas apdzīvo dzirnakmens apakšu, svētā malšanas procesa sargs, kuram upuroja pirmos miltus.",
  },
  attributes: ["Quern stone", "Grain grinding", "Flour", "Domestic labour", "Bread"],
  symbols: ["Quern stone", "Flour", "Grain", "Circle", "Sieve"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th–17th Century (Recorded)", lt: "XVI–XVII a. (užrašytas)", lv: "16.–17. gadsimts (dokumentēts)" },
  references: [
    "Jėzuitų santykiai (Annuae Litterae Societatis Jesu)",
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const jievarasMeta: DeityMeta = {
  slug: "jievaras",
  name: { en: "Jievaras", lt: "Jievaras", lv: "Jevars" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of the Last Sheaf",
    lt: "Paskutinės varpos dvasia",
    lv: "Pēdējās kūļa gars",
  },
  summary: {
    en: "Jievaras is the Lithuanian harvest spirit personified by the last uncut stalks of grain, braided into the ceremonial Jievaro tiltas (Jievaras Bridge) at season's end to return the life-force of the field to the earth and ensure next year's abundance.",
    lt: "Jievaras yra lietuvių derliaus dvasia, personifikuojama paskutinių nenupjautų javų stiebų, supinamų į ceremoninį Jievaro tiltą.",
    lv: "Jievaras ir lietuviešu ražas gars, kas iemiesojas pēdējos nenocirstajos labības stieblos, kas pīti ceremoniskajā Jievaro tiltā.",
  },
  attributes: ["Harvest", "Last sheaf", "Fertility cycle", "Return of life-force"],
  symbols: ["Braided grain", "Bread and salt", "Bridge", "Golden sheaf"],
  locations: [],
  region: { en: "Lithuania (Aukštaitija)", lt: "Lietuva (Aukštaitija)", lv: "Lietuva (Augšzeme)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "Medieval to 20th-Century Folklore", lt: "Viduramžiai – XX a. tautosaka", lv: "Viduslaiki – 20. gadsimta folklora" },
  references: [
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
  ],
};

export const atlaibosMeta: DeityMeta = {
  slug: "atlaibos",
  name: { en: "Atlaibos", lt: "Atlaibos", lv: "Atlaibos" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of Liberation and Release",
    lt: "Išlaisvinimo ir paleidimo dvasia",
    lv: "Atbrīvošanas un palaiduma gars",
  },
  summary: {
    en: "Atlaibos is the Lithuanian spirit of liberation, the divine overseer of the release of prisoners and captives, invoked to loosen bonds and restore freedom to those held against their will.",
    lt: "Atlaibos yra lietuvių išlaisvinimo dvasia, dieviškasis kalinių paleidimo prižiūrėtojas, šaukiamas pančiams atlaisvinti.",
    lv: "Atlaibos ir lietuviešu atbrīvošanas gars, dievišķais gūstekņu atbrīvošanas uzraugs, piesaukts važu atraisīšanai.",
  },
  attributes: ["Liberation", "Release", "Prisoners", "Freedom", "Bonds"],
  symbols: ["Broken chain", "Open hand", "Release keys"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

// ─── Batch 10 ────────────────────────────────────────────────────────────────

export const ratainicaMeta: DeityMeta = {
  slug: "ratainica",
  name: { en: "Ratainyčia / Kremata / Mjurė / Meilus", lt: "Ratainyčia / Kremata / Mjurė / Meilus", lv: "Ratainyčia / Kremata / Mjurė / Meilus" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardians of Livestock and the Cart",
    lt: "Gyvulių ir vežimo sargai",
    lv: "Lopu un vezuma sargātāji",
  },
  summary: {
    en: "Ratainyčia, Kremata, Mjurė, and Meilus are the specialized Lithuanian guardian spirits of wheels and carts, pigs, oxen, and goats respectively, each assigned to protect a specific segment of the farmstead's productive livestock and transport.",
    lt: "Ratainyčia, Kremata, Mjurė ir Meilus yra specializuoti lietuvių ūkio sargai: ratų, kiaulių, jaučių ir ožkų globėjai.",
    lv: "Ratainyčia, Kremata, Mjurė un Meilus ir specializēti lietuviešu sētas sargātāji: ratu, cūku, vēršu un kazu aizbildņi.",
  },
  attributes: ["Livestock", "Cart", "Wheels", "Pigs", "Oxen", "Goats", "Farmstead"],
  symbols: ["Wheel", "Piglet", "Oxen yoke", "Goat horn"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const aspelenieMeta: DeityMeta = {
  slug: "aspelenie",
  name: { en: "Aspelenie / Gondu / Budintoja", lt: "Aspelenie / Gondu / Budintoja", lv: "Aspelenie / Gondu / Budintoja" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirits of Hearth, Forest Pasture, and Morning",
    lt: "Grūšniaus, ganyklos ir ryto dvasios",
    lv: "Pavarda, ganību un rīta gari",
  },
  summary: {
    en: "Aspelenie dwells behind the hearth as protector of domestic peace and the sacred snake; Gondu watches over cattle pastured in the forest; Budintoja is the Waker who rouses the family from sleep each morning.",
    lt: "Aspelenie gyvena prie žaizdro ir saugo namų ramybę; Gondu globoja miško gyvulius; Budintoja žadina šeimą kiekvieną rytą.",
    lv: "Aspelenie mājo pie pavarda un sargā mājas mieru; Gondu uzrauga mežā ganāmos lopus; Budintoja ir modinātāja, kas katru rītu ceļ ģimeni.",
  },
  attributes: ["Hearth", "Domestic peace", "Cattle", "Forest pasture", "Morning", "Waking"],
  symbols: ["Hearth snake", "Morning sunlight", "Pasture grass"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kempeMeta: DeityMeta = {
  slug: "kempe",
  name: { en: "Kempe / Kempė", lt: "Kempė", lv: "Kempė" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of Beetles",
    lt: "Vabalų dvasia",
    lv: "Vaboles gars",
  },
  summary: {
    en: "Kempė is the Lithuanian guardian spirit of beetles and cockchafers, recorded by Łasicki as invoked to protect crops from insect damage and to acknowledge the beetle's place in the natural order.",
    lt: "Kempė yra lietuvių vabalų ir karkvabalių globėjas, Lasickio paminėtas kaip šauktinis apsaugai nuo vabzdžių žalos.",
    lv: "Kempė ir lietuviešu vabolu un maijvabolu sargātāja, ko Łasickis piemin kā aizbildni pret kukaiņu radītajiem postījumiem.",
  },
  attributes: ["Beetles", "Insects", "Crops", "Natural order", "Soil"],
  symbols: ["Beetle", "Cockchafer", "Hard shell"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kaurirarisMeta: DeityMeta = {
  slug: "kauriraris",
  name: { en: "Kauriraris", lt: "Kauriraris", lv: "Kauriraris" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spirit of Battle Heat and Warriors' Rage",
    lt: "Mūšio karščio ir karių įniršio dvasia",
    lv: "Kaujas karstuma un karotāju dusmu gars",
  },
  summary: {
    en: "Kauriraris is an obscure Samogitian spirit of battle heat, recorded by Łasicki as associated with warhorse and combat fury, representing the divine force that drives warriors into a state of fighting frenzy.",
    lt: "Kauriraris yra neaiški žemaitiška mūšio karščio dvasia, paminėta Lasickio, susijusi su karo žirgu ir kovos įniršiu.",
    lv: "Kauriraris ir neskaidrs žemaišu kaujas karstuma gars, ko Łasickis piemin saistībā ar kaujas zirgu un cīņas dusmām.",
  },
  attributes: ["Battle", "Warhorse", "Fury", "Combat", "Warriors"],
  symbols: ["Warhorse", "Spear", "Battle cry"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const kelukisMeta: DeityMeta = {
  slug: "kelukis",
  name: { en: "Kelukis / Gužė / Čiužė", lt: "Kelukis / Gužė / Čiužė", lv: "Kelukis / Gužė / Čiužė" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardians of Roads and Smooth Travel",
    lt: "Kelių ir sklandžios kelionės sargai",
    lv: "Ceļu un raitas ceļošanas sargātāji",
  },
  summary: {
    en: "Kelukis is the divine master of roads, invoked at journey's start to ensure safe passage; Gužė and Čiužė are spirits of smooth travel, with Čiužė specifically embodying the effortless glide of winter sledge travel.",
    lt: "Kelukis yra kelių dievas, šaukiamas prieš kelionę; Gužė ir Čiužė yra sklandaus judėjimo dvasios, o Čiužė įkūnija žiemos rogių slidimą.",
    lv: "Kelukis ir ceļu dievs, ko piemin pirms ceļojuma; Gužė un Čiužė ir raitas pārvietošanās gari, Čiužė personificē ziemas kamanās slidināšanos.",
  },
  attributes: ["Roads", "Travel", "Crossroads", "Smooth passage", "Winter travel"],
  symbols: ["Crossroads", "Walking stick", "Sleigh runner"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th–18th Century (Recorded)", lt: "XVI–XVIII a. (užrašytas)", lv: "16.–18. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Ruhig, Philipp: Littauisch-Deutsches und Deutsch-Littauisches Lexicon (1747)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const kurvaitisMeta: DeityMeta = {
  slug: "kurvaitis",
  name: { en: "Kurvaitis / Sveitiks / Aperušis", lt: "Kurvaitis / Sveitiks / Aperušis", lv: "Kurvaitis / Sveitiks / Aperušis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardians of Foals, Guests, and the Harvest Threshold",
    lt: "Kumeliukų, svečių ir derliaus slenksčio sargai",
    lv: "Kumeļu, viesu un ražas sliekšņa sargātāji",
  },
  summary: {
    en: "Kurvaitis guards young foals and ensures their growth; Sveitiks presides over guests and social transitions; Aperušis oversees the moment when harvested grain crosses from field to barn.",
    lt: "Kurvaitis globoja kumeliukus; Sveitiks saugo svečių ir bendravimo papročius; Aperušis valdo grūdų perėjimą iš lauko į kluoną.",
    lv: "Kurvaitis sargā kumeļus; Sveitiks uzrauga viesus un sociālās pārejas; Aperušis vada graudu pāreju no lauka uz šķūni.",
  },
  attributes: ["Foals", "Guests", "Harvest", "Thresholds", "Social transitions"],
  symbols: ["Foal", "Open door", "Grain sack", "Threshold"],
  locations: [],
  region: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const upinisMeta: DeityMeta = {
  slug: "upinis",
  name: { en: "Upinis / Ežerinis", lt: "Upinis / Ežerinis", lv: "Upinis / Ežerinis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Guardians of Rivers and Lakes",
    lt: "Upių ir ežerų sargai",
    lv: "Upju un ezeru sargātāji",
  },
  summary: {
    en: "Upinis is the spirit of flowing rivers, invoked by fishermen and travelers for safe passage and a steady current; Ežerinis presides over still lake waters and controls the hidden depths and fish populations of the Baltic inland lakes.",
    lt: "Upinis yra tekančių upių dvasia, šaukiama žvejų ir keliautojų apsaugai; Ežerinis valdo ežerų gelmes ir žuvų gausą.",
    lv: "Upinis ir tekošo ūdens gars, ko piemin zvejnieki un ceļotāji drošai pārejai; Ežerinis valda ezeru klusās ūdens dzīles un zivju krājumus.",
  },
  attributes: ["Rivers", "Lakes", "Fish", "Water", "Safe passage", "Depths"],
  symbols: ["River current", "Lake ripples", "Fish", "Fishing net", "Reed"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Recorded)", lt: "XVI a. (užrašytas)", lv: "16. gadsimts (dokumentēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const deivesValdytojsMeta: DeityMeta = {
  slug: "deives-valdytojos",
  name: { en: "Deivės Valdytojos", lt: "Deivės Valdytojos", lv: "Deives Valdytojas" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Governing Goddesses — Weavers of Fate",
    lt: "Valdančiosios deivės — likimo audėjos",
    lv: "Pārvaldošās dievietes — likteņa audējas",
  },
  summary: {
    en: "The Deivės Valdytojos are the collective group of governing goddesses who spin, weave, and cut the thread of human fate, functioning as the Baltic equivalent of the Moirai or Norns, operating alongside Laima as the functional laborers of destiny.",
    lt: "Deivės Valdytojos yra kolektyvinė valdančiųjų deivių grupė, spinduliuojanti, audžianti ir kerpanti žmogaus likimo siūlą.",
    lv: "Deives Valdytojas ir pārvaldošo dieviešu kolektīvā grupa, kas vērpj, auž un nogriež cilvēka likteņa pavedienu.",
  },
  attributes: ["Fate", "Destiny", "Weaving", "Spinning", "Life thread", "Cosmic order"],
  symbols: ["Spindle", "Thread", "Loom", "Scissors", "Linen"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Ancient to present folklore", lt: "Nuo seniausių laikų iki dabarties tautosakos", lv: "No senlaikiem līdz mūsdienu folklorai" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Greimas, Algirdas Julius: Apie dievus ir žmones (1979)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const deiveMeta: DeityMeta = {
  slug: "deive",
  name: { en: "Deivė", lt: "Deivė", lv: "Deive" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Divine Feminine — Generic Goddess Term",
    lt: "Dieviškasis moteriškumas — bendrinis deivės pavadinimas",
    lv: "Dievišķais sievišķums — vispārīgs dievietes apzīmējums",
  },
  summary: {
    en: "Deivė is the generic Baltic term for a female deity, derived from Proto-Indo-European *deiw- (to shine), encompassing both high goddesses and the collective groups of supernatural women who persist in forest groves and meadows.",
    lt: "Deivė yra bendrinis baltų moteriškos dievybės terminas, apimantis tiek aukštas deives, tiek kolektyvines antgamtinių moterų grupes.",
    lv: "Deive ir vispārīgs baltu termins sieviešu dievietei, ko lieto augstām dievietēm un pārdabisko sieviešu kolektīviem.",
  },
  attributes: ["Female deity", "Fate", "Nature", "Weaving", "Sacred grove", "Household"],
  symbols: ["Weaving loom", "Wool", "Bread", "Sacred grove"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Proto-Baltic to present folklore", lt: "Nuo protobaltų iki dabarties tautosakos", lv: "No protobaltiem līdz mūsdienu folklorai" },
  references: [
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const girinisMeta: DeityMeta = {
  slug: "girinis",
  name: { en: "Girinis / Miškinis", lt: "Girinis / Miškinis", lv: "Meža vīrs" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Lord of the Forest — Master of the Wild Woods",
    lt: "Miško valdovas — laukinių girių šeimininkas",
    lv: "Meža kungs — savvaļas koku valdnieks",
  },
  summary: {
    en: "Girinis and Miškinis are the Lithuanian lords of the forest, ancient men with moss-covered skin who oversee wild animals and sacred trees, blessing hunters who show respect and leading astray those who transgress the woodland laws.",
    lt: "Girinis ir Miškinis yra lietuvių miško valdovai, seni vyrai samanota oda, globojantys miško žvėris ir šventus medžius.",
    lv: "Girinis un Miškinis ir lietuviešu meža kungi, veci sūnainādas vīri, kas uzrauga meža zvērus un svētos kokus.",
  },
  attributes: ["Forest", "Wild animals", "Sacred trees", "Hunting luck", "Guidance"],
  symbols: ["Moss", "Pine cone", "Rowan staff", "Wolf", "Bear"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to present folklore", lt: "Viduramžiai iki dabarties tautosakos", lv: "Viduslaiki līdz mūsdienu folklorai" },
  references: [
    "Basanavičius, Jonas: Lietuviškos pasakos (1898–1902)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
  ],
};

// ─── Batch 11 ─────────────────────────────────────────────────────────────────

export const pagirinisMeta: DeityMeta = {
  slug: "pagirinis",
  name: { en: "Pagirinis", lt: "Pagirinis", lv: "Mājas Zalktis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Guardian of the Hearth — The Sacred Snake Beneath the Quern",
    lt: "Židinio sargas — šventasis žaltys po girnomis",
    lv: "Mājas sargs — svētais zalktis zem dzirnu akmens",
  },
  summary: {
    en: "Pagirinis is the protective spirit of the household, manifesting as the sacred grass snake (Žaltys) living beneath the quern-stone or hearth, to whom milk was offered to ensure the family's health and prosperity.",
    lt: "Pagirinis yra namų apsaugos dvasia, pasireiškianti kaip šventas žaltys po girnomis ar židiniu, kuriam aukojamas pienas šeimos sveikatos ir gerovės labui.",
    lv: "Pagirinis ir mājas aizsardzības gars, kas izpaužas kā svētais zalktis zem dzirnu akmens vai pavarda, kuram tika upurēts piens ģimenes veselībai un labklājībai.",
  },
  attributes: ["Household protection", "Hearth", "Grass snake", "Fertility", "Ancestral link"],
  symbols: ["Grass snake (Žaltys)", "Quern stone", "Milk bowl", "Hearth embers"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic to 18th-century folklore", lt: "Protobaltiška tradicija iki XVIII a. tautosakos", lv: "Proto-baltu tradīcija līdz 18. gs. folklorai" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const babilosMeta: DeityMeta = {
  slug: "babilos",
  name: { en: "Babilos / Matergabiae", lt: "Babilas / Matergabiae", lv: "Uguns māte / Alus gars" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Spirit of Brewing and Sacred Fire — The Domestic Cultivators",
    lt: "Alaus ir šventosios ugnies dvasia — namų puoselėtojai",
    lv: "Brūvēšanas un svētas uguns gars — mājas kopēji",
  },
  summary: {
    en: "Babilos and Matergabiae (Mother Gabija) are Samogitian household spirits guarding the fermentation of beer and the sacred hearth fire, representing the spiritual foundation of domestic life recorded by Łasicki.",
    lt: "Babilas ir Matergabiae (Motina Gabija) yra žemaičių tradicijos namų dvasios, saugančios alaus fermentaciją ir šventąją namų ugnį, paminėtos Lasickio.",
    lv: "Babilos un Matergabiae (mātes Gabija) ir žemaitiešu tradīcijas mājas gari, kas sargā alus rūgšanu un svēto pavarda uguni, ko reģistrēja Łasicki.",
  },
  attributes: ["Brewing", "Hearth fire", "Household protection", "Social bonding", "Fermentation"],
  symbols: ["Beer mug", "Hearth flame", "Yeast", "Bread loaf"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaitieši, lietuvieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const sutvarasMeta: DeityMeta = {
  slug: "sutvaras",
  name: { en: "Sutvaras / Sutvaris", lt: "Sutvaras / Sutvaris", lv: "Sutvaras" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Divine Shaper — Creator of Natural Forms",
    lt: "Dieviškasis kūrėjas — gamtos formų suteikėjas",
    lv: "Dievišķais veidotājs — dabas formu radītājs",
  },
  summary: {
    en: "Sutvaras is the Lithuanian cosmogonic deity who shapes and structures the physical world, recorded by Łasicki as the 'Creator' (creatorem) invoked by the Samogitians to give concrete form to raw nature.",
    lt: "Sutvaras yra lietuvių kosmogoninis dievas, suteikiantis formą ir struktūrą fiziniam pasauliui, Lasickio užfiksuotas kaip 'kūrėjas' (creatorem), šaukiamas žemaičių.",
    lv: "Sutvaras ir lietuviešu kosmogonikā dievība, kas veido un strukturē fizisko pasauli; Łasicki viņu reģistrēja kā 'radītāju' (creatorem), ko piesauca žemaitieši.",
  },
  attributes: ["Creation", "Shaping", "Natural order", "Cosmic structure", "Form-giving"],
  symbols: ["Clay", "Seeds", "Earth-mound", "Potter's wheel"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const tavalasMeta: DeityMeta = {
  slug: "tavalas",
  name: { en: "Tavalas / Tavalus", lt: "Tavalas / Tavalus", lv: "Tavalas" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of Strength — Protector of Boundaries",
    lt: "Jėgos dievas — ribų gynėjas",
    lv: "Spēka dievs — robežu sargs",
  },
  summary: {
    en: "Tavalas is the Lithuanian god of physical and spiritual strength, recorded by Łasicki as presiding over fortitude, possibly a variant of the divine smith Teliavelis and guardian of warriors and community boundaries.",
    lt: "Tavalas yra lietuvių fizinės ir dvasinės jėgos dievas, paminėtas Lasickio, vadovaujantis tvirtybei, ir galbūt susijęs su dangiškuoju kalviu Teliaveliu.",
    lv: "Tavalas ir lietuviešu fiziskā un garīgā spēka dievs; Łasicki viņu minēja kā stipruma sargātāju, iespējams, dangokalvja Teliaveļa variants.",
  },
  attributes: ["Strength", "Fortitude", "Boundaries", "Defense", "Craft power"],
  symbols: ["Iron bar", "Hammer", "Boundary stone", "Shield"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Beresnevičius, Gintaras: Baltų religinės reformos (1995)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const gulbisMeta: DeityMeta = {
  slug: "gulbis",
  name: { en: "Gulbis / Gulbi", lt: "Gulbis / Gulbi", lv: "Gulbis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The Guardian Swan — Personal Protector of Souls",
    lt: "Sarginis gulbė — asmeninis sielų sargas",
    lv: "Sargājošais gulbis — personīgais dvēseļu aizbildnis",
  },
  summary: {
    en: "Gulbis is the Baltic guardian swan spirit, recorded by Łasicki as a personal protector or 'good genius' accompanying each person through life, embodying purity, solar symbolism, and the divine favor of Laima.",
    lt: "Gulbis yra baltų sarginis gulbės dvasia, Lasickio užfiksuota kaip asmeninis sargas ar 'gerasis genijus', lydintis kiekvieną asmenį per gyvenimą ir įkūnijantis tyrumą bei Laimės malonę.",
    lv: "Gulbis ir baltu sargojošā gulbja gars, kuru Łasicki reģistrēja kā personīgo sargātāju jeb 'labo ģēniju', kas pavada katru cilvēku viņa dzīvē, iemiesojot tīrību un Laimas žēlastību.",
  },
  attributes: ["Personal protection", "Swan symbolism", "Solar purity", "Spiritual guidance", "Fate"],
  symbols: ["Swan", "White feather", "Pure water", "Solar disc"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Samogitians, Latvians", lt: "Lietuviai, žemaičiai, latviai", lv: "Lietuvieši, žemaitieši, latvieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const ugniazaltisMeta: DeityMeta = {
  slug: "ugniazaltis",
  name: { en: "Ugniažaltis / Ugninis Žaltys", lt: "Ugniažaltis", lv: "Ugunīgais Zalktis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The Fiery Snake — Guardian of the Sacred Embers",
    lt: "Ugninis žaltys — šventosios žarijų sargybinis",
    lv: "Ugunīgais zalktis — svēto ogļu sargs",
  },
  summary: {
    en: "Ugniažaltis is the mythic fire-snake of Baltic tradition, a golden-scaled serpent bridging the chthonic realm of the snake with the celestial power of fire, acting as herald of Perkūnas and guardian of the sacred hearth.",
    lt: "Ugniažaltis yra mitinis ugninis baltų tradicijos žaltys, jungiантis chtoniškąją gyvatės sferą su dangiškąja ugnies galia ir tarnaujantis kaip Perkūno pasiuntinys.",
    lv: "Ugniažaltis ir mītiskā ugunīgā baltu tradīcijas čūska, kas savieno chtonisko čūskas sfēru ar uguns debesu spēku un darbojas kā Pērkona sūtnis.",
  },
  attributes: ["Fire", "Sacred snake", "Hearth guardian", "Lightning herald", "Liminal power"],
  symbols: ["Flaming snake", "Golden scales", "Hearth embers", "Coiled serpent"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic to 19th-century folklore", lt: "Protobaltiška tradicija iki XIX a. tautosakos", lv: "Proto-baltu tradīcija līdz 19. gs. folklorai" },
  references: [
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Gyvūnai ir augalai lietuvių mitologijoje (1983)",
  ],
};

export const ausklautsMeta: DeityMeta = {
  slug: "ausklauts",
  name: { en: "Ausklauts / Ausklaitis", lt: "Ausklauts / Ausklaitis", lv: "Ausklauts" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The Divine Listener — Guardian of Oaths and Truth",
    lt: "Dieviškasis klausytojas — priesaikų ir tiesos sargas",
    lv: "Dievišķais klausītājs — zvērestu un patiesības sargs",
  },
  summary: {
    en: "Ausklauts is the Samogitian spirit of divine listening, recorded by Łasicki as the deity invoked 'for hearing' (pro auditu), ensuring that human words and oaths are witnessed by higher powers and that justice is upheld.",
    lt: "Ausklauts yra žemaičių dieviškojo klausymo dvasia, Lasickio užfiksuota kaip dievybė, šaukiama 'klausimuisi' (pro auditu), užtikrinanti, kad dievai liudija žmonių priesaikas ir žodžius.",
    lv: "Ausklauts ir žemaitiešu dievišķās klausīšanas gars, kuru Łasicki reģistrēja kā dievību, kas aicināta 'dzirdēšanai' (pro auditu), nodrošinot, ka dievišķais pasaule uzrauga cilvēku zvērestus.",
  },
  attributes: ["Listening", "Justice", "Oaths", "Truth", "Divine witness"],
  symbols: ["Ear", "Scroll", "Whispering wind", "Shell"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Greimas, A. J.: Of Gods and Men (1992)",
  ],
};

export const bentisMeta: DeityMeta = {
  slug: "bentis",
  name: { en: "Bentis / Derintojas", lt: "Bentis / Derintojas", lv: "Bentis / Derintojas" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Guardians of Social Harmony — The Peacemakers of Road and Community",
    lt: "Socialinės harmonijos sargai — kelio ir bendruomenės taikos kūrėjai",
    lv: "Sociālās harmonijas sargi — ceļa un kopienas miera veidotāji",
  },
  summary: {
    en: "Bentis and Derintojas are paired Lithuanian social deities from Łasicki's list: Bentis joins traveling companions on the road, while Derintojas (the Reconciler) peacefully resolves community disputes.",
    lt: "Bentis ir Derintojas yra suporuotos lietuvių socialinės dievybės: Bentis sujungia kelio draugus, o Derintojas (Taikos kūrėjas) sprendžia bendruomenės ginčus.",
    lv: "Bentis un Derintojas ir pārotās lietuviešu sociālās dievības: Bentis savieno ceļabiedrus, bet Derintojas (Samierinātājs) miermīlīgi risina kopienas strīdus.",
  },
  attributes: ["Social harmony", "Travel", "Peacemaking", "Community bonds", "Reconciliation"],
  symbols: ["Handshake", "Shared bread", "Open path", "Balance scale"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const lietuvonisMeta: DeityMeta = {
  slug: "lietuvonis",
  name: { en: "Lietuvonis / Lētuvanis", lt: "Lietuvonis", lv: "Lietuvonis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The National Warrior — Medieval Lithuania's Patron of Battle",
    lt: "Tautos karys — viduramžių Lietuvos mūšio globėjas",
    lv: "Nacionālais karavīrs — viduslaiku Lietuvas kaujas aizbildnis",
  },
  summary: {
    en: "Lietuvonis is the controversial national deity recorded by Długosz in the 15th century as the Lithuanian equivalent of Mars, representing the warrior spirit and divine patron of the Lithuanian people in battle.",
    lt: "Lietuvonis yra prieštaringa tautinė dievybė, Dlugošo XV a. užfiksuota kaip lietuviškas Marso atitikmuo, personifikuojantis lietuvių tautos kariaus dvasią ir dangišką gynėją mūšiuose.",
    lv: "Lietuvonis ir pretrunīgā tautiskā dievība, kuru Długosz 15. gs. reģistrēja kā lietuviešu Marsa ekvivalentu, personificējot lietuviešu tautas kaujas garu un dievišķo aizbildni.",
  },
  attributes: ["War", "National protection", "Battle strength", "Tribal identity", "Medieval warfare"],
  symbols: ["Shield", "Spear", "Iron Wolf", "Banner"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanian", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "15th Century (Medieval Records)", lt: "XV amžius (viduramžių šaltiniai)", lv: "15. gadsimts (viduslaiku avoti)" },
  references: [
    "Długosz, Jan: Annales seu Cronicae incliti Regni Poloniae (1455)",
    "VLE: Lietuvonis (vle.lt)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const kalvelisMeta: DeityMeta = {
  slug: "kalvelis",
  name: { en: "Kalvelis / Kalvis", lt: "Kalvelis / Kalvis", lv: "Debesu kalējs" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Celestial Smith — Forger of the Sun and Divine Weapons",
    lt: "Dangiškasis kalvis — Saulės ir dieviškų ginklų nukalėjas",
    lv: "Debesu kalējs — Saules un dievišķo ieroču kalējs",
  },
  summary: {
    en: "Kalvelis (The Little Smith) is the celestial smith of Baltic mythology, identified with Teliavelis, who forged the Sun and cast it into the heavens, and who crafts the divine weapons of Perkūnas to maintain cosmic order.",
    lt: "Kalvelis yra baltų mitologijos dangiškasis kalvis, tapatinamas su Teliaveliu, nukaliusiu Saulę ir įmetusiu ją į dangų, bei kalantiniu Perkūno dieviškus ginklus kosminiams tikslams.",
    lv: "Kalvelis (Mazais kalējs) ir baltu mitoloģijas debesu kalējs, identificēts ar Teliaveli, kurš nokala Sauli un meta to debesīs un kal Pērkona dievišķos ieročus kosmiskās kārtības uzturēšanai.",
  },
  attributes: ["Celestial smithing", "Sun creation", "Divine weapons", "Cosmic order", "Fire and metal"],
  symbols: ["Anvil", "Hammer", "Golden Sun", "Sparks (Stars)"],
  locations: [],
  region: { en: "Lithuania, Latvia, Prussia", lt: "Lietuva, Latvija, Prūsija", lv: "Lietuva, Latvija, Prūsija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Proto-Baltic origin", lt: "Protobaltiška kilmė", lv: "Proto-baltu izcelsme" },
  references: [
    "Hypatian Chronicle: Entry on Teliavelis (1261)",
    "Dundulienė, Pranė: Senovės lietuvių mitologija ir religija (1990)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
  ],
};

// ─── Batch 12 ─────────────────────────────────────────────────────────────────

export const kirkisMeta: DeityMeta = {
  slug: "kirkis",
  name: { en: "Kirkis / Kirki", lt: "Kirkis / Kirki", lv: "Kirkis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Harvest Guardian — Lithuania's Ceres",
    lt: "Derliaus globėjas — Lietuvos Cerera",
    lv: "Ražas aizbildnis — Lietuvas Cerēra",
  },
  summary: {
    en: "Kirkis is the Lithuanian harvest deity recorded by Długosz in the 15th century as the analogue of Roman Ceres, presiding over the abundance of grain and the fertility of the soil, possibly a localized aspect of Žemyna or a folk confusion with Kirnis.",
    lt: "Kirkis yra lietuvių derliaus dievybė, paminėta Dlugošo XV a. kaip romėnų Cereros analogas, globojantis grūdų gausą ir žemės derlingumą.",
    lv: "Kirkis ir lietuviešu ražas dievība, kuru Długosz 15. gs. reģistrēja kā romiešu Cerēras analogu, pārraugot graudu daudzumu un zemes auglību.",
  },
  attributes: ["Harvest", "Grain abundance", "Agriculture", "Food supply", "Soil fertility"],
  symbols: ["Wheat sheaf", "Bread loaf", "Sickle", "Plowing horn"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanian", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "15th Century (Medieval Records)", lt: "XV amžius (viduramžių šaltiniai)", lv: "15. gadsimts (viduslaiku avoti)" },
  references: [
    "Długosz, Jan: Annales seu Cronicae incliti Regni Poloniae (1455)",
    "VLE: Kirkis (vle.lt)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const piziusMeta: DeityMeta = {
  slug: "pizius",
  name: { en: "Pizius / Pizus", lt: "Pizius / Pizus", lv: "Pizijs" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Spirit of Marital Fertility — The Wedding Night Guardian",
    lt: "Santuokinės vaisingumo dvasia — vestuvių nakties globėjas",
    lv: "Laulību auglības gars — kāzu nakts aizbildnis",
  },
  summary: {
    en: "Pizius is the controversial Samogitian spirit of sexual fertility recorded by Łasicki in 1582, invoked by youth before wedding nights; modern scholars debate whether he was a genuine deity or a pseudoteonym derived from a vulgar term.",
    lt: "Pizius yra prieštaringa žemaičių seksualinio vaisingumo dvasia, Lasickio 1582 m. užfiksuota kaip jaunuomenės šaukiama prieš vestuvių naktį; mokslininkai diskutuoja dėl jo autentiškumo.",
    lv: "Pizijs ir strīdīgais žemaitiešu seksuālās auglības gars, ko Łasickis 1582. gadā reģistrēja kā jaunatnes piesauktu pirms kāzu naktīm; pētnieki diskutē par viņa autentiskumu.",
  },
  attributes: ["Fertility", "Marriage", "Youth transition", "Sexual rites", "Archaic custom"],
  symbols: ["Bed-cloth", "Grain", "Wedding wreath"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De diis Samagitarum caeterisque Sarmatum (1582)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai (1996)",
    "VLE: Pizius (vle.lt)",
  ],
};

export const devintosMeta: DeityMeta = {
  slug: "devintos",
  name: { en: "Devintos / Devintas", lt: "Devintos / Devintas", lv: "Deviņi" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The Sacred Nine — Spirit of Ritual Multiplication",
    lt: "Šventasis devyni — apeigų dauginimo dvasia",
    lv: "Svētie deviņi — rituālas pavairošanas gars",
  },
  summary: {
    en: "Devintos is the personified power of the sacred number nine in Baltic ritual, recorded by Malecki in the 16th century, invoked to multiply the harvest and finalize ritual processes using the nine-fold pattern central to Baltic magical practice.",
    lt: "Devintos yra šventojo skaičiaus devyni įasmeninta galia baltų ritualų, paminėta Maleckio XVI a., šaukiama padauginti derlių ir užbaigti ritualinius procesus.",
    lv: "Devintos ir svētā skaita deviņi personificētā spēks baltu rituālos, kuru 16. gs. reģistrēja Malecki, piesaukts ražas pavairošanai un rituālu procesos.",
  },
  attributes: ["Sacred number", "Ritual multiplication", "Completion", "Agricultural increase", "Magic"],
  symbols: ["Nine-pointed star", "Nine herbs (devynžolės)", "Circle of nine"],
  locations: [],
  region: { en: "Lithuania, Prussia", lt: "Lietuva, Prūsija", lv: "Lietuva, Prūsija" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaitieši, lietuvieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Malecki, Jan: Libellus de sacrificiis et idololatria (1563)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const gulbiMeta: DeityMeta = {
  slug: "gulbi",
  name: { en: "Gulbi / Fire-Swan", lt: "Gulbi", lv: "Gulbi" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Fire-Swan — Lithuania's Vulcan (Długosz Mapping)",
    lt: "Ugninis gulbė — Lietuvos Vulkanas (Dlugošo analogija)",
    lv: "Uguns gulbis — Lietuvas Vulkāns (Dlugoša kartējums)",
  },
  summary: {
    en: "Gulbi is the controversial figure recorded by Długosz in 1455 as the Lithuanian equivalent of Vulcan, possibly a smith-fire deity or a misidentification; modern scholars note the swan connection makes direct identification with Vulcan questionable.",
    lt: "Gulbi yra prieštaringa figūra, Dlugošo 1455 m. užfiksuota kaip lietuviškas Vulkano atitikmuo, galbūt kalvio-ugnies dievybė ar klaidingas tapatinimas.",
    lv: "Gulbi ir pretrunīgā figūra, kuru Długosz 1455. gadā reģistrēja kā lietuviešu Vulkāna ekvivalentu, iespējams, kalēja-uguns dievība vai nepareiza identifikācija.",
  },
  attributes: ["Fire (debated)", "Smithing", "Swan symbolism", "Purity", "Medieval record"],
  symbols: ["White swan", "Firebrand", "Anvil (Długosz mapping)"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanian", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "15th Century (Medieval Records)", lt: "XV amžius (viduramžių šaltiniai)", lv: "15. gadsimts (viduslaiku avoti)" },
  references: [
    "Długosz, Jan: Annales seu Cronicae incliti Regni Poloniae (1455)",
    "VLE: Gulbi (vle.lt)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const vaivoraMeta: DeityMeta = {
  slug: "vaivora",
  name: { en: "Vaivora / Vaivorykštė", lt: "Vaivora / Vaivorykštė", lv: "Varavīksne" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Rainbow Maiden — Belt of Laima and Bridge Between Worlds",
    lt: "Vaivorykštės mergelė — Laimės juosta ir tiltas tarp pasaulių",
    lv: "Varavīksnes meita — Laimas josta un tilts starp pasaulēm",
  },
  summary: {
    en: "Vaivora is the personified rainbow of Baltic mythology, known as 'Laima's Belt' (Laimos juosta), appearing after storms to signal restored cosmic order and serving as the colorful bridge through which divine blessings travel from the heavens to earth.",
    lt: "Vaivora yra baltų mitologijos personifikuota vaivorykštė, žinoma kaip 'Laimės juosta', kuri po audrų signalizuoja atkurtą kosmosą tvarkos ir yra spalvingas tiltas dieviškoms palaimoms.",
    lv: "Vaivora ir baltu mitoloģijas personificētā varavīksne, pazīstama kā 'Laimas josta', kas pēc vētrām signalizē atjaunotu kosmisko kārtību un kalpo kā krāsainais tilts dievišķajiem svētījumiem.",
  },
  attributes: ["Rainbow", "Celestial bridge", "Fate", "Post-storm blessing", "Divine communication"],
  symbols: ["Rainbow", "Girdle/Belt", "Seven-colored cloth", "Weaving loom", "Stork"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to present folklore", lt: "Viduramžiai iki dabarties tautosakos", lv: "Viduslaiki līdz mūsdienu folklorai" },
  references: [
    "Basanavičius, Jonas: Lietuviškos pasakos (1898–1902)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const perkunasTikrasMeta: DeityMeta = {
  slug: "perkunas-tikras",
  name: { en: "Perkūnas Tikras / True Perkūnas", lt: "Perkūnas Tikras / Tikrasis Perkūnas", lv: "Īstais Pērkons" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The True Thunderer — Supreme Epithet of the Thunder God",
    lt: "Tikrasis Griaustinis — Aukščiausias griaustinio dievo epitetas",
    lv: "Īstais Pērkons — Pērkona dieva augstākais epitets",
  },
  summary: {
    en: "Perkūnas Tikras ('True Perkūnas') is the supreme archaic epithet for the Baltic Thunder God, recorded by Malecki in the 16th century, distinguishing the sovereign cosmic judge from lesser atmospheric spirits and emphasizing his absolute authority over justice and storm.",
    lt: "Perkūnas Tikras yra aukščiausias archajiškasis Baltų Griaustinio Dievo epitetas, paminėtas Maleckio XVI a., skiriantis visatos suverenų teisėją nuo mažesnių atmosferos dvasių.",
    lv: "Perkūnas Tikras ('Īstais Pērkons') ir baltu Pērkona dieva augstākais arhajiskais epitets, ko 16. gs. reģistrēja Malecki, atšķirot suverēno kosmisko tiesneša no mazākiem atmosfēras gariem.",
  },
  attributes: ["Supreme thunder", "Divine justice", "Cosmic sovereignty", "Archaic epithet", "Storm mastery"],
  symbols: ["Great golden axe", "Flame-wheel", "Highest oak"],
  locations: [],
  region: { en: "Lithuania, Prussia", lt: "Lietuva, Prūsija", lv: "Lietuva, Prūsija" },
  tribe: { en: "Pan-Baltic", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Malecki, Jan: Libellus de sacrificiis et idololatria (1563)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const zemininkasMeta: DeityMeta = {
  slug: "zemininkas",
  name: { en: "Žemininkas / Ziemiennik", lt: "Žemininkas / Žiemienikas", lv: "Zemes sargs" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Divine Steward of the Soil — Guardian of Farmland and Ancestors",
    lt: "Dieviškasis žemės valdovas — žemdirbystės ir protėvių sargas",
    lv: "Dievišķais zemes apsaimniekotājs — aramzemes un senču sargs",
  },
  summary: {
    en: "Žemininkas is the masculine earth deity of Lithuanian tradition, recorded by Łasicki as receiving first-harvest offerings, representing each farmer's personal bond with their specific plot of land and serving as mediator between the living and the ancestral dead in the soil.",
    lt: "Žemininkas yra vyriškasis žemės dievas lietuvių tradicijoje, paminėtas Lasickio kaip pirmo derliaus aukų gavėjas, atstovaujantis kiekvieno ūkininko asmeniniam ryšiui su žeme.",
    lv: "Žemininkas ir lietuviešu tradīcijas vīrišķais zemes dievs, kuru Łasicki reģistrēja pirmā ražas upuru saņēmēju, pārstāvot katra zemnieka personīgo saikni ar savu zemi.",
  },
  attributes: ["Earth stewardship", "Agricultural fertility", "Ancestor bonds", "First-harvest", "Sacred snake"],
  symbols: ["Snake (Žaltys)", "Dark soil", "Seed", "First-harvest loaf", "Stone"],
  locations: [],
  region: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const prigirstisMeta: DeityMeta = {
  slug: "prigirstis",
  name: { en: "Prigirstis", lt: "Prigirstis", lv: "Prigirstis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The One Who Makes Heard — Spirit of Answered Prayer",
    lt: "Išgirdimo dvasia — atsakytų maldų sargas",
    lv: "Tas, kurš paklausa — atbildēto lūgsnu gars",
  },
  summary: {
    en: "Prigirstis ('he who makes one hear') is the Samogitian spirit who ensures prayers are heard and received by the divine, recorded by Łasicki as complementing Ausklauts; while Ausklauts listens for truth, Prigirstis actively facilitates the communication channel between humans and gods.",
    lt: "Prigirstis ('tas, kuris leidžia girdėti') yra žemaičių dvasia, užtikrinanti, kad maldos yra išgirstos dieviškojo, Lasickio užfiksuota kaip Ausklauto partneris ir aktyvi ryšio tarp žmonių ir dievų priemonė.",
    lv: "Prigirstis ('tas, kurš liek dzirdēt') ir žemaitiešu gars, kas nodrošina, ka lūgsnas ir dzirdamas un saņemas dievišķajās sfērās, Łasickis to reģistrēja kā aktīvu komunikācijas kanālu starp cilvēkiem un dieviem.",
  },
  attributes: ["Answered prayer", "Divine communication", "Petition", "Ritual efficacy", "Hearing"],
  symbols: ["Voice", "Upturned ear", "Prayer smoke", "Speaking hands"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const salausMeta: DeityMeta = {
  slug: "salaus",
  name: { en: "Salaus / Salavas", lt: "Salaus / Salavas", lv: "Salaus" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Spirit of Sweetness — Guardian of Honey-Mead and Sacred Drinks",
    lt: "Saldumo dvasia — medaus ir šventų gėrimų globėjas",
    lv: "Salduma gars — medus dzēriena un svēto dzērienu aizbildnis",
  },
  summary: {
    en: "Salaus ('for sweetness / dulcamine') is the Samogitian spirit of sweetness and sacred drinks, recorded by Łasicki as invoked for the quality of honey-mead, representing the divine blessing that transforms raw honey into the sacred drink uniting community in feasts and ritual.",
    lt: "Salaus ('saldumui / dulcamine') yra žemaičių saldumo ir šventų gėrimų dvasia, Lasickio užfiksuota kaip šaukiama medaus kokybei, atstovaujanti dieviškam palaiminimui, kuris transformuoja medų į šventinį gėrimą.",
    lv: "Salaus ('saldumam / dulcamine') ir žemaitiešu salduma un svēto dzērienu gars, ko Łasickis reģistrēja kā piesauktu medus dzēriena kvalitātei, pārstāvot dievišķo svētību, kas pārveido medu par svēto dzērienu.",
  },
  attributes: ["Sweetness", "Honey-mead", "Sacred drinks", "Feasts", "Ritual bonding"],
  symbols: ["Honey comb", "Mead cup", "Bee", "Sweet herb"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaitieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const srutisMeta: DeityMeta = {
  slug: "srutis",
  name: { en: "Srutis", lt: "Srutis", lv: "Srutis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Spirit of the River Current",
    lt: "Upės tėkmės dvasia",
    lv: "Upes straumes gars",
  },
  summary: {
    en: "Srutis is the Samogitian spirit of the river current, recorded by Łasicki as 'Srutim pro flumine', distinct from Upinis the river-lord; he embodies the living force of flowing water and is propitiated by those crossing rivers or using mills.",
    lt: "Srutis yra žemaičių upės tėkmės dvasia, Lasickio užfiksuota kaip 'Srutim pro flumine', atskiriama nuo Upinio — upių valdytojo; jis įasmenina gyvenančią tekančio vandens jėgą.",
    lv: "Srutis ir žemaitiešu upes straumes gars, ko Łasickis reģistrēja kā 'Srutim pro flumine', atšķirams no Upinis — upes saimnieka; viņš iemieso dzīvo tekošā ūdens spēku.",
  },
  attributes: ["River current", "Water force", "Mill blessing", "Safe crossing"],
  symbols: ["River foam", "Mill wheel", "Water current", "Water reed"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaitieši, lietuvieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const skalsaMeta: DeityMeta = {
  slug: "skalsa",
  name: { en: "Skalsa", lt: "Skalsa", lv: "Skalsa" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Spirit of Household Abundance",
    lt: "Namų gausos dvasia",
    lv: "Mājas pārticības gars",
  },
  summary: {
    en: "Skalsa is the Samogitian spirit of domestic abundance, recorded by Łasicki as 'Skalsam pro abundantia domestica'; she presides over the fullness of the larder, the wellbeing of the household, and the generosity of the harvest brought indoors.",
    lt: "Skalsa yra žemaičių namų gausos dvasia, Lasickio užfiksuota kaip 'Skalsam pro abundantia domestica'; ji valdo spintos pilnumą ir namų gerovę.",
    lv: "Skalsa ir žemaitiešu mājas pārticības gars, ko Łasickis reģistrēja kā 'Skalsam pro abundantia domestica'; viņa vada mājas pieliekamā pilnumu un labklājību.",
  },
  attributes: ["Household abundance", "Larder", "Domestic prosperity", "Wellbeing"],
  symbols: ["Full granary", "Bread loaf", "Overflowing bowl", "Harvest wreath"],
  locations: [],
  region: { en: "Samogitia, Lithuania", lt: "Žemaitija, Lietuva", lv: "Žemaitija, Lietuva" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaitieši, lietuvieši" },
  period: { en: "16th Century (Recorded)", lt: "XVI amžius (užfiksuota)", lv: "16. gadsimts (reģistrēts)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const dausosMeta: DeityMeta = {
  slug: "dausos",
  name: { en: "Dausos", lt: "Dausos", lv: "Dausos / Aizsaule" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Luminous Afterlife — Mountain of Souls",
    lt: "Šviesioji anapasaulis — sielų kalnas",
    lv: "Gaišā aizsaule — dvēseļu kalns",
  },
  summary: {
    en: "Dausos is the Lithuanian personification of the afterlife paradise — a luminous realm at the top of a glass mountain where the spirits of the dead (vėlės) find eternal rest, representing the Baltic belief in the soul's journey to a peaceful heaven guarded by benevolent ancestors.",
    lt: "Dausos yra lietuviška anapasaulio personifikacija — šviesi karalystė ant stiklo kalno viršūnės, kur mirusiųjų vėlės atranda amžiną ramybę, atstovaujanti baltų tikėjimui sielos kelionei į taikią dangiškąją buveinę.",
    lv: "Dausos ir lietuviskā aizsaules personifikācija — gaismas valstība uz stikla kalna virsotnes, kur mirušo dvēseles atrod mūžīgu mieru, pārstāvot baltu ticību dvēseles ceļojumam uz mierīgu debesu māJvietu.",
  },
  attributes: ["Afterlife", "Soul paradise", "Glass mountain", "Ancestor realm", "Eternal spring"],
  symbols: ["Glass mountain", "Silver tree", "White light", "Lynx claws", "Hill"],
  locations: [],
  region: { en: "Pan-Baltic (Lithuania, Latvia)", lt: "Visos Baltijos šalys", lv: "Visas Baltijas zemes" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic (Medieval attestation)", lt: "Protobaltų laikotarpis (liudyta nuo viduramžių)", lv: "Protobaltu laikmetis (liecināts no viduslaiku avotiem)" },
  references: [
    "Beresnevičius, Gintaras: Dausos: pomirtinio gyvenimo samprata senovės lietuvių pasaulėžiūroje (1990)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const laimeAbstractMeta: DeityMeta = {
  slug: "laime-abstract",
  name: { en: "Laimė (Abstract)", lt: "Laimė (abstrakti)", lv: "Laime (abstrakta)" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Personified Fortune — The Luck That Must Be Earned",
    lt: "Personifikuota laimė — sėkmė, kurią reikia pelnyti",
    lv: "Personificētā laime — veiksme, kas jāpelna",
  },
  summary: {
    en: "Laimė (abstract) is the personified principle of earned luck and prosperity, distinct from the goddess Laima who decides fate at birth; as analyzed by Greimas, Laimė represents dynamic fortune that rewards diligence and can be found, lost, or shared — a golden bird that visits the deserving.",
    lt: "Laimė (abstrakti) yra personifikuotas laimės ir klestėjimo principas, skirtingas nuo deivės Laimos; pagal Greimo analizę, Laimė atstovauja dinaminei sėkmei, kuri apdovanoja stropumą ir gali būti rasta, prarasta ar pasidalinta.",
    lv: "Laime (abstrakta) ir personificētais nopelnītās veiksmes princips, atšķirams no dievietes Laimas; pēc Greima analīzes, Laime ir dinamiska veiksme, kas apbalvo čaklumu un var tikt atrasta, zaudēta vai dalīta.",
  },
  attributes: ["Fortune", "Earned luck", "Prosperity", "Diligence reward", "Dynamic fate"],
  symbols: ["Golden bird", "Cornucopia", "Weaving loom", "Bright maiden"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to present folklore", lt: "Viduramžiai iki dabarties tautosakos", lv: "Viduslaiki līdz mūsdienu folklorai" },
  references: [
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const negaliMeta: DeityMeta = {
  slug: "negali",
  name: { en: "Negali", lt: "Negali", lv: "Negali" },
  domain: "God",
  culture: "LT",
  title: {
    en: "God of Impossibility — The Cosmic Barrier",
    lt: "Negalėjimo dievas — kosminis barjeras",
    lv: "Neiespējamības dievs — kosmiskais šķērslis",
  },
  summary: {
    en: "Negali ('Cannot') is the Lithuanian personification of impossibility and cosmic limits, recorded by Długosz in the 15th century as a divine force enforcing the boundaries of fate and human capability — the sacred 'No' that maintains cosmic order and prevents hubris.",
    lt: "Negali yra lietuviška negalėjimo ir kosminių ribų personifikacija, Dlugošo užfiksuota XV amžiuje, kaip dieviška jėga, vykdanti likimo ir žmogaus galimybių ribas.",
    lv: "Negali ir lietuviskā neiespējamības un kosmisko robežu personifikācija, ko Długosz reģistrēja 15. gadsimtā kā dievišķu spēku, kas izpilda likteņa un cilvēka spēju robežas.",
  },
  attributes: ["Impossibility", "Cosmic limit", "Fate boundary", "Divine order", "Acceptance"],
  symbols: ["Locked gate", "Stone wall", "Unreachable peak", "Closed eye"],
  locations: [],
  region: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "15th Century (Recorded)", lt: "XV amžius (užfiksuota)", lv: "15. gadsimts (reģistrēts)" },
  references: [
    "Długosz, Jan: Annales seu cronicae incliti Regni Poloniae (1455–1480)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const dievaitisMeta: DeityMeta = {
  slug: "dievaitis",
  name: { en: "Dievaitis / Dieviņš", lt: "Dievaitis", lv: "Dieviņš" },
  domain: "God",
  culture: "LT",
  title: {
    en: "The Little God — Approachable Face of the Divine",
    lt: "Mažasis dievas — artima dievybės išraiška",
    lv: "Mazais dievs — pieejamā dievišķā seja",
  },
  summary: {
    en: "Dievaitis / Dieviņš is the diminutive, approachable aspect of the supreme sky god Dievas — a young rider, plowman, or blacksmith who visits human fields to bless them, representing the intimate divine presence close to everyday agricultural life and invoked in folk prayers.",
    lt: "Dievaitis yra mažasis, artimas aukščiausiojo dangaus dievo Dievaso aspektas — jaunas raitelis, artojas ar kalvis, aplankantis žmonių laukus juos palaiminti, atstovaujantis artimam dieviškam buvimui kasdienio darbo metu.",
    lv: "Dieviņš ir mazais, pieejamais augstākā debesu dieva Dievas aspekts — jauns jātnieks, arājs vai kalējs, kas apmeklē cilvēku laukus tos svētīt, pārstāvot tuvo dievišķo klātbūtni ikdienas darba laikā.",
  },
  attributes: ["Approachable divine", "Field blessing", "Young rider", "Folk prayer", "Agricultural help"],
  symbols: ["White horse", "Plow", "Sunbeam", "Stork"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to present folklore", lt: "Viduramžiai iki dabarties tautosakos", lv: "Viduslaiki līdz mūsdienu folklorai" },
  references: [
    "Greimas, Algirdas Julius: Of Gods and Men (1992)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const birdGoddessMeta: DeityMeta = {
  slug: "bird-goddess",
  name: { en: "Bird Goddess", lt: "Paukščių deivė", lv: "Putnu dieviete" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Neolithic Bird Goddess — Celestial Messenger of Life and Fate",
    lt: "Neolito paukščių deivė — dangaus gyvybės ir likimo pasiuntinė",
    lv: "Neolīta putnu dieviete — debesu dzīvības un likteņa vēstnese",
  },
  summary: {
    en: "The Bird Goddess (Paukščių deivė) is an ancient pre-Indo-European deity reconstructed by Marija Gimbutas from Neolithic artifacts, serving as celestial messenger between the living and dead, guardian of migrations and hatching, whose essence survived in the Baltic cuckoo-fate motif and bird symbolism in folk art.",
    lt: "Paukščių deivė yra senovinė priešindoeuropietiška dievybė, Marijos Gimbutienės rekonstruota iš neolito artefaktų, tarnaujanti kaip dangaus pasiuntinė tarp gyvųjų ir mirusių, migracijų globėja.",
    lv: "Putnu dieviete ir sena pirmsindoeiropiešu dievība, ko Marija Gimbutas rekonstruēja no neolīta artefaktiem, kalpojot kā debesu vēstnese starp dzīvajiem un mirušajiem, migrāciju aizgādne.",
  },
  attributes: ["Celestial messenger", "Life and death", "Migration", "Fate prophecy", "Spring arrival"],
  symbols: ["Wing", "Feather", "Egg", "Cuckoo", "Sky-path"],
  locations: [],
  region: { en: "Pan-Baltic (Lithuania, Latvia)", lt: "Visos Baltijos šalys", lv: "Visas Baltijas zemes" },
  tribe: { en: "Pre-Indo-European / Proto-Baltic", lt: "Priešindoeuropiečiai / protobaltai", lv: "Pirmsindoeiropiešu / protobalti" },
  period: { en: "Neolithic (Reconstructed)", lt: "Neolitas (rekonstruota)", lv: "Neolīts (rekonstruēts)" },
  references: [
    "Gimbutas, Marija: The Living Goddesses (1999)",
    "Dundulienė, Pranė: Paukščiai lietuvių liaudies mene ir mitologijoje (1982)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const snakeGoddessMeta: DeityMeta = {
  slug: "snake-goddess",
  name: { en: "Snake Goddess", lt: "Gyvatės deivė", lv: "Čūskas dieviete" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Neolithic Snake Goddess — Ancestor of the Sacred Grass Snake",
    lt: "Neolito gyvatės deivė — šventojo žalčio protėvė",
    lv: "Neolīta čūskas dieviete — svētās zaļčūskas priekštece",
  },
  summary: {
    en: "The Snake Goddess (Gyvatės deivė) is the primordial Old European goddess of life, death, and regeneration identified by Marija Gimbutas, whose essence survived in the Baltic sacred grass-snake (Žaltys) cult as a symbol of household immortality, healing, and perpetual renewal.",
    lt: "Gyvatės deivė yra pirmapradė Senosios Europos gyvybės, mirties ir atsinaujinimo deivė, išskirta Marijos Gimbutienės, kurios esmė išliko baltų šventojo žalčio (Žaltys) kulte kaip namų nemirtingumo simbolis.",
    lv: "Čūskas dieviete ir pirmatnējā Senās Eiropas dzīvības, nāves un atjaunotnes dieviete, ko identificēja Marija Gimbutas, kuras būtība saglabājās baltu svētās zaļčūskas (Žaltys) kultā kā mājas nemirstības simbols.",
  },
  attributes: ["Regeneration", "Life-force", "Healing", "Earth power", "Perpetual renewal"],
  symbols: ["Spiral", "Snake coil", "Shedding skin", "Eye-goddess motif"],
  locations: [],
  region: { en: "Old Europe / Baltic (Lithuania, Latvia)", lt: "Senoji Europa / Baltijos šalys", lv: "Senā Eiropa / Baltijas zemes" },
  tribe: { en: "Pre-Indo-European / Proto-Baltic", lt: "Priešindoeuropiečiai / protobaltai", lv: "Pirmsindoeiropiešu / protobalti" },
  period: { en: "Neolithic to Iron Age (Reconstructed)", lt: "Neolitas iki geležies amžiaus (rekonstruota)", lv: "Neolīts līdz dzelzs laikmetam (rekonstruēts)" },
  references: [
    "Gimbutas, Marija: The Goddesses and Gods of Old Europe (1974)",
    "Gimbutas, Marija: The Language of the Goddess (1989)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const whiteLadyMeta: DeityMeta = {
  slug: "white-lady",
  name: { en: "White Lady", lt: "Baltoji Ponia", lv: "Baltā dāma" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The White Lady — Spectral Psychopomp and Death Omen",
    lt: "Baltoji Ponia — vaiduokliškas mirties pranašas",
    lv: "Baltā dāma — spēkainais nāves vēstnesis",
  },
  summary: {
    en: "The White Lady (Baltoji Ponia) is a spectral figure in Baltic folklore, appearing dressed in white at ancient mounds and crossroads as an omen of death or major change, representing a folkloric memory of Laima or Giltinė in their most solemn transitional aspect.",
    lt: "Baltoji Ponia yra vaiduokliškas personažas baltų tautosakoje, pasirodantis piliakalniuose ir kryžkelėse baltais drabužiais kaip mirties ar permainos ženklas, atstovaujantis Laimos ar Giltinės folkloriniam atspindžiui.",
    lv: "Baltā dāma ir spēkains tēls baltu folklorā, kas parādās baltās drēbēs pie senoviskajiem kalniem un ceļu krustojumiem kā nāves vai pārmaiņu zīme, pārstāvot Laimas vai Giltinės folklorisko atspulgu.",
  },
  attributes: ["Death omen", "Psychopomp", "Ancient mound", "Transition", "Spectral guardian"],
  symbols: ["White linen", "Mist", "Ancient mound", "Nightlight", "Owl"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Gimbutas, Marija: The Living Goddesses (1999)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const deerMotherMeta: DeityMeta = {
  slug: "deer-mother",
  name: { en: "Deer Mother", lt: "Elnių motina", lv: "Briežu māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Primordial Deer Mother — Nurturer of the Wild Forest",
    lt: "Pirmapradė elnių motina — laukinio miško puoselėtoja",
    lv: "Pirmatnējā briežu māte — savvaļas meža aizgādne",
  },
  summary: {
    en: "The Deer Mother (Elnių motina) is a Mesolithic–Neolithic forest deity reconstructed by Marija Gimbutas as the primordial nurturer of wild animals, whose legacy survives in the Baltic motif of the golden nine-antlered deer carrying the sun and representing seasonal renewal.",
    lt: "Elnių motina yra mezolito–neolito miško dievybė, Marijos Gimbutienės rekonstruota kaip pirmapradė laukinių gyvūnų puoselėtoja, kurios palikimas išliko baltų devyniaragio aukso elnio motyve, nešančio saulę.",
    lv: "Briežu māte ir mezolīta–neolīta meža dievība, ko Marija Gimbutas rekonstruēja kā pirmatnējo savvaļas dzīvnieku aizgādni, kuras mantojums saglabājās baltu zelta deviņragu briežu motīvā, kas nēsā sauli.",
  },
  attributes: ["Forest protection", "Wild animals", "Seasonal renewal", "Nine antlers", "Sun carrier"],
  symbols: ["Antlers", "Golden horns", "Nine branches", "Sun on antlers", "Red deer"],
  locations: [],
  region: { en: "Pan-Baltic (Lithuania, Latvia)", lt: "Visos Baltijos šalys", lv: "Visas Baltijas zemes" },
  tribe: { en: "Pre-Indo-European / Proto-Baltic", lt: "Priešindoeuropiečiai / protobaltai", lv: "Pirmsindoeiropiešu / protobalti" },
  period: { en: "Mesolithic to Iron Age (Reconstructed)", lt: "Mezolitas iki geležies amžiaus (rekonstruota)", lv: "Mezolīts līdz dzelzs laikmetam (rekonstruēts)" },
  references: [
    "Gimbutas, Marija: The Goddesses and Gods of Old Europe (1982)",
    "Gimbutas, Marija: The Living Goddesses (1999)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

// ─── Batch 14 ────────────────────────────────────────────────────────────────

export const velnioMotinaMeta: DeityMeta = {
  slug: "velnio-motina",
  name: { en: "Velnio Motina", lt: "Velnio motina", lv: "Velna māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Mother of Velnias — Matriarch of the Underworld",
    lt: "Velnio motina — požemio matriarchė",
    lv: "Velna māte — pazemes matriarhā",
  },
  summary: {
    en: "Velnio motina is the primordial chthonic matriarch of the Baltic underworld, described by Beresnevičius as the source of all chthonic forces and depicted in folklore as a powerful crone who commands the legions of the dead and rules the deepest layer of the earth.",
    lt: "Velnio motina yra pirmapradė chtoniškoji baltų požemio matriarchė, Beresnevičiaus apibūdinta kaip visų chtoninių jėgų šaltinis, tautosakoje vaizduojama kaip galinga senė, valdanti mirusiųjų legionus žemiausiame požemio sluoksnyje.",
    lv: "Velna māte ir pirmatnējā Baltijas pazemes chtoniski matriarhā, ko Beresnevičuss aprakstīja kā visu chtonisko spēku avotu un kuru folklorā attēlo kā spēcīgu vecu sievieti, kas valda pār mirušo leģioniem.",
  },
  attributes: ["Underworld rulership", "Dark magic", "Source of chthonic forces", "Guardian of wicked souls", "Iron cauldron"],
  symbols: ["Iron pot", "Cauldron", "Cave", "Red cloth", "Key to the underworld"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanian, Latvian", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Basanavičius, Jonas: Lietuviškos pasakos (1898–1902)",
  ],
};

export const ausraMeta: DeityMeta = {
  slug: "ausra",
  name: { en: "Aušra", lt: "Aušra", lv: "Ausrima" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Aušra — Goddess of the Breaking Dawn",
    lt: "Aušra — auštančios dienos deivė",
    lv: "Ausrima — rīta gaismas dieviete",
  },
  summary: {
    en: "Aušra is the Baltic goddess of the dawn light, listed by Jan Łasicki in 1615 as distinct from Aušrinė (the Morning Star), representing the atmospheric phenomenon of first light that opens the gates of the east for the solar chariot of Saulė each morning.",
    lt: "Aušra yra baltų auštančios dienos šviesos deivė, 1615 m. Jono Lasickio užrašyta kaip atskira nuo Aušrinės (Aušros žvaigždės), atstovaujanti atmosferiniam pirmosios šviesos reiškiniui, atidarančiam rytų vartus Saulės vežimui.",
    lv: "Ausrima ir Baltijas rīta gaismas dieviete, kuru Jans Łasickis 1615. gadā ierakstīja kā atšķirīgu no Ausekļa, pārstāvot atmosfērisko pirmās gaismas parādību, kas katru rītu atver austrumu vārtus Saules pajūgam.",
  },
  attributes: ["Dawn light", "New beginnings", "Solar gates", "Morning purification", "Celestial herald"],
  symbols: ["Golden gates", "Morning dew", "White robe", "Sunbeams", "Rosy horizon"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Proto-Baltic; recorded 1615 (Łasicki)", lt: "Protobaltų laikotarpis; užrašyta 1615 m. (Lasickis)", lv: "Protobaltu periods; ierakstīts 1615 g. (Łasickis)" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
  ],
};

export const spindulysMeta: DeityMeta = {
  slug: "spindulys",
  name: { en: "Spindulys", lt: "Spindulys", lv: "Saules stars" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Spindulys — Personified Ray of the Sun",
    lt: "Spindulys — personifikuotas saulės spindulys",
    lv: "Saules stars — personificēts saules stars",
  },
  summary: {
    en: "Spindulys is a personified ray of light in Baltic folk belief, analysed by Beresnevičius as evidence of a finely granular animistic relationship with solar energy — each ray a divine messenger from Saulė, blessing crops, waking seeds, and connecting the celestial realm to the human world.",
    lt: "Spindulys yra personifikuotas šviesos spindulys baltų liaudies tikėjime, Beresnevičiaus analizuotas kaip smulkiagranulės animistinės saulės energijos sampratos įrodymas — kiekvienas spindulys yra dieviška žinia iš Saulės, palaiminanti laukus.",
    lv: "Saules stars ir personificēts gaismas stars Baltijas tautas ticējumos, ko Beresnevičuss analizēja kā smalki granulētas animistiskas saules enerģijas attiecību pierādījumu — katrs stars kā Saules dievišķais vēstnesis.",
  },
  attributes: ["Solar blessing", "Divine messenger", "Warmth", "Seed awakening", "Heaven-earth connection"],
  symbols: ["Golden thread", "Sunray", "Spindle", "Radiant wheel", "Light shaft"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanian, Latvian", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Lietuvių liaudies menas (1956)",
  ],
};

export const maroDeiveMeta: DeityMeta = {
  slug: "maro-deive",
  name: { en: "Maro Deivė", lt: "Maro deivė", lv: "Mēra māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Maro Deivė — Goddess of Plague and Collective Death",
    lt: "Maro deivė — maro ir kolektyvinės mirties deivė",
    lv: "Mēra māte — mēra un kolektīvās nāves dieviete",
  },
  summary: {
    en: "Maro deivė is the Baltic plague goddess, distinct from Giltinė who takes individuals, wielding a red cloth whose waving spreads epidemic disease across entire villages — a personification of catastrophic collective death documented in Beresnevičius and in Old Prussian records as Diedewaythe.",
    lt: "Maro deivė yra baltų maro deivė, skirtinga nuo individualų imančios Giltinės — ji mojuoja raudona skara, kuri skleidžia epidemijas per ištisus kaimus, ir yra dokumentuota Beresnevičiaus darbuose bei prūsų šaltiniuose kaip Diedewaythe.",
    lv: "Mēra māte ir Baltijas mēra dieviete, atšķirīga no Giltinē, kas paņem indivīdus — viņa vimda sarkanu drānu, kas izplata epidēmijas veselās sādžās, un tika dokumentēta Beresnevičusa darbos un Prūsijas avotos.",
  },
  attributes: ["Plague", "Collective death", "Epidemic", "Terror", "Inevitable fate"],
  symbols: ["Red cloth", "White robe", "Death bell", "Pale horse", "Red scythe"],
  locations: [],
  region: { en: "Lithuania, Latvia, Old Prussia", lt: "Lietuva, Latvija, Senoji Prūsija", lv: "Lietuva, Latvija, Senā Prūsija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Senovės lietuvių mitologija ir religija (1990)",
  ],
};

export const pjutisDievasMeta: DeityMeta = {
  slug: "pjutis-dievas",
  name: { en: "Pjūties Dievas", lt: "Pjūties dievas", lv: "Pļaujas dievs" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Pjūties Dievas — God of the Harvest Reaping",
    lt: "Pjūties dievas — derliaus pjovimo dievas",
    lv: "Pļaujas dievs — pļaujas laika dievs",
  },
  summary: {
    en: "Pjūties dievas is the Baltic harvest reaper god who presides over the climactic cutting of grain at summer's end, a stern overseer of the fields who ensures the sickle strikes true and the grain is gathered before first frost — a figure of austere agricultural piety analysed by Beresnevičius and Dundulienė.",
    lt: "Pjūties dievas yra baltų derliaus pjovimo dievas, kuris prižiūri kulminacines vasaros pabaigos derliaus pjovimo darbus, rūstus laukų prižiūrėtojas, žiūrįs, kad pjautuvas kristų tiesiai ir grūdai būtų surinkti prieš pirmąjį šalną.",
    lv: "Pļaujas dievs ir Baltijas pļaujas laika dievs, kas pārvaldo kulminālo vasaras beigu graudu pļaušanu, stingrs lauku uzraugs, kurš nodrošina, ka sirpis sitās taisni un graudi tiek savākti pirms pirmā sala.",
  },
  attributes: ["Harvest completion", "Reaping", "Agricultural cycle closure", "Grain blessing", "Noon overseer"],
  symbols: ["Sickle", "Scythe", "Sheaf of grain", "Wheatstalk", "Harvest cart"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanian, Latvian", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Beresnevičius, Gintaras: Lietuvių religija ir mitologija (2004)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Žemdirbystė lietuvių mitologijoje (1963)",
  ],
};

// ─── Batch 15 ────────────────────────────────────────────────────────────────

export const perkunoOzelisMeta: DeityMeta = {
  slug: "perkuno-ozelis",
  name: { en: "Perkūno Oželis", lt: "Perkūno oželis", lv: "Pērkona kazlēns" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Perkūno Oželis — The Thunder God's Sacred Snipe",
    lt: "Perkūno oželis — perkūno dievo šventasis pempinis",
    lv: "Pērkona kazlēns — pērkona dieva svētais mērkaziņš",
  },
  summary: {
    en: "Perkūno oželis is the Common Snipe whose bleating mating-flight call was heard in folk belief as the voice of Perkūnas's celestial goat announcing the first spring thunder and the unlocking of the earth for planting — a sacred bird documented by Laurinkienė as a key element of the Perkūnas cult.",
    lt: "Perkūno oželis yra paprastasis bekosas, kurio pavasarinio skrydžio mekenimas buvo interpretuojamas kaip Perkūno dangaus ožio balsas, pranašaujantis pirmąją pavasario perkūniją ir žemės atrakinimą sėjai.",
    lv: "Pērkona kazlēns ir mērkaziņa, kuras reproduktīvā lidojuma skaņa tika uztverta tautas ticējumos kā Pērkona debesu kazlēna balss, kas paziņo par pirmo pavasara pērkonu un zemes atvēršanu sēšanai.",
  },
  attributes: ["Perkūnas companion", "Spring herald", "Storm messenger", "Sacred bird", "Earth-unlocking"],
  symbols: ["Snipe feathers", "Spring rain", "Goat horns", "Bleating sound"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Pan-Baltic", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Proto-Baltic origin to present folklore", lt: "Protobaltų ištakos iki dabartinės tautosakos", lv: "Protobaltu izcelsme līdz mūsdienu folklorai" },
  references: [
    "Laurinkienė, Nijolė: Senovės lietuvių dievas Perkūnas (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Gyvūnai ir augalai lietuvių mitologijoje (1983)",
  ],
};

export const perkunoKulkaMeta: DeityMeta = {
  slug: "perkuno-kulka",
  name: { en: "Perkūno Kulka", lt: "Perkūno kulka", lv: "Pērkona lode" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Perkūno Kulka — The Thunderstone of Perkūnas",
    lt: "Perkūno kulka — perkūno dievo akmuo",
    lv: "Pērkona lode — Pērkona pērkona akmens",
  },
  summary: {
    en: "Perkūno kulka is the folk name for belemnite fossils discovered in the earth after summer storms, believed by Baltic peoples to be the literal projectiles hurled by Perkūnas at Velnias, treasured as protective amulets and healing objects — a ritual practice documented by Laurinkienė and Balys.",
    lt: "Perkūno kulka yra liaudiškas vardas belemnitų iškastiniams radiniams, baltų žmonių tikėta kaip Perkūno svaidomos kulkos Velniui, saugomos kaip apsauginiai amuletai ir gydomieji objektai.",
    lv: "Pērkona lode ir tautas nosaukums belemnītu fosilijām, ko atranda zemē pēc vasaras vētrām, un Baltijas tautas ticēja, ka tās ir īsti Pērkona šķēpi pret Velnu, glabāti kā aizsargamuleti.",
  },
  attributes: ["Thunderstone", "Perkūnas weapon", "Protective amulet", "Healing object", "Anti-Velnias"],
  symbols: ["Belemnite fossil", "Stone axe", "Flint arrowhead", "Pointed stone"],
  locations: [],
  region: { en: "Lithuania, Latvia, Old Prussia", lt: "Lietuva, Latvija, Senoji Prūsija", lv: "Lietuva, Latvija, Senā Prūsija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Iron Age to contemporary folklore", lt: "Geležies amžius iki dabartinės tautosakos", lv: "Dzelzs laikmets līdz mūsdienu folklorai" },
  references: [
    "Laurinkienė, Nijolė: Senovės lietuvių dievas Perkūnas (1996)",
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const perkunoRyksteMeta: DeityMeta = {
  slug: "perkuno-rykste",
  name: { en: "Perkūno Rykštė", lt: "Perkūno rykštė", lv: "Dieva pātaga" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Perkūno Rykštė — The Lightning Whip of Justice",
    lt: "Perkūno rykštė — teisingumo žaibo botags",
    lv: "Dieva pātaga — taisnīguma zibens pātaga",
  },
  summary: {
    en: "Perkūno rykštė is the personified lightning bolt as Perkūnas's sacred instrument of divine justice — the flaming rod or whip he wields to strike down Velnias and purify the air, invoked in folk spells as 'the scourge of God' and documented by Laurinkienė as a key symbol of the thunder cult.",
    lt: "Perkūno rykštė yra personifikuotas žaibas kaip Perkūno sakralus dieviško teisingumo įrankis — liepsnotas botags, kuriuo jis smūgiuoja Velniui ir apvalo orą, šaukiamas burtažodžiuose kaip 'Dievo rykštė'.",
    lv: "Dieva pātaga ir personificēts zibens kā Pērkona svētais dievišķā taisnīguma instruments — liesmainā rīkste, ar kuru viņš sit Velnam un attīra gaisu, atsaukts tautas burvju formulās.",
  },
  attributes: ["Lightning personification", "Divine justice", "Perkūnas weapon", "Air purification", "Anti-evil force"],
  symbols: ["Lightning bolt", "Zig-zag line", "Golden rod", "Whip", "White horse"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Proto-Baltic origin to present folklore", lt: "Protobaltų ištakos iki dabartinės tautosakos", lv: "Protobaltu izcelsme līdz mūsdienu folklorai" },
  references: [
    "Laurinkienė, Nijolė: Senovės lietuvių dievas Perkūnas (1996)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Senovės lietuvių mitologija ir religija (1990)",
  ],
};

export const pincukasMeta: DeityMeta = {
  slug: "pincukas",
  name: { en: "Pinčukas", lt: "Pinčukas", lv: "Pinčuks" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Pinčukas — The Trickster Devil of the Paudruvė Marshes",
    lt: "Pinčukas — Paudruvės pelkių velnias-apgavikas",
    lv: "Pinčuks — Paudruvē purvu velnias-vilkpīte",
  },
  summary: {
    en: "Pinčukas is the named trickster devil of Northern Lithuanian folklore, haunting the Paudruvė marshes, catalogued by Balys and immortalized in Kazys Boruta's 1945 novel Baltaragio malūnas — a clumsy, often-outwitted figure who represents the chthonic underworld's proximity to human village life.",
    lt: "Pinčukas yra vardingas šiaurės Lietuvos tautosakos apgaviko velnias, persekiojantis Paudruvės pelkes, Jonas Balio kataloguotas ir Kazio Borutos 1945 m. romane 'Baltaragio malūnas' įamžintas.",
    lv: "Pinčuks ir nosauktais ziemeļlietuviešu folkloras vilkpīte velns, kas mājo Paudruvē purvos, Jonas Balys katalogizēts un Kaza Boruta 1945. gada romānā 'Baltaragio malūnas' nemirstinātā figūra.",
  },
  attributes: ["Trickster devil", "Regional spirit", "Marsh dweller", "Mill-builder", "Clumsy antagonist"],
  symbols: ["Mill wheel", "Sinking bridge", "Playing cards", "Red rooster", "Black goat"],
  locations: [],
  region: { en: "Northern Lithuania (Aukštaitija, Pasvalys, Biržai)", lt: "Šiaurės Lietuva (Aukštaitija, Pasvalys, Biržai)", lv: "Ziemeļlietuva (Aukštaitija, Pasvalys, Biržai)" },
  tribe: { en: "Lithuanian", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "19th-century folklore to modern literature", lt: "XIX a. tautosaka iki šiuolaikinės literatūros", lv: "19. gs. folklora līdz mūsdienu literatūrai" },
  references: [
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Boruta, Kazys: Baltaragio malūnas (1945)",
  ],
};

export const ezeruSeimininkeMeta: DeityMeta = {
  slug: "ezeru-seimininke",
  name: { en: "Ežerų Šeimininkė", lt: "Ežerų šeimininkė", lv: "Ezera māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Ežerų Šeimininkė — Mistress of the Baltic Lakes",
    lt: "Ežerų šeimininkė — baltų ežerų valdovė",
    lv: "Ezera māte — Baltijas ezeru māte",
  },
  summary: {
    en: "Ežerų šeimininkė is the Baltic lake mistress — a beautiful water-being who rules the underwater kingdom of each lake, determining fishing luck, protecting aquatic life, and sheltering the souls of the drowned in her silver realm; documented by Balys and honoured with token offerings before each fishing season.",
    lt: "Ežerų šeimininkė yra baltų ežerų valdovė — gražus vandens personažas, valdantis kiekvieno ežero povandenio karalystę, lemiantis žvejybos sėkmę ir saugantis nuskendusių sielas.",
    lv: "Ezera māte ir Baltijas ezeru valdniece — skaista ūdens būtne, kas valda katra ezera zemūdens karalisti, nosaka makšķerēšanas veiksmi un sargā slīkšanas dvēseles savā sudraba valstībā.",
  },
  attributes: ["Lake rulership", "Fishing luck", "Underwater kingdom", "Drowned souls", "Water protection"],
  symbols: ["Silver crown", "Water-lily", "Fish scales", "Mirror surface", "Morning mist"],
  locations: [],
  region: { en: "Lithuania, Latvia (Aukštaitija, Latgale)", lt: "Lietuva, Latvija (Aukštaitija, Latgalė)", lv: "Lietuva, Latvija (Aukštaitija, Latgale)" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Gyvūnai ir augalai lietuvių mitologijoje (1983)",
  ],
};

export const milineMeta: DeityMeta = {
  slug: "miline",
  name: { en: "Milinė", lt: "Milinė", lv: "Dzirnavu māte" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Milinė — Spirit Guardian of the Mill",
    lt: "Milinė — malūno dvasia sargybinė",
    lv: "Dzirnavu māte — dzirnavas gara sargātāja",
  },
  summary: {
    en: "Milinė is the Baltic mill spirit who inhabits water- and windmills, grinding grain at night for respectful millers and breaking machinery for those who violate mill taboos — a professional guardian of the transformative process from grain to flour, documented by Balys and Dundulienė.",
    lt: "Milinė yra baltų malūno dvasia, gyvenanti vandens ir vėjo malūnuose, naktimis malanti grūdus pagarbingiems malūnininkams ir trikdanti mechanizmus tiems, kurie nesilaikė malūno tabu.",
    lv: "Dzirnavu māte ir Baltijas dzirnavas gars, kas mitinās ūdens un vēja dzirnavās, nakts laikā malot graudus cieņpilniem milniekiem un bojājot mehānismus tiem, kuri pārkāpj dzirnavas tabu.",
  },
  attributes: ["Mill protection", "Night grinding", "Machinery guardian", "Grain transformation", "Professional spirit"],
  symbols: ["Millstone", "Water wheel", "Flour dust", "Wind sails", "White cat"],
  locations: [],
  region: { en: "Lithuania, rural Latvia", lt: "Lietuva, kaimo Latvija", lv: "Lietuva, lauku Latvija" },
  tribe: { en: "Lithuanian, Latvian", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 19th-century folklore", lt: "Viduramžiai iki XIX a. tautosakos", lv: "Viduslaiki līdz 19. gs. folklora" },
  references: [
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Žemdirbystė lietuvių mitologijoje (1963)",
  ],
};

export const ziburinisMeta: DeityMeta = {
  slug: "ziburinis",
  name: { en: "Žiburinis", lt: "Žiburinis", lv: "Maldugunis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Žiburinis — Will-o'-the-Wisp and Moral Auditor",
    lt: "Žiburinis — džiovos ugnis ir moralinis auditorius",
    lv: "Maldugunis — purva uguns un morālais revidents",
  },
  summary: {
    en: "Žiburinis is the Baltic will-o'-the-wisp — a glowing spirit haunting marshes and boundary zones as the restless soul of a surveyor or landstealer who moved boundary stones in life, misleading travellers into bogs as punishment; catalogued by Balys as a moral auditor of the landscape.",
    lt: "Žiburinis yra baltų pelkių klaidžiojanti ugnis — šviečianti dvasia, persekiojanti pelkes ir rubežių zonas kaip nerami matininko ar žemės vagies, gyvo metu perstūmusio ribas, siela.",
    lv: "Maldugunis ir Baltijas purva uguns — mirdzošs gars, kas vajā purvus un robežzonas kā nemierīga mērnieka dvēsele, kas dzīvē pārvietoja robežakmeņus un maldina ceļotājus purvainos apgabalos.",
  },
  attributes: ["Moral punishment", "Boundary guardian", "Marsh spirit", "Misleading light", "Land sin"],
  symbols: ["Flickering flame", "Lantern", "Glowing skeleton", "Boundary stone", "Marsh mist"],
  locations: [],
  region: { en: "Lithuania, Samogitia (wetland regions)", lt: "Lietuva, Žemaitija (pelkių regionai)", lv: "Lietuva, Žemaitija (purvaini apgabali)" },
  tribe: { en: "Lithuanian, Samogitian", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, Žemaitija" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Šventieji akmenys ir rubežiai (1979)",
  ],
};

export const debesuKareivisMeta: DeityMeta = {
  slug: "debesu-kareivis",
  name: { en: "Debesų Kareivis", lt: "Debesų kareivis", lv: "Debesu kareivis" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Debesų Kareivis — Cloud Soldier of the Celestial Army",
    lt: "Debesų kareivis — dangaus armijos debesų karys",
    lv: "Debesu kareivis — debesu armijas mākoņu kareivis",
  },
  summary: {
    en: "Debesų kareivis is the Baltic celestial warrior visible in storm clouds, a soldier of Perkūnas's heavenly army who rides white horses and wields fiery swords to strike down Velnias wherever he hides — personifying divine justice at atmospheric scale, documented by Balys in Lithuanian folktales.",
    lt: "Debesų kareivis yra baltų dangiškasis karys, matomas audros debesyse, Perkūno armijos kareivis, jojantis baltais žirgais ir laikantis liepsnotus kardus, smūgiuojantis Velniui kaip tik ten, kur jis slepiasi.",
    lv: "Debesu kareivis ir Baltijas debesu kareivis, redzams vētras mākoņos, Pērkona debesu armijas kareivis, kas jāj uz baltiem zirgiem un tur liesmainiem zobeniem, lai situ Velnam jebkur viņš slēpjas.",
  },
  attributes: ["Celestial warrior", "Perkūnas army", "Storm personification", "Divine justice", "Anti-Velnias fighter"],
  symbols: ["Sword of fire", "White horse", "Chariot wheel", "Dark storm cloud", "Golden arrow"],
  locations: [],
  region: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Senovės lietuvių mitologija ir religija (1990)",
  ],
};

export const duobkasisMeta: DeityMeta = {
  slug: "duobkasis",
  name: { en: "Duobkasis", lt: "Duobkasis", lv: "Kapa tēvs" },
  domain: "God",
  culture: "LT",
  title: {
    en: "Duobkasis — Grave-Digger Spirit and Psychopomp",
    lt: "Duobkasis — kapų kasėjo dvasia ir psichopompas",
    lv: "Kapa tēvs — kapa gara un psihopomps",
  },
  summary: {
    en: "Duobkasis is the Baltic grave-digger spirit — a shadowy figure leaning on a spade who appears near cemeteries to herald impending death and prepare the soul's earthen home, a necessary steward of the death transition catalogued by Balys and linked to Latvian Kapa tēvs (Father of the Grave).",
    lt: "Duobkasis yra baltų kapų kasėjo dvasia — šešėlinga figūra, pasiremianti kastuvą, pasirodo prie kapinių pranašaudama artėjančią mirtį ir ruošdama sielos žemišką buveinę.",
    lv: "Kapa tēvs ir Baltijas kapa gara — ēnainas figūras atspiedies uz lāpstas, parādās pie kapiem, lai pareģotu gaidāmo nāvi un sagatavotu dvēseles zemes mājvietu.",
  },
  attributes: ["Death herald", "Grave preparation", "Cemetery guardian", "Psychopomp", "Soul's steward"],
  symbols: ["Spade", "Fresh earth", "Twilight", "Mossy mound", "Shovel"],
  locations: [],
  region: { en: "Lithuania, rural Latvia", lt: "Lietuva, kaimo Latvija", lv: "Lietuva, lauku Latvija" },
  tribe: { en: "Lithuanian, Latvian", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklora" },
  references: [
    "Balys, Jonas: Lietuvių mitologiškos sakmės (1956)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
    "Dundulienė, Pranė: Senovės lietuvių mitologija ir religija (1990)",
  ],
};

// ─── Batch 16 ────────────────────────────────────────────────────────────────

export const sutartiniuDievaiciaiMeta: DeityMeta = {
  slug: "sutartiniu-dievaiciai",
  name: { en: "Sutartinių Dievaičiai", lt: "Sutartinių Dievaičiai", lv: "Sutartīņu Dievaiči" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The Little Gods of the Refrains — Divine Voices in Baltic Polyphony",
    lt: "Sutartinių Dievaičiai — Dieviškos Balsai Baltų Polifonijoje",
    lv: "Sutartīņu Dievaiči — Dievišķās Balsis Baltu Polifonijā",
  },
  summary: {
    en: "The Sutartinių Dievaičiai are the personified divine presences invoked through the ancient polyphonic refrains of North-Eastern Lithuanian songs — Lado, Tatato, Laduola — interpreted by Greimas and Slaviūnas as archaic ritual names that summon collective cosmic alignment through sound.",
    lt: "Sutartinių dievaičiai — personifikuotos dieviškos esybės, šaukiamos per seniausias polifinonines Šiaurės rytų Lietuvos dainų priedainius, kurias Greimas ir Slaviūnas aiškino kaip archajiškus ritualinius vardus.",
    lv: "Sutartīņu dievaiči ir personificētas dievišķas klātbūtnes, kas tiek aicinātas caur senajiem polifoniskajiem priedainiem — Lado, Tatato, Laduola — ziemeļaustrumu lietuviešu rituālajos dziedājumos.",
  },
  attributes: ["Ritual song", "Polyphony", "Cosmic alignment", "Refrain deity", "Collective voice"],
  symbols: ["Concentric circles", "Sun wheel", "Dissonant harmony", "Rue plant", "Singing circle"],
  locations: [],
  region: { en: "Aukštaitija (North-Eastern Lithuania)", lt: "Aukštaitija (Šiaurės rytų Lietuva)", lv: "Auštaitija (Ziemeļaustrumu Lietuva)" },
  tribe: { en: "Aukštaitian Lithuanians", lt: "Aukštaičiai", lv: "Auštaiši" },
  period: { en: "Proto-Baltic to 20th-century revival", lt: "Nuo proto-baltų iki XX a. atgimimo", lv: "No probaltu līdz 20. gs. atdzimšanai" },
  references: [
    "Greimas, Algirdas Julius: Tautos atminties beieškant (1991)",
    "Slaviūnas, Zenonas: Sutartinės, Vol. 1-3 (1958-1959)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const ladutisMeta: DeityMeta = {
  slug: "ladutis",
  name: { en: "Ladutis / Lado", lt: "Ladutis / Lado", lv: "Ladutis / Lado" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Lado — Refrain Deity of Harmony, Love, and Spring",
    lt: "Lado — Priedainio Dievybė Harmonijos, Meilės ir Pavasario",
    lv: "Lado — Refrēna Dievība Harmonijas, Mīlestības un Pavasara",
  },
  summary: {
    en: "Ladutis (Lado) is the most widely invoked refrain deity in Lithuanian and Latvian spring and wedding songs, associated with harmony, love, fertility, and possibly the sun — a divine exclamation that may encode the name of an archaic goddess of orderly joy.",
    lt: "Ladutis (Lado) yra plačiausiai šaukiama priedainio dievybė lietuvių ir latvių pavasario bei vestuvių dainose, susijusi su harmonija, meile, vaisingumu ir galimas saulės dievu.",
    lv: "Ladutis (Lado) ir visplašāk piesauktā refrēna dievība lietuviešu un latviešu pavasara un kāzu dziesmās, saistīta ar harmoniju, mīlestību, auglību un iespējams ar sauli.",
  },
  attributes: ["Harmony", "Love", "Fertility", "Spring", "Wedding"],
  symbols: ["Rue plant", "Wreath", "Sun wheel", "Singing circle", "Spring flower"],
  locations: [],
  region: { en: "Lithuania, Latvia (widespread)", lt: "Lietuva, Latvija (plačiai)", lv: "Lietuva, Latvija (plaši)" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Proto-Baltic to modern folk tradition", lt: "Nuo proto-baltų iki šiuolaikinės liaudies tradicijos", lv: "No probaltu līdz mūsdienu tautas tradīcijai" },
  references: [
    "Greimas, Algirdas Julius: Tautos atminties beieškant (1991)",
    "Slaviūnas, Zenonas: Sutartinės, Vol. 1-3 (1958-1959)",
  ],
};

export const deivesCultMeta: DeityMeta = {
  slug: "deives-cult",
  name: { en: "Deivės (Rural Cult)", lt: "Deivės (Kaimo Kultas)", lv: "Deives (Lauku Kults)" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "The Deivės — Female Forest Deities of Samogitia Documented by Jesuits",
    lt: "Deivės — Samogitijos Moteriškos Miško Dievybės, Dokumentuotos Jėzuitų",
    lv: "Deives — Samogitijas Sieviešu Meža Dievības, Dokumentētas Jēzuitu",
  },
  summary: {
    en: "The Deivės were localized female forest deities whose cult survived in the sacred groves of Samogitia into the 17th century, documented by Jesuit missionaries who found women leaving offerings of wool, bread, and linen at hollow oaks to summon their blessings over marriage, childbirth, and craft.",
    lt: "Deivės buvo vietinės moteriškos miško dievybės, kurių kultas Samogitijos šventosiose giraičiose išliko iki XVII a., dokumentuotas jėzuitų, radusių moteris paliekančias dovanas prie senų ąžuolų.",
    lv: "Deives bija lokālas sieviešu meža dievības, kuru kults Žemaitijas svētajos birzīs izdzīvoja līdz 17. gs., dokumentēts jēzuitu, kuri atrada sievietes, atstājot ziedojumus pie dobajiem ozoliem.",
  },
  attributes: ["Women's cult", "Forest guardianship", "Fertility", "Marriage blessing", "Craft protection"],
  symbols: ["Hollow oak", "Linen cloth", "Ball of wool", "Woven belt", "Deer"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th–17th Century Survival (Jesuit documentation)", lt: "XVI–XVII a. išlikimas (jėzuitų dokumentai)", lv: "16.–17. gs. izdzīvošana (jēzuitu dokumentācija)" },
  references: [
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Annuae Litterae Societatis Iesu (Jesuit Annual Letters, 1580–1620)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const gabijosUgnisMeta: DeityMeta = {
  slug: "gabijos-ugnis",
  name: { en: "Gabijos Ugnis", lt: "Gabijos Ugnis", lv: "Gabijas Uguns" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Gabijos Ugnis — The Sacred Perpetual Hearth Fire",
    lt: "Gabijos Ugnis — Šventoji Amžinoji Namų Ugnis",
    lv: "Gabijas Uguns — Svētā Mūžīgā Pavarda Uguns",
  },
  summary: {
    en: "Gabijos Ugnis is the sacred perpetual hearth fire documented by Jesuit missionaries in 1583 as a living divine presence maintained in virtually every Lithuanian home — addressed as a sentient being, fed offerings of salt and food, and treated as a direct embodiment of the household goddess Gabija.",
    lt: "Gabijos ugnis — šventoji amžinoji namų ugnis, 1583 m. jėzuitų dokumentuota kaip gyva dieviška esybė, puoselėta beveik kiekvienuose lietuviškuose namuose — kreipiantis kaip į protingą būtybę ir maitinant druska bei maistu.",
    lv: "Gabijas uguns ir svētā mūžīgā pavarda uguns, ko 1583. gadā jēzuitu misionāri dokumentēja kā dzīvu dievišķu klātbūtni, ko uzturēja gandrīz katrā lietuviešu mājā.",
  },
  attributes: ["Sacred fire", "Domestic protection", "Purification", "Family continuity", "Divine sentience"],
  symbols: ["Embers", "Hearthstone", "Salt", "Woven belt", "White hen"],
  locations: [],
  region: { en: "Lithuania (nationwide)", lt: "Lietuva (visoje šalyje)", lv: "Lietuva (visā valstī)" },
  tribe: { en: "All Lithuanian tribes", lt: "Visos lietuvių gentys", lv: "Visas lietuviešu ciltis" },
  period: { en: "Proto-Baltic to 20th-century (Documented 1583)", lt: "Nuo proto-baltų iki XX a. (dokumentuota 1583 m.)", lv: "No probaltu līdz 20. gs. (dokumentēts 1583. gadā)" },
  references: [
    "Annuae Litterae Societatis Iesu (1583)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const zaltvykslesMeta: DeityMeta = {
  slug: "zaltvyksles",
  name: { en: "Žaltvykslės", lt: "Žaltvykslės", lv: "Zalkšu Ugunis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Žaltvykslės — Sacred Marsh Lights and the Household Snake Cult",
    lt: "Žaltvykslės — Šventos Pelkių Ugnelės ir Namų Žalčio Kultas",
    lv: "Zalkšu Ugunis — Svētas Purvu Uguntsiņas un Mājas Zalkša Kults",
  },
  summary: {
    en: "Žaltvykslės represents both the flickering blue lights of marshes (the wandering souls of sacred serpents) and the widespread practice of keeping household grass snakes documented by Jesuits in 1612 — snakes fed milk, honored as household gods, whose killing was the gravest sacrilege.",
    lt: "Žaltvykslės žymi tiek mirksintis mėlynas pelkių ugneles (šventų žalčių klajojančias sielas), tiek namų žalčio garbinimo tradiciją, 1612 m. jėzuitų dokumentuotą.",
    lv: "Zalkšu ugunis apzīmē gan mirgojoši zilas purvu uguntsiņas, gan mājas zalkšu turēšanas tradīciju, ko 1612. gadā dokumentēja jēzuitu misionāri.",
  },
  attributes: ["Sacred snake", "Marsh lights", "Household luck", "Chthonic realm", "Fertility"],
  symbols: ["Grass snake", "Milk bowl", "Coiled serpent", "Blue marsh light", "Hearth corner"],
  locations: [],
  region: { en: "Lithuania, Samogitia, Southern Latvia", lt: "Lietuva, Žemaitija, Pietų Latvija", lv: "Lietuva, Žemaitija, Dienvidlatvija" },
  tribe: { en: "Lithuanian, Samogitian", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "Neolithic origin to 17th century (Documented 1612)", lt: "Nuo neolito iki XVII a. (dokumentuota 1612 m.)", lv: "No neolīta līdz 17. gs. (dokumentēts 1612. gadā)" },
  references: [
    "Annuae Litterae Societatis Iesu (1612)",
    "Vėlius, Norbertas: Senovės baltų pasaulėžiūra (1983)",
    "VLE: Visuotinė lietuvių enciklopedija (vle.lt)",
  ],
};

export const tavalisMeta: DeityMeta = {
  slug: "tavalis",
  name: { en: "Tavalis", lt: "Tavalis", lv: "Tavalijs" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Tavalis — Spirit of the Cattle Barn",
    lt: "Tavalis — Tvarto Dvasia",
    lv: "Tavalijs — Kūts Gars",
  },
  summary: {
    en: "Tavalis is the Samogitian spirit of the cattle barn recorded by Jan Łasicki as 'Tavalem pro bobus in stabulo' — invoked to ensure the health, fertility, and safe keeping of livestock through the night, a guardian of the essential economic foundation of Baltic agrarian life.",
    lt: "Tavalis yra Samogitijos tvarto dvasia, Lasickio užrašyta kaip 'Tavalem pro bobus in stabulo' — šaukiamas gyvulių sveikatai, vaisingumui ir saugumo per naktį užtikrinti.",
    lv: "Tavalijs ir Žemaitijas kūts gars, ko Lasickis ierakstīja kā 'Tavalem pro bobus in stabulo' — aicināts nodrošināt lopu veselību, auglību un drošu uzturēšanu.",
  },
  attributes: ["Cattle protection", "Barn guardian", "Livestock health", "Night watch", "Agricultural spirit"],
  symbols: ["Hay fork", "Cattle stall", "Candle", "Salt lick", "Barn door"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const tiklisMeta: DeityMeta = {
  slug: "tiklis",
  name: { en: "Tiklis", lt: "Tiklis", lv: "Tiklis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Tiklis — Spirit of Good Fortune and Fortunate Success",
    lt: "Tiklis — Sėkmės ir Laimingo Išvedimo Dvasia",
    lv: "Tiklis — Laimes un Veiksmīga Iznākuma Gars",
  },
  summary: {
    en: "Tiklis is the Samogitian deity of fortune and fortunate outcomes recorded by Jan Łasicki as 'Tiklium pro fortunato successu' — invoked before undertakings requiring good luck, representing the Baltic conviction that favorable outcomes are divinely granted rather than merely earned.",
    lt: "Tiklis yra Samogitijos sėkmės dievybė, Lasickio užrašyta kaip 'Tiklium pro fortunato successu' — šaukiamas prieš veiksmus, reikalaujančius sėkmės.",
    lv: "Tiklis ir Žemaitijas veiksmes dievība, ko Lasickis ierakstīja kā 'Tiklium pro fortunato successu' — ticēja, ka labvēlīgi iznākumi ir dievišķā žēlastība.",
  },
  attributes: ["Good fortune", "Favorable outcomes", "Luck", "Success", "Blessing"],
  symbols: ["Lucky stone", "Four-leaf clover", "First fruits", "Cast lots", "Open hand"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const algisMeta: DeityMeta = {
  slug: "algis",
  name: { en: "Algis / Algė", lt: "Algis / Algė", lv: "Algis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Algis — Pre-Christian Messenger Spirit and Divine Intermediary",
    lt: "Algis — Ikikrikščioniškas Pasiuntinys ir Dievų Tarpininkas",
    lv: "Algis — Pirmskristīgais Vēstnesis un Dievišķais Starpnieks",
  },
  summary: {
    en: "Algis is the Baltic messenger spirit recorded by Jan Łasicki as 'Algi tanquam angelum' — functioning like an angel, carrying prayers upward to the divine realm and divine will downward to mortals, a pre-Christian intermediary that reveals the Baltic concept of sacred mediation long before Christian angelology.",
    lt: "Algis yra baltų pasiuntinių dvasia, Lasickio užrašyta kaip 'Algi tanquam angelum' — veikiantis kaip angelas, nešantis maldas aukštyn į dievų pasaulį ir dievų valią žemyn mirtingiesiems.",
    lv: "Algis ir baltu vēstnesia gars, ko Lasickis ierakstīja kā 'Algi tanquam angelum' — darbojas kā eņģelis, nesot lūgšanas uz augšu dievišķajā sfērā un dievišķo gribu uz leju.",
  },
  attributes: ["Messenger", "Intermediary", "Prayer carrier", "Divine will", "Sacred mediation"],
  symbols: ["White feather", "Open path", "Ascending smoke", "Twin birds", "Dawn light"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const bendikasMeta: DeityMeta = {
  slug: "bendikas",
  name: { en: "Bendikas / Bendis", lt: "Bendikas / Bendis", lv: "Bendiks" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Bendikas — Protector of Journeys and Travelers",
    lt: "Bendikas — Kelionių ir Keliautojų Globėjas",
    lv: "Bendiks — Ceļojumu un Ceļotāju Aizgādnis",
  },
  summary: {
    en: "Bendikas is the Samogitian deity of journeys and travel recorded by Jan Łasicki as 'Bendim pro peregrinatione' — a guardian invoked before departures to ensure safe passage, navigation of unknown roads, and fortunate return, expressing the sacred vulnerability of those who leave the familiar.",
    lt: "Bendikas yra Samogitijos kelionių dievybė, Lasickio užrašyta kaip 'Bendim pro peregrinatione' — globėjas, šaukiamas prieš išvykes saugiam perėjimui, nežinomų kelių įveikimui ir laimingam sugrįžimui.",
    lv: "Bendiks ir Žemaitijas ceļojumu dievība, ko Lasickis ierakstīja kā 'Bendim pro peregrinatione' — aizgādnis, kas tika aicināts pirms izbraukšanas drošai pārejai un veiksmīgai atgriešanālai.",
  },
  attributes: ["Journey protection", "Safe travel", "Navigation", "Return", "Threshold crossing"],
  symbols: ["Walking staff", "Crossroads stone", "Packed bundle", "Open gate", "Road dust"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const slaitisMeta: DeityMeta = {
  slug: "slaitis",
  name: { en: "Šlaitis", lt: "Šlaitis", lv: "Šlaitis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Šlaitis — Spirit of Hillsides and Slopes",
    lt: "Šlaitis — Šlaitų ir Kalvagūbrių Dvasia",
    lv: "Šlaitis — Nogāžu un Kalnu Piekāju Gars",
  },
  summary: {
    en: "Šlaitis is the Samogitian spirit of hillsides and slopes recorded by Jan Łasicki as 'Szlaitym pro declivitate' — a landscape deity expressing Baltic animistic veneration of terrain features, embodying the divine inhabitation of every distinct natural form from open plain to wooded slope.",
    lt: "Šlaitis yra Samogitijos šlaitų ir kalnų dvasia, Lasickio užrašyta kaip 'Szlaitym pro declivitate' — kraštovaizdžio dievybė, išreiškianti baltų animistinę pagarbą gamtos ypatumams.",
    lv: "Šlaitis ir Žemaitijas nogāžu dievība, ko Lasickis ierakstīja kā 'Szlaitym pro declivitate' — ainavas dievība, kas pauž baltu animistisko cieņu pret reljefa iezīmēm.",
  },
  attributes: ["Hillside", "Slope guardian", "Terrain spirit", "Landscape deity", "Animistic presence"],
  symbols: ["Sloping hillside", "Dew on grass", "Clay earth", "Wild herbs", "Boundary stone"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const vetustisMeta: DeityMeta = {
  slug: "vetustis",
  name: { en: "Vetušis / Vetustis", lt: "Vetušis / Vetustis", lv: "Vetušis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Vetušis — Storm Demon and Violent Wind",
    lt: "Vetušis — Audros Demonas ir Smurtaujantis Vėjas",
    lv: "Vetušis — Vētras Dēmons un Vardarbīgais Vējš",
  },
  summary: {
    en: "Vetušis is the Samogitian storm demon and violent wind recorded by Jan Łasicki as 'Vetuszim pro tempestate' — a destructive atmospheric force embodying the terrifying aspect of storms, distinct from the benevolent Vėjopatis, personifying the storm's capacity for sudden devastating ruin.",
    lt: "Vetušis yra Samogitijos audros demonas, Lasickio užrašytas kaip 'Vetuszim pro tempestate' — destruktyvi atmosferos jėga, personifikuojanti siaubo audrų aspektą.",
    lv: "Vetušis ir Žemaitijas vētras dēmons, ko Lasickis ierakstīja kā 'Vetuszim pro tempestate' — destruktīvs atmosfēras spēks, kas iemieso vētru briesmīgo iznīcinošo aspektu.",
  },
  attributes: ["Storm", "Violent wind", "Destruction", "Tempest", "Chaos"],
  symbols: ["Whirlwind", "Uprooted tree", "Black cloud", "Lightning", "Broken branch"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

export const saukstisMeta: DeityMeta = {
  slug: "saukstis",
  name: { en: "Šaukstis", lt: "Šaukstis", lv: "Šaukstis" },
  domain: "Spirit",
  culture: "LT",
  title: {
    en: "Šaukstis — Spirit of Flies and Insects",
    lt: "Šaukstis — Musių ir Vabzdžių Dvasia",
    lv: "Šaukstis — Muššu un Kukaiņu Gars",
  },
  summary: {
    en: "Šaukstis is the Samogitian spirit of flies and insects recorded by Jan Łasicki as 'Szuksztim pro muscis' — invoked to propitiate or drive away harmful flies from crops, livestock, and food stores, representing the Baltic recognition that even the smallest creatures require divine management.",
    lt: "Šaukstis yra Samogitijos musių ir vabzdžių dvasia, Lasickio užrašyta kaip 'Szuksztim pro muscis' — šaukiama numaldyti arba atvaryti kenksmingoms musėms nuo pasėlių, gyvulių ir maisto.",
    lv: "Šaukstis ir Žemaitijas muššu un kukaiņu gars, ko Lasickis ierakstīja kā 'Szuksztim pro muscis' — aicināts nomierināt vai aizdzīt kaitīgās mušas no labības, lopiem un pārtikas krājumiem.",
  },
  attributes: ["Flies", "Insects", "Pest control", "Crop protection", "Minor deity"],
  symbols: ["Fly cluster", "Honey jar", "Grain store", "Bundle of herbs", "Smoke"],
  locations: [],
  region: { en: "Samogitia (Western Lithuania)", lt: "Žemaitija (Vakarų Lietuva)", lv: "Žemaitija (Rietumu Lietuva)" },
  tribe: { en: "Samogitians", lt: "Žemaičiai", lv: "Žemaiši" },
  period: { en: "16th Century (Recorded by Łasicki)", lt: "XVI a. (Lasickio užrašyta)", lv: "16. gadsimts (Lasickis dokumentēja)" },
  references: [
    "Łasicki, Jan: De Diis Samagitarum (1582; publ. 1615)",
    "Vėlius, Norbertas: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
  ],
};

// Batch 17

export const martinsMeta: DeityMeta = {
  slug: "martins",
  name: { en: "Mārtiņš", lt: "Mārtiņš", lv: "Mārtiņš" },
  domain: "Deity",
  culture: "LV",
  title: {
    en: "Mārtiņš — Guardian of Horses and the Harvest End",
    lt: "Mārtiņš — Arklių Globėjas ir Derliaus Pabaigos Dievas",
    lv: "Mārtiņš — Zirgu Sargs un Ražas Noslēguma Dievs",
  },
  summary: {
    en: "Mārtiņš is the Latvian deity of November, the harvest's end and horses, arriving on his white horse with the first frost to signal the close of the agricultural year; his festival (November 10) was the ritual deadline for settling debts and sacrificing a rooster in the stable.",
    lt: "Mārtiņš yra lapkričio, derliaus pabaigos ir arklių latvių dievas, ant balto žirgo atnešantis pirmąsias šalnas; jo šventė (lapkričio 10 d.) buvo ritualinis terminas skoloms apmokėti ir gaideliui aukoti arklidėje.",
    lv: "Mārtiņš ir latviešu novembra, ražas noslēguma un zirgu dievs, kas uz balta zirga atved pirmo salu un signalizē lauksaimniecības gada beigām; viņa svētki (10. novembris) bija rituāls termiņš parādu nokārtošanai un gaiļa upurēšanai stallī.",
  },
  attributes: ["Horses", "November", "Harvest end", "Winter transition", "Rooster sacrifice"],
  symbols: ["White horse", "Rooster", "Frost", "Winter mask", "Horse brush"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Medieval to present day folklore", lt: "Viduramžiai iki šių dienų tautosakos", lv: "Viduslaiki līdz mūsdienu folklorai" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1926)",
    "LNE: Latvijas Nacionālā enciklopēdija (enciklopedija.lv)",
  ],
};

export const jodsMeta: DeityMeta = {
  slug: "jods",
  name: { en: "Jods", lt: "Jods", lv: "Jods" },
  domain: "Demon",
  culture: "LV",
  title: {
    en: "Jods — the Dark One, Primal Adversary of the Gods",
    lt: "Jods — Tamsusis, Dievų Pirmapradis Priešininkas",
    lv: "Jods — Tumšais, Dieva Pirmatnējais Pretinieks",
  },
  summary: {
    en: "Jods is the primordial dark spirit of Latvian mythology — not a trickster like common Velns but a genuinely threatening adversary of Dievs, personifying destructive chaos, disease, and the absolute darkness beyond divine light.",
    lt: "Jods yra pirmapradė tamsios latvių mitologijos dvasia — ne triukmažis kaip paprastas Velnias, bet tikrai grėsmingas Dievo priešininkas, personifikuojantis žlugdantį chaosą, ligas ir absoliučią tamsą už dieviškosios šviesos ribų.",
    lv: "Jods ir latviešu mitoloģijas pirmatnējais tumšais gars — ne krāpnieks kā parastais Velns, bet patiešām draudīgs Dieva pretinieks, kas personificē postošo haosu, slimības un absolūto tumsu ārpus dievišķās gaismas.",
  },
  attributes: ["Darkness", "Underworld", "Chaos", "Disease", "Adversary of Dievs"],
  symbols: ["Pitch black", "Inky marsh", "Broken stone", "Night", "Black raven"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Proto-Baltic to late folklore", lt: "Protobaltiška kilmė iki vėlyvosios tautosakos", lv: "Protobaltu periods līdz vēlajam folkloram" },
  references: [
    "Šmits, Pēteris: Latviešu mitoloģija (1926)",
    "Biezais, Haralds: Die Hauptgöttinnen der alten Letten (1955)",
    "LNE: Latvijas Nacionālā enciklopēdija (enciklopedija.lv)",
  ],
};

export const banguMateMeta: DeityMeta = {
  slug: "bangu-mate",
  name: { en: "Bangu māte", lt: "Bangų Motina", lv: "Bangu māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Bangu māte — Mother of the Waves",
    lt: "Bangų Motina — Bangų Valdovė",
    lv: "Bangu māte — Viļņu Māte",
  },
  summary: {
    en: "Bangu māte is the Latvian mother spirit of the churning waves — an aspect or daughter of Jūras māte — presiding over the rhythmic pounding of waves against the shore, invoked by fishermen for safe passage.",
    lt: "Bangų Motina yra latvių virpančių bangų motinos dvasia — Jūros Motinos aspektas ar duktė — valdanti ritmingą bangų plakimą į krantą, žvejų meldžiama saugaus plaukimo.",
    lv: "Bangu māte ir latviešu virpojošo viļņu māte — Jūras mātes aspekts vai meita — kas valda ritmisko viļņu sišanos pret krastu, ko zvejnieki lūdz par drošu braucienu.",
  },
  attributes: ["Waves", "Sea", "Shore", "Ocean power", "Fishermen's patron"],
  symbols: ["Wave-crest", "Sea-foam", "Shore stone", "Roaring water"],
  locations: [],
  region: { en: "Coastal Latvia (Kurzeme, Vidzeme)", lt: "Pakrantės Latvija (Kurzeme, Vidzeme)", lv: "Piekrastes Latvija (Kurzeme, Vidzeme)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const upesMateMeta: DeityMeta = {
  slug: "upes-mate",
  name: { en: "Upes māte", lt: "Upių Motina", lv: "Upes māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Upes māte — Mother of Rivers and Flowing Time",
    lt: "Upių Motina — Upių ir Tekančio Laiko Globėja",
    lv: "Upes māte — Upju un Tekošā Laika Māte",
  },
  summary: {
    en: "Upes māte is the Latvian spirit of flowing river waters — distinct from the general Ūdens māte — governing rivers as a symbol of life's transitions, soul journeys, and the passage of time, propitiated by women who brought woven ribbons to riverbends.",
    lt: "Upių Motina yra latvių tekančio vandens regentė — skiriama nuo bendrosios Vandens Motinos — valdanti upes kaip gyvenimo perėjimų, sielų kelionių ir laiko tėkmės simbolį, maldavimai moterų, atnešusių austų juostų prie upių posūkių.",
    lv: "Upes māte ir latviešu tekošo upju gars — atšķirīga no vispārīgās Ūdens mātes — kas valda upes kā dzīves pāreju, dvēseļu ceļojumu un laika plūsmas simbolu; sievietes atnesa austas lentes pie upes līkumiem.",
  },
  attributes: ["Rivers", "Flowing water", "Life transitions", "Soul journeys", "Time passage"],
  symbols: ["Riverbend", "Silver water-droplets", "Spring-well", "Woven ribbon"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
  ],
};

export const lietusMateMeta: DeityMeta = {
  slug: "lietus-mate",
  name: { en: "Lietus māte", lt: "Lietaus Motina", lv: "Lietus māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Lietus māte — Mother of Rain",
    lt: "Lietaus Motina — Lietaus Valdovė",
    lv: "Lietus māte — Lietus Māte",
  },
  summary: {
    en: "Lietus māte is the Latvian mother spirit of rain — she whose tears or poured water nourish the crops — invoked during droughts with processional songs calling on her to open the sky and sustain the harvest.",
    lt: "Lietaus Motina yra latvių lietaus motinos dvasia — ta, kurios ašaros ar pilamas vanduo maitina pasėlius — meldžiama sausros metu procesijų dainomis, prašant atidaryti dangų ir išlaikyti derlių.",
    lv: "Lietus māte ir latviešu lietus māte — tā, kuras asaras vai izlietais ūdens baro augus — piesauc sausas laikā ar procesiju dziesmām, lūdzot atvērt debesis un uzturēt ražu.",
  },
  attributes: ["Rain", "Moisture", "Crops", "Drought relief", "Agricultural fertility"],
  symbols: ["Rain drop", "Full cloud", "Pouring vessel", "Wet grain"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
  ],
};

export const miglasMateMeta: DeityMeta = {
  slug: "miglas-mate",
  name: { en: "Miglas māte", lt: "Miglų Motina", lv: "Miglas māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Miglas māte — Mother of Mist and the Liminal Veil",
    lt: "Miglų Motina — Rūko ir Tarpinės Uždangos Valdovė",
    lv: "Miglas māte — Miglas un Sliekšņa Aizsega Māte",
  },
  summary: {
    en: "Miglas māte is the Latvian spirit of fog and mist — the creator of the liminal veil where the boundaries between living and dead blur — travelers were warned not to follow her path lest they become lost between worlds.",
    lt: "Miglų Motina yra latvių rūko ir miglos dvasia — tarpinės uždangos kūrėja, kur gyvenimo ir mirties ribos trindasi — keliautojus būdavo perspėjama nesekti jos keliu, kad nepaklystų tarp pasaulių.",
    lv: "Miglas māte ir latviešu miglas un rūkus gars — sliekšņa plīvura radītāja, kur robežas starp dzīvajiem un mirušajiem izplūst — ceļotāji tika brīdināti nesekot viņas ceļam, lai nezaudētu ceļu starp pasaulēm.",
  },
  attributes: ["Mist", "Fog", "Liminality", "Between worlds", "Danger to travelers"],
  symbols: ["Grey veil", "Forest mist", "Blurred boundary", "Fading path"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
  ],
};

export const salnaMateMeta: DeityMeta = {
  slug: "salna-mate",
  name: { en: "Salna māte", lt: "Šalnų Motina", lv: "Salna māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Salna māte — Mother of Frost",
    lt: "Šalnų Motina — Šalčio Valdovė",
    lv: "Salna māte — Salnas Māte",
  },
  summary: {
    en: "Salna māte is the Latvian frost spirit — the biter of plants who tests crop resilience in early spring and late autumn — dreaded by farmers as the destroyer of blossoms but respected as a necessary agent of seasonal transition.",
    lt: "Šalnų Motina yra latvių šalčio dvasia — augalų kandėja, patikrinanti pasėlių atsparumą ankstyvą pavasarį ir vėlyvą rudenį — ūkininkų bijoma kaip žiedų naikintoja, bet gerbiama kaip būtinas sezonų kaitos atstovas.",
    lv: "Salna māte ir latviešu salnas gars — augu kodēja, kas pārbauda sēklu izturību agrā pavasarī un vēlā rudenī — zemnieku baidīta kā ziedu iznīcinātāja, bet cienīta kā nepieciešams gadalaiku pārejas aģents.",
  },
  attributes: ["Frost", "Late autumn", "Early spring", "Crop testing", "Seasonal transition"],
  symbols: ["Ice crystal", "Withered blossom", "White field", "Morning hoarfrost"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
  ],
};

// Batch 18

export const debessMateMeta: DeityMeta = {
  slug: "debess-mate",
  name: { en: "Debess māte", lt: "Dangaus Motina", lv: "Debess māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Debess māte — Mother of the Sky Vault",
    lt: "Dangaus Motina — Dangaus Skliauto Globėja",
    lv: "Debess māte — Debesu Velves Māte",
  },
  summary: {
    en: "Debess māte is the Latvian spirit of the celestial firmament — the protective vault who holds the stars in her lap — the feminine counterpart to sky-father Dievs who provides the infinite container of all heavenly light.",
    lt: "Dangaus Motina yra latvių dangiškojo skliauto dvasia — apsauginė skliautas, laikantis žvaigždes savo glėbyje — dieviškoji moteriškoji dvasia, šalia aktyvaus dangaus tėvo Dievo, teikianti begalinį visų dangaus šviesos indą.",
    lv: "Debess māte ir latviešu debess velves gars — aizsargājošā velve, kas tur zvaigznes savā klēpī — dievišķais sievišķais pretsvars aktīvajam debesu tēvam Dievam, nodrošinot bezgalīgo visu debess gaismas trāku.",
  },
  attributes: ["Sky vault", "Firmament", "Stars", "Celestial container", "Divine feminine"],
  symbols: ["Silver dome", "Star-field", "Blue cloak", "Infinite expanse"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Šmits, Pēteris: Latviešu mitoloģija (1918)",
  ],
};

export const zvaigznesMateMeta: DeityMeta = {
  slug: "zvaigznes-mate",
  name: { en: "Zvaigznes māte", lt: "Žvaigždžių Motina", lv: "Zvaigznes māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Zvaigznes māte — Weaver of the Starry Veil",
    lt: "Žvaigždžių Motina — Žvaigždėtos Uždangos Audėja",
    lv: "Zvaigznes māte — Zvaigžņotas Aizsega Audēja",
  },
  summary: {
    en: "Zvaigznes māte is the Latvian mother spirit of stars — the weaver of the starry night veil — associated with destiny since stars were believed to be the living eyes or souls of the dead watching from the sky.",
    lt: "Žvaigždžių Motina yra latvių žvaigždžių motinos dvasia — žvaigždėtos nakties uždangos audėja — susijusi su likimo tema, nes žvaigždės buvo laikomos gyvomis mirusiųjų akimis ar sielomis, stebinčiomis iš dangaus.",
    lv: "Zvaigznes māte ir latviešu zvaigžņu mātes gars — zvaigžņotas nakts plīvura audēja — saistīta ar likteņa tēmu, jo zvaigznes tika uzskatītas par dzīvajām mirušo acīm vai dvēselēm, kas vēro no debesīm.",
  },
  attributes: ["Stars", "Destiny", "Weaving", "Night sky", "Souls of the dead"],
  symbols: ["Glistening thread", "Night-sky veil", "Star-cluster", "Silver needle"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const saulesMateMeta2: DeityMeta = {
  slug: "saules-mate",
  name: { en: "Saules māte", lt: "Saulės Motina", lv: "Saules māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Saules māte — Cosmic Mother Who Sends the Sun on Her Way",
    lt: "Saulės Motina — Kosminė Motina, Siunčianti Saulę į Kelią",
    lv: "Saules māte — Kosmiskā Māte, kas Sūta Sauli Ceļā",
  },
  summary: {
    en: "Saules māte is the cosmic parent distinct from Saule herself — the elder guardian who sends the Sun on her daily journey and welcomes her home each evening, representing the maternal source behind the Sun's light and sustaining power.",
    lt: "Saulės Motina yra kosminė tėvija, skiriamas nuo pačios Saulės — vyresnė globėja, siunčianti Saulę į kiekvieną dieninę kelionę ir priimanti ją namo kiekvieną vakarą, atspindinti motinišką šaltinį už Saulės šviesos ir palaikančios galios.",
    lv: "Saules māte ir kosmiskā vecāke, atšķirīga no pašas Saules — veckā sārge, kas sūta Sauli ikās dienas ceļojumā un sagaida viņu mājās katru vakaru, pārstāvot mātiš ķo avotu aiz Saules gaismas un uzturošās varas.",
  },
  attributes: ["Sun parent", "Daily journey", "Elder guardian", "Cosmic mother", "Solar origin"],
  symbols: ["Golden bowl", "Dawn gate", "Evening embrace", "Solar wheel"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const menessMate2Meta: DeityMeta = {
  slug: "meness-mate",
  name: { en: "Mēness māte", lt: "Mėnulio Motina", lv: "Mēness māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Mēness māte — Spirit of the Lunar Cycles",
    lt: "Mėnulio Motina — Mėnulinių Ciklų Dvasia",
    lv: "Mēness māte — Mēness Ciklu Gars",
  },
  summary: {
    en: "Mēness māte is the Latvian spirit governing the lunar phases and silver nightlight — the elder guardian of nighttime cycles who guides travelers by moonlight, distinct from Mēness himself as a masculine celestial figure.",
    lt: "Mėnulio Motina yra latvių dvasia, valdanti mėnulio fazes ir sidabrinę nakties šviesą — vyresnė nakties ciklų globėja, nukreipianti keliautojus mėnesienoje, skirtinga nuo paties Mėnulio (Mēness), kuris yra vyriška dangišką figūrą.",
    lv: "Mēness māte ir latviešu gars, kas valda mēness fāzes un sudraba nakts gaismu — veckā nakts ciklu sārge, kas vada ceļotājus mēnessgaismā, atšķirīga no patiesā Mēneša kā vīrieša debess figūras.",
  },
  attributes: ["Moon cycles", "Lunar phases", "Night guidance", "Silver light", "Nighttime guardian"],
  symbols: ["Silver crescent", "Moonlit path", "Lunar phases", "Night sky"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const ritaMateMeta: DeityMeta = {
  slug: "rita-mate",
  name: { en: "Rīta māte", lt: "Ryto Motina", lv: "Rīta māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Rīta māte — Mother of Morning and the Awakening Land",
    lt: "Ryto Motina — Ryto ir Prabudusios Žemės Motina",
    lv: "Rīta māte — Rīta un Mosāmās Zemes Māte",
  },
  summary: {
    en: "Rīta māte is the Latvian bringer of morning light and dew — the spirit who awakens the land and signals the start of labor — representing the threshold between night's rest and day's productive work.",
    lt: "Ryto Motina yra latvių ryto šviesos ir rasos nešėja — dvasia, žadinanti žemę ir ženklinanti darbo pradžią — atspindinti slenkstį tarp nakties poilsio ir dienos produktyvaus darbo.",
    lv: "Rīta māte ir latviešu rīta gaismas un rasas nesēja — gars, kas modina zemi un signalizē darba sākumu — pārstāvot slieksni starp nakts atpūtu un dienas produktīvo darbu.",
  },
  attributes: ["Morning", "Dawn", "Dew", "Awakening", "Start of labor"],
  symbols: ["First light", "Morning dew", "Sunrise threshold", "Silver cup"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const vakaraMateMeta: DeityMeta = {
  slug: "vakara-mate",
  name: { en: "Vakara māte", lt: "Vakaro Motina", lv: "Vakara māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Vakara māte — Gentle Mistress of the Setting Sun",
    lt: "Vakaro Motina — Švelni Saulėlydžio Valdovė",
    lv: "Vakara māte — Maigā Saulrieta Valdniece",
  },
  summary: {
    en: "Vakara māte is the Latvian spirit of evening and sunset — the gentle overseer of the cattle's return and the hearth-fire lighting — representing the daily transition from labor to rest and the home's welcome at day's end.",
    lt: "Vakaro Motina yra latvių vakaro ir saulėlydžio dvasia — švelni galvijų grįžimo ir židinių uždegimo prižiūrėtoja — atspindinti kasdienį perėjimą nuo darbo prie poilsio ir namų priėmimą dienos pabaigoje.",
    lv: "Vakara māte ir latviešu vakara un saulrieta gars — maigā lopu atgriešanās un pavarda uguns degšanas uzraudze — pārstāvot ikdienas pāreju no darba uz atpūtu un mājas uztveri dienas beigās.",
  },
  attributes: ["Evening", "Sunset", "Cattle return", "Hearth-fire", "Rest"],
  symbols: ["Sunset glow", "Hearth flame", "Returning cattle", "Dimming sky"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const naktsMateMeta: DeityMeta = {
  slug: "nakts-mate",
  name: { en: "Nakts māte", lt: "Nakties Motina", lv: "Nakts māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Nakts māte — Mistress of the Dark and the Dream",
    lt: "Nakties Motina — Tamsos ir Sapno Valdovė",
    lv: "Nakts māte — Tumsas un Sapņa Valdniece",
  },
  summary: {
    en: "Nakts māte is the Latvian mistress of night who draws the black blanket over the earth — primarily the mother of dreams and necessary silence rather than an agent of fear, representing the rejuvenating darkness that living beings need to continue.",
    lt: "Nakties Motina yra latvių nakties valdovė, tempianti juodą antklodę viršė žemės — visų pirma sapnų motina ir būtinos tylos kūrėja, o ne baimės agentas, atspindinti atjauninančią tamsą, kurios gyvieji turi tęsti.",
    lv: "Nakts māte ir latviešu nakts valdniece, kas uzklāj melno segu pāri zemei — galvenokārt sapņu māte un nepieciešamā klusuma radītāja, nevis baiļu aģents, pārstāvot atjaunojošo tumsu, kas dzīviem vajadzīga turpināšanai.",
  },
  attributes: ["Night", "Dreams", "Darkness", "Sleep", "Silence"],
  symbols: ["Black blanket", "Dark sky", "Dream thread", "Sleeping earth"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};

export const dienasMateMeta: DeityMeta = {
  slug: "dienas-mate",
  name: { en: "Dienas māte", lt: "Dienos Motina", lv: "Dienas māte" },
  domain: "Spirit",
  culture: "LV",
  title: {
    en: "Dienas māte — Watcher of the Day's Full Light",
    lt: "Dienos Motina — Pilnos Dienos Šviesos Prižiūrėtoja",
    lv: "Dienas māte — Dienas Pilnās Gaismas Uzraudze",
  },
  summary: {
    en: "Dienas māte is the Latvian spirit of the daylight hours — the noon-sun's watcher who oversees those laboring in the fields at the high point of day — representing the full productive force of light and the witness of the day's work.",
    lt: "Dienos Motina yra latvių dienos šviesos dvasia — pusdienos saulės prižiūrėtoja, stebinti laukuose dirbančiuosius dienos aukščiausiame taške — atspindinti pilną produktyvią šviesos jėgą ir dienos darbo liudytoją.",
    lv: "Dienas māte ir latviešu dienas gaismas gars — pusdienas saules uzraudze, kas vēro laukos strādājošos dienas augstākajā punktā — pārstāvot pilno produktīvo gaismas spēku un dienas darba liecinieci.",
  },
  attributes: ["Daylight", "Noon", "Field labor", "Full light", "Watchfulness"],
  symbols: ["Noon sun", "Midday heat", "Open field", "Watchful sky"],
  locations: [],
  region: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Barons, Krišjānis: Latvju dainas (1894–1915)",
    "Biezais, Haralds: Die himmlische Götterfamilie der Baltischen Völker (1972)",
  ],
};
