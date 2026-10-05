import type { GuideDocument } from '../../types';

export const guideComoCalcularARescisaoSemJustaCausa = {
  kind: 'guide',
  slug: 'como-calcular-a-rescisao-sem-justa-causa',
  title:
    'Como calcular a rescisão sem justa causa e conferir o que a empresa deve pagar',
  description:
    'Todas as verbas da demissão sem justa causa, com dois exemplos completos em reais, prazos de pagamento e outros tipos de saída.',
  category: 'trabalho',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-25',
  updatedAt: '2026-10-02',
  tags: ['rescisao', 'demissao', 'fgts', 'aviso-previo', 'trabalho'],
  featuredCalculators: [
    'rescisao-clt',
    'aviso-previo',
    'fgts-multa',
    'seguro-desemprego',
  ],
  highlights: [
    {
      value: 'R$ 14.817,20',
      label: 'Rescisão do exemplo 1',
      note: 'Salário de R$ 3.400 e 3 anos e 8 meses de casa.',
    },
    {
      value: '39 dias',
      label: 'Aviso prévio do exemplo 1',
      note: '30 dias mais 3 por ano completo, até 90.',
    },
    {
      value: '40%',
      label: 'Multa sobre o FGTS',
      note: 'Paga pela empresa e depositada na conta do trabalhador.',
    },
  ],
  sections: [
    {
      heading: 'Quais verbas entram na rescisão',
      paragraphs: [
        'Na demissão sem justa causa o trabalhador recebe: saldo de salário (dias trabalhados no mês da saída), aviso prévio trabalhado ou indenizado, 13º proporcional, férias proporcionais com o terço, férias vencidas com o terço (se houver) e a multa de 40% sobre o FGTS. Também pode sacar o FGTS e pedir o seguro-desemprego.',
        'O aviso prévio tem 30 dias mais 3 dias por ano completo de trabalho, até o máximo de 90 dias (Lei 12.506/2011). Quando é indenizado, ele conta como tempo de serviço: os avos de 13º e de férias avançam pelos dias do aviso, e a fração de 15 dias ou mais vale um mês.',
      ],
    },
    {
      heading: 'Exemplo 1: salário de R$ 3.400, saída em 12 de julho',
      paragraphs: [
        'O empregado tem 3 anos e 8 meses de casa (44 meses), último período de férias completado há 5 meses e aviso indenizado. O aviso é de 30 + 3 × 3 = 39 dias. Esses 39 dias projetam mais um avo, então o 13º vai a 7/12 (seis meses de janeiro a junho, mais um do aviso) e as férias proporcionais a 6/12 (cinco meses mais um). O FGTS estimado é 8% do salário por 44 meses: R$ 11.968,00.',
        'Cada dia vale R$ 3.400 ÷ 30 = R$ 113,33. Os valores abaixo são brutos, antes de INSS e IRRF.',
      ],
      table: {
        caption: 'Verbas da rescisão do exemplo 1',
        columns: ['Verba', 'Como se calcula', 'Valor bruto'],
        rows: [
          ['Saldo de salário', '12 dias × R$ 113,33', 'R$ 1.360,00'],
          ['Aviso prévio indenizado', '39 dias × R$ 113,33', 'R$ 4.420,00'],
          ['13º proporcional', '7/12 de R$ 3.400', 'R$ 1.983,33'],
          ['Férias proporcionais', '6/12 de R$ 3.400', 'R$ 1.700,00'],
          ['1/3 sobre as férias', 'R$ 1.700 ÷ 3', 'R$ 566,67'],
          ['Multa de 40% do FGTS', '40% de R$ 11.968', 'R$ 4.787,20'],
          ['Total', '', 'R$ 14.817,20'],
        ],
      },
    },
    {
      heading: 'Exemplo 2: salário de R$ 2.100 com férias vencidas',
      paragraphs: [
        'Agora, 5 anos e 2 meses de casa (62 meses), saída em 20 de abril e um período de férias que nunca foi tirado. O aviso é de 30 + 3 × 5 = 45 dias, que somam dois avos: o 13º vai a 6/12 (quatro meses de janeiro a abril mais dois) e as férias proporcionais a 4/12 (dois meses do período em curso, contados desde o último aniversário do contrato, mais dois do aviso).',
        'Saldo de salário: 20 dias = R$ 1.400,00. Aviso: 45 dias = R$ 3.150,00. 13º: R$ 1.050,00. Férias proporcionais: R$ 700,00 mais terço de R$ 233,33. Férias vencidas: um salário inteiro de R$ 2.100,00 mais terço de R$ 700,00. Multa: 40% de R$ 10.416,00 (saldo estimado do FGTS) = R$ 4.166,40. Total bruto: R$ 13.499,73. As férias vencidas pesam R$ 2.800,00 do total, e esquecê-las é um dos erros mais comuns.',
      ],
    },
    {
      heading: 'O que muda o resultado',
      paragraphs: [
        'O tempo de casa muda o aviso e a multa; o dia da saída muda o saldo de salário; a data do último período de férias muda os avos de férias, e o mês da saída muda os avos de 13º. Comissões e horas extras habituais entram nas médias do 13º e das férias. Os avos que o aviso acrescenta seguem aqui uma estimativa simplificada: cada 30 dias de aviso valem um avo, e uma fração de 15 dias ou mais conta como mais um. No termo de rescisão, a empresa conta pela data projetada de saída, e o número de avos pode diferir em um.',
        'Quanto aos descontos: saldo de salário e 13º sofrem INSS e Imposto de Renda, este último em cálculo separado. O aviso prévio indenizado, as férias indenizadas com o terço e a multa de 40% do FGTS, em regra, não sofrem nenhum dos dois. O aviso trabalhado, por outro lado, é salário comum e é tributado.',
      ],
    },
    {
      heading: 'Prazo, documentos e outros tipos de saída',
      paragraphs: [
        'A empresa deve pagar as verbas em até 10 dias corridos após o fim do contrato. O atraso pode gerar multa equivalente a um salário. Confira o termo de rescisão, a guia do seguro-desemprego e o código para sacar o FGTS. O seguro-desemprego deve ser pedido em até 120 dias após a demissão.',
        'No pedido de demissão não há multa do FGTS nem saque, e o empregado cumpre o aviso. Na demissão por acordo, a multa é de 20%, o aviso indenizado é pago pela metade e o saque do FGTS é de até 80%, sem seguro-desemprego. Na justa causa, perdem-se o aviso, a multa e o 13º proporcional, e as férias proporcionais não são devidas.',
      ],
    },
    {
      heading: 'Quando procurar ajuda',
      paragraphs: [
        'Peça o termo de rescisão com o cálculo detalhado antes de assinar. Se faltar alguma verba, se o FGTS não estiver depositado ou se o pagamento atrasar, procure o sindicato, o Ministério do Trabalho e Emprego ou um advogado trabalhista. A assinatura do termo não impede você de contestar valores depois.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso trabalhar o aviso prévio?',
      answer:
        'Quando a empresa dispensa, pode pedir que você trabalhe o aviso (com redução de 2 horas por dia ou 7 dias corridos no fim) ou indenizá-lo. Quando você pede demissão, a empresa pode exigir o cumprimento do aviso.',
    },
    {
      question: 'A multa de 40% incide sobre o saldo que eu saquei antes?',
      answer:
        'Sim. A multa é de 40% sobre todos os depósitos do contrato, com correção, mesmo que parte já tenha sido sacada, como no saque-aniversário.',
    },
    {
      question: 'Quanto tempo tenho para pedir o seguro-desemprego?',
      answer:
        'Entre 7 e 120 dias depois da data da dispensa. O número de parcelas depende do tempo de trabalho e de quantas vezes você já pediu o benefício.',
    },
    {
      question: 'A rescisão precisa ser homologada no sindicato?',
      answer:
        'A homologação no sindicato deixou de ser obrigatória com a reforma trabalhista de 2017. Mesmo assim, a empresa deve entregar o termo e pagar no prazo.',
    },
    {
      question:
        'As férias proporcionais são pagas se tenho menos de um ano de casa?',
      answer:
        'Sim, na dispensa sem justa causa. O pagamento é de 1/12 por mês trabalhado, com o terço.',
    },
  ],
  sources: [
    {
      label: 'CLT: arts. 477 e 487 a 491 (rescisão e aviso prévio)',
    },
    {
      label: 'Lei 12.506/2011: aviso prévio proporcional',
    },
    {
      label: 'Lei 8.036/1990: FGTS e multa rescisória',
    },
    {
      label: 'Ministério do Trabalho e Emprego',
      url: 'https://www.gov.br/trabalho-e-emprego/',
    },
    {
      label: 'Caixa Econômica Federal: FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/',
    },
  ],
} as const satisfies GuideDocument;
