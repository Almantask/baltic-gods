'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-slate-200 rounded-lg flex items-center justify-center">
      <p className="text-slate-600">Loading map...</p>
    </div>
  ),
});

export default function MapPage() {
  const locations = useMemo(
    () => [
      {
        name: 'Vilnius',
        deity: 'Perkūnas',
        lat: 54.6872,
        lng: 25.2797,
        description: 'Ancient thunder god worship site',
      },
      {
        name: 'Trakai',
        deity: 'Perkūnas',
        lat: 54.6378,
        lng: 24.9349,
        description: 'Historical castle with pagan roots',
      },
      {
        name: 'Palanga',
        deity: 'Saulė',
        lat: 55.9208,
        lng: 21.0686,
        description: 'Sun goddess sacred coastal site',
      },
      {
        name: 'Kernavė',
        deity: 'Saulė',
        lat: 54.8769,
        lng: 24.8519,
        description: 'Ancient archaeological site',
      },
      {
        name: 'Anykščiai',
        deity: 'Mėnuo',
        lat: 55.5269,
        lng: 25.1031,
        description: 'Moon god veneration site',
      },
    ],
    []
  );

  return (
    <div className="bg-gradient-to-b from-slate-50 to-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Interactive Map
          </h1>
          <p className="text-xl text-slate-600">
            Explore deity locations across the Baltic region
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-4 mb-8">
          <Map locations={locations} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{location.name}</h3>
              <p className="text-amber-700 font-semibold mb-2">{location.deity}</p>
              <p className="text-slate-600 text-sm">{location.description}</p>
              <p className="text-slate-400 text-xs mt-2">
                📍 {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
