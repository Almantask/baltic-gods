'use client';

import { useMemo, useState } from "react";
import { DeityCard } from "@/components/DeityCard";
import { useTranslation } from "@/lib/i18n";
import { filterDeities } from "@/lib/search";
import type { Domain } from "@/types/content";

const domainOrder: Domain[] = ["God", "Creature", "Person"];
const domainKey: Record<Domain, "domainGod" | "domainCreature" | "domainPerson"> = {
  God: "domainGod",
  Creature: "domainCreature",
  Person: "domainPerson",
};

export default function PantheonPage() {
  const { strings } = useTranslation();
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<Domain | undefined>(undefined);

  const filtered = useMemo(
    () => filterDeities({ query, domain }),
    [query, domain],
  );

  const ordered = useMemo(() => {
    const priority = ["medine", "perkunas", "zemyna", "bangputys"];
    return [...filtered].sort((a, b) => {
      const aIdx = priority.indexOf(a.meta.slug);
      const bIdx = priority.indexOf(b.meta.slug);
      if (aIdx !== -1 || bIdx !== -1) {
        return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
      }
      return a.meta.name.localeCompare(b.meta.name);
    });
  }, [filtered]);

  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <aside className="glass rounded-3xl p-6">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
          {strings.pantheon.title}
        </p>
        <p className="mt-2 text-zinc-200">{strings.pantheon.intro}</p>
        <label className="mt-4 block text-sm text-zinc-200">
          <span>{strings.pantheon.searchPlaceholder}</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
            placeholder="Thunder, fate, earth..."
          />
        </label>
        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            {strings.pantheon.filters}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setDomain(undefined)}
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.15em] transition ${
                !domain
                  ? "border-amber-200/60 bg-amber-200/15 text-amber-100"
                  : "border-white/15 bg-white/5 text-zinc-300 hover:border-amber-200/30"
              }`}
            >
              {strings.pantheon.all}
            </button>
            {domainOrder.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setDomain(item)}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.15em] transition ${
                  domain === item
                    ? "border-amber-200/60 bg-amber-200/15 text-amber-100"
                    : "border-white/15 bg-white/5 text-zinc-300 hover:border-amber-200/30"
                }`}
              >
                {strings.pantheon[domainKey[item]]}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-900/30 to-black/60 p-4 text-sm text-zinc-200">
          <p className="italic text-amber-100">“{strings.pantheon.quote}”</p>
          <p className="mt-2 text-zinc-400">{strings.pantheon.archivistNote}</p>
        </div>
      </aside>

      <section>
        <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
            {strings.pantheon.title}
          </p>
          <h1 className="text-4xl font-semibold text-amber-50">
            {strings.pantheon.editorialLedger}
          </h1>
          <p className="text-zinc-300">
            {filtered.length} {strings.pantheon.figuresArchived} · {domain ? strings.pantheon[domainKey[domain]] : strings.pantheon.all} {strings.pantheon.domains}
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {ordered.map((entry) => (
            <DeityCard key={entry.meta.slug} deity={entry.meta} highlight={entry.meta.slug === "medine"} />
          ))}
        </div>
      </section>
    </div>
  );
}
