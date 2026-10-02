import type { GuideDocument } from '../../types';

export const guideComoCriarEAumentarONivelDaContaGovbr = {
  kind: 'guide',
  slug: 'como-criar-e-aumentar-o-nivel-da-conta-govbr',
  title: 'Como criar e aumentar o nível da conta gov.br (bronze, prata e ouro)',
  description:
    'Entenda o que cada nível libera, como criar a conta e como subir de nível para usar o Meu INSS, a Receita e outros serviços.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['gov-br', 'conta', 'seguranca', 'servicos'],
  highlights: [
    {
      value: '3 níveis',
      label: 'Bronze, prata e ouro',
      note: 'Quanto maior, mais serviços liberados.',
    },
    {
      value: '2 etapas',
      label: 'Verificação',
      note: 'Recomendada para proteger a conta.',
    },
    {
      value: 'Grátis',
      label: 'Custo',
      note: 'A conta e os níveis não têm taxa.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: crie a conta',
      paragraphs: [
        'Acesse o portal gov.br ou o aplicativo gov.br e escolha "Criar conta". Informe o CPF, confirme seus dados e crie a senha. Você começa no nível bronze.',
      ],
    },
    {
      heading: 'Passo 2: suba de nível',
      paragraphs: [
        'O nível prata exige confirmar a identidade por reconhecimento facial na conta gov.br, pelo internet banking de bancos credenciados ou por outros meios disponíveis. O ouro exige comprovação mais forte, como reconhecimento facial com base biométrica da Justiça Eleitoral ou da CNH, ou certificado digital.',
      ],
      table: {
        caption: 'Níveis da conta gov.br',
        columns: ['Nível', 'Como obter', 'Para que serve'],
        rows: [
          ['Bronze', 'Cadastro básico', 'Serviços simples.'],
          [
            'Prata',
            'Validação facial ou banco',
            'A maioria dos serviços, como Meu INSS.',
          ],
          [
            'Ouro',
            'Biometria forte ou certificado digital',
            'Serviços mais sensíveis.',
          ],
        ],
      },
    },
    {
      heading: 'Passo 3: proteja a conta',
      paragraphs: [
        'Ative a verificação em duas etapas, use uma senha forte e exclusiva e nunca compartilhe códigos recebidos por SMS ou aplicativo. Desconfie de mensagens que pedem para "atualizar o gov.br".',
      ],
    },
    {
      heading: 'Se você esqueceu a senha',
      paragraphs: [
        'Use a opção "Esqueci minha senha" e valide a identidade pelo método escolhido. O processo é feito no próprio gov.br, sem custo.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso do nível ouro?',
      answer:
        'Não para a maioria dos serviços do dia a dia. O prata resolve boa parte, como o Meu INSS.',
    },
    {
      question: 'Posso ter mais de uma conta?',
      answer: 'Não. A conta é vinculada ao CPF.',
    },
  ],
  sources: [
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
    {
      label: 'Decreto 10.332/2020 — Estratégia de Governo Digital',
    },
  ],
} as const satisfies GuideDocument;
