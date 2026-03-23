import type { DeityMeta } from "@/types/content";

export const perkunasMeta: DeityMeta = {
  slug: "perkunas",
  name: "Perkūnas",
  domain: "Celestial",
  epithet: "Thunder that cleaves the canopy",
  summary:
    "Lightning keeps time with the oaks while iron-etched prayers echo over hills and lake skin.",
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
      siteType: "sacred grove",
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
      siteType: "standing stone",
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
};

export const sauleMeta: DeityMeta = {
  slug: "saule",
  name: "Saulė",
  domain: "Celestial",
  epithet: "Amber wheel of morning",
  summary: "The sun-mother rides a burning sledge over marsh mist, pouring warmth into flax fields.",
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
      siteType: "sunrise hill",
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
      siteType: "shoreline",
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
};

export const laimaMeta: DeityMeta = {
  slug: "laima",
  name: "Laima",
  domain: "Forest",
  epithet: "Weaver of fates at the spring edge",
  summary:
    "Destiny is braided quietly where birch bark curls, and choices are tied with river flax.",
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
      siteType: "spring",
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
      siteType: "loft shrine",
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
};

export const zemynaMeta: DeityMeta = {
  slug: "zemyna",
  name: "Žemyna",
  domain: "Earth",
  epithet: "Breath of fertile soil",
  summary: "She keeps the pulse under rye fields and moss, waking seeds with heavy patience.",
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
      siteType: "mound",
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
      siteType: "earth altar",
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
};

export const velniasMeta: DeityMeta = {
  slug: "velnias",
  name: "Velnias",
  domain: "Forest",
  epithet: "Keeper of hollows and bargains",
  summary:
    "A horned shadow in marsh fog, guiding wanderers who pay respect and misguiding those who mock.",
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
      siteType: "marsh crossing",
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
      siteType: "dune shrine",
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
};

export const austejaMeta: DeityMeta = {
  slug: "austeja",
  name: "Austėja",
  domain: "Forest",
  epithet: "Mistress of bees and blooming edges",
  summary:
    "She hums in the timberline, swarming over hollow lindens and calming storms with honeyed smoke.",
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
      siteType: "meadow shrine",
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
      siteType: "living hive",
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
};

export const menulisMeta: DeityMeta = {
  slug: "menulis",
  name: "Mėnulis",
  domain: "Celestial",
  epithet: "Keeper of nocturnal crossings",
  summary: "Silver light on river bends marks the routes of wanderers and wolves alike.",
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
      siteType: "lake edge",
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
      siteType: "shoreline",
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
};

export const dievasMeta: DeityMeta = {
  slug: "dievas",
  name: "Dievas",
  domain: "Celestial",
  epithet: "High stillness above the pines",
  summary: "A distant, patient presence felt in the pause between wind gusts and bell chimes.",
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
      siteType: "city heights",
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
      siteType: "sky field",
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
};

export const gabijaMeta: DeityMeta = {
  slug: "gabija",
  name: "Gabija",
  domain: "Earth",
  epithet: "Ember in the hearth",
  summary: "She curls in coals, guarding thresholds and keeping homes knit together with heat.",
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
      siteType: "kiln",
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
      siteType: "hearth stone",
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
};

export const bangputysMeta: DeityMeta = {
  slug: "bangputys",
  name: "Bangpūtys",
  domain: "Water",
  epithet: "Two-faced wind of the Baltic",
  summary:
    "His cheeks hold both roar and lull; fishermen watch his mood in the curl of grass and wave.",
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
      siteType: "coast",
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
      siteType: "cape",
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
};

export const medineMeta: DeityMeta = {
  slug: "medine",
  name: "Medinė",
  domain: "Forest",
  epithet: "Lady of bark and shadow",
  summary:
    "She is the hush inside spruce trunks, guiding woodcutters who step softly and warning those who rush.",
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
      siteType: "forest stand",
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
      siteType: "forest path",
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
};

export const deitiesMeta = {
  perkunasMeta,
  zemynaMeta,
  sauleMeta,
  laimaMeta,
  velniasMeta,
  austejaMeta,
  menulisMeta,
  dievasMeta,
  gabijaMeta,
  bangputysMeta,
  medineMeta,
};
