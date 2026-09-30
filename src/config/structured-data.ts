import { siteConfig } from './site';

const organizationId = `${siteConfig.url}/#organization`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icons/icon-512.png`,
} as const;

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: { '@id': organizationId },
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/pesquisa?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
} as const;
