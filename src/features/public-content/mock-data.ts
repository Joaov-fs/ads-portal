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

export const latestNews = listContentSummaries('news').map((item) => ({
  category: item.category,
  title: item.title,
  description: item.description,
  date: item.updatedAt,
  readingTime: item.readingTime,
  href: item.href,
})) satisfies readonly NewsItem[];

export const featuredGuides = listContentSummaries('guide').map((item) => ({
  category: item.category,
  title: item.title,
  description: item.description,
  readingTime: item.readingTime,
  href: item.href,
})) satisfies readonly Guide[];

export const indicators = [
  {
    label: 'Selic',
    value: '10,50% a.a.',
    change: 'estável',
    trend: 'neutral',
    note: 'Valor demonstrativo',
  },
  {
    label: 'CDI',
    value: '10,40% a.a.',
    change: '0,02%',
    trend: 'up',
    note: 'Valor demonstrativo',
  },
  {
    label: 'IPCA',
    value: '0,24%',
    change: '0,08%',
    trend: 'down',
    note: 'Variação mensal fictícia',
  },
  {
    label: 'Dólar',
    value: 'R$ 5,42',
    change: '0,18%',
    trend: 'up',
    note: 'Cotação demonstrativa',
  },
  {
    label: 'Euro',
    value: 'R$ 6,12',
    change: '0,11%',
    trend: 'down',
    note: 'Cotação demonstrativa',
  },
  {
    label: 'Salário Mínimo',
    value: 'R$ 1.620',
    change: 'referência',
    trend: 'neutral',
    note: 'Valor fictício para demonstração',
  },
] as const satisfies readonly Indicator[];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
