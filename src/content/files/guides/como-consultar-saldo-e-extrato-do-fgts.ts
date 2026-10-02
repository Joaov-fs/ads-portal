import type { GuideDocument } from '../../types';

export const guideComoConsultarSaldoEExtratoDoFgts = {
  kind: 'guide',
  slug: 'como-consultar-saldo-e-extrato-do-fgts',
  title: 'Como consultar o saldo e o extrato do FGTS pelo celular',
  description:
    'Passo a passo para ver quanto você tem de FGTS, conferir se a empresa está depositando todo mês e o que fazer quando faltam depósitos.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['fgts', 'extrato', 'consulta', 'trabalho'],
  featuredCalculators: ['fgts-multa', 'rescisao-clt'],
  highlights: [
    {
      value: '8%',
      label: 'Depósito mensal',
      note: 'Da remuneração, pago pela empresa.',
    },
    {
      value: 'Dia 20',
      label: 'Prazo do depósito',
      note: 'Do mês seguinte ao trabalhado.',
    },
    {
      value: 'Grátis',
      label: 'Consulta',
      note: 'Pelo app FGTS ou pelo site da Caixa.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: tenha o app certo',
      paragraphs: [
        'Baixe o aplicativo FGTS, da Caixa Econômica Federal, na loja do seu celular. Confira se o desenvolvedor é a Caixa antes de instalar, porque existem aplicativos falsos com nomes parecidos.',
      ],
    },
    {
      heading: 'Passo 2: entre com seus dados',
      paragraphs: [
        'Abra o aplicativo, informe o CPF e crie ou digite a senha. Na primeira vez, o app pede dados pessoais e a confirmação por código ou biometria. A consulta também pode ser feita no site da Caixa, na área do FGTS.',
      ],
    },
    {
      heading: 'Passo 3: veja o saldo e o extrato',
      paragraphs: [
        'Na tela inicial aparece o saldo total. Entre em "Extrato" para ver cada conta, uma por empresa onde você trabalhou, com depósitos, rendimentos e saques. Os depósitos mensais devem aparecer com o valor aproximado de 8% da sua remuneração.',
      ],
    },
    {
      heading: 'Passo 4: confira se a empresa deposita',
      paragraphs: [
        'Compare os meses do extrato com os meses trabalhados. Falta de depósito é irregular. Procure o setor de pessoal, anote os meses faltantes e, se não resolver, faça denúncia no Ministério do Trabalho e Emprego ou procure o sindicato. A empresa pode ser obrigada a pagar o valor com correção e multa.',
      ],
    },
  ],
  faq: [
    {
      question: 'O app mostra o FGTS de empregos antigos?',
      answer:
        'Sim. Cada contrato registrado aparece como uma conta separada, com saldo e histórico.',
    },
    {
      question: 'Posso sacar quando quiser?',
      answer:
        'Não. O saque tem hipóteses previstas em lei, como demissão sem justa causa, compra da casa própria e saque-aniversário para quem aderiu.',
    },
  ],
  sources: [
    {
      label: 'Caixa Econômica Federal — FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/',
    },
    {
      label: 'Lei 8.036/1990 — FGTS',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
