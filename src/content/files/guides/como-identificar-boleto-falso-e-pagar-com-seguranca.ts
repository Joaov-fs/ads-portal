import type { GuideDocument } from '../../types';

export const guideComoIdentificarBoletoFalsoEPagarComSeguranca = {
  kind: 'guide',
  slug: 'como-identificar-boleto-falso-e-pagar-com-seguranca',
  title: 'Como identificar boleto falso e pagar com segurança',
  description:
    'O que conferir antes de pagar um boleto, como usar o DDA e o que fazer se você pagou um boleto fraudado.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['boleto', 'golpe', 'seguranca', 'pagamento'],
  highlights: [
    {
      value: '3 itens',
      label: 'Para conferir',
      note: 'Beneficiário, valor e vencimento.',
    },
    {
      value: 'DDA',
      label: 'Débito Direto Autorizado',
      note: 'Lista seus boletos reais no banco.',
    },
    {
      value: 'Agora',
      label: 'Quando agir',
      note: 'Pagou errado? Fale com o banco logo.',
    },
  ],
  sections: [
    {
      heading: 'Confira o beneficiário',
      paragraphs: [
        'Ao pagar pelo aplicativo, o nome e o CNPJ ou CPF do beneficiário aparecem antes da confirmação. Se o nome for diferente da empresa que enviou a cobrança, não pague. Em boletos de contas conhecidas, compare com o de meses anteriores.',
      ],
    },
    {
      heading: 'Verifique valor, vencimento e canal',
      paragraphs: [
        'Desconfie de descontos muito grandes, prazos curtos e boletos que chegam por mensagem de pessoas ou números desconhecidos. Prefira baixar o boleto no site ou aplicativo oficial da empresa.',
      ],
    },
    {
      heading: 'Use o DDA',
      paragraphs: [
        'O Débito Direto Autorizado mostra no aplicativo do seu banco os boletos emitidos em seu CPF ou CNPJ. Se o boleto que você recebeu não aparece lá, pode ser falso. Ative o serviço na sua conta.',
      ],
    },
    {
      heading: 'Se você pagou um boleto falso',
      paragraphs: [
        'Avise imediatamente o banco, registre boletim de ocorrência e guarde comprovantes e mensagens. Peça o bloqueio e a contestação do pagamento. Quanto mais rápido, maior a chance de recuperar parte do valor.',
      ],
    },
  ],
  faq: [
    {
      question: 'O banco devolve o dinheiro?',
      answer:
        'Depende do caso. O banco analisa a contestação, e pode haver responsabilidade conforme as circunstâncias. Registre tudo por escrito.',
    },
    {
      question: 'Como saber se o código de barras é verdadeiro?',
      answer:
        'O código do banco ou da empresa deve bater com o do beneficiário. O aplicativo mostra o nome de quem vai receber antes do pagamento.',
    },
  ],
  sources: [
    {
      label: 'Federação Brasileira de Bancos (Febraban) — dicas de segurança',
    },
    {
      label: 'Banco Central do Brasil — dicas de segurança',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
  ],
} as const satisfies GuideDocument;
