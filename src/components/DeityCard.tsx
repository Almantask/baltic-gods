import Link from "next/link";
import clsx from "clsx";
import type { DeityMeta } from "@/types/content";

interface Props {
  deity: DeityMeta;
  highlight?: boolean;
  size?: "sm" | "md" | "lg" | "wide";
}

export function DeityCard({ deity, highlight, size = "md" }: Props) {
  const sizeClass =
    size === "lg"
      ? "min-h-[360px]"
      : size === "wide"
        ? "min-h-[260px] col-span-2"
        : size === "sm"
          ? "min-h-[200px]"
          : "min-h-[260px]";

  return (
    <Link
      href={`/pantheon/${deity.slug}`}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/40",
        sizeClass,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${deity.overlay}, rgba(0,0,0,0.8)), url(${deity.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/30 px-3 py-1 text-[0.75rem] uppercase tracking-[0.15em] text-zinc-100">
            {deity.domain}
          </span>
          <span className="text-xs text-zinc-200">{deity.altNames.en}</span>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-amber-100 drop-shadow-lg">
            {deity.name}
          </h3>
          <p className="mt-2 max-w-md text-sm text-zinc-200">{deity.epithet}</p>
          <p className="mt-3 max-w-lg text-sm text-zinc-300">{deity.summary}</p>
          {highlight && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-300/20 px-3 py-1 text-xs text-amber-50">
              Highlighted
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
