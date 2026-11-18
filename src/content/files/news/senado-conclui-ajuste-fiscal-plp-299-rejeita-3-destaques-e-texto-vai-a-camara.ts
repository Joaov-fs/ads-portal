import type { NewsDocument } from '../../types';

export const newsSenadoConcluiAjusteFiscal18Novembro = {
  kind: 'news',
  slug: 'senado-conclui-ajuste-fiscal-plp-299-rejeita-3-destaques-e-texto-vai-a-camara',
  title:
    'Senado conclui o ajuste fiscal: rejeita 3 destaques e o PLP 299/2026 vai à Câmara',
  description:
    'O Senado concluiu em 18/11 o PLP 299/2026, rejeitou três destaques da oposição e enviou o texto à Câmara, com economia estimada de até R$ 56,1 bi em 2027.',
  category: 'politica',
  coverImage: {
    src: '/images/news/senado-conclui-ajuste-fiscal-plp-299-rejeita-3-destaques-e-texto-vai-a-camara.jpg',
    alt: 'Ilustração com documento do ajuste fiscal, gráfico de despesas em queda, etiqueta "vai à Câmara" e carimbo "Senado conclui".',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-18',
  updatedAt: '2026-11-18',
  tags: [
    'ajuste-fiscal',
    'plp-299-2026',
    'senado',
    'camara',
    'lei-kandir',
    'orcamento-2027',
  ],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '3',
      label: 'Destaques rejeitados',
      note: 'Votados e rejeitados um a um no plenário.',
    },
    {
      value: 'R$ 2 bi',
      label: 'Lei Kandir por ano',
      note: 'Repasse de 2028 a 2030, pelo acordo no Senado.',
    },
    {
      value: 'R$ 56,1 bi',
      label: 'Teto da economia em 2027',
      note: 'A estimativa vai de R$ 45,1 bi a R$ 56,1 bi.',
    },
  ],
  sections: [
    {
      heading: 'O que o Senado decidiu em 18/11',
      image: {
        src: '/images/news/senado-conclui-ajuste-fiscal-plp-299-rejeita-3-destaques-e-texto-vai-a-camara-detalhe.jpg',
        alt: 'Detalhe da ilustração: PLP 299/2026, três destaques rejeitados, Lei Kandir de R$ 2 bi por ano e teto de gastos de 2% acima da inflação.',
        caption: 'Resumo do que o Senado aprovou no PLP 299/2026.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O plenário do Senado concluiu em 18/11 a votação do PLP 299/2026, o projeto de ajuste fiscal do governo. Segundo a Agência Brasil, três destaques que mudavam o conteúdo do texto foram rejeitados, um a um. A Agência Senado informa que o projeto segue para a Câmara dos Deputados. As páginas oficiais lidas não trazem a contagem de votos dos destaques.',
        'A votação dos destaques estava marcada para 17/11 e foi adiada por 24 horas a pedido do relator, senador Eduardo Braga (MDB-AM), que buscava um entendimento entre governo e oposição. O texto principal já havia sido aprovado em 12/11, por 45 votos a 31, e a notícia anterior do PortalFina sobre o adiamento fica superada pelo resultado de 18/11.',
        'Nada disso vira lei ainda. O projeto precisa ser votado pela Câmara e sancionado. Segundo a Agência Brasil, isso só deve ocorrer na semana que vem, porque o presidente da Câmara, Hugo Motta, está em viagem oficial à Argentina. Motta já havia se comprometido a pautar o texto assim que ele chegasse ao plenário.',
      ],
    },
    {
      heading: 'Lei Kandir: o acordo que mudou o texto',
      paragraphs: [
        'A única mudança de conteúdo relatada foi um acordo sobre a Lei Kandir. O projeto original reduzia o repasse anual do governo federal aos estados de R$ 4 bilhões para R$ 1 bilhão e adiava o restante em parcelas entre 2031 e 2037. Pelo acordo, o repasse anual passa de R$ 1 bilhão para R$ 2 bilhões entre 2028 e 2030. Com o acordo, a oposição retirou a emenda que mantinha os R$ 4 bilhões por ano.',
        'Um exemplo com os números da reportagem: se o repasse ficasse em R$ 1 bilhão por ano de 2028 a 2030, seriam R$ 3 bilhões nos três anos. Com R$ 2 bilhões por ano, o total sobe para R$ 6 bilhões, ou R$ 3 bilhões a mais para os estados no período. A Lei Complementar 176 garantia R$ 4 bilhões por ano até 2037, o que dá a dimensão do corte que continua valendo.',
      ],
      table: {
        caption: 'Repasse anual da Lei Kandir aos estados',
        columns: ['Cenário', 'Valor por ano'],
        rows: [
          ['Regra atual (LC 176)', 'R$ 4 bi'],
          ['Projeto original', 'R$ 1 bi'],
          ['Acordo no Senado (2028 a 2030)', 'R$ 2 bi'],
        ],
      },
    },
    {
      heading: 'O que o projeto prevê e o efeito para o cidadão',
      paragraphs: [
        'Entre as medidas que seguem no texto estão bloqueios adicionais de despesas para cumprir a meta fiscal, a redução de 2,5% para 2% do limite de crescimento dos gastos acima da inflação nos anos em que houver medidas de contenção, o corte de benefícios tributários e um prazo de 120 dias para o Congresso regulamentar pagamentos acima do teto do funcionalismo, hoje de R$ 46,3 mil.',
        'A Agência Brasil informa uma economia estimada entre R$ 45,1 bilhões e R$ 56,1 bilhões em 2027, medida no resultado primário, que é a diferença entre o que o governo arrecada e o que gasta antes dos juros da dívida. Uma matéria anterior da mesma agência citava a faixa de R$ 50 bilhões a R$ 60 bilhões, e as duas estimativas não foram conciliadas nas fontes. Para o bolso do leitor, não há mudança imediata em salário, benefício ou imposto: o efeito depende da votação na Câmara, da sanção e de como o governo aplicar os bloqueios.',
      ],
    },
  ],
  faq: [
    {
      question: 'O ajuste fiscal já virou lei?',
      answer:
        'Não. O Senado concluiu a votação em 18/11 e o PLP 299/2026 segue para a Câmara. Depois da votação lá, ainda precisa de sanção.',
    },
    {
      question: 'Quais destaques foram rejeitados?',
      answer:
        'Três destaques da oposição, um a um. Segundo a Agência Brasil, eles tratavam do adiamento da Lei Kandir, do limite à compensação de créditos tributários das empresas e do limite de alta dos gastos federais.',
    },
    {
      question: 'Quando a Câmara deve votar?',
      answer:
        'A Agência Brasil informa que a análise só deve ocorrer na semana que vem, por causa da viagem oficial do presidente da Câmara à Argentina. Não há data oficial na pauta.',
    },
  ],
  sources: [
    {
      label:
        'Agência Brasil: Senado rejeita mudanças no texto e aprova ajuste fiscal do governo',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-11/senado-rejeita-mudancas-no-texto-e-aprova-ajuste-fiscal-do-governo',
    },
    {
      label: 'Agência Senado: Ajuste fiscal (Senado Agora, 18/11)',
      url: 'https://www12.senado.leg.br/noticias/senado-agora/2026/11/18/ajuste-fiscal',
    },
    {
      label:
        'Agência Brasil: Senado adia votação de destaques do projeto de ajuste fiscal',
      url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-11/senado-adia-votacao-de-destaques-do-projeto-de-ajuste-fiscal',
    },
  ],
} as const satisfies NewsDocument;
