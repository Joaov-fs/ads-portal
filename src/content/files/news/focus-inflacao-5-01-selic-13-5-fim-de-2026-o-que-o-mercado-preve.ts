import type { NewsDocument } from '../../types';

export const newsFocusInflacao501Selic135 = {
  kind: 'news',
  slug: 'focus-inflacao-5-01-selic-13-5-fim-de-2026-o-que-o-mercado-preve',
  title:
    'Focus: mercado prevê inflação de 5,01% em 2026 e Selic de 13,5% no fim do ano',
  description:
    'O boletim Focus de 5 de outubro elevou a projeção do IPCA de 2026 para 5,01%. Veja o que isso significa para CDB, poupança e dívidas, com conta em reais.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-06',
  updatedAt: '2026-10-06',
  tags: ['focus', 'inflacao', 'ipca', 'selic', 'juros', 'investimentos', 'cdb'],
  featuredCalculators: ['cdb-liquido', 'cdb-x-poupanca', 'tesouro-selic'],
  highlights: [
    {
      value: '5,01%',
      label: 'IPCA de 2026 no Focus',
      note: 'Terceira alta seguida na projeção; antes era 4,99%.',
    },
    {
      value: '13,5%',
      label: 'Selic prevista para o fim de 2026',
      note: 'Hoje a meta está em 13,75% ao ano.',
    },
    {
      value: '1,85%',
      label: 'Crescimento do PIB em 2026',
      note: 'Era 1,86% na semana anterior.',
    },
    {
      value: 'R$ 5,20',
      label: 'Dólar previsto para o fim de 2026',
      note: 'Projeção mantida.',
    },
  ],
  sections: [
    {
      heading: 'O que o boletim Focus trouxe nesta semana',
      paragraphs: [
        'O Banco Central divulgou na segunda-feira, 5 de outubro de 2026, o boletim Focus, que reúne as projeções de instituições financeiras para a economia. A estimativa para o IPCA, a inflação oficial, de 2026 subiu de 4,99% para 5,01%. É a terceira alta consecutiva dessa projeção.',
        'A meta de inflação é de 3%, com tolerância de 1,5 ponto para cima ou para baixo, ou seja, de 1,5% a 4,5%. Com 5,01%, a expectativa para 2026 fica acima do teto dessa faixa.',
        'Para a taxa Selic, a projeção de fim de 2026 ficou em 13,5% ao ano, sem mudança. Hoje a meta está em 13,75%, em vigor desde 17 de setembro. Os dois números juntos equivalem a mais um corte de 0,25 ponto percentual até dezembro.',
        'O Focus é uma pesquisa de expectativas: não é decisão do Banco Central nem garantia do que vai acontecer. Quem decide a Selic é o Copom, que ainda tem reuniões marcadas para 3 e 4 de novembro e para 8 e 9 de dezembro.',
      ],
      table: {
        caption: 'Projeções do Focus de 5 de outubro de 2026',
        columns: ['Indicador', '2026', '2027', '2028'],
        rows: [
          ['IPCA (inflação)', '5,01%', '4,30%', '3,80%'],
          ['Selic no fim do ano', '13,5%', '12,0%', '10,5%'],
          ['Crescimento do PIB', '1,85%', '1,40%', '1,81%'],
          ['Dólar no fim do ano', 'R$ 5,20', 'R$ 5,28', 'R$ 5,30'],
        ],
      },
    },
    {
      heading: 'Quanto a inflação de 5,01% pesa no seu dinheiro',
      paragraphs: [
        'Inflação de 5,01% significa que algo que custava R$ 10.000 no começo do ano passaria a custar R$ 10.501 no fim. Quem deixou dinheiro parado perdeu esses R$ 501 de poder de compra.',
        'A poupança rende 0,5% ao mês mais a TR enquanto a Selic está acima de 8,5% ao ano. Em 12 meses, isso dá cerca de 6,17% mais a TR: R$ 616,78 em R$ 10.000, sem imposto. O ganho acima da inflação é pequeno.',
        'Um CDB que paga 100% do CDI rende perto de 13,65% ao ano com a Selic em 13,75%. Em R$ 10.000 por 12 meses, o rendimento bruto é de R$ 1.365,00. O Imposto de Renda de 17,5% (para aplicações acima de 720 dias) é de R$ 238,88, e sobram R$ 1.126,13.',
        'Descontando a inflação de 5,01% desse rendimento líquido de 11,26%, o ganho real fica em cerca de 5,95% ao ano. Em reais de hoje, é mais ou menos o dobro do que a poupança entrega no exemplo.',
      ],
    },
    {
      heading: 'E se a Selic cair para 13,5%?',
      paragraphs: [
        'Com a Selic em 13,5%, o CDI fica perto de 13,40%. No mesmo CDB de 100% do CDI, os R$ 10.000 renderiam R$ 1.340,00 brutos, R$ 234,50 de IR e R$ 1.105,50 líquidos em 12 meses.',
        'A diferença é de cerca de R$ 21 por ano a cada R$ 10 mil aplicados. A queda é pequena, e quem investe em títulos pós-fixados acompanha a taxa sem precisar trocar de aplicação.',
        'Quem tem aplicação prefixada, com taxa combinada na compra, mantém o rendimento contratado até o vencimento. Quem compra agora trava uma taxa conhecida, mas fica sem se beneficiar se os juros subirem.',
      ],
    },
    {
      heading: 'O que muda para quem tem dívida',
      paragraphs: [
        'Uma Selic estável perto de 13,5% e uma inflação acima da meta indicam que o crédito deve continuar caro por um bom tempo. O Banco Central tende a manter juros altos enquanto a inflação não volta ao intervalo da meta.',
        'Em um empréstimo de R$ 30.000 em 36 parcelas a 1,99% ao mês, a parcela é de R$ 1.175,10 e os juros somam R$ 12.303,46. O que mais pesa nesse custo é a taxa mensal do contrato, mais do que um corte de 0,25 ponto na Selic.',
        'Antes de contratar, compare o Custo Efetivo Total (CET) de cada proposta e confira se a parcela cabe no orçamento sem comprometer o essencial.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é o boletim Focus?',
      answer:
        'É uma pesquisa semanal do Banco Central com projeções de bancos e instituições financeiras para inflação, juros, PIB e câmbio. Mostra expectativas do mercado, não decisões oficiais.',
    },
    {
      question: 'A Selic vai cair para 13,5% de certeza?',
      answer:
        'Não. O número é a projeção do mercado para o fim de 2026. A decisão é do Copom, em reuniões que ainda acontecem em novembro e dezembro, e depende da inflação e da economia.',
    },
    {
      question: 'Inflação alta ajuda ou atrapalha a renda fixa?',
      answer:
        'A renda fixa pós-fixada acompanha a Selic, que sobe ou se mantém quando a inflação preocupa. O que importa é o rendimento líquido depois do IR e da inflação, e não só a taxa anunciada.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil: Boletim Focus, 5 de outubro de 2026',
    },
    {
      label:
        'Banco Central do Brasil: Comitê de Política Monetária (Copom), calendário de reuniões de 2026',
    },
    {
      label:
        'Banco Central do Brasil: meta para a inflação, 3% com tolerância de 1,5 ponto',
    },
    {
      label: 'Lei 11.033/2004: tabela regressiva do Imposto de Renda',
    },
  ],
} as const satisfies NewsDocument;
