import { render, screen } from '@testing-library/react';
import DeityCard from '@/components/ui/DeityCard';
import { Deity } from '@/types';

jest.mock('next-intl', () => ({
  useLocale: () => 'en',
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
}));

const mockDeity: Deity = {
  id: 'perkunas',
  name: 'Perkūnas',
  domain: 'celestial',
  title: 'Thunder God, Sky Wielder',
  description: 'The supreme god of thunder, lightning, and sky in Baltic mythology.',
  symbolism: ['Thunder', 'Oak Tree', 'Axe', 'Fire'],
  lore: 'Perkūnas rides across the heavens in a chariot of fire.',
  locations: [],
  featured: true,
};

describe('DeityCard', () => {
  it('renders deity name', () => {
    render(<DeityCard deity={mockDeity} />);
    expect(screen.getByText('Perkūnas')).toBeInTheDocument();
  });

  it('renders deity title', () => {
    render(<DeityCard deity={mockDeity} />);
    expect(screen.getByText('Thunder God, Sky Wielder')).toBeInTheDocument();
  });

  it('renders deity description', () => {
    render(<DeityCard deity={mockDeity} />);
    expect(
      screen.getByText('The supreme god of thunder, lightning, and sky in Baltic mythology.')
    ).toBeInTheDocument();
  });

  it('renders deity domain', () => {
    render(<DeityCard deity={mockDeity} />);
    expect(screen.getByText('celestial')).toBeInTheDocument();
  });

  it('renders symbolism tags', () => {
    render(<DeityCard deity={mockDeity} />);
    expect(screen.getByText('Thunder')).toBeInTheDocument();
    expect(screen.getByText('Oak Tree')).toBeInTheDocument();
    expect(screen.getByText('Axe')).toBeInTheDocument();
  });

  it('renders as a link to deity detail page', () => {
    const { container } = render(<DeityCard deity={mockDeity} />);
    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/en/deity/perkunas');
  });
});
