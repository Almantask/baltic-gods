'use client';

import { createContext, useContext, useMemo, useState } from "react";
import type { Language } from "@/types/content";

type Dictionary = typeof translations.en;

const translations = {
  en: {
    languageLabel: "English",
    nav: { home: "Home", pantheon: "Pantheon", map: "Map", field: "Field Report", stories: "Stories" },
    home: {
      heroTitle: "Baltic Ethos: The Ancient Paths",
      subtitle: "Whispers in amber light, storms over moss, and every ley line between the Baltic pines.",
      seek: "Seek the Unseen",
      featured: "Featured Deities",
      featuredLocations: "Featured Locations",
      atlas: "Sacred Atlas Preview",
      ctaPantheon: "Browse the Pantheon",
      ctaMap: "Open the Map",
      ctaField: "Offer Your Wisdom",
      locationPrompt: "Search by location or coast",
      deityPrompt: "Search by deity name",
      results: "Signals Found",
    },
    pantheon: {
      title: "The Pantheon",
      intro: "An editorial ledger of Baltic divinities and the landscapes that remember them.",
      filters: "Domains",
      quote: "Every oak, dune, and hearth is a margin where gods have written in light.",
      searchPlaceholder: "Search names or symbols",
      all: "All",
      editorialLedger: "Editorial Ledger",
      figuresArchived: "figures",
      domains: "domains",
      archivistNote: "— Field archivist's note",
      domainGod: "God",
      domainCreature: "Creature",
      domainPerson: "Person",
    },
    stories: {
      title: "Stories",
      intro: "Legends and tales from the Baltic mythological tradition.",
      searchPlaceholder: "Search by keyword",
      inputPlaceholder: "Storm, amber, fate...",
      readMore: "Read story",
      beings: "Beings",
      locations: "Locations",
      legendsAndTales: "Legends & Tales",
      relatedLocations: "Related locations",
      storyMapTitle: "Trace the path of this tale",
      storyMapDescription: "Markers highlight where this story touches the land. Select a card or marker to learn more.",
      storyFound: "story found",
      storiesFound: "stories found",
      references: "References",
      backToStories: "Back to stories",
    },
    map: {
      title: "Sacred Map",
      legend: "The Ley Index",
      legendToggle: "Legend",
      showLegend: "Show legend",
      hideLegend: "Hide legend",
      selectMarker: "Select a marker to view details.",
      coordinates: "Coordinate Panel",
      markerAction: "Tap a marker to open the location detail.",
      searchPlaceholder: "Search by location name",
      nearMe: "Near me",
      nearMeLoading: "Locating…",
      nearbyPlaceholder: "Search near a place…",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      fullscreen: "Fullscreen",
      exitFullscreen: "Exit fullscreen",
      categories: {
        "Burial/cremation sites": "Burial/cremation sites",
        "Communal feast sites": "Communal feast sites",
        "Field altars": "Field altars",
        "Household ritual sites": "Household ritual sites",
        "Legendary creation sites": "Legendary creation sites",
        "Sacred groves": "Sacred groves",
        "Sacred hilltops": "Sacred hilltops",
        "Sacred springs": "Sacred springs",
        "Mythic hills / burial mounds": "Mythic hills / burial mounds",
        "Ritual fire sites": "Ritual fire sites",
        "Ritual stones": "Ritual stones",
        "Settlement sites": "Settlement sites",
        "Springs, rivers, lakes with cult significance": "Springs, rivers, lakes with cult significance",
        "\"World tree\" analog sites": "\"World tree\" analog sites",
        "Sacrifice / offering sites": "Sacrifice / offering sites",
        "Hearth cult zones": "Hearth cult zones",
        "Seasonal festival locations": "Seasonal festival locations",
      },
    },
    field: {
      title: "Offer Your Wisdom",
      subtitle: "Submit a field note, a rumor, or coordinates where the old stories still flicker.",
      submit: "Send to the Archive",
      confirmation: "Your report hums through the trees. Archivists will trace the ley line.",
      mapCta: "Click to Mark the Ley Line",
      mapInstruction: "Hold on the map for 2 seconds to place a pin; or type coordinates above.",
    },
    form: {
      location: "Location",
      guardian: "Guardian / Contact",
      deities: "Related Deities",
      description: "Description",
      references: "References",
      siteType: "Site Type",
      coordinates: "Coordinates",
      uploads: "Uploads",
    },
    footer: {
      closing: "Guard the stories. Walk softly.",
    },
    actions: {
      viewDetail: "View detail",
      more: "More",
    },
    search: {
      deities: "Deities",
      locations: "Locations",
      noDeities: "No deities found.",
      noLocations: "No locations found.",
      emptyPrompt: "Start typing to reveal paths and names.",
    },
    deity: {
      lore: "Lore",
      symbolicCards: "Symbolic Cards",
      materialLegacy: "Material Legacy",
      sacredGeography: "Sacred Geography",
      clickMarkers: "Click markers to view nearby lore.",
      relatedLocations: "Related locations",
      gallery: "Gallery",
      arrivedViaMap: "Arrived via map? Highlighted location:",
      none: "none",
      highlighted: "Highlighted",
      references: "References",
    },
    location: {
      overview: "Location detail",
      significance: "Significance",
      region: "Region",
      siteType: "Site type",
      coordinates: "Coordinates",
      aura: "Aura",
      deityLink: "Linked deity",
      openDeity: "Open deity profile",
      backToMap: "Back to map",
      mapPreview: "Map preview",
      lore: "Field notes",
      regions: {
        Lithuania: "Lithuania",
        Latvia: "Latvia",
        "Old Prussia": "Old Prussia",
      },
      auraNames: {
        amber: "Amber",
        moss: "Moss",
        mist: "Mist",
        sky: "Sky",
        green: "Green",
      },
    },
  },
  lt: {
    languageLabel: "Lietuvių",
    nav: { home: "Pradžia", pantheon: "Panteonas", map: "Žemėlapis", field: "Lauko įrašas", stories: "Pasakojimai" },
    home: {
      heroTitle: "Baltų etosas: senieji keliai",
      subtitle: "Gintaro šviesos kuždesiai, samanos audros ir visos linijos tarp Baltijos pušų.",
      seek: "Ieškok nematomo",
      featured: "Pažymėtos dievybės",
      featuredLocations: "Pažymėtos vietos",
      atlas: "Šventasis atlasas",
      ctaPantheon: "Peržiūrėti panteoną",
      ctaMap: "Atverti žemėlapį",
      ctaField: "Pasidalykite žiniomis",
      locationPrompt: "Ieškoti pagal vietą ar pakrantę",
      deityPrompt: "Ieškoti dievybės vardo",
      results: "Rasti ženklai",
    },
    pantheon: {
      title: "Panteonas",
      intro: "Baltų dievybių ir jas menančių peizažų redakcinis sąvadas.",
      filters: "Sritys",
      quote: "Kiekvienas ąžuolas, kopa ir židinys – paraštė, kur dievai rašė šviesa.",
      searchPlaceholder: "Ieškoti vardų ar simbolių",
      all: "Visi",
      editorialLedger: "Redakcinis sąvadas",
      figuresArchived: "figūros",
      domains: "sritys",
      archivistNote: "— Lauko archyvaro pastaba",
      domainGod: "Dievas",
      domainCreature: "Būtybė",
      domainPerson: "Asmuo",
    },
    stories: {
      title: "Pasakojimai",
      intro: "Legendos ir pasakojimai iš baltų mitologinės tradicijos.",
      searchPlaceholder: "Ieškoti pagal raktažodį",
      inputPlaceholder: "Audra, gintaras, likimas...",
      readMore: "Skaityti pasakojimą",
      beings: "Būtybės",
      locations: "Vietos",
      legendsAndTales: "Legendos ir pasakojimai",
      relatedLocations: "Susijusios vietos",
      storyMapTitle: "Sekite pasakojimo kelią",
      storyMapDescription: "Žymekliai rodo, kur ši istorija paliečia žemę. Pasirinkite kortelę ar žymeklį, kad sužinotumėte daugiau.",
      storyFound: "pasakojimas rastas",
      storiesFound: "pasakojimai rasti",
      references: "Šaltiniai",
      backToStories: "Atgal į pasakojimus",
    },
    map: {
      title: "Šventas žemėlapis",
      legend: "Lėjų indeksas",
      legendToggle: "Legenda",
      showLegend: "Rodyti legendą",
      hideLegend: "Slėpti legendą",
      selectMarker: "Pasirinkite žymeklį, kad matytumėte informaciją.",
      coordinates: "Koordinačių skydas",
      markerAction: "Palieskite žymeklį, kad atidarytumėte vietos aprašą.",
      searchPlaceholder: "Ieškoti vietovės pavadinimo",
      nearMe: "Šalia manęs",
      nearMeLoading: "Ieškoma…",
      nearbyPlaceholder: "Ieškoti šalia vietos…",
      zoomIn: "Priartinti",
      zoomOut: "Atitolinti",
      fullscreen: "Visas ekranas",
      exitFullscreen: "Išeiti iš viso ekrano",
      categories: {
        "Burial/cremation sites": "Laidojimo / kremavimo vietos",
        "Communal feast sites": "Bendruomeninių puotų vietos",
        "Field altars": "Lauko aukurai",
        "Household ritual sites": "Namų ritualų vietos",
        "Legendary creation sites": "Legendinės kūrimo vietos",
        "Sacred groves": "Šventieji miškeliai",
        "Sacred hilltops": "Šventi kalnai",
        "Sacred springs": "Šventi šaltiniai",
        "Mythic hills / burial mounds": "Mitiniai kalnai / pilkapiai",
        "Ritual fire sites": "Apeiginės ugnies vietos",
        "Ritual stones": "Ritualiniai akmenys",
        "Settlement sites": "Gyvenviečių vietos",
        "Springs, rivers, lakes with cult significance": "Šaltiniai, upės, ežerai su kulto reikšme",
        "\"World tree\" analog sites": "„Pasaulio medžio“ analogų vietos",
        "Sacrifice / offering sites": "Aukojimo vietos",
        "Hearth cult zones": "Židinio kulto zonos",
        "Seasonal festival locations": "Sezoninių švenčių vietos",
      },
    },
    field: {
      title: "Padovanokite išmintį",
      subtitle: "Pateikite lauko pastabą, gandą ar koordinates, kur dar rusena senos istorijos.",
      submit: "Siųsti į archyvą",
      confirmation: "Jūsų žinutė nuaidėjo tarp medžių. Archyvarai seks lėjos liniją.",
      mapCta: "Paspauskite pažymėti lėjos liniją",
      mapInstruction: "Palaikykite ant žemėlapio 2 sekundes, kad padėtumėte smeigtuką; arba įveskite koordinates viršuje.",
    },
    form: {
      location: "Vieta",
      guardian: "Globėjas / Kontaktas",
      deities: "Susijusios dievybės",
      description: "Aprašas",
      references: "Nuorodos",
      siteType: "Vietos tipas",
      coordinates: "Koordinatės",
      uploads: "Įkėlimai",
    },
    footer: {
      closing: "Saugokite pasakojimus. Eikite tyliai.",
    },
    actions: {
      viewDetail: "Peržiūrėti",
      more: "Daugiau",
    },
    search: {
      deities: "Dievybės",
      locations: "Vietos",
      noDeities: "Dievybių nerasta.",
      noLocations: "Vietų nerasta.",
      emptyPrompt: "Pradėkite rašyti, kad atskleistumėte kelius ir vardus.",
    },
    deity: {
      lore: "Padavimai",
      symbolicCards: "Simbolių kortelės",
      materialLegacy: "Materialusis paveldas",
      sacredGeography: "Šventoji geografija",
      clickMarkers: "Paspauskite žymeklius, kad matytumėte artimą istoriją.",
      relatedLocations: "Susijusios vietos",
      gallery: "Galerija",
      arrivedViaMap: "Atvykote per žemėlapį? Paryškinta vieta:",
      none: "nėra",
      highlighted: "Paryškinta",
      references: "Šaltiniai",
    },
    location: {
      overview: "Vietos aprašas",
      significance: "Svarba",
      region: "Regionas",
      siteType: "Vietos tipas",
      coordinates: "Koordinatės",
      aura: "Aura",
      deityLink: "Susijusi dievybė",
      openDeity: "Atverti dievybės profilį",
      backToMap: "Grįžti į žemėlapį",
      mapPreview: "Žemėlapio peržiūra",
      lore: "Lauko užrašai",
      regions: {
        Lithuania: "Lietuva",
        Latvia: "Latvija",
        "Old Prussia": "Senoji Prūsija",
      },
      auraNames: {
        amber: "Gintaras",
        moss: "Samanos",
        mist: "Rūkas",
        sky: "Dangus",
        green: "Žalia",
      },
    },
  },
  lv: {
    languageLabel: "Latviešu",
    nav: { home: "Sākums", pantheon: "Panteons", map: "Karte", field: "Lauka ziņojums", stories: "Stāsti" },
    home: {
      heroTitle: "Baltu ētoss: senie ceļi",
      subtitle: "Dzintara gaismas čuksti, sūnainas vētras un visas līnijas starp Baltijas priedēm.",
      seek: "Meklē neredzamo",
      featured: "Izcelti dievi",
      featuredLocations: "Izceltas vietas",
      atlas: "Svētā atlasa ieskats",
      ctaPantheon: "Apskatīt panteonu",
      ctaMap: "Atvērt karti",
      ctaField: "Dalies ar gudrību",
      locationPrompt: "Meklēt pēc vietas vai krasta",
      deityPrompt: "Meklēt dievības vārdu",
      results: "Atrastie signāli",
    },
    pantheon: {
      title: "Panteons",
      intro: "Baltu dievību un ainavu redakcionāls saraksts.",
      filters: "Sfēras",
      quote: "Katrs ozols, kāpa un pavards ir mala, kur dievi rakstīja ar gaismu.",
      searchPlaceholder: "Meklēt vārdus vai simbolus",
      all: "Visi",
      editorialLedger: "Redakcionālais saraksts",
      figuresArchived: "figūras",
      domains: "sfēras",
      archivistNote: "— Lauka arhivāra piezīme",
      domainGod: "Dievs",
      domainCreature: "Radība",
      domainPerson: "Persona",
    },
    stories: {
      title: "Stāsti",
      intro: "Leģendas un stāsti no baltu mitoloģiskās tradīcijas.",
      searchPlaceholder: "Meklēt pēc atslēgvārda",
      inputPlaceholder: "Vētra, dzintars, liktenis...",
      readMore: "Lasīt stāstu",
      beings: "Būtnes",
      locations: "Vietas",
      legendsAndTales: "Leģendas un stāsti",
      relatedLocations: "Saistītās vietas",
      storyMapTitle: "Iezīmējiet šī stāsta ceļu",
      storyMapDescription: "Marķieri parāda, kur stāsts skar zemi. Izvēlieties kartīti vai marķieri, lai uzzinātu vairāk.",
      storyFound: "stāsts atrasts",
      storiesFound: "stāsti atrasti",
      references: "Atsauces",
      backToStories: "Atpakaļ uz stāstiem",
    },
    map: {
      title: "Svētā karte",
      legend: "Lēju indekss",
      legendToggle: "Leģenda",
      showLegend: "Rādīt leģendu",
      hideLegend: "Slēpt leģendu",
      selectMarker: "Izvēlieties marķieri, lai skatītu detaļas.",
      coordinates: "Koordinātu panelis",
      markerAction: "Nospiediet marķieri, lai atvērtu vietas aprakstu.",
      searchPlaceholder: "Meklēt pēc vietas nosaukuma",
      nearMe: "Pie manis",
      nearMeLoading: "Meklē…",
      nearbyPlaceholder: "Meklēt pie vietas…",
      zoomIn: "Pietuvināt",
      zoomOut: "Attālināt",
      fullscreen: "Pilnekrāns",
      exitFullscreen: "Iziet no pilnekrāna",
      categories: {
        "Burial/cremation sites": "Apbedīšanas / kremācijas vietas",
        "Communal feast sites": "Kopīgo mielastu vietas",
        "Field altars": "Lauka altāri",
        "Household ritual sites": "Mājas rituālu vietas",
        "Legendary creation sites": "Leģendāras radīšanas vietas",
        "Sacred groves": "Svētie birztaļi",
        "Sacred hilltops": "Svētie pakalni",
        "Sacred springs": "Svētie avoti",
        "Mythic hills / burial mounds": "Mītiski kalni / kapukalniņi",
        "Ritual fire sites": "Rituālās uguns vietas",
        "Ritual stones": "Rituālie akmeņi",
        "Settlement sites": "Apmetņu vietas",
        "Springs, rivers, lakes with cult significance": "Avoti, upes, ezeri ar kulta nozīmi",
        "\"World tree\" analog sites": "\"Pasaules koka\" analogu vietas",
        "Sacrifice / offering sites": "Upurēšanas vietas",
        "Hearth cult zones": "Pavarda kulta zonas",
        "Seasonal festival locations": "Sezonālo svētku vietas",
      },
    },
    field: {
      title: "Sniedziet gudrību",
      subtitle: "Iesniedziet lauka piezīmi, baumas vai koordinātas, kur senie stāsti vēl dzirkstī.",
      submit: "Nosūtīt uz arhīvu",
      confirmation: "Jūsu ziņa trīc kokos. Arhivāri sekos lēju līnijai.",
      mapCta: "Klikšķiniet, lai atzīmētu lēju līniju",
      mapInstruction: "Turiet karti nospiestu 2 sekundes, lai novietotu piespraudi; vai ievadiet koordinātas augstāk.",
    },
    form: {
      location: "Vieta",
      guardian: "Sargs / Kontakts",
      deities: "Saistītās dievības",
      description: "Apraksts",
      references: "Atsauces",
      siteType: "Vietas tips",
      coordinates: "Koordinātes",
      uploads: "Augšupielādes",
    },
    footer: {
      closing: "Sargiet stāstus. Ejiet klusi.",
    },
    actions: {
      viewDetail: "Apskatīt",
      more: "Vairāk",
    },
    search: {
      deities: "Dievības",
      locations: "Vietas",
      noDeities: "Dievības nav atrastas.",
      noLocations: "Vietas nav atrastas.",
      emptyPrompt: "Sāciet rakstīt, lai atklātu ceļus un vārdus.",
    },
    deity: {
      lore: "Folklora",
      symbolicCards: "Simbolu kartiņas",
      materialLegacy: "Materiālais mantojums",
      sacredGeography: "Svētā ģeogrāfija",
      clickMarkers: "Nospiediet marķierus, lai skatītu tuvējo folkloru.",
      relatedLocations: "Saistītās vietas",
      gallery: "Galerija",
      arrivedViaMap: "Ieradāties caur karti? Izceltā vieta:",
      none: "nav",
      highlighted: "Izcelts",
      references: "Atsauces",
    },
    location: {
      overview: "Vietas apraksts",
      significance: "Nozīme",
      region: "Reģions",
      siteType: "Vietas tips",
      coordinates: "Koordinātes",
      aura: "Aura",
      deityLink: "Saistītā dievība",
      openDeity: "Atvērt dievības profilu",
      backToMap: "Atpakaļ uz karti",
      mapPreview: "Kartes priekšskatījums",
      lore: "Lauka piezīmes",
      regions: {
        Lithuania: "Lietuva",
        Latvia: "Latvija",
        "Old Prussia": "Vecā Prūsija",
      },
      auraNames: {
        amber: "Dzintars",
        moss: "Sūna",
        mist: "Migla",
        sky: "Debesis",
        green: "Zaļš",
      },
    },
  },
};

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  strings: Dictionary;
}

