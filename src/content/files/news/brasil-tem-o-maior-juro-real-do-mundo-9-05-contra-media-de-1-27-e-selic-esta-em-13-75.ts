import type { NewsDocument } from '../../types';

export const newsJuroRealRanking2026 = {
  kind: 'news',
  slug: 'brasil-tem-o-maior-juro-real-do-mundo-9-05-contra-media-de-1-27-e-selic-esta-em-13-75',
  title:
    'Brasil tem o maior juro real do mundo: 9,05% ao ano, contra média de 1,27%',
  description:
    'Ranking de 40 países coloca o Brasil na frente de Turquia e Argentina. Entenda o que é juro real, a Selic a 13,75% e o efeito no crédito e nos investimentos.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/brasil-tem-o-maior-juro-real-do-mundo-9-05-contra-media-de-1-27-e-selic-esta-em-13-75.jpg',
    alt: 'Documento com o ranking de juro real: Brasil 9,05%, Turquia 7,77%, Argentina 6,80% e média de 1,27%, ao lado de um medidor, etiqueta de 9,05% ao ano, celular e moedas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-08',
  updatedAt: '2026-11-08',
  tags: ['juros', 'selic', 'juro-real', 'copom', 'investimentos'],
  featuredCalculators: [
    'conversao-taxa-mensal-anual',
    'cdb-liquido',
    'juros-compostos',
  ],
  highlights: [
    {
      value: '9,05%',
      label: 'Juro real do Brasil',
      note: 'Maior entre 40 países, segundo a consultoria Moneyou.',
    },
    {
      value: '1,27%',
      label: 'Média do ranking',
      note: 'O Brasil está mais de sete vezes acima dela.',
    },
    {
      value: '13,75%',
      label: 'Selic ao ano',
      note: 'Mantida pelo Copom por unanimidade em 4/11.',
    },
    {
      value: '4,62%',
      label: 'Inflação em 12 meses',
      note: 'Acima do teto de 4,5% da meta, segundo a Agência Brasil.',
    },
  ],
  sections: [
    {
      heading: 'O que o ranking mostra e quem divulgou',
      paragraphs: [
        'A consultoria de mercado Moneyou calcula o juro real de 40 países, e a edição desta semana colocou o Brasil em primeiro lugar, com 9,05% ao ano. Turquia (7,77%) e Argentina (6,80%) aparecem em seguida, segundo reportagem da Agência Brasil publicada em 6 de novembro de 2026. A média do ranking é de 1,27%, o que deixa o Brasil mais de sete vezes acima dela.',
        'Entre os dez primeiros estão ainda Rússia (6,57%), Colômbia (4,05%), Indonésia (3,67%), México (3,26%), África do Sul (2,93%), Hungria (2,04%) e Chile (1,69%). No levantamento anterior, divulgado em setembro, o juro real brasileiro era de 8,45%.',
        'Os números são da Moneyou, e a reportagem não detalha a metodologia nem a inflação esperada usada na conta. Por isso, o dado serve como comparação entre países, não como taxa oficial do governo.',
      ],
    },
    {
      heading: 'Juro real é o que sobra depois da inflação',
      image: {
        src: '/images/news/brasil-tem-o-maior-juro-real-do-mundo-9-05-contra-media-de-1-27-e-selic-esta-em-13-75-detalhe.jpg',
        alt: 'Detalhe da ilustração: ranking com Brasil a 9,05%, Turquia a 7,77%, Argentina a 6,80% e média de 1,27%.',
        caption:
          'Os números do ranking de juro real da Moneyou, como informados pela Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Selic, de 13,75% ao ano, é a taxa nominal: o preço do dinheiro sem descontar a alta dos preços. O juro real desconta a inflação. Quanto maior ele é, mais o dinheiro rende acima do custo de vida para quem aplica, e mais caro fica o crédito para quem toma emprestado.',
        'Um exemplo simples: se uma aplicação render 9,05% acima da inflação em um ano, R$ 10.000 ganham R$ 905,00 de poder de compra, antes de impostos e taxas. Já um empréstimo de R$ 10.000 a uma taxa real desse tamanho custa R$ 905,00 acima da inflação no mesmo período. O cálculo é uma ilustração, não a taxa de um produto financeiro específico.',
        'Para transformar uma taxa mensal em anual, ou o contrário, use a calculadora de conversão de taxa do PortalFina. O juro composto de uma aplicação ou dívida pode ser simulado na calculadora de juros compostos.',
      ],
      table: {
        caption: 'Juro real em seis países, segundo a Moneyou',
        columns: ['País', 'Juro real ao ano'],
        rows: [
          ['Brasil', '9,05%'],
          ['Turquia', '7,77%'],
          ['Argentina', '6,80%'],
          ['Rússia', '6,57%'],
          ['Colômbia', '4,05%'],
          ['Média dos 40 países', '1,27%'],
        ],
      },
    },
    {
      heading: 'Por que o tema voltou à pauta depois do Copom',
      paragraphs: [
        'Na quarta-feira (4/11), o Copom manteve a Selic em 13,75% por unanimidade e interrompeu a trajetória de queda iniciada em abril. Segundo a Agência Brasil, o comunicado afirmou que as incertezas se ampliaram e que as expectativas de inflação seguem acima da meta, sem indicar os próximos passos.',
        'A inflação em 12 meses subiu de 4,5% para 4,62%, acima do teto da meta de 4,5%. O IPCA de outubro será divulgado pelo IBGE em 12 de novembro. Os juros também pesam nas contas públicas: segundo dados do Banco Central citados pela reportagem, o pagamento de juros consumiu mais de R$ 1,1 trilhão em 12 meses, o equivalente a 8,9% do PIB. A dívida pública passou de 71,7% do PIB em 2022 para cerca de 82,9% em agosto de 2026.',
        'Há opiniões diferentes sobre o que fazer. O presidente da CNI, Ricardo Alban, classificou a manutenção dos juros como injustificável, e economistas críticos da política monetária apontam os juros altos como principal causa do aumento da dívida. Agentes de mercado, por outro lado, pedem corte de gastos para estabilizar a dívida. O portal não toma posição: o que importa ao leitor é o efeito no bolso.',
      ],
    },
    {
      heading: 'O que isso muda para quem investe e para quem deve',
      paragraphs: [
        'Para quem investe em renda fixa, a Selic alta mantém o rendimento de CDB, Tesouro Selic, LCI e LCA em patamar elevado. O ganho real depende da inflação, do prazo e do imposto de cada aplicação, e a calculadora de CDB líquido ajuda a comparar.',
        'Para quem deve, a mesma taxa encarece financiamentos, empréstimos e o rotativo do cartão. Antes de contratar crédito, vale comparar o custo efetivo total (CET) de mais de uma instituição e priorizar quitar as dívidas mais caras.',
        'Não há promessa de queda de juros: a decisão é do Copom, a cada reunião, conforme a inflação e o cenário econômico. O que se pode acompanhar é o boletim Focus, que sai às segundas-feiras com as projeções do mercado, e o IPCA de 12 de novembro.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é juro real?',
      answer:
        'É a taxa de juros descontada a inflação. Mostra quanto o dinheiro rende, ou custa, acima do aumento dos preços.',
    },
    {
      question: 'Qual é o juro real do Brasil no ranking da Moneyou?',
      answer:
        'É de 9,05% ao ano, o maior entre 40 países, contra média de 1,27%, segundo a Agência Brasil. Em setembro estava em 8,45%.',
    },
    {
      question: 'Qual é a Selic hoje?',
      answer:
        'A Selic está em 13,75% ao ano, mantida pelo Copom por unanimidade em 4 de novembro de 2026.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Brasil tem maior juro real do mundo, seguido por Turquia e Argentina, 6/11/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/brasil-tem-maior-juro-real-do-mundo-seguido-por-turquia-e-argentina',
    },
    {
      label: 'Banco Central: histórico das taxas de juros (Copom e Selic)',
      url: 'https://www.bcb.gov.br/controleinflacao/historicotaxasjuros',
    },
    {
      label: 'IBGE: inflação e índices de preços',
      url: 'https://www.ibge.gov.br/explica/inflacao.php',
    },
  ],
} as const satisfies NewsDocument;
