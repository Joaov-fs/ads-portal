import type { NewsDocument } from '../../types';

export const newsInssDeAutonomoESocio2011Ou5QualPlanoValeAPena = {
  kind: 'news',
  slug: 'inss-de-autonomo-e-socio-20-11-ou-5-qual-plano-vale-a-pena',
  title:
    'INSS de autônomo e sócio: 20%, 11% ou 5%? Veja quanto custa cada plano em 2026',
  description:
    'Plano normal, simplificado, MEI e pró-labore: quanto cada um custa por mês, para que serve e a pegadinha da aposentadoria por tempo de contribuição.',
  category: 'financas',
  coverImage: {
    src: '/images/news/inss-de-autonomo-e-socio-20-11-ou-5-qual-plano-vale-a-pena.jpg',
    alt: 'Três potes de moedas com 20%, 11% e 5%, os planos de contribuição do INSS.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['inss', 'autonomo', 'pro-labore', 'previdencia', 'negocios'],
  featuredCalculators: ['inss-autonomo', 'pro-labore', 'salario-liquido'],
  highlights: [
    {
      value: 'R$ 600,00',
      label: 'Plano normal (20%) sobre R$ 3.000',
      note: 'Conta para aposentadoria por tempo.',
    },
    {
      value: 'R$ 178,31',
      label: 'Plano simplificado (11%)',
      note: 'Sobre o salário mínimo.',
    },
    {
      value: 'R$ 81,05',
      label: 'Plano de 5%',
      note: 'MEI e facultativo de baixa renda.',
    },
    {
      value: 'R$ 4.450',
      label: 'Pró-labore de R$ 5.000 líquido',
      note: 'INSS de 11% (R$ 550) e IR zero.',
    },
  ],
  sections: [
    {
      heading: 'Os planos de contribuição',
      paragraphs: [
        'Quem não tem carteira assinada contribui por conta própria. A escolha do plano muda o custo mensal e, principalmente, o tipo de aposentadoria que você alcança.',
      ],
      table: {
        caption: 'Planos do INSS para contribuinte individual em 2026',
        columns: ['Plano', 'Alíquota', 'Base', 'Contribuição mensal'],
        rows: [
          [
            'Normal',
            '20%',
            'Sua renda, entre R$ 1.621 e R$ 8.475,55',
            'R$ 600,00 com renda de R$ 3.000',
          ],
          ['Simplificado', '11%', 'Salário mínimo', 'R$ 178,31'],
          [
            'MEI e facultativo de baixa renda',
            '5%',
            'Salário mínimo',
            'R$ 81,05',
          ],
          [
            'Sócio com pró-labore',
            '11%',
            'Pró-labore, até o teto',
            'R$ 550,00 em R$ 5.000',
          ],
        ],
      },
    },
    {
      heading: 'A pegadinha dos planos de 11% e 5%',
      image: {
        src: '/images/news/inss-de-autonomo-e-socio-20-11-ou-5-qual-plano-vale-a-pena-detalhe.jpg',
        alt: 'Detalhe da ilustração: três potes de moedas com 20%, 11% e 5%, os planos de contribuição do INSS.',
        caption: 'Cada plano tem uma alíquota e garante benefícios diferentes.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Os planos de 11% e de 5% contam para aposentadoria por idade, auxílio por incapacidade, salário-maternidade e pensão, mas não contam para a aposentadoria por tempo de contribuição, a menos que o trabalhador complemente a diferença para 20%. Quem escolhe esses planos precisa saber disso desde o começo.',
        'Quem tem renda irregular pode alternar entre planos conforme o mês, mas contribuições abaixo do mínimo não contam como carência.',
      ],
    },
    {
      heading: 'Pró-labore: o que sobra no bolso',
      paragraphs: [
        'O sócio que retira pró-labore paga 11% de INSS e Imposto de Renda pela mesma tabela do empregado. Com pró-labore de R$ 5.000, o INSS é de R$ 550,00, o IR é zero (por causa da isenção até R$ 5.000) e o valor líquido é de R$ 4.450,00.',
        'A base mínima do INSS do sócio é um salário mínimo, e o pró-labore é separado da distribuição de lucros, que tem regras tributárias próprias. Vale conversar com o contador.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso pagar a diferença do plano de 11% para 20%?',
      answer:
        'Sim. O complemento pode ser pago depois, em guia própria, dentro dos prazos previstos em lei.',
    },
    {
      question: 'O MEI pode se aposentar por tempo de contribuição?',
      answer:
        'Só se complementar a contribuição para 20% sobre o salário mínimo. Pela contribuição de 5% o direito é por idade.',
    },
    {
      question: 'Quem decide o valor do pró-labore?',
      answer:
        'Os sócios, respeitado o piso do mínimo para quem administra. Ele deve ser compatível com a atividade e declarado.',
    },
  ],
  sources: [
    {
      label: 'INSS: contribuinte individual e facultativo',
      url: 'https://www.gov.br/inss/pt-br',
    },
    {
      label: 'Lei 8.212/1991: custeio da Seguridade Social',
    },
    {
      label: 'Emenda Constitucional 103/2019: reforma da Previdência',
    },
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
    },
  ],
} as const satisfies NewsDocument;
