import type { NewsDocument } from '../../types';

export const newsDolarBolsa26Outubro2026 = {
  kind: 'news',
  slug: 'dolar-sobe-8-21-a-r-5-403-e-bolsa-cai-13-88-o-que-muda-para-o-seu-bolso',
  title:
    'Dólar sobe 8,21% a R$ 5,403 e bolsa cai 13,88%: o que muda para o seu bolso',
  description:
    'Na segunda-feira (26), o dólar fechou a R$ 5,403 e o Ibovespa caiu 13,88%. Veja a conta em reais para compras, viagens e investimentos.',
  category: 'economia',
  coverImage: {
    src: '/images/news/dolar-sobe-8-21-a-r-5-403-e-bolsa-cai-13-88-o-que-muda-para-o-seu-bolso.jpg',
    alt: 'Documento com dólar a R$ 5,403, alta de 8,21%, Ibovespa em 176.608 pontos e etiqueta de queda de 13,88%.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-27',
  updatedAt: '2026-10-27',
  tags: ['dolar', 'ibovespa', 'cambio', 'investimentos', 'economia', 'viagem'],
  featuredCalculators: ['porcentagem', 'cdb-liquido'],
  highlights: [
    {
      value: 'R$ 5,403',
      label: 'Dólar na segunda-feira (26)',
      note: 'Alta de 8,21%, a maior em um dia desde 13/01/1999.',
    },
    {
      value: '-13,88%',
      label: 'Queda do Ibovespa no dia',
      note: 'Fechou a 176.608,23 pontos, pior queda diária desde março de 2020.',
    },
    {
      value: 'R$ 5,60',
      label: 'Máxima do dólar na manhã',
      note: 'Depois a moeda recuou e fechou a R$ 5,403.',
    },
    {
      value: 'R$ 88,6 bi',
      label: 'Volume negociado na bolsa',
      note: 'A média diária é de cerca de R$ 25 bilhões.',
    },
  ],
  sections: [
    {
      heading: 'O que aconteceu com o dólar e a bolsa na segunda-feira',
      paragraphs: [
        'O dólar comercial fechou a segunda-feira, 26 de outubro de 2026, cotado a R$ 5,403, uma alta de 8,21% em relação à sexta-feira, quando tinha terminado a R$ 4,993. Segundo a Agência Brasil, foi a maior alta diária em percentual desde 13 de janeiro de 1999. Pela manhã, a moeda chegou perto de R$ 5,60, e depois recuou. No mês, o dólar acumula alta de 4,40%, e no ano ainda registra queda de 1,57%.',
        'A bolsa teve o movimento oposto. O Ibovespa fechou a 176.608,23 pontos, queda de 13,88%, a maior para um dia desde março de 2020, no início da pandemia de covid-19. Na sexta-feira, o índice tinha fechado a 205.082,56 pontos, ou seja, perdeu cerca de 28,5 mil pontos em um único pregão. Na mínima do dia, o índice chegou a 169.516,43 pontos, com recuo superior a 17%. O fechamento é o mais baixo desde 31 de agosto.',
        'A B3 acionou o circuit breaker pela manhã, mecanismo que interrompe temporariamente as negociações quando a queda é muito forte. O volume foi de R$ 88,6 bilhões, mais de três vezes a média diária de cerca de R$ 25 bilhões. Em outubro, o Ibovespa passou a acumular queda de 5,22%, e no ano mantém alta de 9,61%.',
      ],
    },
    {
      heading: 'Quanto isso muda em reais para quem compra ou viaja',
      image: {
        src: '/images/news/dolar-sobe-8-21-a-r-5-403-e-bolsa-cai-13-88-o-que-muda-para-o-seu-bolso-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com dólar a R$ 5,403, alta de 8,21%, Ibovespa a 176.608 pontos e queda de 13,88%.',
        caption:
          'Os números do pregão de segunda-feira, 26 de outubro, como informados pela Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A conta do consumidor é direta: o preço em dólar vezes a cotação do dia. Uma compra de US$ 500 em uma loja internacional custava R$ 2.496,50 pelo câmbio de sexta-feira (R$ 4,993). Com o dólar a R$ 5,403, o mesmo valor passa a R$ 2.701,50. A diferença é de R$ 205,00. Em uma compra de US$ 1.000, a diferença é de R$ 410,00: de R$ 4.993,00 para R$ 5.403,00.',
        'Esses valores usam só o câmbio comercial. No cartão de crédito ou na casa de câmbio, entram também o spread de quem faz a operação e o IOF, e por isso o total costuma ficar acima da cotação. Quem tem viagem marcada ou uma compra internacional para pagar nas próximas semanas deve conferir o valor final no momento do pagamento, e não só a manchete do dia.',
        'A cotação de fechamento de segunda-feira ficou abaixo da máxima da manhã, em cerca de R$ 5,60. A Agência Brasil informa que parte do movimento foi de realização de lucros, que exportadores aproveitaram o dólar mais alto para trazer divisas ao país e que o Tesouro Nacional atuou no mercado com recompra de títulos públicos. Uma cotação que oscila tanto em um dia não é garantia do valor dos próximos dias.',
      ],
      table: {
        caption: 'Compra em dólar, câmbio comercial, sem spread nem IOF',
        columns: ['Valor', 'Com dólar a R$ 4,993', 'Com dólar a R$ 5,403'],
        rows: [
          ['US$ 100', 'R$ 499,30', 'R$ 540,30'],
          ['US$ 500', 'R$ 2.496,50', 'R$ 2.701,50'],
          ['US$ 1.000', 'R$ 4.993,00', 'R$ 5.403,00'],
        ],
      },
    },
    {
      heading: 'O que a queda da bolsa muda para quem investe',
      paragraphs: [
        'A queda de 13,88% vale para o índice, e o efeito em cada carteira depende do que a pessoa tem. Um fundo de ações que copia o Ibovespa teria perdido, em um dia, cerca de R$ 1.388 a cada R$ 10.000 aplicados, e os R$ 10.000 passariam a valer perto de R$ 8.612. Carteiras que não copiam o índice podem ter variação diferente, e fundos que investem em ativos atrelados ao dólar podem ter subido.',
        'Já a renda fixa em reais não é afetada diretamente pelo pregão de um dia. CDB, Tesouro Selic e LCI e LCA continuam seguindo a Selic e o CDI, e quem segura o título até o vencimento recebe o que foi contratado. Quem precisa vender um título antes do prazo, em papéis com marcação a mercado, pode ver o valor oscilar. Para comparar o rendimento líquido de uma aplicação, vale usar a calculadora de CDB líquido do PortalFina.',
        'Quem investe para o longo prazo costuma olhar o horizonte da aplicação, e não o resultado de um único dia. Decisões feitas no impulso, em dia de forte oscilação, costumam sair mais caras, por isso o ideal é conferir o objetivo e o prazo de cada investimento antes de qualquer mudança.',
      ],
    },
    {
      heading: 'O que acompanhar nos próximos dias',
      paragraphs: [
        'O mercado reagiu ao resultado do segundo turno, realizado no domingo, 25 de outubro. A Agência Brasil informa que parte dos investidores esperava outro resultado e precisou ajustar posições montadas antes da votação. O portal não toma posição sobre o resultado: o que interessa ao leitor são os números e o efeito no bolso.',
        'Entre os pontos que o consumidor pode acompanhar estão a cotação do dólar nos próximos pregões, o preço da gasolina e do diesel, que dependem do petróleo, do câmbio e de decisões da Petrobras, e a decisão do Copom sobre a Selic, marcada para 3 e 4 de novembro. O efeito do câmbio nos preços de importados e combustíveis não é automático nem imediato.',
        'A recomendação prática é simples. Para compras em dólar, compare o valor final com spread e IOF. Para investimentos, confira o prazo e o tipo de aplicação. Para o orçamento do mês, acompanhe os preços de mercado e as notícias oficiais, e evite decisões baseadas só em uma cotação de um dia.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto fechou o dólar em 26 de outubro de 2026?',
      answer:
        'O dólar comercial fechou a R$ 5,403, alta de 8,21%, a maior alta diária desde 13 de janeiro de 1999, segundo a Agência Brasil.',
    },
    {
      question: 'Quanto caiu o Ibovespa na segunda-feira?',
      answer:
        'O Ibovespa caiu 13,88% e fechou a 176.608,23 pontos, a maior queda em um dia desde março de 2020.',
    },
    {
      question: 'A queda da bolsa afeta o dinheiro na poupança ou no CDB?',
      answer:
        'Não de forma direta. A poupança, o CDB e o Tesouro Selic seguem a Selic e o CDI, e não o Ibovespa. Fundos de ações e papéis com marcação a mercado podem oscilar.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Dólar sobe 8,21%, e bolsa cai 13,88% após reeleição de Lula, 26/10/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/dolar-sobe-821-e-bolsa-cai-1388-apos-reeleicao-de-lula',
    },
    {
      label:
        'Agência Brasil: Dólar fecha abaixo de R$ 5 e recua 1,58% na semana, 23/10/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/dolar-fecha-abaixo-de-r-5-e-recua-158-na-semana',
    },
    {
      label:
        'Terra: Dólar fecha a R$ 5,40 e Bolsa desaba mais de 13% após reeleição de Lula',
      url: 'https://www.terra.com.br/noticias/eleicoes/dolar-fecha-a-r-540-e-bolsa-desaba-mais-de-13-apos-reeleicao-de-lula,7b95ad593e164fc5882c291a3f503e4ehwf0db65.html',
    },
    {
      label: 'Banco Central do Brasil: cotações e boletins de câmbio',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
