import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../globals.css'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'lt' }, { locale: 'lv' }]
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}
