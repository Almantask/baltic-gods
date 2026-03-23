'use client';

import { useState } from 'react';

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-6 py-4 glass-panel rounded-lg text-amber-warm placeholder-amber-warm/40 focus:outline-none focus:border-amber-gold/50 transition-colors text-lg"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-2 bg-amber-gold/20 hover:bg-amber-gold/30 text-amber-gold rounded-md transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
