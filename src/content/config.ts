import type { ContentCategory, ContentKind } from './types';

export const contentKindConfig = {
  calculator: {
    description:
      'Simuladores claros e padronizados para apoiar decisões do dia a dia.',
    eyebrow: 'Ferramentas práticas',
    label: 'Calculadoras',
    path: '/calculadoras',
    singularLabel: 'Calculadora',
  },
  guide: {
    description:
      'Conteúdo permanente para entender finanças, trabalho e economia sem complicação.',
    eyebrow: 'Conteúdo para consultar',
    label: 'Guias',
    path: '/guias',
    singularLabel: 'Guia',
  },
  news: {
    description:
      'Mudanças que afetam suas decisões, explicadas com contexto e objetividade.',
    eyebrow: 'Informação para agir',
    label: 'Notícias',
    path: '/noticias',
    singularLabel: 'Notícia',
  },
} as const satisfies Record<
  ContentKind,
  Readonly<{
    description: string;
    eyebrow: string;
    label: string;
    path: `/${string}`;
    singularLabel: string;
  }>
>;

export const contentCategoryLabels = {
  beneficios: 'Benefícios',
  economia: 'Economia',
  financas: 'Finanças',
  trabalho: 'Trabalho',
  utilidades: 'Utilidades',
} as const satisfies Record<ContentCategory, string>;
