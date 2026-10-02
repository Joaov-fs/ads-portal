import type { GuideDocument } from '../../types';

export const guideComoConsultarASituacaoDoCpf = {
  kind: 'guide',
  slug: 'como-consultar-a-situacao-do-cpf',
  title: 'Como consultar a situação do CPF e regularizar quando há pendência',
  description:
    'Veja se o seu CPF está regular, o que significa cada situação e como sair de "pendente de regularização".',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['cpf', 'receita-federal', 'consulta', 'regularizacao'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Consulta oficial',
      note: 'No site da Receita Federal.',
    },
    {
      value: '5 situações',
      label: 'Mais comuns',
      note: 'Regular, pendente, suspensa, cancelada e nula.',
    },
    {
      value: '1 minuto',
      label: 'Tempo da consulta',
      note: 'Com CPF e data de nascimento.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: faça a consulta',
      paragraphs: [
        'No site da Receita Federal, procure "Consulta Situação Cadastral" do CPF. Informe o número do CPF, a data de nascimento e resolva o teste de segurança. A consulta é gratuita e mostra a situação na hora.',
      ],
    },
    {
      heading: 'Passo 2: entenda o resultado',
      paragraphs: [
        'As situações mais comuns são regular, pendente de regularização, suspensa, cancelada e nula. A regular não exige nada. A pendente aparece, por exemplo, quando falta uma declaração obrigatória do Imposto de Renda ou há divergência cadastral.',
      ],
      table: {
        caption: 'Situação do CPF',
        columns: ['Situação', 'O que costuma significar'],
        rows: [
          ['Regular', 'Sem pendências.'],
          [
            'Pendente de regularização',
            'Há omissão de declaração ou dado inconsistente.',
          ],
          ['Suspensa', 'O CPF foi suspenso por inconsistência cadastral.'],
          [
            'Cancelada',
            'Foi cancelada por óbito ou outro motivo; exige providência.',
          ],
          ['Nula', 'Houve fraude ou duplicidade; exige análise da Receita.'],
        ],
      },
    },
    {
      heading: 'Passo 3: regularize',
      paragraphs: [
        'Para pendência de declaração, entregue as declarações em atraso e pague a multa devida, se houver. Para erros cadastrais, atualize os dados pelo serviço da Receita. Em caso de dúvida, procure o atendimento da Receita ou use o canal digital com a conta gov.br.',
      ],
    },
    {
      heading: 'Cuidado com golpes',
      paragraphs: [
        'Ninguém liga para cobrar taxa de regularização do CPF. Use somente os canais oficiais e não passe senha ou códigos por mensagem.',
      ],
    },
  ],
  faq: [
    {
      question: 'CPF pendente impede de trabalhar?',
      answer:
        'Não impede o trabalho, mas pode travar serviços como abertura de conta, financiamento e algumas compras.',
    },
    {
      question: 'Preciso pagar para regularizar?',
      answer:
        'A consulta é gratuita. Multas por declaração em atraso são cobradas pela Receita.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal do Brasil',
      url: 'https://www.gov.br/receitafederal/pt-br',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
    {
      label: 'Receita Federal — Cadastro de Pessoas Físicas (CPF)',
    },
  ],
} as const satisfies GuideDocument;
