import type { NewsDocument } from '../../types';

export const newsIpcaOutubro2026Sobe014Inflacao463 = {
  kind: 'news',
  slug: 'ipca-de-outubro-sobe-0-14-e-inflacao-em-12-meses-vai-a-4-63-conta-de-luz-cai',
  title: 'IPCA de outubro sobe 0,14% e inflação em 12 meses vai a 4,63%',
  description:
    'O IBGE divulgou o IPCA de outubro: 0,14% no mês, com a conta de luz em queda. Veja o que subiu, o que caiu e como o acumulado de 4,63% afeta aluguel e salário.',
  category: 'economia',
  coverImage: {
    src: '/images/news/ipca-de-outubro-sobe-0-14-e-inflacao-em-12-meses-vai-a-4-63-conta-de-luz-cai.jpg',
    alt: 'Relatório do IPCA de outubro com 0,14% no mês, 0,82% em setembro e 4,63% em 12 meses, gráfico em queda, etiqueta de 4,63% e carimbo de queda da luz.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-12',
  updatedAt: '2026-11-12',
  tags: [
    'ipca',
    'inflacao',
    'ibge',
    'aluguel',
    'energia-eletrica',
    'reajuste',
    'salario',
  ],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem'],
  highlights: [
    {
      value: '0,14%',
      label: 'IPCA de outubro',
      note: 'Em setembro, o índice tinha ficado em 0,82%.',
    },
    {
      value: '4,63%',
      label: 'IPCA em 12 meses',
      note: 'Acima do teto da meta, de 4,5%.',
    },
    {
      value: '-1,92%',
      label: 'Energia elétrica no mês',
      note: 'Bandeira passou de amarela para verde.',
    },
    {
      value: '19,57%',
      label: 'Tomate no mês',
      note: 'Maior alta entre os alimentos citados pelo IBGE.',
    },
  ],
  sections: [
    {
      heading: 'O que o IBGE divulgou em 12 de novembro',
      paragraphs: [
        'O IBGE informou em 12 de novembro de 2026 que o IPCA, índice oficial de inflação do país, subiu 0,14% em outubro. Em setembro, a alta tinha sido de 0,82%, e a expectativa do boletim Focus para outubro era de 0,27%. Ou seja, o resultado veio abaixo do que o mercado projetava.',
        'Nos 12 meses encerrados em outubro, a inflação ficou em 4,63%. Isso está acima do teto da meta, de 4,5%, e um pouco acima dos 4,58% registrados nos 12 meses até setembro. A meta de inflação é de 3%, com tolerância de 1,5 ponto para cima ou para baixo, e é avaliada ao fim de cada ano.',
        'Segundo o IBGE, 61% dos 377 itens pesquisados tiveram alta em outubro, contra 55% em setembro. Os serviços acumulam alta de 5,66% em 12 meses, e os preços administrados, de 3,83%.',
      ],
    },
    {
      heading:
        'O que puxou o índice para baixo: luz, passagem aérea e gasolina',
      image: {
        src: '/images/news/ipca-de-outubro-sobe-0-14-e-inflacao-em-12-meses-vai-a-4-63-conta-de-luz-cai-detalhe.jpg',
        alt: 'Detalhe da ilustração: relatório do IPCA de outubro com 0,14% no mês, 0,82% em setembro, 4,63% em 12 meses e energia elétrica em -1,92%.',
        caption: 'O IPCA subiu 0,14% em outubro e acumula 4,63% em 12 meses.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O grupo Transportes teve a maior queda do mês, de 0,59%, e tirou 0,12 ponto percentual do índice. As passagens aéreas caíram 9,21%, e a gasolina, que tem o maior peso na cesta, recuou 0,56%. Gás veicular (-0,46%) também ficou mais barato, enquanto o diesel (1,66%) e o etanol (1,02%) subiram.',
        'Habitação caiu 0,51% e retirou 0,08 ponto percentual do índice. A energia elétrica residencial recuou 1,92%, o que corresponde a 0,08 ponto percentual: foi o subitem que mais pesou para baixo. Em outubro, a bandeira tarifária passou de amarela para verde, e deixou de existir a cobrança adicional de R$ 1,885 a cada 100 kWh consumidos. Em setembro, a energia tinha subido 7,98%, com o fim do Bônus de Itaipu.',
        'Na outra ponta, Alimentação e bebidas foi o grupo de maior alta, de 1,04%, com impacto de 0,22 ponto percentual. A alimentação no domicílio subiu 1,31%, com alta no tomate (19,57%), na cebola (11,29%), no arroz (4,81%) e nas carnes (2,27%). Cenoura (-9,72%), batata-inglesa (-2,95%) e café moído (-1,03%) ficaram mais baratos.',
      ],
      table: {
        caption: 'IPCA de outubro de 2026 por grupo (variação no mês)',
        columns: ['Grupo', 'Variação', 'Impacto no índice'],
        rows: [
          ['Alimentação e bebidas', '1,04%', '0,22 p.p.'],
          ['Comunicação', '0,71%', '0,03 p.p.'],
          ['Artigos de residência', '0,44%', '0,02 p.p.'],
          ['Vestuário', '0,38%', '0,02 p.p.'],
          ['Despesas pessoais', '0,36%', '0,04 p.p.'],
          ['Saúde e cuidados pessoais', '0,09%', '0,01 p.p.'],
          ['Educação', '0,07%', '0,00 p.p.'],
          ['Habitação', '-0,51%', '-0,08 p.p.'],
          ['Transportes', '-0,59%', '-0,12 p.p.'],
        ],
      },
    },
    {
      heading:
        'Exemplo: quanto fica o aluguel de R$ 2.000 pelo IPCA de 12 meses',
      paragraphs: [
        'Quem tem contrato reajustado pelo IPCA usa o acumulado de 12 meses até o mês anterior ao aniversário do contrato. Para um aniversário em novembro, a referência é o IPCA de outubro, de 4,63%.',
        'A conta é direta: R$ 2.000 x 4,63% = R$ 92,60 de aumento. O novo aluguel fica em R$ 2.092,60. Com o acumulado de setembro, de 4,58%, o aumento seria de R$ 91,60. A diferença é de R$ 1,00 por mês.',
        'Antes de calcular, confira o que diz o contrato: alguns usam o IGP-M, e outros combinam um índice com um limite. Para fazer a conta com o seu valor, use a calculadora de reajuste de aluguel do portal.',
      ],
    },
    {
      heading:
        'Exemplo: o que 4,63% significa para o salário e para a conta de luz',
      paragraphs: [
        'A inflação de 12 meses é uma régua do poder de compra. Quem ganha R$ 3.000 precisaria de um reajuste de 4,63%, ou R$ 138,90, para chegar a R$ 3.138,90 e manter o mesmo poder de compra de 12 meses atrás. É uma referência, não um direito automático: o reajuste depende de convenção coletiva ou de acordo com a empresa.',
        'Na conta de luz, a queda média do mês foi de 1,92%. Em uma fatura de R$ 200, a mesma variação leva o valor a R$ 196,16, ou R$ 3,84 a menos. Já a bandeira verde tira o adicional de R$ 1,885 por 100 kWh: em um consumo de 300 kWh, são R$ 5,66 a menos que na bandeira amarela. O efeito real varia com a distribuidora e o consumo.',
        'Para calcular percentuais com os seus números, a calculadora de porcentagem do portal faz a conta em segundos.',
      ],
    },
    {
      heading: 'O que muda daqui para a frente',
      paragraphs: [
        'O IPCA de 12 meses ainda está acima do teto da meta. Na reunião de novembro, o Copom manteve a Selic em 13,75%, e a próxima reunião está marcada para 8 e 9 de dezembro. O resultado de outubro, abaixo do esperado, é um dado a favor da inflação mais baixa, mas o próprio IBGE mostra que serviços e alimentos seguem com pressão.',
        'O acumulado de 12 meses é o número usado para corrigir contratos e salários, e muda a cada divulgação. O IPCA de novembro será divulgado pelo IBGE em dezembro.',
        'Para famílias com rendimento de 1 a 5 salários mínimos, o índice de referência é o INPC, também calculado pelo IBGE.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual foi o IPCA de outubro de 2026?',
      answer:
        'O IBGE divulgou alta de 0,14% em outubro. O acumulado em 12 meses é de 4,63%, acima do teto da meta, de 4,5%.',
    },
    {
      question: 'Por que a inflação desacelerou em outubro?',
      answer:
        'A queda da energia elétrica (-1,92%), das passagens aéreas (-9,21%) e da gasolina (-0,56%) compensou a alta dos alimentos, que subiram 1,04%.',
    },
    {
      question: 'Qual índice uso para reajustar meu aluguel?',
      answer:
        'O que estiver escrito no contrato. Quando o índice é o IPCA, usa-se o acumulado em 12 meses até o mês anterior ao aniversário do contrato.',
    },
  ],
  sources: [
    {
      label: 'Agência Brasil: inflação perde força e fica em 0,14% em outubro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/inflacao-perde-forca-e-fica-em-014-em-outubro-conta-de-luz-cai',
    },
    {
      label: 'Agência Gov: inflação desacelera e fica em 0,14% em outubro',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/inflacao-desacelera-e-fica-em-0-14-em-outubro',
    },
    {
      label: 'IBGE: inflação desacelera e fica em 0,14% em outubro',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/48569-inflacao-desacelera-e-fica-em-0-14-em-outubro',
    },
    {
      label: 'Banco Central do Brasil: meta de inflação',
      url: 'https://www.bcb.gov.br/controleinflacao',
    },
  ],
} as const satisfies NewsDocument;
