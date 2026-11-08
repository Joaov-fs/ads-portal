import { siteConfig } from '@/config/site';
import { contentPath } from './pipeline';
import { contentRepository } from './repository';

/** Janela que o Google Notícias aceita no sitemap de notícias. */
const newsWindowDays = 2;

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildNewsSitemap(now = new Date()) {
  const cutoff = new Date(now);
  cutoff.setUTCDate(cutoff.getUTCDate() - newsWindowDays);
  const cutoffDay = cutoff.toISOString().slice(0, 10);

  const entries = [...contentRepository.list('news')]
    .filter((item) => item.publishedAt >= cutoffDay)
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
    .map((item) => {
      const url = new URL(contentPath(item), siteConfig.url).toString();
      return [
        '  <url>',
        `    <loc>${escapeXml(url)}</loc>`,
        '    <news:news>',
        '      <news:publication>',
        `        <news:name>${escapeXml(siteConfig.name)}</news:name>`,
        '        <news:language>pt</news:language>',
        '      </news:publication>',
        `      <news:publication_date>${item.publishedAt}</news:publication_date>`,
        `      <news:title>${escapeXml(item.title)}</news:title>`,
        '    </news:news>',
        '  </url>',
      ].join('\n');
    });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
}
