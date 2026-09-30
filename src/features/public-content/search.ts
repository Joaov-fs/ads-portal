import {
  categories,
  featuredGuides,
  latestNews,
  popularTools,
} from './mock-data';
import type { SearchResult } from './types';

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR');
}

const searchableContent: readonly SearchResult[] = [
  ...categories
    .filter((category) => category.slug !== 'politica')
    .map((category) => ({
      type: 'categoria' as const,
      title: category.label,
      description: category.description,
      category: 'Categoria',
      href: `/categorias/${category.slug}`,
    })),
  ...popularTools.map((tool) => ({
    type: 'ferramenta' as const,
    title: tool.title,
    description: tool.description,
    category:
      categories.find((category) => category.slug === tool.category)?.label ??
      'Ferramenta',
    href: tool.href,
  })),
  ...latestNews.map((news) => ({
    type: 'noticia' as const,
    title: news.title,
    description: news.description,
    category: 'Notícia',
    href: news.href,
  })),
  ...featuredGuides.map((guide) => ({
    type: 'guia' as const,
    title: guide.title,
    description: guide.description,
    category: 'Guia',
    href: guide.href,
  })),
];

export function searchPublicContent(query: string) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  return searchableContent.filter((item) => {
    const haystack = normalize(
      `${item.title} ${item.description} ${item.category} ${item.type}`,
    );

    return terms.every((term) => haystack.includes(term));
  });
}
