import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationMetaById, locationMetas } from "@/content/locations";
import { LocationDetailContent } from "./LocationDetailContent";

export async function generateStaticParams() {
  return locationMetas.map((meta) => ({ id: meta.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = getLocationMetaById(id);
  if (!meta) return {};
  return {
    title: `${meta.name.en} | Baltic Gods`,
    description: meta.description.en,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meta = getLocationMetaById(id);

  if (!meta) {
    notFound();
  }

  return <LocationDetailContent meta={meta} />;
}
