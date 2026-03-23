import userEvent from "@testing-library/user-event";
import FieldReportPage from "@/app/field-report/page";
import { renderWithProviders } from "../testing/render-with-providers";

describe("Field report page", () => {
  it("submits the form and shows confirmation", async () => {
    const user = userEvent.setup();
    const { getByText, getByLabelText } = renderWithProviders(
      <FieldReportPage />,
    );

    await user.type(getByLabelText(/Location/i), "Test Hollow");
    await user.type(getByLabelText(/Description/i), "Quiet grove with moss.");
    await user.click(getByText(/Send to the Archive/i));

    expect(getByText(/Archivists will trace/i)).toBeInTheDocument();
  });
});
