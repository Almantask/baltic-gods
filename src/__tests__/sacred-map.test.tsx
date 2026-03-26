import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { SacredMap } from "@/components/SacredMap";
import type { LocationPoint } from "@/types/content";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("SacredMap navigation", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("pushes to the location page when a marker is clicked", async () => {
    const user = userEvent.setup();
    const location: LocationPoint = {
      id: "test-loc",
      name: "Test Location",
      coordinates: [55.0, 25.0],
      region: "Lithuania",
      description: "Test description",
      siteType: "Sacred groves",
      aura: "amber",
      deity: "perkunas",
      significance: "Test significance",
    };

    const { getAllByTestId } = render(
      <SacredMap locations={[location]} allowNavigate />,
    );

    const marker = getAllByTestId("map-marker")[0];
    await user.click(marker);

    expect(pushMock).toHaveBeenCalledWith(`/locations/${location.id}`);
  });
});
