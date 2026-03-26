import { Suspense } from "react";
import { notFound } from "next/navigation";
import { locationById, locationMetas } from "@/content/locations";
import { LocationDetailContent } from "./LocationDetailContent";

export async function generateStaticParams() {
  return locationMetas.map((loc) => ({ id: loc.id }));
}

export default async function LocationDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!locationById[id]) {
    notFound();
  }

  return (
    <Suspense>
      <LocationDetailContent id={id} />
    </Suspense>
  );
}
