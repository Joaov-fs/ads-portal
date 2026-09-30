import { siteConfig } from '@/config/site';

import { authors } from './authors';
import { contentCategoryLabels, contentKindConfig } from './config';
import { contentRepository, type ContentRepository } from './repository';
import type {
  ContentDocument,
  ContentKind,
  ContentPageModel,
  ContentSummary,
  JsonLd,
} from './types';

const wordsPerMinute = 220;

function contentText(document: ContentDocument) {
  return [
    document.title,
    document.description,
    ...document.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
    ]),
    ...document.faq.flatMap((item) => [item.question, item.answer]),
  ].join(' ');
}

export function calculateReadingMinutes(document: ContentDocument) {
  const words = contentText(document)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function contentPath(document: Pick<ContentDocument, 'kind' | 'slug'>) {
  return `${contentKindConfig[document.kind].path}/${document.slug}`;
}

export function toContentSummary(document: ContentDocument): ContentSummary {
  const readingMinutes = calculateReadingMinutes(document);

  return {
    category: document.category,
    description: document.description,
    href: contentPath(document),
    kind: document.kind,
    readingTime: `${readingMinutes} min de leitura`,
    slug: document.slug,
    title: document.title,
    updatedAt: document.updatedAt,
  };
}

function relatedScore(source: ContentDocument, candidate: ContentDocument) {
  const sharedTags = candidate.tags.filter((tag) => source.tags.includes(tag));
  return (
    sharedTags.length * 3 + (source.category === candidate.category ? 2 : 0)
  );
}

export function getRelatedContent(
  document: ContentDocument,
  repository: ContentRepository = contentRepository,
) {
  return repository
    .listAll()
    .filter((candidate) => candidate !== document)
    .map((candidate) => ({
      candidate,
      score: relatedScore(document, candidate),
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        right.candidate.updatedAt.localeCompare(left.candidate.updatedAt),
    )
    .slice(0, 3)
    .map(({ candidate }) => toContentSummary(candidate));
}

function getRelatedContentByKind(
  document: ContentDocument,
  kind: ContentKind,
  repository: ContentRepository,
) {
  const ranked = repository
    .list(kind)
    .filter((candidate) => candidate !== document)
    .map((candidate) => ({
      candidate,
      score: relatedScore(document, candidate),
    }))
    .sort(
      (left, right) =>
        right.score - left.score ||
        right.candidate.updatedAt.localeCompare(left.candidate.updatedAt),
    );

  return ranked.slice(0, 3).map(({ candidate }) => toContentSummary(candidate));
}

function absoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url).toString();
}

function buildMainSchema(
  document: ContentDocument,
  authorName: string,
  pathname: string,
): JsonLd {
  const common = {
    '@context': 'https://schema.org',
    headline: document.title,
    description: document.description,
    url: absoluteUrl(pathname),
    datePublished: document.publishedAt,
    dateModified: document.updatedAt,
    author: { '@type': 'Organization', name: authorName },
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  if (document.kind === 'calculator') {
    return {
      ...common,
      '@type': 'WebApplication',
      applicationCategory: 'FinanceApplication',
      browserRequirements: 'Requires a modern web browser',
      operatingSystem: 'Any',
    };
  }

  return {
    ...common,
    '@type': document.kind === 'news' ? 'NewsArticle' : 'Article',
    articleSection: contentCategoryLabels[document.category],
  };
}

function buildFaqSchema(document: ContentDocument): JsonLd | undefined {
  if (document.faq.length === 0) {
    return undefined;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: document.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function getContentPageModel<K extends ContentKind>(
  kind: K,
  slug: string,
  repository: ContentRepository = contentRepository,
): ContentPageModel<K> | undefined {
  const document = repository.findBySlug(kind, slug);

  if (!document) {
    return undefined;
  }

  const author = authors.find((item) => item.id === document.authorId);

  if (!author) {
    throw new Error(`Autor não encontrado: ${document.authorId}`);
  }

  const config = contentKindConfig[kind];
  const pathname = contentPath(document);
  const breadcrumbs = [
    { href: '/', label: 'Início' },
    { href: config.path, label: config.label },
    { label: document.title },
  ] as const;

  return {
    author,
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: absoluteUrl('href' in item ? item.href : pathname),
      })),
    },
    breadcrumbs,
    document,
    faqSchema: buildFaqSchema(document),
    mainSchema: buildMainSchema(document, author.name, pathname),
    pathname,
    readingMinutes: calculateReadingMinutes(document),
    related: getRelatedContent(document, repository),
    relatedByKind: {
      calculator: getRelatedContentByKind(document, 'calculator', repository),
      guide: getRelatedContentByKind(document, 'guide', repository),
      news: getRelatedContentByKind(document, 'news', repository),
    },
  };
}

export function listContentSummaries(
  kind?: ContentKind,
  repository: ContentRepository = contentRepository,
) {
  const documents = kind ? repository.list(kind) : repository.listAll();

  return [...documents]
    .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt))
    .map(toContentSummary);
}

export function getContentStaticParams(kind: ContentKind) {
  return contentRepository.list(kind).map(({ slug }) => ({ slug }));
}
