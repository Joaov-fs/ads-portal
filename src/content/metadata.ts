import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

import { contentKindConfig } from './config';
import { metaTitleOf } from './seo';
import type { ContentKind, ContentPageModel } from './types';

export function buildContentMetadata(model: ContentPageModel): Metadata {
  const { document, pathname } = model;
  const articleFields =
    document.kind === 'calculator'
      ? {}
      : {
          publishedTime: document.publishedAt,
          modifiedTime: document.updatedAt,
          authors: [model.author.name],
        };

  return {
    title: metaTitleOf(document),
    description: document.description,
    alternates: { canonical: pathname },
    openGraph: {
      ...articleFields,
      type: document.kind === 'calculator' ? 'website' : 'article',
      title: metaTitleOf(document),
      description: document.description,
      siteName: siteConfig.name,
      locale: 'pt_BR',
      url: pathname,
      images: document.coverImage
        ? [{ alt: document.coverImage.alt, url: document.coverImage.src }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitleOf(document),
      description: document.description,
      images: document.coverImage ? [document.coverImage.src] : undefined,
    },
  };
}

const indexTitles: Readonly<Record<ContentKind, string>> = {
  calculator: 'Calculadoras financeiras e trabalhistas',
  guide: 'Guias práticos de finanças, trabalho e benefícios',
  news: 'Notícias de economia, trabalho e benefícios',
};

export function buildContentIndexMetadata(kind: ContentKind): Metadata {
  const config = contentKindConfig[kind];

  return {
    title: indexTitles[kind],
    description: config.description,
    alternates: { canonical: config.path },
    openGraph: {
      type: 'website',
      title: `${indexTitles[kind]} | ${siteConfig.name}`,
      description: config.description,
      siteName: siteConfig.name,
      locale: 'pt_BR',
      url: config.path,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${indexTitles[kind]} | ${siteConfig.name}`,
      description: config.description,
    },
  };
}
