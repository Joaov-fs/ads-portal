import type { NewsDocument } from '../../types';

export const newsIbcBr3T2026 = {
  kind: 'news',
  slug: 'ibc-br-atividade-economica-cai-0-9-no-3o-trimestre-e-setembro-recua-0-2',
  title:
    'IBC-Br: atividade econômica cai 0,9% no 3º trimestre e setembro recua 0,2%, mostra o Banco Central',
  description:
    'O IBC-Br, prévia do PIB, caiu 0,9% de julho a setembro. Em 12 meses a alta é de 1,4%. Veja o que isso diz sobre juros, emprego e preços.',
  category: 'economia',
  coverImage: {
    src: '/images/news/ibc-br-atividade-economica-cai-0-9-no-3o-trimestre-e-setembro-recua-0-2.jpg',
    alt: 'Ficha com o IBC-Br de -0,9% no 3º trimestre, gráfico em queda, etiqueta de -0,9% e calculadora.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-16',
  updatedAt: '2026-11-16',
  tags: ['ibc-br', 'pib', 'banco-central', 'selic', 'economia', 'atividade'],
  featuredCalculators: ['porcentagem', 'cdb-liquido', 'cdi'],
  highlights: [
    {
      value: '-0,9%',
      label: 'IBC-Br no 3º trimestre',
      note: 'Contra o 2º trimestre, sem efeito sazonal.',
    },
    {
      value: '-0,2%',
      label: 'Setembro contra agosto',
      note: 'Com ajuste sazonal.',
    },
    {
      value: '+1,4%',
      label: 'Alta em 12 meses',
      note: 'Até setembro de 2026.',
    },
  ],
  sections: [
    {
      heading: 'O que o Banco Central divulgou em 16/11',
      paragraphs: [
        'O Banco Central (BC) informou que o Índice de Atividade Econômica (IBC-Br) caiu 0,9% no terceiro trimestre de 2026 (julho a setembro), na comparação com o segundo trimestre (abril a junho), já com ajuste sazonal. O dado foi divulgado em 16/11, segundo a Agência Brasil.',
        'Por setor, a agropecuária recuou 2,0%, a indústria caiu 1,1% e os serviços tiveram baixa de 0,5%. Em setembro isolado, o índice diminuiu 0,2% frente a agosto: a agropecuária subiu 1,2%, enquanto a indústria teve queda de 0,4% e os serviços, de 0,1%.',
        'Na comparação anual, o terceiro trimestre ficou 0,7% acima do mesmo período de 2025, sem ajuste sazonal. Setembro ficou estável frente a setembro de 2025, e o acumulado em 12 meses é de alta de 1,4%.',
      ],
      table: {
        caption: 'IBC-Br divulgado em 16/11/2026',
        columns: ['Comparação', 'Variação'],
        rows: [
          ['3º trimestre contra o 2º trimestre', '-0,9%'],
          ['Agropecuária no trimestre', '-2,0%'],
          ['Indústria no trimestre', '-1,1%'],
          ['Serviços no trimestre', '-0,5%'],
          ['Setembro contra agosto', '-0,2%'],
          ['3º trimestre contra o de 2025', '+0,7%'],
          ['Acumulado em 12 meses', '+1,4%'],
        ],
      },
    },
    {
      heading: 'O que é o IBC-Br e por que ele não é o PIB',
      image: {
        src: '/images/news/ibc-br-atividade-economica-cai-0-9-no-3o-trimestre-e-setembro-recua-0-2-detalhe.jpg',
        alt: 'Detalhe da ficha com o IBC-Br de -0,9% no trimestre, -0,2% em setembro e +1,4% em 12 meses.',
        caption: 'Principais números do IBC-Br divulgados em 16/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O IBC-Br é um indicador mensal do Banco Central que acompanha o ritmo da atividade econômica. Ele costuma ser usado como uma prévia do Produto Interno Bruto (PIB), mas não é o PIB: o resultado oficial é calculado pelo IBGE e pode ser diferente do que o IBC-Br sugere.',
        'Para comparar, o PIB do segundo trimestre de 2026 cresceu 0,5% sobre o primeiro trimestre e 2,0% sobre o segundo trimestre de 2025, e o PIB de 2025 avançou 2,3%, segundo os números citados pela Agência Brasil. A queda do IBC-Br no terceiro trimestre indica uma desaceleração depois desse período.',
      ],
    },
    {
      heading: 'O que isso muda para o seu bolso',
      paragraphs: [
        'A atividade mais fraca é um dos fatores que o Banco Central considera ao decidir os juros. A Selic está em 13,75% ao ano, segundo a Agência Brasil. Uma economia que desacelera pode abrir espaço para cortes no futuro, mas a decisão depende também da inflação e das expectativas, e nada está garantido.',
        'Um exemplo simples com a Selic atual: R$ 10.000 aplicados por um ano a uma taxa de 13,75% renderiam cerca de R$ 1.375 antes de impostos e taxas. Se a Selic cair, o rendimento de aplicações atreladas a ela cai junto; o custo de financiamentos e do cartão tende a ceder mais devagar. Para simular com a sua taxa, use as calculadoras de CDB líquido e de CDI.',
        'Para o consumidor, a leitura prática é de prudência. Um índice de atividade em queda não significa perda de renda imediata, mas empresas costumam reagir com menos contratações e estoques menores quando a demanda esfria. O exemplo é hipotético: uma loja que vendia R$ 100.000 por mês e acompanhasse a queda de 0,9% passaria a vender R$ 99.100, ou R$ 900 a menos.',
      ],
    },
  ],
  faq: [
    {
      question: 'O IBC-Br é o mesmo que o PIB?',
      answer:
        'Não. O IBC-Br é um indicador do Banco Central que serve de prévia da atividade. O PIB oficial é calculado pelo IBGE e pode divergir.',
    },
    {
      question: 'A economia entrou em recessão?',
      answer:
        'Os dados divulgados não permitem afirmar isso. O IBC-Br caiu 0,9% no 3º trimestre, mas segue 0,7% acima do mesmo período de 2025 e acumula alta de 1,4% em 12 meses.',
    },
    {
      question: 'Isso muda a Selic?',
      answer:
        'A Selic está em 13,75% ao ano. A atividade é um dos fatores analisados pelo Banco Central, mas a decisão depende também da inflação e das expectativas, e a próxima reunião do Copom é que define o rumo.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Atividade econômica tem queda de 0,9% no terceiro trimestre',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/atividade-economica-tem-queda-de-09-no-terceiro-trimestre',
    },
    {
      label:
        'Banco Central: Índice de Atividade Econômica do Banco Central (IBC-Br)',
      url: 'https://dadosabertos.bcb.gov.br/dataset/24364-indice-de-atividade-economica-do-banco-central-ibc-br---com-ajuste-sazonal',
    },
  ],
} as const satisfies NewsDocument;
