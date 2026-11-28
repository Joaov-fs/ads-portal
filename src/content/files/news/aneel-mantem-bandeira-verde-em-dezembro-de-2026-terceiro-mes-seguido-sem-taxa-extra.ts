import type { NewsDocument } from '../../types';

export const newsAneelBandeiraVerdeDezembro2026 = {
  kind: 'news',
  slug: 'aneel-mantem-bandeira-verde-em-dezembro-de-2026-terceiro-mes-seguido-sem-taxa-extra',
  title:
    'Aneel mantém bandeira verde em dezembro e conta de luz fica sem taxa extra pelo terceiro mês seguido',
  description:
    'Aneel decidiu em 27/11 manter a bandeira verde em dezembro: sem adicional na fatura. Veja quanto custariam as outras cores e quando sai a decisão de janeiro.',
  category: 'economia',
  coverImage: {
    src: '/images/news/aneel-mantem-bandeira-verde-em-dezembro-de-2026-terceiro-mes-seguido-sem-taxa-extra.jpg',
    alt: 'Documento com os valores das bandeiras tarifárias, calendário de dezembro com o dia 23 marcado, celular com bandeira verde e etiqueta verde.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-28',
  updatedAt: '2026-11-28',
  tags: [
    'conta-de-luz',
    'bandeira-tarifaria',
    'aneel',
    'energia',
    'custo-de-vida',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: 'Verde',
      label: 'Bandeira de dezembro',
      note: 'Sem cobrança adicional na conta de luz.',
    },
    {
      value: '3º mês',
      label: 'Seguido na cor verde',
      note: 'Outubro, novembro e dezembro de 2026.',
    },
    {
      value: '23/12',
      label: 'Decisão da bandeira de janeiro',
      note: 'Data informada na divulgação da Aneel.',
    },
  ],
  sections: [
    {
      heading: 'O que a Aneel decidiu para dezembro',
      paragraphs: [
        'A Agência Nacional de Energia Elétrica (Aneel) manteve em 27/11 a bandeira verde para dezembro de 2026. Na prática, nenhum valor extra será cobrado na conta de luz por causa do custo de geração de energia. É o terceiro mês seguido na cor verde: a bandeira voltou a esse nível em outubro, depois de cinco meses na amarela, de maio a setembro.',
        'Segundo a divulgação, o período de chuvas elevou o nível dos reservatórios e melhorou a geração das hidrelétricas. Com mais água nas usinas, há menos necessidade de acionar as termelétricas, que produzem energia mais cara e são o motivo de a fatura subir quando a bandeira muda para amarela ou vermelha.',
        'O Operador Nacional do Sistema Elétrico (ONS) projeta que os reservatórios do Sudeste e do Centro-Oeste, que respondem por cerca de 70% do armazenamento do país, terminem novembro com quase 59% da capacidade. A decisão vale para o Sistema Interligado Nacional, que atende quase todo o país. Regiões isoladas, principalmente na Amazônia, têm regras próprias.',
      ],
    },
    {
      heading: 'Quanto cada bandeira custaria na sua fatura',
      image: {
        src: '/images/news/aneel-mantem-bandeira-verde-em-dezembro-de-2026-terceiro-mes-seguido-sem-taxa-extra-detalhe.jpg',
        alt: 'Detalhe do documento com os adicionais das bandeiras verde, amarela, vermelha 1 e vermelha 2 por 100 kWh.',
        caption:
          'O adicional das bandeiras é cobrado a cada 100 kWh consumidos.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O adicional das bandeiras é calculado a cada 100 quilowatts-hora (kWh) consumidos. Na verde, não há acréscimo. Na amarela, são R$ 1,885 a cada 100 kWh. Na vermelha patamar 1, R$ 4,463, e na vermelha patamar 2, R$ 7,877.',
        'Veja o exemplo de uma casa que consome 250 kWh por mês. Em dezembro, com a bandeira verde, o adicional é de R$ 0,00. Se a bandeira fosse amarela, seriam 2,5 x R$ 1,885 = R$ 4,71 a mais. Na vermelha patamar 1, 2,5 x R$ 4,463 = R$ 11,16. E na vermelha patamar 2, 2,5 x R$ 7,877 = R$ 19,69.',
        'Esses valores são só o adicional da bandeira. A conta final também inclui a tarifa da sua distribuidora, que muda de cidade para cidade, e os impostos. A diferença exata na sua fatura depende de onde você mora.',
      ],
      table: {
        caption: 'Adicional por bandeira para um consumo de 250 kWh no mês',
        columns: ['Bandeira', 'Adicional por 100 kWh', 'Extra em 250 kWh'],
        rows: [
          ['Verde (dezembro)', 'Sem adicional', 'R$ 0,00'],
          ['Amarela', 'R$ 1,885', 'R$ 4,71'],
          ['Vermelha patamar 1', 'R$ 4,463', 'R$ 11,16'],
          ['Vermelha patamar 2', 'R$ 7,877', 'R$ 19,69'],
        ],
      },
    },
    {
      heading: 'O que esperar a partir de janeiro',
      paragraphs: [
        'A bandeira não é definida de uma vez para o ano: a Aneel decide mês a mês, com base na chuva, nos reservatórios e no custo de geração. A bandeira de janeiro de 2027 será anunciada em 23/12, segundo a divulgação.',
        'Verde em dezembro não garante verde em janeiro. No verão, o consumo costuma subir com ar-condicionado e ventilador, e uma conta com mais quilowatts-hora pesa mais se a cor mudar. Quem quiser medir o efeito de um reajuste percentual sobre a fatura pode usar a calculadora de porcentagem do portal.',
        'A Aneel também pede que o consumidor evite o desperdício, mesmo com a bandeira verde. Sem adicional, o valor da conta depende apenas do consumo, da tarifa da distribuidora e dos impostos.',
      ],
    },
  ],
  faq: [
    {
      question: 'A bandeira verde significa conta de luz mais barata?',
      answer:
        'Significa que não há cobrança adicional por bandeira. O valor total ainda depende do seu consumo, da tarifa da distribuidora e dos impostos.',
    },
    {
      question: 'Quando a Aneel anuncia a bandeira de janeiro?',
      answer:
        'Em 23/12, segundo a divulgação da decisão de dezembro. A agência decide mês a mês, conforme chuvas e reservatórios.',
    },
    {
      question: 'A bandeira vale para todo o Brasil?',
      answer:
        'Vale para os consumidores do Sistema Interligado Nacional, que atende quase todo o país. Sistemas isolados, como os de algumas regiões da Amazônia, não usam bandeiras.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil (Rádio Nacional): Aneel mantém bandeira tarifária verde para dezembro',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/economia/audio/2026-11/aneel-mantem-bandeira-tarifaria-verde-para-dezembro',
    },
    {
      label: 'Aneel: bandeiras tarifárias',
      url: 'https://www.gov.br/aneel/pt-br/assuntos/tarifas/bandeiras-tarifarias',
    },
    {
      label:
        'Agência Brasil: Aneel mantém bandeira tarifária verde em novembro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/aneel-mantem-bandeira-tarifaria-verde-em-novembro',
    },
  ],
} as const satisfies NewsDocument;
