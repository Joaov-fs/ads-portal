import type { NewsDocument } from '../../types';

export const newsGarantiaSafraBahia2026 = {
  kind: 'news',
  slug: 'garantia-safra-bahia-inscricao-21-outubro-2026',
  title:
    'Garantia-Safra na Bahia: inscrição para a safra de verão termina nesta quarta, 21/10',
  description:
    'Prazo do Garantia-Safra Verão 2026/2027 termina hoje na Bahia. Veja onde se inscrever, os documentos e por que o boleto tem outra data.',
  category: 'beneficios',
  authorId: 'sara-souza',
  publishedAt: '2026-10-21',
  updatedAt: '2026-10-21',
  tags: ['garantia-safra', 'agricultura-familiar', 'bahia', 'beneficios'],
  featuredCalculators: ['porcentagem'],
  coverImage: {
    src: '/images/news/garantia-safra-bahia-inscricao-21-outubro-2026.jpg',
    alt: 'Formulário do Garantia-Safra Verão, calendário de outubro com o dia 21 marcado e documento com prazo do boleto em 30 de novembro.',
    credit: 'Ilustração: PortalFina',
  },
  highlights: [
    {
      value: '21/10',
      label: 'Prazo de inscrição na Bahia',
      note: 'Aviso referente à Safra Verão 2026/2027.',
    },
    {
      value: '30/11',
      label: 'Prazo do boleto de adesão',
      note: 'Conforme comunicado estadual.',
    },
    {
      value: 'R$ 1.200',
      label: 'Benefício previsto',
      note: 'Parcela única para quem cumprir os requisitos.',
    },
  ],
  sections: [
    {
      heading: 'Inscrição e boleto têm prazos diferentes',
      paragraphs: [
        'O aviso da Secretaria de Desenvolvimento Rural da Bahia se refere ao Garantia-Safra Verão 2026/2027. O encerramento da inscrição ocorre nesta quarta-feira. Confirme com o atendimento local se o calendário abrange seu município e sua safra.',
        'O pagamento do boleto de adesão pode ser feito até 30 de novembro de 2026, segundo a secretaria. Essa data posterior não prorroga a inscrição.',
      ],
      table: {
        caption:
          'Datas divulgadas pela SDR da Bahia para a Safra Verão 2026/2027',
        columns: ['Etapa', 'Prazo'],
        rows: [
          ['Inscrição', '21 de outubro de 2026'],
          ['Pagamento do boleto de adesão', '30 de novembro de 2026'],
        ],
      },
    },
    {
      heading: 'Onde procurar atendimento e o que separar',
      image: {
        src: '/images/news/garantia-safra-bahia-inscricao-21-outubro-2026-detalhe.jpg',
        alt: 'Detalhe do calendário de outubro de 2026 com o dia 21 destacado.',
        caption:
          'Confira o horário do atendimento habilitado no seu município.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O comunicado estadual orienta procurar prefeituras, sindicatos de trabalhadores rurais ou os Serviços Territoriais de Apoio à Agricultura Familiar, os SETAFs. Não foi divulgado um horário único de encerramento para todos os postos.',
        'No serviço federal, a documentação indicada inclui documento com foto, CPF e número do Cadastro Nacional da Agricultura Familiar ativo. Confira a situação do cadastro antes de solicitar a inscrição.',
        'O portal gov.br também prevê inscrição pela entidade que cadastrou o CAF ou diretamente pelo responsável familiar, com login gov.br no sistema do programa. Confirme o enquadramento e o calendário aplicável com a gestão local.',
      ],
    },
    {
      heading: 'O benefício depende da comprovação das perdas',
      paragraphs: [
        'O Garantia-Safra protege agricultores familiares em situações de estiagem ou excesso de chuvas. A Caixa atua como agente pagador, sob gestão do Ministério do Desenvolvimento Agrário e Agricultura Familiar.',
        'O valor previsto é de R$ 1.200 em parcela única. A inscrição, sozinha, não autoriza o depósito: o processo envolve seleção, homologação, adesão e avaliação técnica das perdas, além das demais exigências.',
        'A Caixa orienta verificar a participação do município e requerer a adesão antes do plantio. O cumprimento das etapas locais também importa para a liberação do benefício.',
      ],
    },
    {
      heading: 'Como acompanhar a adesão',
      paragraphs: [
        'Depois de se inscrever, acompanhe a seleção divulgada pela prefeitura. Confirme com a Secretaria de Agricultura a emissão do boleto e guarde os comprovantes das etapas cumpridas.',
        'A calculadora de porcentagem do PortalFina pode ajudar a comparar quantidades produzidas. Essa conta particular não substitui a vistoria nem os indicadores oficiais utilizados pelo programa.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso deixar a inscrição para novembro?',
      answer:
        'Não com base no aviso da Safra Verão divulgado pela Bahia. O prazo de novembro é para o boleto, e não para fazer a inscrição.',
    },
    {
      question: 'Quem se inscreve recebe automaticamente?',
      answer:
        'Não. É preciso cumprir os requisitos do programa e passar pelas etapas de avaliação e autorização do pagamento.',
    },
    {
      question: 'O prazo vale para todo o Brasil?',
      answer:
        'Não. Esta notícia trata do calendário anunciado pela Bahia para a Safra Verão 2026/2027. Consulte a gestão local sobre outras regiões e safras.',
    },
  ],
  sources: [
    {
      label:
        'SDR da Bahia: prazo da Safra Verão e pagamento dos boletos, atualizado em 20/10/2026',
      url: 'https://www.ba.gov.br/sdr/noticias/2026-10/11688/inscricoes-no-garantia-safra-20262027-terminam-nesta-quarta-feira-21-na',
    },
    {
      label: 'Gov.br: acessar o benefício Garantia-Safra',
      url: 'https://www.gov.br/pt-br/servicos/acessar-o-beneficio-garantia-safra',
    },
    {
      label: 'Caixa: Garantia-Safra, participação e etapas para receber',
      url: 'https://www.caixa.gov.br/poder-publico/infraestrutura-saneamento-mobilidade/area-rural/garantia-safra/Paginas/default.aspx',
    },
  ],
} as const satisfies NewsDocument;
