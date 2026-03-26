'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { locationCategories, auraPalette, mapBounds } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";
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
  hiddenCategories?: Set<SiteCategory>;
  onToggleCategory?: (category: SiteCategory) => void;
  nearMeActive?: boolean;
  nearMeLoading?: boolean;
  onNearMeClick?: () => void;
}

export function SacredMap({
  locations,
  selectedLocationId,
  onSelect,
  compact,
  allowNavigate = false,
  hiddenCategories: hiddenCategoriesProp,
  onToggleCategory,
  nearMeActive,
  nearMeLoading,
  onNearMeClick,
}: SacredMapProps) {
  const { strings } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hiddenCategoriesInternal, setHiddenCategoriesInternal] = useState<Set<SiteCategory>>(new Set());
  const [legendCollapsed, setLegendCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  }, []);

  const isControlled = hiddenCategoriesProp !== undefined;
  const hiddenCategories = isControlled ? hiddenCategoriesProp : hiddenCategoriesInternal;

  const visibleLocations = useMemo(
    () => hiddenCategories.size === 0
      ? locations
      : locations.filter((loc) => !hiddenCategories.has(loc.siteType)),
    [locations, hiddenCategories],
  );

  const toggleCategory = useCallback((category: SiteCategory) => {
    if (isControlled) {
      onToggleCategory?.(category);
    } else {
      setHiddenCategoriesInternal((prev) => {
        const next = new Set(prev);
        if (next.has(category)) {
          next.delete(category);
        } else {
          next.add(category);
        }
        return next;
      });
    }
  }, [isControlled, onToggleCategory]);

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
        router.push(`/locations/${loc.id}`);
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
      ref={containerRef}
      className={clsx(
        "sacred-map-container relative overflow-hidden border border-white/10 shadow-2xl",
        isFullscreen ? "h-full w-full" : compact ? "h-80 rounded-3xl" : "h-[520px] rounded-3xl",
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
            aria-label={legendCollapsed ? strings.map.showLegend : strings.map.hideLegend}
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
            {strings.map.legendToggle}
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
                      {strings.map.categories[category]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
          {onNearMeClick && (
            <button
              type="button"
              onClick={onNearMeClick}
              disabled={nearMeLoading}
              aria-pressed={nearMeActive}
              className={clsx(
                "flex items-center gap-1.5 rounded-b-xl border-t px-2 py-1.5 text-xs transition focus:outline-none focus:ring-1 focus:ring-white/20",
                nearMeActive
                  ? "border-amber-200/50 bg-amber-200/20 font-semibold text-amber-100"
                  : "border-white/10 text-zinc-300 hover:bg-white/10",
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.274 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
              </svg>
              {nearMeLoading ? strings.map.nearMeLoading : strings.map.nearMe}
            </button>
          )}
        </div>
      )}
      {!compact && (
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? strings.map.exitFullscreen : strings.map.fullscreen}
          className={clsx(
            "absolute right-3 top-3 flex items-center justify-center rounded-xl border border-white/10 bg-black/70 p-2 backdrop-blur",
            "text-zinc-300 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/20",
          )}
        >
          {isFullscreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L5.44 6.5H2.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69L3.28 2.22ZM16.72 2.22a.75.75 0 0 1 1.06 1.06L14.56 6.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22ZM3.28 17.78a.75.75 0 0 1-1.06-1.06L5.44 13.5H2.75a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.22 3.22ZM16.72 17.78a.75.75 0 0 0 1.06-1.06L14.56 13.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69l3.22 3.22Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 0 0-1.5h-2ZM13.75 2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 15.75 2h-2ZM3.5 13.75a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 4.25 18h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 1-.75-.75v-2ZM16.5 13.75a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 15.75 18h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 0 .75-.75v-2Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
