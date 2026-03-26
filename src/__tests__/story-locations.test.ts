import { zemynasBlessingMeta, thunderOakMeta } from "@/content/stories/meta";
import { getStoryLocations } from "@/lib/story-locations";
import type { StoryMeta } from "@/types/content";

describe("getStoryLocations", () => {
  it("returns explicit locations from metadata", () => {
    const locations = getStoryLocations(thunderOakMeta, "en");
    expect(locations.map((loc) => loc.id)).toContain("aukstaitija-oaks");
  });

  it("falls back to label matching when ids are missing", () => {
    const meta: StoryMeta = { ...zemynasBlessingMeta, locationIds: undefined };
    const locations = getStoryLocations(meta, "en");

    expect(locations.map((loc) => loc.id)).toContain("telsiai-altars");
  });
});
