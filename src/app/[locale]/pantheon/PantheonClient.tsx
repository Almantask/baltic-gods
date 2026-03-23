'use client'
import { useState, useMemo } from 'react'
import type { Deity } from '@/lib/deities'
import SearchInput from '@/components/SearchInput'
import DomainFilter from '@/components/DomainFilter'
import DeityCardLarge from '@/components/DeityCardLarge'
import DeityCard from '@/components/DeityCard'
import DeityCardWide from '@/components/DeityCardWide'

interface PantheonClientProps {
  deities: Deity[]
  locale: string
}

export default function PantheonClient({ deities, locale }: PantheonClientProps) {
  const [search, setSearch] = useState('')
  const [activeDomain, setActiveDomain] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return deities.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchesDomain = !activeDomain || d.domain.some(dom =>
        dom.toLowerCase() === activeDomain.toLowerCase()
      )
      return matchesSearch && matchesDomain
    })
  }, [deities, search, activeDomain])

  const medine = deities.find(d => d.slug === 'medine')
  const perkunas = deities.find(d => d.slug === 'perkunas')
  const zemyna = deities.find(d => d.slug === 'zemyna')
  const bangputys = deities.find(d => d.slug === 'bangputys')
  const isFiltered = search || activeDomain

  return (
    <div className="min-h-screen bg-[#111210] flex">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 bg-[#14160f] border-r border-[#2a2c25] min-h-screen pt-8 px-4">
        <p className="text-[#5a574f] text-[10px] tracking-widest uppercase mb-4">DIVINE INQUIRY</p>
        <SearchInput value={search} onChange={setSearch} />
        <p className="font-serif italic text-[#8a8578] text-sm mt-6 mb-3">By Domain</p>
        <DomainFilter active={activeDomain} onChange={setActiveDomain} />
        <blockquote className="mt-8 border border-[#2a2c25] rounded p-3">
          <p className="font-serif italic text-[#8a8578] text-xs leading-relaxed">
            &ldquo;The forest speaks in whispers of those who came before. Listen closely to the wind between the pines.&rdquo;
          </p>
        </blockquote>
      </aside>

      {/* Main content */}
      <div className="flex-1 px-8 pt-8 pb-16">
        <h1 className="font-serif text-7xl text-[#e8e4d9] font-normal mb-4">The Pantheon</h1>
        <p className="text-[#8a8578] italic text-base mb-10 max-w-2xl">
          Guardians of the ancient Baltic realm, woven into the forests, skies, and sacred rivers. Their stories are told in the wind and written in amber.
        </p>

        {!isFiltered && medine && perkunas && zemyna && bangputys ? (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-5 gap-4" style={{ height: '480px' }}>
              <div className="col-span-3 h-full">
                <DeityCardLarge deity={medine} locale={locale} />
              </div>
              <div className="col-span-2 grid grid-rows-2 gap-4 h-full">
                <div className="h-full">
                  <DeityCard deity={perkunas} locale={locale} />
                </div>
                <div className="h-full">
                  <DeityCard deity={zemyna} locale={locale} />
                </div>
              </div>
            </div>
            <div>
              <DeityCardWide deity={bangputys} locale={locale} />
            </div>
            {deities.filter(d => !['medine', 'perkunas', 'zemyna', 'bangputys'].includes(d.slug)).length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {deities.filter(d => !['medine', 'perkunas', 'zemyna', 'bangputys'].includes(d.slug)).map(d => (
                  <DeityCard key={d.slug} deity={d} locale={locale} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {filtered.map(d => (
              <DeityCard key={d.slug} deity={d} locale={locale} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-3 text-[#5a574f] italic text-center py-20">No deities found matching your search.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
