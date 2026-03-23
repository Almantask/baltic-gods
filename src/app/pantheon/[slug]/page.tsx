import { Suspense } from "react";
import { notFound } from "next/navigation";
import { deities, deityBySlug } from "@/content/deities";
import { DeityDetailContent } from "./DeityDetailContent";

export async function generateStaticParams() {
  return deities.map((entry) => ({ slug: entry.meta.slug }));
}

export default async function DeityDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!deityBySlug[slug]) {
    notFound();
  }

  return (
    <Suspense>
      <DeityDetailContent slug={slug} />
    </Suspense>
  );
}
