import type { NewsDocument } from '../../types';

export const newsAneelBandeiraVerdeNovembro2026 = {
  kind: 'news',
  slug: 'aneel-mantem-bandeira-verde-em-novembro-de-2026-conta-de-luz-sem-taxa-extra',
  title:
    'Aneel mantém bandeira verde em novembro de 2026 e conta de luz segue sem taxa extra',
  description:
    'Aneel decidiu em 30/10 manter a bandeira verde em novembro: sem adicional na conta. Veja quanto custariam a amarela e a vermelha e o que muda na sua fatura.',
  category: 'economia',
  coverImage: {
    src: '/images/news/aneel-mantem-bandeira-verde-em-novembro-de-2026-conta-de-luz-sem-taxa-extra.jpg',
    alt: 'Documento com os valores das bandeiras tarifárias, conta de luz com R$ 0,00 extra, etiqueta verde e celular mostrando bandeira verde.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-10-30',
  updatedAt: '2026-10-30',
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
      label: 'Bandeira de novembro',
      note: 'Sem cobrança adicional na conta de luz.',
    },
    {
      value: 'R$ 1,885',
      label: 'Amarela, por 100 kWh',
      note: 'Valor que seria cobrado se a bandeira fosse amarela.',
    },
    {
      value: 'R$ 4,463',
      label: 'Vermelha 1, por 100 kWh',
      note: 'Patamar 2 da vermelha custa R$ 7,877.',
    },
  ],
  sections: [
    {
      heading: 'O que a Aneel decidiu para novembro',
      paragraphs: [
        'A Agência Nacional de Energia Elétrica (Aneel) anunciou em 30/10 que a bandeira tarifária de novembro de 2026 será verde. Isso significa que nenhum valor extra será cobrado na conta de luz por causa das condições de geração de energia. É o segundo mês seguido na cor verde: a bandeira voltou a esse nível em outubro, depois de cinco meses na amarela.',
        'Segundo a agência, o aumento das chuvas nas regiões das principais hidrelétricas equilibrou os reservatórios. Com mais água, não é preciso ligar as usinas termelétricas, que custam mais para gerar energia e são o motivo de a conta subir quando a bandeira muda para amarela ou vermelha.',
        'A decisão vale para os consumidores atendidos pelo Sistema Interligado Nacional, que cobre quase todo o país. Ficam de fora algumas regiões isoladas, principalmente na Amazônia, que têm regras próprias.',
      ],
    },
    {
      heading: 'Quanto cada bandeira custaria na sua conta',
      image: {
        src: '/images/news/aneel-mantem-bandeira-verde-em-novembro-de-2026-conta-de-luz-sem-taxa-extra-detalhe.jpg',
        alt: 'Detalhe da ilustração: valores adicionais das bandeiras verde, amarela, vermelha 1 e vermelha 2 por 100 kWh.',
        caption:
          'O adicional das bandeiras é cobrado a cada 100 kWh consumidos.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O adicional das bandeiras é calculado a cada 100 quilowatts-hora (kWh) consumidos. Na verde, não há acréscimo. Na amarela, são R$ 1,885 a cada 100 kWh. Na vermelha patamar 1, R$ 4,463, e na vermelha patamar 2, R$ 7,877.',
        'Veja um exemplo com uma casa que consome 400 kWh por mês. Em novembro, com a bandeira verde, o adicional é de R$ 0,00. Se a bandeira fosse amarela, seriam 4 x R$ 1,885 = R$ 7,54 a mais na fatura. Na vermelha patamar 1, 4 x R$ 4,463 = R$ 17,85. E na vermelha patamar 2, 4 x R$ 7,877 = R$ 31,51.',
        'Esses valores são só o adicional da bandeira. A conta final também inclui a tarifa da sua distribuidora, que varia de cidade para cidade, e os impostos. Por isso, a diferença exata na sua fatura depende de onde você mora.',
      ],
      table: {
        caption: 'Adicional por bandeira para um consumo de 400 kWh no mês',
        columns: ['Bandeira', 'Adicional por 100 kWh', 'Extra em 400 kWh'],
        rows: [
          ['Verde (novembro)', 'Sem adicional', 'R$ 0,00'],
          ['Amarela', 'R$ 1,885', 'R$ 7,54'],
          ['Vermelha patamar 1', 'R$ 4,463', 'R$ 17,85'],
          ['Vermelha patamar 2', 'R$ 7,877', 'R$ 31,51'],
        ],
      },
    },
    {
      heading:
        'Por que a bandeira importa para a inflação e para o seu orçamento',
      paragraphs: [
        'A energia elétrica residencial pesa no IPCA, a inflação oficial do país. No IPCA-15 de outubro, por exemplo, o IBGE apontou que a energia recuou 0,89% porque a bandeira passou de amarela para verde. Quando a bandeira se mantém verde, a conta de luz deixa de pressionar o índice por esse lado.',
        'Para quem faz o orçamento da casa, a conta é simples: com a bandeira verde, o gasto com luz depende só do consumo e da tarifa da distribuidora. Quem quiser conferir o efeito de um percentual de reajuste sobre a fatura pode usar a calculadora de porcentagem do portal.',
        'A bandeira não é definida de uma vez para o ano. A Aneel decide mês a mês, com base nas condições de chuva, nos reservatórios e no custo de geração. Verde em novembro não garante verde em dezembro, e a nova decisão sai no fim de novembro. Em período de calor, o consumo costuma subir por causa de ar-condicionado e ventilador, e vale acompanhar o consumo no medidor.',
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
      question: 'Quem decide a bandeira tarifária?',
      answer:
        'A Aneel, todo mês, com base nas condições de geração de energia, como chuvas e nível dos reservatórios.',
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
        'Agência Brasil: Aneel mantém bandeira tarifária verde em novembro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/aneel-mantem-bandeira-tarifaria-verde-em-novembro',
    },
    {
      label: 'Aneel: bandeiras tarifárias',
      url: 'https://www.gov.br/aneel/pt-br/assuntos/tarifas/bandeiras-tarifarias',
    },
    {
      label:
        'Agência Brasil: Após cinco meses, conta de luz voltará à bandeira verde em outubro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-09/apos-cinco-meses-conta-de-luz-voltara-bandeira-verde-em-outubro',
    },
  ],
} as const satisfies NewsDocument;
