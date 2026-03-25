import { DeityCard } from "@/components/DeityCard";
import { laimaMeta, perkunasMeta } from "@/content/deities/meta";
import { renderWithProviders } from "../testing/render-with-providers";

describe("DeityCard", () => {
  it("omits alt name badge when it matches the primary name", () => {
    const { getAllByText } = renderWithProviders(<DeityCard deity={laimaMeta} />);

    expect(getAllByText(laimaMeta.name)).toHaveLength(1);
  });

  it("shows alt name badge when it differs from the primary name", () => {
    const { getByText } = renderWithProviders(<DeityCard deity={perkunasMeta} />);

    expect(getByText(perkunasMeta.altNames.en)).toBeInTheDocument();
  });
});
