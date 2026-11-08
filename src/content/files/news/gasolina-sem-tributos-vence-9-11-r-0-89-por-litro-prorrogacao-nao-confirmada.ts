import type { NewsDocument } from '../../types';

export const newsGasolinaVence9Novembro2026 = {
  kind: 'news',
  slug: 'gasolina-sem-tributos-vence-9-11-r-0-89-por-litro-prorrogacao-nao-confirmada',
  title:
    'Gasolina sem tributos federais vale até 9/11: corte é de R$ 0,89 por litro e prorrogação não foi confirmada',
  description:
    'O Decreto 13.134 zera PIS/Cofins e Cide da gasolina até 9/11. Sem novo ato, a cobrança volta. Veja o que está em jogo no litro e no tanque.',
  category: 'economia',
  coverImage: {
    src: '/images/news/gasolina-sem-tributos-vence-9-11-r-0-89-por-litro-prorrogacao-nao-confirmada.jpg',
    alt: 'Documento com o corte de R$ 0,89 por litro na gasolina A e o fim da medida em 9/11, etiqueta de R$ 0,89 por litro, calendário de novembro com o dia 9 marcado e carimbo VENCE 9/11.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'thales-xavier',
  publishedAt: '2026-11-08',
  updatedAt: '2026-11-08',
  tags: ['gasolina', 'combustiveis', 'pis-cofins', 'cide', 'etanol'],
  featuredCalculators: ['porcentagem'],
  highlights: [
    {
      value: '9/11',
      label: 'Fim da medida atual',
      note: 'Prazo fixado pelo Decreto 13.134, de 9 de outubro.',
    },
    {
      value: 'R$ 0,89',
      label: 'Corte por litro de gasolina A',
      note: 'R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide.',
    },
    {
      value: 'R$ 0,19',
      label: 'Etanol hidratado, por litro',
      note: 'Equivalente ao PIS/Pasep e à Cofins zerados.',
    },
  ],
  sections: [
    {
      heading: 'O que vence na segunda-feira, 9 de novembro',
      paragraphs: [
        'O Decreto 13.134, de 9 de outubro de 2026, zerou o PIS/Pasep, a Cofins e a Cide sobre a gasolina e fixou o benefício até 9 de novembro. Segundo o Ministério da Fazenda, a redução passou de R$ 0,63 para R$ 0,89 por litro de gasolina A: R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide. A própria Fazenda informa que a medida vale por 30 dias e pode ser prorrogada.',
        'Na sexta-feira, 6 de novembro, a imprensa especializada registrava que o governo ainda não tinha anunciado a prorrogação. Até a publicação desta matéria, o PortalFina não encontrou um novo decreto ou comunicado oficial confirmando a extensão. Se nada for publicado, a regra é a do decreto: o prazo termina em 9 de novembro.',
        'O que muda para quem abastece depende de dois pontos: se o governo prorrogar, a situação tributária segue como está; se não prorrogar, os tributos federais podem voltar a ser cobrados a partir de 10 de novembro, e o efeito chega ao posto conforme o estoque e a política de preço de cada revendedor.',
      ],
    },
    {
      heading: 'Quanto pesa o corte no seu tanque',
      image: {
        src: '/images/news/gasolina-sem-tributos-vence-9-11-r-0-89-por-litro-prorrogacao-nao-confirmada-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com o corte de R$ 0,89 por litro, sendo R$ 0,79 de PIS/Pasep e Cofins e R$ 0,10 de Cide.',
        caption:
          'Os valores do corte por litro de gasolina A, segundo a Fazenda.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'O corte de R$ 0,89 incide sobre a gasolina A, aquela que sai da refinaria sem o etanol da mistura. A gasolina vendida na bomba leva etanol, então o valor máximo que poderia chegar ao consumidor é menor do que R$ 0,89 por litro. Use R$ 0,89 como teto da conta, não como previsão de aumento.',
        'Com esse teto, um tanque de 50 litros custaria até R$ 44,50 a mais (50 x R$ 0,89). Quem abastece 200 litros por mês teria, no máximo, R$ 178,00 a mais no mês (200 x R$ 0,89). Na prática, o repasse é parcial.',
        'Há um sinal do tamanho do efeito real na ponta: segundo a ANP, a média nacional da gasolina era de R$ 6,54 na semana de 4 a 10 de outubro e de R$ 6,49 na de 18 a 24 de outubro. A queda foi de R$ 0,05 por litro, ou R$ 2,50 em um tanque de 50 litros (50 x R$ 0,05), bem abaixo do corte total.',
      ],
      table: {
        caption: 'Teto da conta se a cobrança voltasse inteira ao litro',
        columns: [
          'Consumo',
          'Teto de R$ 0,89 por litro',
          'Queda vista na ANP, R$ 0,05',
        ],
        rows: [
          ['Tanque de 50 litros', 'R$ 44,50', 'R$ 2,50'],
          ['200 litros por mês', 'R$ 178,00', 'R$ 10,00'],
        ],
      },
    },
    {
      heading: 'Etanol e diesel têm regras próprias',
      paragraphs: [
        'No etanol hidratado, o PIS/Pasep e a Cofins também estão zerados, o equivalente a R$ 0,19 por litro, segundo a Fazenda. Além disso, a subvenção a produtores e cooperativas foi elevada de R$ 0,251 para R$ 0,4280 por litro. Esses valores constam do ato de 9 de outubro; a Fazenda diz que as medidas são temporárias e valem apenas para 2026.',
        'O diesel segue outra regra, com subvenção e prazos próprios: além dos R$ 2,12 por litro já existentes, a Fazenda anunciou mais R$ 1,40 por litro de subvenção para o diesel A importado por 30 dias. Esses prazos são distintos do da gasolina e não vencem em 9 de novembro por causa do decreto da gasolina.',
        'O ICMS, imposto estadual, não faz parte dessas medidas e não muda com o decreto federal.',
      ],
    },
    {
      heading: 'Como se preparar',
      paragraphs: [
        'Se o seu orçamento depende de combustível, não conte com o desconto como permanente. A própria Fazenda descreve as medidas como temporárias. Acompanhe o Diário Oficial da União e a síntese semanal da ANP, que mostra se o preço médio mudou depois do dia 9.',
        'Para comparar gasolina e etanol no posto onde você abastece, divida o preço do etanol pelo da gasolina: abaixo de 0,70, o etanol tende a compensar. A calculadora de porcentagem do portal ajuda a fazer a conta.',
      ],
    },
  ],
  faq: [
    {
      question: 'Até quando vale a gasolina sem tributos federais?',
      answer:
        'Até 9 de novembro de 2026, conforme o Decreto 13.134. A Fazenda diz que a medida pode ser prorrogada, e até o fechamento desta matéria não havia confirmação oficial de prorrogação.',
    },
    {
      question: 'A gasolina vai subir R$ 0,89 no dia 10?',
      answer:
        'Não necessariamente. R$ 0,89 é o corte por litro de gasolina A. O repasse ao consumidor depende da mistura com etanol, do estoque, do ICMS e da margem de cada posto.',
    },
    {
      question: 'O etanol também perde o benefício?',
      answer:
        'O PIS/Pasep e a Cofins do etanol hidratado, de R$ 0,19 por litro, foram zerados no mesmo ato. Confira o Diário Oficial para saber se há prorrogação.',
    },
  ],
  sources: [
    {
      label:
        'Ministério da Fazenda: Governo Federal prorroga desoneração da gasolina e do etanol',
      url: 'https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/outubro/governo-federal-prorroga-desoneracao-da-gasolina-e-do-etanol',
    },
    {
      label:
        'ANP: Síntese Semanal do Comportamento dos Preços dos Combustíveis',
      url: 'https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/sintese-semanal-do-comportamento-dos-precos-dos-combustiveis',
    },
    {
      label: 'Diário Oficial da União',
      url: 'https://www.in.gov.br/',
    },
  ],
} as const satisfies NewsDocument;
