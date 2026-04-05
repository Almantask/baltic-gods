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

