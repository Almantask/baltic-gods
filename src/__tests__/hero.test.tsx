import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/en',
}))

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('HeroSection', () => {
  it('renders the title', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const HeroSection = require('../components/HeroSection').default
    render(<HeroSection locale="en" />)
    expect(screen.getByText(/Baltic Ethos/i)).toBeInTheDocument()
  })
})