const I18nContext = createContext<I18nContextValue>({
  language: "en",
  setLanguage: () => undefined,
  strings: translations.en,
});

export function TranslationProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      strings: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  return useContext(I18nContext);
}

type TranslatedText = {
  en: string;
  lt: string;
  lv: string;
};

function isTranslatedText(value: unknown): value is TranslatedText {
  if (!value || typeof value !== "object") {
    return false;
  }
  const record = value as Record<string, unknown>;
  return typeof record.en === "string" && typeof record.lt === "string" && typeof record.lv === "string";
}

export function resolveTranslatedText(
  value: string | Partial<TranslatedText> | undefined,
  language: Language,
) {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (isTranslatedText(value)) {
    return value[language];
  }

  return value[language] ?? value.en ?? value.lt ?? value.lv ?? "";
}

export interface FormattedReference {
  text: string;
  url?: string;
}

const bookTitleTranslations: Record<string, Record<Language, string>> = {
  "Mythology of Bees": {
    en: "Mythology of Bees",
    lt: "Bičių mitologija",
    lv: "Bišu mitoloģija",
  },
  "Lithuanian Fairy Tales": {
    en: "Lithuanian Fairy Tales",
    lt: "Lietuviškos pasakos",
    lv: "Lietuviešu pasakas",
  },
  "The Balts": {
    en: "The Balts",
    lt: "Baltai",
    lv: "Balti",
  },
  "Preussische Chronik": {
    en: "Preussische Chronik",
    lt: "Prūsijos kronika",
    lv: "Prūsijas hronika",
  },
  "De Diis Samagitarum": {
    en: "De Diis Samagitarum",
    lt: "Apie žemaičių dievus (De Diis Samagitarum)",
    lv: "Par žemaitiešu dieviem (De Diis Samagitarum)",
  },
};

