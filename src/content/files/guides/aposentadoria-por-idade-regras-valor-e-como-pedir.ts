import type { GuideDocument } from '../../types';

export const guideAposentadoriaIdade = {
  kind: 'guide',
  slug: 'aposentadoria-por-idade-regras-valor-e-como-pedir',
  title: 'Aposentadoria por idade: regras, valor e como pedir',
  description:
    'Veja a idade e o tempo de contribuição da aposentadoria por idade do INSS, como o valor é calculado (60% mais 2% por ano), exemplos em tabela e como pedir pelo Meu INSS.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-14',
  tags: ['inss', 'aposentadoria', 'idade', 'contribuicao', 'beneficios'],
  featuredCalculators: ['aposentadoria-por-idade', 'inss', 'retroativos-inss'],
  highlights: [
    {
      value: '62 e 65 anos',
      label: 'Idade mínima para mulheres e homens',
      note: 'Regra permanente, com 15 e 20 anos de contribuição.',
    },
    {
      value: '60% + 2%',
      label: 'Fórmula do valor',
      note: '2% por ano de contribuição acima do mínimo.',
    },
    {
      value: 'R$ 2.368,00',
      label: 'Mulher com 22 anos e média de R$ 3.200,00',
      note: 'Exemplo calculado com 74% da média.',
    },
  ],
  sections: [
    {
      heading: 'O que é a aposentadoria por idade',
      paragraphs: [
        'A aposentadoria por idade é paga pelo INSS ao trabalhador que alcança uma idade mínima e comprova um tempo mínimo de contribuição. Desde a reforma da Previdência, em novembro de 2019, a regra permanente exige 62 anos de idade e 15 anos de contribuição para as mulheres, e 65 anos de idade e 20 anos de contribuição para os homens.',
        'Quem já era segurado antes da reforma pode estar em uma regra de transição, com idade e tempo diferentes. Por isso, a primeira coisa a fazer é conferir seu histórico no CNIS, no Meu INSS, e simular o benefício antes de pedir.',
      ],
    },
    {
      heading: 'Quanto a aposentadoria paga',
      paragraphs: [
        'O valor é de 60% da média de todos os salários de contribuição, mais 2% para cada ano de contribuição que passar do mínimo: 15 anos para mulheres e 20 para homens. A média considera todo o período desde julho de 1994, ou desde o início das contribuições, se mais recente. O resultado não pode ficar abaixo de um salário mínimo, de R$ 1.621,00, nem acima do teto do INSS, de R$ 8.475,55.',
        'A tabela mostra o percentual e o valor para quem tem média de R$ 3.000,00, em cada faixa de tempo de contribuição. A mulher chega a 100% com 35 anos de contribuição, e o homem, com 40 anos.',
      ],
      table: {
        caption: 'Aposentadoria por idade com média de R$ 3.000,00',
        columns: [
          'Anos de contribuição',
          'Mulher: percentual',
          'Mulher: valor',
          'Homem: percentual',
          'Homem: valor',
        ],
        rows: [
          ['15', '60%', 'R$ 1.800,00', '', ''],
          ['20', '70%', 'R$ 2.100,00', '60%', 'R$ 1.800,00'],
          ['25', '80%', 'R$ 2.400,00', '70%', 'R$ 2.100,00'],
          ['30', '90%', 'R$ 2.700,00', '80%', 'R$ 2.400,00'],
          ['35', '100%', 'R$ 3.000,00', '90%', 'R$ 2.700,00'],
        ],
      },
    },
    {
      heading: 'A média salarial: o que entra na conta',
      paragraphs: [
        'A média usa todos os salários de contribuição do histórico, corrigidos, e não os melhores. Por isso, períodos com contribuição baixa ou sem contribuição puxam o valor para baixo. Quem teve salários altos só no fim da vida profissional costuma ver uma aposentadoria menor que o último salário.',
        'No CNIS, confira se todos os vínculos, as contribuições e os salários aparecem, e peça a correção do que estiver faltando antes de pedir. Documentos como a carteira de trabalho, contracheques e carnês de contribuição ajudam a provar períodos que não constam.',
      ],
    },
    {
      heading: 'Carência e tempo de contribuição',
      paragraphs: [
        'Além da idade e do tempo de contribuição, a aposentadoria por idade exige carência de 180 contribuições mensais, que equivalem a 15 anos. Para homens, a regra permanente também pede 20 anos de contribuição. Em geral, só contam meses em que houve contribuição válida ao INSS.',
        'Contam tempo de contribuição os períodos como empregado com carteira, contribuinte individual, MEI com recolhimento do DAS, facultativo, e outros previstos em lei, como o serviço militar e períodos de benefício por incapacidade intercalados com contribuição. Veja os casos de cada período no CNIS.',
      ],
    },
    {
      heading: 'Regras de transição',
      paragraphs: [
        'Quem já contribuía antes de 13 de novembro de 2019 pode escolher entre as regras de transição, que combinam idade mínima, tempo de contribuição, pontos e, em alguns casos, pedágio. Em muitos casos, essas regras são mais vantajosas do que a regra permanente, e o cálculo do valor também pode ser diferente.',
        'O Meu INSS tem um simulador que mostra a data em que cada regra é atingida. Para casos com períodos especiais, rurais ou atividade em condições prejudiciais à saúde, a simulação deve ser mais cuidadosa, e pode valer a pena buscar orientação na Defensoria ou no sindicato.',
      ],
    },
    {
      heading: 'Como pedir pelo Meu INSS',
      paragraphs: [
        'O pedido é feito pelo Meu INSS, no site ou no aplicativo, com a conta gov.br. Escolha o novo pedido, selecione a aposentadoria por idade e siga as telas, confirmando dados pessoais, de contato e de pagamento. A Central 135 também ajuda.',
        'Antes de pedir, confira o CNIS e anexe documentos que corrijam o que faltar. Depois do pedido, acompanhe a situação, responda às exigências no prazo e guarde o protocolo: a data do pedido é a base dos retroativos, se a análise demorar.',
      ],
    },
    {
      heading: 'Vale esperar mais para pedir',
      paragraphs: [
        'Cada ano a mais de contribuição eleva o percentual em 2 pontos. Um trabalhador que passa de 20 para 25 anos de contribuição, por exemplo, sobe de 60% para 70%, o que, em uma média de R$ 3.000,00, significa R$ 300,00 a mais por mês. Por outro lado, esperar significa receber menos meses de aposentadoria.',
        'A decisão depende de saúde, de renda e de como a média vai mudar com os novos salários. Simule os dois cenários antes de decidir. Se o objetivo é aumentar a média, contribuir sobre um valor maior nos últimos anos pode compensar, mas só se o aumento for relevante diante do histórico inteiro.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são pedir sem conferir o CNIS, deixar de provar períodos que não aparecem no sistema, confundir regra permanente com transição e calcular a aposentadoria pelo último salário. Também é comum contar mais anos do que o INSS reconhece, por exemplo períodos sem contribuição.',
        'Desconfie de promessas de aposentadoria garantida, de pagamentos para antecipar pedidos e de pessoas que oferecem comprar tempo de contribuição. O pedido é gratuito e é feito apenas pelos canais oficiais.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual a idade mínima para a aposentadoria por idade?',
      answer:
        'Na regra permanente, 62 anos para mulheres e 65 para homens, com 15 e 20 anos de contribuição, respectivamente.',
    },
    {
      question: 'Como é calculado o valor da aposentadoria por idade?',
      answer:
        'É 60% da média dos salários mais 2% por ano de contribuição acima de 15 (mulher) ou 20 anos (homem), respeitando piso e teto.',
    },
    {
      question:
        'A aposentadoria por idade pode ser menor que o salário mínimo?',
      answer:
        'Não. O benefício nunca fica abaixo do salário mínimo, hoje de R$ 1.621,00.',
    },
    {
      question: 'Quem já contribuía antes da reforma tem regra diferente?',
      answer:
        'Pode ter. Há regras de transição, com idade, pontos e pedágio. O simulador do Meu INSS mostra qual se aplica ao seu caso.',
    },
    {
      question: 'Onde peço a aposentadoria?',
      answer:
        'Pelo Meu INSS, no site ou no aplicativo, ou pela Central 135. O pedido é gratuito.',
    },
  ],
  sources: [
    { label: 'Emenda Constitucional 103/2019, arts. 19, 20 e 26' },
    { label: 'Lei 8.213/1991, arts. 25 e 48' },
    { label: 'INSS: aposentadoria por idade e simulador no Meu INSS' },
  ],
} as const satisfies GuideDocument;
