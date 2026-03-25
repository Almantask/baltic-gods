'use client';

import { FormEvent, useCallback, useMemo, useState } from "react";
import { deities } from "@/content/deities";
import { useTranslation } from "@/lib/i18n";
import { CoordinatePickerMap } from "@/components/CoordinatePickerMap";

interface FormState {
  location: string;
  guardian: string;
  deities: string[];
  description: string;
  references: string;
  siteType: string;
  coordinates: string;
  uploads: string;
}

export default function FieldReportPage() {
  const { strings } = useTranslation();
  const [form, setForm] = useState<FormState>({
    location: "",
    guardian: "",
    deities: [],
    description: "",
    references: "",
    siteType: "",
    coordinates: "",
    uploads: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  /** Derive pin position from the coordinates text field. */
  const pin = useMemo<{ lat: number; lng: number } | null>(() => {
    const parts = form.coordinates.split(",").map((s) => s.trim());
    if (parts.length !== 2) return null;
    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);
    if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
    return { lat, lng };
  }, [form.coordinates]);

  /** Called when the user long-presses the map to place a pin. */
  const handlePinChange = useCallback(
    (lat: number, lng: number) => {
      setForm((prev) => ({ ...prev, coordinates: `${lat.toFixed(5)}, ${lng.toFixed(5)}` }));
    },
    [],
  );

  const toggleDeity = (slug: string) => {
    setForm((prev) => {
      const exists = prev.deities.includes(slug);
      return {
        ...prev,
        deities: exists
          ? prev.deities.filter((d) => d !== slug)
          : [...prev.deities, slug],
      };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(5,7,8,0.8), rgba(5,7,8,0.95)), url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
      <div className="relative px-8 py-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
            {strings.home.ctaField}
          </p>
          <h1 className="mt-3 text-5xl font-semibold text-amber-50">
            {strings.field.title}
          </h1>
          <p className="mt-3 text-lg italic text-zinc-200">{strings.field.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.location}</span>
            <input
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Forest ridge, dune hollow..."
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.guardian}</span>
            <input
              value={form.guardian}
              onChange={(e) => update("guardian", e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Name or crew"
            />
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.deities}</span>
            <div className="flex flex-wrap gap-2">
              {deities.map((entry) => (
                <button
                  type="button"
                  key={entry.meta.slug}
                  onClick={() => toggleDeity(entry.meta.slug)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.15em] transition ${
                    form.deities.includes(entry.meta.slug)
                      ? "border-amber-200/60 bg-amber-200/15 text-amber-100"
                      : "border-white/15 bg-white/5 text-zinc-300 hover:border-amber-200/30"
                  }`}
                >
                  {entry.meta.name}
                </button>
              ))}
            </div>
          </label>
          <label className="md:col-span-2 flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.description}</span>
            <textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className="min-h-[140px] rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Tell us what hums here..."
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.references}</span>
            <input
              value={form.references}
              onChange={(e) => update("references", e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Links, elders, archives"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.siteType}</span>
            <input
              value={form.siteType}
              onChange={(e) => update("siteType", e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Grove, dune, spring..."
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.coordinates}</span>
            <input
              value={form.coordinates}
              onChange={(e) => update("coordinates", e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="55.30, 26.00"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-200">
            <span>{strings.form.uploads}</span>
            <input
              value={form.uploads}
              onChange={(e) => update("uploads", e.target.value)}
              className="rounded-2xl border border-dashed border-white/25 bg-white/5 px-4 py-3 text-amber-50 placeholder:text-zinc-500 focus:border-amber-200 focus:outline-none"
              placeholder="Link to images or notes"
            />
          </label>
          <div className="md:col-span-2">
            <div className="flex flex-col gap-2 rounded-2xl border border-amber-200/40 bg-amber-200/10 px-4 py-4 text-center text-amber-50">
              <p className="text-sm uppercase tracking-[0.2em]">
                {strings.field.mapCta}
              </p>
              <p className="text-xs text-zinc-100">
                {strings.field.mapInstruction}
              </p>
            </div>
            <div className="mt-3">
              <CoordinatePickerMap pin={pin} onPinChange={handlePinChange} />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-lg transition hover:bg-amber-400"
            >
              {strings.field.submit}
            </button>
            {submitted && (
              <p className="text-amber-100">{strings.field.confirmation}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
