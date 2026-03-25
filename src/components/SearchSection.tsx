'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { getLocations } from "@/content/locations";
import { searchLocations, filterDeities } from "@/lib/search";
import { useTranslation } from "@/lib/i18n";
import type { Domain } from "@/types/content";

const domainKey: Record<Domain, "domainGod" | "domainCreature" | "domainPerson"> = {
  God: "domainGod",
  Creature: "domainCreature",
  Person: "domainPerson",
};

export function SearchSection() {
  const { language, strings } = useTranslation();
  const [deityQuery, setDeityQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const localizedLocations = useMemo(() => getLocations(language), [language]);

  const deityMatches = useMemo(
    () => filterDeities({ query: deityQuery }).slice(0, 4),
    [deityQuery],
  );

  const locationMatches = useMemo(
    () => searchLocations(locationQuery, language, localizedLocations).slice(0, 5),
    [locationQuery, language, localizedLocations],
  );

  const empty = !deityQuery && !locationQuery;

  return (
    <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-900/30 to-black/70 p-10 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
            {strings.home.seek}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-amber-50">
            {strings.home.results}
          </h2>
          <p className="mt-2 max-w-xl text-zinc-200">
            {strings.home.subtitle}
          </p>
        </div>
        <div className="grid w-full max-w-xl grid-cols-1 gap-4">
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.home.deityPrompt}</span>
            <input
              value={deityQuery}
              onChange={(e) => setDeityQuery(e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder={strings.home.deityPlaceholder}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.home.locationPrompt}</span>
            <input
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder={strings.home.locationPlaceholder}
            />
          </label>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-amber-100">{strings.search.deities}</h3>
            <span className="text-xs text-zinc-400">{deityMatches.length}</span>
          </div>
          <div className="mt-3 space-y-3">
            {deityMatches.map((entry) => (
              <Link
                key={entry.meta.slug}
                href={`/pantheon/${entry.meta.slug}`}
                className="flex items-start justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-zinc-100 transition hover:border-amber-200/40"
              >
                <div>
                  <p className="font-semibold text-amber-100">{entry.meta.name}</p>
                  <p className="text-zinc-300">{entry.meta.epithet[language]}</p>
                </div>
                <span className="rounded-full bg-white/5 px-2 py-1 text-[0.7rem] uppercase">
                  {strings.pantheon[domainKey[entry.meta.domain]]}
                </span>
              </Link>
            ))}
            {!empty && deityMatches.length === 0 && (
              <p className="text-sm text-zinc-400">{strings.search.noDeities}</p>
            )}
            {empty && (
              <p className="text-sm text-zinc-400">
                {strings.search.emptyPrompt}
              </p>
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-amber-100">{strings.search.locations}</h3>
            <span className="text-xs text-zinc-400">{locationMatches.length}</span>
          </div>
          <div className="mt-3 space-y-3">
            {locationMatches.map((loc) => (
              <Link
                key={loc.id}
                href={`/locations/${loc.id}`}
                className="block rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-zinc-100 transition hover:border-amber-200/40"
              >
                <p className="font-semibold text-amber-100">{loc.name}</p>
                <p className="text-zinc-300">
                  {loc.region} · {strings.map.categories[loc.siteType]}
                </p>
                <p className="text-zinc-400">{loc.description}</p>
              </Link>
            ))}
            {!empty && locationMatches.length === 0 && (
              <p className="text-sm text-zinc-400">{strings.search.noLocations}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
