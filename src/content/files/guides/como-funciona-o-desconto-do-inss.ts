import type { GuideDocument } from '../../types';

export const guideComoFuncionaODescontoDoInss = {
  kind: 'guide',
  slug: 'como-funciona-o-desconto-do-inss',
  title: 'Como funciona o desconto do INSS: faixas, teto e exemplos',
  description:
    'A contribuição do INSS é progressiva. Veja a tabela de 2026, quanto cada salário paga e por que ela não é 14% do total.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['inss', 'previdencia', 'salario', 'descontos'],
  featuredCalculators: ['inss', 'salario-liquido', 'inss-autonomo'],
  highlights: [
    {
      value: '7,5% a 14%',
      label: 'Alíquotas por faixa',
      note: 'Cada parte do salário paga a sua.',
    },
    {
      value: 'R$ 8.475,55',
      label: 'Teto de contribuição',
      note: 'Acima dele o desconto não cresce.',
    },
    {
      value: 'R$ 988,09',
      label: 'Desconto máximo',
      note: 'Valor pago por quem ganha o teto ou mais.',
    },
  ],
  sections: [
    {
      heading: 'Como funciona a conta',
      paragraphs: [
        'O INSS usa alíquotas progressivas por faixa, como o Imposto de Renda. A primeira parte do salário paga 7,5%, a seguinte 9%, depois 12% e, na última faixa, 14%. O resultado é a soma do que cada parte paga.',
      ],
      table: {
        caption: 'Tabela do INSS para empregados em 2026',
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
      heading: 'Exemplos',
      paragraphs: [
        'Com salário de R$ 3.000, o desconto é de R$ 248,60. Com R$ 5.000, é de R$ 501,51. No salário mínimo (R$ 1.621), o desconto é de R$ 121,57. Quem ganha R$ 8.475,55 ou mais paga o máximo de R$ 988,09.',
      ],
    },
    {
      heading: 'Para que serve',
      paragraphs: [
        'A contribuição dá direito a aposentadoria, auxílio por incapacidade, salário-maternidade e pensão. A empresa também recolhe a parte patronal, que não sai do salário do empregado.',
      ],
    },
    {
      heading: 'Autônomo e sócio',
      paragraphs: [
        'Quem não tem carteira assinada escolhe um plano: 20% da renda, 11% do salário mínimo ou 5% para MEI e facultativo de baixa renda. A escolha muda a aposentadoria a que você tem direito.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem ganha acima do teto paga mais INSS?',
      answer: 'Não. A contribuição para no valor máximo de R$ 988,09.',
    },
    {
      question: 'O INSS é descontado das férias e do 13º?',
      answer:
        'Sim, o 13º e as férias têm desconto próprio, sempre limitado ao teto.',
    },
  ],
  sources: [
    {
      label: 'INSS — tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
  ],
} as const satisfies GuideDocument;
