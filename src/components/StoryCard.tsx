"use client";

import Link from "next/link";
import clsx from "clsx";
import type { StoryMeta } from "@/types/content";
import { deityBySlug } from "@/content/deities";
import { useTranslation } from "@/lib/i18n";

interface Props {
  story: StoryMeta;
}

export function StoryCard({ story }: Props) {
  const { language } = useTranslation();
  return (
    <Link
      href={`/stories/${story.slug}`}
      className={clsx(
        "group flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-black/60 to-zinc-900/60 p-6 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/40",
      )}
    >
      <h3 className="text-xl font-semibold text-amber-100 group-hover:text-amber-200 transition">
        {story.title[language]}
      </h3>
      <p className="text-sm text-zinc-300 line-clamp-3">{story.summary[language]}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {story.beings.map((slug) => {
          const deity = deityBySlug[slug];
          return (
            <span
              key={slug}
              className="rounded-full border border-amber-200/30 bg-amber-200/10 px-2.5 py-0.5 text-xs text-amber-100"
            >
              {deity ? deity.meta.name : slug}
            </span>
          );
        })}
        {story.locations.map((loc) => (
          <span
            key={loc}
            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-200"
          >
            {loc}
          </span>
        ))}
      </div>
    </Link>
  );
}
