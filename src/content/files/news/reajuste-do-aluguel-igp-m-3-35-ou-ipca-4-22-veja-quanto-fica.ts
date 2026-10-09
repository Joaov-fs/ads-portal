import type { NewsDocument } from '../../types';

export const newsReajusteDoAluguelIgpM335OuIpca422VejaQuantoFica = {
  kind: 'news',
  slug: 'reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica',
  title:
    'Reajuste do aluguel: IGP-M acumula 3,35% em 12 meses e IPCA, 4,22%; veja quanto fica',
  description:
    'Confira os dois índices mais usados em contratos, com exemplos de aluguéis de R$ 1.500 a R$ 5.000 e como saber qual vale para o seu.',
  category: 'financas',
  coverImage: {
    src: '/images/news/reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica.jpg',
    alt: 'Contrato de locação com IGP-M e IPCA, casa em miniatura e chaves.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['aluguel', 'reajuste', 'inflacao', 'financas', 'igpm'],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem'],
  highlights: [
    {
      value: '3,35%',
      label: 'IGP-M em 12 meses',
      note: 'Até setembro de 2026, a partir das variações mensais da FGV.',
    },
    {
      value: '4,22%',
      label: 'IPCA em 12 meses',
      note: 'Até agosto de 2026, do IBGE.',
    },
    {
      value: 'R$ 67,00',
      label: 'Aumento de um aluguel de R$ 2.000',
      note: 'Pelo IGP-M.',
    },
    {
      value: 'R$ 84,40',
      label: 'Mesmo aluguel pelo IPCA',
      note: 'Diferença de R$ 17,40 por mês.',
    },
  ],
  sections: [
    {
      heading: 'Dois índices, dois resultados',
      paragraphs: [
        'O IGP-M, calculado pela FGV, acumula 3,35% nos 12 meses até setembro de 2026 e foi muito volátil no ano: subiu 2,73% em abril, caiu 1,16% em julho e voltou a subir 1,57% em setembro. O IPCA, índice oficial de inflação do IBGE, acumulou 4,22% em 12 meses até agosto.',
        'A diferença importa porque cada contrato escolhe um índice. Em 12 meses, o IPCA está acima do IGP-M, o contrário do que se viu nos anos de dólar alto.',
      ],
    },
    {
      heading: 'Quanto fica o seu aluguel',
      image: {
        src: '/images/news/reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica-detalhe.jpg',
        alt: 'Detalhe da ilustração: contrato de locação com IGP-M e IPCA, casa em miniatura e chaves.',
        caption: 'O índice do contrato define o reajuste do aluguel.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Aplicando cada índice sobre o valor atual, o aluguel muda assim.',
      ],
      table: {
        caption: 'Aluguel reajustado pelo IGP-M (3,35%) e pelo IPCA (4,22%)',
        columns: ['Aluguel atual', 'Pelo IGP-M', 'Pelo IPCA'],
        rows: [
          ['R$ 1.500,00', 'R$ 1.550,25 (+R$ 50,25)', 'R$ 1.563,30 (+R$ 63,30)'],
          ['R$ 2.000,00', 'R$ 2.067,00 (+R$ 67,00)', 'R$ 2.084,40 (+R$ 84,40)'],
          [
            'R$ 3.000,00',
            'R$ 3.100,50 (+R$ 100,50)',
            'R$ 3.126,60 (+R$ 126,60)',
          ],
          [
            'R$ 5.000,00',
            'R$ 5.167,50 (+R$ 167,50)',
            'R$ 5.211,00 (+R$ 211,00)',
          ],
        ],
      },
    },
    {
      heading: 'Qual índice vale para o seu contrato',
      paragraphs: [
        'Vale o que está escrito no contrato. O reajuste só pode acontecer a cada 12 meses, contados da assinatura ou do último reajuste, e o período do índice deve ser o dos 12 meses anteriores ao aniversário do contrato. Os valores acima são de referência e variam conforme o mês do seu reajuste.',
        'Se o contrato não tem índice definido, ou se o índice escolhido ficou muito acima da inflação, inquilino e proprietário podem negociar. Trocar o IGP-M pelo IPCA é um acordo comum quando as partes concordam.',
      ],
    },
  ],
  faq: [
    {
      question: 'O proprietário pode reajustar antes de 12 meses?',
      answer:
        'Não. A Lei do Inquilinato proíbe reajuste com periodicidade menor que 12 meses.',
    },
    {
      question: 'O IPCA de setembro já saiu?',
      answer:
        'Ainda não. O IBGE divulga o IPCA de cada mês no mês seguinte, e o cálculo do seu contrato deve usar o índice do mês de aniversário.',
    },
    {
      question: 'Posso pedir redução do aluguel?',
      answer:
        'Só por acordo entre as partes ou por revisão judicial. Não existe redução automática.',
    },
  ],
  sources: [
    {
      label: 'FGV IBRE: Índice Geral de Preços do Mercado (IGP-M)',
    },
    {
      label: 'IBGE: Índice Nacional de Preços ao Consumidor Amplo (IPCA)',
    },
    {
      label:
        'Banco Central do Brasil: Sistema Gerenciador de Séries Temporais, séries 189 e 13522',
    },
    {
      label: 'Lei 8.245/1991: Lei do Inquilinato',
    },
  ],
} as const satisfies NewsDocument;
