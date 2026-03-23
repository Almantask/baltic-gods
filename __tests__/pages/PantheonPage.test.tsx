import { render, screen, fireEvent } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import PantheonPage from '@/app/[locale]/pantheon/page';

const messages = {
  pantheon: {
    title: 'The Pantheon',
    subtitle: 'Guardians of forest, sky, and earth',
    search: 'Search deities...',
    filters: {
      all: 'All Domains',
      celestial: 'Celestial',
      forest: 'Forest',
      water: 'Water',
      earth: 'Earth',
    },
  },
  nav: {
    home: 'Home',
    pantheon: 'Pantheon',
    map: 'Map',
    fieldReport: 'Field Report',
  },
  footer: {
    tagline: 'Preserving the forgotten paths',
  },
};

jest.mock('next/navigation', () => ({
  usePathname: () => '/en/pantheon',
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: () => null,
  }),
}));

describe('PantheonPage', () => {
  it('renders the pantheon title', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PantheonPage />
      </NextIntlClientProvider>
    );

    expect(screen.getByText('The Pantheon')).toBeInTheDocument();
  });

  it('renders domain filters', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PantheonPage />
      </NextIntlClientProvider>
    );

    expect(screen.getByText('All Domains')).toBeInTheDocument();
    expect(screen.getByText('Celestial')).toBeInTheDocument();
    expect(screen.getByText('Forest')).toBeInTheDocument();
    expect(screen.getByText('Water')).toBeInTheDocument();
    expect(screen.getByText('Earth')).toBeInTheDocument();
  });

  it('renders search input', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PantheonPage />
      </NextIntlClientProvider>
    );

    const searchInput = screen.getByPlaceholderText('Search deities...');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders deity cards', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PantheonPage />
      </NextIntlClientProvider>
    );

    expect(screen.getByText('Perkūnas')).toBeInTheDocument();
    expect(screen.getByText('Žemyna')).toBeInTheDocument();
  });

  it('filters deities by search query', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PantheonPage />
      </NextIntlClientProvider>
    );

    const searchInput = screen.getByPlaceholderText('Search deities...');
    fireEvent.change(searchInput, { target: { value: 'Perkūnas' } });

    expect(screen.getByText('Perkūnas')).toBeInTheDocument();
  });
});
