import type { GuideDocument } from '../../types';

export const guideBolsaFamiliaComoConsultarEQuantoRecebe = {
  kind: 'guide',
  slug: 'bolsa-familia-como-consultar-e-quanto-recebe',
  title: 'Bolsa Família: como consultar, quanto recebe e o que compõe o valor',
  description:
    'Como o valor é formado, exemplos de famílias e o que verificar quando a parcela não vem como esperado.',
  category: 'beneficios',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-26',
  updatedAt: '2026-10-02',
  tags: ['bolsa-familia', 'beneficios', 'cadunico', 'renda'],
  featuredCalculators: ['bolsa-familia', 'bpc', 'pis'],
  highlights: [
    {
      value: 'R$ 691',
      label: 'Mínimo por família',
      note: 'Complemento garante esse valor.',
    },
    {
      value: 'R$ 164',
      label: 'Por pessoa',
      note: 'Benefício de Renda de Cidadania.',
    },
    {
      value: 'R$ 173',
      label: 'Por criança de 0 a 6 anos',
      note: 'Benefício Primeira Infância.',
    },
  ],
  sections: [
    {
      heading: 'Quem pode receber',
      paragraphs: [
        'O Bolsa Família é pago a famílias inscritas no Cadastro Único com renda mensal de até R$ 218 por pessoa. Para saber se a sua casa está dentro, some a renda de todos os moradores e divida pelo número de pessoas: uma família de 5 pessoas, por exemplo, pode ter renda total de até R$ 1.090.',
        'Estar no Cadastro Único é condição, mas não garante o benefício. O governo cruza os dados do cadastro com outras bases e só então libera o pagamento. O cadastro precisa estar atualizado: se passaram mais de dois anos sem revisão, a família pode ser chamada ou ter o benefício bloqueado.',
      ],
    },
    {
      heading: 'Como o valor é formado',
      paragraphs: [
        'O valor da família é a soma de três partes: o Benefício de Renda de Cidadania, de R$ 164 por pessoa da família; o Benefício Primeira Infância, de R$ 173 por criança de 0 a 6 anos; e o Benefício Variável Familiar, de R$ 58 por criança ou adolescente de 7 a 18 anos, gestante ou nutriz (mulher que amamenta um bebê pequeno). Se a soma ficar abaixo de R$ 691, o Benefício Complementar cobre a diferença e a família recebe R$ 691.',
      ],
    },
    {
      heading: 'Exemplo passo a passo',
      paragraphs: [
        'Juliana mora com o marido e três filhos, de 2, 5 e 10 anos. São 5 pessoas, 2 crianças de até 6 anos e 1 de 7 a 18 anos. A renda da casa é de R$ 900 por mês, ou R$ 180 por pessoa, dentro do limite de R$ 218. A conta é feita parte por parte:',
      ],
      table: {
        caption: 'Conta do Bolsa Família da Juliana',
        columns: ['Parte', 'Cálculo', 'Valor'],
        rows: [
          ['Renda de Cidadania', '5 pessoas x R$ 164', 'R$ 820,00'],
          ['Primeira Infância', '2 crianças x R$ 173', 'R$ 346,00'],
          ['Variável Familiar', '1 adolescente x R$ 58', 'R$ 58,00'],
          ['Soma', 'R$ 820 + R$ 346 + R$ 58', 'R$ 1.224,00'],
          ['Complemento', 'Soma maior que R$ 691: não há', 'R$ 0,00'],
          ['Total mensal', '', 'R$ 1.224,00'],
        ],
      },
    },
    {
      heading: 'Quando entra o complemento',
      paragraphs: [
        'Famílias pequenas costumam ficar abaixo do mínimo e recebem o Benefício Complementar. A tabela mostra três casos diferentes do exemplo acima.',
      ],
      table: {
        caption: 'Outras composições de família',
        columns: ['Família', 'Soma das partes', 'Complemento', 'Total'],
        rows: [
          ['1 pessoa sozinha', 'R$ 164', 'R$ 527', 'R$ 691'],
          [
            'Mãe e 1 bebê de até 6 anos',
            'R$ 328 + R$ 173 = R$ 501',
            'R$ 190',
            'R$ 691',
          ],
          [
            '6 pessoas, 3 delas de 7 a 18 anos, nenhuma até 6',
            'R$ 984 + R$ 174 = R$ 1.158',
            'R$ 0',
            'R$ 1.158',
          ],
        ],
      },
    },
    {
      heading: 'Como consultar e quando é pago',
      paragraphs: [
        'Use o aplicativo Bolsa Família, o aplicativo Caixa Tem ou o extrato da conta onde o benefício é depositado. O pagamento segue calendário mensal definido pelo final do NIS (número do cadastro) e é feito pela Caixa. Se você não encontra a data ou o valor, ligue para a Caixa pelo 111.',
        'Para acompanhar a situação do cadastro, use o aplicativo do Cadastro Único ou vá ao CRAS. Se o valor do mês veio diferente do esperado, compare a composição da família no cadastro com a conta acima: criança nascida, adolescente que fez 19 anos ou morador que saiu da casa mudam o total.',
      ],
    },
    {
      heading: 'O que a família precisa manter',
      paragraphs: [
        'O programa exige acompanhamento de saúde e educação. Crianças e adolescentes precisam de frequência escolar mínima (60% para os de 4 e 5 anos e 75% para os de 6 a 18 anos), as crianças precisam ter a vacinação em dia e as gestantes devem fazer o pré-natal. Mudanças de endereço, de renda ou na composição da família devem ser comunicadas ao CRAS.',
        'Quem consegue emprego ou aumenta a renda não perde tudo de imediato: a Regra de Proteção permite continuar recebendo uma parte do valor por um período, desde que a renda por pessoa siga dentro do limite dessa regra. O tempo e o percentual dependem da composição da família e das normas do Ministério do Desenvolvimento e Assistência Social, então confira no aplicativo ou no CRAS se a sua se encaixa.',
      ],
    },
    {
      heading: 'Se a parcela não veio ou veio menor',
      paragraphs: [
        'Veja primeiro a mensagem no aplicativo: ela indica se o benefício está bloqueado, em averiguação ou cancelado. Bloqueios costumam ter relação com cadastro desatualizado, renda acima do limite ou frequência escolar abaixo do mínimo. Leve ao CRAS documento com foto, CPF, comprovante de residência e comprovantes de renda para atualizar o cadastro. Se não resolver, registre reclamação na ouvidoria do MDS, pelo 121.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem aumentou a renda perde tudo?',
      answer:
        'Nem sempre. A Regra de Proteção permite continuar recebendo parte do benefício por um período, dentro dos limites da regra. Confira o prazo da sua família no aplicativo ou no CRAS.',
    },
    {
      question: 'Ter o CadÚnico garante o benefício?',
      answer:
        'Não. A inscrição é necessária, mas a aprovação depende da análise de renda e dos critérios do programa.',
    },
    {
      question: 'Uma pessoa que mora sozinha pode receber?',
      answer:
        'Sim, se estiver no Cadastro Único e com renda dentro do limite. Nesse caso o valor é de R$ 691: R$ 164 da Renda de Cidadania e R$ 527 de complemento.',
    },
    {
      question: 'Por que meu valor caiu de um mês para o outro?',
      answer:
        'A causa mais comum é mudança na composição da família: uma criança passou de 6 para 7 anos (de R$ 173 para R$ 58), um adolescente completou 19 anos ou um morador saiu do cadastro.',
    },
    {
      question: 'Quando o Bolsa Família é pago?',
      answer:
        'Todo mês, em calendário divulgado pelo governo que depende do final do NIS. Consulte o aplicativo ou ligue para a Caixa, no 111.',
    },
  ],
  sources: [
    {
      label: 'Ministério do Desenvolvimento e Assistência Social (MDS)',
      url: 'https://www.gov.br/mds/',
    },
    {
      label: 'Caixa Econômica Federal: Bolsa Família',
    },
    {
      label: 'Lei 14.601/2023: Bolsa Família',
    },
  ],
} as const satisfies GuideDocument;
