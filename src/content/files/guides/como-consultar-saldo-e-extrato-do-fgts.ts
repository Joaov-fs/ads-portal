import type { GuideDocument } from '../../types';

export const guideComoConsultarSaldoEExtratoDoFgts = {
  kind: 'guide',
  slug: 'como-consultar-saldo-e-extrato-do-fgts',
  title: 'Como consultar o saldo e o extrato do FGTS pelo celular',
  description:
    'Passo a passo para ver quanto você tem de FGTS, conferir se a empresa está depositando todo mês e o que fazer quando faltam depósitos.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-22',
  updatedAt: '2026-10-02',
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
      heading: 'O que você precisa para consultar',
      paragraphs: [
        'Você precisa do CPF, de um celular com acesso à internet e do aplicativo FGTS, da Caixa Econômica Federal. Baixe-o na loja oficial do seu celular e confira se o desenvolvedor é a Caixa: existem aplicativos falsos com nomes parecidos, e a consulta verdadeira nunca pede depósito, tarifa ou senha do banco. A consulta também pode ser feita no site da Caixa, na área do FGTS, e em qualquer agência.',
      ],
    },
    {
      heading: 'Passo a passo no aplicativo',
      paragraphs: [
        'Abra o app e entre com o CPF. Na primeira vez, você cria uma senha e confirma a identidade por código ou biometria; se esquecer a senha depois, use a opção de recuperação do próprio aplicativo. Na tela inicial aparece o saldo total de todas as contas. Abra o extrato para ver cada conta separadamente: uma conta por empregador, com depósitos, rendimentos e saques.',
        'No extrato, olhe a coluna de datas e valores. O depósito de um mês aparece na conta no mês seguinte ao trabalhado, até o dia 20, e deve ser de cerca de 8% da remuneração.',
        'Faça essa conferência a cada três meses ou sempre que mudar de emprego. Descobrir uma falta logo é mais simples do que anos depois, quando a empresa pode já ter fechado ou o RH ter mudado.',
      ],
    },
    {
      heading: 'Exemplo: a Paula descobre um depósito faltando',
      paragraphs: [
        'Paula ganha R$ 2.500 por mês e, no dia 1º de outubro, abriu o extrato da empresa atual. Como 8% de R$ 2.500 são R$ 200,00, cada mês deveria ter um depósito desse valor. Ela comparou os meses do extrato com o holerite, que traz o valor de FGTS do mês:',
      ],
      table: {
        caption: 'Extrato da Paula, empresa atual',
        columns: ['Mês trabalhado', 'Esperado', 'Depositado', 'Situação'],
        rows: [
          ['Junho de 2026', 'R$ 200,00', 'R$ 200,00', 'Correto'],
          ['Julho de 2026', 'R$ 200,00', 'R$ 200,00', 'Correto'],
          ['Agosto de 2026', 'R$ 200,00', 'Nada', 'Falta o depósito'],
          [
            'Setembro de 2026',
            'R$ 200,00',
            'Ainda dentro do prazo',
            'Vence em 20/10',
          ],
        ],
      },
    },
    {
      heading: 'Como ler o extrato sem se perder',
      paragraphs: [
        'Três campos explicam quase tudo. O saldo é o valor atual da conta, já com rendimento. O depósito é o crédito mensal feito pela empresa. O saque aparece quando houve retirada, por exemplo por demissão sem justa causa ou saque-aniversário. Se você teve vários empregos, a soma de todas as contas forma o saldo total da tela inicial.',
        'O 13º salário também gera 8% de FGTS. Procure esse depósito no extrato entre o fim do ano e o início do seguinte.',
      ],
    },
    {
      heading: 'Problemas comuns e o que fazer',
      paragraphs: [
        'Na maioria dos casos, o caminho é reunir o extrato e o holerite e cobrar a empresa. Veja os casos mais frequentes.',
      ],
      table: {
        caption: 'Situação, causa provável e solução',
        columns: ['O que você vê', 'Causa provável', 'O que fazer'],
        rows: [
          [
            'Mês sem depósito',
            'Atraso ou esquecimento da empresa',
            'Mostre o extrato ao RH e peça o depósito com correção e multa.',
          ],
          [
            'Conta do emprego atual não aparece',
            'Empresa não registrou ou registrou o CPF errado',
            'Peça ao RH para conferir o CPF e regularizar o cadastro.',
          ],
          [
            'Saldo menor do que o esperado',
            'Saques anteriores ou depósitos parciais',
            'Compare cada mês do extrato com o holerite.',
          ],
          [
            'Não consegue entrar no app',
            'Senha esquecida ou aparelho novo',
            'Use a recuperação de senha ou vá a uma agência da Caixa com documento.',
          ],
        ],
      },
    },
    {
      heading: 'Se a empresa não regularizar',
      paragraphs: [
        'Guarde o extrato em PDF ou imprima. Procure o setor de pessoal e dê um prazo para a regularização. Se não resolver, faça denúncia ao Ministério do Trabalho e Emprego pelo Alô Trabalho, no 158, ou procure o sindicato da sua categoria. Também é possível cobrar na Justiça do Trabalho: o prazo permite reclamar depósitos dos últimos 5 anos, e até 2 anos depois de sair da empresa.',
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
    {
      question: 'Quanto a empresa deve depositar por mês?',
      answer:
        'Deposita 8% da remuneração. Em um salário de R$ 2.500, são R$ 200,00 por mês, e o valor não é descontado do salário.',
    },
    {
      question: 'O depósito de um mês já deveria estar no extrato?',
      answer:
        'O prazo é o dia 20 do mês seguinte. O depósito de setembro, por exemplo, só está atrasado depois de 20 de outubro.',
    },
    {
      question: 'Preciso pagar para consultar o FGTS?',
      answer:
        'Não. A consulta é gratuita no aplicativo, no site da Caixa e nas agências. Qualquer cobrança para liberar informação é golpe.',
    },
  ],
  sources: [
    {
      label: 'Caixa Econômica Federal: FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/',
    },
    {
      label: 'Lei 8.036/1990: FGTS',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
