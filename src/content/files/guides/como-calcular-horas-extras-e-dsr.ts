import type { GuideDocument } from '../../types';

export const guideComoCalcularHorasExtrasEDsr = {
  kind: 'guide',
  slug: 'como-calcular-horas-extras-e-dsr',
  title:
    'Como calcular horas extras: adicional de 50%, 100% e o reflexo no DSR',
  description:
    'Ache o valor da hora, aplique o adicional de 50% ou 100% e some o DSR, com dois exemplos de salário em reais.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-28',
  updatedAt: '2026-10-02',
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
      value: 'Em dobro',
      label: 'Domingos e feriados sem folga',
      note: 'O adicional sobe para 100%.',
    },
    {
      value: 'R$ 640,38',
      label: 'Extras do exemplo de R$ 3.300',
      note: '18 h a 50%, 5 h a 100% e o DSR.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: o valor da hora normal',
      paragraphs: [
        'Divida o salário mensal pelas horas contratadas no mês. Em uma jornada de 44 horas por semana, o divisor é 220; em 40 horas por semana, é 200; em 36 horas, é 180. Um erro frequente é usar 240 (30 dias vezes 8 horas), que deixa a hora mais barata do que a lei exige.',
        'Se há adicionais fixos que integram a remuneração, como insalubridade, periculosidade ou adicional noturno habitual, eles entram na base antes da divisão.',
      ],
    },
    {
      heading: 'Passo 2: aplique o adicional',
      paragraphs: [
        'A hora extra paga, no mínimo, 50% a mais que a hora normal. Em domingos e feriados trabalhados sem folga compensatória, o TST entende que o pagamento é em dobro (Lei 605/1949 e Súmula 146), o que na prática equivale a 100% a mais. Convenções coletivas podem fixar adicionais maiores, então confira a da sua categoria.',
        'A jornada normal é de até 8 horas por dia, e o limite de horas extras é de 2 por dia, salvo regra específica em acordo ou convenção coletiva.',
      ],
    },
    {
      heading: 'Passo 3: some o reflexo no descanso semanal',
      paragraphs: [
        'O salário mensal já paga o descanso semanal remunerado (DSR) de quem não tem extras, mas as horas extras habituais geram reflexo nele (Súmula 172 do TST). A conta é: total das extras dividido pelos dias úteis do mês e multiplicado pelos domingos e feriados. Dias úteis, aqui, são os dias de trabalho de segunda a sábado, sem feriados.',
      ],
    },
    {
      heading:
        'Exemplo 1: salário de R$ 3.300, mês com 26 dias úteis e 4 repousos',
      paragraphs: [
        'A hora normal é R$ 3.300 ÷ 220 = R$ 15,00. Uma hora extra a 50% vale R$ 22,50, e uma hora a 100% vale R$ 30,00. O empregado fez 18 horas a 50% e 5 horas a 100% (um domingo trabalhado sem folga).',
        'O DSR é R$ 555,00 ÷ 26 × 4 = R$ 85,38. No total, as extras rendem R$ 640,38 brutos, e sobre esse valor entram INSS (12% nessa faixa, ou cerca de R$ 76,85) e eventualmente Imposto de Renda. Aqui o IRRF é zero, porque a remuneração total de R$ 3.940,38 fica abaixo de R$ 5.000.',
      ],
      table: {
        caption:
          'Horas extras de quem ganha R$ 3.300 (hora normal de R$ 15,00)',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['18 h extras a 50%', '18 × R$ 22,50', 'R$ 405,00'],
          ['5 h extras a 100%', '5 × R$ 30,00', 'R$ 150,00'],
          ['Subtotal das extras', 'R$ 405,00 + R$ 150,00', 'R$ 555,00'],
          ['Reflexo no DSR', 'R$ 555,00 ÷ 26 × 4', 'R$ 85,38'],
          ['Total bruto das extras', '', 'R$ 640,38'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: salário de R$ 2.200, mês com 5 domingos',
      paragraphs: [
        'Mês com 25 dias úteis e 5 repousos. A hora normal é R$ 2.200 ÷ 220 = R$ 10,00, e a hora extra a 50% vale R$ 15,00. Com 12 horas extras, o valor é R$ 180,00. O DSR é R$ 180,00 ÷ 25 × 5 = R$ 36,00, para um total de R$ 216,00. Repare que, com mais repousos no mês, o reflexo cresce, e é por isso que o DSR muda de mês para mês.',
      ],
    },
    {
      heading: 'O que também muda: reflexos, ponto e exceções',
      paragraphs: [
        'As extras habituais refletem em férias, 13º salário, FGTS e aviso prévio. Por isso, uma hora extra não paga corretamente gera diferenças em vários pagamentos depois. O adicional noturno (20% sobre a hora entre 22h e 5h) também entra na base da hora extra feita à noite.',
        'O ponto precisa registrar a jornada de empresas com mais de 20 empregados. Variações de até 5 minutos em cada marcação, no limite de 10 por dia, não contam. Cargos de gestão com função de confiança e trabalho externo sem controle de horário ficam de fora da regra (art. 62 da CLT).',
        'O banco de horas permite compensar extras com folgas em vez de pagar. Por acordo individual escrito, a compensação deve ocorrer em até 6 meses; por acordo ou convenção coletiva, em até 12 meses. Vencido o prazo, as horas devem ser pagas com o adicional.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Compare o holerite com o espelho de ponto: horas extras, adicionais e DSR devem aparecer em linhas separadas. Se faltar pagamento, peça a correção por escrito ao RH e guarde os registros. Se não houver solução, procure o sindicato ou o Ministério do Trabalho e Emprego.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hora extra tem INSS e Imposto de Renda?',
      answer:
        'Sim. Ela compõe a remuneração e entra na base do INSS e do IRRF, assim como o DSR sobre ela.',
    },
    {
      question: 'O DSR sobre hora extra é pago a quem recebe salário mensal?',
      answer:
        'Sim. O salário mensal já inclui o descanso, mas as horas extras habituais geram um reflexo separado, de acordo com a Súmula 172 do TST.',
    },
    {
      question: 'Quantas horas extras posso fazer por dia?',
      answer:
        'No máximo 2 horas por dia, salvo regra diferente em acordo ou convenção coletiva.',
    },
    {
      question: 'Hora extra noturna paga mais?',
      answer:
        'Sim. Soma-se o adicional noturno de, no mínimo, 20% ao adicional da hora extra, o que eleva o valor de cada hora.',
    },
    {
      question: 'A empresa pode trocar a hora extra por folga?',
      answer:
        'Sim, pelo banco de horas, desde que respeite o acordo e os prazos de 6 ou 12 meses. Fora do prazo, as horas viram pagamento.',
    },
  ],
  sources: [
    {
      label: 'CLT — arts. 58 a 62 e 73 (jornada, extras e adicional noturno)',
    },
    {
      label: 'Constituição Federal, art. 7º',
    },
    {
      label: 'Lei 605/1949 — repouso semanal remunerado',
    },
    {
      label: 'Súmula 172 do TST — reflexo no repouso semanal',
    },
    {
      label: 'Súmula 146 do TST — trabalho em domingos e feriados',
    },
  ],
} as const satisfies GuideDocument;
