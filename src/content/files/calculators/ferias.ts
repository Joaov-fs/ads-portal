import type { CalculatorDocument } from '../../types';

export const feriasCalculator = {
  kind: 'calculator',
  calculatorId: 'ferias',
  slug: 'ferias',
  title: 'Férias',
  description:
    'Estime férias brutas com adicional de um terço a partir do salário e dos dias de descanso.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-13',
  updatedAt: '2026-09-29',
  tags: ['ferias', 'salario', 'trabalho', 'direitos'],
  fields: [
    {
      name: 'salary',
      label: 'Salário bruto',
      placeholder: 'R$ 3.500,00',
      type: 'money',
    },
    {
      name: 'days',
      label: 'Dias de férias',
      placeholder: '30',
      type: 'number',
      hint: 'Dias que serão gozados, de 1 a 30. Em férias fracionadas, informe cada período separadamente.',
    },
    {
      name: 'sellDays',
      label: 'Dias vendidos (abono pecuniário)',
      placeholder: '0',
      type: 'number',
      hint: 'De 0 a 10. Os dias gozados e os vendidos somam no máximo 30. Se não vender, informe 0.',
    },
    {
      name: 'dependents',
      label: 'Dependentes para o IRRF',
      placeholder: '0',
      type: 'number',
      hint: 'Cada dependente reduz a base do imposto em R$ 189,59.',
    },
  ],
  resultLabel: 'Valor estimado das férias',
  resultPlaceholder: 'Preencha os campos para calcular.',
  sections: [
    {
      heading: 'Como as férias são estimadas',
      paragraphs: [
        'As férias pagam o salário proporcional aos dias gozados e mais um terço constitucional sobre esse valor. Com 30 dias, o total é o salário multiplicado por 4/3. Os dias vendidos também recebem o terço.',
        'O INSS e o IRRF incidem sobre as férias gozadas; o abono pecuniário (venda de até 10 dias) não tem desconto. Médias de horas extras e adicionais não entram.',
      ],
    },
    {
      heading: 'Antes de calcular',
      paragraphs: [
        'Confira o salário bruto e o número de dias que serão efetivamente gozados. A venda de dias, médias de adicionais e descontos exigem conferência separada.',
      ],
    },
  ],
  faq: [
    {
      question: 'O resultado considera descontos?',
      answer:
        'Sim: o demonstrativo mostra INSS e IRRF sobre as férias gozadas e o líquido. No contracheque os valores se somam ao salário do mês e podem variar um pouco.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies CalculatorDocument;
