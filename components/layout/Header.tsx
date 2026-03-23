'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('pantheon'), href: `/${locale}/pantheon` },
    { name: t('map'), href: `/${locale}/map` },
    { name: t('fieldReport'), href: `/${locale}/field-report` },
  ];

  const locales = [
    { code: 'en', name: 'EN' },
    { code: 'lt', name: 'LT' },
    { code: 'lv', name: 'LV' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-moss-green/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href={`/${locale}`}
            className="text-2xl font-serif text-amber-gold hover:text-amber-glow transition-colors"
          >
            Baltic Gods
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-amber-warm hover:text-amber-glow transition-colors text-sm uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={pathname.replace(`/${locale}`, `/${loc.code}`)}
                  className={`px-2 py-1 text-xs ${
                    locale === loc.code
                      ? 'text-amber-gold border-b border-amber-gold'
                      : 'text-amber-warm hover:text-amber-glow'
                  } transition-colors`}
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