const storyTitleTranslations: Record<string, Record<Language, string>> = {
  "Austėja and the Golden Hive": { en: "Austėja and the Golden Hive", lt: "Austėja ir auksinis avilys", lv: "Austēja un zelta strops" },
  "The Thunder Oak of Perkūnas": { en: "The Thunder Oak of Perkūnas", lt: "Perkūno griaustinio ąžuolas", lv: "Pērkona zibens ozols" },
  "The Weaving of Laima": { en: "The Weaving of Laima", lt: "Laimos audimas", lv: "Laimas audums" },
  "Velnias and the Fiddler": { en: "Velnias and the Fiddler", lt: "Velnias ir smuikininkas", lv: "Velns un vijolnieks" },
  "The Wedding of Saulė and Mėnulis": { en: "The Wedding of Saulė and Mėnulis", lt: "Saulės ir Mėnulio vestuvės", lv: "Saules un Mēness kāzas" },
  "Bangpūtys and the Amber Fleet": { en: "Bangpūtys and the Amber Fleet", lt: "Bangpūtys ir gintaro laivynas", lv: "Bangpūtis un dzintara flote" },
  "Eglė Queen of Serpents": { en: "Eglė Queen of Serpents", lt: "Eglė žalčių karalienė", lv: "Egle zalkšu karaliene" },
  "Perkūnas and the Celestial Forge": { en: "Perkūnas and the Celestial Forge", lt: "Perkūnas ir dangaus kalvė", lv: "Pērkons un debesu kalve" },
  "Medeina and the Sacred Forest": { en: "Medeina and the Sacred Forest", lt: "Medeina ir šventasis miškas", lv: "Medeina un svētais mežs" },
  "The Sacred Flame of Gabija": { en: "The Sacred Flame of Gabija", lt: "Gabijos šventoji ugnis", lv: "Gabijas svētā uguns" },
};

