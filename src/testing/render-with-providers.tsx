import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { TranslationProvider } from "@/lib/i18n";

export function renderWithProviders(ui: ReactElement) {
  return render(<TranslationProvider>{ui}</TranslationProvider>);
}
