import { getGods } from '@/lib/gods';
import Link from 'next/link';

export default async function PantheonPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const gods = await getGods(locale);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pantheon
          </h1>
          <p className="text-xl text-slate-600">
            Explore the deities of Baltic mythology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gods.map((god) => (
            <Link
              key={god.slug}
              href={`/${locale}/gods/${god.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-700 transition">
                <span className="text-5xl">{god.symbol || '⚡'}</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{god.name}</h2>
                <p className="text-amber-700 font-semibold mb-3">{god.domain}</p>
                <p className="text-slate-600 line-clamp-3">{god.description}</p>
                {god.symbols && god.symbols.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {god.symbols.slice(0, 3).map((symbol, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"
                      >
                        {symbol}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {gods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No gods found</p>
          </div>
        )}
      </div>
    </div>
  );
}
