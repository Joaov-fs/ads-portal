import type { GuideDocument } from '../../types';

export const guideReajusteDoAluguelComoCalcularIgpMOuIpca = {
  kind: 'guide',
  slug: 'reajuste-do-aluguel-como-calcular-igp-m-ou-ipca',
  title: 'Reajuste do aluguel: como calcular com IGP-M ou IPCA',
  description:
    'O que diz a lei, como aplicar o índice do contrato e quanto o aluguel muda com IGP-M de 3,35% e IPCA de 4,22%, em exemplos de R$ 1.500 a R$ 3.000.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['aluguel', 'igp-m', 'ipca', 'reajuste', 'imovel'],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem', 'juros-compostos'],
  highlights: [
    {
      value: '3,35%',
      label: 'IGP-M em 12 meses',
      note: 'Referência usada em muitos contratos.',
    },
    {
      value: '4,22%',
      label: 'IPCA em 12 meses',
      note: 'Alternativa comum.',
    },
    {
      value: '12 meses',
      label: 'Periodicidade mínima',
      note: 'O reajuste só vale após um ano.',
    },
  ],
  sections: [
    {
      heading: 'Como é feito',
      paragraphs: [
        'O reajuste ocorre uma vez ao ano, aplicando ao aluguel o índice previsto no contrato. Multiplique o valor atual por 1 mais a variação do índice acumulada nos 12 meses anteriores ao aniversário do contrato.',
      ],
    },
    {
      heading: 'Exemplos em reais',
      paragraphs: [
        'Com IGP-M de 3,35% e IPCA de 4,22%, os valores mudam como mostra a tabela. A diferença entre os índices pesa mais em aluguéis mais altos.',
      ],
      table: {
        caption: 'Aluguel reajustado',
        columns: ['Aluguel atual', 'Com IGP-M (3,35%)', 'Com IPCA (4,22%)'],
        rows: [
          ['R$ 1.500,00', 'R$ 1.550,25', 'R$ 1.563,30'],
          ['R$ 2.000,00', 'R$ 2.067,00', 'R$ 2.084,40'],
          ['R$ 3.000,00', 'R$ 3.100,50', 'R$ 3.126,60'],
        ],
      },
    },
    {
      heading: 'E se o contrato não tem índice',
      paragraphs: [
        'Sem índice no contrato, o reajuste é combinado entre as partes. Os índices servem de referência, e o IPCA tem sido mais comum em contratos novos por refletir a inflação ao consumidor. Se o índice for negativo, confira se o contrato prevê piso ou redução.',
      ],
    },
    {
      heading: 'Como negociar',
      paragraphs: [
        'Verifique o índice do contrato, o mês de aniversário e o valor acumulado em 12 meses. Se houver defasagem em relação ao mercado, conversar com a outra parte costuma ser mais eficiente que uma ação. Leve a conta documentada e registre o novo valor por escrito.',
      ],
    },
  ],
  faq: [
    {
      question: 'O proprietário pode reajustar antes de um ano?',
      answer:
        'Em regra, não. A lei exige intervalo mínimo de 12 meses para o reajuste.',
    },
    {
      question: 'Posso pedir revisão do valor?',
      answer:
        'Após três anos de contrato, qualquer das partes pode pedir a revisão judicial para ajustar o aluguel ao valor de mercado.',
    },
  ],
  sources: [
    {
      label: 'Lei 8.245/1991 — Lei do Inquilinato',
    },
    {
      label: 'FGV IBRE — IGP-M',
    },
    {
      label: 'IBGE — IPCA',
    },
  ],
} as const satisfies GuideDocument;
