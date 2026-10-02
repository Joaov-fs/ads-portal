import type { GuideDocument } from '../../types';

export const guideComoCalcularFeriasPassoAPasso = {
  kind: 'guide',
  slug: 'como-calcular-ferias-passo-a-passo',
  title: 'Como calcular as férias: o terço, a venda de 10 dias e os descontos',
  description:
    'Veja quanto você recebe de férias, o que muda ao vender 10 dias e quais descontos incidem, com exemplo de salário de R$ 3.000.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['ferias', 'trabalho', 'salario', 'direitos'],
  featuredCalculators: ['ferias', 'ferias-proporcionais', 'salario-liquido'],
  highlights: [
    {
      value: '+1/3',
      label: 'Adicional constitucional',
      note: 'Sobre o salário dos dias de descanso.',
    },
    {
      value: '10 dias',
      label: 'Máximo que pode ser vendido',
      note: 'É o abono pecuniário, direito do trabalhador.',
    },
    {
      value: 'R$ 3.631,40',
      label: 'Líquido de 30 dias de férias',
      note: 'Com salário de R$ 3.000, após INSS.',
    },
  ],
  sections: [
    {
      heading: 'A conta básica',
      paragraphs: [
        'As férias pagam o salário dos dias de descanso mais um terço. Com salário de R$ 3.000, os 30 dias rendem R$ 3.000,00 e o terço soma R$ 1.000,00, num total bruto de R$ 4.000,00.',
        'Sobre esse valor incidem INSS e, quando a base passa da faixa de isenção, Imposto de Renda. No exemplo, o INSS é de R$ 368,60 e o IRRF é zero, então o líquido é de R$ 3.631,40.',
      ],
    },
    {
      heading: 'Quando você vende 10 dias',
      paragraphs: [
        'O trabalhador pode converter até um terço das férias em dinheiro. O abono recebe o terço adicional e, em regra, não sofre INSS nem Imposto de Renda, por isso o líquido costuma ser maior.',
      ],
      table: {
        caption:
          'Férias de quem ganha R$ 3.000: 30 dias x 20 dias com 10 vendidos',
        columns: ['Item', '30 dias de descanso', '20 dias + 10 vendidos'],
        rows: [
          ['Férias (dias de descanso)', 'R$ 3.000,00', 'R$ 2.000,00'],
          ['1/3 sobre as férias', 'R$ 1.000,00', 'R$ 666,67'],
          ['Abono de 10 dias + 1/3', '—', 'R$ 1.333,33'],
          ['Total bruto', 'R$ 4.000,00', 'R$ 4.000,00'],
          ['INSS', 'R$ 368,60', 'R$ 215,69'],
          ['Líquido', 'R$ 3.631,40', 'R$ 3.784,31'],
        ],
      },
    },
    {
      heading: 'Regras que costumam gerar dúvida',
      paragraphs: [
        'O pagamento deve ser feito até 2 dias antes do início do descanso. As férias podem ser divididas em até três períodos, desde que um tenha 14 dias ou mais e os outros, 5 dias ou mais cada.',
        'Quem tem horas extras, comissões ou adicionais habituais recebe a média desses valores dentro da base das férias. Se as férias passarem do prazo para serem concedidas, a empresa deve pagá-las em dobro.',
      ],
    },
    {
      heading: 'Como pedir',
      paragraphs: [
        'O pedido de venda dos 10 dias deve ser feito até 15 dias antes do fim do período aquisitivo. Combine as datas com a empresa por escrito e confira no holerite as linhas de férias, terço e abono antes do descanso.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso vender as férias se a empresa não quiser?',
      answer:
        'Sim. A conversão de até um terço em dinheiro é direito do empregado, desde que peça no prazo.',
    },
    {
      question: 'As férias de 15 dias têm o terço também?',
      answer:
        'Sim. O adicional de um terço incide sobre os dias de férias gozados.',
    },
  ],
  sources: [
    {
      label: 'CLT — Consolidação das Leis do Trabalho',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Receita Federal — tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies GuideDocument;
