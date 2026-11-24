import type { NewsDocument } from '../../types';

export const newsSarampoSpTransmissaoEncerrada = {
  kind: 'news',
  slug: 'sarampo-sp-encerra-transmissao-apos-3-meses-sem-casos-dose-zero-de-6-a-11-meses',
  title:
    'Sarampo: São Paulo encerra a transmissão dos casos importados após três meses sem registros, e vacina continua indicada até os 59 anos',
  description:
    'O Ministério da Saúde confirmou em 23/11 o fim da transmissão dos casos importados de sarampo em SP. O Brasil tem 70 casos em 2026 e a vacina é gratuita no SUS.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/sarampo-sp-encerra-transmissao-apos-3-meses-sem-casos-dose-zero-de-6-a-11-meses.jpg',
    alt: 'Documento sobre sarampo com 70 casos em 2026 e 21.741 em 2019, ao lado de um calendário de novembro de 2026.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-24',
  updatedAt: '2026-11-24',
  tags: ['sarampo', 'vacinacao', 'saude', 'sus', 'brasil'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '70',
      label: 'Casos de sarampo em 2026',
      note: '21.741 em 2019: queda de 99,7%.',
    },
    {
      value: '3 meses',
      label: 'Sem novos registros em SP',
      note: 'Confirmado em reunião em 23/11.',
    },
    {
      value: '6 meses a 59 anos',
      label: 'Faixa da vacinação ampliada',
      note: 'Em SP, Guarulhos e São Bernardo.',
    },
  ],
  sections: [
    {
      heading: 'O que o Ministério da Saúde confirmou em 23/11',
      paragraphs: [
        'A transmissão dos casos importados de sarampo registrados no município de São Paulo em 2026 foi interrompida, depois de três meses sem novos casos ligados à cadeia de transmissão. O encerramento foi confirmado na segunda-feira, 23/11, em reunião com representantes das gestões federal, estadual e municipal. Os primeiros casos haviam sido identificados em junho de 2026.',
        'A notícia complementa a publicação anterior do portal sobre o status do Brasil na eliminação do sarampo: agora há o fim da cadeia de transmissão em São Paulo. Para chegar a esse resultado, foram feitas investigação epidemiológica, monitoramento de contatos, busca ativa de casos suspeitos, bloqueio vacinal e ampliação da oferta de vacinas.',
      ],
    },
    {
      heading: 'Os números de 2026 e o que significa manter o status',
      image: {
        src: '/images/news/sarampo-sp-encerra-transmissao-apos-3-meses-sem-casos-dose-zero-de-6-a-11-meses-detalhe.jpg',
        alt: 'Detalhe do documento: 70 casos em 2026, 21.741 em 2019, dose zero para 6 a 11 meses e vacina gratuita no SUS.',
        caption:
          'Principais números do sarampo no Brasil informados pelo Ministério da Saúde.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Em 2026, o Brasil registrou 70 casos de sarampo, todos associados à importação ou a surtos ligados à importação. Em 2019 foram 21.741 casos. A redução é de 99,7%: 70 casos equivalem a cerca de 0,3% do total daquele ano.',
        'Em 17/11, a Organização Pan-Americana da Saúde reconheceu os esforços do Brasil para manter a eliminação da circulação endêmica. Bolívia, México e Estados Unidos perderam esse status por transmissão sustentada por 12 meses consecutivos. O Brasil recuperou a certificação em novembro de 2024. Segundo o ministério, casos importados não representam perda do status, mas exigem vigilância e alta cobertura vacinal.',
        'O ministério distribuiu mais de 13 milhões de doses da tríplice viral em 2026, sendo 6,8 milhões para São Paulo. No estado, mais de 3,1 milhões foram aplicadas até setembro.',
      ],
      table: {
        caption: 'Sarampo no Brasil: comparação de casos',
        columns: ['Ano', 'Casos', 'Observação'],
        rows: [
          ['2019', '21.741', 'Ano de comparação do ministério'],
          ['2026', '70', 'Todos ligados à importação'],
        ],
      },
    },
    {
      heading: 'Quem deve se vacinar e quando',
      paragraphs: [
        'A vacina é gratuita no SUS e faz parte do Calendário Nacional de Vacinação. Crianças recebem duas doses: a primeira aos 12 meses (tríplice viral) e a segunda aos 15 meses (tetra viral). Pessoas de 12 a 59 anos devem verificar a situação vacinal na caderneta e completar o esquema se faltar dose.',
        'Em São Paulo, Guarulhos e São Bernardo do Campo, a recomendação foi ampliar a oferta para pessoas de 6 meses a 59 anos. Para crianças de 6 a 11 meses, vale a dose zero, que não substitui as doses do calendário. Quem tem dúvida pode levar o cartão de vacinação a uma unidade básica de saúde.',
      ],
    },
    {
      heading: 'O que o leitor pode fazer agora',
      paragraphs: [
        'Procure o cartão de vacinação e confira as datas das doses. Quem vai viajar, principalmente para países onde há transmissão, deve se informar antes sobre a situação vacinal. Sintomas como febre com manchas vermelhas pelo corpo pedem avaliação na unidade de saúde, com aviso de histórico de viagem ou contato com casos.',
        'O ministério lembra que a vigilância continua mesmo com o fim da cadeia em São Paulo, e os Dias S de busca ativa de casos suspeitos de sarampo e rubéola aconteceram em março e novembro.',
      ],
    },
  ],
  faq: [
    {
      question: 'O sarampo voltou a circular no Brasil?',
      answer:
        'Segundo o Ministério da Saúde, os 70 casos de 2026 foram associados à importação ou a surtos ligados a ela, e o Brasil segue sem circulação endêmica.',
    },
    {
      question: 'A vacina contra o sarampo é gratuita?',
      answer:
        'Sim. A vacina é oferecida pelo SUS e integra o Calendário Nacional de Vacinação, com doses aos 12 e aos 15 meses para crianças.',
    },
    {
      question: 'O que é a dose zero?',
      answer:
        'É uma dose extra para crianças de 6 a 11 meses em áreas de reforço. Ela não substitui as doses do calendário.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Transmissão de casos importados de sarampo é encerrada em São Paulo após três meses sem novos registros',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/transmissao-de-casos-importados-de-sarampo-e-encerrada-em-sao-paulo-apos-tres-meses-sem-novos-registros',
    },
    {
      label:
        'Ministério da Saúde: Brasil mantém eliminação do sarampo após avanço da doença em países das Américas',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/brasil-mantem-eliminacao-do-sarampo-apos-avanco-da-doenca-em-paises-das-americas',
    },
  ],
} as const satisfies NewsDocument;
