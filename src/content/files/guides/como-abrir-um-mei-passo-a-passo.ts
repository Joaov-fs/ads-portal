import type { GuideDocument } from '../../types';

export const guideComoAbrirUmMeiPassoAPasso = {
  kind: 'guide',
  slug: 'como-abrir-um-mei-passo-a-passo',
  title: 'Como abrir um MEI: requisitos, custo mensal e obrigações',
  description:
    'O passo a passo para formalizar como Microempreendedor Individual em 2026, quanto custa o DAS e o que precisa ser declarado todo ano.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['mei', 'das', 'negocios', 'cnpj'],
  featuredCalculators: ['das-limite-mei', 'das-mei-atraso', 'inss-autonomo'],
  highlights: [
    {
      value: 'R$ 81.000',
      label: 'Limite anual de faturamento',
      note: 'Média de R$ 6.750 por mês.',
    },
    {
      value: 'R$ 81,05',
      label: 'DAS mensal mínimo',
      note: 'Atividades de serviço pagam R$ 86,05.',
    },
    {
      value: '31 de maio',
      label: 'Declaração anual',
      note: 'DASN-SIMEI do ano anterior.',
    },
  ],
  sections: [
    {
      heading: 'Quem pode ser MEI',
      paragraphs: [
        'Pode ser MEI quem fatura até R$ 81.000 por ano, trabalha por conta própria, não é sócio, titular ou administrador de outra empresa e tem no máximo um empregado, que recebe o salário mínimo ou o piso da categoria. A atividade precisa constar na lista de ocupações permitidas.',
      ],
    },
    {
      heading: 'Quanto custa por mês',
      paragraphs: [
        'O MEI paga um valor fixo (DAS) que reúne INSS, ICMS e ISS. A parte do INSS é de 5% do salário mínimo, R$ 81,05, e o acréscimo depende da atividade.',
      ],
      table: {
        caption: 'DAS do MEI em 2026',
        columns: ['Atividade', 'Composição', 'Valor mensal'],
        rows: [
          ['Comércio e indústria', 'R$ 81,05 + R$ 1,00 de ICMS', 'R$ 82,05'],
          ['Serviços', 'R$ 81,05 + R$ 5,00 de ISS', 'R$ 86,05'],
          ['Comércio e serviços', 'R$ 81,05 + R$ 1,00 + R$ 5,00', 'R$ 87,05'],
        ],
      },
    },
    {
      heading: 'Como abrir',
      paragraphs: [
        'A inscrição é gratuita no Portal do Empreendedor, com conta gov.br. Informe os dados pessoais, o endereço e as atividades. O CNPJ e o certificado de condição de MEI saem na hora. Em seguida, confira as exigências da prefeitura para o alvará e, se vender produtos, a emissão de nota fiscal quando necessário.',
      ],
    },
    {
      heading: 'Obrigações',
      paragraphs: [
        'Todo mês, pagar o DAS até o dia 20. Todo ano, entregar a declaração anual (DASN-SIMEI) até 31 de maio. Se o faturamento passar do limite, comunique a mudança de enquadramento para não ter surpresas com impostos.',
      ],
    },
  ],
  faq: [
    {
      question: 'MEI tem direito a aposentadoria?',
      answer:
        'Sim, por idade, auxílio por incapacidade, salário-maternidade e pensão. A aposentadoria por tempo de contribuição exige complementar a contribuição para 20%.',
    },
    {
      question: 'Posso ter CLT e ser MEI?',
      answer:
        'Sim, desde que as atividades sejam compatíveis e você respeite as regras do contrato de trabalho.',
    },
  ],
  sources: [
    {
      label: 'Portal do Empreendedor — Governo Federal',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
    },
    {
      label: 'Lei Complementar 123/2006 — Estatuto da Microempresa',
    },
    {
      label: 'Receita Federal — Simples Nacional e MEI',
    },
  ],
} as const satisfies GuideDocument;
