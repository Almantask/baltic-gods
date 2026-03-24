'use client';

import { useMemo, useState } from "react";
import { StoryCard } from "@/components/StoryCard";
import { useTranslation } from "@/lib/i18n";
import { filterStories } from "@/lib/search";

export default function StoriesPage() {
  const { strings } = useTranslation();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => filterStories(query), [query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
          {strings.stories.title}
        </p>
        <h1 className="text-4xl font-semibold text-amber-50">
          Legends &amp; Tales
        </h1>
        <p className="text-zinc-300">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
        </p>
      </div>

      <label className="block text-sm text-zinc-200">
        <span>{strings.stories.searchPlaceholder}</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
          placeholder="Storm, amber, fate..."
        />
      </label>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((entry) => (
          <StoryCard key={entry.meta.slug} story={entry.meta} />
        ))}
      </div>
    </div>
  );
}
