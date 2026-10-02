import type { GuideDocument } from '../../types';

export const guideComoUsarOPixComSeguranca = {
  kind: 'guide',
  slug: 'como-usar-o-pix-com-seguranca',
  title: 'Como usar o Pix com segurança: chaves, limites e golpes',
  description:
    'Como cadastrar chaves, conferir o destinatário antes de pagar, ajustar o limite noturno e pedir devolução em caso de golpe.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['pix', 'seguranca', 'golpe', 'banco'],
  highlights: [
    {
      value: '4 tipos',
      label: 'De chave Pix',
      note: 'CPF, celular, e-mail e chave aleatória.',
    },
    {
      value: 'Limite',
      label: 'Configurável',
      note: 'Você ajusta o valor no app do banco.',
    },
    {
      value: '80 dias',
      label: 'Para pedir devolução',
      note: 'Em caso de fraude, pelo banco.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: cadastre suas chaves',
      paragraphs: [
        'No aplicativo do banco, vá em Pix e cadastre chaves: CPF, número de celular, e-mail ou chave aleatória. Você pode mudar o banco da chave depois. Quem usa chave aleatória expõe menos dados pessoais.',
      ],
    },
    {
      heading: 'Passo 2: confira antes de enviar',
      paragraphs: [
        'Antes de confirmar, veja o nome do destinatário, o banco e o valor. Desconfie de pedidos de Pix com urgência, de links para "pagar uma taxa" e de contatos que dizem ser parentes em novo número.',
      ],
    },
    {
      heading: 'Passo 3: ajuste os limites',
      paragraphs: [
        'Defina um limite diário e um limite menor para o período noturno. Em caso de perda do celular, um limite baixo reduz o prejuízo. Ative a autenticação em duas etapas e a biometria no aplicativo.',
      ],
    },
    {
      heading: 'Se você caiu num golpe',
      paragraphs: [
        'Avise o banco na hora, pelo aplicativo ou telefone, e peça o bloqueio e a devolução pelo mecanismo especial de devolução (MED). Registre boletim de ocorrência. Pedir logo aumenta a chance de recuperar o valor.',
      ],
    },
  ],
  faq: [
    {
      question: 'O Pix é seguro?',
      answer:
        'O sistema é seguro, mas os golpes acontecem por engano da pessoa. Confira sempre o destinatário e nunca compartilhe senhas ou códigos.',
    },
    {
      question: 'Posso cancelar um Pix enviado?',
      answer:
        'Em geral, não. Só em hipóteses de fraude ou falha operacional, pelo mecanismo de devolução do banco.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil — Pix',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix',
    },
    {
      label: 'Federação Brasileira de Bancos (Febraban) — dicas de segurança',
    },
  ],
} as const satisfies GuideDocument;