export function formatReference(rawRef: string, language: Language): FormattedReference {
  if (!rawRef) return { text: "" };

  let text = rawRef.trim();
  let url: string | undefined;

  const urlMatch = text.match(/\((https?:\/\/[^\s\)]+)\)/) || text.match(/(https?:\/\/[^\s]+)/);
  if (urlMatch) {
    url = urlMatch[1];
    text = text.replace(/\(https?:\/\/[^\s\)]+\)/, "").replace(/https?:\/\/[^\s]+/, "").trim();
  }

  // Remove leading/trailing trailing colons or slashes
  text = text.replace(/\/$/, "").trim();

  // Handle enciklopedija references with mixed story titles
  for (const [englishTitle, localized] of Object.entries(storyTitleTranslations)) {
    if (text.includes(englishTitle)) {
      if (text.includes("Visuotinė lietuvių enciklopedija") || text.includes("Tautosakos archyvas")) {
        const sourceName = text.split(":")[0]?.trim() || "Visuotinė lietuvių enciklopedija";
        text = `${sourceName}: ${localized[language]}`;
      } else {
        text = text.replace(englishTitle, localized[language]);
      }
    }
  }

  for (const [englishTitle, localized] of Object.entries(bookTitleTranslations)) {
    if (text.includes(englishTitle)) {
      text = text.replace(englishTitle, localized[language]);
    }
  }

  // Language specific phrasing replacements
  if (language === "lt") {
    text = text
      .replace(/written c\.\s*/g, "parašyta apie ")
      .replace(/publ\.\s*/g, "išleista ")
      .replace(/published\s*/g, "išleista ")
      .replace(/reliability questioned by modern scholars/g, "šiuolaikinių mokslininkų vertinama atsargiai")
      .replace(/written/g, "parašyta");
  } else if (language === "lv") {
    text = text
      .replace(/written c\.\s*/g, "rakstīts ap ")
      .replace(/publ\.\s*/g, "izdots ")
      .replace(/published\s*/g, "izdots ")
      .replace(/reliability questioned by modern scholars/g, "mūsdienu pētnieku vērtēts piesardzīgi")
      .replace(/written/g, "rakstīts");
  }

  return { text, url };
}

