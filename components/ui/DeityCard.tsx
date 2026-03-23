'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Deity } from '@/types';

interface DeityCardProps {
  deity: Deity;
  size?: 'small' | 'medium' | 'large';
}

export default function DeityCard({ deity, size = 'medium' }: DeityCardProps) {
  const locale = useLocale();

  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-1 md:col-span-2',
    large: 'col-span-1 md:col-span-3',
  };

  return (
    <Link
      href={`/${locale}/deity/${deity.id}`}
      className={`${sizeClasses[size]} group block`}
    >
      <article className="glass-panel p-6 h-full hover:border-amber-gold/50 transition-all duration-300 rounded-lg">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-moss-light">
              {deity.domain}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-serif text-amber-gold group-hover:text-amber-glow transition-colors mb-2">
            {deity.name}
          </h3>

          <p className="text-lg italic text-amber-warm/80 mb-4">
            {deity.title}
          </p>

          <p className="text-amber-warm/70 line-clamp-3 mb-4">
            {deity.description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {deity.symbolism.slice(0, 3).map((symbol) => (
                <span
                  key={symbol}
                  className="px-3 py-1 text-xs bg-moss-green/30 text-amber-warm rounded-full"
                >
                  {symbol}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
