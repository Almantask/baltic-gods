import userEvent from "@testing-library/user-event";
import StoriesPage from "@/app/stories/page";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Stories page", () => {
  it("shows stories listing with title and story cards", () => {
    const { getByText } = renderWithProviders(<StoriesPage />);

    expect(getByText("Legends & Tales")).toBeInTheDocument();
    expect(getByText("The Thunder Oak of Perkūnas")).toBeInTheDocument();
    expect(getByText("The Weaving of Laima")).toBeInTheDocument();
  });

  it("filters stories by keyword search", async () => {
    const user = userEvent.setup();
    const { getByText, queryByText, getByPlaceholderText } =
      renderWithProviders(<StoriesPage />);

    expect(getByText("The Thunder Oak of Perkūnas")).toBeInTheDocument();
    expect(getByText("Velnias and the Fiddler")).toBeInTheDocument();

    const input = getByPlaceholderText("Storm, amber, fate...");
    await user.type(input, "fiddler");

    expect(getByText("Velnias and the Fiddler")).toBeInTheDocument();
    expect(queryByText("The Thunder Oak of Perkūnas")).not.toBeInTheDocument();
  });

  it("shows being and location tags on story cards", () => {
    const { getAllByText, getByText } = renderWithProviders(<StoriesPage />);

    expect(getAllByText("Perkūnas").length).toBeGreaterThan(0);
    expect(getByText("Šventoji Oak Sanctuary")).toBeInTheDocument();
  });
});
