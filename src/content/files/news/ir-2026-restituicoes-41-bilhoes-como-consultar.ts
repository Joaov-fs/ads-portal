import type { NewsDocument } from '../../types';

export const newsIr2026Restituicoes = {
  kind: 'news',
  slug: 'ir-2026-restituicoes-41-bilhoes-como-consultar',
  title:
    'IR 2026: Receita já devolveu mais de R$ 41 bilhões; veja como consultar sua restituição',
  description:
    'Balanço da Fazenda aponta 25,9 milhões de contribuintes restituídos. Quem ainda aguarda pode consultar a situação e verificar pendências na declaração.',
  category: 'financas',
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-20',
  updatedAt: '2026-10-20',
  tags: ['imposto-de-renda', 'restituicao', 'receita-federal', 'malha-fina'],
  featuredCalculators: ['irrf'],
  coverImage: {
    src: '/images/news/ir-2026-restituicoes-41-bilhoes-como-consultar.jpg',
    alt: 'Documento com o balanço de restituições do IR 2026, celular para consultar a situação e moedas sobre fundo azul.',
    credit: 'Ilustração: PortalFina',
  },
  highlights: [
    {
      value: 'R$ 41 bi+',
      label: 'Restituições pagas em 2026',
      note: 'Balanço divulgado pela Fazenda em 20/10.',
    },
    {
      value: '25,9 milhões',
      label: 'Contribuintes restituídos',
      note: 'Total informado no balanço oficial.',
    },
    {
      value: '80%',
      label: 'Restituídos até um mês após o prazo',
      note: 'Dado agregado, sem garantia de prazo individual.',
    },
  ],
  sections: [
    {
      heading: 'O que mostra o balanço divulgado nesta terça-feira',
      paragraphs: [
        'A Receita Federal informou que as restituições do Imposto de Renda em 2026 ultrapassaram R$ 41 bilhões. O total chegou a 25,9 milhões de contribuintes. Os dados foram publicados pelo Ministério da Fazenda nesta terça-feira, 20 de outubro.',
        'Segundo o balanço, 80% dos contribuintes restituídos receberam em até um mês após o encerramento do prazo de entrega. Esse indicador descreve pagamentos já realizados: não representa uma promessa de depósito em um mês para quem ainda está aguardando.',
      ],
    },
    {
      heading: 'Ainda não recebeu? Consulte a situação individual',
      image: {
        src: '/images/news/ir-2026-restituicoes-41-bilhoes-como-consultar-detalhe.jpg',
        alt: 'Detalhe do celular com o título Restituição IR na tela.',
        caption:
          'A consulta oficial informa a situação de cada contribuinte; o balanço nacional não confirma um depósito individual.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Acesse o serviço Consultar restituição de imposto de renda pelo portal gov.br. Ele permite verificar a restituição apurada na declaração. A página oficial também direciona para o Meu Imposto de Renda, onde há informações mais detalhadas sobre o processamento.',
        'Comece pela consulta antes de concluir que existe um erro. A ausência de depósito, isoladamente, não identifica qual etapa precisa de atenção. Verifique o resultado e siga as orientações exibidas no seu caso.',
        'O mesmo serviço reúne um caminho específico para a Restituição Automática, conhecida como cashback. Esse lote possui cronograma próprio e deve ser consultado na opção correspondente.',
      ],
    },
    {
      heading: 'Pendência na declaração exige conferência dos dados',
      paragraphs: [
        'A Receita cruza as informações declaradas com dados de outras fontes. Quando encontra diferenças, a declaração pode ficar retida para análise na malha fiscal. Estar nessa situação não significa, por si só, que o contribuinte cometeu uma infração.',
        'O manual oficial orienta consultar as pendências e comparar os dados com os comprovantes. Se houver erro ou omissão, verifique a possibilidade de retificar a declaração. Se as informações estiverem corretas, consulte o procedimento de apresentação dos documentos que as comprovam.',
        'A Fazenda também informou que o Projeto Cartas está orientando cerca de 500 mil contribuintes sobre pendências simples. A comunicação busca facilitar a regularização de inconsistências que podem impedir a restituição.',
      ],
    },
    {
      heading: 'Desconto no salário e restituição são etapas diferentes',
      paragraphs: [
        'A calculadora de IRRF do PortalFina ajuda a estimar a retenção mensal sobre o salário conforme os dados informados. Ela não consulta a Receita nem confirma quando uma restituição será liberada.',
        'Para acompanhar o valor e a situação da restituição, utilize o serviço oficial. Para entender o desconto mensal no contracheque, consulte a ferramenta de IRRF. Assim, cada consulta responde à dúvida correspondente.',
      ],
    },
  ],
  faq: [
    {
      question: 'O balanço anuncia um novo lote de pagamento?',
      answer:
        'Não. O comunicado apresenta o total já restituído em 2026. A situação de cada contribuinte deve ser verificada na consulta oficial.',
    },
    {
      question: 'Receber em até um mês é uma garantia?',
      answer:
        'Não. O percentual divulgado descreve pagamentos já feitos após o prazo de entrega e não fixa um prazo individual para quem ainda aguarda.',
    },
    {
      question: 'Como saber se minha declaração ficou na malha?',
      answer:
        'Consulte os detalhes do processamento no Meu Imposto de Renda e confira eventuais pendências com seus comprovantes.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Fazenda: balanço das restituições do IRPF 2026, publicado em 20/10/2026',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/receita-federal-restituiu-80-dos-contribuintes-em-ate-um-mes-ate-o-fim-do-prazo-da-declaracao-do-irpf-2026',
    },
    {
      label: 'Gov.br: consultar restituição de imposto de renda',
      url: 'https://www.gov.br/pt-br/servicos/consultar-restituicao-de-imposto-de-renda',
    },
    {
      label: 'Receita Federal: Manual da Malha Fina',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/malha-fiscal',
    },
  ],
} as const satisfies NewsDocument;
