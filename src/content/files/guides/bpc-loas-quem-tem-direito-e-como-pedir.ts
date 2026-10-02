import type { GuideDocument } from '../../types';

export const guideBpcLoasQuemTemDireitoEComoPedir = {
  kind: 'guide',
  slug: 'bpc-loas-quem-tem-direito-e-como-pedir',
  title: 'BPC/LOAS: quem tem direito, a renda limite e como pedir',
  description:
    'O benefício de um salário mínimo para idosos e pessoas com deficiência de baixa renda: requisitos, documentos e o passo a passo do pedido.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['bpc', 'loas', 'beneficios', 'inss', 'cadunico'],
  featuredCalculators: ['bpc', 'bolsa-familia', 'pis'],
  highlights: [
    {
      value: 'R$ 1.621',
      label: 'Valor do benefício',
      note: 'Um salário mínimo.',
    },
    {
      value: 'R$ 405,25',
      label: 'Renda por pessoa',
      note: '1/4 do salário mínimo.',
    },
    {
      value: '65 anos',
      label: 'Idade mínima',
      note: 'Ou pessoa com deficiência de longo prazo.',
    },
  ],
  sections: [
    {
      heading: 'O que é o BPC',
      paragraphs: [
        'O Benefício de Prestação Continuada paga um salário mínimo mensal a idosos com 65 anos ou mais e a pessoas com deficiência, de qualquer idade, que não consigam se manter. Não é aposentadoria: não paga 13º nem gera pensão por morte.',
      ],
    },
    {
      heading: 'A regra da renda',
      paragraphs: [
        'A renda familiar por pessoa deve ser de até 1/4 do salário mínimo, R$ 405,25 em 2026. Divida a renda total da família pelo número de moradores. Uma família de 4 pessoas, por exemplo, pode ter renda total de até R$ 1.621,00.',
      ],
      table: {
        caption: 'Limite de renda familiar total por tamanho da família',
        columns: ['Pessoas', 'Renda total máxima'],
        rows: [
          ['1', 'R$ 405,25'],
          ['2', 'R$ 810,50'],
          ['3', 'R$ 1.215,75'],
          ['4', 'R$ 1.621,00'],
        ],
      },
    },
    {
      heading: 'Documentos e pedido',
      paragraphs: [
        'É preciso ter o Cadastro Único atualizado. O pedido é feito pelo Meu INSS ou pela central 135. Para pessoa com deficiência há avaliação social e médica. Leve documentos pessoais, comprovante de residência e laudos.',
      ],
    },
    {
      heading: 'Depois da concessão',
      paragraphs: [
        'O benefício é revisado periodicamente. Mudanças de renda ou da composição familiar devem ser informadas. O BPC não pode ser acumulado com outros benefícios da Previdência, e o valor segue o salário mínimo.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem recebe BPC pode trabalhar?',
      answer:
        'Há regras específicas para pessoas com deficiência que passam a trabalhar, com possibilidade de suspensão e retomada. Consulte o INSS.',
    },
    {
      question: 'Preciso ter contribuído ao INSS?',
      answer: 'Não. O BPC é assistencial e não exige contribuição.',
    },
  ],
  sources: [
    {
      label: 'INSS — Benefício de Prestação Continuada',
    },
    {
      label: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
      url: 'https://www.gov.br/mds/',
    },
    {
      label: 'Lei 8.742/1993 — LOAS',
    },
  ],
} as const satisfies GuideDocument;
