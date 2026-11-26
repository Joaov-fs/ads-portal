import type { NewsDocument } from '../../types';

export const newsMeiPerdaoAutomaticoLc238 = {
  kind: 'news',
  slug: 'mei-perdao-automatico-lc-238-divida-ate-13-10-vale-em-1-1-2027',
  title:
    'Perdão das dívidas do MEI é automático: vale para o INSS vencido até 13/10 e começa em 1º/1/2027',
  description:
    'Receita informa que o MEI não precisa pedir o perdão da LC 238/2026. Veja o que é cancelado, a condição de pagar o DAS de jan a jun/2027 e o que fica de fora.',
  category: 'financas',
  coverImage: {
    src: '/images/news/mei-perdao-automatico-lc-238-divida-ate-13-10-vale-em-1-1-2027.jpg',
    alt: 'Documento com as datas do perdão do MEI, guia do DAS-MEI e etiqueta com a data 01/01/2027.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-17',
  updatedAt: '2026-11-17',
  tags: ['mei', 'das-mei', 'divida', 'receita-federal', 'inss', 'remissao'],
  featuredCalculators: [
    'das-mei-atraso',
    'das-limite-mei',
    'excesso-limite-mei',
  ],
  highlights: [
    {
      value: '13/10/2026',
      label: 'Vencimento-limite das dívidas',
      note: 'INSS do DAS-MEI vencido até essa data.',
    },
    {
      value: '01/01/2027',
      label: 'Quando o perdão vale',
      note: 'Até 31/12/2026 a cobrança segue normal.',
    },
    {
      value: 'Jan a jun/27',
      label: 'DAS em dia para manter o perdão',
      note: 'Vale para quem continuar como MEI.',
    },
  ],
  sections: [
    {
      heading: 'O que a Receita informou sobre o perdão do MEI',
      paragraphs: [
        'A Receita Federal divulgou em 16/11/2026 que o perdão das dívidas do MEI será aplicado automaticamente. O microempreendedor não precisa fazer nenhum pedido, mesmo que a dívida esteja parcelada ou em cobrança. A base é a Lei Complementar 238, de 21 de outubro de 2026, que faz parte do pacote Prospera MEI.',
        'Esta matéria traz um fato novo em relação ao que o PortalFina publicou sobre o pacote: agora há a regra prática de como o cancelamento acontece, com datas e condições. Segundo a Procuradoria-Geral da Fazenda Nacional (PGFN), a regulamentação saiu na Portaria Conjunta RFB/PGFN 740/2026.',
        'O perdão vale para a parte do INSS do DAS-MEI com vencimento até 13/10/2026. Alcança o valor principal, os juros, a multa e o encargo legal, tanto da dívida ainda não inscrita quanto da que já está na Dívida Ativa da União. Em regra, isso corresponde aos meses até agosto de 2026.',
      ],
    },
    {
      heading: 'Quando o perdão vale e o que o MEI precisa fazer',
      image: {
        src: '/images/news/mei-perdao-automatico-lc-238-divida-ate-13-10-vale-em-1-1-2027-detalhe.jpg',
        alt: 'Detalhe do documento com as datas do perdão do MEI e a indicação de que não é preciso fazer pedido.',
        caption:
          'As datas do perdão: dívida até 13/10/2026 e efeito em 1º/1/2027.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Até 31/12/2026, as dívidas e os parcelamentos continuam valendo e podem ser cobrados. As dívidas perdoadas serão extintas em 1º de janeiro de 2027, quando o processamento automático começa.',
        'Para manter o perdão, quem continuar na condição de MEI deve pagar em dia o DAS de janeiro a junho de 2027, seis guias seguidas. Se alguma ficar sem pagamento, o perdão é cancelado e a dívida volta a ser cobrada. A condição não vale para quem já deu baixa no MEI ou deixou de ser MEI.',
        'Exemplo de conta: um MEI que deixou de pagar o INSS de janeiro a agosto de 2026 acumula 8 guias. Com a parte do INSS em R$ 81,05 por mês em 2026, o principal é de R$ 648,40 (8 x R$ 81,05), sem contar multa e juros. Esse valor, com os acréscimos, é o que a lei manda cancelar, desde que o vencimento seja até 13/10/2026 e o DAS de 2027 seja pago em dia.',
      ],
      table: {
        caption: 'Calendário do perdão do MEI',
        columns: ['Etapa', 'Data'],
        rows: [
          ['Vencimento-limite da dívida de INSS', 'até 13/10/2026'],
          ['Cobrança e parcelas continuam válidas', 'até 31/12/2026'],
          ['Dívidas perdoadas são extintas', '1º/1/2027'],
          ['DAS em dia para manter o perdão', 'jan a jun/2027'],
        ],
      },
    },
    {
      heading: 'Parcelamentos, ICMS, ISS e ações na Justiça',
      paragraphs: [
        'Parcelamento que tenha só essas dívidas é encerrado automaticamente. Se o parcelamento incluir também ICMS ou ISS, a Receita recalcula o saldo, sem pedido do contribuinte. Valores já pagos não são devolvidos.',
        'O ICMS e o ISS cobrados no mesmo DAS não são perdoados e continuam devidos ao estado e ao município. Quem discute essas dívidas na Justiça precisa desistir da ação e apresentar requerimento para o cancelamento.',
        'A entrega da declaração anual (DASN-Simei) continua obrigatória, inclusive a de anos anteriores. Sobre a aposentadoria, a Receita informa que enviará ao INSS a lista das dívidas perdoadas para análise da contagem como tempo de contribuição. Segundo a PGFN, os efeitos sobre tempo de contribuição e benefícios ainda serão definidos pelo INSS.',
      ],
    },
    {
      heading: 'Como consultar sua situação',
      paragraphs: [
        'A situação fiscal pode ser vista no Portal e-CAC da Receita. Dívidas inscritas na Dívida Ativa da União aparecem no Portal Regularize, da PGFN, na opção de consulta de Dívida Ativa.',
        'Quem ainda deve DAS de 2026 com vencimento depois de 13/10/2026 não é alcançado pelo perdão. Nesse caso, a guia atrasada pode ser calculada na calculadora de DAS em atraso do portal.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso pedir o perdão da dívida do MEI?',
      answer:
        'Não. A Receita informa que o cancelamento é automático, sem pedido. Quem discute a dívida na Justiça precisa desistir da ação e pedir o cancelamento.',
    },
    {
      question: 'O que acontece se eu atrasar o DAS em 2027?',
      answer:
        'Para manter o perdão, quem continuar como MEI deve pagar em dia o DAS de janeiro a junho de 2027. Se não pagar, o perdão é cancelado e a dívida volta a ser cobrada.',
    },
    {
      question: 'O perdão inclui ICMS e ISS?',
      answer:
        'Não. Só a contribuição previdenciária (INSS) do DAS-MEI com vencimento até 13/10/2026. ICMS e ISS continuam devidos ao estado e ao município.',
    },
  ],
  sources: [
    {
      label:
        'Receita Federal: perdão das dívidas do MEI será automático, de 16/11/2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/perdao-das-dividas-do-mei-sera-automatico-nao-e-preciso-fazer-pedido',
    },
    {
      label: 'PGFN: perguntas frequentes sobre o perdão do MEI',
      url: 'https://www.gov.br/pgfn/pt-br/servicos/perguntas-frequentes/perguntas-frequentes-perdao-do-mei',
    },
    {
      label: 'Agência Gov: perdão das dívidas do MEI será automático',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/perdao-das-dividas-do-mei-sera-automatico-nao-e-preciso-fazer-pedido',
    },
  ],
} as const satisfies NewsDocument;
