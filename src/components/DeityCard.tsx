"use client";

import Link from "next/link";
import clsx from "clsx";
import type { DeityMeta, Domain } from "@/types/content";
import { useTranslation } from "@/lib/i18n";

interface Props {
  deity: DeityMeta;
  highlight?: boolean;
}

const domainKey: Record<Domain, "domainGod" | "domainCreature" | "domainPerson"> = {
  God: "domainGod",
  Creature: "domainCreature",
  Person: "domainPerson",
};

export function DeityCard({ deity, highlight }: Props) {
  const { language, strings } = useTranslation();

  return (
    <Link
      href={`/pantheon/${deity.slug}`}
      className={clsx(
        "group flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-black/60 to-zinc-900/60 p-6 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/40",
      )}
    >
      <h3 className="text-xl font-semibold text-amber-100 group-hover:text-amber-200 transition">
        {deity.name}
      </h3>
      <p className="text-sm italic text-zinc-200">{deity.epithet[language]}</p>
      <p className="text-sm text-zinc-300 line-clamp-3">{deity.summary[language]}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        <span className="rounded-full border border-amber-200/30 bg-amber-200/10 px-2.5 py-0.5 text-xs text-amber-100">
          {strings.pantheon[domainKey[deity.domain]]}
        </span>
        {deity.altNames[language] && (
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-200">
            {deity.altNames[language]}
          </span>
        )}
        {highlight && (
          <span className="rounded-full border border-amber-200/30 bg-amber-200/10 px-2.5 py-0.5 text-xs text-amber-50">
            {strings.deity.highlighted}
          </span>
        )}
      </div>
    </Link>
  );
}
