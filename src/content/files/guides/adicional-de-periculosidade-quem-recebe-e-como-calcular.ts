import type { GuideDocument } from '../../types';

export const guideAdicionalPericulosidade = {
  kind: 'guide',
  slug: 'adicional-de-periculosidade-quem-recebe-e-como-calcular',
  title: 'Adicional de periculosidade: quem recebe e como calcular os 30%',
  description:
    'Quem tem direito ao adicional de periculosidade, como calcular os 30% sobre o salário-base e quanto ele muda no 13º, nas férias e no FGTS.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['periculosidade', 'adicional', 'trabalho', 'direitos'],
  featuredCalculators: ['periculosidade', 'insalubridade', 'salario-liquido'],
  highlights: [
    {
      value: '30%',
      label: 'Adicional sobre o salário-base',
      note: 'Sem gratificações, prêmios ou participação nos lucros.',
    },
    {
      value: 'R$ 900,00',
      label: 'Adicional de quem ganha R$ 3.000',
      note: 'Soma ao salário todo mês.',
    },
    {
      value: 'R$ 12.900,00',
      label: 'Efeito anual bruto',
      note: 'Com 13º e férias com um terço.',
    },
  ],
  sections: [
    {
      heading: 'Quem tem direito à periculosidade',
      paragraphs: [
        'O adicional de periculosidade é pago a quem trabalha em contato permanente com inflamáveis, explosivos, energia elétrica de alta exposição, segurança pessoal ou patrimonial e, por lei, com o uso de motocicleta no trabalho. O enquadramento depende de laudo e das regras da Norma Regulamentadora 16 (NR-16).',
        'Não basta a função ter fama de perigosa: é a atividade real, comprovada em perícia, que gera o direito. Quem trabalha de forma intermitente, mas habitual, na área de risco também pode receber; já a exposição eventual, por tempo extremamente reduzido, em geral não gera o adicional.',
      ],
    },
    {
      heading: 'Como calcular: 30% sobre o salário-base',
      paragraphs: [
        'O adicional é de 30% sobre o salário-base, sem acréscimos como gratificações, prêmios e participação nos lucros. Quem ganha R$ 3.000,00 de salário-base recebe R$ 900,00 de periculosidade, e o contracheque passa a mostrar R$ 3.900,00 de remuneração mensal antes dos descontos.',
        'Como o adicional é habitual, ele entra na base de outros cálculos: horas extras, 13º, férias com um terço, aviso prévio e FGTS. É por isso que a diferença no fim do ano é bem maior do que 12 parcelas de R$ 900,00.',
      ],
      table: {
        caption: 'Reflexos anuais do adicional de R$ 900,00 por mês',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['12 meses de adicional', '12 × R$ 900,00', 'R$ 10.800,00'],
          ['Reflexo no 13º', '1 × R$ 900,00', 'R$ 900,00'],
          ['Reflexo nas férias com 1/3', 'R$ 900,00 × 4/3', 'R$ 1.200,00'],
          ['Total bruto no ano', '', 'R$ 12.900,00'],
          ['FGTS sobre o total', '8%', 'R$ 1.032,00'],
        ],
      },
    },
    {
      heading: 'Tabela: periculosidade por faixa de salário',
      paragraphs: [
        'A tabela mostra o adicional de 30% para quatro salários-base, a remuneração mensal com o adicional, o efeito de um ano inteiro (12 meses mais 13º e férias com um terço) e o FGTS que a empresa deposita sobre esse total.',
        'Como o adicional cresce com o salário, quem ganha mais recebe uma diferença maior em cada reflexo. Para salários acima do mínimo, a periculosidade costuma pagar mais que a insalubridade de grau máximo.',
      ],
      table: {
        caption: 'Efeito do adicional de 30% por salário-base',
        columns: [
          'Salário-base',
          'Adicional mensal',
          'Remuneração com adicional',
          'Efeito anual bruto',
          'FGTS no ano',
        ],
        rows: [
          [
            'R$ 2.000,00',
            'R$ 600,00',
            'R$ 2.600,00',
            'R$ 8.600,00',
            'R$ 688,00',
          ],
          [
            'R$ 3.000,00',
            'R$ 900,00',
            'R$ 3.900,00',
            'R$ 12.900,00',
            'R$ 1.032,00',
          ],
          [
            'R$ 4.000,00',
            'R$ 1.200,00',
            'R$ 5.200,00',
            'R$ 17.200,00',
            'R$ 1.376,00',
          ],
          [
            'R$ 6.000,00',
            'R$ 1.800,00',
            'R$ 7.800,00',
            'R$ 25.800,00',
            'R$ 2.064,00',
          ],
        ],
      },
    },
    {
      heading: 'Periculosidade e hora extra',
      paragraphs: [
        'O adicional entra na base da hora extra. Com salário de R$ 3.000,00 e adicional de R$ 900,00, a base mensal é de R$ 3.900,00. Dividindo por 220 horas, a hora normal vale R$ 17,73 e a hora extra com 50% vale R$ 26,59. Sem o adicional na base, a hora extra seria de R$ 20,45, o que mostra o tamanho da diferença.',
        'Por isso, quem trabalha com periculosidade e faz hora extra deve conferir se o holerite usa o salário com adicional como base. É um dos erros mais comuns de cálculo e pode ser cobrado com os valores retroativos.',
      ],
    },
    {
      heading: 'Quais atividades costumam ser reconhecidas',
      paragraphs: [
        'A lista de atividades perigosas vem da CLT e da NR-16: trabalho com explosivos e inflamáveis, energia elétrica em condições de risco, segurança pessoal ou patrimonial exposta a roubos e outras violências físicas, e trabalho com motocicleta como instrumento da função. O reconhecimento depende de perícia, e não do cargo.',
        'Se a sua rotina se encaixa em uma delas e o holerite não traz o adicional, peça o laudo do setor ao RH. Quem já recebe o adicional deve guardar os holerites, pois eles servem de prova se a empresa deixar de pagar sem laudo novo.',
      ],
    },
    {
      heading: 'Periculosidade ou insalubridade: qual paga mais',
      paragraphs: [
        'Com o salário mínimo de R$ 1.621,00 como base, a insalubridade de grau máximo (40%) paga R$ 648,40. A periculosidade de quem ganha R$ 3.000,00 paga R$ 900,00. Para salários acima do mínimo, a periculosidade costuma ser mais vantajosa.',
        'A CLT manda o empregado escolher entre os dois quando ambos se aplicam. A possibilidade de acumular os adicionais é discutida na Justiça do Trabalho, então vale confirmar com o sindicato da sua categoria antes de pedir.',
      ],
    },
    {
      heading: 'Como conferir o adicional no holerite',
      paragraphs: [
        'Faça três contas simples. Divida o adicional pago pelo salário-base: o resultado deve ser 30%. Confira se a linha de periculosidade aparece em todos os meses, inclusive nos meses de férias e no 13º. E veja se as horas extras são calculadas sobre o salário somado ao adicional.',
        'Se alguma dessas contas não fechar, peça por escrito a explicação ao RH, anexando os holerites. Em meses de afastamento por doença, o adicional pode deixar de ser pago porque não há exposição ao risco, e essa regra deve estar clara na empresa.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'O erro mais comum é calcular os 30% sobre o salário com gratificações e prêmios, o que paga a mais do que a lei exige, ou sobre o salário mínimo, o que paga a menos. Outro é deixar de incluir o adicional nas horas extras e no 13º.',
        'Também é frequente a empresa suspender o adicional ao mudar o empregado de setor sem nova perícia. Se o risco continua, o direito continua; se acabou, a empresa deve provar a mudança com um laudo.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Se você trabalha em uma das atividades de risco e não recebe adicional, peça ao RH o laudo do seu setor. Sem resposta, procure o sindicato da categoria ou o Ministério do Trabalho e Emprego, e guarde holerites e registros de escala para comprovar o tempo de exposição.',
      ],
    },
  ],
  faq: [
    {
      question: 'A periculosidade é calculada sobre o salário bruto?',
      answer:
        'É calculada sobre o salário-base, sem gratificações, prêmios e participação nos lucros.',
    },
    {
      question: 'Quem usa moto no trabalho tem direito ao adicional?',
      answer:
        'Sim, em atividades como entrega e transporte de mercadorias, desde que a moto seja instrumento de trabalho da função. O motorista que só se desloca ao serviço não se enquadra automaticamente.',
    },
    {
      question: 'A periculosidade entra no 13º e nas férias?',
      answer:
        'Sim. Por ser habitual, integra a remuneração e reflete em 13º, férias com um terço, FGTS e aviso prévio.',
    },
    {
      question:
        'Quem trabalha poucas horas na área de risco recebe o adicional?',
      answer:
        'Se o contato é intermitente, mas habitual, há direito. Se é eventual e por tempo extremamente reduzido, em geral não.',
    },
    {
      question: 'O adicional some se eu mudar de setor?',
      answer:
        'Ele só deixa de ser devido se o risco acabar. A empresa deve comprovar com laudo atualizado.',
    },
  ],
  sources: [
    { label: 'CLT: art. 193 (periculosidade)' },
    { label: 'NR-16: atividades e operações perigosas' },
    { label: 'Lei 12.997/2014: periculosidade para motociclistas' },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
