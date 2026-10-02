import type { GuideDocument } from '../../types';

export const guideMeiDasEmAtrasoComoRegularizar = {
  kind: 'guide',
  slug: 'mei-das-em-atraso-como-regularizar',
  title: 'DAS do MEI em atraso: multa, juros e como regularizar',
  description:
    'Quanto custa pagar o DAS atrasado, como a multa e os juros são calculados e o que fazer para não perder os benefícios do MEI.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-21',
  updatedAt: '2026-10-02',
  tags: ['mei', 'das', 'atraso', 'multa'],
  featuredCalculators: ['das-mei-atraso', 'das-limite-mei'],
  highlights: [
    {
      value: '0,33%',
      label: 'Multa por dia de atraso',
      note: 'Limitada a 20% do valor.',
    },
    {
      value: 'Selic + 1%',
      label: 'Juros',
      note: 'Selic acumulada mais 1% no mês do pagamento.',
    },
    {
      value: 'R$ 95,04',
      label: 'DAS de R$ 82,05 pago com 46 dias de atraso',
      note: 'Multa de R$ 12,30 e juros de R$ 1,69.',
    },
  ],
  sections: [
    {
      heading: 'O que muda quando o DAS passa do dia 20',
      paragraphs: [
        'O DAS vence no dia 20 e, depois disso, cada dia custa mais. A guia original deixa de valer pelo valor de R$ 82,05, R$ 86,05 ou R$ 87,05: é preciso gerar uma guia nova, já com multa e juros, no PGMEI ou no aplicativo MEI. O guia sobre emissão do DAS mostra como entrar no sistema; aqui o foco é o que fazer quando o prazo já passou.',
      ],
    },
    {
      heading: 'Como a multa e os juros são calculados',
      paragraphs: [
        'A multa de mora é de 0,33% por dia de atraso, limitada a 20% do valor. Como 0,33% vezes 61 dias passa de 20%, a multa deixa de crescer a partir do 61º dia: depois disso ela é sempre 20% do DAS.',
        'Os juros seguem a taxa Selic acumulada dos meses entre o vencimento e o mês do pagamento, mais 1% no mês em que a guia é paga. Os juros mudam de mês para mês, não de dia para dia: pagar no mês seguinte ao vencimento custa só o 1%, e cada mês cheio de espera soma a Selic daquele mês.',
        'Exemplo de um mês: um DAS de comércio de R$ 82,05, vencido em 20 de agosto de 2026 e pago em 5 de outubro (46 dias depois), tem multa de 15,18% (R$ 12,46) e juros de 2,08% (R$ 1,71). O total é R$ 96,21, ou seja, R$ 14,16 a mais.',
      ],
      table: {
        caption: 'DAS de R$ 82,05 pago com 46 dias de atraso',
        columns: ['Item', 'Percentual', 'Valor'],
        rows: [
          ['DAS original', '—', 'R$ 82,05'],
          ['Multa (0,33% ao dia)', '15,18%', 'R$ 12,46'],
          ['Juros (Selic + 1%)', '2,08%', 'R$ 1,71'],
          ['Total a pagar', '', 'R$ 96,21'],
        ],
      },
    },
    {
      heading: 'Exemplo com três meses em atraso',
      paragraphs: [
        'Uma prestadora de serviços (DAS de R$ 86,05) parou de pagar em abril, maio e junho de 2026 e quita tudo em 15 de outubro de 2026. Cada competência tem sua própria multa e seus próprios juros: as três já passaram de 60 dias, então todas estão no teto de 20% de multa (R$ 17,21).',
        'O total é de R$ 321,03 para uma dívida original de R$ 258,15, ou R$ 62,88 a mais. O cálculo usa a Selic mensal divulgada pelo Banco Central; a guia emitida no sistema é o valor oficial e pode diferir em centavos.',
      ],
      table: {
        caption: 'Três DAS de R$ 86,05 pagos em 15/10/2026',
        columns: [
          'Competência',
          'Vencimento',
          'Dias de atraso',
          'Multa',
          'Juros',
          'Total',
        ],
        rows: [
          [
            'Abril/2026',
            '20/05/2026',
            '148',
            'R$ 17,21 (20%)',
            'R$ 4,74 (5,51%)',
            'R$ 108,00',
          ],
          [
            'Maio/2026',
            '20/06/2026',
            '117',
            'R$ 17,21 (20%)',
            'R$ 3,78 (4,39%)',
            'R$ 107,04',
          ],
          [
            'Junho/2026',
            '20/07/2026',
            '87',
            'R$ 17,21 (20%)',
            'R$ 2,73 (3,17%)',
            'R$ 105,99',
          ],
          ['Total', '', '', 'R$ 51,63', 'R$ 11,25', 'R$ 321,03'],
        ],
      },
    },
    {
      heading: 'Passo a passo para regularizar',
      paragraphs: [
        'Passo 1: entre no PGMEI, no Portal do Simples Nacional, ou no aplicativo MEI, e abra o extrato do DAS para ver todas as competências em aberto. Passo 2: gere a guia de cada mês informando a data prevista de pagamento, para o sistema calcular a multa e os juros até aquele dia. Passo 3: pague pelo banco ou lotérica; se a guia trouxer, também pode usar o QR Code do Pix.',
        'Pague primeiro os meses mais antigos: cada mês pago passa a contar para o INSS. Depois, volte ao extrato para ter certeza de que todas as competências estão como pagas. Se faltar a declaração anual de algum ano, entregue-a, porque sem ela o sistema não permite parcelar.',
      ],
    },
    {
      heading: 'Quando vale parcelar',
      paragraphs: [
        'Se não der para pagar tudo de uma vez, o MEI pode pedir o parcelamento no Portal do Simples Nacional ou no e-CAC. O limite é de 60 parcelas, cada uma com valor mínimo de R$ 50,00, e o número de parcelas é escolhido no pedido, respeitado esse mínimo. A declaração anual dos períodos parcelados precisa estar entregue.',
        'As parcelas são corrigidas pela Selic acumulada, mais 1% no mês do pagamento. O parcelamento é rescindido por falta de pagamento de três parcelas, consecutivas ou não, e a dívida volta a ser cobrada. Uma dívida como a do exemplo, de R$ 321,03, rende poucas parcelas por causa do mínimo de R$ 50,00.',
      ],
    },
    {
      heading: 'O que acontece se você não paga',
      paragraphs: [
        'Os meses sem DAS não contam como tempo de contribuição nem para a carência dos benefícios. Isso afeta aposentadoria, auxílio por incapacidade, salário-maternidade e pensão. Além disso, a dívida pode ser inscrita em dívida ativa, impede a emissão de certidões negativas e pode levar à exclusão do regime do MEI.',
        'Se o MEI parou de trabalhar, pagar ou não pagar não é a única saída: dar baixa no CNPJ evita novos DAS, mas não apaga os já vencidos. O guia sobre como dar baixa no MEI explica o procedimento.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Pagar a guia antiga, sem os acréscimos: o valor menor não quita a competência. Pagar uma competência no lugar da outra. Esperar a dívida acumular em vez de parcelar. Deixar de entregar a declaração anual. Para dúvidas, o Sebrae atende pela Central de Relacionamento 0800 570 0800.',
      ],
    },
  ],
  faq: [
    {
      question: 'Preciso pagar o DAS se não faturei no mês?',
      answer:
        'Sim. O DAS é fixo e devido mesmo sem faturamento. Se não pretende mais trabalhar como MEI, dê baixa no CNPJ.',
    },
    {
      question: 'Posso pagar só o mês atrasado e deixar os outros?',
      answer:
        'Sim, cada competência tem uma guia própria. Priorize as mais antigas para recuperar tempo de contribuição.',
    },
    {
      question: 'A multa de 20% é cobrada sobre o quê?',
      answer:
        'Sobre o valor original do DAS daquele mês. Em um DAS de R$ 86,05, o teto de multa é de R$ 17,21 por competência atrasada.',
    },
    {
      question: 'Por que a guia do sistema tem valor diferente do cálculo?',
      answer:
        'A guia usa a Selic oficial até a data de pagamento informada. Qualquer atraso no pagamento depois de emitir a guia muda o valor, e é preciso gerar outra.',
    },
    {
      question: 'Quantos meses sem pagar levam à exclusão do MEI?',
      answer:
        'Não há um número fixo que valha para todos os casos. Os débitos podem levar à exclusão, por isso o ideal é regularizar o quanto antes ou parcelar.',
    },
    {
      question: 'Parcelamento pode ser pedido com o CNPJ baixado?',
      answer:
        'Sim. O parcelamento de débitos do MEI vencidos pode ser pedido mesmo quando o CNPJ já foi baixado, desde que as declarações dos períodos tenham sido entregues.',
    },
  ],
  sources: [
    {
      label: 'Manual do Parcelamento de Débitos do MEI — Simples Nacional',
      url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Arquivos/manual/Manual_Parcelamento_MEI.pdf',
    },
    {
      label: 'Perguntas e Respostas MEI e Simei — Receita Federal',
      url: 'https://www8.receita.fazenda.gov.br/simplesnacional/arquivos/manual/perguntaomei.pdf',
    },
    {
      label: 'Lei Complementar 123/2006',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm',
    },
    {
      label: 'Sebrae — Central de Relacionamento 0800 570 0800',
      url: 'https://sebrae.com.br/sites/PortalSebrae/artigos/como-entrar-em-contato-com-o-sebrae',
    },
    {
      label: 'Banco Central do Brasil',
      url: 'https://www.bcb.gov.br/',
    },
  ],
} as const satisfies GuideDocument;
