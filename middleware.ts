import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'lt', 'lv'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(lt|lv|en)/:path*'],
};
