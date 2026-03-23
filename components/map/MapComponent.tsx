'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '@/types';

interface MapComponentProps {
  locations: Location[];
  selectedLocation?: string | null;
  onLocationClick?: (locationId: string) => void;
}

export default function MapComponent({
  locations,
  selectedLocation,
  onLocationClick,
}: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-4 h-4 bg-amber-gold rounded-full shadow-lg shadow-amber-glow/50 border-2 border-amber-glow"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    const selectedIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-6 h-6 bg-amber-glow rounded-full shadow-lg shadow-amber-glow animate-pulse border-2 border-amber-gold"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    if (!mapRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [55.5, 24.5],
        zoom: 7,
        zoomControl: false,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      mapRef.current = map;
    }

    const map = mapRef.current;

    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    locations.forEach((location) => {
      const icon =
        selectedLocation === location.id ? selectedIcon : customIcon;

      const marker = L.marker(location.coordinates, { icon }).addTo(map);

      marker.bindPopup(`
        <div class="text-sm">
          <h3 class="font-serif text-lg text-amber-gold mb-1">${location.name}</h3>
          <p class="text-amber-warm/80 mb-2">${location.description}</p>
          <p class="text-xs text-amber-warm/60">${location.type}</p>
        </div>
      `);

      if (onLocationClick) {
        marker.on('click', () => {
          onLocationClick(location.id);
        });
      }
    });

    if (selectedLocation) {
      const location = locations.find((loc) => loc.id === selectedLocation);
      if (location) {
        map.setView(location.coordinates, 10);
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient, locations, selectedLocation, onLocationClick]);

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />;
}
