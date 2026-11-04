import type { NewsDocument } from '../../types';

export const newsCopomMantemSelic4Novembro = {
  kind: 'news',
  slug: 'copom-mantem-selic-em-13-75-por-unanimidade-o-que-muda-no-seu-bolso',
  title:
    'Copom mantém a Selic em 13,75% por unanimidade: o que muda no seu bolso',
  description:
    'O Copom manteve a Selic em 13,75% ao ano em 4 de novembro, quando o mercado esperava corte. Veja o efeito no CDB, na dívida e na poupança, em reais.',
  category: 'mercado',
  coverImage: {
    src: '/images/news/copom-mantem-selic-em-13-75-por-unanimidade-o-que-muda-no-seu-bolso.jpg',
    alt: 'Documento do Copom com a Selic de 13,75%, calendário de dezembro com o dia 9 marcado, medidor de juros e carimbo de manutenção.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-11-04',
  updatedAt: '2026-11-04',
  tags: ['copom', 'selic', 'juros', 'inflacao', 'cdb', 'poupanca', 'dividas'],
  featuredCalculators: ['cdb-liquido', 'cdi', 'simulador-de-emprestimo'],
  highlights: [
    {
      value: '13,75%',
      label: 'Selic mantida em 4/11',
      note: 'Decisão unânime do Copom, com o mercado esperando corte de 0,25 ponto.',
    },
    {
      value: '9/12',
      label: 'Próxima decisão do Copom',
      note: 'A reunião é nos dias 8 e 9 de dezembro.',
    },
    {
      value: '4,62%',
      label: 'IPCA em 12 meses (IPCA-15)',
      note: 'Acima do teto da meta, que é de 4,5%.',
    },
    {
      value: '5,22%',
      label: 'IPCA de 2026 no Focus',
      note: 'Projeção do mercado, também acima do teto.',
    },
  ],
  sections: [
    {
      heading: 'O que o Copom decidiu e por que a decisão surpreendeu',
      paragraphs: [
        'O Comitê de Política Monetária (Copom) do Banco Central manteve a taxa Selic em 13,75% ao ano, por unanimidade, na reunião de 3 e 4 de novembro. A decisão foi divulgada na noite de 4 de novembro. O mercado esperava um novo corte de 0,25 ponto percentual, o que levaria a taxa a 13,5%, e parte das instituições apostava na manutenção.',
        'Foi a primeira vez desde abril que o comitê não reduziu a taxa. De junho de 2025 a março de 2026, a Selic ficou em 15% ao ano, o maior nível em quase 20 anos. Desde abril, foram cinco cortes, o último deles em setembro, quando a taxa chegou aos 13,75%.',
        'A Agência Brasil lista entre os fatores que dificultam o trabalho do Banco Central o agravamento da guerra no Oriente Médio, o início do fenômeno El Niño e a recente instabilidade do câmbio. O comunicado completo do Copom está na página do Banco Central, e a ata da reunião sai na terça-feira, 10 de novembro.',
      ],
    },
    {
      heading: 'A inflação que pesou na decisão',
      image: {
        src: '/images/news/copom-mantem-selic-em-13-75-por-unanimidade-o-que-muda-no-seu-bolso-detalhe.jpg',
        alt: 'Detalhe da ilustração: ficha da decisão do Copom com Selic de 13,75%, votação unânime e próxima decisão em 9 de dezembro.',
        caption: 'A próxima decisão do Copom é em 9 de dezembro.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'A meta de inflação é de 3%, com tolerância de 1,5 ponto para cima ou para baixo, ou seja, de 1,5% a 4,5%. A prévia da inflação de outubro, o IPCA-15, subiu 0,32%, ajudada pela queda nas contas de luz, mas a inflação em 12 meses passou de 4,5% para 4,62%, já acima do teto.',
        'O boletim Focus, que reúne as projeções do mercado, indica IPCA de 5,22% em 2026, também acima do limite da meta. Antes da guerra no Oriente Médio, essa estimativa era de 3,95%. Para o crescimento da economia, o Focus aponta alta de 1,76% do PIB em 2026, abaixo dos 1,85% de quatro semanas antes.',
        'Em português claro: com a inflação acima do teto, o Banco Central segura os juros altos por mais tempo para esfriar os preços, mesmo que isso deixe o crédito caro e a economia mais lenta.',
      ],
    },
    {
      heading: 'O que muda no CDB, na dívida e na poupança',
      paragraphs: [
        'Como a Selic não mudou, quem tem aplicação ou dívida atrelada ao CDI não sente alteração agora. O CDI fica cerca de 0,10 ponto abaixo da Selic, perto de 13,65% ao ano. Um CDB que paga 100% do CDI rende, em R$ 10.000 por 12 meses, cerca de R$ 1.365,00 brutos. Com o Imposto de Renda de 17,5%, que vale para prazos acima de 720 dias, o líquido é de R$ 1.126,13.',
        'Se o corte de 0,25 ponto tivesse acontecido, o CDI iria a cerca de 13,40% e o mesmo CDB renderia R$ 1.105,50 líquidos. A manutenção, portanto, preserva cerca de R$ 20,63 por ano a cada R$ 10 mil aplicados, em comparação com o cenário do corte.',
        'Para quem deve, vale o inverso: o custo não cai. Uma dívida de R$ 50.000 a 120% do CDI custa cerca de 16,38% ao ano, ou R$ 8.190 de juros em 12 meses. Com o corte, seriam cerca de R$ 8.040, R$ 150 a menos. Já a poupança segue rendendo 0,5% ao mês mais a TR, ou R$ 50 por mês mais a TR em R$ 10.000, porque a Selic está acima de 8,5% ao ano.',
        'Os cálculos são simplificados: usam um ano fechado e juros simples sobre o valor aplicado, só para comparar os cenários. Para o seu caso, use a calculadora de CDB líquido e o simulador de empréstimo.',
      ],
      table: {
        caption: 'CDB a 100% do CDI em R$ 10.000 por 12 meses, com IR de 17,5%',
        columns: [
          'Cenário',
          'CDI aproximado',
          'Rendimento bruto',
          'Rendimento líquido',
        ],
        rows: [
          ['Selic mantida em 13,75%', '13,65%', 'R$ 1.365,00', 'R$ 1.126,13'],
          ['Se tivesse caído a 13,50%', '13,40%', 'R$ 1.340,00', 'R$ 1.105,50'],
        ],
      },
    },
    {
      heading: 'O que vem a seguir',
      paragraphs: [
        'A ata da reunião, publicada em 10 de novembro, mostra os argumentos do comitê e costuma indicar se o ciclo de cortes continua. O IBGE divulga o IPCA cheio de outubro ainda em novembro, e o Focus sai toda segunda-feira com as novas projeções do mercado.',
        'O próximo encontro do Copom é nos dias 8 e 9 de dezembro, com decisão no dia 9. Até lá, a Selic segue em 13,75%. Ninguém garante um corte ou uma nova manutenção em dezembro: a decisão depende dos dados de inflação, do câmbio e da atividade até a reunião.',
        'Para a reserva de emergência, o caminho continua o mesmo: título com liquidez diária e conferência do rendimento líquido. Para dívidas, o juro do cartão e do cheque especial é muito maior do que a Selic, e renegociar e comparar o Custo Efetivo Total vale mais do que esperar o Copom.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual é a Selic depois da decisão de 4 de novembro?',
      answer:
        'A Selic ficou em 13,75% ao ano, mantida por unanimidade pelo Copom. Antes, o mercado esperava corte de 0,25 ponto.',
    },
    {
      question: 'Quando o Copom decide de novo?',
      answer:
        'A próxima reunião é nos dias 8 e 9 de dezembro, com decisão no dia 9. A ata da reunião de novembro sai em 10 de novembro.',
    },
    {
      question: 'A manutenção da Selic muda a poupança?',
      answer:
        'Não. Com a Selic acima de 8,5% ao ano, a poupança rende 0,5% ao mês mais a TR, e esse cálculo segue igual.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Banco Central surpreende e mantém juros básicos em 13,75% ao ano',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/bc-surpreende-e-mantem-juros-basicos-em-1375-ao-ano',
    },
    {
      label: 'Banco Central do Brasil: Comitê de Política Monetária (Copom)',
      url: 'https://www.bcb.gov.br/en/monetarypolicy/committee',
    },
    {
      label: 'Banco Central do Brasil: comunicados do Copom',
      url: 'https://www.bcb.gov.br/en/monetarypolicy/copomstatements/cronologicos',
    },
    {
      label: 'IBGE: IPCA, acumulado em 12 meses',
      url: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidor-amplo.html',
    },
  ],
} as const satisfies NewsDocument;
