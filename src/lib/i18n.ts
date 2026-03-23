export type Locale = 'en' | 'lt' | 'lv'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'lt', 'lv']

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.home': 'HOME',
    'nav.pantheon': 'PANTHEON',
    'nav.map': 'MAP',
    'home.title': 'Baltic Ethos: The Ancient Paths',
    'home.subtitle': 'Where ancient spirits walk between the pines and amber shores...',
    'home.cta.pantheon': 'Enter the Pantheon',
    'home.cta.map': 'View Sacred Map',
    'pantheon.title': 'The Pantheon',
    'pantheon.subtitle': 'Guardians of the ancient Baltic realm, woven into the forests, skies, and sacred rivers.',
    'footer.archive': 'The Archive',
    'footer.rights': 'MMXXIV THE LIVING RELIC ARCHIVE',
    'footer.groves': 'Sacred Groves',
    'footer.circles': 'Ritual Circles',
    'footer.sages': 'Elder Sages',
  },
  lt: {
    'nav.home': 'PRADŽIA',
    'nav.pantheon': 'PANTEONAS',
    'nav.map': 'ŽEMĖLAPIS',
    'home.title': 'Baltų Etosas: Senieji Keliai',
    'home.subtitle': 'Kur senovės dvasios vaikšto tarp pušų ir gintaro krantų...',
    'home.cta.pantheon': 'Įeiti į Panteoną',
    'home.cta.map': 'Žiūrėti Šventą Žemėlapį',
    'pantheon.title': 'Panteonas',
    'pantheon.subtitle': 'Senojo baltų pasaulio sergėtojai, įpinti į miškus, dangų ir šventąsias upes.',
    'footer.archive': 'Archyvas',
    'footer.rights': 'MMXXIV GYVOJI RELIKVIJŲ ARCHYVAS',
    'footer.groves': 'Šventieji Giraitės',
    'footer.circles': 'Ritualiniai Ratai',
    'footer.sages': 'Senoliai Išminčiai',
  },
  lv: {
    'nav.home': 'SĀKUMS',
    'nav.pantheon': 'PANTEONS',
    'nav.map': 'KARTE',
    'home.title': 'Baltu Ētoss: Senās Takas',
    'home.subtitle': 'Kur senie gari staigā starp priedēm un dzintara krastiem...',
    'home.cta.pantheon': 'Ieiet Panteonā',
    'home.cta.map': 'Skatīt Svēto Karti',
    'pantheon.title': 'Panteona',
    'pantheon.subtitle': 'Senās baltu pasaules sargi, ieausti mežos, debesīs un svētajās upēs.',
    'footer.archive': 'Arhīvs',
    'footer.rights': 'MMXXIV DZĪVO RELIKVIJU ARHĪVS',
    'footer.groves': 'Svētās Birzis',
    'footer.circles': 'Rituālie Apļi',
    'footer.sages': 'Vecākie Gudrie',
  },
}

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key
}
