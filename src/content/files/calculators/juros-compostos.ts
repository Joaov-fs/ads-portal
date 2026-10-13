import type { CalculatorDocument } from '../../types';

export const jurosCompostosCalculator = {
  kind: 'calculator',
  calculatorId: 'juros-compostos',
  slug: 'juros-compostos',
  title: 'Juros compostos',
  description:
    'Projete quanto um investimento rende com juros compostos, usando taxa e prazo na mesma unidade, mês a mês.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-12',
  updatedAt: '2026-10-12',
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
        'Nos juros compostos, cada período considera o valor acumulado anteriormente: o juro de hoje rende juros amanhã. Por isso o crescimento não é linear, e o ganho de cada mês é maior que o do mês anterior.',
        'Mantenha a taxa e o período na mesma unidade: taxa mensal com prazo em meses, taxa anual com prazo em anos. O resultado é uma projeção bruta e não considera impostos, aportes ou oscilações.',
      ],
    },
    {
      heading: 'Exemplo prático',
      paragraphs: [
        'Ao informar R$ 1.000,00, taxa de 1% ao mês e prazo de 12 meses, o montante é de R$ 1.126,83, ou seja, R$ 126,83 de juros. Em juros simples, o mesmo prazo renderia R$ 120,00. A diferença de R$ 6,83 vem dos juros sobre juros.',
        'Com 120 meses (10 anos), o mesmo valor chega a R$ 3.300,39, mais de 3 vezes o valor inicial. É o tempo que faz a diferença: o mesmo valor com o dobro do prazo rende bem mais que o dobro.',
      ],
      table: {
        caption: 'R$ 1.000 a 1% ao mês',
        columns: [
          'Prazo',
          'Montante em juros compostos',
          'Montante em juros simples',
        ],
        rows: [
          ['12 meses', 'R$ 1.126,83', 'R$ 1.120,00'],
          ['24 meses', 'R$ 1.269,73', 'R$ 1.240,00'],
          ['60 meses', 'R$ 1.816,70', 'R$ 1.600,00'],
          ['120 meses', 'R$ 3.300,39', 'R$ 2.200,00'],
        ],
      },
    },
    {
      heading: 'Tabela de referência: R$ 1.000 em três taxas mensais',
      paragraphs: [
        'A tabela mostra o montante de R$ 1.000,00 em taxas de 0,8%, 1% e 1,2% ao mês. Uma diferença de 0,2 ponto na taxa parece pequena, mas em 20 anos ela muda o resultado de forma enorme.',
      ],
      table: {
        caption: 'Montante bruto de R$ 1.000, sem aportes',
        columns: ['Prazo', '0,8% ao mês', '1% ao mês', '1,2% ao mês'],
        rows: [
          ['12 meses', 'R$ 1.100,34', 'R$ 1.126,83', 'R$ 1.153,89'],
          ['24 meses', 'R$ 1.210,75', 'R$ 1.269,73', 'R$ 1.331,47'],
          ['60 meses', 'R$ 1.612,99', 'R$ 1.816,70', 'R$ 2.045,65'],
          ['120 meses', 'R$ 2.601,74', 'R$ 3.300,39', 'R$ 4.184,67'],
          ['240 meses', 'R$ 6.769,05', 'R$ 10.892,55', 'R$ 17.511,49'],
        ],
      },
    },
    {
      heading: 'Aportes mensais fazem mais que o valor inicial',
      paragraphs: [
        'A calculadora considera um valor único. Quem investe todo mês cresce muito mais: a tabela mostra aportes de R$ 500,00 por mês a 0,8% ao mês, o que equivale a cerca de 10% ao ano.',
        'Os juros passam a ser a maior parte do total no longo prazo. Na linha de 240 meses, os juros ganhos chegam a 2,00 vez o total aportado.',
      ],
      table: {
        caption: 'Aportes de R$ 500 por mês a 0,8% ao mês',
        columns: ['Prazo', 'Total aportado', 'Montante', 'Juros ganhos'],
        rows: [
          ['60 meses', 'R$ 30.000,00', 'R$ 38.311,93', 'R$ 8.311,93'],
          ['120 meses', 'R$ 60.000,00', 'R$ 100.108,73', 'R$ 40.108,73'],
          ['240 meses', 'R$ 120.000,00', 'R$ 360.565,61', 'R$ 240.565,61'],
        ],
      },
    },
    {
      heading: 'Erros comuns ao preencher',
      paragraphs: [
        'O erro mais comum é misturar unidades, como taxa anual com prazo em meses, o que gera um resultado muito maior ou menor que o real. Outro é usar a taxa bruta de um investimento sem descontar o Imposto de Renda e a inflação, o que superestima o ganho.',
        'Para converter uma taxa anual em mensal equivalente, use a calculadora de conversão de taxa, e não a divisão por 12, que dá um valor errado nos juros compostos.',
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
        'Sim. Em um cálculo real, taxa e prazo precisam usar unidades compatíveis: taxa mensal com prazo em meses.',
    },
    {
      question:
        'Na prática, o que diferencia juros compostos de juros simples?',
      answer:
        'Nos juros simples, o juro incide só sobre o valor inicial. Nos compostos, incide também sobre os juros já acumulados, o que faz o valor crescer cada vez mais rápido.',
    },
    {
      question: 'Dá para converter taxa anual em mensal dividindo por 12?',
      answer:
        'Não, nos juros compostos. A taxa mensal equivalente é a raiz 12 de (1 mais a taxa anual) menos 1. Use a calculadora de conversão de taxa.',
    },
    {
      question: 'Os juros compostos valem para dívidas também?',
      answer:
        'Sim. Cartão de crédito e cheque especial cobram juros compostos, e é por isso que a dívida cresce tão depressa quando não é paga.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil: Cidadania Financeira',
      url: 'https://www.bcb.gov.br/cidadaniafinanceira',
    },
  ],
} as const satisfies CalculatorDocument;
