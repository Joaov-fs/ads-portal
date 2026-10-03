import type { NewsDocument } from '../../types';

export const newsSalarioMinimo2027Orcamento = {
  kind: 'news',
  slug: 'salario-minimo-2027-orcamento-preve-r-1-741-veja-o-que-muda',
  title: 'Salário mínimo de 2027: Orçamento prevê R$ 1.741. Veja o que muda',
  description:
    'O projeto de Orçamento de 2027 prevê salário mínimo de R$ 1.741, alta de R$ 120. Veja o efeito em benefícios, INSS de autônomo, MEI e BPC, se o valor se confirmar.',
  category: 'economia',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-03',
  updatedAt: '2026-10-03',
  tags: ['salario-minimo', 'orcamento', 'inss', 'bpc', 'mei'],
  featuredCalculators: ['inss-autonomo', 'bpc', 'seguro-desemprego'],
  highlights: [
    {
      value: 'R$ 1.741',
      label: 'Previsto para 2027',
      note: 'Estimativa do projeto de Orçamento enviado ao Congresso.',
    },
    {
      value: '+ R$ 120',
      label: 'Aumento sobre os R$ 1.621',
      note: 'Equivale a 7,4%.',
    },
    {
      value: '31/08',
      label: 'Envio do projeto ao Congresso',
      note: 'O valor definitivo sai por decreto no fim do ano.',
    },
  ],
  sections: [
    {
      heading: 'O que o Orçamento de 2027 prevê para o salário mínimo',
      paragraphs: [
        'O projeto de lei do Orçamento de 2027, enviado pelo governo ao Congresso em 31 de agosto de 2026, estima o salário mínimo em R$ 1.741. É R$ 120 a mais que os R$ 1.621 em vigor hoje, um aumento de 7,4%.',
        'Por enquanto, o valor de 2026 continua valendo. O número do Orçamento é uma previsão: ele só vira valor oficial quando o governo publica o decreto do novo salário mínimo, normalmente no fim do ano, para valer a partir de 1º de janeiro.',
      ],
    },
    {
      heading: 'Por que o valor ainda pode mudar',
      paragraphs: [
        'O reajuste segue a regra de valorização em vigor: a inflação medida pelo INPC acumulada até novembro, mais o crescimento do PIB de dois anos antes, com o ganho real limitado a 2,5% ao ano pelas regras fiscais.',
        'Como o INPC de outubro e novembro ainda não foi divulgado, o número final pode ficar acima ou abaixo de R$ 1.741. As estimativas já mudaram durante o ano: em abril, a previsão era menor, de R$ 1.717.',
      ],
    },
    {
      heading: 'O que muda no bolso se o valor for confirmado',
      paragraphs: [
        'O salário mínimo é a base de vários pagamentos. A tabela mostra o efeito em valores de referência, calculados com R$ 1.741. Se o decreto trouxer outro número, as contas mudam na mesma proporção.',
      ],
      table: {
        caption: 'Efeito de um salário mínimo de R$ 1.741',
        columns: ['Referência', 'Hoje (R$ 1.621)', 'Com R$ 1.741'],
        rows: [
          [
            'Piso de aposentadorias e pensões e valor do BPC',
            'R$ 1.621,00',
            'R$ 1.741,00',
          ],
          ['Piso do seguro-desemprego', 'R$ 1.621,00', 'R$ 1.741,00'],
          ['Renda por pessoa do BPC (1/4 do mínimo)', 'R$ 405,25', 'R$ 435,25'],
          [
            'INSS de autônomo, plano simplificado (11%)',
            'R$ 178,31',
            'R$ 191,51',
          ],
          ['INSS de autônomo, plano normal (20%)', 'R$ 324,20', 'R$ 348,20'],
          [
            'DAS do MEI, comércio e indústria (5% + R$ 1 de ICMS)',
            'R$ 82,05',
            'R$ 88,05',
          ],
          ['DAS do MEI, serviços (5% + R$ 5 de ISS)', 'R$ 86,05', 'R$ 92,05'],
        ],
      },
    },
    {
      heading: 'Quem sai ganhando e quem paga mais',
      paragraphs: [
        'Para quem recebe um salário mínimo, o aumento chega integral: R$ 120 a mais por mês, ou R$ 1.560 em 13 parcelas, contando o 13º salário ou o 13º do benefício. Aposentados e pensionistas do piso e beneficiários do BPC são os mais diretamente atingidos.',
        'Do outro lado, quem contribui sobre o mínimo paga mais. Um autônomo no plano simplificado passa de R$ 178,31 para R$ 191,51 por mês (R$ 13,20 a mais), e o MEI passa a pagar R$ 6,00 a mais no DAS, porque a parte do INSS é 5% do salário mínimo.',
        'Outros números de 2027, como o teto do INSS e a tabela do Imposto de Renda, ainda não foram definidos. A isenção do IR até R$ 5.000 em vigor é regida por lei própria e não depende do salário mínimo.',
      ],
    },
  ],
  faq: [
    {
      question: 'O salário mínimo de 2027 já está definido em R$ 1.741?',
      answer:
        'Não. R$ 1.741 é a previsão do projeto de Orçamento. O valor oficial sai por decreto no fim do ano, depois da divulgação do INPC.',
    },
    {
      question: 'Qual é o salário mínimo em vigor hoje?',
      answer:
        'R$ 1.621 por mês em 2026. Benefícios do INSS, BPC e seguro-desemprego continuam calculados com esse valor até o novo decreto.',
    },
    {
      question: 'Quem recebe mais de um salário mínimo também tem reajuste?',
      answer:
        'Os benefícios do INSS acima do piso têm reajuste próprio, pela inflação, em janeiro. Esse índice não é o mesmo do salário mínimo.',
    },
  ],
  sources: [
    { label: 'Projeto de Lei Orçamentária Anual de 2027 (PLOA 2027)' },
    { label: 'Ministério do Planejamento e Orçamento' },
    { label: 'Lei de valorização do salário mínimo' },
  ],
} as const satisfies NewsDocument;
