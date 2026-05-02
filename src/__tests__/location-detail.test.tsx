import { LocationDetailContent } from "@/app/locations/[id]/LocationDetailContent";
import { locationMetas } from "@/content/locations";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Location detail content", () => {
  it("renders location information and significance", () => {
    const target = locationMetas[0];
    const { getAllByText, getByRole, getByText } = renderWithProviders(
      <LocationDetailContent id={target.id} />,
    );

    expect(getByRole("heading", { name: target.name.en })).toBeInTheDocument();
    expect(getAllByText(target.significance.en).length).toBeGreaterThan(0);
    expect(getByText(/Field notes/i)).toBeInTheDocument();
    expect(getByText(/Map preview/i)).toBeInTheDocument();
  });

  it("translates site type label", () => {
    const target = locationMetas.find((meta) => meta.siteType === "Sacred hilltops") ?? locationMetas[0];
    const { getAllByText } = renderWithProviders(
      <LocationDetailContent id={target.id} />,
      { language: "lt" },
    );

    expect(getAllByText(/Šventi/).length).toBeGreaterThan(0);
  });

  it("renders nothing for an unknown location id", () => {
    const { container } = renderWithProviders(
      <LocationDetailContent id="unknown-location" />,
    );
    expect(container.innerHTML).toBe("");
  });
});
