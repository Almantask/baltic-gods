import Link from 'next/link'
import type { Deity } from '@/lib/deities'

interface DeityCardLargeProps {
  deity: Deity
  locale?: string
}

export default function DeityCardLarge({ deity, locale = 'en' }: DeityCardLargeProps) {
  return (
    <Link href={`/${locale}/deity/${deity.slug}`} className="block group h-full">
      <div
        className="relative rounded overflow-hidden h-full min-h-[480px] flex flex-col justify-end"
        style={{ background: 'linear-gradient(to bottom, #1a2c1a, #0f1a0f)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,18,16,0.95)] via-[rgba(17,18,16,0.3)] to-transparent" />
        <div className="relative p-6">
          <span className="inline-block text-[10px] tracking-widest uppercase text-[#c8860a] border border-[#c8860a] px-3 py-1 rounded-full mb-3">
            {deity.title}
          </span>
          <h3 className="font-serif text-4xl font-bold text-[#c8860a] mb-3">{deity.name}</h3>
          <p className="text-[#8a8578] text-sm leading-relaxed mb-4">{deity.excerpt}</p>
          <span className="text-[#c8860a] text-xs tracking-widest uppercase font-sans group-hover:text-[#d4940f]">
            ASCEND TO SHRINE ——
          </span>
        </div>
      </div>
    </Link>
  )
}
