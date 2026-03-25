'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import clsx from "clsx";
import { mapBounds } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

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
  const { strings } = useTranslation();
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pressCoords = useRef<{ lat: number; lng: number } | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      ref={containerRef}
      data-testid="coordinate-picker-map"
      className={clsx(
        "coordinate-picker-container relative overflow-hidden border border-white/10 shadow-2xl",
        isFullscreen ? "h-full w-full" : "rounded-2xl",
      )}
      style={isFullscreen ? undefined : { height: 300 }}
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
    </div>
  );
}
