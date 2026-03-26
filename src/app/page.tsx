'use client';

import Link from "next/link";
import { DeityCard } from "@/components/DeityCard";
import { deities } from "@/content/deities";
import { getLocationPoints } from "@/content/locations";
import { useTranslation } from "@/lib/i18n";

const heroBackground =
  "linear-gradient(180deg, rgba(5,7,8,0.6), rgba(5,7,8,0.9)), url(https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80)";

export default function Home() {
  const { language, strings } = useTranslation();
  const featured = deities.filter((d) =>
    ["perkunas", "saule", "laima"].includes(d.meta.slug),
  );
  const featuredLocations = getLocationPoints(language).slice(0, 4);

  return (
    <div className="flex flex-col gap-12">
      <section
        className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-16 shadow-2xl"
        style={{
          backgroundImage: heroBackground,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold text-amber-50 sm:text-6xl lg:text-7xl">
              {strings.home.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-xl italic text-zinc-200">
              {strings.home.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/pantheon"
              className="rounded-full border border-amber-200/40 bg-amber-200/20 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:bg-amber-200/30"
            >
              {strings.home.ctaPantheon}
            </Link>
            <Link
              href="/map"
              className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-50 transition hover:border-amber-200/30"
            >
              {strings.home.ctaMap}
            </Link>
            <Link
              href="/field-report"
              className="rounded-full border border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-amber-200/40"
            >
              {strings.home.ctaField}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
          {strings.home.featured}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry, idx) => (
            <DeityCard
              key={entry.meta.slug}
              deity={entry.meta}
              highlight={idx === 0}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
          {strings.home.featuredLocations}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredLocations.map((loc) => (
            <div
              key={loc.id}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-black/60 to-zinc-900/60 p-5 shadow-lg transition hover:border-amber-200/30"
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-300/80">
                {loc.siteType}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-amber-50 group-hover:text-amber-200 transition">
                {loc.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">{loc.region}</p>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-300">
                {loc.description}
              </p>
              <div className="mt-3 flex justify-end">
                <Link
                  href={`/locations/${loc.id}`}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-amber-50 transition hover:border-amber-200/40"
                >
                  {strings.actions.more}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
