import { getAllDeities } from '@/lib/deities'
import HeroSection from '@/components/HeroSection'
import DeityCard from '@/components/DeityCard'
import Link from 'next/link'

export default function HomePage({ params }: { params: { locale: string } }) {
  const allDeities = getAllDeities()
  const featured = allDeities.filter(d => ['perkunas', 'saule', 'laima'].includes(d.slug))

  return (
    <div>
      <HeroSection locale={params.locale} />

      <section className="py-20 bg-[#111210]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#c8860a] mb-2">Featured Deities</h2>
          <p className="text-[#8a8578] text-sm italic mb-10">The most revered guardians of the Baltic realm</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(deity => (
              <DeityCard key={deity.slug} deity={deity} locale={params.locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#14160f] border-y border-[#2a2c25]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#8a8578] text-xs tracking-widest uppercase mb-4">✦ SEEK THE UNSEEN ✦</p>
          <h2 className="font-serif text-4xl text-[#c8860a] mb-4">Seek the Unseen</h2>
          <p className="text-[#8a8578] text-sm italic mb-8">Enter the name of a deity, domain, or sacred symbol</p>
          <Link
            href={`/${params.locale}/pantheon`}
            className="inline-block bg-transparent border border-[#c8860a] text-[#c8860a] font-sans text-xs tracking-widest uppercase px-8 py-3 rounded hover:bg-[#c8860a] hover:text-[#111210] transition-colors"
          >
            Browse Full Pantheon
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[#111210]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#c8860a] mb-2">Sacred Atlas</h2>
          <p className="text-[#8a8578] text-sm italic mb-8">Ancient shrines and holy sites of the Baltic world</p>
          <div
            className="relative h-64 rounded border border-[#2a2c25] flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(to bottom, #0a0f0a, #111210)' }}
          >
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, #3d5c3d 30px, #3d5c3d 31px),
                  repeating-linear-gradient(90deg, transparent, transparent 30px, #3d5c3d 30px, #3d5c3d 31px)`,
              }}
            />
            <Link
              href={`/${params.locale}/map`}
              className="relative z-10 bg-[#c8860a] text-[#111210] font-sans text-sm tracking-widest uppercase px-8 py-3 rounded hover:bg-[#d4940f] transition-colors"
            >
              Open Sacred Map
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
