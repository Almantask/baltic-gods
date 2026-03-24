import userEvent from "@testing-library/user-event";
import { within, act } from "@testing-library/react";
import MapPage from "@/app/map/page";
import { renderWithProviders } from "../testing/render-with-providers";

type GeocoderCb = (results: unknown, status: string) => void;

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
    // Category buttons should be hidden
    const collapsedPanel = getByLabelText(/Show legend/i).closest("[class*='absolute']")!;
    expect(collapsedPanel.querySelector("[aria-pressed]")).toBeNull();

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

  it("renders the nearby search input with placeholder", () => {
    const { getByPlaceholderText } = renderWithProviders(<MapPage />);

    expect(getByPlaceholderText(/Search near a place/i)).toBeInTheDocument();
  });

  it("filters locations when nearby search resolves coordinates", async () => {
    // Mock the Geocoder to return coordinates near Aukštaitija Thunder Oaks (55.3, 26.0)
    jest.spyOn(google.maps.Geocoder.prototype, "geocode").mockImplementation(
      (_request: unknown, callback: GeocoderCb) => {
        callback(
          [{ geometry: { location: { lat: () => 55.3, lng: () => 26.0 } } }],
          "OK",
        );
      },
    );

    const user = userEvent.setup();
    const { getByPlaceholderText, getByRole } = renderWithProviders(<MapPage />);

    const nearbyInput = getByPlaceholderText(/Search near a place/i);
    await user.type(nearbyInput, "Aukštaitija");
    await user.keyboard("{Enter}");

    const aside = getByRole("complementary");
    // Aukštaitija Thunder Oaks should be visible (distance ~0)
    expect(
      within(aside).getByRole("button", { name: /Aukštaitija Thunder Oaks/i }),
    ).toBeInTheDocument();
  });

  it("clears nearby filter when input is emptied", async () => {
    // Mock geocoder returning coords far from any location
    jest.spyOn(google.maps.Geocoder.prototype, "geocode").mockImplementation(
      (_request: unknown, callback: GeocoderCb) => {
        callback(
          [{ geometry: { location: { lat: () => 0, lng: () => 0 } } }],
          "OK",
        );
      },
    );

    const user = userEvent.setup();
    const { getByPlaceholderText, getByRole } = renderWithProviders(<MapPage />);

    const nearbyInput = getByPlaceholderText(/Search near a place/i);
    await user.type(nearbyInput, "Nowhere");
    await user.keyboard("{Enter}");

    const aside = getByRole("complementary");
    // All locations filtered out
    expect(within(aside).queryAllByRole("button").length).toBe(0);

    // Clear the input
    await user.clear(nearbyInput);

    // All locations should return
    const restored = within(getByRole("complementary")).getAllByRole("button");
    expect(restored.length).toBeGreaterThan(0);
  });
});
