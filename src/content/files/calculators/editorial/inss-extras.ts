import type { ContentSection } from '../../../types';

/** Seções extras das calculadoras do INSS, calculadas pelo motor. Gerado por scripts do scratchpad. */
export const inssExtras: Readonly<Record<string, readonly ContentSection[]>> = {
  'retroativos-inss': [
    {
      heading: 'Tabela de referência: retroativos por mensalidade e atraso',
      paragraphs: [
        'A tabela aplica a regra de mensalidade dividida por 30 e multiplicada pelos dias de atraso, em valores brutos e sem correção monetária. Ela serve para ter uma ordem de grandeza antes de conferir o valor no extrato do Meu INSS.',
        'Lembre que o direito pode começar em data diferente do pedido, e que parcelas já pagas precisam ser descontadas.',
      ],
      table: {
        caption: 'Retroativos estimados (sem correção)',
        columns: [
          'Dias de atraso',
          'Benefício de R$ 1.621,00',
          'Benefício de R$ 2.000,00',
          'Benefício de R$ 3.000,00',
        ],
        rows: [
          ['30 dias', 'R$ 1.621,00', 'R$ 2.000,00', 'R$ 3.000,00'],
          ['60 dias', 'R$ 3.242,00', 'R$ 4.000,00', 'R$ 6.000,00'],
          ['90 dias', 'R$ 4.863,00', 'R$ 6.000,00', 'R$ 9.000,00'],
          ['180 dias', 'R$ 9.726,00', 'R$ 12.000,00', 'R$ 18.000,00'],
          ['360 dias', 'R$ 19.452,00', 'R$ 24.000,00', 'R$ 36.000,00'],
        ],
      },
    },
  ],
  'prazo-prorrogacao-auxilio-inss': [
    {
      heading:
        'Tabela de referência: datas de um benefício que começa em 03/11/2026',
      paragraphs: [
        'A tabela mostra, para benefícios de durações comuns que começam em 03/11/2026, a data de cessação e o primeiro dia da janela de 15 dias para pedir a prorrogação. Os prazos são contados em dias corridos, incluindo o dia de início.',
        'O prazo concedido é decidido pelo perito ou pelo atestado aceito, e pode ser diferente dos valores da tabela.',
      ],
      table: {
        caption: 'Janela de pedido de prorrogação',
        columns: [
          'Dias concedidos',
          'Data de cessação',
          'Primeiro dia para pedir',
        ],
        rows: [
          ['30 dias', '02/12/2026', '17/11/2026'],
          ['60 dias', '01/01/2027', '17/12/2026'],
          ['90 dias', '31/01/2027', '16/01/2027'],
          ['120 dias', '02/03/2027', '15/02/2027'],
          ['180 dias', '01/05/2027', '16/04/2027'],
        ],
      },
    },
  ],
  'aposentadoria-por-idade': [
    {
      heading:
        'Tabela de referência: aposentadoria por idade por média salarial',
      paragraphs: [
        'A tabela aplica a regra permanente a quem já cumpre a idade mínima, com 15 e 25 anos de contribuição para a mulher e 20 e 30 anos para o homem. Os valores respeitam o piso e o teto do INSS.',
        'Veja que a média salarial pesa tanto quanto o tempo: com mais anos de contribuição o percentual sobe, mas a base continua sendo a média de todo o histórico.',
      ],
      table: {
        caption: 'Aposentadoria por idade estimada',
        columns: [
          'Média dos salários',
          'Mulher, 15 anos',
          'Mulher, 25 anos',
          'Homem, 20 anos',
          'Homem, 30 anos',
        ],
        rows: [
          [
            'R$ 2.000,00',
            'R$ 1.621,00',
            'R$ 1.621,00',
            'R$ 1.621,00',
            'R$ 1.621,00',
          ],
          [
            'R$ 3.000,00',
            'R$ 1.800,00',
            'R$ 2.400,00',
            'R$ 1.800,00',
            'R$ 2.400,00',
          ],
          [
            'R$ 5.000,00',
            'R$ 3.000,00',
            'R$ 4.000,00',
            'R$ 3.000,00',
            'R$ 4.000,00',
          ],
        ],
      },
    },
  ],
};
