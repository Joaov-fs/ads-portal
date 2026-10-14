import type { CalculatorEditorialMap } from './types';

export const editorialInss: CalculatorEditorialMap = {
  'retroativos-inss': {
    example: {
      paragraphs: [
        'Uma pessoa pediu o benefício em 10/03/2026, teve o direito reconhecido e recebeu o primeiro pagamento regular em 05/09/2026. A renda mensal é de R$ 1.800,00. Entre as duas datas passam 179 dias, o que dá 5 meses completos e 29 dias na conta de 30 dias por mês.',
        'Cada dia vale R$ 60,00 (R$ 1.800,00 dividido por 30). Os 5 meses completos somam R$ 9.000,00 e os 29 dias restantes, R$ 1.740,00. Os retroativos estimados são de R$ 10.740,00, antes de correção monetária e de eventual Imposto de Renda.',
      ],
      table: {
        caption: 'Cálculo dos retroativos no exemplo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Mensalidade do benefício', 'R$ 1.800,00'],
          ['Valor de cada dia', 'R$ 60,00'],
          ['Dias entre as datas', '179'],
          ['Meses completos', 'R$ 9.000,00'],
          ['Dias restantes', 'R$ 1.740,00'],
          ['Retroativos estimados', 'R$ 10.740,00'],
        ],
      },
    },
    factors: [
      'O que mais pesa é a data de início do direito. Em muitos benefícios, ela é a data do requerimento (DER), e por isso pedir cedo evita perder meses. Quanto maior o intervalo até o primeiro pagamento, maior o valor acumulado.',
      'A mensalidade também importa: benefícios no piso acumulam menos que os de renda maior. Se o INSS concedeu o benefício com um valor e depois o revisou, o cálculo pode ser feito em partes. Parcelas já pagas devem ser descontadas.',
    ],
    mistakes: [
      'O erro mais comum é contar a partir da data em que a perícia foi feita ou da data da decisão, quando o direito pode retroagir ao pedido. Outro é esquecer que parte do período já pode ter sido paga. Confira a data de início e os pagamentos no extrato do Meu INSS antes de preencher.',
    ],
    faq: [
      {
        question: 'O que são os retroativos do INSS?',
        answer:
          'São as parcelas do benefício devidas desde a data de início do direito até o primeiro pagamento regular. Surgem quando a análise demora mais que o mês do pedido.',
      },
      {
        question: 'A calculadora inclui correção e juros?',
        answer:
          'Não. Ela faz a conta simples de mensalidade por dia. O INSS corrige os atrasados e, em ações judiciais, podem entrar juros, então o valor real tende a ser maior.',
      },
      {
        question: 'Onde vejo o valor oficial dos atrasados?',
        answer:
          'No Meu INSS, no extrato de pagamentos e na carta de concessão. Lá aparecem a data de início, a renda mensal e o que foi pago em cada competência.',
      },
    ],
  },

  'prazo-prorrogacao-auxilio-inss': {
    example: {
      paragraphs: [
        'Um segurado começou a receber o auxílio por incapacidade temporária em 01/09/2026 e a alta programada (cessação) é 29/11/2026. O benefício dura 90 dias contando os dois extremos.',
        'A janela de pedido de prorrogação vai de 14/11/2026 a 29/11/2026, os 15 dias que antecedem a cessação. Se a incapacidade continua, é nesse período que o pedido deve ser feito pelo Meu INSS, com o atestado atualizado.',
      ],
      table: {
        caption: 'Datas do exemplo',
        columns: ['Etapa', 'Data'],
        rows: [
          ['Início do benefício', '01/09/2026'],
          ['Primeiro dia para pedir a prorrogação', '14/11/2026'],
          ['Cessação programada (alta)', '29/11/2026'],
          ['Dias de benefício', '90'],
        ],
      },
    },
    factors: [
      'A data de cessação (DCB) é o que define a janela. Ela aparece no Meu INSS e na carta de concessão. Se o INSS mudar a data, refaça a conta com a nova.',
      'Os 90 dias são o limite para a análise do atestado sem perícia presencial, somados entre períodos não consecutivos. Benefícios mais longos podem exigir perícia.',
    ],
    mistakes: [
      'O erro mais comum é esperar a alta chegar para pedir: depois da cessação, o caminho pode ser um novo pedido de benefício. Outro é pedir cedo demais, antes da janela, e ter o pedido recusado. Marque a data de abertura no calendário.',
    ],
    faq: [
      {
        question: 'Quando posso pedir a prorrogação do auxílio?',
        answer:
          'Nos 15 dias que antecedem a data de cessação do benefício. Informe a data na calculadora para ver o primeiro dia da janela.',
      },
      {
        question: 'O que acontece se eu perder o prazo?',
        answer:
          'Pode ser necessário fazer um novo pedido de benefício, com nova análise. O caminho exato aparece no Meu INSS, e a Central 135 pode orientar.',
      },
      {
        question: 'A calculadora garante a prorrogação?',
        answer:
          'Não. Ela só calcula as datas. A prorrogação depende da análise do INSS e do atestado que comprove que a incapacidade continua.',
      },
    ],
  },

  'aposentadoria-por-idade': {
    example: {
      paragraphs: [
        'Uma mulher de 63 anos tem 22 anos de contribuição e média de salários de R$ 3.200,00. A idade mínima é 62 anos e a contribuição mínima, 15 anos, então os dois requisitos estão cumpridos.',
        'Ela tem 7 anos de contribuição acima dos 15 exigidos, o que soma 14% aos 60% básicos, chegando a 74%. A aposentadoria estimada é de R$ 2.368,00 por mês, entre o piso e o teto do INSS.',
      ],
      table: {
        caption: 'Cálculo da aposentadoria no exemplo',
        columns: ['Item', 'Valor'],
        rows: [
          ['Idade mínima da mulher', '62 anos'],
          ['Contribuição mínima da mulher', '15 anos'],
          ['Anos acima do mínimo', '7'],
          ['Percentual (60% + 2% por ano)', '74%'],
          ['Média dos salários', 'R$ 3.200,00'],
          ['Aposentadoria estimada', 'R$ 2.368,00'],
        ],
      },
    },
    factors: [
      'Três fatores definem o valor: o tempo de contribuição, que sobe o percentual em 2% por ano acima do mínimo, a média de todos os salários desde julho de 1994 e os limites de piso e teto. Contribuir mais anos sempre aumenta o percentual.',
      'A média é puxada para baixo por períodos de salário baixo ou sem contribuição. Consultar o CNIS ajuda a ver lacunas e a corrigi-las antes do pedido.',
    ],
    mistakes: [
      'Quem começou a contribuir antes de 13/11/2019 pode estar em regra de transição, com idade e tempo diferentes, e a calculadora usa a regra permanente. Outro erro é informar o último salário em vez da média de todos os salários.',
    ],
    faq: [
      {
        question: 'Qual a idade mínima para a aposentadoria por idade?',
        answer:
          'Na regra permanente, 62 anos para mulheres e 65 para homens, com 15 anos de contribuição para elas e 20 para eles.',
      },
      {
        question: 'Como o valor da aposentadoria é calculado?',
        answer:
          'Parte de 60% da média dos salários e soma 2% para cada ano de contribuição acima de 15 (mulher) ou 20 (homem), respeitando o salário mínimo e o teto do INSS.',
      },
      {
        question:
          'A calculadora vale para quem já contribuía antes da reforma?',
        answer:
          'Ela usa a regra permanente. Quem estava no sistema antes de 13/11/2019 pode ter regras de transição melhores ou diferentes, que devem ser conferidas no Meu INSS.',
      },
    ],
  },
};
