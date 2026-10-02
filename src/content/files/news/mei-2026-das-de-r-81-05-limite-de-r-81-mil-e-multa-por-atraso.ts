import type { NewsDocument } from '../../types';

export const newsMei2026DasDeR8105LimiteDeR81MilEMultaPorAtraso = {
  kind: 'news',
  slug: 'mei-2026-das-de-r-81-05-limite-de-r-81-mil-e-multa-por-atraso',
  title:
    'MEI em 2026: DAS de R$ 81,05, limite de R$ 81 mil e o que acontece se passar ou atrasar',
  description:
    'Valores do DAS-MEI por atividade, a regra do limite anual de faturamento e quanto custa pagar a guia depois do vencimento.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['mei', 'das', 'imposto', 'negocios', 'limite'],
  featuredCalculators: [
    'das-mei-atraso',
    'das-limite-mei',
    'excesso-limite-mei',
  ],
  highlights: [
    {
      value: 'R$ 81,05',
      label: 'INSS do MEI',
      note: '5% do salário mínimo de 2026.',
    },
    {
      value: 'R$ 81.000',
      label: 'Limite anual de faturamento',
      note: 'Média de R$ 6.750 por mês.',
    },
    {
      value: 'dia 20',
      label: 'Vencimento do DAS',
      note: 'De todo mês.',
    },
    {
      value: '0,33% ao dia',
      label: 'Multa por atraso',
      note: 'Limitada a 20%, mais juros pela Selic.',
    },
  ],
  sections: [
    {
      heading: 'Quanto o MEI paga por mês em 2026',
      paragraphs: [
        'A guia única do MEI (DAS) reúne o INSS, de R$ 81,05, e um valor fixo de impostos estaduais ou municipais, conforme a atividade. Os valores abaixo valem para 2026.',
      ],
      table: {
        caption: 'DAS-MEI mensal em 2026',
        columns: ['Atividade', 'Composição', 'Valor'],
        rows: [
          ['Comércio ou indústria', 'INSS + R$ 1,00 de ICMS', 'R$ 82,05'],
          ['Serviços', 'INSS + R$ 5,00 de ISS', 'R$ 86,05'],
          ['Comércio e serviços', 'INSS + R$ 1,00 + R$ 5,00', 'R$ 87,05'],
        ],
      },
    },
    {
      heading: 'O limite de R$ 81.000 por ano',
      paragraphs: [
        'O MEI pode faturar até R$ 81.000 por ano, o que dá em média R$ 6.750 por mês. Quem abre a empresa durante o ano tem limite proporcional: R$ 6.750 vezes os meses de atividade.',
        'Se o faturamento passar do limite em até 20% (até R$ 97.200), o MEI paga a diferença como imposto do Simples Nacional e passa a ser desenquadrado no ano seguinte. Passando de 20%, o desenquadramento vale retroativamente desde janeiro, e os impostos são recalculados.',
      ],
    },
    {
      heading: 'Pagou depois do vencimento?',
      paragraphs: [
        'O DAS atrasado tem multa de 0,33% por dia de atraso, limitada a 20% do valor, mais juros pela taxa Selic acumulada. Em uma guia de R$ 81,05 paga 30 dias depois, a multa é de R$ 8,02 mais os juros do período.',
        'Débitos acumulados podem ser inscritos em dívida ativa e levar a cobrança judicial. Contribuições em atraso também podem atrasar o acesso a benefícios do INSS, que exigem a carência em dia.',
      ],
    },
    {
      heading: 'Como se manter em dia',
      paragraphs: [
        'Gere a guia pelo Portal do Simples Nacional ou pelo aplicativo MEI, cadastre débito automático para não esquecer e entregue a declaração anual (DASN-SIMEI) até 31 de maio de cada ano.',
      ],
    },
  ],
  faq: [
    {
      question: 'O MEI tem direito a aposentadoria?',
      answer:
        'Sim, por idade, com 5% do mínimo, desde que as contribuições estejam em dia. Aposentadoria por tempo de contribuição exige complementação.',
    },
    {
      question: 'Posso emitir nota fiscal?',
      answer:
        'Sim, para pessoas jurídicas é obrigatório; para pessoa física é facultativo, em geral.',
    },
    {
      question: 'O limite vale para o caminhoneiro?',
      answer:
        'Não. O MEI Caminhoneiro tem limite maior, de R$ 251.600 por ano.',
    },
  ],
  sources: [
    {
      label: 'Portal do Simples Nacional — DAS-MEI',
      url: 'https://www8.receita.fazenda.gov.br/simplesnacional/',
    },
    {
      label: 'Lei Complementar 123/2006 — Estatuto da Microempresa',
    },
    {
      label: 'Resolução CGSN 140/2018',
    },
    {
      label: 'Agência Brasil — contribuição do MEI sobe para R$ 81,05 em 2026',
    },
  ],
} as const satisfies NewsDocument;
