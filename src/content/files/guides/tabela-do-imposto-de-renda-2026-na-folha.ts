import type { GuideDocument } from '../../types';

export const guideTabelaDoImpostoDeRenda2026NaFolha = {
  kind: 'guide',
  slug: 'tabela-do-imposto-de-renda-2026-na-folha',
  title: 'Tabela do Imposto de Renda 2026 na folha: quem paga e quanto',
  description:
    'Como funciona a isenção até R$ 5.000, a redução gradual até R$ 7.350 e a tabela progressiva, com exemplos de quanto é descontado.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['imposto-de-renda', 'irrf', 'isencao', 'tabela'],
  featuredCalculators: ['irrf', 'salario-liquido', 'inss'],
  highlights: [
    {
      value: 'R$ 5.000',
      label: 'Isenção',
      note: 'Quem ganha até esse valor não paga IRRF.',
    },
    {
      value: 'R$ 7.350',
      label: 'Fim da redução',
      note: 'Acima disso vale a tabela sem redução.',
    },
    {
      value: '27,5%',
      label: 'Maior alíquota',
      note: 'Sobre a parte da base acima de R$ 4.664,68.',
    },
  ],
  sections: [
    {
      heading: 'As duas regras que valem em 2026',
      paragraphs: [
        'A tabela progressiva do IRRF tem alíquotas de 7,5% a 27,5%. Além dela, a Lei 15.270/2025 criou um desconto que zera o imposto para quem recebe até R$ 5.000 por mês e reduz o imposto de forma gradual até R$ 7.350.',
        'O desconto não é uma isenção total até R$ 7.350: ele diminui conforme o rendimento cresce, e a partir daí o imposto é cobrado normalmente.',
      ],
    },
    {
      heading: 'A tabela por faixa',
      paragraphs: [
        'A base do IRRF é o salário menos o INSS e menos R$ 189,59 por dependente. Aplique a alíquota da faixa e subtraia a parcela a deduzir.',
      ],
      table: {
        caption: 'Tabela progressiva mensal (antes da redução)',
        columns: ['Base de cálculo', 'Alíquota'],
        rows: [
          ['Até R$ 2.428,80', 'Isento'],
          ['De R$ 2.428,81 a R$ 2.826,65', '7,5%'],
          ['De R$ 2.826,66 a R$ 3.751,05', '15%'],
          ['De R$ 3.751,06 a R$ 4.664,68', '22,5%'],
          ['Acima de R$ 4.664,68', '27,5%'],
        ],
      },
    },
    {
      heading: 'O que isso significa no contracheque',
      paragraphs: [
        'Um salário de R$ 5.000 não paga IRRF. Com R$ 6.000, o imposto é de R$ 385,11 e, com R$ 7.000, de R$ 754,76. Acima de R$ 7.350 vale a tabela completa.',
      ],
    },
    {
      heading: 'Quem mais é afetado',
      paragraphs: [
        'Quem recebe de mais de uma fonte soma os rendimentos na declaração anual, e pode haver imposto a pagar mesmo com retenção zero em cada fonte. Consulte a Receita Federal para as regras da declaração.',
      ],
    },
  ],
  faq: [
    {
      question: 'Pagar menos imposto na folha muda a declaração?',
      answer:
        'A declaração anual leva em conta tudo o que foi recebido. O ajuste final é feito lá, por isso guarde os informes de rendimentos.',
    },
    {
      question: 'Dependentes reduzem o imposto de quem ganha até R$ 5.000?',
      answer:
        'O imposto já é zero nessa faixa. Os dependentes pesam para quem está acima dela.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal — tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
    {
      label: 'Lei 15.270/2025 — isenção do IR até R$ 5.000',
    },
  ],
} as const satisfies GuideDocument;
