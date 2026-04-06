import "@testing-library/jest-dom";
import type { MutableRefObject } from "react";

// Ensure API keys are not used during tests
delete process.env.GOOGLE_API_KEY;
delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: jest.fn(),
}));

jest.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: ({ count }: { count: number }) => {
    // Only return up to 5 items to avoid JSDOM performance issues with userEvent
    const limit = Math.min(count, 5);
    return {
      getVirtualItems: () => Array.from({ length: limit }).map((_, i) => ({
        index: i,
        key: i,
        start: i * 90,
        size: 90
      })),
      getTotalSize: () => count * 90,
      measureElement: jest.fn()
    };
  }
}));

/* ---------- Google Maps stubs for SacredMap ---------- */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const React = require("react");

Object.defineProperty(globalThis, "google", {
  value: {
    maps: {
      SymbolPath: { CIRCLE: 0 },
      ControlPosition: { RIGHT_TOP: 3 },
      GeocoderStatus: { OK: "OK" },
      Size: class Size {
        width: number;
        height: number;
        constructor(w: number, h: number) {
          this.width = w;
          this.height = h;
        }
      },
      Geocoder: class Geocoder {
        geocode(
          _request: { address: string },
          callback: (
            results: { geometry: { location: { lat: () => number; lng: () => number } } }[] | null,
            status: string,
          ) => void,
        ) {
          callback(null, "ZERO_RESULTS");
        }
      },
      LatLng: class LatLng {
        lat: number;
        lng: number;
        constructor(lat: number, lng: number) { this.lat = lat; this.lng = lng; }
      },
      LatLngBounds: class LatLngBounds {
        contains(_latLng: unknown) { return true; }
      },
    },
  },
  writable: true,
});

jest.mock("@react-google-maps/api", () => ({
  useJsApiLoader: () => ({ isLoaded: true }),
  GoogleMap: ({ children, onMouseDown, onMouseUp, onDragStart, onZoomChanged, onLoad }: {
    children?: React.ReactNode;
    onMouseDown?: (e: unknown) => void;
    onMouseUp?: () => void;
    onDragStart?: () => void;
    onZoomChanged?: () => void;
    onLoad?: (map: google.maps.Map) => void;
  }) => {
    const divRef = React.useRef(null) as MutableRefObject<HTMLElement | null>;
    const mapInstanceRef = React.useRef(null) as MutableRefObject<google.maps.Map | null>;

    const ref = React.useCallback((el: HTMLElement | null) => {
      if (!el) return;

      divRef.current = el;
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = {
          panTo: jest.fn(),
          setZoom: jest.fn(),
          getZoom: jest.fn(() => 7),
          getBounds: jest.fn(() => new globalThis.google.maps.LatLngBounds()),
          getDiv: () => divRef.current ?? el,
        } as unknown as google.maps.Map;

        onLoad?.(mapInstanceRef.current);
      }

      const map = mapInstanceRef.current;

      (el as unknown as Record<string, unknown>).__onMouseDown = onMouseDown;
      (el as unknown as Record<string, unknown>).__onMouseUp = onMouseUp;
      (el as unknown as Record<string, unknown>).__onDragStart = onDragStart;
      (el as unknown as Record<string, unknown>).__onZoomChanged = onZoomChanged;
      (el as unknown as Record<string, unknown>).__map = map;
    }, [onDragStart, onLoad, onMouseDown, onMouseUp, onZoomChanged]);
    return React.createElement("div", { "data-testid": "google-map", ref }, children);
  },
  MarkerF: ({ onClick, position }: { onClick?: () => void; position?: { lat: number; lng: number } }) =>
    React.createElement("div", {
      "data-testid": "map-marker",
      onClick,
      "data-lat": position?.lat,
      "data-lng": position?.lng,
    }),
  MarkerClustererF: ({ children }: { children?: (clusterer: unknown) => React.ReactNode }) => 
    React.createElement("div", { "data-testid": "marker-clusterer" }, children?.({})),
  InfoWindowF: ({ children }: { children?: React.ReactNode }) =>
    React.createElement("div", { "data-testid": "info-window" }, children),
}));
