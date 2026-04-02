"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { SacredMap } from "@/components/SacredMap";
import { LeyIndexCard } from "@/components/LeyIndexCard";
import { useTranslation } from "@/lib/i18n";
import { searchLocations } from "@/lib/search";
import { haversineDistance, NEAR_ME_RADIUS_KM } from "@/lib/geo";
import type { SiteCategory } from "@/types/content";

export default function MapPage() {
  const { language, strings } = useTranslation();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [hiddenCategories, setHiddenCategories] = useState<Set<SiteCategory>>(new Set());
  const [nearMeActive, setNearMeActive] = useState(false);
  const [nearMeLoading, setNearMeLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const filtered = useMemo(() => searchLocations(query, language), [language, query]);

  const nearFiltered = useMemo(() => {
    if (!nearMeActive || !userLocation) return filtered;
    return filtered.filter(
      (loc) => haversineDistance(userLocation, loc.coordinates) <= NEAR_ME_RADIUS_KM,
    );
  }, [filtered, nearMeActive, userLocation]);

  const visibleLocations = useMemo(
    () => hiddenCategories.size === 0
      ? nearFiltered
      : nearFiltered.filter((loc) => !hiddenCategories.has(loc.siteType)),
    [nearFiltered, hiddenCategories],
  );

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

  const handleNearMeClick = useCallback(() => {
    if (nearMeActive) {
      setNearMeActive(false);
      return;
    }

    if (userLocation) {
      setNearMeActive(true);
      return;
    }

    setNearMeLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
        setNearMeActive(true);
        setNearMeLoading(false);
      },
      () => {
        setNearMeLoading(false);
      },
    );
  }, [nearMeActive, userLocation]);

  const selectedLocation = visibleLocations.find((loc) => loc.id === selected);
  const effectiveSelected = selectedLocation ? selected : undefined;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
          {strings.map.legend}
        </p>
        <h1 className="text-4xl font-semibold text-amber-50">{strings.map.title}</h1>
        <p className="text-zinc-300">{strings.map.markerAction}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-3">
          <label className="block text-sm text-zinc-200">
            <span>{strings.map.searchPlaceholder}</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Ridge, dune, spring..."
            />
          </label>
          <SacredMap
            locations={nearFiltered}
            selectedLocationId={effectiveSelected}
            onSelect={(loc) => setSelected(loc.id)}
            allowNavigate
            hiddenCategories={hiddenCategories}
            onToggleCategory={toggleCategory}
            nearMeActive={nearMeActive}
            nearMeLoading={nearMeLoading}
            onNearMeClick={handleNearMeClick}
            userLocation={userLocation}
          />
        </div>
        <aside className="glass flex flex-col gap-4 rounded-3xl p-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              {strings.map.legend}
            </p>
            <div className="mt-3 space-y-2 text-sm text-zinc-200">
              {visibleLocations.map((loc) => (
                <LeyIndexCard
                  key={loc.id}
                  location={loc}
                  isSelected={effectiveSelected === loc.id}
                  onClick={() => setSelected(loc.id)}
                  showDescription={false}
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              {strings.map.coordinates}
            </p>
            {selectedLocation ? (
              <div className="mt-2 space-y-1">
                <p className="text-amber-100">{selectedLocation.name}</p>
                <p className="text-zinc-300">
                  {selectedLocation.coordinates[0].toFixed(3)}°N ·{" "}
                  {selectedLocation.coordinates[1].toFixed(3)}°E
                </p>
                <p className="text-zinc-400">{selectedLocation.significance}</p>
              </div>
            ) : (
              <p className="mt-2 text-zinc-400">{strings.map.selectMarker}</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
