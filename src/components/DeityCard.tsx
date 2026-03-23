import Link from 'next/link'
import type { Deity } from '@/lib/deities'

const GRADIENTS: Record<string, string> = {
  Celestial: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
  Storm: 'linear-gradient(to bottom, #1a1a2e, #16213e)',
  Forest: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)',
  Earth: 'linear-gradient(to bottom, #2c1a0e, #1a0e08)',
  Water: 'linear-gradient(to bottom, #0e1a2c, #081018)',
  Void: 'linear-gradient(to bottom, #0e0e1a, #050508)',
  Fate: 'linear-gradient(to bottom, #1a1520, #0f0a15)',
  Sun: 'linear-gradient(to bottom, #2c1f0e, #1a1208)',
  Moon: 'linear-gradient(to bottom, #0e1020, #05080f)',
  Hearth: 'linear-gradient(to bottom, #2c1205, #1a0a03)',
  Fire: 'linear-gradient(to bottom, #2c1205, #1a0a03)',
  Bees: 'linear-gradient(to bottom, #2c2005, #1a1503)',
  Hunt: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)',
  Underworld: 'linear-gradient(to bottom, #0f0f0f, #050505)',
  Sky: 'linear-gradient(to bottom, #0e1520, #05080f)',
  Fertility: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)',
  Nature: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)',
  Cattle: 'linear-gradient(to bottom, #1a1a10, #0f0f08)',
  Fortune: 'linear-gradient(to bottom, #1a1520, #0f0a15)',
}

function getBg(domain: string[]) {
  for (const d of domain) {
    if (GRADIENTS[d]) return GRADIENTS[d]
  }
  return 'linear-gradient(to bottom, #1a1c18, #111210)'
}

interface DeityCardProps {
  deity: Deity
  locale?: string
}

export default function DeityCard({ deity, locale = 'en' }: DeityCardProps) {
  const bg = getBg(deity.domain)
  return (
    <Link href={`/${locale}/deity/${deity.slug}`} className="block group h-full">
      <div
        className="relative rounded overflow-hidden h-48 flex flex-col justify-end h-full"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,18,16,0.9)] to-transparent" />
        <div className="relative p-4">
          <p className="font-serif text-xl text-[#c8860a] font-bold mb-1">{deity.name}</p>
          <p className="text-[#8a8578] text-xs mb-2">{deity.excerpt}</p>
          <div className="flex gap-1 flex-wrap">
            {deity.domain.map(d => (
              <span key={d} className="text-[10px] tracking-widest uppercase text-[#8a5e07] border border-[#8a5e07] px-2 py-0.5 rounded-full">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
