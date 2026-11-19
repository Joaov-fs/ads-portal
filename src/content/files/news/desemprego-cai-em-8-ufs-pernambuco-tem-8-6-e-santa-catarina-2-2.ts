import type { NewsDocument } from '../../types';

export const newsPnadUfs3Trimestre2026 = {
  kind: 'news',
  slug: 'desemprego-cai-em-8-ufs-pernambuco-tem-8-6-e-santa-catarina-2-2',
  title:
    'Desemprego cai em 8 UFs no 3º trimestre: Pernambuco tem a maior taxa, 8,6%, e Santa Catarina a menor, 2,2%',
  description:
    'IBGE: desocupação cai em 8 das 27 UFs no 3º trimestre de 2026, só o Espírito Santo sobe e o país fica em 5,2%. Veja as maiores e menores taxas.',
  category: 'economia',
  coverImage: {
    src: '/images/news/desemprego-cai-em-8-ufs-pernambuco-tem-8-6-e-santa-catarina-2-2.jpg',
    alt: 'Documento com as taxas de desemprego de Pernambuco, Bahia, Brasil e Santa Catarina, gráfico de barras, celular com 8 UFs com queda e etiqueta de 5,2%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-19',
  updatedAt: '2026-11-19',
  tags: ['desemprego', 'pnad', 'ibge', 'estados', 'emprego', 'economia'],
  featuredCalculators: ['salario-liquido', 'seguro-desemprego'],
  highlights: [
    {
      value: '8 de 27',
      label: 'UFs com queda do desemprego',
      note: 'Sete estados e o Distrito Federal, frente ao 2º trimestre.',
    },
    {
      value: '8,6%',
      label: 'Maior taxa: Pernambuco',
      note: 'Santa Catarina tem a menor, 2,2%.',
    },
    {
      value: '-2,0 p.p.',
      label: 'Maior queda: Bahia',
      note: 'A taxa baiana foi a 7,1% no 3º trimestre.',
    },
    {
      value: '5,2%',
      label: 'Taxa do Brasil',
      note: 'Era 5,4% no 2º trimestre e 5,6% um ano antes.',
    },
  ],
  sections: [
    {
      heading: 'Quais estados tiveram queda do desemprego',
      paragraphs: [
        'O IBGE divulgou em 18/11 o recorte por unidade da Federação da PNAD Contínua do trimestre encerrado em setembro de 2026. A taxa de desocupação caiu em 8 das 27 UFs na comparação com o 2º trimestre: sete estados e o Distrito Federal. Em 18 UFs a taxa ficou estável, e em uma subiu.',
        'A maior queda foi na Bahia, que perdeu 2,0 pontos percentuais e chegou a 7,1%. Em seguida vêm o Amapá (menos 1,9 ponto, para 7,9%), o Piauí (menos 1,5), Alagoas (menos 1,2), o Rio Grande do Norte (menos 1,1), o Distrito Federal (menos 1,0), o Ceará e a Paraíba (menos 0,9 cada).',
        'A única UF em que o desemprego subiu foi o Espírito Santo, com alta de 0,7 ponto, para 3,0%. Mesmo assim, a taxa capixaba segue entre as menores do país.',
      ],
      table: {
        caption: 'UFs com queda da taxa de desocupação no 3º trimestre de 2026',
        columns: ['UF', 'Variação no trimestre', 'Taxa no 3º tri'],
        rows: [
          ['Bahia', '-2,0 p.p.', '7,1%'],
          ['Amapá', '-1,9 p.p.', '7,9%'],
          ['Piauí', '-1,5 p.p.', 'Não detalhada'],
          ['Alagoas', '-1,2 p.p.', 'Não detalhada'],
          ['Rio Grande do Norte', '-1,1 p.p.', 'Não detalhada'],
          ['Distrito Federal', '-1,0 p.p.', 'Não detalhada'],
          ['Ceará', '-0,9 p.p.', 'Não detalhada'],
          ['Paraíba', '-0,9 p.p.', 'Não detalhada'],
        ],
      },
    },
    {
      heading: 'Onde o desemprego é maior e onde é menor',
      image: {
        src: '/images/news/desemprego-cai-em-8-ufs-pernambuco-tem-8-6-e-santa-catarina-2-2-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com as taxas de Pernambuco (8,6%), Bahia (7,1%), Brasil (5,2%) e Santa Catarina (2,2%).',
        caption:
          'A distância entre a maior e a menor taxa do país segue grande, mesmo com a queda em oito UFs.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Pernambuco registrou a maior taxa do país, 8,6%, seguido pelo Amapá (7,9%), por Sergipe (7,4%) e pela Bahia (7,1%). No caso pernambucano, a taxa passou de 8,3% para 8,6%, variação que o IBGE não considera estatisticamente significativa, ou seja, está dentro da margem de erro da pesquisa.',
        'No outro extremo, Santa Catarina tem a menor taxa, 2,2%, com Mato Grosso do Sul (2,3%), Mato Grosso (2,6%), Paraná e Espírito Santo (3,0% cada) logo atrás. A média nacional ficou em 5,2%, abaixo dos 5,4% do 2º trimestre e dos 5,6% do 3º trimestre de 2025.',
        'Para visualizar o tamanho da diferença: em um grupo de 1.000 pessoas que querem trabalhar, cerca de 86 estariam desocupadas em Pernambuco, 52 na média do país e 22 em Santa Catarina. A conta é aproximada e serve só para comparar, já que a taxa mede quem procurou emprego e não encontrou.',
      ],
    },
    {
      heading: 'O que muda para quem procura emprego',
      paragraphs: [
        'A taxa do seu estado ajuda a medir a concorrência por vagas, mas não diz nada sobre a sua profissão ou a sua cidade. Estados com taxa baixa tendem a ter mais vagas por candidato, e os de taxa alta, o contrário. Em todos os casos, vale conferir o salário e as condições da oferta antes de aceitar.',
        'O recorte nacional também mostra diferenças entre grupos. A taxa foi de 6,3% entre as mulheres e 4,3% entre os homens. Entre pretos foi de 6,2%, entre pardos, 5,8%, e entre brancos, 4,2%. A informalidade ficou em 37,5% da população ocupada.',
        'Quem perde o emprego com carteira assinada pode ter direito ao seguro-desemprego, desde que cumpra os requisitos de tempo de trabalho e de prazo para pedir. Para estimar o valor e o número de parcelas, use a calculadora de seguro-desemprego do portal. Para saber quanto sobra de um salário depois dos descontos, use a de salário líquido.',
        'A próxima divulgação da PNAD Contínua, com o trimestre encerrado em outubro, deve sair no fim de novembro. Vale acompanhar se a queda se mantém, já que o fim do ano costuma trazer contratações temporárias no comércio.',
      ],
    },
  ],
  faq: [
    {
      question: 'O desemprego caiu em todos os estados?',
      answer:
        'Não. Segundo o IBGE, a taxa caiu em 8 das 27 UFs, subiu apenas no Espírito Santo e ficou estável nas outras 18.',
    },
    {
      question:
        'Qual estado tem a maior e qual tem a menor taxa de desemprego?',
      answer:
        'No 3º trimestre de 2026, Pernambuco tem a maior taxa, 8,6%, e Santa Catarina a menor, 2,2%.',
    },
    {
      question: 'O que significa p.p. na tabela?',
      answer:
        'É ponto percentual, a diferença entre duas taxas. Se a taxa foi de 9,1% para 7,1%, a queda é de 2,0 pontos percentuais.',
    },
  ],
  sources: [
    {
      label:
        'IBGE: PNAD Contínua Trimestral, desocupação cai em 8 das 27 UFs no 3º trimestre de 2026',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/48657-pnad-continua-trimestral-desocupacao-cai-em-8-das-27-ufs-no-3-trimestre-de-2026',
    },
    {
      label:
        'Agência Brasil: Desemprego cai em oito unidades da Federação, aponta IBGE',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/economia/audio/2026-11/desemprego-cai-em-oito-unidades-da-federacao-aponta-ibge',
    },
    {
      label: 'IBGE: o que é o desemprego (PNAD Contínua)',
      url: 'https://www.ibge.gov.br/explica/desemprego.php',
    },
  ],
} as const satisfies NewsDocument;
