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
  "Chronicles compare him to Neptune": { en: "Chronicles compare him to Neptune", lt: "Metraščiai lygina jį su Neptūnu", lv: "Hronikas viņu salīdzina ar Neptūnu" },
  "First fish of the catch": { en: "First fish of the catch", lt: "Pirmasis pagautas žuvis", lv: "Pirmā noķertā zivs" },
  "Salt wind over dark water": { en: "Salt wind over dark water", lt: "Sūrus vėjas virš tamsaus vandens", lv: "Sāļš vējš pār tumšu ūdeni" },
  "From 'dalis' (portion, share)": { en: "From 'dalis' (portion, share)", lt: "Iš „dalia“ (dalytis, tekti)", lv: "No „dalis“ (daļa, iedalījums)" },
  "Material fate and wealth distribution": { en: "Material fate and wealth distribution", lt: "Materialus likimas ir turto dalyba", lv: "Materiālais liktenis un bagātības sadale" },
  "Works alongside Laima": { en: "Works alongside Laima", lt: "Veikia kartu su Laima", lv: "Strādā kopā ar Laimu" },
  "Still air above crowns": { en: "Still air above crowns", lt: "Ramus oras virš medžių viršūnių", lv: "Rāms gaiss virs galotnēm" },
  "Cold white mist at dusk": { en: "Cold white mist at dusk", lt: "Šalta balta migla sutemose", lv: "Auksta balta migla krēslā" },
  "Two stalks from one root": { en: "Two stalks from one root", lt: "Du stiebai iš vienos šaknies", lv: "Divi stiebri no vienas saknes" },
  "Quiet water under birch": { en: "Quiet water under birch", lt: "Ramus vanduo po beržu", lv: "Rāms ūdens zem bērza" },
  "Flax knots, copper coins, whispered vows": { en: "Flax knots, copper coins, whispered vows", lt: "Lino mazgai, varinės monetos, sušnabždėti įžadai", lv: "Linu mezgli, vara monētas, čukstēti solījumi" },
  "Loam of plowed fields": { en: "Loam of plowed fields", lt: "Ariamų laukų molis", lv: "Aramzemes māls" },
  "Milk, earth, woven cloth": { en: "Milk, earth, woven cloth", lt: "Pienas, žemė, austas audinys", lv: "Piens, zeme, austa drāna" },
  "Cold glow on water": { en: "Cold glow on water", lt: "Šaltas švytėjimas ant vandens", lv: "Auksts spīdums uz ūdens" },
  "River silver, white pebbles, silence": { en: "River silver, white pebbles, silence", lt: "Upės sidabras, balti akmenėliai, tyla", lv: "Upes sudrabs, balti oļi, klusums" },
  "Pale elder, white head-shroud": { en: "Pale elder, white head-shroud", lt: "Blyški senolė, balta nuometo skara", lv: "Bāla sirmgalve, balts galvas auts" },
  "Death, shadows, and ancestral spirits": { en: "Death, shadows, and ancestral spirits", lt: "Mirtis, šešėliai ir vėlės", lv: "Nāve, ēnas un veļu gari" },
  "Beardless youth, grain crown": { en: "Beardless youth, grain crown", lt: "Bebezdis jaunuolis, javų vainikas", lv: "Bezbārdains jauneklis, labības vainags" },
  "Spring, youth, rivers, harvest": { en: "Spring, youth, rivers, harvest", lt: "Pavasaris, jaunystė, upės, derlius", lv: "Pavasaris, jaunība, upes, raža" },
  "Barley, iron nails, smoked salt": { en: "Barley, iron nails, smoked salt", lt: "Miežiai, geležinės vinys, rūkyta druska", lv: "Mieži, dzelzs naglas, kūpināts sāls" },
  "First light on dew": { en: "First light on dew", lt: "Pirmoji šviesa ant rasos", lv: "Pirmā gaisma uz rasas" },
  "Hammer and divine anvil": { en: "Hammer and divine anvil", lt: "Kūjis ir dangiškasis priekalas", lv: "Āmurs un dievišķā lakta" },
  "First spring light on dew": { en: "First spring light on dew", lt: "Pirmoji pavasario šviesa ant rasos", lv: "Pirmā pavasara gaisma uz rasas" },
  "Horse feed, barley beer, candles": { en: "Horse feed, barley beer, candles", lt: "Pa pašaras žirgams, miežių alus, žvakės", lv: "Zirgu barība, miežu alus, sveces" },
  "Venus as Evening Star": { en: "Venus as Evening Star", lt: "Venera kaip Vakarinė žvaigždė", lv: "Venera kā Vakara zvaigzne" },
  "Flax candles and silver thread": { en: "Flax candles and silver thread", lt: "Lininės žvakės ir sidabro siūlas", lv: "Linu sveces un sudraba pavediens" },
  "Mist over peat": { en: "Mist over peat", lt: "Migla virš durpyno", lv: "Migla pār kūdru" },
  "Omelet, grain, first milk — fed regularly to keep it loyal": { en: "Omelet, grain, first milk — fed regularly to keep it loyal", lt: "Kiaušinienė, grūdai, pirmasis pienas — aukojama ištikimybei", lv: "Omlete, graudi, pirmais piens — ziedots uzticībai" },
  "Fresh herbs and clean water": { en: "Fresh herbs and clean water", lt: "Šviežios žolės ir švarus vanduo", lv: "Svaigi augi un tīrs ūdens" },
  "Ship's prow, Anchor-stone, Fishing net, Calm horizon": { en: "Ship's prow, Anchor-stone, Fishing net, Calm horizon", lt: "Laivo priekis, enkuro akmuo, žvejybos tinklas, ramus horizontas", lv: "Kuģa priekšgals, enkura akmens, zvejas tīkls, rāms horizonts" },
  "Birch leaf, Birch sap, White bark, Spring catkin": { en: "Birch leaf, Birch sap, White bark, Spring catkin", lt: "Beržo lapas, beržų sula, balta žievė, pavasario žirginys", lv: "Bērza lapa, bērzu sula, balta miza, pavasara spraudis" },
  "Cherry blossom, Red fruit, Wax candles, Cherry wood": { en: "Cherry blossom, Red fruit, Wax candles, Cherry wood", lt: "Vyšnios žiedas, raudonas vaisius, vaško žvakės, vyšnios medis", lv: "Ķirša zieds, sarkans auglis, vaska sveces, ķirša koks" },
  "Linen thread, white flowers, milk": { en: "Linen thread, white flowers, milk", lt: "Lino siūlas, baltos gėlės, pienas", lv: "Linu pavediens, balti ziedi, piens" },
  "Keyhole, Sweating horse, Weight on the chest": { en: "Keyhole, Sweating horse, Weight on the chest", lt: "Rrakto skylutė, suprakaitavęs žirgas, svoris ant krūtinės", lv: "Atslēgas caurums, sasvīdis zirgs, smagums uz krūtīm" },
  "Fermentation and sourdough": { en: "Fermentation and sourdough", lt: "Rūgimas ir raugas", lv: "Rūgšana un ieraugs" },
  "Iron knife, Scissors, Weight on the chest": { en: "Iron knife, Scissors, Weight on the chest", lt: "Geležinis peilis, žirklės, svoris ant krūtinės", lv: "Dzelzs nazis, šķēres, smagums uz krūtīm" },
  "Spring-well, Riverbend, Silver water-drops, Beads, Woven ribbons": { en: "Spring-well, Riverbend, Silver water-drops, Beads, Woven ribbons", lt: "Šaltinis, upės vingis, sidabriniai vandens lašai, karoliai, pintos juostos", lv: "Avots, upes līkums, sudraba ūdens pilieni, krelles, austas lentas" },
  "Growing green stalk": { en: "Growing green stalk", lt: "Augantis žalias stiebas", lv: "Augošs zaļš stiebrs" },
  "Flax bundles, hemp seed, linen cloth": { en: "Flax bundles, hemp seed, linen cloth", lt: "Linų snopai, kanapių sėklos, lininis audinys", lv: "Linu kūļi, kaņepju sēklas, linu drāna" },
  "Wind-vane, Tree-tops in motion, Cloud-streaks, Sail": { en: "Wind-vane, Tree-tops in motion, Cloud-streaks, Sail", lt: "Vėtrungė, judančios medžių viršūnės, debesų juostos, burė", lv: "Vējrādītājs, kustīgas koku galotnes, mākoņu joslas, bura" },
  "Moving air and breath": { en: "Moving air and breath", lt: "Judantis oras ir dvelksmas", lv: "Kustīgs gaiss un elpa" },
  "Linen strips, feathers, grain scattered to wind": { en: "Linen strips, feathers, grain scattered to wind", lt: "Lino juostelės, plunksnos, vėjui išbarstyti grūdai", lv: "Linu strēmelės, spalvas, vējam izkaisīti graudi" },
  "Still water and shadow": { en: "Still water and shadow", lt: "Ramus vanduo ir šešėlis", lv: "Rāms ūdens un ēna" },
  "Food left for the dead, candles, autumn flowers": { en: "Food left for the dead, candles, autumn flowers", lt: "Maistas velėms, žvakės, rudens gėlės", lv: "Ēdiens veļiem, sveces, rudens ziedi" },
  "Road stone, Walking stick, Sunrise, Crossroads": { en: "Road stone, Walking stick, Sunrise, Crossroads", lt: "Kelio akmuo, lazda, tekanti saulė, kryžkelė", lv: "Ceļa akmens, spieķis, saullēkts, krustceļi" },
  "Grain sheaf, Flour, Beer pitcher, Woven straw figure": { en: "Grain sheaf, Flour, Beer pitcher, Woven straw figure", lt: "Javų pėdas, miltai, alaus ąsotis, šiaudinis skulptūra", lv: "Labības kūlis, milti, alus krūze, salmu tēls" },
  "Trembling hand, Pale face, Shivering figure": { en: "Trembling hand, Pale face, Shivering figure", lt: "Drebanti ranka, blyškus veidas, drebantis pavidalas", lv: "Trīcoša roka, bāla seja, drebošs tēls" },
  "Bow, Footsteps, Game animal": { en: "Bow, Footsteps, Game animal", lt: "Lankas, pėdsakai, laukinis žvėris", lv: "Loks, pēdas, meža zvērs" },
  "Thorn, Brier, Barb, Defensive hedge, Hawthorn": { en: "Thorn, Brier, Barb, Defensive hedge, Hawthorn", lt: "Dyglys, erškėtis, spygliai, apsauginė gyvatvorė, vienapėdė", lv: "Dzelonis, ērkšķis, dzeloņi, aizsargdzīvžogs, vilkābele" },
  "Shepherd's horn, Staff, Sheep, Cowbell": { en: "Shepherd's horn, Staff, Sheep, Cowbell", lt: "Piemens ragas, lazda, avys, galvijų skambalas", lv: "Gana rags, spieķis, aitas, govs zvans" },
  "Cuckoo bird, Spring branch, Morning shadow": { en: "Cuckoo bird, Spring branch, Morning shadow", lt: "Gegutė, pavasario šaka, ryto šešėlis", lv: "Dzeguze, pavasara zars, rīta ēna" },
  "Bright star, Planetary light, Celestial sphere": { en: "Bright star, Planetary light, Celestial sphere", lt: "Šviesi žvaigždė, planetos šviesa, dangaus skliautas", lv: "Spoža zvaigzne, planētas gaisma, debess velve" },
  "Sword, Shield, Spear, Victory wreath": { en: "Sword, Shield, Spear, Victory wreath", lt: "Kardas, skydas, ietis, pergalės vainikas", lv: "Zobens, vairogs, šķēps, uzvaras vainags" },
  "Spring flower, Midsummer wreath, Tribranced pole, Morning dew": { en: "Spring flower, Midsummer wreath, Tribranced pole, Morning dew", lt: "Pavasario gėlė, Joninių vainikas, trišakis stulpas, ryto rasa", lv: "Pavasara zieds, Jāņu vainags, trīszaru kārts, rīta rasa" },
  "Sword, Rook bird, Spear, Warhorse": { en: "Sword, Rook bird, Spear, Warhorse", lt: "Kardas, kovas, ietis, karo žirgas", lv: "Zobens, krauklis, šķēps, kara zirgs" },
  "Plowshare, Boundary stone, Woven sheaf, Field lark": { en: "Plowshare, Boundary stone, Woven sheaf, Field lark", lt: "Noragas, ribos akmuo, austas pėdas, dirvinis vieversys", lv: "Lemesis, robežakmens, austs kūlis, cīrulis" },
  "Smile, Wine cup, Song, Sunrays": { en: "Smile, Wine cup, Song, Sunrays", lt: "Šypsena, taurė, daina, saulės spinduliai", lv: "Smaids, kauss, dziesma, saules stari" },
  "Bow, Hunting horn, Spear": { en: "Bow, Hunting horn, Spear", lt: "Lankas, medžioklės ragas, ietis", lv: "Loks, medību rags, šķēps" },
  "Myrtle, Dove, Heart, Spring flowers": { en: "Myrtle, Dove, Heart, Spring flowers", lt: "Marta, balandis, širdis, pavasario gėlės", lv: "Mirte, balodis, sirds, pavasara ziedi" },
  "Milk pail, White cow, Cream pitcher, Woven cloth": { en: "Milk pail, White cow, Cream pitcher, Woven cloth", lt: "Pieno kibiras, balta karvė, grietinės indas, austas audinys", lv: "Piens kiberis, balta govs, krējuma trauks, austa drāna" },
  "Birch-branch slota, Steam, Wooden bucket": { en: "Birch-branch slota, Steam, Wooden bucket", lt: "Beržinė vanta, garas, medinis kibiras", lv: "Bērzu slota, tvaiks, koka kibers" },
  "Water drop, Splashing water, Rain cloud, Sieve": { en: "Water drop, Splashing water, Rain cloud, Sieve", lt: "Vandens lašas, tiškantis vanduo, lietaus debesys, rėtis", lv: "Ūdens piliens, šļakstošs ūdens, lietus mākonis, siets" },
  "Water drop, Flower petal, Dawn light, Silver bowl": { en: "Water drop, Flower petal, Dawn light, Silver bowl", lt: "Vandens lašas, gėlės žiedlapis, aušros šviesa, sidabro dubuo", lv: "Ūdens piliens, ziedlapa, rīta gaisma, sudraba bļoda" },
  "Pine cone, Heather, Moss, Resin": { en: "Pine cone, Heather, Moss, Resin", lt: "Kankorėžis, viržiai, samanos, sakai", lv: "Čiekurs, virši, sūnas, sveķi" },
  "Grave mound, Night sky, Spirit lights, Ancient tree": { en: "Grave mound, Night sky, Spirit lights, Ancient tree", lt: "Pilkapis, nakties dangus, vėlių švieselės, senasis medis", lv: "Kapukalniņš, nakts debess, veļu ugunis, senais koks" },
  "White feather, Open path, Ascending smoke, Twin birds, Dawn light": { en: "White feather, Open path, Ascending smoke, Twin birds, Dawn light", lt: "Balta plunksna, atviras kelias, kylantys dūmai, dvyniai paukščiai, aušra", lv: "Balta spalva, atvērts ceļš, kūpoši dūmi, dvīņu putni, austrītis" },
  "Broken chain, Open hand, Release keys": { en: "Broken chain, Open hand, Release keys", lt: "Nutrūkusi grandinė, atvira ranka, paleidimo raktai", lv: "Sarauta ķēde, atvērta roka, atbrīvošanas atslēgas" },
  "Ear, Scroll, Whispering wind, Shell": { en: "Ear, Scroll, Whispering wind, Shell", lt: "Aukštis, kraitis, šnabždantis vėjas, kriauklė", lv: "Auss, tinums, čukstošs vējš, gliemežvāks" },
  "Golden gates, Morning dew, White robe, Sunbeams, Rosy horizon": { en: "Golden gates, Morning dew, White robe, Sunbeams, Rosy horizon", lt: "Auksiniai vartai, ryto rasa, baltas drabužis, saulės spinduliai, rausvas horizontas", lv: "Zelta vārti, rīta rasa, balts tērps, saules stari, sārts horizonts" },
  "Walking staff, Crossroads stone, Packed bundle, Open gate, Road dust": { en: "Walking staff, Crossroads stone, Packed bundle, Open gate, Road dust", lt: "Kelionės lazda, kryžkelės akmuo, ryšulys, atviri vartai, kelio dulkės", lv: "Gājēja spieķis, krustceļu akmens, ceļa soma, atvērti vārti, ceļa putekļi" },
  "Wing, Feather, Egg, Cuckoo, Sky-path": { en: "Wing, Feather, Egg, Cuckoo, Sky-path", lt: "Sparnas, plunksna, kiaušinis, gegutė, dangaus takas", lv: "Spārns, spalva, ola, dzeguze, debesu ceļš" },
  "Glass mountain, Silver tree, White light, Lynx claws, Hill": { en: "Glass mountain, Silver tree, White light, Lynx claws, Hill", lt: "Stiklo kalnas, sidabro medis, balta šviesa, lūšies nagai, kalva", lv: "Stikla kalns, sudraba koks, balta gaisma, lūša nagi, pakalns" },
  "Silver dome, Star-field, Blue cloak, Infinite expanse": { en: "Silver dome, Star-field, Blue cloak, Infinite expanse", lt: "Sidabro kupolas, žvaigždynas, mėlyna skraistė, begalybė", lv: "Sudraba kupols, zvaigznājs, zils mētelis, bezgalība" },
  "White horse, Plow, Sunbeam, Stork": { en: "White horse, Plow, Sunbeam, Stork", lt: "Baltas žirgas, arklas, saulės spindulys, gandras", lv: "Balts zirgs, arkls, saules stars, stārķis" },
  "Spade, Fresh earth, Twilight, Mossy mound, Shovel": { en: "Spade, Fresh earth, Twilight, Mossy mound, Shovel", lt: "Kastuvas, šviežia žemė, prieblanda, samanotas pilkapis, mentė", lv: "Lāpsta, svaiga zeme, krēsla, samtains kapukalniņš, lāpsta" },
  "Silver crown, Water-lily, Fish scales, Mirror surface, Morning mist": { en: "Silver crown, Water-lily, Fish scales, Mirror surface, Morning mist", lt: "Sidabro karūna, vandens lelija, žuvies zvynai, veidrodinis paviršius, migla", lv: "Sudraba kronis, ūdensroze, zivs zvīņas, spoguļa virsma, rīta migla" },
  "Embers, Hearthstone, Salt, Woven belt, White hen": { en: "Embers, Hearthstone, Salt, Woven belt, White hen", lt: "Žarijos, židinio akmuo, druska, austas juosta, balta vista", lv: "Ogles, pavarda akmens, sāls, austa josta, balta vista" },
  "White swan, Firebrand, Anvil (Długosz mapping)": { en: "White swan, Firebrand, Anvil (Długosz mapping)", lt: "Balta gulbė, deglas, priekalas (pagal J. Długoszą)", lv: "Balts gulbis, lāpa, lakta (pēc J. Długoša)" },
  "Swan, White feather, Pure water, Solar disc": { en: "Swan, White feather, Pure water, Solar disc", lt: "Gulbė, balta plunksna, grynas vanduo, saulės diskas", lv: "Gulbis, balta spalva, tīrs ūdens, saules disks" },
  "Pitch black, Inky marsh, Broken stone, Night, Black raven": { en: "Pitch black, Inky marsh, Broken stone, Night, Black raven", lt: "Aklina tamsa, juoda pelkė, nuskeltas akmuo, naktis, juodas varnas", lv: "Piķa tumsa, melns purvs, lauzts akmens, nakts, melns krauklis" },
  "Warhorse, Spear, Battle cry": { en: "Warhorse, Spear, Battle cry", lt: "Karo žirgas, ietis, kovos šauksmas", lv: "Kara zirgs, šķēps, kaujas sauciens" },
  "Crossroads, Walking stick, Sleigh runner": { en: "Crossroads, Walking stick, Sleigh runner", lt: "Kryžkelė, kelionės lazda, pavaža", lv: "Krustceļi, spieķis, kamanu sliece" },
  "Beetle, Cockchafer, Hard shell": { en: "Beetle, Cockchafer, Hard shell", lt: "Vabzdys, karkvabalis, kietas šarvas", lv: "Vabole, maijvabole, cieta čaula" },
  "Hazelnut, Hazel branch, Hazel staff, Squirrel": { en: "Hazelnut, Hazel branch, Hazel staff, Squirrel", lt: "Lazdyno riešutas, lazdyno šaka, lazdyno lazda, voverė", lv: "Lazdazieds, lazdas zars, lazdas spieķis, vāvere" },
  "Red cloth, White robe, Death bell, Pale horse, Red scythe": { en: "Red cloth, White robe, Death bell, Pale horse, Red scythe", lt: "Raudonas audinys, balta skara, mirties varpas, blyškus žirgas, raudonas dalgis", lv: "Sarkana drāna, balts tērps, nāves zvans, bāls zirgs, sarkans sirpis" },
  "Millstone, Water wheel, Flour dust, Wind sails, White cat": { en: "Millstone, Water wheel, Flour dust, Wind sails, White cat", lt: "Girnos, vandens ratas, miltų dulkės, vėjo burės, balta katė", lv: "Dzirnakmens, ūdensrats, miltu putekļi, vēja buras, balts kaķis" },
  "Black blanket, Dark sky, Dream thread, Sleeping earth": { en: "Black blanket, Dark sky, Dream thread, Sleeping earth", lt: "Juoda antklodė, tamsus dangus, sapno siūlas, mieganti žemė", lv: "Melna sega, tumša debess, sapņu pavediens, guļoša zeme" },
  "Locked gate, Stone wall, Unreachable peak, Closed eye": { en: "Locked gate, Stone wall, Unreachable peak, Closed eye", lt: "Užrakinti vartai, akmens siena, nepasiekiama viršūnė, užmerkta akis", lv: "Aizslēgti vārti, akmens siena, nesasniedzama virsotne, aizvērta acs" },
  "Quern stone, Flour, Grain, Circle, Sieve": { en: "Quern stone, Flour, Grain, Circle, Sieve", lt: "Girnos, miltai, grūdai, ratas, rėtis", lv: "Dzirnakmens, milti, graudi, aplis, siets" },
  "Snipe feathers, Spring rain, Goat horns, Bleating sound": { en: "Snipe feathers, Spring rain, Goat horns, Bleating sound", lt: "Perkūno oželio plunksnos, pavasario lietus, ožio ragai, mekenimas", lv: "Pērkona āža spalvas, pavasara lietus, āža ragi, mekēšana" },
  "Lightning bolt, Zig-zag line, Golden rod, Whip, White horse": { en: "Lightning bolt, Zig-zag line, Golden rod, Whip, White horse", lt: "Žaibas, zigzaginė linija, auksinė rykštė, whip, baltas žirgas", lv: "Zibens, līkloču līnija, zelta rīkste, ostītājs, balts zirgs" },
  "Bed-cloth, Grain, Wedding wreath": { en: "Bed-cloth, Grain, Wedding wreath", lt: "Latos paklodė, grūdai, vestuvių vainikas", lv: "Gultas drāna, graudi, kāzu vainags" },
  "Voice, Upturned ear, Prayer smoke, Speaking hands": { en: "Voice, Upturned ear, Prayer smoke, Speaking hands", lt: "Balsas, atkreipta ausis, maldos dūmai, kalbančios rankos", lv: "Balss, pavērsta auss, lūgšanu dūmi, runājošas rokas" },
  "Wheel, Piglet, Oxen yoke, Goat horn": { en: "Wheel, Piglet, Oxen yoke, Goat horn", lt: "Ratas, paršelis, jaučių jungas, ožio ragas", lv: "Ritenis, sivēns, vēršu jūgs, āža rags" },
  "Dung heap, Pitchfork, Sprout, Fertile soil": { en: "Dung heap, Pitchfork, Sprout, Fertile soil", lt: "Hšūdo krūva, šakės, daigas, derlinga žemė", lv: "Kūtsmēsli, dakšas, dīgsts, auglīga zeme" },
  "Ice crystal, Withered blossom, White field, Morning hoarfrost": { en: "Ice crystal, Withered blossom, White field, Morning hoarfrost", lt: "Ledo kristalas, nuvytęs žiedas, baltas laukas, šerkšnas", lv: "Ledus kristāls, novītis zieds, balts lauks, sarma" },
  "Golden bowl, Dawn gate, Evening embrace, Solar wheel": { en: "Golden bowl, Dawn gate, Evening embrace, Solar wheel", lt: "Auksinis dubuo, aušros vartai, vakaro apsikabinimas, saulės ratas", lv: "Zelta bļoda, rīta vārti, vakara apskāriens, saules ritenis" },
  "Sloping hillside, Dew on grass, Clay earth, Wild herbs, Boundary stone": { en: "Sloping hillside, Dew on grass, Clay earth, Wild herbs, Boundary stone", lt: "Nulydytas šlaitas, rasa ant žolės, molinga žemė, laukinės žolės, ribos akmuo", lv: "Nogāze, rasa uz zāles, māla zeme, savvaļas augi, robežakmens" },
  "Dawn-water clay vessels": { en: "Dawn-water clay vessels", lt: "Aušros vandens moliniai indai", lv: "Rīta ūdens māla trauki" },
  "Morning star embroidery motifs": { en: "Morning star embroidery motifs", lt: "Aušrinės žvaigždės siuvinėjimo motyvai", lv: "Rīta zvaigznes izšuvumu motīvi" },
  "Net-carved votive offerings": { en: "Net-carved votive offerings", lt: "Tinklo pavidalo aukos", lv: "Tīkla veida ziedojumi" },
  "First-catch rituals": { en: "First-catch rituals", lt: "Pirmojo laimikio ritualai", lv: "Pirmā loma rituāli" },
  "Twin-faced wind vanes": { en: "Twin-faced wind vanes", lt: "Dvipusės medinės vėtrungės", lv: "Divsejainie koka vējrādītāji" },
  "Birth-offering cloths": { en: "Birth-offering cloths", lt: "Gimties aukojimo skarelės", lv: "Dzemdību ziedojumu drānas" },
  "Grain-measuring vessels": { en: "Grain-measuring vessels", lt: "Grūdų matavimo indai", lv: "Graudu mērīšanas trauki" },
  "Ritual scissors (fate-cutting)": { en: "Ritual scissors (fate-cutting)", lt: "Ritualinės žirklės (likimui kirpti)", lv: "Rituālās šķēres (likteņa griešanai)" },
  "Bronze bell miniatures": { en: "Bronze bell miniatures", lt: "Bronziniai skambučiai miniaturinėje formoje", lv: "Bronzas zvaniņu miniatūras" },
  "Star charts burnt into ash wood": { en: "Star charts burnt into ash wood", lt: "Žvaigždėlapiai, išdeginti uosio medienoje", lv: "Zvaigžņu kartes, iegravētas oša kokā" },
  "Ribbon-wrapped ember spoons": { en: "Ribbon-wrapped ember spoons", lt: "Juostomis apvynioti žarijų šaukštai", lv: "Lentām aptīti ogļu karotes" },
  "Linen shrouds with serpent motifs": { en: "Linen shrouds with serpent motifs", lt: "Lininiai nuometai su žalčių motyvais", lv: "Linu auti ar čūsku motīviem" },
  "Iron death-hooks at gravesides": { en: "Iron death-hooks at gravesides", lt: "Geležiniai mirties kabliai prie kapų", lv: "Dzelzs nāves āķi pie kapiem" },
  "Braided rye harvest crowns": { en: "Braided rye harvest crowns", lt: "Pinti rugių derliaus vainikai", lv: "Pīti rudzu ražas vainagi" },
  "Double-grain pressed into clay seals": { en: "Double-grain pressed into clay seals", lt: "Dvigubas grūdas spaudas molio antspauduose", lv: "Dubultgrauds iespiests māla zīmogos" },
  "Carved birch divination staves": { en: "Carved birch divination staves", lt: "Drožinėtos beržinės burtų lazdos", lv: "Grebti bērza zīlēšanas spieki" },
  "Wax-sealed fate ribbons": { en: "Wax-sealed fate ribbons", lt: "Vašku užspauduotos likimo juostos", lv: "Ar vasku zīmogotas likteņa lentas" },
  "Sacred cattle skull barn charms": { en: "Sacred cattle skull barn charms", lt: "Šventos galvijų kaukolės kluono apsaugai", lv: "Svētas lopu galvaskausi šķūņa aizsardzībai" },
  "Resin-sealed axes": { en: "Resin-sealed axes", lt: "Sakais užsandarinti kirviai", lv: "Ar sveķiem zīmogoti cirtņi" },
  "Bark slips with charcoal prayers": { en: "Bark slips with charcoal prayers", lt: "Žievės juostelės su anglimi rašytomis maldomis", lv: "Mizas strēmelītes ar ogles lūgšanām" },
  "Indigo-tinted tide charts": { en: "Indigo-tinted tide charts", lt: "Indigo dažyti potvynių žemėlapiai", lv: "Indigo krāsotas paisuma kartes" },
  "White shroud offerings": { en: "White shroud offerings", lt: "Baltų nuometų aukos", lv: "Baltu autu ziedojumi" },
  "Winter solstice death ceremonies": { en: "Winter solstice death ceremonies", lt: "Žiemos saulėgrįžos mirties apeigos", lv: "Ziemassvētku nāves rituāli" },
  "Grain crown offerings": { en: "Grain crown offerings", lt: "Javų vainikų aukos", lv: "Labības vainagu ziedojumi" },
  "Spring festival wreaths": { en: "Spring festival wreaths", lt: "Pavasario šventės vainikai", lv: "Pavasara svētku vainagi" },
  "First-fish cast-back rituals": { en: "First-fish cast-back rituals", lt: "Pirmojo žuvies grąžinimo rituolai", lv: "Pirmās zivs atdošanas rituāli" },
  "Iron spearhead talismans": { en: "Iron spearhead talismans", lt: "Geležinių ietigalių talismanai", lv: "Dzelzs šķēpu uzgaļu talismanu" },
  "Pitch-black thunderstones tied with flax": { en: "Pitch-black thunderstones tied with flax", lt: "Juodi perkūnmetinio akmenys, aprišti linais", lv: "Melnās pērkona bultas, apsietas ar liniem" },
  "Flame-scorched grain offerings": { en: "Flame-scorched grain offerings", lt: "Ugnimi apdegintos grūdų aukos", lv: "Liesmās apdedzināti graudu ziedojumi" },
  "Red-thread serpent charms": { en: "Red-thread serpent charms", lt: "Raudonų siūlų žalčių amuletai", lv: "Sarkanu pavedienu čūsku amuleti" },
  "Iron ritual deposits at smithing sites": { en: "Iron ritual deposits at smithing sites", lt: "Geležies rituoliniai radiniai kalvystės vietose", lv: "Dzelzs rituālie atradumi kalvju vietās" },
  "Beeswax spring candles": { en: "Beeswax spring candles", lt: "Bičių vaško pavasario žvakės", lv: "Bišu vaska pavasara sveces" },
  "Silver-thread evening cloths": { en: "Silver-thread evening cloths", lt: "Sidabro siūlų vakaro skarelės", lv: "Sudraba pavedienu vakara drānas" },
  "Venus-observation hilltops": { en: "Venus-observation hilltops", lt: "Aušrinės ir Vakarinės stebėjimo piliakalniai", lv: "Veneras novērošanas pilskalni" },
  "Charcoal crossroads sigils": { en: "Charcoal crossroads sigils", lt: "Anglies kryžkelių ženklai", lv: "Ogles krustceļu zīmes" },
  "Bone whistles carved with spiral horns": { en: "Bone whistles carved with spiral horns", lt: "Kauliniai švilpukai su išdrožinėtais ragais", lv: "Kaula svilpes ar grebtiem ragiem" },
  "Attic grain-offerings": { en: "Attic grain-offerings", lt: "Palėpės grūdų aukos", lv: "Bēniņu graudu ziedojumi" },
  "Healing herb bundles": { en: "Healing herb bundles", lt: "Gydomųjų žolių ryšulėliai", lv: "Dziedniecības augu kūlīši" },
  "Carved wooden healing charms": { en: "Carved wooden healing charms", lt: "Drožinėti mediniai gydymo amuletai", lv: "Grebti koka dziedināšanas amuleti" },
  "Last-sheaf effigies": { en: "Last-sheaf effigies", lt: "Paskutinio pėdo skulptūros", lv: "Pēdējā kūļa tēli" },
  "Hollow linden offerings": { en: "Hollow linden offerings", lt: "Tuščiavidurės liepos aukos", lv: "Dobās liepas ziedojumi" },
  "Bark coins left on stumps": { en: "Bark coins left on stumps", lt: "Žievės monetos ant kelmų", lv: "Mizas monētas uz celmiem" },
  "Fishermen's votive offerings": { en: "Fishermen's votive offerings", lt: "Žvejų aukos", lv: "Zvejnieku ziedojumi" },
  "Clay brewing vessels": { en: "Clay brewing vessels", lt: "Moliniai alaus darymo indai", lv: "Māla alus brūvēšanas trauki" },
  "Cremation urn burials across Baltic region": { en: "Cremation urn burials across Baltic region", lt: "Kremavimo urnų kapinynai Baltijos regione", lv: "Kremācijas urnu kapulauki Baltijā" },
  "Distaff rituals": { en: "Distaff rituals", lt: "Verpstės apeigos", lv: "Vārpstas rituāli" },
  "First-flax offerings": { en: "First-flax offerings", lt: "Pirmųjų linų aukos", lv: "Pirmos linu ziedojumi" },
  "Linen wind-offerings on hilltops": { en: "Linen wind-offerings on hilltops", lt: "Lininės vėjo aukos piliakalniuose", lv: "Linu vēja ziedojumi pilskalnos" },
  "Wind-carved pine shrines": { en: "Wind-carved pine shrines", lt: "Vėjo išdrožinėtos pušų šventvietės", lv: "Vēja grebtās priežu svētvietas" },
  "Birch-bark offering bowls": { en: "Birch-bark offering bowls", lt: "Beržo žievės aukojimo dubenėliai", lv: "Bērza mizas ziedojumu bļodiņas" },
  "Candles floated on autumn springs": { en: "Candles floated on autumn springs", lt: "Rudens šaltiniuose plukdomos žvakės", lv: "Rudens avotos peldinātās sveces" },
  "Sap slow and sure": { en: "Sap slow and sure", lt: "Lėtai ir tvirtai tekanti sula", lv: "Lēna un droša sula" },
  "Resin drops, moss, quiet footsteps": { en: "Resin drops, moss, quiet footsteps", lt: "Saku lašai, samanos, tylūs žingsniai", lv: "Sveķu pilieni, sūnas, klusi soļi" },
  "Birch bark cups": { en: "Birch bark cups", lt: "Beržo žievės puodeliai", lv: "Bērza mizas trauciņi" },
  "Spruce resin seals": { en: "Spruce resin seals", lt: "Eglės saku spaudai", lv: "Egles sveķu zīmogi" },
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
  } else {
    const lowerLabel = labelText.trim().toLowerCase();
    for (const [k, map] of Object.entries(symbolLabelTranslations)) {
      if (k.toLowerCase() === lowerLabel) {
        labelText = map[language];
        break;
      }
    }
  }

  if (typeof symbol.detail === "string") {
    const raw = symbol.detail.trim();
    if (termTranslations[raw]) {
      detailText = termTranslations[raw][language];
    } else {
      const lowerRaw = raw.toLowerCase();
      let matched = false;
      for (const [englishTerm, localized] of Object.entries(termTranslations)) {
        if (englishTerm.toLowerCase() === lowerRaw) {
          detailText = localized[language];
          matched = true;
          break;
        }
      }

      if (!matched && language !== "en") {
        let replaced = raw;
        for (const [englishTerm, localized] of Object.entries(termTranslations)) {
          const regex = new RegExp(`\\b${englishTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, "gi");
          replaced = replaced.replace(regex, localized[language]);
        }
        detailText = replaced;
      }
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
