import type { GuideDocument } from '../../types';

export const guideComoUsarOMeuInssEConsultarOCnis = {
  kind: 'guide',
  slug: 'como-usar-o-meu-inss-e-consultar-o-cnis',
  title: 'Como usar o Meu INSS e consultar o extrato de contribuições (CNIS)',
  description:
    'Passo a passo para entrar no Meu INSS, ver seu histórico de contribuições, pedir benefícios e acompanhar o andamento.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['inss', 'meu-inss', 'cnis', 'aposentadoria', 'beneficios'],
  featuredCalculators: ['inss', 'inss-autonomo', 'auxilio-incapacidade'],
  highlights: [
    {
      value: 'Meu INSS',
      label: 'Canal oficial',
      note: 'Aplicativo e site, com conta gov.br.',
    },
    {
      value: '135',
      label: 'Telefone',
      note: 'Central de atendimento.',
    },
    {
      value: 'CNIS',
      label: 'Extrato de contribuições',
      note: 'Mostra vínculos e salários registrados.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: entre com a conta gov.br',
      paragraphs: [
        'Abra o aplicativo Meu INSS ou o site e faça login com a conta gov.br. Se ainda não tem conta, crie uma com CPF e confirmação de identidade. Quanto maior o nível da conta (prata ou ouro), mais serviços ficam liberados.',
      ],
    },
    {
      heading: 'Passo 2: veja o extrato de contribuições',
      paragraphs: [
        'No menu, procure "Extrato de contribuição (CNIS)". O documento lista todos os vínculos e contribuições registrados, com datas e valores. Baixe o PDF e guarde.',
      ],
    },
    {
      heading: 'Passo 3: confira se está tudo certo',
      paragraphs: [
        'Verifique se todos os empregos aparecem, se não há meses faltando e se os salários estão corretos. Erros devem ser corrigidos com documentos, como carteira de trabalho, contracheques e carnês, pelo próprio Meu INSS ou numa agência.',
      ],
    },
    {
      heading: 'Passo 4: peça e acompanhe benefícios',
      paragraphs: [
        'Use "Novo pedido" para solicitar aposentadoria, auxílio por incapacidade, salário-maternidade, pensão por morte e outros. Anexe os documentos pedidos, acompanhe o andamento em "Meus pedidos" e responda às exigências no prazo.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso ir à agência?',
      answer:
        'Na maioria dos casos, não. O pedido e o acompanhamento são feitos pelo Meu INSS ou pelo telefone 135. Perícias e alguns atendimentos são presenciais.',
    },
    {
      question: 'O CNIS mostra quanto falta para me aposentar?',
      answer:
        'Mostra os dados para a conta. Há simuladores no Meu INSS, e o cálculo exato depende da regra de transição aplicável a você.',
    },
  ],
  sources: [
    {
      label: 'Meu INSS — Instituto Nacional do Seguro Social',
      url: 'https://meu.inss.gov.br/',
    },
    {
      label: 'Lei 8.213/1991 — Planos de Benefícios da Previdência Social',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
