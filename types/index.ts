export interface Deity {
  id: string;
  name: string;
  domain: 'celestial' | 'forest' | 'water' | 'earth';
  title: string;
  description: string;
  symbolism: string[];
  lore: string;
  locations: Location[];
  imageUrl?: string;
  featured?: boolean;
}

export interface Location {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  deityId: string;
  type: string;
}

export interface FieldReport {
  location: string;
  contact: string;
  deities: string;
  description: string;
  references: string;
  siteType: string;
  coordinates: string;
}
