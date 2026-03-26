import userEvent from "@testing-library/user-event";
import { within, act, waitFor } from "@testing-library/react";
import MapPage from "@/app/map/page";
import { renderWithProviders } from "../testing/render-with-providers";

// Store geolocation callbacks so tests can resolve them
let geoSuccessCallback: PositionCallback | null = null;

beforeEach(() => {
  geoSuccessCallback = null;

  Object.defineProperty(globalThis.navigator, "geolocation", {
    value: {
      getCurrentPosition: jest.fn((success: PositionCallback) => {
        geoSuccessCallback = success;
      }),
    },
    configurable: true,
  });
});

describe("Map page", () => {
  it("filters locations and updates coordinate panel", async () => {
    const user = userEvent.setup();
    const { getByPlaceholderText, getByRole, getByText } = renderWithProviders(<MapPage />);

    expect(getByText(/Sacred Map/i)).toBeInTheDocument();
    const input = getByPlaceholderText(/Ridge, dune, spring/i);
    await user.type(input, "Aukštaitija");

    const aside = getByRole("complementary");
    const listItem = within(aside).getByRole("button", {
      name: /Aukštaitija Thunder Oaks/i,
    });
    await user.click(listItem);

    const coordPanel = within(aside).getByText(/Coordinate Panel/i).parentElement!;
    expect(
      within(coordPanel).getByText((content) => content.includes("55.300")),
    ).toBeInTheDocument();
  });

  it("pans the map to a location when its card is selected", async () => {
    const user = userEvent.setup();
    const { getByRole, getByTestId } = renderWithProviders(<MapPage />);

    const mapEl = getByTestId("google-map") as HTMLElement & { __map?: { panTo: jest.Mock } };
    const panSpy = mapEl.__map?.panTo;
    expect(panSpy).toBeDefined();

    const aside = getByRole("complementary");
    const listItem = within(aside).getByRole("button", {
      name: /Aukštaitija Thunder Oaks/i,
    });
    await user.click(listItem);

    await waitFor(() => {
      expect(panSpy).toHaveBeenCalledWith({ lat: 55.3, lng: 26.0 });
    });
  });

  it("collapses and expands the map legend", async () => {
    const user = userEvent.setup();
    const { getByRole, getByLabelText } = renderWithProviders(<MapPage />);

    const toggleBtn = getByRole("button", { name: /Hide legend/i });
    expect(toggleBtn).toHaveAttribute("aria-expanded", "true");

    // Category buttons should be visible initially (use aria-pressed to target legend buttons)
    const legendPanel = getByLabelText(/Hide legend/i).closest("[class*='absolute']")!;
    expect(legendPanel.querySelector("[aria-pressed]")).toBeInTheDocument();

    // Collapse the legend
    await user.click(toggleBtn);

    const showBtn = getByRole("button", { name: /Show legend/i });
    expect(showBtn).toHaveAttribute("aria-expanded", "false");
    // Category buttons should be hidden (only the Near me button with aria-pressed remains)
    const collapsedPanel = getByLabelText(/Show legend/i).closest("[class*='absolute']")!;
    const collapsedPressedButtons = collapsedPanel.querySelectorAll("[aria-pressed]");
    // Only the Near me button should remain
    expect(collapsedPressedButtons.length).toBe(1);
    expect(collapsedPressedButtons[0].textContent).toMatch(/Near me/i);

    // Expand the legend again
    await user.click(showBtn);

    expect(getByRole("button", { name: /Hide legend/i })).toHaveAttribute("aria-expanded", "true");
    const expandedPanel = getByLabelText(/Hide legend/i).closest("[class*='absolute']")!;
    expect(expandedPanel.querySelector("[aria-pressed]")).toBeInTheDocument();
  });

  it("renders Near me button and requests geolocation on click", async () => {
    const user = userEvent.setup();
    const { getByRole } = renderWithProviders(<MapPage />);

    const nearBtn = getByRole("button", { name: /Near me/i });
    expect(nearBtn).toHaveAttribute("aria-pressed", "false");

    await user.click(nearBtn);

    expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
  });

  it("filters locations within 50 km when Near me is active", async () => {
    const user = userEvent.setup();
    const { getByRole } = renderWithProviders(<MapPage />);

    // Click "Near me" — triggers geolocation request
    const nearBtn = getByRole("button", { name: /Near me/i });
    await user.click(nearBtn);

    // Simulate geolocation returning coords near Aukštaitija Thunder Oaks (55.3, 26.0)
    await act(async () => {
      expect(geoSuccessCallback).not.toBeNull();
      geoSuccessCallback!({
        coords: { latitude: 55.3, longitude: 26.0 },
      } as GeolocationPosition);
    });

    const aside = getByRole("complementary");
    // Aukštaitija Thunder Oaks should still be visible (distance ~0)
    expect(
      within(aside).getByRole("button", { name: /Aukštaitija Thunder Oaks/i }),
    ).toBeInTheDocument();
  });

  it("toggles Near me off to show all locations again", async () => {
    const user = userEvent.setup();
    const { getByRole } = renderWithProviders(<MapPage />);

    const nearBtn = getByRole("button", { name: /Near me/i });
    await user.click(nearBtn);

    // Provide position far from any location to filter everything
    await act(async () => {
      expect(geoSuccessCallback).not.toBeNull();
      geoSuccessCallback!({
        coords: { latitude: 0, longitude: 0 },
      } as GeolocationPosition);
    });

    const aside = getByRole("complementary");
    // No location buttons should exist in sidebar (all filtered out)
    const locationButtons = within(aside).queryAllByRole("button");
    expect(locationButtons.length).toBe(0);

    // Toggle off — all locations return
    const activeBtn = getByRole("button", { name: /Near me/i });
    await user.click(activeBtn);

    const restored = within(getByRole("complementary")).getAllByRole("button");
    expect(restored.length).toBeGreaterThan(0);
  });

  it("renders fullscreen toggle button and calls requestFullscreen on click", async () => {
    const user = userEvent.setup();
    const { getByRole } = renderWithProviders(<MapPage />);

    const fullscreenBtn = getByRole("button", { name: /Fullscreen/i });
    expect(fullscreenBtn).toBeInTheDocument();

    // Mock requestFullscreen on the container element
    const container = fullscreenBtn.closest(".sacred-map-container")!;
    container.requestFullscreen = jest.fn().mockResolvedValue(undefined);

    await user.click(fullscreenBtn);

    expect(container.requestFullscreen).toHaveBeenCalledTimes(1);
  });

});
