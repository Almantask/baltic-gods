import "@testing-library/jest-dom";

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
          // Default stub: resolves with no results.  Tests can override via
          // `jest.spyOn(google.maps.Geocoder.prototype, "geocode")`.
          callback(null, "ZERO_RESULTS");
        }
      },
    },
  },
  writable: true,
});

jest.mock("@react-google-maps/api", () => ({
  useJsApiLoader: () => ({ isLoaded: true }),
  GoogleMap: ({ children, onMouseDown, onMouseUp, onDragStart }: {
    children?: React.ReactNode;
    onMouseDown?: (e: unknown) => void;
    onMouseUp?: () => void;
    onDragStart?: () => void;
  }) => {
    const ref = React.useCallback((el: HTMLElement | null) => {
      if (el) {
        (el as unknown as Record<string, unknown>).__onMouseDown = onMouseDown;
        (el as unknown as Record<string, unknown>).__onMouseUp = onMouseUp;
        (el as unknown as Record<string, unknown>).__onDragStart = onDragStart;
      }
    }, [onMouseDown, onMouseUp, onDragStart]);
    return React.createElement("div", { "data-testid": "google-map", ref }, children);
  },
  MarkerF: ({ onClick, position }: { onClick?: () => void; position?: { lat: number; lng: number } }) =>
    React.createElement("div", {
      "data-testid": "map-marker",
      onClick,
      "data-lat": position?.lat,
      "data-lng": position?.lng,
    }),
  InfoWindowF: ({ children }: { children?: React.ReactNode }) =>
    React.createElement("div", { "data-testid": "info-window" }, children),
}));
