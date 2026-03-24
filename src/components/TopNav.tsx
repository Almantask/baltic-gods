'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTranslation } from "@/lib/i18n";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/pantheon", key: "pantheon" },
  { href: "/stories", key: "stories" },
  { href: "/map", key: "map" },
  { href: "/field-report", key: "field" },
];

export function TopNav() {
  const pathname = usePathname();
  const { language, setLanguage, strings } = useTranslation();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-200/90">
        <div className="flex flex-wrap items-center justify-between gap-y-1 py-4">
          <Link href="/" className="text-lg font-semibold tracking-[0.24em] text-amber-200">
            BALTIC GODS
          </Link>
          <nav className="flex flex-wrap items-center gap-3 sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={clsx(
                  "uppercase tracking-wide transition-colors",
                  pathname === link.href
                    ? "text-amber-200"
                    : "text-zinc-300/80 hover:text-amber-100",
                )}
              >
                {strings.nav[link.key as keyof typeof strings.nav]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-end pb-2 -mt-1">
          <div className="flex items-center gap-1 text-[0.7rem] tracking-wide">
            {(["en", "lt", "lv"] as const).map((code) => (
              <button
                key={code}
                type="button"
                aria-label={`Switch to ${code.toUpperCase()}`}
                onClick={() => setLanguage(code)}
                className={clsx(
                  "px-2 py-0.5 rounded transition-colors uppercase",
                  language === code
                    ? "text-amber-200 border-b border-amber-200/60"
                    : "text-zinc-400/70 hover:text-amber-100",
                )}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
