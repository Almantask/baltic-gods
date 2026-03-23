'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTranslation } from "@/lib/i18n";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/pantheon", key: "pantheon" },
  { href: "/map", key: "map" },
  { href: "/field-report", key: "field" },
];

export function TopNav() {
  const pathname = usePathname();
  const { language, setLanguage, strings } = useTranslation();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-zinc-200/90">
        <Link href="/" className="text-lg font-semibold tracking-[0.24em] text-amber-200">
          BALTIC GODS
        </Link>
        <nav className="flex items-center gap-6">
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
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.8rem]">
          {(["en", "lt", "lv"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              className={clsx(
                "px-2 py-1 rounded-full transition-colors",
                language === code
                  ? "bg-amber-300/20 text-amber-100"
                  : "text-sand/70 hover:text-amber-50",
              )}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
