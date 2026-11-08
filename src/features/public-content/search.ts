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
  ...categories.map((category) => ({
    type: 'categoria' as const,
    title: category.label,
    description: category.description,
    category: 'Categoria',
    editoria: category.slug,
    href: `/categorias/${category.slug}`,
  })),
  ...popularTools.map((tool) => ({
    type: 'ferramenta' as const,
    title: tool.title,
    description: tool.description,
    category:
      categories.find((category) => category.slug === tool.category)?.label ??
      'Ferramenta',
    editoria: tool.category,
    href: tool.href,
  })),
  ...latestNews.map((news) => ({
    type: 'noticia' as const,
    title: news.title,
    description: news.description,
    category:
      categories.find((category) => category.slug === news.category)?.label ??
      'Notícia',
    date: news.date,
    editoria: news.category,
    image: news.image,
    href: news.href,
  })),
  ...featuredGuides.map((guide) => ({
    type: 'guia' as const,
    title: guide.title,
    description: guide.description,
    category: 'Guia',
    editoria: guide.category,
    href: guide.href,
  })),
];

/**
 * Busca simples por termos. Ordena pelo que mais importa a quem procura:
 * primeiro o que traz todos os termos no título, depois o mais recente.
 */
export function searchPublicContent(query: string) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  return searchableContent
    .filter((item) => {
      const haystack = normalize(
        `${item.title} ${item.description} ${item.category} ${item.type}`,
      );

      return terms.every((term) => haystack.includes(term));
    })
    .map((item, index) => {
      const title = normalize(item.title);
      const titleHits = terms.filter((term) => title.includes(term)).length;

      return {
        index,
        item,
        score: titleHits === terms.length ? 2 : titleHits > 0 ? 1 : 0,
      };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        (b.item.date ?? '').localeCompare(a.item.date ?? '') ||
        a.index - b.index,
    )
    .map(({ item }) => item);
}
