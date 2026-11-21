import type { NewsDocument } from '../../types';

export const newsReceitaOpcoesSimplesIbsCbsCancelamento = {
  kind: 'news',
  slug: 'receita-657-mil-pedidos-simples-nacional-1-milhao-ibs-cbs-cancelamento-ate-20-de-dezembro',
  title:
    'Receita registra 657 mil pedidos no Simples e 1,09 milhão no regime regular de IBS e CBS',
  description:
    'Receita Federal atualiza os números das opções para 2027: 376.551 pedidos do Simples foram deferidos e o cancelamento fica aberto até 20/12.',
  category: 'economia',
  coverImage: {
    src: '/images/news/receita-657-mil-pedidos-simples-nacional-1-milhao-ibs-cbs-cancelamento-ate-20-de-dezembro.jpg',
    alt: 'Documento com os números das opções, calendário de dezembro com o dia 20 marcado e etiqueta com o prazo de cancelamento.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-21',
  updatedAt: '2026-11-21',
  tags: [
    'simples-nacional',
    'ibs',
    'cbs',
    'reforma-tributaria',
    'receita-federal',
    'impostos',
  ],
  featuredCalculators: ['simples-nacional', 'fator-r', 'das-limite-mei'],
  highlights: [
    {
      value: '657.355',
      label: 'Pedidos pelo Simples Nacional',
      note: 'Número registrado pela Receita Federal em 18/11.',
    },
    {
      value: '1.090.080',
      label: 'Pedidos pelo regime regular',
      note: 'Opção por recolher IBS e CBS fora do DAS.',
    },
    {
      value: '20/12',
      label: 'Fim do prazo para cancelar',
      note: 'A janela abriu em 3/11 e vale para as duas opções.',
    },
  ],
  sections: [
    {
      heading: 'Quantos pedidos a Receita Federal registrou',
      paragraphs: [
        'A Receita Federal divulgou em 18/11 a atualização dos números das opções feitas para 2027. Depois do processamento dos pedidos, foram registradas 657.355 solicitações de opção pelo Simples Nacional e 1.090.080 solicitações de opção pelo regime regular do IBS e da CBS. Esse segundo grupo reúne empresas que querem recolher os dois novos tributos sobre o consumo fora da guia única do Simples, o DAS.',
        'Dos 657.355 pedidos do Simples, 376.551 foram deferidos e 280.804 foram indeferidos. Na conta do portal, isso dá cerca de 57 pedidos aprovados a cada 100 e 43 negados a cada 100 (376.551 dividido por 657.355 é igual a 0,573, e 280.804 dividido por 657.355 é igual a 0,427). A Receita não detalha, na nota, os motivos de cada indeferimento.',
        'O prazo para formalizar a opção pelo Simples Nacional terminou em 15/10/2026, e os contribuintes tiveram até 30/10/2026 para regularizar as pendências que impediam o deferimento. Os números da nota, portanto, mostram o resultado dessa rodada.',
      ],
    },
    {
      heading: 'Até quando é possível cancelar a opção',
      image: {
        src: '/images/news/receita-657-mil-pedidos-simples-nacional-1-milhao-ibs-cbs-cancelamento-ate-20-de-dezembro-detalhe.jpg',
        alt: 'Detalhe do documento com os números das opções para 2027 e o calendário de dezembro ao lado.',
        caption: 'Os números são da atualização da Receita Federal de 18/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O período para cancelar as opções começou em 3/11/2026 e permanece aberto até 20/12/2026. Contando de 21/11 até 20/12, restam 29 dias para a empresa rever a decisão. Até a nota de 18/11, foram registrados 399 cancelamentos da opção pelo Simples Nacional e 30.370 cancelamentos da opção pelo regime regular de IBS e CBS.',
        'Em proporção, o cancelamento é raro no Simples: 399 em 657.355 pedidos é cerca de 0,06%. No regime regular, 30.370 em 1.090.080 pedidos é cerca de 2,8%. São contas do portal sobre os números da Receita, que ainda podem mudar até o fim do prazo.',
        'A decisão entre ficar no DAS ou recolher IBS e CBS pelo regime regular depende do perfil de clientes e de fornecedores de cada empresa, e a escolha é facultativa. Quem quer revisar o que pediu deve consultar a situação da empresa nos canais oficiais da Receita Federal antes de 20/12.',
      ],
      table: {
        caption: 'Números da Receita Federal sobre as opções para 2027',
        columns: ['Indicador', 'Quantidade'],
        rows: [
          ['Pedidos pelo Simples Nacional', '657.355'],
          ['Pedidos do Simples deferidos', '376.551'],
          ['Pedidos do Simples indeferidos', '280.804'],
          ['Pedidos pelo regime regular de IBS e CBS', '1.090.080'],
          ['Cancelamentos da opção pelo Simples', '399'],
          ['Cancelamentos da opção pelo regime regular', '30.370'],
        ],
      },
    },
    {
      heading: 'O que isso muda para quem tem empresa',
      paragraphs: [
        'Para a empresa, o ponto prático é conferir se o pedido foi deferido e, se houve indeferimento ou arrependimento, saber que ainda existe a janela de cancelamento até 20/12. As opções passam a valer em 1º de janeiro de 2027, conforme o calendário já divulgado pela Receita Federal.',
        'Quem optou pelo Simples precisa lembrar do limite de receita bruta de R$ 4,8 milhões por ano, o que equivale a uma média de R$ 400 mil por mês (R$ 4.800.000 dividido por 12). A calculadora de Simples Nacional do portal ajuda a estimar a alíquota, e a de Fator R mostra o efeito para serviços.',
        'A nota da Receita não trata de MEI nem de pessoas físicas. O MEI segue calendário próprio, com a opção pelo Simei em janeiro de cada ano.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando posso cancelar a opção pelo Simples ou pelo regime regular?',
      answer:
        'A janela abriu em 3/11/2026 e fica aberta até 20/12/2026, segundo a Receita Federal.',
    },
    {
      question: 'Quantos pedidos de Simples Nacional foram negados?',
      answer:
        'Foram 280.804 indeferidos, de 657.355 pedidos, segundo a atualização da Receita Federal de 18/11/2026.',
    },
  ],
  sources: [
    {
      label:
        'Receita Federal: atualização dos números das opções pelo Simples Nacional e pelo regime regular do IBS e da CBS',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/a-receita-federal-divulga-a-atualizacao-dos-numeros-referentes-as-solicitacoes-de-opcao-pelo-simples-nacional-e-pelo-regime-regular-do-ibs-e-da-cbs',
    },
    {
      label: 'Receita Federal: Simples Nacional 2027, entenda os novos prazos',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/setembro/simples-nacional-2027-entenda-os-novos-prazos-e-faca-sua-escolha-com-consciencia-e-tranquilidade',
    },
  ],
} as const satisfies NewsDocument;
