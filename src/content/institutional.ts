import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export function buildInstitutionalMetadata(
  title: string,
  description: string,
  pathname: `/${string}`,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: 'website',
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: pathname,
    },
    twitter: { card: 'summary', title, description },
  };
}
