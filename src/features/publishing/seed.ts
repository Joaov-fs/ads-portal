import { contentFiles } from '@/content/files';

import type { PublishingRecord } from './types';

const guideSlugs = contentFiles
  .filter((document) => document.kind === 'guide')
  .map(({ slug }) => slug);
const calculatorSlugs = contentFiles
  .filter((document) => document.kind === 'calculator')
  .map(({ slug }) => slug);

export const initialPublishingRecords = contentFiles.map(
  (document, index): PublishingRecord => ({
    id: `${document.kind}:${document.slug}`,
    kind: document.kind,
    slug: document.slug,
    title: document.title,
    description: document.description,
    category: document.category,
    sections: document.sections,
    status: 'published',
    updatedAt: document.updatedAt,
    updatedBy: 'Conteúdo importado',
    relatedGuideSlug:
      document.kind === 'news'
        ? guideSlugs[index % Math.max(guideSlugs.length, 1)]
        : undefined,
    relatedCalculatorSlug:
      document.kind === 'guide'
        ? calculatorSlugs[index % Math.max(calculatorSlugs.length, 1)]
        : undefined,
  }),
);
