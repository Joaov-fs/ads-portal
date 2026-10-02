import type { GuideDocument } from '../../types';

export const guideReajusteDoAluguelComoCalcularIgpMOuIpca = {
  kind: 'guide',
  slug: 'reajuste-do-aluguel-como-calcular-igp-m-ou-ipca',
  title: 'Reajuste do aluguel: como calcular com IGP-M ou IPCA',
  description:
    'O que diz a lei, como aplicar o índice do contrato e quanto o aluguel muda com IGP-M de 3,35% e IPCA de 4,22%, em exemplos de R$ 1.500 a R$ 3.000.',
  category: 'financas',
  authorId: 'equipe-editorial',
  publishedAt: '2026-09-16',
  updatedAt: '2026-10-02',
  tags: ['aluguel', 'igp-m', 'ipca', 'reajuste', 'imovel'],
  featuredCalculators: ['reajuste-aluguel', 'porcentagem', 'juros-compostos'],
  highlights: [
    {
      value: '3,35%',
      label: 'IGP-M em 12 meses',
      note: 'Valor de exemplo para os cálculos.',
    },
    {
      value: '4,22%',
      label: 'IPCA em 12 meses',
      note: 'Valor de exemplo para os cálculos.',
    },
    {
      value: '12 meses',
      label: 'Periodicidade mínima',
      note: 'O reajuste só vale após um ano.',
    },
  ],
  sections: [
    {
      heading: 'O que a lei diz sobre o reajuste',
      paragraphs: [
        'O reajuste do aluguel segue o que está no contrato. A Lei 10.192/2001 (art. 2º, § 1º) declara nula de pleno direito qualquer cláusula de reajuste com periodicidade inferior a um ano, então o aluguel só pode ser corrigido a cada 12 meses. A Lei do Inquilinato (Lei 8.245/1991) proíbe fixar o aluguel em moeda estrangeira e vinculá-lo ao salário mínimo ou à variação cambial.',
        'Se o contrato não traz cláusula de reajuste, não existe aumento automático: o novo valor depende de acordo entre as partes (art. 18) ou, depois de três anos de contrato, de ação revisional para ajustar o aluguel ao valor de mercado (art. 19). O proprietário também não pode trocar sozinho o índice do contrato.',
      ],
    },
    {
      heading: 'Passo a passo do cálculo',
      paragraphs: [
        '1) Veja no contrato qual índice vale (IGP-M, IPCA ou outro) e a data do aniversário. 2) Descubra a variação acumulada nos 12 meses indicados no contrato, divulgada pela FGV (IGP-M) ou pelo IBGE (IPCA). 3) Divida o percentual por 100 e some 1. 4) Multiplique o aluguel atual por esse fator.',
        'Atenção: a variação de 12 meses é o resultado acumulado mês a mês, não a soma dos percentuais mensais. Com variações mensais fictícias de 0,40%, 0,25%, 0,30%, 0,10%, 0,35%, 0,20%, 0,45%, 0,30%, 0,25%, 0,35%, 0,30% e 0,20%, a soma é 3,45%, mas o acumulado é 3,50%. Em um aluguel de R$ 1.850,00, o aluguel fica em R$ 1.914,83 pelo acumulado, contra R$ 1.913,83 pela soma: R$ 1,00 por mês de diferença, que cresce quando os índices são maiores.',
      ],
    },
    {
      heading: 'Exemplo 1: aluguel de R$ 1.850,00',
      paragraphs: [
        'Com IGP-M acumulado de 3,35%, o fator é 1,0335 e o novo aluguel é R$ 1.850,00 x 1,0335 = R$ 1.911,98, um aumento de R$ 61,98 por mês. Com IPCA de 4,22%, o fator é 1,0422 e o aluguel passa a R$ 1.928,07, aumento de R$ 78,07. A diferença entre os índices é de R$ 16,09 por mês, ou cerca de R$ 193 em um ano.',
        'Em um aluguel de R$ 2.700,00, a diferença entre os índices fica em R$ 23,49 por mês, ou R$ 281,88 em um ano. Quanto maior o aluguel, mais o índice escolhido pesa no orçamento.',
      ],
      table: {
        caption:
          'Aluguel reajustado (exemplo com IGP-M de 3,35% e IPCA de 4,22%)',
        columns: [
          'Aluguel atual',
          'Com IGP-M (3,35%)',
          'Com IPCA (4,22%)',
          'Diferença por mês',
        ],
        rows: [
          ['R$ 1.850,00', 'R$ 1.911,98', 'R$ 1.928,07', 'R$ 16,09'],
          ['R$ 2.700,00', 'R$ 2.790,45', 'R$ 2.813,94', 'R$ 23,49'],
        ],
      },
    },
    {
      heading: 'IGP-M e IPCA: por que a diferença existe',
      paragraphs: [
        'O IPCA, do IBGE, mede a inflação ao consumidor. O IGP-M, da FGV, é um índice de preços mais amplo, com peso maior para preços no atacado e na construção, e por isso oscila mais, inclusive com o câmbio. Em 2020 e 2021 o IGP-M disparou e ficou muito acima do IPCA, e isso levou muitos contratos novos a adotar o IPCA. O índice vale conforme o contrato assinado, e não o que parece mais justo em cada momento.',
        'Se o índice do período for negativo, confira o contrato: algumas cláusulas preveem que o aluguel não cai, outras permitem a redução. Em um aluguel de R$ 2.000,00 e índice de menos 1,5%, o valor iria a R$ 1.970,00 se o contrato permitir a redução.',
      ],
    },
    {
      heading: 'Erros comuns e o que muda o resultado',
      paragraphs: [
        'Os erros mais frequentes são somar os índices mensais em vez de acumular, usar o índice de um período errado (o mês-base é o que o contrato indicar), reajustar condomínio e IPTU pelo mesmo índice (esses valores seguem o que é cobrado, não o índice do aluguel) e aplicar o reajuste antes de completar 12 meses.',
        'Outro ponto é o reajuste esquecido. Se o aniversário passou sem cobrança, o reajuste pode virar tema de acordo entre as partes, e a regra depende do contrato e do entendimento aplicado ao caso; em dúvida, procure a Defensoria Pública ou um advogado. Dois anos sem reajuste, com os índices do exemplo, levariam um aluguel de R$ 1.850,00 a R$ 1.992,66 (R$ 1.850,00 x 1,0335 x 1,0422). Por isso, combine por escrito se o aumento será aplicado de uma vez ou dividido.',
      ],
    },
    {
      heading: 'Quando negociar e quando procurar ajuda',
      paragraphs: [
        'Na maior parte dos casos, conversar com a outra parte, mostrando a conta com a fonte do índice, resolve mais rápido que uma ação. Registre o novo valor por escrito (um aditivo ou mensagem formal), com a data de vigência.',
        'Se houver cobrança acima do índice contratual, imobiliária que não apresenta o cálculo ou ameaça de despejo, procure a Defensoria Pública, o Juizado Especial Cível ou um advogado. Para ver se um aluguel está acima do mercado depois de três anos, a ação revisional é o caminho previsto em lei.',
      ],
    },
  ],
  faq: [
    {
      question: 'O proprietário pode reajustar antes de um ano?',
      answer:
        'Em regra, não. A lei declara nula qualquer cláusula de reajuste com periodicidade inferior a um ano.',
    },
    {
      question: 'Posso pedir revisão do valor?',
      answer:
        'Após três anos de contrato, qualquer das partes pode pedir a revisão judicial para ajustar o aluguel ao valor de mercado.',
    },
    {
      question:
        'O contrato diz IGP-M, mas o proprietário quer usar o IPCA. Pode?',
      answer:
        'Só com a sua concordância. O índice é o previsto no contrato. Qualquer mudança precisa ser combinada e registrada por escrito pelas duas partes.',
    },
    {
      question: 'O contrato não tem índice. O que acontece?',
      answer:
        'Sem cláusula, não há reajuste automático. O novo valor depende de acordo entre as partes ou de ação revisional depois de três anos.',
    },
    {
      question: 'Onde consulto o índice acumulado de 12 meses?',
      answer:
        'O IGP-M é divulgado pela FGV (IBRE) e o IPCA, pelo IBGE. Confira o período exato do contrato antes de calcular.',
    },
  ],
  sources: [
    {
      label: 'Lei 8.245/1991 — Lei do Inquilinato',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8245.htm',
    },
    {
      label: 'Lei 10.192/2001 — periodicidade mínima do reajuste',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10192.htm',
    },
    {
      label: 'FGV IBRE — IGP-M',
    },
    {
      label: 'IBGE — IPCA',
    },
  ],
} as const satisfies GuideDocument;
