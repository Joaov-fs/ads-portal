import { describe, expect, it } from 'vitest';

import { buildContentMetadata } from './metadata';
import {
  calculateReadingMinutes,
  getContentPageModel,
  getContentStaticParams,
  listContentSummaries,
} from './pipeline';
import { contentRepository } from './repository';
import { metaTitleOf, metaTitles } from './seo';

describe('content pipeline', () => {
  it('loads typed file content through the repository', () => {
    expect(contentRepository.list('news')).toHaveLength(21);
    expect(contentRepository.list('guide')).toHaveLength(41);
    expect(contentRepository.list('calculator')).toHaveLength(50);
    const guideSlugs = getContentStaticParams('guide').map((item) => item.slug);

    expect(guideSlugs).toContain('como-montar-reserva-de-emergencia');
    expect(guideSlugs).toContain('como-entender-o-holerite');
    expect(new Set(guideSlugs).size).toBe(guideSlugs.length);
  });

  it('gives every news item a cover number that fits the generated cover', () => {
    for (const news of contentRepository.list('news')) {
      const cover = news.highlights?.[0];

      expect(cover, news.slug).toBeDefined();
      expect(cover?.value.length, news.slug).toBeLessThanOrEqual(14);
      expect(cover?.label.length, news.slug).toBeLessThanOrEqual(40);
    }
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
      'como-funciona-o-desconto-do-inss',
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
    expect(metadata.title).toBe(metaTitleOf(model.document));
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

    const withCalculators = [
      ...contentRepository.list('news'),
      ...contentRepository.list('guide'),
    ];

    for (const news of withCalculators) {
      for (const slug of news.featuredCalculators ?? []) {
        expect(contentRepository.findBySlug('calculator', slug)).toBeDefined();
      }
    }
  });

  it('keeps search titles short and descriptions within snippet length', () => {
    const documents = contentRepository.listAll();
    const slugs = new Set(documents.map((item) => item.slug));

    for (const slug of Object.keys(metaTitles)) {
      expect(slugs.has(slug)).toBe(true);
    }

    for (const document of documents) {
      expect(metaTitleOf(document).length).toBeLessThanOrEqual(52);
      expect(document.description.length).toBeGreaterThanOrEqual(80);
      expect(document.description.length).toBeLessThanOrEqual(170);
    }
  });

  it('gives every calculator its own example, factors and questions', () => {
    const calculators = contentRepository.list('calculator');
    const questions = calculators.flatMap((item) =>
      item.faq.map((entry) => entry.question),
    );

    expect(new Set(questions).size).toBe(questions.length);

    for (const calculator of calculators) {
      const headings = calculator.sections.map((section) => section.heading);

      expect(headings).toContain('Exemplo prático');
      expect(calculator.faq.length).toBeGreaterThanOrEqual(3);
    }
  });
});
