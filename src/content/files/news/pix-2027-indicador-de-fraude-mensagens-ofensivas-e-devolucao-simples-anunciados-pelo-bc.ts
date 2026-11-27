import type { NewsDocument } from '../../types';

export const newsPix2027AgendaFraudeMensagens = {
  kind: 'news',
  slug: 'pix-2027-indicador-de-fraude-mensagens-ofensivas-e-devolucao-simples-anunciados-pelo-bc',
  title:
    'Pix em 2027: BC prevê indicador de fraude em tempo real, mensagens mascaradas e devolução mais simples',
  description:
    'Fórum Pix de 26/11 apresentou a agenda de 2027: indicador de fraude por transação, mensagens ofensivas mascaradas e devolução de Pix errado. Sem datas.',
  category: 'financas',
  coverImage: {
    src: '/images/news/pix-2027-indicador-de-fraude-mensagens-ofensivas-e-devolucao-simples-anunciados-pelo-bc.jpg',
    alt: 'Documento com a agenda do Pix em 2027, calendário de 2027 e celular com a mensagem de Pix mais seguro.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-26',
  updatedAt: '2026-11-26',
  tags: ['pix', 'banco-central', 'fraude', 'golpes', 'seguranca'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '29ª',
      label: 'Plenária do Fórum Pix',
      note: 'Reunião de 26/11 apresentou a agenda de 2027.',
    },
    {
      value: '5',
      label: 'Frentes anunciadas',
      note: 'Fraude, mensagens, Pix Automático, devolução e chaves.',
    },
    {
      value: 'Sem data',
      label: 'Início das novidades',
      note: 'O BC avisa que podem não valer já em janeiro.',
    },
  ],
  sections: [
    {
      heading: 'O que o Banco Central apresentou no Fórum Pix de 26/11',
      paragraphs: [
        'O Banco Central apresentou, na 29ª Reunião Plenária do Fórum Pix, em 26 de novembro de 2026, as prioridades do Pix para 2027. São diretrizes de trabalho, e não regras já aprovadas: o próprio BC informou que as medidas dependem de etapas de implementação e não estarão necessariamente disponíveis no início do ano.',
        'Por isso, esta notícia não traz data de início nem número de resolução para nenhuma das novidades. Quando cada medida for regulamentada, o ato será publicado pelo Banco Central, e aí sim haverá prazo para bancos e usuários.',
        'Entre as entregas de 2026 citadas no balanço estão o MED 2.0 para casos de fraude, a ampliação do Pix Automático para contas-salário, a regulamentação da cobrança híbrida e novos procedimentos de prevenção a fraudes.',
      ],
    },
    {
      heading: 'Fraude em tempo real e bloqueio preventivo',
      image: {
        src: '/images/news/pix-2027-indicador-de-fraude-mensagens-ofensivas-e-devolucao-simples-anunciados-pelo-bc-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com a agenda do Pix em 2027.',
        caption: 'As medidas de 2027 ainda dependem de regulamentação.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A principal novidade para a segurança é um indicador de probabilidade de fraude, calculado em tempo real para cada transação. O resultado seria compartilhado com bancos e instituições de pagamento, que poderiam usá-lo para autorizar ou rejeitar a transferência antes de o dinheiro sair da conta.',
        'O BC também quer definir critérios mínimos para rejeitar transações e bloquear recursos de forma cautelar, ampliar os instrumentos de fiscalização sobre as instituições e atuar de forma mais ativa na gestão das chaves Pix.',
        'Na prática, uma transferência de R$ 3.000 para uma conta com sinais de golpe poderia ser barrada antes da conclusão, em vez de depender da devolução depois. Isso é um exemplo do objetivo declarado, não uma regra em vigor.',
        'Enquanto isso não chega, vale seguir os cuidados do guia sobre como usar o Pix com segurança, como conferir o nome do destinatário e manter o limite noturno baixo.',
      ],
    },
    {
      heading: 'Mensagens ofensivas, devolução de Pix errado e Pix Automático',
      paragraphs: [
        'Uma das prioridades será regulamentar as mensagens enviadas junto às transferências. A proposta inclui campanhas educativas e uma ferramenta para mascarar mensagens inapropriadas nos aplicativos, com a possibilidade de cada usuário decidir se quer usar o mascaramento.',
        'Outro ponto é uma ferramenta para facilitar que o próprio pagador recupere valores enviados por engano. O BC ainda não detalhou como o recurso vai funcionar nem quando estará disponível.',
        'O Pix Automático, usado em mensalidades e assinaturas, também deve ser aprimorado para melhorar o funcionamento e incentivar novos modelos de cobrança. O BC ainda estuda integrar o Pix ao TIPS, sistema do Banco Central Europeu, mas isso é apenas avaliação.',
      ],
      table: {
        caption: 'Agenda do Pix em 2027 (diretrizes, sem data)',
        columns: ['Tema', 'O que o BC pretende'],
        rows: [
          ['Fraude', 'Indicador de probabilidade em tempo real por transação'],
          ['Mensagens', 'Mascarar ofensas, com escolha do usuário'],
          ['Pix enviado por engano', 'Processo de devolução mais simples'],
          ['Pix Automático', 'Aprimorar cobranças recorrentes'],
          ['Integração', 'Estudo com o TIPS, do Banco Central Europeu'],
        ],
      },
    },
  ],
  faq: [
    {
      question: 'Essas mudanças já valem?',
      answer:
        'Não. São diretrizes apresentadas no Fórum Pix de 26/11. O BC avisou que as medidas dependem de implementação e podem não estar prontas no início de 2027.',
    },
    {
      question: 'Vou poder pedir de volta um Pix enviado por engano?',
      answer:
        'O BC quer facilitar a devolução pelo próprio pagador, mas ainda não explicou como o recurso funcionará nem quando estará disponível.',
    },
    {
      question: 'O Pix vai bloquear transferências suspeitas?',
      answer:
        'A ideia é criar um indicador de fraude em tempo real para que bancos possam autorizar ou rejeitar a transação antes do envio. A regra ainda precisa ser regulamentada.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Pix terá novas regras de segurança e melhorias em 2027, 26/11/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/pix-tera-novas-regras-de-seguranca-e-melhorias-em-2027',
    },
    {
      label: 'Banco Central do Brasil: Pix',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix',
    },
  ],
} as const satisfies NewsDocument;
