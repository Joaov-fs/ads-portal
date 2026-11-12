import type { NewsDocument } from '../../types';

export const newsCbsTransicaoOpcional2027 = {
  kind: 'news',
  slug: 'cbs-regra-de-transicao-opcional-primeira-apuracao-em-fevereiro-de-2027',
  title:
    'CBS: governo vai propor regra de transição opcional para a primeira apuração, em fevereiro de 2027',
  description:
    'O governo anunciou em 11/11 uma regra de transição opcional para a CBS: na primeira apuração, em fevereiro, o crédito pode ser estimado e ajustado depois.',
  category: 'economia',
  coverImage: {
    src: '/images/news/cbs-regra-de-transicao-opcional-primeira-apuracao-em-fevereiro-de-2027.jpg',
    alt: 'Documento com as datas da CBS (notas no novo padrão em jan/2027, primeira apuração em fev/2027), envelope, etiqueta fev/2027 e carimbo OPCIONAL.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-11',
  updatedAt: '2026-11-11',
  tags: ['reforma-tributaria', 'cbs', 'ibs', 'fazenda', 'impostos', 'empresas'],
  featuredCalculators: ['simples-nacional', 'porcentagem'],
  highlights: [
    {
      value: 'fev/2027',
      label: 'Primeira apuração da CBS',
      note: 'Crédito poderá ser estimado e ajustado no mês seguinte.',
    },
    {
      value: 'jan/2027',
      label: 'Notas no novo padrão',
      note: 'Empresas passam a emitir documentos fiscais pelas novas regras.',
    },
    {
      value: '30, 60 ou 90',
      label: 'Dias para ressarcir créditos',
      note: 'Antes, o ressarcimento podia levar até um ano.',
    },
  ],
  sections: [
    {
      heading: 'O que o governo anunciou sobre a CBS em 11/11',
      paragraphs: [
        'O governo federal vai enviar ao Congresso Nacional uma proposta de regra de transição para a cobrança da CBS (Contribuição sobre Bens e Serviços), o tributo federal criado pela reforma tributária do consumo para substituir o PIS/Pasep e a Cofins. O anúncio foi feito em 11 de novembro de 2026, em entrevista coletiva no Ministério da Fazenda sobre o Programa de Conformidade da Reforma Tributária.',
        'Segundo o secretário Robinson Barreirinhas, a regra será opcional. A ideia é dar um período de adaptação às empresas na migração para o crédito vinculado ao pagamento e para o split payment, o mecanismo em que o imposto é separado já no momento do pagamento da compra.',
        'O texto ainda não é lei. É uma proposta que precisa tramitar no Congresso, e a matéria que deu a notícia não informa o número do projeto nem o calendário de votação.',
      ],
    },
    {
      heading: 'Como fica a primeira apuração, em fevereiro de 2027',
      image: {
        src: '/images/news/cbs-regra-de-transicao-opcional-primeira-apuracao-em-fevereiro-de-2027-detalhe.jpg',
        alt: 'Detalhe da ilustração: notas no novo padrão em jan/2027, primeira apuração da CBS em fev/2027, cerca de 5 mil sugestões e ressarcimento em 30, 60 ou 90 dias.',
        caption: 'As datas e os números da regra de transição da CBS.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A partir de janeiro de 2027, as empresas passam a emitir documentos fiscais dentro das novas regras. A primeira apuração da CBS está prevista para fevereiro. Pela proposta, quem optar pela regra de transição poderá calcular o tributo com base em uma estimativa dos créditos a que tem direito, e as diferenças serão ajustadas na apuração do mês seguinte.',
        'Um exemplo ilustrativo ajuda a enxergar o mecanismo. Imagine uma empresa com R$ 50.000,00 de CBS devida sobre as vendas do mês e R$ 30.000,00 de créditos estimados sobre as compras. Ela recolheria R$ 20.000,00. Se, depois, os créditos efetivamente comprovados forem de R$ 28.000,00, a diferença de R$ 2.000,00 entra no ajuste da apuração seguinte. Os números são hipotéticos e servem só para mostrar a lógica: o cálculo real depende do enquadramento de cada empresa.',
        'Para o consumidor, o efeito é indireto. A mudança trata de como a empresa apura e paga o tributo, e a matéria não aponta efeito direto no preço final.',
      ],
      table: {
        caption: 'Datas e números do anúncio do governo',
        columns: ['Item', 'O que foi informado'],
        rows: [
          ['Anúncio', '11/11/2026, no Ministério da Fazenda'],
          ['Notas fiscais nas novas regras', 'A partir de janeiro de 2027'],
          ['Primeira apuração da CBS', 'Fevereiro de 2027'],
          ['Regra de transição', 'Opcional, depende de aprovação no Congresso'],
          ['Sugestões à primeira versão do regulamento', 'Quase 5 mil'],
        ],
      },
    },
    {
      heading:
        'Outras mudanças no regulamento: crédito imediato e ressarcimento mais rápido',
      paragraphs: [
        'O governo também sinalizou ajustes que já vinham sendo discutidos. Bens de capital, como máquinas, equipamentos e imóveis, passam a gerar crédito imediato, em vez de recuperação ao longo de vários anos. Para uma empresa que compra um equipamento, isso antecipa o abatimento do tributo.',
        'O ressarcimento de créditos acumulados deve ocorrer em 30, 60 ou 90 dias, conforme o nível de conformidade do contribuinte. Atualmente esse retorno pode levar até um ano. Quanto mais regular a empresa estiver, mais rápido tende a ser o prazo.',
        'O IPI terá alíquota zero para a maior parte dos produtos, sendo mantido apenas em casos ligados à Zona Franca de Manaus. A primeira versão do regulamento recebeu quase 5 mil sugestões, e uma nova versão deve ser publicada nos próximos dias, segundo a Agência Brasil.',
      ],
    },
    {
      heading: 'O que muda para quem é empresa, MEI ou contador',
      paragraphs: [
        'Quem emite nota fiscal precisa se preparar para o novo padrão já em janeiro de 2027. Vale conferir com o contador se o sistema de emissão está atualizado e como a empresa se enquadra, inclusive no Simples Nacional, que tem regras próprias.',
        'Em 28/10, o TCU aprovou o cálculo de 11,3% para a alíquota de referência da CBS, que ainda segue para o Senado. O que mudou desde então é a frente operacional: em vez da alíquota, o anúncio de 11/11 trata de como o tributo será apurado e pago nos primeiros meses.',
        'Como a regra de transição ainda depende do Congresso, o caminho prudente é acompanhar o texto final e não assumir que o prazo extra já vale.',
      ],
    },
  ],
  faq: [
    {
      question: 'A regra de transição da CBS já está valendo?',
      answer:
        'Não. O governo anunciou em 11/11/2026 que vai enviar a proposta ao Congresso. Ela é opcional e ainda precisa ser aprovada.',
    },
    {
      question: 'Quando será a primeira apuração da CBS?',
      answer:
        'Está prevista para fevereiro de 2027. Pela proposta, o crédito poderá ser estimado nessa primeira apuração e ajustado no mês seguinte.',
    },
    {
      question: 'Isso muda o preço dos produtos para o consumidor?',
      answer:
        'A mudança trata de como a empresa apura e paga o tributo. A reportagem que noticiou o anúncio não aponta efeito direto no preço final.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Reforma tributária, governo apresentará texto para facilitar adaptação',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/reforma-tributaria-governo-apresentara-texto-para-facilitar-adaptacao',
    },
    {
      label: 'Ministério da Fazenda: reforma tributária',
      url: 'https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria',
    },
    {
      label: 'Receita Federal: reforma tributária do consumo',
      url: 'https://www.gov.br/receitafederal/pt-br',
    },
  ],
} as const satisfies NewsDocument;
