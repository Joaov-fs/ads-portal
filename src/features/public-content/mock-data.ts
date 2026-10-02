import type { Category, Guide, Indicator, NewsItem, Tool } from './types';
import { listContentSummaries } from '@/content';

export const categories = [
  {
    slug: 'financas',
    label: 'Finanças',
    icon: '↗',
    description: 'Organize seu dinheiro, compare opções e planeje objetivos.',
  },
  {
    slug: 'trabalho',
    label: 'Trabalho',
    icon: '▤',
    description: 'Entenda salários, direitos, férias e rescisões.',
  },
  {
    slug: 'beneficios',
    label: 'Benefícios',
    icon: '＋',
    description: 'Consulte regras e simule benefícios sociais.',
  },
  {
    slug: 'economia',
    label: 'Economia',
    icon: '%',
    description: 'Acompanhe indicadores e decisões que afetam seu bolso.',
  },
  {
    slug: 'politica',
    label: 'Política',
    icon: '§',
    description: 'Veja medidas públicas explicadas de forma objetiva.',
  },
  {
    slug: 'guias',
    label: 'Guias',
    icon: '≡',
    description: 'Aprenda conceitos importantes com explicações diretas.',
  },
  {
    slug: 'utilidades',
    label: 'Utilidades',
    icon: '=',
    description: 'Resolva cálculos rápidos para situações do dia a dia.',
  },
] as const satisfies readonly Category[];

export const popularTools = listContentSummaries('calculator').map((item) => ({
  category: item.category,
  title: item.title,
  description: item.description,
  href: item.href,
})) satisfies readonly Tool[];

export const latestNews = listContentSummaries('news').map((item) => {
  const calculatorSlug = item.featuredCalculators?.[0];
  const calculator = popularTools.find(
    (tool) => tool.href === `/calculadoras/${calculatorSlug}`,
  );

  return {
    calculator: calculator
      ? { href: calculator.href, title: calculator.title }
      : undefined,
    category: item.category,
    title: item.title,
    description: item.description,
    date: item.updatedAt,
    highlight: item.highlight
      ? { label: item.highlight.label, value: item.highlight.value }
      : undefined,
    readingTime: item.readingTime,
    href: item.href,
  };
}) satisfies readonly NewsItem[];

export const featuredGuides = listContentSummaries('guide').map((item) => ({
  category: item.category,
  title: item.title,
  description: item.description,
  readingTime: item.readingTime,
  href: item.href,
})) satisfies readonly Guide[];

/**
 * Indicadores oficiais, com a data de referência em `note`.
 * Atualize junto com as notícias: Banco Central (Selic, CDI, dólar), IBGE (IPCA) e FGV (IGP-M).
 */
export const indicators: readonly Indicator[] = [
  {
    label: 'Selic (meta)',
    value: '13,75% a.a.',
    change: '−0,25 p.p.',
    trend: 'down',
    note: 'Vigente desde 17/09/2026 · Banco Central',
    href: '/noticias/selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve',
  },
  {
    label: 'CDI',
    value: '13,65% a.a.',
    change: 'estável',
    trend: 'neutral',
    note: 'Em 30/09/2026 · Banco Central',
    href: '/noticias/poupanca-rende-8-3-ao-ano-veja-quanto-cdb-e-lci-rendem-a-mais',
  },
  {
    label: 'IPCA em 12 meses',
    value: '4,22%',
    change: 'era 4,44%',
    trend: 'down',
    note: 'Agosto de 2026 · IBGE',
    href: '/noticias/reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica',
  },
  {
    label: 'IGP-M em 12 meses',
    value: '3,35%',
    change: '+1,57% no mês',
    trend: 'up',
    note: 'Setembro de 2026 · FGV',
    href: '/noticias/reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica',
  },
  {
    label: 'Dólar comercial',
    value: 'R$ 5,18',
    change: '−0,76%',
    trend: 'down',
    note: 'PTAX de venda em 30/09/2026 · Banco Central',
  },
  {
    label: 'Euro',
    value: 'R$ 5,85',
    change: '−0,48%',
    trend: 'down',
    note: 'PTAX de venda em 01/10/2026 · Banco Central',
  },
  {
    label: 'Salário mínimo',
    value: 'R$ 1.621',
    change: '+6,8% em 2026',
    trend: 'up',
    note: 'Vigente desde 1º/01/2026',
    href: '/noticias/salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso',
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
