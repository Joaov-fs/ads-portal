import type { GuideDocument } from '../../types';

export const reservaEmergenciaGuide = {
  kind: 'guide',
  slug: 'como-montar-reserva-de-emergencia',
  title: 'Como montar uma reserva de emergência',
  description:
    'Organize uma proteção financeira possível, líquida e adequada à sua rotina.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-22',
  tags: ['reserva', 'planejamento', 'investimentos', 'financas'],
  sections: [
    {
      heading: 'Defina um objetivo realista',
      paragraphs: [
        'A reserva existe para absorver imprevistos sem transformar uma urgência em dívida. Comece mapeando despesas essenciais e a estabilidade da sua renda.',
        'O valor ideal varia. Uma meta menor e consistente costuma ser mais útil do que uma meta perfeita que nunca sai do papel.',
      ],
    },
    {
      heading: 'Priorize acesso e segurança',
      paragraphs: [
        'O dinheiro precisa estar disponível quando necessário. Avalie liquidez, risco e regras de resgate antes da rentabilidade.',
      ],
    },
    {
      heading: 'Exemplo prático',
      paragraphs: [
        'Se as despesas essenciais somam R$ 2.000 por mês, uma primeira meta possível é guardar R$ 2.000. Depois, a pessoa pode avançar gradualmente para três ou seis meses, conforme a estabilidade da renda.',
        'O exemplo não define uma meta universal: ele mostra como transformar despesas mensais em etapas menores e mensuráveis.',
      ],
    },
    {
      heading: 'Coloque o plano em prática',
      paragraphs: [
        'Defina um valor mensal sustentável, automatize a separação quando possível e reveja a meta sempre que sua renda ou suas despesas essenciais mudarem.',
        'Use a calculadora de juros compostos para visualizar o efeito do tempo e compare alternativas sem abrir mão de liquidez e segurança.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto devo guardar?',
      answer:
        'A meta depende das despesas essenciais e da previsibilidade da renda. É possível começar com um mês e ampliar gradualmente.',
    },
    {
      question: 'Posso usar a reserva para compras planejadas?',
      answer:
        'O ideal é separar objetivos previsíveis da reserva destinada a imprevistos.',
    },
  ],
  sources: [
    {
      label: 'Portal do Investidor',
      url: 'https://www.gov.br/investidor/',
    },
  ],
} as const satisfies GuideDocument;
