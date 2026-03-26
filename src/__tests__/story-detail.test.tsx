import { StoryDetailContent } from "@/app/stories/[slug]/StoryDetailContent";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Story detail page", () => {
  it("renders story content and tags", () => {
    const { getByText, getByRole, getByTestId } = renderWithProviders(
      <StoryDetailContent slug="thunder-oak-of-perkunas" />,
    );

    expect(getByRole("heading", { level: 1 })).toHaveTextContent(
      "The Thunder Oak of Perkūnas",
    );
    expect(getByText("Perkūnas")).toBeInTheDocument();
    expect(getByText("Velnias")).toBeInTheDocument();
    expect(getByText("Šventoji Oak Sanctuary")).toBeInTheDocument();
    expect(getByText("Aukštaitija Thunder Oaks")).toBeInTheDocument();
    expect(getByTestId("google-map")).toBeInTheDocument();
  });

  it("returns null for unknown slug", () => {
    const { container } = renderWithProviders(
      <StoryDetailContent slug="nonexistent" />,
    );
    expect(container.innerHTML).toBe("");
  });
});
