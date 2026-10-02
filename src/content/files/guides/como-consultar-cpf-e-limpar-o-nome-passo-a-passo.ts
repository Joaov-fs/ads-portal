import type { GuideDocument } from '../../types';

export const guideComoConsultarCpfELimparONomePassoAPasso = {
  kind: 'guide',
  slug: 'como-consultar-cpf-e-limpar-o-nome-passo-a-passo',
  title: 'Como consultar seu CPF, ver dívidas e limpar o nome',
  description:
    'Passo a passo para descobrir se você está negativado, negociar com segurança e saber quanto tempo a restrição dura.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['nome-sujo', 'serasa', 'negativado', 'dividas'],
  featuredCalculators: ['juros-compostos', 'simulador-de-emprestimo'],
  highlights: [
    {
      value: '5 anos',
      label: 'Máximo da restrição',
      note: 'Contados do vencimento da dívida.',
    },
    {
      value: '5 dias úteis',
      label: 'Para retirar o nome',
      note: 'Depois do pagamento integral.',
    },
    {
      value: 'Grátis',
      label: 'Consulta',
      note: 'Nos birôs de crédito.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: consulte',
      paragraphs: [
        'Acesse os sites ou aplicativos de birôs como Serasa, Boa Vista e SPC e peça a consulta do seu CPF. Veja se há dívidas em aberto, os credores e os valores. A consulta é gratuita.',
      ],
    },
    {
      heading: 'Passo 2: confirme a dívida',
      paragraphs: [
        'Antes de negociar, confira se a dívida é sua, se o valor está correto e se o credor tem autorização para cobrar. Procure o contrato e comprove os pagamentos já feitos. Se algo estiver errado, conteste diretamente com o credor e, se preciso, no Procon.',
      ],
    },
    {
      heading: 'Passo 3: negocie',
      paragraphs: [
        'Peça propostas, compare o valor à vista com o parcelado e veja o custo total, com juros e encargos. Só feche se a parcela couber no orçamento. Pague somente por canais oficiais do credor.',
      ],
    },
    {
      heading: 'Passo 4: acompanhe a baixa',
      paragraphs: [
        'Depois do pagamento integral, o credor deve retirar o nome do cadastro em até 5 dias úteis. Guarde o comprovante e confira a baixa. A negativação não pode durar mais de 5 anos.',
      ],
    },
  ],
  faq: [
    {
      question: 'Dívida prescrita pode ser cobrada?',
      answer:
        'O prazo de cobrança por via judicial é limitado, e a dívida não pode ficar negativada por mais de 5 anos. Consulte a Defensoria Pública ou o Procon para o seu caso.',
    },
    {
      question: 'Pagar uma parcela já limpa o nome?',
      answer:
        'Em geral, a baixa ocorre após o pagamento integral ou conforme o acordo. Peça por escrito quando o nome será retirado.',
    },
  ],
  sources: [
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
    {
      label: 'Súmula 548 do STJ — prazo para exclusão do registro',
    },
    {
      label: 'Procon e Defensoria Pública',
    },
  ],
} as const satisfies GuideDocument;
