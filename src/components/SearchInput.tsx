'use client'
interface SearchInputProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}
export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a574f] text-sm">🔍</span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder ?? 'Seek a deity by name or rune...'}
        className="w-full bg-[#1a1c18] text-[#e8e4d9] placeholder-[#5a574f] text-sm pl-9 pr-3 py-2 rounded border border-[#2a2c25] focus:border-[#c8860a] focus:outline-none"
      />
    </div>
  )
}