const symbolLabelTranslations: Record<string, Record<Language, string>> = {
  "Sacred symbols": { en: "Sacred symbols", lt: "Šventieji simboliai", lv: "Svētie simboli" },
  "Sacred animals": { en: "Sacred animals", lt: "Šventieji gyvūnai", lv: "Svētie dzīvnieki" },
  "Ritual items": { en: "Ritual items", lt: "Ritualiniai daiktai", lv: "Rituālie priekšmeti" },
  "Element / Domain": { en: "Element / Domain", lt: "Stichija / Sritis", lv: "Stihija / Sfēra" },
  "Element": { en: "Element", lt: "Stichija", lv: "Stihija" },
  "Offerings": { en: "Offerings", lt: "Aukos", lv: "Ziedojumi" },
  "Domain": { en: "Domain", lt: "Sritis", lv: "Sfēra" },
  "Associated domain": { en: "Associated domain", lt: "Susijusi sritis", lv: "Saistītā joma" },
  "Sacred plants": { en: "Sacred plants", lt: "Šventieji augalai", lv: "Svētie augi" },
  "Attributes": { en: "Attributes", lt: "Atributai", lv: "Atribūti" },
  "Legacy": { en: "Legacy", lt: "Paveldas", lv: "Mantojums" },
  "Sacred trees": { en: "Sacred trees", lt: "Šventieji medžiai", lv: "Svētie koki" },
  "Sacred objects": { en: "Sacred objects", lt: "Šventieji daiktai", lv: "Svētie priekšmeti" },
};

