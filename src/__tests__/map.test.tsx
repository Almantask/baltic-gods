import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/react";
import MapPage from "@/app/map/page";
import { renderWithProviders } from "../testing/render-with-providers";

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
    expect(getByLabelText(/Hide legend/i).parentElement!.querySelector("[aria-pressed]")).toBeInTheDocument();

    // Collapse the legend
    await user.click(toggleBtn);

    const showBtn = getByRole("button", { name: /Show legend/i });
    expect(showBtn).toHaveAttribute("aria-expanded", "false");
    // Category buttons should be hidden
    expect(showBtn.parentElement!.querySelector("[aria-pressed]")).toBeNull();

    // Expand the legend again
    await user.click(showBtn);

    expect(getByRole("button", { name: /Hide legend/i })).toHaveAttribute("aria-expanded", "true");
    expect(getByLabelText(/Hide legend/i).parentElement!.querySelector("[aria-pressed]")).toBeInTheDocument();
  });
});
