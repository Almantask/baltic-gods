'use client';

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { domainPalette, auraPalette, mapBounds } from "@/lib/constants";
import type { LocationPoint } from "@/types/content";

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
  const router = useRouter();

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
        {locations.map((loc) => {
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
