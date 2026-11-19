import type { NewsDocument } from '../../types';

export const newsSarampoBrasilLivre2026 = {
  kind: 'news',
  slug: 'sarampo-brasil-mantem-status-livre-70-casos-em-2026-vacina-gratis-ate-59-anos',
  title:
    'Brasil mantém status de país livre do sarampo, com 70 casos em 2026; vacina é grátis até os 59 anos',
  description:
    'A OPAS manteve o Brasil como país livre da circulação endêmica do sarampo em 17/11. Veja os 70 casos de 2026, quem pode tomar a tríplice viral no SUS e por quê.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/sarampo-brasil-mantem-status-livre-70-casos-em-2026-vacina-gratis-ate-59-anos.jpg',
    alt: 'Documento com os números do sarampo no Brasil, calendário de novembro e celular com a vacina tríplice viral do SUS.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-19',
  updatedAt: '2026-11-19',
  tags: ['sarampo', 'vacinacao', 'saude', 'sus', 'opas', 'triplice-viral'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '70',
      label: 'Casos confirmados em 2026',
      note: '99,7% abaixo do pico de 2019, segundo o Ministério da Saúde.',
    },
    {
      value: '21,7 mil',
      label: 'Casos em 2019',
      note: 'Ano em que o Brasil perdeu a certificação.',
    },
    {
      value: '59 anos',
      label: 'Idade máxima na vacina',
      note: 'Tríplice viral grátis a partir de 12 meses.',
    },
  ],
  sections: [
    {
      heading: 'O que a OPAS decidiu sobre o Brasil',
      paragraphs: [
        'O Brasil mantém o status de país livre da circulação endêmica do sarampo, condição recuperada em 2024. O reconhecimento da Organização Pan-Americana da Saúde (OPAS) foi divulgado pelo Ministério da Saúde na terça-feira (17/11).',
        'No mesmo anúncio, o Ministério informou que Bolívia, México e Estados Unidos perderam o status depois de registrarem circulação do vírus por 12 meses seguidos. Segundo o ministro Alexandre Padilha, os Estados Unidos ficaram sem o certificado após 26 anos, com mais de 5 mil casos e seis mortes em 2026, todas em pessoas não vacinadas.',
        'Manter o status não significa ausência de casos. Significa que o vírus não circula de forma contínua no país. Em 2026, o Brasil confirmou 70 casos, associados à importação do vírus, segundo o Ministério da Saúde.',
      ],
    },
    {
      heading: 'Quantos casos há no país e onde estão',
      image: {
        src: '/images/news/sarampo-brasil-mantem-status-livre-70-casos-em-2026-vacina-gratis-ate-59-anos-detalhe.jpg',
        alt: 'Detalhe da ilustração: casos confirmados de sarampo em 2026, pico de 2019, faixa etária da vacina e data do reconhecimento.',
        caption: 'Os números do Ministério da Saúde divulgados em 17/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Os 70 casos de 2026 estão 99,7% abaixo do pico de 2019, quando o país registrou 21,7 mil casos e perdeu a certificação de eliminação. Na conta: 21.700 menos 70 dá 21.630 casos a menos, ou 99,68% de queda, o que arredonda para 99,7%. Em 2023 não houve caso confirmado, e o último óbito pela doença foi em 2021.',
        'A maior parte dos casos de 2026 está em São Paulo, com 35. O restante aparece em municípios da região de fronteira do Amazonas e no Acre, como mostra a tabela.',
      ],
      table: {
        caption: 'Casos confirmados de sarampo em 2026, por município',
        columns: ['Município', 'Casos'],
        rows: [
          ['São Paulo (SP)', '35'],
          ['Tabatinga (AM)', '9'],
          ['Benjamin Constant (AM)', '7'],
          ['Atalaia do Norte (AM)', '6'],
          ['São Paulo de Olivença (AM)', '4'],
          ['Rio Branco (AC)', '2'],
        ],
      },
    },
    {
      heading: 'Quem pode se vacinar e o que fazer',
      paragraphs: [
        'A vacina tríplice viral, que protege contra sarampo, caxumba e rubéola, é gratuita nas unidades básicas de saúde de todo o país para pessoas de 12 meses a 59 anos. Quem não lembra se tomou as doses ou perdeu a caderneta pode procurar a UBS mais próxima, que confere o histórico no sistema do SUS.',
        'Em 2026, o Ministério da Saúde distribuiu mais de 16 milhões de doses aos estados e cedeu outras 500 mil ao Peru. Também fez o Dia S, de busca ativa de casos suspeitos, em 4/11, e um Dia D de vacinação em 7/11, na tríplice fronteira entre Brasil, Colômbia e Peru.',
        'O cenário nas Américas explica a atenção: até 13/11, a região somou 58,2 mil casos confirmados e 82 mortes, com Guatemala (34,9 mil), México (14,1 mil) e Estados Unidos (5,4 mil) à frente. Quem viaja para fora do país deve conferir a vacinação antes da viagem.',
      ],
    },
  ],
  faq: [
    {
      question: 'Status de livre do sarampo quer dizer que não há casos?',
      answer:
        'Não. O Brasil tem 70 casos confirmados em 2026, ligados à importação do vírus. O status indica que não há circulação endêmica, isto é, contínua, do vírus no país.',
    },
    {
      question: 'Quem pode tomar a vacina contra o sarampo no SUS?',
      answer:
        'A tríplice viral é gratuita nas UBS para pessoas de 12 meses a 59 anos, segundo o Ministério da Saúde. Cada caso deve ser conferido na unidade de saúde.',
    },
    {
      question: 'Quais países perderam o status em 2026?',
      answer:
        'Segundo o Ministério da Saúde, Bolívia, México e Estados Unidos perderam o status após 12 meses ininterruptos de circulação do vírus.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Saúde: Brasil mantém eliminação do sarampo após avanço da doença em países das Américas',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/brasil-mantem-eliminacao-do-sarampo-apos-avanco-da-doenca-em-paises-das-americas',
    },
    {
      label:
        'Agência Gov: Brasil mantém status de país livre do sarampo após avanço da doença em países das Américas',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/brasil-mantem-eliminacao-do-sarampo-apos-avanco-da-doenca-em-paises-das-americas',
    },
    {
      label: 'Ministério da Saúde: situação epidemiológica do sarampo',
      url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sarampo/situacao-epidemiologica',
    },
  ],
} as const satisfies NewsDocument;
