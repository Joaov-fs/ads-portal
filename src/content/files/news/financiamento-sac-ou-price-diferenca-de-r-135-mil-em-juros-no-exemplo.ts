import type { NewsDocument } from '../../types';

export const newsFinanciamentoSacOuPriceDiferencaDeR135MilEmJurosNoExemplo = {
  kind: 'news',
  slug: 'financiamento-sac-ou-price-diferenca-de-r-135-mil-em-juros-no-exemplo',
  title:
    'Financiamento: SAC ou Price? No exemplo de R$ 200 mil, a diferença nos juros passa de R$ 135 mil',
  description:
    'Simulação de 30 anos a 0,85% ao mês: parcelas, total pago e juros de cada sistema, e como escolher o que cabe no seu orçamento.',
  category: 'financas',
  coverImage: {
    src: '/images/news/financiamento-sac-ou-price-diferenca-de-r-135-mil-em-juros-no-exemplo.jpg',
    alt: 'Gráficos das parcelas no SAC, que caem, e na Price, que ficam iguais, ao lado de uma casa e chaves.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['financiamento', 'sac', 'price', 'credito', 'juros'],
  featuredCalculators: [
    'financiamento-sac-price',
    'amortizacao-antecipada',
    'simulador-de-emprestimo',
  ],
  highlights: [
    {
      value: 'R$ 135.668',
      label: 'Menos juros no SAC',
      note: 'Num financiamento de R$ 200 mil em 360 meses.',
    },
    {
      value: 'R$ 1.784,77',
      label: 'Parcela fixa da Price',
      note: 'Do primeiro ao último mês.',
    },
    {
      value: 'R$ 2.255,56',
      label: '1ª parcela do SAC',
      note: 'Cai até R$ 560,28 na última.',
    },
    {
      value: 'R$ 470,79',
      label: 'Diferença na 1ª parcela',
      note: 'O SAC exige renda maior no início.',
    },
  ],
  sections: [
    {
      heading: 'A comparação em números',
      paragraphs: [
        'O exemplo usa um financiamento de R$ 200.000 em 360 parcelas, com taxa hipotética de 0,85% ao mês, cerca de 10,7% ao ano, sem seguros e tarifas.',
      ],
      table: {
        caption: 'SAC x Price: R$ 200.000 em 30 anos a 0,85% ao mês',
        columns: [
          'Sistema',
          '1ª parcela',
          'Última parcela',
          'Total de juros',
          'Total pago',
        ],
        rows: [
          [
            'Price',
            'R$ 1.784,77',
            'R$ 1.784,77',
            'R$ 442.518,32',
            'R$ 642.518,32',
          ],
          ['SAC', 'R$ 2.255,56', 'R$ 560,28', 'R$ 306.850,00', 'R$ 506.850,00'],
        ],
      },
    },
    {
      heading: 'Por que o SAC paga menos juros',
      image: {
        src: '/images/news/financiamento-sac-ou-price-diferenca-de-r-135-mil-em-juros-no-exemplo-detalhe.jpg',
        alt: 'Detalhe da ilustração: gráficos das parcelas no SAC, que caem, e na Price, que ficam iguais, ao lado de uma casa e chaves.',
        caption:
          'No SAC a parcela começa alta e cai; na Price ela fica igual do início ao fim.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'No SAC, a amortização do saldo é igual todo mês (R$ 555,56 neste exemplo), então o saldo devedor cai mais rápido e os juros diminuem. Na Price, a parcela é fixa e as primeiras parcelas são formadas quase só de juros, de modo que o saldo cai devagar.',
        'O preço do SAC é uma parcela inicial mais alta, que exige renda maior para aprovar o crédito e pesa mais no começo, justamente quando a família costuma ter outros gastos com a mudança.',
      ],
    },
    {
      heading: 'Como escolher',
      paragraphs: [
        'Quem comporta a parcela inicial maior economiza muitos juros no SAC. Quem precisa de previsibilidade, ou de uma parcela inicial menor para ser aprovado, tende a ir pela Price. Os bancos costumam limitar a parcela a cerca de 30% da renda familiar.',
        'Amortizações extras reduzem o total de juros em qualquer sistema. Ao antecipar parte do saldo, você escolhe entre encurtar o prazo ou reduzir a parcela. Encurtar o prazo costuma economizar mais.',
      ],
    },
  ],
  faq: [
    {
      question: 'A taxa do exemplo é real?',
      answer:
        'É hipotética, para a comparação. Consulte as taxas vigentes no banco e compare pelo Custo Efetivo Total (CET), que inclui seguros e tarifas.',
    },
    {
      question: 'Posso trocar de sistema depois?',
      answer:
        'Em geral não. Mas você pode portar o financiamento para outro banco ou renegociar condições.',
    },
    {
      question: 'Vale a pena usar o FGTS?',
      answer:
        'Usar o FGTS na entrada ou para amortizar reduz a dívida e os juros, mas deixa menos reserva. Avalie caso a caso.',
    },
  ],
  sources: [
    {
      label:
        'Banco Central do Brasil: Custo Efetivo Total (CET) e taxas de juros do crédito imobiliário',
      url: 'https://www.bcb.gov.br/estatisticas/reporttxjuros',
    },
    {
      label: 'Caixa Econômica Federal: financiamento imobiliário (SAC e Price)',
      url: 'https://www.caixa.gov.br/voce/habitacao/',
    },
    {
      label: 'Lei 9.514/1997: Sistema de Financiamento Imobiliário',
    },
  ],
} as const satisfies NewsDocument;
