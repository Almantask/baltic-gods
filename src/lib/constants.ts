import type { Domain, SiteCategory } from "@/types/content";

export const domainPalette: Record<Domain, string> = {
  Celestial: "#d6a74f",
  Forest: "#6a8b6b",
  Water: "#7bb4d1",
  Earth: "#9bb07a",
};

export const locationCategories: Record<SiteCategory, string> = {
  "Sacred groves": "🌳",
  "Mythic hills / burial mounds": "⛰️",
  "Ritual stones": "🪨",
  "Springs, rivers, lakes with cult significance": "🌊",
  "\"World tree\" analog sites": "🌲",
  "Sacrifice / offering sites": "🔥",
  "Hearth cult zones": "🕯️",
  "Seasonal festival locations": "🎉",
};

export const auraPalette = {
  amber: "#d6a74f",
  moss: "#6b8d70",
  mist: "#9fb3c1",
};

export const mapBounds = {
  latMin: 54.0,
  latMax: 58.2,
  lonMin: 20.0,
  lonMax: 27.5,
};

export function positionForCoordinates(lat: number, lon: number) {
  const x =
    ((lon - mapBounds.lonMin) / (mapBounds.lonMax - mapBounds.lonMin)) * 100;
  const y =
    (1 - (lat - mapBounds.latMin) / (mapBounds.latMax - mapBounds.latMin)) *
    100;
  return { left: `${x}%`, top: `${y}%` };
}
