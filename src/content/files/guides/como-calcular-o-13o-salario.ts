import type { GuideDocument } from '../../types';

export const guideComoCalcularO13oSalario = {
  kind: 'guide',
  slug: 'como-calcular-o-13o-salario',
  title:
    'Como calcular o 13º salário: as duas parcelas, o proporcional e os descontos',
  description:
    'Quando o 13º é pago, como funciona o desconto de INSS e IR na segunda parcela e como calcular o proporcional de quem trabalhou menos de 12 meses.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['13-salario', 'decimo-terceiro', 'trabalho', 'salario'],
  featuredCalculators: [
    'decimo-salario',
    'decimo-proporcional',
    'salario-liquido',
  ],
  highlights: [
    {
      value: '1/12',
      label: 'Por mês trabalhado',
      note: 'Mês com 15 dias ou mais conta inteiro.',
    },
    {
      value: '30 de novembro',
      label: 'Limite da 1ª parcela',
      note: 'A 2ª parcela vai até 20 de dezembro.',
    },
    {
      value: 'R$ 2.751,40',
      label: '13º líquido de R$ 3.000',
      note: 'Soma das duas parcelas.',
    },
  ],
  sections: [
    {
      heading: 'Como o valor é formado',
      paragraphs: [
        'O 13º equivale a um salário por ano, pago em duas parcelas. Quem trabalhou o ano inteiro recebe 12/12 do salário; quem entrou ou saiu no meio do ano recebe 1/12 por mês trabalhado, contando como inteiro o mês com 15 dias ou mais.',
      ],
    },
    {
      heading: 'As duas parcelas na prática',
      paragraphs: [
        'A primeira parcela corresponde a metade do salário e sai sem descontos. A segunda parcela traz o 13º completo, desconta o INSS e o Imposto de Renda e abate a primeira parcela já paga. Por isso a segunda costuma ser menor.',
      ],
      table: {
        caption: '13º de quem ganha R$ 3.000, sem dependentes',
        columns: ['Etapa', 'Valor'],
        rows: [
          ['13º bruto (12/12)', 'R$ 3.000,00'],
          ['1ª parcela (50%, sem descontos)', 'R$ 1.500,00'],
          ['INSS sobre o 13º', 'R$ 248,60'],
          ['IRRF', 'R$ 0,00'],
          ['2ª parcela (o que sobra)', 'R$ 1.251,40'],
          ['Total líquido recebido', 'R$ 2.751,40'],
        ],
      },
    },
    {
      heading: 'Proporcional e outros casos',
      paragraphs: [
        'Quem trabalhou 7 meses no ano recebe 7/12 do salário. Na demissão sem justa causa o 13º proporcional entra na rescisão; no pedido de demissão também há direito ao proporcional; na demissão por justa causa, não.',
        'Horas extras e adicionais habituais entram na base pela média do ano. A empresa pode adiantar a primeira parcela junto com as férias, se o empregado pedir em janeiro.',
      ],
    },
  ],
  faq: [
    {
      question: 'O 13º é descontado de Imposto de Renda?',
      answer:
        'Sim, na segunda parcela, e o cálculo é separado do salário do mês. Quem ganha até R$ 5.000 não paga IR pela regra de 2026.',
    },
    {
      question: 'Quem está de licença recebe o 13º?',
      answer:
        'Sim, o 13º é devido pelos meses trabalhados e por afastamentos previstos em lei, como a licença-maternidade.',
    },
  ],
  sources: [
    {
      label: 'CLT — Consolidação das Leis do Trabalho',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Receita Federal — tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies GuideDocument;
