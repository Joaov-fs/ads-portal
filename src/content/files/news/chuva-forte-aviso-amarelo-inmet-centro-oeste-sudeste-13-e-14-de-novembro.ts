import type { NewsDocument } from '../../types';

export const newsAvisoTempestades1314Novembro2026 = {
  kind: 'news',
  slug: 'chuva-forte-aviso-amarelo-inmet-centro-oeste-sudeste-13-e-14-de-novembro',
  title:
    'Inmet mantém aviso amarelo de tempestades no Centro-Oeste e no Sudeste em 13 e 14/11, com chuva acima de 50 mm',
  description:
    'Massa de ar quente e úmido traz chuva forte, raios e rajadas acima de 50 km/h em 13 e 14/11. Veja as regiões com aviso amarelo e como se proteger.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/chuva-forte-aviso-amarelo-inmet-centro-oeste-sudeste-13-e-14-de-novembro.jpg',
    alt: 'Documento com aviso amarelo do Inmet para 13 e 14/11, chuva acima de 50 mm em 24 horas e rajadas acima de 50 km/h, ao lado de celular da Defesa Civil com o 199 e calendário com os dias 13 e 14 marcados.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-13',
  updatedAt: '2026-11-13',
  tags: ['inmet', 'chuva', 'defesa-civil', 'tempestades', 'previsao-do-tempo'],
  featuredCalculators: [],
  highlights: [
    {
      value: '13 e 14/11',
      label: 'Aviso amarelo de tempestades',
      note: 'Sexta-feira e sábado, segundo o Inmet.',
    },
    {
      value: '+ de 50 mm',
      label: 'Chuva possível em 24 horas',
      note: 'Nas áreas em vermelho dos mapas do Inmet.',
    },
    {
      value: '199',
      label: 'Telefone da Defesa Civil',
      note: 'Vale para todo o país.',
    },
  ],
  sections: [
    {
      heading: 'Onde o Inmet prevê tempestades em 13 e 14/11',
      paragraphs: [
        'O Inmet divulgou em 12/11 a previsão para sexta-feira, 13/11, e sábado, 14/11. Uma massa de ar quente e úmido causa chuvas fortes e tempestades no Centro-Sul do país, e os maiores acumulados são esperados no Centro-Oeste e no Sudeste.',
        'Em 13/11, o aviso amarelo de perigo potencial para tempestades cobre toda a região Centro-Oeste e quase todo o Sudeste, com exceção do nordeste de Minas Gerais e do Espírito Santo. A chuva forte com trovoadas deve começar a partir da tarde em São Paulo, no Triângulo Mineiro, em Minas Gerais, no Rio de Janeiro e no centro e sul do Espírito Santo. Também há aviso amarelo em partes do Norte, como Amazonas, Acre, Rondônia, sul do Pará e sudoeste do Tocantins, e no oeste da Bahia.',
        'Em 14/11, o aviso amarelo segue em Minas Gerais, Rio de Janeiro e Espírito Santo, no Centro-Oeste, no Tocantins e sudeste do Pará, no sul do Maranhão e do Piauí e em áreas do oeste, centro e sul da Bahia. No Sul, o tempo é mais estável na sexta-feira, e a chuva se concentra no leste do Paraná e de Santa Catarina no sábado.',
      ],
    },
    {
      heading: 'O que significam 50 mm e rajadas de 50 km/h',
      image: {
        src: '/images/news/chuva-forte-aviso-amarelo-inmet-centro-oeste-sudeste-13-e-14-de-novembro-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com aviso amarelo do Inmet, 13 e 14/11 e chuva acima de 50 mm em 24 horas.',
        caption:
          'O Inmet marca em vermelho as áreas em que a chuva pode passar de 50 mm em 24 horas.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Nos mapas de acumulado de chuva, o Inmet destaca em tons de vermelho as áreas em que a chuva poderá superar 50 mm em 24 horas. Cada milímetro de chuva equivale a 1 litro de água por metro quadrado. Um quintal de 20 metros quadrados, por exemplo, pode receber 1.000 litros em um dia (20 x 50).',
        'Os mapas de vento indicam rajadas que podem passar de 50 km/h em setores do Centro-Oeste e do Sudeste nos dois dias. O aviso amarelo é o primeiro nível de alerta do Inmet, de perigo potencial: o risco de queda de galhos, alagamentos pontuais e interrupção de energia existe, mas não é o patamar máximo.',
        'As temperaturas seguem altas na maior parte do país. Segundo o Inmet, até sábado os termômetros das capitais vão de 14 °C em Curitiba a 39 °C em Teresina. Em São Paulo, a sexta-feira tem mínima de 18 °C e máxima de 23 °C.',
      ],
      table: {
        caption: 'Avisos amarelos do Inmet por região',
        columns: ['Região', 'Sexta-feira, 13/11', 'Sábado, 14/11'],
        rows: [
          ['Centro-Oeste', 'Toda a região', 'Quase toda a região'],
          [
            'Sudeste',
            'Quase toda a região, exceto o nordeste de MG e o ES',
            'MG, RJ e ES',
          ],
          [
            'Norte',
            'AM, AC, RO, sul do PA e sudoeste do TO',
            'TO e sudeste do PA',
          ],
          ['Nordeste', 'Oeste da Bahia', 'Sul do MA e do PI e BA'],
        ],
      },
    },
    {
      heading: 'Como se proteger e quando ligar para a Defesa Civil',
      paragraphs: [
        'A Defesa Civil recomenda não se abrigar debaixo de árvores durante temporais e evitar o uso de aparelhos eletrônicos ligados à tomada, por causa dos raios. Para pedir orientação ou ajuda, o telefone é o 199, de qualquer lugar do país.',
        'Em dias de aviso, vale evitar deixar o carro em ruas sujeitas a alagamento, guardar objetos que o vento possa derrubar em varandas e quintais e acompanhar os avisos oficiais no site do Inmet. Os avisos são atualizados ao longo do dia e podem mudar de nível.',
        'O Sul também lida com os efeitos de chuvas anteriores. Segundo a Secretaria Nacional de Defesa Civil, sete municípios de Paraná, Rio Grande do Sul e Santa Catarina tiveram situação de emergência reconhecida pelas chuvas de setembro, outubro e novembro. Com o reconhecimento, as prefeituras passam a poder pedir recursos federais.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que significa o aviso amarelo do Inmet?',
      answer:
        'É o alerta de perigo potencial. Indica que há condições para tempestades com chuva forte, raios e rajadas de vento, mas o risco é menor do que nos avisos laranja e vermelho.',
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
      label: 'Inmet: Previsão para sexta-feira (13) e sábado (14)',
      url: 'https://portal.inmet.gov.br/noticias/previs%C3%A3o-para-sexta-feira-13-e-s%C3%A1bado-14',
    },
    {
      label:
        'Agência Brasil: Inmet emite alerta de chuvas intensas em várias regiões do país',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/meio-ambiente/audio/2026-11/inmet-emite-alerta-de-chuvas-intensas-em-varias-regioes-do-pais',
    },
    {
      label: 'Inmet: avisos meteorológicos',
      url: 'https://avisos.inmet.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
