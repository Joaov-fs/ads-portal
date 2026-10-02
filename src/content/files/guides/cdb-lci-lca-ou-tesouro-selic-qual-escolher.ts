import type { GuideDocument } from '../../types';

export const guideCdbLciLcaOuTesouroSelicQualEscolher = {
  kind: 'guide',
  slug: 'cdb-lci-lca-ou-tesouro-selic-qual-escolher',
  title: 'CDB, LCI, LCA ou Tesouro Selic: como comparar e escolher',
  description:
    'Aprenda a comparar investimentos de renda fixa pelo que realmente sobra no bolso, com a tabela regressiva do Imposto de Renda e exemplos.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['investimentos', 'cdb', 'lci', 'lca', 'tesouro-selic'],
  featuredCalculators: [
    'cdb-liquido',
    'lci-lca',
    'tesouro-selic',
    'cdb-x-poupanca',
  ],
  highlights: [
    {
      value: '22,5% a 15%',
      label: 'IR sobre o rendimento',
      note: 'Cai conforme o prazo: 180, 360, 720 dias.',
    },
    {
      value: '0%',
      label: 'IR em LCI e LCA',
      note: 'Para pessoa física.',
    },
    {
      value: 'R$ 250 mil',
      label: 'Garantia do FGC',
      note: 'Por CPF e por instituição.',
    },
  ],
  sections: [
    {
      heading: 'Compare pelo líquido',
      paragraphs: [
        'O que importa é quanto sobra depois do imposto. CDB e Tesouro Selic pagam IR regressivo sobre o rendimento: 22,5% em até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias. LCI e LCA são isentas para pessoa física.',
      ],
    },
    {
      heading: 'Exemplo com R$ 10.000 por 12 meses',
      paragraphs: [
        'O CDB de 14% ao ano rende R$ 1.400,00 brutos e R$ 1.155,00 após 17,5% de IR. Uma LCI de 12,5% rende R$ 1.250,00 líquidos, mais do que o CDB, mesmo com taxa menor. A poupança, a 8,3% ao ano, rende R$ 830,00.',
      ],
      table: {
        caption: 'R$ 10.000 em 12 meses',
        columns: ['Investimento', 'Taxa anual', 'IR', 'Rendimento líquido'],
        rows: [
          ['CDB', '14,0%', 'R$ 245,00 (17,5%)', 'R$ 1.155,00'],
          ['LCI ou LCA', '12,5%', 'Isento', 'R$ 1.250,00'],
          ['Poupança', '8,3%', 'Isento', 'R$ 830,00'],
        ],
      },
    },
    {
      heading: 'Segurança e liquidez',
      paragraphs: [
        'CDB, LCI e LCA têm garantia do Fundo Garantidor de Créditos (FGC) até R$ 250 mil por CPF e por instituição. O Tesouro Selic é garantido pelo Tesouro Nacional. Veja também a liquidez: alguns títulos só podem ser resgatados no vencimento, o que muda o prazo da conta.',
      ],
    },
    {
      heading: 'Como escolher',
      paragraphs: [
        'Defina o prazo, compare o rendimento líquido e confira o risco do emissor. Para a reserva de emergência, prefira liquidez diária. Para metas de prazo fixo, títulos com vencimento próximo ao objetivo reduzem o risco de marcação.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso pagar IOF?',
      answer:
        'O IOF incide sobre resgates em menos de 30 dias e diminui a cada dia até zerar no 30º dia.',
    },
    {
      question: 'Qual é melhor: CDB ou Tesouro Selic?',
      answer:
        'Depende da taxa e da liquidez. Compare o rendimento líquido e a facilidade de resgate pela calculadora.',
    },
  ],
  sources: [
    {
      label: 'Lei 11.033/2004 — tributação da renda fixa',
    },
    {
      label: 'Fundo Garantidor de Créditos',
    },
    {
      label: 'Tesouro Nacional — Tesouro Direto',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
