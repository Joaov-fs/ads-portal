import type { NewsDocument } from '../../types';

export const newsAjusteFiscalDestaquesRemarcados18Novembro = {
  kind: 'news',
  slug: 'ajuste-fiscal-senado-remarca-destaques-para-18-11-e-camara-so-vota-depois',
  title:
    'Ajuste fiscal: Senado remarca os destaques para 18/11 e a Câmara só vota depois',
  description:
    'O Senado adiou de 17/11 para 18/11 a votação dos destaques do PLP 299/2026. Só depois o texto vai à Câmara, onde a votação mais provável seria em 24/11.',
  category: 'politica',
  coverImage: {
    src: '/images/news/ajuste-fiscal-senado-remarca-destaques-para-18-11-e-camara-so-vota-depois.jpg',
    alt: 'Ilustração com documento do PLP 299/2026, calendário de novembro com o dia 18 marcado e um relógio.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  tags: [
    'ajuste-fiscal',
    'plp-299-2026',
    'senado',
    'camara',
    'lei-kandir',
    'orcamento-2027',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '18/11',
      label: 'Nova data dos destaques',
      note: 'Estavam previstos para 17/11 no Senado.',
    },
    {
      value: '4',
      label: 'Pontos ainda pendentes',
      note: 'Votações separadas de trechos do texto.',
    },
    {
      value: '45 a 31',
      label: 'Placar do texto principal',
      note: 'Aprovado em 12/11 no plenário do Senado.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou desde a aprovação do texto principal',
      image: {
        src: '/images/news/ajuste-fiscal-senado-remarca-destaques-para-18-11-e-camara-so-vota-depois-detalhe.jpg',
        alt: 'Detalhe da ilustração: PLP 299/2026, texto principal em 12/11, placar de 45 a 31 e quatro pontos pendentes.',
        caption: 'Situação do PLP 299/2026 antes da votação dos destaques.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O Senado aprovou em 12/11 o texto principal do PLP 299/2026, o pacote de ajuste fiscal, por 45 votos a 31. Os destaques, que são votações separadas de trechos do texto, estavam marcados para 17/11, mas foram remarcados para quarta-feira, 18/11. A notícia anterior do PortalFina, de 13/11, trazia 17/11 como data prevista, e essa data não vale mais.',
        'Segundo a Agência Senado, o presidente da Casa, Davi Alcolumbre, atendeu a um pedido do relator, senador Eduardo Braga (MDB-AM), que pediu mais tempo para tentar um acordo sobre os pontos pendentes. A Agência Câmara informa que havia expectativa de que o projeto fosse analisado pelos senadores e pelos deputados já na terça, o que não aconteceu.',
        'Até a publicação desta matéria, o resultado da votação de 18/11 ainda não constava nas páginas oficiais consultadas. Quando os destaques forem concluídos, o texto segue para a Câmara dos Deputados.',
      ],
    },
    {
      heading: 'Quais são os pontos em disputa',
      paragraphs: [
        'A Agência Senado cita dois dos pontos pendentes: um destaque para impedir o adiamento dos repasses a estados e municípios previstos na Lei Kandir e outro para retirar o teto de R$ 3 bilhões por ano aos pagamentos federais de compensação previdenciária. O Metrópoles, que acompanha a negociação, lista quatro destaques, incluindo o corte das compensações tributárias das empresas e uma emenda para reduzir de 2% para 0,6% o limite de alta real das despesas.',
        'Um exemplo para dimensionar a Lei Kandir, com os números descritos no texto: o repasse anual cairia de R$ 4 bilhões para R$ 1 bilhão entre 2027 e 2030, uma diferença de R$ 3 bilhões por ano e de R$ 12 bilhões nos quatro anos. Já no limite de despesas, sobre um conjunto de R$ 100 bilhões, a alta real de 2% seria de R$ 2 bilhões, contra R$ 0,6 bilhão se prevalecesse a emenda de 0,6%. É uma conta de ilustração, pois o valor real depende de quais despesas entram no limite.',
      ],
      table: {
        caption: 'Os quatro destaques segundo o Metrópoles',
        columns: ['Ponto', 'O que está em jogo'],
        rows: [
          [
            'Lei Kandir',
            'Repasse de R$ 4 bi para R$ 1 bi por ano entre 2027 e 2030',
          ],
          [
            'Compensações tributárias',
            'Limite ao uso de créditos pelas empresas, impacto de R$ 12,8 bi a R$ 18,3 bi em 2027',
          ],
          [
            'Compensação previdenciária',
            'Teto de R$ 3 bi por ano entre regimes de previdência',
          ],
          [
            'Limite de despesas',
            'Emenda para cair de 2% para 0,6% a alta real em anos de contenção',
          ],
        ],
      },
    },
    {
      heading: 'Quantos votos são necessários e o que vem na Câmara',
      paragraphs: [
        'Segundo o Metrópoles, a margem do governo no Senado é de 45 votos para um mínimo de 41, e a emenda do senador Rogério Marinho (PL-RN) precisa de 41 votos para ser incluída. Esse número é da reportagem, não consta nas páginas oficiais lidas, e vale tratar como informação a confirmar.',
        'Na Câmara, o Metrópoles informa que o calendário mais provável seria a terça-feira, 24/11, se o Senado concluir a votação na quarta. O presidente da Câmara, Hugo Motta, viaja a Buenos Aires em 18/11 e volta em 19/11, e sexta-feira, 20/11, é feriado de Consciência Negra. O relator na Câmara seria o deputado Mauro Benevides Filho (União-CE). Essa data é uma expectativa de bastidor, e não uma pauta oficial.',
        'O governo estima uma melhora de até R$ 56 bilhões no resultado primário de 2027 com o conjunto de medidas, segundo o Senado. Para o cidadão, nada muda ainda em salário, benefício ou imposto: a regra só vale depois da aprovação nas duas Casas e da sanção.',
      ],
    },
  ],
  faq: [
    {
      question: 'Por que a votação dos destaques foi adiada?',
      answer:
        'O relator, senador Eduardo Braga, pediu mais tempo para tentar um acordo sobre os pontos pendentes, e o presidente do Senado, Davi Alcolumbre, atendeu. A votação passou de 17/11 para 18/11.',
    },
    {
      question: 'O ajuste fiscal já foi aprovado?',
      answer:
        'O texto principal foi aprovado no Senado em 12/11, por 45 votos a 31. Faltam os destaques no Senado, a votação na Câmara e a sanção para a regra valer.',
    },
    {
      question: 'Quando a Câmara deve votar?',
      answer:
        'Não há data oficial. O Metrópoles aponta 24/11 como o calendário mais provável, caso o Senado conclua a votação em 18/11.',
    },
  ],
  sources: [
    {
      label:
        'Agência Senado: Votação de destaques ao ajuste fiscal é remarcada para quarta-feira',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/11/17/votacao-de-destaques-ao-ajuste-fiscal-e-remarcada-na-quarta-feira',
    },
    {
      label:
        'Agência Câmara: Votação do projeto de ajuste fiscal no Senado fica para esta quarta-feira',
      url: 'https://www.camara.leg.br/noticias/1320416-votacao-do-projeto-de-ajuste-fiscal-no-senado-fica-para-esta-quarta-feira',
    },
    {
      label:
        'Metrópoles: Impasse no Senado deve adiar PLP fiscal na Câmara para semana que vem',
      url: 'https://www.metropoles.com/brasil/impasse-no-senado-deve-adiar-plp-fiscal-na-camara-para-semana-que-vem',
    },
    {
      label: 'Senado Federal: PLP 299/2026',
      url: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/176328',
    },
  ],
} as const satisfies NewsDocument;
