import type { NewsDocument } from '../../types';

export const newsBolsaFamiliaOutubroAntecipado = {
  kind: 'news',
  slug: 'bolsa-familia-outubro-antecipado-21-de-outubro',
  title:
    'Bolsa Família: pagamento de outubro é antecipado para 21/10; confira seu NIS',
  description:
    'Calendário muda: NIS final 2 recebe em 20/10 e os demais finais, em 21/10. Veja a exceção para municípios em emergência e como consultar.',
  category: 'beneficios',
  authorId: 'thales-xavier',
  publishedAt: '2026-10-19',
  updatedAt: '2026-10-19',
  tags: ['bolsa-familia', 'beneficios', 'calendario', 'caixa'],
  coverImage: {
    src: '/images/news/bolsa-familia-outubro-antecipado-21-de-outubro.jpg',
    alt: 'Calendário de outubro com o dia 21 destacado, documento com os finais do NIS e celular com a data da antecipação.',
    credit: 'Ilustração: PortalFina',
  },
  featuredCalculators: ['bolsa-familia'],
  highlights: [
    {
      value: '21/10',
      label: 'NIS finais 3 a 9 e 0',
      note: 'Pagamento unificado em outubro.',
    },
    {
      value: '20/10',
      label: 'NIS final 2',
      note: 'Data mantida para terça-feira.',
    },
    {
      value: '225',
      label: 'Municípios com liberação em 19/10',
      note: 'Exceção para áreas em emergência ou calamidade.',
    },
  ],
  sections: [
    {
      heading: 'Qual data vale para o seu NIS?',
      paragraphs: [
        'Quem aguardava a última semana do mês deve conferir novamente o extrato. O calendário extraordinário substitui a sequência originalmente prevista para outubro. A mudança foi anunciada pelo Ministério do Desenvolvimento e Assistência Social nesta segunda-feira.',
        'O primeiro grupo teve liberação em 19 de outubro. Para os próximos grupos, veja a tabela atualizada.',
      ],
      table: {
        caption:
          'Pagamento do Bolsa Família em outubro de 2026 após a antecipação',
        columns: ['Final do NIS', 'Data de pagamento'],
        rows: [
          ['1', '19/10'],
          ['2', '20/10'],
          ['3, 4, 5, 6, 7, 8, 9 e 0', '21/10'],
        ],
      },
    },
    {
      heading: 'Quem pôde receber no primeiro dia?',
      image: {
        src: '/images/news/bolsa-familia-outubro-antecipado-21-de-outubro-detalhe.jpg',
        alt: 'Detalhe do calendário de outubro com o dia 21 marcado.',
        caption:
          'Confira o final do NIS e a situação do benefício nos canais oficiais.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Há uma exceção para famílias de municípios com emergência ou calamidade pública reconhecida pelo governo federal. Nesses locais, o benefício foi disponibilizado no início do calendário, independentemente do final do NIS.',
        'A relação atualizada pelo MDS reúne 225 municípios. A medida alcança cerca de 733 mil famílias. A lista inclui localidades do Acre, Amazonas, Paraíba, Rio Grande do Norte, Roraima, São Paulo, Sergipe, Piauí e Paraná.',
        'Morar em um desses estados não basta: a exceção depende do município incluído na relação oficial. Consulte a lista do ministério na seção de fontes e confira o extrato.',
      ],
    },
    {
      heading: 'Por que o governo antecipou o calendário?',
      paragraphs: [
        'A justificativa do MDS é permitir que famílias vulneráveis se preparem para possíveis efeitos do El Niño. O ministério cita riscos de seca, enchentes e dificuldades de abastecimento.',
        'O governo também prevê unificação em novembro e dezembro. As datas de outubro não devem ser repetidas automaticamente nos próximos meses: acompanhe os comunicados específicos de cada folha.',
      ],
    },
    {
      heading: 'Como verificar se a parcela está disponível',
      paragraphs: [
        'Consulte a situação, o extrato e o valor nos aplicativos Bolsa Família ou Caixa Tem. Outra opção é o Portal Cidadão da Caixa. Use os canais oficiais para confirmar a liberação individual.',
        'Dúvidas sobre cadastro e regras podem ser esclarecidas pelo Disque Social, no telefone 121. Para pagamentos e saques, o atendimento da Caixa é pelo telefone 111.',
        'A antecipação altera a data, sem representar por si só um pagamento extra. A calculadora do Bolsa Família do PortalFina ajuda a estimar o benefício conforme a composição familiar; a confirmação da parcela continua sendo feita no extrato oficial.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem tem NIS final 0 precisa esperar até 30 de outubro?',
      answer:
        'Não. Com o calendário extraordinário, esse grupo tem pagamento previsto para 21 de outubro.',
    },
    {
      question: 'A antecipação é um benefício extra?',
      answer: 'Não. Trata-se da liberação antecipada da parcela mensal.',
    },
    {
      question: 'Todos os moradores dos estados citados recebem no dia 19?',
      answer:
        'Não. A exceção depende da inclusão do município na lista oficial de emergência ou calamidade e da situação individual do benefício.',
    },
  ],
  sources: [
    {
      label:
        'MDS: pagamentos de outubro e calendário extraordinário, comunicado de 19/10/2026',
      url: 'https://www.gov.br/mds/pt-br/noticias/pagamentos-de-outubro-do-bolsa-familia-comecam-nesta-segunda-feira-19-10-1/',
    },
    {
      label:
        'MDS: relação atualizada de 225 municípios com pagamento unificado',
      url: 'https://www.gov.br/mds/pt-br/noticias/bolsa-familia-calendario-de-outubro-e-unificado-em-194-municipios',
    },
    {
      label:
        'Rádio Gov: Bolsa Família começa a ser pago com calendário unificado',
      url: 'https://radiogov.ebc.com.br/programas/e-noticia/bolsa-familia-comeca-a-ser-pago-nesta-segunda-feira-19-com-calendario-unificado',
    },
  ],
} as const satisfies NewsDocument;
