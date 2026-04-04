import type { JSX } from "react";

export type Domain = "God" | "Creature" | "Person";

export type Language = "en" | "lt" | "lv";

export type SiteCategory =
  | "Sacred groves"
  | "Mythic hills / burial mounds"
  | "Ritual stones"
  | "Springs, rivers, lakes with cult significance"
  | "\"World tree\" analog sites"
  | "Sacrifice / offering sites"
  | "Hearth cult zones"
  | "Seasonal festival locations";

export interface LocationPoint {
  id: string;
  name: string;
  coordinates: [number, number];
  region: "Lithuania" | "Latvia";
  description: string;
  siteType: SiteCategory;
  aura: "amber" | "moss" | "mist";
  deity: string;
  significance: string;
}

export interface GalleryItem {
  title: string;
  medium: string;
  note: string;
}

export interface SymbolicCard {
  label: string;
  detail: string;
}

export interface DeityMeta {
  slug: string;
  name: string;
  domain: Domain;
  epithet: Record<Language, string>;
  summary: Record<Language, string>;
  heroImage: string;
  overlay: string;
  accent: string;
  altNames: Record<Language, string>;
  keywords: string[];
  gallery: GalleryItem[];
  locations: LocationPoint[];
  materialLegacy: string[];
  symbols: SymbolicCard[];
  regionDetails: Record<Language, string>;
  tribe: Record<Language, string>;
  period: Record<Language, string>;
  references: string[];
}

export type DeityContent = (props: Record<string, unknown>) => JSX.Element;

export interface DeityEntry {
  meta: DeityMeta;
  Content: DeityContent;
  contentByLang: Record<Language, DeityContent>;
}

export interface LocationMeta {
  id: string;
  name: Record<Language, string>;
  coordinates: [number, number];
  region: "Lithuania" | "Latvia";
  description: Record<Language, string>;
  siteType: SiteCategory;
  aura: "amber" | "moss" | "mist";
  deity: string;
  significance: Record<Language, string>;
  tribe: Record<Language, string>;
  period: Record<Language, string>;
  references: string[];
}

export type LocationContent = (props: Record<string, unknown>) => JSX.Element;

export interface LocationEntry {
  meta: LocationMeta;
  Content: LocationContent;
  contentByLang: Record<Language, LocationContent>;
}

export type StoryContent = (props: Record<string, unknown>) => JSX.Element;

export interface StoryMeta {
  slug: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  beings: string[];
  locationIds?: string[];
  locations: string[];
  regionDetails: Record<Language, string>;
  tribe: Record<Language, string>;
  period: Record<Language, string>;
  references: string[];
}

export interface StoryEntry {
  meta: StoryMeta;
  Content: StoryContent;
  contentByLang: Record<Language, StoryContent>;
}
