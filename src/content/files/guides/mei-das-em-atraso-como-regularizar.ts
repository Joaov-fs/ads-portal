import type { GuideDocument } from '../../types';

export const guideMeiDasEmAtrasoComoRegularizar = {
  kind: 'guide',
  slug: 'mei-das-em-atraso-como-regularizar',
  title: 'DAS do MEI em atraso: multa, juros e como regularizar',
  description:
    'Quanto custa pagar o DAS atrasado, como a multa e os juros são calculados e o que fazer para não perder os benefícios do MEI.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['mei', 'das', 'atraso', 'multa'],
  featuredCalculators: ['das-mei-atraso', 'das-limite-mei'],
  highlights: [
    {
      value: '0,33%',
      label: 'Multa por dia de atraso',
      note: 'Limitada a 20% do valor.',
    },
    {
      value: 'Selic + 1%',
      label: 'Juros',
      note: 'Selic acumulada mais 1% no mês do pagamento.',
    },
    {
      value: 'R$ 95,04',
      label: 'DAS de R$ 81,05 pago com 46 dias de atraso',
      note: 'Multa de R$ 12,30 e juros de R$ 1,69.',
    },
  ],
  sections: [
    {
      heading: 'Como a cobrança é feita',
      paragraphs: [
        'O DAS vence todo dia 20. Depois disso incidem multa de 0,33% por dia de atraso, limitada a 20% do valor, e juros pela taxa Selic acumulada, mais 1% no mês do pagamento. A conta cresce a cada dia, então vale pagar o quanto antes.',
      ],
    },
    {
      heading: 'Exemplo em reais',
      paragraphs: [
        'Um DAS de R$ 81,05 pago com 46 dias de atraso tem multa de 15,18% (R$ 12,30) e juros de 2,08% (R$ 1,69). O total é de R$ 95,04, ou seja, R$ 13,99 a mais.',
      ],
      table: {
        caption: 'DAS de R$ 81,05 pago com 46 dias de atraso',
        columns: ['Item', 'Percentual', 'Valor'],
        rows: [
          ['DAS original', '—', 'R$ 81,05'],
          ['Multa (0,33% ao dia)', '15,18%', 'R$ 12,30'],
          ['Juros (Selic + 1%)', '2,08%', 'R$ 1,69'],
          ['Total a pagar', '', 'R$ 95,04'],
        ],
      },
    },
    {
      heading: 'O que acontece se você não paga',
      paragraphs: [
        'Meses sem pagamento não contam para a aposentadoria nem para benefícios como auxílio por incapacidade e salário-maternidade. Dívidas acumuladas podem ser inscritas em dívida ativa e impedem a emissão de certidões. Débitos acumulados podem levar à exclusão do regime.',
      ],
    },
    {
      heading: 'Como regularizar',
      paragraphs: [
        'Gere a guia atualizada pelo aplicativo MEI ou pelo Portal do Simples Nacional e pague em qualquer banco. Se a dívida for alta, é possível pedir parcelamento no mesmo portal. Depois de regularizar, confirme no extrato do DAS que os meses aparecem como pagos.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso pagar o DAS se não faturei?',
      answer:
        'Sim. O DAS é fixo e devido mesmo sem faturamento. Se não pretende mais trabalhar, vale dar baixa no CNPJ.',
    },
    {
      question: 'Posso pagar só o mês atrasado?',
      answer:
        'Sim, cada competência tem uma guia própria. Priorize as mais antigas para não perder tempo de contribuição.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal — Simples Nacional e MEI',
    },
    {
      label: 'Lei Complementar 123/2006',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
