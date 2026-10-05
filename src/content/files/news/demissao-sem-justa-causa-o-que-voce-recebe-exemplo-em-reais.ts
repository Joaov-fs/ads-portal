import type { NewsDocument } from '../../types';

export const newsDemissaoSemJustaCausaOQueVoceRecebeExemploEmReais = {
  kind: 'news',
  slug: 'demissao-sem-justa-causa-o-que-voce-recebe-exemplo-em-reais',
  title:
    'Demissão sem justa causa: o que você recebe, com um exemplo completo de rescisão em reais',
  description:
    'Salário de R$ 3.000 e 30 meses de empresa: aviso prévio de 36 dias, 13º, férias, multa de 40% do FGTS e o total da rescisão.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['rescisao', 'demissao', 'fgts', 'trabalho', 'direitos'],
  featuredCalculators: ['rescisao-clt', 'aviso-previo', 'fgts-multa'],
  highlights: [
    {
      value: 'R$ 12.063,33',
      label: 'Total bruto da rescisão no exemplo',
      note: 'Fora o saque do FGTS.',
    },
    {
      value: '36 dias',
      label: 'Aviso prévio no exemplo',
      note: '30 dias mais 3 por ano completo de empresa.',
    },
    {
      value: '40%',
      label: 'Multa do FGTS',
      note: 'Sobre o saldo, paga pela empresa.',
    },
    {
      value: '10 dias',
      label: 'Prazo para pagar a rescisão',
      note: 'Corridos, após o fim do contrato.',
    },
  ],
  sections: [
    {
      heading: 'O que entra na rescisão',
      paragraphs: [
        'Na demissão sem justa causa, o trabalhador recebe saldo de salário, aviso prévio, 13º e férias proporcionais com 1/3, férias vencidas (se houver) e a multa de 40% sobre o saldo do FGTS. Também tem direito a sacar o FGTS e a pedir o seguro-desemprego.',
        'O aviso prévio é de 30 dias e aumenta 3 dias por ano completo de contrato, até 90 dias.',
      ],
    },
    {
      heading: 'Exemplo: salário de R$ 3.000 e 30 meses de empresa',
      paragraphs: [
        'O cenário a seguir considera uma saída em 15 de julho, com aviso prévio indenizado e sem férias vencidas. O saldo do FGTS é estimado em 8% do salário por mês de contrato, ou R$ 7.200.',
      ],
      table: {
        caption: 'Rescisão sem justa causa, valores brutos',
        columns: ['Verba', 'Base', 'Valor'],
        rows: [
          ['Saldo de salário', '15 dias', 'R$ 1.500,00'],
          ['Aviso prévio indenizado', '36 dias', 'R$ 3.600,00'],
          ['13º salário proporcional', '7/12', 'R$ 1.750,00'],
          ['Férias proporcionais', '7/12', 'R$ 1.750,00'],
          ['1/3 sobre as férias', '', 'R$ 583,33'],
          ['Multa de 40% do FGTS', '40% de R$ 7.200', 'R$ 2.880,00'],
          ['Total', '', 'R$ 12.063,33'],
        ],
      },
    },
    {
      heading: 'O que muda em cada tipo de saída',
      paragraphs: [
        'No pedido de demissão, não há aviso indenizado nem multa do FGTS, e o saque do fundo não é liberado. No acordo entre as partes (art. 484-A da CLT), o aviso e a multa caem pela metade (multa de 20%), e o trabalhador saca 80% do FGTS, sem direito ao seguro-desemprego. Na justa causa, perde o aviso, a multa, o 13º proporcional e as férias proporcionais.',
      ],
    },
    {
      heading: 'Confira antes de assinar',
      paragraphs: [
        'Os valores da rescisão devem ser pagos em até 10 dias corridos depois do término do contrato. Compare o termo com a calculadora, lembre que descontos de INSS e IRRF reduzem o líquido e guarde todos os documentos: a empresa deve entregar a guia do seguro-desemprego e o código de saque do FGTS.',
      ],
    },
  ],
  faq: [
    {
      question: 'O aviso prévio sempre é pago?',
      answer:
        'Quando a empresa dispensa e não quer que você trabalhe o período, ele é indenizado. Se você cumpre o aviso trabalhando, recebe o salário normal dos dias e tem direito a reduzir a jornada.',
    },
    {
      question: 'O FGTS entra no total do exemplo?',
      answer:
        'A multa de 40% entra. O saldo do FGTS (R$ 7.200 no exemplo) é sacado à parte, na conta do fundo.',
    },
    {
      question: 'E se a empresa atrasar o pagamento?',
      answer:
        'O atraso gera multa em favor do empregado equivalente a um salário, além de correção, e deve ser comunicado ao sindicato ou ao Ministério do Trabalho.',
    },
  ],
  sources: [
    {
      label: 'CLT, arts. 477 e 487: rescisão e aviso prévio',
    },
    {
      label: 'Lei 12.506/2011: aviso prévio proporcional',
    },
    {
      label: 'Lei 8.036/1990: FGTS e multa rescisória',
    },
    {
      label: 'Caixa Econômica Federal: saque do FGTS na rescisão',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/',
    },
  ],
} as const satisfies NewsDocument;