const termTranslations: Record<string, Record<Language, string>> = {
  "Warm wax and meadow breath": { en: "Warm wax and meadow breath", lt: "Šiltas vaškas ir pievos dvelksmas", lv: "Silts vasks un pļavas elpa" },
  "Honeycomb, linden blossoms, smoke": { en: "Honeycomb, linden blossoms, smoke", lt: "Medaus koriai, liepų žiedai, dūmai", lv: "Medus šūnas, liepziedi, dūmi" },
  "Honey-soaked prayer ribbons": { en: "Honey-soaked prayer ribbons", lt: "Medumi suvilgytos maldos juostos", lv: "Medū samērcētas lūgšanu lentas" },
  "Bee-wing pressed charms": { en: "Bee-wing pressed charms", lt: "Bičių sparnelių amuletai", lv: "Bišu spārnu amuleti" },
  "Warm loam after rain": { en: "Warm loam after rain", lt: "Šilta dirva po lietaus", lv: "Silts māls pēc lietus" },
  "Soil-stained prayer cloths": { en: "Soil-stained prayer cloths", lt: "Žemėtos maldos skarelės", lv: "Augsnes traipītas lūgšanu drānas" },
  "Hazel-root amulets": { en: "Hazel-root amulets", lt: "Lazdyno šaknų amuletai", lv: "Lazdassakņu amuleti" },
  "Milk, rye crowns, crushed herbs": { en: "Milk, rye crowns, crushed herbs", lt: "Pienas, rugių vainikai, sutrintos žolės", lv: "Piens, rudzu vainagi, sasmalcināti ārstniecības augi" },
  "Oak": { en: "Oak", lt: "Ąžuolas", lv: "Ozols" },
  "Oak tree": { en: "Oak tree", lt: "Ąžuolas", lv: "Ozols" },
  "Thunderbolt": { en: "Thunderbolt", lt: "Perkūno strėlė", lv: "Pērkona bulta" },
  "Axe": { en: "Axe", lt: "Kirvis", lv: "Cirtvis" },
  "Ram": { en: "Ram", lt: "Avinas", lv: "Auns" },
  "Fire": { en: "Fire", lt: "Ugnis", lv: "Uguns" },
  "Hearth": { en: "Hearth", lt: "Židinys", lv: "Pavards" },
  "Hearth-stone": { en: "Hearth-stone", lt: "Židinio akmuo", lv: "Pavarda akmens" },
  "Golden flame": { en: "Golden flame", lt: "Auksinė liepsna", lv: "Zelta liesma" },
  "Salt-grain": { en: "Salt-grain", lt: "Druskos grūdas", lv: "Sāls grauds" },
  "Ash-pile": { en: "Ash-pile", lt: "Pelenų krūva", lv: "Pelnu kaudze" },
  "Honey": { en: "Honey", lt: "Medus", lv: "Medus" },
  "Bee": { en: "Bee", lt: "Bitė", lv: "Bite" },
  "Bees": { en: "Bees", lt: "Bitės", lv: "Bites" },
  "Beehive": { en: "Beehive", lt: "Avilys", lv: "Strops" },
  "Amber": { en: "Amber", lt: "Gintaras", lv: "Dzintars" },
  "Sea": { en: "Sea", lt: "Jūra", lv: "Jūra" },
  "Waves": { en: "Waves", lt: "Bangos", lv: "Viļņi" },
  "Sun": { en: "Sun", lt: "Saulė", lv: "Saule" },
  "Sun-wheel": { en: "Sun-wheel", lt: "Saulės ratas", lv: "Saules ritenis" },
  "Golden ring": { en: "Golden ring", lt: "Auksinis žiedas", lv: "Zelta gredzens" },
  "Loom": { en: "Loom", lt: "Stovai", lv: "Audekls" },
  "Moon": { en: "Moon", lt: "Mėnulis", lv: "Mēness" },
  "Crescent": { en: "Crescent", lt: "Pusmėnulis", lv: "Pusmēness" },
  "Stars": { en: "Stars", lt: "Žvaigždės", lv: "Zvaigznes" },
  "Forest": { en: "Forest", lt: "Miškas", lv: "Mežs" },
  "Wolf": { en: "Wolf", lt: "Vilkas", lv: "Vilks" },
  "Bear": { en: "Bear", lt: "Lokys", lv: "Lācis" },
  "Snake": { en: "Snake", lt: "Žaltys", lv: "Zalktis" },
  "Grass snake": { en: "Grass snake", lt: "Žaltys", lv: "Zalktis" },
  "Sacred grove": { en: "Sacred grove", lt: "Šventoji giraitė", lv: "Svētbirzs" },
  "Spring water": { en: "Spring water", lt: "Šaltinio vanduo", lv: "Avota ūdens" },
  "Stone altar": { en: "Stone altar", lt: "Akmens aukuras", lv: "Akmens altāris" },
  "Plowing stick": { en: "Plowing stick", lt: "Arklas", lv: "Arkla koks" },
  "First furrow": { en: "First furrow", lt: "Pirmoji vaga", lv: "Pirmā vaga" },
  "Grain ear": { en: "Grain ear", lt: "Varpa", lv: "Vārpa" },
  "Dark soil": { en: "Dark soil", lt: "Juodžemis", lv: "Melnzeme" },
  "Bow and arrow": { en: "Bow and arrow", lt: "Lankas ir strėlė", lv: "Loks un bulta" },
  "Horn of plenty": { en: "Horn of plenty", lt: "Gausybės ragas", lv: "Brazīlijas rāgs" },
  "Bread": { en: "Bread", lt: "Duona", lv: "Maize" },
  "Ale": { en: "Ale", lt: "Alus", lv: "Alus" },
  "Sickle": { en: "Sickle", lt: "Pjautuvas", lv: "Sirpis" },
  "Rooster": { en: "Rooster", lt: "Gaidys", lv: "Gailis" },
  "Threshold": { en: "Threshold", lt: "Slenkstis", lv: "Slieksnis" },
  "Key": { en: "Key", lt: "Raktas", lv: "Atslēga" },
  "Burial mound": { en: "Burial mound", lt: "Pilkapis", lv: "Kapukalniņš" },
  "Candle": { en: "Candle", lt: "Žvakė", lv: "Svece" },
  "Oak branch": { en: "Oak branch", lt: "Ąžuolo šaka", lv: "Ozola zars" },
};

