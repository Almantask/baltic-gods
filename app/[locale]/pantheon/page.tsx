'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DeityCard from '@/components/ui/DeityCard';
import { deities, searchDeities, getDeitiesByDomain } from '@/lib/deities';
import { Deity } from '@/types';

export default function PantheonPage() {
  const t = useTranslations('pantheon');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [filteredDeities, setFilteredDeities] = useState<Deity[]>(deities);

  useEffect(() => {
    let result = deities;

    if (searchQuery) {
      result = searchDeities(searchQuery);
    } else if (selectedDomain !== 'all') {
      result = getDeitiesByDomain(selectedDomain);
    }

    setFilteredDeities(result);
  }, [selectedDomain, searchQuery]);

  const domains = [
    { key: 'all', label: t('filters.all') },
    { key: 'celestial', label: t('filters.celestial') },
    { key: 'forest', label: t('filters.forest') },
    { key: 'water', label: t('filters.water') },
    { key: 'earth', label: t('filters.earth') },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32">
                {/* Search */}
                <div className="glass-panel p-6 rounded-lg mb-6">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('search')}
                    className="w-full px-4 py-3 bg-moss-green/20 border border-moss-green/30 rounded-md text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors"
                  />
                </div>

                {/* Domain Filters */}
                <div className="glass-panel p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-serif text-amber-gold mb-4">
                    Domains
                  </h3>
                  <div className="space-y-2">
                    {domains.map((domain) => (
                      <button
                        key={domain.key}
                        onClick={() => {
                          setSelectedDomain(domain.key);
                          setSearchQuery('');
                        }}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                          selectedDomain === domain.key
                            ? 'bg-amber-gold/20 text-amber-gold'
                            : 'text-amber-warm hover:bg-moss-green/20'
                        }`}
                      >
                        {domain.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quote Card */}
                <div className="glass-panel p-6 rounded-lg">
                  <p className="text-amber-warm italic text-sm leading-relaxed">
                    "In the ancient groves where oak and ash entwine, the old
                    gods still whisper to those who listen."
                  </p>
                  <p className="text-amber-warm/60 text-xs mt-4">
                    — Baltic Proverb
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h1 className="text-6xl md:text-7xl font-serif text-amber-gold mb-4">
                  {t('title')}
                </h1>
                <p className="text-2xl italic text-amber-warm/80">
                  {t('subtitle')}
                </p>
              </div>

              {filteredDeities.length === 0 ? (
                <div className="glass-panel p-12 rounded-lg text-center">
                  <p className="text-xl text-amber-warm/60">
                    No deities found matching your search.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDeities.map((deity, index) => {
                    const size =
                      index === 0
                        ? 'large'
                        : index % 5 === 0
                        ? 'large'
                        : 'small';
                    return (
                      <DeityCard
                        key={deity.id}
                        deity={deity}
                        size={size}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
