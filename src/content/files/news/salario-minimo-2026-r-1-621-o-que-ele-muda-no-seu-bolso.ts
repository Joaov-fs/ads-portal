import type { NewsDocument } from '../../types';

export const newsSalarioMinimo2026R1621OQueEleMudaNoSeuBolso = {
  kind: 'news',
  slug: 'salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso',
  title:
    'Salário mínimo de R$ 1.621: o que ele muda no MEI, no seguro-desemprego e nos benefícios',
  description:
    'O mínimo de 2026 subiu 6,8% e serve de base para o DAS do MEI, o piso do seguro-desemprego, o abono salarial e o BPC. Veja onde ele aparece.',
  category: 'economia',
  coverImage: {
    src: '/images/news/salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso.jpg',
    alt: 'Carteira com notas, holerite com o salário mínimo de R$ 1.621 e calculadora.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['salario', 'salario-minimo', 'beneficios', 'mei', 'trabalho'],
  featuredCalculators: ['bpc', 'pis', 'seguro-desemprego'],
  highlights: [
    {
      value: 'R$ 1.621',
      label: 'Salário mínimo em 2026',
      note: 'Era R$ 1.518 em 2025.',
    },
    {
      value: '+6,8%',
      label: 'Reajuste',
      note: 'Aumento de R$ 103 por mês.',
    },
    {
      value: 'R$ 7,37',
      label: 'Valor da hora',
      note: 'Jornada de 220 horas por mês.',
    },
    {
      value: 'R$ 405,25',
      label: 'Um quarto do mínimo',
      note: 'Limite de renda por pessoa do BPC.',
    },
  ],
  sections: [
    {
      heading: 'O novo valor',
      paragraphs: [
        'O salário mínimo nacional é de R$ 1.621,00 por mês desde 1º de janeiro de 2026, um aumento de 6,8% sobre os R$ 1.518,00 de 2025. Para quem trabalha 220 horas por mês, a hora vale R$ 7,37.',
        'Mais do que o salário de milhões de pessoas, o mínimo é um indexador: dezenas de valores no país são definidos como múltiplos ou frações dele.',
      ],
    },
    {
      heading: 'Onde o salário mínimo entra na sua vida',
      image: {
        src: '/images/news/salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso-detalhe.jpg',
        alt: 'Detalhe da ilustração: carteira com notas, holerite com o salário mínimo de R$ 1.621 e calculadora.',
        caption: 'O mínimo de 2026 é a base de vários benefícios.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A tabela mostra os usos mais comuns e o valor correspondente em 2026.',
      ],
      table: {
        caption: 'Valores ligados ao salário mínimo de 2026',
        columns: ['Item', 'Regra', 'Valor em 2026'],
        rows: [
          ['MEI: contribuição ao INSS', '5% do mínimo', 'R$ 81,05'],
          [
            'Seguro-desemprego: piso da parcela',
            '1 salário mínimo',
            'R$ 1.621,00',
          ],
          [
            'Abono salarial: valor máximo',
            '1 salário mínimo (12 meses)',
            'R$ 1.621,00',
          ],
          ['BPC: valor do benefício', '1 salário mínimo', 'R$ 1.621,00'],
          [
            'BPC: renda por pessoa da família',
            'Até 1/4 do mínimo',
            'R$ 405,25',
          ],
          [
            'Piso do INSS para aposentadorias',
            '1 salário mínimo',
            'R$ 1.621,00',
          ],
          ['INSS de autônomo no plano de 11%', '11% do mínimo', 'R$ 178,31'],
        ],
      },
    },
    {
      heading: 'O que o mínimo não define',
      paragraphs: [
        'O piso do Bolsa Família, por exemplo, não é ligado ao salário mínimo: em outubro, o mínimo garantido por família passou a ser de R$ 691. E pisos de categorias profissionais seguem convenções coletivas, que podem ser maiores.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem recebe o mínimo paga INSS?',
      answer:
        'Sim. Com R$ 1.621, o desconto é de R$ 121,57 (7,5%), e o IR retido é zero.',
    },
    {
      question: 'Posso receber menos que o salário mínimo?',
      answer:
        'Em jornada integral, não. Quem trabalha menos horas pode receber proporcionalmente, desde que o contrato preveja a jornada reduzida.',
    },
  ],
  sources: [
    {
      label: 'Presidência da República: decreto do salário mínimo de 2026',
    },
    {
      label: 'Portal do Empreendedor (MEI): valores do DAS-MEI em 2026',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
    },
    {
      label:
        'Ministério do Trabalho e Emprego: seguro-desemprego e abono salarial',
    },
    {
      label: 'Ministério do Desenvolvimento e Assistência Social: BPC',
    },
  ],
} as const satisfies NewsDocument;
