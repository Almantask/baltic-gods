'use client';

import Link from "next/link";
import { DeityCard } from "@/components/DeityCard";
import { SacredMap } from "@/components/SacredMap";
import { SearchSection } from "@/components/SearchSection";
import { allLocations, deities } from "@/content/deities";
import { useTranslation } from "@/lib/i18n";

const heroBackground =
  "linear-gradient(180deg, rgba(5,7,8,0.6), rgba(5,7,8,0.9)), url(https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80)";

export default function Home() {
  const { strings } = useTranslation();
  const featured = deities.filter((d) =>
    ["perkunas", "saule", "laima"].includes(d.meta.slug),
  );

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
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
              Baltic Gods
            </p>
            <h1 className="mt-4 text-5xl font-semibold text-amber-50 sm:text-6xl lg:text-7xl">
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

      <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
            {strings.home.featured}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {featured.map((entry, idx) => (
              <DeityCard
                key={entry.meta.slug}
                deity={entry.meta}
                size={idx === 0 ? "lg" : "md"}
                highlight={idx === 0}
              />
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-black/60 to-zinc-900/60 p-6 shadow-xl">
          <h3 className="text-2xl font-semibold text-amber-100">
            {strings.home.atlas}
          </h3>
          <p className="mt-2 text-sm text-zinc-200">
            Amber markers glow where ley lines surface between Lithuania and Latvia.
          </p>
          <div className="mt-4">
            <SacredMap locations={allLocations.slice(0, 6)} compact />
          </div>
        </div>
      </section>

      <SearchSection />

      <footer className="rounded-3xl border border-white/10 bg-gradient-to-r from-black/70 via-zinc-900/60 to-black/70 px-8 py-10 text-center shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
          {strings.footer.closing}
        </p>
        <p className="mt-3 text-lg text-zinc-200">
          Ceremony lives in every step between dune and pine. Return often; maps shift with mist.
        </p>
      </footer>
    </div>
  );
}
