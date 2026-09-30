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
    },
  ],
  resultLabel: 'Valor estimado das férias',
  resultPlaceholder: 'Preencha os campos para calcular.',
  sections: [
    {
      heading: 'Como as férias são estimadas',
      paragraphs: [
        'Uma futura simulação deverá separar remuneração, adicional constitucional e descontos aplicáveis.',
        'A estimativa é bruta e não considera descontos, abono pecuniário ou médias de variáveis.',
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
        'Não. O resultado é bruto e descontos aplicáveis dependem da situação de cada trabalhador.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies CalculatorDocument;
