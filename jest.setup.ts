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
  GoogleMap: ({ children }: { children?: React.ReactNode }) =>
    React.createElement("div", { "data-testid": "google-map" }, children),
  MarkerF: ({ onClick }: { onClick?: () => void }) =>
    React.createElement("div", { "data-testid": "map-marker", onClick }),
  InfoWindowF: ({ children }: { children?: React.ReactNode }) =>
    React.createElement("div", { "data-testid": "info-window" }, children),
}));
