import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import HomePage from '@/app/[locale]/page';

const messages = {
  home: {
    hero: {
      title: 'Baltic Ethos: The Ancient Paths',
      subtitle: 'Where forest whispers meet sacred stone',
    },
    search: {
      title: 'Seek the Unseen',
      placeholder: 'Search deities, places, lore...',
    },
    atlas: {
      title: 'The Sacred Atlas',
      subtitle: 'Trace the ley lines across the ancient lands',
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
  usePathname: () => '/en',
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('HomePage', () => {
  it('renders the hero title', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );

    expect(
      screen.getByText('Baltic Ethos: The Ancient Paths')
    ).toBeInTheDocument();
  });

  it('renders the hero subtitle', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );

    expect(
      screen.getByText('Where forest whispers meet sacred stone')
    ).toBeInTheDocument();
  });

  it('renders the search section', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );

    expect(screen.getByText('Seek the Unseen')).toBeInTheDocument();
  });

  it('renders featured deities', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <HomePage />
      </NextIntlClientProvider>
    );

    expect(screen.getByText('Perkūnas')).toBeInTheDocument();
    expect(screen.getByText('Saulė')).toBeInTheDocument();
    expect(screen.getByText('Laima')).toBeInTheDocument();
  });
});
