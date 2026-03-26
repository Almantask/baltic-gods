'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { storyBySlug } from "@/content/stories";
import { deityBySlug } from "@/content/deities";
import { SacredMap } from "@/components/SacredMap";
import { getStoryLocations } from "@/lib/story-locations";
import { useTranslation } from "@/lib/i18n";
import type { LocationPoint } from "@/types/content";

export function StoryDetailContent({ slug }: { slug: string }) {
  const { language, strings } = useTranslation();
  const entry = storyBySlug[slug];
  const relatedLocations = useMemo<LocationPoint[]>(
    () => (entry ? getStoryLocations(entry.meta, language) : []),
    [entry, language],
  );
  const [manualSelectedId, setManualSelectedId] = useState<string | undefined>(undefined);
  const selectedLocationId = useMemo(() => {
    if (manualSelectedId && relatedLocations.some((loc) => loc.id === manualSelectedId)) {
      return manualSelectedId;
    }
    return relatedLocations[0]?.id;
  }, [manualSelectedId, relatedLocations]);

  if (!entry) return null;
  const { meta } = entry;

  const StoryContent = entry.contentByLang[language];

  return (
    <article className="flex flex-col gap-10">
      <header className="rounded-3xl border border-white/10 bg-gradient-to-b from-black/60 to-zinc-900/60 p-8 shadow-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
          {strings.stories.title}
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-amber-50 sm:text-5xl">
          {meta.title[language]}
        </h1>
        <p className="mt-4 max-w-2xl text-lg italic text-zinc-200">
          {meta.summary[language]}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 self-center">
            {strings.stories.beings}:
          </span>
          {meta.beings.map((beingSlug) => {
            const deity = deityBySlug[beingSlug];
            return (
              <Link
                key={beingSlug}
                href={`/pantheon/${beingSlug}`}
                className="rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs text-amber-100 transition hover:bg-amber-200/20"
              >
                {deity ? deity.meta.name : beingSlug}
              </Link>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 self-center">
            {strings.stories.locations}:
          </span>
          {meta.locations.map((loc) => (
            <span
              key={loc}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200"
            >
              {loc}
            </span>
          ))}
        </div>
      </header>

      <section className="glass rounded-3xl p-8">
        <div className="prose prose-invert max-w-3xl mx-auto">
          <StoryContent />
        </div>
      </section>

      {relatedLocations.length > 0 && (
        <section className="space-y-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
                {strings.stories.relatedLocations}
              </p>
              <h2 className="text-2xl font-semibold text-amber-50">
                {strings.stories.storyMapTitle}
              </h2>
              <p className="text-sm text-zinc-400">
                {strings.stories.storyMapDescription}
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {strings.map.markerAction}
            </span>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <SacredMap
                locations={relatedLocations}
                selectedLocationId={selectedLocationId}
                onSelect={(loc) => setManualSelectedId(loc.id)}
                allowNavigate
                hideLegend
              />
            </div>
            <aside className="glass flex flex-col gap-3 rounded-3xl p-5">
              {relatedLocations.map((loc) => {
                const isSelected = loc.id === selectedLocationId;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setManualSelectedId(loc.id)}
                    className={`cursor-pointer rounded-2xl border px-3 py-3 text-sm transition ${
                      isSelected
                        ? "border-amber-200/60 bg-amber-200/10 text-amber-50"
                        : "border-white/10 bg-white/5 text-zinc-200"
                    }`}
                  >
                    <p className="font-semibold">{loc.name}</p>
                    <p className="text-zinc-300">
                      {loc.region} · {loc.siteType}
                    </p>
                    <p className="text-zinc-400">{loc.description}</p>
                    <p className="text-xs text-zinc-500">
                      {loc.coordinates[0].toFixed(2)}°N · {loc.coordinates[1].toFixed(2)}°E
                    </p>
                    <div className="mt-2 flex justify-end">
                      <Link
                        href={`/locations/${loc.id}`}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-amber-50 transition hover:border-amber-200/40"
                      >
                        {strings.actions.more}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </aside>
          </div>
        </section>
      )}

      <div className="flex">
        <Link
          href="/stories"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.15em] text-amber-50 transition hover:border-amber-200/30"
        >
          ← Back to {strings.stories.title}
        </Link>
      </div>
    </article>
  );
}
