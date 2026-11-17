import type { NewsDocument } from '../../types';

export const newsAnvisaSuplementosSuspensos17Novembro = {
  kind: 'news',
  slug: 'anvisa-suspende-suplementos-norvy-nutrymed-morbach-e-manda-recolher-os-produtos',
  title:
    'Anvisa suspende suplementos da Norvy, Nutrymed e Morbach e manda recolher os produtos',
  description:
    'A Anvisa suspendeu a fabricação e a venda de suplementos de três empresas e mandou recolher os produtos. Veja o que fazer se você comprou algum.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/anvisa-suspende-suplementos-norvy-nutrymed-morbach-17-11.jpg',
    alt: 'Ilustração com dois frascos de suplemento, uma resolução da Anvisa, uma caixa e um carimbo de suspenso sobre fundo vinho.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-17',
  updatedAt: '2026-11-17',
  tags: ['anvisa', 'suplementos', 'recolhimento', 'saude', 'consumidor', 'melatonina'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '3',
      label: 'Empresas com produtos suspensos',
      note: 'Norvy Saúde, Nutrymed e Morbach.',
    },
    {
      value: 'RE 4.500',
      label: 'Resolução no Diário Oficial',
      note: 'Datada de 16/11 e publicada em 17/11 de 2026.',
    },
    {
      value: 'Recolhimento',
      label: 'Medida determinada',
      note: 'Fabricação e venda estão suspensas.',
    },
  ],
  sections: [
    {
      heading: 'O que a Anvisa determinou',
      image: {
        src: '/images/news/anvisa-suspende-suplementos-norvy-nutrymed-morbach-17-11-detalhe.jpg',
        alt: 'Detalhe da ilustração: resolução da Anvisa com três empresas, recolhimento, RE 4.500 e data de 16/11/2026.',
        caption: 'Resumo da decisão publicada no Diário Oficial da União.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A Agência Nacional de Vigilância Sanitária (Anvisa) publicou no Diário Oficial da União, em 17 de novembro de 2026, resoluções que suspendem a fabricação e a venda de suplementos alimentares de pelo menos três empresas. Uma delas é a Resolução RE nº 4.500, de 16 de novembro de 2026. As normas citam irregularidades na produção e determinam o recolhimento dos produtos.',
        'Na prática, os produtos não podem mais ser fabricados nem vendidos no país, e as empresas precisam retirá-los do mercado. Quem já comprou deve parar de usar até ter mais informações.',
      ],
    },
    {
      heading: 'Quais produtos e por que foram suspensos',
      paragraphs: [
        'A Norvy Saúde teve suspenso o Melatonina Spray-Norvy, suplemento líquido. Segundo a Anvisa, o ingrediente não foi avaliado quanto à segurança para uso sublingual, e a propaganda trazia alegações não aprovadas, como ação mais rápida na hora de dormir e sono mais rápido. A empresa informou que cumpre a determinação, encerrou a venda em canais próprios e em plataformas online e interrompeu a distribuição.',
        'A Nutrymed Indústria Farmacêutica e Alimentícia teve todos os suplementos suspensos. Uma inspeção sanitária em Goiás apontou armazenamento inadequado, prazo de validade expirado, ausência de controle de qualidade, área de armazenamento com sujidades, falhas estruturais, fluxo cruzado e água sem potabilidade adequada.',
        'A Morbach Nutri Complementos Alimentares teve dois produtos suspensos, o suplemento em cápsulas Nutri Bluwey e o Nutri AN-T. A documentação das notificações foi considerada insuficiente para comprovar composição, qualidade e segurança, e foram identificados ingredientes não autorizados para suplementos. Nutrymed e Morbach não tinham posicionamento publicado até a atualização da reportagem de referência.',
      ],
      table: {
        caption: 'Suplementos suspensos pela Anvisa',
        columns: ['Empresa', 'Produto', 'Motivo apontado'],
        rows: [
          [
            'Norvy Saúde',
            'Melatonina Spray-Norvy',
            'Segurança sublingual não avaliada e alegações não aprovadas',
          ],
          [
            'Nutrymed',
            'Todos os suplementos',
            'Falhas de armazenamento, validade expirada e falta de controle de qualidade',
          ],
          [
            'Morbach',
            'Nutri Bluwey e Nutri AN-T',
            'Documentação insuficiente e ingredientes não autorizados',
          ],
        ],
      },
    },
    {
      heading: 'O que fazer se você comprou',
      paragraphs: [
        'Confira a marca e o nome do produto na embalagem. Se for um dos citados, pare de usar e guarde a embalagem e a nota fiscal. Quem sentir algum mal-estar depois do uso deve procurar atendimento de saúde e informar o produto consumido.',
        'A Norvy Saúde orienta quem tem a melatonina spray a interromper o uso e oferece devolução integral do valor pago pelos canais de suporte da empresa. Nos demais casos, o consumidor pode pedir o reembolso à loja ou à fabricante e, se não for atendido, registrar reclamação no Procon ou na plataforma consumidor.gov.br.',
        'Como conta de exemplo, quem pagou R$ 89,90 por um frasco tem direito, em tese, à devolução dos mesmos R$ 89,90 no pedido de reembolso. Guardar a nota fiscal facilita a comprovação.',
      ],
    },
    {
      heading: 'Como evitar suplemento irregular',
      paragraphs: [
        'Antes de comprar, consulte se o produto e a empresa estão regularizados no site da Anvisa. Desconfie de promessas de efeito rápido, de cura ou de tratamento, que suplementos alimentares não podem fazer. Prefira vendedores identificados e guarde sempre a nota fiscal.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quais suplementos a Anvisa suspendeu em 17/11?',
      answer:
        'Melatonina Spray-Norvy, da Norvy Saúde; todos os suplementos da Nutrymed; e os produtos Nutri Bluwey e Nutri AN-T, da Morbach. A fabricação e a venda estão suspensas e o recolhimento foi determinado.',
    },
    {
      question: 'Já comprei um desses produtos. O que devo fazer?',
      answer:
        'Pare de usar, guarde a embalagem e a nota fiscal e peça o reembolso à loja ou à empresa. Se houver algum mal-estar, procure atendimento de saúde.',
    },
    {
      question: 'Onde posso reclamar se a empresa não devolver o dinheiro?',
      answer:
        'No Procon da sua cidade ou na plataforma consumidor.gov.br. Leve a nota fiscal e a foto da embalagem.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Suplementos alimentares têm fabricação e venda suspensas no Brasil',
      url: 'https://agenciabrasil.ebc.com.br/saude/noticia/2026-11/suplementos-alimentares-tem-fabricacao-e-venda-suspensas-no-brasil',
    },
    {
      label: 'Diário Oficial da União: Resolução RE nº 4.500, de 16 de novembro de 2026',
      url: 'https://www.in.gov.br/web/dou/-/resolucao-re-n-4.500-de-16-de-novembro-de-2026-744730467',
    },
    { label: 'Anvisa', url: 'https://www.gov.br/anvisa/pt-br' },
  ],
} as const satisfies NewsDocument;
