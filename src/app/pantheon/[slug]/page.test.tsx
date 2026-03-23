import { deities, deityBySlug } from "@/content/deities";

describe("Deity detail page logic", () => {
  it("should find deity by slug", () => {
    const testSlug = "perkunas";
    const entry = deityBySlug[testSlug];
    expect(entry).toBeDefined();
    expect(entry?.meta.slug).toBe(testSlug);
  });

  it("should return undefined for unknown slug", () => {
    expect(deityBySlug["nonexistent"]).toBeUndefined();
  });

  it("generateStaticParams returns all deity slugs", () => {
    const slugs = deities.map((entry) => entry.meta.slug);
    expect(slugs.length).toBeGreaterThan(0);
    for (const slug of slugs) {
      expect(deityBySlug[slug]).toBeDefined();
    }
  });
});
