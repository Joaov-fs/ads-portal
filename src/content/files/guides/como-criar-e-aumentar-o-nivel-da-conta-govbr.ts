import type { GuideDocument } from '../../types';

export const guideComoCriarEAumentarONivelDaContaGovbr = {
  kind: 'guide',
  slug: 'como-criar-e-aumentar-o-nivel-da-conta-govbr',
  title: 'Como criar e aumentar o nível da conta gov.br (bronze, prata e ouro)',
  description:
    'Crie a conta gov.br, veja o que cada nível libera e suba para prata ou ouro quando um serviço exigir.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-25',
  updatedAt: '2026-10-02',
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
      note: 'Disponível a partir do nível prata.',
    },
    {
      value: 'Grátis',
      label: 'Custo',
      note: 'A conta e os níveis não têm taxa.',
    },
  ],
  sections: [
    {
      heading: 'O que cada nível libera',
      paragraphs: [
        'A conta gov.br é um login único, ligado ao seu CPF, para usar serviços do governo federal. O nível mostra o quanto sua identidade foi comprovada. Quanto mais alto, mais serviços e documentos você acessa, e mais protegida fica a conta.',
        'O nível bronze é o básico: o cadastro é validado com dados da Receita Federal ou do INSS e dá acesso a serviços simples. A partir do prata é possível usar a verificação em duas etapas, ver documentos digitais e acessar serviços de maior segurança. O ouro é o nível mais alto.',
      ],
      table: {
        caption: 'Níveis da conta gov.br',
        columns: ['Nível', 'Como obter', 'O que muda'],
        rows: [
          [
            'Bronze',
            'Cadastro online com CPF, validado nos dados da Receita ou do INSS.',
            'Serviços simples; sem verificação em duas etapas.',
          ],
          [
            'Prata',
            'Reconhecimento facial com a base da CNH, internet banking de banco credenciado ou outro método disponível.',
            'Documentos digitais, verificação em duas etapas e a maioria dos serviços.',
          ],
          [
            'Ouro',
            'Reconhecimento facial com a base da Justiça Eleitoral, QR Code da Carteira de Identidade Nacional no aplicativo ou certificado digital ICP-Brasil.',
            'Segurança máxima e acesso aos serviços mais sensíveis.',
          ],
        ],
      },
    },
    {
      heading: 'Crie a conta bronze',
      paragraphs: [
        'Acesse o portal gov.br ou baixe o aplicativo gov.br e escolha "Criar conta". Informe o CPF, confira os dados que aparecem, cadastre um celular e um e-mail que você usa de fato e crie uma senha. O sistema pergunta alguns dados pessoais para validar o cadastro.',
        'Se a validação online falhar, a criação também pode ser feita de forma presencial, em agências do INSS e em pontos de atendimento do Balcão gov.br. Leve um documento oficial com foto e o CPF.',
      ],
    },
    {
      heading: 'Exemplo: Rita precisa do nível prata para o Meu INSS',
      paragraphs: [
        'Rita criou a conta há anos e agora quer consultar um benefício no Meu INSS. O serviço pede nível mais alto, e ela vê a mensagem indicando que a conta precisa ser aumentada. Ela abre o aplicativo gov.br, toca na opção para aumentar o nível e escolhe como comprovar a identidade.',
        'Ela tem CNH, então escolhe o reconhecimento facial. O aplicativo pede que ela permita o acesso à câmera, fique em um lugar bem iluminado e siga as instruções para posicionar o rosto. Ao terminar, o sistema compara a imagem com a base da CNH. Em poucos instantes, a conta sobe para prata. Se Rita não tivesse CNH, ela poderia tentar pelo internet banking de um banco credenciado, entrando na sua conta bancária e autorizando o gov.br a confirmar os dados.',
        'Depois de subir de nível, Rita ativa a verificação em duas etapas nas configurações de segurança e volta ao serviço que queria. Se o nível ouro for exigido por algum serviço específico, ela pode tentar o reconhecimento facial com a base da Justiça Eleitoral, o QR Code da identidade nacional ou um certificado digital.',
      ],
    },
    {
      heading: 'Problemas comuns na validação',
      paragraphs: [
        'O reconhecimento facial costuma falhar por pouca luz, câmera suja, óculos ou boné. Tente de novo em ambiente claro, com o rosto descoberto. Se não funcionar, mude o método, usando o banco ou outra forma disponível.',
        'Se aparecer a mensagem de que os dados não conferem, o motivo pode ser um cadastro desatualizado na Receita ou no INSS. Corrija o dado na origem e tente de novo. Se a opção de banco não aparece, pode ser que o seu banco ainda não faça parte da lista de credenciados.',
        'Em qualquer dúvida, o atendimento presencial do gov.br e das agências do INSS pode ajudar, sem custo.',
      ],
    },
    {
      heading: 'Proteja a conta e recupere o acesso',
      paragraphs: [
        'Use uma senha longa e exclusiva, ative a verificação em duas etapas assim que a conta for prata ou ouro. Nunca informe códigos recebidos por SMS ou aplicativo. Mensagens dizendo que o gov.br "será bloqueado" ou que há "benefício liberado" são golpe: digite o endereço oficial no navegador.',
        'Se esqueceu a senha, use "Esqueci minha senha" na tela de login e valide a identidade pelo método oferecido. Se perdeu o celular cadastrado, use a recuperação pelo próprio gov.br ou procure um ponto de atendimento. Todo o processo é gratuito.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso do nível ouro?',
      answer:
        'Para a maioria dos serviços do dia a dia, o prata resolve. O ouro é exigido só em serviços específicos, e o próprio serviço avisa.',
    },
    {
      question: 'Posso ter mais de uma conta?',
      answer: 'Não. A conta é vinculada ao CPF.',
    },
    {
      question: 'Não tenho CNH nem internet banking. Como subo de nível?',
      answer:
        'Tente outros métodos que aparecem no aplicativo ou procure o atendimento presencial do gov.br ou do INSS. Se tiver certificado digital, ele também comprova a identidade.',
    },
    {
      question: 'Alguém cobrou para aumentar meu nível. É normal?',
      answer:
        'Não. A criação da conta e o aumento de nível são gratuitos. Quem cobra por isso está agindo de má-fé.',
    },
    {
      question: 'Por que não consigo ativar a verificação em duas etapas?',
      answer:
        'A opção fica disponível a partir do nível prata. Aumente o nível da conta e tente novamente.',
    },
  ],
  sources: [
    {
      label: 'Níveis da conta gov.br — Governo Digital',
      url: 'https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br/niveis-da-conta-govbr',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
    {
      label: 'Decreto 10.332/2020 — Estratégia de Governo Digital',
    },
  ],
} as const satisfies GuideDocument;
