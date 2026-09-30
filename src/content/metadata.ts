import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

import { contentKindConfig } from './config';
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
    title: document.title,
    description: document.description,
    alternates: { canonical: pathname },
    openGraph: {
      ...articleFields,
      type: document.kind === 'calculator' ? 'website' : 'article',
      title: document.title,
      description: document.description,
      siteName: siteConfig.name,
      locale: 'pt_BR',
      url: pathname,
    },
    twitter: {
      card: 'summary_large_image',
      title: document.title,
      description: document.description,
    },
  };
}

export function buildContentIndexMetadata(kind: ContentKind): Metadata {
  const config = contentKindConfig[kind];

  return {
    title: config.label,
    description: config.description,
    alternates: { canonical: config.path },
    openGraph: {
      type: 'website',
      title: `${config.label} | ${siteConfig.name}`,
      description: config.description,
      siteName: siteConfig.name,
      locale: 'pt_BR',
      url: config.path,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.label} | ${siteConfig.name}`,
      description: config.description,
    },
  };
}
