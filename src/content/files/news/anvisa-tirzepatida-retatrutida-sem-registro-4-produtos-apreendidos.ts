import type { NewsDocument } from '../../types';

export const newsAnvisaTirzepatidaRetatrutidaSemRegistro = {
  kind: 'news',
  slug: 'anvisa-tirzepatida-retatrutida-sem-registro-4-produtos-apreendidos',
  title:
    'Anvisa proíbe tirzepatida e retatrutida sem registro e manda apreender 4 produtos',
  description:
    'Resolução no DOU de 26/11 proíbe venda, divulgação e uso de canetas sem registro e de lote falsificado de Durateston. Veja o que fazer se comprou.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/anvisa-tirzepatida-retatrutida-sem-registro-4-produtos-apreendidos.jpg',
    alt: 'Duas canetas injetoras ao lado de um documento com o aviso de produtos sem registro e um carimbo de proibido.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-26',
  updatedAt: '2026-11-26',
  tags: [
    'anvisa',
    'saude',
    'tirzepatida',
    'canetas-emagrecedoras',
    'consumidor',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '4',
      label: 'Produtos com apreensão',
      note: 'TZ Gold, Retatrutide, GHK-CU e lote de Durateston.',
    },
    {
      value: '999511',
      label: 'Lote falsificado de Durateston',
      note: 'A fabricante informou que há unidades falsas no mercado.',
    },
    {
      value: '26/11',
      label: 'Publicação no DOU',
      note: 'Medida vale para venda, divulgação e uso.',
    },
  ],
  sections: [
    {
      heading: 'O que a Anvisa determinou no Diário Oficial de 26/11',
      paragraphs: [
        'A Agência Nacional de Vigilância Sanitária publicou, no Diário Oficial da União de 26 de novembro de 2026, uma resolução que proíbe a importação, a venda, a distribuição, a divulgação e o uso de quatro produtos e determina a apreensão deles. Os produtos não têm registro no Brasil e, segundo a agência, são fabricados por empresa não identificada.',
        'A lista traz o TZ Gold (tirzepatida 20 mg/0,6 mL), o Retatrutide (Ayus Genetics, 20 mg/1 mL), o GHK-CU (Ayus Genetics, 100 mg) e o lote 999511 do Durateston, um medicamento à base de testosterona. No caso do Durateston, a própria detentora do registro, a Aspen Pharma, comunicou que existem unidades falsificadas desse lote circulando.',
        'A fiscalização vale para pessoas físicas, empresas e veículos de comunicação que vendam ou divulguem os produtos. Ou seja, anunciar esses itens em rede social ou em site de venda também é alvo da medida.',
      ],
    },
    {
      heading: 'Por que tirzepatida e retatrutida sem registro preocupam',
      image: {
        src: '/images/news/anvisa-tirzepatida-retatrutida-sem-registro-4-produtos-apreendidos-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com a lista de produtos sem registro e o carimbo de proibido.',
        caption:
          'Produto sem registro não passou pela avaliação de qualidade da Anvisa.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A tirzepatida é o princípio ativo do Mounjaro, a chamada caneta emagrecedora. O remédio original tem registro, mas isso não vale para produtos vendidos com o mesmo princípio ativo por empresas desconhecidas: sem registro, ninguém garante a dose, a pureza nem as condições de fabricação do que está dentro da caneta.',
        'Já a retatrutida é um medicamento experimental, ainda em fase de pesquisa. A empresa desenvolvedora não pediu registro à Anvisa nem a outra agência reguladora no mundo, e o produto não está à venda legalmente em lugar nenhum. Qualquer frasco oferecido como retatrutida, portanto, não é um medicamento aprovado.',
        'Pense num frasco anunciado por R$ 600, bem abaixo do preço de uma caneta registrada. A economia aparente não paga o risco de aplicar no corpo uma substância de origem desconhecida, sem bula em português e sem rastreio de lote.',
      ],
      table: {
        caption: 'Produtos com apreensão determinada',
        columns: ['Produto', 'Observação'],
        rows: [
          ['TZ Gold (tirzepatida 20 mg/0,6 mL)', 'Sem registro'],
          [
            'Retatrutide (Ayus Genetics, 20 mg/1 mL)',
            'Substância experimental',
          ],
          ['GHK-CU (Ayus Genetics, 100 mg)', 'Sem registro'],
          ['Durateston, lote 999511', 'Unidades falsificadas no mercado'],
        ],
      },
    },
    {
      heading: 'Como reconhecer o Durateston falsificado e o que fazer',
      paragraphs: [
        'Segundo a Anvisa, o cartucho do lote falsificado do Durateston tem diferenças em relação ao original, como a falta do ponto final na frase obrigatória da faixa vermelha e a fonte usada. Se você usa o medicamento, confira a embalagem e o número do lote antes de aplicar.',
        'Quem tem em casa qualquer um dos produtos da lista deve parar de usá-lo e procurar um profissional de saúde para orientação. Também vale conferir se o medicamento que você usa tem registro na Anvisa e comprar apenas em farmácias e drogarias regulares, com nota fiscal.',
        'Para quem encontrar a venda desses produtos em redes sociais ou sites, o caminho é denunciar à vigilância sanitária do município ou do estado. A decisão vale para o Brasil inteiro e não depende de a pessoa ter sido enganada antes.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso continuar usando a caneta se já comprei?',
      answer:
        'Se for um dos produtos da lista, a recomendação é deixar de usar e procurar um profissional de saúde. A venda, a divulgação e o uso estão proibidos.',
    },
    {
      question: 'O Mounjaro original também foi proibido?',
      answer:
        'Não. A medida atinge produtos sem registro, fabricados por empresa não identificada, e não o medicamento registrado na Anvisa.',
    },
    {
      question: 'A retatrutida pode ser vendida no Brasil?',
      answer:
        'Não. Ela ainda está em fase de pesquisa e não tem registro na Anvisa nem em outra agência reguladora do mundo.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Anvisa proíbe tirzepatida e retatrutida sem registro, 26/11/2026',
      url: 'https://agenciabrasil.ebc.com.br/saude/noticia/2026-11/anvisa-proibe-tirzepatida-e-retatrutida-sem-registro',
    },
    {
      label: 'Anvisa: página oficial da agência',
      url: 'https://www.gov.br/anvisa/pt-br',
    },
    {
      label: 'Imprensa Nacional: Diário Oficial da União de 26/11/2026',
      url: 'https://www.in.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
