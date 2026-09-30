import { describe, expect, it } from 'vitest';

import { initialPublishingRecords } from './seed';
import {
  calculatePublishingStats,
  canTransitionStatus,
  filterPublishingRecords,
  slugify,
} from './operations';

describe('publishing operations', () => {
  it('calculates the operational dashboard from one record collection', () => {
    expect(calculatePublishingStats(initialPublishingRecords)).toMatchObject({
      news: 2,
      guide: 2,
      calculator: 50,
      published: 54,
      draft: 0,
    });
  });

  it('searches, filters and paginates records without UI coupling', () => {
    const page = filterPublishingRecords(initialPublishingRecords, {
      kind: 'calculator',
      query: 'juros',
      status: 'published',
      category: 'all',
      page: 1,
      pageSize: 1,
    });

    expect(page.total).toBeGreaterThan(1);
    expect(page.items).toHaveLength(1);
    expect(page.pageCount).toBe(page.total);
  });

  it('enforces the draft, review and publication workflow', () => {
    expect(canTransitionStatus('draft', 'published')).toBe(false);
    expect(canTransitionStatus('draft', 'review')).toBe(true);
    expect(canTransitionStatus('review', 'published')).toBe(true);
    expect(canTransitionStatus('published', 'draft')).toBe(false);
  });

  it('creates stable URL slugs from Portuguese titles', () => {
    expect(slugify('Guia de Férias & 13º Salário')).toBe(
      'guia-de-ferias-13-salario',
    );
  });
});
