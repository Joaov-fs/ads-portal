import type { GuideDocument } from '../../types';

export const guideComoUsarOPixComSeguranca = {
  kind: 'guide',
  slug: 'como-usar-o-pix-com-seguranca',
  title: 'Como usar o Pix com segurança: chaves, limites e golpes',
  description:
    'Cadastre chaves, confira o destinatário, ajuste limites e saiba o que fazer nas primeiras horas após um Pix errado ou golpe.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-02',
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
        'No aplicativo do banco, abra a área do Pix e cadastre as chaves que quiser: CPF, número de celular, e-mail ou chave aleatória. Cada chave aponta para uma conta. Quem usa a chave aleatória, formada por letras e números, não divulga CPF ou telefone para receber pagamentos.',
        'Quando trocar de número de celular ou deixar de usar um e-mail, exclua a chave antiga. Assim, outra pessoa não consegue registrar um número que era seu e ninguém paga a conta errada por engano. Você também pode levar a chave de um banco para outro, pedindo a portabilidade no aplicativo do banco novo.',
      ],
    },
    {
      heading: 'Passo 2: confira a tela de confirmação',
      paragraphs: [
        'Antes de confirmar qualquer Pix, o aplicativo mostra o nome do destinatário, parte do CPF ou CNPJ, o banco e o valor. É nesse momento que se evita a maior parte dos problemas. Se o nome for diferente do esperado, não confirme.',
        'Desconfie de pedidos de Pix com urgência, de links para "pagar uma taxa" para liberar prêmio ou empréstimo e de contatos dizendo ser parentes em novo número. Antes de transferir, ligue para a pessoa no número que você já tinha.',
      ],
    },
    {
      heading: 'Passo 3: ajuste limites e proteja o celular',
      paragraphs: [
        'No aplicativo, procure as configurações de limite do Pix. Defina um limite diário que combine com o seu uso e um valor menor para o período noturno. Confira no app qual é o horário e o valor do seu limite noturno, porque as regras podem variar por banco, dentro do que o Banco Central permite.',
        'Ative a biometria e a autenticação em duas etapas, use bloqueio de tela e não deixe senhas anotadas no celular. Se o aparelho for perdido ou roubado, ligue para o banco e peça o bloqueio de acesso e do Pix antes de qualquer outra coisa.',
      ],
    },
    {
      heading: 'Exemplo: Pix de R$ 450,00 para a chave errada',
      paragraphs: [
        'Luciana ia pagar R$ 450,00 de um serviço e digitou o celular do prestador com um dígito errado. Ela confirmou o Pix sem ler o nome na tela e só percebeu o erro quando o prestador disse que não recebeu nada. Era um Pix por engano, sem golpe, e o dinheiro foi para a conta de um desconhecido.',
        'Nas primeiras horas, ela fez isto: abriu o comprovante e anotou a data, o valor e os dados do destinatário. Entrou em contato com o banco pelo aplicativo e disse que fez um Pix para destinatário errado, pedindo que o banco tentasse falar com o recebedor. Em seguida, mandou o mesmo pedido por escrito e guardou o protocolo. Enquanto aguardava, pagou o prestador com o destinatário correto, para não atrasar o serviço, sem contar com a devolução.',
        'Nesse tipo de caso, a devolução em geral depende da concordância de quem recebeu, e o banco faz a ponte. Se o recebedor recusar, Luciana pode registrar reclamação na ouvidoria do banco, no Banco Central (telefone 145 ou site) e no Procon, e, se for o caso, ir ao Juizado Especial Cível, que dispensa advogado em causas de menor valor. O Pix agendado pode ser cancelado antes de ser executado, pelo aplicativo.',
      ],
    },
    {
      heading: 'Se foi golpe, não erro',
      paragraphs: [
        'Quando você foi enganado, por exemplo por falso funcionário do banco, falso parente ou QR Code adulterado, o procedimento é outro: acione o banco imediatamente, pelo aplicativo ou telefone, e peça a contestação pelo Mecanismo Especial de Devolução (MED). O pedido pode ser feito em até 80 dias da transação. Quanto mais rápido, maior a chance de que o valor ainda esteja na conta do golpista e possa ser bloqueado.',
        'Registre boletim de ocorrência, guarde prints da conversa, o comprovante e os dados do destinatário. Se não houver retorno do banco, procure a ouvidoria, o Procon e o Banco Central.',
      ],
      table: {
        caption: 'Erro ou golpe: o que fazer primeiro',
        columns: ['Situação', 'Primeiro passo', 'Depois'],
        rows: [
          [
            'Chave digitada errada',
            'Pedir ao banco que contate o recebedor.',
            'Ouvidoria, Banco Central, Procon e Juizado.',
          ],
          [
            'Golpe (engano induzido)',
            'Pedir a contestação pelo MED e bloqueio.',
            'Boletim de ocorrência e reclamação.',
          ],
          [
            'Celular perdido ou roubado',
            'Bloquear acesso e Pix no banco.',
            'Boletim de ocorrência e troca de senhas.',
          ],
          [
            'Pix agendado errado',
            'Cancelar no aplicativo antes da execução.',
            'Refazer com o destinatário correto.',
          ],
        ],
      },
    },
  ],
  faq: [
    {
      question: 'O Pix é seguro?',
      answer:
        'O sistema funciona com regras do Banco Central, mas os golpes exploram o erro de quem paga. Confira sempre o destinatário e nunca compartilhe senhas ou códigos.',
    },
    {
      question: 'Posso cancelar um Pix que já foi enviado?',
      answer:
        'Não de forma unilateral. Em fraude, o banco pode usar o mecanismo de devolução, e em erro depende de o recebedor concordar. Só o Pix agendado, ainda não executado, pode ser cancelado.',
    },
    {
      question: 'Recebi um Pix por engano. O que faço?',
      answer:
        'Avise o banco e devolva o valor pelo canal que ele indicar, em vez de apenas mandar de volta. Não gaste o dinheiro: o valor pode ser cobrado de você depois.',
    },
    {
      question: 'Por que meu Pix noturno foi recusado?',
      answer:
        'Provavelmente o valor passou do limite noturno definido na sua conta. Confira e ajuste o limite no aplicativo, lembrando que o banco pode levar um tempo para aplicar um aumento.',
    },
    {
      question: 'Chave aleatória é mais segura?',
      answer:
        'Ela evita expor CPF, telefone ou e-mail. Mas o que protege seu dinheiro é a conferência do destinatário e o cuidado com senhas e códigos.',
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
    {
      label:
        'Banco Central do Brasil — reclamação contra instituições financeiras',
      url: 'https://www.gov.br/pt-br/servicos/registrar-reclamacao-contra-instituicao-supervisionada-pelo-banco-central',
    },
  ],
} as const satisfies GuideDocument;
