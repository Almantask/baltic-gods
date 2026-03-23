import { getGod, getGods } from '@/lib/gods';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { locales } from '@/i18n';

export async function generateStaticParams() {
  const allParams: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const gods = await getGods(locale);
    for (const god of gods) {
      allParams.push({
        locale,
        slug: god.slug,
      });
    }
  }

  return allParams;
}

export default async function GodPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const god = await getGod(locale, slug);

  if (!god) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 to-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link
          href={`/${locale}/pantheon`}
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6"
        >
          ← Back to Pantheon
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-9xl">{god.symbol || '⚡'}</span>
          </div>
          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{god.name}</h1>
            <p className="text-xl text-amber-700 font-semibold mb-4">{god.domain}</p>
            <p className="text-slate-600 text-lg leading-relaxed">{god.description}</p>
          </div>
        </div>

        {/* Symbols Section */}
        {god.symbols && god.symbols.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Symbols</h2>
            <div className="flex flex-wrap gap-3">
              {god.symbols.map((symbol, idx) => (
                <span
                  key={idx}
                  className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-medium"
                >
                  {symbol}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Locations Section */}
        {god.locations && god.locations.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Associated Locations</h2>
            <ul className="space-y-2">
              {god.locations.map((location, idx) => (
                <li key={idx} className="flex items-center text-slate-700">
                  <span className="text-amber-600 mr-2">📍</span>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Artifacts Section */}
        {god.artifacts && god.artifacts.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Artifacts</h2>
            <ul className="space-y-2">
              {god.artifacts.map((artifact, idx) => (
                <li key={idx} className="flex items-center text-slate-700">
                  <span className="text-amber-600 mr-2">⚱️</span>
                  {artifact}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* MDX Content */}
        {god.content && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 prose prose-slate max-w-none">
            <MDXRemote source={god.content} />
          </div>
        )}
      </div>
    </div>
  );
}
