import type { NewsDocument } from '../../types';

export const newsFeriadosNovembro2026 = {
  kind: 'news',
  slug: 'feriados-de-novembro-de-2026-sexta-20-e-feriadao-dia-15-cai-no-domingo-e-quem-trabalha-recebe-em-dobro',
  title:
    'Feriados de novembro de 2026: sexta 20/11 é feriadão, dia 15 cai no domingo e quem trabalha recebe em dobro',
  description:
    'Novembro tem três feriados: Finados (2/11), Proclamação no domingo (15/11) e Consciência Negra na sexta (20/11). Veja o que muda no salário e nos boletos.',
  category: 'brasil',
  coverImage: {
    src: '/images/news/feriados-de-novembro-de-2026-sexta-20-e-feriadao-dia-15-cai-no-domingo-e-quem-trabalha-recebe-em-dobro.jpg',
    alt: 'Calendário de novembro de 2026 com os dias 2, 15 e 20 marcados, lista dos feriados nacionais, etiqueta 20/11 e relógio.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-02',
  updatedAt: '2026-11-02',
  tags: ['feriado', 'trabalho', 'salario', 'clt', 'dsr', 'novembro'],
  featuredCalculators: ['dsr', 'salario-por-hora', 'horas-extras'],
  highlights: [
    {
      value: '20/11',
      label: 'Consciência Negra, sexta-feira',
      note: 'Feriado nacional e fim de semana de três dias.',
    },
    {
      value: '3',
      label: 'Feriados nacionais no mês',
      note: 'Finados (2/11), Proclamação (15/11) e Consciência Negra (20/11).',
    },
    {
      value: 'R$ 80,00',
      label: 'Dia extra para salário de R$ 2.400',
      note: 'Pago em dobro a quem trabalha no feriado sem folga compensatória.',
    },
  ],
  sections: [
    {
      heading: 'Quais são os feriados nacionais de novembro de 2026',
      image: {
        src: '/images/news/feriados-de-novembro-de-2026-sexta-20-e-feriadao-dia-15-cai-no-domingo-e-quem-trabalha-recebe-em-dobro-detalhe.jpg',
        alt: 'Detalhe da ilustração: lista com Finados na segunda, 2/11, Proclamação no domingo, 15/11, e Consciência Negra na sexta, 20/11.',
        caption:
          'Dois dos três feriados caem em dias úteis; o de 15/11 cai no domingo.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Novembro de 2026 tem três feriados nacionais. O primeiro é hoje, segunda-feira, 2 de novembro, Dia de Finados, que formou um fim de semana prolongado de três dias. O segundo é a Proclamação da República, em 15 de novembro, que cai em um domingo e, por isso, não dá folga extra a quem já descansa nesse dia. O terceiro é o Dia Nacional de Zumbi e da Consciência Negra, em 20 de novembro, uma sexta-feira.',
        'O 20 de novembro é feriado nacional por força da Lei 14.759, sancionada em 21 de dezembro de 2023, que declara o dia como feriado em todo o país. Como a data é fixa e cai em uma sexta-feira em 2026, quem trabalha de segunda a sexta tem um fim de semana de três dias, de 20 a 22 de novembro.',
        'Na prática, o mês tem dois feriados em dias úteis (2 e 20 de novembro) e um que coincide com o descanso semanal (15 de novembro). Para quem trabalha de segunda a sexta, são duas folgas que não precisam ser compensadas. Quem trabalha em escala, no comércio ou em serviços essenciais deve conferir o que vale no seu caso, como mostram as próximas seções.',
      ],
      table: {
        caption: 'Feriados nacionais de novembro de 2026',
        columns: [
          'Data',
          'Dia da semana',
          'Feriado',
          'Efeito para quem trabalha de segunda a sexta',
        ],
        rows: [
          [
            '2 de novembro',
            'Segunda-feira',
            'Finados',
            'Folga em dia útil e fim de semana de três dias',
          ],
          [
            '15 de novembro',
            'Domingo',
            'Proclamação da República',
            'Sem folga extra, cai no descanso semanal',
          ],
          [
            '20 de novembro',
            'Sexta-feira',
            'Dia Nacional de Zumbi e da Consciência Negra',
            'Folga em dia útil e fim de semana de três dias',
          ],
        ],
      },
    },
    {
      heading: 'Quem trabalha no feriado recebe em dobro?',
      paragraphs: [
        'A regra geral da CLT e da jurisprudência é que o trabalho em feriado, sem folga compensatória em outro dia, deve ser pago em dobro. É o que diz a Súmula 146 do Tribunal Superior do Trabalho: o trabalho em domingos e feriados, não compensado, é pago em dobro, sem prejuízo da remuneração do repouso semanal.',
        'Para quem recebe salário mensal, o dia de feriado já está incluído no salário. Por isso, o pagamento em dobro significa somar mais um dia de trabalho ao salário do mês. Exemplo: quem ganha R$ 2.400,00 por mês tem dia de R$ 80,00 (R$ 2.400,00 divididos por 30). Se trabalhar em 20 de novembro sem folga em outro dia, recebe R$ 80,00 a mais, e o dia trabalhado soma R$ 160,00 no total entre salário e adicional. Em 15 de novembro, que é domingo, vale a mesma lógica do trabalho no dia de descanso.',
        'Se a empresa der uma folga em outra data da mesma semana, o pagamento em dobro deixa de ser devido, porque o trabalho no feriado foi compensado. Quem ganha por hora pode ver o valor da hora na calculadora de salário por hora, e quem faz horas além da jornada deve usar a calculadora de horas extras. O DSR, o descanso semanal remunerado, tem calculadora própria no portal.',
      ],
      table: {
        caption: 'Exemplo para salário mensal de R$ 2.400,00 (30 dias)',
        columns: ['Situação em 20/11', 'Valor do dia', 'O que a empresa paga'],
        rows: [
          ['Folgou no feriado', 'R$ 80,00', 'Só o salário do mês'],
          [
            'Trabalhou e teve folga em outro dia',
            'R$ 80,00',
            'Só o salário do mês',
          ],
          [
            'Trabalhou e não teve folga',
            'R$ 80,00',
            'Salário do mês mais R$ 80,00 de adicional',
          ],
        ],
      },
    },
    {
      heading: 'E no comércio, na indústria e em escalas especiais?',
      paragraphs: [
        'No comércio em geral, o trabalho em feriados depende de autorização em convenção coletiva, conforme a Lei 10.101, de 2000. Por isso, o funcionamento das lojas e o pagamento de quem trabalha variam de acordo com o sindicato e a cidade. A convenção da categoria é o documento que diz se a loja pode abrir e quanto o empregado recebe.',
        'Em atividades contínuas, como hospitais, transporte e segurança, o trabalho no feriado costuma fazer parte da escala. O que não muda é o direito: ou o dia é compensado com folga, ou é pago em dobro. Quem trabalha em escala 12x36 segue regras próprias, pois o feriado já está considerado na remuneração dessa jornada, e o contrato ou a convenção deve ser consultado.',
        'Vale guardar o registro de ponto do dia 20 de novembro. É ele que comprova a data trabalhada e serve de base para o cálculo do adicional na folha de pagamento.',
      ],
    },
    {
      heading: 'Salário, boletos e bancos: o que o feriado muda',
      paragraphs: [
        'O prazo de pagamento do salário é até o quinto dia útil do mês seguinte, e o sábado conta como dia útil para essa finalidade. Como 2 de novembro é feriado e 1º é domingo, os dias úteis de novembro de 2026 começam em 3 de novembro e o quinto dia útil é sábado, 7 de novembro, que é o último dia para a empresa pagar o salário de outubro.',
        'Boletos que vencem em dia sem expediente bancário, como 20 de novembro, podem ser pagos no próximo dia útil sem multa nem juros. Em 2026, o próximo dia útil depois de 20 de novembro é segunda-feira, 23 de novembro. A recomendação é não deixar para o último dia: pagamentos por Pix funcionam 24 horas e não dependem do expediente dos bancos.',
        'Quem tem a primeira parcela do 13º salário para receber também deve ficar atento: o prazo legal é 30 de novembro, uma segunda-feira, dentro do mês. Os feriados não alteram essa data.',
      ],
    },
  ],
  faq: [
    {
      question: 'O dia 20 de novembro é feriado em todo o Brasil?',
      answer:
        'Sim. A Lei 14.759, de 21 de dezembro de 2023, declarou o 20 de novembro feriado nacional, para o Dia Nacional de Zumbi e da Consciência Negra.',
    },
    {
      question: 'O feriado de 15 de novembro será transferido para outro dia?',
      answer:
        'Não. A Proclamação da República é fixa em 15 de novembro, que em 2026 cai em um domingo, e não há dia útil de folga em troca.',
    },
    {
      question:
        'Quem trabalha no feriado e tem folga em outro dia recebe em dobro?',
      answer:
        'Não. O pagamento em dobro vale para o trabalho em feriado sem compensação. Se o empregador dá folga em outro dia, o dia trabalhado é compensado.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Zumbi, Finados e Proclamação, feriados nacionais de novembro',
      url: 'https://agenciabrasil.ebc.com.br/geral/noticia/2026-10/zumbi-finados-e-proclamacao-confira-feriados-nacionais-de-novembro',
    },
    {
      label:
        'Lei 14.759, de 21 de dezembro de 2023 (feriado nacional de 20 de novembro)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm',
    },
    {
      label: 'TST: Súmula 146 (trabalho em domingos e feriados não compensado)',
      url: 'https://www.lexml.gov.br/urn/urn:lex:br:tribunal.superior.trabalho:sumula:2003;146',
    },
    {
      label: 'Agência Brasil: feriados nacionais e pontos facultativos de 2026',
      url: 'https://agenciabrasil.ebc.com.br/geral/noticia/2025-12/confira-os-feriados-nacionais-e-pontos-facultativos-de-2026',
    },
  ],
} as const satisfies NewsDocument;
