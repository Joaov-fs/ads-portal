import type { GuideDocument } from '../../types';

export const guideFinanciamentoSacOuPriceQualEscolher = {
  kind: 'guide',
  slug: 'financiamento-sac-ou-price-qual-escolher',
  title:
    'Financiamento SAC ou Price: qual escolher e quanto você paga de juros',
  description:
    'A diferença entre as duas tabelas de amortização, com uma simulação de R$ 200 mil em 30 anos e o que pesa mais na sua decisão.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['financiamento', 'sac', 'price', 'imovel', 'juros'],
  featuredCalculators: [
    'financiamento-sac-price',
    'amortizacao-antecipada',
    'simulador-de-emprestimo',
  ],
  highlights: [
    {
      value: 'R$ 306.850',
      label: 'Juros no SAC',
      note: 'Financiamento de R$ 200 mil em 360 meses a 0,85% ao mês.',
    },
    {
      value: 'R$ 442.518',
      label: 'Juros na Price',
      note: 'O mesmo financiamento com parcela fixa.',
    },
    {
      value: 'R$ 135.668',
      label: 'Diferença nos juros',
      note: 'A favor do SAC.',
    },
  ],
  sections: [
    {
      heading: 'Como cada sistema funciona',
      paragraphs: [
        'No SAC (Sistema de Amortização Constante) o valor amortizado é o mesmo todo mês, e a parcela cai com o tempo porque os juros incidem sobre um saldo menor. Na tabela Price a parcela é fixa, e no começo ela paga mais juros e amortiza menos.',
      ],
    },
    {
      heading: 'Simulação em reais',
      paragraphs: [
        'Para um financiamento de R$ 200 mil, em 360 meses a 0,85% ao mês, a primeira parcela do SAC é de R$ 2.255,56 e a última, de R$ 560,28. Na Price, a parcela é de R$ 1.784,77 do início ao fim.',
      ],
      table: {
        caption: 'R$ 200.000 em 360 meses a 0,85% ao mês',
        columns: ['Item', 'SAC', 'Price'],
        rows: [
          ['Primeira parcela', 'R$ 2.255,56', 'R$ 1.784,77'],
          ['Última parcela', 'R$ 560,28', 'R$ 1.784,77'],
          ['Juros totais', 'R$ 306.850,00', 'R$ 442.518,32'],
          ['Total pago', 'R$ 506.850,00', 'R$ 642.518,32'],
        ],
      },
    },
    {
      heading: 'O que decidir',
      paragraphs: [
        'O SAC custa menos no total e quita o saldo mais rápido, mas exige renda maior no começo. A Price tem parcela inicial menor e mais previsível, mas paga mais juros. A regra prática é que a parcela não deve passar de cerca de 30% da renda mensal.',
      ],
    },
    {
      heading: 'Como pagar menos juros',
      paragraphs: [
        'Amortizar parte do saldo reduz os juros dos meses que serão eliminados, e escolher entre manter a parcela e reduzir o prazo ou reduzir a parcela muda o ganho. Compare o CET de cada banco, que inclui seguros e taxas, e não apenas a taxa de juros.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso mudar de SAC para Price depois?',
      answer:
        'Em geral, não. O sistema é definido no contrato, mas é possível portar o financiamento para outro banco e renegociar.',
    },
    {
      question: 'Qual é melhor para quem tem renda justa?',
      answer:
        'Se a renda aperta no começo, a Price pode ser a opção viável. Se há folga, o SAC reduz o custo total.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Caixa Econômica Federal — financiamento habitacional',
    },
    {
      label: 'Resolução CMN sobre o CET',
    },
  ],
} as const satisfies GuideDocument;
