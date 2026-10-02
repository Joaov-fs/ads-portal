import type { GuideDocument } from '../../types';

export const guideComoDarBaixaNoMei = {
  kind: 'guide',
  slug: 'como-dar-baixa-no-mei',
  title: 'Como dar baixa no MEI e o que acontece com as dívidas',
  description:
    'Quando vale encerrar o CNPJ, o passo a passo no Portal do Empreendedor e por que a baixa não apaga os débitos.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['mei', 'baixa', 'cnpj', 'encerramento'],
  featuredCalculators: ['das-mei-atraso'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Custo da baixa',
      note: 'Pelo Portal do Empreendedor.',
    },
    {
      value: 'Mantém',
      label: 'Dívidas',
      note: 'A baixa não apaga os débitos.',
    },
    {
      value: 'DASN',
      label: 'Declaração final',
      note: 'Obrigatória na baixa.',
    },
  ],
  sections: [
    {
      heading: 'Quando dar baixa',
      paragraphs: [
        'Se você não quer mais trabalhar como MEI, passou do limite de faturamento ou arrumou um emprego que não combina com a atividade, encerre o CNPJ. Continuar sem faturar mantém o DAS mensal e as dívidas crescendo.',
      ],
    },
    {
      heading: 'Passo 1: acesse o Portal do Empreendedor',
      paragraphs: [
        'Entre no portal com a conta gov.br, escolha "Já sou MEI" e depois "Baixa do CNPJ". Siga as telas e confirme o encerramento.',
      ],
    },
    {
      heading: 'Passo 2: entregue a declaração final',
      paragraphs: [
        'É preciso fazer a DASN-SIMEI de extinção, com a receita do período trabalhado. Sem ela, a Receita pode manter pendências.',
      ],
    },
    {
      heading: 'Passo 3: cuide dos débitos',
      paragraphs: [
        'A baixa não cancela o DAS em atraso. Os débitos continuam vinculados ao CPF e à empresa. Emita a guia atualizada e pague, ou peça parcelamento no portal. Dívidas não pagas podem ir para a dívida ativa.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso abrir de novo depois?',
      answer:
        'Sim, mas se houver débitos pendentes eles precisam ser regularizados.',
    },
    {
      question: 'A baixa cancela o INSS pago?',
      answer:
        'Não. As contribuições já pagas continuam valendo para os benefícios.',
    },
  ],
  sources: [
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
