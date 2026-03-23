import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Baltic Gods",
  description:
    "A dark editorial atlas of Baltic deities, sacred geography, and field reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--sand)] antialiased">
        <Providers>
          <TopNav />
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
