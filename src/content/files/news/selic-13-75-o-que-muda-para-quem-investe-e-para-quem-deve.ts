import type { NewsDocument } from '../../types';

export const newsSelic1375OQueMudaParaQuemInvesteEParaQuemDeve = {
  kind: 'news',
  slug: 'selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve',
  title: 'Selic cai para 13,75%: o que muda para quem investe e para quem deve',
  description:
    'Com o corte de 17 de setembro, a taxa básica chegou a 13,75% ao ano. Veja o efeito em CDB, poupança, financiamentos e dívidas, com exemplos em reais.',
  category: 'economia',
  coverImage: {
    src: '/images/news/selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve.jpg',
    alt: 'Medidor apontando 13,75%, gráfico da Selic em queda e celular com investimentos.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['juros', 'selic', 'investimentos', 'credito', 'cdb'],
  featuredCalculators: ['cdb-liquido', 'cdi', 'simulador-de-emprestimo'],
  highlights: [
    {
      value: '13,75%',
      label: 'Meta da Selic ao ano',
      note: 'Em vigor desde 17 de setembro de 2026.',
    },
    {
      value: '−1,25 p.p.',
      label: 'Queda desde janeiro',
      note: 'A taxa começou 2026 em 15% ao ano.',
    },
    {
      value: '5 cortes',
      label: 'De 0,25 ponto em 2026',
      note: 'Março, abril, junho, agosto e setembro.',
    },
    {
      value: '≈ 9% ao ano',
      label: 'Juro real',
      note: 'Selic descontada a inflação de 4,22% em 12 meses (IPCA de agosto).',
    },
  ],
  sections: [
    {
      heading: 'O que aconteceu com a Selic',
      paragraphs: [
        'A meta da taxa Selic passou para 13,75% ao ano e vale desde 17 de setembro de 2026, segundo a série histórica do Banco Central. Foi a quinta redução de 0,25 ponto percentual no ano: a taxa começou 2026 em 15%.',
        'A Selic é a taxa básica de juros da economia. Ela orienta o rendimento dos títulos do Tesouro, do CDI e de boa parte dos investimentos de renda fixa, e é o ponto de partida do custo do crédito.',
      ],
      table: {
        caption: 'Meta da Selic ao longo de 2026',
        columns: ['Vigência', 'Meta ao ano'],
        rows: [
          ['Início de 2026', '15,00%'],
          ['19/03/2026', '14,75%'],
          ['30/04/2026', '14,50%'],
          ['18/06/2026', '14,25%'],
          ['06/08/2026', '14,00%'],
          ['17/09/2026', '13,75%'],
        ],
      },
    },
    {
      heading: 'Quem investe: o rendimento da renda fixa diminui um pouco',
      image: {
        src: '/images/news/selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve-detalhe.jpg',
        alt: 'Detalhe da ilustração: medidor apontando 13,75%, gráfico da Selic em queda e celular com investimentos.',
        caption: 'A Selic em 13,75% ao ano.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O CDI, que é a referência da maioria dos CDBs, acompanha a Selic de perto e fica cerca de 0,10 ponto abaixo dela. Um CDB que paga 100% do CDI rende, portanto, algo perto de 13,65% ao ano antes do Imposto de Renda.',
        'Em R$ 10.000 aplicados por 12 meses nessa taxa, o rendimento bruto é de R$ 1.365,00. Com IR de 17,5% (R$ 238,88), sobram R$ 1.126,13. Com a Selic em 15%, o mesmo CDB renderia cerca de R$ 1.229 líquidos: a queda de 1,25 ponto custou aproximadamente R$ 103 por ano a cada R$ 10 mil aplicados.',
        'Mesmo com a queda, o juro continua alto. Descontada a inflação, a renda fixa segue pagando cerca de 9% ao ano acima dos preços, um dos juros reais mais altos do mundo.',
      ],
    },
    {
      heading: 'Quem deve: o alívio chega devagar',
      paragraphs: [
        'Quando a Selic cai, o crédito tende a ficar mais barato, mas o repasse é lento e desigual. Cartão de crédito e cheque especial têm juros muito acima da Selic, e uma redução de 0,25 ponto praticamente não muda a taxa cobrada.',
        'Em um empréstimo pessoal de R$ 30.000 em 36 parcelas a 1,99% ao mês, a parcela é de R$ 1.175,10 e você paga R$ 12.303,46 só de juros. Cada décimo de ponto de taxa mensal importa mais do que o corte da Selic.',
        'Se você tem dívida cara, quitá-la costuma render mais do que qualquer investimento: pagar um cartão a mais de 10% ao mês é um retorno que nenhuma aplicação alcança.',
      ],
    },
    {
      heading: 'O que fazer agora',
      paragraphs: [
        'Para a reserva de emergência, títulos pós-fixados com liquidez diária, como o Tesouro Selic ou CDBs com liquidez, seguem atrativos. Compare sempre o rendimento líquido, depois do IR, e não apenas a taxa bruta.',
        'Para dívidas, compare o Custo Efetivo Total (CET) de cada proposta, que inclui tarifas e seguros, e simule o impacto no orçamento antes de assinar.',
      ],
    },
  ],
  faq: [
    {
      question: 'A Selic menor faz a poupança render menos?',
      answer:
        'Não neste patamar. Enquanto a Selic fica acima de 8,5% ao ano, a poupança rende 0,5% ao mês mais a TR, e essa regra não muda com os cortes atuais.',
    },
    {
      question: 'O que é o CDI?',
      answer:
        'É a taxa que os bancos pagam entre si em empréstimos de um dia. Ela fica muito perto da Selic e serve de referência para CDBs, LCIs e fundos de renda fixa.',
    },
    {
      question: 'A Selic mais baixa derruba a parcela do meu financiamento?',
      answer:
        'Só se o contrato for pós-fixado ou se você renegociar. Contratos com taxa prefixada mantêm a parcela combinada.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil: Comitê de Política Monetária (Copom)',
      url: 'https://www.bcb.gov.br/controleinflacao/historicotaxasjuros',
    },
    {
      label:
        'Banco Central do Brasil: Sistema Gerenciador de Séries Temporais, série 432 (meta Selic)',
    },
    {
      label: 'IBGE: IPCA, acumulado em 12 meses',
    },
    {
      label: 'Lei 11.033/2004: tabela regressiva do Imposto de Renda',
    },
  ],
} as const satisfies NewsDocument;
