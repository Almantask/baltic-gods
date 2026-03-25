"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SacredMap } from "@/components/SacredMap";
import { localizeLocation } from "@/content/locations";
import { deityBySlug } from "@/content/deities";
import { useTranslation } from "@/lib/i18n";
import type { LocationMeta } from "@/types/content";

export function LocationDetailContent({ meta }: { meta: LocationMeta }) {
  const { language, strings } = useTranslation();
  const location = useMemo(
    () => localizeLocation(meta, language),
    [meta, language],
  );
  const siteTypeLabel = strings.map.categories[location.siteType];
  const deityName = deityBySlug[location.deity]?.meta.name ?? location.deity;
  const regionLabel = location.region === "Lithuania"
    ? strings.location.lithuania
    : strings.location.latvia;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/map"
          className="text-sm font-semibold text-amber-200 transition hover:text-amber-100"
        >
          ← {strings.location.backToMap}
        </Link>
        <Link
          href={`/pantheon/${location.deity}`}
          className="rounded-full border border-amber-200/40 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100 transition hover:bg-amber-200/20"
        >
          {strings.location.viewDeity}
        </Link>
      </div>

      <section className="glass rounded-3xl p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200">
          {strings.location.pageTitle}
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-amber-50">{location.name}</h1>
        <p className="mt-2 text-lg text-zinc-200">{location.description}</p>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              {strings.location.region}
            </p>
            <p className="text-amber-100">{regionLabel}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              {strings.location.siteType}
            </p>
            <p className="text-amber-100">{siteTypeLabel}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              {strings.location.coordinates}
            </p>
            <p className="text-amber-100">
              {location.coordinates[0].toFixed(3)}°N · {location.coordinates[1].toFixed(3)}°E
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              {strings.location.deity}
            </p>
            <Link
              href={`/pantheon/${location.deity}`}
              className="text-amber-100 underline decoration-amber-200/60 underline-offset-4"
            >
              {deityName}
            </Link>
          </div>
        </div>
      </section>

      <section className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-semibold text-amber-100">
          {strings.location.significance}
        </h2>
        <p className="mt-2 text-zinc-200">{location.significance}</p>
      </section>

      <section className="glass rounded-3xl p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-amber-100">{strings.location.mapTitle}</h3>
            <p className="text-sm text-zinc-400">{strings.location.mapContext}</p>
          </div>
          <Link
            href="/map"
            className="text-sm text-amber-200 underline decoration-amber-200/60 underline-offset-4 transition hover:text-amber-100"
          >
            {strings.location.openMap}
          </Link>
        </div>
        <div className="mt-3">
          <SacredMap
            locations={[location]}
            selectedLocationId={location.id}
            allowNavigate={false}
            compact
          />
        </div>
      </section>
    </div>
  );
}
