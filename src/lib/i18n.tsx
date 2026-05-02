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
