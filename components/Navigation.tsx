'use client';

import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/i18n';

export default function Navigation() {
  const t = useTranslations('nav');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as Locale;

  const getLocalizedPath = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-xl font-bold hover:text-amber-200 transition">
              ⚡ Baltic Gods
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href={`/${locale}`} className="hover:text-amber-200 transition">
                {t('home')}
              </Link>
              <Link href={`/${locale}/pantheon`} className="hover:text-amber-200 transition">
                {t('pantheon')}
              </Link>
              <Link href={`/${locale}/map`} className="hover:text-amber-200 transition">
                {t('map')}
              </Link>
              <Link href={`/${locale}/contact`} className="hover:text-amber-200 transition">
                {t('contact')}
              </Link>
            </div>
          </div>
          <div className="flex space-x-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={getLocalizedPath(loc)}
                className={`px-3 py-1 rounded transition ${
                  loc === locale
                    ? 'bg-amber-700 text-amber-50'
                    : 'hover:bg-amber-800 text-amber-200'
                }`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
