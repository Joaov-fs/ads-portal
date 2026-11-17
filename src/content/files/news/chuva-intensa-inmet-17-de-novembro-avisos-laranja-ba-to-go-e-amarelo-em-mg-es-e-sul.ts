import type { NewsDocument } from '../../types';

export const newsChuvaInmet17Novembro2026 = {
  kind: 'news',
  slug: 'chuva-intensa-inmet-17-de-novembro-avisos-laranja-ba-to-go-e-amarelo-em-mg-es-e-sul',
  title:
    'Inmet tem aviso laranja de tempestades na Bahia, em Tocantins e em Goiás em 17/11, e granizo no Sul',
  description:
    'Corredor de umidade traz chuva forte a quase todo o país em 17/11. Veja onde há aviso laranja e amarelo do Inmet e como se proteger.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/chuva-intensa-inmet-17-de-novembro-avisos-laranja-ba-to-go-e-amarelo-em-mg-es-e-sul.jpg',
    alt: 'Documento com os avisos do Inmet de 17/11/2026 ao lado de um calendário de novembro com o dia 17 destacado e a etiqueta chuva intensa.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-17',
  updatedAt: '2026-11-17',
  tags: ['inmet', 'chuva', 'defesa-civil', 'tempestades', 'previsao-do-tempo'],
  featuredCalculators: [],
  highlights: [
    {
      value: '17/11',
      label: 'Chuva intensa na maior parte do país',
      note: 'Terça-feira, segundo o Inmet.',
    },
    {
      value: 'Laranja',
      label: 'BA, TO e GO têm perigo',
      note: 'Nível acima do aviso amarelo.',
    },
    {
      value: '199',
      label: 'Telefone da Defesa Civil',
      note: 'Vale para todo o país.',
    },
  ],
  sections: [
    {
      heading: 'Onde o Inmet prevê tempestades em 17/11',
      paragraphs: [
        'O Instituto Nacional de Meteorologia (Inmet) prevê chuva intensa na maior parte do país em 17/11, terça-feira. Um corredor de umidade entre o Norte, o Nordeste, o Centro-Oeste e o Sudeste deve trazer grandes volumes de água. No Sul, a instabilidade vem do norte da Argentina e do sul do Paraguai.',
        'O aviso laranja, de perigo, vale para o centro e o sul de Tocantins, para o oeste, o centro, o sul e o leste da Bahia, para o norte de Goiás e para o norte de Minas Gerais. O aviso amarelo, de perigo potencial, cobre o sul do Pará, o centro e o sul do Maranhão, o Piauí, Sergipe, o sudoeste de Pernambuco e o restante da Bahia.',
        'No Centro-Oeste chove em toda a região, com aviso amarelo fora das áreas em laranja, exceto a faixa oeste de Mato Grosso e o extremo leste de Mato Grosso do Sul. No Sudeste, o aviso amarelo alcança o oeste, o centro e o leste de Minas Gerais, inclusive Belo Horizonte, e o Espírito Santo.',
      ],
    },
    {
      heading: 'Granizo e vento no Sul, temperaturas nas capitais',
      image: {
        src: '/images/news/chuva-intensa-inmet-17-de-novembro-avisos-laranja-ba-to-go-e-amarelo-em-mg-es-e-sul-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com os avisos do Inmet para 17/11/2026, com aviso laranja em BA, TO e GO.',
        caption:
          'Avisos do Inmet para terça-feira, 17/11/2026, em ilustração do PortalFina.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'No Sul há aviso amarelo de tempestades no noroeste, no oeste e no sudoeste do Paraná, no oeste de Santa Catarina e em todo o Rio Grande do Sul. O Inmet prevê granizo nos três estados e ventos fortes no litoral gaúcho e no sul catarinense.',
        'As temperaturas seguem altas no Norte e no Nordeste e mais amenas no Sul. As mínimas previstas nas capitais vão de 14 °C em Curitiba a 23 °C em Salvador, e as máximas, de 29 °C em Vitória a 35 °C em Manaus e em Teresina. Brasília tem mínima de 19 °C e São Paulo, de 16 °C.',
      ],
      table: {
        caption: 'Avisos do Inmet para 17/11 por região',
        columns: ['Região', 'Aviso laranja', 'Aviso amarelo'],
        rows: [
          ['Norte', 'Centro e sul de Tocantins', 'Sul do Pará'],
          [
            'Nordeste',
            'Oeste, centro, sul e leste da Bahia',
            'Resto da Bahia, SE, PI, centro e sul do MA e sudoeste de PE',
          ],
          ['Centro-Oeste', 'Norte de Goiás', 'Demais áreas, com exceções'],
          [
            'Sudeste',
            'Norte de Minas Gerais',
            'Oeste, centro e leste de MG e ES',
          ],
          [
            'Sul',
            'Sem aviso laranja',
            'Oeste e sudoeste do PR, oeste de SC e todo o RS',
          ],
        ],
      },
    },
    {
      heading: 'Como se proteger e quando ligar para a Defesa Civil',
      paragraphs: [
        'A Defesa Civil recomenda não se abrigar debaixo de árvores durante temporais e evitar o uso de aparelhos ligados à tomada, por causa dos raios. Para pedir orientação ou ajuda, o telefone é o 199, de qualquer lugar do país.',
        'Em dias de aviso, vale evitar deixar o carro em ruas sujeitas a alagamento, guardar objetos que o vento possa derrubar em varandas e quintais e acompanhar os avisos oficiais no portal do Inmet. Os avisos são atualizados ao longo do dia e podem mudar de nível.',
        'Como funciona a escala: o aviso amarelo indica perigo potencial, o laranja indica perigo e o vermelho, o nível mais alto, perigo grave. Quem mora em área de risco de deslizamento deve redobrar a atenção quando o aviso passa de amarelo para laranja.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que significa o aviso laranja do Inmet?',
      answer:
        'É o alerta de perigo. Indica condições para chuva forte, raios e ventos, com risco maior do que o do aviso amarelo, de perigo potencial.',
    },
    {
      question: 'Qual o telefone da Defesa Civil?',
      answer:
        'O 199, que funciona em todo o Brasil. Em risco imediato à vida, o atendimento de emergência também pode ser pedido aos bombeiros.',
    },
    {
      question: 'Onde conferir os avisos atualizados?',
      answer:
        'No portal de avisos do Inmet, que mostra os alertas por município e a validade de cada um. A previsão pode mudar ao longo do dia.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Terça-feira será de chuva intensa na maior parte do país',
      url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-11/terca-feira-sera-de-chuva-intensa-na-maior-parte-do-pais',
    },
    {
      label: 'Inmet: avisos meteorológicos',
      url: 'https://avisos.inmet.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
