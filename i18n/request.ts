import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const maybeLocale = await requestLocale;

  if (!routing.locales.includes(maybeLocale as any)) notFound();

  return {
    messages: (await import(`../messages/${maybeLocale}.json`)).default,
    locale: maybeLocale
  };
});
