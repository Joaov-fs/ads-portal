import type { GuideDocument } from '../../types';

export const guideComoLerOExtratoBancarioEContestarCobrancas = {
  kind: 'guide',
  slug: 'como-ler-o-extrato-bancario-e-contestar-cobrancas',
  title: 'Como ler o extrato bancário e contestar cobranças indevidas',
  description:
    'Entenda cada coluna do extrato, identifique tarifas, IOF e juros do cheque especial e saiba como reclamar de uma cobrança que você não reconhece.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-16',
  updatedAt: '2026-10-02',
  tags: ['extrato', 'banco', 'tarifas', 'conta'],
  featuredCalculators: ['juros-compostos', 'porcentagem'],
  highlights: [
    {
      value: 'Registrato',
      label: 'Sistema do Banco Central',
      note: 'Mostra contas, empréstimos e chaves Pix.',
    },
    {
      value: 'SAC',
      label: 'Primeiro canal',
      note: 'Para reclamar com o banco.',
    },
    {
      value: 'Ouvidoria',
      label: 'Segundo canal',
      note: 'Se o SAC não resolver.',
    },
  ],
  sections: [
    {
      heading: 'Passo 1: entenda as colunas e confira a conta',
      paragraphs: [
        'O extrato traz data, descrição do lançamento, valor (crédito ou débito) e saldo. Crédito aumenta o saldo, débito reduz. A conferência básica é: saldo inicial + créditos − débitos = saldo final. Se a conta não fecha, algo foi omitido ou você interpretou um lançamento errado.',
        'O exemplo abaixo é um extrato fictício de setembro. O saldo inicial é R$ 420,00, entram R$ 2.600,00 de salário e saem R$ 3.136,65 em débitos. Resultado: R$ 420,00 + R$ 2.600,00 − R$ 3.136,65 = −R$ 116,65, ou seja, a conta fechou no negativo, usando o limite do cheque especial.',
      ],
      table: {
        caption: 'Extrato fictício, setembro',
        columns: ['Data', 'Descrição', 'Valor', 'Saldo'],
        rows: [
          ['02/09', 'Crédito de salário', 'R$ 2.600,00', 'R$ 3.020,00'],
          ['03/09', 'Pix enviado (aluguel)', '− R$ 950,00', 'R$ 2.070,00'],
          ['05/09', 'Tarifa pacote de serviços', '− R$ 39,90', 'R$ 2.030,10'],
          ['05/09', 'Seguro conta', '− R$ 14,90', 'R$ 2.015,20'],
          ['08/09', 'Compra no débito, mercado', '− R$ 386,40', 'R$ 1.628,80'],
          [
            '10/09',
            'Compra no débito, loja online',
            '− R$ 489,90',
            'R$ 1.138,90',
          ],
          ['12/09', 'Pix enviado', '− R$ 1.250,00', '− R$ 111,10'],
          ['30/09', 'Juros do limite', '− R$ 4,96', '− R$ 116,06'],
          ['30/09', 'IOF', '− R$ 0,59', '− R$ 116,65'],
        ],
      },
    },
    {
      heading: 'Passo 2: separe o que é seu, o que é custo e o que é suspeito',
      paragraphs: [
        'Percorra o extrato linha a linha e classifique. No exemplo, o aluguel, o mercado e o Pix de R$ 1.250,00 são gastos conhecidos. A tarifa de R$ 39,90, o seguro de R$ 14,90, os juros de R$ 4,96 e o IOF de R$ 0,59 são custos do banco, que somam R$ 60,35 no mês. A compra de R$ 489,90 numa loja online que você não reconhece é o lançamento suspeito.',
        'Cada item pede uma pergunta. Na tarifa: você contratou esse pacote e usa o que ele oferece? Em um ano, R$ 39,90 por mês somam R$ 478,80. No seguro: você autorizou? Se não, em 12 meses são R$ 178,80. Nos juros: R$ 111,10 negativos por alguns dias geram só alguns reais, e o teto do cheque especial é de 8% ao mês (R$ 8,89 sobre esse saldo, em um mês inteiro). A compra no débito: você ou alguém com seu cartão fez? Se não, é caso de contestação imediata.',
      ],
    },
    {
      heading: 'Passo 3: conteste com o banco, com prova e protocolo',
      paragraphs: [
        'Reúna o extrato, marque a data e o valor e anote o que você pediu. Ligue ou use o SAC do banco, descreva cada lançamento e peça o cancelamento e a devolução. Peça o protocolo e guarde. Em caso de compra não reconhecida, peça o bloqueio do cartão na hora. Se o banco precisar, registre boletim de ocorrência.',
        'O SAC deve resolver a reclamação em até cinco dias úteis, contados do registro (Decreto 6.523/2008, art. 17). Se a resposta não vier ou não resolver, abra uma demanda na ouvidoria do banco, que tem prazo de até dez dias úteis para responder, prorrogável uma vez por mais dez (Resolução CMN 4.860/2020, art. 6º).',
      ],
    },
    {
      heading: 'Passo 4: escale, se necessário',
      paragraphs: [
        'Se a ouvidoria não resolver, registre reclamação no Banco Central pelo site do órgão e, em paralelo, procure o Procon ou a plataforma consumidor.gov.br. Por causas de menor valor, é possível recorrer ao Juizado Especial Cível; nas causas de até 20 salários mínimos, a Lei 9.099/1995 dispensa advogado.',
        'O Código de Defesa do Consumidor proíbe fornecer serviço sem solicitação prévia (art. 39, III) e prevê que quem pagou cobrança indevida tem direito à devolução em dobro, salvo engano justificável (art. 42, parágrafo único). No exemplo, seis meses de seguro não contratado (R$ 89,40) poderiam render devolução de até R$ 178,80, a depender do caso.',
      ],
    },
    {
      heading: 'Registrato e Pix: o que mais conferir',
      paragraphs: [
        'O Registrato, do Banco Central, mostra as contas e os empréstimos em seu nome e as chaves Pix cadastradas. Consulte-o se aparecer um lançamento de uma instituição que você não conhece. O acesso é feito com a conta gov.br.',
        'Se o problema for um Pix feito por golpe ou fraude, avise o banco imediatamente. O Banco Central prevê o Mecanismo Especial de Devolução (MED), mas a rapidez do aviso influencia a chance de recuperar o valor.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Deixar para olhar só a fatura do cartão e nunca o extrato da conta; aceitar a explicação por telefone sem registrar protocolo; contestar sem apontar data e valor; e ignorar tarifas pequenas, que repetidas por meses viram valor relevante. Também é comum pagar tarifa de pacote enquanto a conta teria direito a um pacote essencial gratuito, previsto em norma do Banco Central para pessoa física.',
      ],
    },
  ],
  faq: [
    {
      question: 'O banco pode cobrar tarifa de qualquer serviço?',
      answer:
        'Só o que está previsto em norma do Banco Central e em contrato. Serviços essenciais para pessoa física têm regras específicas de gratuidade. Peça a tabela de tarifas do banco e compare.',
    },
    {
      question: 'Em quanto tempo o banco responde?',
      answer:
        'O SAC deve resolver em até cinco dias úteis. A ouvidoria responde em até dez dias úteis, prorrogáveis por mais dez. Guarde sempre o protocolo.',
    },
    {
      question: 'Uma compra no débito que não reconheço pode ser devolvida?',
      answer:
        'Pode, se ficar comprovado que você não fez a compra. Bloqueie o cartão, conteste por escrito pelo canal do banco, peça protocolo e, se necessário, registre boletim de ocorrência.',
    },
    {
      question: 'O que é o seguro que aparece no meu extrato?',
      answer:
        'Pode ser um seguro contratado junto com a conta, o cartão ou um empréstimo. Peça ao banco o contrato e a data da adesão. Se não houve autorização sua, peça o cancelamento e a devolução.',
    },
    {
      question: 'Posso cancelar o pacote de tarifas?',
      answer:
        'Sim. O cliente pode trocar ou cancelar o pacote e passar a pagar apenas os serviços que usa, ou ficar no pacote essencial gratuito. Faça o pedido por escrito e guarde o protocolo.',
    },
  ],
  sources: [
    {
      label: 'Banco Central do Brasil — Registrato',
      url: 'https://www.bcb.gov.br/meubc/registrato',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
    {
      label: 'Código de Defesa do Consumidor (Lei 8.078/1990)',
    },
    {
      label: 'Decreto 6.523/2008 — Serviço de Atendimento ao Consumidor',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6523.htm',
    },
    {
      label: 'Resolução CMN 4.860/2020 — ouvidoria',
    },
    {
      label: 'consumidor.gov.br',
      url: 'https://www.consumidor.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
