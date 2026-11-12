import type { NewsDocument } from '../../types';

export const newsDolarIbovespa11Novembro2026 = {
  kind: 'news',
  slug: 'dolar-fecha-a-r-5-5628-ibovespa-sobe-0-42-a-172-mil-pontos-e-petrobras-lucra-r-39-75-bi',
  title:
    'Dólar cai 0,42% e fecha a R$ 5,5628; Ibovespa sobe 0,42%, a 172 mil pontos, com balanço da Petrobras',
  description:
    'Na quarta (11), o dólar recuou a R$ 5,5628 e o Ibovespa subiu 0,42%, a 172.060 pontos. Petrobras lucrou R$ 39,75 bi no 3º tri. Veja a conta em reais.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/dolar-fecha-a-r-5-5628-ibovespa-sobe-0-42-a-172-mil-pontos-e-petrobras-lucra-r-39-75-bi.jpg',
    alt: 'Documento com dólar a R$ 5,5628, queda de 0,42%, Ibovespa em 172.060 pontos e alta de 0,42%, ao lado de gráfico em alta, etiqueta e moeda.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-11',
  updatedAt: '2026-11-11',
  tags: [
    'dolar',
    'ibovespa',
    'petrobras',
    'cambio',
    'ajuste-fiscal',
    'petroleo',
  ],
  featuredCalculators: ['porcentagem', 'cdb-liquido'],
  highlights: [
    {
      value: 'R$ 5,5628',
      label: 'Dólar na quarta (11)',
      note: 'Queda de 0,42% sobre o fechamento de terça (10), de R$ 5,586.',
    },
    {
      value: '172.060',
      label: 'Pontos do Ibovespa',
      note: 'Alta de 0,42%, com volume de R$ 28,69 bilhões.',
    },
    {
      value: 'R$ 39,75 bi',
      label: 'Lucro da Petrobras',
      note: 'Resultado do 3º trimestre de 2026, alta de 21,5% sobre o 3º trimestre de 2025.',
    },
    {
      value: 'R$ 50 a 60 bi',
      label: 'Impacto fiscal em 2027',
      note: 'Estimativa do ministro Bruno Moretti para o projeto com medidas fiscais.',
    },
  ],
  sections: [
    {
      heading: 'Como fecharam o dólar e o Ibovespa na quarta-feira',
      paragraphs: [
        'O dólar à vista fechou a quarta-feira, 11 de novembro de 2026, em queda de 0,42%, a R$ 5,5628. Na terça-feira (10), a cotação havia ido a R$ 5,586, o maior valor de fechamento desde julho de 2025, e o recuo desta quarta devolveu parte da alta. Segundo a Reuters, o real foi a moeda mais forte entre as líquidas no dia.',
        'O Ibovespa subiu 0,42% e terminou o pregão em 172.060,43 pontos, com máxima de 172.986,66 e mínima de 171.335,20. O volume financeiro foi de R$ 28,69 bilhões. Em Nova York, o índice S&P 500 avançou 1,31%, o que ajudou o humor dos investidores por aqui.',
        'Entre as ações, a Reuters destacou altas de Magazine Luiza (17,48%), Cosan (13,06%), Hapvida (8,94%) e Rumo (7,82%). Entre as quedas, Engie Brasil (2,81%) e Banco do Brasil (1,23%), que divulga balanço depois do fechamento. As cotações variam na terceira e na quarta casa decimal conforme a fonte e o horário da medição.',
      ],
    },
    {
      heading: 'O que pesou: Petrobras, contas públicas e petróleo',
      image: {
        src: '/images/news/dolar-fecha-a-r-5-5628-ibovespa-sobe-0-42-a-172-mil-pontos-e-petrobras-lucra-r-39-75-bi-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com dólar a R$ 5,5628, queda de 0,42%, Ibovespa a 172.060 pontos e alta de 0,42%.',
        caption:
          'Os números do fechamento de quarta-feira, 11 de novembro, como informados pela Reuters.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Petrobras divulgou o balanço do 3º trimestre de 2026: lucro líquido de R$ 39,75 bilhões, alta de 21,5% sobre o mesmo período de 2025. Segundo a Reuters, o resultado ficou abaixo das estimativas dos analistas. A companhia elevou a projeção de produção própria e de investimentos e anunciou R$ 15,3 bilhões em remuneração a acionistas. As ações preferenciais (PETR4) subiram 3,11% e as ordinárias (PETR3) caíram 2,08%. A atualização do Plano Estratégico está prevista para 23 de novembro.',
        'No campo fiscal, o ministro Bruno Moretti afirmou que o projeto de lei com medidas fiscais protocolado no Senado deve ter impacto de R$ 50 bilhões a R$ 60 bilhões em 2027. A proposta, segundo a Reuters, permitiria bloqueios adicionais e limitaria o crescimento real dos gastos a 2%. É um projeto em tramitação: não vale como regra até ser votado e sancionado.',
        'No exterior, o petróleo Brent fechou em alta de 1,39%, a US$ 92,76 o barril, após declaração do Irã sobre material nuclear. O índice DXY, que compara o dólar com moedas fortes, subiu 0,67%, a 102,890 pontos no fim da tarde, mas o real teve desempenho melhor que o de outras moedas.',
      ],
    },
    {
      heading: 'Quanto a queda do dólar muda em reais',
      paragraphs: [
        'A conta do consumidor é o preço em dólar multiplicado pela cotação. Uma compra de US$ 1.000 custava R$ 5.586,00 com o dólar a R$ 5,586 e passa a custar R$ 5.562,80 com o dólar a R$ 5,5628: uma diferença de R$ 23,20. Em US$ 500, a diferença é de R$ 11,60.',
        'Esses valores usam só o câmbio comercial. No cartão de crédito ou na casa de câmbio entram o spread de quem faz a operação e o IOF, então o total costuma ficar acima da cotação. Quem tem compra internacional ou viagem para pagar deve conferir o valor final no momento da operação. A variação percentual entre duas cotações pode ser conferida na calculadora de porcentagem do portal.',
        'Para quem tem ações, a alta de 0,42% do Ibovespa significa que R$ 10.000 aplicados em um fundo que copiasse o índice, sem contar taxas e dividendos, passariam a valer R$ 10.042 ao fim do pregão, um ganho de R$ 42 no dia. A renda fixa em reais, como CDB e Tesouro Selic, segue a Selic e o CDI, não o Ibovespa.',
      ],
      table: {
        caption: 'Compra em dólar, câmbio comercial, sem spread nem IOF',
        columns: [
          'Valor',
          'Dólar a R$ 5,586 (10/11)',
          'Dólar a R$ 5,5628 (11/11)',
        ],
        rows: [
          ['US$ 100', 'R$ 558,60', 'R$ 556,28'],
          ['US$ 500', 'R$ 2.793,00', 'R$ 2.781,40'],
          ['US$ 1.000', 'R$ 5.586,00', 'R$ 5.562,80'],
        ],
      },
    },
    {
      heading: 'O que olhar nos próximos dias',
      paragraphs: [
        'Os próximos eventos citados pelas fontes são a atualização do Plano Estratégico da Petrobras, em 23 de novembro, a tramitação do projeto fiscal no Senado e os dados de inflação e juros nos Estados Unidos. A próxima reunião do Copom está marcada para 8 e 9 de dezembro, com a Selic em 13,75% ao ano.',
        'O boletim Focus, divulgado às segundas-feiras pelo Banco Central, mostra as projeções do mercado para câmbio, inflação e juros. São estimativas, não decisões oficiais. Em dias de forte oscilação, decidir no impulso costuma sair caro: vale conferir o objetivo e o prazo de cada aplicação antes de mudar a carteira.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto fechou o dólar em 11 de novembro de 2026?',
      answer:
        'O dólar à vista fechou a R$ 5,5628, queda de 0,42% no dia, segundo a Reuters. Na terça-feira (10), tinha fechado a R$ 5,586.',
    },
    {
      question: 'Quanto fechou o Ibovespa na quarta-feira?',
      answer:
        'O Ibovespa subiu 0,42% e fechou em 172.060,43 pontos, com volume financeiro de R$ 28,69 bilhões.',
    },
    {
      question: 'Quanto a Petrobras lucrou no 3º trimestre de 2026?',
      answer:
        'A Petrobras teve lucro líquido de R$ 39,75 bilhões, alta de 21,5% sobre o 3º trimestre de 2025. A companhia anunciou R$ 15,3 bilhões em remuneração a acionistas.',
    },
  ],
  sources: [
    {
      label:
        'Forbes Brasil (Reuters): Ibovespa fecha em alta com apoio de NY, mas Petrobras atenua ímpeto, 11/11/2026',
      url: 'https://forbes.com.br/forbes-money/2026/11/ibovespa-fecha-em-alta-com-apoio-de-ny-mas-petrobras-atenua-impeto/',
    },
    {
      label:
        'InfoMoney: Ibovespa fecha em alta, com fiscal e exterior; Petrobras cai com balanço, 11/11/2026',
      url: 'https://www.infomoney.com.br/mercados/ibovespa-hoje-bolsa-de-valores-ao-vivo-11112026/',
    },
    {
      label: 'Banco Central: histórico de cotações',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes',
    },
  ],
} as const satisfies NewsDocument;
