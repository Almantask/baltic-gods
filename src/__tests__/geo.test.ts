import { haversineDistance, NEAR_ME_RADIUS_KM } from "@/lib/geo";

describe("haversineDistance", () => {
  it("returns 0 for identical points", () => {
    expect(haversineDistance([55.0, 24.0], [55.0, 24.0])).toBe(0);
  });

  it("calculates approximate distance between Vilnius and Kaunas", () => {
    // Vilnius ~54.687, 25.280  Kaunas ~54.897, 23.886
    const d = haversineDistance([54.687, 25.28], [54.897, 23.886]);
    // Real distance ~92 km
    expect(d).toBeGreaterThan(85);
    expect(d).toBeLessThan(100);
  });

  it("calculates approximate distance between Vilnius and Riga", () => {
    // Vilnius ~54.687, 25.280  Riga ~56.946, 24.106
    const d = haversineDistance([54.687, 25.28], [56.946, 24.106]);
    // Real distance ~262 km
    expect(d).toBeGreaterThan(250);
    expect(d).toBeLessThan(275);
  });

  it("is symmetric", () => {
    const a: [number, number] = [55.0, 24.0];
    const b: [number, number] = [56.0, 25.0];
    expect(haversineDistance(a, b)).toBeCloseTo(haversineDistance(b, a), 10);
  });
});

describe("NEAR_ME_RADIUS_KM", () => {
  it("is 50", () => {
    expect(NEAR_ME_RADIUS_KM).toBe(50);
  });
});
