import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  CalculatorTemplate,
  GuideTemplate,
  NewsTemplate,
} from '@/components/content';

import { buildContentMetadata } from './metadata';
import { getContentPageModel, getContentStaticParams } from './pipeline';
import type { ContentKind } from './types';

type DetailPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function createContentDetailRoute(kind: ContentKind) {
  function generateStaticParams() {
    return getContentStaticParams(kind);
  }

  async function generateMetadata({
    params,
  }: DetailPageProps): Promise<Metadata> {
    const model = getContentPageModel(kind, (await params).slug);

    if (!model) {
      return { title: 'Conteúdo não encontrado', robots: { index: false } };
    }

    return buildContentMetadata(model);
  }

  async function Page({ params }: DetailPageProps) {
    const slug = (await params).slug;

    if (kind === 'news') {
      const model = getContentPageModel('news', slug);
      return model ? <NewsTemplate model={model} /> : notFound();
    }

    if (kind === 'guide') {
      const model = getContentPageModel('guide', slug);
      return model ? <GuideTemplate model={model} /> : notFound();
    }

    const model = getContentPageModel('calculator', slug);
    return model ? <CalculatorTemplate model={model} /> : notFound();
  }

  return { generateMetadata, generateStaticParams, Page };
}
