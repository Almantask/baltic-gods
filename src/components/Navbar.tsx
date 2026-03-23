'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname?.includes(path)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111210] border-b border-[#2a2c25]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/en" className="font-serif text-xl text-[#c8860a] tracking-wide">
          Amber &amp; Moss Archive
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/en"
            className={`font-sans text-xs tracking-widest uppercase ${isActive('/en') && !isActive('/pantheon') && !isActive('/map') ? 'text-[#c8860a] border-b border-[#c8860a]' : 'text-[#8a8578] hover:text-[#e8e4d9]'}`}
          >
            HOME
          </Link>
          <Link
            href="/en/pantheon"
            className={`font-sans text-xs tracking-widest uppercase ${isActive('/pantheon') ? 'text-[#c8860a] border-b border-[#c8860a]' : 'text-[#8a8578] hover:text-[#e8e4d9]'}`}
          >
            PANTHEON
          </Link>
          <Link
            href="/en/map"
            className={`font-sans text-xs tracking-widest uppercase ${isActive('/map') ? 'text-[#c8860a] border-b border-[#c8860a]' : 'text-[#8a8578] hover:text-[#e8e4d9]'}`}
          >
            MAP
          </Link>
        </div>
        <span className="text-[#c8860a] text-lg">✦</span>
      </div>
    </nav>
  )
}
