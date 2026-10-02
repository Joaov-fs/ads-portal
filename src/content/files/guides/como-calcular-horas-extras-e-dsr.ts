import type { GuideDocument } from '../../types';

export const guideComoCalcularHorasExtrasEDsr = {
  kind: 'guide',
  slug: 'como-calcular-horas-extras-e-dsr',
  title:
    'Como calcular horas extras: adicional de 50%, 100% e o reflexo no DSR',
  description:
    'Entenda a hora normal, quanto vale cada hora extra, quando o adicional sobe para 100% e como o descanso semanal remunerado entra na conta.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['horas-extras', 'dsr', 'trabalho', 'salario'],
  featuredCalculators: [
    'horas-extras',
    'dsr',
    'salario-por-hora',
    'adicional-noturno',
  ],
  highlights: [
    {
      value: '50%',
      label: 'Adicional mínimo',
      note: 'Em dias úteis e sábados.',
    },
    {
      value: '100%',
      label: 'Domingos e feriados',
      note: 'Quando não há folga compensatória.',
    },
    {
      value: '2 horas',
      label: 'Limite diário de horas extras',
      note: 'Salvo acordo ou convenção coletiva.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: o valor da hora normal',
      paragraphs: [
        'Divida o salário mensal pelas horas do mês. Em uma jornada de 44 horas semanais, o divisor é 220. Com salário de R$ 2.640, a hora normal vale R$ 12,00.',
      ],
    },
    {
      heading: 'Passo 2: o adicional',
      paragraphs: [
        'A hora extra é paga com adicional de, no mínimo, 50%. Em domingos e feriados trabalhados sem folga compensatória costuma-se pagar 100%. Convenções coletivas podem fixar adicionais maiores.',
      ],
      table: {
        caption: 'Exemplo: salário de R$ 2.640 (hora normal de R$ 12,00)',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['20 h extras a 50%', '20 × R$ 18,00', 'R$ 360,00'],
          ['6 h extras a 100%', '6 × R$ 24,00', 'R$ 144,00'],
          ['Reflexo no DSR', 'R$ 504 ÷ 26 dias úteis × 4 repousos', 'R$ 77,54'],
          ['Total bruto das horas extras', '', 'R$ 581,54'],
        ],
      },
    },
    {
      heading: 'Passo 3: o descanso semanal',
      paragraphs: [
        'Quem recebe hora extra habitual tem reflexo no descanso semanal remunerado (DSR). A conta divide o total das extras pelos dias úteis do mês e multiplica pelos domingos e feriados. Esse valor é somado ao pagamento.',
      ],
    },
    {
      heading: 'Cuidados',
      paragraphs: [
        'Horas extras também refletem em férias, 13º e FGTS. Confirme se a empresa registra o ponto e o banco de horas, e guarde os comprovantes. Se a hora extra for noturna, o adicional noturno de 20% entra na base.',
      ],
    },
  ],
  faq: [
    {
      question: 'O que é banco de horas?',
      answer:
        'É a compensação das horas extras por folgas, em vez de pagamento em dinheiro. Há prazos para compensar: no mesmo mês, em até 6 meses ou em até 12 meses, conforme o tipo de acordo.',
    },
    {
      question: 'Hora extra tem INSS e IR?',
      answer: 'Sim, ela compõe a remuneração e entra na base dos descontos.',
    },
  ],
  sources: [
    {
      label: 'CLT — Consolidação das Leis do Trabalho',
    },
    {
      label: 'Constituição Federal, art. 7º',
    },
    {
      label: 'Súmula 172 do TST — reflexo no repouso semanal',
    },
  ],
} as const satisfies GuideDocument;
