import type { CalculatorDocument } from '../../types';

export const salarioLiquidoCalculator = {
  kind: 'calculator',
  calculatorId: 'salario-liquido',
  slug: 'salario-liquido',
  title: 'Salário líquido',
  description:
    'Estime o salário líquido a partir da remuneração bruta e dos descontos adicionais.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-11',
  updatedAt: '2026-09-29',
  tags: ['salario', 'descontos', 'trabalho', 'planejamento'],
  fields: [
    {
      name: 'salary',
      label: 'Salário bruto',
      placeholder: 'R$ 3.500,00',
      type: 'money',
    },
    {
      name: 'otherDiscounts',
      label: 'Outros descontos',
      placeholder: 'R$ 0,00',
      type: 'money',
      hint: 'Inclua descontos que não fazem parte da estimativa previdenciária.',
    },
  ],
  resultLabel: 'Salário líquido estimado',
  resultPlaceholder: 'Preencha os campos para calcular.',
  sections: [
    {
      heading: 'Como o salário líquido é calculado',
      paragraphs: [
        'O valor líquido resulta da remuneração e dos descontos aplicáveis no período.',
        'A estimativa usa faixas progressivas de referência e não substitui o holerite do empregador.',
      ],
    },
    {
      heading: 'Antes de calcular',
      paragraphs: [
        'Use o salário bruto da competência e some em outros descontos apenas valores que não estejam contemplados pela estimativa de INSS e IRRF.',
        'Depois do resultado, confira a memória de cálculo e compare cada parcela com o holerite.',
      ],
    },
  ],
  faq: [
    {
      question: 'Este resultado substitui o holerite?',
      answer:
        'Não. A simulação é uma estimativa e o holerite emitido pelo empregador informa os valores oficiais.',
    },
  ],
  sources: [
    {
      label: 'INSS — tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
    {
      label: 'Receita Federal — tributação de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies CalculatorDocument;
