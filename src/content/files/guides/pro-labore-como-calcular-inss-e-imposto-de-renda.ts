import type { GuideDocument } from '../../types';

export const guideProLaboreInssIr = {
  kind: 'guide',
  slug: 'pro-labore-como-calcular-inss-e-imposto-de-renda',
  title: 'Pró-labore: como calcular o INSS de 11% e o Imposto de Renda',
  description:
    'O que é o pró-labore, qual o valor mínimo, como calcular o INSS de 11% e o IRRF de 2026 e quanto sobra líquido para o sócio, com exemplos em reais.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['pro-labore', 'inss', 'negocios', 'socio'],
  featuredCalculators: ['pro-labore', 'inss-autonomo', 'fator-r'],
  highlights: [
    {
      value: '11%',
      label: 'INSS do sócio sobre o pró-labore',
      note: 'Limitado ao teto, que dá R$ 932,31 no máximo.',
    },
    {
      value: 'R$ 1.621,00',
      label: 'Pró-labore mínimo',
      note: 'Um salário mínimo, em regra.',
    },
    {
      value: 'R$ 4.959,97',
      label: 'Líquido de um pró-labore de R$ 6.000',
      note: 'Depois de INSS e IRRF, sem dependentes.',
    },
  ],
  sections: [
    {
      heading: 'O que é o pró-labore e por que ele existe',
      paragraphs: [
        'O pró-labore é a remuneração do sócio ou administrador que trabalha na empresa. Ele funciona como um salário: tem INSS e Imposto de Renda, entra no holerite e conta para a aposentadoria. A distribuição de lucros é outra coisa e não substitui o pró-labore.',
        'Em regra, o valor mínimo é um salário mínimo, R$ 1.621,00 em 2026. É esse valor que garante ao sócio a contribuição ao INSS e a cobertura de benefícios como aposentadoria, auxílio por incapacidade e salário-maternidade.',
      ],
    },
    {
      heading: 'Como calcular: INSS de 11% e IRRF',
      paragraphs: [
        'O sócio contribui com 11% sobre o pró-labore, entre o piso de um salário mínimo e o teto do INSS, de R$ 8.475,55. No teto, o desconto máximo é de R$ 932,31. Depois do INSS, o Imposto de Renda é calculado pela tabela mensal de 2026, com redução por dependente e a redução de imposto da Lei 15.270/2025 para rendimentos até R$ 7.350.',
        'As empresas fora do Simples Nacional pagam também 20% de INSS patronal sobre o pró-labore. No Simples, esse custo em regra já está dentro do DAS, exceto no Anexo IV, em que o INSS patronal é pago à parte.',
      ],
    },
    {
      heading: 'Exemplos em reais',
      paragraphs: [
        'Com o pró-labore mínimo de R$ 1.621,00, o INSS é de R$ 178,31 e não há Imposto de Renda, deixando R$ 1.442,69 líquidos. Com R$ 3.000,00, o INSS é de R$ 330,00 e o imposto também é zero. Com R$ 6.000,00, o INSS é de R$ 660,00 e o IRRF é de R$ 380,03.',
      ],
      table: {
        caption: 'Pró-labore líquido em 2026, sem dependentes',
        columns: ['Pró-labore bruto', 'INSS de 11%', 'IRRF', 'Líquido'],
        rows: [
          ['R$ 1.621,00', 'R$ 178,31', 'R$ 0,00', 'R$ 1.442,69'],
          ['R$ 3.000,00', 'R$ 330,00', 'R$ 0,00', 'R$ 2.670,00'],
          ['R$ 6.000,00', 'R$ 660,00', 'R$ 380,03', 'R$ 4.959,97'],
        ],
      },
    },
    {
      heading: 'Tabela: pró-labore, descontos e INSS patronal',
      paragraphs: [
        'A tabela usa o motor da calculadora para quatro valores de pró-labore, sem dependentes. A última coluna mostra o INSS patronal de 20%, que a empresa paga além do pró-labore quando está fora do Simples Nacional, e que não sai do bolso do sócio.',
        'No teto do INSS, o desconto do sócio para de crescer, mas o IRRF continua subindo com o valor do pró-labore. Já o INSS patronal é calculado sobre o valor total, e por isso pesa mais no caixa da empresa em pró-labores altos.',
      ],
      table: {
        caption: 'Pró-labore líquido e custo para a empresa',
        columns: [
          'Pró-labore',
          'INSS de 11%',
          'IRRF',
          'Líquido do sócio',
          'INSS patronal de 20%',
        ],
        rows: [
          ['R$ 2.000,00', 'R$ 220,00', 'R$ 0,00', 'R$ 1.780,00', 'R$ 400,00'],
          ['R$ 4.000,00', 'R$ 440,00', 'R$ 0,00', 'R$ 3.560,00', 'R$ 800,00'],
          [
            'R$ 8.000,00',
            'R$ 880,00',
            'R$ 1.049,28',
            'R$ 6.070,72',
            'R$ 1.600,00',
          ],
          [
            'R$ 10.000,00',
            'R$ 932,31',
            'R$ 1.584,89',
            'R$ 7.482,80',
            'R$ 2.000,00',
          ],
        ],
      },
    },
    {
      heading: 'Exemplo: pró-labore mais distribuição de lucros',
      paragraphs: [
        'Imagine uma empresa que gera R$ 15.000,00 de resultado disponível no mês. O sócio retira R$ 3.000,00 de pró-labore, com INSS de R$ 330,00 e IRRF de R$ 0,00, e R$ 12.000,00 de distribuição de lucros, que fica abaixo do limite de R$ 50 mil por mês e, nesse exemplo, não tem retenção.',
        'O sócio recebe R$ 14.670,00 no total, sendo R$ 2.670,00 do pró-labore e R$ 12.000,00 de lucros. Só o pró-labore gera contribuição ao INSS, e é ele que forma a base da aposentadoria e dos benefícios. A distribuição de lucros só pode ser feita se a empresa tiver lucro apurado na contabilidade.',
      ],
    },
    {
      heading: 'Pró-labore e aposentadoria',
      paragraphs: [
        'A contribuição do sócio entra no cálculo dos benefícios do INSS, e quanto maior o pró-labore, maior a base usada, até o teto. Quem contribui só sobre o salário mínimo terá benefícios próximos do mínimo, e quem contribui mais terá benefícios maiores, no limite do teto.',
        'Antes de reduzir o pró-labore para economizar imposto, compare a economia de hoje com o benefício que o sócio terá no futuro. Vale ainda lembrar que o INSS de 11% do pró-labore é uma contribuição obrigatória, e a fiscalização pode cobrar a diferença se o valor for abaixo do mínimo.',
      ],
    },
    {
      heading: 'Quanto pró-labore retirar',
      paragraphs: [
        'Um pró-labore maior reduz o lucro disponível e aumenta o INSS, mas também melhora a aposentadoria e a base de benefícios. Um pró-labore menor economiza imposto agora, mas pode reduzir benefícios e, no Simples Nacional, mexer no Fator R, que usa a folha de pagamentos para definir se a empresa paga pelo Anexo III ou pelo V.',
        'A distribuição de lucros também passou a ter regras próprias em 2026: pela Lei 15.270/2025, quando a mesma empresa paga mais de R$ 50 mil em um mês a uma pessoa física, há retenção de 10% do Imposto de Renda. A conta completa entre pró-labore e lucros depende do regime da empresa e deve ser feita com o contador.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'O erro mais frequente é não pagar pró-labore e retirar tudo como lucro, o que deixa o sócio sem contribuição ao INSS. Outros são pagar abaixo do salário mínimo, esquecer o INSS patronal fora do Simples e misturar a conta pessoal com a da empresa.',
        'Também é comum o sócio com mais de um vínculo ultrapassar o teto do INSS sem perceber. A soma das contribuições é limitada ao teto, e o excesso pode ser restituído quando a contribuição passa do limite.',
      ],
    },
    {
      heading: 'Quando procurar o contador',
      paragraphs: [
        'Procure o contador para definir o pró-labore ideal, calcular o Fator R, organizar a distribuição de lucros e emitir o recibo de pagamento. O cálculo desta página é uma estimativa do pró-labore líquido, sem outras retenções.',
      ],
    },
  ],
  faq: [
    {
      question: 'O pró-labore tem valor mínimo?',
      answer:
        'Em regra, um salário mínimo, R$ 1.621,00 em 2026. É a base mínima de contribuição do sócio ao INSS.',
    },
    {
      question: 'Quanto é o INSS sobre o pró-labore?',
      answer:
        'O sócio paga 11%, entre o salário mínimo e o teto do INSS. No teto, o máximo é de R$ 932,31.',
    },
    {
      question: 'Pró-labore paga Imposto de Renda?',
      answer:
        'Sim, pela tabela mensal progressiva de 2026, depois de descontar o INSS e os dependentes. Até R$ 5.000, a redução da Lei 15.270/2025 zera o imposto.',
    },
    {
      question: 'Posso retirar apenas lucros, sem pró-labore?',
      answer:
        'A distribuição de lucros não substitui o pró-labore. Sem ele, o sócio que trabalha na empresa fica sem contribuição ao INSS.',
    },
    {
      question: 'O pró-labore influencia o Fator R?',
      answer:
        'Sim. A folha de pagamentos, que inclui o pró-labore, entra no cálculo do Fator R do Simples Nacional.',
    },
  ],
  sources: [
    { label: 'Lei 8.212/1991: custeio da Previdência Social' },
    { label: 'Lei 15.270/2025: Imposto de Renda de pessoas físicas' },
    { label: 'Lei Complementar 123/2006: Simples Nacional' },
    {
      label: 'Receita Federal: tabela do IRRF de 2026',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    },
  ],
} as const satisfies GuideDocument;
