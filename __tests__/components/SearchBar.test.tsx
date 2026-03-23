import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/ui/SearchBar';

describe('SearchBar', () => {
  it('renders search input', () => {
    const onSearch = jest.fn();
    render(<SearchBar placeholder="Search..." onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('calls onSearch when form is submitted', () => {
    const onSearch = jest.fn();
    render(<SearchBar placeholder="Search..." onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'Perkūnas' } });
    fireEvent.submit(form!);

    expect(onSearch).toHaveBeenCalledWith('Perkūnas');
  });

  it('updates input value on change', () => {
    const onSearch = jest.fn();
    render(<SearchBar placeholder="Search..." onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test query' } });

    expect(input.value).toBe('Test query');
  });

  it('renders submit button', () => {
    const onSearch = jest.fn();
    render(<SearchBar placeholder="Search..." onSearch={onSearch} />);

    const button = screen.getByText('Search');
    expect(button).toBeInTheDocument();
  });
});
