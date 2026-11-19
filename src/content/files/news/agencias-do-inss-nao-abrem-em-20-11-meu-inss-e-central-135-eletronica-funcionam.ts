import type { NewsDocument } from '../../types';

export const newsInssAgenciasFechadas20Novembro2026 = {
  kind: 'news',
  slug: 'agencias-do-inss-nao-abrem-em-20-11-meu-inss-e-central-135-eletronica-funcionam',
  title:
    'Agências do INSS não abrem em 20/11; Meu INSS e Central 135 eletrônica seguem no ar',
  description:
    'Com o feriado da Consciência Negra em 20/11, as agências da Previdência ficam fechadas e voltam em 23/11. Veja o que dá para resolver pelo Meu INSS e pelo 135.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/agencias-do-inss-nao-abrem-em-20-11-meu-inss-e-central-135-eletronica-funcionam.jpg',
    alt: 'Quadro do feriado de 20/11 com agências do INSS fechadas, calendário de novembro com o dia 20 marcado, selo de fechado e celular com o Meu INSS.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-19',
  updatedAt: '2026-11-19',
  tags: ['inss', 'feriado', 'meu-inss', 'central-135', 'beneficios'],
  featuredCalculators: ['inss'],
  highlights: [
    {
      value: '20/11',
      label: 'Agências fechadas',
      note: 'Feriado nacional do Dia da Consciência Negra, em uma sexta-feira.',
    },
    {
      value: '24 horas',
      label: 'Meu INSS no ar',
      note: 'O aplicativo funciona todos os dias, inclusive no feriado.',
    },
    {
      value: '23/11',
      label: 'Volta do atendimento',
      note: 'Agências e atendimento humano da Central 135 retomam na segunda-feira.',
    },
  ],
  sections: [
    {
      heading: 'As agências da Previdência ficam fechadas em 20/11',
      paragraphs: [
        'O INSS avisou em 18/11 que as Agências da Previdência Social (APS) de todo o país não abrem na sexta-feira, 20/11, por causa do feriado nacional do Dia Nacional de Zumbi e da Consciência Negra.',
        'O atendimento presencial só volta na segunda-feira, 23/11. Quem tinha pensado em aproveitar a sexta para ir a uma agência precisa deixar para a semana seguinte ou usar os canais digitais.',
        'O mesmo vale para o atendimento humano da Central 135, que fica suspenso durante o feriado. O atendimento eletrônico do 135 segue normal, e o atendimento humano retoma na segunda-feira, das 7h às 22h.',
      ],
    },
    {
      heading: 'O que dá para resolver pelo Meu INSS no feriado',
      image: {
        src: '/images/news/agencias-do-inss-nao-abrem-em-20-11-meu-inss-e-central-135-eletronica-funcionam-detalhe.jpg',
        alt: 'Detalhe da ilustração: quadro com agências fechadas em 20/11, Meu INSS 24 horas, Central 135 só eletrônica e volta do atendimento em 23/11.',
        caption: 'Resumo do atendimento do INSS no feriado de 20/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O aplicativo e o site Meu INSS funcionam 24 horas por dia, todos os dias da semana, inclusive no feriado. É por ali que o segurado consulta o extrato de pagamento, acompanha pedidos e emite documentos, sem depender de agência.',
        'Quem precisa do extrato do benefício, por exemplo, pode baixar o documento no Meu INSS e conferir o valor líquido, os descontos e a data de pagamento. Para entender como o desconto da contribuição é calculado, vale usar a calculadora do INSS.',
        'O texto do aviso do INSS não trata de perícias, de atendimentos já agendados nem de prazos. Por isso, quem tem horário marcado para 20/11 deve conferir o status no Meu INSS ou no 135 antes de sair de casa, em vez de presumir que o agendamento foi mantido.',
      ],
      table: {
        caption: 'Atendimento do INSS no feriado de 20/11',
        columns: ['Canal', 'Em 20/11', 'Volta ao normal'],
        rows: [
          ['Agências da Previdência', 'Fechadas', '23/11'],
          [
            'Central 135, atendimento humano',
            'Suspenso',
            '23/11, das 7h às 22h',
          ],
          ['Central 135, atendimento eletrônico', 'Normal', 'Sem interrupção'],
          ['Meu INSS (app e site)', 'No ar, 24 horas', 'Sem interrupção'],
        ],
      },
    },
    {
      heading: 'Como se organizar para a semana seguinte',
      paragraphs: [
        'Com a agência fechada na sexta, a procura por atendimento presencial tende a se concentrar em 23/11. Se o pedido puder ser feito pelo Meu INSS, a recomendação é resolver antes, e não esperar a segunda-feira.',
        'O feriado também afeta os bancos, que fecham em 20/11, mas isso não muda a data de pagamento de benefícios do INSS, que segue o calendário oficial. A folha de novembro tem datas próprias, já publicadas pelo portal.',
        'Cuidado com golpes em dias de atendimento reduzido. O INSS não pede senha nem dados pessoais por telefone ou mensagem de terceiros, e a consulta deve ser feita apenas no aplicativo oficial ou no número 135.',
      ],
    },
  ],
  faq: [
    {
      question: 'As agências do INSS abrem em 20/11?',
      answer:
        'Não. As Agências da Previdência Social ficam fechadas em todo o país em 20/11, feriado do Dia Nacional de Zumbi e da Consciência Negra, e voltam em 23/11.',
    },
    {
      question: 'O Meu INSS funciona no feriado?',
      answer:
        'Sim. O aplicativo e o site funcionam 24 horas por dia, todos os dias, inclusive em 20/11.',
    },
    {
      question: 'Posso ligar para o 135 em 20/11?',
      answer:
        'Só no atendimento eletrônico. O atendimento humano fica suspenso no feriado e retoma em 23/11, das 7h às 22h.',
    },
  ],
  sources: [
    {
      label:
        'INSS: Agências da Previdência Social não abrem no feriado de sexta-feira (20/11)',
      url: 'https://www.gov.br/inss/pt-br/assuntos/noticias/agencias-da-previdencia-social-nao-abrem-no-feriado-de-sexta-feira-20-11',
    },
    {
      label: 'Meu INSS: canais de atendimento do INSS',
      url: 'https://meu.inss.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
