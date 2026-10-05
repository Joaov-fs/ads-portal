import type { GuideDocument } from '../../types';

export const guideJurosCompostosNaPratica = {
  kind: 'guide',
  slug: 'juros-compostos-na-pratica',
  title:
    'Juros compostos na prática: como seu dinheiro cresce (ou a dívida pesa)',
  description:
    'Entenda a fórmula, veja a diferença para os juros simples e use exemplos em reais para planejar investimentos e dívidas.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-28',
  updatedAt: '2026-10-02',
  tags: [
    'juros-compostos',
    'investimentos',
    'dividas',
    'matematica-financeira',
  ],
  featuredCalculators: [
    'juros-compostos',
    'juros-simples',
    'conversao-taxa-mensal-anual',
  ],
  highlights: [
    {
      value: 'R$ 1.126,83',
      label: 'R$ 1.000 a 1% ao mês por 12 meses',
      note: 'Juros sobre juros.',
    },
    {
      value: 'R$ 1.816,70',
      label: 'Os mesmos R$ 1.000 em 60 meses',
      note: 'O crescimento acelera com o tempo.',
    },
    {
      value: '12,68%',
      label: 'Taxa anual de 1% ao mês',
      note: 'E não 12%.',
    },
  ],
  sections: [
    {
      heading: 'A fórmula e a diferença para os juros simples',
      paragraphs: [
        'O montante final é o capital multiplicado por (1 + taxa) elevado ao número de períodos. A taxa e o prazo precisam estar na mesma unidade: taxa mensal para meses, taxa anual para anos. Nos juros compostos, cada mês rende sobre o saldo que já inclui os juros anteriores. Nos juros simples, o rendimento é sempre calculado sobre o capital inicial.',
        'Veja os três primeiros meses de R$ 1.000 a 1% ao mês. No mês 1, os juros são R$ 10,00 e o saldo vai a R$ 1.010,00. No mês 2, os juros são 1% de R$ 1.010,00, ou seja, R$ 10,10, e o saldo vai a R$ 1.020,10. No mês 3, os juros são R$ 10,20 e o saldo é R$ 1.030,30. Nos juros simples seriam R$ 10,00 todo mês. Em 12 meses, a diferença é pequena (R$ 1.126,83 contra R$ 1.120,00); em 60 meses, o composto chega a R$ 1.816,70 e o simples a R$ 1.600,00.',
      ],
    },
    {
      heading: 'Exemplo 1: o tempo pesa mais que o valor',
      paragraphs: [
        'Considere R$ 5.000 investidos uma única vez a 0,8% ao mês (taxa de exemplo, equivalente a cerca de 10,03% ao ano). Em 12 meses, a diferença para os juros simples é de apenas R$ 21,69. Em 20 anos, é de R$ 19.245,25. O que parecia detalhe vira a parte principal do resultado, e o dinheiro dobra por volta do 87º mês (cerca de sete anos e três meses).',
      ],
      table: {
        caption: 'R$ 5.000 a 0,8% ao mês, sem novos depósitos',
        columns: ['Prazo', 'Juros simples', 'Juros compostos'],
        rows: [
          ['1 ano', 'R$ 5.480,00', 'R$ 5.501,69'],
          ['5 anos', 'R$ 7.400,00', 'R$ 8.064,95'],
          ['10 anos', 'R$ 9.800,00', 'R$ 13.008,70'],
          ['20 anos', 'R$ 14.600,00', 'R$ 33.845,25'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: guardar todo mês',
      paragraphs: [
        'Guardar R$ 300,00 por mês, com depósito no fim de cada mês e rendimento de 0,8% ao mês, produz resultados bem diferentes conforme o prazo. Em 5 anos, você deposita R$ 18.000,00 e acumula R$ 22.987,16. Em 10 anos, deposita R$ 36.000,00 e acumula R$ 60.065,24. Em 20 anos, deposita R$ 72.000,00 e acumula R$ 216.339,37, dos quais R$ 144.339,37 são juros.',
        'Atenção: esses valores são brutos, antes do Imposto de Renda e de eventuais tarifas, e supõem uma taxa constante, o que não acontece no mundo real. Servem para entender o efeito do tempo, e não como promessa de ganho.',
      ],
    },
    {
      heading: 'Exemplo 3: o lado das dívidas',
      paragraphs: [
        'A mesma lógica vale contra você. Imagine um saldo de R$ 1.500,00 no cheque especial, cujo teto regulamentar é de 8% ao mês, sem nenhum pagamento. Em 1 mês a dívida vai a R$ 1.620,00. Em 3 meses, a R$ 1.889,57. Em 6 meses, a R$ 2.380,31. Em 12 meses, a R$ 3.777,26, mais que o dobro. Com juros simples, seriam R$ 2.940,00. Por isso, entre investir e quitar uma dívida com juros altos, a conta costuma favorecer quitar primeiro.',
      ],
    },
    {
      heading: 'Como converter taxas sem errar',
      paragraphs: [
        'Taxas mensais e anuais não se multiplicam por 12. Para converter mensal em anual, eleve (1 + taxa mensal) a 12 e subtraia 1. Para 1% ao mês, o resultado é 12,68% ao ano. Para 0,8% ao mês, é 10,03%. Para 8% ao mês, é 151,82% ao ano. Para o caminho inverso, use a raiz 12ª de (1 + taxa anual).',
        'Em contratos de crédito, a taxa anunciada pode ser nominal (a mensal vezes 12) ou efetiva. Compare sempre o CET, o custo efetivo total, que reúne juros, tarifas e seguros.',
      ],
    },
    {
      heading: 'Erros comuns e o que muda o resultado',
      paragraphs: [
        'Os erros mais comuns são misturar unidades (taxa mensal com prazo em anos), comparar taxa nominal com efetiva, esquecer o imposto em investimentos tributados e ignorar a inflação, que reduz o poder de compra do resultado. Na dívida, outro erro é olhar só a parcela e não o total pago.',
        'Três fatores mudam o resultado: a taxa, o prazo e a regularidade dos aportes. Mudar o prazo costuma pesar mais que mudar o valor, como mostram os exemplos. Para contratos de crédito, em caso de dúvida sobre cobrança de juros, procure o SAC do banco, o Procon ou o Banco Central.',
      ],
    },
  ],
  faq: [
    {
      question: 'Juros compostos são sempre melhores?',
      answer:
        'Para quem investe, o rendimento rende e o dinheiro cresce mais rápido. Para quem deve, o efeito é o inverso: a dívida cresce em ritmo acelerado enquanto não é paga.',
    },
    {
      question: 'Como converter uma taxa mensal em anual?',
      answer:
        'Eleve (1 + taxa mensal) a 12 e subtraia 1. Para 1% ao mês, o resultado é 12,68% ao ano, e não 12%.',
    },
    {
      question: 'Posso usar a fórmula para os aportes mensais?',
      answer:
        'A fórmula simples serve para um único depósito. Com depósitos mensais, o saldo de cada mês recebe o rendimento do mês e o novo depósito. Uma calculadora que simule mês a mês evita erro.',
    },
    {
      question: 'Por que meu resultado real foi menor que a simulação?',
      answer:
        'Imposto de Renda, tarifas, variação da taxa e inflação reduzem o ganho. A simulação mostra o efeito matemático da taxa informada, não o que sobra depois dos custos.',
    },
    {
      question: 'Juros sobre juros é permitido em empréstimos?',
      answer:
        'A capitalização de juros é regulada por lei e depende do contrato. Se achar que a cobrança não confere com o contratado, peça a planilha de evolução da dívida ao banco e, se necessário, busque o Procon ou a Defensoria.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Banco Central: Cidadania Financeira',
    },
    {
      label: 'Resolução CMN 4.765/2019: limite de juros do cheque especial',
    },
  ],
} as const satisfies GuideDocument;
