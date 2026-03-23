'use client';

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { locationCategories, auraPalette, mapBounds } from "@/lib/constants";
import type { LocationPoint, SiteCategory } from "@/types/content";

const ALL_CATEGORIES = Object.keys(locationCategories) as SiteCategory[];

const MAP_CENTER = {
  lat: (mapBounds.latMin + mapBounds.latMax) / 2,
  lng: (mapBounds.lonMin + mapBounds.lonMax) / 2,
};

const DARK_MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#0c110f" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0c110f" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#6b8d70" }] },
  { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#2f3f36" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#050708" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#7aa0a9" }] },
  { featureType: "road", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#0c110f" }] },
];

function buildMarkerIcon(aura: LocationPoint["aura"], isActive: boolean) {
  const color = auraPalette[aura];
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: color,
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: isActive ? 2 : 1,
    scale: isActive ? 10 : 7,
  };
}

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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hiddenCategories, setHiddenCategories] = useState<Set<SiteCategory>>(new Set());
  const [legendCollapsed, setLegendCollapsed] = useState(false);
  const router = useRouter();

  const visibleLocations = useMemo(
    () => hiddenCategories.size === 0
      ? locations
      : locations.filter((loc) => !hiddenCategories.has(loc.siteType)),
    [locations, hiddenCategories],
  );

  const toggleCategory = useCallback((category: SiteCategory) => {
    setHiddenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const selectedLocation = useMemo(
    () => locations.find((loc) => loc.id === selectedLocationId),
    [locations, selectedLocationId],
  );

  const hoveredLocation = useMemo(
    () => locations.find((loc) => loc.id === hoveredId),
    [locations, hoveredId],
  );

  const handleClick = useCallback(
    (loc: LocationPoint) => {
      onSelect?.(loc);
      if (allowNavigate) {
        router.push(`/pantheon/${loc.deity}?location=${loc.id}`);
      }
    },
    [onSelect, allowNavigate, router],
  );

  const mapOptions = useMemo(
    () => {
      if (typeof google === "undefined") return {};
      return {
        styles: DARK_MAP_STYLES,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_TOP },
        minZoom: 6,
        maxZoom: 12,
        restriction: {
          latLngBounds: {
            north: mapBounds.latMax + 1,
            south: mapBounds.latMin - 1,
            east: mapBounds.lonMax + 2,
            west: mapBounds.lonMin - 2,
          },
          strictBounds: false,
        },
      };
    },
    // isLoaded triggers recomputation once the Google Maps script is ready
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoaded],
  );

  if (!isLoaded) {
    return (
      <div
        className={clsx(
          "flex items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80 shadow-2xl",
          compact ? "h-80" : "h-[520px]",
        )}
      >
        <span className="text-sm text-zinc-400">Loading map…</span>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl",
        compact ? "h-80" : "h-[520px]",
      )}
    >
      <GoogleMap
        mapContainerClassName="h-full w-full"
        center={MAP_CENTER}
        zoom={compact ? 6 : 7}
        options={mapOptions}
      >
        {visibleLocations.map((loc) => {
          const isActive = loc.id === selectedLocationId;
          return (
            <MarkerF
              key={loc.id}
              position={{ lat: loc.coordinates[0], lng: loc.coordinates[1] }}
              icon={buildMarkerIcon(loc.aura, isActive)}
              onClick={() => handleClick(loc)}
              onMouseOver={() => setHoveredId(loc.id)}
              onMouseOut={() => setHoveredId(null)}
            />
          );
        })}
        {hoveredLocation && (
          <InfoWindowF
            position={{
              lat: hoveredLocation.coordinates[0],
              lng: hoveredLocation.coordinates[1],
            }}
            options={{ disableAutoPan: true, pixelOffset: new google.maps.Size(0, -12) }}
            onCloseClick={() => setHoveredId(null)}
          >
            <div className="min-w-[180px] text-xs">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-gray-900">{hoveredLocation.name}</p>
                <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-gray-600">
                  {hoveredLocation.region}
                </span>
              </div>
              <p className="mt-1 text-gray-600">{hoveredLocation.siteType}</p>
              <p className="mt-1 text-gray-500">{hoveredLocation.description}</p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
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
        <div className="absolute left-3 top-3 flex flex-col rounded-xl border border-white/10 bg-black/70 backdrop-blur">
          <button
            type="button"
            onClick={() => setLegendCollapsed((prev) => !prev)}
            aria-expanded={!legendCollapsed}
            aria-label={legendCollapsed ? "Show legend" : "Hide legend"}
            className="flex items-center gap-1 px-2 py-1.5 text-[0.6rem] text-zinc-300 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={clsx("h-3 w-3 transition-transform", legendCollapsed && "-rotate-90")}
            >
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            Legend
          </button>
          {!legendCollapsed && (
            <div className="flex flex-col gap-1 px-2 pb-1.5">
              {ALL_CATEGORIES.map((category) => {
                const color = locationCategories[category];
                const isHidden = hiddenCategories.has(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    aria-pressed={!isHidden}
                    className={clsx(
                      "flex items-center gap-1.5 rounded-md px-1 py-0.5 text-left transition-opacity hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/20",
                      isHidden ? "opacity-40" : "opacity-100",
                    )}
                  >
                    <span
                      className="inline-block h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[0.6rem] leading-tight text-zinc-300">
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
