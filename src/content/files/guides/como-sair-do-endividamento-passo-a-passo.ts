import type { GuideDocument } from '../../types';

export const guideComoSairDoEndividamentoPassoAPasso = {
  kind: 'guide',
  slug: 'como-sair-do-endividamento-passo-a-passo',
  title: 'Como sair do endividamento: ordem de pagamento e como negociar',
  description:
    'Um passo a passo para listar as dívidas, escolher o que pagar primeiro e negociar, com exemplos de como os juros pesam.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['dividas', 'cartao', 'negociacao', 'orcamento'],
  featuredCalculators: [
    'juros-compostos',
    'simulador-de-emprestimo',
    'porcentagem',
  ],
  highlights: [
    {
      value: '100%',
      label: 'Limite de juros e encargos no cartão',
      note: 'Do valor original da dívida (Lei 14.690/2023).',
    },
    {
      value: 'R$ 3.360',
      label: 'R$ 3.000 a 12% ao mês, após 1 mês',
      note: 'Exemplo hipotético.',
    },
    {
      value: 'R$ 11.687,93',
      label: 'Os mesmos R$ 3.000 após 12 meses',
      note: 'Sem nenhum pagamento.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: liste tudo',
      paragraphs: [
        'Anote cada dívida com credor, saldo, taxa de juros, parcela e vencimento. Inclua cartão, cheque especial, empréstimos, financiamentos, carnês e contas atrasadas. Sem a lista completa, não dá para priorizar.',
      ],
    },
    {
      heading: 'Passo 2: pague primeiro as mais caras',
      paragraphs: [
        'Ordene pelas taxas, da maior para a menor. Cartão rotativo e cheque especial costumam ter os juros mais altos. Pagar o mínimo das demais e concentrar o que sobra na mais cara reduz o custo total.',
      ],
      table: {
        caption:
          'Quanto uma dívida de R$ 3.000 cresce sem pagamento (exemplo hipotético, 12% ao mês)',
        columns: ['Prazo', 'Saldo devido'],
        rows: [
          ['1 mês', 'R$ 3.360,00'],
          ['6 meses', 'R$ 5.921,00'],
          ['12 meses', 'R$ 11.687,93'],
        ],
      },
    },
    {
      heading: 'Passo 3: negocie',
      paragraphs: [
        'Procure o credor para renegociar, ou use canais oficiais, como o Desenrola e o Serasa, quando houver campanhas. Peça o valor à vista, compare o custo total e verifique se a parcela cabe no orçamento depois de pagar as despesas básicas. Nunca aceite parcelas que consumam toda a renda.',
      ],
    },
    {
      heading: 'Passo 4: evite recaídas',
      paragraphs: [
        'Corte gastos, monte um orçamento mensal e, assim que possível, comece uma reserva de emergência, mesmo pequena. Isso reduz a chance de voltar ao crédito caro diante de um imprevisto.',
      ],
    },
  ],
  faq: [
    {
      question: 'Pagar à vista é sempre melhor?',
      answer:
        'Muitas vezes o desconto é grande, mas só vale se o valor não comprometer as despesas essenciais. Compare com o parcelamento.',
    },
    {
      question: 'Posso ser cobrado por uma dívida muito antiga?',
      answer:
        'Dívidas têm prazos legais de cobrança e de permanência em cadastros de inadimplentes. Consulte o Procon ou a Defensoria para o seu caso.',
    },
  ],
  sources: [
    {
      label: 'Lei 14.690/2023 — Desenrola e limite de encargos no cartão',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Procon e Defensoria Pública',
    },
  ],
} as const satisfies GuideDocument;
