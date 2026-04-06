'use client';

import { memo } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import type { LocationPoint } from "@/types/content";

interface LeyIndexCardProps {
  location: LocationPoint;
  isSelected?: boolean;
  onClick?: () => void;
  showDescription?: boolean;
}

export const LeyIndexCard = memo(function LeyIndexCard({
  location,
  isSelected,
  onClick,
  showDescription = true,
}: LeyIndexCardProps) {
  const { strings } = useTranslation();

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
      className={`group cursor-pointer rounded-2xl border px-4 py-4 transition-all duration-300 ${
        isSelected
          ? "border-amber-200/60 bg-amber-200/10 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
          : "border-white/10 bg-black/30 hover:border-amber-200/30 hover:bg-white/5"
      }`}
    >
      <div className="flex w-full items-start justify-between text-left">
        <div className="space-y-1">
          <p className={`font-semibold transition-colors ${
            isSelected ? "text-amber-50" : "text-amber-100/90 group-hover:text-amber-50"
          }`}>
            {location.name}
          </p>
          <p className="text-xs text-zinc-400">
            {location.region} · {location.siteType}
          </p>
        </div>
        <span className="text-[0.65rem] tabular-nums tracking-tighter text-zinc-500">
          {location.coordinates[0].toFixed(2)}°N · {location.coordinates[1].toFixed(2)}°E
        </span>
      </div>

      {showDescription && (
        <p className={`mt-3 text-sm leading-relaxed transition-colors ${
          isSelected ? "text-zinc-200" : "text-zinc-400 group-hover:text-zinc-300"
        }`}>
          {location.description}
        </p>
      )}

      <div className="mt-4 flex items-center justify-end border-t border-white/5 pt-3">
        <Link
          href={`/locations/${location.id}`}
          onClick={(e) => e.stopPropagation()}
          className={`rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all ${
            isSelected
              ? "border-amber-200/40 bg-amber-200/10 text-amber-50"
              : "border-white/15 bg-white/5 text-zinc-400 hover:border-amber-200/40 hover:text-amber-50"
          }`}
        >
          {strings.actions.more}
        </Link>
      </div>
    </div>
  );
});
