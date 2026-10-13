import type { GuideDocument } from '../../types';

export const guideAdicionalInsalubridade = {
  kind: 'guide',
  slug: 'adicional-de-insalubridade-como-calcular-os-graus',
  title: 'Adicional de insalubridade: como calcular os graus de 10%, 20% e 40%',
  description:
    'Quem tem direito à insalubridade, qual é a base de cálculo, quanto vale cada grau e como o adicional reflete em 13º, férias e FGTS.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['insalubridade', 'adicional', 'trabalho', 'direitos'],
  featuredCalculators: ['insalubridade', 'periculosidade', 'salario-liquido'],
  highlights: [
    {
      value: '10%, 20%, 40%',
      label: 'Graus do adicional',
      note: 'Mínimo, médio e máximo, conforme o laudo.',
    },
    {
      value: 'R$ 324,20',
      label: 'Grau médio hoje',
      note: '20% do salário mínimo de R$ 1.621.',
    },
    {
      value: 'R$ 648,40',
      label: 'Grau máximo hoje',
      note: '40% do salário mínimo de R$ 1.621.',
    },
  ],
  sections: [
    {
      heading: 'O que é a insalubridade e quem tem direito',
      paragraphs: [
        'Insalubridade é o adicional pago a quem trabalha exposto a agentes nocivos à saúde, como ruído, calor, agentes químicos e biológicos, acima dos limites previstos na Norma Regulamentadora 15 (NR-15). O direito não nasce da função em si, e sim da exposição comprovada por laudo técnico (perícia).',
        'Se a empresa fornece equipamento de proteção que elimina o risco e o empregado o usa, o adicional deixa de ser devido. Por isso o laudo precisa dizer o agente, o tempo de exposição e o grau, e deve ser atualizado quando as condições mudam.',
      ],
    },
    {
      heading: 'Como calcular: grau e base de cálculo',
      paragraphs: [
        'O adicional é de 10% (grau mínimo), 20% (grau médio) ou 40% (grau máximo). A base de cálculo é, em regra, o salário mínimo, salvo se a convenção coletiva, o contrato ou uma norma da categoria definir outra base, como o salário-base.',
        'Com o salário mínimo de R$ 1.621,00, o grau mínimo paga R$ 162,10, o médio R$ 324,20 e o máximo R$ 648,40 por mês. O valor entra no contracheque como adicional e soma ao salário, mas não muda a base usada em outros cálculos.',
      ],
      table: {
        caption: 'Insalubridade sobre o salário mínimo de R$ 1.621,00',
        columns: ['Grau', 'Percentual', 'Adicional mensal'],
        rows: [
          ['Mínimo', '10%', 'R$ 162,10'],
          ['Médio', '20%', 'R$ 324,20'],
          ['Máximo', '40%', 'R$ 648,40'],
        ],
      },
    },
    {
      heading: 'Exemplo: o efeito do grau médio em um ano',
      paragraphs: [
        'O adicional habitual integra a remuneração e reflete em 13º, férias com um terço e FGTS. Com o grau médio (R$ 324,20 por mês), o efeito em um ano fica próximo de R$ 4.646,87 brutos, mais cerca de R$ 371,75 de FGTS depositados pela empresa.',
      ],
      table: {
        caption: 'Reflexos anuais do adicional de R$ 324,20 por mês',
        columns: ['Item', 'Cálculo', 'Valor'],
        rows: [
          ['12 meses de adicional', '12 × R$ 324,20', 'R$ 3.890,40'],
          ['Reflexo no 13º', '1 × R$ 324,20', 'R$ 324,20'],
          ['Reflexo nas férias com 1/3', 'R$ 324,20 × 4/3', 'R$ 432,27'],
          ['Total bruto no ano', '', 'R$ 4.646,87'],
          ['FGTS sobre o total', '8%', 'R$ 371,75'],
        ],
      },
    },
    {
      heading: 'Insalubridade e periculosidade juntas',
      paragraphs: [
        'Pela CLT, quem tem direito aos dois adicionais escolhe o mais vantajoso, e a possibilidade de acumular os dois é discutida na Justiça do Trabalho. Como a periculosidade é de 30% sobre o salário-base e a insalubridade incide em regra sobre o salário mínimo, para salários mais altos a periculosidade costuma pagar mais.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'O erro mais frequente é calcular a insalubridade sobre o salário-base quando a norma da categoria mantém o salário mínimo, ou o contrário. Outros são esquecer os reflexos em 13º e férias, deixar de pagar quando o laudo está vencido e pagar o grau mínimo para quem tem laudo de grau médio.',
        'Também é comum o adicional sumir do holerite quando o empregado muda de setor sem nova perícia. Se houver mudança de local ou de função, peça cópia do laudo atualizado.',
      ],
    },
    {
      heading: 'Quando procurar o RH ou o sindicato',
      paragraphs: [
        'Se você trabalha em ambiente com ruído, calor, agentes químicos ou biológicos e não recebe adicional, peça ao RH o laudo do seu setor. Sem resposta, procure o sindicato ou o Ministério do Trabalho e Emprego, que podem pedir fiscalização ou perícia.',
      ],
    },
  ],
  faq: [
    {
      question:
        'A insalubridade é calculada sobre o salário mínimo ou o salário-base?',
      answer:
        'Em regra, sobre o salário mínimo. A convenção coletiva, o contrato ou uma norma da categoria podem definir outra base, como o salário-base.',
    },
    {
      question: 'Quem usa EPI deixa de receber o adicional?',
      answer:
        'Se o equipamento elimina o agente nocivo e é usado corretamente, o adicional deixa de ser devido. Se só reduz o risco, o adicional pode continuar, e quem decide é o laudo.',
    },
    {
      question: 'A insalubridade entra no cálculo do 13º e das férias?',
      answer:
        'Sim. Como é habitual, integra a remuneração e reflete em 13º, férias com um terço, FGTS e outras verbas.',
    },
    {
      question: 'Posso receber insalubridade e periculosidade ao mesmo tempo?',
      answer:
        'A CLT manda escolher o adicional mais vantajoso. A possibilidade de acumular os dois é tema de decisões judiciais, então confira com o sindicato.',
    },
    {
      question: 'Quem decide o grau de insalubridade?',
      answer:
        'O laudo técnico (perícia), com base nos limites da NR-15. A empresa não pode escolher o grau sem laudo.',
    },
  ],
  sources: [
    { label: 'CLT: arts. 189 a 192 (insalubridade)' },
    { label: 'NR-15: atividades e operações insalubres' },
    { label: 'Súmula Vinculante 4 do STF: base de cálculo de adicionais' },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
  ],
} as const satisfies GuideDocument;
