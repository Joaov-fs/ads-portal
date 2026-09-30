import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { contentKindConfig, listContentSummaries } from '@/content';
import { categories } from '@/features/public-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const allContent = listContentSummaries();
  const institutionalPages = [
    '/sobre',
    '/contato',
    '/politica-de-privacidade',
    '/politica-de-cookies',
    '/termos-de-uso',
    '/autor',
  ].map((pathname) => ({
    url: new URL(pathname, siteConfig.url).toString(),
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));
  const contentIndexes = Object.values(contentKindConfig).map((config) => ({
    url: new URL(config.path, siteConfig.url).toString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  const contentPages = allContent.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: item.updatedAt,
    changeFrequency:
      item.kind === 'news' ? ('daily' as const) : ('monthly' as const),
    priority: item.kind === 'calculator' ? 0.9 : 0.7,
  }));
  const categoryPages = categories
    .filter(
      (category) =>
        (category.slug === 'guias' &&
          allContent.some((item) => item.kind === 'guide')) ||
        allContent.some((item) => item.category === category.slug),
    )
    .map((category) => ({
      url: new URL(`/categorias/${category.slug}`, siteConfig.url).toString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: 'daily',
      priority: 1,
    },
    ...contentIndexes,
    ...contentPages,
    ...categoryPages,
    ...institutionalPages,
  ];
}
