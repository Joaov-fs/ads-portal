import type { GuideDocument } from '../../types';

export const guideTabelaDoImpostoDeRenda2026NaFolha = {
  kind: 'guide',
  slug: 'tabela-do-imposto-de-renda-2026-na-folha',
  title: 'Tabela do Imposto de Renda 2026 na folha: quem paga e quanto',
  description:
    'Como funciona a isenção até R$ 5.000, a redução gradual até R$ 7.350 e a tabela progressiva, com três exemplos passo a passo: R$ 5.900, R$ 7.000 e R$ 9.000.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-22',
  updatedAt: '2026-10-02',
  tags: ['imposto-de-renda', 'irrf', 'isencao', 'tabela'],
  featuredCalculators: ['irrf', 'salario-liquido', 'inss'],
  highlights: [
    {
      value: 'R$ 5.000',
      label: 'Isenção',
      note: 'Quem recebe até esse valor por mês não tem IRRF.',
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
        'A tabela progressiva do IRRF, a retenção na fonte feita pela empresa, tem alíquotas de 7,5% a 27,5%. Em cima dela, a Lei 15.270/2025 criou, a partir de janeiro de 2026, uma redução do imposto: quem recebe até R$ 5.000 por mês fica sem imposto, e entre R$ 5.000,01 e R$ 7.350 o desconto diminui gradualmente.',
        'Não é uma isenção total até R$ 7.350. O benefício encolhe à medida que o rendimento sobe e some em R$ 7.350. A redução vale também para o imposto retido no 13º salário.',
      ],
    },
    {
      heading: 'A tabela por faixa',
      paragraphs: [
        'A base de cálculo é o rendimento tributável menos o INSS e menos R$ 189,59 por dependente. Na faixa em que a base cair, multiplique pela alíquota e subtraia a parcela a deduzir.',
      ],
      table: {
        caption: 'Tabela progressiva mensal (antes da redução da lei)',
        columns: ['Base de cálculo', 'Alíquota', 'Parcela a deduzir'],
        rows: [
          ['Até R$ 2.428,80', 'Isento', '—'],
          ['De R$ 2.428,81 a R$ 2.826,65', '7,5%', 'R$ 182,16'],
          ['De R$ 2.826,66 a R$ 3.751,05', '15%', 'R$ 394,16'],
          ['De R$ 3.751,06 a R$ 4.664,68', '22,5%', 'R$ 675,49'],
          ['Acima de R$ 4.664,68', '27,5%', 'R$ 908,73'],
        ],
      },
    },
    {
      heading: 'O passo a passo do cálculo',
      paragraphs: [
        'Passo 1: calcule o INSS sobre o salário. Passo 2: tire do salário o INSS e R$ 189,59 por dependente; o resultado é a base. Passo 3: aplique a alíquota da faixa da base e subtraia a parcela a deduzir; esse é o imposto da tabela.',
        'Passo 4: se o rendimento tributável estiver entre R$ 5.000,01 e R$ 7.350, calcule a redução com a fórmula R$ 978,62 − (0,133145 × rendimento) e a subtraia do imposto. Até R$ 5.000, a redução zera o imposto; acima de R$ 7.350, ela não existe.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 5.900 e 1 dependente',
      paragraphs: [
        'O INSS é de R$ 627,51. A base é R$ 5.900,00 − R$ 627,51 − R$ 189,59 = R$ 5.082,90, que cai na faixa de 27,5%: R$ 5.082,90 × 27,5% − R$ 908,73 = R$ 489,07. A redução é R$ 978,62 − 0,133145 × R$ 5.900 = R$ 193,06, e o IRRF final é R$ 296,01.',
        'O mesmo salário, sem a lei de 2025, pagaria os R$ 489,07 inteiros. A redução economiza, neste caso, mais de R$ 190 por mês.',
      ],
    },
    {
      heading:
        'Exemplos 2 e 3: R$ 7.000 com 2 dependentes e R$ 9.000 sem dependentes',
      paragraphs: [
        'Com R$ 7.000, a redução já é pequena: R$ 978,62 − 0,133145 × R$ 7.000 = R$ 46,60. Acima de R$ 7.350 ela some, e o imposto é o da tabela. Com R$ 9.000, o INSS chega ao teto de R$ 988,09, a base é R$ 8.011,91 e a conta é R$ 8.011,91 × 27,5% − R$ 908,73 = R$ 1.294,55.',
      ],
      table: {
        caption: 'Três salários, três resultados',
        columns: [
          'Item',
          'R$ 5.900 (1 dep.)',
          'R$ 7.000 (2 dep.)',
          'R$ 9.000 (0 dep.)',
        ],
        rows: [
          ['INSS', 'R$ 627,51', 'R$ 781,51', 'R$ 988,09'],
          ['Base do IRRF', 'R$ 5.082,90', 'R$ 5.839,31', 'R$ 8.011,91'],
          ['Imposto pela tabela', 'R$ 489,07', 'R$ 697,08', 'R$ 1.294,55'],
          ['Redução da lei', 'R$ 193,06', 'R$ 46,60', 'R$ 0,00'],
          ['IRRF final', 'R$ 296,01', 'R$ 650,48', 'R$ 1.294,55'],
        ],
      },
    },
    {
      heading: 'O que pode mudar o resultado',
      paragraphs: [
        'Dependentes só reduzem o imposto se estiverem cadastrados na empresa, então entregue os documentos ao RH. Pensão alimentícia por decisão judicial também sai da base. Bônus, PLR e rendimentos de outras fontes têm regras próprias e podem entrar na declaração anual.',
        'A tabela da Receita prevê um desconto simplificado de até R$ 607,20 por mês, que a folha pode usar no lugar do INSS e dos dependentes quando resulta em menos imposto. Isso pesa principalmente em salários próximos de R$ 5.000 a R$ 6.000, e por isso o valor do holerite pode diferir em alguns reais da conta feita só com INSS e dependentes.',
        'A mesma lei criou uma tributação mínima para rendas anuais muito altas e passou a tributar lucros e dividendos. Isso não altera a retenção mensal na folha, mas pode importar para quem tem outras rendas.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o contador',
      paragraphs: [
        'Se o IRRF do holerite estiver muito diferente do esperado, peça ao RH a base de cálculo, a quantidade de dependentes cadastrados e o método usado. Para quem recebe de mais de uma fonte, a soma dos rendimentos é apurada na declaração anual, e um contador ou a própria Receita Federal podem esclarecer eventuais diferenças.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem ganha R$ 5.000,01 já paga todo o imposto da tabela?',
      answer:
        'Não. A redução é gradual: logo acima de R$ 5.000 o imposto é pequeno e cresce conforme o rendimento sobe, até chegar à tabela cheia em R$ 7.350.',
    },
    {
      question: 'Dependentes reduzem o imposto de quem ganha até R$ 5.000?',
      answer:
        'O imposto retido já é zero nessa faixa. Os dependentes pesam para quem está acima dela.',
    },
    {
      question: 'O 13º salário também tem a redução?',
      answer:
        'Sim. A Lei 15.270/2025 prevê que a redução vale para o imposto cobrado exclusivamente na fonte sobre o 13º.',
    },
    {
      question: 'Pagar menos imposto na folha muda a declaração?',
      answer:
        'A declaração anual considera tudo o que foi recebido no ano e faz o ajuste final. Guarde os informes de rendimentos.',
    },
    {
      question: 'A empresa pode reter mais do que a tabela?',
      answer:
        'Não deve. Se houver retenção a maior, a diferença pode ser compensada na declaração anual; peça ao RH a memória de cálculo.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
    {
      label: 'Lei 15.270/2025: isenção do IR até R$ 5.000',
      url: 'https://www2.camara.leg.br/legin/fed/lei/2025/lei-15270-26-novembro-2025-798354-publicacaooriginal-177117-pl.html',
    },
  ],
} as const satisfies GuideDocument;
