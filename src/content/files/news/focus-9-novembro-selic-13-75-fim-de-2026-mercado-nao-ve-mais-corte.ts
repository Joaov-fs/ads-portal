import type { NewsDocument } from '../../types';

export const newsFocus9Novembro2026Selic1375 = {
  kind: 'news',
  slug: 'focus-9-novembro-selic-13-75-fim-de-2026-mercado-nao-ve-mais-corte',
  title:
    'Focus de 9/11 vê Selic em 13,75% no fim de 2026: mercado deixa de apostar em corte este ano',
  description:
    'O boletim Focus subiu a Selic esperada para o fim de 2026 de 13,50% para 13,75%, o nível atual, e a inflação de 2027 para 4,90%. Veja o efeito em reais.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/focus-9-novembro-selic-13-75-fim-de-2026-mercado-nao-ve-mais-corte.jpg',
    alt: 'Ficha do boletim Focus de 9 de novembro com Selic de 13,75%, calendário de novembro com os dias 9 e 10 marcados e etiqueta de 13,75%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-09',
  updatedAt: '2026-11-09',
  tags: ['focus', 'selic', 'copom', 'ipca', 'dolar', 'juros', 'cdb'],
  featuredCalculators: ['cdb-liquido', 'simulador-de-emprestimo', 'cdi'],
  highlights: [
    {
      value: '13,75%',
      label: 'Selic no fim de 2026 no Focus',
      note: 'Era 13,50% na semana anterior. É a taxa de hoje.',
    },
    {
      value: '4,90%',
      label: 'IPCA de 2027',
      note: 'Era 4,76% uma semana antes.',
    },
    {
      value: '5,22%',
      label: 'IPCA de 2026',
      note: 'Igual ao da semana anterior.',
    },
    {
      value: 'R$ 5,35',
      label: 'Dólar no fim de 2026',
      note: 'Era R$ 5,34 uma semana antes.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou no Focus desta semana',
      paragraphs: [
        'O boletim Focus, pesquisa semanal do Banco Central com as projeções de instituições financeiras, saiu nesta segunda-feira, 9 de novembro. A mediana para a Selic no fim de 2026 subiu de 13,50% para 13,75% ao ano. Como a taxa já está em 13,75%, o mercado deixou de prever qualquer corte até dezembro.',
        'A projeção de inflação para 2027 subiu de 4,76% para 4,90%, mais um passo acima do centro da meta, de 3%. Para 2026, o IPCA esperado ficou em 5,22%, sem mudança. O crescimento do PIB de 2026 recuou de 1,76% para 1,75%, e o de 2027, de 1,20% para 1,15%.',
        'O dólar no fim de 2026 passou de R$ 5,34 para R$ 5,35, e o de 2027 ficou em R$ 5,40. A Selic esperada para o fim de 2027 permaneceu em 12,50%.',
      ],
      table: {
        caption: 'Projeções do boletim Focus (mediana)',
        columns: ['Indicador', 'Semana anterior', 'Focus de 9/11'],
        rows: [
          ['Selic no fim de 2026', '13,50%', '13,75%'],
          ['Selic no fim de 2027', '12,50%', '12,50%'],
          ['IPCA de 2026', '5,22%', '5,22%'],
          ['IPCA de 2027', '4,76%', '4,90%'],
          ['Dólar no fim de 2026', 'R$ 5,34', 'R$ 5,35'],
          ['PIB de 2026', '1,76%', '1,75%'],
          ['PIB de 2027', '1,20%', '1,15%'],
        ],
      },
    },
    {
      heading: 'Por que isso importa para os juros',
      image: {
        src: '/images/news/focus-9-novembro-selic-13-75-fim-de-2026-mercado-nao-ve-mais-corte-detalhe.jpg',
        alt: 'Detalhe da ficha do Focus com a Selic de 13,75%, a projeção anterior de 13,50%, o IPCA de 2027 de 4,90% e o dólar de R$ 5,35.',
        caption:
          'Em uma semana, a Selic esperada para dezembro voltou ao nível atual.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O Copom manteve a Selic em 13,75% na reunião de 4 de novembro. O Focus mostra que o mercado, depois disso, passou a esperar que a taxa fique onde está até o fim do ano. A ata da reunião sai em 10 de novembro e costuma detalhar o que o comitê considera para os próximos passos.',
        'A lógica é simples: com a inflação esperada acima da meta e o dólar acima de R$ 5,30, o Banco Central tem menos espaço para baixar os juros. Juros altos por mais tempo encarecem o crédito, mas aumentam o rendimento da renda fixa.',
        'O Focus é uma pesquisa de expectativas, não uma decisão. A próxima reunião do Copom define a taxa, e o boletim pode mudar toda segunda-feira.',
      ],
    },
    {
      heading: 'Quanto isso muda no seu bolso',
      paragraphs: [
        'Para quem investe, a Selic em 13,75% por mais tempo mantém o rendimento alto. Um CDB a 100% do CDI rende cerca de R$ 1.126,13 líquidos por ano a cada R$ 10.000 com o CDI em 13,65%, já descontado o IR de 17,5%. Se a Selic caísse para 13,50% (CDI de 13,40%), o líquido seria de cerca de R$ 1.105,50, uma diferença de R$ 20,63 por ano.',
        'Para quem deve, a conta é a inversa. Uma dívida de R$ 50.000 a 120% do CDI custa cerca de R$ 8.190 de juros por ano com o CDI em 13,65%. Com o CDI em 13,40%, seriam R$ 8.040, ou R$ 150 a menos. Sem corte, essa economia não vem.',
        'Na inflação de 2027, a revisão de 4,76% para 4,90% significa que uma cesta de R$ 1.000 passaria a custar R$ 1.049,00 ao fim de 2027, e não R$ 1.047,60. No câmbio, US$ 1.000 em dezembro custariam cerca de R$ 5.350.',
        'Os cálculos são simplificados, com um ano fechado e juros simples, só para comparar cenários. Para o seu caso, use a calculadora de CDB líquido e o simulador de empréstimo.',
      ],
      table: {
        caption: 'CDB a 100% do CDI em R$ 10.000 por 12 meses, IR de 17,5%',
        columns: ['Selic', 'CDI aproximado', 'Rendimento líquido'],
        rows: [
          ['13,75% (hoje)', '13,65%', 'R$ 1.126,13'],
          ['13,50% (cenário de corte)', '13,40%', 'R$ 1.105,50'],
        ],
      },
    },
  ],
  faq: [
    {
      question: 'Quem define a taxa Selic: o Focus ou o Copom?',
      answer:
        'Não. O Focus reúne o que os analistas esperam. Quem decide é o Copom, que se reúne a cada 45 dias aproximadamente.',
    },
    {
      question: 'A Selic vai cair este ano?',
      answer:
        'A mediana do Focus de 9/11 aponta Selic de 13,75% no fim de 2026, ou seja, sem corte. É uma expectativa de mercado, não uma garantia.',
    },
    {
      question: 'Preciso mudar meu CDB por causa do Focus de 9/11?',
      answer:
        'Para a reserva de emergência, a diferença entre os cenários é de cerca de R$ 20 por ano a cada R$ 10 mil. Mais importante é ter liquidez diária e comparar o rendimento líquido.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil: boletim Focus',
      url: 'https://www.bcb.gov.br/publicacoes/focus',
    },
    {
      label:
        'InfoMoney: Boletim Focus eleva projeção da Selic para 13,75% em 2026 e vê juros mais altos',
      url: 'https://www.infomoney.com.br/economia/boletim-focus-projecoes-09112026/',
    },
    {
      label:
        'WSCOM: Boletim Focus, mercado financeiro eleva projeção da taxa Selic para 13,75% no fim de 2026',
      url: 'https://wscom.com.br/economia/2026/11/09/boletim-focus-mercado-financeiro-eleva-projecao-da-taxa-selic-para-1375-no-fim-de-2026/',
    },
    {
      label: 'Banco Central do Brasil: Comitê de Política Monetária (Copom)',
      url: 'https://www.bcb.gov.br/en/monetarypolicy/committee',
    },
  ],
} as const satisfies NewsDocument;
