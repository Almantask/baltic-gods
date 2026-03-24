import { notFound } from "next/navigation";
import { stories, storyBySlug } from "@/content/stories";
import { StoryDetailContent } from "./StoryDetailContent";

export async function generateStaticParams() {
  return stories.map((entry) => ({ slug: entry.meta.slug }));
}

export default async function StoryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!storyBySlug[slug]) {
    notFound();
  }

  return <StoryDetailContent slug={slug} />;
}
