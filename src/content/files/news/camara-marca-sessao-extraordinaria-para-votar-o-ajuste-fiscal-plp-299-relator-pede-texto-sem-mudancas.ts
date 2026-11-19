import type { NewsDocument } from '../../types';

export const newsCamaraSessaoAjusteFiscal19Novembro = {
  kind: 'news',
  slug: 'camara-marca-sessao-extraordinaria-para-votar-o-ajuste-fiscal-plp-299-relator-pede-texto-sem-mudancas',
  title:
    'Câmara marca sessão extraordinária para votar o ajuste fiscal, e o relator pede o texto do Senado sem mudanças',
  description:
    'Hugo Motta convocou sessão extraordinária para votar o PLP 299/2026 na próxima segunda-feira. Veja o que o relator e o governo dizem sobre benefícios e prazos.',
  category: 'politica',
  coverImage: {
    src: '/images/news/camara-marca-sessao-extraordinaria-para-votar-o-ajuste-fiscal-plp-299-relator-pede-texto-sem-mudancas.jpg',
    alt: 'Ilustração com ficha do PLP 299/2026, calendário de novembro com o dia 23 marcado, etiqueta "votação" e carimbo "vai a plenário".',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-19',
  updatedAt: '2026-11-19',
  tags: [
    'ajuste-fiscal',
    'plp-299-2026',
    'camara',
    'hugo-motta',
    'orcamento-2027',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '23/11',
      label: 'Segunda-feira da sessão',
      note: 'A Agência Câmara fala em "próxima segunda-feira", dita em 18/11.',
    },
    {
      value: 'R$ 56,1 bi',
      label: 'Efeito máximo em 2027',
      note: 'Estimativa do governo, segundo a Agência Câmara.',
    },
    {
      value: '2%',
      label: 'Limite de alta dos gastos',
      note: 'Acima da inflação, nos anos com medidas de contenção.',
    },
  ],
  sections: [
    {
      heading: 'O que a Câmara anunciou em 18/11',
      image: {
        src: '/images/news/camara-marca-sessao-extraordinaria-para-votar-o-ajuste-fiscal-plp-299-relator-pede-texto-sem-mudancas-detalhe.jpg',
        alt: 'Detalhe da ilustração: ficha do PLP 299/2026 com relator, sessão extraordinária e sanção como etapa seguinte.',
        caption:
          'Resumo das etapas do PLP 299/2026 depois da aprovação no Senado.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O presidente da Câmara, Hugo Motta (Republicanos-PB), disse em 18/11, durante viagem à Argentina, que vai convocar uma sessão deliberativa extraordinária do Plenário para discutir e votar o projeto de ajuste fiscal já aprovado pelo Senado. A Agência Câmara informa que a sessão será na próxima segunda-feira, o que corresponde a 23/11. A página oficial não traz horário.',
        'Motta pediu ao relator, deputado Mauro Benevides Filho (União-CE), que publique o parecer o mais rápido possível e chamou o pacote de "primeiro passo". A votação não ocorreu em 17/11, como o governo e o relator chegaram a prever, e a notícia anterior do PortalFina sobre o fim da votação no Senado trazia só a expectativa de "semana que vem".',
        'Nada disso vira lei ainda. Depois da Câmara, o PLP 299/2026 segue para sanção. Se os deputados mudarem o texto, ele volta ao Senado, e é exatamente isso que o relator quer evitar.',
      ],
    },
    {
      heading: 'Por que o relator pede aprovação sem mudanças',
      paragraphs: [
        'Em 17/11, Mauro Benevides Filho afirmou que os deputados devem votar o texto aprovado pelo Senado para evitar que alterações obriguem o projeto a retornar e gerem instabilidade no mercado, como câmbio e juros. Segundo ele, o objetivo é contribuir para o cumprimento da meta de resultado primário e ajustar a proposta do Orçamento de 2027, que está em análise no Congresso.',
        'O relator descreveu o pacote como redução de despesas pelo governo e revisão de incentivos fiscais, tributários, creditícios e financeiros, e citou incentivos de cerca de R$ 800 bilhões. Ele também disse que a proposta não prevê cortes em BPC, Bolsa Família, abono salarial ou seguro-desemprego. A exclusão de investimentos do limite de 2% ou 2,5% foi apontada como possível etapa futura, a ser debatida em projetos complementares, e não está neste texto.',
      ],
      table: {
        caption: 'O que cada lado disse sobre o projeto',
        columns: ['Quem', 'O que afirmou'],
        rows: [
          [
            'Relator, Mauro Benevides Filho (17/11)',
            'Sem cortes em BPC, Bolsa Família, abono e seguro-desemprego',
          ],
          [
            'Líder do governo, Paulo Pimenta (16/11)',
            'Não altera pisos de saúde e educação nem o salário mínimo',
          ],
          [
            'Presidente da Câmara, Hugo Motta (18/11)',
            'Convoca sessão extraordinária e chama o pacote de primeiro passo',
          ],
        ],
      },
    },
    {
      heading: 'O que o governo diz e o que muda para o leitor',
      paragraphs: [
        'O líder do governo na Câmara, Paulo Pimenta (PT-RS), disse em 16/11 que o projeto não altera o cálculo dos pisos mínimos de saúde e educação e não afeta o reajuste do salário mínimo nem o valor do BPC. Segundo ele, o texto serve para acomodar despesas que não estavam no Orçamento enviado, como o Novo Desenrola, o Pix do MEI e a universalização do Pé-de-Meia no ensino médio. Ele também afirmou que o governo gasta cerca de R$ 15 bilhões por mês para segurar os preços dos combustíveis. Essas são declarações do governo, e a página lida não traz conta que as confirme.',
        'O governo estima efeito positivo de até R$ 56,1 bilhões nas contas de 2027, com bloqueios e contingenciamentos de despesas. O texto também reduz de 2,5% para 2% o limite de crescimento real dos gastos nos anos em que houver medidas de contenção. Um exemplo hipotético ajuda a medir: sobre cada R$ 100 bilhões de despesa, um crescimento real de 2,5% libera R$ 2,5 bilhões a mais, e de 2% libera R$ 2 bilhões, uma diferença de R$ 0,5 bilhão. Para o bolso, não há mudança imediata em salário, benefício ou imposto: o efeito depende da votação, da sanção e de como o governo aplicar os bloqueios.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quando a Câmara vota o ajuste fiscal?',
      answer:
        'Segundo a Agência Câmara, Hugo Motta convocou sessão extraordinária para a próxima segunda-feira, dita em 18/11, ou seja, 23/11. A página não informa o horário e o parecer do relator ainda não havia sido divulgado.',
    },
    {
      question: 'O ajuste fiscal corta o Bolsa Família ou o BPC?',
      answer:
        'O relator e o líder do governo afirmam que não. Eles dizem que o projeto não prevê cortes em BPC, Bolsa Família, abono salarial ou seguro-desemprego. O texto só vale depois de votado e sancionado.',
    },
    {
      question: 'O que acontece se a Câmara mudar o texto?',
      answer:
        'O projeto volta ao Senado para nova votação. Por isso o relator defende aprovar o texto como veio, para evitar atraso e instabilidade no mercado.',
    },
  ],
  sources: [
    {
      label:
        'Agência Câmara: Proposta de ajuste fiscal entra na pauta de sessão extraordinária da Câmara',
      url: 'https://www.camara.leg.br/noticias/1320935-proposta-de-ajuste-fiscal-entra-na-pauta-de-sessao-extraordinaria-da-camara-na-proxima-segunda-feira',
    },
    {
      label:
        'Agência Câmara: Relator defende aprovação do ajuste fiscal sem mudanças',
      url: 'https://www.camara.leg.br/noticias/1320366-relator-defende-aprovacao-do-ajuste-fiscal-sem-mudancas-para-evitar-retorno-ao-senado',
    },
    {
      label:
        'Agência Câmara: Líder do governo afirma que ajuste fiscal não retira recursos da saúde e da educação',
      url: 'https://www.camara.leg.br/noticias/1319835-lider-do-governo-afirma-que-ajuste-fiscal-nao-retira-recursos-da-saude-e-da-educacao',
    },
  ],
} as const satisfies NewsDocument;
