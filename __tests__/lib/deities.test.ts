import {
  deities,
  getDeityById,
  getDeitiesByDomain,
  getFeaturedDeities,
  searchDeities,
  getAllLocations,
} from '@/lib/deities';

describe('Deities Library', () => {
  it('exports an array of deities', () => {
    expect(Array.isArray(deities)).toBe(true);
    expect(deities.length).toBeGreaterThan(0);
  });

  it('getDeityById returns correct deity', () => {
    const deity = getDeityById('perkunas');
    expect(deity).toBeDefined();
    expect(deity?.name).toBe('Perkūnas');
  });

  it('getDeityById returns undefined for non-existent id', () => {
    const deity = getDeityById('nonexistent');
    expect(deity).toBeUndefined();
  });

  it('getDeitiesByDomain filters by domain', () => {
    const celestialDeities = getDeitiesByDomain('celestial');
    expect(celestialDeities.every((d) => d.domain === 'celestial')).toBe(true);
  });

  it('getDeitiesByDomain returns all deities for "all"', () => {
    const allDeities = getDeitiesByDomain('all');
    expect(allDeities.length).toBe(deities.length);
  });

  it('getFeaturedDeities returns only featured deities', () => {
    const featured = getFeaturedDeities();
    expect(featured.every((d) => d.featured === true)).toBe(true);
    expect(featured.length).toBeGreaterThan(0);
  });

  it('searchDeities finds deities by name', () => {
    const results = searchDeities('Perkūnas');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name).toBe('Perkūnas');
  });

  it('searchDeities is case insensitive', () => {
    const results = searchDeities('perkunas');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name).toBe('Perkūnas');
  });

  it('getAllLocations returns all locations from all deities', () => {
    const locations = getAllLocations();
    expect(Array.isArray(locations)).toBe(true);
    expect(locations.length).toBeGreaterThan(0);
  });

  it('deities have required fields', () => {
    deities.forEach((deity) => {
      expect(deity.id).toBeDefined();
      expect(deity.name).toBeDefined();
      expect(deity.domain).toBeDefined();
      expect(deity.title).toBeDefined();
      expect(deity.description).toBeDefined();
      expect(Array.isArray(deity.symbolism)).toBe(true);
      expect(deity.lore).toBeDefined();
      expect(Array.isArray(deity.locations)).toBe(true);
    });
  });
});
