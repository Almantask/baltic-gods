import { StoryDetailContent } from "@/app/stories/[slug]/StoryDetailContent";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Story detail page", () => {
  it("renders story content and tags", () => {
    const { getAllByText, getByText, getByRole, getByTestId } = renderWithProviders(
      <StoryDetailContent slug="thunder-oak-of-perkunas" />,
    );

    expect(getByRole("heading", { level: 1 })).toHaveTextContent(
      "The Thunder Oak of Perkūnas",
    );
    expect(getByText("Perkūnas")).toBeInTheDocument();
    expect(getByText("Velnias")).toBeInTheDocument();
    expect(getAllByText(/Oak/).length).toBeGreaterThan(0);
    expect(getAllByText(/Aukštaitij/).length).toBeGreaterThan(0);
    expect(getByTestId("google-map")).toBeInTheDocument();
  });

  it("renders translated location tags when available", () => {
    const { getAllByText } = renderWithProviders(
      <StoryDetailContent slug="thunder-oak-of-perkunas" />,
      { language: "lt" },
    );

    // Location names should come from translated LocationPoint data.
    expect(getAllByText(/ąžuol/i).length).toBeGreaterThan(0);
  });

  it("returns null for unknown slug", () => {
    const { container } = renderWithProviders(
      <StoryDetailContent slug="nonexistent" />,
    );
    expect(container.innerHTML).toBe("");
  });
});
