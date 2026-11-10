import type { NewsDocument } from '../../types';

export const newsFgtsExtratoBancos2026 = {
  kind: 'news',
  slug: 'caixa-libera-extrato-do-fgts-para-bancos-autorizacao-vale-90-dias-e-mostra-12-meses',
  title:
    'Caixa libera extrato do FGTS para bancos: autorização vale 90 dias e mostra 12 meses de depósitos',
  description:
    'Desde 10/11, o trabalhador pode autorizar bancos a consultar o extrato do FGTS para comprovar renda. A autorização vale 90 dias, é gratuita e pode ser cancelada.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/caixa-libera-extrato-do-fgts-para-bancos-autorizacao-vale-90-dias-e-mostra-12-meses.jpg',
    alt: 'Documento do extrato do FGTS com validade de 90 dias e depósitos de 12 meses, ao lado de um celular com o botão de autorizar.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-10',
  updatedAt: '2026-11-10',
  tags: ['fgts', 'caixa', 'comprovacao-de-renda', 'credito', 'trabalho'],
  featuredCalculators: ['fgts-multa', 'salario-liquido'],
  highlights: [
    {
      value: '90 dias',
      label: 'Validade da autorização',
      note: 'Passado o prazo, o banco perde o acesso ao extrato.',
    },
    {
      value: '12 meses',
      label: 'Depósitos visíveis',
      note: 'O banco autorizado vê os depósitos do último ano.',
    },
    {
      value: 'Grátis',
      label: 'Custo para o trabalhador',
      note: 'A autorização é feita no app FGTS ou em agência da Caixa.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou no extrato do FGTS a partir de 10 de novembro',
      paragraphs: [
        'A Caixa Econômica Federal passou a permitir, em 10 de novembro de 2026, que o trabalhador autorize instituições financeiras a consultar informações do extrato do FGTS. O objetivo é comprovar renda ou vínculo empregatício em operações como pedidos de crédito, sem que a pessoa precise baixar, imprimir e entregar o documento.',
        'Segundo a Caixa, a medida torna a comprovação mais prática e segura e reduz o risco de documentos adulterados ou com informações inconsistentes. A matéria da Agência Brasil não cita lei, decreto ou portaria sobre o serviço.',
      ],
    },
    {
      heading: 'Como funciona a autorização e o que o banco enxerga',
      image: {
        src: '/images/news/caixa-libera-extrato-do-fgts-para-bancos-autorizacao-vale-90-dias-e-mostra-12-meses-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento do extrato do FGTS com consulta autorizada, validade de 90 dias, depósitos de 12 meses e custo grátis.',
        caption:
          'Os prazos do serviço, como informados pela Caixa à Agência Brasil.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A autorização é feita pelo próprio titular, no aplicativo FGTS ou presencialmente em uma agência da Caixa. É ele quem escolhe quais instituições podem consultar os dados, e pode cancelar a permissão a qualquer momento. O serviço é gratuito.',
        'Cada autorização vale 90 dias. Uma permissão dada em 10/11/2026 vai até 8/2/2027. Nesse período, o banco autorizado vê os depósitos feitos na conta do FGTS nos últimos 12 meses. O serviço não libera o saldo total da conta, que continua visível só para o titular, no aplicativo FGTS.',
        'Do lado das instituições, só podem consultar os bancos habilitados pela Caixa, que seguem o Manual Operacional divulgado no site do banco público e no portal do FGTS.',
      ],
      table: {
        caption: 'Resumo do serviço de consulta do extrato do FGTS',
        columns: ['Ponto', 'Como é'],
        rows: [
          ['Quem autoriza', 'O trabalhador titular da conta'],
          ['Onde autorizar', 'Aplicativo FGTS ou agência da Caixa'],
          ['Validade', '90 dias, com cancelamento a qualquer momento'],
          ['O que o banco vê', 'Depósitos dos últimos 12 meses'],
          ['Saldo total', 'Não é aberto ao banco'],
          ['Custo', 'Gratuito'],
        ],
      },
    },
    {
      heading: 'Exemplo: o que os 12 meses de depósitos mostram',
      paragraphs: [
        'O empregador deposita todo mês 8% do salário na conta do FGTS do empregado, regra da Lei 8.036/1990. Para um salário de R$ 3.000, o depósito mensal é de R$ 240,00. Em 12 meses sem interrupção, o extrato mostra 12 depósitos que somam R$ 2.880,00, sem contar depósitos sobre 13º salário e férias.',
        'Esse histórico ajuda o banco a ver se há depósitos regulares, sinal de vínculo formal, e a estimar a renda. A decisão de conceder ou não o crédito continua sendo da instituição: a autorização não garante aprovação. Para estimar quanto sobra do salário depois dos descontos, use a calculadora de salário líquido do PortalFina.',
        'Antes de autorizar, confira o nome da instituição e o prazo. A autorização só deve ser feita no aplicativo FGTS ou em agência da Caixa: desconfie de pedidos por link, mensagem ou ligação.',
      ],
    },
  ],
  faq: [
    {
      question: 'O banco vê o saldo total do meu FGTS?',
      answer:
        'Não. Segundo a Caixa, o serviço mostra os depósitos dos últimos 12 meses. O saldo total continua visível só para o titular, no aplicativo FGTS.',
    },
    {
      question: 'Quanto tempo vale a autorização e posso cancelar?',
      answer:
        'A autorização vale 90 dias e pode ser cancelada a qualquer momento pelo titular. O serviço é gratuito.',
    },
    {
      question: 'Autorizar o banco garante o crédito?',
      answer:
        'Não. O extrato serve para comprovar renda ou vínculo, mas a aprovação segue as regras de cada instituição.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Trabalhador poderá autorizar bancos a consultar extrato do FGTS, 10/11/2026',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/trabalhador-podera-autorizar-bancos-consultar-extrato-do-fgts',
    },
    {
      label: 'Caixa: FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/Paginas/default.aspx',
    },
    {
      label: 'Lei 8.036/1990: depósito de 8% do salário no FGTS',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm',
    },
  ],
} as const satisfies NewsDocument;
