import { locales } from '@/i18n';
import { redirect } from 'next/navigation';

export default function RootLayout() {
  redirect(`/${locales[0]}`);
}
