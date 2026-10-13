import type { GuideDocument } from '../../types';

export const guideValeTransporteDesconto6 = {
  kind: 'guide',
  slug: 'vale-transporte-como-funciona-o-desconto-de-6',
  title:
    'Vale-transporte: como funciona o desconto de 6% e quanto a empresa paga',
  description:
    'Quanto é descontado do salário pelo vale-transporte, quando a empresa paga a diferença e o que muda em faltas, férias e home office.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['vale-transporte', 'desconto', 'trabalho', 'beneficios'],
  featuredCalculators: [
    'vale-transporte',
    'salario-liquido',
    'salario-por-hora',
  ],
  highlights: [
    {
      value: '6%',
      label: 'Teto do desconto',
      note: 'Calculado sobre o salário-base, sem adicionais.',
    },
    {
      value: 'R$ 144,00',
      label: 'Desconto de quem ganha R$ 2.400',
      note: 'Mesmo que o gasto com transporte seja maior.',
    },
    {
      value: 'R$ 236,00',
      label: 'Parte da empresa',
      note: 'No exemplo de R$ 380 de transporte por mês.',
    },
  ],
  sections: [
    {
      heading: 'Como o desconto de 6% funciona',
      paragraphs: [
        'O vale-transporte é um direito de quem usa transporte coletivo para ir e voltar do trabalho. A empresa antecipa o valor e desconta do empregado, no máximo, 6% do salário-base. Se o gasto com transporte for maior que esse limite, a diferença é da empresa. Se for menor, o desconto é só o que o empregado de fato usaria.',
        'A base de cálculo é o salário-base, sem horas extras, comissões ou adicionais. Por isso o desconto não sobe quando o contracheque do mês vem maior, e o benefício não tem INSS nem FGTS, porque não é salário.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 2.400 e transporte de R$ 380 por mês',
      paragraphs: [
        'O limite de 6% sobre R$ 2.400 é de R$ 144,00. Como o transporte custa R$ 380,00, o desconto é de R$ 144,00 e a empresa paga os R$ 236,00 restantes. É o caso mais comum de quem mora longe e usa mais de uma condução.',
      ],
      table: {
        caption: 'Quem paga o quê, salário de R$ 2.400',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['Custo mensal do transporte', 'Informado', 'R$ 380,00'],
          ['Teto de desconto do empregado', '6% de R$ 2.400', 'R$ 144,00'],
          ['Desconto aplicado', 'O menor dos dois valores', 'R$ 144,00'],
          ['Parte paga pela empresa', 'R$ 380 menos R$ 144', 'R$ 236,00'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: quando o transporte custa menos que 6%',
      paragraphs: [
        'Quem mora perto e gasta R$ 120,00 por mês com o mesmo salário de R$ 2.400 tem o desconto limitado ao gasto real, de R$ 120,00, e não aos R$ 144,00 do teto. Nesse caso a empresa não paga nada: o benefício sai inteiro do empregado, e só faz sentido pedir se for mais barato do que pagar a passagem avulsa.',
      ],
    },
    {
      heading: 'O que muda o valor e quando o vale não é devido',
      paragraphs: [
        'O vale só cobre os dias em que há deslocamento. Em férias, faltas e afastamentos não há entrega, e em trabalho remoto integral, em regra, ele não é devido. Quem trabalha em escala ou em jornada híbrida recebe a quantidade de passagens dos dias presenciais.',
        'O empregado precisa informar por escrito o endereço e os meios de transporte que usa e atualizar a empresa quando mudar. Quem não quiser o benefício pode recusar, mas precisa avisar a empresa e, depois, só volta a receber se pedir de novo.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'O erro mais frequente é calcular os 6% sobre o salário com adicionais, o que desconta mais que o permitido. Outro é a empresa descontar 6% cheios mesmo quando o gasto é menor, ou descontar do empregado que não usou o vale no mês.',
        'Também é comum esquecer que o vale não pode ser trocado por dinheiro como regra, e que a parte da empresa não deve aparecer como desconto no holerite. Compare o valor do desconto com o do holerite e peça correção se estiver acima de 6% do salário-base.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Se o desconto passar de 6%, se o vale deixar de ser entregue ou se a empresa descontar em meses sem deslocamento, peça a conferência ao RH com o holerite em mãos. Persistindo o problema, procure o sindicato da categoria ou o Ministério do Trabalho e Emprego.',
      ],
    },
  ],
  faq: [
    {
      question: 'O vale-transporte entra no cálculo do 13º e das férias?',
      answer:
        'Não. Ele não tem natureza salarial, então não incide INSS, FGTS nem reflexos em 13º e férias.',
    },
    {
      question: 'A empresa pode pagar o vale em dinheiro?',
      answer:
        'Como regra, não: a lei veda trocar o vale por dinheiro. A exceção é a falta de vales em estoque, caso em que a empresa deve pagar a diferença em dinheiro no mesmo mês.',
    },
    {
      question: 'Quem trabalha em home office recebe vale-transporte?',
      answer:
        'Em trabalho remoto integral, sem deslocamento, em regra não. No regime híbrido, o vale cobre apenas os dias presenciais.',
    },
    {
      question: 'O desconto de 6% é sobre o salário bruto ou líquido?',
      answer:
        'É sobre o salário-base bruto, sem adicionais como horas extras, comissões e gratificações.',
    },
    {
      question: 'Posso recusar o vale-transporte?',
      answer:
        'Sim. A recusa deve ser comunicada à empresa, e quem recusa não paga o desconto, mas também não recebe o benefício até pedir de novo.',
    },
  ],
  sources: [
    { label: 'Lei 7.418/1985: vale-transporte' },
    { label: 'Decreto 95.247/1987: regulamento do vale-transporte' },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
