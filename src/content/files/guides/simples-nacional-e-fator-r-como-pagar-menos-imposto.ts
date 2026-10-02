import type { GuideDocument } from '../../types';

export const guideSimplesNacionalEFatorRComoPagarMenosImposto = {
  kind: 'guide',
  slug: 'simples-nacional-e-fator-r-como-pagar-menos-imposto',
  title:
    'Simples Nacional e Fator R: como escolher o anexo e pagar menos imposto',
  description:
    'Entenda a alíquota efetiva, a diferença entre os Anexos III e V e como a folha de pagamento pode reduzir o imposto de empresas de serviços.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['simples-nacional', 'fator-r', 'impostos', 'negocios'],
  featuredCalculators: ['simples-nacional', 'fator-r', 'das-limite-mei'],
  highlights: [
    {
      value: '28%',
      label: 'Folha sobre receita',
      note: 'Mínimo do Fator R para ir ao Anexo III.',
    },
    {
      value: '7,3%',
      label: 'Alíquota efetiva no Anexo III',
      note: 'Receita de R$ 240 mil em 12 meses.',
    },
    {
      value: '16,125%',
      label: 'Alíquota efetiva no Anexo V',
      note: 'Mesma receita.',
    },
  ],
  sections: [
    {
      heading: 'Como o Simples calcula',
      paragraphs: [
        'A alíquota efetiva é obtida pela fórmula (receita dos últimos 12 meses x alíquota nominal − parcela a deduzir) ÷ receita dos últimos 12 meses. A faixa depende do faturamento acumulado, e cada anexo tem as suas alíquotas.',
      ],
    },
    {
      heading: 'Fator R: a diferença entre III e V',
      paragraphs: [
        'Serviços intelectuais e alguns outros podem cair no Anexo V, mais pesado. Se a folha de pagamento dos últimos 12 meses (incluindo o pró-labore) for 28% ou mais da receita bruta no mesmo período, a empresa passa ao Anexo III, mais leve.',
      ],
      table: {
        caption:
          'Receita de R$ 240.000 em 12 meses e R$ 20.000 de faturamento no mês',
        columns: ['Anexo', 'Alíquota efetiva', 'DAS do mês'],
        rows: [
          ['III (Fator R de 28% ou mais)', '7,3%', 'R$ 1.460,00'],
          ['V (Fator R abaixo de 28%)', '16,125%', 'R$ 3.225,00'],
        ],
      },
    },
    {
      heading: 'Quanto de folha é preciso',
      paragraphs: [
        'Com receita de R$ 240.000 em 12 meses, a folha precisa chegar a R$ 67.200 no mesmo período para atingir 28%. Uma folha de R$ 80.000, por exemplo, dá Fator R de 33,3% e leva ao Anexo III, o que economiza R$ 1.765 no DAS do exemplo.',
      ],
    },
    {
      heading: 'Cuidados',
      paragraphs: [
        'Aumentar o pró-labore para atingir o Fator R também aumenta o INSS e o IRRF do sócio. Faça a conta completa, com o impacto sobre o INSS do sócio, antes de decidir. Peça ajuda de um contador para confirmar o enquadramento da sua atividade.',
      ],
    },
  ],
  faq: [
    {
      question: 'O Fator R é calculado todo mês?',
      answer:
        'Sim, é recalculado mensalmente com os valores dos últimos 12 meses.',
    },
    {
      question: 'MEI tem Fator R?',
      answer: 'Não. O MEI paga valor fixo e não usa os anexos do Simples.',
    },
  ],
  sources: [
    {
      label: 'Lei Complementar 123/2006 — Simples Nacional',
    },
    {
      label: 'Receita Federal — Simples Nacional',
    },
    {
      label: 'Comitê Gestor do Simples Nacional',
    },
  ],
} as const satisfies GuideDocument;
