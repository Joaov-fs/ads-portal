import type { GuideDocument } from '../../types';

export const guidePlrComoCalcular = {
  kind: 'guide',
  slug: 'plr-como-funciona-e-como-calcular-o-imposto',
  title:
    'PLR: como funciona a participação nos lucros e como calcular o imposto',
  description:
    'Como funciona a PLR, quantas vezes ela pode ser paga, por que tem tabela própria de Imposto de Renda e quanto sobra líquido em cada faixa.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['plr', 'ppr', 'imposto-de-renda', 'trabalho'],
  featuredCalculators: ['plr-ppr-liquido', 'irrf', 'salario-liquido'],
  highlights: [
    {
      value: 'R$ 8.214,40',
      label: 'Isenção da tabela de PLR',
      note: 'Valores até esse limite não pagam imposto.',
    },
    {
      value: 'R$ 9.860,25',
      label: 'Líquido de uma PLR de R$ 10.000',
      note: 'Imposto de R$ 139,75.',
    },
    {
      value: '2 por ano',
      label: 'Pagamentos permitidos',
      note: 'Com intervalo mínimo de um trimestre civil.',
    },
  ],
  sections: [
    {
      heading: 'O que é a PLR e como ela é paga',
      paragraphs: [
        'A PLR (Participação nos Lucros ou Resultados) é um valor pago pela empresa ao empregado com base em metas e resultados, definidas em acordo com a comissão de empregados ou o sindicato. Não é salário: não tem INSS, FGTS nem reflexo em 13º e férias.',
        'A lei permite no máximo dois pagamentos por ano, com intervalo de pelo menos um trimestre civil entre eles. A PPR é o mesmo benefício, com foco em metas de resultado, e segue as mesmas regras de tributação.',
      ],
    },
    {
      heading: 'Por que a PLR tem tabela própria de Imposto de Renda',
      paragraphs: [
        'A PLR tem tributação exclusiva na fonte, com tabela própria, separada do salário do mês. Isso evita que um valor pago de uma vez empurre o salário para uma faixa de imposto maior. A tabela é anual: a base é a soma da PLR paga no ano pela mesma empresa.',
        'Pela tabela da Receita Federal em vigor, a PLR de até R$ 8.214,40 é isenta. Acima disso, as alíquotas são de 7,5%, 15%, 22,5% e 27,5%, com dedução em cada faixa. O imposto é retido pela empresa e a PLR é informada na declaração como rendimento de tributação exclusiva.',
      ],
      table: {
        caption: 'Tabela de PLR da Receita Federal',
        columns: ['Faixa da PLR', 'Alíquota', 'Dedução'],
        rows: [
          ['Até R$ 8.214,40', 'Isento', 'Não há'],
          ['De R$ 8.214,41 a R$ 9.922,28', '7,5%', 'R$ 616,08'],
          ['De R$ 9.922,29 a R$ 13.167,00', '15%', 'R$ 1.360,25'],
          ['De R$ 13.167,01 a R$ 16.380,38', '22,5%', 'R$ 2.347,78'],
          ['Acima de R$ 16.380,38', '27,5%', 'R$ 3.166,80'],
        ],
      },
    },
    {
      heading: 'Exemplos em reais',
      paragraphs: [
        'Uma PLR de R$ 6.000,00 está dentro da isenção e sai líquida. Uma de R$ 10.000,00 cai na faixa de 15%: o imposto é R$ 10.000,00 × 15% menos R$ 1.360,25, ou R$ 139,75, e sobram R$ 9.860,25. Uma de R$ 15.000,00 cai na faixa de 22,5%: o imposto é R$ 1.027,22 e sobram R$ 13.972,78.',
      ],
      table: {
        caption: 'PLR líquida em três valores',
        columns: ['PLR bruta', 'Cálculo do imposto', 'Imposto', 'Líquido'],
        rows: [
          ['R$ 6.000,00', 'Isenta', 'R$ 0,00', 'R$ 6.000,00'],
          ['R$ 10.000,00', '15% menos R$ 1.360,25', 'R$ 139,75', 'R$ 9.860,25'],
          [
            'R$ 15.000,00',
            '22,5% menos R$ 2.347,78',
            'R$ 1.027,22',
            'R$ 13.972,78',
          ],
        ],
      },
    },
    {
      heading: 'Tabela: PLR líquida e alíquota efetiva por valor',
      paragraphs: [
        'A tabela mostra seis valores de PLR, o imposto retido, o líquido e a alíquota efetiva, que é o imposto dividido pelo valor bruto. A alíquota efetiva é sempre menor que a da faixa, porque a dedução reduz o imposto, e isso explica por que uma PLR maior não "come" quase tudo no imposto.',
        'Por exemplo, uma PLR de R$ 25.000,00 está na faixa de 27,5%, mas a alíquota efetiva fica bem menor por causa da dedução. A conta completa é o valor vezes a alíquota da faixa, menos a dedução da faixa.',
      ],
      table: {
        caption: 'PLR líquida por valor bruto no ano',
        columns: ['PLR bruta', 'Imposto', 'Líquido', 'Alíquota efetiva'],
        rows: [
          ['R$ 8.000,00', 'R$ 0,00', 'R$ 8.000,00', '0,00%'],
          ['R$ 9.500,00', 'R$ 96,42', 'R$ 9.403,58', '1,01%'],
          ['R$ 12.000,00', 'R$ 439,75', 'R$ 11.560,25', '3,66%'],
          ['R$ 15.000,00', 'R$ 1.027,22', 'R$ 13.972,78', '6,85%'],
          ['R$ 18.000,00', 'R$ 1.783,20', 'R$ 16.216,80', '9,91%'],
          ['R$ 25.000,00', 'R$ 3.708,20', 'R$ 21.291,80', '14,83%'],
        ],
      },
    },
    {
      heading: 'O que a lei exige para a PLR valer',
      paragraphs: [
        'Para não ser tratada como salário, a PLR precisa de um acordo negociado entre a empresa e uma comissão de empregados, com participação do sindicato, ou de convenção ou acordo coletivo. O texto deve ter regras claras e objetivas, metas, forma de medir os resultados e prazo de vigência.',
        'É proibido pagar a PLR em substituição ao salário ou com periodicidade menor que um trimestre civil, e o limite é de dois pagamentos no ano. Se essas regras não forem seguidas, a Justiça pode reconhecer a PLR como salário e cobrar INSS, FGTS e reflexos.',
      ],
    },
    {
      heading: 'PLR na rescisão e para quem entrou no ano',
      paragraphs: [
        'Quem foi desligado antes da data de pagamento costuma ter direito à PLR proporcional ao tempo trabalhado no período, conforme entendimento do TST, salvo regra diferente no acordo. Quem entrou durante o ano geralmente recebe também de forma proporcional, e o acordo deve dizer como é feita a conta.',
        'Se você deixou a empresa e achou que a PLR deveria ter sido paga, peça ao RH o acordo, a memória de cálculo e o critério de proporcionalidade. Em caso de dúvida, o sindicato da categoria pode ajudar a conferir.',
      ],
    },
    {
      heading: 'PLR parcelada: o imposto é anual',
      paragraphs: [
        'Como a base é anual, quem recebe a PLR em duas parcelas não escapa da faixa mais alta. A segunda parcela é tributada considerando o que já foi pago no ano. Dividir o pagamento muda o fluxo de caixa, mas o imposto final do ano continua pela soma das parcelas.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são tratar a PLR como salário e descontar INSS, aplicar a tabela mensal do salário e esquecer que a base é a soma do ano. Do lado do empregado, é comum esquecer de informar a PLR na declaração, no campo de rendimentos de tributação exclusiva.',
        'Se a PLR vier sem metas, sem acordo ou for paga todo mês, ela pode ser considerada salário pela Justiça do Trabalho, com INSS, FGTS e reflexos. Guarde o acordo e o demonstrativo.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Se o valor pago não bater com o acordo, se houver desconto indevido ou se a empresa não apresentar as regras de cálculo, peça ao RH o demonstrativo e o acordo de metas. O sindicato ou o Ministério do Trabalho e Emprego podem ajudar quando a empresa se recusa a apresentar.',
      ],
    },
  ],
  faq: [
    {
      question: 'A PLR tem INSS e FGTS?',
      answer:
        'Não, desde que paga conforme a lei, com acordo e metas. Não é salário.',
    },
    {
      question: 'Quantas vezes por ano a PLR pode ser paga?',
      answer:
        'No máximo duas vezes, com intervalo de pelo menos um trimestre civil entre os pagamentos.',
    },
    {
      question: 'A PLR paga Imposto de Renda?',
      answer:
        'Paga, por uma tabela própria, em tributação exclusiva na fonte. Até R$ 8.214,40 é isenta.',
    },
    {
      question: 'Preciso declarar a PLR no Imposto de Renda?',
      answer:
        'Sim, como rendimento sujeito à tributação exclusiva na fonte, com o valor informado no informe de rendimentos da empresa.',
    },
    {
      question: 'PLR e PPR são a mesma coisa?',
      answer:
        'São parecidas. A PPR é voltada a resultados e metas, e a tributação segue a mesma tabela.',
    },
  ],
  sources: [
    { label: 'Lei 10.101/2000: participação nos lucros ou resultados' },
    {
      label: 'Receita Federal: tabela de PLR e do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
    { label: 'Constituição Federal, art. 7º, XI' },
  ],
} as const satisfies GuideDocument;
