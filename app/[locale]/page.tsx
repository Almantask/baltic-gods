import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getGods } from '@/lib/gods';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const gods = await getGods(locale);
  const featuredGods = gods.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-amber-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Baltic Gods
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Discover the ancient mythology of the Baltic region
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href={`/${locale}/pantheon`}
              className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition font-semibold"
            >
              Explore Pantheon
            </Link>
            <Link
              href={`/${locale}/map`}
              className="bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition font-semibold"
            >
              View Map
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gods Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Featured Gods
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredGods.map((god) => (
            <Link
              key={god.slug}
              href={`/${locale}/gods/${god.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-6xl">{god.symbol || '⚡'}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{god.name}</h3>
                <p className="text-amber-700 font-semibold mb-2">{god.domain}</p>
                <p className="text-slate-600 text-sm line-clamp-3">{god.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sacred Locations Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Sacred Locations
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-slate-600 mb-6">
            Explore deity locations across the Baltic region on our interactive map
          </p>
          <Link
            href={`/${locale}/map`}
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition font-semibold"
          >
            Open Interactive Map
          </Link>
        </div>
      </section>
    </div>
  );
}
