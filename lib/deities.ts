import { Deity } from '@/types';

export const deities: Deity[] = [
  {
    id: 'perkunas',
    name: 'Perkūnas',
    domain: 'celestial',
    title: 'Thunder God, Sky Wielder',
    description: 'The supreme god of thunder, lightning, and sky in Baltic mythology.',
    symbolism: ['Thunder', 'Oak Tree', 'Axe', 'Fire'],
    lore: 'Perkūnas rides across the heavens in a chariot of fire, wielding his mighty axe to strike down evil spirits and bring rain to the parched earth. His sacred oak groves dot the Baltic lands, places where ancient prayers still echo.',
    locations: [
      {
        id: 'perkunas-1',
        name: 'Sacred Oak of Stelmužė',
        coordinates: [56.0394, 25.0478],
        description: 'One of the oldest oaks in Europe, sacred to Perkūnas',
        deityId: 'perkunas',
        type: 'Sacred Tree',
      },
      {
        id: 'perkunas-2',
        name: 'Rambynas Hill',
        coordinates: [55.1667, 22.2],
        description: 'Ancient ceremonial site dedicated to thunder worship',
        deityId: 'perkunas',
        type: 'Ceremonial Hill',
      },
    ],
    imageUrl: '/images/perkunas.jpg',
    featured: true,
  },
  {
    id: 'saule',
    name: 'Saulė',
    domain: 'celestial',
    title: 'Goddess of the Sun',
    description: 'The radiant sun goddess who brings light and warmth to the world.',
    symbolism: ['Sun', 'Light', 'Warmth', 'Life'],
    lore: 'Saulė rides her chariot across the sky each day, bringing light to the world. At night, she descends into the sea to bathe and rest before her next journey.',
    locations: [
      {
        id: 'saule-1',
        name: 'Hill of Crosses',
        coordinates: [56.0153, 23.4156],
        description: 'Sacred pilgrimage site where the sun goddess is honored',
        deityId: 'saule',
        type: 'Pilgrimage Site',
      },
    ],
    imageUrl: '/images/saule.jpg',
    featured: true,
  },
  {
    id: 'laima',
    name: 'Laima',
    domain: 'earth',
    title: 'Goddess of Fate and Fortune',
    description: 'The deity who determines the fate of individuals at birth.',
    symbolism: ['Weaving', 'Birds', 'Destiny', 'Birth'],
    lore: 'Laima weaves the threads of fate for every newborn child. She appears at births to bless or curse, determining the fortune and destiny of each soul that enters the world.',
    locations: [
      {
        id: 'laima-1',
        name: 'Shrine of Laima, Vilnius',
        coordinates: [54.6872, 25.2797],
        description: 'Urban shrine dedicated to the goddess of fate',
        deityId: 'laima',
        type: 'Shrine',
      },
    ],
    imageUrl: '/images/laima.jpg',
    featured: true,
  },
  {
    id: 'zemyna',
    name: 'Žemyna',
    domain: 'earth',
    title: 'Mother Earth',
    description: 'The earth goddess who nurtures all living things.',
    symbolism: ['Earth', 'Fertility', 'Harvest', 'Nature'],
    lore: 'Žemyna is the mother of all living things, the earth itself given divine form. Farmers pray to her for good harvests, and her name is invoked in ceremonies of planting and reaping.',
    locations: [
      {
        id: 'zemyna-1',
        name: 'Ancient Field Stone, Anykščiai',
        coordinates: [55.5267, 25.1031],
        description: 'Sacred stone where offerings were made to Žemyna',
        deityId: 'zemyna',
        type: 'Sacred Stone',
      },
    ],
    imageUrl: '/images/zemyna.jpg',
  },
  {
    id: 'velnias',
    name: 'Velnias',
    domain: 'forest',
    title: 'God of the Underworld',
    description: 'The trickster god of the underworld and cattle.',
    symbolism: ['Snake', 'Underworld', 'Cattle', 'Trickery'],
    lore: 'Velnias dwells in the underworld, a complex deity who is both fearsome and necessary. He is associated with wealth, cattle, and the dark mysteries beneath the earth.',
    locations: [
      {
        id: 'velnias-1',
        name: 'Devil\'s Pit, Varėna',
        coordinates: [54.2167, 24.5833],
        description: 'Deep pit said to be an entrance to the underworld',
        deityId: 'velnias',
        type: 'Natural Formation',
      },
    ],
    imageUrl: '/images/velnias.jpg',
  },
  {
    id: 'austeja',
    name: 'Austėja',
    domain: 'forest',
    title: 'Goddess of Bees',
    description: 'The patron goddess of beekeepers and bees.',
    symbolism: ['Bees', 'Honey', 'Industry', 'Sweetness'],
    lore: 'Austėja watches over all bees and their keepers, blessing hives with abundance and protecting them from harm. Her presence is felt in every buzzing hive across the Baltic lands.',
    locations: [
      {
        id: 'austeja-1',
        name: 'Ancient Beekeeping Site, Aukštaitija',
        coordinates: [55.5167, 26.0833],
        description: 'Traditional beekeeping grove sacred to Austėja',
        deityId: 'austeja',
        type: 'Grove',
      },
    ],
    imageUrl: '/images/austeja.jpg',
  },
  {
    id: 'menulis',
    name: 'Mėnulis',
    domain: 'celestial',
    title: 'God of the Moon',
    description: 'The moon god, husband of Saulė.',
    symbolism: ['Moon', 'Night', 'Time', 'Cycles'],
    lore: 'Mėnulis rides his silver chariot through the night sky, forever separated from his wife Saulė by the curse of the gods after his infidelity with Aušrinė, the morning star.',
    locations: [
      {
        id: 'menulis-1',
        name: 'Moon Stone, Plungė',
        coordinates: [55.9119, 21.8456],
        description: 'Stone formation shaped like a crescent moon',
        deityId: 'menulis',
        type: 'Sacred Stone',
      },
    ],
    imageUrl: '/images/menulis.jpg',
  },
  {
    id: 'dievas',
    name: 'Dievas',
    domain: 'celestial',
    title: 'Sky Father',
    description: 'The supreme sky god and creator.',
    symbolism: ['Sky', 'Creation', 'Order', 'Justice'],
    lore: 'Dievas is the supreme deity, the sky father who oversees all of creation. He maintains cosmic order and justice, watching over the world from his celestial throne.',
    locations: [
      {
        id: 'dievas-1',
        name: 'Sanctuary Hill, Kernavė',
        coordinates: [54.8764, 24.8419],
        description: 'Ancient hilltop sanctuary dedicated to the sky father',
        deityId: 'dievas',
        type: 'Sanctuary',
      },
    ],
    imageUrl: '/images/dievas.jpg',
  },
  {
    id: 'gabija',
    name: 'Gabija',
    domain: 'earth',
    title: 'Goddess of Fire',
    description: 'The sacred fire goddess of the hearth.',
    symbolism: ['Fire', 'Hearth', 'Home', 'Protection'],
    lore: 'Gabija is the sacred fire that burns in every hearth, the protective flame that guards the home. She must be honored with rituals each evening, and her fire must never be allowed to die.',
    locations: [
      {
        id: 'gabija-1',
        name: 'Eternal Flame Site, Trakai',
        coordinates: [54.6378, 24.9347],
        description: 'Ancient site where sacred fires were maintained',
        deityId: 'gabija',
        type: 'Fire Site',
      },
    ],
    imageUrl: '/images/gabija.jpg',
  },
  {
    id: 'bangputys',
    name: 'Bangpūtys',
    domain: 'water',
    title: 'God of Sea and Storms',
    description: 'The fierce god of the Baltic Sea and storms.',
    symbolism: ['Sea', 'Waves', 'Storms', 'Wind'],
    lore: 'Bangpūtys commands the waves and storms of the Baltic Sea. Fishermen fear and respect him, making offerings before setting sail to ensure safe passage across his tempestuous domain.',
    locations: [
      {
        id: 'bangputys-1',
        name: 'Cape Kolka',
        coordinates: [57.7478, 22.5919],
        description: 'Where two seas meet, sacred to Bangpūtys',
        deityId: 'bangputys',
        type: 'Coastal Site',
      },
    ],
    imageUrl: '/images/bangputys.jpg',
  },
  {
    id: 'medeine',
    name: 'Medinė',
    domain: 'forest',
    title: 'Goddess of Forests',
    description: 'The wild goddess who rules over forests and animals.',
    symbolism: ['Forest', 'Animals', 'Hunt', 'Wilderness'],
    lore: 'Medinė is the untamed spirit of the forest, protector of all wild animals and ancient groves. Hunters must ask her permission before taking game, lest they face her wrath.',
    locations: [
      {
        id: 'medeine-1',
        name: 'Labanoras Forest',
        coordinates: [55.2333, 26.0667],
        description: 'One of the oldest and most sacred forests',
        deityId: 'medeine',
        type: 'Forest',
      },
    ],
    imageUrl: '/images/medeine.jpg',
  },
];

export function getDeityById(id: string): Deity | undefined {
  return deities.find((deity) => deity.id === id);
}

export function getDeitiesByDomain(domain: string): Deity[] {
  if (domain === 'all') return deities;
  return deities.filter((deity) => deity.domain === domain);
}

export function getFeaturedDeities(): Deity[] {
  return deities.filter((deity) => deity.featured);
}

export function getAllLocations() {
  return deities.flatMap((deity) => deity.locations);
}

export function searchDeities(query: string): Deity[] {
  const lowercaseQuery = query.toLowerCase();
  return deities.filter(
    (deity) =>
      deity.name.toLowerCase().includes(lowercaseQuery) ||
      deity.title.toLowerCase().includes(lowercaseQuery) ||
      deity.description.toLowerCase().includes(lowercaseQuery)
  );
}
