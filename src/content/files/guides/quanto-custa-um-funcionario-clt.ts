import type { GuideDocument } from '../../types';

export const guideQuantoCustaUmFuncionarioClt = {
  kind: 'guide',
  slug: 'quanto-custa-um-funcionario-clt',
  title: 'Quanto custa um funcionário CLT: salário, FGTS, férias e 13º',
  description:
    'Veja o custo real de contratar: salário, FGTS, provisão de férias e 13º e benefícios, com dois cenários e o custo de demitir.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-23',
  updatedAt: '2026-10-02',
  tags: ['custo-funcionario', 'clt', 'fgts', 'empresa', 'negocios'],
  featuredCalculators: [
    'custo-funcionario-clt',
    'custo-demissao',
    'salario-liquido',
  ],
  highlights: [
    {
      value: 'R$ 5.344',
      label: 'Custo de um salário de R$ 3.600',
      note: 'Com R$ 700 de benefícios e sem cota patronal.',
    },
    {
      value: '+48,4%',
      label: 'Acima do salário',
      note: 'Soma de FGTS, provisões e benefícios, no exemplo.',
    },
    {
      value: '8%',
      label: 'FGTS mensal',
      note: 'Depositado pela empresa, sem descontar do empregado.',
    },
  ],
  sections: [
    {
      heading: 'O que entra no custo mensal',
      paragraphs: [
        'Quem contrata paga muito além do salário combinado. Entram o salário, a provisão mensal de 13º (um doze avos) e de férias com o terço (um doze avos de 4/3), o FGTS de 8% sobre esses valores, os benefícios e, dependendo do regime tributário, a contribuição patronal ao INSS.',
        'A provisão é uma reserva: o 13º e as férias são pagos em momentos específicos, mas custam um pouco todos os meses, e a empresa que não reserva leva um susto em dezembro e nas férias. O INSS que o empregado paga sai do salário dele; a cota patronal é um custo adicional da empresa.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 3.600 e R$ 700 de benefícios',
      paragraphs: [
        'Considere uma empresa do Simples Nacional cuja cota patronal já está dentro do DAS (a guia única de impostos), então não entra nessa conta. O 13º custa R$ 3.600 ÷ 12 = R$ 300,00 por mês, e as férias com o terço custam R$ 300,00 × 4/3 = R$ 400,00. O FGTS é 8% sobre R$ 4.300,00 (salário mais provisões): R$ 344,00. Os benefícios (vale-refeição e a parte do vale-transporte que a empresa paga) somam R$ 700,00.',
        'O custo mensal é R$ 5.344,00, ou 48,4% acima do salário. Sem os benefícios, o custo seria de R$ 4.644,00, ou 1,29 vez o salário.',
      ],
      table: {
        caption: 'Custo mensal de um salário de R$ 3.600',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['Salário', '', 'R$ 3.600,00'],
          ['Provisão de 13º', '1/12 do salário', 'R$ 300,00'],
          ['Provisão de férias + 1/3', '1/12 do salário × 4/3', 'R$ 400,00'],
          ['FGTS de 8%', '8% de R$ 4.300,00', 'R$ 344,00'],
          ['Benefícios', '', 'R$ 700,00'],
          ['Custo total', '', 'R$ 5.344,00'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: o mesmo funcionário com cota patronal de 20%',
      paragraphs: [
        'Fora do Simples, a empresa recolhe contribuição patronal ao INSS sobre a folha. A base é de 20%, mais o RAT e as contribuições a terceiros, que variam conforme a atividade. Para ilustrar, suponha 20% sobre R$ 4.300,00, o que dá R$ 860,00.',
        'O custo sobe de R$ 5.344,00 para R$ 6.204,00, ou 72,3% acima do salário. A diferença de R$ 860,00 por mês, ou R$ 10.320,00 por ano, mostra por que o regime tributário pesa tanto na decisão de contratar. Empresas do Simples dos anexos I, II, III e V têm a cota patronal no DAS; as do anexo IV (serviços como construção, vigilância e limpeza) a recolhem à parte.',
      ],
    },
    {
      heading: 'E quando o funcionário sai',
      paragraphs: [
        'A demissão sem justa causa tem custo próprio. Para o mesmo salário de R$ 3.600, com 2 anos de casa e saída com 10 dias no mês, o custo estimado é: saldo de salário R$ 1.200,00, aviso de 36 dias R$ 4.320,00, 13º de 7/12 R$ 2.100,00, férias de 7/12 R$ 2.100,00 com terço de R$ 700,00, multa de 40% do FGTS R$ 2.764,80 e o FGTS de 8% sobre saldo, aviso e 13º, R$ 609,60. O total é de R$ 13.794,40.',
        'Essa conta não inclui a cota patronal sobre as verbas, que varia conforme o regime. Por isso vale reservar um valor mensal para eventuais saídas.',
      ],
    },
    {
      heading: 'O que muda o custo',
      paragraphs: [
        'Convenções coletivas definem pisos salariais e benefícios obrigatórios, como cesta básica e auxílio-refeição. Horas extras, adicional noturno, insalubridade e periculosidade aumentam a base de todas as provisões. O vale-transporte é pago pela empresa na parte que passa de 6% do salário do empregado.',
        'O MEI pode contratar um empregado que receba um salário mínimo ou o piso da categoria. Nesse caso, recolhe 3% de INSS patronal e 8% de FGTS, por meio do eSocial.',
      ],
    },
    {
      heading: 'Como se planejar e quando consultar o contador',
      paragraphs: [
        'Defina o salário e os benefícios, calcule o custo total com o regime tributário correto e compare com o resultado que o cargo traz. Simule a saída e guarde a provisão. Um contador confirma a cota patronal, o RAT, as contribuições a terceiros e as regras da convenção coletiva da sua categoria, que mudam o resultado.',
      ],
    },
  ],
  faq: [
    {
      question: 'O vale-transporte entra no custo?',
      answer:
        'Sim, a parte que a empresa paga. O trabalhador pode ter desconto de até 6% do salário-base; o que passar disso é custo da empresa.',
    },
    {
      question: 'MEI pode contratar?',
      answer:
        'Sim, um empregado que receba um salário mínimo ou o piso da categoria. A empresa recolhe 3% de INSS patronal e 8% de FGTS, além do DAS do MEI.',
    },
    {
      question: 'O Simples Nacional paga cota patronal?',
      answer:
        'Nos anexos I, II, III e V, a cota patronal está incluída no DAS. No anexo IV, ela é recolhida à parte.',
    },
    {
      question: 'Por que incluir provisão se o 13º só é pago em dezembro?',
      answer:
        'Porque o custo nasce mês a mês. Reservar 1/12 do 13º e das férias evita descapitalizar o caixa quando o pagamento chega.',
    },
    {
      question: 'Quanto custa demitir um funcionário?',
      answer:
        'Depende do salário e do tempo de casa: aviso prévio, 13º e férias proporcionais, multa de 40% do FGTS e FGTS sobre algumas verbas. Simule antes de decidir.',
    },
  ],
  sources: [
    {
      label: 'CLT — Consolidação das Leis do Trabalho',
    },
    {
      label: 'Lei 8.036/1990 — FGTS',
    },
    {
      label: 'Lei 8.212/1991 — contribuição patronal ao INSS',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
