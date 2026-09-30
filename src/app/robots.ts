import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/design-system', '/admin', '/acesso-admin'],
    },
    host: siteConfig.url,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
