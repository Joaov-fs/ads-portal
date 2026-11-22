import type { NewsDocument } from '../../types';

export const newsIpca15NovembroDivulgacao2026 = {
  kind: 'news',
  slug: 'ipca-15-de-novembro-sai-em-26-11-coleta-de-15-10-a-16-11-e-inflacao-em-12-meses-esta-em-4-63',
  title:
    'IPCA-15 de novembro sai em 26/11: inflação em 12 meses está em 4,63%, acima do teto da meta',
  description:
    'O IBGE divulga o IPCA-15 de novembro em 26/11. Veja o que o índice mede, onde a inflação está hoje e o efeito em reais no aluguel e no salário.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/ipca-15-de-novembro-sai-em-26-11-coleta-de-15-10-a-16-11-e-inflacao-em-12-meses-esta-em-4-63.jpg',
    alt: 'Relatório do IPCA-15 de novembro ao lado de um calendário com o dia 26 marcado e uma etiqueta laranja com 26/11.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-22',
  updatedAt: '2026-11-22',
  tags: ['ipca-15', 'ipca', 'inflacao', 'ibge', 'selic', 'copom'],
  featuredCalculators: [
    'reajuste-aluguel',
    'porcentagem',
    'conversao-taxa-mensal-anual',
  ],
  highlights: [
    {
      value: '26/11',
      label: 'Divulgação do IPCA-15',
      note: 'Calendário oficial do IBGE para novembro de 2026.',
    },
    {
      value: '4,63%',
      label: 'IPCA em 12 meses (outubro)',
      note: 'Acima do teto de 4,5% da meta.',
    },
    {
      value: '0,32%',
      label: 'IPCA-15 de outubro',
      note: 'Em 12 meses, a prévia estava em 4,62%.',
    },
    {
      value: '11/12',
      label: 'IPCA cheio de novembro',
      note: 'Divulgação prevista pelo IBGE.',
    },
  ],
  sections: [
    {
      heading: 'O que sai em 26/11 e o que o IPCA-15 mede',
      paragraphs: [
        'O IBGE divulga em 26/11/2026 o IPCA-15 de novembro, a prévia da inflação oficial. A data consta no calendário de divulgação do instituto, que também marca o IPCA cheio de novembro para 11/12 e o IPCA-15 de dezembro para 23/12.',
        'O IPCA-15 não coincide com o mês-calendário. A coleta de preços de novembro vai de 15/10 a 16/11/2026, ou seja, pega a segunda metade de outubro e a primeira de novembro. Por isso ele funciona como um ensaio do IPCA cheio, que tem coleta de 31/10 a 1/12.',
        'Para o leitor, o número serve como termômetro do custo de vida e como pista do que o Banco Central vai considerar nas próximas reuniões do Copom. Ele não corrige aluguel nem salário por conta própria.',
      ],
    },
    {
      heading: 'Onde a inflação está hoje',
      image: {
        src: '/images/news/ipca-15-de-novembro-sai-em-26-11-coleta-de-15-10-a-16-11-e-inflacao-em-12-meses-esta-em-4-63-detalhe.jpg',
        alt: 'Detalhe da ilustração: relatório do IPCA-15 de novembro com divulgação em 26/11/2026, coleta de 15/10 a 16/11, IPCA-15 de outubro de 0,32% e 4,62% em 12 meses.',
        caption:
          'Dados de referência do IPCA-15 de novembro, em ilustração do PortalFina.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A última leitura do IPCA-15, a de outubro, foi de 0,32% no mês e 4,62% em 12 meses. O IPCA cheio de outubro subiu 0,14% e acumulou 4,63% em 12 meses. Os dois números estão acima do teto de 4,5% da meta, que é de 3% com tolerância de 1,5 ponto percentual para cima ou para baixo.',
        'Com a Selic em 13,75% ao ano, o Banco Central mantém o juro alto enquanto a inflação segue acima do teto. O IPCA-15 de novembro dirá se a inflação de 12 meses continua nesse patamar ou se começa a recuar.',
      ],
      table: {
        caption:
          'Calendário de divulgação do IBGE para os próximos índices',
        columns: ['Índice', 'Coleta', 'Divulgação'],
        rows: [
          ['IPCA-15 de novembro', '15/10 a 16/11', '26/11/2026'],
          ['IPCA de novembro', '31/10 a 1/12', '11/12/2026'],
          ['IPCA-15 de dezembro', '17/11 a 15/12', '23/12/2026'],
        ],
      },
    },
    {
      heading: 'O que isso significa em reais',
      paragraphs: [
        'No aluguel, o contrato indica o índice: se for o IPCA, vale o acumulado de 12 meses do IPCA cheio, e não o da prévia. Como referência, 4,63% sobre um aluguel de R$ 2.000 dá R$ 92,60 de aumento, e o novo valor fica em R$ 2.092,60. Use a calculadora de reajuste de aluguel com o índice e o mês do seu contrato.',
        'No salário, quem ganha R$ 3.000 precisaria de 4,63%, ou R$ 138,90, para chegar a R$ 3.138,90 e manter o poder de compra de 12 meses atrás. É uma régua de comparação, não um direito automático: o reajuste depende de convenção coletiva ou acordo com a empresa.',
        'Na renda fixa, a conta é parecida: um título que rende 5% ao ano entrega, descontada a inflação de 4,63%, ganho real de cerca de 0,35% (1,05 dividido por 1,0463, menos 1). Quanto maior o IPCA, menor o ganho real do mesmo investimento.',
      ],
    },
    {
      heading: 'O que observar na divulgação',
      paragraphs: [
        'Em 26/11, vale olhar três pontos: a taxa do mês, o acumulado em 12 meses e os grupos que mais pesaram, como alimentação, combustíveis e energia elétrica. Em outubro, o tomate e o diesel puxaram a alta, e a conta de luz ajudou a segurar o índice.',
        'O número de 26/11 ainda não foi divulgado, e este texto não traz projeção. Quando o IBGE publicar, o portal compara o resultado com o IPCA-15 de outubro.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando o IBGE divulga o IPCA-15 de novembro de 2026?',
      answer:
        'Em 26/11/2026, conforme o calendário do IBGE. A coleta de preços vai de 15/10 a 16/11.',
    },
    {
      question: 'IPCA-15 serve para reajustar o aluguel?',
      answer:
        'Em geral não. Os contratos costumam usar o IPCA cheio ou o IGP-M, conforme o que está escrito no contrato. O IPCA-15 é uma prévia.',
    },
    {
      question: 'Quando sai o IPCA cheio de novembro?',
      answer:
        'Em 11/12/2026, segundo o calendário do IBGE, com coleta de 31/10 a 1/12.',
    },
  ],
  sources: [
    {
      label:
        'IBGE: calendário de coleta e divulgação do IPCA e do IPCA-15 em 2026',
      url: 'https://ftp.ibge.gov.br/Precos_Indices_de_Precos_ao_Consumidor/Sistema_de_Indices_de_Precos_ao_Consumidor/Calendario/ipca_inpc_ipca15_coleta_divulgacao.csv?v=2026',
    },
    {
      label:
        'IBGE: IPCA-15, Índice Nacional de Preços ao Consumidor Amplo 15',
      url: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9260-indice-nacional-de-precos-ao-consumidor-amplo-15.html',
    },
    {
      label: 'IBGE: IPCA, Índice Nacional de Preços ao Consumidor Amplo',
      url: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidor-amplo.html',
    },
    {
      label: 'Banco Central do Brasil: meta para a inflação',
      url: 'https://www.bcb.gov.br/controleinflacao',
    },
  ],
} as const satisfies NewsDocument;
