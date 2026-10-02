import type { NewsDocument } from '../../types';

export const desenrolaMeiPequenoValorNews = {
  kind: 'news',
  slug: 'desenrola-mei-pequeno-valor-desconto-dividas',
  title:
    'Desenrola MEI começa com desconto de 50%: veja quem pode negociar e como aderir',
  description:
    'Microempreendedores podem negociar dívidas de até R$ 8.105. A adesão começou em 1º de outubro e pode reduzir pela metade parte do saldo após a entrada.',
  category: 'financas',
  authorId: 'equipe-editorial',
  coverImage: {
    src: '/images/news/desenrola-mei-pequeno-valor.png',
    alt: 'Microempreendedor analisa documentos e condições para renegociação de dívida do MEI.',
  },
  featuredCalculators: ['das-mei-atraso', 'das-limite-mei'],
  highlights: [
    {
      value: '50%',
      label: 'Desconto após a entrada',
      note: 'Em parte do saldo, segundo as regras do programa.',
    },
    {
      value: 'R$ 8.105',
      label: 'Limite de dívida da modalidade',
      note: 'Cinco salários mínimos.',
    },
    {
      value: '3 milhões',
      label: 'MEIs com dívida',
      note: 'Segundo o Ministério do Empreendedorismo.',
    },
  ],
  publishedAt: '2026-10-01',
  updatedAt: '2026-10-01',
  tags: ['mei', 'negocios', 'divida', 'renegociacao', 'impostos'],
  sections: [
    {
      heading: 'Quem pode participar do Desenrola MEI Pequeno Valor?',
      paragraphs: [
        'O microempreendedor individual que possui dívida inscrita na Dívida Ativa da União ganhou uma nova alternativa para regularizar sua situação.',
        'Começou nesta quinta-feira, 1º de outubro de 2026, a adesão ao Desenrola MEI Pequeno Valor, modalidade destinada a débitos de até cinco salários mínimos, atualmente equivalentes a R$ 8.105.',
        'A nova modalidade é direcionada ao Microempreendedor Individual (MEI) com débitos elegíveis inscritos na Dívida Ativa da União.',
        'O limite da nova negociação é de cinco salários mínimos, ou R$ 8.105 em 2026. Segundo o Ministério do Empreendedorismo, mais de 3 milhões de MEIs possuem dívidas, enquanto o débito médio da categoria gira em torno de R$ 3 mil.',
        'Isso significa que uma parcela relevante dos MEIs endividados pode se enquadrar no limite da nova modalidade.',
      ],
    },
    {
      heading: 'Quanto é o desconto?',
      paragraphs: [
        'A principal condição é uma entrada de 5% do valor da dívida, sem desconto. Depois disso, a nova modalidade prevê redução de 50% sobre o saldo restante, que poderá ser parcelado em até 55 meses.',
        'O limite da dívida é de até R$ 8.105; a entrada é de 5% sem desconto; o desconto é de 50% sobre o saldo após a entrada; e o parcelamento pode ser feito em até 55 meses. A adesão começou em 1º de outubro de 2026 e vai até 31 de janeiro de 2027.',
        'As parcelas das negociações da PGFN estão sujeitas à atualização prevista para a modalidade, e o contribuinte deve conferir a simulação antes de confirmar o acordo.',
      ],
    },
    {
      heading: 'Exemplo',
      paragraphs: [
        'Imagine uma dívida de R$ 4.000. A entrada de 5% corresponde a R$ 200. Restariam R$ 3.800. Aplicado um desconto de 50% sobre esse saldo, o valor cairia para aproximadamente R$ 1.900, antes dos ajustes e condições específicas apresentadas pelo sistema.',
        'Somando a entrada, o desembolso nominal do exemplo ficaria em torno de R$ 2.100.',
        'Atenção: o cálculo serve apenas para demonstrar a lógica. O valor definitivo deve ser conferido no Regularize, porque a composição da dívida e as condições aplicáveis podem alterar o resultado.',
      ],
    },
    {
      heading: 'Como aderir ao Desenrola MEI?',
      paragraphs: [
        'A negociação é realizada pelo Regularize, portal da Procuradoria-Geral da Fazenda Nacional.',
        'O caminho indicado pelo governo é acessar o Regularize; consultar as dívidas inscritas; entrar em Negociar Dívida; acessar o sistema de negociações; verificar as modalidades disponíveis; simular os valores; confirmar o acordo; e emitir e pagar a primeira parcela.',
        'A PGFN orienta o contribuinte a verificar as inscrições elegíveis antes de concluir a adesão.',
      ],
    },
    {
      heading: 'E quem deve mais de R$ 8.105?',
      paragraphs: [
        'O novo Desenrola MEI Pequeno Valor não é a única negociação disponível.',
        'O governo também prorrogou o Desenrola MEI voltado a outras dívidas da categoria. Nessa modalidade, determinados débitos de até R$ 20 mil podem ter condições próprias, incluindo reduções sobre juros, multas e encargos.',
        'O prazo dessa modalidade foi prorrogado para 29 de janeiro de 2027. Por isso, um MEI que não se enquadre na opção de pequeno valor ainda deve consultar o sistema: outra modalidade pode estar disponível para o seu CNPJ.',
      ],
    },
    {
      heading: 'Vale a pena renegociar?',
      paragraphs: [
        'O desconto pode ser relevante, mas o MEI deve avaliar se conseguirá manter as parcelas em dia. Trocar uma dívida antiga por um acordo que novamente ficará inadimplente pode não resolver o problema.',
        'Antes de confirmar, confira o valor da entrada, o total final da negociação, a quantidade de parcelas, o valor mensal, a atualização das prestações e a capacidade do negócio de manter o acordo.',
        'O ideal é escolher uma parcela que caiba no caixa mesmo em meses de faturamento mais baixo. Antes de fechar o acordo, simule quanto a dívida pode cair e qual parcela realmente cabe no orçamento do seu negócio.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quem tem direito ao Desenrola MEI Pequeno Valor?',
      answer:
        'MEIs que possuam débitos elegíveis inscritos na Dívida Ativa da União e atendam aos critérios da modalidade.',
    },
    {
      question: 'Qual é o limite da dívida?',
      answer: 'Até cinco salários mínimos, equivalentes a R$ 8.105 em 2026.',
    },
    {
      question: 'O desconto é de 50% sobre toda a dívida?',
      answer:
        'A modalidade anunciada prevê entrada de 5% sem desconto e redução de 50% sobre o saldo restante.',
    },
    {
      question: 'Em quantas vezes é possível pagar?',
      answer:
        'O saldo pode ser parcelado em até 55 meses nas condições divulgadas para a nova modalidade.',
    },
    {
      question: 'Onde faço a negociação?',
      answer: 'No portal Regularize, administrado pela PGFN.',
    },
    {
      question: 'Até quando posso aderir?',
      answer:
        'A modalidade de pequeno valor fica aberta até 31 de janeiro de 2027.',
    },
  ],
  sources: [
    {
      label: 'Procuradoria-Geral da Fazenda Nacional — Regularize',
      url: 'https://www.regularize.pgfn.gov.br/',
    },
    {
      label:
        'Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte',
      url: 'https://www.gov.br/memp/pt-br',
    },
  ],
} as const satisfies NewsDocument;
