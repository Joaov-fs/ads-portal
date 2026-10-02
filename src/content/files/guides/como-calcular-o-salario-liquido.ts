import type { GuideDocument } from '../../types';

export const guideComoCalcularOSalarioLiquido = {
  kind: 'guide',
  slug: 'como-calcular-o-salario-liquido',
  title: 'Como calcular o salário líquido em 2026, passo a passo',
  description:
    'Do salário bruto ao valor que cai na conta: INSS por faixa, Imposto de Renda e o que muda com dependentes e outros descontos.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['salario', 'inss', 'irrf', 'holerite', 'descontos'],
  featuredCalculators: ['salario-liquido', 'inss', 'irrf'],
  highlights: [
    {
      value: 'R$ 988,09',
      label: 'INSS máximo por mês',
      note: 'Vale para salários a partir de R$ 8.475,55.',
    },
    {
      value: 'R$ 5.000',
      label: 'Salário sem Imposto de Renda',
      note: 'Entre R$ 5.000 e R$ 7.350 o desconto é gradual.',
    },
    {
      value: 'R$ 3.631,40',
      label: 'Líquido de quem ganha R$ 4.000',
      note: 'Só o INSS pesa nessa faixa.',
    },
  ],
  sections: [
    {
      heading: 'O caminho em três passos',
      paragraphs: [
        'Primeiro vem o INSS, que é calculado por faixas: cada parte do salário paga uma alíquota (7,5%, 9%, 12% e 14%). Não é uma alíquota única sobre o total.',
        'Depois calcula-se a base do Imposto de Renda: salário menos INSS e menos R$ 189,59 por dependente. Sobre essa base aplica-se a tabela do IRRF, e quem ganha até R$ 5.000 por mês fica sem imposto. De R$ 5.000 a R$ 7.350 o desconto é reduzido aos poucos.',
        'Por fim, entram os demais descontos do holerite (vale-transporte, plano de saúde, pensão alimentícia) e o resultado é o salário líquido.',
      ],
    },
    {
      heading: 'Quanto sobra em cada salário',
      paragraphs: [
        'A tabela mostra o desconto de INSS e IRRF para salários sem dependentes e sem outros descontos. Repare que o imposto só aparece a partir de R$ 5.000.',
      ],
      table: {
        caption: 'Salário líquido por faixa de salário bruto (sem dependentes)',
        columns: ['Salário bruto', 'INSS', 'IRRF', 'Líquido'],
        rows: [
          ['R$ 3.000', 'R$ 248,60', 'R$ 0,00', 'R$ 2.751,40'],
          ['R$ 4.000', 'R$ 368,60', 'R$ 0,00', 'R$ 3.631,40'],
          ['R$ 5.000', 'R$ 501,51', 'R$ 0,00', 'R$ 4.498,49'],
          ['R$ 6.000', 'R$ 641,51', 'R$ 385,11', 'R$ 4.973,37'],
          ['R$ 7.000', 'R$ 781,51', 'R$ 754,76', 'R$ 5.463,73'],
          ['R$ 8.000', 'R$ 921,51', 'R$ 1.037,86', 'R$ 6.040,62'],
        ],
      },
    },
    {
      heading: 'Dependentes e outros descontos',
      paragraphs: [
        'Cada dependente reduz em R$ 189,59 a base do Imposto de Renda. Isso só faz diferença para quem paga IRRF: abaixo de R$ 5.000 o imposto já é zero.',
        'Pensão alimentícia paga por decisão judicial também reduz a base do IR. Vale-transporte, plano de saúde e outros benefícios descontados em folha reduzem o líquido, mas não mudam o INSS nem o IR.',
      ],
    },
    {
      heading: 'Como conferir o seu holerite',
      paragraphs: [
        'Compare o INSS do holerite com o da tabela por faixa e confira se o IRRF respeita a base com dependentes. Se algo não bater, peça o detalhamento ao setor de pessoal antes de concluir que há erro: horas extras, comissões e adicionais entram na base e mudam o resultado.',
      ],
    },
  ],
  faq: [
    {
      question: 'Por que meu desconto de INSS não é 14% do salário?',
      answer:
        'Porque a alíquota é progressiva: 14% só incide sobre a parte do salário que passa de R$ 4.354,27. As faixas anteriores pagam 7,5%, 9% e 12%.',
    },
    {
      question: 'O 13º e as férias entram nesse cálculo?',
      answer:
        'Têm cálculo próprio, também com INSS e IRRF, mas o IR do 13º é descontado separadamente do salário mensal.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal — tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
    {
      label: 'INSS — tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
    {
      label: 'Lei 15.270/2025 — isenção do IR até R$ 5.000',
    },
  ],
} as const satisfies GuideDocument;
