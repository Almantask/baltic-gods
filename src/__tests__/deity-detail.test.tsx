import DeityDetail from "@/app/pantheon/[slug]/page";
import { findLocationById } from "@/content/deities";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Deity detail page", () => {
  it("renders lore and highlights passed location", () => {
    const loc = findLocationById("aukstaitija-oaks");
    const { getByRole, getAllByText, getByText } = renderWithProviders(
      <DeityDetail params={{ slug: "perkunas" }} searchParams={{ location: loc?.id }} />,
    );

    expect(getByRole("heading", { name: /Perkūnas/ })).toBeInTheDocument();
    if (loc) {
      expect(getAllByText(loc.name).length).toBeGreaterThan(0);
    }
    expect(getByText(/Lore/)).toBeInTheDocument();
  });
});
