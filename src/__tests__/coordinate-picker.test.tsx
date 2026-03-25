import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FieldReportPage from "@/app/field-report/page";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Field report coordinate picker", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("renders the coordinate picker map", () => {
    const { getByTestId, getByText } = renderWithProviders(<FieldReportPage />);

    expect(getByTestId("coordinate-picker-map")).toBeInTheDocument();
    expect(getByText(/Hold on the map/i)).toBeInTheDocument();
  });

  it("does not show a pin when coordinates field is empty", () => {
    const { queryAllByTestId } = renderWithProviders(<FieldReportPage />);

    // The coordinate-picker-map should exist but have no markers
    const markers = queryAllByTestId("map-marker");
    // Only SacredMap markers would appear; none should be inside the picker
    expect(markers.length).toBe(0);
  });

  it("shows a pin when valid coordinates are typed in the field", async () => {
    jest.useRealTimers(); // userEvent needs real timers
    const user = userEvent.setup();
    const { getByLabelText, queryAllByTestId } = renderWithProviders(<FieldReportPage />);

    const coordInput = getByLabelText(/Coordinates/i);
    await user.type(coordInput, "55.30, 26.00");

    const markers = queryAllByTestId("map-marker");
    expect(markers.length).toBe(1);
    expect(markers[0]).toHaveAttribute("data-lat", "55.3");
    expect(markers[0]).toHaveAttribute("data-lng", "26");
  });

  it("does not show a pin for invalid coordinates", async () => {
    jest.useRealTimers();
    const user = userEvent.setup();
    const { getByLabelText, queryAllByTestId } = renderWithProviders(<FieldReportPage />);

    const coordInput = getByLabelText(/Coordinates/i);
    await user.type(coordInput, "not valid");

    expect(queryAllByTestId("map-marker").length).toBe(0);
  });

  it("updates the coordinates field when the map is long-pressed", () => {
    const { getByTestId, getByLabelText } = renderWithProviders(<FieldReportPage />);

    const mapEl = getByTestId("google-map");
    type MapEl = HTMLElement & { __onMouseDown?: (e: unknown) => void; __onMouseUp?: () => void };

    // Simulate a long-press via the stashed handler
    const onMouseDown = (mapEl as MapEl).__onMouseDown;
    expect(onMouseDown).toBeDefined();

    act(() => {
      onMouseDown!({
        latLng: { lat: () => 56.12345, lng: () => 24.67890 },
      });
    });

    // Advance timer past the 2-second long-press threshold
    act(() => jest.advanceTimersByTime(2000));

    const coordInput = getByLabelText(/Coordinates/i) as HTMLInputElement;
    expect(coordInput.value).toBe("56.12345, 24.67890");
  });

  it("does not place a pin when press is shorter than 2 seconds", () => {
    const { getByTestId, getByLabelText } = renderWithProviders(<FieldReportPage />);

    const mapEl = getByTestId("google-map");
    type MapEl = HTMLElement & { __onMouseDown?: (e: unknown) => void; __onMouseUp?: () => void };

    const onMouseDown = (mapEl as MapEl).__onMouseDown;
    const onMouseUp = (mapEl as MapEl).__onMouseUp;

    act(() => {
      onMouseDown!({
        latLng: { lat: () => 56.0, lng: () => 24.0 },
      });
    });

    // Release before 2 seconds
    act(() => jest.advanceTimersByTime(1500));
    act(() => { onMouseUp!(); });
    act(() => jest.advanceTimersByTime(1000));

    const coordInput = getByLabelText(/Coordinates/i) as HTMLInputElement;
    expect(coordInput.value).toBe("");
  });

  it("does not place a pin when zoom changes during press", () => {
    const { getByTestId, getByLabelText } = renderWithProviders(<FieldReportPage />);

    const mapEl = getByTestId("google-map");
    type MapEl = HTMLElement & {
      __onMouseDown?: (e: unknown) => void;
      __onMouseUp?: () => void;
      __onZoomChanged?: () => void;
    };

    const onMouseDown = (mapEl as MapEl).__onMouseDown;
    const onZoomChanged = (mapEl as MapEl).__onZoomChanged;

    act(() => {
      onMouseDown!({
        latLng: { lat: () => 56.0, lng: () => 24.0 },
      });
    });

    // Simulate a zoom change (e.g. pinch-to-zoom) before 2 seconds
    act(() => jest.advanceTimersByTime(500));
    act(() => { onZoomChanged!(); });
    act(() => jest.advanceTimersByTime(2000));

    const coordInput = getByLabelText(/Coordinates/i) as HTMLInputElement;
    expect(coordInput.value).toBe("");
  });

  it("renders fullscreen toggle button and calls requestFullscreen on click", async () => {
    jest.useRealTimers();
    const user = userEvent.setup();
    const { getByRole } = renderWithProviders(<FieldReportPage />);

    const fullscreenBtn = getByRole("button", { name: /Fullscreen/i });
    expect(fullscreenBtn).toBeInTheDocument();

    const container = fullscreenBtn.closest(".coordinate-picker-container")!;
    container.requestFullscreen = jest.fn().mockResolvedValue(undefined);

    await user.click(fullscreenBtn);

    expect(container.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});
