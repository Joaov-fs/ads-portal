import type { NewsDocument } from '../../types';

export const newsFocus16Novembro2026 = {
  kind: 'news',
  slug: 'focus-16-novembro-ipca-2026-cai-a-5-11-ipca-2027-sobe-a-5-00-e-dolar-vai-a-r-5-40',
  title:
    'Focus de 16/11: IPCA de 2026 cai a 5,11%, mas o de 2027 sobe a 5,00% e o dólar vai a R$ 5,40',
  description:
    'O boletim Focus cortou a inflação de 2026 para 5,11%, elevou a de 2027 para 5,00% e a Selic de 2027 para 12,75%. Veja o efeito em reais.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/focus-16-novembro-ipca-2026-cai-a-5-11-ipca-2027-sobe-a-5-00-e-dolar-vai-a-r-5-40.jpg',
    alt: 'Ficha do boletim Focus com IPCA de 2026 em 5,11%, IPCA de 2027 em 5,00%, Selic de 2027 em 12,75% e dólar de R$ 5,40, ao lado de pilha de moedas e etiqueta de 5,00%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-16',
  updatedAt: '2026-11-16',
  tags: ['focus', 'selic', 'ipca', 'dolar', 'inflacao', 'juros', 'pib'],
  featuredCalculators: ['cdb-liquido', 'porcentagem', 'cdi'],
  highlights: [
    {
      value: '5,11%',
      label: 'IPCA de 2026 no Focus',
      note: 'Era 5,22% no boletim de 9/11.',
    },
    {
      value: '5,00%',
      label: 'IPCA de 2027',
      note: 'Era 4,90%; quinta alta seguida.',
    },
    {
      value: '12,75%',
      label: 'Selic no fim de 2027',
      note: 'Era 12,50% na semana anterior.',
    },
    {
      value: 'R$ 5,40',
      label: 'Dólar no fim de 2026',
      note: 'Era R$ 5,35; terceira alta seguida.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou no Focus desta segunda-feira',
      paragraphs: [
        'O boletim Focus, pesquisa semanal do Banco Central com as projeções de instituições financeiras, foi divulgado na segunda-feira, 16 de novembro, com respostas coletadas até sexta-feira, 13. A mediana para o IPCA de 2026 caiu de 5,22% para 5,11%, mas continua acima do teto da meta de inflação. Para 2027, subiu de 4,90% para 5,00%, a quinta alta seguida.',
        'A Selic esperada para o fim de 2026 ficou em 13,75% ao ano, o nível atual da taxa. Para o fim de 2027, a projeção subiu de 12,50% para 12,75%. O PIB de 2026 passou de 1,75% para 1,72%, e o de 2027, de 1,15% para 1,02%, a quinta queda seguida.',
        'O dólar no fim de 2026 foi de R$ 5,35 para R$ 5,40, a terceira alta semanal, e o de 2027, de R$ 5,40 para R$ 5,45. Para 2028, o mercado manteve IPCA de 4,00%, Selic de 11% e PIB de 1,80%.',
      ],
      table: {
        caption: 'Projeções do boletim Focus (mediana)',
        columns: ['Indicador', 'Focus de 9/11', 'Focus de 16/11'],
        rows: [
          ['IPCA de 2026', '5,22%', '5,11%'],
          ['IPCA de 2027', '4,90%', '5,00%'],
          ['Selic no fim de 2026', '13,75%', '13,75%'],
          ['Selic no fim de 2027', '12,50%', '12,75%'],
          ['PIB de 2026', '1,75%', '1,72%'],
          ['PIB de 2027', '1,15%', '1,02%'],
          ['Dólar no fim de 2026', 'R$ 5,35', 'R$ 5,40'],
          ['Dólar no fim de 2027', 'R$ 5,40', 'R$ 5,45'],
        ],
      },
    },
    {
      heading: 'Por que a inflação de 2027 preocupa mais que a de 2026',
      image: {
        src: '/images/news/focus-16-novembro-ipca-2026-cai-a-5-11-ipca-2027-sobe-a-5-00-e-dolar-vai-a-r-5-40-detalhe.jpg',
        alt: 'Detalhe da ficha do Focus com IPCA de 2026 em 5,11%, IPCA de 2027 em 5,00%, Selic de 2027 em 12,75% e dólar de R$ 5,40.',
        caption:
          'Os quatro números centrais do Focus de 16 de novembro de 2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A queda do IPCA de 2026 é pequena, de 0,11 ponto percentual, e a inflação do ano continua acima da meta. O ponto de atenção é 2027: a projeção chegou a 5,00% e vem subindo semana após semana, o que indica que o mercado não espera a inflação voltar ao centro da meta, de 3%, tão cedo.',
        'Com a inflação esperada nesse nível e o dólar subindo, o Banco Central tem pouco espaço para reduzir os juros. É isso que explica a Selic de 2027 mais alta no boletim: juros altos por mais tempo encarecem o crédito e o financiamento, e mantêm o rendimento da renda fixa elevado.',
        'O Focus é uma pesquisa de expectativas, não uma decisão. Quem define a Selic é o Copom, e as projeções do boletim podem mudar a cada segunda-feira.',
      ],
    },
    {
      heading: 'Quanto isso muda no seu bolso',
      paragraphs: [
        'Na inflação, uma cesta de R$ 1.000 em 2027 passaria a custar R$ 1.050,00 com IPCA de 5,00%, e não R$ 1.049,00 como no boletim anterior. A diferença é de R$ 1,00 a cada R$ 1.000, pequena na semana, mas que se soma quando a revisão se repete.',
        'No câmbio, US$ 1.000 no fim de 2026 custariam R$ 5.400, R$ 50 a mais do que a R$ 5,35 projetados uma semana antes. Para quem tem compra parcelada em dólar, viagem ou mensalidade de serviço no exterior, o efeito aparece direto no orçamento.',
        'Na renda fixa, a Selic de 2027 mais alta ajuda quem investe. Com o CDI cerca de 0,10 ponto abaixo da Selic, um CDB a 100% do CDI rende cerca de R$ 1.043,63 líquidos em 12 meses a cada R$ 10.000 com a Selic em 12,75% (CDI de 12,65%), já descontado o IR de 17,5%. Com a Selic em 12,50% (CDI de 12,40%), seriam cerca de R$ 1.023,00, uma diferença de R$ 20,63.',
        'Os cálculos são simplificados, com um ano fechado e juros simples, só para comparar cenários. Para o seu caso, use a calculadora de CDB líquido.',
      ],
      table: {
        caption: 'CDB a 100% do CDI em R$ 10.000 por 12 meses, IR de 17,5%',
        columns: ['Selic', 'CDI aproximado', 'Rendimento líquido'],
        rows: [
          ['12,75% (Focus de 16/11)', '12,65%', 'R$ 1.043,63'],
          ['12,50% (Focus de 9/11)', '12,40%', 'R$ 1.023,00'],
        ],
      },
    },
  ],
  faq: [
    {
      question: 'O Focus define a taxa Selic?',
      answer:
        'Não. O Focus reúne o que as instituições esperam. Quem decide a Selic é o Copom, que se reúne a cada 45 dias aproximadamente.',
    },
    {
      question: 'A inflação de 2026 vai ficar em 5,11%?',
      answer:
        'É a mediana das projeções do mercado em 16/11, e pode mudar. O número oficial do ano é o IPCA calculado pelo IBGE.',
    },
    {
      question: 'Preciso mudar meu investimento por causa do Focus?',
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
        'SBT News: Focus, mercado eleva previsões de inflação e Selic para 2027',
      url: 'https://sbtnews.sbt.com.br/noticia/economia/focus-mercado-eleva-previsoes-de-inflacao-e-selic-para-2027',
    },
    {
      label:
        'InfoMoney: Focus eleva projeção de inflação e Selic para 2027, mas corta IPCA em 2026',
      url: 'https://www.infomoney.com.br/mercados/boletim-focus-projecoes-16112026/',
    },
  ],
} as const satisfies NewsDocument;
