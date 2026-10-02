import type { GuideDocument } from '../../types';

export const guideSaqueAniversarioDoFgtsComoFunciona = {
  kind: 'guide',
  slug: 'saque-aniversario-do-fgts-como-funciona',
  title: 'Saque-aniversário do FGTS: como funciona, quanto sai e como cancelar',
  description:
    'O que muda ao aderir, a tabela de alíquotas, como pedir a retirada e os cuidados com a antecipação.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-19',
  updatedAt: '2026-10-02',
  tags: ['fgts', 'saque-aniversario', 'trabalho'],
  featuredCalculators: ['fgts-multa', 'rescisao-clt'],
  highlights: [
    {
      value: '1x por ano',
      label: 'Saque',
      note: 'No mês do seu aniversário.',
    },
    {
      value: '5% a 50%',
      label: 'Percentual do saldo',
      note: 'Quanto menor o saldo, maior o percentual.',
    },
    {
      value: '25 meses',
      label: 'Carência para voltar ao saque-rescisão',
      note: 'Consulte as regras atuais no aplicativo.',
    },
  ],
  sections: [
    {
      heading: 'Como funciona',
      paragraphs: [
        'Quem adere ao saque-aniversário pode retirar uma parte do saldo do FGTS uma vez por ano, a partir do primeiro dia útil do mês de aniversário, e tem 90 dias para sacar. Em troca, abre mão do saque-rescisão: se for demitido sem justa causa, recebe apenas a multa de 40% paga pela empresa, e o saldo da conta continua preso, liberado só nos saques anuais seguintes.',
        'A adesão é pelo aplicativo FGTS ou numa agência da Caixa. Quem não adere continua no saque-rescisão, que libera todo o saldo na demissão sem justa causa. As outras hipóteses de saque, como a compra da casa própria, seguem valendo nos dois casos.',
      ],
    },
    {
      heading: 'Quanto você saca',
      paragraphs: [
        'O valor é o saldo multiplicado pela alíquota da faixa, mais uma parcela adicional fixa. O saldo considerado é o das suas contas do FGTS, e quanto menor o saldo, maior a alíquota.',
      ],
      table: {
        caption: 'Saque-aniversário por faixa de saldo',
        columns: ['Saldo', 'Alíquota', 'Parcela adicional'],
        rows: [
          ['Até R$ 500', '50%', '—'],
          ['R$ 500,01 a R$ 1.000', '40%', 'R$ 50'],
          ['R$ 1.000,01 a R$ 5.000', '30%', 'R$ 150'],
          ['R$ 5.000,01 a R$ 10.000', '20%', 'R$ 650'],
          ['R$ 10.000,01 a R$ 15.000', '15%', 'R$ 1.150'],
          ['R$ 15.000,01 a R$ 20.000', '10%', 'R$ 1.900'],
          ['Acima de R$ 20.000', '5%', 'R$ 2.900'],
        ],
      },
    },
    {
      heading: 'Exemplos de saque',
      paragraphs: [
        'Para achar o valor, localize a faixa do seu saldo, multiplique pela alíquota e some a parcela adicional. Veja quatro saldos diferentes:',
      ],
      table: {
        caption: 'Conta do saque-aniversário',
        columns: ['Saldo', 'Alíquota', 'Cálculo', 'Valor do saque'],
        rows: [
          ['R$ 800', '40%', 'R$ 800 x 0,40 + R$ 50', 'R$ 370,00'],
          ['R$ 3.000', '30%', 'R$ 3.000 x 0,30 + R$ 150', 'R$ 1.050,00'],
          ['R$ 12.000', '15%', 'R$ 12.000 x 0,15 + R$ 1.150', 'R$ 2.950,00'],
          ['R$ 22.000', '5%', 'R$ 22.000 x 0,05 + R$ 2.900', 'R$ 4.000,00'],
        ],
      },
    },
    {
      heading: 'O que muda na demissão: exemplo da Ana',
      paragraphs: [
        'Ana trabalhou 30 meses ganhando R$ 3.000 e nunca sacou o FGTS. O depósito de 8% ao mês soma R$ 7.200 (R$ 3.000 x 0,08 x 30), sem contar rendimentos. A multa de 40% sobre esse valor é de R$ 2.880. Veja a diferença se ela for demitida sem justa causa:',
      ],
      table: {
        caption: 'Demissão com e sem saque-aniversário',
        columns: ['', 'Sem adesão (saque-rescisão)', 'Com adesão'],
        rows: [
          ['Saldo liberado na demissão', 'R$ 7.200,00', 'R$ 0,00'],
          ['Multa de 40%', 'R$ 2.880,00', 'R$ 2.880,00'],
          ['Total recebido na demissão', 'R$ 10.080,00', 'R$ 2.880,00'],
          ['Saldo restante', 'R$ 0,00', 'R$ 7.200,00, em saques anuais'],
          [
            'Primeiro saque anual',
            '—',
            'R$ 7.200 x 0,20 + R$ 650 = R$ 2.090,00',
          ],
        ],
      },
    },
    {
      heading: 'Como aderir ou cancelar',
      paragraphs: [
        'No aplicativo FGTS, entre na opção de saque-aniversário e escolha aderir ou cancelar. Antes de confirmar, veja a data do primeiro saque e o que acontece com o saldo atual. Voltar ao saque-rescisão tem carência: a mudança só vale a partir do 25º mês depois do pedido, por isso confira no aplicativo o prazo vigente antes de decidir.',
      ],
    },
    {
      heading: 'Para quem faz sentido e cuidado com a antecipação',
      paragraphs: [
        'O saque-aniversário tende a servir a quem tem emprego estável e quer receber uma quantia todo ano. Quem teme demissão costuma ficar mais protegido no saque-rescisão, que libera o saldo inteiro na hora em que a renda do trabalho acaba. Decida olhando para o seu risco de perder o emprego, não só para o valor do saque.',
        'Bancos oferecem empréstimo com garantia dos saques futuros. O valor liberado hoje sai dos saques dos próximos anos, e você pode ficar sem a retirada do aniversário durante todo esse período. Peça o custo efetivo total, compare a taxa com outras linhas de crédito e confirme quantos saques ficam comprometidos antes de assinar.',
        'Se você foi demitido ou pode ser demitido em breve, pense bem: com o saldo preso, só a multa de 40% chega na rescisão, e essa conta muda muito o orçamento.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso aderir se estou desempregado?',
      answer:
        'Sim, desde que tenha saldo em conta ativa ou inativa do FGTS. A regra do saldo preso na demissão vale também para um desligamento futuro.',
    },
    {
      question: 'O saque-aniversário tem Imposto de Renda?',
      answer: 'Não. Os saques do FGTS são isentos de IR.',
    },
    {
      question: 'Quanto tempo tenho para sacar depois do aniversário?',
      answer:
        'O valor fica disponível por até 90 dias a partir do primeiro dia útil do mês de aniversário. Depois disso, o saque daquele ano deixa de estar disponível; confira no aplicativo o que acontece com o valor.',
    },
    {
      question: 'Quanto tempo leva para cancelar a adesão?',
      answer:
        'Voltar ao saque-rescisão só vale a partir do 25º mês depois do pedido. Até lá, você segue com o saque-aniversário e a regra do saldo preso na demissão.',
    },
    {
      question: 'Se eu for demitido, perco o saldo?',
      answer:
        'Não. Você recebe a multa de 40% e o saldo continua na conta, liberado nos saques anuais. Outras hipóteses, como a compra da casa própria, seguem valendo.',
    },
  ],
  sources: [
    {
      label: 'Caixa Econômica Federal — FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/',
    },
    {
      label: 'Agência Brasil — saque-aniversário do FGTS 2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-01/saque-aniversario-do-fgts-2026-comeca-ser-liberado',
    },
    {
      label: 'Lei 8.036/1990 — FGTS',
    },
  ],
} as const satisfies GuideDocument;
