import type { GuideDocument } from '../../types';

export const guideComoFuncionaODescontoDoInss = {
  kind: 'guide',
  slug: 'como-funciona-o-desconto-do-inss',
  title: 'Como funciona o desconto do INSS: faixas, teto e exemplos',
  description:
    'A contribuição do INSS é progressiva. Veja a tabela de 2026, a conta faixa por faixa para salários de R$ 2.200 e R$ 5.400 e por que ela não é 14% do total.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-30',
  updatedAt: '2026-10-02',
  tags: ['inss', 'previdencia', 'salario', 'descontos'],
  featuredCalculators: ['inss', 'salario-liquido', 'inss-autonomo'],
  highlights: [
    {
      value: '7,5% a 14%',
      label: 'Alíquotas por faixa',
      note: 'Cada parte do salário paga a sua.',
    },
    {
      value: 'R$ 8.475,55',
      label: 'Teto de contribuição',
      note: 'Acima dele o desconto não cresce.',
    },
    {
      value: 'R$ 988,09',
      label: 'Desconto máximo',
      note: 'Valor pago por quem ganha o teto ou mais.',
    },
  ],
  sections: [
    {
      heading: 'Como a tabela funciona',
      paragraphs: [
        'O INSS usa alíquotas progressivas por faixa, como o Imposto de Renda. A primeira parte do salário paga 7,5%, a seguinte 9%, depois 12% e, na última faixa, 14%. O desconto é a soma do que cada parte paga, e não uma alíquota única sobre o salário inteiro.',
      ],
      table: {
        caption: 'Tabela do INSS para empregados em 2026',
        columns: ['Faixa do salário', 'Alíquota'],
        rows: [
          ['Até R$ 1.621,00', '7,5%'],
          ['De R$ 1.621,01 a R$ 2.902,84', '9%'],
          ['De R$ 2.902,85 a R$ 4.354,27', '12%'],
          ['De R$ 4.354,28 a R$ 8.475,55', '14%'],
        ],
      },
    },
    {
      heading: 'Exemplo 1: salário de R$ 2.200',
      paragraphs: [
        'O salário passa da primeira faixa e termina na segunda. A primeira parte, de R$ 1.621,00, paga 7,5%. O que sobra, R$ 579,00 (R$ 2.200,00 − R$ 1.621,00), paga 9%. Nada chega à faixa de 12%.',
      ],
      table: {
        caption: 'INSS de quem ganha R$ 2.200',
        columns: ['Faixa', 'Parte do salário', 'Conta', 'Valor'],
        rows: [
          ['1ª (7,5%)', 'R$ 1.621,00', '1.621,00 × 7,5%', 'R$ 121,57'],
          ['2ª (9%)', 'R$ 579,00', '579,00 × 9%', 'R$ 52,11'],
          ['Total', '', '', 'R$ 173,69'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: salário de R$ 5.400, quatro faixas',
      paragraphs: [
        'Aqui o salário atravessa todas as faixas. A parte que passa de R$ 4.354,27, R$ 1.045,73, paga 14%. O desconto de R$ 557,51 equivale a 10,32% do salário, bem menos que os 14% que muita gente imagina.',
      ],
      table: {
        caption: 'INSS de quem ganha R$ 5.400',
        columns: ['Faixa', 'Parte do salário', 'Valor'],
        rows: [
          ['1ª (7,5%)', 'R$ 1.621,00', 'R$ 121,57'],
          ['2ª (9%)', 'R$ 1.281,84', 'R$ 115,37'],
          ['3ª (12%)', 'R$ 1.451,43', 'R$ 174,17'],
          ['4ª (14%)', 'R$ 1.045,73', 'R$ 146,40'],
          ['Total', '', 'R$ 557,51'],
        ],
      },
    },
    {
      heading: 'A alíquota efetiva e o teto',
      paragraphs: [
        'A alíquota efetiva, o percentual do salário que realmente vai para o INSS, cresce devagar e nunca chega a 14%. O desconto para no teto: quem ganha R$ 8.475,55 ou mais paga R$ 988,09 (11,66% de R$ 8.475,55), e quem ganha R$ 15.000 paga os mesmos R$ 988,09.',
      ],
      table: {
        caption: 'Desconto de INSS e percentual efetivo',
        columns: ['Salário', 'INSS', 'Percentual efetivo'],
        rows: [
          ['R$ 1.621,00 (mínimo)', 'R$ 121,57', '7,50%'],
          ['R$ 3.000,00', 'R$ 248,60', '8,29%'],
          ['R$ 4.000,00', 'R$ 368,60', '9,21%'],
          ['R$ 5.000,00', 'R$ 501,51', '10,03%'],
          ['R$ 8.475,55 ou mais', 'R$ 988,09', '11,66% ou menos'],
        ],
      },
    },
    {
      heading: 'Passo a passo para conferir o seu desconto',
      paragraphs: [
        'Passo 1: pegue no holerite a base do INSS, que pode ser maior que o salário-base se houver horas extras ou comissões. Passo 2: separe essa base nas faixas da tabela, limitando-a ao teto de R$ 8.475,55. Passo 3: multiplique cada parte pela sua alíquota e some. Passo 4: compare com a linha INSS do holerite.',
        'Um erro comum é multiplicar o salário todo pela alíquota da última faixa atingida. Com R$ 5.400, isso daria 14% × R$ 5.400 = R$ 756,00, quase R$ 200 a mais que o desconto correto de R$ 557,51. Outro é esquecer que um aumento de salário eleva o desconto só sobre a parte nova: subir de R$ 5.400 para R$ 5.500 aumenta o INSS em R$ 14,00, e não em 10,32% do aumento.',
      ],
    },
    {
      heading: 'O que entra na base, dois empregos e autônomos',
      paragraphs: [
        'A base é o salário de contribuição: salário, horas extras, comissões, adicional noturno, insalubridade e outros valores pagos pelo trabalho. Itens indenizatórios, como o aviso prévio indenizado, ficam de fora. O 13º tem desconto próprio, calculado à parte do salário de dezembro, e as férias têm o seu.',
        'Quem tem dois empregos paga INSS em cada um, mas a soma dos descontos fica limitada ao teto. Informe o RH de cada empresa sobre o outro salário para o desconto ser ajustado e, se ainda houver cobrança a mais, peça revisão ao RH ou procure o INSS pelo Meu INSS ou pela Central 135.',
        'Quem não tem carteira assinada escolhe como contribuir. No plano de 20%, a contribuição incide sobre a renda entre R$ 1.621 e R$ 8.475,55 (de R$ 324,20 a R$ 1.695,11). No plano de 11% do salário mínimo, a contribuição é de R$ 178,31, e no de 5%, para MEI e facultativo de baixa renda, é de R$ 81,05. Os planos reduzidos têm restrições, como não contar tempo para aposentadoria por tempo de contribuição sem complementação.',
      ],
    },
    {
      heading: 'Para que serve e quando procurar ajuda',
      paragraphs: [
        'A contribuição dá direito a aposentadoria, auxílio por incapacidade, salário-maternidade e pensão por morte, cada um com exigências próprias. A empresa também recolhe a parte patronal, que não sai do seu salário. Para conferir os meses recolhidos, use o Meu INSS; se faltar contribuição que foi descontada em folha, procure o RH e, em seguida, o INSS.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem ganha acima do teto paga mais INSS?',
      answer: 'Não. A contribuição para no valor máximo de R$ 988,09.',
    },
    {
      question: 'O INSS é descontado das férias e do 13º?',
      answer:
        'Sim. O 13º e as férias têm desconto próprio. O abono pecuniário (venda de 10 dias) em regra fica de fora.',
    },
    {
      question: 'Por que o desconto do holerite é diferente da calculadora?',
      answer:
        'Provavelmente porque a base inclui horas extras, comissões ou adicionais além do salário-base. Confira a base de cálculo do INSS no holerite.',
    },
    {
      question: 'O INSS descontado vira aposentadoria?',
      answer:
        'Conta como contribuição para aposentadoria e outros benefícios, mas o valor e as regras dependem do tempo de contribuição e da média salarial.',
    },
    {
      question: 'Como confirmar que a empresa recolheu meu INSS?',
      answer:
        'Consulte o extrato de contribuições (CNIS) no Meu INSS e compare com os meses trabalhados.',
    },
  ],
  sources: [
    {
      label: 'INSS — tabela de contribuição mensal de 2026',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    },
    {
      label: 'Lei 8.212/1991 — custeio da Seguridade Social',
    },
    {
      label: 'Meu INSS',
      url: 'https://meu.inss.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
