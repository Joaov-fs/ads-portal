import type { GuideDocument } from '../../types';

export const guideComoFazerOuAtualizarOCadastroUnico = {
  kind: 'guide',
  slug: 'como-fazer-ou-atualizar-o-cadastro-unico',
  title: 'Como fazer ou atualizar o Cadastro Único (CadÚnico)',
  description:
    'O passo a passo para entrar no CadÚnico, quais documentos levar e por que manter o cadastro atualizado a cada dois anos.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['cadunico', 'beneficios', 'bolsa-familia', 'cras'],
  featuredCalculators: ['bolsa-familia', 'bpc'],
  highlights: [
    {
      value: '2 anos',
      label: 'Atualização',
      note: 'Prazo máximo sem revisar.',
    },
    {
      value: 'CRAS',
      label: 'Onde fazer',
      note: 'Ou posto de atendimento do município.',
    },
    {
      value: 'Grátis',
      label: 'Custo',
      note: 'Cadastro e atualização não têm taxa.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: agende',
      paragraphs: [
        'Procure o CRAS ou o posto de atendimento do Cadastro Único da sua cidade. Em muitos lugares, o agendamento é feito pelo aplicativo Cadastro Único, por telefone ou pelo site da prefeitura.',
      ],
    },
    {
      heading: 'Passo 2: leve os documentos',
      paragraphs: [
        'O responsável familiar leva CPF ou título de eleitor e, se possível, documento com foto. Leve também documentos de todos os moradores, comprovante de residência e comprovantes de renda quando houver.',
      ],
      table: {
        caption: 'O que levar',
        columns: ['Documento', 'Para que serve'],
        rows: [
          ['CPF ou título de eleitor do responsável', 'Identificar a família.'],
          ['Documentos dos moradores', 'Registrar cada pessoa.'],
          ['Comprovante de residência', 'Confirmar o endereço.'],
          ['Comprovantes de renda', 'Calcular a renda por pessoa.'],
        ],
      },
    },
    {
      heading: 'Passo 3: responda a entrevista',
      paragraphs: [
        'O atendente faz perguntas sobre moradia, escolaridade, trabalho e renda de cada pessoa da casa. Seja claro e informe a situação real, porque dados errados podem cancelar benefícios.',
      ],
    },
    {
      heading: 'Passo 4: mantenha em dia',
      paragraphs: [
        'Atualize o cadastro a cada 2 anos ou sempre que mudar a renda, o endereço ou a composição da família. Cadastros desatualizados podem ter o benefício bloqueado ou cancelado.',
      ],
    },
  ],
  faq: [
    {
      question: 'Estar no CadÚnico garante benefício?',
      answer:
        'Não. É a porta de entrada para programas como o Bolsa Família e o BPC, mas cada um tem seus requisitos.',
    },
    {
      question: 'Posso fazer pela internet?',
      answer:
        'Em alguns municípios há agendamento ou atualização online. O cadastro inicial costuma exigir atendimento presencial.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
      url: 'https://www.gov.br/mds/',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
    {
      label: 'Decreto 11.016/2022 — Cadastro Único',
    },
  ],
} as const satisfies GuideDocument;
