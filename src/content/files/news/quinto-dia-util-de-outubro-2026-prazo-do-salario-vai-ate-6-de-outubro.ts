import type { NewsDocument } from '../../types';

export const newsQuintoDiaUtilDeOutubro2026 = {
  kind: 'news',
  slug: 'quinto-dia-util-de-outubro-2026-prazo-do-salario-vai-ate-6-de-outubro',
  title:
    'Quinto dia útil de outubro cai em 6/10: é o prazo máximo para o salário de setembro',
  description:
    'A CLT dá até o quinto dia útil para pagar o salário do mês anterior. Em outubro de 2026, o limite é terça-feira, 6. Veja a contagem e o que fazer se atrasar.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-04',
  updatedAt: '2026-10-04',
  tags: ['salario', 'clt', 'holerite', 'descontos', 'trabalho', 'direitos'],
  featuredCalculators: ['salario-liquido', 'inss', 'irrf'],
  highlights: [
    {
      value: '06/10',
      label: 'Prazo máximo do salário de setembro',
      note: 'Terça-feira, quinto dia útil de outubro de 2026.',
    },
    {
      value: '5º dia útil',
      label: 'Limite previsto no art. 459 da CLT',
      note: 'Vale para quem recebe salário por mês.',
    },
    {
      value: 'R$ 2.751,40',
      label: 'Líquido de um salário de R$ 3.000',
      note: 'Depois de R$ 248,60 de INSS, sem IRRF.',
    },
  ],
  sections: [
    {
      heading: 'Até quando o salário de setembro deve ser pago?',
      paragraphs: [
        'A CLT estabelece que, quando o salário é combinado por mês, o pagamento deve ser feito, no máximo, até o quinto dia útil do mês seguinte ao trabalhado. O trecho consta do art. 459, parágrafo 1º. Para o salário de setembro de 2026, o quinto dia útil de outubro é terça-feira, 6 de outubro.',
        'Esse é o limite legal, e não a data obrigatória. Muitas empresas pagam antes, no último dia do mês ou no dia 5, e o contrato de trabalho ou uma convenção coletiva pode fixar uma data anterior. Se a data combinada for dia 1º ou dia 5, é ela que vale. O quinto dia útil só funciona como teto.',
      ],
    },
    {
      heading: 'Como contar o quinto dia útil de outubro',
      paragraphs: [
        'Para o pagamento de salário, a contagem segue a prática da fiscalização trabalhista: o sábado conta como dia útil, enquanto domingos e feriados ficam de fora. Por isso, o quinto dia útil não é o quinto dia da semana comercial, e sim o quinto dia que não seja domingo nem feriado.',
        'Em outubro de 2026, o dia 1º cai numa quinta-feira e o domingo, dia 4, precisa ser pulado. Não há feriado nacional entre os dias 1º e 6. A contagem fica assim:',
      ],
      table: {
        caption: 'Contagem dos dias úteis de outubro de 2026 (sábado conta)',
        columns: ['Data', 'Dia da semana', 'Dia útil'],
        rows: [
          ['1º de outubro', 'Quinta-feira', '1º'],
          ['2 de outubro', 'Sexta-feira', '2º'],
          ['3 de outubro', 'Sábado', '3º'],
          ['4 de outubro', 'Domingo', 'Não conta'],
          ['5 de outubro', 'Segunda-feira', '4º'],
          ['6 de outubro', 'Terça-feira', '5º (prazo final)'],
        ],
      },
    },
    {
      heading: 'O que já deve estar na conta e quanto vem líquido',
      paragraphs: [
        'O valor que chega à conta é o salário líquido, isto é, o bruto menos os descontos legais e os combinados, como INSS, imposto de renda retido na fonte, vale-transporte e plano de saúde. Quem confere o holerite deve olhar primeiro o bruto e depois cada desconto.',
        'Um exemplo com salário bruto de R$ 3.000, sem dependentes e sem outros descontos: o INSS é de R$ 248,60, o imposto de renda retido é de R$ 0,00 e o líquido fica em R$ 2.751,40. Se houver vale-transporte, plano de saúde ou pensão alimentícia, o líquido será menor, e essas diferenças aparecem no holerite.',
        'O desconto de INSS segue as alíquotas progressivas de 2026, com teto de contribuição em R$ 8.475,55. Já o imposto de renda na fonte passou a ser zerado para quem tem rendimento tributável de até R$ 5.000 por mês, conforme explicado em outra notícia do portal. Para simular o seu caso, use a calculadora de salário líquido.',
      ],
    },
    {
      heading: 'O que acontece se o salário atrasar',
      paragraphs: [
        'Quando o pagamento passa do quinto dia útil, a Súmula 381 do Tribunal Superior do Trabalho prevê a incidência de correção monetária sobre o valor devido, a partir do dia 1º do mês seguinte ao da prestação dos serviços. Em outras palavras, o salário pago até o quinto dia útil não leva correção, e o pago depois dele leva.',
        'Além disso, a fiscalização trabalhista pode autuar o empregador que descumpre o prazo, e o empregado pode buscar orientação sobre como cobrar os valores. O atraso reiterado de salário pode ser discutido como falta grave do empregador, hipótese prevista no art. 483 da CLT, que dá ao trabalhador a possibilidade de pedir a rescisão indireta. Cada caso depende dos fatos e é decidido pela Justiça do Trabalho.',
        'Quem não recebeu até o prazo pode começar guardando os comprovantes: holerite, extrato bancário, mensagens e o contrato. Também é possível procurar o sindicato da categoria ou o atendimento do Ministério do Trabalho e Emprego, que orientam sobre os próximos passos.',
      ],
    },
    {
      heading: 'Como conferir se o desconto do holerite está certo',
      paragraphs: [
        'O prazo do pagamento é um bom momento para conferir o holerite. Compare o bruto com o contrato, veja se as horas extras, o adicional noturno e o DSR foram incluídos e confirme as faixas de INSS e de IRRF. O guia sobre como entender o holerite e o guia de cálculo do salário líquido mostram cada linha.',
        'Se o valor depositado for diferente do esperado, peça o holerite ao setor de pessoal. A empresa deve informar como chegou ao valor líquido. Diferenças pequenas costumam vir de arredondamento ou de descontos combinados, como vale-transporte, e diferenças grandes merecem questionamento por escrito.',
      ],
    },
  ],
  faq: [
    {
      question: 'Sábado conta como dia útil para o pagamento do salário?',
      answer:
        'Sim. Para o prazo do quinto dia útil, a prática da fiscalização trabalhista conta o sábado e exclui domingos e feriados. Em outubro de 2026, a contagem termina na terça-feira, 6.',
    },
    {
      question: 'O dinheiro precisa estar na minha conta até o dia 6?',
      answer:
        'O prazo legal é para o pagamento do salário mensal. Quem recebe por depósito deve ter o valor disponível na conta até o limite. Se o contrato ou a convenção coletiva fixar data anterior, vale a data anterior.',
    },
    {
      question: 'Vale também para quem recebe por semana ou por quinzena?',
      answer:
        'Não. O limite do quinto dia útil vale para o salário estipulado por mês. Pagamentos por semana ou quinzena seguem o que foi combinado no contrato.',
    },
  ],
  sources: [
    {
      label: 'CLT (Decreto-Lei 5.452/1943): art. 459, parágrafo 1º, e art. 483',
    },
    {
      label:
        'Tribunal Superior do Trabalho: Súmula 381 (correção monetária do salário)',
    },
    { label: 'INSS: tabela de contribuição mensal de 2026' },
  ],
} as const satisfies NewsDocument;
