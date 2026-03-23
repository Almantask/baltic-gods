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
});
