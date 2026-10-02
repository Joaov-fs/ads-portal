import type { GuideDocument } from '../../types';

export const guideComoMontarUmOrcamentoMensalSimples = {
  kind: 'guide',
  slug: 'como-montar-um-orcamento-mensal-simples',
  title: 'Como montar um orçamento mensal simples (regra 50-30-20)',
  description:
    'Um passo a passo para organizar a renda, separar gastos essenciais e desejos, e guardar uma parte todo mês, com exemplo de salário de R$ 3.000.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: [
    'orcamento',
    'planejamento',
    'organizacao-financeira',
    'economia-domestica',
  ],
  featuredCalculators: ['porcentagem', 'salario-liquido'],
  highlights: [
    {
      value: '50%',
      label: 'Necessidades',
      note: 'Moradia, comida, transporte, saúde.',
    },
    {
      value: '30%',
      label: 'Desejos',
      note: 'Lazer, assinaturas, compras.',
    },
    {
      value: '20%',
      label: 'Poupança e dívidas',
      note: 'Reserva e pagamento de dívidas.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: descubra sua renda líquida',
      paragraphs: [
        'Use o valor que realmente cai na conta, depois dos descontos. Se a renda varia, use a média dos últimos meses ou o mês mais baixo.',
      ],
    },
    {
      heading: 'Passo 2: divida em três grupos',
      paragraphs: [
        'A regra 50-30-20 é um ponto de partida: 50% para necessidades, 30% para desejos e 20% para poupança e dívidas. Ajuste ao seu caso. Com renda baixa, as necessidades podem passar de 50%.',
      ],
      table: {
        caption: 'Exemplo com renda líquida de R$ 3.000',
        columns: ['Grupo', 'Percentual', 'Valor'],
        rows: [
          ['Necessidades', '50%', 'R$ 1.500'],
          ['Desejos', '30%', 'R$ 900'],
          ['Poupança e dívidas', '20%', 'R$ 600'],
        ],
      },
    },
    {
      heading: 'Passo 3: anote por 30 dias',
      paragraphs: [
        'Registre cada gasto numa planilha ou aplicativo. No fim do mês, some por grupo e compare com a meta. Os pequenos gastos recorrentes costumam ser os que mais surpreendem.',
      ],
    },
    {
      heading: 'Passo 4: ajuste e automatize',
      paragraphs: [
        'Corte primeiro o que não faz falta e programe a transferência da poupança para o dia do pagamento. Quando houver dívida cara, direcione a parte do grupo de 20% para quitá-la antes de investir.',
      ],
    },
  ],
  faq: [
    {
      question: 'A regra serve para todo mundo?',
      answer:
        'É uma referência. Se a renda é apertada, comece guardando o que for possível, mesmo 5%, e vá aumentando.',
    },
    {
      question: 'Quanto devo guardar de reserva?',
      answer:
        'Uma meta comum é de 3 a 6 meses de despesas essenciais, em aplicação com liquidez diária.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Banco Central do Brasil — Cidadania Financeira',
    },
  ],
} as const satisfies GuideDocument;
