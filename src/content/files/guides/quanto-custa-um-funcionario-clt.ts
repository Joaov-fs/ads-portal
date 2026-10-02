import type { GuideDocument } from '../../types';

export const guideQuantoCustaUmFuncionarioClt = {
  kind: 'guide',
  slug: 'quanto-custa-um-funcionario-clt',
  title: 'Quanto custa um funcionário CLT: salário, FGTS, férias e 13º',
  description:
    'O custo real de contratar vai além do salário. Veja a conta mensal com FGTS, provisão de férias e 13º e benefícios, em um exemplo em reais.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['custo-funcionario', 'clt', 'fgts', 'empresa', 'negocios'],
  featuredCalculators: [
    'custo-funcionario-clt',
    'custo-demissao',
    'salario-liquido',
  ],
  highlights: [
    {
      value: 'R$ 3.525',
      label: 'Custo de um salário de R$ 2.500',
      note: 'Com R$ 300 de benefícios, no exemplo.',
    },
    {
      value: '~41%',
      label: 'Acima do salário',
      note: 'Soma de FGTS, provisões e benefícios.',
    },
    {
      value: '8%',
      label: 'FGTS mensal',
      note: 'Depositado pela empresa, sem descontar do empregado.',
    },
  ],
  sections: [
    {
      heading: 'O que entra no custo',
      paragraphs: [
        'Além do salário, a empresa deposita 8% de FGTS por mês e reserva todo mês uma parte do 13º salário e das férias com o terço. Somam-se os benefícios, como vale-alimentação e vale-transporte, e, dependendo do regime tributário, o INSS patronal.',
      ],
    },
    {
      heading: 'Exemplo em reais',
      paragraphs: [
        'Para um salário de R$ 2.500 e R$ 300 de benefícios, o custo mensal é de R$ 3.525,00, o que equivale a 41% a mais do que o salário. O exemplo não inclui o INSS patronal, que varia conforme o regime tributário.',
      ],
      table: {
        caption: 'Custo mensal de um salário de R$ 2.500',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['Salário', '', 'R$ 2.500,00'],
          ['Benefícios', '', 'R$ 300,00'],
          [
            'Provisão de 13º e férias + 1/3',
            '1/12 do 13º + 1/12 das férias com o terço',
            'R$ 486,11',
          ],
          ['FGTS de 8%', 'Sobre salário e provisões', 'R$ 238,89'],
          ['Custo total', '', 'R$ 3.525,00'],
        ],
      },
    },
    {
      heading: 'E quando o funcionário sai',
      paragraphs: [
        'A demissão sem justa causa traz custos adicionais: aviso prévio, multa de 40% do FGTS e as verbas proporcionais. Por isso vale reservar uma provisão mensal e simular o custo antes de contratar.',
      ],
    },
    {
      heading: 'Como se planejar',
      paragraphs: [
        'Defina o salário e os benefícios, calcule o custo total e compare com o ganho esperado. Se a empresa é do Simples Nacional, confira como o INSS patronal entra no DAS. Um contador ajuda a fechar a conta com o regime correto.',
      ],
    },
  ],
  faq: [
    {
      question: 'O vale-transporte entra no custo?',
      answer:
        'Sim, a parte que a empresa paga. O trabalhador pode ter desconto de até 6% do salário.',
    },
    {
      question: 'MEI pode contratar?',
      answer:
        'Sim, um empregado que receba um salário mínimo ou o piso da categoria. A empresa recolhe 3% de INSS patronal e 8% de FGTS.',
    },
  ],
  sources: [
    {
      label: 'CLT — Consolidação das Leis do Trabalho',
    },
    {
      label: 'Lei 8.036/1990 — FGTS',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
