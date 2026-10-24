import type { NewsDocument } from '../../types';

export const newsDolarFechaAbaixoDeR5 = {
  kind: 'news',
  slug: 'dolar-fecha-a-r-4-993-e-cai-1-58-na-semana-o-que-muda-para-quem-compra-e-viaja',
  title:
    'Dólar fecha a R$ 4,993 e cai 1,58% na semana: o que muda para quem compra e viaja',
  description:
    'O dólar comercial terminou a sexta-feira (23) abaixo de R$ 5, com queda de 0,92% no dia. Veja a conta em reais para compras no exterior e o que pesa nos preços.',
  category: 'economia',
  coverImage: {
    src: '/images/news/dolar-fecha-a-r-4-993-e-cai-1-58-na-semana-o-que-muda-para-quem-compra-e-viaja.jpg',
    alt: 'Documento com a cotação do dólar, nota de US$, calculadora com 4,993 e etiqueta de queda de 1,58%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-24',
  updatedAt: '2026-10-24',
  tags: ['dolar', 'cambio', 'inflacao', 'combustiveis', 'economia', 'viagem'],
  featuredCalculators: ['porcentagem', 'conversao-taxa-mensal-anual'],
  highlights: [
    {
      value: 'R$ 4,993',
      label: 'Dólar na sexta-feira (23)',
      note: 'Fechamento do câmbio comercial.',
    },
    {
      value: '-1,58%',
      label: 'Queda do dólar na semana',
      note: 'Na semana anterior, a alta tinha sido de 1,77%.',
    },
    {
      value: '-0,92%',
      label: 'Variação no dia',
      note: 'Mínima do pregão: R$ 4,989.',
    },
    {
      value: 'US$ 116,72',
      label: 'Barril de Brent',
      note: 'Contrato de dezembro, maior nível desde abril.',
    },
  ],
  sections: [
    {
      heading: 'O que aconteceu com o dólar na sexta-feira',
      paragraphs: [
        'O dólar comercial fechou a sexta-feira, 23 de outubro de 2026, cotado a R$ 4,993, uma queda de 0,92% no dia. Foi o menor valor de fechamento desde 9 de outubro, quando a moeda terminou o dia em R$ 4,985. Na semana, a baixa acumulada foi de 1,58%. Na semana anterior, a moeda tinha subido 1,77%.',
        'Pelas contas feitas a partir desses dados, o dólar fechou a sexta-feira anterior perto de R$ 5,07. Foi dessa referência que a cotação recuou cerca de 8 centavos ao longo da semana. A mínima do pregão de sexta ficou em R$ 4,989, ou seja, a moeda chegou a encostar na casa dos R$ 4,98 durante o dia.',
        'Segundo a Agência Brasil, o mercado ajustou posições antes do segundo turno das eleições, marcado para domingo, 25 de outubro. O índice DXY, que mede o dólar frente a uma cesta de moedas fortes, subia 0,19% por volta das 17h, a 101,799 pontos. Ou seja, a queda do dólar no Brasil ocorreu mesmo com a moeda um pouco mais forte lá fora.',
      ],
    },
    {
      heading: 'Quanto isso vale em reais no seu bolso',
      image: {
        src: '/images/news/dolar-fecha-a-r-4-993-e-cai-1-58-na-semana-o-que-muda-para-quem-compra-e-viaja-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com fechamento de R$ 4,993, queda diária e semanal e preço do Brent.',
        caption:
          'Os números do pregão de sexta-feira, 23 de outubro, como informados pela Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A conta do consumidor é direta: cada dólar custa a cotação do dia em reais. Quem compra US$ 500 em uma loja internacional ou em um pacote de viagem paga, pelo câmbio comercial de R$ 4,993, o equivalente a R$ 2.496,50. Com o dólar perto de R$ 5,07, o mesmo valor sairia por cerca de R$ 2.536,50. A diferença é de aproximadamente R$ 40.',
        'Em uma compra de US$ 1.000, a diferença entre as duas cotações fica em torno de R$ 80. Os valores são estimativas feitas só com o câmbio comercial. O que o cartão ou a casa de câmbio cobra de fato inclui o spread de quem faz a operação e tributos como o IOF, que não entram nesta conta.',
        'Para refazer o cálculo com outro valor, basta multiplicar o preço em dólar pela cotação. Para ver quanto uma variação percentual muda o preço final, a calculadora de porcentagem do PortalFina ajuda.',
      ],
      table: {
        caption: 'Compra de US$ 500 em cada cotação, câmbio comercial',
        columns: ['Cotação do dólar', 'Valor em reais', 'Observação'],
        rows: [
          ['R$ 4,993', 'R$ 2.496,50', 'Fechamento de 23/10'],
          [
            'R$ 5,07 (aprox.)',
            'R$ 2.536,50',
            'Estimativa da sexta-feira anterior',
          ],
          ['Diferença', 'Cerca de R$ 40', 'Sem spread nem IOF'],
        ],
      },
    },
    {
      heading: 'Por que o petróleo entra na conta',
      paragraphs: [
        'No mesmo dia, o petróleo Brent para dezembro subiu 3,13% e fechou a US$ 116,72 o barril, o maior nível desde abril. Na semana, a alta foi de 6,24%. O WTI, referência dos Estados Unidos, fechou a US$ 103,27, alta de 3,82% no dia. A Agência Brasil atribui o movimento às tensões no Oriente Médio.',
        'Para o leitor, o ponto é que dólar e petróleo afetam os preços dos combustíveis. Quando o barril sobe, o custo de importar e de produzir derivados tende a subir, e um dólar mais barato ajuda a compensar parte dessa pressão. O efeito nos postos depende de decisões da Petrobras e de outros fatores, como tributos, e não é automático nem imediato.',
        'Quem acompanha o preço da gasolina deve olhar a pesquisa semanal da ANP e as notícias de reajuste, e não a cotação do dia isoladamente. O dólar de um único pregão não define o preço do litro.',
      ],
    },
    {
      heading: 'Bolsa e juros: o que também fechou na sexta',
      paragraphs: [
        'O Ibovespa fechou a 205.082,56 pontos, alta de 0,47% no dia e queda de 0,17% na semana. Em outubro, o índice acumula alta de 10,06%, e no ano, de 27,28%. O volume financeiro negociado foi de R$ 30,7 bilhões.',
        'Para quem investe, o dólar abaixo de R$ 5 não muda por si só o rendimento de renda fixa, que segue a Selic e o CDI. Quem tem fundo cambial ou investimento atrelado ao dólar vê o valor da cota oscilar com a moeda. Quem tem renda fixa em reais, como CDB e Tesouro Selic, não é afetado diretamente.',
        'Cotações oscilam todos os dias, e uma semana de queda não garante a continuidade da trajetória. Quem tem uma compra grande a fazer em dólar, como uma viagem ou um equipamento importado, deve comparar o valor final na hora de fechar o pagamento, e não só a manchete do dia.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto fechou o dólar na sexta-feira, 23 de outubro de 2026?',
      answer:
        'O dólar comercial fechou a R$ 4,993, queda de 0,92% no dia e de 1,58% na semana, segundo a Agência Brasil.',
    },
    {
      question: 'Dólar abaixo de R$ 5 faz o preço dos produtos cair?',
      answer:
        'Não de imediato. Produtos importados e insumos podem ficar mais baratos com o tempo, mas o preço final depende também de impostos, frete, margens e do petróleo.',
    },
    {
      question: 'O valor que pago no cartão será igual à cotação?',
      answer:
        'Em geral não. O câmbio do cartão ou da casa de câmbio inclui spread e IOF, por isso o total em reais costuma ficar acima do câmbio comercial.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Dólar fecha abaixo de R$ 5 e recua 1,58% na semana, 23/10/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/dolar-fecha-abaixo-de-r-5-e-recua-158-na-semana',
    },
    {
      label: 'Banco Central do Brasil: cotações e boletins de câmbio',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
