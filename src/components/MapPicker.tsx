'use client'
import { useState } from 'react'

interface MapPickerProps {
  onCoordinateSelect?: (lat: number, lng: number) => void
}

export default function MapPicker({ onCoordinateSelect }: MapPickerProps) {
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const lat = 57.5 - y * 5
    const lng = 21.0 + x * 7
    const coords = { lat: parseFloat(lat.toFixed(4)), lng: parseFloat(lng.toFixed(4)) }
    setSelected(coords)
    onCoordinateSelect?.(coords.lat, coords.lng)
  }

  return (
    <div
      className="relative w-full h-48 bg-[#0a0f0a] border border-[#3d5c3d] rounded cursor-crosshair flex items-center justify-center overflow-hidden"
      onClick={handleClick}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #3d5c3d 20px, #3d5c3d 21px),
            repeating-linear-gradient(90deg, transparent, transparent 20px, #3d5c3d 20px, #3d5c3d 21px)`,
        }}
      />
      {selected ? (
        <div className="text-center z-10">
          <p className="text-[#c8860a] text-sm font-mono">{selected.lat}°N, {selected.lng}°E</p>
          <p className="text-[#5a574f] text-xs mt-1">Click to reposition</p>
        </div>
      ) : (
        <div className="text-center z-10">
          <p className="text-[#5a574f] text-2xl mb-2">⊕</p>
          <p className="text-[#5a574f] text-sm">Click to Mark the Ley Line</p>
        </div>
      )}
    </div>
  )
}
