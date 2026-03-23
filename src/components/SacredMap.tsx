'use client'
import { useEffect, useRef } from 'react'

interface MapLocation {
  name: string
  lat: number
  lng: number
  description: string
  deitySlug: string
  deityName: string
}

interface SacredMapProps {
  locations: MapLocation[]
  locale?: string
  zoom?: number
  centerLat?: number
  centerLng?: number
}

export default function SacredMap({ locations, locale = 'en', zoom = 7, centerLat = 55.5, centerLng = 24.0 }: SacredMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || mapInstanceRef.current) return

    const initMap = async () => {
      const L = (await import('leaflet')).default

      const map = L.map(mapRef.current!, {
        center: [centerLat, centerLng],
        zoom,
        zoomControl: false,
      })

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap ©CartoDB',
        maxZoom: 19,
      }).addTo(map)

      const amberIcon = L.divIcon({
        html: `<div style="width:12px;height:12px;background:#c8860a;border:2px solid #d4940f;border-radius:50%;box-shadow:0 0 8px #c8860a;"></div>`,
        className: '',
        iconSize: [12, 12],
      })

      locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: amberIcon })
        marker.bindPopup(`
          <div style="background:#1a1c18;color:#e8e4d9;padding:12px;border-radius:4px;border:1px solid #2a2c25;min-width:180px;">
            <p style="color:#c8860a;font-weight:bold;margin:0 0 4px">${loc.deityName}</p>
            <p style="font-size:12px;margin:0 0 4px">${loc.name}</p>
            <p style="font-size:11px;color:#8a8578;margin:0 0 8px">${loc.description}</p>
            <a href="/${locale}/deity/${loc.deitySlug}" style="color:#c8860a;font-size:11px;text-decoration:none;">View Deity →</a>
          </div>
        `, {
          className: 'sacred-popup',
        })
        marker.addTo(map)
      })

      mapInstanceRef.current = map
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        const map = mapInstanceRef.current as { remove: () => void }
        map.remove()
        mapInstanceRef.current = null
      }
    }
  }, [locations, locale, zoom, centerLat, centerLng])

  return <div ref={mapRef} className="w-full h-full" />
}
