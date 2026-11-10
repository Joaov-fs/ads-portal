import type { NewsDocument } from '../../types';

export const newsGasolinaProrrogada9Dezembro2026 = {
  kind: 'news',
  slug: 'gasolina-sem-tributos-prorrogada-ate-9-12-decreto-13-159',
  title:
    'Gasolina sem tributos federais é prorrogada até 9/12 pelo Decreto 13.159',
  description:
    'Decreto 13.159 mantém PIS/Cofins e Cide zerados na gasolina e a subvenção de R$ 0,428 por litro ao etanol até 9/12. Veja o que muda no posto.',
  category: 'economia',
  coverImage: {
    src: '/images/news/gasolina-sem-tributos-prorrogada-ate-9-12-decreto-13-159.jpg',
    alt: 'Documento do Decreto 13.159 com o novo prazo de 9/12, bomba de combustível, calendário de dezembro com o dia 9 marcado e etiqueta até 9/12.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'sara-souza',
  publishedAt: '2026-11-10',
  updatedAt: '2026-11-10',
  tags: ['gasolina', 'etanol', 'combustiveis', 'pis-cofins', 'cide'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '9/12',
      label: 'Novo prazo da desoneração',
      note: 'Decreto 13.159, de 9 de novembro, em edição extra do Diário Oficial.',
    },
    {
      value: 'R$ 0,428',
      label: 'Subvenção por litro de etanol',
      note: 'Paga a produtores e cooperativas de etanol hidratado.',
    },
    {
      value: 'R$ 2,76 bi',
      label: 'Custo em 30 dias',
      note: 'Estimativa da Fazenda para gasolina e etanol, sem a subvenção.',
    },
  ],
  sections: [
    {
      heading: 'O que o Decreto 13.159 prorrogou',
      paragraphs: [
        'O governo federal publicou, em edição extra do Diário Oficial da União de 9 de novembro de 2026, o Decreto 13.159, que prorroga por mais 30 dias as medidas sobre os combustíveis. Elas passam a valer até 9 de dezembro de 2026. A redução anterior vigorava de 10 de setembro a 9 de novembro.',
        'Na gasolina, o PIS/Pasep e a Cofins seguem zerados na importação e na comercialização, e a Cide-Combustíveis também segue com alíquota zero. A regra não alcança a gasolina de aviação. No etanol hidratado combustível, o PIS/Pasep e a Cofins continuam zerados.',
        'A prorrogação resolve a dúvida da matéria anterior do PortalFina, que registrava que a extensão do prazo de 9 de novembro ainda não estava confirmada. Agora há ato oficial publicado.',
      ],
    },
    {
      heading: 'Subvenção ao etanol e custo para os cofres',
      image: {
        src: '/images/news/gasolina-sem-tributos-prorrogada-ate-9-12-decreto-13-159-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com o Decreto 13.159, o novo prazo de 9/12 e a gasolina com PIS/Cofins e Cide zerados.',
        caption: 'O decreto mantém o benefício por mais 30 dias, até 9/12.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O governo também manteve a subvenção extraordinária de R$ 0,428 por litro de etanol hidratado, paga a produtores e cooperativas. Segundo a Agência Brasil, ela vale até 9 de dezembro e pode ser prorrogada por ato do Ministério da Fazenda.',
        'O Ministério da Fazenda estima que a prorrogação das desonerações de gasolina e etanol custe R$ 2,76 bilhões em 30 dias, compensados por receitas extraordinárias da União provenientes do setor de petróleo. A subvenção ao etanol tem impacto estimado de R$ 813,41 milhões no mesmo período.',
        'A justificativa oficial é evitar o impacto inflacionário da alta dos preços internacionais do petróleo, associada ao conflito no Oriente Médio. A Fazenda descreve as medidas como temporárias.',
      ],
    },
    {
      heading: 'Quanto isso pesa no tanque',
      paragraphs: [
        'Na medida anterior, a Fazenda informou um corte de R$ 0,89 por litro de gasolina A: R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide. Esse valor vale para a gasolina A, sem o etanol da mistura, então serve como teto da conta, não como o desconto que chega ao posto.',
        'Com esse teto, um tanque de 50 litros teria até R$ 44,50 de tributo federal a menos (50 x R$ 0,89). Para quem abastece 200 litros por mês, seriam até R$ 178,00 (200 x R$ 0,89). Na prática, o repasse é parcial e depende de estoque, margem e ICMS, imposto estadual que não muda com o decreto.',
        'Segundo a ANP, a média nacional da gasolina era de R$ 6,49 por litro na semana de 18 a 24 de outubro. Acompanhe a síntese semanal da agência para ver se o preço médio muda depois da prorrogação.',
      ],
      table: {
        caption:
          'Teto do tributo federal por litro de gasolina A, medida anterior',
        columns: ['Consumo', 'Teto de R$ 0,89 por litro'],
        rows: [
          ['Tanque de 50 litros', 'R$ 44,50'],
          ['200 litros por mês', 'R$ 178,00'],
        ],
      },
    },
    {
      heading: 'O que observar até 9 de dezembro',
      paragraphs: [
        'O benefício tem data para acabar e pode ser renovado de novo, como já ocorreu a cada 30 dias desde setembro. Quem planeja o orçamento do mês não deve tratar o preço atual como definitivo.',
        'Para comparar gasolina e etanol no posto, divida o preço do etanol pelo da gasolina: abaixo de 0,70, o etanol tende a compensar. A calculadora de porcentagem do portal ajuda na conta.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando a gasolina fica sem PIS/Cofins e Cide?',
      answer:
        'Até 9 de dezembro de 2026, conforme o Decreto 13.159, publicado em 9 de novembro. Uma nova prorrogação depende de novo ato do governo.',
    },
    {
      question: 'O etanol também foi beneficiado?',
      answer:
        'Sim. O PIS/Pasep e a Cofins do etanol hidratado seguem zerados e a subvenção de R$ 0,428 por litro foi mantida até 9 de dezembro.',
    },
    {
      question: 'O preço no posto vai cair por causa do decreto?',
      answer:
        'O decreto mantém a situação atual. O preço na bomba depende também de estoque, margem do posto, mistura com etanol e ICMS.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Governo Federal prorroga por mais 30 dias medidas de desoneração sobre gasolina e etanol',
      url: 'https://agenciagov.ebc.com.br/noticias/202611/governo-federal-prorroga-por-mais-30-dias-medidas-de-desoneracao-de-tributos-sobre-gasolina-e-etanol',
    },
    {
      label:
        'Agência Brasil: Governo prorroga até 9 de dezembro desoneração da gasolina e do etanol',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-11/governo-prorroga-ate-9-de-dezembro-desoneracao-da-gasolina-e-do-etanol',
    },
    {
      label:
        'Diário Oficial da União: Decreto 13.159, de 9 de novembro de 2026',
      url: 'https://www.in.gov.br/en/web/dou/-/decreto-n-13.159-de-9-de-novembro-de-2026-743190422',
    },
    {
      label:
        'ANP: Síntese Semanal do Comportamento dos Preços dos Combustíveis',
      url: 'https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/sintese-semanal-do-comportamento-dos-precos-dos-combustiveis',
    },
  ],
} as const satisfies NewsDocument;
