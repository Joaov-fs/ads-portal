import type { GuideDocument } from '../../types';

export const guideComoConsultarEMelhorarOScoreDeCredito = {
  kind: 'guide',
  slug: 'como-consultar-e-melhorar-o-score-de-credito',
  title: 'Como consultar e melhorar o score de crédito',
  description:
    'O que é o score, onde ver o seu de graça, o que faz a pontuação subir ou cair e como o Cadastro Positivo entra na história.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['score', 'credito', 'cadastro-positivo', 'serasa'],
  featuredCalculators: ['simulador-de-emprestimo', 'juros-compostos'],
  highlights: [
    {
      value: '0 a 1.000',
      label: 'Faixa do score',
      note: 'Quanto maior, melhor a avaliação.',
    },
    {
      value: 'Automático',
      label: 'Cadastro Positivo',
      note: 'Você pode pedir a saída.',
    },
    {
      value: 'Grátis',
      label: 'Consulta',
      note: 'Nos birôs de crédito.',
    },
  ],
  sections: [
    {
      heading: 'O que é o score',
      paragraphs: [
        'O score é uma pontuação, em geral de 0 a 1.000, que mostra a chance de uma pessoa pagar as contas em dia. Bancos e lojas usam a nota, entre outros fatores, para aprovar crédito e definir os juros.',
      ],
      table: {
        caption: 'Faixas comuns do score',
        columns: ['Pontuação', 'Leitura'],
        rows: [
          ['0 a 300', 'Baixa'],
          ['301 a 500', 'Regular'],
          ['501 a 700', 'Boa'],
          ['701 a 1.000', 'Excelente'],
        ],
      },
    },
    {
      heading: 'Passo 1: consulte',
      paragraphs: [
        'Entre nos aplicativos ou sites de Serasa, Boa Vista ou SPC e consulte o score com seu CPF. Cada birô tem seu modelo, então as notas podem ser diferentes.',
      ],
    },
    {
      heading: 'Passo 2: o que ajuda',
      paragraphs: [
        'Pagar contas em dia, manter os dados cadastrais atualizados, usar o crédito com moderação e não pedir vários empréstimos em pouco tempo costuma melhorar a nota. Ela sobe devagar, e não há atalho legítimo.',
      ],
    },
    {
      heading: 'Cadastro Positivo',
      paragraphs: [
        'Desde 2019, o histórico de pagamentos entra automaticamente no Cadastro Positivo. Você pode pedir a exclusão, mas isso tira informações que ajudam a provar que você paga em dia.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem paga conta atrasada tem score baixo?',
      answer:
        'O atraso pesa na nota, e a negativação pesa mais. Regularizar as dívidas ajuda a recuperar a pontuação.',
    },
    {
      question: 'Consultar meu score reduz a nota?',
      answer: 'Não. Consultar o seu próprio score não afeta a pontuação.',
    },
  ],
  sources: [
    {
      label: 'Lei 12.414/2011 — Lei do Cadastro Positivo',
    },
    {
      label: 'Lei Complementar 166/2019',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
