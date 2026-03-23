'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DeityCard from '@/components/ui/DeityCard';
import SearchBar from '@/components/ui/SearchBar';
import { getFeaturedDeities } from '@/lib/deities';

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const featuredDeities = getFeaturedDeities();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    window.location.href = `/${locale}/pantheon?search=${query}`;
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/50 to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkNGEzZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif text-amber-gold mb-6 text-shadow-glow">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl italic text-amber-warm mb-12">
            {t('hero.subtitle')}
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href={`/${locale}/pantheon`}
              className="px-8 py-4 bg-amber-gold text-background font-semibold rounded-lg hover:bg-amber-glow transition-colors"
            >
              Explore Pantheon
            </Link>
            <Link
              href={`/${locale}/map`}
              className="px-8 py-4 glass-panel text-amber-warm font-semibold rounded-lg hover:border-amber-gold/50 transition-colors"
            >
              View Sacred Map
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-amber-warm/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Deities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-5xl md:text-6xl font-serif text-amber-gold mb-4 text-center">
          The Guardians
        </h2>
        <p className="text-xl italic text-amber-warm/80 text-center mb-16">
          Meet the divine beings who shaped the Baltic lands
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDeities.map((deity) => (
            <DeityCard key={deity.id} deity={deity} size="medium" />
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="glass-panel rounded-lg p-12 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-amber-gold mb-4">
            {t('search.title')}
          </h2>
          <p className="text-xl italic text-amber-warm/80 mb-8">
            Discover hidden lore and sacred places
          </p>

          <div className="max-w-3xl mx-auto">
            <SearchBar
              placeholder={t('search.placeholder')}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Sacred Atlas Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-5xl md:text-6xl font-serif text-amber-gold mb-4 text-center">
          {t('atlas.title')}
        </h2>
        <p className="text-xl italic text-amber-warm/80 text-center mb-16">
          {t('atlas.subtitle')}
        </p>

        <Link
          href={`/${locale}/map`}
          className="block glass-panel rounded-lg p-12 hover:border-amber-gold/50 transition-all group"
        >
          <div className="aspect-video bg-moss-green/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-24 h-24 text-amber-gold/50 mx-auto mb-4 group-hover:text-amber-gold transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-amber-warm text-lg">
                Click to explore the sacred map
              </p>
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
