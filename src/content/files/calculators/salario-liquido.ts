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
  updatedAt: '2026-10-12',
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
      heading: 'Exemplo prático',
      paragraphs: [
        'Com salário bruto de R$ 5.500,00 e um dependente, o INSS é de R$ 571,51. A base do IRRF é de R$ 4.738,90, já descontados o INSS e R$ 189,59 do dependente, e o IRRF fica em R$ 148,15.',
        'O salário líquido estimado é de R$ 4.780,33. Se houver vale-transporte, plano de saúde ou pensão alimentícia, esses descontos saem do líquido, e a pensão ainda reduz o IRRF.',
      ],
      table: {
        caption: 'Salário bruto de R$ 5.500 e um dependente',
        columns: ['Item', 'Valor'],
        rows: [
          ['Salário bruto', 'R$ 5.500,00'],
          ['INSS', 'R$ 571,51'],
          ['Base do IRRF', 'R$ 4.738,90'],
          ['IRRF', 'R$ 148,15'],
          ['Salário líquido', 'R$ 4.780,33'],
        ],
      },
    },
    {
      heading: 'Tabela de referência: líquido por faixa de salário',
      paragraphs: [
        'A tabela mostra o líquido de quem não tem dependentes, pensão nem outros descontos. A última coluna mostra quanto do salário bruto chega à conta: ela cai conforme o salário sobe, porque o IRRF cresce, e o INSS deixa de crescer no teto.',
      ],
      table: {
        caption:
          'Salário líquido em 2026, sem dependentes e sem outros descontos',
        columns: [
          'Salário bruto',
          'INSS',
          'IRRF',
          'Líquido',
          'Líquido sobre o bruto',
        ],
        rows: [
          ['R$ 1.621,00', 'R$ 121,57', 'R$ 0,00', 'R$ 1.499,43', '92,50%'],
          ['R$ 2.500,00', 'R$ 200,69', 'R$ 0,00', 'R$ 2.299,32', '91,97%'],
          ['R$ 3.500,00', 'R$ 308,60', 'R$ 0,00', 'R$ 3.191,40', '91,18%'],
          ['R$ 5.000,00', 'R$ 501,51', 'R$ 0,00', 'R$ 4.498,49', '89,97%'],
          ['R$ 6.500,00', 'R$ 711,51', 'R$ 569,93', 'R$ 5.218,55', '80,29%'],
          ['R$ 8.000,00', 'R$ 921,51', 'R$ 1.037,86', 'R$ 6.040,62', '75,51%'],
          ['R$ 10.000,00', 'R$ 988,09', 'R$ 1.569,55', 'R$ 7.442,36', '74,42%'],
          [
            'R$ 15.000,00',
            'R$ 988,09',
            'R$ 2.944,55',
            'R$ 11.067,36',
            '73,78%',
          ],
        ],
      },
    },
    {
      heading: 'O que muda o resultado',
      paragraphs: [
        'Dependentes reduzem o IRRF, e a pensão alimentícia paga por decisão judicial também. Horas extras, comissões e adicionais habituais entram na base do INSS e do IRRF no mês em que são pagos. Benefícios como vale-transporte e plano de saúde entram como outros descontos, quando o empregado os paga em parte.',
        'O 13º salário e as férias têm cálculo próprio, separado do salário mensal. Use as calculadoras de 13º e de férias para essas verbas.',
      ],
    },
    {
      heading: 'Erros comuns ao preencher',
      paragraphs: [
        'O erro mais comum é informar um salário que já é líquido, o que subestima o bruto. Outros são esquecer dependentes, somar descontos que não aparecem no holerite e incluir benefícios pagos integralmente pela empresa, que não saem do salário.',
        'Compare o resultado com o holerite e, se houver diferença de mais de alguns reais, peça ao RH a memória de cálculo do INSS e do IRRF.',
      ],
    },
  ],
  faq: [
    {
      question: 'Este resultado substitui o holerite?',
      answer:
        'Não. A simulação é uma estimativa e o holerite emitido pelo empregador informa os valores oficiais.',
    },
    {
      question: 'Quem ganha até R$ 5.000 paga Imposto de Renda?',
      answer:
        'Não. Pela Lei 15.270/2025, a redução do imposto zera o IRRF para rendimentos tributáveis até R$ 5.000 por mês, e ela diminui aos poucos até R$ 7.350.',
    },
    {
      question: 'Por que o INSS não é uma porcentagem única sobre o salário?',
      answer:
        'Porque é progressivo: cada faixa do salário paga a sua alíquota, de 7,5% a 14%. A alíquota efetiva fica sempre abaixo da alíquota da última faixa.',
    },
    {
      question: 'Dependente muda o salário líquido?',
      answer:
        'Sim. Cada dependente reduz R$ 189,59 da base do IRRF, o que diminui o imposto para quem está acima da faixa de isenção.',
    },
    {
      question: 'A pensão alimentícia entra no cálculo?',
      answer:
        'Sim. Quando paga por decisão judicial ou acordo homologado e descontada em folha, ela reduz a base do IRRF e sai do líquido.',
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
