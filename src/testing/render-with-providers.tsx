import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { TranslationProvider } from "@/lib/i18n";

export function renderWithProviders(ui: ReactElement, options?: { language?: "en" | "lt" | "lv" }) {
  const initialLanguage = options?.language ?? "en";
  return render(
    <TranslationProvider initialLanguage={initialLanguage}>
      {ui}
    </TranslationProvider>,
  );
}
