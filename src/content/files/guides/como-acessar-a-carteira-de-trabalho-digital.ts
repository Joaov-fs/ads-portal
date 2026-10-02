import type { GuideDocument } from '../../types';

export const guideComoAcessarACarteiraDeTrabalhoDigital = {
  kind: 'guide',
  slug: 'como-acessar-a-carteira-de-trabalho-digital',
  title:
    'Como acessar a Carteira de Trabalho Digital e consultar seus contratos',
  description:
    'Entre na Carteira de Trabalho Digital com a conta gov.br, confira seus contratos, gere o PDF e corrija vínculos errados.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-02',
  tags: ['ctps', 'carteira-de-trabalho', 'gov-br', 'trabalho'],
  featuredCalculators: ['seguro-desemprego', 'rescisao-clt'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Aplicativo oficial',
      note: 'Carteira de Trabalho Digital, para Android e iPhone.',
    },
    {
      value: 'Gov.br',
      label: 'Login',
      note: 'Com CPF e a senha da conta gov.br.',
    },
    {
      value: 'PDF',
      label: 'Documento',
      note: 'Pode ser gerado para apresentar a bancos e empresas.',
    },
  ],
  sections: [
    {
      heading: 'O que você precisa antes de começar',
      paragraphs: [
        'A Carteira de Trabalho Digital reúne os contratos de trabalho registrados em seu CPF. Para entrar, você precisa de um celular com internet (ou um computador, pelo portal gov.br), do número do CPF e da senha da sua conta gov.br. Se você ainda não tem a conta ou esqueceu a senha, resolva isso primeiro: o guia sobre como criar e aumentar o nível da conta gov.br mostra o caminho.',
        'Também vale ter à mão a carteira de trabalho de papel, se tiver uma. Ela ajuda a comparar o que está anotado no papel com o que aparece no aplicativo.',
      ],
    },
    {
      heading: 'Passo a passo para instalar e entrar',
      paragraphs: [
        'Abra a loja de aplicativos do celular e procure por "Carteira de Trabalho Digital". Antes de instalar, confira o desenvolvedor: o aplicativo oficial é publicado pelo governo federal. Aplicativos com nome parecido e anúncios prometendo "liberar benefício" não são oficiais.',
        'Ao abrir, escolha entrar com a conta gov.br, digite o CPF e, na tela seguinte, a senha. Se você ativou a verificação em duas etapas, vai aparecer um pedido de código ou de confirmação no aplicativo gov.br. Depois do login, o aplicativo mostra seus dados pessoais e o menu com os contratos de trabalho.',
        'Se o login falhar, o motivo mais comum é senha digitada errada ou conta criada com dados que não batem com o CPF. Use a opção de recuperar a senha na própria tela do gov.br e tente de novo. Não informe senha ou código a ninguém que ligue ou mande mensagem dizendo ser "do suporte da carteira de trabalho".',
      ],
    },
    {
      heading:
        'Exemplo: Carlos confere os contratos antes de pedir um empréstimo',
      paragraphs: [
        'Carlos trabalhou numa loja de material de construção de março de 2019 a agosto de 2022 e depois numa transportadora, onde está desde janeiro de 2023. Ele vai pedir um financiamento e o banco quer comprovar o histórico de trabalho. Antes disso, abre o aplicativo e entra em "Contratos de trabalho".',
        'Ele vê dois registros e confere os dados de cada um. No segundo, a transportadora aparece com o cargo certo, mas o salário está desatualizado, bem abaixo do que ele recebe hoje. No primeiro, a data de saída está em branco, como se o contrato ainda estivesse aberto. Carlos anota os dois problemas, tira print das telas e só depois pede o PDF.',
      ],
      table: {
        caption: 'O que conferir em cada contrato',
        columns: ['Campo', 'O que verificar', 'Se estiver errado'],
        rows: [
          [
            'Empresa e CNPJ',
            'É o empregador de fato.',
            'Peça ao RH para conferir o registro.',
          ],
          [
            'Data de admissão',
            'Bate com o primeiro dia de trabalho.',
            'Leve contracheque ou carteira de papel.',
          ],
          [
            'Data de saída',
            'Preenchida em contratos já encerrados.',
            'A empresa deve informar o desligamento.',
          ],
          [
            'Cargo e salário',
            'Condizem com a função e o valor.',
            'Peça a atualização ao empregador.',
          ],
        ],
      },
    },
    {
      heading: 'Quando o contrato não aparece ou está errado',
      paragraphs: [
        'Os dados do contrato vêm do registro feito pela empresa. Por isso, quem corrige é o empregador, e a correção costuma ser feita no eSocial. O caminho é o seguinte: leve à empresa o print do aplicativo e um documento que prove o erro, como contracheque, termo de rescisão ou a carteira de papel, e peça a correção por escrito ou por e-mail, guardando a resposta.',
        'Se a empresa não responde, não existe mais ou se recusa, procure o sindicato da sua categoria ou os canais de atendimento do Ministério do Trabalho e Emprego para denunciar a falta de registro. Vínculo que nunca foi registrado também pode ser discutido na Justiça do Trabalho, com a ajuda de um advogado ou da Defensoria Pública. Guarde mensagens, holerites, extratos do FGTS e qualquer prova de que você trabalhou ali.',
        'Atenção: um contrato que aparece com atraso não significa fraude, mas contrato que você nunca teve e aparece no seu nome merece contestação imediata na empresa indicada e no Ministério do Trabalho, pois pode indicar uso indevido do seu CPF.',
      ],
    },
    {
      heading: 'Gerar o PDF e outros serviços do aplicativo',
      paragraphs: [
        'Depois de conferir tudo, use a opção de gerar ou compartilhar o documento em PDF. Ele serve para comprovar histórico de trabalho em processos seletivos, na abertura de crédito e em pedidos a órgãos públicos. Confira sempre se o arquivo foi gerado depois das correções.',
        'O aplicativo também dá acesso a serviços ligados ao trabalhador, como o acompanhamento do seguro-desemprego e a consulta de vagas do Sine. Se você foi demitido, use a calculadora de seguro-desemprego deste portal para estimar quantas parcelas esperar e compare com o resultado do pedido.',
      ],
    },
    {
      heading: 'Cuidados com golpes ligados à carteira de trabalho',
      paragraphs: [
        'Mensagens dizendo que sua carteira "foi bloqueada" ou que existe um "valor a receber" mediante pagamento de taxa são golpe. O acesso é gratuito e feito só pelo aplicativo oficial ou pelo portal gov.br. Vagas de emprego que pedem pagamento para "liberar o contrato" também são fraude.',
      ],
    },
  ],
  faq: [
    {
      question: 'A carteira de trabalho de papel ainda vale?',
      answer:
        'Sim, os registros antigos continuam válidos. A versão digital é a usada para novos registros e reúne os vínculos informados pelas empresas, então vale comparar com o papel.',
    },
    {
      question:
        'Meu contrato mais antigo não aparece no aplicativo. Perdi o direito?',
      answer:
        'Não. O que vale é ter trabalhado, e isso se prova por outros documentos. Guarde a carteira de papel, os holerites e o extrato do FGTS e, se precisar comprovar o período, leve esses documentos ao INSS ou ao atendimento do Ministério do Trabalho.',
    },
    {
      question: 'A empresa errou meu salário no registro. Quem corrige?',
      answer:
        'O empregador, por meio do eSocial. Leve um contracheque ao RH e peça a correção por escrito. Se houver recusa, procure o sindicato ou o Ministério do Trabalho.',
    },
    {
      question: 'Posso usar o aplicativo no computador?',
      answer:
        'Sim. A Carteira de Trabalho Digital também pode ser acessada pelo portal gov.br, com a mesma conta.',
    },
    {
      question: 'Alguém pode ver meus contratos se descobrir meu CPF?',
      answer:
        'Não sem a sua senha do gov.br. Por isso, ative a verificação em duas etapas e nunca informe códigos recebidos por SMS ou aplicativo.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Carteira de Trabalho Digital — portal gov.br',
      url: 'https://www.gov.br/pt-br/apps/ctps-digital',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
