'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const SacredMap = dynamic(() => import('@/components/SacredMap'), { ssr: false })

interface MapLocation {
  name: string
  lat: number
  lng: number
  description: string
  deitySlug: string
  deityName: string
}

interface MapPageClientProps {
  locations: MapLocation[]
  locale: string
}

export default function MapPageClient({ locations, locale }: MapPageClientProps) {
  const [selected, setSelected] = useState<MapLocation | null>(null)

  return (
    <div className="flex h-[calc(100vh-64px)] bg-[#111210]">
      <div className="w-72 bg-[#14160f] border-r border-[#2a2c25] flex flex-col">
        <div className="p-6 border-b border-[#2a2c25]">
          <p className="text-[#5a574f] text-[10px] tracking-widest uppercase mb-1">SACRED GEOGRAPHY</p>
          <h2 className="font-serif text-2xl text-[#c8860a]">The Ley Index</h2>
          <p className="text-[#8a8578] text-xs mt-1 italic">{locations.length} sacred sites recorded</p>
        </div>
        <div className="overflow-y-auto flex-1 p-4">
          {locations.map((loc, i) => (
            <button
              key={i}
              onClick={() => setSelected(loc)}
              className={`w-full text-left p-3 rounded mb-2 transition-colors ${
                selected?.name === loc.name
                  ? 'bg-[#2d4a2d] border border-[#3d5c3d]'
                  : 'hover:bg-[#1a1c18]'
              }`}
            >
              <p className="text-[#c8860a] text-xs font-sans tracking-wide">{loc.deityName}</p>
              <p className="text-[#e8e4d9] text-sm">{loc.name}</p>
              <p className="text-[#5a574f] text-xs mt-0.5 font-mono">{loc.lat.toFixed(4)}°N, {loc.lng.toFixed(4)}°E</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <SacredMap locations={locations} locale={locale} />
        <div className="absolute bottom-4 left-4 bg-[rgba(17,18,16,0.9)] border border-[#2a2c25] rounded px-3 py-2">
          <p className="text-[#5a574f] text-xs font-mono">
            {selected ? `${selected.lat.toFixed(4)}°N, ${selected.lng.toFixed(4)}°E` : 'Hover over a marker'}
          </p>
        </div>
      </div>
    </div>
  )
}
