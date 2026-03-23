import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'lt', 'lv'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
