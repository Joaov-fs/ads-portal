import type { GuideDocument } from '../../types';

export const guideComoCalcularFeriasPassoAPasso = {
  kind: 'guide',
  slug: 'como-calcular-ferias-passo-a-passo',
  title: 'Como calcular as férias: o terço, a venda de 10 dias e os descontos',
  description:
    'Veja quanto você recebe de férias, o que muda ao vender 10 dias e como INSS e IR incidem, com dois exemplos completos.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-18',
  updatedAt: '2026-10-02',
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
      value: 'R$ 3.533,65',
      label: 'Líquido de quem ganha R$ 2.800',
      note: 'Com 20 dias de descanso e 10 vendidos.',
    },
  ],
  sections: [
    {
      heading: 'A conta das férias em três passos',
      paragraphs: [
        'Passo 1: divida o salário por 30 para achar o valor de um dia de férias e multiplique pelos dias que você vai descansar. Passo 2: some o adicional de um terço sobre esse valor, que a Constituição garante a todo trabalhador. Passo 3: desconte o INSS e, se houver, o Imposto de Renda sobre o total.',
        'Se você vender dias, o cálculo ganha uma segunda parte: os dias vendidos também valem um dia de salário cada, com o terço em cima. Essa parte, chamada abono pecuniário, em regra não paga INSS nem Imposto de Renda.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 2.800, com e sem venda de dias',
      paragraphs: [
        'Um dia de férias vale R$ 2.800 ÷ 30 = R$ 93,33. A tabela compara tirar os 30 dias com tirar 20 e vender 10. O bruto é o mesmo nos dois casos, R$ 3.733,33, mas o desconto muda, porque só os dias de descanso entram na base do INSS.',
        'Nos 30 dias, o INSS incide sobre R$ 3.733,33: 7,5% até R$ 1.621,00, 9% até R$ 2.902,84 e 12% sobre o restante, o que dá R$ 336,60. Com 20 dias, a base cai para R$ 2.488,89 e o INSS para R$ 199,68. Em ambos os casos o Imposto de Renda é zero, e a venda dos 10 dias deixa R$ 136,92 a mais no bolso.',
      ],
      table: {
        caption: 'Férias de quem ganha R$ 2.800 (sem dependentes)',
        columns: ['Item', '30 dias de descanso', '20 dias + 10 vendidos'],
        rows: [
          ['Dias de descanso', 'R$ 2.800,00', 'R$ 1.866,67'],
          ['1/3 sobre o descanso', 'R$ 933,33', 'R$ 622,22'],
          ['Abono de 10 dias', '—', 'R$ 933,33'],
          ['1/3 sobre o abono', '—', 'R$ 311,11'],
          ['Total bruto', 'R$ 3.733,33', 'R$ 3.733,33'],
          ['INSS', 'R$ 336,60', 'R$ 199,68'],
          ['Imposto de Renda', 'R$ 0,00', 'R$ 0,00'],
          ['Líquido', 'R$ 3.396,73', 'R$ 3.533,65'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: salário de R$ 6.500 e um dependente',
      paragraphs: [
        'Em salários maiores, vender dias reduz também o Imposto de Renda. Com 30 dias de descanso, o bruto de R$ 8.666,67 estoura o teto do INSS (R$ 988,09) e fica acima de R$ 7.350, faixa em que não há mais a redução da Lei 15.270/2025. O IRRF é de R$ 1.150,75 sobre uma base de cerca de R$ 7.489 (bruto menos INSS menos R$ 189,59 do dependente).',
        'Com 20 dias de descanso e 10 vendidos, a parte tributada cai para R$ 5.777,78. O INSS vai a R$ 610,40, a redução da lei volta a valer e o IRRF desce para R$ 250,83. O líquido sobe mais de R$ 1.200. O exemplo isola as férias; na folha real, a retenção pode considerar outros rendimentos pagos pela empresa no mesmo mês.',
      ],
      table: {
        caption: 'Férias de quem ganha R$ 6.500, com 1 dependente',
        columns: ['Item', '30 dias de descanso', '20 dias + 10 vendidos'],
        rows: [
          ['Parte tributada (descanso + 1/3)', 'R$ 8.666,67', 'R$ 5.777,78'],
          ['Abono + 1/3 (isento)', '—', 'R$ 2.888,89'],
          ['INSS', 'R$ 988,09', 'R$ 610,40'],
          ['Imposto de Renda', 'R$ 1.150,75', 'R$ 250,83'],
          ['Líquido', 'R$ 6.527,83', 'R$ 7.805,43'],
        ],
      },
    },
    {
      heading: 'O que muda o valor das férias',
      paragraphs: [
        'Horas extras, comissões e adicionais habituais entram pela média do período aquisitivo, que são os 12 meses que dão direito às férias. Quem tem parte variável recebe mais do que o salário-base indica.',
        'Faltas injustificadas reduzem os dias: até 5 faltas no período mantêm os 30 dias; de 6 a 14 faltas, são 24 dias; de 15 a 23, são 18; de 24 a 32, são 12. As férias também podem ser divididas em até três períodos, com consentimento do empregado: um deles precisa ter 14 dias ou mais e os outros, no mínimo 5 dias cada.',
      ],
    },
    {
      heading: 'Prazos e erros comuns',
      paragraphs: [
        'O pagamento deve cair até 2 dias antes do início do descanso, e o período não pode começar nos 2 dias que antecedem feriado ou dia de repouso semanal. O pedido para vender os 10 dias precisa ser feito até 15 dias antes do fim do período aquisitivo.',
        'Os erros mais frequentes são esquecer o terço sobre o abono, calcular a venda sobre o salário-base sem a média das variáveis e aceitar férias depois de 12 meses do fim do período aquisitivo sem o pagamento em dobro. Se a empresa pagar com atraso, o Tribunal Superior do Trabalho entende que também cabe o pagamento em dobro (Súmula 450).',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Peça o demonstrativo das férias ao RH e compare as linhas de férias, terço, abono, INSS e IRRF com a conta acima. Se as férias vencerem sem concessão, se o pagamento atrasar ou se a empresa recusar a venda dentro do prazo, registre o pedido por escrito e procure o sindicato da categoria ou o Ministério do Trabalho e Emprego.',
      ],
    },
  ],
  faq: [
    {
      question: 'Posso vender as férias se a empresa não quiser?',
      answer:
        'Sim. A conversão de até um terço das férias em dinheiro é direito do empregado, desde que ele peça até 15 dias antes do fim do período aquisitivo.',
    },
    {
      question: 'Posso vender todos os 30 dias?',
      answer:
        'Não. O limite é de 10 dias, um terço do período. Os outros 20 dias precisam ser gozados.',
    },
    {
      question: 'Tirar 15 dias de férias dá direito ao terço?',
      answer:
        'Sim. O adicional de um terço incide sobre os dias de descanso, na proporção de cada período tirado.',
    },
    {
      question: 'O abono de 10 dias paga Imposto de Renda?',
      answer:
        'Em regra, não. O abono pecuniário e o terço sobre ele ficam fora da base do INSS e do IRRF, e é isso que costuma aumentar o líquido.',
    },
    {
      question: 'Quando as férias são pagas em dobro?',
      answer:
        'Quando a empresa não concede o descanso dentro dos 12 meses seguintes ao fim do período aquisitivo. O pagamento fora do prazo também pode gerar a dobra.',
    },
  ],
  sources: [
    {
      label: 'CLT — arts. 129 a 145 (férias)',
    },
    {
      label: 'Constituição Federal, art. 7º, XVII',
    },
    {
      label: 'Súmula 450 do TST — férias pagas fora do prazo',
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
