import { getAllDeities } from '@/lib/deities'
import PantheonClient from './PantheonClient'

export default function PantheonPage({ params }: { params: { locale: string } }) {
  const deities = getAllDeities()
  return <PantheonClient deities={deities} locale={params.locale} />
}
