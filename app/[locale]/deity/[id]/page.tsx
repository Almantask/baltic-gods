import { deities } from '@/lib/deities';
import DeityPageClient from './client';

export function generateStaticParams() {
  return deities.map((deity) => ({
    id: deity.id,
  }));
}

interface DeityPageProps {
  params: {
    id: string;
  };
}

export default function DeityPage({ params }: DeityPageProps) {
  return <DeityPageClient params={params} />;
}
