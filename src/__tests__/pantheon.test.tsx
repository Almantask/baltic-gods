import userEvent from "@testing-library/user-event";
import PantheonPage from "@/app/pantheon/page";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Pantheon page", () => {
  it("shows editorial layout and filters by domain", async () => {
    const user = userEvent.setup();
    const { getByText, getAllByText, getByRole } = renderWithProviders(<PantheonPage />);

    expect(getByText(/Medinė/)).toBeInTheDocument();
    expect(getAllByText(/Pantheon/i).length).toBeGreaterThan(0);

    await user.click(getByRole("button", { name: "Creature" }));
    expect(getByText(/Bangpūtys/)).toBeInTheDocument();
  });
});
