import type { GuideDocument } from '../../types';

export const holeriteGuide = {
  kind: 'guide',
  slug: 'como-entender-o-holerite',
  title: 'Como entender o seu holerite',
  description:
    'Identifique vencimentos, descontos e referências do documento de pagamento.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-08',
  updatedAt: '2026-09-21',
  tags: ['salario', 'descontos', 'holerite', 'trabalho'],
  sections: [
    {
      heading: 'Comece pelos dados do período',
      paragraphs: [
        'Confira competência, identificação e salário-base. Esses dados ajudam a entender a origem dos lançamentos apresentados.',
      ],
    },
    {
      heading: 'Separe créditos e descontos',
      paragraphs: [
        'Vencimentos aumentam o valor bruto, enquanto descontos reduzem o total recebido. O líquido é o resultado final dessa composição.',
        'Em caso de divergência, registre os valores e procure o setor responsável antes de assumir que a diferença está correta.',
      ],
    },
    {
      heading: 'Exemplo simples',
      paragraphs: [
        'Imagine um holerite com R$ 3.000 de salário-base, R$ 200 de horas extras e R$ 450 em descontos. Os créditos somam R$ 3.200; após os descontos, a referência líquida é R$ 2.750.',
        'Na prática, confira cada rubrica separadamente, porque bases e descontos podem seguir regras diferentes.',
      ],
    },
    {
      heading: 'Como conferir o seu',
      paragraphs: [
        'Compare a competência, as horas registradas e os benefícios com seus próprios controles. Em seguida, use a calculadora de salário líquido como apoio e leve divergências documentadas ao setor responsável.',
      ],
    },
  ],
  faq: [
    {
      question: 'Salário bruto e líquido são iguais?',
      answer:
        'Não. O salário líquido é obtido após os descontos aplicáveis ao valor bruto e a inclusão de outros lançamentos.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
