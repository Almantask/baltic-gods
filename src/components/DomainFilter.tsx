'use client'
const DOMAINS = [
  { id: 'Celestial', icon: '⭐', label: 'Celestial' },
  { id: 'Forest', icon: '🌲', label: 'Forest' },
  { id: 'Water', icon: '〰', label: 'Water' },
  { id: 'Earth', icon: '⛰', label: 'Earth' },
]

interface DomainFilterProps {
  active: string | null
  onChange: (domain: string | null) => void
}

export default function DomainFilter({ active, onChange }: DomainFilterProps) {
  return (
    <div className="flex flex-col gap-1">
      {DOMAINS.map(d => (
        <button
          key={d.id}
          onClick={() => onChange(active === d.id ? null : d.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded text-sm text-left w-full transition-colors ${
            active === d.id
              ? 'bg-[#2d4a2d] text-[#c8860a]'
              : 'text-[#8a8578] hover:bg-[#1a1c18] hover:text-[#e8e4d9]'
          }`}
        >
          <span>{d.icon}</span>
          <span>{d.label}</span>
        </button>
      ))}
    </div>
  )
}
