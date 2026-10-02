import type { GuideDocument } from '../../types';

export const guidePoupancaOuCdbQualRendeMais = {
  kind: 'guide',
  slug: 'poupanca-ou-cdb-qual-rende-mais',
  title: 'Poupança ou CDB: qual rende mais e como fazer a comparação',
  description:
    'A regra da poupança com a Selic acima de 8,5%, o rendimento líquido do CDB e uma tabela para decidir com números.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['poupanca', 'cdb', 'investimentos', 'selic'],
  featuredCalculators: ['cdb-x-poupanca', 'cdb-liquido', 'juros-compostos'],
  highlights: [
    {
      value: '0,5% + TR',
      label: 'Rendimento mensal',
      note: 'Regra com a Selic acima de 8,5% ao ano.',
    },
    {
      value: 'Isento',
      label: 'IR da poupança',
      note: 'Para pessoa física.',
    },
    {
      value: 'R$ 1.155',
      label: 'CDB de 14% em 12 meses',
      note: 'Sobre R$ 10.000, depois do IR.',
    },
  ],
  sections: [
    {
      heading: 'Como a poupança rende',
      paragraphs: [
        'Quando a Selic está acima de 8,5% ao ano, a poupança paga 0,5% ao mês mais a TR. O rendimento é isento de Imposto de Renda e não tem custo, mas costuma render menos do que aplicações de renda fixa em juros altos.',
      ],
    },
    {
      heading: 'A comparação em reais',
      paragraphs: [
        'Com R$ 10.000 por 12 meses, a poupança a 8,3% ao ano rende cerca de R$ 830,00. Um CDB de 14% ao ano rende R$ 1.155,00 depois de 17,5% de IR, ou seja, R$ 325 a mais. Para prazos de 6 meses a diferença é menor, porque a alíquota é de 20%.',
      ],
      table: {
        caption: 'R$ 10.000 aplicados',
        columns: ['Prazo', 'Poupança (8,3%)', 'CDB (14%) líquido'],
        rows: [
          ['6 meses', 'R$ 406,72', 'R$ 541,66'],
          ['12 meses', 'R$ 830,00', 'R$ 1.155,00'],
          ['24 meses', 'R$ 1.728,89', 'R$ 2.546,60'],
        ],
      },
    },
    {
      heading: 'Quando a poupança ainda faz sentido',
      paragraphs: [
        'Se você precisa de resgate imediato em qualquer dia, a poupança é prática. Mas há CDBs e fundos com liquidez diária que rendem mais.',
      ],
    },
    {
      heading: 'Como decidir',
      paragraphs: [
        'Anote a taxa, o prazo, a liquidez e se há cobertura do FGC. Use a calculadora para calcular o líquido e compare com a poupança no mesmo prazo.',
      ],
    },
  ],
  faq: [
    {
      question: 'A poupança é mais segura?',
      answer:
        'Ela também tem garantia do FGC até R$ 250 mil por CPF e instituição, como o CDB. A diferença é o rendimento.',
    },
    {
      question: 'O que muda quando a Selic cai?',
      answer:
        'Se a Selic ficar em 8,5% ou menos, a poupança passa a render 70% da Selic mais a TR.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Lei 12.703/2012 — regra da poupança',
    },
    {
      label: 'Lei 11.033/2004',
    },
  ],
} as const satisfies GuideDocument;
