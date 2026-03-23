import { DeityDetailContent } from "@/app/pantheon/[slug]/DeityDetailContent";
import { deities, deityBySlug } from "@/content/deities";
import { renderWithProviders } from "../testing/render-with-providers";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: jest.fn(),
}));

describe("Deity detail page", () => {
  it("renders lore and highlights passed location", () => {
    const { getByRole, getByText } = renderWithProviders(
      <DeityDetailContent slug="perkunas" />,
    );

    expect(getByRole("heading", { name: /Perkūnas/ })).toBeInTheDocument();
    expect(getByText(/Lore/)).toBeInTheDocument();
  });

  it("renders each deity without errors", () => {
    for (const entry of deities) {
      const { getByRole, unmount } = renderWithProviders(
        <DeityDetailContent slug={entry.meta.slug} />,
      );
      expect(getByRole("heading", { level: 1 })).toHaveTextContent(entry.meta.name);
      unmount();
    }
  });

  it("renders nothing for an unknown slug", () => {
    const { container } = renderWithProviders(
      <DeityDetailContent slug="unknown-deity" />,
    );
    expect(container.innerHTML).toBe("");
  });

  it("displays domain and alt names", () => {
    const { getAllByText } = renderWithProviders(
      <DeityDetailContent slug="perkunas" />,
    );
    const entry = deityBySlug["perkunas"];
    expect(getAllByText(entry.meta.domain).length).toBeGreaterThan(0);
  });

  it("highlights first location by default", () => {
    const entry = deityBySlug["perkunas"];
    const firstLocation = entry.meta.locations[0];
    const { getAllByText } = renderWithProviders(
      <DeityDetailContent slug="perkunas" />,
    );
    expect(getAllByText(firstLocation.name).length).toBeGreaterThan(0);
  });
});
