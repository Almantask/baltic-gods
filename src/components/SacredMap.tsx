'use client';

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { domainPalette, auraPalette, positionForCoordinates } from "@/lib/constants";
import type { LocationPoint } from "@/types/content";

interface SacredMapProps {
  locations: LocationPoint[];
  selectedLocationId?: string;
  onSelect?: (location: LocationPoint) => void;
  compact?: boolean;
  allowNavigate?: boolean;
}

export function SacredMap({
  locations,
  selectedLocationId,
  onSelect,
  compact,
  allowNavigate = false,
}: SacredMapProps) {
  const [zoom, setZoom] = useState(1);
  const router = useRouter();

  const selectedLocation = useMemo(
    () => locations.find((loc) => loc.id === selectedLocationId),
    [locations, selectedLocationId],
  );

  const handleClick = (loc: LocationPoint) => {
    onSelect?.(loc);
    if (allowNavigate) {
      router.push(`/pantheon/${loc.deity}?location=${loc.id}`);
    }
  };

  return (
    <div className={clsx("relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80 shadow-2xl", compact ? "h-80" : "h-[520px]")}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124, 152, 130, 0.12), transparent 40%), radial-gradient(circle at 80% 30%, rgba(216, 167, 79, 0.18), transparent 34%), radial-gradient(circle at 50% 70%, rgba(84, 112, 135, 0.16), transparent 36%)",
          filter: "blur(0px)",
        }}
      />
      <div
        className="relative h-full w-full"
        style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
      >
        <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-black/90 ring-1 ring-white/5" />
        {locations.map((loc) => {
          const pos = positionForCoordinates(loc.coordinates[0], loc.coordinates[1]);
          const isActive = loc.id === selectedLocationId;
          return (
            <button
              key={loc.id}
              type="button"
              className="group absolute"
              style={{ left: pos.left, top: pos.top }}
              onClick={() => handleClick(loc)}
            >
              <span
                className={clsx(
                  "relative block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 shadow-lg transition duration-200",
                  isActive ? "scale-125" : "scale-100",
                )}
                style={{
                  backgroundColor: auraPalette[loc.aura],
                  boxShadow: `0 0 18px ${auraPalette[loc.aura]}`,
                }}
              />
              <div className="pointer-events-none absolute left-3 top-3 min-w-[180px] -translate-x-1/2 rounded-xl bg-black/80 p-3 text-left text-xs text-zinc-100 opacity-0 backdrop-blur transition group-hover:opacity-100">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-amber-100">{loc.name}</p>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide">
                    {loc.region}
                  </span>
                </div>
                <p className="mt-1 text-zinc-300">{loc.siteType}</p>
                <p className="mt-1 text-zinc-400">{loc.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setZoom((z) => Math.min(1.3, z + 0.1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-amber-100 transition hover:border-amber-200/50"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setZoom((z) => Math.max(0.9, z - 0.1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-amber-100 transition hover:border-amber-200/50"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur">
          <div className="text-sm text-amber-100">
            {selectedLocation.name} · {selectedLocation.region}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-200">
            <span className="rounded-full bg-white/10 px-2 py-1">
              {selectedLocation.siteType}
            </span>
            <span className="rounded-full bg-white/5 px-2 py-1">
              {selectedLocation.coordinates[0].toFixed(2)}°N ·{" "}
              {selectedLocation.coordinates[1].toFixed(2)}°E
            </span>
            <span className="rounded-full bg-white/5 px-2 py-1">
              {selectedLocation.significance}
            </span>
          </div>
        </div>
      )}
      {!compact && (
        <div className="absolute left-4 top-4 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-black/70 p-3 text-xs text-zinc-200 backdrop-blur">
          {Object.entries(domainPalette).map(([domain, color]) => (
            <div key={domain} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
              />
              <span className="uppercase tracking-wide text-[0.7rem] text-zinc-300">
                {domain}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
