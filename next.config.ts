import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  basePath: process.env.NODE_ENV === 'production' ? '/baltic-gods' : '',
  trailingSlash: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withNextIntl(withMDX(nextConfig));
