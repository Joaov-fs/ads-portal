import type { NewsDocument } from '../../types';

export const jurosBasicosNews = {
  kind: 'news',
  slug: 'juros-basicos-e-decisoes-financeiras',
  title: 'Taxa Selic: como as decisões do Copom afetam seu bolso',
  description:
    'Entenda os efeitos de uma mudança na taxa básica sobre crédito, investimentos e consumo.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-20',
  updatedAt: '2026-09-24',
  tags: ['juros', 'selic', 'credito', 'investimentos'],
  sections: [
    {
      heading: 'O que muda com a taxa básica',
      paragraphs: [
        'A taxa Selic é uma referência para o custo do dinheiro no país. Seus movimentos podem chegar às taxas de crédito e à remuneração de investimentos pós-fixados, mas esse repasse não é imediato nem igual em todos os produtos.',
        'Prazo, risco, tarifas e condições do contrato continuam relevantes. Por isso, uma decisão do Copom não determina sozinha o custo final de uma dívida ou o retorno líquido de um investimento.',
      ],
    },
    {
      heading: 'Como avaliar o impacto no seu bolso',
      paragraphs: [
        'Compare o custo efetivo total de dívidas e a rentabilidade líquida dos investimentos antes de tomar uma decisão.',
      ],
    },
  ],
  faq: [
    {
      question: 'Juros estáveis significam parcelas menores?',
      answer:
        'Não necessariamente. O valor depende do contrato, do prazo, do risco e de outras taxas cobradas pela instituição.',
    },
    {
      question: 'Todo investimento acompanha a taxa básica?',
      answer:
        'Não. Alguns produtos possuem relação direta ou indireta com os juros, enquanto outros seguem riscos e referências diferentes.',
    },
  ],
  sources: [
    { label: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br/' },
  ],
} as const satisfies NewsDocument;
