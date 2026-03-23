'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const MapPicker = dynamic(() => import('@/components/MapPicker'), { ssr: false })

export default function FieldReportPage() {
  const [submitted, setSubmitted] = useState(false)
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [formData, setFormData] = useState({
    locationName: '',
    guardian: '',
    description: '',
    references: '',
    siteType: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#111210] flex items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <p className="text-[#c8860a] text-4xl mb-4">✦</p>
          <h2 className="font-serif text-3xl text-[#c8860a] mb-4">Offering Received</h2>
          <p className="font-serif italic text-[#8a8578] text-lg">
            Your offering shall be inscribed in the living relic archive.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen relative flex items-start justify-center py-16"
      style={{ background: 'linear-gradient(to bottom, #0a0f0a, #0f140f, #111210)' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, #3d5c3d 30px, #3d5c3d 31px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, #3d5c3d 30px, #3d5c3d 31px)`,
        }}
      />
      <div className="relative w-full max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#5a574f] text-xs tracking-widest uppercase mb-3">✦ FIELD RESEARCH ✦</p>
          <h1 className="font-serif text-5xl italic text-[#c8860a]">Offer Your Wisdom</h1>
          <p className="text-[#8a8578] text-sm mt-3 italic">Document a sacred site for the living relic archive</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[rgba(20,22,15,0.85)] backdrop-blur border border-[#3d5c3d] rounded-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#8a8578] text-xs tracking-widest uppercase mb-2">Location Name</label>
              <input
                type="text"
                value={formData.locationName}
                onChange={e => setFormData(p => ({ ...p, locationName: e.target.value }))}
                className="w-full bg-[#111210] border border-[#2a2c25] text-[#e8e4d9] rounded px-3 py-2 text-sm focus:border-[#c8860a] focus:outline-none"
                placeholder="Sacred Grove of..."
              />
            </div>
            <div>
              <label className="block text-[#8a8578] text-xs tracking-widest uppercase mb-2">Guardian / Contact</label>
              <input
                type="text"
                value={formData.guardian}
                onChange={e => setFormData(p => ({ ...p, guardian: e.target.value }))}
                className="w-full bg-[#111210] border border-[#2a2c25] text-[#e8e4d9] rounded px-3 py-2 text-sm focus:border-[#c8860a] focus:outline-none"
                placeholder="Your name or alias"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#8a8578] text-xs tracking-widest uppercase mb-2">Site Type</label>
            <select
              value={formData.siteType}
              onChange={e => setFormData(p => ({ ...p, siteType: e.target.value }))}
              className="w-full bg-[#111210] border border-[#2a2c25] text-[#e8e4d9] rounded px-3 py-2 text-sm focus:border-[#c8860a] focus:outline-none"
            >
              <option value="">Select site type...</option>
              <option value="grove">Sacred Grove</option>
              <option value="stone">Standing Stone</option>
              <option value="mound">Burial Mound</option>
              <option value="spring">Sacred Spring</option>
              <option value="hill">Sacred Hill</option>
              <option value="temple">Temple Ruins</option>
            </select>
          </div>

          <div>
            <label className="block text-[#8a8578] text-xs tracking-widest uppercase mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={e => setFormData(p => ({ ...p, description: e.target.value }))}
              rows={4}
              className="w-full bg-[#111210] border border-[#2a2c25] text-[#e8e4d9] rounded px-3 py-2 text-sm focus:border-[#c8860a] focus:outline-none resize-none"
              placeholder="Describe the sacred site, its history, and any rituals observed..."
            />
          </div>

          <div>
            <label className="block text-[#8a8578] text-xs tracking-widest uppercase mb-2">References</label>
            <input
              type="text"
              value={formData.references}
              onChange={e => setFormData(p => ({ ...p, references: e.target.value }))}
              className="w-full bg-[#111210] border border-[#2a2c25] text-[#e8e4d9] rounded px-3 py-2 text-sm focus:border-[#c8860a] focus:outline-none"
              placeholder="Books, sources, oral traditions..."
            />
          </div>

          <div>
            <label className="block text-[#8a8578] text-xs tracking-widest uppercase mb-2">Mark the Ley Line</label>
            <MapPicker onCoordinateSelect={(lat, lng) => setCoords({ lat, lng })} />
            {coords && (
              <p className="text-[#c8860a] text-xs font-mono mt-2">
                Selected: {coords.lat}°N, {coords.lng}°E
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#c8860a] text-[#111210] font-sans text-sm tracking-widest uppercase py-3 rounded hover:bg-[#d4940f] transition-colors"
          >
            Submit Field Report
          </button>

          <p className="text-center font-serif italic text-[#5a574f] text-sm">
            Your offering shall be inscribed in the living relic archive.
          </p>
        </form>
      </div>
    </div>
  )
}
