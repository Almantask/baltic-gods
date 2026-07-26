import type { DeityMeta } from "@/types/content";

export const deklaMeta: DeityMeta = {
  slug: "dekla",
  name: "Dēkla",
  altNames: { en: "Dekla", lt: "Dėkla", lv: "Dēkla" },
  domain: "God",
  epithet: {
    en: "Guardian of the Cradle and Infant Luck",
    lt: "Šūpučio ir kūdikių laimės globėja",
    lv: "Šūpuļa un zīdaiņu laimes sargātāja",
  },
  summary: {
    en: "Dēkla is the Baltic (Kurzemian) fate goddess of newborns, cradles, and infant health. A core member of the fate triad alongside Laima and Kārta, she lays silk cloths over the cradle at birth.",
    lt: "Dēkla yra baltų (Kuršo) likimo deivė, globojanti naujagimius, šūpulius ir kūdikių sveikatą. Kartu su Laima ir Karta ji priklauso likimo triadai ir užtiesia šilko drobę virš gimstančio šūpučio.",
    lv: "Dēkla ir baltu (Kurzemes) likteņa dieviete, kas rūpējas par jaundzimušajiem, šūpuli un bērna veselību. Kopā ar Laimu un Kārtu viņa veido likteņa triādi, klājot zīda drānu pār jaundzimušo šūpuli.",
  },
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(107, 156, 126, 0.26)",
  accent: "#9cc29b",
  keywords: ["cradle", "fate", "newborn", "infant luck", "Kurzeme"],
  symbols: [
    { label: "Sacred symbols", detail: "Cradle, Silk cloth, Spindle, Silver coin" }
  ],
  locations: [
    {
      id: "kurzeme-cradle-spring",
      name: "Kurzeme Cradle Spring, Kuldīga",
      coordinates: [56.97, 21.96],
      region: "Latvia",
      description: "A sacred spring near Kuldīga where Kurzemian mothers and midwives washed newborn swaddling clothes and offered silver coins to Dēkla.",
      siteType: "Sacred springs",
      aura: "moss",
      deity: "dekla",
      significance: "Midwives performed the post-natal pirtsāža sauna rite here, seeking Dēkla's blessing for the baby's cradle and long health.",
    }
  ],
  gallery: [],
  materialLegacy: ["Pattern-woven cradle ribbons", "Silver post-natal sauna coins"],
  regionDetails: { en: "Latvia (Kurzeme, Western Vidzeme)", lt: "Latvija (Kuršas, Vakarų Vidžemė)", lv: "Latvija (Kurzeme, Rietumvidzeme)" },
  tribe: { en: "Curonians, Latvians", lt: "Kuršiai, latviai", lv: "Kurši, latvieši" },
  period: { en: "Ancient Oral Tradition (Latvju dainas)", lt: "Archajiška tautosaka (Latvju dainas)", lv: "Senatnē – Latvju dainas" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (Uppsala, 1955)",
    "Pēteris Šmits: Latviešu mitoloģija (Rīga, 1926)",
    "Visuotinė lietuvių enciklopedija: Dēkla (https://www.vle.lt/)",
    "Latvijas Nacionālā enciklopēdija: Laima (https://enciklopedija.lv/skirklis/135948)"
  ],
};

export const kartaMeta: DeityMeta = {
  slug: "karta",
  name: "Kārta",
  altNames: { en: "Karta", lt: "Karta", lv: "Kārta" },
  domain: "God",
  epithet: {
    en: "Weaver of Life Strands and Duration",
    lt: "Gyvenimo gijų ir trukmės audėja",
    lv: "Mūža pavedienu un ilguma audēja",
  },
  summary: {
    en: "Kārta is the Baltic fate goddess of life thread duration and lot arrangement. Operating in the Kurzemian fate triad with Laima and Dēkla, she sets the pillow and determines the span of human life.",
    lt: "Kārta yra baltų likimo deivė, tvarkanti gyvenimo gijų trukmę ir lemties eilę. Kuršo likimo triadoje su Laima ir Dėkla ji sudeda pagalvėlę ir nustato žmogaus amžiaus trukmę.",
    lv: "Kārta ir baltu likteņa dieviete, kas kārto mūža pavedienu ilgumu un kārtību. Kurzemes triādē līdzās Laimai un Dēklai viņa liek pagalvi un nosaka cilvēka mūža ilgumu.",
  },
  heroImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(107, 156, 126, 0.26)",
  accent: "#9cc29b",
  keywords: ["fate", "weaving", "life strand", "duration", "lot"],
  symbols: [
    { label: "Sacred symbols", detail: "Warp beam, Spindle, Thread strand, Pillow" }
  ],
  locations: [
    {
      id: "kurzeme-loom-hill",
      name: "Kurzeme Loom Ridge, Saldus",
      coordinates: [56.66, 22.49],
      region: "Latvia",
      description: "A hill ridge near Saldus where traditional weavers gathered on solstice eves to invoke Kārta for smooth thread spinning.",
      siteType: "Sacred hilltops",
      aura: "amber",
      deity: "karta",
      significance: "Woven patterns created here reflected Kārta's life-strand decrees and protected households from sudden misfortune.",
    }
  ],
  gallery: [],
  materialLegacy: ["Warp-beam fate tokens", "Pattern-woven linen belts"],
  regionDetails: { en: "Latvia (Kurzeme)", lt: "Latvija (Kuršas)", lv: "Latvija (Kurzeme)" },
  tribe: { en: "Curonians, Latvians", lt: "Kuršiai, latviai", lv: "Kurši, latvieši" },
  period: { en: "Ancient Oral Tradition (Latvju dainas)", lt: "Archajiška tautosaka (Latvju dainas)", lv: "Senatnē – Latvju dainas" },
  references: [
    "Krišjānis Barons: Latvju dainas (1894–1915)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (Uppsala, 1955)",
    "Pēteris Šmits: Latviešu mitoloģija (Rīga, 1926)",
    "Visuotinė lietuvių enciklopedija: Kārta (https://www.vle.lt/)"
  ],
};

export const cerklicingMeta: DeityMeta = {
  slug: "cerklicing",
  name: "Cerklicing",
  altNames: { en: "Ceroklis", lt: "Ceroklis", lv: "Ceroklis" },
  domain: "God",
  epithet: {
    en: "Latgalian Spirit of Agricultural Harvest and Kitchen Hearth",
    lt: "Latgalos žemdirbystės ir virtuvės židinio dvasia",
    lv: "Latgales lauksaimniecības un virtuves pavarda gars",
  },
  summary: {
    en: "Cerklicing (Ceroklis) is an East Latvian (Latgalian) agricultural and kitchen fire spirit documented in 1606 Jesuit reports by Joannes Stribingus and 1649 records by Paul Einhorn. Farmers offered him black roosters, beer, and first food morsels.",
    lt: "Ceroklis (Cerklicing) yra Rytų Latvijos (Latgalos) žemdirbystės ir virtuvės židinio dvasia, užregistruota 1606 m. jezuito Jono Stribingo ir 1649 m. Paulo Einhorno. Žemdirbiai jam aukojo juodus gaidžius, alų ir pirmus maisto kąsnius.",
    lv: "Ceroklis (Cerklicing) ir Austrumlatvijas (Latgales) lauksaimniecības un virtuves pavarda gars, ko 1606. gadā dokumentēja jezuīts Joanns Stribings un 1649. gadā Pauls Einhorns. Zemnieki viņam ziedoja melnus gaiļus, alu un pirmos ēdiena kaukus.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["agriculture", "kitchen hearth", "harvest", "Latgale", "offerings"],
  symbols: [
    { label: "Sacred symbols", detail: "Black rooster, Cooking pot, First morsel, Ale drop" }
  ],
  locations: [
    {
      id: "rezekne-ceroklis-hearth",
      name: "Rēzekne Ritual Hearth, Latgale",
      coordinates: [56.5, 27.33],
      region: "Latvia",
      description: "An ancient Latgalian farmstead hearth site near Rēzekne where 17th-century farmers threw sacrificial food morsels to Ceroklis.",
      siteType: "Household ritual sites",
      aura: "amber",
      deity: "cerklicing",
      significance: "The primary site where Joannes Stribingus observed black rooster sacrifices made to Ceroklis before communal harvest meals.",
    }
  ],
  gallery: [],
  materialLegacy: ["Sacrificial hearth spoons", "Iron cooking tripods"],
  regionDetails: { en: "Latvia (Latgale / Rēzekne / Ludza)", lt: "Latvija (Latgala / Rėzeknė / Ludza)", lv: "Latvija (Latgale / Rēzekne / Ludza)" },
  tribe: { en: "Latgalians, Latvians", lt: "Latgaliai, latviai", lv: "Latgaļi, latvieši" },
  period: { en: "17th Century Records (1606 Stribingus, 1649 Einhorn)", lt: "XVII a. šaltiniai (1606 m. Stribingas, 1649 m. Einhornas)", lv: "17. gadsimta avoti (1606. g. Stribings, 1649. g. Einhorns)" },
  references: [
    "Joannes Stribingus: Relatio de initio et progressu missionis Livonicae (1606)",
    "Paul Einhorn: Historia Lettica (Dorpat, 1649)",
    "Pēteris Šmits: Latviešu mitoloģija (Rīga, 1926)",
    "Haralds Biezais: Die Hauptgöttinnen der alten Letten (Uppsala, 1955)"
  ],
};

export const puskaitisMeta: DeityMeta = {
  slug: "puskaitis",
  name: "Puškaitis",
  altNames: { en: "Puschkaitis", lt: "Puškaitis", lv: "Puškaitis" },
  domain: "God",
  epithet: {
    en: "Lord of the Earth and Subterranean Kaukai",
    lt: "Žemės ir požemio kaukų valdovas",
    lv: "Zemes un pazemes kaukas valdnieks",
  },
  summary: {
    en: "Puškaitis is the Old Prussian and Baltic subterranean earth god who rules under elderberry trees (sambucus) and commands the gnomes (Kaukai and Barstukai). Farmers erected stone altars beneath elder bushes to offer him beer and bread.",
    lt: "Puškaitis yra senovės prūsų ir baltų požemio žemės dievas, valdantis po šeivamedžiais (sambucus) ir įsakinėjantis kaukams bei barstukams. Ūkininkai po šeivamedžių krūmais statė akmeninius altorius aukoti jam alų ir duoną.",
    lv: "Puškaitis ir senprūšu un baltu pazemes zemes dievs, kas valda zem plūškoka (sambucus) un pavēl kaukai un barstukai rūķiem. Zemnieki zem plūškoka krūmiem cēla akmens altārus, lai ziedotu viņam alu un maizi.",
  },
  heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 148, 110, 0.24)",
  accent: "#9bb07a",
  keywords: ["earth", "subterranean", "elderberry", "kaukai", "Prussia"],
  symbols: [
    { label: "Sacred symbols", detail: "Elderberry bush, Stone altar, Beer bowl, Porridge dish" }
  ],
  locations: [
    {
      id: "sambia-elder-sanctuary",
      name: "Sambia Elderberry Shrine, Old Prussia",
      coordinates: [54.8, 20.5],
      region: "Old Prussia",
      description: "An ancient Sambian elderberry bush sanctuary where stone altars were maintained for nightly porridge and beer offerings to Puškaitis.",
      siteType: "Field altars",
      aura: "moss",
      deity: "puskaitis",
      significance: "Prussian farmers left food under the elderberry branches here so Puškaitis would send his Kaukai to fill their granaries.",
    }
  ],
  gallery: [],
  materialLegacy: ["Carved stone elderberry altars", "Clay porridge bowls"],
  regionDetails: { en: "Old Prussia (Sambia, Natangia, Sūduva)", lt: "Senovės Prūsija (Sembai, Natanga, Sūduva)", lv: "Senprūsija (Samba, Natanga, Sūduva)" },
  tribe: { en: "Old Prussians, Yotvingians", lt: "Senovės prūsai, jotvingiai", lv: "Senprūši, jatvagi" },
  period: { en: "16th-17th Century Records (1561 Sudovian Book, 1690 Praetorius)", lt: "XVI-XVII a. šaltiniai (1561 m. Sūduvių knygelė, 1690 m. Pretorijus)", lv: "16.-17. gs. avoti (1561. g. Sūduvu grāmata)" },
  references: [
    "Sudovian Book (Sudauer Büchlein, c. 1520–1561)",
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Matthäus Praetorius: Deliciae Prussicae (ms. c. 1690)",
    "Visuotinė lietuvių enciklopedija: Puškaitis (https://www.vle.lt/straipsnis/puskaitis/)"
  ],
};

