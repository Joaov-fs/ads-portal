import type { NewsDocument } from '../../types';

export const newsDolarIbovespa10Novembro2026 = {
  kind: 'news',
  slug: 'dolar-fecha-a-r-5-586-ibovespa-cai-0-52-dolar-no-maior-valor-desde-julho-de-2025',
  title:
    'Dólar fecha a R$ 5,586, o maior valor desde julho de 2025, e Ibovespa cai 0,52%',
  description:
    'Na terça (10), o dólar subiu cerca de 1,5% e fechou a R$ 5,586, e o Ibovespa caiu 0,52%, a 171.337 pontos. Veja a conta em reais e o que pesou.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/dolar-fecha-a-r-5-586-ibovespa-cai-0-52-dolar-no-maior-valor-desde-julho-de-2025.jpg',
    alt: 'Documento com dólar a R$ 5,586, alta de 1,5%, Ibovespa em 171.337 pontos e queda de 0,52%, ao lado de gráfico em alta e nota de real.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-10',
  updatedAt: '2026-11-10',
  tags: ['dolar', 'ibovespa', 'cambio', 'selic', 'copom', 'inflacao-eua'],
  featuredCalculators: ['porcentagem', 'cdb-liquido'],
  highlights: [
    {
      value: 'R$ 5,586',
      label: 'Dólar na terça (10)',
      note: 'Alta de cerca de 1,5% no dia, o maior valor de fechamento desde julho de 2025.',
    },
    {
      value: '171.337',
      label: 'Pontos do Ibovespa',
      note: 'Queda de 0,52% no pregão.',
    },
    {
      value: '0,4%',
      label: 'Inflação dos EUA',
      note: 'CPI de outubro, acima dos 0,3% esperados pelo mercado.',
    },
    {
      value: '13,75%',
      label: 'Selic ao ano',
      note: 'A próxima reunião do Copom é em 8 e 9 de dezembro.',
    },
  ],
  sections: [
    {
      heading: 'Como fecharam o dólar e o Ibovespa na terça-feira',
      paragraphs: [
        'O dólar comercial fechou a terça-feira, 10 de novembro de 2026, a R$ 5,586 na venda, alta de cerca de 1,5% sobre o dia anterior. As duas fontes consultadas divergem na segunda casa decimal da variação (1,46% e 1,47%), por isso o texto usa o valor aproximado. Segundo a InvestNews, é o maior patamar de fechamento desde julho de 2025.',
        'O Ibovespa recuou 0,52% e terminou o pregão em 171.337 pontos. O índice chegou a subir durante o dia, perto de 173,3 mil pontos, mas devolveu os ganhos à tarde, com o dólar mais forte e a divulgação de dados de inflação nos Estados Unidos.',
        'Entre as ações, a InvestNews destacou a alta de 10% da Magazine Luiza e a queda de 11% da Hapvida. O volume financeiro ficou perto de R$ 21 bilhões, segundo a NC News.',
      ],
    },
    {
      heading: 'O que pesou sobre o câmbio',
      image: {
        src: '/images/news/dolar-fecha-a-r-5-586-ibovespa-cai-0-52-dolar-no-maior-valor-desde-julho-de-2025-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com dólar a R$ 5,586, alta de 1,5%, Ibovespa a 171.337 pontos e queda de 0,52%.',
        caption:
          'Os números do fechamento de terça-feira, 10 de novembro, como informados pela InvestNews e pela NC News.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O fator citado pelas duas fontes é a inflação ao consumidor dos Estados Unidos (CPI): alta de 0,4% em outubro, contra 0,3% esperado. Números mais altos reforçam a leitura de que o banco central americano pode manter os juros elevados por mais tempo, o que fortalece o dólar contra várias moedas. O índice DXY, que compara o dólar com moedas fortes, subiu 0,59%, a 102,26 pontos, segundo a InvestNews.',
        'No Brasil, o mercado também leu a ata do Copom, divulgada nesta terça. O documento trata da decisão de 4 de novembro, quando a Selic foi mantida em 13,75% ao ano. As fontes interpretam o texto de formas diferentes: uma o vê como mais suave, a outra como cauteloso e sem data para retomar cortes. Como a leitura varia, vale acompanhar o documento original no site do Banco Central.',
        'A InvestNews cita ainda o petróleo Brent abaixo de US$ 90 por barril, com apostas em um desfecho para a guerra no Irã. O portal não faz projeção de câmbio: o que importa ao leitor é o número do dia e o efeito na conta.',
      ],
    },
    {
      heading: 'Quanto o dólar mais alto pesa em reais',
      paragraphs: [
        'A conta do consumidor é o preço em dólar multiplicado pela cotação. Uma compra de US$ 500 custa R$ 2.793,00 com o dólar a R$ 5,586, e uma de US$ 1.000 custa R$ 5.586,00. Em 23 de outubro, com o dólar a R$ 4,993, os US$ 1.000 custavam R$ 4.993,00: a diferença é de R$ 593,00.',
        'Esses valores usam só o câmbio comercial. No cartão de crédito ou na casa de câmbio entram o spread de quem faz a operação e o IOF, então o total costuma ficar acima da cotação. Quem tem compra internacional ou viagem para pagar deve conferir o valor final no momento da operação. A variação percentual entre duas cotações pode ser conferida na calculadora de porcentagem do PortalFina.',
        'Para quem tem ações, o recuo de 0,52% do Ibovespa significa que R$ 10.000 aplicados em um fundo que copiasse o índice, sem contar taxas e dividendos, valeriam R$ 9.948 ao fim do pregão, uma variação de R$ 52 no dia. A renda fixa em reais, como CDB e Tesouro Selic, segue a Selic e o CDI, não o Ibovespa.',
      ],
      table: {
        caption: 'Compra em dólar, câmbio comercial, sem spread nem IOF',
        columns: [
          'Valor',
          'Dólar a R$ 4,993 (23/10)',
          'Dólar a R$ 5,586 (10/11)',
        ],
        rows: [
          ['US$ 100', 'R$ 499,30', 'R$ 558,60'],
          ['US$ 500', 'R$ 2.496,50', 'R$ 2.793,00'],
          ['US$ 1.000', 'R$ 4.993,00', 'R$ 5.586,00'],
        ],
      },
    },
    {
      heading: 'O que olhar nos próximos dias',
      paragraphs: [
        'A próxima reunião do Copom é em 8 e 9 de dezembro. Até lá, o mercado acompanha novos dados de inflação e emprego nos Estados Unidos, o preço do petróleo e os sinais sobre as contas públicas no Brasil. Selic alta encarece financiamentos e cartão e melhora o retorno da renda fixa.',
        'O boletim Focus, divulgado às segundas-feiras pelo Banco Central, mostra as projeções do mercado para câmbio, inflação e juros. São estimativas, não decisões oficiais. Decidir no impulso em dia de forte oscilação costuma sair caro: vale conferir o objetivo e o prazo de cada aplicação antes de mudar a carteira.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto fechou o dólar em 10 de novembro de 2026?',
      answer:
        'O dólar comercial fechou a R$ 5,586 na venda, alta de cerca de 1,5% no dia, o maior valor de fechamento desde julho de 2025, segundo a InvestNews.',
    },
    {
      question: 'Por que o dólar subiu na terça-feira?',
      answer:
        'As fontes apontam a inflação dos Estados Unidos de 0,4% em outubro, acima dos 0,3% esperados, que reforçou a aposta em juros altos por mais tempo no país, além da leitura da ata do Copom no Brasil.',
    },
    {
      question: 'A queda do Ibovespa afeta a poupança e o CDB?',
      answer:
        'Não diretamente. Poupança, CDB e Tesouro Selic seguem a Selic e o CDI, não o Ibovespa. Fundos de ações e títulos vendidos antes do vencimento podem oscilar.',
    },
  ],
  sources: [
    {
      label:
        'InvestNews: Ibovespa fecha em queda com apostas de alta de juros nos EUA, 10/11/2026',
      url: 'https://investnews.com.br/investimentos/ibovespa-fecha-queda-10-11-2026/',
    },
    {
      label: 'NC News: Dólar sobe a R$ 5,59 e Ibovespa cai 0,52% nesta terça',
      url: 'https://ncnews.com.br/2026/11/10/dolar-sobe-559-ibovespa-cai-10/',
    },
    {
      label: 'Banco Central: ata do Copom',
      url: 'https://www.bcb.gov.br/publicacoes/atascopom',
    },
    {
      label: 'Banco Central: histórico de cotações',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes',
    },
  ],
} as const satisfies NewsDocument;
