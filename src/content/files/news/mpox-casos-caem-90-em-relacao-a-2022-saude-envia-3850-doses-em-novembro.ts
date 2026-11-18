import type { NewsDocument } from '../../types';

export const newsMpoxCasos90Abaixo2022 = {
  kind: 'news',
  slug: 'mpox-casos-caem-90-em-relacao-a-2022-saude-envia-3850-doses-em-novembro',
  title:
    'Mpox: casos de 2026 ficam 90% abaixo de 2022 e Saúde envia 3.850 doses em novembro',
  description:
    'O Brasil tem 1.055 casos e 1 óbito de mpox em 2026, contra 10.591 casos em 2022. Veja onde estão os casos, quem pode se vacinar e como se prevenir.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/mpox-casos-caem-90-em-relacao-a-2022-saude-envia-3850-doses-em-novembro.jpg',
    alt: 'Documento com os números de mpox no Brasil, gráfico com a queda de 2022 para 2026, etiqueta de menos 90% e caixa de vacinas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  tags: ['mpox', 'vacina', 'saude', 'sus', 'saude-publica'],
  featuredCalculators: ['contador-de-dias', 'porcentagem'],
  highlights: [
    {
      value: '1.055',
      label: 'Casos confirmados em 2026',
      note: 'Em 2022, ano do pico, foram 10.591.',
    },
    {
      value: '3.850',
      label: 'Doses enviadas em novembro',
      note: 'Rio de Janeiro recebeu 2 mil.',
    },
    {
      value: '1',
      label: 'Óbito em 2026',
      note: 'Registrado em outubro, no Rio de Janeiro.',
    },
  ],
  sections: [
    {
      heading: 'Quantos casos de mpox o Brasil tem em 2026',
      paragraphs: [
        'O Ministério da Saúde informou, em nota publicada em 16/11/2026 e atualizada em 17/11, que o país soma 1.055 casos confirmados de mpox em 2026. Em 2022, ano do pico da doença no Brasil, foram 10.591 casos. A conta mostra que os casos atuais representam cerca de 10% daquele total, ou seja, uma queda perto de 90%.',
        'Os óbitos também caíram. Em 2022 houve 14 mortes; em 2026 houve 1, registrada em outubro no município do Rio de Janeiro. Isso representa uma redução de 92,9% nas mortes. A notícia se soma à de 11/11, quando o ministério anunciou a garantia de 25 mil doses: desde então, o balanço de casos subiu de 832 (dados até 06/11) para 1.055 na contagem mais recente.',
      ],
    },
    {
      heading: 'Onde estão os casos confirmados',
      image: {
        src: '/images/news/mpox-casos-caem-90-em-relacao-a-2022-saude-envia-3850-doses-em-novembro-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com casos em 2022 e 2026, óbitos em 2026 e doses enviadas em novembro.',
        caption: 'Os casos se concentram em grandes centros urbanos.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Segundo o ministério, São Paulo tem 398 casos e o Rio de Janeiro tem 391. Juntos, os dois estados somam 789 casos, ou 74,8% do total nacional. Em seguida aparecem Ceará, com 60 casos, Minas Gerais, com 41, e Distrito Federal, com 39.',
        'A transmissão acontece principalmente por contato próximo com pessoas infectadas, e a pasta destaca que os casos se concentram em grandes centros urbanos.',
      ],
      table: {
        caption: 'Casos confirmados de mpox em 2026 por estado',
        columns: ['Estado', 'Casos confirmados'],
        rows: [
          ['São Paulo', '398'],
          ['Rio de Janeiro', '391'],
          ['Ceará', '60'],
          ['Minas Gerais', '41'],
          ['Distrito Federal', '39'],
        ],
      },
    },
    {
      heading: 'Quantas doses chegaram aos estados e quem pode tomar',
      paragraphs: [
        'Em novembro, o ministério enviou 3.850 doses da vacina: 2 mil ao Rio de Janeiro, 500 à Bahia, 400 ao Ceará, 300 ao Piauí, 250 ao Paraná e 100 cada ao Distrito Federal, à Paraíba, ao Amapá e a Goiás. Desde o início de 2026, mais de 15,6 mil doses foram distribuídas aos estados, e 12,2 mil já foram aplicadas, cerca de 78% do total enviado.',
        'A oferta é limitada porque existe um único laboratório produtor no mundo, na Dinamarca, pré-qualificado pela Organização Mundial da Saúde. Por isso o SUS não faz vacinação em massa. Podem receber a vacina pessoas vivendo com HIV/aids com CD4 abaixo de 100 células/mm³, com ampliação gradual para quem tem CD4 abaixo de 200, usuários de PrEP, profissionais de laboratório que manipulam amostras de mpox e pessoas de 18 a 49 anos após exposição de risco médio ou alto a casos suspeitos, prováveis ou confirmados.',
        'A vacina não é aplicada nas unidades básicas de saúde. Quem se enquadra deve procurar o serviço de referência onde já é acompanhado, para cadastro e agendamento. O esquema tem duas doses, com 28 dias de intervalo: quem tomar a primeira em 20/11 deve tomar a segunda em 18/12. A vacina fica congelada a menos 20 °C e, depois de descongelada, deve ser aplicada em até quatro semanas.',
        'Na semana anterior à nota, o ministério orientou estados e municípios a adotar a aplicação intradérmica, já usada na Europa, que permite ampliar em até cinco vezes o número de pessoas vacinadas com uma dose, em grupos específicos.',
      ],
    },
    {
      heading: 'Sintomas e como se prevenir',
      paragraphs: [
        'Os principais sintomas são lesões na pele (erupções cutâneas), febre, ínguas, dor de cabeça, dores no corpo, calafrios e fraqueza. Quem teve contato próximo com uma pessoa infectada deve procurar um serviço de saúde para orientação.',
        'A vacina não substitui os cuidados básicos. O ministério recomenda evitar contato direto com pessoas com suspeita ou confirmação da doença, higienizar as mãos, lavar roupas, toalhas e lençóis e limpar superfícies e objetos de uso frequente.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quantos casos de mpox o Brasil registrou em 2026?',
      answer:
        'Segundo o Ministério da Saúde, 1.055 casos confirmados e 1 óbito, registrado em outubro no município do Rio de Janeiro. Em 2022 foram 10.591 casos e 14 mortes.',
    },
    {
      question: 'Todo mundo pode tomar a vacina contra mpox pelo SUS?',
      answer:
        'Não. O SUS vacina grupos específicos, como pessoas vivendo com HIV com CD4 baixo, usuários de PrEP, profissionais de laboratório e pessoas expostas a casos, de 18 a 49 anos. A aplicação é feita no serviço de referência, não nas unidades básicas.',
    },
    {
      question: 'Qual o intervalo entre as duas doses?',
      answer:
        'São 28 dias. Quem toma a primeira dose em 20/11 deve tomar a segunda em 18/12.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Saúde: casos e óbitos por mpox estão cerca de 90% abaixo dos registrados em 2022',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/casos-e-obitos-por-mpox-no-brasil-estao-cerca-de-90-abaixo-dos-registrados-em-2022',
    },
    {
      label:
        'Ministério da Saúde: 25 mil doses de vacina garantidas após negociação internacional',
      url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/novembro/mpox-ministerio-da-saude-garante-25-mil-doses-de-vacina-apos-negociacao-internacional',
    },
  ],
} as const satisfies NewsDocument;
