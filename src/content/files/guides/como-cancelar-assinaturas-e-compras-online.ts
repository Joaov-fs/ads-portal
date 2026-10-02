import type { GuideDocument } from '../../types';

export const guideComoCancelarAssinaturasEComprasOnline = {
  kind: 'guide',
  slug: 'como-cancelar-assinaturas-e-compras-online',
  title: 'Como cancelar assinaturas e se arrepender de uma compra online',
  description:
    'O direito de arrependimento de 7 dias, como cancelar serviços recorrentes e o que fazer quando a empresa não devolve o dinheiro.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['consumidor', 'assinaturas', 'compras-online', 'arrependimento'],
  highlights: [
    {
      value: '7 dias',
      label: 'Direito de arrependimento',
      note: 'Em compras fora da loja, a partir do recebimento.',
    },
    {
      value: 'Sem custo',
      label: 'Devolução',
      note: 'O valor volta integralmente.',
    },
    {
      value: 'Consumidor.gov',
      label: 'Plataforma',
      note: 'Para reclamar de graça.',
    },
  ],
  sections: [
    {
      heading: 'Compras feitas pela internet ou telefone',
      paragraphs: [
        'O Código de Defesa do Consumidor dá 7 dias para desistir de compras feitas fora da loja física, contados do recebimento do produto ou da contratação do serviço. Não precisa justificar. A empresa deve devolver o valor integral, inclusive o frete.',
      ],
    },
    {
      heading: 'Como pedir o cancelamento',
      paragraphs: [
        'Use o canal de atendimento da empresa, guarde o protocolo e peça o cancelamento por escrito. Se foi pelo cartão, avise também o banco para evitar que a cobrança continue.',
      ],
    },
    {
      heading: 'Assinaturas e cobranças recorrentes',
      paragraphs: [
        'Revise o extrato do cartão e da conta e liste as cobranças mensais. Cancele o que não usa, direto no site, no aplicativo ou na loja do celular. Para cobranças que você não reconhece, peça o cancelamento e a devolução ao banco ou ao emissor do cartão.',
      ],
    },
    {
      heading: 'Se a empresa não resolve',
      paragraphs: [
        'Reclame na plataforma consumidor.gov.br, que é gratuita e tem prazo de resposta, ou procure o Procon da sua cidade. Guarde mensagens, comprovantes e prints.',
      ],
    },
  ],
  faq: [
    {
      question: 'Vale para compra na loja?',
      answer:
        'Não. Na loja, a troca depende da política da empresa, salvo defeito, que tem prazos legais.',
    },
    {
      question: 'Posso cancelar serviço de academia ou internet?',
      answer:
        'Sim, seguindo as regras do contrato e da lei. Peça o cancelamento por escrito e guarde o protocolo.',
    },
  ],
  sources: [
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
    {
      label: 'Plataforma consumidor.gov.br',
      url: 'https://www.consumidor.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
