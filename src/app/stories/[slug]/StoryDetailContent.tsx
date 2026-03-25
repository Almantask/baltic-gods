'use client';

import Link from "next/link";
import { storyBySlug } from "@/content/stories";
import { deityBySlug } from "@/content/deities";
import { useTranslation } from "@/lib/i18n";

export function StoryDetailContent({ slug }: { slug: string }) {
  const { language, strings } = useTranslation();
  const entry = storyBySlug[slug];
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
