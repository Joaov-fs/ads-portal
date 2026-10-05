import type { GuideDocument } from '../../types';

export const guideComoCalcularO13oSalario = {
  kind: 'guide',
  slug: 'como-calcular-o-13o-salario',
  title:
    'Como calcular o 13º salário: as duas parcelas, o proporcional e os descontos',
  description:
    'Quando o 13º é pago, por que a segunda parcela é menor e como calcular o proporcional, com três exemplos em reais.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-21',
  updatedAt: '2026-10-02',
  tags: ['13-salario', 'decimo-terceiro', 'trabalho', 'salario'],
  featuredCalculators: [
    'decimo-salario',
    'decimo-proporcional',
    'salario-liquido',
  ],
  highlights: [
    {
      value: '1/12',
      label: 'Por mês trabalhado',
      note: 'Mês com 15 dias ou mais conta inteiro.',
    },
    {
      value: '30 de novembro',
      label: 'Limite da 1ª parcela',
      note: 'A 2ª parcela vai até 20 de dezembro.',
    },
    {
      value: 'R$ 3.807,40',
      label: '13º líquido de R$ 4.200',
      note: 'Soma das duas parcelas, sem dependentes.',
    },
  ],
  sections: [
    {
      heading: 'Como o valor do 13º é formado',
      paragraphs: [
        'O 13º equivale a um salário por ano. Quem trabalhou os 12 meses recebe o valor cheio (12/12). Quem entrou ou saiu no meio do ano recebe 1/12 do salário por mês trabalhado, contando como mês inteiro aquele em que houve 15 dias ou mais de trabalho.',
        'Quem tem horas extras, comissões ou adicionais habituais recebe também a média desses valores ao longo do ano, e não só o salário-base. Por isso o 13º de quem tem parte variável costuma ser maior do que um salário fixo.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 4.200, ano inteiro',
      paragraphs: [
        'A primeira parcela é paga entre fevereiro e 30 de novembro e corresponde à metade do salário, sem descontos: R$ 2.100,00. Todos os descontos ficam para a segunda parcela, paga até 20 de dezembro, que é calculada assim: 13º bruto menos INSS menos IRRF menos a primeira parcela que você já recebeu.',
        'O INSS do 13º é calculado à parte do salário de dezembro, com a mesma tabela por faixas: R$ 121,57 (7,5% até R$ 1.621,00) mais R$ 115,37 (9% até R$ 2.902,84) mais R$ 155,66 (12% sobre o que passa disso), total de R$ 392,60. O Imposto de Renda é zero, porque o 13º de R$ 4.200 fica abaixo do limite de isenção de R$ 5.000.',
      ],
      table: {
        caption: '13º de quem ganha R$ 4.200, sem dependentes',
        columns: ['Etapa', 'Valor'],
        rows: [
          ['13º bruto (12/12)', 'R$ 4.200,00'],
          ['1ª parcela (50%, sem descontos)', 'R$ 2.100,00'],
          ['INSS sobre o 13º', 'R$ 392,60'],
          ['Imposto de Renda', 'R$ 0,00'],
          ['2ª parcela (4.200 − 392,60 − 2.100)', 'R$ 1.707,40'],
          ['Total líquido recebido', 'R$ 3.807,40'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: contratado em junho, salário de R$ 2.350',
      paragraphs: [
        'Quem começou em junho trabalhou 7 meses no ano (junho a dezembro), então recebe 7/12 do salário: R$ 2.350,00 × 7 ÷ 12 = R$ 1.370,83. O INSS, de 7,5%, fica em R$ 102,81, e o líquido é de R$ 1.268,02. Se o pagamento for dividido, a primeira parcela fica perto de R$ 685,42 e a segunda, perto de R$ 582,60.',
      ],
    },
    {
      heading: 'Exemplo 3: salário de R$ 8.200 e um dependente',
      paragraphs: [
        'Salários mais altos mostram por que a segunda parcela pode ser bem menor que a primeira. O INSS é de R$ 949,51 e o IRRF é de R$ 1.033,02, calculado sobre o 13º menos INSS e menos R$ 189,59 do dependente. Como acima de R$ 7.350 não há redução da Lei 15.270/2025, vale a tabela cheia. Os dois descontos saem da segunda parcela.',
        'A conta fica: R$ 8.200,00 − R$ 949,51 − R$ 1.033,02 = R$ 6.217,47 líquidos. Tirando a primeira parcela de R$ 4.100,00, a segunda vem com R$ 2.117,47. A lei de 2025 prevê que a redução do imposto vale também para o 13º, e o cálculo é feito separado do salário mensal.',
      ],
    },
    {
      heading: 'Proporcional, rescisão e erros comuns',
      paragraphs: [
        'Na demissão sem justa causa e no pedido de demissão, o 13º proporcional entra na rescisão; na justa causa, não. Na demissão sem justa causa com aviso indenizado, o aviso conta como tempo de serviço e pode acrescentar mais um avo.',
        'Os erros mais comuns são descontar INSS e IRRF da primeira parcela (ela sai sem descontos), esquecer a média das horas extras e achar que o 13º entra na conta do salário do mês. Se pedir em janeiro, o empregado pode receber a primeira parcela junto com as férias.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Se a primeira parcela não for paga até 30 de novembro ou a segunda passar de 20 de dezembro, a empresa está em atraso. Reclame por escrito ao RH, guarde o holerite e procure o sindicato ou o Ministério do Trabalho e Emprego. Se o valor parecer errado, peça a memória de cálculo com os avos e as médias usadas.',
      ],
    },
  ],
  faq: [
    {
      question: 'Por que a segunda parcela é menor que a primeira?',
      answer:
        'Porque INSS e Imposto de Renda do 13º inteiro são descontados só na segunda parcela, que ainda abate o que você já recebeu na primeira.',
    },
    {
      question: 'O 13º é descontado de Imposto de Renda?',
      answer:
        'Sim, quando o valor passa da faixa de isenção, e o cálculo é separado do salário mensal. Pela Lei 15.270/2025, a redução do imposto vale também para o 13º.',
    },
    {
      question: 'Quem está de licença-maternidade recebe o 13º?',
      answer:
        'Sim. O período da licença conta como tempo de serviço e o 13º é devido normalmente.',
    },
    {
      question: 'Quem trabalhou só 10 dias em um mês recebe o avo daquele mês?',
      answer:
        'Não. O mês só conta como inteiro com 15 dias ou mais de trabalho. Com menos de 15 dias, o avo não é devido.',
    },
    {
      question: 'Como pedir a primeira parcela junto com as férias?',
      answer:
        'O empregado deve solicitar por escrito em janeiro do ano em que vai tirar as férias. A empresa então paga a metade do 13º no mês do descanso.',
    },
  ],
  sources: [
    {
      label: 'Lei 4.090/1962: 13º salário',
    },
    {
      label: 'Lei 4.749/1965: pagamento do 13º em duas parcelas',
    },
    {
      label: 'Lei 15.270/2025: redução do IR, inclusive no 13º',
      url: 'https://www2.camara.leg.br/legin/fed/lei/2025/lei-15270-26-novembro-2025-798354-publicacaooriginal-177117-pl.html',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies GuideDocument;
