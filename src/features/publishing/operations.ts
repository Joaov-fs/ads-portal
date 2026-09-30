import type {
  PublishingFilters,
  PublishingPage,
  PublishingRecord,
  PublishingStats,
  PublishingStatus,
} from './types';

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim();
}

export function filterPublishingRecords(
  records: readonly PublishingRecord[],
  filters: PublishingFilters,
): PublishingPage {
  const query = normalize(filters.query ?? '');
  const filtered = records.filter(
    (record) =>
      record.kind === filters.kind &&
      (!filters.category ||
        filters.category === 'all' ||
        record.category === filters.category) &&
      (!filters.status ||
        filters.status === 'all' ||
        record.status === filters.status) &&
      (!query ||
        normalize(
          `${record.title} ${record.description} ${record.slug}`,
        ).includes(query)),
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / filters.pageSize));
  const page = Math.min(Math.max(filters.page, 1), pageCount);
  const offset = (page - 1) * filters.pageSize;

  return {
    items: filtered.slice(offset, offset + filters.pageSize),
    page,
    pageCount,
    pageSize: filters.pageSize,
    total: filtered.length,
  };
}

export function calculatePublishingStats(
  records: readonly PublishingRecord[],
): PublishingStats {
  return records.reduce<PublishingStats>(
    (stats, record) => ({
      ...stats,
      [record.kind]: stats[record.kind] + 1,
      [record.status]: stats[record.status] + 1,
    }),
    {
      calculator: 0,
      draft: 0,
      guide: 0,
      news: 0,
      published: 0,
      review: 0,
    },
  );
}

const allowedTransitions = {
  draft: ['draft', 'review'],
  review: ['draft', 'review', 'published'],
  published: ['review', 'published'],
} as const satisfies Record<PublishingStatus, readonly PublishingStatus[]>;

export function canTransitionStatus(
  from: PublishingStatus,
  to: PublishingStatus,
) {
  return (allowedTransitions[from] as readonly PublishingStatus[]).includes(to);
}

export function slugify(value: string) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
