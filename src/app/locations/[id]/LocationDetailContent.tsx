"use client";

import Link from "next/link";
import { useMemo } from "react";
import { SacredMap } from "@/components/SacredMap";
import { locationEntryById, findLocationPoint } from "@/content/locations";
import { deityBySlug } from "@/content/deities";
import { auraPalette } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export function LocationDetailContent({ id }: { id: string }) {
  const { language, strings } = useTranslation();
  const entry = locationEntryById[id];
  const meta = entry?.meta;

  const location = useMemo(
    () => (meta ? findLocationPoint(id, language) : undefined),
    [id, language, meta],
  );

  if (!entry || !meta || !location) {
    return null;
  }

  const deity = deityBySlug[meta.deity];
  const aura = auraPalette[meta.aura];
  const coordinates = `${meta.coordinates[0].toFixed(3)}°N · ${meta.coordinates[1].toFixed(3)}°E`;
  const LocationContent = entry.contentByLang[language] ?? entry.Content;

  return (
    <div className="space-y-6">
      <section
        className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-12 shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(130deg, rgba(5,7,8,0.92), rgba(5,7,8,0.86)), radial-gradient(circle at 12% 18%, ${aura}33, transparent 38%), radial-gradient(circle at 80% 10%, ${aura}24, transparent 32%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-amber-100">
              {strings.location.overview}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-amber-50">
              {meta.siteType}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              {meta.region}
            </span>
          </div>
          <h1 className="text-4xl font-semibold text-amber-50 sm:text-5xl">
            {location.name}
          </h1>
          <p className="max-w-3xl text-lg text-zinc-200">
            {meta.description[language] ?? meta.description.en}
          </p>
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-zinc-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {strings.location.coordinates}: {coordinates}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 capitalize">
              {strings.location.aura}: {meta.aura}
            </span>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-amber-100">
              {strings.location.significance}
            </h2>
            <p className="mt-3 text-zinc-200">
              {meta.significance[language] ?? meta.significance.en}
            </p>
          </div>
          <div className="glass rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-amber-100">
              {strings.location.lore}
            </h2>
            <div className="mt-3 prose prose-invert max-w-none">
              <LocationContent />
            </div>
          </div>
        </div>
        <div className="glass flex flex-col gap-3 rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-amber-100">
            {strings.location.overview}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
              <p className="text-amber-100">{strings.location.region}</p>
              <p>{meta.region}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
              <p className="text-amber-100">{strings.location.siteType}</p>
              <p>{meta.siteType}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
              <p className="text-amber-100">{strings.location.coordinates}</p>
              <p>{coordinates}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
              <p className="text-amber-100">{strings.location.deityLink}</p>
              <p>{deity?.meta.name ?? meta.deity}</p>
            </div>
          </div>
          {deity && (
            <Link
              href={`/pantheon/${deity.meta.slug}?location=${meta.id}`}
              className="inline-flex items-center justify-center rounded-full border border-amber-200/50 bg-amber-200/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-200/20"
            >
              {strings.location.openDeity}
            </Link>
          )}
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-amber-100">
            {strings.location.mapPreview}
          </h3>
          <Link
            href="/map"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-amber-50 transition hover:border-amber-200/40"
          >
            {strings.location.backToMap}
          </Link>
        </div>
        <div className="mt-4">
          <SacredMap
            locations={[location]}
            selectedLocationId={location.id}
            compact
            allowNavigate={false}
          />
        </div>
      </div>
    </div>
  );
}
