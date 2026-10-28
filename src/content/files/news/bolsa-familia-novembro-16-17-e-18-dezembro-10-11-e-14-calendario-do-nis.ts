import type { NewsDocument } from '../../types';

export const newsBolsaFamiliaNovembroDezembro2026 = {
  kind: 'news',
  slug: 'bolsa-familia-novembro-16-17-e-18-dezembro-10-11-e-14-calendario-do-nis',
  title:
    'Bolsa Família: novembro paga em 16, 17 e 18/11 e dezembro em 10, 11 e 14/12; veja seu NIS',
  description:
    'O calendário extraordinário do MDS segue em novembro e dezembro: três dias de pagamento por mês. Veja a data do seu NIS e quanto vale cada benefício.',
  category: 'beneficios',
  coverImage: {
    src: '/images/news/bolsa-familia-novembro-16-17-e-18-dezembro-10-11-e-14-calendario-do-nis.jpg',
    alt: 'Calendário de novembro com os dias 16, 17 e 18 marcados, documento com as datas por final do NIS e celular do Bolsa Família.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-10-28',
  updatedAt: '2026-10-28',
  tags: ['bolsa-familia', 'beneficios', 'calendario', 'caixa', 'nis'],
  featuredCalculators: ['bolsa-familia'],
  highlights: [
    {
      value: '16/11',
      label: 'NIS final 1 em novembro',
      note: 'Final 2 recebe em 17/11 e os demais finais, em 18/11.',
    },
    {
      value: '10/12',
      label: 'NIS final 1 em dezembro',
      note: 'Final 2 recebe em 11/12 e os demais finais, em 14/12.',
    },
    {
      value: 'R$ 691',
      label: 'Piso por família',
      note: 'Vale desde a folha de outubro, após o reajuste do benefício.',
    },
    {
      value: '19,3 mi',
      label: 'Famílias em outubro',
      note: 'Valor médio de R$ 782,92, segundo a Agência Brasil.',
    },
  ],
  sections: [
    {
      heading: 'Quais são as datas de novembro e de dezembro?',
      paragraphs: [
        'O Ministério do Desenvolvimento e Assistência Social (MDS) adotou um calendário extraordinário para outubro, novembro e dezembro de 2026. Em vez de pagar o Bolsa Família ao longo de quase duas semanas, com um final de NIS por dia útil, a Caixa concentra os depósitos em três dias por mês. A medida consta da Portaria MDS nº 1.221, publicada em 19 de outubro. Em outubro, o primeiro grupo recebeu em 19/10 e os demais, até 21/10.',
        'Para novembro, o NIS final 1 recebe em 16/11, o final 2 em 17/11 e todos os demais finais (3 a 9 e 0) em 18/11. Em dezembro, as datas são 10/12 para o final 1, 11/12 para o final 2 e 14/12 para os finais 3 a 9 e 0. O NIS considerado é o do responsável familiar, o mesmo número que aparece no aplicativo Bolsa Família.',
      ],
      table: {
        caption:
          'Bolsa Família: calendário extraordinário de novembro e dezembro de 2026',
        columns: ['Final do NIS', 'Novembro', 'Dezembro'],
        rows: [
          ['1', '16/11', '10/12'],
          ['2', '17/11', '11/12'],
          ['3, 4, 5, 6, 7, 8, 9 e 0', '18/11', '14/12'],
        ],
      },
    },
    {
      heading: 'Por que o governo concentrou os pagamentos?',
      image: {
        src: '/images/news/bolsa-familia-novembro-16-17-e-18-dezembro-10-11-e-14-calendario-do-nis-detalhe.jpg',
        alt: 'Detalhe do calendário de novembro com os dias 16, 17 e 18 marcados e a tabela do NIS.',
        caption: 'Em novembro, o pagamento cabe em três datas.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A portaria justifica a mudança como mitigação de riscos excepcionais ligados ao fenômeno El Niño, que pode trazer seca em algumas regiões e chuvas fortes em outras. Na prática, o governo suspendeu por três meses o pagamento escalonado por final de NIS previsto nas regras do programa, e esse prazo pode ser prorrogado por igual período.',
        'A concentração muda apenas a data do depósito. Não há parcela extra nem aumento de valor por causa do calendário. Quem receberia no fim do mês, como o NIS final 0, que costuma ser o último a receber, passa a ter o dinheiro na conta bem antes: em novembro, no dia 18 em vez do dia 30.',
        'Famílias de municípios com situação de emergência ou calamidade pública reconhecida pelo governo federal continuam com a regra própria, que libera o benefício no primeiro dia do calendário, independentemente do final do NIS. Confira no aplicativo se a sua cidade está nessa situação.',
      ],
    },
    {
      heading: 'Quanto vale o benefício hoje?',
      paragraphs: [
        'Desde a folha de outubro, o Bolsa Família tem piso de R$ 691 por família, contra os R$ 600 anteriores, um reajuste de 15,04% baseado no INPC acumulado de março de 2023 a agosto de 2026 (Decreto nº 13.120). O piso é um mínimo que depende da composição da família, não um valor fixo para todos.',
        'Os benefícios individuais também subiram: o Benefício de Renda de Cidadania foi de R$ 142 para R$ 164 por integrante; o Benefício Primeira Infância, de R$ 150 para R$ 173 por criança de 0 a 6 anos; e o Benefício Variável Familiar, de R$ 50 para R$ 58 por gestante, nutriz ou jovem de 7 a 18 anos. Quando a soma fica abaixo de R$ 691, o Benefício Complementar cobre a diferença.',
        'Exemplo calculado: uma mãe com duas crianças de 3 e 5 anos forma uma família de 3 pessoas. São 3 × R$ 164 = R$ 492 de Renda de Cidadania, mais 2 × R$ 173 = R$ 346 de Primeira Infância. O total é R$ 838, acima do piso, e por isso não há complemento. Já uma pessoa que mora sozinha soma R$ 164 e recebe o complemento até chegar a R$ 691. Esses cálculos são ilustrativos: o valor real depende da folha de cada família e é confirmado no aplicativo.',
        'Em outubro, a Agência Brasil informou 19,3 milhões de famílias atendidas, com valor médio de R$ 782,92. A folha subiu de R$ 13 bilhões em setembro para R$ 15 bilhões em outubro, efeito do reajuste.',
      ],
    },
    {
      heading: 'Como conferir a data e o valor da sua parcela',
      paragraphs: [
        'Abra o aplicativo Bolsa Família ou o Caixa Tem e veja o extrato do mês. O saque pode ser feito pelo Cartão Bolsa Família, pelo aplicativo ou nos canais da Caixa. A calculadora do Bolsa Família do PortalFina ajuda a estimar o benefício conforme a composição da família, mas a confirmação oficial é sempre o extrato.',
        'Em caso de dúvida, o Disque Social (121) responde sobre cadastro e regras, e a Caixa atende pelo 111 para pagamentos e saques. Desconfie de mensagens que pedem dinheiro, senha ou código para liberar parcela: o benefício não tem taxa e os canais oficiais não pedem esses dados. Tem direito quem cumpre os requisitos do programa e mantém o Cadastro Único atualizado.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem tem NIS final 0 recebe em 30 de novembro?',
      answer:
        'Não. Com o calendário extraordinário, os finais 3 a 9 e 0 recebem juntos em 18/11, e em dezembro em 14/12.',
    },
    {
      question: 'O calendário concentrado aumenta o valor da parcela?',
      answer:
        'Não. Muda só a data do depósito. O valor depende da composição da família e do reajuste que já vale desde outubro.',
    },
    {
      question: 'O calendário volta ao normal em janeiro?',
      answer:
        'A suspensão do pagamento escalonado vale por três meses e pode ser prorrogada por igual período. Acompanhe os comunicados do MDS.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: beneficiários com NIS final 2 recebem Bolsa Família de outubro',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-10/beneficiarios-com-nis-de-final-2-recebem-bolsa-familia-de-outubro',
    },
    {
      label:
        'MDS: Bolsa Família terá valor mínimo de R$ 691 a partir de outubro',
      url: 'https://www.gov.br/mds/pt-br/noticias/bolsa-familia-tera-valor-minimo-de-r-691-a-partir-de-outubro',
    },
    {
      label:
        'MDS: pagamentos de outubro do Bolsa Família e calendário extraordinário',
      url: 'https://www.gov.br/mds/pt-br/noticias/pagamentos-de-outubro-do-bolsa-familia-comecam-nesta-segunda-feira-19-10-1/',
    },
    {
      label: 'MDS: página do programa Bolsa Família',
      url: 'https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia',
    },
  ],
} as const satisfies NewsDocument;
