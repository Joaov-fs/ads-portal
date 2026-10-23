import type { NewsDocument } from '../../types';

export const newsDesenrola3EditalR90Bi = {
  kind: 'news',
  slug: 'desenrola-3-0-edital-de-r-90-bi-em-dividas-de-ate-r-10-mil-desconto-minimo-de-90',
  title:
    'Desenrola 3.0: edital mira R$ 90 bi em dívidas de até R$ 10 mil com desconto mínimo de 90%',
  description:
    'Portaria da Fazenda abre a seleção de credores do Desenrola 3.0. Veja quais dívidas entram, quando sai o leilão e o que o consumidor precisa fazer agora.',
  category: 'financas',
  coverImage: {
    src: '/images/news/desenrola-3-0-edital-de-r-90-bi-em-dividas-de-ate-r-10-mil-desconto-minimo-de-90.jpg',
    alt: 'Documento do Desenrola 3.0 com dívida de até R$ 10.000, desconto mínimo de 90% e oferta inicial de R$ 90 bilhões, ao lado de cartão em atraso.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-23',
  updatedAt: '2026-10-23',
  tags: ['desenrola', 'dividas', 'renegociacao', 'cartao', 'bancos', 'mei'],
  featuredCalculators: ['simulador-de-emprestimo', 'juros-compostos'],
  highlights: [
    {
      value: 'R$ 90 bi',
      label: 'Dívidas na primeira chamada',
      note: 'Estimativa do ministro da Fazenda para o edital.',
    },
    {
      value: '90%',
      label: 'Desconto mínimo exigido',
      note: 'A União paga no máximo 10% do valor de face.',
    },
    {
      value: 'R$ 10 mil',
      label: 'Valor original máximo da dívida',
      note: 'Cartão e crédito pessoal sem consignado.',
    },
    {
      value: '5 dias úteis',
      label: 'Prazo para os credores',
      note: 'Para informar as carteiras que querem oferecer.',
    },
  ],
  sections: [
    {
      heading: 'O que a Fazenda publicou e o que ainda não vale para você',
      paragraphs: [
        'O Ministério da Fazenda publicou em 22/10/2026, em edição extra do Diário Oficial da União, a portaria que convoca bancos, outras instituições financeiras e fundos de direitos creditórios para a primeira etapa do Desenrola 3.0. O programa foi criado por medida provisória assinada em 25/09/2026 e funciona de um jeito diferente das edições anteriores: em vez de o consumidor ir ao banco, a União compra carteiras de dívidas antigas em leilão e repassa o desconto a quem deve.',
        'Esta etapa não abre atendimento ao consumidor. Ela serve para medir quanto os credores têm interesse em oferecer e em quais faixas de renda estão as dívidas. O ministro da Fazenda, Dario Durigan, estimou que até R$ 90 bilhões em débitos antigos possam ser apresentados, e o leilão está previsto para novembro, com possibilidade de ficar para o início de dezembro.',
        'Na prática, quem tem dívida elegível não precisa procurar o banco agora. As regras de acesso à renegociação ainda serão divulgadas, e o prazo para começar a pagar saldos ou parcelas, segundo o anúncio de setembro, é fevereiro de 2027.',
      ],
    },
    {
      heading: 'Quais dívidas entram no Desenrola 3.0',
      image: {
        src: '/images/news/desenrola-3-0-edital-de-r-90-bi-em-dividas-de-ate-r-10-mil-desconto-minimo-de-90-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com dívida até R$ 10.000, atraso de 720 a 1.645 dias, desconto mínimo de 90% e oferta de até R$ 90 bilhões.',
        caption:
          'Os critérios da dívida e o desconto mínimo exigido no leilão.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Entram dívidas de pessoas físicas e de MEIs, com valor original de até R$ 10.000, em atraso há mais de 720 dias e menos de 1.645 dias (cerca de dois a quatro anos e meio), contados a partir de 25/09/2026. Os tipos de crédito previstos são cartão de crédito, rotativo e parcelado, e crédito pessoal sem desconto em folha de pagamento. O consignado fica de fora.',
        'Dívidas muito recentes ou muito antigas, acima de R$ 10.000 ou de outras modalidades, como financiamento de veículo e cheque especial, não aparecem entre os critérios divulgados. Antes de contar com o programa, confira a data do primeiro atraso e o valor original do contrato, não o saldo atual com juros.',
      ],
      table: {
        caption: 'Critérios divulgados para a primeira chamada',
        columns: ['Item', 'Regra'],
        rows: [
          ['Quem pode ser devedor', 'Pessoa física e MEI'],
          ['Valor original da dívida', 'Até R$ 10.000'],
          ['Tempo de atraso', 'De 720 a 1.645 dias'],
          ['Tipos de crédito', 'Cartão e crédito pessoal sem consignado'],
          ['Desconto mínimo no leilão', '90%'],
        ],
      },
    },
    {
      heading: 'Como o leilão funciona e quanto o desconto vale na prática',
      paragraphs: [
        'Os credores informam as carteiras que querem vender e propõem descontos. As propostas são ordenadas pelo maior desconto, e a União repassa o abatimento obtido ao devedor. O desconto mínimo exigido é de 90%, e o ministro disse que o governo pode pedir 93% ou 95% no leilão, conforme a concorrência.',
        'Veja a conta: uma dívida original de R$ 10.000 comprada com desconto de 90% passa a ser renegociada sobre R$ 1.000. Com 95%, a base cai para R$ 500. Uma dívida de R$ 4.000, no desconto mínimo, vira R$ 400. Esses valores são a base da renegociação: os juros do parcelamento ainda serão definidos pelo Conselho Monetário Nacional.',
        'Para o governo, o custo máximo é de R$ 9 bilhões se toda a oferta de R$ 90 bilhões fosse comprada, porque a União paga até 10% do valor de face. O governo não é obrigado a comprar tudo o que for apresentado e quer dar prioridade a devedores de menor renda e a MEIs. Se faltar dívida dessa faixa, pode adquirir carteiras de renda mais alta.',
      ],
    },
    {
      heading: 'MEI, bancos e o que muda no seu planejamento',
      paragraphs: [
        'Em 13/10/2026, a Fazenda incluiu as dívidas bancárias de MEIs no Desenrola 3.0, com estoque estimado em cerca de R$ 6 bilhões e desconto mínimo de 90%. Já as dívidas de MEIs com a União dependem de projeto de lei complementar em tramitação no Congresso. Quem negocia pelo Desenrola MEI na PGFN pode seguir com esse caminho enquanto isso.',
        'Enquanto o edital não vira atendimento, o mais seguro é juntar informações: separe contratos antigos, anote a data do primeiro atraso e o valor original, e desconfie de qualquer mensagem que ofereça adesão ao programa agora. O governo informou que o consumidor não precisa procurar banco nesta fase, e cobrança por adesão ou pedido de pagamento antecipado é sinal de golpe.',
        'Quem tem dívida fora dos critérios, ou precisa resolver antes de fevereiro de 2027, pode usar a simulação de empréstimo e o guia de saída do endividamento do portal para comparar alternativas.',
      ],
    },
  ],
  faq: [
    {
      question: 'Já posso renegociar minha dívida pelo Desenrola 3.0?',
      answer:
        'Ainda não. A primeira etapa convoca os credores. As regras para o consumidor serão divulgadas depois do leilão, previsto para novembro, com possibilidade de ficar para o início de dezembro.',
    },
    {
      question: 'Qual dívida pode entrar no Desenrola 3.0?',
      answer:
        'Dívidas de pessoa física e MEI com valor original de até R$ 10.000, em atraso entre 720 e 1.645 dias, de cartão de crédito ou crédito pessoal sem consignado.',
    },
    {
      question:
        'O desconto de 90% significa que vou pagar 10% do saldo com juros?',
      answer:
        'Não necessariamente. O desconto vale sobre o valor de face da dívida comprada pela União, e o parcelamento terá juros ainda a definir pelo Conselho Monetário Nacional.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Portaria convoca instituições financeiras para 3ª fase do Desenrola',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/portaria-convoca-instituicoes-financeiras-para-3a-fase-do-desenrola',
    },
    {
      label:
        'Agência Brasil: Ministro prevê renegociação de R$ 90 bi em 3ª fase do Desenrola',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/ministro-preve-renegociacao-de-r-90-bi-em-3a-fase-do-desenrola',
    },
    {
      label:
        'Agência Brasil: Saiba como funcionará compra de dívidas pela União',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-09/saiba-como-funcionara-compra-de-dividas-pela-uniao',
    },
    {
      label:
        'Ministério da Fazenda: dívidas bancárias do MEI na terceira fase da renegociação',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/fazenda-inclui-dividas-bancarias-do-mei-na-terceira-fase-da-renegociacao-de-dividas-com-descontos-minimos-de-90',
    },
  ],
} as const satisfies NewsDocument;
