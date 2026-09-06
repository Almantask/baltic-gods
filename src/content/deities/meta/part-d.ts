import type { DeityMeta } from "@/types/content";

export const sietynasMeta: DeityMeta = {
  slug: "sietynas",
  name: "Sietynas",
  altNames: {
    en: "Sietynas, Sietiņš, Pleiades, Seven Sleeping Brothers, Celestial Sieve",
    lt: "Sietynas, Sietiņš, Plejadės, Septyni broliai miegantieji, Dangaus sietas",
    lv: "Sietiņš, Sietynas, Plejādes, Septiņi brāļi, Debesu siets",
  },
  domain: "God",
  epithet: {
    en: "The Celestial Sieve — Sovereign of the Pleiades, Astral Agricultural Clock, and Seasonal Rain Regulator",
    lt: "Dangaus sietas — Plejadžių žvaigždyno, kosminio žemdirbių kalendoriaus ir lietų sijojantis valdovas",
    lv: "Debesu siets — Plejāžu zvaigznāja, zemnieku debesu pulksteņa un lietus sijāšanas dievība",
  },
  summary: {
    en: "Sietynas (Latvian: Sietiņš) is the Baltic personification of the Pleiades open star cluster (M45 in Taurus), functioning as the supreme astral clock and agricultural regulator of Baltic folklore. Deriving from Baltic *sietas (sieve), Sietynas is conceived as a cosmic sieve that sifts heavenly waters into gentle raindrops and whose heliacal rising and setting govern spring plowing (Jorė) and autumn rye sowing.",
    lt: "Sietynas (latv. Sietiņš) yra baltų Plejadžių žvaigždžių spiečiaus (M45 Tauro žvaigždyne) personifikacija, veikianti kaip vyriausiasis dangaus laikrodis ir žemdirbystės reguliatorius. Kilęs iš žodžio „sietas“, Sietynas tautosakoje vaizduojamas kaip kosminis sietas, sijojantis lietaus vandenis, o jo padėtis danguje žymi pavasario arimą („Sietynas žaroje – kumelė vagoje“) ir rudens rugiasėję.",
    lv: "Sietiņš (lietuviešu: Sietynas) ir baltu Plejāžu zvaigžņu kopas (M45 Vērša zvaigznājā) personifikācija, kas baltu folklorā kalpo par galveno debesu pulksteni un lauksaimniecības cikla noteicēju. Cēlies no vārda „siets”, Sietiņš dainās un teikās tiek uztverts kā debesu siets, kas sijā lietu, un kura parādīšanās nosaka aršanas un rudzu sējas laiku.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Pleiades", "Sietynas", "Sietiņš", "Ethnoastronomy", "Astral clock", "Rye sowing", "Perkūnas"],
  symbols: [
    { label: "Celestial sieve emblems", detail: "Silver-perforated cosmic sieve (sidabrinis sietas), seven starlight points, falling dew droplets" },
    { label: "Agricultural markers", detail: "Plowing furrow (vaga), spring twilight glow (žara), autumn rye grain (rugiai)" },
    { label: "Mythological kinship", detail: "Seven brothers (septyni broliai), celestial herd of horses, ally of Perkūnas against Velnias" },
    { label: "Sacred loci", detail: "Ethnoastronomical observation hilltops, open eastern horizon slopes, Kulionys astronomical sanctuary" },
  ],
  locations: [
    {
      id: "aukstaitija-pleiades-hill",
      name: "Kulionys Astronomical Sanctuary & Observation Mounds (Aukštaitija, Lithuania)",
      coordinates: [55.31, 25.55],
      region: "Lithuania",
      description: "Historic ethnoastronomical sanctuary and pole-observatory near Lake Želva where ancient observers tracked the heliacal risings of Sietynas and solar alignments.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "sietynas",
      significance: "Ancient Baltic observers tracked the evening disappearance and dawn reappearance of Sietynas to calculate exact dates for plowing fallow fields and sowing winter crops.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Extensive ethnoastronomical documentation and folk calendar analyses by Jonas Vaiškūnas and Libertas Klimka",
    "Over 50 authentic Latvian dainas and folk songs recorded in Krišjānis Barons' Latvju dainas (LD 3018, LD 6809, LD 6756)",
    "Archaic mythological etiologies of Perkūnas and the stolen sieve recorded by Jonas Basanavičius and Jonas Balys",
  ],
  regionDetails: {
    en: "Pan-Baltic Ethnoastronomical Tradition (Lithuania, Latvia, Old Prussia)",
    lt: "Visos baltų žemės (Lietuva, Latvija, Prūsija)",
    lv: "Visas baltu zemes (Lietuva, Latvija, Prūsija)",
  },
  tribe: {
    en: "Lithuanians, Latvians, Curonians, Semigallians, Selonians, Prussians",
    lt: "Lietuviai, latviai, kuršiai, žiemgaliai, sėliai, prūsai",
    lv: "Lietuvieši, latvieši, kurši, zemgaļi, sēļi, prūši",
  },
  period: {
    en: "Ancient Ethnoastronomy to Living Folklore",
    lt: "Senoji etnoastronomija – gyvoji tautosaka",
    lv: "Senā etnoastronomija – dzīvā folklora",
  },
  references: [
    "Jonas Vaiškūnas: Skaitant dangaus ženklus: lietuviško Zodiako pėdsakais (Vilnius: Dominicus Lituanus, 2012)",
    "Libertas Klimka: Senovės lietuvių kosmologija (Vilnius: Mintis, 1994)",
    "Krišjānis Barons: Latvju dainas (Rīga, 1894–1915; dainuskapis.lv records LD 3018, 6809, 6756)",
    "Visuotinė lietuvių enciklopedija: Plejadės / Sietynas (https://www.vle.lt/straipsnis/plejades/)",
    "Nacionālā enciklopēdija: Latviešu mitoloģija / Zvaigznāji (https://enciklopedija.lv/skirklis/10331-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const rungisMeta: DeityMeta = {
  slug: "rungis",
  name: "Rungis",
  altNames: {
    en: "Rungis, Agrarian Fertilizer Spirit, Manure Guardian",
    lt: "Rungis, Dirvos tręšimo ir mėšlavežio dvasia",
    lv: "Rungis, Mēslu mātes līdzinieks, Mēslojuma gars",
  },
  domain: "God",
  epithet: {
    en: "Spirit of Soil Fertility — Guardian of Compost, Manure Decomposition, and Agricultural Renewal",
    lt: "Dirvos trąšumo dvasia — komposto brandos, mėšlavežio apeigų ir žemės atgimimo globėjas",
    lv: "Augsnes auglības gars — mēslojuma spēka, kūtsmēslu un zemes spēka aizbildnis",
  },
  summary: {
    en: "Rungis represents the archaic Baltic personification of soil fertilization, manure composting, and agricultural soil enrichment. Reflected in Baltic agrarian traditions and 19th-century mythography (alongside the authentically attested Latvian Mēslu māte of Latvju dainas LD 29089-0), this agrarian spirit presides over the transformation of animal manure into life-giving compost for ploughed fields.",
    lt: "Rungis baltų tradicijoje įkūnija dirvos tręšimo, mėšlo kompostavimo ir laukų derlingumo didinimo dvasinę galią. Etnografinėse žemdirbystės apeigose ir XIX a. mitografijoje (kartu su latvių dainose LD 29089-0 paliudyta Mēslu māte) ši dvasia siejama su mėšlavežio pavasario darbais, kuomet organinė medžiaga paverčiama dirvos gyvybe.",
    lv: "Rungis baltu tradīcijā iemieso augsnes mēslošanas, komposta un lauku auglības atjaunošanas spēku. Etnogrāfiskajos pavasara mēslu vešanas rituālos un 19. gs. mitogrāfijā (līdzās latviešu folklorā apliecinātajai Mēslu mātei dainā LD 29089-0) šis gars pārrauga kūtsmēslu spēka nodošanu tīrumu zemei.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fertilization", "Manure", "Mēslu māte", "Compost", "Agriculture", "Soil fertility", "Mėšlavežis"],
  symbols: [
    { label: "Agrarian fertilization tools", detail: "Carved ash-wood manure fork (mėšlašakės), wooden dung cart (mėšlavežio ratai), compost pile" },
    { label: "Soil vitality emblems", detail: "Fermenting black humus, sprouted winter rye blade, consecrated bread crust" },
    { label: "Livestock connection", detail: "Cattle barn bedding, first wool shearing offering to manure heap" },
    { label: "Sacred loci", detail: "Farmstead compost heap (mėšlidė), autumn ploughed fallow field, stable threshold" },
  ],
  locations: [
    {
      id: "samogitia-dung-spirit-yard",
      name: "Samogitian & Semigallian Homestead Compost Grounds (Lithuania / Latvia)",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Historic agrarian farmstead middens in Samogitia and Semigallia where the community-wide spring manure-hauling bee (mėšlavežis) was opened with festive libations.",
      siteType: "Household ritual sites",
      aura: "moss",
      deity: "rungis",
      significance: "During the collective spring manure hauling, farmers left ritual offerings at the compost pile to ensure rich soil enrichment without crop scorching.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Authentic ritual shearing song in Krišjānis Barons' Latvju dainas (LD 29089-0: 'Še, mēslu māte, tava daļa...')",
    "Ethnographic records of the communal spring manure-hauling bee (mėšlavežio talka) in Lithuanian and Latvian folklore",
    "Comparative Baltic agricultural mythography analyses by Norbertas Vėlius and Algirdas Julius Greimas",
  ],
  regionDetails: {
    en: "Lithuania & Latvia (Agrarian Farming Regions)",
    lt: "Lietuva ir Latvija (žemdirbiški regionai)",
    lv: "Lietuva un Latvija (zemkopības novadi)",
  },
  tribe: {
    en: "Samogitians, Lithuanians, Semigallians, Latgalians",
    lt: "Žemaičiai, lietuviai, žiemgaliai, latgaliai",
    lv: "Žemaiši, lietuvieši, zemgaļi, latgaļi",
  },
  period: {
    en: "19th Century Historiography & Living Agrarian Folklore",
    lt: "XIX a. mitografija ir etnografinė žemdirbystės tautosaka",
    lv: "19. gs. mitogrāfija un etnogrāfiskā zemkopības folklora",
  },
  references: [
    "Krišjānis Barons: Latvju dainas (Rīga, 1894–1915; dainuskapis.lv record LD 29089-0: Mēslu māte)",
    "Pēteris Šmits: Latviešu tautas ticējumi (Rīga, 1940–1941; ailab.lv: Aitu cirpšana un mēslojums)",
    "Teodor Narbutt: Dzieje starożytne narodu litewskiego, Vol. 1: Mitologia litewska (Vilnius, 1835)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (Vilnius: MEL, 2001)",
    "Lietuvių kalbos žodynas (LKŽ): rungas (http://lkz.lt/)",
  ],
};

export const kizmasMeta: DeityMeta = {
  slug: "kizmas",
  name: "Kizmas",
  altNames: {
    en: "Kizmas, Firewood Guardian, Winter Fuel Protector",
    lt: "Kizmas, Malkų ir žiemos kuro sargas",
    lv: "Kizmas, Malkas krājumu un ziemas kurināmā sargs",
  },
  domain: "God",
  epithet: {
    en: "Guardian of the Woodpile — Sovereign of Winter Firewood, Dry Kindling, and Hearth Fuel Reserves",
    lt: "Malkų rietuvės sargas — žiemos malkų, sausų skiedrų ir židinio kuro atsargų globėjas",
    lv: "Malkas grēdas sargs — ziemas malkas, sauso skaliņu un pavarda kurināmā aizbildnis",
  },
  summary: {
    en: "Kizmas embodies the Baltic domestic spirit presiding over the firewood stack, dry kindling splinters (skiedros / skalos), and winter fuel reserves. Operating in close cooperation with Gabija (the sacred hearth fire) and the Latvian Uguns māte, this domestic guardian protects stored timber from dampness, rotting, and wasteful combustion during long Baltic winters.",
    lt: "Kizmas baltų tradicijoje įkūnija namų ūkio dvasinį sargą, globojantį malkų rietuves, sausas balanas bei žiemos kuro atsargas. Veikdamas kartu su šventosios ugnies deive Gabija ir latvių Uguns māte, šis sargas saugo sukrautą medieną nuo drėgmės, puvimo ir netinkamo sudegimo per ilgąsias žiemos šalnas.",
    lv: "Kizmas baltu tradīcijā iemieso viensētas garu, kas sargā malkas krāvumus, sausos skalus un ziemas kurināmā rezerves. Darbojoties ciešā saskaņā ar mājas pavarda dievību Gabiju un latviešu Uguns māti, šis sargs aizsargā sagatavoto koksni no mitruma, pūšanas un izniekošanas bargajās ziemās.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Firewood", "Woodpiles", "Kindling", "Winter fuel", "Gabija", "Uguns māte", "Hearth"],
  symbols: [
    { label: "Firewood harvesting tools", detail: "Forged splitting wedge, woodcutter's broadaxe (kirvis), crosscut two-man saw" },
    { label: "Winter fuel elements", detail: "Dry birch log with white bark, seasoned pine split (skala), aromatic resin knot" },
    { label: "Domestic guardians", detail: "Hearth fire companion of Gabija, shed roof swallow" },
    { label: "Sacred loci", detail: "Homestead woodpile (malkinė / malkų rietuvė), timber drying shed, hearth log nook" },
  ],
  locations: [
    {
      id: "samogitia-woodpile-threshold",
      name: "Aukštaitija & Samogitia Homestead Woodpiles (Lithuania)",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Traditional Baltic farmstead woodpiles stacked in geometric round or linear cord formations under the eaves of the barn or woodshed.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "kizmas",
      significance: "Before the onset of winter frosts, families completed their wood-stacking and dedicated offerings to domestic fire and fuel spirits to guarantee uninterrupted winter heating.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Ethnographic records of Baltic winter fuel preparation, timber seasoning, and pine splinter lighting (balanos)",
    "Folkloric taboos surrounding sacred firewood selection and hearth fire feeding in LLTI and LFK collections",
    "Comparative studies of Baltic domestic hearth spirits by Norbertas Vėlius and Pranė Dundulienė",
  ],
  regionDetails: {
    en: "Lithuania & Latvia (Woodland Homestead Culture)",
    lt: "Lietuva ir Latvija (miškingų sodybų buitis)",
    lv: "Lietuva un Latvija (mežaino viensētu kultūra)",
  },
  tribe: {
    en: "Lithuanians, Samogitians, Latvians, Curonians",
    lt: "Lietuviai, žemaičiai, latviai, kuršiai",
    lv: "Lietuvieši, žemaiši, latvieši, kurši",
  },
  period: {
    en: "Ethnographic Domestic Traditions",
    lt: "Etnografinė namų ūkio tradicija",
    lv: "Etnogrāfiskā viensētu tradīcija",
  },
  references: [
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (Vilnius: Mokslo ir enciklopedijų leidykla, 2001)",
    "Pranė Dundulienė: Ugnis lietuvių liaudies pasaulėjautoje (Vilnius: Mokslas, 1985)",
    "Pēteris Šmits: Latviešu tautas ticējumi / Uguns (ailab.lv/folklora/ticejumi/uguns.htm)",
    "Nacionālā enciklopēdija: Uguns māte (https://enciklopedija.lv/skirklis/10331-latvie%C5%A1u-mitolo%C4%A3ija)",
  ],
};

export const samanisMeta: DeityMeta = {
  slug: "samanis",
  name: "Samanis",
  altNames: {
    en: "Samanis, Forest Moss Spirit, Guardian of Woodland Floor, Kerpyčius",
    lt: "Samanis, Samanų dvasia, Miško paklotės ir kerpių globėjas, Kerpyčius",
    lv: "Samanis, Sūnu gars, Meža zemsedzes un ķērpju aizbildnis",
  },
  domain: "God",
  epithet: {
    en: "Spirit of the Forest Moss — Sovereign of Woodland Carpets, Peat Moisture, and Log Caulking Lichens",
    lt: "Miško samanų dvasia — girios paklotės, durpyno drėgmės ir rąstinių trobesių kamšymo kerpių valdovas",
    lv: "Meža sūnu gars — meža zemsedzes, purva mitruma un baļķu sūnu aizbildnis",
  },
  summary: {
    en: "Samanis (deriving from Lithuanian samanos, moss) personifies the soft living carpet of the Baltic forest floor, bog vegetation, and moisture-retaining mosses. Documented in historical sources alongside the 16th-century moss and lichen deities Kerpyčius (Kierpiczus) and Šilinyčius (Siliniczus) recorded by Jan Łasicki, and in folk legends as a landscape giant, Samanis guards the delicate micro-ecosystem that shelters seeds and cushions woodland life.",
    lt: "Samanis (kilęs iš žodžio „samanos“) įkūnija gyvąjį girios paklotės kilimą, durpynų augmeniją ir drėgmę išsaugančias samanas. Istoriniuose šaltiniuose siejamas su Jano Lasickio užrašytais miško samanų ir kerpių dievais Kerpyčiumi (Kierpiczus) bei Šilinyčiumi (Siliniczus), kuriems aukota prieš renkant samanas mediniams namams kamšyti, o sakmėse – su ežerus vėsinančiais milžinais.",
    lv: "Samanis (cēlies no lietuviešu vārda „samanos” – sūnas) iemieso meža zemsedzes dzīvo paklāju, purvu sūnas un mitrumu uzturošo veģetāciju. Vēsturiskajos avotos tas saistās ar Jana Lasicija minētajiem sūnu un ķērpju dieviem Kerpyčius un Šilinyčius, kam ziedoja pirms sūnu vākšanas ēku siltināšanai, kā arī ar Meža mātes un Purva mātes valstību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Moss", "Samanos", "Kerpyčius", "Forest floor", "Moisture", "Lichens", "Meža māte", "Łasicki"],
  symbols: [
    { label: "Forest floor emblems", detail: "Velvet emerald sphagnum moss cushion, grey reindeer lichen cluster (kerpės), pine needle mat" },
    { label: "Woodland gathering tools", detail: "Birch bark foraging basket (karbija), wooden moss-packing wedge for log walls" },
    { label: "Forest ecology companions", detail: "Bog bilberry shoot (vaivoras), woodland toad, spruce cone" },
    { label: "Sacred loci", detail: "Deep pine forest hummocks (šilai), mossy erratic boulders (sūnakmeņi), bog margins near Lake Samanis" },
  ],
  locations: [
    {
      id: "aukstaitija-moss-rock",
      name: "Aukštaitija & Labanoras Moss-Covered Glades (Lithuania)",
      coordinates: [55.27, 25.77],
      region: "Lithuania",
      description: "Ancient coniferous forest floor cushions in Labanoras Regional Park where deep sphagnum and peat moss layers protect underlying springs and roots.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "samanis",
      significance: "Traditional woodsmen and builders harvested moss here for caulking wooden log houses, leaving respectful nature offerings upon boulders to preserve forest vitality.",
    },
  ],
  gallery: [],
  materialLegacy: [
    "Chronicle record of moss-gathering rituals for Kerpyčius and Šilinyčius in Jan Łasicki's De diis Samagitarum (1582; publ. 1615)",
    "Folk legends of the landscape-shaping giant Samanis recorded in Lithuanian folklore archives (LLTI)",
    "Ethnographic studies on Baltic forest floor exploitation and log house construction by Norbertas Vėlius and Vacys Milius",
  ],
  regionDetails: {
    en: "Lithuania & Latvia (Deep Coniferous Forest Regions)",
    lt: "Lietuva ir Latvija (spygliuočių miškų ir girios paklotės tradicija)",
    lv: "Lietuva un Latvija (skujkoku mežu un sūnu tradīcija)",
  },
  tribe: {
    en: "Aukštaitians, Samogitians, Latvians, Curonians",
    lt: "Aukštaičiai, žemaičiai, latviai, kuršiai",
    lv: "Augštaiši, žemaiši, latvieši, kurši",
  },
  period: {
    en: "16th Century Chronicles & Living Woodland Folklore",
    lt: "XVI a. istoriniai šaltiniai ir gyvoji miško tautosaka",
    lv: "16. gs. vēstures avoti un dzīvā meža folklora",
  },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterisque Sarmatum (1582 / 1615; ed. Norbertas Vėlius, BRMŠ Vol. 2, 2001)",
    "Vytautas Ališauskas: Jono Lasickio pasakojimas apie žemaičių dievus: tekstas ir kontekstai (Vilnius: VU leidykla, 2012)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (Vilnius: MEL, 2001)",
    "Nacionālā enciklopēdija: Meža māte (https://enciklopedija.lv/skirklis/10331-latvie%C5%A1u-mitolo%C4%A3ija)",
    "Alkas.lt: Jono Lasickio šaltinių tyrimai (https://alkas.lt/)",
  ],
};

export const krumineMeta: DeityMeta = {
  slug: "krumine",
  name: "Krumine",
  altNames: { en: "Krumine", lt: "Krūminė", lv: "Krūminė" },
  domain: "God",
  epithet: {
    en: "Goddess of Cereal Tillering and First Grain Ears",
    lt: "Javų krūmijimosi ir pirmųjų varpų deivė",
    lv: "Labības cerošanas un pirmās vārpas dieviete",
  },
  summary: {
    en: "Krūminė is the Lithuanian agricultural deity of cereal tillering and emerging grain ears (Stryjkowski 1582, Łasicki 1582/1615), invoked during rye sowing for bountiful, bushy growth.",
    lt: "Krūminė yra lietuvių žemdirbystės javų krūmijimosi ir pirmųjų varpų deivė (Strijkovskis 1582 m., Lasickis 1582/1615 m.), šaukta rudeninės rugiasėjės metu vešlumui laiduoti.",
    lv: "Krūminė ir lietuviešu lauksaimniecības dieviete, kas atbild par labības cerošanos un pirmajām vārpām (Stryjkowski 1582, Łasicki 1582/1615).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Cereal tillering", "Grain ears", "Rye sowing", "Žemyna", "Agricultural fertility"],
  symbols: [
    { label: "Sacred symbols", detail: "Tillering rye shoot, Full grain ear, Sowing bowl" }
  ],
  locations: [
    {
      id: "samogitia-grain-boundary",
      name: "Sown Rye Fields of Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Arable winter rye fields across Samogitia where farmers performed sowing rites and chicken offerings to Krūminė.",
      siteType: "Field altars",
      aura: "amber",
      deity: "krumine",
      significance: "At the start of rye sowing, farmers invoked Krūminė to ensure dense tillering and heavy, fruitful grain ears.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Stryjkowski 1582, Łasicki 1582)", lt: "XVI a. (Strijkovskis 1582 m., Łasicki 1582 m.)", lv: "16. gs. (Stryjkowski 1582, Łasicki 1582)" },
  references: [
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582)",
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Nijolė Laurinkienė: Lietuvių deivė Krūminė ir jos atšvaitai slavų tradicijose (2014)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)"
  ],
};

export const lazdonaMeta: DeityMeta = {
  slug: "lazdona",
  name: "Lazdona",
  altNames: { en: "Lazdona", lt: "Lazdona", lv: "Lazdu māte" },
  domain: "God",
  epithet: {
    en: "Goddess of Hazel Trees and Nuts",
    lt: "Lazdynų ir riešutų deivė",
    lv: "Lazdu koku un riekstu dieviete",
  },
  summary: {
    en: "Lazdona is the Baltic deity of hazel groves and nuts (Łasicki 1582, Latvian Lazdu māte), guardian of sacred hazel stands whose wood wards off lightning and vipers.",
    lt: "Lazdona yra baltų lazdynų ir riešutų derliaus deivė (Lasickis 1582 m., latvių Lazdu māte), šventųjų lazdynų globėja, kurios mediena saugo nuo žaibo ir gyvačių.",
    lv: "Lazdona (latviešu Lazdu māte) ir baltu lazdu audžu un riekstu dieviete (Łasicki 1582), kuras koks pasargā no zibens un čūskām.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Hazel tree", "Hazelnuts", "Lightning immunity", "Dowsing", "Keimeris"],
  symbols: [
    { label: "Sacred symbols", detail: "Hazelnut cluster, Twin nut keimeris, Hazel staff, Dowsing fork" }
  ],
  locations: [
    {
      id: "zemaitija-hazel-grove",
      name: "Sacred Hazel Stands of Žemaitija",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Dense protected hazel stands across Žemaitija visited during autumn nut harvests and Midsummer dowsing-wand cutting.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "lazdona",
      significance: "Traditional gathering grounds where hazel branches were cut for lightning protection and twin nuts (keimeris) were sought for luck.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia), Latvia", lt: "Lietuva (Žemaitija), Latvija", lv: "Lietuva (Žemaitija), Latvija" },
  tribe: { en: "Samogitians, Lithuanians, Latvians", lt: "Žemaičiai, lietuviai, latviai", lv: "Žemaiši, lietuvieši, latvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Pranė Dundulienė: Medžiai senovės lietuvių tikėjimuose (1979)",
    "Vykintas Vaitkevičius: Senosios Lietuvos šventvietės: Žemaitija (1998)",
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Visuotinė lietuvių enciklopedija: Lazdona (https://www.vle.lt/straipsnis/lazdona/)"
  ],
};

export const diviriksMeta: DeityMeta = {
  slug: "diviriks",
  name: "Diviriks",
  altNames: { en: "Diviriks", lt: "Diviriks", lv: "Diviriks" },
  domain: "God",
  epithet: {
    en: "Leader of the Gods (Sovereign Aspect of Perkūnas)",
    lt: "Dievų valdovas (valdoviškasis Perkūno aspektas)",
    lv: "Dievu vadonis (Pērkona valdnieka aspekts)",
  },
  summary: {
    en: "Diviriks (Proto-Baltic *Deivarīkīs, 'Leader of the Gods') is the royal sovereign title recorded in the 1252 Hypatian Chronicle as worshipped by King Mindaugas, identified as Perkūnas.",
    lt: "Diviriks (baltų *Deivarīkīs, „Dievų rikis / valdovas“) yra 1252 m. Hipato metraštyje įrašytas karaliaus Mindaugo slapta garbintas dievavardis, laikomas valdoviškuoju Perkūno epitetu.",
    lv: "Diviriks (baltu *Deivarīkīs, 'Dievu vadonis') ir 1252. g. Hypatijas hronikā fiksēts karaļa Mindauga pielūgts dieva vārds, kas atbilst Pērkonam.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Divine sovereignty", "King Mindaugas", "Perkūnas", "Martial triumph", "State pantheon"],
  symbols: [
    { label: "Sacred symbols", detail: "Lightning bolt, Stone thunder-axe, Sacred oak, Fiery steed" }
  ],
  locations: [
    {
      id: "aukstaitija-crossroads-stone",
      name: "Royal Sanctuaries of King Mindaugas",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "Historical 13th-century state centers and sacred oak groves of Mindaugas's realm (Voruta, Kernavė, Vilnius).",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "diviriks",
      significance: "Where King Mindaugas invoked the sovereign gods of the realm before military expeditions and state decisions.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Aukštaitija, Mindaugas Realm)", lt: "Lietuva (Aukštaitija, Mindaugo valda)", lv: "Lietuva (Augštaitija, Mindauga valsts)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "13th Century (1252 Hypatian Chronicle / 1261 Malalas Chronograph)", lt: "XIII a. (1252 m. Hipato metraštis, 1261 m. Malalos kronikos intarpas)", lv: "13. gs. (1252. g. Hypatijas hronika, 1261. g. Malalas hronika)" },
  references: [
    "Hypatian Chronicle / Volhynian Chronicle (entry 1252)",
    "Slavonic Translation of the Chronicle of John Malalas (1261/1262)",
    "Eduardas Volteris: Где искать литовского бога Диверикса (1886)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Gintaras Beresnevičius: Baltų religinės reformos (1995)",
    "Visuotinė lietuvių enciklopedija: Perkūnas (https://www.vle.lt/straipsnis/perkunas/)"
  ],
};

export const pagirnisMeta: DeityMeta = {
  slug: "pagirnis",
  name: "Pagirnis",
  altNames: { en: "Pagirnis", lt: "Pagirnis", lv: "Pagirnis" },
  domain: "God",
  epithet: {
    en: "Guardian of the Quern and Household Bread",
    lt: "Girnų ir namų duonos sargas",
    lv: "Dzirnakmens un mājas maizes sargs",
  },
  summary: {
    en: "Pagirnis is the Lithuanian chthonic-domestic spirit dwelling beneath the handmill quern stone (1605 Jesuit reports), guardian of the household grinding process and flour prosperity.",
    lt: "Pagirnis yra lietuvių chtoniškoji namų dvasia, gyvenanti po rankinėmis girnomis (1605 m. jėzuitų ataskaitos), malimo sėkmės ir duonos skalsos globėjas.",
    lv: "Pagirnis ir lietuviešu mājas gars, kas mājo zem rokas dzirnakmens (1605. g. jezuītu ziņojumi), malšanas procesa un maizes svētības sargs.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Quern stone", "Handmill", "Bread flour", "Žaltys", "Bridal offering"],
  symbols: [
    { label: "Sacred symbols", detail: "Granite quern stone, Fresh flour pinch, Loaf of bread, Linen towel, Grass snake" }
  ],
  locations: [
    {
      id: "samogitia-hillside-quern",
      name: "Traditional Farmstead Quern Bench",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The dedicated handmill corner (girnų kampas, priegirnis) inside historic Lithuanian farmsteads.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "pagirnis",
      significance: "Where the first flour from each grinding was offered into stone crevices and where new brides consecrated their domestic authority.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia, Aukštaitija)", lt: "Lietuva (Žemaitija, Aukštaitija)", lv: "Lietuva (Žemaitija, Augštaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "17th Century (Annuae Litterae Societatis Jesu 1605)", lt: "XVII a. pr. (Jėzuitų metinės ataskaitos 1605 m.)", lv: "17. gs. (Jezuītu gada ziņojumi 1605)" },
  references: [
    "Annuae Litterae Societatis Jesu (1605)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rimantas Balsys: Lietuvių ir prūsų dievai, deivės, dvasios (2006/2010)",
    "Gintaras Beresnevičius: Trumpas lietuvių ir prūsų religijos žodynas (2001)",
    "Mitologijos enciklopedija, Vol. 2 (1999)"
  ],
};

export const jievarasMeta: DeityMeta = {
  slug: "jievaras",
  name: "Jievaras",
  altNames: { en: "Jievaras", lt: "Jievaras", lv: "Jevars" },
  domain: "God",
  epithet: {
    en: "Grain Spirit of the Harvest Bridge",
    lt: "Rugių dvasia ir Jievaro tilto pynė",
    lv: "Labības gars un Jievara tilts",
  },
  summary: {
    en: "Jievaras is the Lithuanian agrarian grain spirit embodied in the final uncut patch of rye, braided into the ritual Jievaro tiltas (Harvest Bridge) to return fertility to Žemyna.",
    lt: "Jievaras yra lietuvių javų dvasia ir derliaus pabaigtuvių apeiginis tiltas (Jievaro tiltas), supinamas iš paskutiniųjų nenupjautų rugių stiebų gyvybinei galiai Žemynai sugrąžinti.",
    lv: "Jievaras ir lietuviešu labības gars, kas iemiesots pēdējos nenopļautajos rudzu stieblos un sapīts Jievara tiltā, lai atgrieztu auglību Zemes mātei.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Harvest end", "Jievaro tiltas", "Rye braid", "Žemyna", "Sutartinės"],
  symbols: [
    { label: "Sacred symbols", detail: "Braided living rye stalks, Loaf of bread and salt, Quail, Earth sod" }
  ],
  locations: [
    {
      id: "aukstaitija-last-sheaf-field",
      name: "Harvest Fields of Lithuania",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "Arable rye and barley fields across Aukštaitija, Dzūkija, Suvalkija, and Žemaitija where the harvest-ending Jievaro tiltas was braided.",
      siteType: "Field altars",
      aura: "amber",
      deity: "jievaras",
      significance: "Where reapers consecrated the final living grain stalks to Žemyna, reciting 'Davei man, žemele, duodam ir tau'.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Aukštaitija, Dzūkija, Suvalkija, Žemaitija)", lt: "Lietuva (Aukštaitija, Dzūkija, Suvalkija, Žemaitija)", lv: "Lietuva (Augštaitija, Dzūkija, Suvalkija, Žemaitija)" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "17th Century (Matthäus Prätorius) & Living Folklore", lt: "XVII a. (Matas Pretorijus) ir gyvoji tautosakos tradicija", lv: "17. gs. (Matthäus Prätorius) un folkloras tradīcija" },
  references: [
    "Matthäus Prätorius: Deliciae Prussicae (late 17th c.)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1989)",
    "Pranė Dundulienė: Lietuvių kalendoriniai ir agrariniai papročiai (1979)",
    "Visuotinė lietuvių enciklopedija: Ievaras (https://www.vle.lt/straipsnis/ievaras/)"
  ],
};

export const atlaibosMeta: DeityMeta = {
  slug: "atlaibos",
  name: "Atlaibos",
  altNames: { en: "Atlaibos", lt: "Atlaibos", lv: "Atlaibos" },
  domain: "God",
  epithet: {
    en: "Obscure Chronicle-Attested Theonym",
    lt: "Istoriniuose šaltiniuose užfiksuotas dievavardis",
    lv: "Hronikās minētais dievvārds",
  },
  summary: {
    en: "Atlaibos is an obscure 16th-century theonym recorded by Jan Łasicki in Samogitia (1582), analyzed in modern Baltic linguistics as a probable corruption of agricultural or threshing terms.",
    lt: "Atlaibos yra Jano Lasickio Žemaitijoje (1582 m.) užrašytas dievavardis, šiuolaikinėje baltų kalbotyroje analizuojamas kaip galimas žemdirbystės ar klojimų terminų iškraipymas.",
    lv: "Atlaibos ir mīklains 16. gadsimta dievvārds, ko Žemaitijā pierakstījis Jans Łasickis (1582), valodniecībā uzskatīts par lauksaimniecības termina sagrozījumu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Jan Łasicki", "1582 Chronicle", "De diis Samagitarum", "Samogitia", "Etymological study"],
  symbols: [
    { label: "Sacred symbols", detail: "Early modern chronicle folio, Samogitian agricultural field" }
  ],
  locations: [
    {
      id: "samogitia-historical-fields",
      name: "Historical Samogitian Settlements",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The historical 16th-century rural settlements of Samogitia documented by early modern chroniclers.",
      siteType: "Field altars",
      aura: "mist",
      deity: "atlaibos",
      significance: "Documented in 16th-century regional chronicle records compiled in Samogitia.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Jonas Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)"
  ],
};

export const ratainicaMeta: DeityMeta = {
  slug: "ratainica",
  name: "Ratainyčia",
  altNames: { en: "Ratainyčia", lt: "Ratainyčia", lv: "Ratainyčia" },
  domain: "God",
  epithet: {
    en: "Guardian of Horses and Cart Sheds",
    lt: "Arklių ir ratainyčių sargas",
    lv: "Zirgu un ratnīcas sargātājs",
  },
  summary: {
    en: "Ratainyčia is a Samogitian deity recorded by Jan Łasicki (1582) as the guardian of horses (equorum deus), linguistically linked to the wagon shed (ratainyčia).",
    lt: "Ratainyčia yra Jano Lasickio (1582 m.) užfiksuota žemaičių arklių dievybė (equorum deus), kalbiškai siejama su ratų pašiūre (ratainyčia).",
    lv: "Ratainyčia ir Jana Lasicka (1582) fiksēta žemaišu zirgu dievība (equorum deus), kas etimoloģiski saistīta ar ratu šķūni (ratainyčia).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Horses", "Cart shed", "Wagons", "Farmstead", "Samogitia"],
  symbols: [
    { label: "Sacred symbols", detail: "Horse, Wooden wagon, Cart shed, Timber beam" }
  ],
  locations: [
    {
      id: "samogitia-farmsteads",
      name: "Rural Farmsteads of Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Historic 16th-century rural settlements across Samogitia where chroniclers recorded traditional farmstead outbuildings and horse husbandry.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "ratainica",
      significance: "The cart shed (ratainyčia) and stables formed the functional center of farm transportation and draft horse maintenance.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Jonas Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Vytautas Jaskevičius: J. Lasickio Žemaitijos dievų sąrašas (2010)"
  ],
};

export const aspelenieMeta: DeityMeta = {
  slug: "aspelenie",
  name: "Aspelenie",
  altNames: { en: "Aspelenie", lt: "Aspelenie", lv: "Aspelenie" },
  domain: "God",
  epithet: {
    en: "Spirit of the Hearth Corner and Domestic Fire",
    lt: "Krosnies kampo ir namų ugnies dvasia",
    lv: "Pavarda stūra un mājas uguns gars",
  },
  summary: {
    en: "Aspelenie is the Lithuanian domestic guardian of the hearth corner and the sacred house snake (Łasicki's Aspelenie angularis), presiding over the recess behind the ash pit.",
    lt: "Aspelenie (Užpelenė / Aslapelė) yra lietuvių krosnies kampo ir namų žalčio dvasia (Lasickio Aspelenie angularis), sauganti užkrosnio ramybę.",
    lv: "Aspelenie ir lietuviešu pavarda stūra un mājas zalkša sargātājs (Lasicka Aspelenie angularis), kas mājo aizkrāsnē.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Hearth", "Domestic peace", "Grass snake", "Ash pit", "Oven corner"],
  symbols: [
    { label: "Sacred symbols", detail: "Hearth snake, Ash embers, Clay hearth, Milk bowl" }
  ],
  locations: [
    {
      id: "samogitian-hearthstone",
      name: "Traditional Hearth Corner, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The masonry hearth and oven corner (užkrosnis, aslapelė) of traditional Lithuanian chimneyless dwellings where domestic snakes and hearth numina were propitiated.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "aspelenie",
      significance: "The recess behind the hearthstone was the sacred domestic sanctuary where fresh milk and bread were offered for household peace.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia, Aukštaitija)", lt: "Lietuva (Žemaitija, Aukštaitija)", lv: "Lietuva (Žemaitija, Augšzeme)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Jonas Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Rimantas Balsys: Lietuvių ir prūsų dievai, deivės, dvasios (2010)",
    "Visuotinė lietuvių enciklopedija: Gabija (https://www.vle.lt/straipsnis/gabija-1/)"
  ],
};

export const kempeMeta: DeityMeta = {
  slug: "kempe",
  name: "Kempe",
  altNames: { en: "Kempe", lt: "Kempė", lv: "Kempė" },
  domain: "God",
  epithet: {
    en: "Botanical Tinder and Tree Fungus Numen",
    lt: "Pinties ir medžio kempės numenas",
    lv: "Koka piepes un sēnes tēls",
  },
  summary: {
    en: "Kempe is an entry in Baltic mythological lists reflecting the Lithuanian botanical noun kempė (bracket/tinder fungus), historically distinguished from genuine chronicled tree spirits.",
    lt: "Kempė yra baltų mitologijos sąrašų vardas, atspindintis lietuvių kalbos žodį kempė (medžio grybas, pintis) ir analizuojamas lyginamojoje mitologijoje.",
    lv: "Kempe ir baltu mitoloģijas sarakstu vārds, kas saistīts ar lietuviešu vārdu kempė (piepe, koka sēne).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Tree fungus", "Polypore", "Tinder", "Forest botany", "Woodland"],
  symbols: [
    { label: "Sacred symbols", detail: "Birch trunk, Bracket fungus, Tinder spark" }
  ],
  locations: [
    {
      id: "samogitian-woodlands",
      name: "Deciduous Woodlands of Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Ancient mixed deciduous and birch forests across western Lithuania where bracket fungi (kempės) were harvested for tinder and traditional crafts.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "kempe",
      significance: "Woodland gathering grounds where traditional tree harvesting and folk material practices were conducted.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th–20th Century (Linguistic & Mythological Studies)", lt: "XVI–XX a. (Kalbotyros ir mitologijos tyrimai)", lv: "16.–20. gs. (Valodniecības un mitoloģijas pētījumi)" },
  references: [
    "Lietuvių kalbos žodynas (LKŽ): kempė (http://www.lkz.lt)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012, 2020)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)"
  ],
};

export const kaurirarisMeta: DeityMeta = {
  slug: "kauriraris",
  name: "Kauriraris",
  altNames: { en: "Kauriraris", lt: "Kauriraris", lv: "Kauriraris" },
  domain: "God",
  epithet: {
    en: "Guardian of Horses and War Protector",
    lt: "Žirgų globėjas ir karo užtarėjas",
    lv: "Zirgu aizgādnis un kara aizstāvis",
  },
  summary: {
    en: "Kauriraris (Stryjkowski's 1582 Chaurirari) is a historical Lithuanian spirit of horse multiplication and wartime peace, venerated with rooster offerings behind the hearth.",
    lt: "Kauriraris (Strijkovskio 1582 m. Chaurirari) yra lietuvių žirgų prieaugio ir taikos nuo priešų dievybė, garbinta užkrosnyje sėdint ant balnų.",
    lv: "Kauriraris (Strijkovska 1582. g. Chaurirari) ir lietuviešu zirgu un miera dievība, kurai ziedoja gaiļus aizkrāsnē, sēžot uz segliem.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Horses", "Warfare", "Saddles", "Rooster sacrifice", "Hearth ritual"],
  symbols: [
    { label: "Sacred symbols", detail: "Horse saddle, Multi-colored rooster, Hearth stone" }
  ],
  locations: [
    {
      id: "samogitian-hearth-saddle-site",
      name: "Domestic Hearth and Saddle Sanctuary, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The traditional household space behind the stove where horse owners sat upon saddles to offer roosters to Chaurirari for horse multiplication and peace.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "kauriraris",
      significance: "Historical 16th-century domestic ritual setting documented by Maciej Stryjkowski combining equestrian equipment with hearth libations.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Maciej Stryjkowski 1582)", lt: "XVI a. (Motiejus Strijkovskis 1582 m.)", lv: "16. gs. (Macejs Strijkovskis 1582)" },
  references: [
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka i wszystkiej Rusi (1582)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rolandas Kregždys: M. Stryjkowskio veikalo teonimai: Chaurirari (Acta Linguistica Lithuanica, 2010)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)"
  ],
};

export const kelukisMeta: DeityMeta = {
  slug: "kelukis",
  name: "Kelukis",
  altNames: { en: "Kelukis", lt: "Kelukis", lv: "Kelukis" },
  domain: "God",
  epithet: {
    en: "Guardian of Roads and Wayfarers",
    lt: "Kelių ir keliautojų globėjas",
    lv: "Ceļu un ceļinieku sargs",
  },
  summary: {
    en: "Kelukis (recorded by Praetorius c. 1690 and Stryjkowski 1582 as Kielu Dziewos) is the Baltic road spirit protecting travellers and wayfarers on journeys.",
    lt: "Kelukis (Pretorijaus apie 1690 m. ir Strijkovskio 1582 m. Kelių dievas) yra baltų kelių ir keliautojų dievaitis, saugantis saugią kelionę.",
    lv: "Kelukis (Pretorija ap 1690. g. un Strijkovska 1582. g. Keliu Dziewos) ir baltu ceļu un ceļinieku aizgādnis.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Roads", "Travel", "Crossroads", "Wayfarers", "Safe return"],
  symbols: [
    { label: "Sacred symbols", detail: "Crossroads, Walking staff, White fowl, Roadside stone" }
  ],
  locations: [
    {
      id: "samogitian-crossroads",
      name: "Ancient Forest Crossroads of Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Historic woodland crossroads and wayside stone heaps where Baltic travellers left offerings for safe journeying and return.",
      siteType: "Sacrifice / offering sites",
      aura: "green",
      deity: "kelukis",
      significance: "Liminal road intersections where offerings were placed and prayers for unhindered transit were spoken.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Prussia", lt: "Lietuva, Prūsija", lv: "Lietuva, Prūsija" },
  tribe: { en: "Samogitians, Lithuanians, Prussians", lt: "Žemaičiai, lietuviai, prūsai", lv: "Žemaiši, lietuvieši, prūši" },
  period: { en: "16th–17th Century (Stryjkowski 1582; Praetorius c. 1690)", lt: "XVI–XVII a. (Strijkovskis 1582 m., Pretorijus apie 1690 m.)", lv: "16.–17. gs. (Strijkovskis 1582, Pretorijs ap 1690)" },
  references: [
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582)",
    "Matthaeus Praetorius: Deliciae Prussicae (c. 1690)",
    "Philipp Ruhig: Littauisch-Deutsches Lexicon (1747)",
    "Christian Gottlieb Mielcke: Littauisch-deutsches Wörterbuch (1800)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 & 3 (1996, 2003)",
    "Vykintas Vaitkevičius: Senosios Lietuvos šventvietės (1998)"
  ],
};

export const kurvaitisMeta: DeityMeta = {
  slug: "kurvaitis",
  name: "Kurvaitis",
  altNames: { en: "Kurvaitis", lt: "Kurvaitis", lv: "Kurvaitis" },
  domain: "God",
  epithet: {
    en: "Guardian of Calves and Lambs",
    lt: "Veršelių ir ėriukų globėjas",
    lv: "Teļu un jēru sargātājs",
  },
  summary: {
    en: "Kurvaitis (Łasicki's Kurvvaiczin Eraiczin) represents the Baltic pastoral guardian pair Karvaitis and Ėraitis, protecting young calves and lambs in the farmstead.",
    lt: "Kurvaitis (Lasickio Kurvvaiczin Eraiczin) atstovauja baltų gyvulininkystės globėjus Karvaitį ir Ėraitį, saugančius atvestus veršelius ir ėriukus.",
    lv: "Kurvaitis (Lasicka Kurvvaiczin Eraiczin) iemieso baltu lopu aizgādņus Karvaiti un Ēraiti, kas sargā jaundzimušos teļus un jērus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Calves", "Lambs", "Livestock", "Barnyard", "Pastoral protection"],
  symbols: [
    { label: "Sacred symbols", detail: "Young calf, Lamb, Barn threshold, Woven salt bag" }
  ],
  locations: [
    {
      id: "samogitian-byre-site",
      name: "Traditional Barnyard and Byre, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The livestock sheds and calf-rearing pens of 16th-century Samogitian homesteads where protective folk magic was performed for newborn livestock.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "kurvaitis",
      significance: "Domestic byres where young calves and lambs received birth consecrations and salt charms against harm.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Jonas Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Rimantas Balsys: Lietuvių ir prūsų dievai, deivės, dvasios (2010)"
  ],
};

export const upinisMeta: DeityMeta = {
  slug: "upinis",
  name: "Upinis",
  altNames: { en: "Upinis", lt: "Upinis", lv: "Upinis" },
  domain: "God",
  epithet: {
    en: "Guardian Spirit of Flowing Waters and Rivers",
    lt: "Tekančių vandenų ir upių dvasia",
    lv: "Tekošo ūdeņu un upju sargātājs",
  },
  summary: {
    en: "Upinis is the Baltic deity of flowing rivers recorded by Jan Łasicki (1582) as Upinis fluuiorum, invoked for water purity and safe river crossings.",
    lt: "Upinis yra baltų tekančių upių dievybė, Jano Lasickio (1582 m.) paminėta kaip Upinis fluuiorum, šaukta vandens skaidrumui ir saugiam persikėlimui.",
    lv: "Upinis ir baltu tekošo upju dievība, ko Jans Lasickis (1582) minējis kā Upinis fluuiorum un kam lūgta ūdens skaidrība un droša pārcelšanās.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Rivers", "Currents", "Water purity", "Fishermen", "Fords", "Samogitia"],
  symbols: [
    { label: "Sacred symbols", detail: "River current, White piglet sacrifice, Sacred ford, Flowing stream" }
  ],
  locations: [
    {
      id: "dubysa-sacred-fords",
      name: "Sacred Fords of the Dubysa, Samogitia",
      coordinates: [55.4, 23.2],
      region: "Lithuania",
      description: "Historic river crossings and confluences along the Dubysa River in central and western Lithuania where ancient river rites and water offerings took place.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "upinis",
      significance: "Documented river artery where seasonal prayers for water purity and unhindered ford crossings were practiced.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia, Aukštaitija)", lt: "Lietuva (Žemaitija, Aukštaitija)", lv: "Lietuva (Žemaitija, Augšzeme)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Jonas Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Pranė Dundulienė: Vanduo lietuvių liaudies pasaulėjautoje (1982)",
    "Vykintas Vaitkevičius: Alkai: baltų šventviečių studija (2003)"
  ],
};

export const deivesValdytojsMeta: DeityMeta = {
  slug: "deives-valdytojos",
  name: "Deivės Valdytojos",
  altNames: { en: "Deivės Valdytojos", lt: "Deivės Valdytojos", lv: "Deives Valdytojas" },
  domain: "God",
  epithet: {
    en: "The Seven Weavers of Human Destiny",
    lt: "Septynios žmogaus likimo audėjos",
    lv: "Septiņas cilvēka likteņa audējas",
  },
  summary: {
    en: "The Deivės Valdytojos are the collective fate goddesses recorded in Baltic folklore who spin, measure, weave, and cut the life thread under Laima's decree.",
    lt: "Deivės Valdytojos yra baltų tautosakos likimo deivių grupė, verpianti, metanti, audžianti ir kerpanti gyvenimo giją pagal Laimos valią.",
    lv: "Deives Valdytojas ir baltu folklorā fiksētā likteņa dieviešu kopa, kas pēc Laimas lēmuma vērpj, auž un nogriež dzīves pavedienu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fate", "Destiny", "Loom", "Spindle", "Life thread", "Laima"],
  symbols: [
    { label: "Sacred symbols", detail: "Spindle, Loom warp, Shears, Linen cloth, Distaff" }
  ],
  locations: [
    {
      id: "aukstaitija-birth-bathhouse",
      name: "Traditional Sacred Bathhouse, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "The traditional rural bathhouse (pirtis) designated in folklore as Laima's sacred threshold for childbirth and the spinning of life destiny.",
      siteType: "Household ritual sites",
      aura: "sky",
      deity: "deives-valdytojos",
      significance: "Sacral birthplace where midwives performed postpartum rites and offered woven textiles for the newborn's favorable fate.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "19th Century Folklore Recordings & Oral Tradition", lt: "XIX a. tautosakos užrašymai ir žodinė tradicija", lv: "19. gs. folklora un mutvārdu tradīcija" },
  references: [
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1989)",
    "Teodor Narbutt: Dzieje starożytne narodu litewskiego (1835–1841)",
    "Pranė Dundulienė: Pagonybė Lietuvoje: Moteriškosios dievybės (1989)",
    "Visuotinė lietuvių enciklopedija: Laima (https://www.vle.lt/straipsnis/laima/)"
  ],
};

export const deiveMeta: DeityMeta = {
  slug: "deive",
  name: "Deivė",
  altNames: { en: "Deivė", lt: "Deivė", lv: "Deive" },
  domain: "God",
  epithet: {
    en: "The Divine Feminine and Sacred Nature Numina",
    lt: "Dieviškasis moteriškumas ir šventųjų alkų dvasios",
    lv: "Dievišķais sievišķums un svētbiržu dievības",
  },
  summary: {
    en: "Deivė is the Proto-Indo-European derived Baltic theonym (*deiwā) designating female deities and sacred numina of groves, waters, and stones.",
    lt: "Deivė yra indoeuropietiškos kilmės baltų dievavardis (*deiwā), žymintis moteriškąsias dievybes, alkų, vandenų ir šventųjų akmenų dvasias.",
    lv: "Deive ir indoeiropiešu cilmes baltu dievvārds (*deiwā), kas apzīmē sieviešu dievības un svētvietu dabas garus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Female deity", "Sacred grove", "Footprint stones", "Linen sashes", "Nature numina"],
  symbols: [
    { label: "Sacred symbols", detail: "Footprint stone, Woven sash (juosta), White linen, Sacred spring" }
  ],
  locations: [
    {
      id: "dzukija-goddess-grove",
      name: "Footprint Stones and Sacred Groves, Dzūkija",
      coordinates: [54.2, 24.0],
      region: "Lithuania",
      description: "Sacred landscape sites in southern Lithuania with cult stones (Deivių pėdos) and ancient groves where female votive offerings were deposited.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "deive",
      significance: "Cult sanctuaries where women left woven sashes, linen towels, and grain to honor the divine feminine.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia, Old Prussia", lt: "Lietuva, Latvija, Senoji Prūsija", lv: "Lietuva, Latvija, Senprūsija" },
  tribe: { en: "Lithuanians, Latvians, Prussians", lt: "Lietuviai, latviai, prūsai", lv: "Lietuvieši, latvieši, prūši" },
  period: { en: "Proto-Baltic to Living Folklore", lt: "Protobaltai iki gyvosios tautosakos", lv: "Protobalti līdz dzīvajai folklorai" },
  references: [
    "Wojciech Smoczyński: Indoeuropejskie podstawy słownictwa bałtyckiego (1982)",
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977)",
    "Pranė Dundulienė: Pagonybė Lietuvoje: Moteriškosios dievybės (1989)",
    "Vykintas Vaitkevičius: Alkai: baltų šventviečių studija (2003)",
    "Visuotinė lietuvių enciklopedija: Baltų religija ir mitologija (https://www.vle.lt/straipsnis/baltu-religija-ir-mitologija/)"
  ],
};

export const girinisMeta: DeityMeta = {
  slug: "girinis",
  name: "Girinis",
  altNames: { en: "Girinis", lt: "Girinis", lv: "Meža vīrs" },
  domain: "God",
  epithet: {
    en: "Lord of the Primeval Forest and Wild Fauna",
    lt: "Girių valdovas ir miško žvėrių šeimininkas",
    lv: "Pirmmežu kungs un savvaļas zvēru valdnieks",
  },
  summary: {
    en: "Girinis (and Miškinis, Latvian Meža vīrs) is the Baltic master of primeval forests, guiding reverent woodsmen and protecting forest animals.",
    lt: "Girinis (ir Miškinis, latvių Meža vīrs) yra baltų senųjų girių valdovas, globojantis žvėris ir teikiantis medžioklės sėkmę.",
    lv: "Girinis (un Miškinis, latviešu Meža vīrs) ir baltu pirmmežu valdnieks, kas aizsargā meža zvērus un svētkokus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Primeval forest", "Wild beasts", "Hunter offerings", "Woodland taboos", "Labanoras"],
  symbols: [
    { label: "Sacred symbols", detail: "Mossy walking staff, Pine grove, Bread on tree stump, Wild wolf" }
  ],
  locations: [
    {
      id: "labanoras-primeval-forest",
      name: "Primeval Forest of Labanoras, Aukštaitija",
      coordinates: [55.2, 25.8],
      region: "Lithuania",
      description: "One of the oldest and largest continuous pine forest wildernesses in eastern Lithuania, the heartland of forest spirit lore and hunter customs.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "girinis",
      significance: "Extensive woodland sanctuary where woodsmen observed silence and left unbloody food offerings on tree stumps before entering.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "16th–17th Century Chronicles & Living Folklore", lt: "XVI–XVII a. kronikos ir gyvoji tautosaka", lv: "16.–17. gs. hronikas un dzīvā folklora" },
  references: [
    "Matthäus Prätorius: Deliciae Prussicae (c. 1690)",
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977)",
    "Pranė Dundulienė: Medžiai senovės lietuvių tikėjimuose (1979)",
    "Krišjānis Barons: Latvju dainas (Dainu skapis)"
  ],
};

export const pagirinisMeta: DeityMeta = {
  slug: "pagirinis",
  name: "Pagirinis",
  altNames: { en: "Pagirinis", lt: "Pagirinis", lv: "Mājas Zalktis" },
  domain: "God",
  epithet: {
    en: "Chthonic Guardian of the Quern and Household Snake",
    lt: "Priegirnio sargas ir namų žaltys",
    lv: "Dzirnakmens un mājas zalkša sargātājs",
  },
  summary: {
    en: "Pagirinis (Pagirnis) is the Baltic household spirit recorded in 16th–17th century sources (Łasicki 1582, Jesuits 1605) residing beneath the quern stone.",
    lt: "Pagirinis (Pagirnis) yra XVI–XVII a. šaltiniuose (Lasickis 1582 m., jėzuitų santykiai 1605 m.) paliudytas namų dvasios ir žalčio kultas po girnomis.",
    lv: "Pagirinis (Pagirnis) ir 16.–17. gs. avotos fiksēts mājas gars, kas mājo zem rokas dzirnakmens.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Quern stone", "Household protection", "Grass snake", "Flour milling", "Bread"],
  symbols: [
    { label: "Sacred symbols", detail: "Quern stone (girnos), Grass snake (žaltys), Fresh flour, Milk bowl" }
  ],
  locations: [
    {
      id: "samogitia-snake-hearth",
      name: "Quern Corner and Hearth Sanctuary, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The traditional handmill alcove (priegirnis) of 16th-century Samogitian homesteads where milk and bread were offered beneath the stone slab.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "pagirinis",
      significance: "Documented domestic sanctuary where bride initiation offerings and flour libations secured household grain prosperity.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia, Aukštaitija)", lt: "Lietuva (Žemaitija, Aukštaitija)", lv: "Lietuva (Žemaitija, Augšzeme)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th–17th Century (Łasicki 1582; Jesuit Reports 1605)", lt: "XVI–XVII a. (Lasickis 1582 m., jėzuitų šaltiniai 1605 m.)", lv: "16.–17. gs. (Lasickis 1582, jezuītu ziņojumi 1605)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Annuae Litterae Societatis Jesu an. 1605 (Vilnius Jesuit College, BRMŠ Vol. 2)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rimantas Balsys: Lietuvių ir prūsų dievai, deivės, dvasios (2010)",
    "Gintaras Beresnevičius: Trumpas lietuvių ir prūsų religijos žodynas (2001)"
  ],
};

export const babilosMeta: DeityMeta = {
  slug: "babilos",
  name: "Babilos",
  altNames: { en: "Babilos", lt: "Babilas", lv: "Babilos" },
  domain: "God",
  epithet: {
    en: "God of Bees, Swarms, and Drones",
    lt: "Bičių spiečių, tranų ir medaus dievas",
    lv: "Bišu, spietu un tranu dievs",
  },
  summary: {
    en: "Babilos (Bubilas) is the Baltic god of bees, swarms, and honey recorded by Jan Łasicki (1582) and Maciej Stryjkowski (1582), paired with Austėja.",
    lt: "Babilas (Bubilas) yra Jano Lasickio (1582 m.) ir Motiejaus Strijkovskio (1582 m.) užfiksuotas bičių, spiečių ir medaus dievas, sudarantis porą su Austėja.",
    lv: "Babilos (Bubilas) ir Jana Lasicka (1582) un Maceja Strijkovska (1582) fiksēts bišu, spietu un medus dievs, kas veido pāri ar Austēju.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Bees", "Honey", "Drones", "Swarming", "Austėja", "Apiary"],
  symbols: [
    { label: "Sacred symbols", detail: "Clay honey pot, Hollow-tree hive (drevė), Buzzing bee, Stove hearth" }
  ],
  locations: [
    {
      id: "musteika-ancient-apiaries",
      name: "Ancient Hollow-Tree Apiaries of Musteika, Dzūkija",
      coordinates: [53.95, 24.35],
      region: "Lithuania",
      description: "Historic tree-hollow beekeeping (drevinė bitininkystė) woodlands where sacred bee-swarming customs and forest hive blessings were maintained.",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "babilos",
      significance: "Traditional apicultural forest reserve preserving centuries-old honey harvesting and bee-spirit reverence.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia, Dzūkija, Aukštaitija)", lt: "Lietuva (Žemaitija, Dzūkija, Aukštaitija)", lv: "Lietuva (Žemaitija, Dzūkija, Augšzeme)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582; Maciej Stryjkowski 1582)", lt: "XVI a. (Jonas Lasickis 1582 m., Motiejus Strijkovskis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582, Macejs Strijkovskis 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka... (1582)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)"
  ],
};

export const sutvarasMeta: DeityMeta = {
  slug: "sutvaras",
  name: "Sutvaras",
  altNames: { en: "Sutvaras", lt: "Sutvaras", lv: "Sutvaras" },
  domain: "God",
  epithet: {
    en: "The Divine Shaper — Creator of Natural Forms",
    lt: "Dieviškasis kūrėjas — gamtos formų suteikėjas",
    lv: "Dievišķais veidotājs — dabas formu radītājs",
  },
  summary: {
    en: "Sutvaras is the Lithuanian deity who shapes physical form, recorded by Łasicki as the 'Creator' (creatorem) invoked by the Samogitians.",
    lt: "Sutvaras yra lietuvių dievybė (Lasickio Sutvaros / creatorem), suteikianti formą fiziniam pasauliui.",
    lv: "Sutvaras ir lietuviešu dievība (Łasicki Sutvaros / creatorem), kas veido fizisko pasauli.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Creation", "Shaping", "Natural order", "Cosmic structure", "Form-giving"],
  symbols: [
    { label: "Sacred symbols", detail: "Clay, Seeds, Earth-mound, Potter's wheel" }
  ],
  locations: [
    {
      id: "samogitia-creator-mound",
      name: "Creator's Hilltop Mound, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A hilltop earthen mound in Samogitia regarded as a cosmic creation site, where Sutvaras was invoked to give form and structure to new enterprises.",
      siteType: "Mythic hills / burial mounds",
      aura: "sky",
      deity: "sutvaras",
      significance: "Priests and community leaders gathered here at the start of major undertakings; offerings of clay and seeds symbolized Sutvaras's power to shape raw nature into ordered form.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka (1582)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Visuotinė lietuvių enciklopedija: Sutvaras (https://www.vle.lt/straipsnis/sutvaras/)"
  ],
};

export const tavalasMeta: DeityMeta = {
  slug: "tavalas",
  name: "Tavalas",
  altNames: { en: "Tavalas", lt: "Tavalas", lv: "Tavalas" },
  domain: "God",
  epithet: {
    en: "God of Strength — Protector of Boundaries",
    lt: "Jėgos dievas — ribų gynėjas",
    lv: "Spēka dievs — robežu sargs",
  },
  summary: {
    en: "Tavalas is the Lithuanian god of physical strength and fortitude, recorded by Łasicki as Tawals.",
    lt: "Tavalas yra lietuvių jėgos ir tvirtybės dievas (Lasickio Tawals).",
    lv: "Tavalas ir lietuviešu spēka un izturības dievs (Łasicki Tawals).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Strength", "Fortitude", "Boundaries", "Defense", "Craft power"],
  symbols: [
    { label: "Sacred symbols", detail: "Iron bar, Hammer, Boundary stone, Shield" }
  ],
  locations: [
    {
      id: "samogitia-strength-mound",
      name: "Strength Hilltop, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "An exposed ridge in Samogitia where Tavalas was honored with offerings of iron bars before battles and community disputes.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "tavalas",
      significance: "The hilltop served as a place to invoke Tavalas's protection of community boundaries and warrior fortitude before any significant conflict.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Hypatian Chronicle (1261; Ipatevskaia letopis)",
    "Gintaras Beresnevičius: Baltų religinės reformos (1995)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 33729-0)"
  ],
};

export const gulbisMeta: DeityMeta = {
  slug: "gulbis",
  name: "Gulbis",
  altNames: { en: "Gulbis", lt: "Gulbis", lv: "Gulbis" },
  domain: "God",
  epithet: {
    en: "The Guardian Swan — Personal Protector of Souls",
    lt: "Sarginis gulbė — asmeninis sielų sargas",
    lv: "Sargājošais gulbis — personīgais dvēseļu aizbildnis",
  },
  summary: {
    en: "Gulbis is the Baltic guardian swan spirit (Łasicki's Gulbi), recorded as a personal protector accompanying each person through life.",
    lt: "Gulbis yra baltų sarginis gulbės dvasia (Lasickio Gulbi), užfiksuota kaip asmeninis sargas, lydintis žmogų.",
    lv: "Gulbis ir baltu sargojošā gulbja gars (Łasicki Gulbi), kas pavada cilvēku viņa dzīvē.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Personal protection", "Swan symbolism", "Solar purity", "Spiritual guidance", "Fate"],
  symbols: [
    { label: "Sacred symbols", detail: "Swan, White feather, Pure water, Solar disc" }
  ],
  locations: [
    {
      id: "latvian-swan-sanctuary",
      name: "Swan Lake Sanctuary, Latvia",
      coordinates: [57.2, 26.5],
      region: "Latvia",
      description: "A lakeside sanctuary in eastern Latvia where swans nested and were considered manifestations of Gulbis, the personal guardian spirit.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "sky",
      deity: "gulbis",
      significance: "Latvian folklore regarded swans as protectors of individual souls; offerings of bread and herbs at the lakeside invoked Gulbis's favor and Laima's blessing.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Samogitians, Latvians", lt: "Lietuviai, žemaičiai, latviai", lv: "Lietuvieši, žemaiši, latvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Pranė Dundulienė: Paukščiai senovės lietuvių tikėjimuose ir mene (1982)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 26064-5, LD 30956-0)",
    "Visuotinė lietuvių enciklopedija: Gulbė (https://www.vle.lt/straipsnis/gulbe/)"
  ],
};

export const ugniazaltisMeta: DeityMeta = {
  slug: "ugniazaltis",
  name: "Ugniažaltis",
  altNames: { en: "Ugniažaltis", lt: "Ugniažaltis", lv: "Ugunīgais Zalktis" },
  domain: "God",
  epithet: {
    en: "The Fiery Snake — Guardian of the Sacred Embers",
    lt: "Ugninis žaltys — šventosios žarijų sargybinis",
    lv: "Ugunīgais zalktis — svēto ogļu sargs",
  },
  summary: {
    en: "Ugniažaltis is the mythic fire-snake of Baltic tradition, a serpent bridging the chthonic realm with the celestial fire of Perkūnas.",
    lt: "Ugniažaltis yra mitinis ugninis baltų tradicijos žaltys, jungiantis gyvatės sferą su dangiškąja ugnies galia.",
    lv: "Ugniažaltis ir mītiskā ugunīgā baltu tradīcijas čūska, kas savieno čūskas sfēru ar debesu spēku.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fire", "Sacred snake", "Hearth guardian", "Lightning herald", "Liminal power"],
  symbols: [
    { label: "Sacred symbols", detail: "Flaming snake, Golden scales, Hearth embers, Coiled serpent" }
  ],
  locations: [
    {
      id: "kernave-fire-snake-hearth",
      name: "Fire Snake Hearthstone, Kernavė, Lithuania",
      coordinates: [54.88, 24.83],
      region: "Lithuania",
      description: "The ancient hearthstone site at Kernavė where the fire-snake Ugniažaltis was venerated as herald of Perkūnas and guardian of the sacred flame.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "ugniazaltis",
      significance: "The golden-scaled fire serpent was believed to dwell in the hearthstone's coals; feeding the sacred fire here maintained the link between the chthonic and celestial realms.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic to 19th-century folklore", lt: "Protobaltiška tradicija iki XIX a. tautosakos", lv: "Proto-baltu tradīcija līdz 19. gs. folklorai" },
  references: [
    "Jonas Basanavičius: Iš gyvenimo vėlių bei velnių (1903)",
    "Norbertas Vėlius: Mitinės lietuvių sakmių būtybės (1977)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Pranė Dundulienė: Ugnis senovės lietuvių pasaulėjautoje (1985)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Visuotinė lietuvių enciklopedija: Aitvaras (https://www.vle.lt/straipsnis/aitvaras/)",
    "Visuotinė lietuvių enciklopedija: Žaltys (https://www.vle.lt/straipsnis/zaltys/)"
  ],
};

export const ausklautsMeta: DeityMeta = {
  slug: "ausklauts",
  name: "Ausklauts",
  altNames: { en: "Ausklauts", lt: "Ausklauts", lv: "Ausklauts" },
  domain: "God",
  epithet: {
    en: "The Divine Listener — Guardian of Oaths and Truth",
    lt: "Dieviškasis klausytojas — priesaikų ir tiesos sargas",
    lv: "Dievišķais klausītājs — zvērestu un patiesības sargs",
  },
  summary: {
    en: "Ausklauts is the Samogitian spirit of divine listening, recorded by Łasicki as invoked 'pro auditu' (for hearing).",
    lt: "Ausklauts yra žemaičių dieviškojo klausymo dvasia (Lasickio Auskluts / pro auditu), užtikrinanti priesaikų liudijimą.",
    lv: "Ausklauts ir žemaitiešu dievišķās klausīšanas gars (Łasicki Auskluts / pro auditu).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Listening", "Justice", "Oaths", "Truth", "Divine witness"],
  symbols: [
    { label: "Sacred symbols", detail: "Ear, Scroll, Whispering wind, Shell" }
  ],
  locations: [
    {
      id: "sambia-oath-spring",
      name: "Oath-Hearing Spring, Sambia, Old Prussia",
      coordinates: [54.9, 20.5],
      region: "Old Prussia",
      description: "A spring in the Sambian Peninsula where oaths and prayers were spoken aloud so Ausklauts could witness them.",
      siteType: "Sacred springs",
      aura: "mist",
      deity: "ausklauts",
      significance: "The spring's clear water symbolized transparency before the divine; oaths sworn here were considered inviolable because Ausklauts heard every word.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Jan Malecki: Libellus de sacrificiis et idolatria veterum Borussorum (1551)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 2437-0)"
  ],
};

export const bentisMeta: DeityMeta = {
  slug: "bentis",
  name: "Bentis",
  altNames: { en: "Bentis", lt: "Bentis", lv: "Bentis" },
  domain: "God",
  epithet: {
    en: "Guardians of Social Harmony",
    lt: "Socialinės harmonijos sargas",
    lv: "Sociālās harmonijas sargs",
  },
  summary: {
    en: "Bentis is the Lithuanian social guardian spirit recorded by Łasicki as joining traveling companions and fostering harmony on journeys.",
    lt: "Bentis yra lietuvių socialinė dievybė (Lasickio Bentis), sujungianti kelio draugus.",
    lv: "Bentis ir lietuviešu sociālā dievība (Łasicki Bentis), kas savieno ceļabiedrus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Social harmony", "Travel", "Peacemaking", "Community bonds", "Reconciliation"],
  symbols: [
    { label: "Sacred symbols", detail: "Handshake, Shared bread, Open path, Balance scale" }
  ],
  locations: [
    {
      id: "samogitia-traveler-shrine",
      name: "Traveler's Roadside Shrine, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A roadside shrine in Samogitia where travelers met and shared bread before journeys, invoking Bentis for companionship and peaceful resolution.",
      siteType: "Seasonal festival locations",
      aura: "mist",
      deity: "bentis",
      significance: "Community members gathered here to settle disputes and form travel partnerships, trusting Bentis to bind companions peacefully.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 31789-0)"
  ],
};

export const lietuvonisMeta: DeityMeta = {
  slug: "lietuvonis",
  name: "Lietuvonis",
  altNames: { en: "Lietuvonis", lt: "Lituwanis", lv: "Lietuvonis" },
  domain: "God",
  epithet: {
    en: "The Rainmaker — Atmospheric Dispenser of Showers",
    lt: "Lietaus davėjas — atmosferinės drėgmės globėjas",
    lv: "Lietus devējs — debesu valgmes aizbildnis",
  },
  summary: {
    en: "Lietuvonis (Lituwanis) is the Baltic atmospheric deity of rainfall and cloud moisture chronicled by Jan Łasicki (1582) and Maciej Stryjkowski (1582).",
    lt: "Lietuvonis (Lituwanis) yra baltų atmosferinė lietaus ir debesų drėgmės dievybė, aprašyta J. Lasickio (1582 m.) ir M. Strijkovskio (1582 m.).",
    lv: "Lietuvonis (Lituwanis) ir baltu atmosfēriskā lietus un mākoņu valgmes dievība, ko aprakstījis Jans Lasickis (1582) un Macejs Strijkovskis (1582).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Rainmaking", "Atmosphere", "Weather control", "Agricultural moisture", "Drought relief"],
  symbols: [
    { label: "Sacred symbols", detail: "Rain clouds, Earthen water pitcher (ąsotis), Variegated fowl feathers, Sprouting rye" }
  ],
  locations: [
    {
      id: "kernave-warrior-boundary",
      name: "Rain Observation Hill, Kernavė, Lithuania",
      coordinates: [54.88, 24.83],
      region: "Lithuania",
      description: "A prominent elevation near Kernavė traditionally used by farming communities for weather observation and seasonal rain-calling prayers.",
      siteType: "Ritual stones",
      aura: "sky",
      deity: "lietuvonis",
      significance: "Community elders gathered here during summer droughts to offer prayers and libations to Lietuvonis for soaking rain.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Samogitia", lt: "Lietuva, Žemaitija", lv: "Lietuva, Žemaitija" },
  tribe: { en: "Lithuanians, Samogitians", lt: "Lietuviai, žemaičiai", lv: "Lietuvieši, žemaiši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (J. Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka (1582)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Krišjānis Barons: Latvju dainas (LD 28356-0)"
  ],
};

export const kalvelisMeta: DeityMeta = {
  slug: "kalvelis",
  name: "Kalvelis",
  altNames: { en: "Teliavelis", lt: "Teliavelis", lv: "Debesu kalējs" },
  domain: "God",
  epithet: {
    en: "The Celestial Smith — Forger of the Sun and Stars",
    lt: "Dangiškasis kalvis — Saulės ir žvaigždžių nukalėjas",
    lv: "Debesu kalējs — Saules un zvaigžņu kalējs",
  },
  summary: {
    en: "Kalvelis (Teliavelis / Debesu kalējs) is the supreme celestial smith and demiurge of Baltic mythology (1252/1261 chronicles), who forged the Sun and weapons of Perkūnas.",
    lt: "Kalvelis (Teliavelis / Debesu kalējs) yra aukščiausiasis baltų mitologijos dangiškasis kalvis demiurgas (1252/1261 m. šaltiniai), nukalęs Saulę ir Perkūno ginklus.",
    lv: "Kalvelis (Teliavelis / Debesu kalējs) ir baltu mitoloģijas debesu kalējs demiurgs (1252/1261. g. hronikas), kas izkala Sauli un Pērkona ieročus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Celestial smithing", "Sun creation", "Divine weapons", "Cosmic order", "Fire and metal"],
  symbols: [
    { label: "Sacred symbols", detail: "Anvil, Hammer (kūjis), Tongs, Radiant Golden Sun, Horizon heat lightning (amalas)" }
  ],
  locations: [
    {
      id: "aukstaitija-celestial-forge",
      name: "Celestial Forge Mound, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "A hilltop mound in Aukštaitija traditionally associated with the celestial smith Kalvelis, where iron-working was ritually initiated.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "kalvelis",
      significance: "Smiths made the first strike of the season here in honor of Kalvelis, whose hammering forged the Sun and crafted the divine weapons that maintain cosmic order.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "13th Century (1252/1261 Hypatian Chronicle)", lt: "XIII a. (1252/1261 m. Hipato metraštis)", lv: "13. gs. (1252/1261 Hypatijas hronika)" },
  references: [
    "Hypatian Chronicle / John Malalas Chronicle (1252 / 1261)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 1 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Pranė Dundulienė: Senovės lietuvių mitologija ir religija (1990)",
    "Krišjānis Barons: Latvju dainas (LD 33729-0)",
    "Visuotinė lietuvių enciklopedija: Teliavelis (https://www.vle.lt/straipsnis/teliavelis/)"
  ],
};

export const kirkisMeta: DeityMeta = {
  slug: "kirkis",
  name: "Kirkis",
  altNames: { en: "Chyurchas", lt: "Kiurchas", lv: "Ķirhis" },
  domain: "God",
  epithet: {
    en: "The Harvest Sheaf Deity — Preserver of Grain Abundance",
    lt: "Javapjūtės pėdo dievybė — grūdų gausos sergėtojas",
    lv: "Ražas kūļa dievība — graudu pārpilnības sargs",
  },
  summary: {
    en: "Kirkis (Chyurchas / Kircho / Curche) is the Baltic harvest and cereal deity recorded in 1249/1455/1582 chronicles, presiding over ripe grain and harvest thanksgiving.",
    lt: "Kirkis (Chyurchas / Kircho / Curche) yra baltų javapjūtės ir javų gausos dievybė, užfiksuota 1249/1455/1582 m. šaltiniuose, globojanti subrendusius grūdus ir pabaigtuvių vaišes.",
    lv: "Kirkis (Chyurchas / Kircho / Curche) ir baltu labības un ražas pārpilnības dievība (1249/1455/1582), kas pārrauga labības nobriešanu un apjumību svinības.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Harvest", "Grain abundance", "Agriculture", "Food supply", "Soil fertility"],
  symbols: [
    { label: "Sacred symbols", detail: "Harvest sheaf idol (pėdo stabas), Sickle, Double ear of grain (jumis), Whole-rye bread loaf" }
  ],
  locations: [
    {
      id: "sambariai-harvest-field",
      name: "Sambariai Harvest Sanctuary, Lithuania",
      coordinates: [55.2, 24.0],
      region: "Lithuania",
      description: "An ancient arable sanctuary where the harvest sheaf idol of Kirkis was woven and celebrated during autumn thanksgiving feasts.",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "kirkis",
      significance: "Farmers cut and braided the final sheaf here, offering beer and fresh sourdough bread to Kirkis for sustained winter grain abundance.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Old Prussia", lt: "Lietuva, Prūsija", lv: "Lietuva, Prūsija" },
  tribe: { en: "Lithuanians, Pruthenians", lt: "Lietuviai, prūsai", lv: "Lietuvieši, prūši" },
  period: { en: "13th–15th Century (1249 Treaty of Christburg / Jan Długosz 1455)", lt: "XIII–XV a. (1249 m. Kristburgo sutartis / 1455 m. J. Dlugošas)", lv: "13.–15. gs. (1249. g. Kristburgas līgums / 1455 Długosz)" },
  references: [
    "Treaty of Christburg (Pactum Christburgense, 1249)",
    "Jan Długosz: Annales seu Cronicae incliti Regni Poloniae (1455–1480)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka (1582)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 1–2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 28523-0)"
  ],
};

export const piziusMeta: DeityMeta = {
  slug: "pizius",
  name: "Pizius",
  altNames: { en: "Pizio", lt: "Pizius", lv: "Pizijs" },
  domain: "God",
  epithet: {
    en: "Tutelary Nuptial Spirit — Guardian of the Bridal Chamber",
    lt: "Santuokinės iniciacijos dvasia — kraitinės klėties sergėtojas",
    lv: "Laulību iniciācijas gars — pūra klēts aizbildnis",
  },
  summary: {
    en: "Pizius is the Baltic tutelary spirit of nuptial initiation, bridal chamber protection, and marital fertility recorded by Jan Łasicki (1582).",
    lt: "Pizius yra baltų santuokinės iniciacijos, kraitinės klėties apsaugos ir jaunavedžių vaisingumo dvasia, aprašyta J. Lasickio (1582 m.).",
    lv: "Pizius ir baltu laulību iniciācijas, pūra klēts aizsardzības un jaunlaulāto auglības gars, ko fiksējis Jans Lasickis (1582).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fertility", "Marriage", "Youth transition", "Sexual rites", "Archaic custom"],
  symbols: [
    { label: "Sacred symbols", detail: "Spolium (groom's gift), Woven bridal sash, Hop vines (apyniai), Unbleached linen bedspread" }
  ],
  locations: [
    {
      id: "samogitia-wedding-farmstead",
      name: "Wedding Rite Farmstead, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A traditional Samogitian farmstead used for wedding ceremonies where Pizius was invoked by youth during nuptial rites.",
      siteType: "Communal feast sites",
      aura: "amber",
      deity: "pizius",
      significance: "Wedding festivities were held here with offerings to Pizius for marital fertility; the rites connected agricultural abundance with human reproduction.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)"
  ],
};

export const devintosMeta: DeityMeta = {
  slug: "devintos",
  name: "Devintos",
  altNames: { en: "Dewingis", lt: "Devingis", lv: "Deviņi" },
  domain: "God",
  epithet: {
    en: "The Sacred Nine — Principle of Cosmic Totality and Healing",
    lt: "Šventasis devynetas — kosminio išbaigtumo ir devynžolių dvasia",
    lv: "Svētie deviņi — kosmiskās pilnības un deviņzāļu spēks",
  },
  summary: {
    en: "Devintos (Dewingis) is the Baltic personification of the sacred number nine (3x3), representing cosmic totality, ritual amplification, and nine-herb healing.",
    lt: "Devintos (Dewingis) yra baltų sakraliojo skaičiaus devyni (3x3) personifikacija, įkūnijanti kosminį išbaigtumą, apeiginį pastiprinimą ir devynžolių gydymą.",
    lv: "Devintos (Dewingis) ir baltu sakrālā skaitļa deviņi (3x3) personifikācija, kas iemieso kosmisko pilnību, rituālo pastiprinājumu un deviņzāļu dziedniecību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sacred number", "Ritual multiplication", "Completion", "Agricultural increase", "Magic"],
  symbols: [
    { label: "Sacred symbols", detail: "Nine-branched staff, Nine-herb wreath (devynžolių vainikas), Nine-pointed star (devyniukė), Nine hearth stones" }
  ],
  locations: [
    {
      id: "aukstaitija-nine-boundary",
      name: "Nine-Fold Boundary Grove, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "A boundary grove in Aukštaitija where nine-fold ritual repetitions were performed to invoke Devintos's power of sacred multiplication.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "devintos",
      significance: "Nine offerings were made at the nine trees of this grove during harvest rites, channeling Devintos's power to multiply the grain and complete magical processes.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Old Prussia", lt: "Lietuva, Prūsija", lv: "Lietuva, Prūsija" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Malecki 1563)", lt: "XVI a. (J. Maleckis 1563 m.)", lv: "16. gs. (Malecki 1563)" },
  references: [
    "Jan Malecki / Hieronymus Malecki: Libellus de sacrificiis et idololatria (1551/1563)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Pranė Dundulienė: Lietuvių liaudies kosmologija ir medicina (1982)",
    "Janīna Kursīte: Mītiskais folklorā, literatūrā, mākslā (1999)",
    "Krišjānis Barons: Latvju dainas (LD 33704-0)"
  ],
};

export const gulbiMeta: DeityMeta = {
  slug: "gulbi",
  name: "Gulbi",
  altNames: { en: "Gulbi Dzievos", lt: "Gulbi dievas", lv: "Gulbi dzievos" },
  domain: "God",
  epithet: {
    en: "The Tutelary Guardian Spirit — Avian Avatar of Divine Grace",
    lt: "Gerasis dvasios sergėtojas — sakralus dangiškosios šviesos paukštis",
    lv: "Labais sarggars — debesu gaismas svētais putns",
  },
  summary: {
    en: "Gulbi (Gulbi dzievos) is the Baltic personal guardian spirit (genius bonus) recorded by Jan Łasicki (1582) and Maciej Stryjkowski (1582), protecting individual destiny and soul light.",
    lt: "Gulbi (Gulbi dzievos) yra baltų asmeninė dvasia sergėtoja (genius bonus), J. Lasickio (1582 m.) ir M. Strijkovskio (1582 m.) aprašyta kaip kiekvieno žmogaus angelas sargas ir sielos vedlys.",
    lv: "Gulbi (Gulbi dzievos) ir baltu personīgais sarggars (genius bonus), ko Jans Lasickis (1582) un Macejs Strijkovskis (1582) aprakstījuši kā katra cilvēka dvēseles aizstāvi un sargeņģeli.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Personal guardian", "Genius bonus", "Soul guide", "Swan symbolism", "Luminous protection", "Destiny"],
  symbols: [
    { label: "Sacred symbols", detail: "White swan, Pristine white swan feather, Luminous protective aura, Lake mirror" }
  ],
  locations: [
    {
      id: "baltic-swan-sanctuary-lake",
      name: "Sacred Swan Lake, Lithuania",
      coordinates: [55.3, 25.4],
      region: "Lithuania",
      description: "A tranquil forest lake where swans gathered undisturbed, honored as the earthly abode of personal guardian spirits (Gulbi dzievos).",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "sky",
      deity: "gulbi",
      significance: "Communities observed a strict taboo against harming swans here, making lakeside bread offerings to propitiate their personal genius bonus.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (J. Lasickis 1582 m.)", lv: "16. gs. (Jans Lasickis 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka (1582)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1 (1958)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 7514-0)"
  ],
};

export const vaivoraMeta: DeityMeta = {
  slug: "vaivora",
  name: "Vaivora",
  altNames: { en: "Vaivora", lt: "Vaivorykštė", lv: "Varavīksne" },
  domain: "God",
  epithet: {
    en: "The Rainbow Maiden — Celestial Sash of Destiny",
    lt: "Vaivorykštės mergelė — dangiškoji likimo juosta",
    lv: "Varavīksnes meita — debesu likteņa josta",
  },
  summary: {
    en: "Vaivora (Vaivorykštė / Laimos juosta / Varavīksne) is the personified rainbow of Baltic folklore, functioning as the cosmic water siphon and celestial sign of restored order.",
    lt: "Vaivora (Vaivorykštė / Laimos juosta / Varavīksne) yra baltų tautosakos personifikuota vaivorykštė, veikianti kaip kosminis vandens siurblys ir dangiškosios darnos atkūrimo ženklas.",
    lv: "Vaivora (Varavīksne / Laimas josta / Dieva josta) ir baltu folkloras personificētā varavīksne, kas darbojas kā kosmiskais ūdens sūcējs un debesu kārtības atjaunotāja.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Rainbow", "Celestial bridge", "Laimos juosta", "Water siphon (straublys)", "Atmospheric order", "Darna"],
  symbols: [
    { label: "Sacred symbols", detail: "Seven-colored woven sash (rinktinė juosta), Sky bow, Rain mist, Stork (gandras), Water-drinking siphon" }
  ],
  locations: [
    {
      id: "zemaitija-rainbow-hilltop",
      name: "Rainbow Observation Hilltop, Žemaitija",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A hilltop in Žemaitija where the rainbow Vaivora was observed after summer storms, marking the restoration of cosmic order.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "vaivora",
      significance: "Farmers gathered on this hill after storms to witness the rainbow as Laima's Belt; its appearance signaled divine approval and was accompanied by prayers for continued blessing.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Archaic oral tradition, 17th–18th c. sources", lt: "Archajiška žodinė tradicija, XVII–XVIII a. šaltiniai", lv: "Arhaiska mutvārdu tradīcija, 17.–18. gs. avoti" },
  references: [
    "Philipp Ruhig: Littauisch-Deutsches Lexikon (1747)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690)",
    "Jonas Basanavičius: Iš gyvenimo vėlių bei velnių (1903)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Krišjānis Barons: Latvju dainas (LD 34039-8)"
  ],
};

export const perkunasTikrasMeta: DeityMeta = {
  slug: "perkunas-tikras",
  name: "Perkūnas Tikras",
  altNames: { en: "True Perkūnas", lt: "Percunos Tikros", lv: "Īstais Pērkons" },
  domain: "God",
  epithet: {
    en: "The True Thunderer — Supreme Sovereign of Cosmic Justice",
    lt: "Tikrasis Griaustinis — aukščiausiasis kosminio teisingumo valdovas",
    lv: "Īstais Pērkons — augstākais kosmiskā taisnīguma valdnieks",
  },
  summary: {
    en: "Perkūnas Tikras (Percunos Tikros / Perkunatelete / Īstais Pērkons) is the supreme, authentic sovereign Thunder God of Baltic religion, enforcing moral law and cosmic order.",
    lt: "Perkūnas Tikras (Percunos Tikros / Perkunatelete / Īstais Pērkons) yra aukščiausiasis, autentiškasis baltų religijos Griaustinio Dievo pavidalas, saugantis dorovę ir kosminę darną.",
    lv: "Perkūnas Tikras (Percunos Tikros / Perkunatelete / Īstais Pērkons) ir baltu reliģijas augstākais, suverēnais Pērkona dieva veidols, kas uztur taisnīgumu un kosmisko kārtību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Supreme thunder", "Divine justice", "Cosmic sovereignty", "Archaic epithet", "Storm mastery"],
  symbols: [
    { label: "Sacred symbols", detail: "Flint/stone axe (kirvulis), Lightning arrows, Two-wheeled chariot, Thunder-struck oak, Fiery he-goat" }
  ],
  locations: [
    {
      id: "aukstaitija-thunder-oak-hill",
      name: "Thunder Oak Hilltop, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "A sacred oak-crowned hilltop in Aukštaitija dedicated to Perkūnas Tikras, where lightning-struck oaks were venerated as supreme divine signs.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "perkunas-tikras",
      significance: "The hilltop oak was struck repeatedly by lightning and considered the earthly throne of the True Perkūnas; priests gathered here after storms to interpret divine judgment.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Old Prussia", lt: "Lietuva, Prūsija", lv: "Lietuva, Prūsija" },
  tribe: { en: "Lithuanians, Latvians, Pruthenians", lt: "Lietuviai, latviai, prūsai", lv: "Lietuvieši, latvieši, prūši" },
  period: { en: "16th Century (Jan Malecki 1563)", lt: "XVI a. (J. Maleckis 1563 m.)", lv: "16. gs. (Malecki 1563)" },
  references: [
    "Jan Malecki: Libellus de sacrificiis et idolatria (1551/1563)",
    "Hieronymus Malecki: Ausslegung der Opffer vnd Abgötterey (1561)",
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Nijolė Laurinkienė: Senovės lietuvių dievas Perkūnas (1996)",
    "Krišjānis Barons: Latvju dainas (LD 33701-0, LD 33713-0)"
  ],
};

export const zemininkasMeta: DeityMeta = {
  slug: "zemininkas",
  name: "Žemininkas",
  altNames: { en: "Ziemiennik", lt: "Žemėpatis", lv: "Zemes sargs" },
  domain: "God",
  epithet: {
    en: "Lord of the Farmstead Soil — Steward of the Harvest Furrows",
    lt: "Sodybos žemės valdovas — dirbamo lauko ir arimų globėjas",
    lv: "Saimniecības zemes kungs — arumu un ražas aizbildnis",
  },
  summary: {
    en: "Žemininkas (Ziemiennik / Žemėpatis) is the masculine Baltic deity of the domesticated farmstead soil, harvest first-fruits, and ancestor bonds recorded in 1547/1582 chronicles.",
    lt: "Žemininkas (Ziemiennik / Žemėpatis) yra vyriškoji baltų sodybos dirbamos žemės, javų pabaigtuvių ir protėvių globos dievybė, užfiksuota 1547/1582 m. šaltiniuose.",
    lv: "Žemininkas (Ziemiennik / Žemėpatis) ir baltu sētas apstrādātās zemes, ražas pirmās maizes un senču saiknes vīrišķā dievība (1547/1582).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Earth stewardship", "Agricultural fertility", "Ancestor bonds", "First-harvest", "Sacred snake"],
  symbols: [
    { label: "Sacred symbols", detail: "Grass snake (žaltys), Dark sourdough loaf, Iron plowshare, Nine-grain harvest sheaf, Threshold stone" }
  ],
  locations: [
    {
      id: "samogitia-field-earth-altar",
      name: "First-Harvest Field Altar, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A field altar at a traditional farmstead in Samogitia where the first sheaf of grain was offered to Žemininkas.",
      siteType: "Field altars",
      aura: "moss",
      deity: "zemininkas",
      significance: "Each farmer's personal bond with their soil was renewed annually at this altar; the offering of first grain acknowledged Žemininkas as mediator between the living and ancestral dead.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Maciej Stryjkowski: Kronika Polska, Litewska, Żmódzka (1582)",
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Martynas Mažvydas: Catechismus (1547)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Krišjānis Barons: Latvju dainas (LD 27519-0)"
  ],
};

export const prigirstisMeta: DeityMeta = {
  slug: "prigirstis",
  name: "Prigirstis",
  altNames: { en: "Prigirszczium", lt: "Prigirstis", lv: "Prigirstis" },
  domain: "God",
  epithet: {
    en: "Divine Auditor of Whispers — Witness of Secret Oaths",
    lt: "Šnabždesių klausytojas — slaptų priesaikų liudininkas",
    lv: "Čukstu uzklausītājs — slepeno zvērestu liecinieks",
  },
  summary: {
    en: "Prigirstis is the Baltic tutelary deity of hearing, whispered prayers, and confidential vows recorded by Jan Łasicki (1582), ensuring sacred speech transmission.",
    lt: "Prigirstis yra baltų dieviškosios klausos, šnabždamų maldų ir slaptų priesaikų dievybė, J. Lasickio (1582 m.) aprašyta kaip slaptosios kalbos liudininkas.",
    lv: "Prigirstis ir baltu dievišķās dzirdes, čukstēto lūgšanu un slepeno zvērestu gars, ko Jans Lasickis (1582) fiksējis kā kluso sarunu uzklausītāju.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Answered prayer", "Divine communication", "Petition", "Ritual efficacy", "Hearing"],
  symbols: [
    { label: "Sacred symbols", detail: "Human ear, Rustling aspen leaf (drebulės lapas), Whispering reed, Pinch of ritual salt, Hearth corner" }
  ],
  locations: [
    {
      id: "samogitia-prayer-stone",
      name: "Petition Stone, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A ritual stone in Samogitia used for spoken prayers to Prigirstis, the spirit who ensured that human petitions reached the divine.",
      siteType: "Ritual stones",
      aura: "mist",
      deity: "prigirstis",
      significance: "Prayers were spoken aloud to the stone as a conduit to Prigirstis; the spirit would then open the channel between human voices and the gods above.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Jan Malecki: Libellus de sacrificiis et idolatria (1551/1563)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Krišjānis Barons: Latvju dainas (LD 33626-0)"
  ],
};

export const salausMeta: DeityMeta = {
  slug: "salaus",
  name: "Salaus",
  altNames: { en: "Szalawis", lt: "Salavijas", lv: "Salaus" },
  domain: "God",
  epithet: {
    en: "Numen of Sweetness — Guardian of Malt and Sacred Mead",
    lt: "Saldumo dvasia — salyklo salinimo ir midaus globėjas",
    lv: "Salduma gars — iesala un svētā medus alus aizbildnis",
  },
  summary: {
    en: "Salaus is the Baltic numen of sweetness, malt saccharification, and mead brewing fermentation recorded by Jan Łasicki (1582).",
    lt: "Salaus yra baltų saldumo, salyklo salinimo ir midaus rūgimo dievybė, aprašyta J. Lasickio (1582 m.).",
    lv: "Salaus ir baltu salduma, iesala saldināšanas un medus alus rūgšanas gars, ko aprakstījis Jans Lasickis (1582).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sweetness", "Honey-mead", "Sacred drinks", "Feasts", "Ritual bonding"],
  symbols: [
    { label: "Sacred symbols", detail: "Honeycomb (koris), Carved wooden mead tankard (kaušas), Linden blossom, Sprouted barley malt (salyklas)" }
  ],
  locations: [
    {
      id: "samogitia-mead-meadow",
      name: "Honey-Mead Meadow, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A flowering meadow in Samogitia associated with beekeeping and mead-brewing, where Salaus was honored at communal feast gatherings.",
      siteType: "Communal feast sites",
      aura: "amber",
      deity: "salaus",
      significance: "Mead brewed from the meadow's honey was dedicated to Salaus before feasts; the spirit's blessing ensured sweetness, proper fermentation, and community bonding.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690)",
    "Ernst Fraenkel: Litauisches etymologisches Wörterbuch (1962–1965)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Krišjānis Barons: Latvju dainas (LD 30274-0, LD 30140-0)"
  ],
};

export const srutisMeta: DeityMeta = {
  slug: "srutis",
  name: "Srutis",
  altNames: { en: "Szrutis", lt: "Srutis", lv: "Srutis" },
  domain: "God",
  epithet: {
    en: "Spirit of Kinetic Current — Living Purifier of Flowing Waters",
    lt: "Kinetinės tėkmės dvasia — gyvojo tekančio vandens apvalytojas",
    lv: "Straumes kinetiskais gars — tekošā dzīvā ūdens attīrītājs",
  },
  summary: {
    en: "Srutis is the Baltic numen of river currents, rapid streams, and living purifying water flow recorded by Jan Łasicki (1582).",
    lt: "Srutis yra baltų upės tėkmės, greitos srovės ir gyvojo tekančio vandens dvasia, aprašyta J. Lasickio (1582 m.).",
    lv: "Srutis ir baltu upes straumes, krāču un tekošā dzīvā ūdens gars, ko fiksējis Jans Lasickis (1582).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["River current", "Water force", "Mill blessing", "Safe crossing"],
  symbols: [
    { label: "Sacred symbols", detail: "River rapids (rėva), Swirling water spiral, Watermill wheel, Polished river pebble (žvirgždas), Trout" }
  ],
  locations: [
    {
      id: "samogitia-stream-crossing",
      name: "Sacred Stream Crossing, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A traditional ford over a fast-flowing stream in Samogitia where millers and travelers propitiated Srutis before crossing.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "srutis",
      significance: "Offerings of grain or coin were cast into the stream at this ford to honor Srutis's living current; the spirit ensured safe crossing and the mill wheel's smooth turning.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. 1615)",
    "Matthäus Praetorius: Deliciae Prussicae (c. 1690)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Krišjānis Barons: Latvju dainas (LD 30890-0, LD 31009-3)"
  ],
};

export const skalsaMeta: DeityMeta = {
  slug: "skalsa",
  name: "Skalsa",
  altNames: { en: "Skalsa", lt: "Skalsa", lv: "Skalsa / Gausa" },
  domain: "God",
  epithet: {
    en: "Numen of Household Abundance & Food Longevity",
    lt: "Namų gausos ir atsargų skalsumo dvasia",
    lv: "Mājas pārticības un krājumu gausuma gars",
  },
  summary: {
    en: "Skalsa is the Baltic numen of domestic abundance and food longevity recorded in 17th-century ethnographic sources (Matthaeus Praetorius) as a cornucopia-like domestic power.",
    lt: "Skalsa yra baltų namų gausos ir maisto ilgaamžiškumo dvasia, XVII a. etnografiniuose šaltiniuose (M. Pretorijaus) aprašyta kaip namų aruodų gausintoja.",
    lv: "Skalsa ir baltu mājas pārticības un krājumu ilguma gars, ko 17. gs. etnogrāfiskajos avotos (Praetorius) aprakstīja kā mājas pārpilnības spēku.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Household abundance", "Larder", "Domestic prosperity", "Grain storage", "Thrift"],
  symbols: [
    { label: "Sacred symbols", detail: "Grain bin, Conjoined twin hazel nut, Bread loaf, Overflowing bowl, Harvest wreath" }
  ],
  locations: [
    {
      id: "samogitia-household-larder",
      name: "Household Larder Shrine, Samogitia",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The larder or storage room of a Samogitian homestead where Skalsa was honored with offerings of the first preserved foods and three ritual loaves.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "skalsa",
      significance: "Skalsa was invoked at the granary to ensure the household's food stores remained plentiful; the numen preserved grain from spoilage throughout winter.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "17th Century (Matthaeus Praetorius c. 1690)", lt: "XVII a. (Matas Pretorijus apie 1690 m.)", lv: "17. gs. (Matthaeus Praetorius ap 1690)" },
  references: [
    "Matthaeus Praetorius: Deliciae Prussicae oder Preussische Schaubühne (c. 1690; BRMŠ Vol. 3)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Lietuvių kalbos žodynas: skalsa (https://ekalba.lt/lietuviu-kalbos-zodynas/)",
    "Krišjānis Barons: Latvju dainas (LD 1416-0, LD 16093-0)"
  ],
};

export const dausosMeta: DeityMeta = {
  slug: "dausos",
  name: "Dausos",
  altNames: { en: "Dausos", lt: "Dausos", lv: "Dausos / Aizsaule / Viņsaule" },
  domain: "God",
  epithet: {
    en: "The Luminous Afterlife — Mountain of Souls",
    lt: "Šviesioji anapasaulis — sielų kalnas",
    lv: "Gaišā aizsaule — dvēseļu kalns",
  },
  summary: {
    en: "Dausos is the Baltic personification of the luminous afterlife paradise atop the cosmic Glass Mountain where ancestral spirits (vėlės) rest in eternal spring.",
    lt: "Dausos yra baltų šviesiojo pomirtinio rojaus personifikacija — dangiškoji karalystė ant stiklo kalno viršūnės, kur vėlės ilsisi amžinajame pavasaryje.",
    lv: "Dausos ir baltu gaišās aizsaules personifikācija uz kosmiskā stikla kalna virsotnes, kur veļi mīt mūžīgā pavasarī.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Afterlife", "Soul paradise", "Glass mountain", "Ancestor realm", "Eternal spring", "Milky Way"],
  symbols: [
    { label: "Sacred symbols", detail: "Glass mountain, Silver tree, White light, Lynx claws, Bear claws, Milky Way" }
  ],
  locations: [
    {
      id: "aukstaitija-soul-meadow-barrow",
      name: "Soul Meadow Barrow Field, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "A barrow field surrounded by sacred meadows in Aukštaitija, traditionally associated with the afterlife realm Dausos and visited during Vėlinės ancestor rites.",
      siteType: "Burial/cremation sites",
      aura: "mist",
      deity: "dausos",
      significance: "The barrow field represented the threshold to the Dausos paradise; offerings of food and light were left here during Vėlinės to guide souls to their luminous celestial home.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians, Old Prussians", lt: "Lietuviai, latviai, prūsai", lv: "Lietuvieši, latvieši, prūši" },
  period: { en: "Proto-Baltic to 19th-century folklore", lt: "Protobaltiška tradicija iki XIX a. tautosakos", lv: "Proto-baltu tradīcija līdz 19. gs. folklorai" },
  references: [
    "Gintaras Beresnevičius: Dausos: pomirtinio gyvenimo samprata senovės lietuvių pasaulėžiūroje (1990)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Visuotinė lietuvių enciklopedija: Dausos (https://www.vle.lt/straipsnis/dausos/)",
    "Krišjānis Barons: Latvju dainas (LD 27760-0, LD 27552-0)"
  ],
};

export const laimeAbstractMeta: DeityMeta = {
  slug: "laime-abstract",
  name: "Laimė (Abstract)",
  altNames: { en: "Laimė (Abstract)", lt: "Laimė (abstrakti)", lv: "Laime (abstrakta)" },
  domain: "God",
  epithet: {
    en: "Personified Fortune — Dynamic Luck & Prosperity",
    lt: "Personifikuota laimė — dinamiška sėkmė ir gerovė",
    lv: "Personificētā laime — dinamiskā veiksme un svētība",
  },
  summary: {
    en: "Laimė (abstract) is the personified principle of dynamic, earned fortune and domestic prosperity, distinguished from ontic fate (Laima) by Algirdas Julius Greimas.",
    lt: "Laimė (abstrakti) yra personifikuotas dinamiškos, pelnytos sėkmės ir gerovės principas, A. J. Greimo atskirtas nuo nekintamo gimimo likimo (Laimos).",
    lv: "Laime (abstrakta) ir personificētais nopelnītās veiksmes un labklājības princips, ko no dzimšanas likteņa (Laimas) nošķīra A. J. Greimass.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fortune", "Earned luck", "Prosperity", "Diligence reward", "Dynamic fate"],
  symbols: [
    { label: "Sacred symbols", detail: "Golden bird, Cornucopia, Weaving loom, Golden spindle, Bright maiden" }
  ],
  locations: [
    {
      id: "zemaitija-fate-birch-grove",
      name: "Fate Birch Grove, Žemaitija",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A birch grove in Žemaitija associated with Laimė's dynamic fortune, where young women made offerings to attract earned luck.",
      siteType: "Sacred groves",
      aura: "sky",
      deity: "laime-abstract",
      significance: "The birch grove was a place for seeking fortune through diligence and prayer; the golden bird of Laimė was said to alight here on those who deserved prosperity.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Archaic folklore & 20th-century mytho-semiotics", lt: "Archajiška tautosaka ir XX a. mitosemiotika", lv: "Arhaiska folklora un 20. gs. mitosemiotika" },
  references: [
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979 / 1992)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Visuotinė lietuvių enciklopedija: Laima (https://www.vle.lt/straipsnis/laima/)",
    "Krišjānis Barons: Latvju dainas (LD 9170-0, LD 32560-0)"
  ],
};

export const negaliMeta: DeityMeta = {
  slug: "negali",
  name: "Negali",
  altNames: { en: "Negali", lt: "Negali", lv: "Negali / Laimas noliktais" },
  domain: "God",
  epithet: {
    en: "Personified Impossibility — The Cosmic Fate Boundary",
    lt: "Kosminio negalėjimo ir lemties ribų personifikacija",
    lv: "Kosmiskās neiespējamības un likteņa robežu personifikācija",
  },
  summary: {
    en: "Negali ('Cannot') is the personified Baltic concept of cosmic limits and immutable fate constraints (corresponding to Latvian Laimas noliktais).",
    lt: "Negali yra personifikuota baltų kosminių ribų ir nekeičiamos lemties draudimų (latv. Laimas noliktais) samprata.",
    lv: "Negali ir personificētais baltu kosmisko robežu un negrozāmā likteņa ierobežojumu (Laimas noliktais) jēdziens.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Impossibility", "Cosmic limit", "Fate boundary", "Divine order", "Acceptance"],
  symbols: [
    { label: "Sacred symbols", detail: "Locked gate, Stone boundary wall, Unreachable peak, Closed eye, Keyless lock" }
  ],
  locations: [
    {
      id: "aukstaitija-cosmic-boundary",
      name: "Cosmic Limit Boundary Stone, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "A boundary stone in Aukštaitija associated with Negali, the cosmic 'Cannot' that marks the limits of human capability and fate.",
      siteType: "Ritual stones",
      aura: "mist",
      deity: "negali",
      significance: "The stone served as a reminder of divine limits; offerings here acknowledged Negali's role in maintaining cosmic order and preventing human hubris.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Archaic Baltic Worldview & Modern Mytho-Structural Analysis", lt: "Archajinė baltų pasaulėžiūra ir šiuolaikinė mitostruktūrinė analizė", lv: "Arhaiskais baltu pasaules uzskats un mitoloģiskā struktūranalīze" },
  references: [
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Gintaras Beresnevičius: Baltų religinės reformos (1995)",
    "Krišjānis Barons: Latvju dainas (LD 9170-0, LD 8716-0)",
    "Janīna Kursīte: Dainu kodekss (2007)"
  ],
};

export const dievaitisMeta: DeityMeta = {
  slug: "dievaitis",
  name: "Dievaitis",
  altNames: { en: "Dievaitis", lt: "Dievaitis", lv: "Dieviņš" },
  domain: "God",
  epithet: {
    en: "The Little God — Approachable Celestial Rider & Field Helper",
    lt: "Mažasis dievas — artimasis dangaus raitelis ir laukų globėjas",
    lv: "Mazais dievs — tuvais debesu jātnieks un druvu sargs",
  },
  summary: {
    en: "Dievaitis / Dieviņš is the young, approachable aspect of the celestial god Dievas in Baltic folklore who rides through fields blessing grain and helping the humble.",
    lt: "Dievaitis yra jaunasis, artimas dangaus dievo Dievo aspektas baltų tautosakoje — raitelis ant balto žirgo, laiminantis pasėlius ir padedantis našlaičiams.",
    lv: "Dieviņš ir jaunais, pieejamais debesu dieva Dieva aspekts baltu folklorā, kas jāj pa laukiem, svētot druvas un palīdzot bāreņiem.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Approachable divine", "Field blessing", "Young rider", "Folk prayer", "Agricultural help"],
  symbols: [
    { label: "Sacred symbols", detail: "White horse, Dapple-grey mount, Plow, Sunbeam, Stork, Silver mantle" }
  ],
  locations: [
    {
      id: "aukstaitija-sky-view-hill",
      name: "Sky-View Hilltop, Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "An open hilltop in Aukštaitija with a wide sky view where Dievaitis was invoked as the approachable young face of the divine during plowing and sowing.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "dievaitis",
      significance: "Farmers greeted Dievaitis at this hilltop at dawn, asking the little god to bless their fields and ride alongside them as a divine companion through the agricultural year.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 19th-century folklore", lt: "Viduramžiai iki XIX a. tautosakos", lv: "Viduslaiki līdz 19. gs. folklorai" },
  references: [
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979 / 1992)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Haralds Biezais: Die Gottesgestalt der alten Letten (1961)",
    "Krišjānis Barons: Latvju dainas (LD 4742-0, LD 33735-0, LD 33687-0)"
  ],
};

export const birdGoddessMeta: DeityMeta = {
  slug: "bird-goddess",
  name: "Bird Goddess",
  altNames: { en: "Bird Goddess", lt: "Paukščių deivė", lv: "Putnu dieviete" },
  domain: "God",
  epithet: {
    en: "Neolithic Bird Goddess & Avian Fate Messenger",
    lt: "Neolito paukščių deivė ir sparnuotoji likimo pranašė",
    lv: "Neolīta putnu dieviete un spārnotā likteņa vēstnese",
  },
  summary: {
    en: "The Bird Goddess (Paukščių deivė / Putnu māte) is the prehistoric avian deity reconstructed by Marija Gimbutas and preserved in Baltic bird folklore and fate-messenger traditions.",
    lt: "Paukščių deivė yra priešistorinė sparnuotoji dievybė, Marijos Gimbutienės rekonstruota iš archeologijos ir išsaugota baltų tautosakos paukščių kulto tradicijoje.",
    lv: "Putnu dieviete (Putnu māte) ir aizvēsturiskā spārnotā dievība (Marija Gimbutas), kas saglabājusies baltu folklorā un likteņa vēstnešu tradīcijā.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Celestial messenger", "Life and death", "Migration", "Fate prophecy", "Spring arrival"],
  symbols: [
    { label: "Sacred symbols", detail: "Wing, Feather, Egg, Cuckoo, Swan, Waterfowl, Amber bird amulet" }
  ],
  locations: [
    {
      id: "curonian-bird-sanctuary",
      name: "Nemunas Delta Bird Sanctuary",
      coordinates: [55.35, 21.2],
      region: "Lithuania",
      description: "The vast wetlands of the Nemunas delta served as a seasonal gathering place for migratory birds revered as messengers of the Bird Goddess. Cranes, storks, and cuckoos were observed here as omens of fate.",
      siteType: "Sacred groves",
      aura: "sky",
      deity: "bird-goddess",
      significance: "Sacred wetland where migratory birds congregated, their calls interpreted as divine prophecy from the celestial Bird Goddess linking the living to the realm of the dead.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Pre-Indo-European, Proto-Baltic", lt: "Priešindoeuropiečiai, protobaltai", lv: "Pirmsindoeiropieši, protobalti" },
  period: { en: "Neolithic Old Europe (Marija Gimbutas 1989)", lt: "Neolito Senoji Europa (M. Gimbutienė 1989 m.)", lv: "Neolīta Senā Eiropa (Marija Gimbutas 1989)" },
  references: [
    "Marija Gimbutas: The Language of the Goddess (1989 / 1999)",
    "Pranė Dundulienė: Paukščiai senuosiuose lietuvių tikėjimuose ir mene (1982 / 2006)",
    "Rimutė Rimantienė: Akmens amžius Lietuvoje (1984)",
    "Krišjānis Barons: Latvju dainas (LD 2675-4, LD 26064-1, LD 33596)"
  ],
};

export const snakeGoddessMeta: DeityMeta = {
  slug: "snake-goddess",
  name: "Snake Goddess",
  altNames: { en: "Snake Goddess", lt: "Gyvatės deivė", lv: "Čūskas dieviete" },
  domain: "God",
  epithet: {
    en: "Neolithic Snake Goddess — Marija Gimbutas Reconstruction",
    lt: "Neolito gyvatės deivė — M. Gimbutienės rekonstrukcija",
    lv: "Neolīta čūskas dieviete — M. Gimbutas rekonstrukcija",
  },
  summary: {
    en: "The Snake Goddess (Gyvatės deivė) is the Old Europe deity of life and regeneration identified by Marija Gimbutas (1989), surviving through the Baltic domestic grass-snake (Žaltys) cult.",
    lt: "Gyvatės deivė yra Senosios Europos gyvybės ir atsinaujinimo deivė, Marijos Gimbutienės (1989 m.) išskirta iš neolito artefaktų ir išlikusi per baltų žalčio kultą.",
    lv: "Čūskas dieviete ir Senās Eiropas dzīvības un atjaunotnes dieviete (Marija Gimbutas 1989), kas folklorā saglabājusies caur zalkša un Māras kultu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Regeneration", "Life-force", "Healing", "Earth power", "Perpetual renewal"],
  symbols: [
    { label: "Sacred symbols", detail: "Spiral, Snake coil, Shedding skin, Eye-goddess motif" }
  ],
  locations: [
    {
      id: "lithuanian-hearthstone-snake-site",
      name: "Sacred Hearthstone of the Grass Snake",
      coordinates: [55.5, 24.0],
      region: "Lithuania",
      description: "Lithuanian farmsteads maintained a special corner near the hearth where sacred grass snakes were kept and fed milk — a living embodiment of the Snake Goddess's presence. These sites survived into the 17th century as documented by Jesuit missionaries.",
      siteType: "Hearth cult zones",
      aura: "green",
      deity: "snake-goddess",
      significance: "Domestic hearthstone cult site where the Snake Goddess was honored through the feeding and protection of sacred household grass snakes as symbols of immortality.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Pre-Indo-European, Proto-Baltic", lt: "Priešindoeuropiečiai, protobaltai", lv: "Pirmsindoeiropieši, protobalti" },
  period: { en: "Neolithic to Iron Age (Marija Gimbutas 1989)", lt: "Neolitas iki geležies amžiaus (M. Gimbutienė 1989 m.)", lv: "Neolīts līdz dzelzs laikmetam (Marija Gimbutas 1989)" },
  references: [
    "Marija Gimbutas: The Goddesses and Gods of Old Europe (1974)",
    "Marija Gimbutas: The Language of the Goddess (1989)",
    "Pranė Dundulienė: Žalčiai lietuvių pasaulėjautoje ir dailėje (1979 / 2005)",
    "Visuotinė lietuvių enciklopedija: Baltų religija ir mitologija (https://www.vle.lt/straipsnis/baltu-religija-ir-mitologija/)"
  ],
};

export const whiteLadyMeta: DeityMeta = {
  slug: "white-lady",
  name: "White Lady",
  altNames: { en: "White Lady", lt: "Baltoji Ponia", lv: "Baltā dāma" },
  domain: "God",
  epithet: {
    en: "The White Lady — Spectral Psychopomp",
    lt: "Baltoji Ponia — mirties ir permainos pranašas",
    lv: "Baltā dāma — nāves un pārmaiņu vēstnesis",
  },
  summary: {
    en: "The White Lady (Baltoji Ponia) is a spectral figure in Baltic folklore, a memory of Laima or Giltinė appearing at crossroads, hillforts, and manor ruins.",
    lt: "Baltoji Ponia yra vaiduokliškas personažas baltų tautosakoje (Laimos ar Giltinės atspindys), pasirodantis baltais drabužiais kryžkelėse ir piliakalniuose.",
    lv: "Baltā dāma ir spēkains tēls baltu folklorā (Laimas vai Veļu mātes atspulgs), kas parādās pilskalnos un krustceļos.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Death omen", "Psychopomp", "Ancient mound", "Transition", "Spectral guardian"],
  symbols: [
    { label: "Sacred symbols", detail: "White linen, Mist, Ancient mound, Nightlight, Owl" }
  ],
  locations: [
    {
      id: "zemgale-twilight-crossroads",
      name: "Twilight Crossroads of Zemgale",
      coordinates: [56.5, 24.5],
      region: "Latvia",
      description: "The wooded crossroads of Zemgale's lowlands were believed to be haunted by the White Lady at dusk and dawn — liminal times when the veil between the living and dead was thinnest. Travelers were warned not to linger here after dark.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "white-lady",
      significance: "Crossroads at the boundary between day and night, where the White Lady appeared as a death omen or solemn guide for souls crossing from life to the afterworld.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Marija Gimbutas: The Living Goddesses (1999)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Pēteris Šmits: Latviešu tautas teikas un pasakas (1925–1937)"
  ],
};

export const deerMotherMeta: DeityMeta = {
  slug: "deer-mother",
  name: "Deer Mother",
  altNames: { en: "Deer Mother", lt: "Elnių motina", lv: "Briežu māte" },
  domain: "God",
  epithet: {
    en: "Primordial Deer Mother — Sun Carrier",
    lt: "Pirmapradė elnių motina — saulės nešėja",
    lv: "Pirmatnējā briežu māte — saules nesēja",
  },
  summary: {
    en: "The Deer Mother (Elnių motina) is an archaeomythological forest deity reconstructed by Marija Gimbutas, preserved in Lithuanian solstice dainas of the nine-antlered solar deer.",
    lt: "Elnių motina yra archajinė miško dievybė (M. Gimbutienės rekonstrukcija), tautosakoje išlikusi per advento-kalėdines dainas apie devyniaragį saulės elnią.",
    lv: "Briežu māte ir sena meža dievība (Gimbutas rekonstrukcija), kas folklorā saistīta ar brieža saules nešanas motīviem.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Forest protection", "Wild animals", "Seasonal renewal", "Nine antlers", "Sun carrier"],
  symbols: [
    { label: "Sacred symbols", detail: "Antlers, Golden horns, Nine branches, Sun on antlers, Red deer" }
  ],
  locations: [
    {
      id: "dzukija-ancient-forest-clearing",
      name: "Sacred Deer Clearing of Dzūkija",
      coordinates: [54.2, 24.3],
      region: "Lithuania",
      description: "Deep in the pine forests of Dzūkija, ancient clearings were believed to be the gathering places of the Deer Mother's golden nine-antlered deer. Hunters made offerings here before the hunt and were forbidden from harming deer found resting in such clearings.",
      siteType: "Sacred groves",
      aura: "green",
      deity: "deer-mother",
      significance: "Ancient forest clearing sacred to the Deer Mother, where the golden solar deer carrying the sun on its antlers was believed to appear at solstice and seasonal turning points.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Pre-Indo-European, Proto-Baltic", lt: "Priešindoeuropiečiai, protobaltai", lv: "Pirmsindoeiropieši, protobalti" },
  period: { en: "Mesolithic to Iron Age (Marija Gimbutas 1982)", lt: "Mezolitas iki geležies amžiaus (M. Gimbutienė 1982 m.)", lv: "Mezolīts līdz dzelzs laikmetam (Marija Gimbutas 1982)" },
  references: [
    "Marija Gimbutas: The Goddesses and Gods of Old Europe (1982)",
    "Marija Gimbutas: The Living Goddesses (1999)",
    "Pranė Dundulienė: Gyvybės medis lietuvių mene ir tautosakoje (2008)",
    "Norbertas Vėlius (ed.): Atbėga elnias devyniaragis (1986)"
  ],
};

export const velnioMotinaMeta: DeityMeta = {
  slug: "velnio-motina",
  name: "Velnio Motina",
  altNames: { en: "Velnio Motina", lt: "Velnio motina", lv: "Velna māte" },
  domain: "God",
  epithet: {
    en: "Mother of Velnias — Underworld Matriarch",
    lt: "Velnio motina — požemio matriarchė",
    lv: "Velna māte — pazemes matriarhā",
  },
  summary: {
    en: "Velnio motina is the chthonic matriarch of the devil's household in Baltic folktales (ATU 461, 1121) and etiological legends analyzed by Beresnevičius (2004).",
    lt: "Velnio motina yra chtoniškoji velnio namų matriarchė ir patarėja baltų stebuklinėse pasakose (ATU 461) bei etiologinėse sakmėse (G. Beresnevičius, 2004 m.).",
    lv: "Velna māte ir pazemes saimes matriarhā un padomdevēja baltu pasakās un teikās.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Underworld rulership", "Dark magic", "Source of chthonic forces", "Folktale matriarch", "Iron cauldron"],
  symbols: [
    { label: "Sacred symbols", detail: "Iron pot, Cauldron, Cave, Red cloth, Key to the underworld" }
  ],
  locations: [
    {
      id: "veliuona-chthonic-barrow",
      name: "Chthonic Barrow of Veliuona",
      coordinates: [55.1, 23.5],
      region: "Lithuania",
      description: "The ancient burial mounds near Veliuona were considered entrances to the domain of Velnio Motina — the deepest layer of the underworld where the matriarch of all chthonic forces held court. Offerings were dropped into crevices in the earth during autumn ancestor rites.",
      siteType: "Burial/cremation sites",
      aura: "mist",
      deity: "velnio-motina",
      significance: "Ancient barrow site marking an entrance to the deep underworld, where Velnio Motina was appeased with iron pot offerings as ruler of the chthonic realm and guardian of the dead.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (2004)",
    "Jonas Basanavičius: Iš gyvenimo vėlių bei velnių (1903)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Visuotinė lietuvių enciklopedija: Velnias (https://www.vle.lt/straipsnis/velnias/)"
  ],
};

export const ausraMeta: DeityMeta = {
  slug: "ausra",
  name: "Aušra",
  altNames: { en: "Aušra", lt: "Aušra", lv: "Ausma" },
  domain: "God",
  epithet: {
    en: "Aušra — Goddess of Breaking Dawn",
    lt: "Aušra — auštančios dienos šviesos deivė",
    lv: "Ausma — rīta gaismas dieviete",
  },
  summary: {
    en: "Aušra is the Baltic dawn goddess recorded by Jan Łasicki (1582; publ. 1615 as Ausca) as the personification of breaking morning light and celestial gate opener.",
    lt: "Aušra yra baltų auštančio ryto šviesos personifikacija, Jono Lasickio (1582 m. / 1615 m. kaip Ausca) užrašyta greta Brėkštos ir Bežlėjos.",
    lv: "Ausma ir Baltijas rīta gaismas personifikācija, kas dainās atver debesu vārtus Saulei.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Dawn light", "New beginnings", "Solar gates", "Morning purification", "Celestial herald"],
  symbols: [
    { label: "Sacred symbols", detail: "Golden gates, Morning dew, White robe, Sunbeams, Rosy horizon" }
  ],
  locations: [
    {
      id: "aukstaitija-eastern-dawn-hill",
      name: "Dawn Hill of Aukštaitija",
      coordinates: [55.6, 25.8],
      region: "Lithuania",
      description: "An east-facing hilltop in the Aukštaitija highlands used for pre-dawn observances during the spring and autumn equinoxes, where devotees gathered to witness Aušra opening the celestial gates for Saulė's chariot. Morning dew collected here was considered sacred.",
      siteType: "Sacred hilltops",
      aura: "amber",
      deity: "ausra",
      significance: "East-facing ceremonial hilltop where dawn rituals honored Aušra as the divine opener of celestial gates — her golden light the first sign that the solar chariot would traverse the sky.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Proto-Baltic; recorded 1615 (Łasicki)", lt: "Protobaltų laikotarpis; užrašyta 1615 m. (Lasickis)", lv: "Protobaltu periods; ierakstīts 1615 g. (Łasickis)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum (1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (2004)",
    "Visuotinė lietuvių enciklopedija: Aušrinė (https://www.vle.lt/straipsnis/ausrine/)"
  ],
};

export const spindulysMeta: DeityMeta = {
  slug: "spindulys",
  name: "Spindulys",
  altNames: { en: "Spindulys", lt: "Spindulys", lv: "Saules stars" },
  domain: "God",
  epithet: {
    en: "Spindulys — Personified Ray of the Sun",
    lt: "Spindulys — personifikuotas saulės spindulys",
    lv: "Saules stars — personificēts saules stars",
  },
  summary: {
    en: "Spindulys is the personified ray of sunlight in Baltic folk belief, an active emanation of Saulė (identified with the Daughters of the Sun) bringing healing and warmth.",
    lt: "Spindulys yra personifikuotas saulės šviesos spindulys baltų liaudies tikėjime, veikianti Saulės emanacija (mitologijoje tapatinama su Saulės dukterimis).",
    lv: "Saules stars ir personificēts saules gaismas stars baltu folklorā, kas dainās nes dzīvību un siltumu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Solar blessing", "Divine messenger", "Warmth", "Seed awakening", "Heaven-earth connection"],
  symbols: [
    { label: "Sacred symbols", detail: "Golden thread, Sunray, Spindle, Radiant wheel, Light shaft" }
  ],
  locations: [
    {
      id: "aukstaitija-solar-alignment-hill",
      name: "Solar Alignment Hill of Aukštaitija",
      coordinates: [55.7, 25.4],
      region: "Lithuania",
      description: "A natural hilltop in northeastern Lithuania oriented to capture the first rays of sunlight at the summer solstice, used for agricultural blessing ceremonies invoking Spindulys to warm the fields and awaken the seeds below.",
      siteType: "Sacred hilltops",
      aura: "amber",
      deity: "spindulys",
      significance: "Solar alignment hilltop where the personified sunray Spindulys was invoked to bless crops and connect the celestial realm to the earth, each ray a divine blessing from Saulė.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (2004)",
    "Pranė Dundulienė: Lietuvių liaudies kosmologija (1988)",
    "Pēteris Šmits: Latviešu mitoloģija",
    "Visuotinė lietuvių enciklopedija: Saulės dukterys (https://www.vle.lt/straipsnis/saules-dukterys/)"
  ],
};

export const maroDeiveMeta: DeityMeta = {
  slug: "maro-deive",
  name: "Maro Deivė",
  altNames: { en: "Maro Deivė", lt: "Maro deivė", lv: "Mēra māte" },
  domain: "God",
  epithet: {
    en: "Maro Deivė — Goddess of Plague",
    lt: "Maro deivė — maro deivė",
    lv: "Mēra māte — mēra dieviete",
  },
  summary: {
    en: "Maro deivė is the Baltic plague goddess, waving a red cloth to spread epidemic disease (documented in 16th-century Prussian records as Diedewaythe).",
    lt: "Maro deivė yra baltų maro deivė (XVI a. prūsų šaltiniuose užfiksuota kaip Diedewaythe / Didė Dievaitė).",
    lv: "Mēra māte ir baltu mēra dieviete.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Plague", "Collective death", "Epidemic", "Terror", "Inevitable fate"],
  symbols: [
    { label: "Sacred symbols", detail: "Red cloth, White robe, Pale horse, Boundary fires" }
  ],
  locations: [
    {
      id: "samogitian-plague-barrier-crossroads",
      name: "Plague Barrier Crossroads of Samogitia",
      coordinates: [55.9, 22.1],
      region: "Lithuania",
      description: "During epidemic outbreaks, villages established ritual plague barriers and marked plague mounds (markapiai) at crossroads and boundaries where Maro Deivė was believed to travel.",
      siteType: "Ritual stones",
      aura: "mist",
      deity: "maro-deive",
      significance: "Crossroads and boundary sites where protective rites and quarantine barricades were established against collective epidemic mortality.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia, Old Prussia", lt: "Lietuva, Latvija, Prūsija", lv: "Lietuva, Latvija, Prūsija" },
  tribe: { en: "Lithuanians, Latvians, Pruthenians", lt: "Lietuviai, latviai, prūsai", lv: "Lietuvieši, latvieši, prūši" },
  period: { en: "16th-century records to 20th-century folklore", lt: "XVI a. šaltiniai iki XX a. tautosakos", lv: "16. gs. avoti līdz 20. gs. folklorai" },
  references: [
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (2004)",
    "Pranė Dundulienė: Senovės lietuvių mitologija ir religija (1990)",
    "Mažosios Lietuvos enciklopedija: Giltinė (https://www.mle.lt/straipsniai/giltine)",
    "Visuotinė lietuvių enciklopedija: Giltinė (https://www.vle.lt/straipsnis/giltine/)",
    "Asta Skujytė-Razmienė: Maro vaizdiniai lietuvių tautosakoje (Tautosakos darbai, 2016)"
  ],
};

export const pjutisDievasMeta: DeityMeta = {
  slug: "pjutis-dievas",
  name: "Pjūties Dievas",
  altNames: { en: "Pjūties Dievas", lt: "Pjūties dievas", lv: "Pļaujas dievs" },
  domain: "God",
  epithet: {
    en: "Pjūties Dievas — Folk Personification of Harvest Reaping",
    lt: "Pjūties dievas — derliaus pjovimo personifikacija",
    lv: "Pļaujas dievs — pļaujas laika personifikācija",
  },
  summary: {
    en: "Pjūties dievas is the folkloric personification of grain harvest reaping (pjūtis), with historical rites centered on Žemyna and the grain spirit Jievaras (and Latvian Jumis).",
    lt: "Pjūties dievas personifikuoja javapjūtės ir pabaigtuvių metą; istoriškai apeigos buvo skiriamos Žemynai ir javų dvasiai Jievarui (latvių tradicijoje — Jumiui).",
    lv: "Pļaujas dievs personificē ražas novākšanas un apjumību laiku; vēsturiskie rituāli veltīti Žemynai, Jievaram un Jumim.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Harvest completion", "Reaping", "Agricultural cycle closure", "Grain blessing", "Jievaro barzda"],
  symbols: [
    { label: "Sacred symbols", detail: "Sickle, Scythe, Sheaf of grain, Harvest wreath, Braided stalks" }
  ],
  locations: [
    {
      id: "aukstaitija-rye-harvest-field",
      name: "Rye Harvest Fields of Aukštaitija",
      coordinates: [55.6, 25.3],
      region: "Lithuania",
      description: "Traditional rye harvesting grounds of Aukštaitija where the ceremony of Jievaro barzda (braiding the last standing clump of rye for Žemyna) and pabaigtuvės celebrations were performed.",
      siteType: "Field altars",
      aura: "amber",
      deity: "pjutis-dievas",
      significance: "Agricultural field tradition where the last sheaf and braided stalks preserved the vegetative spirit for the next agricultural cycle.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century agrarian folklore", lt: "Viduramžiai iki XX a. agrarinės tautosakos", lv: "Viduslaiki līdz 20. gs. agrārajai folklorai" },
  references: [
    "Pranė Dundulienė: Lietuvių kalendoriniai ir agrariniai papročiai (1979)",
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (2004)",
    "Visuotinė lietuvių enciklopedija: Ievaras (https://www.vle.lt/straipsnis/ievaras/)",
    "Visuotinė lietuvių enciklopedija: Rugiapjūtė (https://www.vle.lt/straipsnis/rugiapjute/)",
    "Visuotinė lietuvių enciklopedija: Pabaigtuvės (https://www.vle.lt/straipsnis/pabaigtuves/)"
  ],
};

// ─── Batch 15 ────────────────────────────────────────────────────────────────

export const perkunoOzelisMeta: DeityMeta = {
  slug: "perkuno-ozelis",
  name: "Perkūno Oželis",
  altNames: { en: "Perkūno Oželis", lt: "Perkūno oželis", lv: "Pērkona kazlēns" },
  domain: "God",
  epithet: {
    en: "Perkūno Oželis — Thunder God's Sacred Snipe",
    lt: "Perkūno oželis — Perkūno dievo oželis",
    lv: "Pērkona kazlēns — Pērkona debesu vēstnesis",
  },
  summary: {
    en: "Perkūno oželis is the Common Snipe (Gallinago gallinago) whose spring flight bleating heralds first thunder and the seasonal awakening of the earth (Laurinkienė 1996).",
    lt: "Perkūno oželis yra perkūnžvirblinis paukštis (Gallinago gallinago), kurio pavasarinio skrydžio mekenimas laikytas Perkūno ožio balsu ir pavasario audrų pranašu (N. Laurinkienė 1996).",
    lv: "Pērkona kazlēns (mērkaziņa) ir svēts putns, kura riesta dziesma paziņo par pavasara pērkona atnākšanu (Laurinkienė 1996, Šmits).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Perkūnas companion", "Spring herald", "Storm messenger", "Sacred bird", "Earth-unlocking"],
  symbols: [
    { label: "Sacred symbols", detail: "Snipe feathers, Spring rain, Goat horns, Tail-feather bleating" }
  ],
  locations: [
    {
      id: "panevezys-thunder-oak-hilltop",
      name: "Wetland Meadows of Central Lithuania",
      coordinates: [55.7, 24.4],
      region: "Lithuania",
      description: "Lowland peat bogs and wetland meadows where the Common Snipe performs its spring display flights, generating the goat-like drumming sound that heralds spring thunder.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "amber",
      deity: "perkuno-ozelis",
      significance: "Wetland breeding grounds where rural communities listened for the first bleating of Perkūno oželis to mark the end of winter dormancy and beginning of spring planting.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic origin to present folklore", lt: "Protobaltiška kilmė iki dabartinės tautosakos", lv: "Proto-baltu izcelsme līdz mūsdienu folklorai" },
  references: [
    "Nijolė Laurinkienė: Senovės lietuvių dievas Perkūnas (1996)",
    "Pranė Dundulienė: Paukščiai senuosiuose lietuvių tikėjimuose ir mene (1982)",
    "Visuotinė lietuvių enciklopedija: Perkūno oželis (https://www.vle.lt/straipsnis/perkuno-ozelis/)",
    "Pēteris Šmits: Latviešu tautas ticējumi (1940–1941)"
  ],
};

export const perkunoKulkaMeta: DeityMeta = {
  slug: "perkuno-kulka",
  name: "Perkūno Kulka",
  altNames: { en: "Perkūno Kulka", lt: "Perkūno kulka", lv: "Pērkona lode" },
  domain: "God",
  epithet: {
    en: "Perkūno Kulka — Thunderstone of Perkūnas",
    lt: "Perkūno kulka — Perkūno akmuo ir kirvelis",
    lv: "Pērkona lode — Pērkona akmens un bulta",
  },
  summary: {
    en: "Perkūno kulka is the Baltic folk name for belemnite fossils and Neolithic stone axes believed to be projectiles hurled by Perkūnas (Laurinkienė 1996, Balys 1937).",
    lt: "Perkūno kulka (taip pat Perkūno kirvelis, strėlė, pirštas) yra liaudiškas belemnitų fosilijų ir neolito akmeninių kirvelių pavadinimas (N. Laurinkienė 1996, J. Balys 1937).",
    lv: "Pērkona lode (arī Pērkona akmens, bulta) ir tautas nosaukums belemnītiem un seniem akmens cirvjiem (Laurinkienė 1996, Šmits).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Thunderstone", "Perkūnas weapon", "Protective amulet", "Healing object", "Anti-Velnias"],
  symbols: [
    { label: "Sacred symbols", detail: "Belemnite fossil, Stone axe, Flint arrowhead, Pointed stone" }
  ],
  locations: [
    {
      id: "kernave-lightning-struck-oak",
      name: "Sacred Lightning Oaks and River Bluffs",
      coordinates: [55.9, 21.8],
      region: "Lithuania",
      description: "Historic sites of lightning-struck oaks and exposed riverbanks where eroded Cretaceous strata and plowed fields revealed belemnite fossils and prehistoric stone tools.",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "perkuno-kulka",
      significance: "Locations where thunderstones were gathered after violent thunderstorms to serve as household amulets and healing stones.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia, Old Prussia", lt: "Lietuva, Latvija, Senoji Prūsija", lv: "Lietuva, Latvija, Senā Prūsija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas Baltijas ciltis" },
  period: { en: "Neolithic/Iron Age to contemporary folklore", lt: "Neolitas / geležies amžius iki dabartinės tautosakos", lv: "Neolīts / dzelzs laikmets līdz mūsdienu folklorai" },
  references: [
    "Nijolė Laurinkienė: Senovės lietuvių dievas Perkūnas (1996)",
    "Jonas Balys: Perkūnas lietuvių liaudies tikėjimuose (1937)",
    "Visuotinė lietuvių enciklopedija: Perkūnas (https://www.vle.lt/straipsnis/perkunas/)",
    "Pēteris Šmits: Latviešu tautas ticējumi (1940–1941, Nos. 23337–23340)",
    "Tēzaurs: Pērkona lode (https://tezaurs.lv/pērkona_lode)"
  ],
};

export const perkunoRyksteMeta: DeityMeta = {
  slug: "perkuno-rykste",
  name: "Perkūno Rykštė",
  altNames: { en: "Perkūno Rykštė", lt: "Perkūno rykštė", lv: "Dieva pātaga" },
  domain: "God",
  epithet: {
    en: "Perkūno Rykštė — Divine Lightning Whip and Scourge",
    lt: "Perkūno rykštė — žaibo ir teisingumo rykštė",
    lv: "Dieva pātaga — zibens un taisnīguma pātaga",
  },
  summary: {
    en: "Perkūno rykštė (Latvian: Dieva pātaga) is the personification and mythological metaphor for the lightning flash and rainbow as divine instruments of cosmic justice (Laurinkienė 1996, Šmits).",
    lt: "Perkūno rykštė (taip pat Dievo rykštė, ugninė lazda) yra personifikuotas žaibas ir vaivorykštės metafora kaip Perkūno teisingumo įrankis (N. Laurinkienė 1996).",
    lv: "Dieva pātaga (arī Pērkona pātaga) personificē zibens uzliesmojumu un varavīksni kā dievišķā taisnīguma zīmi (Laurinkienė 1996, Šmits).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Lightning personification", "Divine justice", "Perkūnas weapon", "Air purification", "Anti-evil force"],
  symbols: [
    { label: "Sacred symbols", detail: "Lightning bolt, Zig-zag flash, Whip, Fiery staff, Solar cross" }
  ],
  locations: [
    {
      id: "romuva-lightning-rod-oak",
      name: "Perkūnas Oak Groves of Romuva",
      coordinates: [55.0, 22.7],
      region: "Lithuania",
      description: "Sacred oak groves where lightning flashes were perceived as the direct striking presence of Perkūnas pursuing subterranean forces.",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "perkuno-rykste",
      significance: "Sacred groves where thunderbolts and celestial fire demonstrated the power of divine order over chaos.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic origin to present folklore", lt: "Protobaltiška kilmė iki dabartinės tautosakos", lv: "Proto-baltu izcelsme līdz mūsdienu folklorai" },
  references: [
    "Nijolė Laurinkienė: Senovės lietuvių dievas Perkūnas (1996)",
    "Pranė Dundulienė: Senovės lietuvių mitologija ir religija (1990)",
    "Visuotinė lietuvių enciklopedija: Perkūnas (https://www.vle.lt/straipsnis/perkunas/)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)"
  ],
};

export const pincukasMeta: DeityMeta = {
  slug: "pincukas",
  name: "Pinčukas",
  altNames: { en: "Pinčukas", lt: "Pinčukas", lv: "Pinčuks" },
  domain: "God",
  epithet: {
    en: "Pinčukas — Trickster Devil of Paudruvė Marshes",
    lt: "Pinčukas — Paudruvės pelkių velnias",
    lv: "Pinčuks — Paudruves purva velns",
  },
  summary: {
    en: "Pinčukas is the named regional trickster devil of Northern Lithuanian folklore catalogued by Balys (1936, 1956) and immortalized in Kazys Boruta's novel Baltaragio malūnas (1945).",
    lt: "Pinčukas yra vardingas šiaurės Lietuvos tautosakos velnias (J. Balys 1936, 1956; K. Boruta 1945).",
    lv: "Pinčuks ir ziemeļlietuviešu folkloras velns (Balys 1936, 1956; Boruta 1945).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Trickster devil", "Regional spirit", "Marsh dweller", "Mill-builder", "Clumsy antagonist"],
  symbols: [
    { label: "Sacred symbols", detail: "Mill wheel, Playing cards, Cane, German frock coat, Cock feather cap" }
  ],
  locations: [
    {
      id: "paudruve-marsh-woodland",
      name: "Paudruvė Marshland Hollow (Pinčuko lieknas)",
      coordinates: [56.1, 24.3],
      region: "Lithuania",
      description: "The boggy woodland hollows and quagmires of the Paudruvė region (Pasvalys and Biržai districts) where Pinčukas dwelt, playing pranks on unwary travelers and building phantom mills.",
      siteType: "Legendary creation sites",
      aura: "mist",
      deity: "pincukas",
      significance: "Pinčuko lieknas in the Paudruvė wetlands — the legendary lair of the trickster devil immortalized in Kazys Boruta's 1945 novel Baltaragio malūnas.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "19th-century folklore to 20th-century literature", lt: "XIX a. tautosaka iki XX a. literatūros", lv: "19. gs. folklora līdz 20. gs. literatūrai" },
  references: [
    "Jonas Balys: Lietuvių pasakojamosios tautosakos motyvų katalogas (1936)",
    "Jonas Balys: Lietuvių mitologiškos sakmės (1956)",
    "Kazys Boruta: Baltaragio malūnas (1945)",
    "Birutė Jasiūnaitė: Lietuvių velniavardžiai (2018)",
    "Visuotinė lietuvių enciklopedija: Velnias (https://www.vle.lt/straipsnis/velnias/)"
  ],
};

export const ezeruSeimininkeMeta: DeityMeta = {
  slug: "ezeru-seimininke",
  name: "Ežerų Šeimininkė",
  altNames: { en: "Ežerų Šeimininkė", lt: "Ežerų šeimininkė", lv: "Ezera māte" },
  domain: "God",
  epithet: {
    en: "Ežerų Šeimininkė — Mistress of the Lakes",
    lt: "Ežerų šeimininkė — ežerų valdovė",
    lv: "Ezera māte — ezeru māte",
  },
  summary: {
    en: "Ežerų šeimininkė (or Ežerinis) is the personified Baltic lake spirit governing inland waters and fishing luck (Łasicki 1582, Balys 1956).",
    lt: "Ežerų šeimininkė (arba Ežerinis) yra baltų ežerų dvasia, valdanti vandenis ir žūklės sėkmę (J. Lasickis 1582, J. Balys 1956).",
    lv: "Ezera māte (vai ezera gars) ir baltu ezeru dabas gars, kas pārrauga ūdeņus un zvejas laimi (Šmits 1926).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Lake rulership", "Fishing luck", "Underwater kingdom", "Drowned souls", "Water protection"],
  symbols: [
    { label: "Sacred symbols", detail: "Silver crown, Water-lily, Fish scales, Mirror surface, Morning mist" }
  ],
  locations: [
    {
      id: "aukstaitija-sacred-lake-offering-shore",
      name: "Sacred Lake Offering Shore of Aukštaitija",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "The crystal lakes of Aukštaitija — particularly Lake Sartai and the Žeimenys lakes — were approached with token offerings before each fishing season. Fishermen left bread, salt, and first-catch offerings at dawn on the eastern shore to honor the lake mistress.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "ezeru-seimininke",
      significance: "Lakeside offering site where fishermen made gifts to Ežerų Šeimininkė to ensure a successful season, safe return from the water, and protection of the drowned souls in her silver realm.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum (1582)",
    "Jonas Balys: Lietuvių sąmonė ir tautosaka (1956)",
    "Lina Būgienė: Mitinis vandens įprasminimas lietuvių sakmėse, padavimuose ir tikėjimuose (1999)",
    "Visuotinė lietuvių enciklopedija: Ežerinis (https://www.vle.lt/straipsnis/ezerinis/)",
    "Tēzaurs: Ezera māte (https://tezaurs.lv/ezera_m%C4%81te)"
  ],
};

export const milineMeta: DeityMeta = {
  slug: "miline",
  name: "Milinė",
  altNames: { en: "Milinė", lt: "Milinė", lv: "Dzirnavu gars" },
  domain: "God",
  epithet: {
    en: "Malūno dvasia — Spirit of the Mill",
    lt: "Malūno dvasia — malūno ir girnų globa",
    lv: "Dzirnavu gars — malšanas un dzirnavu tradīcija",
  },
  summary: {
    en: "Folkloric personification of Baltic water- and windmill traditions, where mills are liminal spaces of Velnias and grinding is blessed by domestic guardians (Balys 1956, Šmits 1940).",
    lt: "Baltų malūnų ir girnų tradicijos personifikacija: malūnai tautosakoje yra ribinė velnių erdvė, o malimą laimina namų globėjos (J. Balys 1956, P. Šmits 1940).",
    lv: "Baltu dzirnavu un malšanas folkloras tradīcija, kur dzirnavas ir robežtelpa un malšanu svētī Māra un Gausu māte (Šmits 1940).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Mill protection", "Night grinding", "Machinery guardian", "Grain transformation", "Professional spirit"],
  symbols: [
    { label: "Sacred symbols", detail: "Millstone, Water wheel, Flour dust, Wind sails, White cat" }
  ],
  locations: [
    {
      id: "nemunas-mill-river-site",
      name: "River Mill Site of the Nemunas Valley",
      coordinates: [54.9, 23.9],
      region: "Lithuania",
      description: "Ancient water mills along the lower Nemunas river were considered the dwelling places of Milinė. Millers left offerings of flour dust and a candle stub at the mill wheel threshold to maintain the spirit's goodwill and ensure the machinery ran smoothly through the night.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "miline",
      significance: "Historic watermill site where Milinė was honored as the guardian spirit who ground grain at night and maintained the sacred transformation of wheat to flour for those who observed mill taboos.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 19th-century folklore", lt: "Viduramžiai iki XIX a. tautosakos", lv: "Viduslaiki līdz 19. gs. folklorai" },
  references: [
    "Jonas Balys: Lietuvių mitologiškos sakmės (1956)",
    "Pēteris Šmits: Latviešu tautas ticējumi (1940–1941)",
    "Visuotinė lietuvių enciklopedija: Malūnas (https://www.vle.lt/straipsnis/malunas/)",
    "Visuotinė lietuvių enciklopedija: Velnias (https://www.vle.lt/straipsnis/velnias/)"
  ],
};

export const ziburinisMeta: DeityMeta = {
  slug: "ziburinis",
  name: "Žiburinis",
  altNames: { en: "Žiburinis", lt: "Žiburinis", lv: "Maldugunis" },
  domain: "God",
  epithet: {
    en: "Žiburinis — Will-o'-the-Wisp",
    lt: "Žiburinis — klaidžiojanti ugnis",
    lv: "Maldugunis — purva uguns",
  },
  summary: {
    en: "Žiburinis is the Baltic will-o'-the-wisp and spectral revenant of boundary-stone sins in Žemaitija (Beresnevičius 2001, Šlekonytė 2012).",
    lt: "Žiburinis yra baltų pelkių klaidžiojanti ugnis ir neteisėtų matininkų vėlė Žemaitijoje (G. Beresnevičius 2001, J. Šlekonytė 2012).",
    lv: "Maldugunis ir baltu purva uguns un nemierīgo mirušo dvēseles purvājos (Beresnevičius 2001, Šmits 1940).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Moral punishment", "Boundary guardian", "Marsh spirit", "Misleading light", "Land sin"],
  symbols: [
    { label: "Sacred symbols", detail: "Flickering flame, Lantern, Glowing skeleton, Boundary stone, Marsh mist" }
  ],
  locations: [
    {
      id: "zemaitija-boundary-marsh-zone",
      name: "Boundary Marsh of Žemaitija",
      coordinates: [55.9, 22.2],
      region: "Lithuania",
      description: "The boundary marshes of Žemaitija, especially near old field demarcation zones, were the haunting grounds of Žiburinis. Flickering marsh gases seen over these zones were identified as the will-o'-the-wisp punishing those who moved boundary stones in life.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "ziburinis",
      significance: "Boundary marsh site where Žiburinis led astray those who disrespected land boundaries — a moral auditor of the landscape ensuring justice for surveying sins committed in life.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Samogitians, Latvians", lt: "Lietuviai, žemaičiai, latviai", lv: "Lietuvieši, žemaiši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Gintaras Beresnevičius: Trumpas lietuvių ir prūsų religijos žodynas (2001)",
    "Norbertas Vėlius: Lietuvių mitologinės sakmės (1979)",
    "Jūratė Šlekonytė: Žiburinis – nesąžiningo matininko vėlė (2012)",
    "Pēteris Šmits: Latviešu pasakas un teikas (1925–1937)",
    "Tēzaurs: Malduguns (https://tezaurs.lv/malduguns)"
  ],
};

export const debesuKareivisMeta: DeityMeta = {
  slug: "debesu-kareivis",
  name: "Debesų Kareivis",
  altNames: { en: "Debesų Kareivis", lt: "Debesų kareivis", lv: "Debesu kareivis" },
  domain: "God",
  epithet: {
    en: "Debesų Kareivis — Cloud Forces of Perkūnas",
    lt: "Debesų kareivis — Perkūno dangiškieji kariai",
    lv: "Debesu kareivis — Pērkona debesu spēki",
  },
  summary: {
    en: "Folkloric atmospheric personification of the celestial forces of Perkūnas and Pērkona dēli driving storm clouds and thunder chariots (Vėlius 1987, Barons 1894).",
    lt: "Perkūno ir jo dangiškųjų sūnų audros debesų, vežimų bei griaustinio dangiškoji personifikacija (N. Vėlius 1987, K. Barons 1894).",
    lv: "Pērkona un Pērkona dēlu debesu spēku personifikācija negaisa mākoņos un ratiem dārdot (Vēlius 1987, Barons 1894).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Celestial warrior", "Perkūnas army", "Storm personification", "Divine justice", "Anti-Velnias fighter"],
  symbols: [
    { label: "Sacred symbols", detail: "Sword of fire, White horse, Chariot wheel, Dark storm cloud, Golden arrow" }
  ],
  locations: [
    {
      id: "samogitian-storm-watch-hilltop",
      name: "Storm-Watch Hilltop of Samogitia",
      coordinates: [55.9, 22.5],
      region: "Lithuania",
      description: "High hilltops visible across the Samogitian plains were considered command posts of Debesų Kareivis during thunderstorms. White clouds and stormy skies were interpreted as the passage of the celestial warrior army pursuing Velnias across the heavens.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "debesu-kareivis",
      significance: "Commanding hilltop where the Cloud Soldier's passage was observed during storms — the celestial warrior's fiery sword interpreted as Perkūnas's divine army driving out the forces of darkness.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Nijolė Laurinkienė: Senovės lietuvių dievas Perkūnas (1996)",
    "Krišjānis Barons: Latvju dainas (LD 33703, 33704)",
    "Visuotinė lietuvių enciklopedija: Perkūnas (https://www.vle.lt/straipsnis/perkunas/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const duobkasisMeta: DeityMeta = {
  slug: "duobkasis",
  name: "Duobkasis",
  altNames: { en: "Duobkasis", lt: "Duobkasis", lv: "Kapa tēvs" },
  domain: "God",
  epithet: {
    en: "Duobkasis — Guardian of the Grave Threshold",
    lt: "Duobkasis — kapo ramybės globa",
    lv: "Kapa tēvs — kapa sliekšņa sargs",
  },
  summary: {
    en: "Personification of Baltic cemetery and burial customs, representing the sacred earthen reception of the deceased under Žemyna and Kapu māte (Balys 1981, Šmits 1940).",
    lt: "Baltų laidojimo apeigų ir kapinių papročių personifikacija, reiškianti sakralų kūno atidavimą Žemynai ir Kapu māte globai (J. Balys 1981, P. Šmits 1940).",
    lv: "Baltu apbedīšanas paražu un kapu kultūras tēls, kas saistīts ar Kapu mātes un Veļu mātes svēto mieru (Balys 1981, Šmits 1940).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Death herald", "Grave preparation", "Cemetery guardian", "Psychopomp", "Soul's steward"],
  symbols: [
    { label: "Sacred symbols", detail: "Spade, Fresh earth, Twilight, Mossy mound, Shovel" }
  ],
  locations: [
    {
      id: "kernave-burial-mound-cemetery",
      name: "Ancient Burial Mounds of Kernavė",
      coordinates: [54.88, 24.83],
      region: "Lithuania",
      description: "The ancient burial grounds surrounding Kernavė hill forts were considered the domain of Duobkasis. The shadowy grave-digger spirit appeared near these mounds at twilight, leaning on his spade and forecasting who in the village would die next.",
      siteType: "Burial/cremation sites",
      aura: "mist",
      deity: "duobkasis",
      significance: "Ancient mound cemetery where Duobkasis appeared as a psychopomp, preparing the earth to receive souls and heralding impending death — a necessary steward of the passage from life.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Medieval to 20th-century folklore", lt: "Viduramžiai iki XX a. tautosakos", lv: "Viduslaiki līdz 20. gs. folklorai" },
  references: [
    "Jonas Balys: Mirtis ir laidotuvės. Lietuvių liaudies tradicijos (1981)",
    "Pēteris Šmits: Latviešu tautas ticējumi (1940–1941)",
    "Visuotinė lietuvių enciklopedija: Vėlė (https://www.vle.lt/straipsnis/vele/)",
    "Tēzaurs: Kapmāte (https://tezaurs.lv/kapm%C4%81te)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const sutartiniuDievaiciaiMeta: DeityMeta = {
  slug: "sutartiniu-dievaiciai",
  name: "Sutartinių Dievaičiai",
  altNames: { en: "Sutartinių Dievaičiai", lt: "Sutartinių Dievaičiai", lv: "Sutartīņu Dievaiči" },
  domain: "God",
  epithet: {
    en: "The Little Gods of Refrains — Polyphony Deities",
    lt: "Sutartinių Dievaičiai — polifonijos dievybės",
    lv: "Sutartīņu Dievaiči — polifonijas dievības",
  },
  summary: {
    en: "The personified sacred refrain vocables of archaic polyphonic sutartinės and dainas invoking communal and cosmic darna (Slaviūnas 1958, Vyčinienė 2000).",
    lt: "Archajiškų polifoninių sutartinių ir dainų sakralių priedainių garsažodžiai, kuriantys bendruomenės ir kosminę darną (Z. Slaviūnas 1958, D. Vyčinienė 2000).",
    lv: "Archaisko polifonisko sutartīņu un dainu refrēna vārdi, kas rada kopienas un kosmisko saskaņu (Slaviūnas 1958, Vyčinienė 2000).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Ritual song", "Polyphony", "Cosmic alignment", "Refrain deity", "Collective voice"],
  symbols: [
    { label: "Sacred symbols", detail: "Concentric circles, Sun wheel, Dissonant harmony, Rue plant, Singing circle" }
  ],
  locations: [
    {
      id: "aukstaitija-sutartines-song-ground",
      name: "Sutartinės Song Ground of Aukštaitija",
      coordinates: [55.55, 25.5],
      region: "Lithuania",
      description: "Open meadows and hilltop gathering places in northeastern Aukštaitija served as ceremonial grounds for sutartinės singing. Women performed complex polyphonic refrains invoking the Sutartinių Dievaičiai through interlocking voices that created cosmic resonance.",
      siteType: "Communal feast sites",
      aura: "green",
      deity: "sutartiniu-dievaiciai",
      significance: "Open-air gathering ground where sutartinės polyphony was performed to summon the divine presences of the Sutartinių Dievaičiai — archaic refrain-names bringing collective cosmic alignment through sound.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Aukštaitija)", lt: "Lietuva (Aukštaitija)", lv: "Lietuva (Auštaitija)" },
  tribe: { en: "Aukštaitians, Lithuanians", lt: "Aukštaičiai, lietuviai", lv: "Auštaiši, lietuvieši" },
  period: { en: "Proto-Baltic to 20th-century revival", lt: "Protobaltiška kilmė iki XX a. atgimimo", lv: "Proto-baltu izcelsme līdz 20. gs. atdzimšanai" },
  references: [
    "Zenonas Slaviūnas: Sutartinės. Daugiabalsės lietuvių liaudies dainos (1958–1959)",
    "Daiva Račiūnaitė-Vyčinienė: Sutartinių atlikimo tradicijos (2000)",
    "Algirdas Julius Greimas: Tautos atminties beieškant (1990)",
    "Visuotinė lietuvių enciklopedija: Sutartinės (https://www.vle.lt/straipsnis/sutartines/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu tautasdziesmas (https://enciklopedija.lv/skirklis/52758)"
  ],
};

export const ladutisMeta: DeityMeta = {
  slug: "ladutis",
  name: "Ladutis",
  altNames: { en: "Ladutis", lt: "Ladutis", lv: "Ladutis" },
  domain: "God",
  epithet: {
    en: "Ladutis — Refrain Vocable of Polyphonic Harmony & Weddings",
    lt: "Ladutis — polifoninės darnos ir vestuvių dainų priedainis",
    lv: "Ladutis — polifoniskās saskaņas un kāzu dziesmu refrēns",
  },
  summary: {
    en: "Archaic Baltic refrain vocable and personification of communal harmony (darna) and matrimonial blessing in sutartinės and calendar dainas (Greimas 1990, Slaviūnas 1958).",
    lt: "Archajiškas baltų dainų priedainis ir garsažodis, personifikuojantis bendruomenės darną ir vedybų palaiminimą sutartinėse bei dainose (A. J. Greimas 1990, Z. Slaviūnas 1958).",
    lv: "Arhaisks baltu dainu un sutartīņu refrēna vārds, kas iemieso kopienas saskaņu (darna) un kāzu svētību (Greimas 1990, Slaviūnas 1958).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Harmony", "Love", "Fertility", "Spring", "Wedding"],
  symbols: [
    { label: "Sacred symbols", detail: "Rue plant, Wreath, Sun wheel, Singing circle, Spring flower" }
  ],
  locations: [
    {
      id: "aukstaitija-lado-dance-field",
      name: "Lado Dance and Song Field of Aukštaitija",
      coordinates: [55.5, 25.4],
      region: "Lithuania",
      description: "Open meadows in Aukštaitija and throughout the Baltic lands served as seasonal dance-and-song fields where spring and wedding songs invoking Ladutis and Lado were performed. Young people danced in circles calling the deity of harmony to bless their unions and the harvest.",
      siteType: "Seasonal festival locations",
      aura: "green",
      deity: "ladutis",
      significance: "Spring festival field where the Lado refrain deity was invoked through circular dance and polyphonic song to bless marriages, fertility, and the new agricultural year with orderly joy.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians", lt: "Lietuviai, latviai", lv: "Lietuvieši, latvieši" },
  period: { en: "Proto-Baltic to modern folk tradition", lt: "Protobaltiška tradicija iki šiuolaikinės tautosakos", lv: "Proto-baltu tradīcija līdz mūsdienu folklorai" },
  references: [
    "Algirdas Julius Greimas: Tautos atminties beieškant (1990)",
    "Zenonas Slaviūnas: Sutartinės. Daugiabalsės lietuvių liaudies dainos, Vol. 1–3 (1958–1959)",
    "Daiva Račiūnaitė-Vyčinienė: Sutartinių atlikimo tradicijos (2000)",
    "Visuotinė lietuvių enciklopedija: Sutartinės (https://www.vle.lt/straipsnis/sutartines/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu tautasdziesmas (https://enciklopedija.lv/skirklis/52758)"
  ],
};

export const deivesCultMeta: DeityMeta = {
  slug: "deives-cult",
  name: "Deivės (Rural Cult)",
  altNames: { en: "Deivės (Rural Cult)", lt: "Deivės (kaimo kultas)", lv: "Deives (lauku kults)" },
  domain: "God",
  epithet: {
    en: "The Deivės — Sacred Stones & Forest Guardians of Samogitia",
    lt: "Deivės — Žemaitijos šventieji akmenys ir miško globėjos",
    lv: "Deives — Žemaitijas svētie akmeņi un meža sargātājas",
  },
  summary: {
    en: "Feminine rural deities and sacred stones (Deyves) documented in 1600 Jesuit reports as guardians of grain, livestock, and women's textile crafts in Samogitia (Vėlius 1996, Greimas 1979).",
    lt: "Moteriškosios kaimo dievybės ir šventieji akmenys (Deyves), 1600 m. jėzuitų ataskaitose dokumentuoti kaip javų, gyvulių ir moterų verpimo bei audimo globėjos Žemaitijoje (N. Vėlius 1996, A. J. Greimas 1979).",
    lv: "Sieviešu lauku dievības un svētie akmeņi (Deyves), kas 1600. gada jēzuitu ziņojumos fiksēti kā labības, lopu un sieviešu tekstildarbu aizbildnes Žemaitijā (Vēlius 1996, Greimas 1979).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Women's cult", "Forest guardianship", "Fertility", "Marriage blessing", "Craft protection"],
  symbols: [
    { label: "Sacred symbols", detail: "Cult stone, Hollow oak, Spun wool, Woven linen sash, Bread offering" }
  ],
  locations: [
    {
      id: "samogitia-deives-hollow-oak-grove",
      name: "Hollow Oak Grove of the Deivės, Samogitia",
      coordinates: [55.9, 22.4],
      region: "Lithuania",
      description: "Ancient hollow oak groves in Samogitia served as the primary cult sites of the Deivės forest goddesses. Jesuit missionaries documented women leaving offerings of wool, linen, and bread at these oaks well into the 17th century, seeking blessings for marriage and childbirth.",
      siteType: "Sacred groves",
      aura: "green",
      deity: "deives-cult",
      significance: "Hollow oak grove where the Deivės forest goddesses received women's offerings for domestic life protection — a cult surviving the Christian era documented by Jesuit missionaries in Samogitia.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th–17th Century (Jesuit records)", lt: "XVI–XVII a. (Jėzuitų dokumentai)", lv: "16.–17. gs. (jēzuitu avoti)" },
  references: [
    "Annuae Litterae Societatis Jesu (1600; publ. BRMŠ T. 2, 1996)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Visuotinė lietuvių enciklopedija: Deivė (https://www.vle.lt/straipsnis/deive/)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const gabijosUgnisMeta: DeityMeta = {
  slug: "gabijos-ugnis",
  name: "Gabijos Ugnis",
  altNames: { en: "Gabijos Ugnis", lt: "Gabijos ugnis", lv: "Gabijas uguns" },
  domain: "God",
  epithet: {
    en: "Gabijos Ugnis — Sacred Perpetual Hearth Fire",
    lt: "Gabijos ugnis — šventoji amžinoji namų židinio ugnis",
    lv: "Gabijas uguns — svētā mūžīgā pavarda uguns",
  },
  summary: {
    en: "Sacred living hearth fire documented in 1583 Jesuit reports and folklore, worshipped as domestic protector and ritually put to sleep beneath ash with salt offerings (Vėlius 1983, Dundulienė 1990).",
    lt: "Šventoji gyva namų židinio ugnis, 1583 m. jėzuitų ataskaitoje ir tautosakoje paliudyta kaip namų globėja, vakarais migdoma po pelenais ir maitinama druska bei duona (N. Vėlius 1983, P. Dundulienė 1990).",
    lv: "Svētā dzīvā pavarda uguns, kas 1583. gada jēzuitu ziņojumos un folklorā apliecināta kā mājas sargātāja, vakaros apklāta ar pelniem un cienāta ar sāli (Vēlius 1983, Dundulienė 1990).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sacred fire", "Domestic protection", "Purification", "Family continuity", "Divine sentience"],
  symbols: [
    { label: "Sacred symbols", detail: "Embers, Hearthstone, Salt, Woven belt, White hen" }
  ],
  locations: [
    {
      id: "lithuanian-gabija-hearth-site",
      name: "Sacred Hearth Fire Site of Lithuania",
      coordinates: [55.5, 24.0],
      region: "Lithuania",
      description: "In traditional Lithuanian farmsteads throughout the country, the central hearth was the dwelling of Gabijos Ugnis — fed offerings of salt and bread, addressed as a sentient guardian, and ceremonially covered at night. Jesuit records from 1583 document this practice as near-universal.",
      siteType: "Hearth cult zones",
      aura: "amber",
      deity: "gabijos-ugnis",
      significance: "The domestic hearthstone — primary dwelling place of Gabijos Ugnis — where the sacred perpetual fire was maintained as a living divine presence protecting the entire household from harm.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania", lt: "Lietuva", lv: "Lietuva" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "Proto-Baltic to 20th century (Documented 1583)", lt: "Protobaltiška kilmė iki XX a. (dokumentuota 1583 m.)", lv: "Proto-baltu izcelsme līdz 20. gs. (dokumentēts 1583. g.)" },
  references: [
    "Annuae Litterae Societatis Jesu (1583; publ. BRMŠ T. 2, 1996)",
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Pranė Dundulienė: Ugnis lietuvių liaudies pasaulėjautoje (1985)",
    "Visuotinė lietuvių enciklopedija: Gabija (https://www.vle.lt/straipsnis/gabija/)",
    "Tēzaurs: Uguns māte (https://tezaurs.lv/ugunsm%C4%81te)"
  ],
};

export const zaltvykslesMeta: DeityMeta = {
  slug: "zaltvyksles",
  name: "Žaltvykslės",
  altNames: { en: "Žaltvykslės", lt: "Žaltvykslės", lv: "Zalkšu ugunis" },
  domain: "God",
  epithet: {
    en: "Žaltvykslės — Marsh Lights & Chthonic Serpent Cult",
    lt: "Žaltvykslės — pelkių ugnelės ir chtoninis žalčio kultas",
    lv: "Zalkšu ugunis — purva maldugunis un zalkša kults",
  },
  summary: {
    en: "Atmospheric and chthonic phenomenon of flickering marsh lights (ignis fatuus) and the sacred grass snake cult documented in 1612 Jesuit reports (Vėlius 1983, Balys 1979).",
    lt: "Atmosferinis ir chtoninis pelkių ugnelių (žaltvykslių) bei šventojo namų žalčio kulto reiškinys, aprašytas 1612 m. jėzuitų ataskaitoje ir sakmėse (N. Vėlius 1983, J. Balys 1979).",
    lv: "Purva malduguņu un svētā mājas zalkša kulta parādība, kas aprakstīta 1612. gada jēzuitu ziņojumos un teikās (Vēlius 1983, Balys 1979).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sacred snake", "Marsh lights", "Household luck", "Chthonic realm", "Fertility"],
  symbols: [
    { label: "Sacred symbols", detail: "Grass snake, Milk bowl, Coiled serpent, Blue marsh light, Hearth corner" }
  ],
  locations: [
    {
      id: "nemunas-snake-meadow-homestead",
      name: "Žaltvykslė Meadow and Homestead Garden",
      coordinates: [54.9, 23.7],
      region: "Lithuania",
      description: "River meadows along the Nemunas and their adjacent homestead gardens were the sacred territory of the Žaltvykslės — both the flickering marsh lights of wandering serpent souls and the household grass snakes fed milk in garden corners, documented by Jesuits in 1612.",
      siteType: "Household ritual sites",
      aura: "green",
      deity: "zaltvyksles",
      significance: "Riverside meadow and homestead garden where sacred grass snakes were honored as household gods, fed milk as living deities, and their blue marsh lights revered as serpent soul-fires.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "Lithuanians, Latvians, Samogitians", lt: "Lietuviai, latviai, žemaičiai", lv: "Lietuvieši, latvieši, žemaiši" },
  period: { en: "Proto-Baltic to 17th century (Documented 1612)", lt: "Protobaltiška kilmė iki XVII a. (dokumentuota 1612 m.)", lv: "Proto-baltu izcelsme līdz 17. gs. (dokumentēts 1612. g.)" },
  references: [
    "Annuae Litterae Societatis Jesu (1612; publ. BRMŠ T. 2, 1996)",
    "Norbertas Vėlius: Chtoniškasis lietuvių mitologijos pasaulis (1987)",
    "Jonas Balys: Lietuvių mitologinės sakmės (1979)",
    "Visuotinė lietuvių enciklopedija: Žaltys (https://www.vle.lt/straipsnis/zaltys/)",
    "Tēzaurs: Malduguns (https://tezaurs.lv/malduguns)"
  ],
};

export const tavalisMeta: DeityMeta = {
  slug: "tavalis",
  name: "Tavalis",
  altNames: { en: "Tavalis", lt: "Tavalis", lv: "Tavalijs" },
  domain: "God",
  epithet: {
    en: "Tavalis — Deity Bestowing Means & Patrimonial Wealth",
    lt: "Tavalis — turtų ir galimybių teikėjas",
    lv: "Tavalis — līdzekļu un mantas devējs",
  },
  summary: {
    en: "Deity recorded by Jan Łasicki (1582) as 'Tawals: Deus, auctor facultatum' (bestower of means and property); the popular attribution to cattle barns is an unhistorical philological error (Łasicki 1582, Greimas 1979, Kregždys 2011).",
    lt: "Jono Lasickio (1582) užfiksuotas dievas 'Tawals: Deus, auctor facultatum' (turtų ir galimybių teikėjas); paplitęs priskyrimas tvarto dvasiai yra neistorinė filologinė klaida (J. Lasickis 1582, A. J. Greimas 1979, R. Kregždys 2011).",
    lv: "Jana Lasicka (1582) reģistrētā dievība 'Tawals: Deus, auctor facultatum' (līdzekļu un mantas devējs); saistība ar kūts garu ir neapstiprināta kļūda (Lasickis 1582, Greimas 1979, Kregždys 2011).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Property", "Wealth", "Patrimony", "Faculty", "Chronicle deity"],
  symbols: [
    { label: "Sacred symbols", detail: "Patrimonial coin, Clapper (tabalas), Grain measure, Inherited hearth" }
  ],
  locations: [
    {
      id: "samogitian-barn-hillfort-site",
      name: "Samogitian Settlement of Tawals",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "Historic settlement sites of Samogitia where communal property, patrimonial assets, and winter festival gatherings were conducted under ancestral customary laws documented by 16th-century observers.",
      siteType: "Settlement sites",
      aura: "green",
      deity: "tavalis",
      significance: "Samogitian ancestral settlement area reflecting the archaic legal and socio-religious framework of inherited property and mutual communal assistance.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum (1582; publ. Basel 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2011)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const tiklisMeta: DeityMeta = {
  slug: "tiklis",
  name: "Tiklis",
  altNames: { en: "Tiklis", lt: "Tiklis", lv: "Tiklis" },
  domain: "God",
  epithet: {
    en: "Tiklis — Deity of Fortunate Success & Propitious Outcomes",
    lt: "Tiklis — sėkmingos baigties ir derliaus dievybė",
    lv: "Tiklis — veiksmīga iznākuma un ražas dievība",
  },
  summary: {
    en: "Samogitian deity of fortunate success and propitious growth recorded by Jan Łasicki (1582) as 'Tiklium pro fortunato successu' (Łasicki 1582, Pretorijus c. 1690, Balsys 2010).",
    lt: "Žemaičių sėkmės, tinkamumo ir sėkmingo javų augimo dievybė, Jono Lasickio (1582) paminėta kaip 'Tiklium pro fortunato successu' (J. Lasickis 1582, M. Pretorijus XVII a., R. Balsys 2010).",
    lv: "Žemaitiešu veiksmes, izdošanās un labības augšanas dievība, ko Jans Lasickis (1582) fiksējis kā 'Tiklium pro fortunato successu' (Lasickis 1582, Pretorijs 17. gs., Balsys 2010).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Good fortune", "Favorable outcomes", "Luck", "Success", "Blessing"],
  symbols: [
    { label: "Sacred symbols", detail: "Lucky stone, Four-leaf clover, First fruits, Cast lots, Open hand" }
  ],
  locations: [
    {
      id: "samogitian-fortune-ritual-site",
      name: "Fortune Ritual Ground of Samogitia",
      coordinates: [55.8, 22.4],
      region: "Lithuania",
      description: "Open fields and clearings in Samogitia served as ritual fortune-casting grounds where Tiklis was invoked before major undertakings. Divination by lots, cast stones, and seed-scattering were performed here, with favorable results attributed to the deity's blessing.",
      siteType: "Ritual stones",
      aura: "amber",
      deity: "tiklis",
      significance: "Ritual fortune-casting ground where Tiklis was invoked before hunts, journeys, or important decisions — the Baltic conviction that favorable outcomes are divinely granted rather than merely earned.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum (1582; publ. Basel 1615)",
    "Matas Pretorijus: Deliciae Prussicae arba Prūsijos įdomybės (c. 1690; publ. 1999–2006)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rimantas Balsys: Lietuvių ir prūsų dievai, deivės, dvasios (2010)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const algisMeta: DeityMeta = {
  slug: "algis",
  name: "Algis",
  altNames: { en: "Algis", lt: "Algis", lv: "Algis" },
  domain: "God",
  epithet: {
    en: "Algis — Messenger Spirit & Divine Intermediary",
    lt: "Algis — pasiuntinio dvasia ir tarpininkas",
    lv: "Algis — vēstneša gars un starpnieks",
  },
  summary: {
    en: "Samogitian messenger spirit and divine intermediary recorded by Jan Łasicki (1582) as 'Algi tanquam angelum', conveying prayers from mortals to the celestial realm (Łasicki 1582, Vėlius 1996, Greimas 1990).",
    lt: "Žemaičių dievų pasiuntinys ir dvasinis tarpininkas, Jono Lasickio (1582) paminėtas kaip 'Algi tanquam angelum', nunešantis žmonių maldas aukštiesiems dievams (J. Lasickis 1582, N. Vėlius 1996, A. J. Greimas 1990).",
    lv: "Žemaitiešu vēstneša gars un dievišķais starpnieks, ko Jans Lasickis (1582) fiksējis kā 'Algi tanquam angelum', nododot mirstīgo lūgšanas debesu dievībām (Lasickis 1582, Vēļus 1996, Greims 1990).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Messenger", "Intermediary", "Prayer carrier", "Divine will", "Sacred mediation"],
  symbols: [
    { label: "Sacred symbols", detail: "White feather, Open path, Ascending smoke, Twin birds, Dawn light" }
  ],
  locations: [
    {
      id: "samogitian-messenger-crossroads",
      name: "Messenger Crossroads of Samogitia",
      coordinates: [55.9, 22.5],
      region: "Lithuania",
      description: "Major crossroads in Samogitia served as ritual stations where Algis was invoked as divine messenger and intermediary. Before important journeys or collective decisions, prayers were sent upward through ascending smoke from crossroads fires, carried by Algis to the celestial pantheon.",
      siteType: "Sacrifice / offering sites",
      aura: "sky",
      deity: "algis",
      significance: "Crossroads prayer-sending site where Algis the messenger spirit was invoked to carry petitions upward to the divine realm — a pre-Christian intermediary revealing Baltic sacred mediation theology.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. Basel 1615)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const bendikasMeta: DeityMeta = {
  slug: "bendikas",
  name: "Bendikas",
  altNames: { en: "Bendikas", lt: "Bendikas", lv: "Bendiks" },
  domain: "God",
  epithet: {
    en: "Bendikas — Protector of Journeys",
    lt: "Bendikas — kelionių globėjas",
    lv: "Bendiks — ceļojumu aizgādnis",
  },
  summary: {
    en: "Samogitian guardian deity of journeys abroad and border crossing recorded by Jan Łasicki (1582) as 'Bendim pro peregrinatione' (Łasicki 1582, Būga 1958, Vėlius 1996).",
    lt: "Žemaičių tolimų kelionių ir saugaus perėjimo dievybė, Jono Lasickio (1582) paminėta kaip 'Bendim pro peregrinatione' (J. Lasickis 1582, K. Būga 1958, N. Vėlius 1996).",
    lv: "Žemaitiešu tālu ceļojumu un robežu šķērsošanas dievība, ko Jans Lasickis (1582) fiksējis kā 'Bendim pro peregrinatione' (Lasickis 1582, Būga 1958, Vēļus 1996).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Journey protection", "Safe travel", "Navigation", "Return", "Threshold crossing"],
  symbols: [
    { label: "Sacred symbols", detail: "Walking staff, Crossroads stone, Packed bundle, Open gate, Road dust" }
  ],
  locations: [
    {
      id: "sambian-journey-departure-shrine",
      name: "Journey Departure Shrine of Sambia",
      coordinates: [54.9, 20.5],
      region: "Old Prussia",
      description: "Stone shrines at the edges of Sambian settlements served as departure points where Bendikas was invoked before long journeys. Travelers paused here to deposit small offerings and receive a blessing for safe passage through unknown roads and territories.",
      siteType: "Sacrifice / offering sites",
      aura: "sky",
      deity: "bendikas",
      significance: "Departure shrine at the settlement boundary where Bendikas was invoked to protect travelers — expressing the sacred vulnerability of those who leave the familiar world behind.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. Basel 1615)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1–3 (1958–1961)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const slaitisMeta: DeityMeta = {
  slug: "slaitis",
  name: "Šlaitis",
  altNames: { en: "Šlaitis", lt: "Šlaitis", lv: "Šlaitis" },
  domain: "God",
  epithet: {
    en: "Šlaitis — Spirit of Hillsides",
    lt: "Šlaitis — šlaitų dvasia",
    lv: "Šlaitis — nogāžu gars",
  },
  summary: {
    en: "Samogitian animistic spirit of hillsides, ravines, and terraced slopes recorded by Jan Łasicki (1582) as 'Szlaitym pro declivitate' (Łasicki 1582, Kregždys 2012, Vėlius 1996).",
    lt: "Žemaičių šlaitų, kalvų atšlaičių ir skardžių dvasia, Jono Lasickio (1582) paminėta kaip 'Szlaitym pro declivitate' (J. Lasickis 1582, R. Kregždys 2012, N. Vėlius 1996).",
    lv: "Žemaitiešu nogāžu, pauguru un krastu gars, ko Jans Lasickis (1582) fiksējis kā 'Szlaitym pro declivitate' (Lasickis 1582, Kregždis 2012, Vēļus 1996).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Hillside", "Slope guardian", "Terrain spirit", "Landscape deity", "Animistic presence"],
  symbols: [
    { label: "Sacred symbols", detail: "Sloping hillside, Dew on grass, Clay earth, Wild herbs, Boundary stone" }
  ],
  locations: [
    {
      id: "samogitian-hillside-cult-site",
      name: "Hillside Cult Site of Samogitia",
      coordinates: [55.7, 22.2],
      region: "Lithuania",
      description: "The distinct hillsides of Samogitia — with their characteristic slopes and terraced contours — were considered the dwelling places of Šlaitis. Farmers made small offerings at hillside boundaries to invoke the spirit's blessing before plowing the slopes.",
      siteType: "Sacred hilltops",
      aura: "moss",
      deity: "slaitis",
      significance: "Hillside terrain site where the animistic spirit Šlaitis was honored as the divine inhabitant of every slope — embodying the Baltic veneration of distinct natural landscape features.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. Basel 1615)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Algirdas Julius Greimas: Apie dievus ir žmones (1979/1990)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const vetustisMeta: DeityMeta = {
  slug: "vetustis",
  name: "Vetušis",
  altNames: { en: "Vetušis", lt: "Vetušis", lv: "Vetušis" },
  domain: "God",
  epithet: {
    en: "Vetušis — Storm Demon",
    lt: "Vetušis — audros demonas",
    lv: "Vetušis — vētras dēmons",
  },
  summary: {
    en: "Samogitian spirit and demon of violent storms, gales, and destructive squalls recorded by Jan Łasicki (1582) as 'Vetuszim pro tempestate' (Łasicki 1582, Būga 1958, Vėlius 1996).",
    lt: "Žemaičių audrų, viesulų ir griaunančių vėtrų dvasia, Jono Lasickio (1582) paminėta kaip 'Vetuszim pro tempestate' (J. Lasickis 1582, K. Būga 1958, N. Vėlius 1996).",
    lv: "Žemaitiešu vētru, virpuļviesuļu un postošu vēju gars, ko Jans Lasickis (1582) fiksējis kā 'Vetuszim pro tempestate' (Lasickis 1582, Būga 1958, Vēļus 1996).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Storm", "Violent wind", "Destruction", "Tempest", "Chaos"],
  symbols: [
    { label: "Sacred symbols", detail: "Whirlwind, Uprooted tree, Black cloud, Lightning, Broken branch" }
  ],
  locations: [
    {
      id: "samogitian-tempest-hilltop",
      name: "Storm Demon Hilltop of Samogitia",
      coordinates: [55.9, 22.0],
      region: "Lithuania",
      description: "Open hilltops exposed to the full force of Samogitian storms were where Vetušis the destructive storm demon was believed to pass with maximum fury. Communities performed appeasing rituals on these hilltops to deflect the demon's wrath from their settlements.",
      siteType: "Ritual fire sites",
      aura: "sky",
      deity: "vetustis",
      significance: "Exposed storm hilltop where the destructive tempest-demon Vetušis was encountered and appeased through ritual — preventing the catastrophic winds and lightning from devastating crops and property.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. Basel 1615)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 1 (1958)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

export const saukstisMeta: DeityMeta = {
  slug: "saukstis",
  name: "Šaukstis",
  altNames: { en: "Šaukstis", lt: "Šaukstis", lv: "Šaukstis" },
  domain: "God",
  epithet: {
    en: "Šaukstis — Spirit of Flies and Insects",
    lt: "Šaukstis — musių ir vabzdžių dvasia",
    lv: "Šaukstis — mušu un kukaiņu gars",
  },
  summary: {
    en: "Samogitian spirit presiding over flies, biting insects, and livestock pests recorded by Jan Łasicki (1582) as 'Szuksztim pro muscis' (Łasicki 1582, Būga 1959, Vėlius 1996).",
    lt: "Žemaičių musių, geliančių vabzdžių ir gyvulių parazitų dvasia, Jono Lasickio (1582) paminėta kaip 'Szuksztim pro muscis' (J. Lasickis 1582, K. Būga 1959, N. Vėlius 1996).",
    lv: "Žemaitiešu mušu, dzēlējkukaiņu un lopu parazītu gars, ko Jans Lasickis (1582) fiksējis kā 'Szuksztim pro muscis' (Lasickis 1582, Būga 1959, Vēļus 1996).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Flies", "Insects", "Pest control", "Crop protection", "Minor deity"],
  symbols: [
    { label: "Sacred symbols", detail: "Fly cluster, Honey jar, Grain store, Bundle of herbs, Smoke" }
  ],
  locations: [
    {
      id: "sambian-pest-altar-field",
      name: "Pest Control Altar Field of Sambia",
      coordinates: [54.9, 20.5],
      region: "Old Prussia",
      description: "Open agricultural fields in Sambia hosted small stone altars where Šaukstis was invoked during fly and pest seasons. Offerings of smoked herbs were burned to drive harmful insects from grain stores and livestock, a practice recorded by Łasicki in 1582.",
      siteType: "Field altars",
      aura: "green",
      deity: "saukstis",
      significance: "Field altar site where Šaukstis was invoked through smoke offerings to drive flies and insects from crops — representing the Baltic recognition that even the smallest creatures require divine management.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Lithuania (Samogitia)", lt: "Lietuva (Žemaitija)", lv: "Lietuva (Žemaitija)" },
  tribe: { en: "Samogitians, Lithuanians", lt: "Žemaičiai, lietuviai", lv: "Žemaiši, lietuvieši" },
  period: { en: "16th Century (Jan Łasicki 1582)", lt: "XVI a. (Łasicki 1582 m.)", lv: "16. gs. (Łasicki 1582)" },
  references: [
    "Jan Łasicki: De diis Samagitarum caeterorumque Sarmatarum et falsorum Christianorum (1582; publ. Basel 1615)",
    "Kazimieras Būga: Rinktiniai raštai, Vol. 2 (1959)",
    "Rolandas Kregždys: Baltų mitologemų etimologijos žodynas (2012)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2 (1996)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)"
  ],
};

// Batch 17

export const martinsMeta: DeityMeta = {
  slug: "martins",
  name: "Mārtiņš",
  altNames: { en: "Mārtiņš", lt: "Mārtiņš", lv: "Mārtiņš" },
  domain: "God",
  epithet: {
    en: "Mārtiņš — Guardian of Horses and the Harvest End",
    lt: "Mārtiņš — Arklių Globėjas ir Derliaus Pabaigos Dievas",
    lv: "Mārtiņš — Zirgu Sargs un Ražas Noslēguma Dievs",
  },
  summary: {
    en: "Latvian late-autumn horse guardian and harvest-close deity arriving on a frost-covered stallion to mark the agricultural year's end and the stable rooster sacrifice (Barons 1894, Šmits 1926, LNE 2023).",
    lt: "Latvių vėlyvojo rudens arklių globėjas ir derliaus užbaigimo dievas, atjojantis ant šerkšnoto žirgo ir žymintis ūkio darbų pabaigą bei gaidžio aukojimą arklidėje (K. Barons 1894, P. Šmits 1926, LNE 2023).",
    lv: "Latviešu vēlā rudens zirgu aizgādnis un ražas noslēguma dievs, kas ierodas uz apsarmojuša kumeļa un iezīmē saimnieciskā gada beigas un gaiļa upurēšanu stallī (Barons 1894, Šmits 1926, LNE 2023).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Horses", "November", "Harvest end", "Winter transition", "Rooster sacrifice"],
  symbols: [
    { label: "Sacred symbols", detail: "White horse, Rooster, Frost, Winter mask, Horse brush" }
  ],
  locations: [
    {
      id: "kurzeme-martins-festival-site",
      name: "Mārtiņš Festival Ground of Kurzeme",
      coordinates: [57.0, 22.5],
      region: "Latvia",
      description: "November festival grounds in Kurzeme served as gathering places for the Mārtiņš observances — the ritual deadline for settling debts and sacrificing a rooster in the stable. Young men masqueraded in horse masks and went house to house seeking seasonal gifts.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "martins",
      significance: "Seasonal festival ground for the November Mārtiņš rite — the agricultural year's ritual closing where horses were blessed, debts settled, and the first frost deity honored with sacrifice.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia (Pan-Latvian)", lt: "Latvija (Visa Latvija)", lv: "Latvija (Visas Latvijas)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Medieval to present day folklore", lt: "Viduramžiai iki šių dienų tautosakos", lv: "Viduslaiki līdz mūsdienu folklorai" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915), Vol. 5 (LD 30215, 30216)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/107771)",
    "Latvijas Nacionālā enciklopēdija: Mārtiņi (https://enciklopedija.lv/skirklis/95646)",
    "Visuotinė lietuvių enciklopedija: Mārtiņš (https://www.vle.lt/straipsnis/martins/)"
  ],
};

export const jodsMeta: DeityMeta = {
  slug: "jods",
  name: "Jods",
  altNames: { en: "Jods", lt: "Jods", lv: "Jods" },
  domain: "God",
  epithet: {
    en: "Jods — The Dark One",
    lt: "Jods — tamsusis priešiškas dievas",
    lv: "Jods — tumšais pretinieks",
  },
  summary: {
    en: "Jods is the primordial dark spirit and adversary of Dievs in Latvian mythology (Šmits 1926, Biezais 1955).",
    lt: "Jods yra pirmapradė tamsioji dvasia ir Dievo priešininkas latvių mitologijoje (P. Šmits 1926, H. Biezais 1955).",
    lv: "Jods ir latviešu mitoloģijas tumšais gars un Dieva pretinieks (Šmits 1926, Biezais 1955).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Darkness", "Underworld", "Chaos", "Disease", "Adversary of Dievs"],
  symbols: [
    { label: "Sacred symbols", detail: "Pitch black, Inky marsh, Broken stone, Night, Black raven" }
  ],
  locations: [
    {
      id: "latvian-dark-swamp-site",
      name: "Dark Swamp of the Latvian Lowlands",
      coordinates: [57.0, 25.0],
      region: "Latvia",
      description: "The black peat swamps of central Latvia were considered the dwelling place of Jods — the primordial dark adversary personifying destructive chaos. These impenetrable marshes were approached with dread, and travelers who entered at night were said to be claimed by the Dark One.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "jods",
      significance: "Dark peat swamp — the primordial domain of Jods — representing the absolute darkness beyond divine light where the adversary of Dievs held terrible sway over chaos, disease, and destruction.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Proto-Baltic to late folklore", lt: "Protobaltiška kilmė iki vėlyvosios tautosakos", lv: "Proto-baltu periods līdz vēlajai folklorai" },
  references: [
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (1955)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Visuotinė lietuvių enciklopedija: Jods (https://www.vle.lt/straipsnis/jods/)"
  ],
};

export const banguMateMeta: DeityMeta = {
  slug: "bangu-mate",
  name: "Bangu māte",
  altNames: { en: "Bangu māte", lt: "Bangų motina", lv: "Bangu māte" },
  domain: "God",
  epithet: {
    en: "Bangu māte — Mother of Waves",
    lt: "Bangų motina — bangų valdovė",
    lv: "Bangu māte — viļņu māte",
  },
  summary: {
    en: "Bangu māte is the Latvian mother spirit of the waves (Barons Dainas, Šmits 1918).",
    lt: "Bangų motina yra latvių bangų motinos dvasia (K. Barono dainos, P. Šmits 1918).",
    lv: "Bangu māte ir latviešu viļņu māte (Dainas, Šmits 1918).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Waves", "Sea", "Shore", "Ocean power", "Fishermen's patron"],
  symbols: [
    { label: "Sacred symbols", detail: "Wave-crest, Sea-foam, Shore stone, Roaring water" }
  ],
  locations: [
    {
      id: "ventspils-breaking-wave-shore",
      name: "Breaking Wave Shore of Ventspils",
      coordinates: [57.4, 21.6],
      region: "Latvia",
      description: "The rocky shoreline north of Ventspils where Baltic waves crash against ancient boulders was considered the sacred domain of Bangu māte. Fishermen made offerings of bread and fish at dawn before launching into the sea, invoking her power over the churning waves.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "sky",
      deity: "bangu-mate",
      significance: "Wave-beaten coastal shore where Bangu māte was invoked before fishing expeditions — her rhythmic waves interpreted as her breathing, and their height as a sign of the sea's intent for the day.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Bangu%20m%C4%81te)"
  ],
};

export const upesMateMeta: DeityMeta = {
  slug: "upes-mate",
  name: "Upes māte",
  altNames: { en: "Upes māte", lt: "Upių motina", lv: "Upes māte" },
  domain: "God",
  epithet: {
    en: "Upes māte — Mother of Rivers",
    lt: "Upių motina — upių valdovė",
    lv: "Upes māte — upju māte",
  },
  summary: {
    en: "Upes māte is the Latvian mother spirit of rivers (Barons Dainas, Šmits 1918).",
    lt: "Upių motina yra latvių upių motinos dvasia (K. Barono dainos, P. Šmits 1918).",
    lv: "Upes māte ir latviešu upju māte (Dainas, Šmits 1918).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Rivers", "Flowing water", "Life transitions", "Soul journeys", "Time passage"],
  symbols: [
    { label: "Sacred symbols", detail: "Riverbend, Silver water-droplets, Spring-well, Woven ribbon" }
  ],
  locations: [
    {
      id: "daugava-sacred-river-bend",
      name: "Sacred River Bend of the Daugava",
      coordinates: [56.7, 25.1],
      region: "Latvia",
      description: "The great bends of the Daugava river, especially where the current slows into silver pools, were considered the gathering places of Upes māte. Women came at dawn to leave woven ribbons on the water's surface as offerings to the river spirit of life's transitions.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "upes-mate",
      significance: "Sacred Daugava river bend where Upes māte received woven ribbon offerings — the river governing life's passages, soul journeys, and the irreversible flow of time itself.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Upes%20m%C4%81te)"
  ],
};

export const lietusMateMeta: DeityMeta = {
  slug: "lietus-mate",
  name: "Lietus māte",
  altNames: { en: "Lietus māte", lt: "Lietaus motina", lv: "Lietus māte" },
  domain: "God",
  epithet: {
    en: "Lietus māte — Mother of Rain",
    lt: "Lietaus motina — lietaus valdovė",
    lv: "Lietus māte — lietus māte",
  },
  summary: {
    en: "Lietus māte is the Latvian mother spirit of rain (Barons Dainas, Šmits 1918).",
    lt: "Lietaus motina yra latvių lietaus motinos dvasia (K. Barono dainos, P. Šmits 1918).",
    lv: "Lietus māte ir latviešu lietus māte (Dainas, Šmits 1918).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Rain", "Moisture", "Crops", "Drought relief", "Agricultural fertility"],
  symbols: [],
  locations: [],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Lietus%20m%C4%81te)"
  ],
};

export const salnaMateMeta: DeityMeta = {
  slug: "salna-mate",
  name: "Salna māte",
  altNames: { en: "Salna māte", lt: "Šalnų motina", lv: "Salna māte" },
  domain: "God",
  epithet: {
    en: "Salna māte — Mother of Frost",
    lt: "Šalnų motina — šalčio valdovė",
    lv: "Salna māte — salnas māte",
  },
  summary: {
    en: "Salna māte is the Latvian frost spirit testing crop resilience in spring and autumn (Barons Dainas, Šmits 1918).",
    lt: "Šalnų motina yra latvių šalčio dvasia (K. Barono dainos, P. Šmits 1918).",
    lv: "Salna māte ir latviešu salnas gars (Dainas, Šmits 1918).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Frost", "Late autumn", "Early spring", "Crop testing", "Seasonal transition"],
  symbols: [
    { label: "Sacred symbols", detail: "Ice crystal, Withered blossom, White field, Morning hoarfrost" }
  ],
  locations: [
    {
      id: "vidzeme-frost-prone-valley",
      name: "Frost-Prone Valley of Vidzeme",
      coordinates: [57.3, 26.2],
      region: "Latvia",
      description: "The low frost-trap valleys of northern Vidzeme, where cold air pools and late spring frosts destroy blossoms, were the terrifying domain of Salna māte. Farmers performed protective rites on the valley edges at the first signs of late frost, appealing for the frost mother's mercy.",
      siteType: "Seasonal festival locations",
      aura: "sky",
      deity: "salna-mate",
      significance: "Frost-trap valley where Salna māte's power was most keenly felt — farmers appeased the frost mother with offerings to spare their blossoms and seedlings from her seasonal icy touch.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Salna%20m%C4%81te)"
  ],
};

export const debessMateMeta: DeityMeta = {
  slug: "debess-mate",
  name: "Debess māte",
  altNames: { en: "Debess māte", lt: "Dangaus motina", lv: "Debess māte" },
  domain: "God",
  epithet: {
    en: "Debess māte — Mother of Sky Vault",
    lt: "Dangaus motina — dangaus skliauto valdovė",
    lv: "Debess māte — debesu māte",
  },
  summary: {
    en: "Debess māte is the Latvian mother spirit of the sky firmament (Barons Dainas, Biezais 1972).",
    lt: "Dangaus motina yra latvių dangaus skliauto dvasia (K. Barono dainos, H. Biezais 1972).",
    lv: "Debess māte ir latviešu debesu gars (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sky vault", "Firmament", "Stars", "Celestial container", "Divine feminine"],
  symbols: [
    { label: "Sacred symbols", detail: "Silver dome, Star-field, Blue cloak, Infinite expanse" }
  ],
  locations: [
    {
      id: "vidzeme-sky-vault-hilltop",
      name: "Sky Vault Hilltop of Vidzeme",
      coordinates: [57.1, 25.8],
      region: "Latvia",
      description: "High hilltops in Vidzeme offering unobstructed 360-degree views of the sky were considered the closest earthly points to Debess māte's celestial firmament. On clear nights, the protective vault of the sky could be seen in its full splendor, holding the stars in the goddess's infinite lap.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "debess-mate",
      significance: "Panoramic hilltop sacred to Debess māte — the closest earthly point to the celestial vault she embodies as the infinite feminine container of all heavenly light and stellar souls.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Pēteris Šmits: Latviešu mitoloģija (1918)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Debess%20m%C4%81te)"
  ],
};

export const zvaigznesMateMeta: DeityMeta = {
  slug: "zvaigznes-mate",
  name: "Zvaigznes māte",
  altNames: { en: "Zvaigznes māte", lt: "Žvaigždžių motina", lv: "Zvaigznes māte" },
  domain: "God",
  epithet: {
    en: "Zvaigznes māte — Mother of Stars",
    lt: "Žvaigždžių motina — žvaigždžių valdovė",
    lv: "Zvaigznes māte — zvaigžņu māte",
  },
  summary: {
    en: "Zvaigznes māte is the Latvian mother spirit of the stars (Barons Dainas, Biezais 1972).",
    lt: "Žvaigždžių motina yra latvių žvaigždžių motinos dvasia (K. Barono dainos, H. Biezais 1972).",
    lv: "Zvaigznes māte ir latviešu zvaigžņu māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Stars", "Destiny", "Weaving", "Night sky", "Souls of the dead"],
  symbols: [
    { label: "Sacred symbols", detail: "Glistening thread, Night-sky veil, Star-cluster, Silver needle" }
  ],
  locations: [
    {
      id: "gauja-star-hilltop-observatory",
      name: "Star Observation Hilltop of the Gauja Valley",
      coordinates: [57.1, 25.3],
      region: "Latvia",
      description: "Hilltops overlooking the Gauja valley were used for nocturnal star-observation associated with Zvaigznes māte's weaving of destiny. Stars were believed to be the eyes of the dead watching over the living, and their patterns were read as signs of fate and divine will.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "zvaigznes-mate",
      significance: "Star-observation hilltop where Zvaigznes māte's starry veil was read for destiny omens — the stars understood as the living eyes of the ancestors guiding the fate of those below.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Zvaigznes%20m%C4%81te)"
  ],
};

export const saulesMate2Meta: DeityMeta = {
  slug: "saules-mate",
  name: "Saules māte",
  altNames: { en: "Saules māte", lt: "Saulės motina", lv: "Saules māte" },
  domain: "God",
  epithet: {
    en: "Saules māte — Cosmic Mother of Sun",
    lt: "Saulės motina — kosminė motina",
    lv: "Saules māte — saules māte",
  },
  summary: {
    en: "Saules māte is the Latvian cosmic mother of the Sun (Barons Dainas, Biezais 1972).",
    lt: "Saulės motina yra latvių kosminė Saulės motina (K. Barono dainos, H. Biezais 1972).",
    lv: "Saules māte ir latviešu kosmiskā Saules māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sun parent", "Daily journey", "Elder guardian", "Cosmic mother", "Solar origin"],
  symbols: [
    { label: "Sacred symbols", detail: "Golden bowl, Dawn gate, Evening embrace, Solar wheel" }
  ],
  locations: [
    {
      id: "jurmala-solar-amber-coast",
      name: "Amber Solar Coast of Jūrmala",
      coordinates: [56.97, 23.78],
      region: "Latvia",
      description: "The amber-rich shores of Jūrmala were sacred to Saules māte as the material embodiment of the sun's warmth stored in ancient resin. Solar solstice ceremonies were held on the beach to honor the cosmic mother who sends the Sun on her daily journey.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "saules-mate",
      significance: "Amber shore where Saules māte was honored at solstice — the amber itself understood as the sun's crystallized tears confirming the maternal source behind all solar light and warmth.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Saules%20m%C4%81te)"
  ],
};

export const menessMate2Meta: DeityMeta = {
  slug: "meness-mate",
  name: "Mēness māte",
  altNames: { en: "Mēness māte", lt: "Mėnulio motina", lv: "Mēness māte" },
  domain: "God",
  epithet: {
    en: "Mēness māte — Mother of Lunar Cycles",
    lt: "Mėnulio motina — mėnulio ciklų valdovė",
    lv: "Mēness māte — mēness ciklu māte",
  },
  summary: {
    en: "Mēness māte is the Latvian mother spirit of lunar cycles (Barons Dainas, Biezais 1972).",
    lt: "Mėnulio motina yra latvių mėnulio ciklų dvasia (K. Barono dainos, H. Biezais 1972).",
    lv: "Mēness māte ir latviešu mēness ciklu māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Moon cycles", "Lunar phases", "Night guidance", "Silver light", "Nighttime guardian"],
  symbols: [
    { label: "Sacred symbols", detail: "Silver crescent, Moonlit path, Lunar phases, Night sky" }
  ],
  locations: [
    {
      id: "latgale-moonlit-lake-sanctuary",
      name: "Moonlit Lake Sanctuary of Latgale",
      coordinates: [56.5, 27.3],
      region: "Latvia",
      description: "The still lakes of Latgale, which mirror the moon with exceptional clarity on calm nights, were considered the silver domain of Mēness māte. Night travelers sought the moon-mother's guidance by her reflection, and offerings were made at the water's edge under the full moon.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "meness-mate",
      significance: "Moonlit Latgale lake where Mēness māte's silver light was reflected — a sanctuary for night travelers seeking lunar guidance and for those honoring the feminine guardian of nocturnal cycles.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/M%C4%93ness%20m%C4%81te)"
  ],
};


export const ritaMateMeta: DeityMeta = {
  slug: "rita-mate",
  name: "Rīta māte",
  altNames: { en: "Rīta māte", lt: "Ryto motina", lv: "Rīta māte" },
  domain: "God",
  epithet: {
    en: "Rīta māte — Mother of Morning",
    lt: "Ryto motina — ryto valdovė",
    lv: "Rīta māte — rīta māte",
  },
  summary: {
    en: "Rīta māte is the Latvian bringer of morning light and dew (Barons Dainas, Biezais 1972).",
    lt: "Ryto motina yra latvių ryto šviesos ir rasos nešėja (K. Barono dainos, H. Biezais 1972).",
    lv: "Rīta māte ir latviešu rīta gaismas māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Morning", "Dawn", "Dew", "Awakening", "Start of labor"],
  symbols: [
    { label: "Sacred symbols", detail: "First light, Morning dew, Sunrise threshold, Silver cup" }
  ],
  locations: [
    {
      id: "vidzeme-dawn-awakening-shore",
      name: "Dawn Awakening Shore of Vidzeme",
      coordinates: [57.1, 26.2],
      region: "Latvia",
      description: "East-facing lake shores and river banks in Vidzeme were the domain of Rīta māte — visited at first light to collect sacred morning dew and begin the day's labor with a prayer. The spirit of morning was believed to awaken the land with a gentle touch at the threshold of night and day.",
      siteType: "Sacred springs",
      aura: "amber",
      deity: "rita-mate",
      significance: "East-facing dawn shore where Rīta māte was invoked at the threshold between night and day — her morning dew collected as a sacred substance and the start of daily labor blessed with her presence.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/R%C4%ABta%20m%C4%81te)"
  ],
};

export const vakaraMateMeta: DeityMeta = {
  slug: "vakara-mate",
  name: "Vakara māte",
  altNames: { en: "Vakara māte", lt: "Vakaro motina", lv: "Vakara māte" },
  domain: "God",
  epithet: {
    en: "Vakara māte — Mother of Evening",
    lt: "Vakaro motina — vakaro valdovė",
    lv: "Vakara māte — vakara māte",
  },
  summary: {
    en: "Vakara māte is the Latvian spirit of evening and sunset (Barons Dainas, Biezais 1972).",
    lt: "Vakaro motina yra latvių vakaro ir saulėlydžio dvasia (K. Barono dainos, H. Biezais 1972).",
    lv: "Vakara māte ir latviešu vakara māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Evening", "Sunset", "Cattle return", "Hearth-fire", "Rest"],
  symbols: [
    { label: "Sacred symbols", detail: "Sunset glow, Hearth flame, Returning cattle, Dimming sky" }
  ],
  locations: [
    {
      id: "kurzeme-sunset-western-shore",
      name: "Sunset Shore of Western Kurzeme",
      coordinates: [57.0, 21.6],
      region: "Latvia",
      description: "West-facing coastal shores of Kurzeme, where the sun sets directly over the Baltic Sea, were the domain of Vakara māte. Farmers returned their cattle from pasture as the sky turned orange, and hearth-fires were lit in her honor at the moment the sun touched the horizon.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "vakara-mate",
      significance: "Sunset-facing coastal shore where Vakara māte was honored at day's close — the lighting of hearth-fires aligned with sunset as a ritual acknowledgment of the transition from labor to rest.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Vakara%20m%C4%81te)"
  ],
};

export const naktsMateMeta: DeityMeta = {
  slug: "nakts-mate",
  name: "Nakts māte",
  altNames: { en: "Nakts māte", lt: "Nakties motina", lv: "Nakts māte" },
  domain: "God",
  epithet: {
    en: "Nakts māte — Mother of Night",
    lt: "Nakties motina — nakties valdovė",
    lv: "Nakts māte — nakts māte",
  },
  summary: {
    en: "Nakts māte is the Latvian mistress of night and dreams (Barons Dainas, Biezais 1972).",
    lt: "Nakties motina yra latvių nakties ir sapnų dvasia (K. Barono dainos, H. Biezais 1972).",
    lv: "Nakts māte ir latviešu nakts māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Night", "Dreams", "Darkness", "Sleep", "Silence"],
  symbols: [
    { label: "Sacred symbols", detail: "Black blanket, Dark sky, Dream thread, Sleeping earth" }
  ],
  locations: [
    {
      id: "latgale-dark-forest-sanctuary",
      name: "Dark Forest Sanctuary of Latgale",
      coordinates: [56.5, 27.2],
      region: "Latvia",
      description: "Ancient dark pine and spruce forests of Latgale, where moonlight barely penetrates the canopy, were considered the realm of Nakts māte. The silence and darkness here were understood as the night mother's protective blanket — necessary for rest, dreaming, and the rejuvenation of all life.",
      siteType: "Sacred groves",
      aura: "mist",
      deity: "nakts-mate",
      significance: "Ancient dark forest where Nakts māte's protective darkness enveloped the sleeping world — a place of sacred silence, dreams, and the necessary rest before dawn's renewal and the return of daily labor.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Nakts%20m%C4%81te)"
  ],
};

export const dienasMateMeta: DeityMeta = {
  slug: "dienas-mate",
  name: "Dienas māte",
  altNames: { en: "Dienas māte", lt: "Dienos motina", lv: "Dienas māte" },
  domain: "God",
  epithet: {
    en: "Dienas māte — Mother of Daylight",
    lt: "Dienos motina — dienos valdovė",
    lv: "Dienas māte — dienas māte",
  },
  summary: {
    en: "Dienas māte is the Latvian spirit of daylight hours (Barons Dainas, Biezais 1972).",
    lt: "Dienos motina yra latvių dienos šviesos dvasia (K. Barono dainos, H. Biezais 1972).",
    lv: "Dienas māte ir latviešu dienas gaismas māte (Dainas, Biezais 1972).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Daylight", "Noon", "Field labor", "Full light", "Watchfulness"],
  symbols: [
    { label: "Sacred symbols", detail: "Noon sun, Midday heat, Open field, Watchful sky" }
  ],
  locations: [
    {
      id: "latvian-noon-sunlit-meadow",
      name: "Noon Sunlit Meadow of Central Latvia",
      coordinates: [57.0, 25.0],
      region: "Latvia",
      description: "The broad open meadows of central Latvia, blazing in midsummer noon sunshine, were the domain of Dienas māte. Field laborers acknowledged the noon-sun's witness with a brief pause and a prayer to the Day Mother, who watched over their work from the sky's highest point.",
      siteType: "Field altars",
      aura: "amber",
      deity: "dienas-mate",
      significance: "Open noon meadow where Dienas māte's watchful presence was acknowledged at the height of day — laborers pausing at noon to honor the Day Mother's witness and sustaining light over their work.",
    }
  ],
  gallery: [],
  materialLegacy: [],
  regionDetails: { en: "Latvia", lt: "Latvija", lv: "Latvija" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Archaic oral tradition", lt: "Archajinė žodinė tradicija", lv: "Arhaiskā mutvārdu tradīcija" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die himmlische Götterfamilie der Baltischen Völker (1972)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/)",
    "Latvijas Nacionālā enciklopēdija (https://enciklopedija.lv/skirklis/Dienas%20m%C4%81te)"
  ],
};
