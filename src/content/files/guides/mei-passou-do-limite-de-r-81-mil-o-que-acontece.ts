import type { GuideDocument } from '../../types';

export const guideMeiPassouDoLimite = {
  kind: 'guide',
  slug: 'mei-passou-do-limite-de-r-81-mil-o-que-acontece',
  title:
    'MEI passou do limite de R$ 81 mil: o que acontece e como se organizar',
  description:
    'O que muda quando o faturamento do MEI passa de R$ 81 mil, a regra dos 20% de excesso, o desenquadramento retroativo e como evitar surpresas.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['mei', 'limite', 'desenquadramento', 'negocios'],
  featuredCalculators: [
    'excesso-limite-mei',
    'das-limite-mei',
    'simples-nacional',
  ],
  highlights: [
    {
      value: 'R$ 81.000',
      label: 'Limite anual do MEI',
      note: 'Cerca de R$ 6.750 por mês.',
    },
    {
      value: 'R$ 97.200',
      label: 'Teto da tolerância de 20%',
      note: 'Acima disso, o efeito é retroativo.',
    },
    {
      value: '23,46%',
      label: 'Excesso de quem fatura R$ 100.000',
      note: 'R$ 19.000 acima do limite.',
    },
  ],
  sections: [
    {
      heading: 'O limite e o que conta como faturamento',
      paragraphs: [
        'O MEI pode faturar até R$ 81.000,00 por ano, o equivalente a R$ 6.750,00 por mês. O que conta é a receita bruta, isto é, tudo o que a empresa recebeu pelas vendas e serviços no ano, e não o lucro. No ano de abertura, o limite é proporcional: R$ 6.750,00 multiplicados pelos meses de atividade.',
        'A conta é por ano-calendário, de 1º de janeiro a 31 de dezembro, e não por período de 12 meses corridos. Por isso quem abre o MEI no meio do ano tem um limite menor, e quem fatura bem no começo do ano pode estourar o limite antes de dezembro.',
      ],
    },
    {
      heading: 'O que acontece até 20% acima do limite',
      paragraphs: [
        'Se o faturamento passar do limite em até 20%, ou seja, até R$ 97.200,00, o MEI continua no regime até o fim do ano. Ele paga a diferença do imposto sobre o excedente, calculada pelas regras do Simples Nacional, e passa para o Simples como microempresa a partir de 1º de janeiro do ano seguinte.',
        'Com um faturamento de R$ 85.000,00, o excesso é de R$ 4.000,00, ou 4,94% acima do limite. Está dentro da tolerância, mas é um aviso para planejar a migração.',
      ],
    },
    {
      heading: 'O que acontece acima de 20% de excesso',
      paragraphs: [
        'Se o faturamento passar de R$ 97.200,00, o desenquadramento tem efeito retroativo a 1º de janeiro do ano. Isso significa que o MEI passa a ser tratado como microempresa do Simples Nacional desde o começo do ano e deve recolher a diferença de impostos sobre todo o faturamento, além das obrigações acessórias.',
        'Com um faturamento de R$ 100.000,00, o excesso é de R$ 19.000,00, ou 23,46% acima do limite. É o caso em que mais se paga caro, porque a diferença de impostos vem sobre o ano inteiro.',
      ],
      table: {
        caption: 'O que cada faixa de faturamento significa',
        columns: ['Faturamento no ano', 'Excesso', 'Efeito'],
        rows: [
          ['R$ 70.000,00', 'Nenhum', 'Dentro do limite, sem mudança'],
          [
            'R$ 85.000,00',
            'R$ 4.000,00 (4,94%)',
            'Paga a diferença sobre o excedente e migra no ano seguinte',
          ],
          [
            'R$ 100.000,00',
            'R$ 19.000,00 (23,46%)',
            'Efeito retroativo a 1º de janeiro',
          ],
        ],
      },
    },
    {
      heading: 'Tabela: limite proporcional de quem abriu no ano',
      paragraphs: [
        'Quem abre o MEI durante o ano não tem R$ 81.000,00 de limite. O limite é de R$ 6.750,00 vezes os meses de atividade, contando o mês de abertura. A tabela mostra o limite e o teto da tolerância de 20% conforme o mês de abertura.',
        'Isso significa que quem abre no segundo semestre estoura o limite com muito menos faturamento do que parece. Um MEI aberto em outubro, por exemplo, tem limite de R$ 20.250,00 (3 meses) até o fim do ano.',
      ],
      table: {
        caption: 'Limite proporcional por mês de abertura',
        columns: [
          'Mês de abertura',
          'Meses no ano',
          'Limite do ano',
          'Teto com tolerância de 20%',
        ],
        rows: [
          ['Janeiro', '12', 'R$ 81.000,00', 'R$ 97.200,00'],
          ['Abril', '9', 'R$ 60.750,00', 'R$ 72.900,00'],
          ['Julho', '6', 'R$ 40.500,00', 'R$ 48.600,00'],
          ['Outubro', '3', 'R$ 20.250,00', 'R$ 24.300,00'],
        ],
      },
    },
    {
      heading: 'Como projetar o faturamento do ano',
      paragraphs: [
        'Para saber se você vai estourar o limite, divida o faturamento acumulado pelos meses passados e multiplique por 12. Se em junho o acumulado é de R$ 45.000,00, a média é de R$ 7.500,00 por mês, e a projeção para o ano é de R$ 90.000,00. Isso passa o limite em R$ 9.000,00 (11,11%), dentro da tolerância de 20%.',
        'Ainda é possível se ajustar: o que sobra de limite é R$ 36.000,00, e nos 6 meses restantes isso dá R$ 6.000,00 por mês. Se a média mensal continuar acima disso, o desenquadramento é uma questão de tempo. Planejar a migração antes é mais barato do que correr atrás da diferença depois.',
      ],
    },
    {
      heading: 'O que muda ao virar microempresa',
      paragraphs: [
        'O MEI paga um valor fixo mensal no DAS. A microempresa no Simples Nacional paga uma porcentagem do faturamento, que começa em 4% para comércio (Anexo I) e 6% em serviços do Anexo III, e sobe a cada faixa de receita dos últimos 12 meses. Com faturamento de R$ 8.000,00 por mês no comércio, o imposto inicial seria de R$ 320,00, bem mais que o DAS do MEI.',
        'Além do imposto maior, a microempresa tem mais obrigações, como escrituração e nota fiscal em todas as vendas, e normalmente precisa de contador. Essa conta deve entrar no preço antes de decidir crescer acima do limite.',
      ],
    },
    {
      heading: 'Como se organizar',
      paragraphs: [
        'O melhor caminho é acompanhar o faturamento mês a mês e comparar com a meta de R$ 6.750,00. Quem está perto do limite deve planejar a migração para microempresa, o que exige contador, CNPJ ajustado, nota fiscal pelas regras do Simples e outros custos mensais.',
        'Quem ultrapassa o limite precisa comunicar o desenquadramento pelo Portal do Simples Nacional até o último dia útil do mês seguinte ao da ocorrência. Deixar de comunicar pode gerar penalidades e complicar o regime no ano seguinte.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são confundir faturamento com lucro, esquecer que o limite é por ano-calendário, não anotar notas emitidas e recebimentos no mesmo mês, e deixar de comunicar o desenquadramento no prazo. Também é frequente passar do limite por causa de uma grande venda pontual.',
        'Guarde as notas fiscais e registre todas as receitas em uma planilha ou em um controle mensal. A Receita cruza os dados de pagamentos e notas, então o faturamento real costuma aparecer.',
      ],
    },
    {
      heading: 'Quando procurar o contador',
      paragraphs: [
        'Procure um contador antes de chegar a R$ 81.000,00 no ano. Ele calcula se o Simples Nacional compensa, o impacto do Fator R e o custo da migração, e faz a comunicação do desenquadramento. O cálculo desta página só mostra o tamanho do excesso.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual é o limite de faturamento do MEI em 2026?',
      answer:
        'R$ 81.000,00 por ano, ou R$ 6.750,00 por mês. No ano de abertura, é R$ 6.750,00 vezes os meses de atividade.',
    },
    {
      question: 'O que conta como faturamento do MEI?',
      answer:
        'A receita bruta, tudo que a empresa recebeu por vendas e serviços, e não o lucro.',
    },
    {
      question: 'O que acontece se eu passar de R$ 81 mil em 10%?',
      answer:
        'Dentro de 20% de excesso, o MEI continua até o fim do ano, paga a diferença sobre o excedente e migra para microempresa no ano seguinte.',
    },
    {
      question: 'E se eu passar de R$ 97.200?',
      answer:
        'O desenquadramento é retroativo a 1º de janeiro, e a diferença de impostos incide sobre o faturamento do ano todo.',
    },
    {
      question: 'Como comunicar o desenquadramento?',
      answer:
        'Pelo Portal do Simples Nacional, até o último dia útil do mês seguinte ao da ocorrência.',
    },
  ],
  sources: [
    { label: 'Lei Complementar 123/2006: art. 18-A (MEI)' },
    { label: 'Resolução CGSN 140/2018: Simples Nacional e MEI' },
    {
      label: 'Portal do Simples Nacional',
      url: 'https://www8.receita.fazenda.gov.br/simplesnacional/',
    },
  ],
} as const satisfies GuideDocument;
