import type { ContentCategory, ContentKind, ContentSection } from '@/content';

export type PublishingStatus = 'draft' | 'review' | 'published';

export type PublishingRecord = Readonly<{
  category: ContentCategory;
  description: string;
  id: string;
  kind: ContentKind;
  relatedCalculatorSlug?: string;
  relatedGuideSlug?: string;
  sections: readonly ContentSection[];
  slug: string;
  status: PublishingStatus;
  title: string;
  updatedAt: string;
  updatedBy: string;
}>;

export type PublishingRecordInput = Omit<
  PublishingRecord,
  'id' | 'updatedAt' | 'updatedBy'
> &
  Readonly<{ id?: string }>;

export type PublishingFilters = Readonly<{
  category?: ContentCategory | 'all';
  kind: ContentKind;
  page: number;
  pageSize: number;
  query?: string;
  status?: PublishingStatus | 'all';
}>;

export type PublishingPage = Readonly<{
  items: readonly PublishingRecord[];
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}>;

export type PublishingStats = Readonly<{
  calculator: number;
  draft: number;
  guide: number;
  news: number;
  published: number;
  review: number;
}>;

export const publishingStatusLabels = {
  draft: 'Rascunho',
  review: 'Em revisão',
  published: 'Publicado',
} as const satisfies Record<PublishingStatus, string>;
