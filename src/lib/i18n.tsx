'use client';

import { createContext, useContext, useMemo, useState } from "react";
import type { Language } from "@/types/content";

type Dictionary = typeof translations.en;

const translations = {
  en: {
    languageLabel: "English",
    nav: { home: "Home", pantheon: "Pantheon", map: "Map", field: "Field Report" },
    home: {
      heroTitle: "Baltic Ethos: The Ancient Paths",
      subtitle: "Whispers in amber light, storms over moss, and every ley line between the Baltic pines.",
      seek: "Seek the Unseen",
      featured: "Featured Deities",
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
    },
    map: {
      title: "Sacred Map",
      legend: "The Ley Index",
      coordinates: "Coordinate Panel",
      markerAction: "Tap a marker to open the deity with context.",
      searchPlaceholder: "Search by location name",
      nearMe: "Near me",
      nearMeLoading: "Locating…",
      nearbyPlaceholder: "Search near a place…",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
    },
    field: {
      title: "Offer Your Wisdom",
      subtitle: "Submit a field note, a rumor, or coordinates where the old stories still flicker.",
      submit: "Send to the Archive",
      confirmation: "Your report hums through the trees. Archivists will trace the ley line.",
      mapCta: "Click to Mark the Ley Line",
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
    },
  },
  lt: {
    languageLabel: "Lietuvių",
    nav: { home: "Pradžia", pantheon: "Panteonas", map: "Žemėlapis", field: "Lauko įrašas" },
    home: {
      heroTitle: "Baltų etosas: senieji keliai",
      subtitle: "Gintaro šviesos kuždesiai, samanos audros ir visos linijos tarp Baltijos pušų.",
      seek: "Ieškok nematomo",
      featured: "Pažymėtos dievybės",
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
    },
    map: {
      title: "Šventas žemėlapis",
      legend: "Lėjų indeksas",
      coordinates: "Koordinačių skydas",
      markerAction: "Palieskite žymeklį, kad atidarytumėte dievybę su kontekstu.",
      searchPlaceholder: "Ieškoti vietovės pavadinimo",
      nearMe: "Šalia manęs",
      nearMeLoading: "Ieškoma…",
      nearbyPlaceholder: "Ieškoti šalia vietos…",
      zoomIn: "Priartinti",
      zoomOut: "Atitolinti",
    },
    field: {
      title: "Padovanokite išmintį",
      subtitle: "Pateikite lauko pastabą, gandą ar koordinates, kur dar rusena senos istorijos.",
      submit: "Siųsti į archyvą",
      confirmation: "Jūsų žinutė nuaidėjo tarp medžių. Archyvarai seks lėjos liniją.",
      mapCta: "Paspauskite pažymėti lėjos liniją",
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
    },
  },
  lv: {
    languageLabel: "Latviešu",
    nav: { home: "Sākums", pantheon: "Panteons", map: "Karte", field: "Lauka ziņojums" },
    home: {
      heroTitle: "Baltu ētoss: senie ceļi",
      subtitle: "Dzintara gaismas čuksti, sūnainas vētras un visas līnijas starp Baltijas priedēm.",
      seek: "Meklē neredzamo",
      featured: "Izcelti dievi",
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
    },
    map: {
      title: "Svētā karte",
      legend: "Lēju indekss",
      coordinates: "Koordinātu panelis",
      markerAction: "Nospiediet marķieri, lai atvērtu dievību ar kontekstu.",
      searchPlaceholder: "Meklēt pēc vietas nosaukuma",
      nearMe: "Pie manis",
      nearMeLoading: "Meklē…",
      nearbyPlaceholder: "Meklēt pie vietas…",
      zoomIn: "Pietuvināt",
      zoomOut: "Attālināt",
    },
    field: {
      title: "Sniedziet gudrību",
      subtitle: "Iesniedziet lauka piezīmi, baumas vai koordinātas, kur senie stāsti vēl dzirkstī.",
      submit: "Nosūtīt uz arhīvu",
      confirmation: "Jūsu ziņa trīc kokos. Arhivāri sekos lēju līnijai.",
      mapCta: "Klikšķiniet, lai atzīmētu lēju līniju",
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

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

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
