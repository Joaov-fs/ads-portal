import type { NewsDocument } from '../../types';

export const newsPnadDesemprego3Trimestre2026 = {
  kind: 'news',
  slug: 'pnad-desemprego-3o-trimestre-5-2-menor-desde-2012-103-6-milhoes-ocupados',
  title:
    'Desemprego cai a 5,2% no 3º trimestre, o menor desde 2012, e 103,6 milhões estão ocupados',
  description:
    'IBGE: desocupação de 5,2% no 3º trimestre de 2026, renda média de R$ 3.790 e recorde de 103,6 milhões de ocupados. Veja o que os números mudam para o trabalhador.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/pnad-desemprego-3o-trimestre-5-2-menor-desde-2012-103-6-milhoes-ocupados.jpg',
    alt: 'Documento com a taxa de desemprego de 5,2%, carteira de trabalho, etiqueta de 5,2% e celular mostrando 103,6 milhões de ocupados.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-30',
  updatedAt: '2026-10-30',
  tags: ['desemprego', 'pnad', 'ibge', 'emprego', 'renda', 'trabalho'],
  featuredCalculators: ['salario-liquido', 'seguro-desemprego'],
  highlights: [
    {
      value: '5,2%',
      label: 'Taxa de desemprego no 3º tri',
      note: 'Era 5,4% no 2º trimestre e 5,6% um ano antes.',
    },
    {
      value: '103,6 mi',
      label: 'Pessoas ocupadas',
      note: 'Maior número da série histórica da pesquisa.',
    },
    {
      value: 'R$ 3.790',
      label: 'Renda média habitual',
      note: 'Alta de 3,6% em um ano, descontada a inflação.',
    },
    {
      value: '37,5%',
      label: 'Taxa de informalidade',
      note: 'São 38,8 milhões de trabalhadores informais.',
    },
  ],
  sections: [
    {
      heading: 'Quanto o desemprego caiu e o que bateu recorde',
      paragraphs: [
        'O IBGE divulgou nesta sexta-feira (30/10) a PNAD Contínua do trimestre encerrado em setembro de 2026. A taxa de desocupação ficou em 5,2%, abaixo dos 5,4% do trimestre anterior (abril a junho) e dos 5,6% do mesmo período de 2025. É a menor taxa já registrada para um terceiro trimestre desde 2012, início da série.',
        'Em números absolutos, 5,6 milhões de pessoas procuravam trabalho e não encontravam. São 234 mil a menos do que no trimestre anterior (queda de 4%) e 417 mil a menos do que um ano antes (queda de 6,9%).',
        'Do outro lado, a população ocupada chegou a 103,6 milhões, o maior contingente da série. O IBGE contou 581 mil ocupados a mais do que no trimestre anterior e 1,2 milhão a mais do que em 2025. O nível de ocupação, que mede a parcela das pessoas em idade de trabalhar que têm ocupação, chegou a 59%, também recorde.',
      ],
    },
    {
      heading: 'Renda média de R$ 3.790 e massa de R$ 387,5 bilhões',
      image: {
        src: '/images/news/pnad-desemprego-3o-trimestre-5-2-menor-desde-2012-103-6-milhoes-ocupados-detalhe.jpg',
        alt: 'Detalhe da ilustração: taxa de 5,2% no 3º trimestre de 2026, 5,4% no 2º trimestre, 5,6% um ano antes e renda média de R$ 3.790.',
        caption:
          'A taxa de desemprego em três momentos e a renda média do trabalhador.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O rendimento real habitual de todos os trabalhos ficou em R$ 3.790. Ficou estável frente ao trimestre anterior e subiu 3,6% em um ano, o que dá R$ 131 a mais por mês. Isso quer dizer que quem ganhava, em média, R$ 3.659 um ano atrás passou a ganhar R$ 3.790 já com a inflação descontada.',
        'A massa de rendimento, que é a soma de tudo o que os trabalhadores ganham, chegou a R$ 387,5 bilhões, a maior da série. Subiu R$ 5,6 bilhões (1,5%) no trimestre e R$ 17,5 bilhões (4,7%) em um ano. Mais gente trabalhando e ganhando mais costuma aumentar o consumo e a arrecadação.',
        'É importante lembrar que a renda média é uma média. Ela mistura salários altos e baixos, de empregados, autônomos e empregadores, e não representa o que cada trabalhador recebe. Para saber o líquido do seu próprio salário depois dos descontos, use a calculadora de salário líquido do portal.',
      ],
      table: {
        caption: 'Principais números da PNAD Contínua, 3º trimestre de 2026',
        columns: ['Indicador', '3º tri 2026', 'Comparação'],
        rows: [
          ['Taxa de desocupação', '5,2%', '5,4% no 2º tri e 5,6% em 2025'],
          ['Desocupados', '5,6 milhões', '417 mil a menos que em 2025'],
          ['Ocupados', '103,6 milhões', '1,2 milhão a mais que em 2025'],
          ['Renda média habitual', 'R$ 3.790', '3,6% a mais que em 2025'],
          [
            'Massa de rendimento',
            'R$ 387,5 bilhões',
            '4,7% a mais que em 2025',
          ],
        ],
      },
    },
    {
      heading: 'Carteira assinada, informalidade e quem ainda está de fora',
      paragraphs: [
        'O emprego com carteira assinada no setor privado, sem contar os trabalhadores domésticos, ficou em 39,4 milhões, estável no trimestre e na comparação com 2025. Já os empregados do setor privado sem carteira somam 13,7 milhões, também estáveis. Os trabalhadores por conta própria são 26,1 milhões e os domésticos, 5,4 milhões.',
        'Os maiores avanços vieram de dois grupos. Os empregadores chegaram a 4,5 milhões, recorde, com alta de 4,3% no trimestre. Os empregados do setor público somam 13,2 milhões, também recorde, com alta de 2,5% em um ano. O setor da construção abriu 210 mil vagas no trimestre, alta de 2,8%.',
        'A taxa de informalidade ficou em 37,5% da população ocupada, o que equivale a 38,8 milhões de pessoas. Era 37,4% no trimestre anterior e 37,8% um ano antes. Informal, nesse cálculo, inclui quem trabalha sem carteira, quem é conta própria ou empregador sem CNPJ e quem ajuda a família sem receber.',
        'A taxa composta de subutilização, que soma desocupados, quem trabalha menos horas do que gostaria e quem desistiu de procurar, ficou em 13,0%, contra 12,9% no trimestre anterior e 13,9% em 2025. São 14,8 milhões de pessoas. Os desalentados, que desistiram de procurar emprego, somam 2,5 milhões, 7,5% a mais do que no trimestre anterior, mas 6,8% a menos do que em 2025.',
      ],
    },
    {
      heading: 'O que isso muda para o trabalhador e para quem procura emprego',
      paragraphs: [
        'Taxa baixa de desemprego tende a dar mais poder de negociação a quem trabalha, mas não garante vaga nem reajuste. Cada setor e cada região têm uma realidade diferente, e a taxa de 5,2% é a do país inteiro.',
        'Quem perde o emprego com carteira assinada pode ter direito ao seguro-desemprego, desde que cumpra os requisitos de tempo de trabalho e prazo de pedido. Para estimar o valor e o número de parcelas, use a calculadora de seguro-desemprego do portal.',
        'A próxima divulgação da PNAD Contínua, com o trimestre encerrado em outubro, está prevista para 27 de novembro. Vale acompanhar se a queda se mantém, já que o fim do ano costuma trazer contratações temporárias no comércio.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é a taxa de desocupação da PNAD?',
      answer:
        'É a parcela das pessoas na força de trabalho que não tinham trabalho, mas procuraram uma vaga no período. Quem não procura emprego não entra no cálculo.',
    },
    {
      question: 'Por que o IBGE diz que 5,2% é o menor para um 3º trimestre?',
      answer:
        'Porque a comparação é feita com os terceiros trimestres anteriores da série, que começa em 2012. Nenhum deles teve taxa tão baixa.',
    },
    {
      question: 'Os R$ 3.790 são o salário de quem tem carteira assinada?',
      answer:
        'Não. É o rendimento médio de todos os trabalhos, incluindo autônomos, empregadores e informais. Não é o salário médio de quem tem carteira.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Desemprego em 5,2% no 3º trimestre é o menor para o período desde 2012',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/desemprego-em-52-no-3deg-trimestre-e-o-menor-para-o-periodo-desde-2012',
    },
    {
      label:
        'Agência Gov: Taxa de desemprego tem queda e alcança menor resultado para setembro em 14 anos',
      url: 'https://agenciagov.ebc.com.br/noticias/202610/taxa-de-desemprego-tem-queda-e-alcanca-menor-resultado-para-setembro-em-14-anos',
    },
    {
      label: 'IBGE: o que é o desemprego (PNAD Contínua)',
      url: 'https://www.ibge.gov.br/explica/desemprego.php',
    },
  ],
} as const satisfies NewsDocument;
