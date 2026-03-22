export interface SymbolicAssociation {
  icon: string
  title: string
  description: string
}

export interface LoreSection {
  title: string
  content: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
}

export interface Location {
  id: string
  godId: string
  locationName: string
  country: 'Lithuania' | 'Latvia'
  region: string
  coordinates: [number, number]
  siteType: 'Sacred Grove' | 'Sacred Shrine' | 'Burial Hill' | 'Sunken Ruins' | 'Standing Stone' | 'Untamed Wilds'
  shortDescription: string
  longDescription: string
  mythicReference: string
  isFeatured: boolean
}

export interface Deity {
  id: string
  name: string
  alternateNames: string[]
  title: string
  domain: 'Celestial' | 'Forest' | 'Water' | 'Earth' | 'Fate' | 'Fire' | 'Underworld' | 'Storm' | 'Solar' | 'Lunar' | 'Domestic' | 'Harvest'
  subdomains: string[]
  essence: string
  element: string
  countries: string[]
  shortDescription: string
  longDescription: string
  featuredQuote: string
  heroImage: string
  galleryImages: GalleryItem[]
  symbolicAssociations: SymbolicAssociation[]
  sacredAnimals: string[]
  sacredPlants: string[]
  loreSections: LoreSection[]
  associatedLocations: string[]
  archiveClassification: string
}

export interface FieldReport {
  id: string
  locationName: string
  guardianName: string
  contactInfo?: string
  relatedDeities: string
  coordinates?: [number, number]
  country: string
  region: string
  siteType: string
  description: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
}
