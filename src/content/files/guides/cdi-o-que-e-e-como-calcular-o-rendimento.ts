import type { GuideDocument } from '../../types';

export const guideCdiComoCalcular = {
  kind: 'guide',
  slug: 'cdi-o-que-e-e-como-calcular-o-rendimento',
  title: 'CDI: o que é e como calcular o rendimento de um investimento',
  description:
    'O que é o CDI, como ele se relaciona com a Selic, o que significa render 100% ou 110% do CDI e como calcular o ganho líquido depois do Imposto de Renda.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['cdi', 'investimentos', 'cdb', 'financas'],
  featuredCalculators: ['cdi', 'cdb-liquido', 'lci-lca'],
  highlights: [
    {
      value: '13,65%',
      label: 'CDI ao ano',
      note: 'Referência de 30/09/2026, perto da Selic menos 0,10 ponto.',
    },
    {
      value: 'R$ 1.126,13',
      label: 'CDB de 100% do CDI, líquido',
      note: 'Para R$ 10.000 em 12 meses.',
    },
    {
      value: '109,09%',
      label: 'CDB que empata com LCI de 90%',
      note: 'Em aplicações de 12 meses.',
    },
  ],
  sections: [
    {
      heading: 'O que é o CDI e a ligação com a Selic',
      paragraphs: [
        'O CDI (Certificado de Depósito Interbancário) é a taxa dos empréstimos de um dia entre os bancos. Ele anda muito perto da Selic, normalmente cerca de 0,10 ponto percentual abaixo dela. Com a Selic em 13,75% ao ano, o CDI fica em torno de 13,65% ao ano.',
        'Por isso o CDI é o principal parâmetro da renda fixa. CDBs, LCIs, LCAs, fundos de renda fixa e debêntures costumam pagar um percentual do CDI, e quando a Selic muda, o rendimento muda junto.',
      ],
    },
    {
      heading: 'O que significa render 100% ou 110% do CDI',
      paragraphs: [
        'Um investimento que paga 100% do CDI rende a mesma taxa do CDI. Um que paga 110% rende 10% a mais que o CDI, e um que paga 90% rende 10% a menos. Com o CDI em 13,65% ao ano, 100% significa 13,65% ao ano, 110% significa 15,015% e 90% significa 12,285%.',
        'O rendimento bruto de R$ 10.000,00 em 12 meses é de R$ 1.365,00 a 100% do CDI e de R$ 1.501,50 a 110%. Esses valores são antes do Imposto de Renda, que depende do prazo.',
      ],
    },
    {
      heading: 'Imposto de Renda e IOF sobre o rendimento',
      paragraphs: [
        'O Imposto de Renda de CDB e fundos de renda fixa segue uma tabela regressiva: 22,5% em aplicações de até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias. Em resgates antes de 30 dias, o IOF também pode incidir, e é regressivo até o 30º dia.',
        'LCI e LCA são isentas de Imposto de Renda para pessoa física, e é por isso que rendem menos em percentual do CDI, mas podem sair na frente no valor líquido.',
      ],
    },
    {
      heading: 'Exemplo: R$ 10.000 por 12 meses',
      paragraphs: [
        'Um CDB de 100% do CDI rende R$ 1.365,00 brutos, paga R$ 238,88 de imposto (17,5%) e deixa R$ 1.126,13. Um CDB de 110% do CDI rende R$ 1.501,50 brutos e deixa R$ 1.238,74 líquidos. Uma LCI de 90% do CDI rende R$ 1.228,50, sem imposto.',
        'O resultado mostra que 110% de CDB ganha de 90% de LCI neste prazo. O ponto de empate fica em 109,09% do CDI: abaixo disso a LCI de 90% é melhor, acima dela o CDB vale mais.',
      ],
      table: {
        caption: 'R$ 10.000 por 12 meses, CDI de 13,65% ao ano',
        columns: ['Investimento', 'Rendimento bruto', 'Imposto', 'Líquido'],
        rows: [
          ['CDB de 100% do CDI', 'R$ 1.365,00', 'R$ 238,88', 'R$ 1.126,13'],
          ['CDB de 110% do CDI', 'R$ 1.501,50', 'R$ 262,76', 'R$ 1.238,74'],
          ['LCI de 90% do CDI', 'R$ 1.228,50', 'Isenta', 'R$ 1.228,50'],
        ],
      },
    },
    {
      heading: 'Tabela: R$ 10.000 a 100% do CDI por prazo',
      paragraphs: [
        'O prazo muda o imposto, e o imposto muda o líquido. A tabela mostra o que sobra de R$ 10.000,00 aplicados a 100% do CDI em quatro prazos, com o CDI em 13,65% ao ano e a alíquota regressiva do Imposto de Renda de cada prazo.',
        'Note que o imposto cai quando o prazo passa de 6, 12 e 24 meses, e o rendimento líquido dos 24 meses é mais que o dobro do de 12 meses. Esperar um pouco mais pode compensar mais do que procurar um percentual maior do CDI.',
      ],
      table: {
        caption: 'CDB de 100% do CDI, CDI de 13,65% ao ano',
        columns: ['Prazo', 'Rendimento bruto', 'Alíquota de IR', 'Líquido'],
        rows: [
          ['3 meses', 'R$ 325,05', '22,50%', 'R$ 251,92'],
          ['6 meses', 'R$ 660,68', '20,00%', 'R$ 528,54'],
          ['12 meses', 'R$ 1.365,00', '17,50%', 'R$ 1.126,13'],
          ['24 meses', 'R$ 2.916,32', '15,00%', 'R$ 2.478,87'],
        ],
      },
    },
    {
      heading: 'O que acontece quando a Selic cai',
      paragraphs: [
        'O rendimento acompanha o CDI. Com R$ 10.000,00 a 100% do CDI por 12 meses, um CDI de 13,65% rende R$ 1.126,13 líquidos. Se o CDI cair 2 pontos percentuais, para 11,65%, o líquido cai para R$ 961,13, uma perda de R$ 165,00 no ano.',
        'Por isso o percentual do CDI importa menos do que parece quando a taxa básica muda. Um CDB de 110% do CDI em um cenário de Selic mais baixa pode render menos, em reais, do que um de 100% em um cenário de Selic mais alta.',
      ],
    },
    {
      heading: 'Como o rendimento diário é calculado',
      paragraphs: [
        'O CDI é divulgado como taxa anual, mas o rendimento é aplicado por dia útil, com base em 252 dias úteis por ano. A taxa diária equivalente a 13,65% ao ano é de cerca de 0,0508% por dia útil.',
        'Por isso o rendimento depende dos dias úteis e não dos dias corridos, e o saldo do investimento pós-fixado aparece em extratos como o valor atualizado a cada dia. Fim de semana e feriado não rendem, mas o dia seguinte compensa.',
      ],
    },
    {
      heading: 'Como comparar e erros comuns',
      paragraphs: [
        'Compare sempre o rendimento líquido no mesmo prazo, e não apenas o percentual do CDI. Considere também a liquidez (se dá para resgatar a qualquer momento), a garantia do Fundo Garantidor de Créditos (FGC, até R$ 250 mil por CPF e por instituição) e o valor mínimo da aplicação.',
        'Os erros mais comuns são comparar percentuais de produtos com imposto diferente, esquecer que o CDI muda com a Selic e achar que 100% do CDI é garantido por um número fixo. A calculadora de CDI usa a taxa que você informar, e o valor real depende do CDI de cada dia.',
      ],
    },
    {
      heading: 'Quando buscar mais informação',
      paragraphs: [
        'Consulte o CDI atual no site do Banco Central ou da B3 antes de simular, e leia a lâmina ou o regulamento do produto para saber taxas, prazo e liquidez. Para decisões de valores maiores, vale conversar com a instituição ou com um planejador financeiro.',
      ],
    },
  ],
  faq: [
    {
      question: 'O CDI é igual à Selic?',
      answer:
        'Não, mas é muito próximo. O CDI costuma ficar cerca de 0,10 ponto percentual abaixo da taxa Selic.',
    },
    {
      question: 'O que significa um CDB de 110% do CDI?',
      answer:
        'Que ele rende 10% a mais do que o CDI no período. Com o CDI em 13,65% ao ano, rende cerca de 15% ao ano.',
    },
    {
      question: 'LCI e LCA pagam Imposto de Renda?',
      answer:
        'Não, para pessoa física. Por isso o percentual do CDI delas costuma ser menor que o de um CDB.',
    },
    {
      question: 'Qual tabela de Imposto de Renda vale para o CDB?',
      answer:
        'A regressiva: 22,5% até 180 dias, 20% de 181 a 360, 17,5% de 361 a 720 e 15% acima de 720 dias.',
    },
    {
      question: 'O CDI é um valor fixo?',
      answer:
        'Não. Ele varia com a Selic, então o rendimento real do investimento muda quando o Banco Central altera a taxa.',
    },
  ],
  sources: [
    { label: 'Banco Central: Selic e taxa DI' },
    { label: 'Receita Federal: tributação de aplicações de renda fixa' },
    { label: 'Fundo Garantidor de Créditos (FGC)' },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
