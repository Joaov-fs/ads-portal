import type { NewsDocument } from '../../types';

export const newsFerias2026ComoCalcularOUmTercoVender10DiasEDividirEmPeriodos =
  {
    kind: 'news',
    slug: 'ferias-2026-como-calcular-o-um-terco-vender-10-dias-e-dividir-em-periodos',
    title:
      'Férias: como calcular o 1/3, vender 10 dias e dividir em períodos, com exemplo em reais',
    description:
      'Quanto você recebe de férias com salário de R$ 3.000, o que muda se vender 10 dias e quais são as regras para fracionar o descanso.',
    category: 'trabalho',
    authorId: 'equipe-editorial',
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-01',
    tags: ['ferias', 'trabalho', 'salario', 'direitos', 'descontos'],
    featuredCalculators: ['ferias', 'ferias-proporcionais', 'salario-liquido'],
    highlights: [
      {
        value: '+1/3',
        label: 'Adicional constitucional',
        note: 'Sobre o salário dos dias de férias.',
      },
      {
        value: '10 dias',
        label: 'Máximo que pode ser vendido',
        note: 'É o abono pecuniário, 1/3 do período.',
      },
      {
        value: '3 períodos',
        label: 'Máximo para dividir',
        note: 'Um com 14 dias ou mais, os outros com 5 dias ou mais.',
      },
      {
        value: 'R$ 4.000',
        label: 'Férias de quem ganha R$ 3.000',
        note: '30 dias com o terço, antes dos descontos.',
      },
    ],
    sections: [
      {
        heading: 'Como o valor das férias é calculado',
        paragraphs: [
          'As férias pagam o salário dos dias de descanso mais um terço. Com salário de R$ 3.000, 30 dias de férias rendem R$ 3.000,00 mais R$ 1.000,00 de adicional, num total bruto de R$ 4.000,00. Sobre esse valor incidem INSS e IRRF, e o pagamento deve ocorrer até 2 dias antes do início do descanso.',
          'Horas extras, comissões e adicionais habituais entram na base pela média dos últimos 12 meses.',
        ],
      },
      {
        heading: 'Vender 10 dias de férias',
        paragraphs: [
          'O empregado pode converter até um terço das férias em dinheiro, o chamado abono pecuniário. É um direito do trabalhador, que deve pedir até 15 dias antes do fim do período aquisitivo. O abono também recebe o adicional de 1/3, e, em regra, não tem desconto de INSS nem de IR.',
        ],
        table: {
          caption:
            'Férias de quem ganha R$ 3.000, com 20 dias de descanso e 10 vendidos',
          columns: ['Parcela', 'Cálculo', 'Valor bruto'],
          rows: [
            ['Férias de 20 dias', 'R$ 3.000 ÷ 30 × 20', 'R$ 2.000,00'],
            ['1/3 sobre as férias', 'R$ 2.000 ÷ 3', 'R$ 666,67'],
            [
              'Abono pecuniário de 10 dias',
              'R$ 3.000 ÷ 30 × 10',
              'R$ 1.000,00',
            ],
            ['1/3 sobre o abono', 'R$ 1.000 ÷ 3', 'R$ 333,33'],
            ['Total bruto', '', 'R$ 4.000,00'],
          ],
        },
      },
      {
        heading: 'Dividir as férias',
        paragraphs: [
          'Desde a reforma trabalhista, as férias podem ser divididas em até 3 períodos, desde que o empregado concorde. Um deles precisa ter pelo menos 14 dias corridos, e os demais, pelo menos 5 dias cada. A empresa não pode começar as férias nos dois dias que antecedem feriado ou o descanso semanal.',
        ],
      },
      {
        heading: 'Férias vencidas custam em dobro',
        paragraphs: [
          'A empresa tem 12 meses, depois do direito adquirido, para conceder as férias. Se o prazo vence sem que o empregado descanse, as férias devem ser pagas em dobro. Avisar com 30 dias de antecedência é obrigação do empregador.',
        ],
      },
    ],
    faq: [
      {
        question: 'Posso exigir tirar férias em uma data?',
        answer:
          'Não. A época é definida pelo empregador, mas deve atender ao interesse da empresa e ser comunicada com 30 dias de antecedência.',
      },
      {
        question: 'Quem trabalha há menos de um ano tem direito?',
        answer:
          'Só depois de 12 meses de trabalho. Antes disso, se sair da empresa, recebe as férias proporcionais na rescisão.',
      },
      {
        question: 'O abono precisa da concordância da empresa?',
        answer: 'Não. É um direito do empregado, desde que pedido no prazo.',
      },
    ],
    sources: [
      {
        label: 'CLT, arts. 129 a 153: férias',
      },
      {
        label: 'Constituição Federal, art. 7º, XVII: adicional de 1/3',
      },
      {
        label:
          'Lei 13.467/2017: reforma trabalhista (fracionamento das férias)',
      },
      {
        label: 'Ministério do Trabalho e Emprego: férias',
        url: 'https://www.gov.br/trabalho-e-emprego/',
      },
    ],
  } as const satisfies NewsDocument;
