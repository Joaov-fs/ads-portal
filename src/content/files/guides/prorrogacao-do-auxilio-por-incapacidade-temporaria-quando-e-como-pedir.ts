import type { GuideDocument } from '../../types';

export const guideProrrogacaoAuxilio = {
  kind: 'guide',
  slug: 'prorrogacao-do-auxilio-por-incapacidade-temporaria-quando-e-como-pedir',
  title:
    'Prorrogação do auxílio por incapacidade temporária: quando e como pedir',
  description:
    'Saiba em que dia pedir a prorrogação do auxílio-doença do INSS, como fazer pelo Meu INSS, o que levar para a perícia e o que fazer se o pedido for negado.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-14',
  updatedAt: '2026-10-14',
  tags: ['inss', 'auxilio-doenca', 'prorrogacao', 'pericia', 'beneficios'],
  featuredCalculators: [
    'prazo-prorrogacao-auxilio-inss',
    'auxilio-incapacidade',
    'retroativos-inss',
  ],
  highlights: [
    {
      value: '15 dias',
      label: 'Janela para pedir a prorrogação',
      note: 'Contados para trás a partir da data de cessação do benefício.',
    },
    {
      value: '90 dias',
      label: 'Limite da análise sem perícia presencial',
      note: 'Soma de períodos, quando o INSS aceita o atestado.',
    },
    {
      value: '30 dias',
      label: 'Prazo para recorrer de uma negativa',
      note: 'Contados da ciência da decisão do INSS.',
    },
  ],
  sections: [
    {
      heading: 'O que é a prorrogação do auxílio',
      paragraphs: [
        'O auxílio por incapacidade temporária, antigo auxílio-doença, é concedido por um prazo. Quando o INSS concede o benefício, ele já informa a data em que o pagamento termina, chamada de data de cessação do benefício (DCB) ou alta programada. Se na data da alta o segurado ainda não consegue trabalhar, ele pode pedir a prorrogação.',
        'Prorrogar é diferente de pedir um benefício novo. Na prorrogação, o pedido é uma continuação do mesmo benefício, e a análise parte do que já está no sistema. Por isso a data do pedido importa tanto: ela é o que separa uma prorrogação de um requerimento novo.',
      ],
    },
    {
      heading: 'Em que dia pedir',
      paragraphs: [
        'O pedido de prorrogação deve ser feito nos 15 dias que antecedem a data de cessação do benefício, conforme a Portaria Conjunta PRES/INSS/SRGPS/MPS nº 49, de 2024. Antes dessa janela, o sistema pode não aceitar o pedido. Depois da data de cessação, o caminho pode ser fazer um novo requerimento, o que costuma gerar espera e risco de ficar sem renda.',
        'A data de cessação aparece no Meu INSS, na carta de concessão e na própria decisão da perícia. A tabela mostra o primeiro dia da janela para algumas datas de cessação.',
      ],
      table: {
        caption: 'Primeiro dia para pedir a prorrogação',
        columns: ['Data de cessação', 'Primeiro dia para pedir', 'Último dia'],
        rows: [
          ['30/10/2026', '15/10/2026', '30/10/2026'],
          ['15/11/2026', '31/10/2026', '15/11/2026'],
          ['30/11/2026', '15/11/2026', '30/11/2026'],
          ['31/12/2026', '16/12/2026', '31/12/2026'],
        ],
      },
    },
    {
      heading: 'Como pedir pelo Meu INSS',
      paragraphs: [
        'O pedido é feito de forma digital no Meu INSS, pelo aplicativo ou pelo site, com a conta gov.br. Na opção de benefícios por incapacidade, escolha o pedido de prorrogação do benefício em manutenção e siga as telas. A Central 135 também atende e pode registrar o pedido.',
        'Antes de abrir o pedido, junte um atestado ou relatório médico atualizado, que mostre que a incapacidade continua. O ideal é que o documento seja legível, sem rasuras, com a identificação do paciente, o diagnóstico ou CID, a data de emissão, o tempo estimado de afastamento e a assinatura com o CRM do médico.',
      ],
    },
    {
      heading: 'Atestmed: análise do atestado sem perícia presencial',
      paragraphs: [
        'O INSS mantém uma regra, chamada Atestmed, que permite conceder o auxílio por incapacidade temporária de até 90 dias com análise do atestado, sem perícia presencial. Segundo a divulgação do governo, a medida foi prorrogada até setembro de 2027. A soma dos períodos concedidos assim, mesmo que não seguidos, fica limitada a 90 dias.',
        'Se o segurado recebeu 30 dias pelo Atestmed, por exemplo, ainda pode ter no máximo mais 60 dias nessa modalidade. Passando desse limite, ou se o INSS não aceitar o documento, pode ser marcada uma perícia médica, presencial ou por telemedicina. Confira a regra vigente no Meu INSS, porque as portarias mudam.',
      ],
    },
    {
      heading: 'O que muda na perícia da prorrogação',
      paragraphs: [
        'Quando há perícia, o médico avalia se a incapacidade continua e por quanto tempo. O resultado pode ser a concessão de novo prazo, a alta imediata ou a conversão do caso em outro benefício, como a aposentadoria por incapacidade permanente, quando a recuperação não é esperada.',
        'Leve documentos originais: atestados recentes, exames, laudos, receitas, relatórios de tratamento e comprovantes de internação ou cirurgia. Quanto mais claro o histórico, mais fácil o médico perito entender a evolução. Chegue no horário e leve um documento com foto.',
      ],
    },
    {
      heading: 'Enquanto o pedido está em análise',
      paragraphs: [
        'Em regra, o benefício continua sendo pago enquanto o pedido de prorrogação aguarda a análise, até a decisão. Mesmo assim, guarde o protocolo e acompanhe o andamento no Meu INSS, porque o INSS pode alterar a situação do pedido, convocar para perícia ou pedir documentos.',
        'Se houver falta de pagamento em uma competência em que você deveria receber, consulte o extrato no Meu INSS. Se o benefício for prorrogado, pagamentos que não saíram podem ser feitos depois como retroativos.',
      ],
    },
    {
      heading: 'Pedido negado: reconsideração, recurso e Justiça',
      paragraphs: [
        'Se a prorrogação for negada, o segurado tem 30 dias para apresentar recurso ao INSS, que será julgado pela Junta de Recursos do Conselho de Recursos da Previdência Social. O recurso também é feito pelo Meu INSS. Leia o motivo da negativa antes de recorrer: se foi falta de documento, juntar o documento certo pode resolver.',
        'Quando a negativa continua e há provas de que a incapacidade persiste, o caminho é a ação na Justiça Federal. Nesse caso, um perito nomeado pelo juiz faz a avaliação, e não é raro o resultado ser diferente do da perícia do INSS. Quem não tem dinheiro para advogado pode procurar a Defensoria Pública da União.',
      ],
    },
    {
      heading: 'Quanto vai ser pago e por quanto tempo',
      paragraphs: [
        'O valor da prorrogação é o mesmo do benefício em andamento. O auxílio por incapacidade temporária paga 91% da média dos salários de contribuição, com piso de um salário mínimo e teto do INSS. Uma média de R$ 3.000,00, por exemplo, gera R$ 2.730,00 por mês.',
        'O prazo da prorrogação é definido pelo perito ou pelo atestado aceito. Para ver as datas do seu caso, use a calculadora do prazo de prorrogação, que mostra a janela de pedido a partir da data de cessação.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais comuns são esperar a alta chegar para pedir, pedir cedo demais e ter o pedido recusado, apresentar atestado sem CID ou sem CRM e não guardar o protocolo. Outro erro é ignorar a convocação para perícia: o não comparecimento pode levar ao cancelamento do pedido.',
        'Também é comum confundir prorrogação com o pedido de reconsideração e com o recurso. A prorrogação é pedida antes da alta. Depois de uma negativa, o caminho é recurso, e depois de um prazo longo sem resposta, a Justiça. Anote as datas de cada etapa.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando posso pedir a prorrogação do auxílio-doença?',
      answer:
        'Nos 15 dias que antecedem a data de cessação do benefício. A data de cessação aparece no Meu INSS e na carta de concessão.',
    },
    {
      question: 'E se eu perder o prazo?',
      answer:
        'Pode ser necessário fazer um novo pedido de benefício, o que reinicia a análise. Consulte o Meu INSS ou a Central 135 para saber o caminho do seu caso.',
    },
    {
      question: 'O pedido de prorrogação exige perícia presencial?',
      answer:
        'Nem sempre. Com a regra do Atestmed, benefícios de até 90 dias podem ser analisados só pelo atestado. Acima disso, ou em caso de dúvida, o INSS pode marcar perícia.',
    },
    {
      question: 'O benefício continua sendo pago durante a análise?',
      answer:
        'Em regra, sim, até a decisão do pedido. Guarde o protocolo e acompanhe o andamento no Meu INSS.',
    },
    {
      question: 'Quanto tempo tenho para recorrer se o pedido for negado?',
      answer:
        'O recurso ao INSS deve ser apresentado em 30 dias a partir da ciência da decisão. Depois disso, resta a via judicial.',
    },
  ],
  sources: [
    {
      label:
        'Portaria Conjunta PRES/INSS/SRGPS/MPS nº 49, de 4 de julho de 2024',
    },
    { label: 'Lei 8.213/1991, arts. 59 a 63' },
    { label: 'INSS: Meu INSS e Central 135' },
  ],
} as const satisfies GuideDocument;
