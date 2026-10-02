import type { NewsDocument } from '../../types';

export const newsInss2026TetoDeR847555EAliquotasPorFaixa = {
  kind: 'news',
  slug: 'inss-2026-teto-de-r-8-475-55-e-aliquotas-por-faixa',
  title:
    'INSS em 2026: teto de R$ 8.475,55 e quanto é descontado em cada faixa de salário',
  description:
    'O INSS não incide com uma alíquota única sobre o salário inteiro. Veja a tabela de 2026, a contribuição máxima de R$ 988,09 e exemplos.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['salario', 'inss', 'descontos', 'trabalho', 'previdencia'],
  featuredCalculators: ['inss', 'salario-liquido', 'inss-autonomo'],
  highlights: [
    {
      value: 'R$ 8.475,55',
      label: 'Teto de contribuição',
      note: 'Acima disso o desconto não aumenta.',
    },
    {
      value: 'R$ 988,09',
      label: 'Contribuição máxima mensal',
      note: 'Para quem ganha o teto ou mais.',
    },
    {
      value: '7,5% a 14%',
      label: 'Alíquotas por faixa',
      note: 'Cada alíquota vale só para a parte do salário na faixa.',
    },
    {
      value: '8,29%',
      label: 'Alíquota efetiva em R$ 3.000',
      note: 'R$ 248,60 de INSS.',
    },
  ],
  sections: [
    {
      heading: 'Como o INSS é calculado',
      paragraphs: [
        'Desde a reforma da Previdência, o desconto do empregado é progressivo: cada alíquota incide apenas sobre a parte do salário que está dentro da faixa. Quem ganha R$ 3.000 não paga 12% sobre tudo, e sim 7,5% sobre os primeiros R$ 1.621, 9% sobre o trecho até R$ 2.902,84 e 12% sobre o restante.',
        'Por isso a alíquota efetiva, que é o INSS dividido pelo salário, é sempre menor do que a alíquota da faixa em que o salário está.',
      ],
      table: {
        caption: 'Tabela de contribuição do empregado em 2026',
        columns: ['Faixa do salário', 'Alíquota'],
        rows: [
          ['Até R$ 1.621,00', '7,5%'],
          ['De R$ 1.621,01 a R$ 2.902,84', '9%'],
          ['De R$ 2.902,85 a R$ 4.354,27', '12%'],
          ['De R$ 4.354,28 a R$ 8.475,55', '14%'],
        ],
      },
    },
    {
      heading: 'Exemplos em reais',
      paragraphs: [
        'Com salário de R$ 3.000, o INSS é de R$ 248,60. Com R$ 5.000, é de R$ 501,51. A partir de R$ 8.475,55 o desconto trava em R$ 988,09, e quem ganha R$ 10.000 ou R$ 20.000 paga exatamente o mesmo valor.',
        'O teto também limita o benefício: a aposentadoria pelo INSS não passa do teto previdenciário, e quem quer receber mais precisa de previdência complementar.',
      ],
    },
    {
      heading: 'E para autônomos e sócios?',
      paragraphs: [
        'Quem contribui por conta própria usa alíquotas fixas, de 20% no plano normal, 11% no plano simplificado e 5% para o MEI, sempre dentro do piso de um salário mínimo e do teto. Veja a notícia sobre o INSS de autônomos e sócios.',
      ],
    },
  ],
  faq: [
    {
      question: 'O INSS é descontado antes do Imposto de Renda?',
      answer:
        'Sim. O valor do INSS é subtraído do rendimento antes do cálculo do IRRF, o que reduz a base do imposto.',
    },
    {
      question: 'O 13º tem INSS?',
      answer:
        'Sim, com cálculo separado do salário mensal, usando a mesma tabela.',
    },
    {
      question: 'Por que o teto muda todo ano?',
      answer:
        'O teto e as faixas são reajustados anualmente por portaria interministerial, acompanhando a atualização dos benefícios.',
    },
  ],
  sources: [
    {
      label: 'INSS — tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
    {
      label:
        'Portaria Interministerial MPS/MF — reajuste dos benefícios e do teto em 2026',
    },
    {
      label: 'Emenda Constitucional 103/2019 — reforma da Previdência',
    },
  ],
} as const satisfies NewsDocument;
