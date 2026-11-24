import type { NewsDocument } from '../../types';

export const newsPortariaMte2041Escala5x2 = {
  kind: 'news',
  slug: 'portaria-mte-2041-escala-5x2-dois-repousos-divisor-210-e-200',
  title:
    'Portaria 2.041 detalha a escala 5x2: dois repousos de 24 horas, domingo a cada 3 semanas no comércio e divisor 210 em 16/12',
  description:
    'A Portaria 2.041 do MTE regulamenta a escala 5x2: dois repousos semanais, 42 horas em 16/12 e divisor 210 para a hora. Veja o que muda para quem é CLT.',
  category: 'trabalho',
  coverImage: {
    src: '/images/news/portaria-mte-2041-escala-5x2-dois-repousos-divisor-210-e-200.jpg',
    alt: 'Documento com a Portaria 2.041, dois dias de repouso e jornada de 42 horas, calendário de dezembro com o dia 16 marcado e etiqueta de duas folgas.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-24',
  updatedAt: '2026-11-24',
  tags: [
    'escala-5x2',
    'portaria',
    'repouso-semanal',
    'jornada-de-trabalho',
    'trabalho',
  ],
  featuredCalculators: ['horas-extras', 'salario-por-hora', 'dsr'],
  highlights: [
    {
      value: '2 repousos',
      label: 'Por semana, de 24 horas cada',
      note: 'Um deles preferencialmente aos domingos, a partir de 16/12.',
    },
    {
      value: '210',
      label: 'Divisor da hora em 16/12',
      note: 'Sobe a 200 em 16/12/2027; hoje é 220.',
    },
    {
      value: '42h',
      label: 'Limite semanal em 16/12',
      note: 'Cai para 40h em 16/12/2027, sem redução do salário.',
    },
  ],
  sections: [
    {
      heading: 'O que a Portaria 2.041 define e o que mudou desde o decreto',
      paragraphs: [
        'O Ministério do Trabalho e Emprego (MTE) publicou em 23/11, em edição extra do Diário Oficial da União, a Portaria 2.041, assinada pelo ministro Luiz Marinho. Ela traz as regras complementares para a escala 5x2 e detalha o Decreto 13.173/2026, assinado em 19/11, que regulamenta a Emenda Constitucional 141, de 16/10/2026.',
        'A portaria era esperada: no dia da assinatura do decreto, o ministério havia dito que publicaria normas complementares. O que muda em relação à notícia anterior do portal é a regra prática: como funcionam os dois repousos, a exigência de folga aos domingos, o tratamento da escala 12x36 e o cálculo do salário-hora de quem recebe por hora.',
        'As datas continuam as mesmas: a jornada de 42 horas semanais e os dois dias de repouso valem a partir de 16/12/2026, e o limite cai para 40 horas em 16/12/2027. O banco de horas acumulado até 15/12/2026 segue as condições do acordo individual ou coletivo em que foi formado.',
      ],
    },
    {
      heading: 'Dois repousos de 24 horas e a folga aos domingos',
      image: {
        src: '/images/news/portaria-mte-2041-escala-5x2-dois-repousos-divisor-210-e-200-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com Portaria MTE 2.041, repouso semanal de 2 dias, jornada de 42h e início em 16/12.',
        caption:
          'Os números da ilustração vêm da Portaria 2.041 e do comunicado do MTE de 23/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A partir de 16/12/2026, todo empregado terá dois dias de repouso semanal, cada um com 24 horas consecutivas, sendo um deles preferencialmente aos domingos. Os dois dias podem ser seguidos ou separados dentro da semana.',
        'Convenção ou acordo coletivo pode distribuir os repousos de outra forma ao longo do mês, desde que a média seja de dois por mês-calendário e que haja pelo menos um descanso a cada seis dias consecutivos de trabalho. A compensação não pode reduzir o total de repousos devidos.',
        'No comércio em geral, o repouso deve coincidir com o domingo pelo menos uma vez a cada três semanas. Nas demais atividades, pelo menos uma vez a cada quatro semanas. Serviços que exigem trabalho aos domingos precisam de escala de revezamento mensal, sujeita à fiscalização do MTE. Para as empregadas que trabalham aos domingos, vale o revezamento quinzenal do art. 386 da CLT.',
      ],
    },
    {
      heading: 'Divisor da hora, salário-hora e o exemplo em reais',
      paragraphs: [
        'O divisor usado para calcular o valor da hora passa de 220 (jornada de 44 horas) para 210 em 16/12/2026 e para 200 em 16/12/2027. Divisores mais favoráveis ao trabalhador, previstos em convenção, acordo, contrato ou regulamento, são preservados.',
        'Exemplo com salário de R$ 2.100: hoje a hora vale R$ 9,55 (2.100 dividido por 220). Com o divisor 210, passa a R$ 10,00. Em 2027, com divisor 200, vai a R$ 10,50. Para o mensalista, o repouso já está incluído no salário, e a portaria diz que isso não gera aumento por si só.',
        'Para quem é pago por hora, os dois repousos podem ser incorporados à hora trabalhada com acréscimo de 16,667% sobre o salário-hora normal. Exemplo: uma hora de R$ 20,00 passa a R$ 23,33 com esse acréscimo (20,00 vezes 1,16667).',
      ],
      table: {
        caption: 'Valor da hora para um salário mensal de R$ 2.100',
        columns: ['Período', 'Jornada', 'Divisor', 'Valor da hora'],
        rows: [
          ['Até 15/12/2026', '44h', '220', 'R$ 9,55'],
          ['A partir de 16/12/2026', '42h', '210', 'R$ 10,00'],
          ['A partir de 16/12/2027', '40h', '200', 'R$ 10,50'],
        ],
      },
    },
    {
      heading: 'Escala 12x36, turnos, acordos coletivos e saúde no trabalho',
      paragraphs: [
        'Na escala 12x36, se a média mensal de horas passar do limite semanal, a empresa deve garantir compensação ou pagar horas extras, conforme convenção ou acordo coletivo. Nos turnos ininterruptos de revezamento, a jornada é de 6 horas diárias, salvo negociação coletiva.',
        'A compensação de horários só pode ser feita por convenção ou acordo coletivo, e a média semanal e mensal é apurada por mês-calendário. Cláusulas coletivas incompatíveis, como jornada acima do limite constitucional ou menos de dois repousos, deixam de produzir efeito quando as obrigações se tornarem exigíveis. Não pode haver redução salarial nem alteração de pisos, e jornadas que já eram de 40 horas ou menos não são reduzidas proporcionalmente.',
        'A portaria também manda considerar os riscos ocupacionais ao prorrogar ou compensar horas e, quando couber, atualizar o PGR, conforme a NR-01. O MTE informou que ainda editará normas sobre compensação de repousos por negociação coletiva, trabalhadores em afastamento contínuo e profissões regulamentadas por lei específica.',
      ],
    },
    {
      heading: 'O que conferir até 16/12',
      paragraphs: [
        'Quem faz hora extra deve conferir no contracheque de dezembro e de janeiro qual divisor foi usado. Se a empresa continuar com 220 depois de 16/12, a hora sai menor do que a prevista. Quem trabalha em escala de revezamento pode perguntar à empresa como ficará a folga de domingo e se haverá acordo coletivo.',
        'A escala 5x2 também está em discussão no STF, que mantém o início em 16/12 por liminar do ministro Flávio Dino e ainda vai julgar o mérito. Como o texto completo da portaria está no Diário Oficial, vale consultá-lo ou falar com o sindicato para o seu caso. Para simular, use as calculadoras de horas extras, salário por hora e DSR.',
      ],
    },
  ],
  faq: [
    {
      question: 'A Portaria 2.041 reduz o salário de quem é CLT?',
      answer:
        'Não. Segundo o MTE, não pode haver redução salarial nominal, proporcional ou de outra espécie, nem alteração de pisos. A jornada cai de 44 para 42 horas em 16/12/2026.',
    },
    {
      question: 'Todo mundo terá folga aos domingos?',
      answer:
        'Não necessariamente. Um dos dois repousos é preferencialmente no domingo. No comércio, o repouso deve coincidir com o domingo ao menos uma vez a cada três semanas, e nas demais atividades, a cada quatro.',
    },
    {
      question: 'Como fica a hora de quem ganha por hora?',
      answer:
        'Os dois repousos podem ser incorporados à hora trabalhada com acréscimo de 16,667% sobre o salário-hora normal, segundo a portaria.',
    },
  ],
  sources: [
    {
      label:
        'Ministério do Trabalho e Emprego: Governo Federal publica portaria com regras complementares para aplicação da escala 5x2',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/novembro/governo-federal-publica-portaria-com-regras-complementares-para-aplicacao-da-escala-5x2',
    },
    {
      label:
        'Agência Gov: Governo publica portaria com regras complementares para a escala 5x2',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/governo-federal-publica-portaria-com-regras-complementares-para-aplicacao-da-escala-5x2-1',
    },
    {
      label: 'Diário Oficial da União: Portaria MTE 2.041 (edição de 23/11/2026)',
      url: 'https://www.in.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
