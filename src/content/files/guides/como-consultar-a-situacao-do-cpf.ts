import type { GuideDocument } from '../../types';

export const guideComoConsultarASituacaoDoCpf = {
  kind: 'guide',
  slug: 'como-consultar-a-situacao-do-cpf',
  title: 'Como consultar a situação do CPF e regularizar quando há pendência',
  description:
    'Consulte a situação cadastral do CPF na Receita, entenda cada status e veja como regularizar sem pagar intermediários.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-26',
  updatedAt: '2026-10-02',
  tags: ['cpf', 'receita-federal', 'consulta', 'regularizacao'],
  highlights: [
    {
      value: 'Grátis',
      label: 'Consulta oficial',
      note: 'No site da Receita Federal.',
    },
    {
      value: 'Receita',
      label: 'Quem cuida do CPF',
      note: 'Não é o mesmo que Serasa ou SPC.',
    },
    {
      value: 'CPF + nascimento',
      label: 'Dados da consulta',
      note: 'Sem senha e sem login.',
    },
  ],
  sections: [
    {
      heading: 'Situação cadastral não é o mesmo que nome sujo',
      paragraphs: [
        'A situação cadastral é o status do seu CPF dentro da Receita Federal: se o cadastro está regular, com pendência, suspenso ou cancelado. Ela não mostra dívidas. Já o nome negativado é um registro de dívida em atraso feito por um credor nos birôs de crédito, como Serasa, Boa Vista e SPC.',
        'São problemas independentes. Uma pessoa pode ter o CPF regular e o nome sujo, ou o nome limpo e o CPF pendente de regularização. Se o seu caso é nome sujo, o caminho é outro: veja o guia sobre como consultar o CPF, ver dívidas e limpar o nome. Este guia trata só do cadastro na Receita.',
      ],
    },
    {
      heading: 'Passo a passo da consulta',
      paragraphs: [
        'Entre no site da Receita Federal e procure o serviço de consulta da situação cadastral do CPF. Digite o número do CPF, a data de nascimento e resolva o teste de segurança. Em seguida, clique em consultar.',
        'A tela mostra o nome, a situação cadastral e a data e hora da consulta. Se precisar de comprovante, por exemplo para uma empresa ou banco, salve ou imprima essa página. Guarde a data: o status vale para o momento em que foi feito.',
        'Se o site disser que a data de nascimento não confere, repita com cuidado. Se continuar assim, o cadastro pode estar com dado errado, e a correção é feita pela Receita, não por banco ou loja.',
      ],
    },
    {
      heading: 'O que cada situação significa',
      paragraphs: [
        'O resultado costuma cair em uma destas situações. O que fazer depende do motivo, e a própria Receita indica o caminho de regularização.',
      ],
      table: {
        caption: 'Situações cadastrais do CPF',
        columns: ['Situação', 'O que costuma significar', 'O que fazer'],
        rows: [
          ['Regular', 'Cadastro sem pendências.', 'Nada.'],
          [
            'Pendente de regularização',
            'Declaração obrigatória do Imposto de Renda não entregue ou dado inconsistente.',
            'Entregar a declaração em atraso ou corrigir o dado.',
          ],
          [
            'Suspensa',
            'Inconsistência cadastral apontada pela Receita.',
            'Pedir a regularização pelos canais da Receita.',
          ],
          [
            'Cancelada',
            'Cancelamento por óbito, duplicidade ou decisão da Receita.',
            'Procurar a Receita com documentos.',
          ],
          [
            'Nula',
            'Cadastro invalidado por fraude ou irregularidade.',
            'Exige análise da Receita.',
          ],
        ],
      },
    },
    {
      heading: 'Exemplo: Ana descobre a pendência ao abrir uma conta',
      paragraphs: [
        'Ana tenta abrir uma conta digital e o cadastro é recusado por "CPF com restrição". Ela consulta a situação no site da Receita e vê "Pendente de regularização". Ela lembra que, em 2023, ficou desempregada e achou que não precisava declarar. Na verdade, a obrigação de entregar a declaração depende dos rendimentos e dos bens do ano, e a Receita identificou a omissão.',
        'Ana entra no portal da Receita com a conta gov.br, abre o serviço de Imposto de Renda e entrega a declaração do ano que faltava, dentro do programa oficial. Como entregou em atraso, o sistema calcula a multa. Ela paga o documento de arrecadação (DARF) pelo aplicativo do banco e guarda o comprovante. Depois que a Receita processa a entrega, ela consulta o CPF de novo e vê a situação regularizada. Só então volta ao banco e refaz o cadastro.',
        'Se houver mais de um ano em atraso, entregue todos. A multa por atraso tem valor mínimo previsto em lei, mesmo quando não há imposto a pagar.',
      ],
    },
    {
      heading: 'Como regularizar cada caso',
      paragraphs: [
        'Para pendência por declaração, entregue as declarações que faltam e pague a multa, se houver. Para dado inconsistente, atualize o cadastro pelos serviços da Receita com a conta gov.br ou procure o atendimento presencial, que pode exigir agendamento e documento de identificação oficial. Para CPF cancelado ou nulo, o pedido de regularização exige documentos e análise da Receita, e o prazo depende de cada caso.',
        'Em qualquer situação, o serviço é gratuito. Você só paga multa, quando devida, e o documento de arrecadação sai em nome do seu CPF. Não pague "taxa de regularização" a terceiros.',
      ],
    },
    {
      heading: 'Golpes com o CPF',
      paragraphs: [
        'A Receita não liga nem manda mensagem pedindo senha, código ou pagamento para "liberar" o CPF. Mensagens com link, tom de urgência e ameaça de bloqueio são golpe. Digite o endereço do site oficial no navegador e use apenas a conta gov.br.',
      ],
    },
  ],
  faq: [
    {
      question: 'CPF pendente de regularização impede de trabalhar?',
      answer:
        'Não impede o trabalho, mas pode travar serviços como abertura de conta, financiamento e alguns cadastros em órgãos públicos.',
    },
    {
      question: 'CPF pendente deixa o nome sujo?',
      answer:
        'Não. Pendência na Receita é diferente de dívida em atraso. O nome sujo vem de credores e birôs de crédito, e o CPF pendente vem da Receita.',
    },
    {
      question: 'Preciso de despachante ou advogado para regularizar?',
      answer:
        'Em regra, não. A consulta e os serviços de regularização são gratuitos e podem ser feitos por você, com a conta gov.br.',
    },
    {
      question: 'A data de nascimento não confere na consulta. E agora?',
      answer:
        'Pode haver erro no seu cadastro. Confira se digitou certo e, se o problema continuar, peça a correção à Receita Federal, com documento de identificação. Banco e loja não conseguem alterar esse dado.',
    },
    {
      question: 'Quanto tempo leva para o CPF voltar a ficar regular?',
      answer:
        'Depende da Receita processar a entrega ou o pedido. Consulte de novo alguns dias depois e guarde o comprovante de entrega e de pagamento enquanto isso.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal do Brasil',
      url: 'https://www.gov.br/receitafederal/pt-br',
    },
    {
      label: 'Portal gov.br',
      url: 'https://www.gov.br/',
    },
    {
      label: 'Receita Federal — Cadastro de Pessoas Físicas (CPF)',
    },
  ],
} as const satisfies GuideDocument;
