import type { GuideDocument } from '../../types';

export const reservaEmergenciaGuide = {
  kind: 'guide',
  slug: 'como-montar-reserva-de-emergencia',
  title: 'Como montar uma reserva de emergência',
  description:
    'Calcule a sua meta a partir das despesas essenciais, escolha onde guardar com liquidez e segurança e monte um plano mensal com prazos reais.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-10',
  updatedAt: '2026-10-02',
  tags: ['reserva', 'planejamento', 'investimentos', 'financas'],
  highlights: [
    {
      value: '3 a 12 meses',
      label: 'Faixa de referência da meta',
      note: 'De despesas essenciais, conforme a estabilidade da renda.',
    },
    {
      value: 'R$ 2.800',
      label: 'Exemplo de despesas essenciais',
      note: 'Uma meta de 3 meses seria R$ 8.400.',
    },
    {
      value: 'D+0 ou D+1',
      label: 'Liquidez desejada',
      note: 'Resgate no mesmo dia ou no dia útil seguinte.',
    },
  ],
  sections: [
    {
      heading: 'O que é a reserva e o que ela não é',
      paragraphs: [
        'A reserva de emergência é um dinheiro separado para imprevistos que você não pode adiar: perda de renda, conserto urgente, despesa de saúde, um carro necessário para trabalhar. Ela existe para que a urgência não vire dívida no cartão ou no cheque especial.',
        'Ela não é dinheiro para viagem, troca de celular ou outras metas com data marcada, que pedem uma poupança própria. Também não é o FGTS nem o limite do cheque especial. O FGTS e o seguro-desemprego têm regras e prazos próprios e não estão disponíveis na hora que você precisa. O cheque especial é crédito caro, não reserva.',
      ],
    },
    {
      heading: 'Passo 1: descubra o seu custo essencial',
      paragraphs: [
        'Some só o que você não consegue cortar para viver por um mês. Pegue as três últimas faturas e extratos e liste moradia, alimentação, contas básicas, transporte, saúde e as parcelas mínimas de dívidas. Não conte lazer, assinaturas nem compras.',
        'Exemplo de uma pessoa com despesas essenciais: aluguel R$ 950,00, mercado R$ 800,00, luz, água e internet R$ 260,00, transporte R$ 340,00, saúde R$ 250,00 e parcela mínima de dívida R$ 200,00. O total é R$ 2.800,00 por mês. Esse é o número que multiplica a meta, e não o salário.',
      ],
    },
    {
      heading: 'Passo 2: escolha quantos meses cobrir',
      paragraphs: [
        'Não há uma regra legal. As referências mais comuns são de 3 a 6 meses de despesas essenciais para quem tem renda estável e de 6 a 12 meses para quem tem renda variável, trabalha por conta própria ou sustenta outras pessoas. Quanto mais incerta a renda, maior a meta.',
      ],
      table: {
        caption: 'Quatro perfis',
        columns: ['Perfil', 'Despesa essencial', 'Meses', 'Meta'],
        rows: [
          [
            'CLT, renda estável, sem dependentes',
            'R$ 2.800,00',
            '3',
            'R$ 8.400,00',
          ],
          [
            'CLT com filhos ou renda de uma pessoa só',
            'R$ 2.800,00',
            '6',
            'R$ 16.800,00',
          ],
          ['Autônomo, renda variável', 'R$ 4.000,00', '6', 'R$ 24.000,00'],
          ['Autônomo com dependentes', 'R$ 4.000,00', '12', 'R$ 48.000,00'],
        ],
      },
    },
    {
      heading: 'Passo 3: monte um plano com prazo realista',
      paragraphs: [
        'Comece por uma primeira etapa de um mês de despesas. No exemplo de R$ 2.800,00, guardando R$ 350,00 por mês, a primeira etapa fica pronta em 8 meses. A meta de 3 meses (R$ 8.400,00) sai em cerca de 24 meses sem contar rendimento, ou 23 meses com rendimento de 0,75% ao mês, que é só uma taxa de exemplo.',
        'Para o autônomo da tabela, guardar R$ 600,00 por mês cobre os 3 primeiros meses de despesa (R$ 12.000,00) em 20 meses e os 12 meses (R$ 48.000,00) em 80 meses, ou cerca de 6 anos e 8 meses, sem contar rendimento. O que sustenta o plano é a regularidade: programe a transferência para o dia em que o dinheiro entra e trate o valor como uma conta fixa.',
      ],
    },
    {
      heading: 'Onde guardar: liquidez, segurança e custo',
      paragraphs: [
        'Para a reserva, a ordem de prioridade é liquidez, segurança e só depois rendimento. Os produtos mais usados são poupança, CDB com liquidez diária e Tesouro Selic. Confira se o resgate é no mesmo dia ou no dia útil seguinte, se há garantia do FGC (até R$ 250 mil por CPF e por instituição, no caso de CDB e poupança) e se há taxas.',
        'O Imposto de Renda de CDB e Tesouro Selic incide só sobre o rendimento. Com R$ 8.400,00 aplicados a 13,65% ao ano (taxa de exemplo, 100% do CDI) por 5 meses, o rendimento bruto é R$ 459,99; o IR é 22,5% (R$ 103,50) e o líquido é R$ 356,49. Se precisar sacar tudo, o que tem imposto é só esse ganho. O IOF só pesa em resgates com menos de 30 dias. LCI, LCA e títulos prefixados de vencimento longo costumam ser inadequados para a reserva, porque o resgate antes do vencimento pode ser impossível ou ter perda.',
      ],
    },
    {
      heading: 'Quando usar, quando repor e quando rever',
      paragraphs: [
        'Use a reserva quando houver emergência real: algo imprevisto, necessário e urgente. Se a despesa pode esperar ou foi planejada, não é emergência. Ao usar, reponha o valor antes de retomar outras metas.',
        'Reveja a meta sempre que a sua despesa essencial mudar (aluguel, filho, mudança de emprego). Se você tem dívidas caras, como cartão e cheque especial, uma reserva mínima de um mês costuma bastar enquanto você as quita, porque a dívida cresce mais depressa do que a reserva rende. Este conteúdo é informativo e não substitui uma orientação financeira individual.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto devo guardar por mês?',
      answer:
        'Um valor que caiba no orçamento sem atrasar contas. Para ter ideia: R$ 350,00 por mês chegam a um mês de despesas de R$ 2.800,00 em 8 meses. Se não der, comece menor e aumente quando a renda subir.',
    },
    {
      question: 'Posso deixar a reserva na poupança?',
      answer:
        'Pode. Tem liquidez e é isenta de IR para pessoa física, mas costuma render menos que CDB com liquidez diária e Tesouro Selic. Compare o rendimento líquido no seu prazo.',
    },
    {
      question: 'Reserva de emergência e investimento são a mesma coisa?',
      answer:
        'Não. A reserva privilegia a segurança e o resgate imediato. Investimentos de prazo mais longo podem render mais, mas também oscilam ou têm carência. Monte a reserva antes.',
    },
    {
      question: 'Vale a pena quitar a dívida antes de montar a reserva?',
      answer:
        'Com juros muito altos, quitar costuma ter prioridade. O ideal é manter uma reserva mínima, como um mês de despesas, para não voltar ao crédito caro diante de um imprevisto.',
    },
    {
      question: 'O que fazer se a reserva acabou?',
      answer:
        'Reduza gastos não essenciais, reponha em parcelas pequenas e evite recorrer a crédito caro. Refaça o plano com a nova meta e o novo prazo.',
    },
  ],
  sources: [
    {
      label: 'Portal do Investidor',
      url: 'https://www.gov.br/investidor/',
    },
    {
      label: 'Banco Central do Brasil — Cidadania Financeira',
      url: 'https://www.bcb.gov.br/cidadaniafinanceira',
    },
    {
      label: 'Fundo Garantidor de Créditos',
      url: 'https://www.fgc.org.br/',
    },
    {
      label: 'Lei 11.033/2004 — tributação da renda fixa',
    },
  ],
} as const satisfies GuideDocument;
