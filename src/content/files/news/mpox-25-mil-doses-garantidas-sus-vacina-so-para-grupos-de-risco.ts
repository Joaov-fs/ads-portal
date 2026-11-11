import type { NewsDocument } from '../../types';

export const newsMpox25MilDoses2026 = {
  kind: 'news',
  slug: 'mpox-25-mil-doses-garantidas-sus-vacina-so-para-grupos-de-risco',
  title:
    'Mpox: Saúde garante 25 mil doses de vacina; SUS vacina só grupos de risco',
  description:
    'O Ministério da Saúde obteve 25 mil doses contra mpox, com entrega em cerca de 3 semanas. O SUS não faz vacinação em massa: veja quem pode tomar.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/mpox-25-mil-doses-garantidas-sus-vacina-so-para-grupos-de-risco.jpg',
    alt: 'Documento sobre a vacina contra mpox com 25 mil doses, intervalo de 28 dias, 832 casos em 2026 e entrega em 3 semanas, caixa de transporte, etiqueta de 25 mil e carimbo.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-11',
  updatedAt: '2026-11-11',
  tags: ['mpox', 'vacina', 'saude', 'sus', 'saude-publica'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '25 mil',
      label: 'Doses garantidas',
      note: 'Oferta inicial de 20 mil, ampliada em 5 mil.',
    },
    {
      value: '832',
      label: 'Casos confirmados em 2026',
      note: 'Dados até 06/11, com 1 óbito.',
    },
    {
      value: '28 dias',
      label: 'Intervalo entre as 2 doses',
      note: 'O esquema completo tem duas doses.',
    },
  ],
  sections: [
    {
      heading: 'O que o Ministério da Saúde anunciou sobre a vacina',
      paragraphs: [
        'O Ministério da Saúde informou que garantiu 25 mil doses da vacina contra mpox após negociação com o laboratório dinamarquês fabricante. A pasta diz ter obtido a quantidade máxima que o laboratório pode vender ao Brasil. A oferta inicial, pelo Fundo Rotatório da Organização Pan-Americana da Saúde (Opas), era de 20 mil doses e foi ampliada em 5 mil. A informação foi publicada em 8 de novembro de 2026 e atualizada em 10/11.',
        'A previsão é de que as doses cheguem nas próximas três semanas. Enquanto isso, o estoque estratégico nacional já atendeu nove estados com 3.650 doses, entre eles Rio de Janeiro, Ceará e Distrito Federal. Segundo o ministério, os estados pedem novas doses à medida que os estoques acabam, e o fabricante tem capacidade limitada, o que cria escassez mundial.',
      ],
    },
    {
      heading: 'Quem pode tomar a vacina no SUS',
      image: {
        src: '/images/news/mpox-25-mil-doses-garantidas-sus-vacina-so-para-grupos-de-risco-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com 25 mil doses, intervalo de 28 dias, 832 casos em 2026 e entrega em 3 semanas.',
        caption:
          'A vacinação é para grupos específicos, não para toda a população.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Pelas diretrizes da Organização Mundial da Saúde, o SUS não faz vacinação em massa contra mpox. A vacina é recomendada a grupos específicos, e a aplicação não é feita nas unidades básicas de saúde, mas nos Centros de Referência de Imunização.',
        'Quem não está em nenhum desses grupos não precisa procurar a vacina agora. Em caso de contato com alguém com a doença, a avaliação é feita pela vigilância em saúde do município.',
      ],
      table: {
        caption: 'Grupos recomendados pelo Ministério da Saúde',
        columns: ['Grupo', 'Como entra'],
        rows: [
          [
            'Pessoas vivendo com HIV/aids',
            'A partir de 18 anos, com prioridade para CD4 baixo (abaixo de 100 e abaixo de 200 células/mm³)',
          ],
          ['Usuários de PrEP', 'Entram entre os grupos recomendados'],
          ['Profissionais de laboratório', 'Os que manipulam amostras de mpox'],
          [
            'Contatos de casos suspeitos ou confirmados',
            'Risco médio ou alto, após avaliação da vigilância em saúde',
          ],
        ],
      },
    },
    {
      heading: 'Como será a aplicação: duas doses e dose intradérmica',
      paragraphs: [
        'O esquema tem duas doses, com 28 dias de intervalo. Quem tomar a primeira em 1º de dezembro, por exemplo, deve tomar a segunda em 29 de dezembro (1º/12 mais 28 dias). A vacina fica congelada a menos 20 °C e, depois de descongelada, deve ser aplicada em até quatro semanas.',
        'O ministério publicou nota técnica orientando estados e municípios a usar a aplicação intradérmica em grupos específicos. Segundo a pasta, a técnica, já usada na Europa, permite vacinar até cinco vezes mais pessoas com uma dose. Em conta ilustrativa, 25 mil doses no esquema padrão de duas doses completam 12.500 pessoas (25.000 divididos por 2).',
      ],
    },
    {
      heading: 'Como está a mpox no Brasil em 2026',
      paragraphs: [
        'O ministério registra 832 casos confirmados e 1 óbito até 6 de novembro de 2026. Em 2022, ano do surto internacional, foram 10,5 mil casos e 14 mortes, o que deixa 2026 cerca de 92% abaixo em casos. As internações caíram de 254 para 54 na mesma comparação.',
        'Em relação a 2025, o ministério indica queda de 16,8% nos casos e de 6,9% nas internações. A vacina não substitui as medidas de prevenção. Em caso de lesões na pele, febre ou aumento de gânglios, procure um serviço de saúde.',
      ],
    },
  ],
  faq: [
    {
      question: 'Toda a população vai ser vacinada contra mpox?',
      answer:
        'Não. O SUS não faz vacinação em massa. A vacina é recomendada a grupos específicos, como pessoas com HIV, usuários de PrEP e contatos de risco.',
    },
    {
      question: 'Onde se toma a vacina?',
      answer:
        'Nos Centros de Referência de Imunização, e não nas unidades básicas de saúde.',
    },
    {
      question: 'Quantas doses são necessárias?',
      answer:
        'Duas doses, com intervalo de 28 dias entre elas, segundo o Ministério da Saúde.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Saúde: Mpox, ministério garante 25 mil doses de vacina após negociação internacional',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/mpox-ministerio-da-saude-garante-25-mil-doses-de-vacina-apos-negociacao-internacional',
    },
    {
      label:
        'Agência Brasil: Ministério informa ter adquirido 25 mil doses de vacina contra mpox',
      url: 'https://agenciabrasil.ebc.com.br/saude/noticia/2026-11/ministerio-informa-ter-adquirido-25-mil-doses-de-vacina-contra-mpox',
    },
    {
      label: 'Ministério da Saúde: campanhas de 2026',
      url: 'https://www.gov.br/saude/pt-br/campanhas-da-saude/2026',
    },
  ],
} as const satisfies NewsDocument;
