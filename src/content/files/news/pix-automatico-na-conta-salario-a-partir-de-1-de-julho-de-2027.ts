import type { NewsDocument } from '../../types';

export const newsPixAutomaticoContaSalario2027 = {
  kind: 'news',
  slug: 'pix-automatico-na-conta-salario-a-partir-de-1-de-julho-de-2027',
  title:
    'Pix Automático poderá ser usado na conta-salário a partir de 1º de julho de 2027',
  description:
    'Resolução BCB 587 libera o Pix Automático em contas-salário em 1º/7/2027 e reforça avisos sobre marcação de suspeita de fraude. Veja o que muda.',
  category: 'financas',
  coverImage: {
    src: '/images/news/pix-automatico-na-conta-salario-a-partir-de-1-de-julho-de-2027.jpg',
    alt: 'Extrato de conta-salário, calendário de julho de 2027 com o dia 1 marcado e celular com o Pix Automático.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-11',
  updatedAt: '2026-10-11',
  tags: ['pix', 'conta-salario', 'banco', 'seguranca', 'fraude'],
  featuredCalculators: ['salario-liquido'],
  highlights: [
    {
      value: '1º/7/2027',
      label: 'Pix Automático na conta-salário',
      note: 'Para pagamentos recorrentes autorizados pelo titular.',
    },
    {
      value: '587',
      label: 'Resolução BCB, de 18/9/2026',
      note: 'Atualiza o regulamento do Pix.',
    },
    {
      value: '500 mil',
      label: 'Contas ativas para dispensa',
      note: 'Instituições acima disso podem ter a adesão dispensada pelo BC.',
    },
  ],
  sections: [
    {
      heading: 'O que o Banco Central mudou nas regras do Pix',
      paragraphs: [
        'O Banco Central publicou a Resolução BCB nº 587, de 18 de setembro de 2026, que atualiza o regulamento do Pix. A divulgação oficial foi feita em 5 de outubro pela Agência Gov. A mudança que mais interessa ao trabalhador é a que mexe na conta-salário.',
        'A partir de 1º de julho de 2027, a conta-salário poderá receber pagamentos recorrentes por Pix Automático, desde que o titular autorize. A conta-salário é aquela aberta pelo empregador só para receber o salário, e hoje tem limites de uso por regra do próprio Banco Central.',
        'As demais restrições continuam valendo: as regras sobre receber valores, fazer transferências e outras formas de pagamento por Pix nessas contas seguem como estão. A novidade é apenas a recorrência autorizada.',
        'O Pix Automático é o recurso em que você autoriza uma única vez uma cobrança que se repete, como mensalidade, conta de consumo ou assinatura, e o valor é debitado na data combinada. Até agora, quem recebe o salário só na conta-salário precisa pedir a portabilidade para outra conta ou usar outros meios para esse tipo de débito.',
      ],
    },
    {
      heading: 'O que muda na prática para quem recebe só na conta-salário',
      image: {
        src: '/images/news/pix-automatico-na-conta-salario-a-partir-de-1-de-julho-de-2027-detalhe.jpg',
        alt: 'Detalhe da ilustração: extrato da conta-salário com o início do Pix Automático em 1º/7/2027.',
        caption:
          'A recorrência autorizada passa a valer na conta-salário em 1º de julho de 2027.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Imagine um trabalhador com salário líquido de R$ 2.800, depositado na conta-salário. Ele paga R$ 110 de internet, R$ 130 de academia e R$ 450 de curso dos filhos, todo mês. São R$ 690 em contas fixas.',
        'Com o Pix Automático liberado, essas três cobranças poderão ser autorizadas direto na conta onde o salário cai, sem depender de outra conta. As contas fixas somam R$ 690, ou cerca de 24,6% de R$ 2.800, e o restante do salário, R$ 2.110, fica livre para o mês.',
        'O exemplo é ilustrativo e usa valores inventados para mostrar a conta. O efeito real depende de cada empresa que cobra se adaptar ao Pix Automático e do banco da sua conta-salário oferecer a função, o que só vale a partir da data da regra.',
        'Para saber quanto sobra do seu salário depois dos descontos, use a calculadora de salário líquido do portal e compare com as contas fixas que você paga todo mês.',
      ],
      table: {
        caption: 'Pix Automático na conta-salário: o que a regra define',
        columns: ['Ponto', 'Regra'],
        rows: [
          ['Início', '1º de julho de 2027'],
          ['Quem autoriza', 'O titular da conta'],
          ['Tipo de pagamento', 'Recorrente, como mensalidades e contas'],
          ['Outras restrições da conta-salário', 'Continuam valendo'],
        ],
      },
    },
    {
      heading: 'Cobrança híbrida: boleto e Pix no mesmo documento',
      paragraphs: [
        'A resolução também trata da cobrança híbrida, um documento que traz ao mesmo tempo o código de barras do boleto e o QR Code do Pix Cobrança. Quem paga por um dos dois cancela o outro automaticamente, para evitar pagamento em duplicidade.',
        'Se você paga um boleto híbrido de R$ 300 pelo Pix, o boleto deixa de poder ser pago. O mesmo vale ao contrário. A norma também define a responsabilidade das instituições participantes por falhas operacionais nesse processo. A divulgação oficial não informou uma data de início para esse ponto.',
        'Para o cliente, a vantagem é pagar do jeito que preferir sem risco de pagar duas vezes. Mesmo assim, vale conferir o valor, o beneficiário e o vencimento antes de confirmar, como em qualquer pagamento. O guia sobre como identificar boleto falso ajuda nessa checagem.',
      ],
    },
    {
      heading: 'Suspeita de fraude: aviso ao usuário e revisão',
      paragraphs: [
        'Outro bloco da resolução mexe nas marcações de suspeita de fraude no DICT, o diretório de chaves do Pix. O usuário deverá ser avisado da marcação, com a data de registro e a informação de que é possível pedir revisão.',
        'Se a análise não encontrar motivo para a suspeita, a marcação deve ser cancelada. A instituição que aceitar uma notificação de infração ou registrar a marcação passa a ser responsável por ela, inclusive pelo cancelamento.',
        'Há ainda ajustes nas regras de participação: o Banco Central pode dispensar a adesão obrigatória ao Pix de instituições com mais de 500 mil contas transacionais ativas, quando o perfil dos clientes ou o modelo de negócio não justificar o acesso. Participantes punidos com exclusão são desligados de imediato, e aprovações obtidas com informação falsa podem ser anuladas.',
        'Para proteger a sua conta desde já, o guia sobre como usar o Pix com segurança reúne cuidados simples, como conferir o nome do destinatário e manter os limites compatíveis com o seu uso.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando o Pix Automático começa na conta-salário?',
      answer:
        'A partir de 1º de julho de 2027, conforme a Resolução BCB nº 587, de 18 de setembro de 2026. Até lá, as regras atuais da conta-salário continuam valendo.',
    },
    {
      question: 'A conta-salário passa a aceitar qualquer Pix?',
      answer:
        'Não. A mudança vale para pagamentos recorrentes autorizados pelo titular. As demais restrições da conta-salário, sobre receber valores, transferências e outros tipos de Pix, seguem como estão.',
    },
    {
      question: 'Preciso fazer algo agora?',
      answer:
        'Não. A regra só vale em julho de 2027 e depende de o banco e de a empresa que cobra oferecerem o Pix Automático. Quando a data chegar, a autorização será dada por você, no aplicativo do banco.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Pix amplia funcionalidades e reforça segurança com nova rodada de aperfeiçoamentos regulatórios, 5/10/2026',
      url: 'https://agenciagov.ebc.com.br/noticias/202610/pix-amplia-funcionalidades-e-reforca-seguranca-com-nova-rodada-de-aperfeicoamentos-regulatorios',
    },
    {
      label: 'Banco Central do Brasil: Resolução BCB nº 587, de 18/9/2026',
      url: 'https://normativos.bcb.gov.br/',
    },
    {
      label: 'Banco Central do Brasil: regulamento do Pix',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix',
    },
  ],
} as const satisfies NewsDocument;
