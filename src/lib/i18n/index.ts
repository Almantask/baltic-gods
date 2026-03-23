import { lt } from './lt'
import { en } from './en'
import { lv } from './lv'
import type { Translations } from './lt'

export type Lang = 'lt' | 'en' | 'lv'
export const defaultLang: Lang = 'lt'
export const supportedLangs: Lang[] = ['lt', 'lv', 'en']

const dictionaries: Record<Lang, Translations> = { lt, en, lv }

export function getDictionary(lang: Lang): Translations {
  return dictionaries[lang] ?? dictionaries[defaultLang]
}

export function isValidLang(lang: string): lang is Lang {
  return supportedLangs.includes(lang as Lang)
}

export type { Translations }
