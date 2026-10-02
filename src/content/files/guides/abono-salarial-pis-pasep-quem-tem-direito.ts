import type { GuideDocument } from '../../types';

export const guideAbonoSalarialPisPasepQuemTemDireito = {
  kind: 'guide',
  slug: 'abono-salarial-pis-pasep-quem-tem-direito',
  title:
    'Abono salarial PIS/Pasep: quem tem direito, quanto recebe e onde sacar',
  description:
    'As regras do abono do ano-base 2024, a tabela por meses trabalhados e como conferir se há valor para você.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['pis', 'pasep', 'abono', 'beneficios', 'trabalho'],
  featuredCalculators: ['pis', 'salario-liquido', 'ferias'],
  highlights: [
    {
      value: 'R$ 1.621',
      label: 'Valor máximo',
      note: 'Para quem trabalhou 12 meses em 2024.',
    },
    {
      value: 'R$ 135,08',
      label: 'Valor por mês trabalhado',
      note: 'Salário mínimo dividido por 12.',
    },
    {
      value: '30 de dezembro',
      label: 'Limite para sacar em 2026',
      note: 'Quem não retirou ainda tem prazo.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito',
      paragraphs: [
        'Tem direito o trabalhador inscrito no PIS/Pasep há pelo menos 5 anos, que trabalhou com carteira assinada por pelo menos 30 dias em 2024, com remuneração média mensal de até 2 salários mínimos (R$ 2.766, segundo o Ministério do Trabalho), e com os dados informados corretamente pelo empregador.',
      ],
    },
    {
      heading: 'Quanto você recebe',
      paragraphs: [
        'O valor é proporcional aos meses trabalhados: um salário mínimo dividido por 12 vezes os meses. O mês com 15 dias ou mais conta como inteiro.',
      ],
      table: {
        caption: 'Abono por meses trabalhados em 2024',
        columns: ['Meses', 'Valor'],
        rows: [
          ['1', 'R$ 135,08'],
          ['3', 'R$ 405,25'],
          ['6', 'R$ 810,50'],
          ['9', 'R$ 1.215,75'],
          ['12', 'R$ 1.621,00'],
        ],
      },
    },
    {
      heading: 'Onde conferir e sacar',
      paragraphs: [
        'Consulte a Carteira de Trabalho Digital ou o portal gov.br. O PIS (iniciativa privada) é pago pela Caixa, pelo aplicativo CAIXA Trabalhador ou em lotéricas, e o Pasep (servidores), pelo Banco do Brasil.',
      ],
    },
    {
      heading: 'Dados divergentes',
      paragraphs: [
        'Se você acha que tem direito e não aparece nada, o motivo mais comum é o empregador ter informado dados incorretos na RAIS ou no eSocial. Peça a correção ao empregador e acompanhe o status no aplicativo.',
      ],
    },
  ],
  faq: [
    {
      question: 'O abono é pago junto com o salário?',
      answer:
        'Não. É um benefício separado, pago por calendário, e quem não retirou até o prazo perde o valor daquele ciclo.',
    },
    {
      question: 'Quem trabalhou menos de um ano recebe?',
      answer:
        'Sim, proporcional aos meses trabalhados, se tiver pelo menos 30 dias de trabalho no ano-base.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego — Abono Salarial',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/abono-salarial',
    },
    {
      label: 'Caixa Econômica Federal — PIS',
    },
    {
      label: 'Banco do Brasil — Pasep',
    },
  ],
} as const satisfies GuideDocument;
