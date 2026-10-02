import type { GuideDocument } from '../../types';

export const guideComoConsultarValoresAReceberNoBancoCentral = {
  kind: 'guide',
  slug: 'como-consultar-valores-a-receber-no-banco-central',
  title: 'Como consultar e resgatar o dinheiro esquecido no Banco Central',
  description:
    'O Sistema Valores a Receber mostra contas encerradas, cotas de consórcio e outros valores. Veja como consultar de graça e pedir o resgate com segurança.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['valores-a-receber', 'banco-central', 'dinheiro-esquecido'],
  featuredCalculators: ['juros-compostos'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Consulta e resgate',
      note: 'Nunca há cobrança.',
    },
    {
      value: 'Sem prazo',
      label: 'Para solicitar',
      note: 'Não há data final definida.',
    },
    {
      value: 'Pix',
      label: 'Recebimento',
      note: 'Pela chave CPF, quando disponível.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: acesse o site oficial',
      paragraphs: [
        'Digite no navegador valoresareceber.bcb.gov.br. Não use links recebidos por e-mail, SMS ou aplicativos de mensagem. O Banco Central não entra em contato para pedir dados nem senha.',
      ],
    },
    {
      heading: 'Passo 2: consulte',
      paragraphs: [
        'Informe o CPF (ou CNPJ, no caso de empresas), a data de nascimento e resolva a verificação de segurança. A página informa se há ou não valores em seu nome.',
      ],
    },
    {
      heading: 'Passo 3: peça o resgate',
      paragraphs: [
        'Se houver dinheiro, entre com a conta gov.br para fazer o pedido. Há uma opção de receber por Pix, usando a chave CPF, para quem tem conta gov.br prata ou ouro e verificação em duas etapas ativada. O valor também pode ser pago na conta indicada no sistema.',
      ],
    },
    {
      heading: 'Cuidados',
      paragraphs: [
        'Todo o serviço é gratuito. Empresas que cobram comissão para "liberar" valores geralmente só fazem o que você poderia fazer sozinho. Desconfie de promessas de valor garantido ou de pedidos de pagamento adiantado.',
      ],
    },
  ],
  faq: [
    {
      question: 'Que tipo de valor aparece?',
      answer:
        'Contas encerradas com saldo, tarifas cobradas indevidamente, cotas de consórcio, saldo de cooperativas e outras sobras de instituições financeiras.',
    },
    {
      question: 'Posso consultar o CPF de outra pessoa?',
      answer:
        'Para pessoa falecida, os herdeiros fazem o pedido pelo próprio sistema, com documentação.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil — Valores a Receber',
      url: 'https://valoresareceber.bcb.gov.br/',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
