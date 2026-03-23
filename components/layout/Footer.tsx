'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-24 border-t border-moss-green/30 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-2xl font-serif italic text-amber-warm mb-4">
            {t('tagline')}
          </p>
          <p className="text-sm text-amber-warm/60">
            © {new Date().getFullYear()} Baltic Gods. Sacred heritage preserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
