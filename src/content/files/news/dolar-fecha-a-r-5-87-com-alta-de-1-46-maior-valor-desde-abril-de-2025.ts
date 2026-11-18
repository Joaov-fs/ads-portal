import type { NewsDocument } from '../../types';

export const newsDolarFecha587Novembro2026 = {
  kind: 'news',
  slug: 'dolar-fecha-a-r-5-87-com-alta-de-1-46-maior-valor-desde-abril-de-2025',
  title:
    'Dólar sobe 1,46% e fecha a R$ 5,87, o maior valor desde abril de 2025, com impasse do ajuste fiscal',
  description:
    'A moeda americana fechou a R$ 5,8667 em 18/11, com a votação do pacote fiscal no Senado e a ata do Fed no radar. Veja o efeito para viagem e importados.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/dolar-fecha-a-r-5-87-com-alta-de-1-46-maior-valor-desde-abril-de-2025.jpg',
    alt: 'Quadro de fechamento do dólar em 18/11 com R$ 5,8667 e alta de 1,46%, gráfico em alta, etiqueta de R$ 5,87 e cédula.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  tags: ['dolar', 'cambio', 'ajuste-fiscal', 'senado', 'mercado'],
  featuredCalculators: ['porcentagem', 'tesouro-selic'],
  highlights: [
    {
      value: 'R$ 5,8667',
      label: 'Dólar no fechamento',
      note: 'Maior valor de fechamento desde 15/04/2025.',
    },
    {
      value: '1,46%',
      label: 'Alta no dia',
      note: 'Em 17/11, a moeda havia fechado a R$ 5,782.',
    },
    {
      value: 'R$ 5,8697',
      label: 'Máxima do dia',
      note: 'A cotação mais alta foi quase igual ao fechamento.',
    },
  ],
  sections: [
    {
      heading: 'Dólar fecha a R$ 5,8667 em 18/11',
      paragraphs: [
        'O dólar comercial subiu 1,46% e terminou o dia cotado a R$ 5,8667, segundo o Times Brasil. É o maior valor de fechamento desde 15/04/2025. A máxima do dia foi de R$ 5,8697, quase no mesmo patamar do fechamento.',
        'Na véspera, 17/11, a moeda havia fechado a R$ 5,782, com alta de 0,10%. A conta fecha: R$ 5,782 mais 1,46% resulta em cerca de R$ 5,8667.',
        'Os números aqui são do dólar. O fechamento do Ibovespa de 18/11 não estava disponível nas fontes consultadas até a publicação desta matéria.',
      ],
    },
    {
      heading: 'Por que o dólar subiu: ajuste fiscal e ata do Fed',
      image: {
        src: '/images/news/dolar-fecha-a-r-5-87-com-alta-de-1-46-maior-valor-desde-abril-de-2025-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com dólar a R$ 5,8667, alta de 1,46% e fechamento de 17/11 a R$ 5,782.',
        caption: 'Números do fechamento do dólar em 18/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O mercado acompanhou a votação do pacote fiscal no Senado. A análise foi adiada na terça, 17/11, por falta de acordo entre governo e oposição, e foi retomada em 18/11. O principal impasse é o limite às compensações tributárias, que pode render até R$ 18,3 bilhões em 2027, segundo o InfoMoney.',
        'O Times Brasil informou que o impacto total das medidas pode chegar a R$ 60 bilhões em 2027 e registrou que o Senado rejeitou o primeiro destaque, com a votação seguindo. Quando esta matéria foi escrita, o resultado final ainda não estava fechado.',
        'Outro ponto no radar foi a ata do Fed, divulgada à tarde. Mudanças na expectativa de juros dos Estados Unidos influenciam a procura por dólar em todo o mundo, e não só no Brasil.',
      ],
    },
    {
      heading: 'O que o dólar a R$ 5,87 muda no seu bolso',
      paragraphs: [
        'Quem compra moeda para viajar sente o efeito na hora. Exemplo: US$ 1.000 custavam R$ 5.782,00 no fechamento de 17/11 e R$ 5.866,70 no de 18/11, ou seja, R$ 84,70 a mais em um dia, sem contar tarifas e impostos sobre a operação.',
        'Produtos importados e equipamentos com componentes em dólar tendem a ficar mais caros quando a moeda sobe, mas o repasse para a prateleira não é imediato nem automático. Já exportadores recebem mais reais por dólar vendido.',
        'Para o investidor, a alta do dólar costuma refletir cautela com as contas públicas. Quem quer comparar o rendimento de uma aplicação em reais usa a calculadora do Tesouro Selic, e a de porcentagem ajuda a refazer a conta da variação cambial.',
      ],
      table: {
        caption: 'Dólar comercial nos dois últimos fechamentos',
        columns: ['Data', 'Fechamento', 'Variação'],
        rows: [
          ['17/11', 'R$ 5,782', '+0,10%'],
          ['18/11', 'R$ 5,8667', '+1,46%'],
        ],
      },
    },
  ],
  faq: [
    {
      question: 'Quanto o dólar fechou em 18/11?',
      answer:
        'R$ 5,8667, alta de 1,46%, o maior valor de fechamento desde 15/04/2025, segundo o Times Brasil.',
    },
    {
      question: 'Por que o dólar subiu?',
      answer:
        'A votação do pacote fiscal no Senado, adiada em 17/11 por falta de acordo, e a ata do Fed, divulgada à tarde, estavam no radar do mercado.',
    },
    {
      question: 'O dólar alto encarece a viagem?',
      answer:
        'Sim. US$ 1.000 passaram de R$ 5.782,00 para R$ 5.866,70 entre os fechamentos de 17/11 e 18/11, sem contar tarifas e impostos.',
    },
  ],
  sources: [
    {
      label: 'Times Brasil: Dólar sobe 1,46% e chega a R$ 5,86',
      url: 'https://timesbrasil.com.br/brasil/economia-brasileira/dolar-sobe-146-e-chega-a-r-586/',
    },
    {
      label:
        'InfoMoney: Ibovespa hoje ao vivo, 18/11/2026: impasse em pacote fiscal',
      url: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-18112026/',
    },
    {
      label: 'Banco Central do Brasil: cotações e boletins',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes',
    },
  ],
} as const satisfies NewsDocument;
