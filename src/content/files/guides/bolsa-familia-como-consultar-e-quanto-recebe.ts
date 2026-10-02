import type { GuideDocument } from '../../types';

export const guideBolsaFamiliaComoConsultarEQuantoRecebe = {
  kind: 'guide',
  slug: 'bolsa-familia-como-consultar-e-quanto-recebe',
  title: 'Bolsa Família: como consultar, quanto recebe e o que compõe o valor',
  description:
    'Como o valor é formado, exemplos de famílias e o que verificar quando a parcela não vem como esperado.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['bolsa-familia', 'beneficios', 'cadunico', 'renda'],
  featuredCalculators: ['bolsa-familia', 'bpc', 'pis'],
  highlights: [
    {
      value: 'R$ 691',
      label: 'Mínimo por família',
      note: 'Complemento garante esse valor.',
    },
    {
      value: 'R$ 164',
      label: 'Por pessoa',
      note: 'Benefício de Renda de Cidadania.',
    },
    {
      value: 'R$ 173',
      label: 'Por criança de 0 a 6 anos',
      note: 'Benefício Primeira Infância.',
    },
  ],
  sections: [
    {
      heading: 'Como o valor é formado',
      paragraphs: [
        'O Bolsa Família soma o Benefício de Renda de Cidadania, de R$ 164 por pessoa, o Benefício Primeira Infância, de R$ 173 por criança de até 6 anos, e o Variável Familiar, de R$ 58 por criança de 7 a 18 anos, gestante ou nutriz. Quando a soma é menor que R$ 691, um complemento eleva o valor até esse mínimo.',
      ],
      table: {
        caption: 'Exemplos de composição',
        columns: ['Família', 'Composição', 'Total'],
        rows: [
          [
            '3 pessoas, 1 criança de até 6 anos',
            'R$ 492 + R$ 173 + R$ 26 de complemento',
            'R$ 691',
          ],
          [
            '4 pessoas, 2 crianças de até 6 anos e 1 de 7 anos',
            'R$ 656 + R$ 346 + R$ 58',
            'R$ 1.060',
          ],
        ],
      },
    },
    {
      heading: 'Como consultar',
      paragraphs: [
        'Use o aplicativo Bolsa Família, o Meu CadÚnico ou o site do MDS, e confira o calendário de pagamentos. O valor liberado é o que aparece no aplicativo ou no extrato da conta; a calculadora do PortalFina serve para ter uma estimativa.',
      ],
    },
    {
      heading: 'Requisitos e manutenção',
      paragraphs: [
        'A entrada exige inscrição no Cadastro Único e renda por pessoa dentro do limite do programa, que você confere no site do MDS. É preciso manter o cadastro atualizado, a frequência escolar das crianças e a vacinação em dia. Mudanças de renda, endereço ou da composição da família devem ser informadas.',
      ],
    },
    {
      heading: 'Se a parcela não veio',
      paragraphs: [
        'Verifique se o cadastro está atualizado, se há mensagem no aplicativo e se o benefício não está bloqueado ou em averiguação. Procure o CRAS do seu município para regularizar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem aumentou a renda perde tudo?',
      answer:
        'Nem sempre. A Regra de Proteção permite continuar recebendo parte do benefício por um período, dentro dos limites definidos.',
    },
    {
      question: 'Ter o CadÚnico garante o benefício?',
      answer:
        'Não. A inscrição é necessária, mas a aprovação depende da análise de renda e dos critérios do programa.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
      url: 'https://www.gov.br/mds/',
    },
    {
      label: 'Caixa Econômica Federal — Bolsa Família',
    },
    {
      label: 'Lei 14.601/2023 — Bolsa Família',
    },
  ],
} as const satisfies GuideDocument;
