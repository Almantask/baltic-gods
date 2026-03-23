import { getAllDeitySlugs, getDeityBySlug } from '@/lib/deities'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const SacredMap = dynamic(() => import('@/components/SacredMap'), { ssr: false })

export function generateStaticParams() {
  const slugs = getAllDeitySlugs()
  const locales = ['en', 'lt', 'lv']
  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })))
}

export default function DeityPage({ params }: { params: { locale: string; slug: string } }) {
  const deity = getDeityBySlug(params.slug)
  if (!deity) notFound()

  const domainGradients: Record<string, string> = {
    Celestial: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
    Storm: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
    Forest: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)',
    Earth: 'linear-gradient(to bottom, #2c1a0e, #1a0e08)',
    Water: 'linear-gradient(to bottom, #0e1a2c, #081018)',
    Void: 'linear-gradient(to bottom, #0e0e1a, #050508)',
    Hearth: 'linear-gradient(to bottom, #2c1205, #1a0a03)',
    Fire: 'linear-gradient(to bottom, #2c1205, #1a0a03)',
    Hunt: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)',
  }

  const bg = deity.domain.reduce((acc, d) => domainGradients[d] || acc, 'linear-gradient(to bottom, #1a1c18, #111210)')

  const mapLocations = deity.locations.map(loc => ({
    ...loc,
    deitySlug: deity.slug,
    deityName: deity.name,
  }))

  return (
    <div className="min-h-screen bg-[#111210]">
      <div className="relative h-96 flex items-end" style={{ background: bg }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111210] via-transparent to-[rgba(17,18,16,0.3)]" />
        <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
          <div className="flex gap-2 mb-3">
            {deity.domain.map(d => (
              <span key={d} className="text-[10px] tracking-widest uppercase text-[#c8860a] border border-[#c8860a] px-3 py-1 rounded-full">
                {d}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-7xl text-[#c8860a] font-bold">{deity.name}</h1>
          <p className="text-[#8a8578] italic text-xl mt-2">{deity.title}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1a1c18] border border-[#2a2c25] rounded p-4">
            <p className="text-[#5a574f] text-[10px] tracking-widest uppercase mb-2">Symbols</p>
            <div className="flex flex-wrap gap-1">
              {deity.symbols.map(s => (
                <span key={s} className="text-xs text-[#e8e4d9] bg-[#111210] border border-[#2a2c25] px-2 py-0.5 rounded">{s}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#1a1c18] border border-[#2a2c25] rounded p-4">
            <p className="text-[#5a574f] text-[10px] tracking-widest uppercase mb-2">Sacred Colors</p>
            <div className="flex flex-wrap gap-1">
              {deity.colors.map(c => (
                <span key={c} className="text-xs text-[#e8e4d9] bg-[#111210] border border-[#2a2c25] px-2 py-0.5 rounded">{c}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#1a1c18] border border-[#2a2c25] rounded p-4">
            <p className="text-[#5a574f] text-[10px] tracking-widest uppercase mb-2">Culture</p>
            <p className="text-[#e8e4d9] text-sm">{deity.culture}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="font-serif text-3xl text-[#c8860a] mb-4">Sacred Lore</h2>
            <p className="text-[#e8e4d9] leading-relaxed text-base">{deity.lore}</p>
          </div>
          <div className="bg-[#14160f] border border-[#2a2c25] rounded p-6">
            <p className="text-[#5a574f] text-[10px] tracking-widest uppercase mb-3">Domain</p>
            {deity.domain.map(d => (
              <div key={d} className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8860a]" />
                <span className="text-[#e8e4d9] text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {mapLocations.length > 0 && (
          <div className="mb-12">
            <h2 className="font-serif text-3xl text-[#c8860a] mb-4">Sacred Sites</h2>
            <div className="h-72 rounded border border-[#2a2c25] overflow-hidden mb-4">
              <SacredMap
                locations={mapLocations}
                locale={params.locale}
                zoom={8}
                centerLat={deity.locations[0]?.lat ?? 55.5}
                centerLng={deity.locations[0]?.lng ?? 24.0}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {deity.locations.map((loc, i) => (
                <div key={i} className="bg-[#1a1c18] border border-[#2a2c25] rounded p-4">
                  <p className="text-[#c8860a] font-sans text-sm font-medium">{loc.name}</p>
                  <p className="text-[#8a8578] text-xs mt-1">{loc.description}</p>
                  <p className="text-[#5a574f] text-xs font-mono mt-2">{loc.lat.toFixed(4)}°N, {loc.lng.toFixed(4)}°E</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link
          href={`/${params.locale}/pantheon`}
          className="text-[#c8860a] text-sm font-sans tracking-widest uppercase hover:text-[#d4940f]"
        >
          ← Return to the Pantheon
        </Link>
      </div>
    </div>
  )
}
