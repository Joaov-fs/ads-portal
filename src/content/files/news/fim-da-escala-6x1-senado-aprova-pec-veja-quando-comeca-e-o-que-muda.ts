import type { NewsDocument } from '../../types';

export const newsFimEscala6x1SenadoAprova = {
  kind: 'news',
  slug: 'fim-da-escala-6x1-senado-aprova-pec-veja-quando-comeca-e-o-que-muda',
  title:
    'Fim da escala 6x1: Senado aprova PEC em dois turnos; veja quando começa e o que muda',
  description:
    'O Senado aprovou a PEC que reduz a jornada de 44 para 40 horas e garante duas folgas por semana. Veja a transição de 14 meses, quem fica de fora e o valor da hora.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/fim-da-escala-6x1-senado-aprova-pec-veja-quando-comeca-e-o-que-muda.jpg',
    alt: 'Documento com a votação de 75 a 1, calendário de outubro de 2026 com os dias 14 e 20 marcados, relógio e etiqueta 5x2.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'gustavo-xavier',
  publishedAt: '2026-10-15',
  updatedAt: '2026-10-15',
  tags: ['escala-6x1', 'jornada-de-trabalho', 'clt', 'pec', 'trabalho'],
  featuredCalculators: ['salario-por-hora', 'horas-extras'],
  highlights: [
    {
      value: '75 a 1',
      label: 'Votação final no Senado, em 14/10',
      note: 'A PEC 221/2019 foi aprovada em dois turnos no mesmo dia.',
    },
    {
      value: '44h para 40h',
      label: 'Nova jornada semanal máxima',
      note: 'Com limite de 8 horas por dia e sem redução de salário.',
    },
    {
      value: '2 meses',
      label: 'Para a primeira etapa começar',
      note: 'Contados da publicação da emenda: 42 horas e duas folgas.',
    },
    {
      value: '14 meses',
      label: 'Para chegar às 40 horas',
      note: 'Também contados da publicação da emenda.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado aprovou',
      paragraphs: [
        'O Senado aprovou na quarta-feira, 14 de outubro de 2026, a PEC 221/2019, que acaba com a escala 6x1 na prática. Foram dois turnos de votação no mesmo dia, e o placar do segundo turno foi de 75 votos a favor e 1 contra, quando o mínimo exigido era de 49 votos. A Câmara dos Deputados já havia aprovado o texto em maio, e como o Senado manteve a redação, a proposta não volta para os deputados.',
        'O texto reduz a jornada semanal máxima de 44 para 40 horas, mantém o limite de 8 horas por dia e garante dois dias de descanso remunerado por semana, um deles preferencialmente no domingo. A emenda determina que a mudança aconteça sem redução de salário, inclusive nos pisos de cada categoria.',
        'Por ser emenda constitucional, a PEC não passa por sanção ou veto do presidente da República. O próximo passo é a promulgação pelo Congresso, em sessão conjunta das Mesas da Câmara e do Senado.',
      ],
    },
    {
      heading: 'Quando começa a valer',
      image: {
        src: '/images/news/fim-da-escala-6x1-senado-aprova-pec-veja-quando-comeca-e-o-que-muda-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com a votação de 75 a 1, a jornada de 44 para 40 horas e a transição de 14 meses, ao lado do calendário de outubro.',
        caption: 'Os números centrais da PEC aprovada pelo Senado.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A mudança vale a partir da publicação da emenda, e os prazos são contados dessa data. Em duas etapas: dois meses depois da publicação, a jornada máxima cai de 44 para 42 horas e a exigência de dois dias de descanso por semana entra em vigor. Quatorze meses depois da publicação, a jornada cai de 42 para 40 horas.',
        'A data da promulgação ainda não foi confirmada oficialmente. Segundo o jornal A Tarde, a expectativa é de uma sessão solene no Senado na terça-feira, 20 de outubro, mas a Exame informa que nenhuma data foi marcada. Por isso, a tabela abaixo é uma simulação: ela usa 20 de outubro de 2026 como data de publicação e deve ser ajustada quando a emenda sair no Diário Oficial.',
      ],
      table: {
        caption: 'Calendário simulado, se a emenda for publicada em 20/10/2026',
        columns: ['Etapa', 'Quando', 'O que passa a valer'],
        rows: [
          [
            'Publicação da emenda',
            'Simulação: 20/10/2026',
            'Contagem dos prazos',
          ],
          [
            'Primeira etapa',
            'Por volta de 20/12/2026',
            'Jornada de 42 horas e duas folgas por semana',
          ],
          [
            'Segunda etapa',
            'Por volta de 20/12/2027',
            'Jornada de 40 horas por semana',
          ],
        ],
      },
    },
    {
      heading: 'O que muda para quem trabalha na escala 6x1',
      paragraphs: [
        'Quem trabalha seis dias e folga um passa a ter direito a duas folgas semanais pagas depois da primeira etapa. Os dois dias de descanso não precisam ser seguidos, e convenções e acordos coletivos podem organizar a distribuição das horas, desde que respeitem os limites do texto. Durante a fase de 42 horas, os acordos podem organizar a jornada diária, mantendo as duas folgas.',
        'A regra vale para os contratos em andamento, e o salário não pode ser reduzido por causa da menor jornada. Na prática, quem recebe por mês passa a ganhar o mesmo valor por menos horas, e por isso o valor da hora de trabalho sobe. Na tabela, o cálculo usa o divisor mensal de 220, 210 e 200 horas, que corresponde a 44, 42 e 40 horas por semana.',
      ],
      table: {
        caption: 'Valor da hora com o mesmo salário mensal (estimativa)',
        columns: [
          'Salário mensal',
          'Hora com 44 horas',
          'Hora com 42 horas',
          'Hora com 40 horas',
        ],
        rows: [
          ['R$ 1.621,00', 'R$ 7,37', 'R$ 7,72', 'R$ 8,11'],
          ['R$ 2.000,00', 'R$ 9,09', 'R$ 9,52', 'R$ 10,00'],
          ['R$ 3.000,00', 'R$ 13,64', 'R$ 14,29', 'R$ 15,00'],
        ],
      },
    },
    {
      heading: 'O que isso muda nas horas extras',
      paragraphs: [
        'Com a hora normal mais cara, a hora extra também fica mais cara. Para quem ganha R$ 2.000,00, a hora extra com adicional de 50% sai de R$ 13,64 com 44 horas semanais para R$ 15,00 com 40 horas. Além disso, o trabalho depois do limite semanal passa a ser contado como hora extra a partir de um número menor de horas, o que pode aumentar o custo de manter equipes na mesma escala.',
        'Para simular o seu caso, use a calculadora de salário por hora e a de horas extras do portal. Elas permitem trocar o salário e as horas e ver a diferença antes e depois da mudança.',
      ],
    },
    {
      heading: 'Quem fica de fora ou tem regras próprias',
      paragraphs: [
        'O texto exclui os servidores públicos, que seguem regras próprias, e trabalhadores com curso superior que ganham mais de 2,5 vezes o teto do INSS, cerca de R$ 21,2 mil por mês. Para esse segundo grupo, as novas regras de jornada não valem, a menos que o empregador decida aplicá-las ou que um acordo coletivo preveja, mas o direito às duas folgas semanais continua.',
        'Segundo a cobertura da imprensa, a PEC permite que convenções coletivas organizem outros arranjos de descanso, desde que a média mensal dê duas folgas por semana e haja ao menos um descanso a cada sete dias. Leis futuras podem tratar de setores de funcionamento contínuo, como saúde, transporte, comércio e hotelaria, e de regras de transição para micro e pequenas empresas.',
        'Os trabalhadores terceirizados que atendem órgãos públicos também são cobertos, mas a redução de jornada nesses contratos depende de aditivos, que devem ser feitos em até um ano.',
      ],
    },
    {
      heading: 'O que fazer agora',
      paragraphs: [
        'Nada muda hoje: até a publicação da emenda e o início da primeira etapa, vale a jornada atual de até 44 horas semanais. Quem trabalha na escala 6x1 deve acompanhar a publicação no Diário Oficial e conferir com a empresa ou o sindicato como a nova escala será organizada.',
        'O empregador pode precisar rever escalas, contratações e acordos coletivos durante os 14 meses de transição. Para o trabalhador, vale guardar o contrato, o holerite e o registro de ponto, que ajudam a conferir o valor da hora e das horas extras quando a mudança começar.',
      ],
    },
  ],
  faq: [
    {
      question: 'O fim da escala 6x1 já está valendo?',
      answer:
        'Ainda não. O Senado aprovou a PEC em 14 de outubro, mas a emenda precisa ser promulgada e publicada. A primeira etapa começa dois meses depois da publicação.',
    },
    {
      question: 'Vai haver redução de salário?',
      answer:
        'Não. O texto garante a redução da jornada sem redução de salário, inclusive nos pisos das categorias.',
    },
    {
      question: 'Quando a jornada chega a 40 horas?',
      answer:
        'Quatorze meses depois da publicação da emenda. Antes disso, dois meses depois da publicação, a jornada máxima cai para 42 horas.',
    },
    {
      question: 'A PEC precisa de sanção do presidente?',
      answer:
        'Não. Emendas constitucionais são promulgadas pelo Congresso, sem sanção nem veto.',
    },
    {
      question: 'Quem fica fora das novas regras de jornada?',
      answer:
        'Servidores públicos e trabalhadores com curso superior que ganham mais de 2,5 vezes o teto do INSS, cerca de R$ 21,2 mil, a menos que o empregador aplique as regras ou um acordo preveja.',
    },
  ],
  sources: [
    {
      label:
        'Senado Notícias: PEC do fim da 6x1 pode ser votada nesta quarta (13/10/2026)',
      url: 'https://www12.senado.leg.br/noticias/materias/2026/10/13/pec-do-fim-da-6x1-pode-ser-votada-nesta-quarta-apos-quinta-sessao-de-discussao',
    },
    {
      label:
        'Exame: Fim da escala 6x1 aprovada no Senado, o que acontece agora e quando começa (15/10/2026)',
      url: 'https://exame.com/brasil/fim-da-escala-6x1-aprovada-no-senado-o-que-acontece-agora-e-quando-comeca/',
    },
    {
      label:
        'A Tarde: Senado aprova fim da escala 6x1 em dois turnos e PEC será promulgada (15/10/2026)',
      url: 'https://atarde.com.br/politica/senado-aprova-fim-da-escala-6x1-em-dois-turnos-e-pec-sera-promulgada-1405756',
    },
    {
      label:
        'BM&C News: Fim da escala 6x1 é aprovado no Senado; veja quando novas regras começam a valer (15/10/2026)',
      url: 'https://bmcnews.com.br/economia/fim-da-escala-6x1-e-aprovado-no-senado-veja-quando-novas-regras-comecam-a-valer/',
    },
    {
      label:
        'CNN Brasil: Fim da 6x1, cronograma se a PEC for aprovada (14/10/2026)',
      url: 'https://www.cnnbrasil.com.br/economia/money/macroeconomia/fim-da-6x1-quando-regra-passa-a-valer-se-pec-for-aprovada-veja-cronograma/',
    },
  ],
} as const satisfies NewsDocument;
