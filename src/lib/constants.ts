import type { Domain, SiteCategory } from "@/types/content";

export const domainPalette: Record<Domain, string> = {
  God: "#d6a74f",
  Creature: "#6a8b6b",
  Person: "#7bb4d1",
};

export const locationCategories: Record<SiteCategory, string> = {
  "Burial/cremation sites": "#7a5a4a",
  "Communal feast sites": "#d69c5f",
  "Field altars": "#9bb36c",
  "Household ritual sites": "#6ca0a8",
  "Legendary creation sites": "#8f6ad4",
  "Sacred groves": "#6a8b6b",
  "Sacred hilltops": "#b08c5a",
  "Sacred springs": "#6fbfd3",
  "Mythic hills / burial mounds": "#a0855b",
  "Ritual fire sites": "#c74f4f",
  "Ritual stones": "#8a8a8a",
  "Settlement sites": "#7a7f89",
  "Springs, rivers, lakes with cult significance": "#7bb4d1",
  "\"World tree\" analog sites": "#4e9a5e",
  "Sacrifice / offering sites": "#d45f5f",
  "Hearth cult zones": "#d6a74f",
  "Seasonal festival locations": "#c77dba",
};

export const auraPalette = {
  amber: "#d6a74f",
  moss: "#6b8d70",
  mist: "#9fb3c1",
  sky: "#7ab0d4",
  green: "#8bbd6a",
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
