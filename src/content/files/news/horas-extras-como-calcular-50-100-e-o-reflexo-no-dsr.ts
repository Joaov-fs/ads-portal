import type { NewsDocument } from '../../types';

export const newsHorasExtrasComoCalcular50100EOReflexoNoDsr = {
  kind: 'news',
  slug: 'horas-extras-como-calcular-50-100-e-o-reflexo-no-dsr',
  title:
    'Horas extras: como calcular os adicionais de 50% e 100% e o reflexo no descanso semanal',
  description:
    'Exemplo com salário de R$ 2.640: a hora normal vale R$ 12, a extra a 50% vale R$ 18 e o mês fecha com R$ 581,54 em horas extras.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['horas-extras', 'trabalho', 'salario', 'direitos', 'dsr'],
  featuredCalculators: ['horas-extras', 'dsr', 'banco-de-horas'],
  highlights: [
    {
      value: 'R$ 12,00',
      label: 'Hora normal',
      note: 'Salário de R$ 2.640 ÷ 220 horas.',
    },
    {
      value: 'R$ 18,00',
      label: 'Hora extra a 50%',
      note: 'Dias úteis e sábados.',
    },
    {
      value: 'R$ 24,00',
      label: 'Hora extra a 100%',
      note: 'Domingos e feriados sem folga compensatória.',
    },
    {
      value: 'R$ 581,54',
      label: 'Total do exemplo',
      note: 'Com o reflexo no DSR.',
    },
  ],
  sections: [
    {
      heading: 'Como o valor da hora extra é calculado',
      paragraphs: [
        'Divida o salário pela jornada mensal para chegar ao valor da hora normal: 220 horas para quem trabalha 44 horas por semana, 200 para 40 horas. Em cima desse valor, a hora extra paga pelo menos 50% a mais, por determinação da Constituição, e muitas convenções coletivas fixam percentuais maiores.',
        'Domingos e feriados trabalhados sem folga compensatória costumam ser pagos com 100% de adicional, o dobro da hora normal.',
      ],
    },
    {
      heading: 'Exemplo: salário de R$ 2.640',
      paragraphs: [
        'Veja um mês com 20 horas extras comuns e 6 horas em domingos e feriados, com 26 dias úteis e 4 de repouso.',
      ],
      table: {
        caption: 'Horas extras de um mês',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['Hora normal', 'R$ 2.640 ÷ 220', 'R$ 12,00'],
          ['20 horas a 50%', '20 × R$ 18,00', 'R$ 360,00'],
          ['6 horas a 100%', '6 × R$ 24,00', 'R$ 144,00'],
          ['Reflexo no DSR', 'R$ 504 ÷ 26 × 4', 'R$ 77,54'],
          ['Total bruto', '', 'R$ 581,54'],
        ],
      },
    },
    {
      heading: 'Reflexo no descanso semanal',
      paragraphs: [
        'As horas extras habituais refletem no descanso semanal remunerado (DSR), que também é pago sobre elas. A conta rateia o valor das horas extras pelos dias úteis e multiplica pelos domingos e feriados do mês. Esse valor costuma aparecer em uma linha separada no holerite.',
      ],
    },
    {
      heading: 'Limites e compensação',
      paragraphs: [
        'A jornada normal pode ser acrescida de até 2 horas por dia. Em vez de pagar, a empresa pode compensar as horas em um banco de horas, por acordo individual (compensação em até 6 meses) ou coletivo (até 12 meses). Horas não compensadas no prazo devem ser pagas com o adicional.',
      ],
    },
  ],
  faq: [
    {
      question: 'Horas extras têm INSS e IR?',
      answer:
        'Sim. Elas somam ao salário na base de cálculo dos dois, e o líquido sobe menos do que o bruto.',
    },
    {
      question: 'Gerente tem direito a horas extras?',
      answer:
        'Cargos de gestão com poderes reais de mando podem ser excluídos do controle de jornada. O enquadramento depende de cada caso.',
    },
    {
      question: 'Hora extra entra no 13º e nas férias?',
      answer: 'Sim, pela média do ano, quando são habituais.',
    },
  ],
  sources: [
    {
      label: 'Constituição Federal, art. 7º, XVI — adicional de hora extra',
    },
    {
      label:
        'CLT, arts. 58, 59 e 59-B — jornada, horas extras e banco de horas',
    },
    {
      label:
        'Súmula 172 do Tribunal Superior do Trabalho — reflexo no repouso semanal',
    },
    {
      label: 'Ministério do Trabalho e Emprego — jornada de trabalho',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies NewsDocument;
