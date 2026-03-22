import { lt } from './lt'
import { en } from './en'
import type { Translations } from './lt'

export type Lang = 'lt' | 'en'
export const defaultLang: Lang = 'lt'
export const supportedLangs: Lang[] = ['lt', 'en']

const dictionaries: Record<Lang, Translations> = { lt, en }

export function getDictionary(lang: Lang): Translations {
  return dictionaries[lang] ?? dictionaries[defaultLang]
}

export type { Translations }
