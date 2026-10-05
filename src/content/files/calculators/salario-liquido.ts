import type { CalculatorDocument } from '../../types';

export const salarioLiquidoCalculator = {
  kind: 'calculator',
  calculatorId: 'salario-liquido',
  slug: 'salario-liquido',
  title: 'Salário líquido',
  description:
    'Veja seu holerite estimado: INSS, IRRF com dependentes e pensão, outros descontos e o salário líquido do mês.',
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
      name: 'dependents',
      label: 'Dependentes para o Imposto de Renda',
      placeholder: '0',
      type: 'number',
      hint: 'Cada dependente reduz R$ 189,59 da base do IRRF. Se não houver, informe 0.',
    },
    {
      name: 'alimony',
      label: 'Pensão alimentícia descontada em folha',
      placeholder: 'R$ 0,00',
      type: 'money',
      hint: 'Valor em reais retido pelo empregador. Também reduz a base do IRRF. Se não houver, informe 0.',
    },
    {
      name: 'otherDiscounts',
      label: 'Outros descontos',
      placeholder: 'R$ 0,00',
      type: 'money',
      hint: 'Vale-transporte, plano de saúde, vale-refeição e outros descontos do seu holerite, somados. Se não houver, informe 0.',
    },
  ],
  resultLabel: 'Salário líquido estimado',
  resultPlaceholder: 'Preencha os campos para calcular.',
  sections: [
    {
      heading: 'Como o salário líquido é calculado',
      paragraphs: [
        'O INSS é cobrado por faixas: cada parte do salário paga a alíquota da sua faixa, de 7,5% a 14%, e não o salário inteiro pela maior alíquota. O IRRF vem depois, sobre o salário já reduzido pelo INSS, pelos dependentes e pela pensão alimentícia.',
        'Em 2026, quem ganha até R$ 5.000 por mês fica isento do IRRF, e há um desconto gradual até R$ 7.350. A simulação aplica essas regras e não substitui o holerite do empregador.',
      ],
    },
    {
      heading: 'Antes de calcular',
      paragraphs: [
        'Use o salário bruto da competência. Em outros descontos, some apenas o que o holerite mostra além de INSS, IRRF e pensão, como vale-transporte e plano de saúde.',
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
      label: 'INSS: tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
    {
      label: 'Receita Federal: tributação de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies CalculatorDocument;
