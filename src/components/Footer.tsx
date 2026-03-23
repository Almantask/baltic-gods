import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111210] border-t border-[#2a2c25] py-8">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div>
          <p className="font-serif text-[#c8860a] text-lg">The Archive</p>
          <p className="text-[#5a574f] text-xs tracking-widest mt-1">MMXXIV THE LIVING RELIC ARCHIVE</p>
        </div>
        <div className="flex gap-6">
          <Link href="/en" className="text-[#c8860a] text-sm hover:text-[#d4940f] font-sans">Sacred Groves</Link>
          <Link href="/en" className="text-[#c8860a] text-sm hover:text-[#d4940f] font-sans">Ritual Circles</Link>
          <Link href="/en" className="text-[#c8860a] text-sm hover:text-[#d4940f] font-sans">Elder Sages</Link>
        </div>
      </div>
    </footer>
  )
}
