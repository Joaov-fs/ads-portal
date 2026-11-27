import type { NewsDocument } from '../../types';

export const newsCmnAmplia1BilhaoCreditoEstadosMunicipios = {
  kind: 'news',
  slug: 'cmn-amplia-em-r-1-bilhao-limite-de-credito-a-estados-e-municipios-para-r-31-6-bi',
  title:
    'CMN amplia em R$ 1 bilhão o limite de crédito a estados e municípios, que sobe a R$ 31,625 bi em 2026',
  description:
    'Em reunião extraordinária em 26/11, o CMN elevou o teto de crédito a governos locais de R$ 30,625 bi para R$ 31,625 bi; o sublimite com garantia da União foi a R$ 11 bi.',
  category: 'economia',
  coverImage: {
    src: '/images/news/cmn-amplia-em-r-1-bilhao-limite-de-credito-a-estados-e-municipios-para-r-31-6-bi.jpg',
    alt: 'Documento com o limite de crédito antes e depois da decisão do CMN, calendário de novembro com o dia 26 marcado, calculadora e etiqueta de mais R$ 1 bi.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: ['cmn', 'credito', 'estados', 'municipios', 'contas-publicas'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'R$ 31,625 bi',
      label: 'Novo teto de crédito em 2026',
      note: 'Estados, Distrito Federal e municípios. Antes: R$ 30,625 bi.',
    },
    {
      value: '+R$ 1 bi',
      label: 'Ampliação aprovada',
      note: 'Aumento de cerca de 3,3% sobre o limite anterior.',
    },
    {
      value: 'R$ 11 bi',
      label: 'Sublimite com garantia da União',
      note: 'Passou de R$ 10 bilhões, uma alta de 10%.',
    },
  ],
  sections: [
    {
      heading: 'O que o CMN decidiu em 26/11',
      paragraphs: [
        'O Conselho Monetário Nacional (CMN) aprovou, em reunião extraordinária na noite de 26/11, a ampliação de R$ 1 bilhão no limite global de crédito para governos locais em 2026. O teto anual das operações de crédito de estados, Distrito Federal e municípios passou de R$ 30,625 bilhões para R$ 31,625 bilhões, segundo a Agência Brasil. A resolução entra em vigor na data de sua publicação.',
        'O aumento foi direcionado ao sublimite de operações com garantia da União, que passou de R$ 10 bilhões para R$ 11 bilhões. Segundo o Ministério da Fazenda, os limites estavam praticamente esgotados, e a medida busca ampliar a capacidade de financiamento, principalmente em empréstimos garantidos pelo Tesouro.',
      ],
    },
    {
      heading: 'De onde vem o R$ 1 bilhão',
      image: {
        src: '/images/news/cmn-amplia-em-r-1-bilhao-limite-de-credito-a-estados-e-municipios-para-r-31-6-bi-detalhe.jpg',
        alt: 'Detalhe do documento com o limite antes de R$ 30,625 bi, o limite agora de R$ 31,625 bi, o sublimite de R$ 11 bi e a data da reunião.',
        caption:
          'Limites de crédito a estados e municípios após a reunião do CMN de 26/11, conforme a Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Um levantamento do Tesouro Nacional feito em novembro apontou cerca de R$ 7,49 bilhões de espaço fiscal disponível até o fim de 2026. O Tesouro considerou possível remanejar até R$ 2 bilhões, mas a resolução do CMN transfere apenas R$ 1 bilhão. Ou seja, trata-se de uma redistribuição da margem fiscal já prevista, e não de dinheiro novo no caixa.',
        'Fazendo a conta, o limite subiu 3,27% (1 ÷ 30,625), valor aproximado calculado pelo portal a partir dos números divulgados. No sublimite com garantia da União, o aumento foi de 10% (de R$ 10 bi para R$ 11 bi).',
      ],
      table: {
        caption: 'Limites de crédito a governos locais em 2026',
        columns: ['Item', 'Valor'],
        rows: [
          ['Teto anual antes da decisão', 'R$ 30,625 bilhões'],
          ['Teto anual depois da decisão', 'R$ 31,625 bilhões'],
          [
            'Sublimite com garantia da União',
            'R$ 11 bilhões (antes, R$ 10 bi)',
          ],
          ['Novo PAC com garantia da União', 'R$ 2,8 bilhões'],
          ['Novo PAC sem garantia', 'R$ 2,2 bilhões'],
          ['Estados, DF e municípios sem garantia', 'R$ 7 bilhões'],
          ['Correios', 'R$ 8 bilhões'],
          ['Órgãos da União', 'R$ 625 milhões'],
        ],
      },
    },
    {
      heading: 'O que isso muda para o cidadão',
      paragraphs: [
        'O limite do CMN define até quanto estados e municípios podem contratar de empréstimos no ano. Ele não é um repasse: o dinheiro é crédito, que precisa ser pago com juros. Por isso, a decisão não gera benefício direto na conta de ninguém. O efeito prático é abrir espaço para que governos locais que já têm projetos em análise, como obras, saneamento e mobilidade, consigam contratar financiamentos ainda neste ano.',
        'Cada operação ainda depende de aprovação individual, da capacidade de pagamento do ente e das regras de responsabilidade fiscal. Ter limite maior não obriga nenhum estado ou município a contratar crédito, e não garante que um pedido específico será aprovado.',
      ],
    },
    {
      heading: 'Quem decide o limite',
      paragraphs: [
        'O CMN é o órgão que define as diretrizes da política monetária, cambial e de crédito do país. É formado pelo ministro da Fazenda, Dario Durigan, que o preside, pelo presidente do Banco Central, Gabriel Galípolo, e pelo ministro do Planejamento e Orçamento, Bruno Moretti. A reunião de 26/11 foi extraordinária, ou seja, fora do calendário regular de encontros do colegiado.',
      ],
    },
  ],
  faq: [
    {
      question: 'O CMN liberou R$ 1 bilhão para estados e municípios?',
      answer:
        'Não como dinheiro novo. O conselho ampliou em R$ 1 bilhão o limite de crédito que estados, DF e municípios podem contratar em 2026. É um teto para empréstimos, que precisam ser pagos.',
    },
    {
      question: 'Qual é o novo limite de crédito em 2026?',
      answer:
        'O teto anual passou de R$ 30,625 bilhões para R$ 31,625 bilhões, e o sublimite com garantia da União foi de R$ 10 bilhões para R$ 11 bilhões.',
    },
    {
      question: 'A resolução já vale?',
      answer:
        'Segundo a Agência Brasil, a resolução entra em vigor na data de sua publicação. O texto lido não informa a data de publicação no Diário Oficial.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: CMN amplia em R$ 1 bilhão limite de crédito a estados e municípios (27/11/2026)',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/cmn-amplia-em-r-1-bilhao-limite-de-credito-estados-e-municipios',
    },
    {
      label: 'Banco Central: Conselho Monetário Nacional',
      url: 'https://www.bcb.gov.br/acessoinformacao/cmn',
    },
  ],
} as const satisfies NewsDocument;
