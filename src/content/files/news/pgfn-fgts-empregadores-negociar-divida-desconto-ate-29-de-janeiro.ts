import type { NewsDocument } from '../../types';

export const newsPgfnFgtsEmpregadoresNegociarDivida = {
  kind: 'news',
  slug: 'pgfn-fgts-empregadores-negociar-divida-desconto-ate-29-de-janeiro',
  title:
    'Dívida de FGTS com a PGFN: empregadores podem negociar de 15/10 a 29/1, com desconto de até 65%',
  description:
    'Edital da PGFN permite renegociar dívidas de FGTS de até R$ 45 milhões, com até 133 parcelas. Veja quem pode aderir e como o trabalhador é protegido.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/pgfn-fgts-empregadores-negociar-divida-desconto-ate-29-de-janeiro.jpg',
    alt: 'Carteira de trabalho, pasta do FGTS com acordo da PGFN e calendário com o dia 15 de outubro marcado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-05',
  updatedAt: '2026-10-05',
  tags: ['fgts', 'trabalho', 'empresa', 'negocios', 'clt', 'divida'],
  featuredCalculators: ['fgts-multa', 'custo-funcionario-clt', 'rescisao-clt'],
  highlights: [
    {
      value: '15/10',
      label: 'Início da adesão',
      note: 'O prazo vai até 29 de janeiro de 2027, às 19h.',
    },
    {
      value: '65%',
      label: 'Limite do desconto no total',
      note: 'Incide sobre juros, multas e encargos, não sobre o FGTS do trabalhador.',
    },
    {
      value: '133',
      label: 'Parcelas mensais no máximo',
      note: 'O saldo pode ser dividido em 108 ou 133 prestações.',
    },
    {
      value: 'R$ 45 mi',
      label: 'Limite do passivo consolidado',
      note: 'Valor máximo por empregador para entrar no edital.',
    },
  ],
  sections: [
    {
      heading: 'O que a PGFN abriu e quem pode aderir',
      paragraphs: [
        'A Procuradoria-Geral da Fazenda Nacional (PGFN) publicou, em 2 de outubro de 2026, o Edital de Transação PGDAU nº 12/2026. Ele permite que empregadores, pessoas físicas ou jurídicas, negociem débitos de FGTS e da contribuição social prevista na Lei Complementar nº 110/2001 que já foram inscritos em dívida ativa.',
        'A adesão começa em 15 de outubro de 2026 e vai até 29 de janeiro de 2027, às 19h. O limite é de passivo consolidado de até R$ 45 milhões por contribuinte. Ficam de fora os empregadores inscritos no cadastro de trabalho análogo ao de escravo. Toda a negociação é feita on-line, no Portal Regularize da PGFN.',
        'Isso interessa a quem tem empregado doméstico, a quem é MEI com um funcionário, a pequenas empresas e a empresas maiores que atrasaram os depósitos. Para o trabalhador, o ponto central é outro: o dinheiro do FGTS pertence a ele, e o edital trata esse valor de forma separada do desconto.',
      ],
    },
    {
      heading: 'Quanto de desconto e em quantas parcelas',
      image: {
        src: '/images/news/pgfn-fgts-empregadores-negociar-divida-desconto-ate-29-de-janeiro-detalhe.jpg',
        alt: 'Detalhe da ilustração: carteira de trabalho, pasta do FGTS com acordo da PGFN e calendário com o dia 15 de outubro marcado.',
        caption: 'A adesão ao acordo começa em 15 de outubro.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O desconto pode chegar a 100% sobre os juros que não são destinados ao trabalhador, sobre as multas e sobre os encargos legais, mas fica limitado a 65% do valor total da dívida. Em outras palavras, o principal que cabe ao empregado não entra na conta do abatimento.',
        'O pagamento tem duas etapas. O FGTS de rescisão, aquele devido a quem já foi desligado, pode ser pago em até 12 prestações. O saldo restante pode ser dividido em 108 ou 133 prestações mensais, conforme a modalidade escolhida no edital.',
        'Os limites de desconto e de parcelas dependem do enquadramento do contribuinte e da capacidade de pagamento, e quem decide o resultado final é a PGFN, no momento da adesão. Por isso, os números acima são tetos, e não valores garantidos.',
      ],
      table: {
        caption: 'Edital PGDAU nº 12/2026 em resumo',
        columns: ['Ponto', 'Regra'],
        rows: [
          [
            'Débitos aceitos',
            'FGTS e contribuição social da Lei Complementar nº 110/2001',
          ],
          [
            'Limite por contribuinte',
            'Passivo consolidado de até R$ 45 milhões',
          ],
          ['Período de adesão', '15/10/2026 a 29/1/2027, até as 19h'],
          [
            'Desconto',
            'Até 100% sobre juros não destinados ao trabalhador, multas e encargos, limitado a 65% do total',
          ],
          [
            'Parcelas',
            'FGTS de rescisão em até 12; saldo em 108 ou 133 mensais',
          ],
          ['Onde aderir', 'Portal Regularize, da PGFN'],
        ],
      },
    },
    {
      heading: 'Exemplo: quanto custa um depósito atrasado',
      paragraphs: [
        'O depósito mensal do FGTS é de 8% da remuneração do empregado. Para um salário de R$ 2.000, são R$ 160 por mês. Se a empresa deixou de depositar por seis meses, o valor devido ao trabalhador, sem juros e sem multa, é de R$ 960 (R$ 160 vezes 6).',
        'Esse é o valor que o edital não permite descontar. Os juros, as multas e os encargos que se acumularam sobre ele é que entram na negociação. É um exemplo ilustrativo para dar ordem de grandeza: a dívida real depende das datas, dos índices e da inscrição em dívida ativa, e só o Portal Regularize mostra o valor consolidado.',
        'Se o trabalhador for desligado, o FGTS atrasado também aumenta o valor da multa de 40% sobre o saldo, paga na demissão sem justa causa. Na calculadora de multa do FGTS dá para ver quanto o saldo representa nessa situação, e a calculadora de custo do funcionário CLT mostra o peso do depósito de 8% na folha.',
      ],
    },
    {
      heading: 'O que muda para o trabalhador',
      paragraphs: [
        'O trabalhador não precisa fazer nada para o empregador aderir ao edital. O que ele pode fazer é conferir o extrato do FGTS no aplicativo FGTS e verificar se todos os depósitos aparecem. O guia sobre como consultar saldo e extrato do FGTS mostra o passo a passo.',
        'Se houver mês sem depósito, o caminho é conversar com o empregador, procurar o sindicato ou a fiscalização do trabalho. A adesão à transação não apaga o direito: o valor devido ao empregado continua sendo reconhecido, e o edital exige que ele seja tratado nas primeiras prestações.',
        'A regra também não vale para qualquer dívida. Ela se aplica a débitos já inscritos em dívida ativa, de modo que um atraso recente, ainda em fase de cobrança administrativa, pode seguir outro caminho.',
      ],
    },
    {
      heading: 'Como o empregador se prepara até 29 de janeiro',
      paragraphs: [
        'O primeiro passo é levantar o que está inscrito em dívida ativa, no Portal Regularize, com o certificado digital ou a conta gov.br do responsável. Depois, é preciso escolher a modalidade e conferir a primeira parcela, que vence no mês da adesão.',
        'Quem perder o acordo, em geral, volta à dívida cheia. Por isso, vale calcular o que cabe no orçamento da empresa antes de aceitar o prazo mais longo. O guia sobre quanto custa um funcionário CLT ajuda a incluir o FGTS no planejamento mensal.',
        'Para o MEI, a PGFN também abriu, em 1º de outubro, o Desenrola MEI Pequeno Valor, com dívidas de até R$ 8.105. É uma modalidade diferente, voltada ao DAS em atraso, e está explicada em outra notícia do portal.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando começa a adesão ao edital de FGTS da PGFN?',
      answer:
        'Em 15 de outubro de 2026. O prazo vai até 29 de janeiro de 2027, às 19h, no Portal Regularize.',
    },
    {
      question: 'O empregador pode ter desconto no FGTS do trabalhador?',
      answer:
        'Não. O desconto de até 100% recai sobre juros que não são destinados ao trabalhador, multas e encargos, com limite de 65% do total da dívida.',
    },
    {
      question: 'Quem pode aderir ao edital?',
      answer:
        'Empregadores com débitos de FGTS ou da contribuição social da Lei Complementar nº 110/2001, com passivo consolidado de até R$ 45 milhões. Quem consta no cadastro de trabalho análogo ao de escravo não pode participar.',
    },
  ],
  sources: [
    {
      label:
        'PGFN: Novos editais da PGFN para renegociação de dívidas (2/10/2026)',
    },
    { label: 'PGFN: Edital de Transação PGDAU nº 12/2026' },
    { label: 'Lei nº 8.036/1990 (FGTS) e Lei Complementar nº 110/2001' },
  ],
} as const satisfies NewsDocument;
