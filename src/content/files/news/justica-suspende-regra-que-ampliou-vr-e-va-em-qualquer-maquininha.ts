import type { NewsDocument } from '../../types';

export const newsJusticaSuspendeRegraVrVaMaquininhas = {
  kind: 'news',
  slug: 'justica-suspende-regra-que-ampliou-vr-e-va-em-qualquer-maquininha',
  title:
    'Justiça suspende regra que ampliou o VR e o VA em maquininhas, em vigor desde 7/11',
  description:
    'Decisão de 9/11 da 22ª Vara Federal Cível suspende as regras de interoperabilidade do VR e do VA. Voltam as normas antigas, e a União pode recorrer.',
  category: 'financas',
  coverImage: {
    src: '/images/news/justica-suspende-regra-que-ampliou-vr-e-va-em-qualquer-maquininha.jpg',
    alt: 'Documento com decisão de 9/11, regras em vigor desde 7/11 e situação suspensa, cartão de vale-refeição, carimbo suspensa e moedas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-10',
  updatedAt: '2026-11-10',
  tags: ['vale-refeicao', 'vale-alimentacao', 'pat', 'maquininha', 'justica'],
  featuredCalculators: ['salario-liquido'],
  highlights: [
    {
      value: '9/11',
      label: 'Data da decisão da Justiça Federal',
      note: 'Juiz da 22ª Vara Federal Cível.',
    },
    {
      value: '7/11',
      label: 'Quando as regras começaram a valer',
      note: 'Agora estão suspensas.',
    },
    {
      value: 'Cabe recurso',
      label: 'A União pode recorrer',
      note: 'A decisão ainda pode mudar.',
    },
  ],
  sections: [
    {
      heading: 'O que a Justiça decidiu em 9/11',
      paragraphs: [
        'O juiz Frederico Botelho de Barros Viana, da 22ª Vara Federal Cível, suspendeu na segunda-feira, 9 de novembro, as novas regras do governo federal que ampliaram a aceitação do vale-refeição (VR) e do vale-alimentação (VA) em maquininhas. As mudanças tinham começado a valer no sábado, 7 de novembro.',
        'A ação foi proposta pela Associação Brasileira das Empresas de Benefícios ao Trabalhador (ABBT). Com a liminar, voltam a valer as normas antigas, que restringem o número de máquinas de cartão que aceitam VR e VA. A União poderá recorrer.',
      ],
    },
    {
      heading: 'Por que o juiz suspendeu as regras',
      image: {
        src: '/images/news/justica-suspende-regra-que-ampliou-vr-e-va-em-qualquer-maquininha-detalhe.jpg',
        alt: 'Detalhe do documento com decisão em 9/11, regras desde 7/11 e situação suspensa.',
        caption: 'As datas da decisão e da entrada em vigor das regras.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Segundo a Agência Brasil, o magistrado entendeu que o governo extrapolou a competência legal ao exigir que o sistema de pagamento dos benefícios seja obrigatoriamente aberto, o que a lei do Programa de Alimentação do Trabalhador (PAT) não prevê.',
        'Ele também classificou como comando contra a lei a fixação de uma linha de corte quantitativa para extinguir a modalidade fechada. Em outras palavras, o juiz considerou que o limite estabelecido pelo governo não tem base na lei.',
        'A decisão é provisória. Ela não julga o mérito da ação e pode ser alterada em recurso.',
      ],
      table: {
        caption: 'VR e VA nas maquininhas: situação em 10 de novembro de 2026',
        columns: ['Ponto', 'Situação'],
        rows: [
          ['Regras de interoperabilidade', 'Em vigor desde 7/11, agora suspensas'],
          ['Decisão', '9/11, 22ª Vara Federal Cível'],
          ['Autora da ação', 'ABBT'],
          ['Regras que valem', 'As normas antigas'],
          ['Recurso', 'A União pode recorrer'],
        ],
      },
    },
    {
      heading: 'O que muda para quem usa o cartão',
      paragraphs: [
        'Na prática, o trabalhador pode encontrar de novo restrições em estabelecimentos cujas maquininhas não aceitam a bandeira ou a empresa do seu cartão de benefício. Antes de pedir a refeição, vale conferir se o local aceita o seu cartão.',
        'O benefício em si não muda. O saldo do VR e do VA segue depositado pela empresa,. A suspensão afeta onde o cartão é aceito, não quanto o trabalhador recebe.',
        'O caso ainda deve ter novos capítulos, porque a decisão cabe recurso. O PortalFina atualiza o assunto se houver fato novo.',
      ],
    },
  ],
  faq: [
    {
      question: 'O VR e o VA deixaram de valer?',
      answer:
        'Não. O benefício continua. O que foi suspenso são as novas regras que ampliavam a aceitação do cartão nas maquininhas.',
    },
    {
      question: 'Quais regras voltam a valer?',
      answer:
        'As normas antigas, que restringem o número de máquinas de cartão que aceitam VR e VA.',
    },
    {
      question: 'A decisão pode mudar?',
      answer:
        'Sim. A União poderá recorrer, e a decisão é provisória, sem julgamento do mérito.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Justiça suspende regra que ampliou aceitação de VR e VA em maquininhas',
      url: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-11/justica-suspende-regra-que-ampliou-aceitacao-de-vr-e-va-em-maquininhas',
    },
    {
      label: 'Decreto 12.712, de 11 de novembro de 2025',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12712.htm',
    },
    {
      label:
        'Ministério do Trabalho e Emprego: Programa de Alimentação do Trabalhador',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br',
    },
  ],
} as const satisfies NewsDocument;
