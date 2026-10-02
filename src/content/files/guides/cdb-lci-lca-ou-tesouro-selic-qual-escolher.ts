import type { GuideDocument } from '../../types';

export const guideCdbLciLcaOuTesouroSelicQualEscolher = {
  kind: 'guide',
  slug: 'cdb-lci-lca-ou-tesouro-selic-qual-escolher',
  title: 'CDB, LCI, LCA ou Tesouro Selic: como comparar e escolher',
  description:
    'Aprenda a comparar investimentos de renda fixa pelo que realmente sobra no bolso, com a tabela regressiva do Imposto de Renda e exemplos.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-29',
  updatedAt: '2026-10-02',
  tags: ['investimentos', 'cdb', 'lci', 'lca', 'tesouro-selic'],
  featuredCalculators: [
    'cdb-liquido',
    'lci-lca',
    'tesouro-selic',
    'cdb-x-poupanca',
  ],
  highlights: [
    {
      value: '22,5% a 15%',
      label: 'IR sobre o rendimento',
      note: 'Cai conforme o prazo: 180, 360, 720 dias.',
    },
    {
      value: '0%',
      label: 'IR em LCI e LCA',
      note: 'Para pessoa física.',
    },
    {
      value: 'R$ 250 mil',
      label: 'Garantia do FGC',
      note: 'Por CPF e por instituição.',
    },
  ],
  sections: [
    {
      heading: 'Compare o líquido, não a taxa',
      paragraphs: [
        'Uma taxa maior não significa dinheiro maior no bolso. O Imposto de Renda do CDB e do Tesouro Selic é cobrado só sobre o rendimento, na hora do resgate, com alíquota que cai conforme o tempo: 22,5% até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias. LCI e LCA são isentas para pessoa física.',
        'Por isso, a comparação correta tem três passos: calcule o rendimento bruto no prazo que você realmente vai manter o dinheiro, desconte o IR da faixa desse prazo e só então compare. Os exemplos abaixo usam taxas de referência (CDI de 13,65% ao ano e Selic de 13,75% ao ano) apenas para mostrar a conta. Não são as taxas de hoje.',
      ],
    },
    {
      heading: 'Exemplo 1: R$ 20.000 por 18 meses',
      paragraphs: [
        'Em 18 meses o prazo é de 548 dias, faixa de 17,5% de IR. Para o CDB que paga 100% do CDI (13,65% ao ano), a conta é: R$ 20.000 x (1,1365 elevado a 1,5) = R$ 24.231,72. O rendimento bruto é R$ 4.231,72, o IR é 17,5% desse valor (R$ 740,55) e sobram R$ 3.491,17.',
        'A LCI de 90% do CDI paga 12,285% ao ano e é isenta: o rendimento de R$ 3.796,47 já é líquido. Mesmo com taxa menor, ela supera o CDB de 100% do CDI em R$ 305,30. Já o CDB de 110% do CDI (15,015% ao ano) deixa R$ 3.852,40, um pouco acima da LCI.',
      ],
      table: {
        caption: 'R$ 20.000 por 18 meses, exemplo com CDI de 13,65% ao ano',
        columns: ['Título', 'Taxa anual', 'Rendimento bruto', 'IR', 'Líquido'],
        rows: [
          [
            'CDB 100% do CDI',
            '13,65%',
            'R$ 4.231,72',
            'R$ 740,55',
            'R$ 3.491,17',
          ],
          [
            'CDB 110% do CDI',
            '15,015%',
            'R$ 4.669,58',
            'R$ 817,18',
            'R$ 3.852,40',
          ],
          ['LCI 90% do CDI', '12,285%', 'R$ 3.796,47', 'Isento', 'R$ 3.796,47'],
          [
            'Tesouro Selic (exemplo)',
            '13,75%',
            'R$ 4.263,70',
            'R$ 746,15',
            'R$ 3.517,56',
          ],
        ],
      },
    },
    {
      heading: 'Quanto o CDB precisa pagar para empatar com a LCI',
      paragraphs: [
        'Dividindo o percentual da LCI por (1 menos a alíquota de IR) você descobre, de forma aproximada, o percentual do CDI que um CDB tributado precisa pagar para render o mesmo. No exemplo de 90% do CDI, o CDB precisaria pagar cerca de 109% do CDI no prazo de 18 meses.',
        'Quanto mais curto o prazo, maior o IR do CDB e mais vantajosa a isenção. Quanto mais longo, menor a diferença.',
      ],
      table: {
        caption: 'CDB necessário para empatar com uma LCI de 90% do CDI',
        columns: [
          'Prazo do resgate',
          'Alíquota de IR do CDB',
          'CDB precisa pagar, aprox.',
        ],
        rows: [
          ['Até 180 dias', '22,5%', '116% do CDI'],
          ['181 a 360 dias', '20%', '112,5% do CDI'],
          ['361 a 720 dias', '17,5%', '109% do CDI'],
          ['Acima de 720 dias', '15%', '106% do CDI'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: R$ 8.000 que você pode precisar em 3 meses',
      paragraphs: [
        'Com 91 dias, o IR é de 22,5%. O CDB de 100% do CDI rende R$ 260,04 brutos e R$ 201,53 líquidos. O Tesouro Selic, na mesma conta, rende R$ 202,94 líquidos. A LCI de 90% do CDI renderia R$ 235,13, mas muitas LCIs e LCAs têm prazo mínimo (carência) e não permitem resgate antes do vencimento. Se o dinheiro pode ser necessário antes, a isenção vale pouco, porque o título não está disponível.',
        'Nesse cenário a liquidez pesa mais do que o imposto. A diferença entre CDB e Tesouro Selic é de poucos reais, e o que decide é poder sacar no dia em que precisar, sem perder rendimento.',
      ],
    },
    {
      heading: 'Segurança, custos e liquidez',
      paragraphs: [
        'CDB, LCI e LCA têm garantia do Fundo Garantidor de Créditos (FGC) até R$ 250 mil por CPF e por instituição. Acima disso, vale diversificar entre instituições. O Tesouro Selic é emitido pelo Tesouro Nacional e não usa o FGC.',
        'No Tesouro Direto há taxa de custódia da B3 de 0,20% ao ano, com isenção para o Tesouro Selic até R$ 10.000 por CPF (sobre o que passar disso, a taxa incide). Na compra de R$ 20.000, são R$ 20,00 por ano sobre os R$ 10.000 excedentes. Corretoras podem cobrar outras tarifas, então confira antes de investir.',
        'O IOF incide sobre resgates em menos de 30 dias e diminui a cada dia até zerar. O Tesouro Selic tem preço de mercado: se resgatar antes do vencimento, o valor pode variar um pouco, em geral por pouco.',
      ],
    },
    {
      heading: 'Erros comuns ao comparar',
      paragraphs: [
        'O primeiro é comparar o rendimento bruto do CDB com o líquido da LCI. O segundo é ignorar a carência: um título de 18 meses não serve para um objetivo em 6. O terceiro é olhar só o percentual do CDI sem saber qual é o indexador: CDB pós-fixado acompanha o CDI, prefixado trava a taxa e pode render menos se os juros subirem.',
        'Também é comum esquecer que a isenção de LCI e LCA depende da legislação vigente. Mudanças futuras nas regras tributárias podem alterar a conta, então revise a comparação a cada nova aplicação. Este conteúdo é informativo e não é recomendação de investimento: a escolha depende do seu prazo, do seu perfil e da instituição.',
      ],
    },
  ],
  faq: [
    {
      question: 'O IR é cobrado todo mês ou só no resgate?',
      answer:
        'No CDB e no Tesouro Selic o IR é retido na fonte no resgate (ou no vencimento), sobre o rendimento, e a alíquota depende de quanto tempo o dinheiro ficou aplicado.',
    },
    {
      question: 'Preciso declarar LCI e LCA no Imposto de Renda?',
      answer:
        'Sim. O rendimento é isento de imposto, mas o saldo e o rendimento isento entram na declaração anual nas fichas de bens e de rendimentos isentos, com as informações do informe de rendimentos da instituição.',
    },
    {
      question: 'Posso resgatar uma LCI ou LCA antes do vencimento?',
      answer:
        'Depende do título. Muitos só permitem resgate no vencimento ou após um prazo mínimo. Leia as condições de liquidez antes de aplicar e não use esse tipo de título para dinheiro que pode ser necessário a qualquer momento.',
    },
    {
      question: 'O Tesouro Selic é igual a um CDB de liquidez diária?',
      answer:
        'Ambos servem para reserva e usam IR regressivo, mas a garantia é diferente: o Tesouro Selic é do Tesouro Nacional, e o CDB é do banco, coberto pelo FGC até o limite. No Tesouro há taxa de custódia acima de R$ 10.000.',
    },
    {
      question: 'O que acontece com o CDB se o banco quebrar?',
      answer:
        'O FGC paga o valor aplicado mais o rendimento até o limite de R$ 250 mil por CPF e por instituição. O que passar disso fica na fila de credores da massa.',
    },
  ],
  sources: [
    {
      label: 'Lei 11.033/2004 — tributação da renda fixa',
    },
    {
      label: 'Fundo Garantidor de Créditos',
      url: 'https://www.fgc.org.br/',
    },
    {
      label: 'Tesouro Nacional — Tesouro Direto',
    },
    {
      label: 'B3 — Tarifas do Tesouro Direto',
      url: 'https://www.b3.com.br/pt_br/produtos-e-servicos/tarifas/tarifas-de-tesouro-direto/',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
