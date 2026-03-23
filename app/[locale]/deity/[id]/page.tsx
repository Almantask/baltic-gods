'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getDeityById } from '@/lib/deities';
import { notFound } from 'next/navigation';

const MapComponent = dynamic(
  () => import('@/components/map/MapComponent'),
  { ssr: false }
);

interface DeityPageProps {
  params: {
    id: string;
  };
}

export default function DeityPage({ params }: DeityPageProps) {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const selectedLocationId = searchParams.get('location');

  const deity = getDeityById(params.id);

  if (!deity) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="glass-panel p-12 rounded-lg">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider text-moss-light">
                {deity.domain}
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-serif text-amber-gold mb-4">
              {deity.name}
            </h1>

            <p className="text-3xl italic text-amber-warm mb-8">
              {deity.title}
            </p>

            <p className="text-xl text-amber-warm/80 leading-relaxed max-w-4xl">
              {deity.description}
            </p>
          </div>
        </section>

        {/* Symbolism Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-serif text-amber-gold mb-6">
            Sacred Symbols
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deity.symbolism.map((symbol) => (
              <div
                key={symbol}
                className="glass-panel p-6 rounded-lg text-center"
              >
                <p className="text-lg text-amber-warm">{symbol}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lore Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="glass-panel p-12 rounded-lg">
            <h2 className="text-4xl font-serif text-amber-gold mb-6">
              Ancient Lore
            </h2>
            <p className="text-lg text-amber-warm/90 leading-relaxed">
              {deity.lore}
            </p>
          </div>
        </section>

        {/* Sacred Geography */}
        {deity.locations.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="text-4xl font-serif text-amber-gold mb-6">
              Sacred Geography
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="glass-panel p-4 rounded-lg">
                  <div className="h-[500px]">
                    <MapComponent
                      locations={deity.locations}
                      selectedLocation={selectedLocationId}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-amber-gold mb-4">
                    Points of Interest
                  </h3>
                  <div className="space-y-4">
                    {deity.locations.map((location) => (
                      <div
                        key={location.id}
                        className={`p-4 rounded-md transition-colors ${
                          selectedLocationId === location.id
                            ? 'bg-amber-gold/20 border border-amber-gold/50'
                            : 'bg-moss-green/10 hover:bg-moss-green/20'
                        }`}
                      >
                        <h4 className="text-amber-gold font-semibold mb-1">
                          {location.name}
                        </h4>
                        <p className="text-sm text-amber-warm/70 mb-2">
                          {location.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-amber-warm/50">
                          <span>{location.type}</span>
                          <span>
                            {location.coordinates[0].toFixed(4)}°N,{' '}
                            {location.coordinates[1].toFixed(4)}°E
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}/map?location=${deity.locations[0]?.id}`}
                    className="mt-6 block w-full px-4 py-3 bg-amber-gold/20 hover:bg-amber-gold/30 text-amber-gold text-center rounded-md transition-colors"
                  >
                    View on Full Map
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Material Legacy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 rounded-lg">
            <h2 className="text-4xl font-serif text-amber-gold mb-6">
              Material Legacy
            </h2>
            <p className="text-lg text-amber-warm/70 mb-6">
              Archaeological findings and cultural artifacts related to {deity.name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-moss-green/20 rounded-lg flex items-center justify-center"
                >
                  <span className="text-amber-warm/40">Gallery Item {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
