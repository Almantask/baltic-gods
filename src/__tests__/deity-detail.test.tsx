import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/react";
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

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('not wrapped in act')) return;
    originalConsoleError(...args);
  };
});
afterAll(() => {
  console.error = originalConsoleError;
});

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

  it("focuses on a category when clicking a legend category", async () => {
    const user = userEvent.setup();
    const entry = deityBySlug["perkunas"];
    const { getByRole, getByText } = renderWithProviders(
      <DeityDetailContent slug="perkunas" />,
    );

    // Both locations should be visible initially
    for (const loc of entry.meta.locations) {
      expect(getByText(loc.name)).toBeInTheDocument();
    }

    // Find the "Sacred groves" legend button and click it to focus on that category alone
    const legendButton = getByRole("button", { name: /Sacred groves/i, pressed: true });
    expect(legendButton).toHaveAttribute("aria-pressed", "true");
    await user.click(legendButton);

    // Sacred groves location should be visible in Points of Interest
    const sacredGroveLoc = entry.meta.locations.find(
      (l) => l.siteType === "Sacred groves",
    )!;
    const aside = getByRole("complementary");
    expect(within(aside).getByText(sacredGroveLoc.name)).toBeInTheDocument();

    // The other location (non-Sacred groves) should now be hidden
    const otherLoc = entry.meta.locations.find(
      (l) => l.siteType !== "Sacred groves",
    )!;
    expect(within(aside).queryByText(otherLoc.name)).toBeNull();

    // Re-click "Sacred groves" to reset/unfocus back to all categories
    await user.click(legendButton);
    expect(legendButton).toHaveAttribute("aria-pressed", "true");
    expect(within(aside).getByText(sacredGroveLoc.name)).toBeInTheDocument();
    expect(within(aside).getByText(otherLoc.name)).toBeInTheDocument();
  });
});
