import type { NewsDocument } from '../../types';

export const newsStfFuxInterrompeEscala5x2 = {
  kind: 'news',
  slug: 'stf-fux-interrompe-julgamento-da-escala-5x2-liminar-vale-e-sessao-sem-data',
  title:
    'Fux interrompe julgamento da escala 5x2 no STF: liminar de Dino vale e sessão não tem data',
  description:
    'O referendo virtual tinha 4 votos, mas foi interrompido e vai ao plenário físico. A liminar segue valendo e o início da escala 5x2 continua em 16/12.',
  category: 'politica',
  coverImage: {
    src: '/images/news/stf-fux-interrompe-julgamento-da-escala-5x2-liminar-vale-e-sessao-sem-data.jpg',
    alt: 'Documento com 4 votos, julgamento no plenário físico e sessão sem data, ao lado de calendário de dezembro com o dia 16 marcado.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-16',
  updatedAt: '2026-11-16',
  tags: ['stf', 'escala-5x2', 'escala-6x1', 'jornada-de-trabalho', 'politica'],
  featuredCalculators: ['horas-extras', 'salario-por-hora'],
  highlights: [
    {
      value: '16/12',
      label: 'Início da escala 5x2',
      note: 'Data mantida na liminar de Dino.',
    },
    {
      value: '4 votos',
      label: 'Placar até a interrupção',
      note: 'Dino, Moraes, Cármen Lúcia e Gilmar.',
    },
    {
      value: 'Sem data',
      label: 'Sessão no plenário físico',
      note: 'A data cabe ao presidente do STF.',
    },
  ],
  sections: [
    {
      heading: 'O que mudou desde a votação de 13/11',
      paragraphs: [
        'O julgamento virtual que referendaria a liminar do ministro Flávio Dino sobre a escala 5x2 foi interrompido por decisão do ministro Luiz Fux, segundo a Agência Brasil. A votação estava prevista para terminar nesta segunda-feira (16/11), mas o caso agora será discutido no plenário físico do Supremo Tribunal Federal (STF).',
        'Na notícia anterior do PortalFina, publicada em 14/11, havia quatro votos a favor da liminar: Dino (relator), Alexandre de Moraes, Cármen Lúcia e Gilmar Mendes. Esse placar fica como estava, porque o julgamento não foi concluído. As reportagens consultadas não informam se a interrupção foi um pedido de vista ou um destaque, nem trazem prazo ligado a ela.',
        'A Agência Brasil informa que a sessão do plenário físico ainda não tem data. Quem marca é o presidente do STF, ministro Edson Fachin.',
      ],
    },
    {
      heading: 'A liminar continua valendo até o plenário decidir',
      image: {
        src: '/images/news/stf-fux-interrompe-julgamento-da-escala-5x2-liminar-vale-e-sessao-sem-data-detalhe.jpg',
        alt: 'Detalhe do documento com 4 votos a favor, julgamento no plenário físico, sessão sem data e início da escala 5x2 em 16/12.',
        caption: 'Situação do julgamento no STF em 16/11/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Segundo a Radioagência Nacional, a decisão de Dino continua em vigor até que o plenário se reúna. O início da nova escala permanece em 16/12/2026, e a matéria registra que isso não mudou.',
        'A liminar fixa 42 horas semanais, distribuídas em cinco dias, com jornada de até 8h24 por dia durante a transição. Esses 24 minutos não configuram hora extra, por se tratar de período de transição. A decisão também retira a trava semanal das folgas: elas podem ser aproveitadas dentro do mês, até o limite de oito por mês, mediante negociação coletiva. Há ainda um prazo de 90 dias para ajustes necessários.',
        'As ações que originaram a liminar foram apresentadas pela Confederação Nacional do Comércio (CNC) e pela Confederação Nacional da Indústria (CNI), que pediam o adiamento da entrada em vigor das novas regras. Câmara e Senado pediram que o STF não referendasse a decisão, alegando alteração constitucional e violação da separação dos Poderes.',
      ],
      table: {
        caption: 'Escala 5x2: onde estão as coisas em 16/11/2026',
        columns: ['Ponto', 'Situação'],
        rows: [
          [
            'Votos já dados a favor da liminar',
            '4 (Dino, Moraes, Cármen Lúcia e Gilmar)',
          ],
          ['Formato do julgamento', 'Sai do virtual e vai ao físico'],
          ['Data da sessão', 'Ainda não marcada'],
          ['Liminar de Dino', 'Em vigor'],
          ['Início da escala 5x2', '16/12/2026'],
          ['Jornada na transição', '42 horas, até 8h24 por dia'],
        ],
      },
    },
    {
      heading: 'O que isso significa para o trabalhador',
      paragraphs: [
        'Na prática, nada muda hoje: a data de 16/12 e as regras de transição da liminar seguem valendo, e o plenário ainda pode confirmá-las, alterá-las ou derrubá-las. Como não há data para a sessão, existe a possibilidade de o início da escala chegar antes de uma decisão final do colegiado.',
        'A conta da jornada é direta: cinco dias de 8h24 somam 42 horas semanais, duas a menos que as 44 horas da jornada atual. Para quem hoje trabalha seis dias, a diferença é que o sexto dia deixa de existir na escala, e a carga diária sobe um pouco.',
        'Um exemplo com a base atual de 44 horas semanais (220 horas por mês): quem ganha R$ 2.200 tem hora normal de R$ 10,00. Uma hora extra com adicional de 50% vale R$ 15,00. Os 24 minutos diários da transição, até 8h24, não são pagos como hora extra, segundo a liminar. Para simular o seu caso, use as calculadoras de horas extras e de salário por hora.',
        'Enquanto o STF não decide, o caminho mais seguro é acompanhar o que o empregador comunicar e o que o sindicato da categoria negociar, já que a liminar prevê negociação coletiva para o uso das folgas dentro do mês.',
      ],
    },
  ],
  faq: [
    {
      question: 'O STF já decidiu sobre a escala 5x2?',
      answer:
        'Não. O julgamento virtual foi interrompido por decisão do ministro Luiz Fux e passa ao plenário físico, sem data marcada. Até lá, a liminar de Dino segue em vigor.',
    },
    {
      question: 'A escala 5x2 ainda começa em 16/12?',
      answer:
        'Segundo a Agência Brasil, sim: a data de 16/12/2026 foi mantida e a interrupção do julgamento não a alterou.',
    },
    {
      question: 'Quantos votos a liminar já tinha?',
      answer:
        'Quatro: Flávio Dino, Alexandre de Moraes, Cármen Lúcia e Gilmar Mendes. Os demais ministros não tinham votado, segundo as reportagens.',
    },
    {
      question: 'Quem decide quando o plenário vai julgar?',
      answer:
        'A Agência Brasil informa que cabe ao presidente do STF, ministro Edson Fachin, marcar a sessão do plenário físico.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Escala 5x2, Fux interrompe julgamento virtual sobre liminar de Dino',
      url: 'https://agenciabrasil.ebc.com.br/radioagencia-nacional/justica/audio/2026-11/escala-5x2-fux-interrompe-julgamento-virtual-sobre-liminar-de-dino',
    },
    {
      label:
        'Agência Brasil: STF tem 4 votos para manter início da escala 5x2 em dezembro',
      url: 'https://agenciabrasil.ebc.com.br/justica/noticia/2026-11/stf-tem-4-votos-para-manter-inicio-da-escala-5x2-em-dezembro',
    },
    {
      label:
        'STF: Escala 5x2, relator decidirá sobre implementação da nova jornada até sexta-feira (13)',
      url: 'https://noticias.stf.jus.br/postsnoticias/escala-5x2-relator-decidira-sobre-implementacao-da-nova-jornada-ate-sexta-feira-13/',
    },
  ],
} as const satisfies NewsDocument;
