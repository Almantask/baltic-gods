"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { SacredMap } from "@/components/SacredMap";
import { LeyIndexCard } from "@/components/LeyIndexCard";
import { deityBySlug } from "@/content/deities";
import { findLocationPoint } from "@/content/locations";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import type { Domain, LocationPoint, SiteCategory } from "@/types/content";

const domainKey: Record<Domain, "domainGod" | "domainCreature" | "domainPerson"> = {
  God: "domainGod",
  Creature: "domainCreature",
  Person: "domainPerson",
};

export function DeityDetailContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const { language, strings } = useTranslation();
  const entry = deityBySlug[slug];
  const [hiddenCategories, setHiddenCategories] = useState<Set<SiteCategory>>(new Set());

  const toggleCategory = useCallback((category: SiteCategory) => {
    setHiddenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  const [manualSelectedId, setManualSelectedId] = useState<string | undefined>(undefined);

  const locations = useMemo<LocationPoint[]>(
    () => entry
      ? entry.meta.locations
        .map((loc) => findLocationPoint(loc.id, language, loc))
        .filter((loc): loc is LocationPoint => Boolean(loc))
      : [],
    [entry, language],
  );

  const visibleLocations = useMemo(
    () => hiddenCategories.size === 0
      ? locations
      : locations.filter((loc) => !hiddenCategories.has(loc.siteType)),
    [hiddenCategories, locations],
  );

  if (!entry) {
    return null;
  }

  const requestedLocation = searchParams.get("location") ?? undefined;
  const selectedLocationId = manualSelectedId || (locations.some((l) => l.id === requestedLocation)
    ? requestedLocation
    : locations[0]?.id);
  const selectedLocation = locations.find((loc) => loc.id === selectedLocationId);

  return (
    <div className="space-y-8">
      <section
        className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-12 shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(5,7,8,0.8), rgba(5,7,8,0.9)), url(${entry.meta.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-100">
              {strings.pantheon[domainKey[entry.meta.domain]]}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              {entry.meta.altNames.lt} · {entry.meta.altNames.lv}
            </span>
          </div>
          <h1 className="text-5xl font-semibold text-amber-50">{entry.meta.name}</h1>
          <p className="text-xl italic text-zinc-200">{entry.meta.epithet[language]}</p>
          <p className="max-w-3xl text-zinc-200">{entry.meta.summary[language]}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-300">
            {entry.meta.keywords.map((word) => (
              <span
                key={word}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-amber-100">{strings.deity.lore}</h2>
          <div className="mt-3 space-y-4 leading-relaxed text-zinc-200 [&>h2]:text-amber-100 [&>h2]:text-xl [&>h3]:text-amber-100 [&>h3]:text-lg">
            {(() => { const LangContent = entry.contentByLang[language] ?? entry.Content; return <LangContent />; })()}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="glass rounded-3xl p-5">
            <h3 className="text-lg font-semibold text-amber-100">{strings.deity.symbolicCards}</h3>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              {entry.meta.symbols.map((symbol) => (
                <div
                  key={symbol.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-zinc-200"
                >
                  <p className="text-amber-100">{symbol.label}</p>
                  <p className="text-zinc-300">{symbol.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-5">
            <h3 className="text-lg font-semibold text-amber-100">{strings.deity.materialLegacy}</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {entry.meta.materialLegacy.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-amber-100">{strings.deity.sacredGeography}</h3>
            <p className="text-sm text-zinc-400">{strings.deity.clickMarkers}</p>
          </div>
          <div className="mt-3">
            <SacredMap
              locations={locations}
              selectedLocationId={selectedLocationId}
              onSelect={(loc) => setManualSelectedId(loc.id)}
              allowNavigate
              hiddenCategories={hiddenCategories}
              onToggleCategory={toggleCategory}
            />
          </div>
        </div>
        <aside className="glass flex flex-col gap-3 rounded-3xl p-5">
          <h4 className="text-lg font-semibold text-amber-100">{strings.deity.relatedLocations}</h4>
          {visibleLocations.map((loc) => (
            <LeyIndexCard
              key={loc.id}
              location={loc}
              isSelected={loc.id === selectedLocationId}
              onClick={() => setManualSelectedId(loc.id)}
            />
          ))}
        </aside>
      </div>

      <div className="glass rounded-3xl p-6">
        <h3 className="text-2xl font-semibold text-amber-100">{strings.deity.gallery}</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {entry.meta.gallery.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
            >
              <p className="text-amber-100">{item.title}</p>
              <p className="text-zinc-300">{item.medium}</p>
              <p className="text-zinc-400">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-black/70 via-zinc-900/50 to-black/70 px-6 py-6 text-center text-sm text-zinc-300">
        {strings.deity.arrivedViaMap} {selectedLocation?.name ?? strings.deity.none}.
      </div>
    </div>
  );
}
