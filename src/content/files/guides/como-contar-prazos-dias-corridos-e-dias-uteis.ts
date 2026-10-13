import type { GuideDocument } from '../../types';

export const guideComoContarPrazos = {
  kind: 'guide',
  slug: 'como-contar-prazos-dias-corridos-e-dias-uteis',
  title:
    'Como contar prazos: dias corridos, dias úteis e datas que caem no fim de semana',
  description:
    'Aprenda a contar prazos de contratos, compras e processos: quando o dia inicial entra, o que muda em dias úteis e o que fazer se o prazo cai no sábado ou domingo.',
  category: 'utilidades',
  authorId: 'equipe-editorial',
  publishedAt: '2026-10-12',
  updatedAt: '2026-10-12',
  tags: ['prazos', 'dias-uteis', 'datas', 'utilidades'],
  featuredCalculators: ['contador-de-dias', 'porcentagem', 'aviso-previo'],
  highlights: [
    {
      value: '80 dias',
      label: 'De 12/10 a 31/12/2026',
      note: 'Dias corridos, sem contar o dia inicial.',
    },
    {
      value: '58 dias',
      label: 'Dias de segunda a sexta no mesmo período',
      note: 'Antes de descontar feriados.',
    },
    {
      value: '11/11/2026',
      label: 'Prazo de 30 dias contado de 12/10/2026',
      note: 'Cai em quarta-feira.',
    },
  ],
  sections: [
    {
      heading: 'A regra básica: o dia inicial não entra',
      paragraphs: [
        'Na regra geral, o dia em que o prazo começa não é contado, e o último dia entra na conta. Se um prazo de 7 dias começa na segunda-feira, dia 12, o primeiro dia contado é a terça-feira, dia 13, e o sétimo e último dia é o dia 19. Essa regra vale para a maioria dos contratos e para o Código Civil.',
        'Contar o dia inicial é o erro mais comum e faz o prazo terminar um dia antes do que a lei prevê. Em contratos, no entanto, o texto manda: se o contrato diz que o prazo começa a contar no próprio dia da assinatura, vale o que está escrito.',
      ],
    },
    {
      heading: 'Dias corridos e dias úteis',
      paragraphs: [
        'Dias corridos contam todos os dias do calendário, inclusive sábados, domingos e feriados. Dias úteis excluem sábados, domingos e feriados. A diferença é grande: um prazo de 30 dias corridos dura cerca de um mês, e um de 30 dias úteis dura mais de seis semanas.',
        'Como saber qual vale? Prazos do dia a dia, como o direito de arrependimento de uma compra online, são em dias corridos. Prazos de processos judiciais, pelo Código de Processo Civil, são contados em dias úteis. Em dúvida, leia o contrato ou a norma e veja se ela diz "dias úteis" ou "dias".',
      ],
    },
    {
      heading: 'Exemplo: prazos contados a partir de 12/10/2026',
      paragraphs: [
        'Tomando como início a segunda-feira, 12/10/2026, a tabela mostra onde termina cada prazo em dias corridos. Quando o último dia cai em sábado ou domingo, vários prazos legais passam para o primeiro dia útil seguinte, e a coluna ao lado mostra essa data.',
        'Para prazos de contrato, essa prorrogação só vale se estiver no texto ou na lei aplicável. Quem precisa cumprir um prazo com folga deve contar até a sexta-feira anterior ao fim de semana.',
      ],
      table: {
        caption: 'Prazos em dias corridos a partir de 12/10/2026',
        columns: [
          'Prazo',
          'Último dia',
          'Dia da semana',
          'Se prorrogar para o dia útil',
        ],
        rows: [
          ['7 dias', '19/10/2026', 'segunda-feira', 'Não precisa'],
          ['15 dias', '27/10/2026', 'terça-feira', 'Não precisa'],
          ['30 dias', '11/11/2026', 'quarta-feira', 'Não precisa'],
          ['90 dias', '10/01/2027', 'domingo', '11/01/2027'],
        ],
      },
    },
    {
      heading: 'Prazos de consumo que mais aparecem',
      paragraphs: [
        'Quem compra pela internet ou por telefone tem 7 dias corridos para desistir, contados a partir da assinatura do contrato ou do recebimento do produto. A garantia legal contra defeito é de 30 dias para produtos não duráveis e 90 dias para duráveis, contada da entrega ou do aparecimento do defeito.',
        'Em um produto durável recebido em 12/10/2026, os 90 dias terminam em 10/01/2027, domingo. Guarde a nota fiscal e o protocolo do pedido, porque a prova da data de entrega é o que decide a conta.',
      ],
    },
    {
      heading: 'Prazos de trabalho: aviso prévio e rescisão',
      paragraphs: [
        'O aviso prévio é de 30 dias, com 3 dias a mais por ano completo de serviço, até 90 dias. Esse prazo é contado em dias corridos, e a rescisão deve ser paga em até 10 dias contados do fim do contrato. Para estimar o aviso, use a calculadora de aviso prévio, e para ver a data final use o contador de dias.',
        'Quem trabalha cumprindo o aviso deve conferir a data de término no termo de rescisão. Uma diferença de um dia pode mudar o mês de saída, o mês de pagamento e o cálculo de férias e 13º proporcionais.',
      ],
    },
    {
      heading: 'Como usar o contador de dias na prática',
      paragraphs: [
        'Digite a data inicial e a final, e o contador mostra os dias corridos, os dias de segunda a sexta, as semanas, os meses e os anos entre elas. Ele não desconta feriados, então para prazos em dias úteis subtraia os feriados do período manualmente.',
        'Por exemplo, entre 12/10/2026 e 31/12/2026 há 80 dias corridos e 58 dias de segunda a sexta. Feriados nacionais no período, como 2 de novembro (Finados), 15 de novembro (Proclamação da República), 20 de novembro (Consciência Negra) e 25 de dezembro, reduzem esse número.',
      ],
    },
    {
      heading: 'Erros comuns',
      paragraphs: [
        'Os erros mais frequentes são contar o dia inicial, tratar dias úteis como corridos, esquecer feriados locais e não verificar o dia da semana do último dia. Outro erro é contar meses como 30 dias: um prazo de um mês termina no mesmo dia do mês seguinte, e não 30 dias depois.',
        'Quando o prazo é importante, confirme a regra com quem emitiu a norma ou o contrato e deixe uma margem de segurança. Para prazos judiciais, o advogado deve conferir a contagem, porque ela segue regras próprias.',
      ],
    },
    {
      heading: 'Quando procurar ajuda',
      paragraphs: [
        'Para prazos de processos, recursos, prescrição e decadência, procure um advogado ou a Defensoria Pública antes que o prazo termine. O contador de dias do portal ajuda a estimar, mas não substitui a análise de quem conhece o caso.',
      ],
    },
  ],
  faq: [
    {
      question: 'O dia inicial entra na contagem do prazo?',
      answer:
        'Na regra geral, não. Conta-se a partir do dia seguinte e inclui-se o último dia. O contrato pode dizer o contrário.',
    },
    {
      question: 'Qual a diferença entre dias corridos e dias úteis?',
      answer:
        'Dias corridos incluem sábados, domingos e feriados. Dias úteis excluem esses dias e fazem o prazo durar mais tempo no calendário.',
    },
    {
      question: 'O que fazer se o prazo termina em um sábado ou domingo?',
      answer:
        'Em vários prazos legais, o vencimento passa para o primeiro dia útil seguinte. Para prazos de contrato, depende do que está escrito.',
    },
    {
      question: 'O contador de dias desconta feriados?',
      answer:
        'Não. Ele conta dias corridos e dias de segunda a sexta. Para dias úteis, desconte os feriados do período.',
    },
    {
      question: 'Quantos dias tenho para desistir de uma compra online?',
      answer:
        '7 dias corridos, contados da assinatura do contrato ou do recebimento do produto.',
    },
  ],
  sources: [
    { label: 'Código Civil, art. 132: contagem de prazos' },
    {
      label: 'Código de Processo Civil, arts. 219 e 224: prazos em dias úteis',
    },
    { label: 'Código de Defesa do Consumidor, arts. 26 e 49' },
    { label: 'CLT, art. 477 e art. 487: rescisão e aviso prévio' },
  ],
} as const satisfies GuideDocument;
