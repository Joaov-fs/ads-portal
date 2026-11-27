import type { NewsDocument } from '../../types';

export const newsIgpmNovembro2026 = {
  kind: 'news',
  slug: 'igp-m-novembro-1-24-acumulado-6-26-aluguel-de-r-2-000-vai-a-r-2-125-20',
  title:
    'IGP-M de novembro sobe 1,24% e chega a 6,26% em 12 meses: aluguel de R$ 2.000 pode ir a R$ 2.125,20',
  description:
    'A FGV divulgou em 27/11 o IGP-M de novembro: alta de 1,24% e 6,26% em 12 meses. Veja a conta do reajuste do aluguel e o que pressionou o índice.',
  category: 'economia',
  coverImage: {
    src: '/images/news/igp-m-novembro-1-24-acumulado-6-26-aluguel-de-r-2-000-vai-a-r-2-125-20.jpg',
    alt: 'Documento com o IGP-M de novembro em 1,24%, acumulado de 6,26% e aluguel de R$ 2.000 indo a R$ 2.125,20, ao lado de uma casa e uma etiqueta de 6,26%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-27',
  updatedAt: '2026-11-27',
  tags: ['igp-m', 'aluguel', 'inflacao', 'fgv', 'reajuste'],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem'],
  highlights: [
    {
      value: '6,26%',
      label: 'IGP-M em 12 meses',
      note: 'Em outubro, o acumulado era de 5,24%.',
    },
    {
      value: '1,24%',
      label: 'IGP-M de novembro',
      note: 'Em outubro, a alta tinha sido de 1,47%.',
    },
    {
      value: 'R$ 125,20',
      label: 'Alta em aluguel de R$ 2.000',
      note: 'De R$ 2.000,00 para R$ 2.125,20 por mês.',
    },
  ],
  sections: [
    {
      heading: 'O que a FGV divulgou sobre o IGP-M de novembro',
      paragraphs: [
        'A Fundação Getulio Vargas (FGV) divulgou em 27/11/2026 que o Índice Geral de Preços do Mercado (IGP-M) subiu 1,24% em novembro, abaixo dos 1,47% de outubro. No acumulado de 12 meses, o índice foi de 5,24% para 6,26%, e no ano, de janeiro a novembro, chegou a 6,28%.',
        'O acumulado de 12 meses subiu porque a alta de 1,24% de novembro de 2026 entrou no lugar dos 0,27% de novembro de 2025. Ou seja, mesmo com o ritmo mensal menor que o de outubro, quem tem contrato de aluguel reajustado pelo IGP-M vai ver um teto de reajuste mais alto.',
        'O IGP-M é formado por três pesquisas: o índice de preços ao produtor (IPA), com peso de 60%, que subiu 1,62% em novembro; o índice ao consumidor (IPC), com 30%, que subiu 0,39%; e o índice da construção (INCC), com 10%, que subiu 0,30%.',
      ],
    },
    {
      heading: 'Quanto o aluguel pode subir com 6,26%?',
      image: {
        src: '/images/news/igp-m-novembro-1-24-acumulado-6-26-aluguel-de-r-2-000-vai-a-r-2-125-20-detalhe.jpg',
        alt: 'Detalhe da ilustração: IGP-M de novembro em 1,24%, acumulado de 12 meses em 6,26%, aluguel de R$ 2.000 indo a R$ 2.125,20 e IGP-M de outubro em 1,47%.',
        caption: 'A conta do reajuste para um aluguel de R$ 2.000.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A conta é simples: multiplique o aluguel atual por 1,0626. Num aluguel de R$ 2.000,00, o cálculo é R$ 2.000 x 6,26% = R$ 125,20 de aumento, e o aluguel passa a R$ 2.125,20. Em um ano, a diferença soma R$ 1.502,40.',
        'Com o índice de outubro (5,24%), o mesmo aluguel iria a R$ 2.104,80. A diferença é de R$ 20,40 por mês. O que decide qual índice vale para você é o mês de aniversário do contrato e a cláusula que diz de qual mês se pega o acumulado.',
        'Esse percentual é um teto previsto no contrato, e não um aumento automático. O proprietário pode aplicar menos, e as duas partes podem combinar outro valor.',
      ],
      table: {
        caption: 'Aluguel reajustado pelo IGP-M de 12 meses (6,26%)',
        columns: ['Aluguel atual', 'Aumento máximo', 'Aluguel novo'],
        rows: [
          ['R$ 1.000,00', 'R$ 62,60', 'R$ 1.062,60'],
          ['R$ 1.500,00', 'R$ 93,90', 'R$ 1.593,90'],
          ['R$ 2.000,00', 'R$ 125,20', 'R$ 2.125,20'],
          ['R$ 2.500,00', 'R$ 156,50', 'R$ 2.656,50'],
          ['R$ 3.000,00', 'R$ 187,80', 'R$ 3.187,80'],
        ],
      },
    },
    {
      heading: 'O que puxou a alta: tomate e alimentos in natura',
      paragraphs: [
        'Segundo as reportagens sobre o balanço da FGV, os alimentos in natura foram a principal pressão, com destaque para tomate e cebola. No atacado, o tomate subiu 43,73% no mês, e no consumidor, 32,79%. A alimentação no IPC passou de 1,02% em outubro para 1,39% em novembro. Economistas do FGV Ibre citam o El Niño como um dos fatores.',
        'Do outro lado, ajudaram a segurar o índice a queda da gasolina e da tarifa residencial de energia elétrica, de modo que transportes e habitação ficaram praticamente estáveis no consumidor. O resultado de 1,24% ficou acima do esperado: as projeções coletadas por agências iam de 0,48% a 1,30%.',
        'Como o IGP-M tem muito peso de preços no atacado, ele costuma oscilar mais que a inflação que o consumidor sente no mercado.',
      ],
    },
    {
      heading: 'E se o contrato usa o IPCA em vez do IGP-M?',
      paragraphs: [
        'Parte dos contratos, sobretudo os mais novos, usa o IPCA, a inflação oficial medida pelo IBGE. O IPCA-15 de novembro, divulgado em 26/11, mostrou inflação de 4,64% em 12 meses. Num aluguel de R$ 2.000, esse percentual daria R$ 92,80 de aumento, e o aluguel iria a R$ 2.092,80.',
        'É R$ 32,40 por mês a menos que no IGP-M, ou R$ 388,80 em 12 meses. O IPCA cheio de novembro ainda será divulgado pelo IBGE, e o acumulado pode mudar um pouco.',
        'O índice e o mês de referência estão escritos no contrato. Se não há cláusula de reajuste, não há aumento automático: o novo valor depende de acordo. A lei não permite reajuste em período menor que 12 meses, e a troca unilateral do índice no meio do contrato também não é permitida. A próxima divulgação do IGP-M é a primeira prévia de dezembro, em 9/12.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto vai o aluguel de R$ 2.000 com o IGP-M de 6,26%?',
      answer:
        'Vai a R$ 2.125,20, um aumento máximo de R$ 125,20 por mês, se o contrato prevê o IGP-M acumulado em 12 meses até novembro.',
    },
    {
      question: 'O proprietário é obrigado a aplicar os 6,26%?',
      answer:
        'Não. O índice é o limite previsto no contrato. O proprietário pode aplicar menos, e inquilino e proprietário podem negociar outro valor.',
    },
    {
      question: 'Qual índice vale para o meu contrato?',
      answer:
        'O que estiver escrito no contrato, com o mês de referência indicado na cláusula de reajuste. Contratos que vencem em dezembro usam a regra prevista no próprio documento.',
    },
  ],
  sources: [
    {
      label: 'FGV Ibre: IGP-M sobe 1,24% em novembro',
      url: 'https://portalibre.fgv.br/noticias/igp-m-sobe-124-em-novembro',
    },
    {
      label:
        'BM&C News: IGP-M sobe 1,24% em novembro e desacelera ante outubro',
      url: 'https://bmcnews.com.br/economia/igp-m-sobe-1-24-em-novembro-e-desacelera-ante-outubro/',
    },
    {
      label:
        'Times Brasil: IGP-M sobe 1,24% em novembro após alta de 1,47% em outubro',
      url: 'https://timesbrasil.com.br/brasil/indicadores/igp-m-sobe-124-em-novembro-apos-alta-de-147-em-outubro-revela-fgv/',
    },
    {
      label: 'Lei do Inquilinato (Lei 8.245/1991), Planalto',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8245.htm',
    },
  ],
} as const satisfies NewsDocument;
