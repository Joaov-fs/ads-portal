import type { GuideDocument } from '../../types';

export const guideComoLerOExtratoBancarioEContestarCobrancas = {
  kind: 'guide',
  slug: 'como-ler-o-extrato-bancario-e-contestar-cobrancas',
  title: 'Como ler o extrato bancário e contestar cobranças indevidas',
  description:
    'Entenda cada coluna do extrato, identifique tarifas, IOF e juros do cheque especial e saiba como reclamar de uma cobrança que você não reconhece.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['extrato', 'banco', 'tarifas', 'conta'],
  featuredCalculators: ['juros-compostos', 'porcentagem'],
  highlights: [
    {
      value: 'Registrato',
      label: 'Sistema do Banco Central',
      note: 'Mostra contas, empréstimos e chaves Pix.',
    },
    {
      value: 'SAC',
      label: 'Primeiro canal',
      note: 'Para reclamar com o banco.',
    },
    {
      value: 'Ouvidoria',
      label: 'Segundo canal',
      note: 'Se o SAC não resolver.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: entenda as colunas',
      paragraphs: [
        'O extrato traz data, descrição do lançamento, valor e saldo. Crédito aumenta o saldo e débito reduz. Confira também o saldo do início e do fim do período para ver se os lançamentos somam certo.',
      ],
    },
    {
      heading: 'Passo 2: ache o que pesa',
      paragraphs: [
        'Procure os lançamentos recorrentes: tarifas de pacote de serviços, seguros, assinaturas, anuidade do cartão, IOF, juros de cheque especial e débitos automáticos. Some os valores do mês para ver quanto custa manter a conta.',
      ],
      table: {
        caption: 'Lançamentos que merecem atenção',
        columns: ['Lançamento', 'O que verificar'],
        rows: [
          [
            'Tarifa de pacote',
            'Se você usa o que paga; compare com contas sem tarifa.',
          ],
          [
            'IOF e juros',
            'Aparecem quando entra no limite do cheque especial ou no crédito.',
          ],
          ['Seguro ou assinatura', 'Se você contratou e ainda usa.'],
          ['Débito automático', 'Se o valor e a empresa estão certos.'],
        ],
      },
    },
    {
      heading: 'Passo 3: conteste',
      paragraphs: [
        'Se não reconhece uma cobrança, procure o SAC do banco e peça o cancelamento e a devolução. Anote o protocolo. Se não resolver, acione a ouvidoria e, depois, o Banco Central ou o Procon.',
      ],
    },
    {
      heading: 'Passo 4: consulte o Registrato',
      paragraphs: [
        'O Registrato, do Banco Central, mostra contas, empréstimos, cartões e chaves Pix em seu nome. Use para descobrir contratos que você não conhecia.',
      ],
    },
  ],
  faq: [
    {
      question: 'O banco pode cobrar tarifa de qualquer serviço?',
      answer:
        'Só o que está previsto em norma do Banco Central e em contrato. Serviços essenciais para pessoa física têm regras específicas de gratuidade.',
    },
    {
      question: 'Em quanto tempo o banco responde?',
      answer:
        'O SAC deve responder em prazo curto, em geral cinco dias úteis. Guarde o protocolo.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil — Registrato',
      url: 'https://www.bcb.gov.br/meubc/registrato',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
  ],
} as const satisfies GuideDocument;
