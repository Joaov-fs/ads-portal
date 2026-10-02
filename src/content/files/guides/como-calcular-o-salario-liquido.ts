import type { GuideDocument } from '../../types';

export const guideComoCalcularOSalarioLiquido = {
  kind: 'guide',
  slug: 'como-calcular-o-salario-liquido',
  title: 'Como calcular o salário líquido em 2026, passo a passo',
  description:
    'Do salário bruto ao valor que cai na conta: INSS por faixa, Imposto de Renda, dependentes e outros descontos, com exemplos de R$ 4.800 e de R$ 6.600.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-30',
  updatedAt: '2026-10-02',
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
      value: 'R$ 3.858,49',
      label: 'Líquido de quem ganha R$ 4.800',
      note: 'Com 1 dependente, vale-transporte e plano de saúde.',
    },
  ],
  sections: [
    {
      heading: 'O caminho em quatro passos',
      paragraphs: [
        'Passo 1: calcule o INSS por faixas. Cada parte do salário paga uma alíquota (7,5%, 9%, 12% e 14%); não existe uma alíquota única sobre o total. Passo 2: monte a base do Imposto de Renda, que é o salário menos o INSS e menos R$ 189,59 por dependente.',
        'Passo 3: aplique a tabela do IRRF sobre essa base e subtraia a redução da Lei 15.270/2025, que zera o imposto de quem ganha até R$ 5.000 e o diminui aos poucos até R$ 7.350. Passo 4: tire do resultado os demais descontos do holerite, como vale-transporte, plano de saúde e pensão alimentícia.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 4.800, 1 dependente',
      paragraphs: [
        'O INSS é a soma das faixas: R$ 121,57 (7,5% sobre R$ 1.621,00) + R$ 115,37 (9% sobre a parte até R$ 2.902,84) + R$ 174,17 (12% até R$ 4.354,27) + R$ 62,40 (14% sobre os R$ 445,73 restantes) = R$ 473,51.',
        'A base do IRRF é R$ 4.800,00 − R$ 473,51 − R$ 189,59 = R$ 4.136,90. A tabela cobraria cerca de R$ 255 nessa base, mas como o salário está abaixo de R$ 5.000 a redução da lei anula o imposto. Em seguida, o vale-transporte de 6% do salário (R$ 288,00) e o plano de saúde de R$ 180,00 reduzem o valor que chega à conta.',
      ],
      table: {
        caption: 'Líquido de quem ganha R$ 4.800',
        columns: ['Item', 'Valor'],
        rows: [
          ['Salário bruto', 'R$ 4.800,00'],
          ['INSS', '− R$ 473,51'],
          ['Imposto de Renda', 'R$ 0,00'],
          ['Vale-transporte (6%)', '− R$ 288,00'],
          ['Plano de saúde', '− R$ 180,00'],
          ['Líquido', 'R$ 3.858,49'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: salário de R$ 6.600, 2 dependentes',
      paragraphs: [
        'O INSS é de R$ 725,51. A base do IRRF é R$ 6.600,00 − R$ 725,51 − R$ 379,18 (dois dependentes) = R$ 5.495,31. Na faixa de 27,5%, a conta é R$ 5.495,31 × 27,5% − R$ 908,73 = R$ 602,48. A redução é R$ 978,62 − 0,133145 × R$ 6.600 = R$ 99,86, e o IRRF fica em R$ 502,62.',
        'O líquido, antes de outros descontos, é R$ 6.600,00 − R$ 725,51 − R$ 502,62 = R$ 5.371,87. Sem os dois dependentes, o IRRF seria cerca de R$ 104 maior (R$ 379,18 × 27,5%), porque cada dependente reduz a base em R$ 189,59 e o imposto marginal nessa faixa é de 27,5%.',
      ],
    },
    {
      heading: 'Quanto sobra em cada salário',
      paragraphs: [
        'A tabela mostra INSS e IRRF para salários sem dependentes e sem outros descontos. O imposto só aparece a partir de cerca de R$ 5.000.',
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
      heading: 'O que muda o resultado',
      paragraphs: [
        'Cada dependente reduz R$ 189,59 da base do IR, o que só faz diferença para quem paga imposto. Pensão alimentícia paga por decisão judicial também reduz essa base. O plano de saúde descontado em folha e o vale-transporte reduzem o líquido, mas não mudam o INSS nem o IRRF do mês.',
        'Horas extras, comissões e adicionais entram no salário bruto e podem empurrar a base para uma faixa maior. Faltas sem justificativa descontam o dia e o descanso semanal. Para salários um pouco acima de R$ 5.000, a folha também pode aplicar o desconto simplificado mensal de R$ 607,20, no lugar do INSS e dos dependentes, quando ele resulta em menos imposto; por isso o holerite pode divergir da conta acima em alguns reais.',
      ],
    },
    {
      heading: 'Erros comuns e quando procurar o RH ou o contador',
      paragraphs: [
        'Os erros mais comuns são aplicar 14% sobre o salário inteiro, esquecer que o INSS para no teto de R$ 988,09 e achar que dependente reduz o INSS (ele só reduz a base do IR). Outro engano é ignorar o 13º e as férias, que têm cálculo próprio.',
        'Compare o INSS do holerite com a soma das faixas e confira se o IRRF usa a base com dependentes. Se algo não bater, peça ao RH o demonstrativo detalhado das bases. Para dúvidas sobre dedução de pensão, dependentes e declaração anual, consulte um contador.',
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
      question: 'Quem ganha até R$ 5.000 nunca paga Imposto de Renda?',
      answer:
        'Na retenção mensal em folha, não. Mas a declaração anual considera todas as fontes de renda do ano, e pode haver imposto a pagar se houver outros rendimentos.',
    },
    {
      question: 'Vale-transporte pode descontar mais de 6%?',
      answer:
        'Não. O desconto máximo é de 6% do salário-base, ou o custo real do vale, se for menor.',
    },
    {
      question: 'O 13º e as férias entram nesse cálculo?',
      answer:
        'Têm cálculo próprio, também com INSS e IRRF. O Imposto de Renda do 13º é apurado separado do salário mensal.',
    },
    {
      question: 'Pensão alimentícia reduz o Imposto de Renda?',
      answer:
        'Sim, quando fixada por decisão judicial ou acordo homologado, o valor pago sai da base do IRRF. Com salário de R$ 6.000 e pensão de R$ 1.200, o IRRF cai de R$ 385,11 para R$ 80,42.',
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
      url: 'https://www2.camara.leg.br/legin/fed/lei/2025/lei-15270-26-novembro-2025-798354-publicacaooriginal-177117-pl.html',
    },
    {
      label: 'Lei 7.418/1985 — vale-transporte',
    },
  ],
} as const satisfies GuideDocument;
