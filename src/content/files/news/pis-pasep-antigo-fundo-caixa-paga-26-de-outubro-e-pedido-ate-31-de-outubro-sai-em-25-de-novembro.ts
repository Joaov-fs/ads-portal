import type { NewsDocument } from '../../types';

export const newsPisPasepAntigoFundoLote26Outubro = {
  kind: 'news',
  slug: 'pis-pasep-antigo-fundo-caixa-paga-26-de-outubro-e-pedido-ate-31-de-outubro-sai-em-25-de-novembro',
  title:
    'Antigo PIS/Pasep: Caixa paga hoje quem pediu até 30/09; quem pedir até 31/10 recebe em 25/11',
  description:
    'A Caixa credita em 26 de outubro as cotas do antigo fundo PIS/Pasep pedidas até 30/09. Veja quem tem direito, a média de R$ 2,8 mil a R$ 2,9 mil e como pedir.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/pis-pasep-antigo-fundo-caixa-paga-26-de-outubro-e-pedido-ate-31-de-outubro-sai-em-25-de-novembro.jpg',
    alt: 'Documento com o calendário de pagamento das cotas do PIS/Pasep, calendário de outubro de 2026 com o dia 26 marcado e celular com a mensagem de crédito na Caixa.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-26',
  updatedAt: '2026-10-26',
  tags: ['pis', 'pasep', 'abono', 'beneficios', 'trabalho', 'fgts'],
  featuredCalculators: ['pis'],
  highlights: [
    {
      value: '26/10',
      label: 'Crédito de quem pediu até 30/09',
      note: 'Hoje, segunda-feira, na conta da Caixa.',
    },
    {
      value: 'R$ 2,8 mil',
      label: 'Valor médio, de R$ 2,8 a 2,9 mil',
      note: 'Depende do tempo de trabalho e do salário da época.',
    },
    {
      value: '31/10',
      label: 'Pedido para o lote de novembro',
      note: 'Quem pedir até essa data é pago em 25/11.',
    },
    {
      value: '1971 a 1988',
      label: 'Período de trabalho com direito',
      note: 'Também vale para herdeiros do titular.',
    },
  ],
  sections: [
    {
      heading: 'Quem pediu até 30 de setembro recebe hoje, 26 de outubro',
      image: {
        src: '/images/news/pis-pasep-antigo-fundo-caixa-paga-26-de-outubro-e-pedido-ate-31-de-outubro-sai-em-25-de-novembro-detalhe.jpg',
        alt: 'Close do documento com o calendário de pagamento: 26/10, 25/11 e 28/12, e a média de R$ 2,8 a 2,9 mil.',
        caption:
          'Cada lote é pago em uma data fixa, conforme o dia em que o pedido foi feito.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Caixa credita nesta segunda-feira, 26 de outubro de 2026, o dinheiro do antigo fundo PIS/Pasep para quem fez o pedido de ressarcimento até 30 de setembro. É mais um lote do calendário mensal que o banco segue desde janeiro: o pedido feito até o último dia de um mês é pago no fim do mês seguinte.',
        'Segundo a Agência Brasil, o valor médio dos pagamentos fica entre R$ 2,8 mil e R$ 2,9 mil, mas varia conforme o tempo de trabalho e o salário que o trabalhador tinha na época. Para ter uma ideia, com o salário mínimo atual de R$ 1.621, isso equivale a cerca de 1,7 a 1,8 salário mínimo. Trata-se de uma média: há quem receba menos e quem receba mais.',
        'Esse dinheiro não é o abono salarial que o trabalhador saca todo ano. São cotas de um fundo que existiu até 1988 e que foi extinto em 2020. Os valores que ninguém retirou foram transferidos ao FGTS e depois ao Tesouro Nacional, e hoje o governo permite que o dono, ou os herdeiros, peçam a devolução.',
      ],
      table: {
        caption: 'Calendário de pagamento do ressarcimento até o fim de 2026',
        columns: ['Pedido feito até', 'Crédito na conta da Caixa'],
        rows: [
          ['30/09/2026', '26/10/2026 (hoje)'],
          ['31/10/2026', '25/11/2026'],
          ['30/11/2026', '28/12/2026'],
          ['31/12/2026', 'Janeiro de 2027'],
        ],
      },
    },
    {
      heading: 'Quem tem direito às cotas do antigo PIS/Pasep',
      paragraphs: [
        'Tem direito quem trabalhou com carteira assinada, ou como servidor público, entre 1971 e 1988 e tinha saldo no fundo que não foi sacado. Se o titular morreu, os herdeiros ou dependentes legais podem pedir, desde que comprovem o vínculo.',
        'A regra vale para quem cumpre os requisitos. Ter trabalhado no período não garante saldo: só quem tem cotas disponíveis no sistema recebe, e é a consulta que mostra isso. O pagamento também depende de disponibilidade orçamentária da União. A página do FGTS informa que, se o dinheiro do ano acabar, o valor é pago no ano seguinte, com correção.',
        'Quem já recebeu o abono salarial deste ano não perde nada por causa disso. São dinheiros diferentes, com regras e calendários separados.',
      ],
    },
    {
      heading: 'Como consultar o saldo e pedir o dinheiro',
      paragraphs: [
        'O primeiro passo é consultar. O serviço do governo federal para ver o saldo de cotas pede uma conta gov.br de nível prata ou ouro. Ao entrar, o saldo do próprio titular aparece automaticamente. Para consultar o de uma pessoa que morreu, o herdeiro digita o número do PIS/Pasep dela e faz a busca com a própria senha.',
        'Havendo saldo, o pedido é feito só em dois lugares: no aplicativo FGTS, na opção de ressarcimento do PIS/Pasep, ou em qualquer agência da Caixa, com documento oficial com foto. O serviço é gratuito, e quem cobra para fazer o pedido está fora do processo oficial.',
        'O dinheiro entra em conta da Caixa. Quem não tem conta no banco recebe uma poupança social digital, aberta sem custo e movimentada pelo aplicativo Caixa Tem. Herdeiros precisam levar, além do documento de identidade, um comprovante de que são os beneficiários: certidão de dependentes da Previdência, declaração do órgão pagador, autorização judicial ou declaração de herdeiros em cartório, conforme o caso.',
      ],
    },
    {
      heading: 'O que muda para quem ainda não pediu',
      paragraphs: [
        'Quem perdeu o corte de 30 de setembro não perdeu o direito: apenas entra no lote seguinte. Pedir até sábado, 31 de outubro, leva o crédito para 25 de novembro, uma quarta-feira. Pedir até 30 de novembro joga o pagamento para 28 de dezembro, e pedidos de dezembro saem em janeiro de 2027.',
        'Na prática, cada mês de atraso no pedido é um mês de atraso no dinheiro. Como o pedido pelo aplicativo é feito no celular, vale consultar o saldo ainda nesta semana e, se houver valor, pedir antes do fim do mês.',
        'Segundo a Agência Brasil, o pedido pode ser feito até setembro de 2028, quando o dinheiro não reclamado passa a pertencer de vez ao Tesouro. A página do FGTS fala em prazo de até 5 anos, sem citar a data final. Por isso, confirme o prazo do seu caso no aplicativo ou na agência, sem deixar para a última hora.',
      ],
    },
  ],
  faq: [
    {
      question: 'Esse dinheiro é o mesmo que o abono salarial do PIS/Pasep?',
      answer:
        'Não. O abono salarial é um benefício anual para quem trabalhou com carteira assinada no ano-base. O ressarcimento devolve cotas de um fundo antigo, de 1971 a 1988, e tem calendário próprio.',
    },
    {
      question: 'Como saber se tenho dinheiro a receber?',
      answer:
        'Consulte o saldo de cotas no serviço do governo federal, com conta gov.br prata ou ouro, ou pelo aplicativo FGTS. A consulta é gratuita e mostra se há valor disponível.',
    },
    {
      question: 'Preciso pagar alguém para fazer o pedido?',
      answer:
        'Não. O pedido é gratuito, feito pelo aplicativo FGTS ou em agência da Caixa. Desconfie de quem pedir pagamento, senha ou código para liberar o dinheiro.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Termina nesta quarta prazo para pedir dinheiro do fundo PIS/Pasep',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-09/termina-nesta-quarta-prazo-para-pedir-dinheiro-do-fundo-pispasep',
    },
    {
      label:
        'Agência Brasil: Caixa paga novo lote de valores esquecidos do antigo fundo PIS/Pasep',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/economia/audio/2026-09/caixa-paga-novo-lote-de-valores-esquecidos-do-antigo-fundo-pispasep',
    },
    {
      label: 'FGTS: Ressarcimento de cotas do PIS/Pasep',
      url: 'https://www.fgts.gov.br/Paginas/trabalhador/ressarcimento-pis-pasep.aspx',
    },
    {
      label: 'Governo Federal: Consultar saldo de cotas PIS/Pasep',
      url: 'https://www.gov.br/pt-br/servicos/consultar-saldo-de-cotas-pis-pasep',
    },
  ],
} as const satisfies NewsDocument;