export const andajusMeta: DeityMeta = {
  slug: "andajus",
  name: "Andajus",
  altNames: { en: "Andajus", lt: "Andajus", lv: "Andajs" },
  domain: "God",
  epithet: {
    en: "Sacred Taboo Euphemism for the Supreme Sky God",
    lt: "Šventasis tabu epitetas aukščiausiajam Dievui",
    lv: "Svētais tabu epitets augstākajam Dievam",
  },
  summary: {
    en: "Andajus is the historical 13th-century sacred taboo epithet for Dievas recorded in the 1252 Hypatian Codex as invoked by King Mindaugas. Etymologically derived from *an-deivas (the sky-god on high), it reflects Baltic sacred name-taboo rules.",
    lt: "Andajus yra istorinis XIII a. šventasis tabu epitetas Dievui, užfiksuotas 1252 m. Hipato metraštyje, kuomet jį šaukė karalius Mindaugas. Etimologiškai kilęs iš *an-deivas (aukštybių Dievas).",
    lv: "Andajs ir vēsturisks 13. gadsimta svētais tabu epitets Dievam, kas fiksēts 1252. gada Hypatijas hronikā, kad to piesauca karalis Mindaugs. Etimoloģiski cēlies no *an-deivas.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 138, 152, 0.2)",
  accent: "#b3c0c9",
  keywords: ["supreme god", "Mindaugas", "Hypatian codex", "taboo name", "Aukštaitija"],
  symbols: [
    { label: "Sacred symbols", detail: "Sky vault, Royal scepter, High oak, Sacred fire" }
  ],
  locations: [
    {
      id: "voruta-mindaugas-castle",
      name: "Vorūta Royal Sanctuary, Anykščiai",
      coordinates: [55.52, 25.1],
      region: "Lithuania",
      description: "The historic hillfort site of King Mindaugas' Vorūta castle where secret oaths were sworn invoking Andajus.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "andajus",
      significance: "The 1252 Hypatian Codex records King Mindaugas making private sacrifices to Andajus before royal military campaigns.",
    }
  ],
  gallery: [],
  materialLegacy: ["Royal silver bulla", "Sacred fire ashes"],
  regionDetails: { en: "Lithuania (Aukštaitija, Mindaugas Realm)", lt: "Lietuva (Aukštaitija, Mindaugo valda)", lv: "Lietuva (Augštaitija, Mindauga valsts)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "13th Century (1252 Hypatian Codex)", lt: "XIII a. (1252 m. Hipato metraštis)", lv: "13. gadsimts (1252. g. Hypatijas hronika)" },
  references: [
    "Hypatian Chronicle (Ipat'evskaja Letopis', entry 1252)",
    "Gintaras Beresnevičius: Lietuvių religija ir mitologija (Vilnius, 2004)",
    "Dainius Razauskas: Lietuvių dievavardžiai XIII a. šaltiniuose (Tautosakos darbai, 2006)",
    "Visuotinė lietuvių enciklopedija: Andajus (https://www.vle.lt/straipsnis/andajus/)"
  ],
};

export const sumpurnisMeta: DeityMeta = {
  slug: "sumpurnis",
  name: "Sumpurnis",
  altNames: {
    en: "Sumpurnis / Suņpurnis / Sumpuris (Dogsnout); fem. Sumpurniene",
    lt: "Sumpurnis / Suņpurnis / Šunburnis; mot. Sumpurniene",
    lv: "Sumpurnis / Suņpurnis / Sumpuris; siev. Sumpurniene / Sumpurnene",
  },
  domain: "Creature",
  epithet: {
    en: "Dog-Snouted Man-Eating Forest Beings",
    lt: "Šuns snukį turintys miško žmogėdros",
    lv: "Suņpurnainie meža cilvēkēdāji",
  },
  summary: {
    en: "Sumpurņi (also Suņpurni / dialect Sumpuris, \"dogsnouts\") are malevolent Latvian forest beings—human body, dog head (sometimes bird head, one eye, or one leg)—who fatten captives, drink blood, and stand as hunter-outsiders opposite farmers. Classed among lower spirits beside vilkači and vadātājs; hero Kurbads throttles one by the dog throat.",
    lt: "Sumpurņi (taip pat Suņpurni / tarm. Sumpuris, „šunsnukiai“) — pikti latvių miško padarai su žmogaus kūnu ir šuns galva (kartais paukščio galva, viena akimi ar koja), penintys belaisvius ir geriantys kraują. Priskiriami žemesniųjų dvasių grupei šalia vilkači ir vadātājs; herojus Kurbadas griebia Sumpurnį už šuns gerklės.",
    lv: "Sumpurņi (arī suņpurni / dial. sumpuris) ir ļaunas latviešu meža būtnes — cilvēka rumpi, suņa galvu (dažkārt putna galvu, vienu aci vai kāju) —, kas nobaro gūstekņus un izdzer asinis. Ierindoti zemākā līmeņa būtnēs līdzās vilkačiem un vadātājam; Kurbads satver sumpurni aiz suņa rīkles.",
  },
  heroImage: "https://images.unsplash.com/photo-1509024121564-13f14ac0b9b9?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(86, 102, 90, 0.3)",
  accent: "#8fa687",
  keywords: [
    "sumpurņi",
    "suņpurnis",
    "dogsnout",
    "dog-headed",
    "man-eater",
    "ATU 327A",
    "Kurbads",
    "vilkatis",
    "vadātājs",
    "sumpurņa pils",
    "Latvia",
  ],
  symbols: [
    {
      label: { en: "Sacred symbols", lt: "Šventie simboliai", lv: "Svētie simboli" },
      detail: {
        en: "Dog snout, Leaf cloak, Long noble tail, Ash-filled reverse shoes, Enchanted belt, Iron claws (dzelzs nagi)",
        lt: "Šuns snukis, lapų apsiaustas, ilga uodega, pelenais pripildyti atvirkšti batai, užburtas diržas, geležiniai nagai",
        lv: "Suņa purns, lapu tērps, gara aste, pelniem pildītas otrādi kurpes, burvju josta, dzelzs nagi",
      },
    },
  ],
  locations: [
    {
      id: "dzukste-pienava-kurbads",
      name: "Džūkste–Pienava Folktale Landscape, Semigallia",
      coordinates: [56.79, 23.25],
      region: "Latvia",
      description:
        "District where Ansis Lerhis-Puškaitis recorded the long Kurbads cycle in which the hero fights a meadow-owning Sumpurnis and his guardian bird.",
      siteType: "Legendary creation sites",
      aura: "moss",
      deity: "sumpurnis",
      significance:
        "Primary recorded narrative arena for Sumpurnis as a named antagonist; later etched by Rihards Zariņš as Kurbads un sumpurnis (1908–1911).",
    },
    {
      id: "vecpiebalga-atu327a",
      name: "Vecpiebalga, Vidzeme",
      coordinates: [57.06, 25.82],
      region: "Latvia",
      description:
        "Recording place of Cilvēku bērni pie sumpurņiem (ATU 327A): fattened girl, oven trick, ash-filled reverse shoes.",
      siteType: "Legendary creation sites",
      aura: "moss",
      deity: "sumpurnis",
      significance: "Key Šmits / Lerhis-Puškaitis tale provenance for the oven-escape cycle (LP VII, I, 998).",
    },
    {
      id: "cesvaine-sumpurnu-zeme",
      name: "Cesvaine, Vidzeme",
      coordinates: [56.97, 26.32],
      region: "Latvia",
      description:
        "Belief recording locus for Sumpurņu zeme: dog-snout people, bark-speech, and paired one-limbed runners who move like the wind.",
      siteType: "Legendary creation sites",
      aura: "mist",
      deity: "sumpurnis",
      significance: "J. Karps / Šmits belief texts (LP VII, I, 994,1) describing the dogsnout land.",
    },
    {
      id: "gulbene-ticejumi",
      name: "Gulbene, NE Vidzeme",
      coordinates: [57.18, 26.75],
      region: "Latvia",
      description: "NE Vidzeme provenance for Šmits ticējumi entries on sumpurņi (LTT ~28992–28993; J. Banga).",
      siteType: "Legendary creation sites",
      aura: "moss",
      deity: "sumpurnis",
      significance: "Closest major town to the Alūksne area with attested belief texts—not a cult shrine.",
    },
    {
      id: "rauna-sumpurnene",
      name: "Rauna (Ronneburg), Vidzeme",
      coordinates: [57.33, 25.61],
      region: "Latvia",
      description: "ME dictionary cites sumpurnene from Pas. III, 491 in the Rauna / Ronneburg area.",
      siteType: "Legendary creation sites",
      aura: "mist",
      deity: "sumpurnis",
      significance: "Lexical-folklore attestation of the female form in Vidzeme.",
    },
    {
      id: "bauska-belt-curse",
      name: "Bauska District, Semigallia",
      coordinates: [56.41, 24.19],
      region: "Latvia",
      description:
        "Provenance for the sorcerer’s belt curse that turns people into sumpurņi or vilkači (LTT ~3902; G. Pols).",
      siteType: "Legendary creation sites",
      aura: "amber",
      deity: "sumpurnis",
      significance: "Documents the werewolf-overlap transformation rite: belt untied or torn to break the spell.",
    },
    {
      id: "kronvalda-parks-maurs",
      name: "Kronvalda Park Fountain Group, Riga",
      coordinates: [56.96, 24.11],
      region: "Latvia",
      description:
        "Site of Rihards Maurs's 1933 artificial-stone fountain sculptures Sumpurnis, Bārenīte, Mātesmeita — a modern fairy-tale monument, not a folk cult shrine.",
      siteType: "Legendary creation sites",
      aura: "amber",
      deity: "sumpurnis",
      significance: "Twentieth-century urban reception of the dogsnout figure in Latvian public art.",
    },
  ],
  gallery: [
    {
      title: {
        en: "Kurbads and the Sumpurnis",
        lt: "Kurbadas ir Sumpurnis",
        lv: "Kurbads un sumpurnis",
      },
      medium: {
        en: "Etching (Rihards Zariņš, 1908–1911)",
        lt: "Ofortas (Rihards Zariņš, 1908–1911)",
        lv: "Oforts (Rihards Zariņš, 1908–1911)",
      },
      note: {
        en: "From the cycle Ko Latvijas meži šalc; held by the Latvian National Museum of Art.",
        lt: "Iš ciklo Ko Latvijas meži šalc; Latvijos nacionalinis dailės muziejus.",
        lv: "No cikla Ko Latvijas meži šalc; Latvijas Nacionālais mākslas muzejs.",
      },
    },
    {
      title: {
        en: "Sumpurnis, Bārenīte, Mātesmeita",
        lt: "Sumpurnis, Bārenīte, Mātesmeita",
        lv: "Sumpurnis, Bārenīte, Mātesmeita",
      },
      medium: {
        en: "Artificial-stone fountain group (Rihards Maurs, 1933)",
        lt: "Dirbtinio akmens fontano skulptūrų grupė (Rihards Maurs, 1933)",
        lv: "Mākslīgā akmens strūklakas skulptūru grupa (Rihards Maurs, 1933)",
      },
      note: {
        en: "Kronvalda Park, Riga — fairy-tale scene with the orphan / witch-daughter cycle, not ethnographic idol.",
        lt: "Kronvaldo parkas, Ryga — pasakų scena su našlaitės / raganos dukters ciklu, ne etnografinis kultas.",
        lv: "Kronvalda parks, Rīga — pasaku aina ar sērdienītes / raganas meitas ciklu, ne etnogrāfisks kults.",
      },
    },
  ],
  materialLegacy: [
    {
      en: "Rihards Zariņš etching Kurbads un sumpurnis",
      lt: "Rihardo Zariņo ofortas Kurbads un sumpurnis",
      lv: "Riharda Zariņa oforts Kurbads un sumpurnis",
    },
    {
      en: "Rihards Maurs fountain group, Kronvalda Park (1933)",
      lt: "Rihardo Mauro fontano skulptūros Kronvaldo parke (1933)",
      lv: "Riharda Maura strūklakas skulptūras Kronvalda parkā (1933)",
    },
    {
      en: "Latvian Art Academy carnival Sumpurņa pils (1929, 2019)",
      lt: "Latvijos dailės akademijos karnavalas Sumpurņa pils (1929, 2019)",
      lv: "Latvijas Mākslas akadēmijas karnevāls Sumpurņa pils (1929, 2019)",
    },
    {
      en: "Modern oak woodcarvings of fairy-tale sumpurņi (literary craft motif)",
      lt: "Šiuolaikiniai ąžuolo drožiniai su pasakų sumpurņiais (literatūrinis amato motyvas)",
      lv: "Mūsdienu ozolkoka kokgriezumi ar pasaku sumpurņiem (literārs amata motīvs)",
    },
    {
      en: "Fairy-tale and encyclopedia illustrations of dog-headed sumpurņi",
      lt: "Pasakų ir enciklopedijų iliustracijos su šuns galvos sumpurņiais",
      lv: "Pasaku un enciklopēdiju ilustrācijas ar suņa galvas sumpurņiem",
    },
  ],
  regionDetails: {
    en: "Latvia (pan-regional; Vidzeme — Cesvaine, Gulbene, Vecpiebalga, Rauna, Salaca; Semigallia — Bauska belt beliefs, Džūkste–Pienava Kurbads; also Nīgrande lexical note)",
    lt: "Latvija (visame krašte; Vidžemė — Cesvainė, Gulbene, Vecpiebalga, Rauna, Salaca; Žiemgala — Bauskos diržas, Džūkste–Pienava; taip pat Nīgrandes leksika)",
    lv: "Latvija (visā teritorijā; Vidzeme — Cesvaine, Gulbene, Vecpiebalga, Rauna, Salaca; Zemgale — Bauskas josta, Džūkste–Pienava; arī Nīgrandes leksika)",
  },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: {
    en: "19th–early 20th c. oral tradition (Šmits beliefs & Lerhis-Puškaitis / Šmits tale collections)",
    lt: "XIX–XX a. pr. tautosaka (Šmito ticējumi ir Lerhio-Puškaičio / Šmito pasakos)",
    lv: "19.–20. gs. sāk. mutvārdu tradīcija (Šmita ticējumi un Lerha-Puškaiša / Šmita pasakas)",
  },
  references: [
    "Pēteris Šmits: Latviešu tautas ticējumi — Sumpurņi (http://valoda.ailab.lv/folklora/ticejumi/sumpurni.htm; Cesvaine, Gulbene, Kuldīga)",
    "Pēteris Šmits: Latviešu pasakas un teikas — Cilvēku bērni pie sumpurņiem (ATU 327A; LP VII, I, 998; Vecpiebalga; http://valoda.ailab.lv/folklora/pasakas/gr03/088p.htm)",
    "Šmits corpus: chicken-legged sumpurņa pils cycles (http://valoda.ailab.lv/folklora/pasakas/gr05/0502501.htm ; …/0502503.htm)",
    "Šmits: burvji → sumpurņi/vilkači belt curse (LTT ~3902; Bauska; http://valoda.ailab.lv/folklora/ticejumi/burvj.htm)",
    "Mitoloģijas enciklopēdija, 2. sēj. (Rīga: Latvijas enciklopēdija, 1994), 220. lpp.",
    "Janīna Kursīte: Latviešu dievības un gari (Rīga: Rundas, 2020), 212. lpp.",
    "Mühlenbachs–Endzelīns (ME III): sùmpur̂nis / suņpurnis (https://mev.tezaurs.lv/sumpurnis)",
    "Latvijas Nacionālā enciklopēdija: latviešu mitoloģija (https://enciklopedija.lv/skirklis/242766)",
    "Latvijas Nacionālā enciklopēdija: Rihards Maurs fountain (https://enciklopedija.lv/skirklis/170249)",
  ],
};

export const vadatajsMeta: DeityMeta = {
  slug: "vadatajs",
  name: "Vadātājs",
  altNames: { en: "Vadatajs", lt: "Vadātājas", lv: "Vadātājs" },
  domain: "Creature",
  epithet: {
    en: "Disorienting Forest and Marsh Spirit",
    lt: "Klaidinanti miško ir pelkių dvasia",
    lv: "Maldinošs meža un purva gars",
  },
  summary: {
    en: "Vadātājs is a Latvian disorienting spirit or ghost who leads travelers astray in dark forests, peat bogs, or crossroads, causing them to walk in circles until they turn their clothing inside out.",
    lt: "Vadātājas yra latvių klaidinanti dvasia arba vaiduoklis, vedantis keliautojus iš kelio tamsiuose miškuose, pelkėse ar kryžkelėse, versdamas juos suktis ratu, kol jie neatsuka drabužių išvirkščiai.",
    lv: "Vadātājs ir latviešu maldinošs gars vai vaids, kas ved ceļotājus maldos biezos mežos, purvos vai krustceļos, liekot staigāt pa riņķi, līdz drēbes tiek apgrieztas uz otru pusi.",
  },
  heroImage: "https://images.unsplash.com/photo-1509024121564-13f14ac0b9b9?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(86, 102, 90, 0.3)",
  accent: "#8fa687",
  keywords: ["disorientation", "marsh spirit", "bog", "forest ghost", "wandering"],
  symbols: [
    { label: "Sacred symbols", detail: "Turned jacket, Circular track, Peat haze, Wisp of mist" }
  ],
  locations: [
    {
      id: "tiruma-bog-trail",
      name: "Tīreļpurvs Bog Trail, Kurzeme",
      coordinates: [56.82, 23.58],
      region: "Latvia",
      description: "A vast peat bog near Ķemeri where travelers frequently reported being led in circles by Vadātājs.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "vadatajs",
      significance: "Folk superstitions instructed lost travelers to stop at a bog pine, turn their coat inside out, and recite a counter-spell to break Vadātājs' spell.",
    }
  ],
  gallery: [],
  materialLegacy: ["Inverted wool coats", "Crossroads bread crusts"],
  regionDetails: { en: "Latvia (Kurzeme, Vidzeme, Latgale)", lt: "Latvija (Kuršas, Vidžemė, Latgala)", lv: "Latvija (Kurzeme, Vidzeme, Latgale)" },
  tribe: { en: "Latvians, Curonians", lt: "Latviai, kuršiai", lv: "Latvieši, kurši" },
  period: { en: "Traditional Oral Legends (Latviešu tautas ticējumi)", lt: "Tautosakos sakmės ir ticējumi", lv: "Mutes folklora un ticējumi" },
  references: [
    "Pēteris Šmits: Latviešu tautas ticējumi (4 vols, 1939–1941)",
    "Kārlis Straubergs: Latviešu tautas pasūtījumi un lūgšanas (1939)",
    "Latvijas Nacionālā enciklopēdija: Latviešu mitoloģija (https://enciklopedija.lv/skirklis/136733)"
  ],
};

export const barzdukaiMeta: DeityMeta = {
  slug: "barzdukai",
  name: "Barzdukai",
  altNames: { en: "Barstukai", lt: "Barzdukai", lv: "Barstuki" },
  domain: "Creature",
  epithet: {
    en: "Bearded Earth Dwarves of the Elder Trees",
    lt: "Barzdotie šeivamedžių žemės nykštukai",
    lv: "Bārdainie plūškoka zemes rūķi",
  },
  summary: {
    en: "Barzdukai (Barstukai) are Old Prussian and Lithuanian subterranean dwarves living beneath elderberry trees (sambucus). Serving the earth god Puškaitis, these bearded earth-wights secretly fill the granaries of industrious peasants.",
    lt: "Barzdukai (Barstukai) yra senovės prūsų ir lietuvių požemio nykštukai, gyvenantys po šeivamedžiais. Tarnaudami žemės dievui Puškaičiui, šie barzdoti žemės padarai slapta pripildo darbščių ūkininkų klėtis.",
    lv: "Barzdukai (Barstukai) ir senprūšu un lietuviešu pazemes rūķi, kas dzīvo zem plūškoka. Kalpojot zemes dievam Puškaitim, šie bārdainie zemes gari klusi piepilda strādīgu zemnieku klētis.",
  },
  heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 148, 110, 0.24)",
  accent: "#9bb07a",
  keywords: ["earth gnomes", "elderberry", "Puškaitis", "granary wealth", "Prussia"],
  symbols: [
    { label: "Sacred symbols", detail: "Elderberry root, Grain sack, Porridge bowl, Beard" }
  ],
  locations: [
    {
      id: "suduva-elder-grove",
      name: "Sūduva Elder Mound, Marijampolė",
      coordinates: [54.55, 23.35],
      region: "Lithuania",
      description: "A sacred elderberry grove in Sūduva where stone altars were set up for nightly milk and bread offerings to the Barzdukai.",
      siteType: "Field altars",
      aura: "moss",
      deity: "barzdukai",
      significance: "First documented in the 1561 Sudovian Book as the subterranean helpers who brought harvest abundance to kind farmsteads.",
    }
  ],
  gallery: [],
  materialLegacy: ["Clay milk bowls", "Elder-wood carved figurines"],
  regionDetails: { en: "Lithuania (Sūduva, Suvalkija), Old Prussia", lt: "Lietuva (Sūduva, Suvalkija), Senovės Prūsija", lv: "Lietuva (Sūduva), Senprūsija" },
  tribe: { en: "Yotvingians, Lithuanians, Old Prussians", lt: "Jotvingiai, lietuviai, prūsai", lv: "Jatvagi, lietuvieši, prūši" },
  period: { en: "16th Century Records (1561 Sudovian Book, 1582 Łasicki)", lt: "XVI a. šaltiniai (1561 m. Sūduvių knygelė, 1582 m. Lasickis)", lv: "16. gadsimta avoti (1561. g. Sūduvu grāmata)" },
  references: [
    "Sudovian Book (Sudauer Büchlein, c. 1520–1561)",
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Mitinės būtybės: kaukai, aitvarai (Vilnius, 1977)",
    "Visuotinė lietuvių enciklopedija: Barstukai (https://www.vle.lt/straipsnis/barstukai/)"
  ],
};

export const lizdeikaMeta: DeityMeta = {
  slug: "lizdeika",
  name: "Lizdeika",
  altNames: { en: "Lizdeika", lt: "Lizdeika", lv: "Lizdeika" },
  domain: "Person",
  epithet: {
    en: "High Priest of Vilnius and Interpreter of the Iron Wolf",
    lt: "Vyriausiasis Vilniaus žynys ir Geležinio vilko aiškintojas",
    lv: "Viļņas augstākais krīvs un Dzelzs vilka sapņa skaidrotājs",
  },
  summary: {
    en: "Lizdeika is the legendary 14th-century Lithuanian High Priest (Krivis) who was found as an infant in an eagle's nest. He interpreted Grand Duke Gediminas's dream of the Iron Wolf on Tauro Hill, foretelling the eternal fame of Vilnius.",
    lt: "Lizdeika yra legendinis XIV a. Lietuvos vyriausiasis žynys (Krivis), rastas kūdikis erelio lizde. Jis išaiškino kunigaikščio Gedimino sapną apie Geležinį vilką ant Tauro kalno, išpranašaudamas Vilniaus šlovę.",
    lv: "Lizdeika ir leģendārs 14. gadsimta lietuviešu augstākais krīvs, kas atrasts ērglis ligzdā. Viņš izskaidroja dižkunigaiša Ģedimina sapni par Dzelzs vilku, paredzot Viļņas mūžīgo slavu.",
  },
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(216, 150, 70, 0.22)",
  accent: "#d6a74f",
  keywords: ["high priest", "krivis", "iron wolf", "Gediminas", "Vilnius"],
  symbols: [
    { label: "Sacred symbols", detail: "Eagle nest, Iron wolf, Krivūlė staff, Flame" }
  ],
  locations: [
    {
      id: "vilnius-tauro-hill",
      name: "Tauro Hill Sanctuary, Vilnius",
      coordinates: [54.68, 25.27],
      region: "Lithuania",
      description: "The historic hill in Vilnius where Grand Duke Gediminas slept and Lizdeika interpreted the dream of the howling Iron Wolf.",
      siteType: "Sacred hilltops",
      aura: "amber",
      deity: "lizdeika",
      significance: "Site of the legendary prophecy that led to the founding of Vilnius as Grand Duchy capital in 1323.",
    }
  ],
  gallery: [],
  materialLegacy: ["Priestly curved staff (Krivūlė)", "Bronze eagle charm"],
  regionDetails: { en: "Lithuania (Aukštaitija / Vilnius)", lt: "Lietuva (Aukštaitija / Vilnius)", lv: "Lietuva (Augštaitija / Viļņa)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "14th Century Context (Chronicle of Bychowiec & Stryjkowski 1582)", lt: "XIV a. kontekstas (Bychovco kronika, Strijkovskis 1582 m.)", lv: "14. gs. konteksts (Bihovcas hronika, Strijkovskis 1582)" },
  references: [
    "Chronicle of Bychowiec (Bychovco kronika, 16th c.)",
    "Maciej Stryjkowski: Kronika polska, litewska, żmódzka (1582)",
    "Norbertas Vėlius: Baltų religijos ir mitologijos šaltiniai, Vol. 2",
    "Visuotinė lietuvių enciklopedija: Lizdeika (https://www.vle.lt/straipsnis/lizdeika/)"
  ],
};

export const pajautaMeta: DeityMeta = {
  slug: "pajauta",
  name: "Pajauta",
  altNames: { en: "Pajauta", lt: "Pajauta", lv: "Pajauta" },
  domain: "Person",
  epithet: {
    en: "Legendary Duchess of Kernavė",
    lt: "Legendinė Kernavės kunigaikštienė",
    lv: "Leģendārā Ķernavas hercogiene",
  },
  summary: {
    en: "Pajauta is a legendary Lithuanian duchess recorded in the Chronicle of Bychowiec and Stryjkowski. Beloved by her people, her death in Kernavė led her son Kukovaitis to erect a wooden idol in Pajauta Valley, where she was venerated.",
    lt: "Pajauta yra legendinė Lietuvos kunigaikštienė, paminėta Bychovco kronikoje ir Strijkovskio darbuose. Po jos mirties Kernavėje jos sūnus Kukovaitis pastatė medinį stabą Pajautos slėnyje.",
    lv: "Pajauta ir leģendāra lietuviešu hercogiene, kas pieminēta Bihovcas hronikā un Strijkovska darbos. Pēc viņas nāves Ķernavā viņas dēls Kukovaitis uzcēla koka elku Pajautas ielejā.",
  },
  heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(228, 172, 84, 0.26)",
  accent: "#e3b45c",
  keywords: ["duchess", "Kernavė", "Pajauta valley", "idol", "legend"],
  symbols: [
    { label: "Sacred symbols", detail: "Wooden idol, Valley river, Crown of flax, Linden branch" }
  ],
  locations: [
    {
      id: "kernave-pajauta-valley",
      name: "Pajauta Valley, Kernavė",
      coordinates: [54.88, 24.85],
      region: "Lithuania",
      description: "The historic valley below Kernavė hillforts where Prince Kukovaitis erected a wooden idol honoring his mother Pajauta.",
      siteType: "Legendary creation sites",
      aura: "moss",
      deity: "pajauta",
      significance: "Historic ritual site documented by 16th-century chroniclers where maidens left floral crowns to honor Duchess Pajauta.",
    }
  ],
  gallery: [],
  materialLegacy: ["Carved wooden memorial idols", "Linen dowry cloths"],
  regionDetails: { en: "Lithuania (Kernavė / Aukštaitija)", lt: "Lietuva (Kernavė / Aukštaitija)", lv: "Lietuva (Ķernava / Augštaitija)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "Legendary Medieval Epoch (Chronicle of Bychowiec & Stryjkowski 1582)", lt: "Legendinis viduramžių laikotarpis (Bychovco kronika)", lv: "Leģendārais viduslaiku laikmets (Bihovcas hronika)" },
  references: [
    "Chronicle of Bychowiec (Bychovco kronika, 16th c.)",
    "Maciej Stryjkowski: Kronika polska, litewska, żmódzka (1582)",
    "Kernavė Archaeological Reserve Archives",
    "Visuotinė lietuvių enciklopedija: Pajauta (https://www.vle.lt/straipsnis/pajauta/)"
  ],
};

export const sventaragisMeta: DeityMeta = {
  slug: "sventaragis",
  name: "Šventaragis",
  altNames: { en: "Sventaragis", lt: "Šventaragis", lv: "Šventaragis" },
  domain: "Person",
  epithet: {
    en: "Legendary Duke who Founded the Vilnius Cremation Valley",
    lt: "Legendinis kunigaikštis, įkūręs Vilniaus deginimo slėnį",
    lv: "Leģendārais dižkunigaitis, kas dibināja Viļņas dedzināšanas ieleju",
  },
  summary: {
    en: "Šventaragis is the legendary Lithuanian Grand Duke recorded in the Chronicle of Bychowiec who established the sacred cremation valley at the Neris and Vilnia confluence, decreeing that all Lithuanian rulers be cremated there.",
    lt: "Šventaragis yra legendinis Lietuvos didysis kunigaikštis, paminėtas Bychovco kronikoje, kuris įkūrė šventąjį deginimo slėnį Neries ir Vilnios santakoje ir įsakė ten deginti visus valdovus.",
    lv: "Šventaragis ir leģendārs lietuviešu dižkunigaitis, kas pieminēts Bihovcas hronikā un dibināja svēto dedzināšanas ieleju Nēres un Viļņas satekā.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["cremation valley", "Vilnius", "Šventaragis valley", "pyre", "ruler"],
  symbols: [
    { label: "Sacred symbols", detail: "Cremation pyre, Horn, River confluence, Royal ash" }
  ],
  locations: [
    {
      id: "vilnius-sventaragis-valley",
      name: "Šventaragis Valley, Vilnius Cathedral Square",
      coordinates: [54.68, 25.28],
      region: "Lithuania",
      description: "The historic valley at the confluence of the Neris and Vilnia rivers where pagan Lithuanian rulers were ritually cremated.",
      siteType: "Burial/cremation sites",
      aura: "amber",
      deity: "sventaragis",
      significance: "The central cremation sanctuary of pagan Lithuania established by Duke Šventaragis and recorded by 16th-century chroniclers.",
    }
  ],
  gallery: [],
  materialLegacy: ["Cremation urns", "Bronze belt fittings"],
  regionDetails: { en: "Lithuania (Vilnius / Aukštaitija)", lt: "Lietuva (Vilnius / Aukštaitija)", lv: "Lietuva (Viļņa / Augštaitija)" },
  tribe: { en: "Lithuanians", lt: "Lietuviai", lv: "Lietuvieši" },
  period: { en: "Legendary Pre-14th Century (Chronicle of Bychowiec & Stryjkowski)", lt: "Legendinis laikotarpis (Bychovco kronika, Strijkovskis)", lv: "Leģendārais laikmets (Bihovcas hronika, Strijkovskis)" },
  references: [
    "Chronicle of Bychowiec (Bychovco kronika, 16th c.)",
    "Maciej Stryjkowski: Kronika polska, litewska, żmódzka (1582)",
    "Vykintas Vaitkevičius: Senosios Lietuvos šventvietės (Vilnius, 2006)",
    "Visuotinė lietuvių enciklopedija: Šventaragis (https://www.vle.lt/straipsnis/sventaragis/)"
  ],
};

export const videvutisMeta: DeityMeta = {
  slug: "videvutis",
  name: "Videvutis",
  altNames: { en: "Widowuto", lt: "Videvutis", lv: "Videvuts" },
  domain: "Person",
  epithet: {
    en: "Mythic King and Unifier of the Twelve Prussian Tribes",
    lt: "Mitinis karalius ir dvylikos prūsų genčių vienytojas",
    lv: "Mitiskais ķēniņš un divpadsmit prūšu cilšu apvienotājs",
  },
  summary: {
    en: "Videvutis (Widowuto) is the mythic 6th-century King of Old Prussia recorded by Simon Grunau (1526). He unified the twelve Prussian tribes, established social laws, and ritually immolated himself at Romove alongside his brother Prutenis.",
    lt: "Videvutis (Widowuto) yra mitinis VI a. Senovės Prūsijos karalius, aprašytas Simono Grunau (1526 m.). Jis suvienijo dvylika prūsų genčių, nustatė įstatymus ir kartu su broliu Pruteniu aukojosi ant Romovės aukuro.",
    lv: "Videvuts (Widowuto) ir mitiskais 6. gadsimta Senprūsijas ķēniņš, ko aprakstījis Sīmanis Grunavs (1526). Viņš apvienoja divpadsmit prūšu ciltis un ziedoja sevi Romoves ugunskurā.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 138, 152, 0.2)",
  accent: "#b3c0c9",
  keywords: ["Old Prussia", "Widowuto", "Romove", "king", "twelve tribes"],
  symbols: [
    { label: "Sacred symbols", detail: "Twelve-branch oak, Royal flag, Sacred flame, Horn" }
  ],
  locations: [
    {
      id: "nadrovia-romove-sanctuary",
      name: "Romove Sanctuary, Nadrovia",
      coordinates: [54.62, 21.42],
      region: "Old Prussia",
      description: "The supreme Old Prussian sanctuary in Nadrovia featuring the sacred three-trunked oak tree where King Videvutis established the tribal capital.",
      siteType: "\"World tree\" analog sites",
      aura: "amber",
      deity: "videvutis",
      significance: "Site of King Videvutis' legendary ritual self-immolation alongside High Priest Prutenis.",
    }
  ],
  gallery: [],
  materialLegacy: ["Prussian tribal law tablets", "Sacred oak charcoal"],
  regionDetails: { en: "Old Prussia (Nadrovia, Sambia)", lt: "Senovės Prūsija (Nadruva, Semba)", lv: "Senprūsija (Nadrova, Samba)" },
  tribe: { en: "Old Prussians", lt: "Senovės prūsai", lv: "Senprūši" },
  period: { en: "16th Century Chronicle Record (Simon Grunau 1526)", lt: "XVI a. kronikos įrašas (Simonas Grunau 1526 m.)", lv: "16. gs. hronikas ieraksts (Sīmanis Grunavs 1526)" },
  references: [
    "Simon Grunau: Preussische Chronik (c. 1526)",
    "Lucas David: Preussische Chronik (1575)",
    "Wilhelm Mannhardt: Letto-Preussische Götterlehre (1936)",
    "Visuotinė lietuvių enciklopedija: Videvutis (https://www.vle.lt/straipsnis/videvutis/)"
  ],
};

export const prutenisMeta: DeityMeta = {
  slug: "prutenis",
  name: "Prutenis",
  altNames: { en: "Brutenus", lt: "Prutenis", lv: "Prutenis" },
  domain: "Person",
  epithet: {
    en: "First High Priest of Romove and Brother of Videvutis",
    lt: "Pirmasis Romovės vyriausiasis žynys ir Videvučio brolis",
    lv: "Pirmais Romoves augstākais krīvs un Videvuta brālis",
  },
  summary: {
    en: "Prutenis (Brutenus) is the mythic first High Priest (Crywe) of Old Prussia recorded by Simon Grunau (1526). Brother of King Videvutis, he founded the sanctuary of Romove and established the worship of the triad Patolls, Patrimpas, and Perkūnas.",
    lt: "Prutenis (Brutenus) yra mitinis pirmasis Senovės Prūsijos vyriausiasis žynys (Krivis), aprašytas Simono Grunau (1526 m.). Karaliaus Videvučio brolis, jis įkūrė Romovės šventvietę.",
    lv: "Prutenis (Brutenus) ir mitiskais pirmais Senprūsijas augstākais krīvs, ko aprakstījis Sīmanis Grunavs (1526). Ķēniņa Videvuta brālis, kas dibināja Romoves svētnīcu.",
  },
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(216, 150, 70, 0.22)",
  accent: "#d6a74f",
  keywords: ["high priest", "Romove", "Old Prussia", "Prutenis", "triad"],
  symbols: [
    { label: "Sacred symbols", detail: "Krivūlė staff, Triple oak, Sacred fire, White turban" }
  ],
  locations: [
    {
      id: "romove-krivis-altar",
      name: "Krivis Fire Altar, Romove",
      coordinates: [54.62, 21.42],
      region: "Old Prussia",
      description: "The central fire altar at Romove where High Priest Prutenis maintained the eternal oak fire for the triadic gods.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "prutenis",
      significance: "The foundation site of the Prussian priestly lineage (Kriviai) established by Prutenis.",
    }
  ],
  gallery: [],
  materialLegacy: ["Sacred oak fire tongs", "Krivūlė staff replicas"],
  regionDetails: { en: "Old Prussia (Nadrovia)", lt: "Senovės Prūsija (Nadruva)", lv: "Senprūsija (Nadrova)" },
  tribe: { en: "Old Prussians", lt: "Senovės prūsai", lv: "Senprūši" },
  period: { en: "16th Century Chronicle Record (Simon Grunau 1526)", lt: "XVI a. kronikos įrašas (Simonas Grunau 1526 m.)", lv: "16. gs. hronikas ieraksts (Sīmanis Grunavs 1526)" },
  references: [
    "Simon Grunau: Preussische Chronik (c. 1526)",
    "Peter von Dusburg: Chronicon Terrae Prussiae (1326)",
    "Wilhelm Mannhardt: Letto-Preussische Götterlehre (1936)",
    "Visuotinė lietuvių enciklopedija: Brutenis (https://www.vle.lt/straipsnis/brutenis/)"
  ],
};

export const herkusMonteMeta: DeityMeta = {
  slug: "herkus-monte",
  name: "Herkus Monte",
  altNames: { en: "Henricus Monte", lt: "Herkus Mantas", lv: "Herkus Mants" },
  domain: "Person",
  epithet: {
    en: "Leader of the Great Prussian Insurrection (1260–1274)",
    lt: "Didžiojo prūsų sukilimo vadovas (1260–1274)",
    lv: "Lielās prūšu sacelšanās vadonis (1260–1274)",
  },
  summary: {
    en: "Herkus Monte (Herkus Mantas) is the historical and mythologized leader of the Natangian Prussians who commanded the Great Prussian Insurrection (1260–1274) against the Teutonic Order, documented extensively by Peter von Dusburg.",
    lt: "Herkus Mantas (Herkus Monte) yra istorinis ir sumitologintas prūsų natangų vadas, vadovavęs Didžiajam prūsų sukilimui (1260–1274 m.) prieš Kryžiuočių ordiną, plačiai aprašytas Petro Dusburgiečio.",
    lv: "Herkus Mants (Herkus Monte) ir vēsturiskais un mitoloģizētais natangu prūšu vadonis, kas vadīja Lielo prūšu sacelšanos (1260–1274) pret Vācu ordeni.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["Herkus Mantas", "Prussian uprising", "Natangia", "Teutonic Order", "hero"],
  symbols: [
    { label: "Sacred symbols", detail: "Prussian spear, War horn, Broken cross, Oak shield" }
  ],
  locations: [
    {
      id: "pokarwis-battlefield",
      name: "Pokarvis Battlefield, Natangia",
      coordinates: [54.52, 20.35],
      region: "Old Prussia",
      description: "The historic battlefield in Natangia where Herkus Monte defeated the Knights of the Teutonic Order in 1261.",
      siteType: "Legendary creation sites",
      aura: "amber",
      deity: "herkus-monte",
      significance: "Site of Herkus Monte's greatest military victory during the Great Prussian Insurrection.",
    }
  ],
  gallery: [],
  materialLegacy: ["Prussian iron spearheads", "Natangian warrior rings"],
  regionDetails: { en: "Old Prussia (Natangia)", lt: "Senovės Prūsija (Natanga)", lv: "Senprūsija (Natanga)" },
  tribe: { en: "Natangians, Old Prussians", lt: "Natangai, prūsai", lv: "Natangi, prūši" },
  period: { en: "13th Century (1260–1274 Great Prussian Insurrection)", lt: "XIII a. (1260–1274 m. Didysis prūsų sukilimas)", lv: "13. gs. (1260–1274 Lielā prūšu sacelšanās)" },
  references: [
    "Peter von Dusburg: Chronicon Terrae Prussiae (1326)",
    "Livonian Rhymed Chronicle (late 13th c.)",
    "Stephen C. Rowell: Lithuania Ascending (Cambridge, 1994)",
    "Visuotinė lietuvių enciklopedija: Herkus Mantas (https://www.vle.lt/straipsnis/herkus-mantas/)"
  ],
};

export const spidolaMeta: DeityMeta = {
  slug: "spidola",
  name: "Spīdola",
  altNames: { en: "Spidola", lt: "Spīdola", lv: "Spīdola" },
  domain: "Person",
  epithet: {
    en: "Enchantress of the Night and Daughter of Burtnieks",
    lt: "Naktinė burtininkė ir Burtnieko duktė",
    lv: "Nakts burve un Burtnieka meita",
  },
  summary: {
    en: "Spīdola is a complex witch and sorceress figure in Latvian epic tradition (Pumpurs 1888, Rainis 1905). Daughter of the sage Burtnieks, she transforms from an adversary who flies on a dragon into a redeemed national protector who aids Lāčplēsis.",
    lt: "Spīdola yra sudėtinga burtininkė latvių epo tradicijoje (Pumpurs 1888 m., Rainis 1905 m.). Iš pradžių buvusi priešininkė, skraidanti ant slibino, ji tampa išlaisvinta tautine globėja.",
    lv: "Spīdola ir sarežģīts burves tēls latviešu eposa tradīcijā (Pumpurs 1888, Rainis 1905). Burtnieka meita, kas no pretinieces pārtop par atpestītu tautas sargātāju.",
  },
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 138, 152, 0.2)",
  accent: "#b3c0c9",
  keywords: ["witch", "enchantress", "Spīdola", "Burtnieks", "Rainis"],
  symbols: [
    { label: "Sacred symbols", detail: "Glowing eyes, Flying dragon, Amber crystal, Rune scroll" }
  ],
  locations: [
    {
      id: "burtnieks-castle-ruins",
      name: "Burtnieks Sunken Castle, Lake Burtnieks",
      coordinates: [57.7, 25.26],
      region: "Latvia",
      description: "The sunken castle site at Lake Burtnieks where Spīdola's father kept ancient wisdom scrolls.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "spidola",
      significance: "Site where Lāčplēsis raised the sunken castle of wisdom with Spīdola's aid.",
    }
  ],
  gallery: [],
  materialLegacy: ["Amber crystal amulets", "Rune-engraved silver rings"],
  regionDetails: { en: "Latvia (Vidzeme)", lt: "Latvija (Vidžemė)", lv: "Latvija (Vidzeme)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "19th-20th Century Literary Tradition (Pumpurs 1888, Rainis 1905)", lt: "XIX-XX a. literatūros tradicija (Pumpurs, Rainis)", lv: "19.-20. gs. literatūras tradīcija (Pumpurs, Rainis)" },
  references: [
    "Pumpurs, Andrejs: Lāčplēsis (1888)",
    "Rainis, Jānis: Uguns un nakts (1905)",
    "Latvijas Nacionālā enciklopēdija: Spīdola (https://enciklopedija.lv/skirklis/136745)"
  ],
};

export const kangarsMeta: DeityMeta = {
  slug: "kangars",
  name: "Kangars",
  altNames: { en: "Kangars", lt: "Kangaras", lv: "Kangars" },
  domain: "Person",
  epithet: {
    en: "Traitor Priest of the Latvian Epic",
    lt: "Latvių epo žynys išdavikas",
    lv: "Latviešu eposa nodevīgais krīvs",
  },
  summary: {
    en: "Kangars is the archetypal traitor figure in Latvian literary mythology (Pumpurs 1888). Originally a pagan priest, he betrayed Lāčplēsis' secret weakness (his bear ears) to the Crusaders out of jealousy and thirst for power.",
    lt: "Kangars yra archetipinis išdaviko personažas latvių epe (Pumpurs 1888 m.). Buvęs pagonių žynys, jis išdavė Lāčplėsio ausų paslaptį kryžiuočiams iš pavydo.",
    lv: "Kangars ir arhetipisks nodevēja tēls latviešu eposā (Pumpurs 1888). Bijušais krīvs, kas parādīja krustnešiem Lāčplēša lāča ausu noslēpumu.",
  },
  heroImage: "https://images.unsplash.com/photo-1509024121564-13f14ac0b9b9?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(86, 102, 90, 0.3)",
  accent: "#8fa687",
  keywords: ["traitor", "Kangars", "treachery", "crusaders", "epic"],
  symbols: [
    { label: "Sacred symbols", detail: "Broken staff, Silver pieces, Dark mantle" }
  ],
  locations: [
    {
      id: "kangari-hills-ridge",
      name: "Lielie Kangari Ridge, Ropaži",
      coordinates: [56.92, 24.72],
      region: "Latvia",
      description: "A famous glacial esker ridge near Ropaži named in folk tradition after Kangars.",
      siteType: "Sacred hilltops",
      aura: "mist",
      deity: "kangars",
      significance: "Geological esker ridge associated with Kangars' downfall in folk tradition.",
    }
  ],
  gallery: [],
  materialLegacy: ["Iron collar chains"],
  regionDetails: { en: "Latvia (Vidzeme)", lt: "Latvija (Vidžemė)", lv: "Latvija (Vidzeme)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "19th Century Epic (Andrejs Pumpurs 1888)", lt: "XIX a. epas (Andrejs Pumpurs 1888 m.)", lv: "19. gs. eposu tradīcija (Pumpurs 1888)" },
  references: [
    "Pumpurs, Andrejs: Lāčplēsis (1888)",
    "Latvijas Nacionālā enciklopēdija: Kangars (https://enciklopedija.lv)"
  ],
};

export const kurbadsMeta: DeityMeta = {
  slug: "kurbads",
  name: "Kurbads",
  altNames: { en: "Kurbads", lt: "Kurbadas", lv: "Kurbads" },
  domain: "Person",
  epithet: {
    en: "Mare-Born Hero and Monster Slayer of Folktales",
    lt: "Kumelės gimdytas herojaus ir monstrų nugalėtojas",
    lv: "Ķēves dzimušais varonis un briesmoņu uzvarētājs",
  },
  summary: {
    en: "Kurbads is a legendary fairytale hero born from a mare who swallowed a magical fish. Recorded by Ansis Lerhis-Puškaitis around Džūkste–Pienava, he wields an iron club against multi-headed devils, dragons, and a meadow-owning Sumpurnis seized by the dog throat.",
    lt: "Kurbadas yra legendinis pasakų herojus, gimęs iš kumelės, prarijusios stebuklingą žuvį. Ansis Lerhis-Puškaitis Džūkste–Pienavos apylinkėse aprašė, kaip jis geležine kuoka nugalėjo daugiagalvius velnius, slibinus ir pievas valdantį Sumpurnį, griebtą už šuns gerklės.",
    lv: "Kurbads ir leģendārs pasaku varonis, kas dzimis no ķēves pēc burvju zivs apēšanas. Ansis Lerhis-Puškaitis Džūkstes–Pienavas pusē fiksēja, kā viņš ar dzelzs vāli pieveic daudzgalvainos velnus, pūķus un pļavu saimnieku sumpurni, satvertu aiz suņa rīkles.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["fairytale hero", "mare-born", "iron club", "Kurbads", "dragon-slayer", "Sumpurnis"],
  symbols: [
    { label: "Sacred symbols", detail: "Iron club, Mare hoof, Nine-headed dragon skull, Dog-throated Sumpurnis" }
  ],
  locations: [
    {
      id: "daugava-kurbads-mound",
      name: "Kurbads Oak Mound, Daugava Valley",
      coordinates: [56.6, 25.2],
      region: "Latvia",
      description: "A legendary hillock along the Daugava associated with Kurbads' duel against the Devil of the Iron Mountain.",
      siteType: "Legendary creation sites",
      aura: "amber",
      deity: "kurbads",
      significance: "Traditional site cited in Lerhis-Puškaitis' fairy tale collections.",
    }
  ],
  gallery: [],
  materialLegacy: ["Iron club amulets"],
  regionDetails: { en: "Latvia (Vidzeme, Kurzeme)", lt: "Latvija (Vidžemė, Kuršas)", lv: "Latvija (Vidzeme, Kurzeme)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "Traditional Folktale Codification (Ansis Lerhis-Puškaitis 1891)", lt: "Pasakų kodifikacija (Ansis Lerhis-Puškaitis 1891 m.)", lv: "Pasaku kodifikācija (Ansis Lerhis-Puškaitis 1891)" },
  references: [
    "Lerhis-Puškaitis, Ansis: Latviešu tautas pasakas (7 vols, 1891–1903)",
    "Šmits, Pēteris: Latviešu pasakas un teikas (1925–1937)",
    "Latvijas Nacionālā enciklopēdija: Kurbads (https://enciklopedija.lv)"
  ],
};

export const roseOfTuraidaMeta: DeityMeta = {
  slug: "rose-of-turaida",
  name: "Rose of Turaida",
  altNames: { en: "Turaidas Roze", lt: "Turaidos Rožė", lv: "Turaidas Roze" },
  domain: "Person",
  epithet: {
    en: "Maija — Maiden of Inviolable Virtue and Eternal Fidelity",
    lt: "Maja — nepalaužiamos dorybės ir meilės mergelė",
    lv: "Maija — neaizskaramas tikumības un uzticības jaunava",
  },
  summary: {
    en: "The Rose of Turaida (Maija Greif, 1601–1620) is Latvia's most famous historical romantic heroine. Found as an infant after the 1601 Siege of Turaida Castle, she chose death in Gutmanis Cave over dishonor by a deserter soldier, leaving a immortal legacy of tragic fidelity.",
    lt: "Turaidos Rožė (Maija Greif, 1601–1620 m.) yra garsiausia Latvijos istorinė romantinė herojė. Rasta kūdikis po Turaidos pilies apgulties, ji pasirinko mirtį Gutmanio oloje nei garbės netekimą.",
    lv: "Turaidas Roze (Maija Greifa, 1601–1620) ir slavenākā Latvijas vēsturiskā romantiskā varone. Atrasta zīdainis pēc Turaidas pils aplenkuma, viņa izvēlējās nāvi Gūtmaņa alā.",
  },
  heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(228, 172, 84, 0.26)",
  accent: "#e3b45c",
  keywords: ["Turaida", "Maija", "Gutmanis cave", "fidelity", "legend"],
  symbols: [
    { label: "Sacred symbols", detail: "Red rose, Magic scarf, Gutmanis cave spring, Linden blossom" }
  ],
  locations: [
    {
      id: "gutmanis-cave-turaida",
      name: "Gutmanis Cave, Sigulda / Turaida",
      coordinates: [57.17, 24.85],
      region: "Latvia",
      description: "The ancient sandstone cave near Turaida Castle where Maija met her tragic fate in 1620.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "rose-of-turaida",
      significance: "Latvia's most famous romantic pilgrimage site where newlyweds leave flowers at Maija's grave.",
    }
  ],
  gallery: [],
  materialLegacy: ["Engraved scarf amulets", "Woven rose ribbons"],
  regionDetails: { en: "Latvia (Vidzeme / Sigulda / Turaida)", lt: "Latvija (Vidžemė / Sigulda / Turaida)", lv: "Latvija (Vidzeme / Sigulda / Turaida)" },
  tribe: { en: "Latvians", lt: "Latviai", lv: "Latvieši" },
  period: { en: "17th Century Historical Event (1620 Court Record, Vidzeme)", lt: "XVII a. istorinis įvykis (1620 m. teismo protokolas)", lv: "17. gadsimta vēsturisks notikums (1620. g. tiesas protokols)" },
  references: [
    "Magnus von Wolffeldt: Turaidas Rozes tiesas protokoli (1620; publ. 1848)",
    "Adalbert Cammerer: Die Jungfrau von Treiden (1820)",
    "Latvijas Nacionālā enciklopēdija: Turaidas Roze (https://enciklopedija.lv/skirklis/136746)",
    "Visuotinė lietuvių enciklopedija: Turaidos Rožė (https://www.vle.lt)"
  ],
};

export const namejsMeta: DeityMeta = {
  slug: "namejs",
  name: "Namejs",
  altNames: { en: "Nameisis", lt: "Nameisis", lv: "Namejs" },
  domain: "Person",
  epithet: {
    en: "Duke of Semigallia and Leader of Freedom Fighters",
    lt: "Žiemgalos kunigaikštis ir laisvės kovotojų vadas",
    lv: "Zemgales valdnieks un brīvības cīnītāju vadonis",
  },
  summary: {
    en: "Namejs (Nameisis) was the historical 13th-century Duke of Semigallia documented in the Livonian Rhymed Chronicle. He led the Semigallian uprising against the Livonian Knights (1279–1281), allied with Lithuanian Grand Duke Traidenis, and became the central figure of the legendary braided Namejs Ring (*Nameja gredzens*).",
    lt: "Namejs (Nameisis) buvo istorinis XIII a. Žiemgalos kunigaikštis, aprašytas Eiliuotojoje Livonijos kronikoje. Jis vadovavo žiemgalių sukilimui (1279–1281 m.) ir tapo legendinio pinto Namejo žiedo simboliu.",
    lv: "Namejs (Nameisis) bija vēsturisks 13. gadsimta Zemgales valdnieks, kas dokumentēts Atskaņu hronikā. Viņš vadīja zemgaļu sacelšanos (1279–1281) un kļuva par leģendārā Nameja gredzena simbolu.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["Namejs", "Semigallia", "Traidenis", "Nameja gredzens", "freedom"],
  symbols: [
    { label: "Sacred symbols", detail: "Braided silver ring, Semigallian shield, War battleaxe" }
  ],
  locations: [
    {
      id: "tervetes-hillfort",
      name: "Tērvetes Hillfort, Semigallia",
      coordinates: [56.48, 23.38],
      region: "Latvia",
      description: "The capital hillfort of Duke Namejs in Semigallia where the knights' sieges were repelled.",
      siteType: "Sacred hilltops",
      aura: "amber",
      deity: "namejs",
      significance: "The central stronghold of Semigallian freedom under Duke Namejs.",
    }
  ],
  gallery: [],
  materialLegacy: ["Braided silver Namejs rings", "Semigallian bronze fibulae"],
  regionDetails: { en: "Latvia (Semigallia / Zemgale)", lt: "Latvija (Žiemgala)", lv: "Latvija (Zemgale)" },
  tribe: { en: "Semigallians, Lithuanians", lt: "Žiemgaliai, lietuviai", lv: "Zemgaļi, lietuvieši" },
  period: { en: "13th Century Historical Records (Livonian Rhymed Chronicle 1279–1281)", lt: "XIII a. istoriniai šaltiniai (Eiliuotoji Livonijos kronika)", lv: "13. gs. vēsturiskie avoti (Atskaņu hronika)" },
  references: [
    "Livonian Rhymed Chronicle (Atskaņu hronika, late 13th c.)",
    "Biļķins, Vilis: Zemgaļu brīvības cīņas (1960)",
    "Latvijas Nacionālā enciklopēdija: Namejs (https://enciklopedija.lv/skirklis/136747)",
    "Visuotinė lietuvių enciklopedija: Nameisis (https://www.vle.lt/straipsnis/nameisis/)"
  ],
};

export const curcheMeta: DeityMeta = {
  slug: "curche",
  name: "Curche",
  altNames: { en: "Kurke / Curcho", lt: "Kurka / Kurkė", lv: "Kurķis" },
  domain: "God",
  epithet: {
    en: "Oldest Documented Prussian Harvest and Idol Deity (1249)",
    lt: "Seniausias dokumentuotas prūsų derliaus ir stabo dievas (1249 m.)",
    lv: "Visvecākais dokumentētais prūšu ražas dievs (1249)",
  },
  summary: {
    en: "Curche (Curcho / Kurke) is the earliest historically documented Old Prussian deity, explicitly recorded in the February 7, 1249 Treaty of Christburg (*Treaty of Dzierzgoń*). The Teutonic Order forced converted Prussians to destroy their annual straw-and-grain idol of Curche.",
    lt: "Curche (Kurka) yra pati seniausia istorinėje dokumentacijoje užfiksuota prūsų dievybė, paminėta 1249 m. vasario 7 d. Christburgo sutartyje.",
    lv: "Curche (Kurķis) ir pati vecākā vēsturiski dokumentētā senprūšu dievība, kas minēta 1249. gada Kristburgas miera līgumā.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["1249 treaty", "Christburg", "straw idol", "harvest", "Prussia"],
  symbols: [
    { label: "Sacred symbols", detail: "Straw grain idol, First sheaf, Harvest bowl, Fire ash" }
  ],
  locations: [
    {
      id: "christburg-treaty-field",
      name: "Christburg Harvest Ground, Pomesania",
      coordinates: [53.92, 19.35],
      region: "Old Prussia",
      description: "The historic Pomesanian field where the 1249 Treaty of Christburg forced Prussian clans to renounce the straw idol of Curche.",
      siteType: "Field altars",
      aura: "amber",
      deity: "curche",
      significance: "Site of the earliest written record of a Baltic deity idol in medieval treaties.",
    }
  ],
  gallery: [],
  materialLegacy: ["Woven straw harvest idols"],
  regionDetails: { en: "Old Prussia (Pomesania, Pogesania, Warmia)", lt: "Senovės Prūsija (Pamedė, Pagudė, Varmė)", lv: "Senprūsija (Pamedija, Pogedija, Vārmija)" },
  tribe: { en: "Pomesanians, Old Prussians", lt: "Pamedėnai, prūsai", lv: "Pamedieši, prūši" },
  period: { en: "13th Century Document (1249 Treaty of Christburg)", lt: "XIII a. dokumentas (1249 m. Christburgo sutartis)", lv: "13. gs. dokuments (1249. g. Kristburgas līgums)" },
  references: [
    "Treaty of Christburg (Vertrag von Christburg, Feb 7, 1249)",
    "Peter von Dusburg: Chronicon Terrae Prussiae (1326)",
    "Rowell, Stephen C.: Lithuania Ascending (Cambridge, 1994)",
    "Visuotinė lietuvių enciklopedija: Kurka (https://www.vle.lt/straipsnis/kurka/)"
  ],
};

export const markopolesMeta: DeityMeta = {
  slug: "markopoles",
  name: "Markopoles",
  altNames: { en: "Marcopoles", lt: "Markopoliai", lv: "Markopoles" },
  domain: "Creature",
  epithet: {
    en: "Noble Subterranean Earth Spirits of Old Prussia",
    lt: "Senovės prūsų tauriosios požemio žemės dvasios",
    lv: "Senprūšu cēlās pazemes zemes gari",
  },
  summary: {
    en: "Markopoles (Marcopoles) are noble subterranean earth-wights in Old Prussian mythology recorded in Matthäus Praetorius' 1690 *Deliciae Prussicae*. Unlike common gnomes, they are depicted as dignified earth protectors dwelling under sacred field stones.",
    lt: "Markopoliai (Marcopoles) yra tauriosios požemio dvasios prūsų mitologijoje, aprašytos Matėjo Pretorijaus 1690 m. darbe *Deliciae Prussicae*. Jie gyvena po šventaisiais laukų akmenimis.",
    lv: "Markopoles ir cēli pazemes gari senprūšu mitoloģijā (Matejs Pretorijs 1690). Viņi apdzīvo svētos laukakmeņus un sargā zemes auglību.",
  },
  heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 148, 110, 0.24)",
  accent: "#9bb07a",
  keywords: ["earth spirit", "subterranean", "Old Prussia", "Praetorius 1690", "stones"],
  symbols: [
    { label: "Sacred symbols", detail: "Field stone, Underground silver, Earth root, Milk bowl" }
  ],
  locations: [
    {
      id: "sambia-markopoles-stone",
      name: "Sambia Underground Stone Sanctuary",
      coordinates: [54.82, 20.4],
      region: "Old Prussia",
      description: "A large field boulder in Sambia where Prussian herders poured milk offerings for Markopoles.",
      siteType: "Ritual stones",
      aura: "moss",
      deity: "markopoles",
      significance: "Traditional ritual stone site recorded by Matthäus Praetorius in 1690.",
    }
  ],
  gallery: [],
  materialLegacy: ["Carved stone offering dishes"],
  regionDetails: { en: "Old Prussia (Sambia, Nadrovia)", lt: "Senovės Prūsija (Semba, Nadruva)", lv: "Senprūsija (Samba, Nadrova)" },
  tribe: { en: "Old Prussians", lt: "Senovės prūsai", lv: "Senprūši" },
  period: { en: "17th Century Record (Matthäus Praetorius c. 1690)", lt: "XVII a. šaltinis (Matthäus Praetorius 1690 m.)", lv: "17. gs. avots (Matthäus Praetorius 1690)" },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (ms. c. 1690)",
    "Wilhelm Mannhardt: Letto-Preussische Götterlehre (1936)",
    "Visuotinė lietuvių enciklopedija: Markopoles (https://www.vle.lt)"
  ],
};

export const smokMeta: DeityMeta = {
  slug: "smok",
  name: "Smok",
  altNames: { en: "Smok / Zmey", lt: "Smakas", lv: "Smoks" },
  domain: "Creature",
  epithet: {
    en: "Old Prussian Lake and Swamp Serpent Dragon",
    lt: "Senovės prūsų ežerų ir pelkių smakas",
    lv: "Senprūšu ezeru un purvu pūķis",
  },
  summary: {
    en: "Smok (Smakas) is a amphibious lake and swamp dragon in Old Prussian folklore recorded by Matthäus Praetorius (1690). Dwelling in deep bogs and marshy lakes, Smok guards underground gold hoards and demands tribute from lakeside villages.",
    lt: "Smakas (Smok) yra amfibinis ežerų ir pelkių slibinas prūsų tautosakoje (Praetorius 1690 m.). Gyvendamas giliose balose, Smakas saugo požeminius aukso lobius.",
    lv: "Smoks (Smok) ir ezera un purva pūķis senprūšu folklorā (Pretorijs 1690). Dzīvojot gultnēs un purvos, Smoks sargā pazemes zelta krājumus.",
  },
  heroImage: "https://images.unsplash.com/photo-1509024121564-13f14ac0b9b9?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(86, 102, 90, 0.3)",
  accent: "#8fa687",
  keywords: ["serpent", "dragon", "lake monster", "Smok", "Old Prussia"],
  symbols: [
    { label: "Sacred symbols", detail: "Serpent scale, Bog water, Gold hoard, Marsh reed" }
  ],
  locations: [
    {
      id: "pruse-marsh-lake",
      name: "Drausenas Bog Lake, Pomesania",
      coordinates: [54.05, 19.48],
      region: "Old Prussia",
      description: "A deep boggy lake in Pomesania where Prussian fishermen warned of the dwelling place of Smok.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "mist",
      deity: "smok",
      significance: "Traditional marsh lake associated with lake-dragon offerings in 17th-century Prussian accounts.",
    }
  ],
  gallery: [],
  materialLegacy: ["Serpent-coiled bronze rings"],
  regionDetails: { en: "Old Prussia (Pomesania, Pogesania)", lt: "Senovės Prūsija (Pamedė, Pagudė)", lv: "Senprūsija (Pamedija, Pogedija)" },
  tribe: { en: "Old Prussians", lt: "Senovės prūsai", lv: "Senprūši" },
  period: { en: "17th Century Record (Matthäus Praetorius c. 1690)", lt: "XVII a. šaltinis (Matthäus Praetorius 1690 m.)", lv: "17. gs. avots (Matthäus Praetorius 1690)" },
  references: [
    "Matthäus Praetorius: Deliciae Prussicae (ms. c. 1690)",
    "Toporov, Vladimir: Prusskij Jazyk (1975–1990)",
    "Visuotinė lietuvių enciklopedija: Smakas (https://www.vle.lt)"
  ],
};

export const velesMeta: DeityMeta = {
  slug: "veles",
  name: "Vėlės",
  altNames: { en: "Vėlės / Veļi", lt: "Vėlės", lv: "Veļi" },
  domain: "Creature",
  epithet: {
    en: "Ancestral Shades and Departed Souls of the Baltic World",
    lt: "Protėvių vėlės ir išėjusiųjų sielos",
    lv: "Senču veļi un aizgājēju dvēseles",
  },
  summary: {
    en: "Vėlės (Latvian: Veļi) are the ancestral spirits and shade souls of deceased human beings in Baltic mythology. During autumn soul-feasts (Vėlinės / Veļu laiks), living descendants welcomed Vėlės into the homestead sauna and dining tables to share ritual meals.",
    lt: "Vėlės (latviškai: Veļi) yra išėjusiųjų protėvių dvasios ir sielos baltų mitologijoje. Rudenį per Vėlinių (Veļu laiks) šventes gyvieji kvietė vėles į namų pirtį ir už stalo valgyti ceremoninių valgių.",
    lv: "Veļi (lietuviski: Vėlės) ir aizgājušo senču dvēseles baltu mitoloģijā. Veļu laikā rudenī dzīvie aicināja veļus uz mājām un pirti, lai cienātu ar svētku mielastu.",
  },
  heroImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 138, 152, 0.2)",
  accent: "#b3c0c9",
  keywords: ["ancestors", "Vėlinės", "Veļu laiks", "shades", "souls"],
  symbols: [
    { label: "Sacred symbols", detail: "Wax candle, Linen towel, Warm sauna bench, Porridge bowl" }
  ],
  locations: [
    {
      id: "rambynas-velines-hill",
      name: "Rambynas Ancestral Feast Hill, Lithuania",
      coordinates: [55.08, 21.9],
      region: "Lithuania",
      description: "The sacred hill above the Nemunas where ancient Lithuanians lit candle fires for Vėlės during autumn Vėlinės rites.",
      siteType: "Sacred hilltops",
      aura: "mist",
      deity: "veles",
      significance: "Central Baltic ancestral soul-gathering hillfort site.",
    }
  ],
  gallery: [],
  materialLegacy: ["Clay Vėlinės oil lamps", "Woven commemorative towels"],
  regionDetails: { en: "Lithuania, Latvia, Old Prussia", lt: "Lietuva, Latvija, Senovės Prūsija", lv: "Lietuva, Latvija, Senprūsija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Archaic Tradition to Present Day", lt: "Archajiška tradicija iki šių dienų", lv: "Arhaiska tradīcija līdz mūsdienām" },
  references: [
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Pēteris Šmits: Latviešu mitoloģija (1926)",
    "Visuotinė lietuvių enciklopedija: Vėlės (https://www.vle.lt/straipsnis/veles/)",
    "Latvijas Nacionālā enciklopēdija: Veļi (https://enciklopedija.lv/skirklis/136749)"
  ],
};

export const milzinaiMeta: DeityMeta = {
  slug: "milzinai",
  name: "Milžinai",
  altNames: { en: "Giants", lt: "Milžinai", lv: "Milži" },
  domain: "Creature",
  epithet: {
    en: "Ancient Primordial Giants who Molded Baltic Hillforts and Rivers",
    lt: "Pirmapradžiai milžinai, supylę piliakalnius ir vagoję upes",
    lv: "Senie pirmatnējie milži, kas cēla pilskalnus un veidoja upes",
  },
  summary: {
    en: "Milžinai (Latvian: Milži) are the primordial giants of Baltic mythic geography. According to legends collected across Lithuania and Latvia, giants emptied sand from their shoes to create hillforts (*piliakalniai*) and dug deep river valleys with their wooden plows.",
    lt: "Milžinai (latviškai: Milži) yra pirmapradžiai baltų mitinės geografijos herojai. Legendoje pasakojama, kad milžinai išsipylė smėlį iš klumpinių ir supylė piliakalnius bei išarė upių slėnius.",
    lv: "Milži ir pirmatnējie baltu mitoloģiskās ģeogrāfijas tēli. Teikās stāstīts, ka milži izbēra smiltis no pastalām, tādējādi radot pilskalnus un izarot upju ielejas.",
  },
  heroImage: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(210, 126, 66, 0.26)",
  accent: "#d78d52",
  keywords: ["giants", "hillforts", "landscape creation", "Milžinai", "geography"],
  symbols: [
    { label: "Sacred symbols", detail: "Hillfort mound, Giant shoe, Boulder stone, Plowshare" }
  ],
  locations: [
    {
      id: "medvegalis-giant-mound",
      name: "Medvėgalis Giant Hillfort, Samogitia",
      coordinates: [55.63, 22.38],
      region: "Lithuania",
      description: "The highest hillfort in Samogitia, legendarily created when a giant shook sand out of his giant wooden clog.",
      siteType: "Sacred hilltops",
      aura: "amber",
      deity: "milzinai",
      significance: "Famous Samogitian hillfort site created by mythic giants in popular folklore.",
    }
  ],
  gallery: [],
  materialLegacy: ["Giant boulder altars"],
  regionDetails: { en: "Lithuania, Latvia", lt: "Lietuva, Latvija", lv: "Lietuva, Latvija" },
  tribe: { en: "All Baltic tribes", lt: "Visos baltų gentys", lv: "Visas baltu ciltis" },
  period: { en: "Primordial Mythic Era (Folklore collections)", lt: "Pirmapradis mitinis laikotarpis (Tautosakos rinkiniai)", lv: "Pirmatnējais mitiskais laikmets" },
  references: [
    "Norbertas Vėlius: Senovės baltų pasaulėžiūra (1983)",
    "Pēteris Šmits: Latviešu pasakas un teikas (1925–1937)",
    "Visuotinė lietuvių enciklopedija: Milžinai (https://www.vle.lt/straipsnis/milzinai/)"
  ],
};

export const kaukasMeta: DeityMeta = {
  slug: "kaukas",
  name: "Kaukas",
  altNames: { en: "Kaukai", lt: "Kaukas", lv: "Kaukas" },
  domain: "Creature",
  epithet: {
    en: "Household Earth Dwarf and Wealth-Bringing Wight",
    lt: "Namų žemės nykštukas ir turtus nešanti dvasia",
    lv: "Mājas zemes rūķis un bagātības gars",
  },
  summary: {
    en: "Kaukas (plural: Kaukai) is the subterranean household dwarf and bringer of grain and luck in Baltic folklore. First recorded by Martynas Mažvydas in 1547 and Jan Łasicki in 1582, Kaukai dwell under stove thresholds and granary floors, rewarding respectful farmers with abundant crops.",
    lt: "Kaukas (daugiskaita: Kaukai) yra požeminis namų nykštukas ir javų bei sėkmės nešėjas baltų tautosakoje. Pirmą kartą paminėtas Martyno Mažvydo 1547 m. ir Jono Lasickio 1582 m.",
    lv: "Kaukas ir pazemes mājas rūķis un labības nesējs baltu folklorā. Pirmo reizi fiksēts 1547. gada Mažvīda katekismā un 1582. gada Lasicka darbiņā.",
  },
  heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(118, 148, 110, 0.24)",
  accent: "#9bb07a",
  keywords: ["Kaukas", "household spirit", "gnome", "Mažvydas 1547", "granary"],
  symbols: [
    { label: "Sacred symbols", detail: "Linen shirt, Milk bowl, Grain sheaf, Hearth threshold" }
  ],
  locations: [
    {
      id: "samogitia-kaukas-threshold",
      name: "Samogitian Farmstead Threshold Shrine",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "The threshold of a traditional Samogitian farmstead barn where farmers offered milk and linen shirts to Kaukai.",
      siteType: "Household ritual sites",
      aura: "moss",
      deity: "kaukas",
      significance: "Site of 16th-century household offerings to Kaukai documented by Martynas Mažvydas.",
    }
  ],
  gallery: [],
  materialLegacy: ["Tiny woven linen shirts", "Clay milk bowls"],
  regionDetails: { en: "Lithuania (Samogitia, Aukštaitija), Old Prussia", lt: "Lietuva (Žemaitija, Aukštaitija), Senovės Prūsija", lv: "Lietuva (Žemaitija, Augštaitija), Senprūsija" },
  tribe: { en: "Lithuanians, Samogitians, Old Prussians", lt: "Lietuviai, žemaičiai, prūsai", lv: "Lietuvieši, žemaiši, prūši" },
  period: { en: "16th Century Historical Records (Mažvydas 1547, Łasicki 1582)", lt: "XVI a. istoriniai šaltiniai (Mažvydas 1547 m., Lasickis 1582 m.)", lv: "16. gs. vēsturiskie avoti (Mažvīds 1547, Lasickis 1582)" },
  references: [
    "Martynas Mažvydas: Catechismusa Prasty Szadei (1547)",
    "Jan Łasicki: De Diis Samagitarum (1582; publ. 1615)",
    "Norbertas Vėlius: Mitinės būtybės: kaukai, aitvarai (Vilnius, 1977)",
    "Visuotinė lietuvių enciklopedija: Kaukai (https://www.vle.lt/straipsnis/kaukai/)"
  ],
};




