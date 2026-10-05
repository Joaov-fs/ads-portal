import type { NewsDocument } from '../../types';

export const newsSaqueAniversarioFgtsOutubro2026 = {
  kind: 'news',
  slug: 'saque-aniversario-fgts-outubro-2026-ate-31-de-dezembro-quanto-sai',
  title: 'Saque-aniversário do FGTS: nascidos em outubro podem sacar até 31/12',
  description:
    'Quem nasceu em outubro e aderiu ao saque-aniversário pode sacar até 31 de dezembro. Veja a tabela de alíquotas e quanto sai em cada faixa de saldo, com exemplos.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-03',
  updatedAt: '2026-10-03',
  tags: ['fgts', 'saque-aniversario', 'trabalho', 'beneficios', 'demissao'],
  featuredCalculators: ['fgts-multa', 'rescisao-clt'],
  highlights: [
    {
      value: '31/12',
      label: 'Último dia para sacar',
      note: 'Para quem faz aniversário em outubro, a partir de 1º de outubro.',
    },
    {
      value: '50%',
      label: 'Saque em saldos de até R$ 500',
      note: 'A alíquota cai conforme o saldo cresce.',
    },
    {
      value: '5% + R$ 2.900',
      label: 'Saque em saldos acima de R$ 20 mil',
      note: 'Última faixa da tabela.',
    },
  ],
  sections: [
    {
      heading: 'Quem pode sacar em outubro e até quando',
      paragraphs: [
        'O saque-aniversário do FGTS pode ser feito por quem nasceu em outubro e já aderiu a essa modalidade. A retirada fica disponível de 1º de outubro a 31 de dezembro de 2026. Passado esse prazo, o dinheiro permanece na conta e só pode ser sacado no ano seguinte.',
        'Quem faz aniversário em setembro tem até 30 de novembro. Quem não aderiu à modalidade segue no saque-rescisão e não consegue retirar o saldo no aniversário.',
      ],
    },
    {
      heading: 'Quanto sai: a tabela de alíquotas e parcela adicional',
      paragraphs: [
        'O valor depende do saldo total das contas do FGTS. Aplica-se uma alíquota sobre o saldo e soma-se uma parcela adicional fixa, o que faz o percentual efetivo diminuir conforme o saldo aumenta.',
      ],
      table: {
        caption: 'Tabela do saque-aniversário',
        columns: ['Saldo do FGTS', 'Alíquota', 'Parcela adicional'],
        rows: [
          ['Até R$ 500', '50%', 'R$ 0'],
          ['De R$ 500,01 a R$ 1.000', '40%', 'R$ 50'],
          ['De R$ 1.000,01 a R$ 5.000', '30%', 'R$ 150'],
          ['De R$ 5.000,01 a R$ 10.000', '20%', 'R$ 650'],
          ['De R$ 10.000,01 a R$ 15.000', '15%', 'R$ 1.150'],
          ['De R$ 15.000,01 a R$ 20.000', '10%', 'R$ 1.900'],
          ['Acima de R$ 20.000', '5%', 'R$ 2.900'],
        ],
      },
    },
    {
      heading: 'Exemplos em reais',
      paragraphs: [
        'Saldo de R$ 400: 50% do saldo, ou R$ 200. Saldo de R$ 800: 40% (R$ 320) mais R$ 50, ou R$ 370. Saldo de R$ 3.000: 30% (R$ 900) mais R$ 150, ou R$ 1.050.',
        'Saldo de R$ 12.000: 15% (R$ 1.800) mais R$ 1.150, ou R$ 2.950. Saldo de R$ 25.000: 5% (R$ 1.250) mais R$ 2.900, ou R$ 4.150. Nos saldos maiores, o saque é uma fração pequena do total.',
      ],
    },
    {
      heading: 'O que se perde ao optar pelo saque-aniversário',
      paragraphs: [
        'Quem opta pelo saque-aniversário abre mão do saque do saldo total na demissão sem justa causa. Nesse caso, só a multa de 40% sobre o saldo é paga na rescisão, e o restante fica na conta, para ser sacado aos poucos a cada aniversário.',
        'Antes de aderir ou cancelar, vale simular as duas situações. A calculadora de multa do FGTS mostra quanto seria pago na demissão. Empréstimos que usam o saque-aniversário como garantia comprometem as retiradas futuras, então confira o custo total antes de contratar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso pedir o saque todo ano?',
      answer:
        'Depende da forma de recebimento escolhida no aplicativo FGTS: crédito em conta no mês do aniversário ou saque por solicitação. Quem não retira dentro do prazo precisa esperar o ano seguinte.',
    },
    {
      question: 'Se eu for demitido, perco o FGTS?',
      answer:
        'Não perde. O saldo continua na conta, mas só a multa de 40% é paga na rescisão. O restante segue liberado apenas nos saques-aniversário anuais.',
    },
    {
      question: 'Quem nasceu em outubro mas não aderiu pode sacar?',
      answer:
        'Não. O saque anual só vale para quem aderiu à modalidade. Quem permanece no saque-rescisão só retira o saldo em situações previstas em lei, como demissão sem justa causa.',
    },
  ],
  sources: [
    { label: 'Caixa Econômica Federal: saque-aniversário do FGTS' },
    { label: 'Lei 8.036/1990 (Lei do FGTS)' },
    { label: 'Aplicativo FGTS: consulta de saldo e modalidade' },
  ],
} as const satisfies NewsDocument;
