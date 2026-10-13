import type { GuideDocument } from '../../types';

export const guideBancoDeHoras = {
  kind: 'guide',
  slug: 'banco-de-horas-como-funciona-e-como-calcular-o-saldo',
  title: 'Banco de horas: como funciona, prazos e como calcular o saldo',
  description:
    'Como o banco de horas funciona, qual é o prazo para compensar, o que acontece na rescisão e quanto vale o saldo se for pago em dinheiro.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['banco-de-horas', 'horas-extras', 'trabalho', 'jornada'],
  featuredCalculators: ['banco-de-horas', 'horas-extras', 'dsr'],
  highlights: [
    {
      value: '6 meses',
      label: 'Prazo no acordo individual',
      note: 'Em acordo coletivo, o prazo pode chegar a 1 ano.',
    },
    {
      value: '50%',
      label: 'Adicional se pago em dinheiro',
      note: 'Para horas que não foram compensadas.',
    },
    {
      value: 'R$ 216,00',
      label: 'Valor de 12 horas extras',
      note: 'Para salário de R$ 2.640 e 220 horas mensais.',
    },
  ],
  sections: [
    {
      heading: 'Como o banco de horas funciona',
      paragraphs: [
        'No banco de horas, as horas trabalhadas a mais em um dia são compensadas com folga ou saída antecipada em outro, em vez de serem pagas como hora extra. As horas a mais viram crédito e as horas a menos viram débito, e o saldo é a diferença entre os dois.',
        'Pelo regime em vigor, o acordo individual escrito vale para compensação em até 6 meses; o acordo ou a convenção coletiva pode estender o prazo até 1 ano. A compensação dentro do mesmo mês pode ser combinada de forma mais simples. A jornada diária não pode passar de 10 horas.',
      ],
    },
    {
      heading: 'Exemplo 1: saldo de 12 horas',
      paragraphs: [
        'Em um mês, um empregado acumulou 18 horas de crédito e 6 horas de débito. O saldo é de 12 horas positivas, que a empresa deve compensar dentro do prazo do acordo.',
        'Se as 12 horas não forem compensadas até o fim do prazo, passam a ser pagas como hora extra, com adicional de 50%. Com salário de R$ 2.640 e jornada de 220 horas por mês, a hora normal vale R$ 12,00 e a hora extra, R$ 18,00. As 12 horas valem R$ 216,00.',
      ],
      table: {
        caption: 'Saldo e valor em dinheiro, salário de R$ 2.640',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['Horas de crédito', 'Registradas', '18 horas'],
          ['Horas de débito', 'Registradas', '6 horas'],
          ['Saldo do banco', '18 menos 6', '12 horas'],
          ['Hora normal', 'R$ 2.640 ÷ 220', 'R$ 12,00'],
          ['Hora com 50%', 'R$ 12,00 × 1,5', 'R$ 18,00'],
          ['Valor do saldo se pago', '12 × R$ 18,00', 'R$ 216,00'],
        ],
      },
    },
    {
      heading: 'O que acontece na rescisão e quando o prazo vence',
      paragraphs: [
        'Se o contrato termina com saldo positivo, as horas não compensadas devem ser pagas na rescisão como hora extra, calculadas sobre a remuneração da data do desligamento. O mesmo vale quando o prazo do acordo vence com horas sem compensar.',
        'O desconto de saldo negativo na rescisão depende da causa do desligamento e do acordo, e costuma gerar discussão. Peça sempre o extrato do banco de horas e a memória de cálculo antes de assinar.',
      ],
    },
    {
      heading: 'Banco de horas, hora extra e DSR',
      paragraphs: [
        'Hora extra paga em dinheiro tem adicional de 50% e reflete no descanso semanal remunerado. Hora compensada em folga não tem adicional, porque a folga já paga a hora trabalhada. Por isso a empresa que escolhe o banco de horas economiza o adicional, e o empregado só recebe esse valor se o saldo não for compensado.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais frequentes são não ter acordo por escrito, deixar o saldo passar do prazo sem pagar, não entregar extrato e impor compensação em dias que o empregado não pode escolher. Também é comum registrar no banco de horas o que deveria ser pago como hora extra.',
        'Anote suas entradas e saídas e compare com o extrato do banco de horas todo mês. Se o saldo não bate com o que você registrou, peça a conferência por escrito.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Se a empresa não fornece o extrato, deixa o prazo vencer ou desconta horas sem acordo, procure o RH e, depois, o sindicato da categoria ou o Ministério do Trabalho e Emprego. Guarde registros de ponto, mensagens de convocação e holerites.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual é o prazo máximo para compensar o banco de horas?',
      answer:
        'Em acordo individual escrito, até 6 meses. Em acordo ou convenção coletiva, até 1 ano.',
    },
    {
      question: 'As horas do banco de horas têm adicional de 50%?',
      answer:
        'Quando compensadas em folga, não. O adicional só entra se as horas forem pagas em dinheiro por falta de compensação.',
    },
    {
      question: 'O que acontece com o saldo se eu for demitido?',
      answer:
        'O saldo positivo não compensado deve ser pago na rescisão como hora extra, sobre a remuneração da data do desligamento.',
    },
    {
      question: 'A empresa pode me obrigar a fazer mais de 10 horas por dia?',
      answer:
        'Não. A jornada diária, somando as horas extras, não pode passar de 10 horas.',
    },
    {
      question: 'Preciso de acordo por escrito para o banco de horas?',
      answer:
        'Sim, em regra. O acordo individual deve ser escrito para o prazo de 6 meses, e o prazo de 1 ano exige acordo ou convenção coletiva.',
    },
  ],
  sources: [
    { label: 'CLT: art. 59 (compensação de jornada)' },
    { label: 'Constituição Federal, art. 7º, XIII e XVI' },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
