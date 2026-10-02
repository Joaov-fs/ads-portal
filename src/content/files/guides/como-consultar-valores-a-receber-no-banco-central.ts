import type { GuideDocument } from '../../types';

export const guideComoConsultarValoresAReceberNoBancoCentral = {
  kind: 'guide',
  slug: 'como-consultar-valores-a-receber-no-banco-central',
  title: 'Como consultar e resgatar o dinheiro esquecido no Banco Central',
  description:
    'Consulte o Sistema Valores a Receber, peça o resgate com a conta gov.br, receba por Pix e saiba o que fazer quando há erro.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-02',
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
      heading: 'O que é o dinheiro esquecido e quem pode ter',
      paragraphs: [
        'O Sistema Valores a Receber, do Banco Central, mostra quantias que bancos, cooperativas, administradoras de consórcio e outras instituições financeiras devem a pessoas e empresas e ainda não foram pagas. Não é um prêmio nem uma restituição de imposto: é dinheiro que já era seu e ficou parado, como o saldo de uma conta encerrada, uma tarifa cobrada indevidamente, a cota de um consórcio ou o saldo de uma cooperativa.',
        'Quem já teve conta em banco que fechou, trocou de banco ou participou de consórcio tem motivos para consultar. A consulta vale também para empresas, com o CNPJ.',
      ],
    },
    {
      heading: 'Acesse somente o site oficial',
      paragraphs: [
        'Digite no navegador valoresareceber.bcb.gov.br. Não use links recebidos por e-mail, SMS ou aplicativo de mensagem. O Banco Central não liga nem manda mensagem pedindo senha, dados do cartão ou pagamento antecipado. O serviço é gratuito.',
        'Em seguida, informe o CPF (ou o CNPJ), a data de nascimento e resolva a verificação de segurança. A página informa se há valores em seu nome.',
      ],
    },
    {
      heading: 'Exemplo: Marcos acha R$ 312,45 de uma conta antiga',
      paragraphs: [
        'Marcos fechou uma conta salário de um banco que já não existe mais e achava que não tinha deixado nada lá. Fez a consulta e a página mostrou que havia valor a receber. Ele conferiu quem era a instituição responsável e o tipo de valor: saldo de conta encerrada, R$ 312,45.',
        'Para pedir o resgate, entrou com a conta gov.br, que precisa estar no nível prata ou ouro e com a verificação em duas etapas ativada. Escolheu receber por Pix na chave CPF, conferiu os dados, enviou o pedido e anotou o número do protocolo. Depois, acompanhou pelo site e aguardou o pagamento.',
        'Se Marcos não tivesse chave Pix CPF, poderia usar outra forma de recebimento oferecida pelo sistema, como a transferência para uma conta bancária. Se a conta gov.br não estivesse no nível exigido, ele teria de aumentá-lo antes, como explica o guia sobre a conta gov.br.',
      ],
      table: {
        caption: 'Antes de pedir o resgate',
        columns: ['Exigência', 'Por que importa'],
        rows: [
          [
            'Conta gov.br prata ou ouro',
            'Exigida para entrar no sistema e pedir o resgate.',
          ],
          [
            'Verificação em duas etapas ativa',
            'Também exigida para confirmar o pedido.',
          ],
          ['Chave Pix CPF', 'Destino do pagamento por Pix.'],
          [
            'Dados do banco atualizados',
            'Evita devolução ou demora no pagamento.',
          ],
        ],
      },
    },
    {
      heading: 'Valores de pessoa falecida e de empresa',
      paragraphs: [
        'Os herdeiros podem consultar e pedir valores de quem faleceu pelo próprio sistema, apresentando a documentação exigida. Reúna a certidão de óbito, seus documentos de identificação e os papéis que provem que você é herdeiro; o próprio sistema informa o que é exigido em cada caso, e a instituição pode pedir documentos complementares.',
        'Empresas consultam pelo CNPJ. Quem faz o pedido em nome da empresa precisa comprovar que a representa, e o sistema orienta sobre os documentos.',
      ],
    },
    {
      heading: 'O que fazer se o valor não aparece ou o pagamento não sai',
      paragraphs: [
        'Se a consulta diz que não há valores mas você tem certeza de que deixou dinheiro numa instituição, tente de novo mais tarde, porque novos valores podem ser incluídos. Procure também a instituição diretamente, com os dados da conta antiga.',
        'Se o pedido foi feito, o prazo passou e o dinheiro não chegou, procure primeiro o atendimento da instituição responsável, com o protocolo em mãos. Persistindo o problema, registre reclamação no Banco Central pelo site ou pelo telefone 145, depois de tentar o SAC e a ouvidoria da instituição. Em geral, o banco tem até 10 dias úteis para responder a reclamações registradas no Banco Central.',
      ],
    },
    {
      heading: 'Golpes: o que nunca acontece',
      paragraphs: [
        'O resgate não tem taxa, comissão, imposto prévio nem depósito de "confirmação". Quem pede dinheiro para liberar o valor é golpista, mesmo que cite o Banco Central, use o seu nome completo ou mande um site idêntico ao oficial. Despachantes e "assessorias" que cobram porcentagem fazem o que você faria de graça sozinho.',
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
      question: 'Existe prazo para pedir o dinheiro?',
      answer:
        'Não há data final definida para solicitar. Mesmo assim, não deixe para depois: confira o seu CPF e peça logo.',
    },
    {
      question: 'Posso consultar o CPF de outra pessoa?',
      answer:
        'Para pessoa falecida, os herdeiros fazem o pedido pelo próprio sistema, com documentação. Para pessoa viva, o acesso depende da conta gov.br dela.',
    },
    {
      question: 'Preciso de chave Pix para receber?',
      answer:
        'Para o recebimento por Pix, usa-se a chave CPF. O sistema também permite receber de outras formas indicadas por ele.',
    },
    {
      question:
        'Recebi mensagem dizendo que tenho dinheiro a receber. É verdade?',
      answer:
        'Não confie na mensagem. Digite o endereço oficial no navegador e consulte por conta própria. Se o site oficial não mostrar nada, a mensagem é golpe.',
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
    {
      label:
        'Banco Central do Brasil — reclamação contra instituições financeiras',
      url: 'https://www.gov.br/pt-br/servicos/registrar-reclamacao-contra-instituicao-supervisionada-pelo-banco-central',
    },
  ],
} as const satisfies GuideDocument;