export function localizeSymbol(
  symbol: { label: string | Record<Language, string>; detail: string | Record<Language, string> },
  language: Language,
) {
  let labelText = resolveTranslatedText(symbol.label, language);
  let detailText = resolveTranslatedText(symbol.detail, language);

  if (symbolLabelTranslations[labelText]) {
    labelText = symbolLabelTranslations[labelText][language];
  }

  if (termTranslations[detailText]) {
    detailText = termTranslations[detailText][language];
  } else if (language !== "en") {
    for (const [englishTerm, localized] of Object.entries(termTranslations)) {
      const regex = new RegExp(`\\b${englishTerm}\\b`, "gi");
      detailText = detailText.replace(regex, localized[language]);
    }
  }

  return { label: labelText, detail: detailText };
}

export function localizeMaterialLegacy(
  item: string | Record<Language, string>,
  language: Language,
): string {
  if (typeof item !== "string") {
    return resolveTranslatedText(item, language);
  }
  let text = item.trim();
  if (termTranslations[text]) {
    return termTranslations[text][language];
  }
  if (language !== "en") {
    for (const [englishTerm, localized] of Object.entries(termTranslations)) {
      const regex = new RegExp(`\\b${englishTerm}\\b`, "gi");
      text = text.replace(regex, localized[language]);
    }
  }
  return text;
}

