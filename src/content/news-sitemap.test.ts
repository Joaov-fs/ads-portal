import { describe, expect, it } from 'vitest';

import { buildNewsSitemap } from './news-sitemap';
import { contentRepository } from './repository';

describe('news sitemap', () => {
  it('lists only news from the last two days in Google News format', () => {
    const latest = [...contentRepository.list('news')].sort((a, b) =>
      b.publishedAt.localeCompare(a.publishedAt),
    )[0];
    const now = new Date(`${latest.publishedAt}T12:00:00Z`);
    const xml = buildNewsSitemap(now);

    expect(xml).toContain(
      'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"',
    );
    expect(xml).toContain(`/noticias/${latest.slug}</loc>`);
    expect(xml).toContain('<news:language>pt</news:language>');

    const old = contentRepository
      .list('news')
      .find((item) => item.publishedAt < '2026-10-01');
    if (old) {
      expect(xml).not.toContain(`/noticias/${old.slug}</loc>`);
    }
  });
});
