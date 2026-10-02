import type { GuideDocument } from '../../types';

export const guideComoAcessarACarteiraDeTrabalhoDigital = {
  kind: 'guide',
  slug: 'como-acessar-a-carteira-de-trabalho-digital',
  title:
    'Como acessar a Carteira de Trabalho Digital e consultar seus contratos',
  description:
    'Baixe o aplicativo, entre com a conta gov.br e veja vínculos, salários, seguro-desemprego e outros serviços do trabalhador.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['ctps', 'carteira-de-trabalho', 'gov-br', 'trabalho'],
  featuredCalculators: ['seguro-desemprego', 'rescisao-clt'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Aplicativo oficial',
      note: 'Carteira de Trabalho Digital.',
    },
    {
      value: 'Gov.br',
      label: 'Login',
      note: 'Com CPF e senha.',
    },
    {
      value: 'PDF',
      label: 'Documento',
      note: 'Pode ser gerado e baixado.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: instale o app',
      paragraphs: [
        'Busque "Carteira de Trabalho Digital" na loja do celular. O desenvolvedor deve ser o Governo Federal ou a Dataprev. Ela também pode ser acessada pelo navegador, pelo portal gov.br.',
      ],
    },
    {
      heading: 'Passo 2: entre com a conta gov.br',
      paragraphs: [
        'Informe o CPF e a senha. Se ainda não tem conta, crie uma. Ative a verificação em duas etapas para aumentar a segurança.',
      ],
    },
    {
      heading: 'Passo 3: veja seus contratos',
      paragraphs: [
        'No menu "Contratos de trabalho" aparecem as empresas, as datas de entrada e saída, o cargo e o salário informados. Confira se está tudo certo e baixe o PDF se precisar apresentar a alguém.',
      ],
    },
    {
      heading: 'O que mais dá para fazer',
      paragraphs: [
        'Pelo mesmo aplicativo é possível consultar o seguro-desemprego, ver o abono salarial e acompanhar o cadastro do trabalhador. Se algo estiver errado, converse com o empregador e peça a correção no eSocial.',
      ],
    },
  ],
  faq: [
    {
      question: 'A carteira física ainda vale?',
      answer:
        'Sim, mas a versão digital é a oficial para novos registros. Contratos antigos podem ser consultados no aplicativo.',
    },
    {
      question: 'Meu contrato não aparece. O que faço?',
      answer:
        'Peça à empresa para conferir o registro no eSocial. Se necessário, procure o Ministério do Trabalho.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
