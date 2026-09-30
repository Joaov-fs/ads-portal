import type { CalculatorDocument } from '../../types';

export const jurosCompostosCalculator = {
  kind: 'calculator',
  calculatorId: 'juros-compostos',
  slug: 'juros-compostos',
  title: 'Juros compostos',
  description:
    'Projete a evolução de um investimento com taxa e prazo na mesma unidade.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-12',
  updatedAt: '2026-09-29',
  tags: ['juros', 'investimentos', 'planejamento', 'financas'],
  fields: [
    {
      name: 'amount',
      label: 'Valor inicial',
      placeholder: 'R$ 1.000,00',
      type: 'money',
    },
    {
      name: 'rate',
      label: 'Taxa mensal',
      placeholder: '1,00%',
      type: 'percentage',
    },
    {
      name: 'months',
      label: 'Período em meses',
      placeholder: '12',
      type: 'number',
    },
  ],
  resultLabel: 'Resultado estimado',
  resultPlaceholder: 'Preencha os campos para calcular.',
  sections: [
    {
      heading: 'Como funcionam os juros compostos',
      paragraphs: [
        'Nos juros compostos, cada período considera o valor acumulado anteriormente. Por isso o crescimento não é linear.',
        'Mantenha a taxa e o período na mesma unidade. O resultado é uma projeção e não considera impostos, aportes ou oscilações.',
      ],
    },
    {
      heading: 'Exemplo de leitura',
      paragraphs: [
        'Ao informar R$ 1.000, taxa de 1% ao mês e prazo de 12 meses, a ferramenta capitaliza o saldo mês a mês. O resultado mostra o montante bruto, não apenas os juros ganhos.',
        'Para comparar investimentos reais, desconte impostos, tarifas e inflação e confirme se a taxa informada é mensal ou anual.',
      ],
    },
  ],
  faq: [
    {
      question: 'O resultado considera impostos?',
      answer:
        'Não. A projeção mostra o crescimento bruto; impostos e custos podem reduzir o rendimento líquido.',
    },
    {
      question: 'A taxa deve usar o mesmo período do prazo?',
      answer:
        'Sim. Em um cálculo real, taxa e prazo precisam usar unidades compatíveis.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil — Cidadania Financeira',
      url: 'https://www.bcb.gov.br/cidadaniafinanceira',
    },
  ],
} as const satisfies CalculatorDocument;
