'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllLocations } from '@/lib/deities';

const MapComponent = dynamic(
  () => import('@/components/map/MapComponent'),
  { ssr: false }
);

export default function MapPage() {
  const t = useTranslations('map');
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(
    searchParams.get('location')
  );
  const [zoomLevel, setZoomLevel] = useState(7);

  const locations = getAllLocations();

  const handleLocationClick = (locationId: string) => {
    const location = locations.find((loc) => loc.id === locationId);
    if (location) {
      router.push(`/${locale}/deity/${location.deityId}?location=${locationId}`);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-serif text-amber-gold mb-4">
              {t('title')}
            </h1>
            <p className="text-xl italic text-amber-warm/80">
              Explore the sacred sites across Lithuania and Latvia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-3">
              <div className="glass-panel p-4 rounded-lg">
                <div className="h-[600px]">
                  <MapComponent
                    locations={locations}
                    selectedLocation={selectedLocation}
                    onLocationClick={handleLocationClick}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Legend */}
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-amber-gold mb-4">
                    {t('legend')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-amber-gold rounded-full"></div>
                      <span className="text-amber-warm text-sm">
                        Sacred Site
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-amber-glow rounded-full animate-pulse"></div>
                      <span className="text-amber-warm text-sm">
                        Selected Location
                      </span>
                    </div>
                  </div>
                </div>

                {/* Zoom Controls */}
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-amber-gold mb-4">
                    Controls
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(z + 1, 15))}
                      className="w-full px-4 py-2 bg-moss-green/20 hover:bg-moss-green/30 text-amber-warm rounded-md transition-colors"
                    >
                      Zoom In +
                    </button>
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(z - 1, 5))}
                      className="w-full px-4 py-2 bg-moss-green/20 hover:bg-moss-green/30 text-amber-warm rounded-md transition-colors"
                    >
                      Zoom Out -
                    </button>
                  </div>
                </div>

                {/* Coordinates Panel */}
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-amber-gold mb-4">
                    {t('coordinates')}
                  </h3>
                  <div className="text-sm text-amber-warm/60">
                    <p>Center: 55.5°N, 24.5°E</p>
                    <p className="mt-2">
                      {locations.length} sacred sites mapped
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
