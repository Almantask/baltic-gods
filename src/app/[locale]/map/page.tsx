import { getAllDeities } from '@/lib/deities'
import MapPageClient from './MapPageClient'

export default function MapPage({ params }: { params: { locale: string } }) {
  const deities = getAllDeities()
  const locations = deities.flatMap(d =>
    d.locations.map(loc => ({
      ...loc,
      deitySlug: d.slug,
      deityName: d.name,
    }))
  )
  return <MapPageClient locations={locations} locale={params.locale} />
}
