import type { JSX } from "react";

export type Domain = "Celestial" | "Forest" | "Water" | "Earth";

export type Language = "en" | "lt" | "lv";

export interface LocationPoint {
  id: string;
  name: string;
  coordinates: [number, number];
  region: "Lithuania" | "Latvia";
  description: string;
  siteType: string;
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
  epithet: string;
  summary: string;
  heroImage: string;
  overlay: string;
  accent: string;
  altNames: Record<Language, string>;
  keywords: string[];
  gallery: GalleryItem[];
  locations: LocationPoint[];
  materialLegacy: string[];
  symbols: SymbolicCard[];
}

export interface DeityEntry {
  meta: DeityMeta;
  Content: (props: Record<string, unknown>) => JSX.Element;
}
