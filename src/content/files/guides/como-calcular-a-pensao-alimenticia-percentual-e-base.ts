import type { GuideDocument } from '../../types';

export const guideComoCalcularPensaoAlimenticia = {
  kind: 'guide',
  slug: 'como-calcular-a-pensao-alimenticia-percentual-e-base',
  title: 'Como calcular a pensão alimentícia: percentual, base e desconto',
  description:
    'Como a pensão alimentícia é calculada, que base de cálculo vale, como o desconto em folha funciona e como a pensão reduz o Imposto de Renda de quem paga.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['pensao-alimenticia', 'familia', 'trabalho', 'irrf'],
  featuredCalculators: ['pensao-alimenticia', 'salario-liquido', 'irrf'],
  highlights: [
    {
      value: 'Sem tabela',
      label: 'Percentual definido pelo juiz',
      note: 'A lei não fixa uma porcentagem padrão.',
    },
    {
      value: 'R$ 1.349,55',
      label: '30% da renda líquida de R$ 4.498,49',
      note: 'Salário bruto de R$ 5.000, sem dependentes.',
    },
    {
      value: 'R$ 304,69',
      label: 'Economia de IR no exemplo',
      note: 'Pensão fixa de R$ 1.200 sobre salário de R$ 6.000.',
    },
  ],
  sections: [
    {
      heading: 'Quem define o valor e quais critérios valem',
      paragraphs: [
        'Não existe uma porcentagem fixada em lei. O valor da pensão é definido por acordo homologado ou por decisão judicial, com base na necessidade de quem recebe e na possibilidade de quem paga. É por isso que dois casos parecidos podem ter valores diferentes.',
        'Na prática, é comum ver percentuais próximos de 30% da renda líquida de quem paga, mas essa é uma referência de decisões, e não uma regra. O juiz considera despesas do filho, renda dos dois pais e outros dependentes de quem paga.',
      ],
    },
    {
      heading: 'Qual é a base de cálculo',
      paragraphs: [
        'A decisão ou o acordo costuma usar uma de três bases: um percentual do salário mínimo, um percentual da renda líquida (salário menos INSS e Imposto de Renda) ou um valor fixo. Verifique o que está escrito, porque o resultado muda muito de uma base para outra.',
        'Também é comum a decisão dizer se o percentual vale sobre 13º salário, férias com um terço e outras verbas, e se alcança o saque do FGTS na rescisão. Se o texto não diz, a dúvida deve ser resolvida na Justiça, e não pela empresa.',
      ],
    },
    {
      heading: 'Exemplo 1: 30% da renda líquida',
      paragraphs: [
        'Para um salário bruto de R$ 5.000,00, sem dependentes, o INSS é de R$ 501,51 e o Imposto de Renda é zero. A renda líquida é de R$ 4.498,49 e a pensão de 30% fica em R$ 1.349,55.',
        'Em uma base já líquida de R$ 4.000,00, o mesmo percentual de 30% dá R$ 1.200,00. A diferença entre as duas contas mostra por que é preciso saber se o percentual incide sobre o bruto, o líquido ou outra base.',
      ],
      table: {
        caption: 'Pensão de 30% sobre a renda líquida',
        columns: ['Item', 'Exemplo A', 'Exemplo B'],
        rows: [
          ['Salário bruto', 'R$ 5.000,00', 'R$ 4.000,00 (base líquida)'],
          ['INSS', 'R$ 501,51', 'Já descontado'],
          ['Imposto de Renda', 'R$ 0,00', 'Já descontado'],
          ['Renda líquida', 'R$ 4.498,49', 'R$ 4.000,00'],
          ['Pensão de 30%', 'R$ 1.349,55', 'R$ 1.200,00'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: como a pensão reduz o Imposto de Renda',
      paragraphs: [
        'A pensão alimentícia determinada em decisão judicial ou acordo homologado pode ser deduzida da base de cálculo do Imposto de Renda de quem paga. Com salário de R$ 6.000,00, o IRRF é de R$ 385,11. Com uma pensão fixa de R$ 1.200,00 deduzida da base, o IRRF cai para R$ 80,42, uma economia de R$ 304,69 por mês.',
        'A dedução só vale para pensão paga por decisão judicial, acordo homologado ou escritura pública, e para os beneficiários indicados. Pagar por fora, sem documento, não permite deduzir. Quem recebe a pensão, por sua vez, declara o valor como rendimento tributável.',
      ],
      table: {
        caption:
          'Efeito da pensão fixa de R$ 1.200 sobre o IRRF, salário de R$ 6.000',
        columns: ['Item', 'Sem pensão', 'Com pensão de R$ 1.200'],
        rows: [
          ['INSS', 'R$ 641,51', 'R$ 641,51'],
          ['Base do Imposto de Renda', 'R$ 5.358,49', 'R$ 4.158,49'],
          ['IRRF', 'R$ 385,11', 'R$ 80,42'],
        ],
      },
    },
    {
      heading: 'Desconto em folha e atraso',
      paragraphs: [
        'Quando o pai ou a mãe tem emprego formal, a pensão pode ser descontada direto no contracheque e repassada ao beneficiário, o que evita atrasos. Quem não tem carteira assinada paga por depósito ou transferência, e deve guardar os comprovantes.',
        'O atraso tem consequências sérias: a dívida de pensão pode levar à prisão civil por inadimplência das últimas parcelas, além de protesto e cobrança. Quem não consegue pagar deve pedir revisão do valor na Justiça, e não deixar de pagar.',
      ],
    },
    {
      heading: 'Quando procurar ajuda',
      paragraphs: [
        'Para fixar, revisar ou exonerar pensão, procure a Defensoria Pública, se não puder pagar advogado, ou um advogado de sua confiança. O cálculo desta página é uma estimativa: quem decide o valor é o juiz ou o acordo.',
      ],
    },
  ],
  faq: [
    {
      question: 'Existe um percentual padrão de pensão alimentícia?',
      answer:
        'Não. O percentual depende da decisão ou do acordo. Valores próximos de 30% da renda líquida são comuns, mas não são regra de lei.',
    },
    {
      question: 'A pensão incide sobre o 13º e as férias?',
      answer:
        'Depende da decisão ou do acordo. Muitos textos incluem 13º e férias, e isso deve estar escrito.',
    },
    {
      question: 'A pensão alimentícia reduz o Imposto de Renda?',
      answer:
        'Sim, para quem paga por decisão judicial, acordo homologado ou escritura pública. O valor sai da base de cálculo do imposto.',
    },
    {
      question: 'Quem recebe a pensão paga imposto?',
      answer:
        'A pensão recebida é rendimento tributável e entra na declaração de quem recebe, pela tabela do Imposto de Renda.',
    },
    {
      question: 'O que acontece se eu atrasar a pensão?',
      answer:
        'A dívida pode ser cobrada com protesto e, nas últimas parcelas, com prisão civil. Se não conseguir pagar, peça revisão do valor.',
    },
  ],
  sources: [
    { label: 'Código Civil: arts. 1.694 a 1.710 (alimentos)' },
    { label: 'Lei 5.478/1968: Lei de Alimentos' },
    { label: 'Lei 9.250/1995: dedução de pensão alimentícia no IR' },
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies GuideDocument;
