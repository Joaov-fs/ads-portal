import type { NewsDocument } from '../../types';

export const newsFreeFlowPedagioQuiteAte16Novembro = {
  kind: 'news',
  slug: 'free-flow-pedagio-quite-ate-16-11-sem-multa-autuacao-comeca-em-17-11',
  title:
    'Free flow: quite o pedágio em atraso até 16/11 para evitar multa; autuação começa em 17/11',
  description:
    'Motoristas com pedágio free flow pendente têm até 16/11 para pagar sem multa. A partir de 17/11, tarifa não paga gera autuação. Veja como consultar no app CNH do Brasil.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/free-flow-pedagio-quite-ate-16-11-sem-multa-autuacao-comeca-em-17-11.jpg',
    alt: 'Documento de pedágio pendente, calendário de novembro com os dias 16 e 17 marcados e carimbo de prazo sem multa.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-14',
  updatedAt: '2026-11-14',
  tags: ['free-flow', 'pedagio', 'contran', 'transito', 'multa'],
  featuredCalculators: ['contador-de-dias'],
  highlights: [
    {
      value: '16/11',
      label: 'Último dia sem multa',
      note: 'Prazo para quitar tarifas em atraso do free flow.',
    },
    {
      value: '17/11',
      label: 'Começa a autuação',
      note: 'Tarifa não paga no prazo pode gerar infração.',
    },
    {
      value: 'CNH do Brasil',
      label: 'Onde consultar',
      note: 'O app mostra as passagens registradas no free flow.',
    },
  ],
  sections: [
    {
      heading: 'Qual é o prazo para pagar o free flow sem multa',
      paragraphs: [
        'O governo federal começou a enviar notificações a motoristas com pendências de pagamento no pedágio eletrônico free flow, o sistema sem cancelas em que pórticos com sensores registram a passagem do veículo. Segundo o Ministério dos Transportes, as mensagens são enviadas por WhatsApp para os celulares de usuários cadastrados.',
        'O prazo para quitar as tarifas em atraso sem multa vai até 16/11/2026. As regras são do Conselho Nacional de Trânsito (Contran), que suspendeu temporariamente as autuações para dar tempo de o motorista regularizar a situação. A partir de 17/11, tarifa não paga no prazo gera autuação.',
        'Como 16/11 é segunda-feira, quem ainda não olhou a situação do veículo tem pouco tempo. Quem recebeu a mensagem deve conferir se ela corresponde a passagens reais antes de pagar, e fazer a consulta pelo canal oficial indicado abaixo.',
      ],
    },
    {
      heading: 'Como consultar as passagens e pagar',
      image: {
        src: '/images/news/free-flow-pedagio-quite-ate-16-11-sem-multa-autuacao-comeca-em-17-11-detalhe.jpg',
        alt: 'Detalhe do documento com passagem free flow, prazo até 16/11, autuação desde 17/11 e consulta pelo app CNH do Brasil.',
        caption: 'Prazos e canal de consulta em um só lugar.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A consulta é feita pelo aplicativo CNH do Brasil. Nele aparecem as passagens registradas em sistemas free flow, com a data, a concessionária responsável, a situação da tarifa e o canal de pagamento.',
        'O pagamento é feito diretamente pelo meio indicado pela concessionária, conforme as informações do aplicativo. Por isso, o caminho mais seguro é partir do app e não de links recebidos por mensagem: golpistas costumam aproveitar prazos como esse para enviar cobranças falsas.',
      ],
      table: {
        caption: 'Free flow: datas e o que muda',
        columns: ['Data', 'O que vale'],
        rows: [
          ['Até 16/11/2026', 'Quitação das tarifas em atraso sem multa'],
          ['17/11/2026', 'Início da autuação para tarifas não pagas no prazo'],
          ['Consulta', 'Aplicativo CNH do Brasil'],
        ],
      },
    },
    {
      heading: 'Passagens antigas e multa já paga',
      paragraphs: [
        'Para passagens anteriores ao período definido pelo Contran, pagar a tarifa até 16/11 cancela o processo de infração e seus efeitos, nas condições da regulamentação.',
        'Quem já pagou multa por inadimplência pode pedir o ressarcimento ao órgão autuador, desde que quite a tarifa dentro do prazo. Segundo o ministério, a multa deve ser ressarcida, conforme o Código de Trânsito Brasileiro.',
        'A matéria oficial não informa os valores das tarifas, o número de notificações enviadas nem a lista de concessionárias. Esses dados aparecem no app para cada veículo.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando posso pagar o free flow sem multa?',
      answer:
        'Até 16/11/2026. A partir de 17/11, tarifas não pagas no prazo geram autuação, segundo o Ministério dos Transportes.',
    },
    {
      question: 'Onde vejo se tenho pedágio free flow pendente?',
      answer:
        'No aplicativo CNH do Brasil, que mostra as passagens registradas, a concessionária, a situação da tarifa e o canal de pagamento.',
    },
    {
      question: 'Já fui multado. Posso ter o dinheiro de volta?',
      answer:
        'Quem pagou multa por inadimplência pode pedir ressarcimento ao órgão autuador, desde que quite a tarifa no prazo, segundo o ministério.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Free flow, governo envia notificações sobre débitos pendentes',
      url: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-11/free-flow-governo-envia-notificacoes-sobre-debitos-pendentes',
    },
    {
      label: 'Ministério dos Transportes',
      url: 'https://www.gov.br/transportes/pt-br',
    },
  ],
} as const satisfies NewsDocument;
