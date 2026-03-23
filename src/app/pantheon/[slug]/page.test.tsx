// Simple test to verify the page logic
import { deities, deityBySlug } from "@/content/deities";

describe("Page logic", () => {
  it("should find deity by slug", () => {
    const testSlug = "perkunas";
    const entry = deityBySlug[testSlug];
    console.log("deityBySlug keys:", Object.keys(deityBySlug));
    console.log("Testing slug:", testSlug);
    console.log("Found entry:", entry);
    expect(entry).toBeDefined();
    expect(entry?.meta.slug).toBe(testSlug);
  });
});
