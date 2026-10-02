import { describe, expect, it } from 'vitest';

import { buildContentMetadata } from './metadata';
import {
  calculateReadingMinutes,
  getContentPageModel,
  getContentStaticParams,
  listContentSummaries,
} from './pipeline';
import { contentRepository } from './repository';

describe('content pipeline', () => {
  it('loads typed file content through the repository', () => {
    expect(contentRepository.list('news')).toHaveLength(17);
    expect(contentRepository.list('guide')).toHaveLength(2);
    expect(contentRepository.list('calculator')).toHaveLength(50);
    expect(getContentStaticParams('guide')).toEqual([
      { slug: 'como-montar-reserva-de-emergencia' },
      { slug: 'como-entender-o-holerite' },
    ]);
  });

  it('derives page data, schemas and related content from one document', () => {
    const model = getContentPageModel(
      'news',
      'inss-2026-teto-de-r-8-475-55-e-aliquotas-por-faixa',
    );

    expect(model).toBeDefined();
    expect(model?.author.name).toBe('Redação PortalFina');
    expect(model?.readingMinutes).toBeGreaterThan(0);
    expect(model?.mainSchema['@type']).toBe('NewsArticle');
    expect(model?.faqSchema?.['@type']).toBe('FAQPage');
    expect(model?.breadcrumbSchema['@type']).toBe('BreadcrumbList');
    expect(model?.related.map((item) => item.slug)).toContain(
      'como-entender-o-holerite',
    );
    expect(model?.relatedByKind.calculator.length).toBeGreaterThan(0);
    expect(model?.relatedByKind.guide.length).toBeGreaterThan(0);
    expect(model?.relatedByKind.news.length).toBeGreaterThan(0);
  });

  it('builds canonical and social metadata from the same model', () => {
    const model = getContentPageModel('calculator', 'juros-compostos');

    expect(model).toBeDefined();
    if (!model) return;

    const metadata = buildContentMetadata(model);
    expect(metadata.title).toBe(model.document.title);
    expect(metadata.description).toBe(model.document.description);
    expect(metadata.alternates?.canonical).toBe(model.pathname);
    expect(metadata.openGraph?.url).toBe(model.pathname);
  });

  it('calculates reading time and lists stable friendly URLs', () => {
    const document = contentRepository.list('guide')[0];
    expect(calculateReadingMinutes(document)).toBeGreaterThanOrEqual(1);
    expect(listContentSummaries('guide')[0]?.href).toMatch(
      /^\/guias\/[a-z0-9-]+$/,
    );
  });

  it('links every news item to existing calculators and keeps slugs unique', () => {
    const slugs = contentRepository.listAll().map((item) => item.slug);

    expect(new Set(slugs).size).toBe(slugs.length);

    for (const news of contentRepository.list('news')) {
      for (const slug of news.featuredCalculators ?? []) {
        expect(contentRepository.findBySlug('calculator', slug)).toBeDefined();
      }
    }
  });
});
