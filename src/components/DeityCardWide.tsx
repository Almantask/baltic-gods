import Link from 'next/link'
import type { Deity } from '@/lib/deities'

const DOMAIN_GRADIENTS: Record<string, string> = {
  Water: 'linear-gradient(to right, #0e1a2c, #081018)',
  Void: 'linear-gradient(to right, #0e0e1a, #050508)',
}

function getBg(domain: string[]) {
  for (const d of domain) {
    if (DOMAIN_GRADIENTS[d]) return DOMAIN_GRADIENTS[d]
  }
  return 'linear-gradient(to right, #1a1c18, #111210)'
}

interface DeityCardWideProps {
  deity: Deity
  locale?: string
}

export default function DeityCardWide({ deity, locale = 'en' }: DeityCardWideProps) {
  const bg = getBg(deity.domain)
  return (
    <Link href={`/${locale}/deity/${deity.slug}`} className="block group">
      <div
        className="relative rounded overflow-hidden h-56 flex items-end"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(17,18,16,0.95)] via-[rgba(17,18,16,0.5)] to-transparent" />
        <div className="relative p-6 flex items-end gap-8 w-full">
          <div className="flex-1">
            <h3 className="font-serif text-3xl font-bold text-[#c8860a] mb-2">{deity.name}</h3>
            <p className="text-[#8a8578] text-sm leading-relaxed mb-3">{deity.excerpt}</p>
            <div className="flex gap-2">
              {deity.domain.map(d => (
                <span key={d} className="text-[10px] tracking-widest uppercase text-[#8a8578] border border-[#2a2c25] px-3 py-1 rounded-full">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
