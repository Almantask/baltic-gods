'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { mapBounds } from "@/lib/constants";

const MAP_CENTER = {
  lat: (mapBounds.latMin + mapBounds.latMax) / 2,
  lng: (mapBounds.lonMin + mapBounds.lonMax) / 2,
};

const DARK_MAP_STYLES: google.maps.MapTypeStyle[] = [
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

const LONG_PRESS_DURATION_MS = 1000;

interface CoordinatePickerMapProps {
  /** Current pin position; `null` means no pin on the map. */
  pin: { lat: number; lng: number } | null;
  /** Called when the user long-presses to place (or move) the pin. */
  onPinChange: (lat: number, lng: number) => void;
}

export function CoordinatePickerMap({ pin, onPinChange }: CoordinatePickerMapProps) {
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pressCoords = useRef<{ lat: number; lng: number } | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const clearPressTimer = useCallback(() => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
    pressCoords.current = null;
  }, []);

  /* Clean up on unmount */
  useEffect(() => clearPressTimer, [clearPressTimer]);

  const handleMouseDown = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (!e.latLng) return;
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      pressCoords.current = { lat, lng };
      pressTimer.current = setTimeout(() => {
        onPinChange(lat, lng);
        pressTimer.current = null;
      }, LONG_PRESS_DURATION_MS);
    },
    [onPinChange],
  );

  const handleMouseUp = useCallback(() => clearPressTimer(), [clearPressTimer]);
  const handleDragStart = useCallback(() => clearPressTimer(), [clearPressTimer]);

  /* Disable the map context menu so long-press on touch devices works cleanly. */
  useEffect(() => {
    if (!mapInstance) return;
    const div = mapInstance.getDiv();
    const suppress = (e: Event) => e.preventDefault();
    div.addEventListener("contextmenu", suppress);
    return () => div.removeEventListener("contextmenu", suppress);
  }, [mapInstance]);

  const mapOptions = useMemo(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div
        className="flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80 shadow-2xl"
        style={{ height: 300 }}
      >
        <span className="text-sm text-zinc-400">Loading map…</span>
      </div>
    );
  }

  return (
    <div
      data-testid="coordinate-picker-map"
      className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={{ height: 300 }}
    >
      <GoogleMap
        mapContainerClassName="h-full w-full"
        center={pin ?? MAP_CENTER}
        zoom={7}
        options={mapOptions}
        onLoad={setMapInstance}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onDragStart={handleDragStart}
      >
        {pin && (
          <MarkerF position={pin} />
        )}
      </GoogleMap>
    </div>
  );
}
