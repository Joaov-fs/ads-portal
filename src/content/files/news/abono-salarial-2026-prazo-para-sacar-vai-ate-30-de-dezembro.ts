import type { NewsDocument } from '../../types';

export const newsAbonoSalarial2026PrazoParaSacarVaiAte30DeDezembro = {
  kind: 'news',
  slug: 'abono-salarial-2026-prazo-para-sacar-vai-ate-30-de-dezembro',
  title:
    'Abono salarial PIS/Pasep 2026: quem ainda não sacou tem até 30 de dezembro; veja quanto é',
  description:
    'O abono varia de cerca de R$ 135 a R$ 1.621, conforme os meses trabalhados em 2024. Veja as regras e como conferir se você tem direito.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['pis', 'abono', 'beneficios', 'trabalho', 'salario'],
  featuredCalculators: ['pis', 'salario-liquido'],
  highlights: [
    {
      value: '30/12/2026',
      label: 'Prazo final para sacar',
      note: 'O valor fica disponível até essa data.',
    },
    {
      value: 'R$ 1.621,00',
      label: 'Valor máximo',
      note: 'Para quem trabalhou 12 meses em 2024.',
    },
    {
      value: 'R$ 135,08',
      label: 'Valor por mês trabalhado',
      note: 'Um salário mínimo dividido por 12.',
    },
    {
      value: 'até R$ 2.766',
      label: 'Remuneração média mensal',
      note: 'Limite informado pelo Ministério do Trabalho.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito',
      paragraphs: [
        'O abono salarial do ciclo de 2026 tem como base o ano de 2024. Segundo o Ministério do Trabalho e Emprego, tem direito quem estava inscrito no PIS/Pasep há pelo menos 5 anos, trabalhou com carteira assinada por pelo menos 30 dias em 2024, teve remuneração média mensal de até 2 salários mínimos (R$ 2.766, na referência do ministério) e teve os dados informados corretamente pelo empregador.',
        'Os calendários de pagamento já terminaram, e o dinheiro não sacado fica disponível até 30 de dezembro de 2026.',
      ],
    },
    {
      heading: 'Quanto você recebe',
      paragraphs: [
        'O valor é proporcional aos meses trabalhados: o salário mínimo atual, de R$ 1.621, dividido por 12 e multiplicado pelos meses de trabalho em 2024. Mês com 15 dias ou mais conta como inteiro.',
      ],
      table: {
        caption: 'Abono salarial por meses trabalhados',
        columns: ['Meses trabalhados em 2024', 'Valor do abono'],
        rows: [
          ['1', 'R$ 135,08'],
          ['3', 'R$ 405,25'],
          ['6', 'R$ 810,50'],
          ['8', 'R$ 1.080,67'],
          ['12', 'R$ 1.621,00'],
        ],
      },
    },
    {
      heading: 'Como consultar e sacar',
      paragraphs: [
        'Consulte no aplicativo Carteira de Trabalho Digital ou no portal gov.br se você tem direito e se há valor disponível. Trabalhadores da iniciativa privada (PIS) sacam na Caixa, no aplicativo CAIXA Trabalhador ou em agência lotérica; servidores (Pasep) sacam no Banco do Brasil.',
        'Se os seus dados não aparecem, o primeiro passo é pedir ao antigo empregador que corrija a informação enviada ao governo, já que o direito depende dela.',
      ],
    },
  ],
  faq: [
    {
      question: 'Perdi o prazo. Posso receber depois?',
      answer:
        'O valor volta ao Fundo de Amparo ao Trabalhador e o saque deixa de ser possível. Por isso o prazo de 30 de dezembro merece atenção.',
    },
    {
      question: 'Servidor público tem direito?',
      answer:
        'Sim, quando cumpre as regras. O Pasep é pago pelo Banco do Brasil aos servidores públicos, e o PIS é pago pela Caixa aos trabalhadores da iniciativa privada.',
    },
    {
      question: 'Quem trabalhou menos de um ano recebe?',
      answer: 'Sim, proporcionalmente, desde que cumpra os demais requisitos.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego — Abono Salarial',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/abono-salarial',
    },
    {
      label: 'Caixa Econômica Federal — Abono Salarial PIS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/abono-salarial/Paginas/default.aspx',
    },
    {
      label: 'Lei 7.998/1990 — Programa do Seguro-Desemprego e Abono Salarial',
    },
  ],
} as const satisfies NewsDocument;
