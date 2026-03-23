import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Baltic Gods — Amber & Moss Archive',
  description: 'Explore the ancient deities of Baltic mythology',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#111210', color: '#e8e4d9' }}>
        {children}
      </body>
    </html>
  )
}
