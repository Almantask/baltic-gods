import Home from "@/app/page";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Home page", () => {
  it("renders hero and featured deities", () => {
    const { getByText, getAllByText } = renderWithProviders(<Home />);

    expect(getByText(/Baltic Ethos/i)).toBeInTheDocument();
    expect(getByText(/Featured Deities/i)).toBeInTheDocument();
    expect(getByText(/Browse the Pantheon/i)).toBeInTheDocument();
    expect(getAllByText(/Perkūnas/).length).toBeGreaterThan(0);
    expect(getAllByText(/Laima/).length).toBeGreaterThan(0);
  });
});