const keywordTranslations: Record<string, Record<Language, string>> = {
  "thunder": { en: "Thunder", lt: "Perkūnija", lv: "Pērkons" },
  "sun": { en: "Sun", lt: "Saulė", lv: "Saule" },
  "fate": { en: "Fate", lt: "Likimas", lv: "Liktenis" },
  "fire": { en: "Fire", lt: "Ugnis", lv: "Uguns" },
  "hearth": { en: "Hearth", lt: "Židinys", lv: "Pavards" },
  "forest": { en: "Forest", lt: "Miškas", lv: "Mežs" },
  "bees": { en: "Bees", lt: "Bitės", lv: "Bites" },
  "honey": { en: "Honey", lt: "Medus", lv: "Medus" },
  "linden": { en: "Linden", lt: "Liepa", lv: "Liepa" },
  "meadow": { en: "Meadow", lt: "Pieva", lv: "Pļava" },
  "sea": { en: "Sea", lt: "Jūra", lv: "Jūra" },
  "moon": { en: "Moon", lt: "Mėnulis", lv: "Mēness" },
  "death": { en: "Death", lt: "Mirtis", lv: "Nāve" },
  "underworld": { en: "Underworld", lt: "Požemis", lv: "Pazeme" },
  "crafts": { en: "Crafts", lt: "Amatai", lv: "Amatu meistarība" },
  "harvest": { en: "Harvest", lt: "Derlius", lv: "Rāja" },
  "plowed field": { en: "Plowed field", lt: "Ariamas laukas", lv: "Aramzeme" },
  "soil fertility": { en: "Soil fertility", lt: "Dirvos derlingumas", lv: "Augsnes auglība" },
  "furrow": { en: "Furrow", lt: "Vaga", lv: "Vaga" },
  "earth": { en: "Earth", lt: "Žemė", lv: "Zeme" },
  "flax": { en: "Flax", lt: "Linai", lv: "Lini" },
  "beer": { en: "Beer", lt: "Alus", lv: "Alus" },
  "brewing": { en: "Brewing", lt: "Darymas", lv: "Brūvēšana" },
  "wind": { en: "Wind", lt: "Vėjas", lv: "Vējš" },
  "spring": { en: "Spring", lt: "Pavasaris", lv: "Pavasaris" },
  "grain": { en: "Grain", lt: "Grūdai", lv: "Graudi" },
  "health": { en: "Health", lt: "Sveikata", lv: "Veselība" },
  "protection": { en: "Protection", lt: "Apsauga", lv: "Aizsardzība" },
  "dawn": { en: "Dawn", lt: "Aušra", lv: "Auseklis" },
  "morning star": { en: "Morning star", lt: "Aušrinė žvaigždė", lv: "Rīta zvaigzne" },
  "wealth": { en: "Wealth", lt: "Turtas", lv: "Bagātība" },
  "light": { en: "Light", lt: "Šviesa", lv: "Gaisma" },
  "horses": { en: "Horses", lt: "Žirgai", lv: "Zirgi" },
  "water": { en: "Water", lt: "Vanduo", lv: "Ūdens" },
  "rain": { en: "Rain", lt: "Lietus", lv: "Lietus" },
  "groves": { en: "Groves", lt: "Giraitės", lv: "Birzis" },
  "hunting": { en: "Hunting", lt: "Medžioklė", lv: "Medības" },
  "home": { en: "Home", lt: "Namai", lv: "Mājas" },
  "threshold": { en: "Threshold", lt: "Slenkstis", lv: "Slieksnis" },
  "dead": { en: "Dead", lt: "Mirusieji", lv: "Mirušie" },
  "shades": { en: "Shades", lt: "Vėlės", lv: "Veļi" },
  "healing": { en: "Healing", lt: "Gydymas", lv: "Dziedināšana" },
  "dragon": { en: "Dragon", lt: "Aitvaras / Pūkis", lv: "Pūķis" },
  "giantess": { en: "Giantess", lt: "Milžinė", lv: "Milze" },
  "creation": { en: "Creation", lt: "Kūrimas", lv: "Radīšana" },
  "time": { en: "Time", lt: "Laikas", lv: "Laiks" },
  "hunt": { en: "Hunt", lt: "Medžioklė", lv: "Medības" },
  "yard": { en: "Yard", lt: "Kiemas", lv: "Sēta" },
  "threshing": { en: "Threshing", lt: "Kūlimas", lv: "Kulšana" },
  "sap": { en: "Sap", lt: "Sula", lv: "Sula" },
  "twins": { en: "Twins", lt: "Dvyniai", lv: "Dvīņi" },
  "windy": { en: "Windy", lt: "Vėjuotas", lv: "Vējains" },
  "first": { en: "First", lt: "Pirmasis", lv: "Pirmais" },
  "oak": { en: "Oak", lt: "Ąžuolas", lv: "Ozols" },
  "amber": { en: "Amber", lt: "Gintaras", lv: "Dzintars" },
  "stone": { en: "Stone", lt: "Akmuo", lv: "Akmens" },
  "hill": { en: "Hill", lt: "Kalva", lv: "Pakalns" },
  "river": { en: "River", lt: "Upė", lv: "Upe" },
  "lake": { en: "Lake", lt: "Ežeras", lv: "Ezers" },
  "cuckoo": { en: "Cuckoo", lt: "Gegutė", lv: "Dzeguze" },
  "snake": { en: "Snake", lt: "Žaltys", lv: "Zalktis" },
  "star": { en: "Star", lt: "Žvaigždė", lv: "Zvaigzne" },
  "night": { en: "Night", lt: "Naktis", lv: "Nakts" },
  "day": { en: "Day", lt: "Diena", lv: "Diena" },
  "swamp": { en: "Swamp", lt: "Pelkė", lv: "Purvs" },
  "smith": { en: "Smith", lt: "Kalvis", lv: "Kalējs" },
  "portion": { en: "Portion", lt: "Dalia", lv: "Daļa" },
};

export function localizeKeyword(word: string, language: Language): string {
  if (!word) return "";
  const key = word.trim().toLowerCase();
  if (keywordTranslations[key]) {
    return keywordTranslations[key][language];
  }
  for (const [k, map] of Object.entries(keywordTranslations)) {
    if (k.toLowerCase() === key) {
      return map[language];
    }
  }
  return word;
}
