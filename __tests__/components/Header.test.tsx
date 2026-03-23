import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      home: 'Home',
      pantheon: 'Pantheon',
      map: 'Map',
      fieldReport: 'Field Report',
    };
    return translations[key] || key;
  },
  useLocale: () => 'en',
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
}));

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />);
    expect(screen.getByText('Baltic Gods')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Pantheon')).toBeInTheDocument();
    expect(screen.getByText('Map')).toBeInTheDocument();
    expect(screen.getByText('Field Report')).toBeInTheDocument();
  });

  it('renders language switcher', () => {
    render(<Header />);
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('LT')).toBeInTheDocument();
    expect(screen.getByText('LV')).toBeInTheDocument();
  });
});
