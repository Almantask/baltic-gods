import type { DeityMeta } from "@/types/content";

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
      title: { en: "Wind-bent hilltop pine", lt: "Vėjo palenktoji kalvagūbrio pušis", lv: "Vēja locīta pakalna priede" },
      medium: { en: "natural", lt: "gamtinis", lv: "dabisks" },
      note: { en: "Pines on Samogitian ridges bent by prevailing westerlies, treated as Vėjopatis shrines.", lt: "Žemaitijos keteros pušys, palenktos vyraujančių vakarų vėjų, laikytos Vėjopačio šventovėmis.", lv: "Žemaitijas kalnu priedes, kas locītas valdošo rietumu vēju ietekmē, uzskatītas par Vėjopatis svētnīcām." },
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
      title: { en: "Linen distaff bundle", lt: "Lino verpstės ryšulys", lv: "Linu vārpstas pušķis" },
      medium: { en: "prepared flax", lt: "paruoštas linas", lv: "sagatavots lins" },
      note: { en: "Placed at field altars in Samogitia at flax-sowing time.", lt: "Dedamas ant lauko aukurų Žemaitijoje lino sėjos metu.", lv: "Novietots lauku altāros Žemaitijā linu sēšanas laikā." },
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
      title: { en: "Clay brewing vessel", lt: "Molinis alaus indas", lv: "Māla alus trauks" },
      medium: { en: "fired clay", lt: "degtas molis", lv: "apdedzināts māls" },
      note: { en: "Ringed with ochre bands; used in communal harvest ceremonies.", lt: "Apjuostas ochra juostomis; naudojamas bendruomeninėse derliaus ceremonijose.", lv: "Apjozts ar okras joslām; izmantots kopienas ražas ceremonijās." },
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
      title: { en: "Carved gate post", lt: "Drožinėtas vartų stulpas", lv: "Griezts vārtu stabs" },
      medium: { en: "oak", lt: "ąžuolas", lv: "ozols" },
      note: { en: "Gate posts carved with protective sun-wheels and snake motifs.", lt: "Vartų stulpai drožinėti apsauginiais saulės ratais ir žalčio motyvais.", lv: "Vārtu stabi grezbīti ar aizsargājošiem saules ratiem un čūskas motīviem." },
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
      title: { en: "Oak-leaf wreath", lt: "Ąžuolo lapų vainikas", lv: "Ozola lapu vainags" },
      medium: { en: "oak leaves, grass", lt: "ąžuolo lapai, žolė", lv: "ozola lapas, zāle" },
      note: { en: "Woven by women before the festival and worn throughout the night.", lt: "Moterų pintas prieš šventę ir dėvimas visą naktį.", lv: "Austas sievietēm pirms svētkiem un nests cauru nakti." },
    },
    {
      title: { en: "Midsummer bonfire", lt: "Joninių laužas", lv: "Vasaras saulgriežu ugunskurs" },
      medium: { en: "oak wood", lt: "ąžuolo medis", lv: "ozola malka" },
      note: { en: "Lit on hilltops so neighboring homesteads can see the glow.", lt: "Uždegamas ant kalvų, kad kaimyniniai ūkiai galėtų matyti liepsną.", lv: "Aizdedzināts uz pakalniem, lai kaimiņu mājas varētu redzēt mirdzumu." },
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
      title: { en: "Old-growth linden shrine", lt: "Senos liepos šventovė", lv: "Sena liepa svētnīca" },
      medium: { en: "natural", lt: "gamtinis", lv: "dabisks" },
      note: { en: "Hollowed linden trees served as her dwelling; offerings left in the cavity.", lt: "Tuščiaviduriės liepos tarnavo jos buveinei; aukos paliktos ertmėje.", lv: "Dobumainas liepas kalpoja kā viņas mājoklis; upuri atstāti dobumā." },
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
      title: { en: "Ancestral offering bowl", lt: "Protėvių aukojimo dubenėlis", lv: "Senču upura bļoda" },
      medium: { en: "birch bark", lt: "beržo žievė", lv: "bērza miza" },
      note: { en: "Left at gravesides during Veļu laiks with food for the returning dead.", lt: "Paliekama kapų pusėje Veļu laiks metu su maistu sugrįžtantiesiems mirusiesiems.", lv: "Atstāta kapa pusē Veļu laiku laikā ar pārtiku atgriežošajiem mirušajiem." },
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
      title: { en: "Healing herb bundle", lt: "Gydomojo žolynų ryšulys", lv: "Dziedinošo augu pušķis" },
      medium: { en: "dried herbs", lt: "džiovintos žolės", lv: "žāvētas zāles" },
      note: { en: "Bundles of medicinal plants offered at Auschauts's shrine before illness treatment.", lt: "Vaistinių augalų ryšuliai, paaukoti prie Aušcauto šventovės prieš ligų gydymą.", lv: "Ārstniecības augu pušķi, upurēti pie Auschauts svētnīcas pirms slimību ārstēšanas." },
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
      title: { en: "Last-sheaf idol", lt: "Paskutinio pėdo stabas", lv: "Pēdējā kūļa elks" },
      medium: { en: "bound rye stalks", lt: "surišti rugių stiebeliai", lv: "sasieti rudzu stublāji" },
      note: { en: "Effigy made from the last sheaf of harvest, identified with Curche.", lt: "Atvaizdas, pagamintas iš paskutinio derliaus pėdo, tapatinamas su Kurčiu.", lv: "Efigija izgatavota no pēdējā ražas kūļa, identificēta ar Curche." },
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
      title: { en: "Comet-streak carving", lt: "Kometos brūkšnio drožinys", lv: "Komētas svītra grebums" },
      medium: { en: "carved wood", lt: "drožinėtas medis", lv: "griests koks" },
      note: { en: "Rooftop carving representing the Aitvaras's nightly flight.", lt: "Stogo drožinys, vaizduojantis Aitvaro naktinius skrydžius.", lv: "Jumta grebums, kas attēlo Aitvara naktiskos lidojumus." },
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
      title: { en: "Linen spindle found in forest", lt: "Miške rastas lino verpstė", lv: "Mežā atrastā linu vārpsta" },
      medium: { en: "carved bone", lt: "drožinėtas kaulas", lv: "griezts kauls" },
      note: { en: "Laumės were said to leave their spindles behind when disturbed at their nighttime work.", lt: "Sakyta, kad laumės palieka savo verpstis, kai jas trikdo naktiniai darbai.", lv: "Tika uzskatīts, ka Laumės atstāj savas vārpstas, kad tās traucē nakts darbā." },
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
      title: { en: "Hearth snake shelter", lt: "Židinio žalčio prieglobstis", lv: "Pavarda čūskas patversme" },
      medium: { en: "smooth river stones", lt: "lygūs upės akmenys", lv: "gludi upes akmeņi" },
      note: { en: "Stones arranged at the base of the hearth to provide shelter for the sacred snake.", lt: "Akmenys sudėti prie židinio pamato suteikti prieglobstį šventajai gyvatei.", lv: "Akmeņi sakārtoti pie pavarda pamata, lai nodrošinātu pajumti svētajai čūskai." },
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
      title: { en: "Amber bead from Nida dunes", lt: "Gintaro karoliukas iš Nidos kopų", lv: "Dzintara pērlīte no Nidas kāpām" },
      medium: { en: "Baltic amber", lt: "Baltijos gintaras", lv: "Baltijas dzintars" },
      note: { en: "Amber beads found at her feet according to legend.", lt: "Gintaro karoliai, rasti prie jos kojų pagal legendą.", lv: "Dzintara pērlītes atrasts pie viņas kājām saskaņā ar leģendu." },
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
      title: { en: "Funerary pyre reconstruction", lt: "Laidotuvių laužo rekonstrukcija", lv: "Bēru sārta rekonstrukcija" },
      medium: { en: "oak and pine", lt: "ąžuolas ir pušis", lv: "ozols un priede" },
      note: { en: "The pre-Christian Lithuanian funeral rite introduced according to legend by Sovijus.", lt: "Ikrikščioniška lietuvių laidotuvių apeiga, pagal legendą pristatyta Sovijaus.", lv: "Pirms-kristīgais lietuviešu bēru rituāls, ko pēc leģendas ieviesa Sovijus." },
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
  name: "Praamžius",
  altNames: { en: "Praamžius", lt: "Praamžius", lv: "Praamžius" },
  domain: "God",
  epithet: {
    en: "God of Eternity and First Cause",
    lt: "Amžinybės ir pirmosios priežasties dievas",
    lv: "Mūžības un pirmcēloņa dievs",
  },
  summary: {
    en: "Praamžius is the epithet of the supreme Lithuanian deity representing time, eternity, and the primordial first cause. He is the distant cosmic orderer who set the world in motion.",
    lt: "Praamžius yra aukščiausiojo lietuvių dievybės epitetas, reiškiantis laiką, amžinybę ir pirmąją priežastį. Jis yra tolimas kosminio dėsnio kūrėjas.",
    lv: "Praamžius ir augstākā lietuviešu dievības epitets, kas simbolizē laiku, mūžību un pirmatnējo cēloni. Viņš ir kosmiskās kārtības noteicējs.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Eternity", "Time", "First Cause", "Creation", "Cosmic Order"],
  symbols: [
    { label: "Sacred symbols", detail: "Sky vault, Endless circle, Oak, Rainbow, Scepter" },
  ],
  locations: [
    {
      id: "aukstaitija-eternity-hill",
      name: "Eternity Hill of Aukštaitija",
      coordinates: [55.7, 25.8],
      region: "Lithuania",
      description: "A high open ridge in the Aukštaitija highlands where the sky touches the earth, regarded as a place outside ordinary time.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "praamzius",
      significance: "Offerings of grain and fire were made at dawn to honour the cosmic orderer who set the world in motion before memory began.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Žvorūna",
  altNames: { en: "Žvorūna", lt: "Žvorūna", lv: "Žvorūna" },
  domain: "God",
  epithet: {
    en: "Goddess of Wild Beasts and the Hunt",
    lt: "Laukinių žvėrių ir medžioklės deivė",
    lv: "Meža zvēru un medību dieviete",
  },
  summary: {
    en: "Žvorūna is the fierce Lithuanian and Samogitian goddess of wild animals and the hunt. Often identified with Medeina, her name emphasizes sovereignty over wild beasts (žvėris).",
    lt: "Žvorūna yra lietuvių ir žemaičių laukinių žvėrių bei medžioklės deivė. Dažnai tapatinama su Medeina, jos vardas pabrėžia valdžią laukiniams žvėrims.",
    lv: "Žvorūna ir lietuviešu un žemaitiešu meža zvēru un medību dieviete. Bieži identificēta ar Medeinu, viņas vārds uzsver varu pār mežonīgajiem zvēriem.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Hunt", "Wild Animals", "Forest", "Protection", "Balance"],
  symbols: [
    { label: "Sacred symbols", detail: "Wolf, Bow and arrow, Animal tooth, Forest glade" },
  ],
  locations: [
    {
      id: "samogitia-hunting-grove",
      name: "Samogitian Hunting Grove",
      coordinates: [55.9, 22.3],
      region: "Lithuania",
      description: "A dense oak and pine forest in Samogitia where hunters gathered before the chase to seek blessing from the goddess of wild beasts.",
      siteType: "Sacred groves",
      aura: "moss",
      deity: "zvoruna",
      significance: "Animal bones and arrowheads were buried at the forest edge as offerings; no beast was to be killed here without ritual permission.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Žemėpatis",
  altNames: { en: "Žemėpatis", lt: "Žemėpatis", lv: "Žemėpatis" },
  domain: "God",
  epithet: {
    en: "Lord of the Homestead and Cultivated Earth",
    lt: "Sodybos ir dirbamos žemės šeimininkas",
    lv: "Sētas un kultivētās zemes kungs",
  },
  summary: {
    en: "Žemėpatis is the divine master of the farmstead and the cultivated earth. As the masculine counterpart to Žemyna, he guards the household's fields, granaries, and the sacred Žaltys snake.",
    lt: "Žemėpatis yra sodybos ir dirbamos žemės dieviškas šeimininkas. Kaip Žemynos vyriškas atitikmuo, jis saugo namų laukus, daržines ir šventąjį žaltį.",
    lv: "Žemėpatis ir sētas un kultivētās zemes dievišķais kungs. Kā vīrišķais Žemynas ekvivalents, viņš sargā mājsaimniecības laukus, klētis un svēto žalti.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Farmstead", "Agricultural land", "Boundaries", "Domestic prosperity", "Snake cult"],
  symbols: [
    { label: "Sacred symbols", detail: "Soil, Farmstead boundary, Žaltys (sacred snake), Bread, Ale" },
  ],
  locations: [
    {
      id: "kaunas-farmstead-threshold",
      name: "Kaunas Farmstead Threshold",
      coordinates: [54.9, 23.9],
      region: "Lithuania",
      description: "A traditional Lithuanian farmstead near Kaunas where the household boundary stone and sacred snake shelter were maintained as holy ground.",
      siteType: "Household ritual sites",
      aura: "green",
      deity: "zemepatis",
      significance: "Bread and ale were poured at the threshold and boundary stones each spring to invoke the Lord of the homestead's protection over fields and livestock.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Gabjauja",
  altNames: { en: "Gabjauja", lt: "Gabjauja", lv: "Gabjauja" },
  domain: "God",
  epithet: {
    en: "Goddess of the Grain Barn and Harvest",
    lt: "Jaujos ir derliaus deivė",
    lv: "Labības šķūņa un ražas dieviete",
  },
  summary: {
    en: "Gabjauja is the Samogitian goddess of the threshing barn (jauja) and harvest. She protects stored grain from fire, rot, and theft, ensuring winter survival for the community.",
    lt: "Gabjauja yra žemaitiška jaujos ir derliaus deivė. Ji saugo supiltus javus nuo gaisro, puvimo ir vagysčių, užtikrindama bendruomenės išgyvenimą žiemą.",
    lv: "Gabjauja ir žemaitiešu labības šķūņa (jaujas) un ražas dieviete. Viņa aizsargā sakrāto labību no ugunsgrēkiem, nodrošinot kopienas izdzīvošanu ziemā.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Harvest", "Grain barn", "Fire", "Agricultural safety", "Threshing"],
  symbols: [
    { label: "Sacred symbols", detail: "Grain ear, Threshing barn, Sickle, Rooster, Bread" },
  ],
  locations: [
    {
      id: "zemaitija-threshing-barn",
      name: "Žemaitija Threshing Barn Site",
      coordinates: [55.8, 22.1],
      region: "Lithuania",
      description: "A traditional Samogitian farmstead barn site where grain was dried and threshed under the protection of Gabjauja's fire.",
      siteType: "Field altars",
      aura: "amber",
      deity: "gabjauja",
      significance: "A small fire was kept burning in the barn's drying chamber; bread loaves and the first sheaf of the harvest were offered to Gabjauja before threshing began.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Pilvytis",
  altNames: { en: "Pilvytis", lt: "Pilvytis", lv: "Pilvytis" },
  domain: "God",
  epithet: {
    en: "God of Wealth and Full Granaries",
    lt: "Turtų ir pilnų aruodų dievas",
    lv: "Bagātības un pilnu klētu dievs",
  },
  summary: {
    en: "Pilvytis is the Lithuanian god of wealth, material abundance, and full granaries. His name derives from pilvas (belly/fullness), symbolizing prosperity and satiety.",
    lt: "Pilvytis yra lietuvių turtų, materialinės gausos ir pilnų aruodų dievas. Jo vardas kildinamas iš žodžio „pilvas\", simbolizuojančio pilnatvę ir sotumą.",
    lv: "Pilvytis ir lietuviešu bagātības, materiālās pārpilnības un pilnu klēšu dievs. Viņa vārds cēlies no vārda „pilvas\" (vēders/pilnums), simbolizējot pārticību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Wealth", "Abundance", "Granaries", "Prosperity", "Material security"],
  symbols: [
    { label: "Sacred symbols", detail: "Granary (klėtis), Grain sack, Coin, Horn of plenty, Sieve" },
  ],
  locations: [
    {
      id: "lithuania-granary-fields",
      name: "Lithuanian Granary Fields",
      coordinates: [55.3, 23.7],
      region: "Lithuania",
      description: "Fertile lowland fields of central Lithuania where communal granaries (klėtis) stood at the centre of each village's ritual life.",
      siteType: "Field altars",
      aura: "amber",
      deity: "pilvytis",
      significance: "First portions of every harvest were set aside and ritually offered to Pilvytis to ensure the granary remained full through the winter months.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Biržulis",
  altNames: { en: "Biržulis", lt: "Biržulis", lv: "Biržulis" },
  domain: "God",
  epithet: {
    en: "Spirit of the Birch Forest",
    lt: "Beržynų dvasia",
    lv: "Bērzu meža gars",
  },
  summary: {
    en: "Biržulis is the Lithuanian guardian spirit of birch forests and birch sap. Recorded by Łasicki as silvae betulinae deus, he is associated with spring renewal and sap-flow.",
    lt: "Biržulis yra lietuvių beržynų ir beržų sulos globėjas. Lasickio pavadintas silvae betulinae deus, jis siejamas su pavasariniu atgimimu.",
    lv: "Biržulis ir lietuviešu bērzu mežu un bērzu sulas aizbildnis. Łasicki to nosauca par silvae betulinae deus, tas saistāms ar pavasara atdzimšanu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Birch forest", "Spring sap", "Renewal", "White birch", "Spring"],
  symbols: [
    { label: "Sacred symbols", detail: "Birch leaf, Birch sap, White bark, Spring catkin" },
  ],
  locations: [
    {
      id: "aukstaitija-birch-grove",
      name: "Aukštaitija Sacred Birch Grove",
      coordinates: [55.6, 25.5],
      region: "Lithuania",
      description: "A stand of ancient white birches in the Aukštaitija lake district, regarded as the dwelling place of Biržulis at the first sap-rise of spring.",
      siteType: "Sacred groves",
      aura: "green",
      deity: "birzulis",
      significance: "In early spring, small clay cups of fresh birch sap were left at the grove's oldest tree as offerings to honour the spirit of forest renewal.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Kirnis",
  altNames: { en: "Kirnis", lt: "Kirnis", lv: "Kirnis" },
  domain: "God",
  epithet: {
    en: "Guardian of Cherry Trees and Orchards",
    lt: "Vyšnių ir sodų globėjas",
    lv: "Ķiršu koku un dārzu aizbildnis",
  },
  summary: {
    en: "Kirnis is the Lithuanian orchard spirit who watches over cherry trees and their fruit. Recorded by Łasicki as deus cerasorum, he ensures sweet harvests and protects trees from pests.",
    lt: "Kirnis yra lietuvių sodų dvasia, sauganti vyšnias ir jų vaisius. Lasickio pavadintas deus cerasorum, jis užtikrina saldų derlių ir saugo medžius.",
    lv: "Kirnis ir lietuviešu dārzu gars, kas sargā ķiršu kokus un to augļus. Łasicki to nosauca par deus cerasorum — viņš nodrošina saldu ražu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Cherry trees", "Orchards", "Harvest", "Fruit", "Spring blossom"],
  symbols: [
    { label: "Sacred symbols", detail: "Cherry blossom, Red fruit, Cherry wood, Basket" },
  ],
  locations: [
    {
      id: "samogitia-cherry-orchard",
      name: "Samogitian Cherry Orchard",
      coordinates: [55.85, 22.6],
      region: "Lithuania",
      description: "A traditional cherry orchard on a gentle Samogitian hillside, tended for generations and regarded as sacred to the orchard spirit Kirnis.",
      siteType: "Sacred groves",
      aura: "green",
      deity: "kirnis",
      significance: "Blossom-time offerings of milk and bread were placed beneath the oldest cherry tree; no fruit was eaten before the first ritual taste was dedicated to Kirnis.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Dieva dēli",
  altNames: { en: "Dieva dēli", lt: "Dievo sūnūs", lv: "Dieva dēli" },
  domain: "God",
  epithet: {
    en: "Divine Twins, Sons of Dievs",
    lt: "Dieviškieji dvyniai, Dievo sūnūs",
    lv: "Dieva dēli — debesu jātnieki",
  },
  summary: {
    en: "Dieva dēli are the divine twin sons of the sky god Dievs in Latvian mythology. They are celestial horse-riders who court the Saules meitas and protect horses and travelers.",
    lt: "Dieva dēli yra dieviškieji dvyniai, dangiškojo dievo Dievo sūnūs latvių mitologijoje. Jie yra dangiškieji raiteliai, kurie veda Saulės dukteris ir saugo arklius.",
    lv: "Dieva dēli ir debesu jātnieki, Dieva dēli latviešu mitoloģijā. Viņi ir debesu jahnieki, kas precas ar Saules meitām un sargā zirgus un ceļiniekus.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Divine twins", "Horses", "Celestial riders", "Agriculture", "Protection"],
  symbols: [
    { label: "Sacred symbols", detail: "Two horses, Twin stars, Golden stirrups, Gray horse" },
  ],
  locations: [
    {
      id: "vidzeme-twin-hilltop",
      name: "Vidzeme Twin Hilltop",
      coordinates: [57.1, 26.0],
      region: "Latvia",
      description: "A pair of adjacent hilltops in the Vidzeme highlands associated with the divine twins, where Midsummer horse races were held in their honour.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "dieva-deli",
      significance: "At summer solstice, young men raced horses between the twin hills to re-enact the celestial ride of the Dieva dēli courting the Daughters of the Sun.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Saules meitas",
  altNames: { en: "Saules meitas", lt: "Saulės dukterys", lv: "Saules meitas" },
  domain: "God",
  epithet: {
    en: "Daughters of the Sun, Celestial Maidens",
    lt: "Saulės dukterys, dangiškosios mergelės",
    lv: "Saules meitas — debesu jaunavas",
  },
  summary: {
    en: "Saules meitas are the golden-haired celestial daughters of the Sun in Latvian mythology. They weave sunlight and are the brides pursued by the Dieva dēli in the celestial wedding cycle.",
    lt: "Saules meitas yra aukso plaukų dangiškosios Saulės dukterys latvių mitologijoje. Jos audžia saulės spinduliais ir yra Dievo sūnų vešimosi objektas.",
    lv: "Saules meitas ir zeltainas debesu jaunavas latviešu mitoloģijā. Viņas auž saules starus un ir Dieva dēlu precamās jaunavas debesu kāzu ciklā.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sunlight", "Weaving", "Celestial maidens", "Dawn/dusk", "Dowry"],
  symbols: [
    { label: "Sacred symbols", detail: "Golden ring, Golden scarf, Sunray weaving, Loom, Morning dew" },
  ],
  locations: [
    {
      id: "latvia-amber-shore-sun",
      name: "Amber Shore of the Sun Daughters",
      coordinates: [56.5, 21.0],
      region: "Latvia",
      description: "The amber-strewn Liepāja coastline where Saules meitas were believed to descend at dawn, trailing golden light across the Baltic waves.",
      siteType: "Seasonal festival locations",
      aura: "amber",
      deity: "saules-meitas",
      significance: "At the summer solstice, young women waded into the shallows at dawn and cast wreaths of flowers onto the waves as gifts to the daughters of the Sun.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Jūras māte",
  altNames: { en: "Jūras māte", lt: "Jūros motina", lv: "Jūras māte" },
  domain: "God",
  epithet: {
    en: "Mother of the Sea",
    lt: "Jūros motina",
    lv: "Jūras māte",
  },
  summary: {
    en: "Jūras māte is the sovereign of the Baltic Sea in Latvian mythology. She commands waves and sea-wealth from her amber palace on the sea floor, blessing fishermen who honor her.",
    lt: "Jūras māte yra Baltijos jūros valdovė latvių mitologijoje. Ji valdo bangas ir jūros turtus iš savo gintarų rūmų jūros dugne, laimindama žvejus.",
    lv: "Jūras māte ir Baltijas jūras valdniece latviešu mitoloģijā. Viņa valda viļņus un jūras bagātības no savas dzintara pils jūras dibenā.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sea", "Waves", "Fish", "Amber", "Sailors", "Fishermen"],
  symbols: [
    { label: "Sacred symbols", detail: "Sea-foam, Amber, Fishing net, Wave-crest" },
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
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Ūdens māte",
  altNames: { en: "Ūdens māte", lt: "Vandens motina", lv: "Ūdens māte" },
  domain: "God",
  epithet: {
    en: "Mother of Fresh Water",
    lt: "Gėlo vandens motina",
    lv: "Ūdens māte",
  },
  summary: {
    en: "Ūdens māte is the Latvian spirit of fresh water — lakes, springs, and wells. Women brought offerings to riverbanks to ensure pure water and invoke her blessing for life transitions.",
    lt: "Ūdens māte yra latvių gėlo vandens — ežerų, šaltinių ir šulinių — dvasia. Moterys nešdavo dovanas upių pakrantėms, prašydamos švaraus vandens.",
    lv: "Ūdens māte ir latviešu saldūdens — ezeru, avotu un aku — gars. Sievietes nesa ziedojumus upju krastos, lūdzot tīru ūdeni un svētību.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Fresh water", "Lakes", "Springs", "Wells", "Purity", "Life transitions"],
  symbols: [
    { label: "Sacred symbols", detail: "Spring-well, Riverbend, Silver water-drops, Beads, Woven ribbons" },
  ],
  locations: [
    {
      id: "gauja-river-spring",
      name: "Gauja River Sacred Spring",
      coordinates: [57.1, 25.3],
      region: "Latvia",
      description: "A natural spring feeding into the Gauja River in the Vidzeme region, long regarded as a dwelling place of the water mother Ūdens māte.",
      siteType: "Springs, rivers, lakes with cult significance",
      aura: "moss",
      deity: "udens-mate",
      significance: "Women offered beads, ribbons, and small loaves at this spring during rites of passage — before marriage, after childbirth — to receive the water mother's blessing.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Vēja māte",
  altNames: { en: "Vēja māte", lt: "Vėjo motina", lv: "Vēja māte" },
  domain: "God",
  epithet: {
    en: "Mother of the Wind",
    lt: "Vėjo motina",
    lv: "Vēja māte",
  },
  summary: {
    en: "Vēja māte is the Latvian mistress of wind and air. She regulates the four cardinal winds, powers sailboats, and winnows grain for farmers — vital but destructive if angered.",
    lt: "Vēja māte yra latvių vėjo ir oro šeimininkė. Ji reguliuoja keturis vėjus, pučia burius ir kelia grūdus žemdirbiams — gyvybiškai svarbi, bet pavojinga supykusi.",
    lv: "Vēja māte ir latviešu vēja un gaisa valdniece. Viņa regulē četrus vēju virzienos, dzen buras un palīdz zemniekiem sijāt labību — vitāli svarīga, bet bīstama uzdusmota.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Wind", "Air", "Four cardinal winds", "Sailing", "Winnowing"],
  symbols: [
    { label: "Sacred symbols", detail: "Wind-vane, Tree-tops in motion, Cloud-streaks, Sail" },
  ],
  locations: [
    {
      id: "latvia-windy-hilltop",
      name: "Open Hilltop of the Wind Mother",
      coordinates: [56.9, 24.7],
      region: "Latvia",
      description: "A broad exposed hilltop in central Latvia where strong prevailing winds sweep unobstructed across the plain, consecrated to Vēja māte.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "veja-mate",
      significance: "Farmers climbed this hill to scatter grain into the wind before winnowing season, asking the wind mother to separate chaff cleanly and fill their barns.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Okopirmus",
  altNames: { en: "Okopirmus", lt: "Okopirmas", lv: "Okopirms" },
  domain: "God",
  epithet: {
    en: "The Very First — Supreme Sky God of the Old Prussians",
    lt: "Pats Pirmasis — prūsų aukščiausias dangaus dievas",
    lv: "Pats Pirmais — prūšu augstākais debesu dievs",
  },
  summary: {
    en: "Okopirmus ('The Very First') is the supreme sky deity of the Old Prussians. He sits above the Romuva triad as the primordial creator and cosmic orderer, equivalent to the Baltic sky-father Dievas.",
    lt: "Okopirmas ('Pats Pirmasis') yra aukščiausias prūsų dangaus dievas. Jis sėdi virš Romuvos trejybės kaip pirminis kūrėjas ir kosminio dėsnio tvarkytojas.",
    lv: "Okopirms ('Pats Pirmais') ir augstākais prūšu debesu dievs. Viņš atrodas virs Romuvas triādes kā pirmatnējais radītājs un kosmiskās kārtības uzturētājs.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Sky", "Creation", "First cause", "Cosmic order", "Primordial"],
  symbols: [
    { label: "Sacred symbols", detail: "Sky vault, Sun-wheel, White falcon, White horse" },
  ],
  locations: [
    {
      id: "sambia-sacred-fire-site",
      name: "Sambian Sacred Fire Mound",
      coordinates: [54.9, 20.5],
      region: "Old Prussia",
      description: "A mound in the Sambia peninsula where the eternal fire of Okopirmus was kept burning by Prussian priests as a symbol of the first creative power.",
      siteType: "Ritual fire sites",
      aura: "amber",
      deity: "okopirmus",
      significance: "The undying flame represented the primordial creative act of the supreme god; it was never allowed to go out, and fresh wood was offered at each dawn and dusk.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Swayxtix",
  altNames: { en: "Swayxtix", lt: "Svaikstikas", lv: "Svaikstiks" },
  domain: "God",
  epithet: {
    en: "God of Celestial Light and the Shining Sun",
    lt: "Dangaus šviesos ir švytinčios saulės dievas",
    lv: "Debesu gaismas un spīdošās saules dievs",
  },
  summary: {
    en: "Swayxtix is the Prussian deity of celestial light and the life-giving radiance of the sun. His name derives from Old Prussian swāigstan (light/shining); he blesses crops and promotes growth.",
    lt: "Svaikstikas yra prūsų dangaus šviesos ir gyvybę teikiančio saulės spindesio dievas. Jo vardas kildinamas iš senprūsių žodžio swāigstan (šviesa/blizgesys).",
    lv: "Svaikstiks ir prūšu debesu gaismas un dzīvību dodošā saules mirdzuma dievs. Viņa vārds cēlies no senprūšu vārda swāigstan (gaisma/spīdums).",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Celestial light", "Sun", "Growth", "Clarity", "Blessing crops"],
  symbols: [
    { label: "Sacred symbols", detail: "Sun-disc, Glowing flame, Star-burst, Golden spear" },
  ],
  locations: [
    {
      id: "old-prussia-star-hill",
      name: "Star-Observation Hill of Old Prussia",
      coordinates: [54.5, 19.8],
      region: "Old Prussia",
      description: "A prominent ridge near Königsberg used by Prussian vaidilutai to observe celestial phenomena and track the movements of stars sacred to Swayxtix.",
      siteType: "Sacred hilltops",
      aura: "sky",
      deity: "swayxtix",
      significance: "Priests lit torches at this hilltop at key solar moments to reflect the god's celestial light down to the earth and invoke his blessing for the ripening of crops.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Bardoaits",
  altNames: { en: "Bardoaits", lt: "Bardaitis", lv: "Bardoaits" },
  domain: "God",
  epithet: {
    en: "God of Ships, Sailors, and Harbors",
    lt: "Laivų, jūreivių ir uostų dievas",
    lv: "Kuģu, jūrnieku un ostu dievs",
  },
  summary: {
    en: "Bardoaits is the Old Prussian god of ships and seafarers. Recorded in the Sudovian Book, he protects sailors on the Baltic Sea and ensures safe harbors for the Sambian fishing communities.",
    lt: "Bardaitis yra senprūsių laivų ir jūreivių dievas. Minimas Sūduvių knygelėje, jis saugo jūreivius Baltijoje ir užtikrina saugius uostus sembų žvejų bendruomenėms.",
    lv: "Bardoaits ir senprūšu kuģu un jūrnieku dievs. Minēts Sūduviešu grāmatā, viņš sargā jūrniekus Baltijas jūrā un nodrošina drošas ostas Sembijas zvejnieku kopienām.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Ships", "Sailors", "Harbor", "Fishing", "Sea safety", "Calm voyage"],
  symbols: [
    { label: "Sacred symbols", detail: "Ship's prow, Anchor-stone, Fishing net, Calm horizon" },
  ],
  locations: [
    {
      id: "sambia-coastal-harbor",
      name: "Sambian Coastal Harbor Site",
      coordinates: [54.6, 19.9],
      region: "Old Prussia",
      description: "A sheltered natural harbour on the Sambia peninsula coast where Prussian fishermen beached their boats and kept a small stone altar to Bardoaits.",
      siteType: "Sacrifice / offering sites",
      aura: "mist",
      deity: "bardoaits",
      significance: "Before each sea voyage, sailors left carved wooden offerings shaped like ships at this harbour altar, beseeching Bardoaits to guard them on the open Baltic waters.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
  name: "Kaukai",
  altNames: { en: "Kaukai", lt: "Kaukai", lv: "Kauki" },
  domain: "Creature",
  epithet: {
    en: "Benevolent Wealth Dwarves of the Underground",
    lt: "Geranoriški požemio turto nykštukai",
    lv: "Labsirdīgie zemes rūķi",
  },
  summary: {
    en: "Kaukai are small, industrious Lithuanian underground spirits that help with farmwork and bring prosperity if offered milk and simple food. They dwell beneath elder trees and stone-altars.",
    lt: "Kaukai yra maži, darbštūs lietuvių požemio dvasios, padedančios ūkio darbuose ir nešančios gerovę, jei vaišinamos pienu. Gyvena po alyvmedžiais ir akmenų altoriais.",
    lv: "Kaukai ir mazi, čakli lietuviešu pazemes garās, kas palīdz lauku darbos un nes pārticību, ja tiek mieloti ar pienu. Dzīvo zem plostiem un akmens altāriem.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Underground", "Farm help", "Prosperity", "Dwarves", "Elder tree"],
  symbols: [
    { label: "Sacred symbols", detail: "Elder tree roots, Bowl of milk, Small beard, Stone altar" },
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
    },
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
  name: "Ragana",
  altNames: { en: "Ragana", lt: "Ragana", lv: "Ragana" },
  domain: "Creature",
  epithet: {
    en: "Lithuanian Witch and Seer",
    lt: "Lietuvių ragana ir regėtoja",
    lv: "Lietuviešu ragana un pareģe",
  },
  summary: {
    en: "Ragana is the most prominent witch-figure in Baltic tradition. Etymologically a 'seer' (regėti), she evolved from a goddess of wisdom into a shape-shifting forest witch feared and sought for healing.",
    lt: "Ragana yra gausiausiais mitų aprašyta ragana baltų tradicijoje. Etimologiškai 'regėtoja', ji evoliucionavo nuo išminties deivės iki formas keičiančios miško raganos.",
    lv: "Ragana ir izslavенākā ragana Baltijas tradīcijā. Etimoloģiski 'pareģe' (regēt), viņa attīstījās no gudrības dievietes par formas mainošu meža raganu.",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  overlay: "rgba(80, 80, 60, 0.27)",
  accent: "#8a8a6a",
  keywords: ["Witch", "Seer", "Shape-shifting", "Herbs", "Forest", "Šatrija Hill"],
  symbols: [
    { label: "Sacred symbols", detail: "Broom, Cauldron, Cat, Šatrija Hill" },
  ],
  locations: [
    {
      id: "satrija-hill-crossroads",
      name: "Šatrija Hill Crossroads",
      coordinates: [55.95, 22.45],
      region: "Lithuania",
      description: "The legendary Šatrija Hill in Samogitia, where the ragana was said to gather with other witches at crossroads beneath the moonlit sky.",
      siteType: "Mythic hills / burial mounds",
      aura: "mist",
      deity: "ragana",
      significance: "The hill's summit crossroads served as a liminal meeting point where the boundary between the human world and the spirit world grew thin enough for the witch to pass through.",
    },
  ],
  gallery: [],
  materialLegacy: [],
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
    { label: "Sacred symbols", detail: "Iron knife, Scissors, Weight on the chest" },
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
    },
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
    { label: "Sacred symbols", detail: "Wolf pelt, Belt of transformation, Iron teeth, Forest path" },
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
    },
  ],
  gallery: [],
  materialLegacy: [],
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
    { label: "Sacred symbols", detail: "Keyhole, Sweating horse, Weight on the chest" },
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
    },
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
    { label: "Sacred symbols", detail: "Spruce tree, Snake-crown, Underwater palace, Her children's names" },
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
    },
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
    { label: "Sacred symbols", detail: "Bear-ears, Giant boulder, Daugava river, Oak-staff" },
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
    },
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
