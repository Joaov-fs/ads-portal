import type { CalculatorDocument } from '../../types';

export const feriasCalculator = {
  kind: 'calculator',
  calculatorId: 'ferias',
  slug: 'ferias',
  title: 'Férias',
  description:
    'Estime férias brutas com adicional de um terço a partir do salário e dos dias de descanso.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-13',
  updatedAt: '2026-10-12',
  tags: ['ferias', 'salario', 'trabalho', 'direitos'],
  fields: [
    {
      name: 'salary',
      label: 'Salário bruto',
      placeholder: 'R$ 3.500,00',
      type: 'money',
    },
    {
      name: 'days',
      label: 'Dias de férias',
      placeholder: '30',
      type: 'number',
      hint: 'Dias que serão gozados, de 1 a 30. Em férias fracionadas, informe cada período separadamente.',
    },
    {
      name: 'sellDays',
      label: 'Dias vendidos (abono pecuniário)',
      placeholder: '0',
      type: 'number',
      hint: 'De 0 a 10. Os dias gozados e os vendidos somam no máximo 30. Se não vender, informe 0.',
    },
    {
      name: 'dependents',
      label: 'Dependentes para o IRRF',
      placeholder: '0',
      type: 'number',
      hint: 'Cada dependente reduz a base do imposto em R$ 189,59.',
    },
  ],
  resultLabel: 'Valor estimado das férias',
  resultPlaceholder: 'Preencha os campos para calcular.',
  sections: [
    {
      heading: 'Como as férias são estimadas',
      paragraphs: [
        'As férias pagam o salário proporcional aos dias gozados e mais um terço constitucional sobre esse valor. Com 30 dias, o total é o salário multiplicado por 4/3. Os dias vendidos (abono pecuniário) também recebem o terço.',
        'O INSS e o IRRF incidem sobre as férias gozadas; o abono pecuniário, de até 10 dias, não tem desconto. Médias de horas extras e adicionais habituais entram na base real, mas não nesta simulação.',
      ],
    },
    {
      heading: 'Exemplo prático',
      paragraphs: [
        'Com salário de R$ 4.200,00, 20 dias de descanso e 10 dias vendidos, as férias gozadas valem R$ 2.800,00 mais R$ 933,33 de terço, e o abono vale R$ 1.400,00 mais R$ 466,67 de terço. O total bruto é de R$ 5.600,00.',
        'Descontando R$ 336,60 de INSS e R$ 0,00 de IRRF, que incidem só sobre as férias gozadas, sobram R$ 5.263,40 líquidos. Vender os 10 dias aumenta o valor recebido, mas diminui o descanso.',
      ],
      table: {
        caption: 'Férias de R$ 4.200 com 20 dias gozados e 10 vendidos',
        columns: ['Item', 'Valor'],
        rows: [
          ['Férias gozadas (20 dias)', 'R$ 2.800,00'],
          ['1/3 sobre as férias gozadas', 'R$ 933,33'],
          ['Abono pecuniário (10 dias)', 'R$ 1.400,00'],
          ['1/3 sobre o abono', 'R$ 466,67'],
          ['Total bruto', 'R$ 5.600,00'],
          ['INSS', 'R$ 336,60'],
          ['IRRF', 'R$ 0,00'],
          ['Líquido estimado', 'R$ 5.263,40'],
        ],
      },
    },
    {
      heading: 'Tabela de referência: férias de 30 dias por salário',
      paragraphs: [
        'A tabela mostra as férias integrais de 30 dias, sem venda de dias e sem dependentes. Como as férias são pagas como um salário mais um terço, o INSS e o IRRF pesam mais do que em um mês comum de salário.',
      ],
      table: {
        caption: 'Férias integrais de 30 dias, sem dependentes',
        columns: ['Salário', 'Total bruto', 'INSS', 'IRRF', 'Líquido'],
        rows: [
          ['R$ 2.000,00', 'R$ 2.666,67', 'R$ 215,69', 'R$ 0,00', 'R$ 2.450,98'],
          ['R$ 3.000,00', 'R$ 4.000,00', 'R$ 368,60', 'R$ 0,00', 'R$ 3.631,40'],
          [
            'R$ 4.500,00',
            'R$ 6.000,00',
            'R$ 641,51',
            'R$ 385,11',
            'R$ 4.973,37',
          ],
          [
            'R$ 6.000,00',
            'R$ 8.000,00',
            'R$ 921,51',
            'R$ 1.037,86',
            'R$ 6.040,62',
          ],
          [
            'R$ 8.000,00',
            'R$ 10.666,67',
            'R$ 988,09',
            'R$ 1.752,89',
            'R$ 7.925,69',
          ],
        ],
      },
    },
    {
      heading: 'O que muda o resultado',
      paragraphs: [
        'Os fatores que mais mexem no valor são o número de dias gozados, a venda de até 10 dias, os dependentes (R$ 189,59 cada na base do IRRF) e as médias de horas extras, comissões e adicionais, que entram na remuneração das férias.',
        'As férias podem ser divididas em até três períodos, com concordância do empregado, e cada período é calculado separadamente. Se a empresa atrasar o pagamento, que deve sair até dois dias antes do início do descanso, há direito a reclamar.',
      ],
    },
    {
      heading: 'Erros comuns ao preencher',
      paragraphs: [
        'O erro mais comum é informar o salário líquido em vez do bruto. Outros são vender mais de 10 dias, somar dias gozados e vendidos acima de 30, esquecer o terço sobre o abono e achar que o INSS e o IRRF incidem sobre os dias vendidos.',
        'Confira também a data de início e o salário da data do pagamento. Quem recebeu reajuste ou tem parte variável deve usar a média, e o valor do holerite pode ficar um pouco acima da simulação.',
      ],
    },
  ],
  faq: [
    {
      question: 'O resultado considera descontos?',
      answer:
        'Sim: o demonstrativo mostra INSS e IRRF sobre as férias gozadas e o líquido. No contracheque os valores se somam ao salário do mês e podem variar um pouco.',
    },
    {
      question: 'Posso vender todos os dias de férias?',
      answer:
        'Não. O abono pecuniário permite vender no máximo 10 dias, ou um terço do período, e o empregado precisa pedir até 15 dias antes do fim do período aquisitivo.',
    },
    {
      question: 'O terço de férias também é pago sobre os dias vendidos?',
      answer:
        'Sim. O terço constitucional incide sobre os dias gozados e sobre o abono, que não tem INSS nem Imposto de Renda.',
    },
    {
      question: 'Quando as férias devem ser pagas?',
      answer:
        'Até dois dias antes do início do descanso. Se o prazo para conceder as férias vencer, elas devem ser pagas em dobro.',
    },
    {
      question: 'Dá para dividir as férias em períodos?',
      answer:
        'Sim, em até três períodos, com concordância do empregado. Um deles precisa ter pelo menos 14 dias corridos e os outros, pelo menos 5 dias cada.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies CalculatorDocument;
