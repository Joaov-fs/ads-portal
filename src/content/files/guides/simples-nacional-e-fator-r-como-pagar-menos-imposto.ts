import type { GuideDocument } from '../../types';

export const guideSimplesNacionalEFatorRComoPagarMenosImposto = {
  kind: 'guide',
  slug: 'simples-nacional-e-fator-r-como-pagar-menos-imposto',
  title:
    'Simples Nacional e Fator R: como escolher o anexo e pagar menos imposto',
  description:
    'Entenda a alíquota efetiva, a diferença entre os Anexos III e V e como a folha de pagamento pode reduzir o imposto de empresas de serviços.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-29',
  updatedAt: '2026-10-02',
  tags: ['simples-nacional', 'fator-r', 'impostos', 'negocios'],
  featuredCalculators: ['simples-nacional', 'fator-r', 'das-limite-mei'],
  highlights: [
    {
      value: '28%',
      label: 'Folha sobre receita',
      note: 'Mínimo do Fator R para ir ao Anexo III.',
    },
    {
      value: '7,3%',
      label: 'Alíquota efetiva no Anexo III',
      note: 'Receita de R$ 240 mil em 12 meses.',
    },
    {
      value: '16,125%',
      label: 'Alíquota efetiva no Anexo V',
      note: 'Mesma receita.',
    },
  ],
  sections: [
    {
      heading: 'Como o Simples calcula o DAS',
      paragraphs: [
        'O DAS (Documento de Arrecadação do Simples Nacional) é calculado em três passos. Primeiro, some a receita bruta dos últimos 12 meses (RBT12) e encontre a faixa do anexo da sua atividade. Segundo, calcule a alíquota efetiva: (RBT12 x alíquota nominal da faixa − parcela a deduzir) ÷ RBT12. Terceiro, multiplique a alíquota efetiva pela receita do mês.',
        'Exemplo no Anexo III, com RBT12 de R$ 240.000,00: está na 2ª faixa, de alíquota nominal 11,2% e parcela a deduzir de R$ 9.360,00. A conta é (R$ 240.000 x 11,2% − R$ 9.360) ÷ R$ 240.000 = (R$ 26.880 − R$ 9.360) ÷ R$ 240.000 = 7,3%. Sobre uma receita de R$ 20.000,00 no mês, o DAS é R$ 1.460,00.',
      ],
    },
    {
      heading: 'Fator R: a diferença entre os Anexos III e V',
      paragraphs: [
        'Certas atividades de serviços intelectuais (a lista consta na Lei Complementar 123/2006) são tributadas no Anexo V, mais pesado, ou no Anexo III, mais leve, conforme o Fator R. Ele é a folha de salários dos últimos 12 meses dividida pela receita bruta dos últimos 12 meses. Com 28% ou mais, vale o Anexo III.',
        'A folha considera o pró-labore e os salários pagos, e inclui os encargos sobre eles. Pela mesma conta do exemplo, no Anexo V (2ª faixa, 18% nominal e R$ 4.500,00 de parcela a deduzir), a alíquota efetiva é (R$ 43.200 − R$ 4.500) ÷ R$ 240.000 = 16,125%, e o DAS do mês sobre R$ 20.000,00 é R$ 3.225,00. A diferença de R$ 1.765,00 por mês dá R$ 21.180,00 por ano.',
      ],
      table: {
        caption: 'RBT12 de R$ 240.000 e faturamento de R$ 20.000 no mês',
        columns: ['Anexo', 'Alíquota efetiva', 'DAS do mês'],
        rows: [
          ['III (Fator R de 28% ou mais)', '7,3%', 'R$ 1.460,00'],
          ['V (Fator R abaixo de 28%)', '16,125%', 'R$ 3.225,00'],
        ],
      },
    },
    {
      heading: 'Exemplo 1: um sócio que paga o salário mínimo de pró-labore',
      paragraphs: [
        'Para atingir 28% de R$ 240.000,00, a folha precisa ser de R$ 67.200,00 em 12 meses, ou R$ 5.600,00 por mês. Com pró-labore de R$ 1.621,00, a folha anual é R$ 19.452,00 e o Fator R é de 8,1%: a empresa fica no Anexo V.',
        'Se o sócio passar o pró-labore para R$ 5.600,00, o DAS cai R$ 1.765,00 por mês. Mas o custo muda: o INSS de 11% sobe de R$ 178,31 para R$ 616,00 (+ R$ 437,69), e o IRRF, pela tabela de 2026 usada na calculadora, vai de zero para R$ 228,87. O custo extra é R$ 666,56 por mês e a economia líquida é de R$ 1.098,44 por mês.',
      ],
    },
    {
      heading: 'Exemplo 2: receita maior, conta diferente',
      paragraphs: [
        'Com RBT12 de R$ 480.000,00 e faturamento de R$ 40.000,00 no mês, o Anexo III (3ª faixa, 13,5% e R$ 17.640,00) dá alíquota efetiva de 9,825% e DAS de R$ 3.930,00. O Anexo V (19,5% e R$ 9.900,00) dá 17,4375% e DAS de R$ 6.975,00. A economia é de R$ 3.045,00 por mês.',
        'Aqui o Fator R exige R$ 134.400,00 de folha em 12 meses, ou R$ 11.200,00 por mês. Se tudo vier de pró-labore de um único sócio, o INSS é limitado pelo teto (R$ 932,31) mas o IRRF sobe para R$ 1.914,89. O custo extra sobre o pró-labore de R$ 1.621,00 é R$ 2.668,89 por mês, e a economia líquida cai para R$ 376,11. Dividir entre sócios ou contratar um funcionário muda a conta, e só o cálculo completo mostra o que compensa.',
      ],
      table: {
        caption: 'Comparação dos dois exemplos',
        columns: ['Item', 'Exemplo 1', 'Exemplo 2'],
        rows: [
          [
            'RBT12 / faturamento do mês',
            'R$ 240.000 / R$ 20.000',
            'R$ 480.000 / R$ 40.000',
          ],
          ['DAS no Anexo V', 'R$ 3.225,00', 'R$ 6.975,00'],
          ['DAS no Anexo III', 'R$ 1.460,00', 'R$ 3.930,00'],
          ['Economia de DAS', 'R$ 1.765,00', 'R$ 3.045,00'],
          ['Folha mensal para 28%', 'R$ 5.600,00', 'R$ 11.200,00'],
          ['Custo extra de INSS e IRRF do sócio', 'R$ 666,56', 'R$ 2.668,89'],
          ['Economia líquida por mês', 'R$ 1.098,44', 'R$ 376,11'],
        ],
      },
    },
    {
      heading: 'Erros comuns e cuidados',
      paragraphs: [
        'O primeiro erro é raciocinar com a folha de um mês: o Fator R usa os 12 meses anteriores ao mês de apuração e é recalculado todo mês. O segundo é aumentar o pró-labore no fim do ano e esperar que o Fator R mude na hora. O terceiro é não separar, na contabilidade, o que é pró-labore e o que é distribuição de lucros. O quarto é esquecer que a empresa só entra nos anexos III ou V para as atividades previstas na lei.',
        'A receita informada precisa bater com as notas fiscais emitidas. Quem passa do limite anual do Simples (R$ 4,8 milhões) ou da faixa de sua atividade muda de regime ou de faixa. Aumentar o pró-labore também gera direitos previdenciários ao sócio, o que pode ser vantagem, mas a decisão deve considerar o fluxo de caixa.',
      ],
    },
    {
      heading: 'Quando procurar o contador',
      paragraphs: [
        'Procure um contador antes de mudar o pró-labore, para confirmar o enquadramento da sua atividade (CNAE), o anexo correto, o efeito do Fator R no ano e a conta dos tributos do sócio. A decisão envolve o INSS e o IRRF da pessoa física, e não só o DAS da empresa. Em caso de dúvida sobre o enquadramento, consulte também o Portal do Simples Nacional, da Receita Federal.',
      ],
    },
  ],
  faq: [
    {
      question: 'O Fator R é calculado todo mês?',
      answer:
        'Sim, é recalculado todo mês, com a folha e a receita dos 12 meses anteriores ao período de apuração. Por isso uma mudança no pró-labore demora a surtir efeito completo.',
    },
    {
      question: 'MEI tem Fator R?',
      answer: 'Não. O MEI paga valor fixo e não usa os anexos do Simples.',
    },
    {
      question: 'O pró-labore entra na folha do Fator R?',
      answer:
        'Sim, o pró-labore compõe a folha, junto com os salários e encargos. Por isso muitos sócios de empresas de serviços ajustam o pró-labore. Confirme com o contador o que a sua empresa pode contar.',
    },
    {
      question: 'Posso distribuir lucros no lugar de aumentar o pró-labore?',
      answer:
        'A distribuição de lucros não entra na folha do Fator R. Ela pode ter tratamento tributário diferente, que depende da contabilidade e da legislação do ano. Peça ao contador a conta completa.',
    },
    {
      question: 'E se o Fator R ficar abaixo de 28% em um mês?',
      answer:
        'O DAS daquele mês é calculado pelo Anexo V. Se o Fator R voltar a 28% ou mais nos meses seguintes, volta o Anexo III.',
    },
  ],
  sources: [
    {
      label: 'Lei Complementar 123/2006 — Simples Nacional',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm',
    },
    {
      label: 'Receita Federal — Simples Nacional',
    },
    {
      label: 'Comitê Gestor do Simples Nacional',
    },
  ],
} as const satisfies GuideDocument;
