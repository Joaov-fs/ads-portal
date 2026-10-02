import type { GuideDocument } from '../../types';

export const guideJurosCompostosNaPratica = {
  kind: 'guide',
  slug: 'juros-compostos-na-pratica',
  title:
    'Juros compostos na prática: como seu dinheiro cresce (ou a dívida pesa)',
  description:
    'Entenda a fórmula, veja a diferença para os juros simples e use exemplos em reais para planejar investimentos e dívidas.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: [
    'juros-compostos',
    'investimentos',
    'dividas',
    'matematica-financeira',
  ],
  featuredCalculators: [
    'juros-compostos',
    'juros-simples',
    'conversao-taxa-mensal-anual',
  ],
  highlights: [
    {
      value: 'R$ 1.126,83',
      label: 'R$ 1.000 a 1% ao mês por 12 meses',
      note: 'Juros sobre juros.',
    },
    {
      value: 'R$ 1.816,70',
      label: 'Os mesmos R$ 1.000 em 60 meses',
      note: 'O crescimento acelera com o tempo.',
    },
    {
      value: '12,68%',
      label: 'Taxa anual de 1% ao mês',
      note: 'E não 12%.',
    },
  ],
  sections: [
    {
      heading: 'A fórmula',
      paragraphs: [
        'O montante final é o capital vezes (1 + taxa) elevado ao número de períodos. A taxa e o prazo precisam estar na mesma unidade: taxa mensal para meses, anual para anos.',
        'Nos juros compostos, cada mês rende sobre o saldo que já inclui os juros anteriores. Nos juros simples, o rendimento é sempre calculado sobre o capital inicial.',
      ],
    },
    {
      heading: 'Exemplo em reais',
      paragraphs: [
        'R$ 1.000 a 1% ao mês rendem R$ 126,83 em 12 meses com juros compostos, contra R$ 120,00 nos juros simples. Em 60 meses, o montante chega a R$ 1.816,70, e a diferença cresce.',
      ],
      table: {
        caption: 'R$ 1.000 a 1% ao mês',
        columns: ['Prazo', 'Juros simples', 'Juros compostos'],
        rows: [
          ['12 meses', 'R$ 1.120,00', 'R$ 1.126,83'],
          ['60 meses', 'R$ 1.600,00', 'R$ 1.816,70'],
        ],
      },
    },
    {
      heading: 'O lado das dívidas',
      paragraphs: [
        'A mesma lógica vale para quem deve. Uma dívida com juros altos cresce rápido quando fica sem pagamento. Por isso, nas prioridades, quitar o crédito mais caro rende mais do que investir.',
      ],
    },
    {
      heading: 'Cuidado com a taxa',
      paragraphs: [
        'Taxas mensais e anuais não se multiplicam por 12. Converta com a fórmula de equivalência e compare sempre a taxa efetiva. Verifique também o CET (custo efetivo total) dos contratos.',
      ],
    },
  ],
  faq: [
    {
      question: 'Juros compostos são sempre melhores?',
      answer:
        'Para investir, sim, porque o rendimento rende. Para dívidas, são piores, pelo mesmo motivo.',
    },
    {
      question: 'Como converter uma taxa mensal em anual?',
      answer:
        'Eleve (1 + taxa mensal) a 12 e subtraia 1. Para 1% ao mês, o resultado é 12,68% ao ano.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Banco Central — Cidadania Financeira',
    },
  ],
} as const satisfies GuideDocument;
