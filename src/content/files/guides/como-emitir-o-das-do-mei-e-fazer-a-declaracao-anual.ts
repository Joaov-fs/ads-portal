import type { GuideDocument } from '../../types';

export const guideComoEmitirODasDoMeiEFazerADeclaracaoAnual = {
  kind: 'guide',
  slug: 'como-emitir-o-das-do-mei-e-fazer-a-declaracao-anual',
  title: 'Como emitir o DAS do MEI e fazer a declaração anual (DASN-SIMEI)',
  description:
    'Passo a passo para gerar a guia do mês, pagar por Pix ou código de barras e entregar a declaração anual até 31 de maio.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['mei', 'das', 'dasn-simei', 'declaracao'],
  featuredCalculators: ['das-limite-mei', 'das-mei-atraso'],
  highlights: [
    {
      value: 'Dia 20',
      label: 'Vencimento mensal',
      note: 'Do DAS.',
    },
    {
      value: '31 de maio',
      label: 'Declaração anual',
      note: 'Da receita do ano anterior.',
    },
    {
      value: 'Grátis',
      label: 'Emissão',
      note: 'Pelo app MEI ou pelo portal.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: emita a guia do mês',
      paragraphs: [
        'Acesse o Portal do Simples Nacional e entre em "PGMEI — Gerar DAS" com o CNPJ, ou use o aplicativo MEI. Escolha o mês e gere o documento. O valor do mês já vem calculado conforme a atividade.',
      ],
    },
    {
      heading: 'Passo 2: pague',
      paragraphs: [
        'A guia traz código de barras e QR Code Pix. Pague pelo app do banco antes do dia 20. Guarde o comprovante, porque o pagamento é a prova de que você contribuiu para o INSS.',
      ],
    },
    {
      heading: 'Passo 3: faça a declaração anual',
      paragraphs: [
        'Entre no portal do Simples Nacional, na opção da declaração anual (DASN-SIMEI). Informe a receita bruta do ano anterior, separando comércio e serviços, e se teve empregado. Entregue até 31 de maio.',
      ],
      table: {
        caption: 'Calendário do MEI',
        columns: ['Obrigação', 'Prazo'],
        rows: [
          ['Pagar o DAS', 'Todo dia 20'],
          ['Declaração anual', 'Até 31 de maio'],
        ],
      },
    },
    {
      heading: 'Se esqueceu algum mês',
      paragraphs: [
        'Gere a guia atualizada, que já inclui multa e juros, e pague. Se o faturamento passou do limite de R$ 81.000, comunique a mudança de enquadramento para não ter surpresa com impostos.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso declarar se não faturei?',
      answer: 'Sim. A declaração anual é obrigatória mesmo sem receita.',
    },
    {
      question: 'O contador é obrigatório?',
      answer:
        'Não. O MEI pode emitir a guia e fazer a declaração sozinho, sem custo.',
    },
  ],
  sources: [
    {
      label: 'Portal do Simples Nacional',
      url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/',
    },
    {
      label: 'Portal do Empreendedor',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
    },
    {
      label: 'Receita Federal do Brasil',
      url: 'https://www.gov.br/receitafederal/pt-br',
    },
  ],
} as const satisfies GuideDocument;
