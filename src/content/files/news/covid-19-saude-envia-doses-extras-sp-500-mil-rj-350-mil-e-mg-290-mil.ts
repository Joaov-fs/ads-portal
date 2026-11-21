import type { NewsDocument } from '../../types';

export const newsCovidDosesAdicionaisEstados2026 = {
  kind: 'news',
  slug: 'covid-19-saude-envia-doses-extras-sp-500-mil-rj-350-mil-e-mg-290-mil',
  title:
    'Covid-19: Saúde envia doses extras aos estados, com mais de 500 mil para SP, 350 mil para o RJ e 290 mil para MG',
  description:
    'O Ministério da Saúde anunciou em 16/11 doses extras da vacina contra a Covid-19 para 10 estados. Veja quem pode tomar no SUS, os intervalos e os números de 2026.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/covid-19-saude-envia-doses-extras-sp-500-mil-rj-350-mil-e-mg-290-mil.jpg',
    alt: 'Documento com as doses adicionais por estado, celular com a vacina Covid-19 do SUS e selo de entrega gradual.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-21',
  updatedAt: '2026-11-21',
  tags: ['covid-19', 'vacinacao', 'saude', 'sus', 'ministerio-da-saude'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '1,41 milhão',
      label: 'Doses extras anunciadas',
      note: 'Soma dos 10 estados citados pelo Ministério da Saúde.',
    },
    {
      value: '7,6 milhões',
      label: 'Doses aplicadas em 2026',
      note: 'De mais de 22,9 milhões distribuídas ao país.',
    },
    {
      value: '-62%',
      label: 'SRAG por Covid em 2026',
      note: '3.641 casos, contra 9.523 no mesmo período de 2025.',
    },
  ],
  sections: [
    {
      heading: 'O que o Ministério da Saúde anunciou',
      paragraphs: [
        'O Ministério da Saúde informou em 16/11 que vai enviar doses adicionais da vacina contra a Covid-19 aos estados, além da distribuição regular. A pasta consultou todas as secretarias estaduais de Saúde para definir os volumes.',
        'A vacina oferecida no SUS é a Comirnaty, da Pfizer. As entregas serão graduais, de acordo com a capacidade de recebimento de cada estado, e o repasse aos municípios é responsabilidade das secretarias estaduais. Por isso, a data em que a dose chega ao posto varia de cidade para cidade.',
        'Em 2026, o país já recebeu mais de 22,9 milhões de doses, e mais de 7,6 milhões foram aplicadas, segundo o Ministério. Na conta: 7,6 dividido por 22,9 dá cerca de 33%, ou seja, um terço das doses distribuídas já foi usado.',
      ],
    },
    {
      heading: 'Quantas doses vão para cada estado',
      image: {
        src: '/images/news/covid-19-saude-envia-doses-extras-sp-500-mil-rj-350-mil-e-mg-290-mil-detalhe.jpg',
        alt: 'Detalhe da ilustração: tabela com as doses adicionais de vacina contra a Covid-19 para São Paulo, Rio de Janeiro, Minas Gerais, Rio Grande do Sul e Paraná.',
        caption: 'Volumes anunciados pelo Ministério da Saúde em 16/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'São Paulo recebe a maior parte, com mais de 500 mil doses. O Rio de Janeiro fica com 350 mil, e 150 mil delas vão para o município do Rio. Somando os dez estados da lista, o total passa de 1,41 milhão de doses (500 + 350 + 290 + 140 + 50 + 20,4 + 18 + 17 + 20 + 5 = 1.410,4 mil, usando os valores aproximados informados).',
      ],
      table: {
        caption: 'Doses adicionais anunciadas por estado',
        columns: ['Estado', 'Doses adicionais'],
        rows: [
          ['São Paulo', 'mais de 500 mil'],
          ['Rio de Janeiro', '350 mil'],
          ['Minas Gerais', '290 mil'],
          ['Rio Grande do Sul', '140 mil'],
          ['Paraná', 'cerca de 50 mil'],
          ['Piauí', '20,4 mil'],
          ['Alagoas', '20 mil'],
          ['Mato Grosso do Sul', '18 mil'],
          ['Espírito Santo', 'cerca de 17 mil'],
          ['Tocantins', '5 mil'],
        ],
      },
    },
    {
      heading: 'Quem pode se vacinar e em qual intervalo',
      paragraphs: [
        'O calendário nacional inclui crianças de 6 meses a menores de 5 anos, gestantes e pessoas a partir de 60 anos. Idosos e imunocomprometidos tomam uma dose a cada seis meses, com intervalo mínimo de seis meses. Os demais grupos especiais tomam uma dose por ano.',
        'Exemplo prático: uma pessoa de 70 anos que tomou a última dose em 15/6/2026 passa a ter direito à próxima a partir de 15/12/2026, quando completa os seis meses.',
        'Crianças de 6 meses a menores de 5 anos que ainda não foram vacinadas fazem três doses: a segunda 4 semanas depois da primeira, e a terceira 8 semanas depois da segunda. Se a primeira dose for em 1/12/2026, a segunda cai em 29/12/2026 e a terceira em 23/2/2027. Quem tem dúvida sobre o esquema deve levar a caderneta à UBS.',
      ],
    },
    {
      heading: 'Como está a Covid-19 no país',
      paragraphs: [
        'Os casos graves seguem bem abaixo dos de 2025. Segundo o Ministério, a Síndrome Respiratória Aguda Grave (SRAG) por Covid-19 somou 3.641 casos em 2026 até o momento, queda de 62% frente aos 9.523 do mesmo período de 2025. Os óbitos caíram de 1.481 para 445, redução de 70%.',
        'Há, porém, sinal de atenção: o Informe de Vigilância das Síndromes Gripais, com dados até 31/10 e divulgado em 10/11, mostra tendência de crescimento dos casos leves nas últimas seis semanas em 18 unidades da federação, todas ainda em nível de baixo risco. Para a SRAG, a tendência de alta aparece em MT, DF, RJ, SP e SC, também em níveis baixos.',
        'Em outubro, o Ministério ofertou testes rápidos de Covid-19 a todos os estados e ao Distrito Federal e enviou antivirais para grupos de maior risco. O antiviral no SUS é indicado a grupos específicos e deve começar nos primeiros cinco dias de sintomas.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem pode tomar a vacina contra a Covid-19 no SUS?',
      answer:
        'O calendário nacional inclui crianças de 6 meses a menores de 5 anos, gestantes e pessoas a partir de 60 anos. Imunocomprometidos e outros grupos especiais seguem regras próprias, que a UBS confere.',
    },
    {
      question: 'Quando as doses extras chegam ao meu município?',
      answer:
        'As entregas são graduais e dependem da capacidade de cada estado, que repassa as doses aos municípios. O Ministério da Saúde não informou datas por cidade.',
    },
    {
      question: 'Qual é o intervalo da vacina para idosos?',
      answer:
        'Idosos e imunocomprometidos tomam uma dose a cada seis meses, com intervalo mínimo de seis meses desde a última dose, segundo o Ministério da Saúde.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Saúde: Ministério da Saúde enviará doses adicionais de vacinas contra a Covid-19 aos estados',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/ministerio-da-saude-enviara-doses-adicionais-de-vacinas-contra-a-covid-19-aos-estados',
    },
    {
      label:
        'Ministério da Saúde: Covid-19, casos e óbitos seguem em queda no Brasil',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/covid-19-casos-e-obitos-seguem-em-queda-no-brasil',
    },
    {
      label: 'Agência Gov: Covid-19, casos e óbitos seguem em queda no Brasil',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/covid-19-casos-e-obitos-seguem-em-queda-no-brasil',
    },
  ],
} as const satisfies NewsDocument;
