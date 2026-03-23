'use client'
import Link from 'next/link'

interface HeroSectionProps {
  locale?: string
}

export default function HeroSection({ locale = 'en' }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #0a0f0a, #111210 40%, #111210)',
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(44,74,44,0.05) 2px,
            rgba(44,74,44,0.05) 4px
          )`,
        }}
      />
      <div className="relative text-center max-w-4xl mx-auto px-6">
        <p className="text-[#8a8578] text-xs tracking-widest uppercase mb-4">✦ BALTIC MYTHOLOGY ✦</p>
        <h1 className="font-serif text-6xl md:text-8xl text-[#c8860a] font-normal leading-tight mb-6">
          Baltic Ethos:<br />
          <em>The Ancient Paths</em>
        </h1>
        <p className="text-[#8a8578] text-lg italic mb-10">
          Where ancient spirits walk between the pines and amber shores...
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href={`/${locale}/pantheon`}
            className="bg-[#c8860a] text-[#111210] font-sans text-sm tracking-widest uppercase px-8 py-3 rounded hover:bg-[#d4940f] transition-colors"
          >
            Enter the Pantheon
          </Link>
          <Link
            href={`/${locale}/map`}
            className="border border-[#c8860a] text-[#c8860a] font-sans text-sm tracking-widest uppercase px-8 py-3 rounded hover:bg-[#c8860a] hover:text-[#111210] transition-colors"
          >
            View Sacred Map
          </Link>
        </div>
      </div>
    </section>
  )
}
