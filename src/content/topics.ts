/**
 * Assuntos que aparecem em mais de um formato (notícia, guia, calculadora).
 * Cada grupo se liga entre si: a notícia traz o dado do momento, o guia
 * ensina o passo a passo e a calculadora faz a conta. Evita que páginas do
 * mesmo tema compitam entre si e leva o leitor ao formato certo.
 */
export const topicGroups: readonly (readonly string[])[] = [
  ['vale-transporte-como-funciona-o-desconto-de-6', 'vale-transporte'],
  ['adicional-de-insalubridade-como-calcular-os-graus', 'insalubridade'],
  ['adicional-de-periculosidade-quem-recebe-e-como-calcular', 'periculosidade'],
  ['banco-de-horas-como-funciona-e-como-calcular-o-saldo', 'banco-de-horas'],
  ['salario-maternidade-quem-recebe-e-como-calcular', 'salario-maternidade'],
  [
    'como-calcular-a-pensao-alimenticia-percentual-e-base',
    'pensao-alimenticia',
  ],
  ['pro-labore-como-calcular-inss-e-imposto-de-renda', 'pro-labore'],
  ['mei-passou-do-limite-de-r-81-mil-o-que-acontece', 'excesso-limite-mei'],
  ['cdi-o-que-e-e-como-calcular-o-rendimento', 'cdi'],
  ['plr-como-funciona-e-como-calcular-o-imposto', 'plr-ppr-liquido'],
  ['como-calcular-o-13o-salario', 'decimo-salario', 'decimo-proporcional'],
  [
    'abono-salarial-2026-prazo-para-sacar-vai-ate-30-de-dezembro',
    'abono-salarial-pis-pasep-quem-tem-direito',
    'pis',
  ],
  [
    'bolsa-familia-691-outubro-2026-calendario',
    'bolsa-familia-como-consultar-e-quanto-recebe',
    'bolsa-familia',
    'como-fazer-ou-atualizar-o-cadastro-unico',
  ],
  [
    'como-calcular-a-rescisao-sem-justa-causa',
    'rescisao-clt',
    'aviso-previo',
    'fgts-multa',
  ],
  ['como-calcular-ferias-passo-a-passo', 'ferias', 'ferias-proporcionais'],
  ['financiamento-sac-ou-price-qual-escolher', 'financiamento-sac-price'],
  ['como-calcular-horas-extras-e-dsr', 'horas-extras', 'dsr'],
  [
    'tabela-do-imposto-de-renda-2026-na-folha',
    'como-calcular-o-salario-liquido',
    'irrf',
    'salario-liquido',
  ],
  [
    'receita-envia-cartas-a-498-mil-contribuintes-na-malha-fina-ate-20-de-outubro',
    'como-consultar-a-restituicao-do-imposto-de-renda',
    'irrf',
    'salario-liquido',
  ],
  ['como-funciona-o-desconto-do-inss', 'inss'],
  [
    'inss-de-autonomo-e-socio-20-11-ou-5-qual-plano-vale-a-pena',
    'inss-autonomo',
    'pro-labore',
  ],
  [
    'mei-2026-das-de-r-81-05-limite-de-r-81-mil-e-multa-por-atraso',
    'como-emitir-o-das-do-mei-e-fazer-a-declaracao-anual',
    'mei-das-em-atraso-como-regularizar',
    'das-mei-atraso',
    'das-limite-mei',
  ],
  [
    'desenrola-mei-pequeno-valor-desconto-dividas',
    'mei-das-em-atraso-como-regularizar',
    'como-sair-do-endividamento-passo-a-passo',
  ],
  ['poupanca-ou-cdb-qual-rende-mais', 'cdb-x-poupanca', 'cdb-liquido'],
  [
    'selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve',
    'cdb-lci-lca-ou-tesouro-selic-qual-escolher',
    'tesouro-selic',
    'lci-lca',
  ],
  ['reajuste-do-aluguel-como-calcular-igp-m-ou-ipca', 'reajuste-aluguel'],
  ['como-pedir-o-seguro-desemprego', 'seguro-desemprego'],
  [
    'salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso',
    'salario-minimo-2027-orcamento-preve-r-1-741-veja-o-que-muda',
    'bpc-loas-quem-tem-direito-e-como-pedir',
    'bpc',
    'inss-autonomo',
  ],
  [
    'inss-outubro-2026-calendario-de-pagamento-26-de-outubro-a-9-de-novembro',
    'como-usar-o-meu-inss-e-consultar-o-cnis',
    'bpc-loas-quem-tem-direito-e-como-pedir',
    'bpc',
    'inss',
  ],
  [
    'saque-aniversario-fgts-outubro-2026-ate-31-de-dezembro-quanto-sai',
    'saque-aniversario-do-fgts-como-funciona',
    'como-consultar-saldo-e-extrato-do-fgts',
    'fgts-multa',
  ],
];

export function sharesTopic(left: string, right: string) {
  return topicGroups.some(
    (group) => group.includes(left) && group.includes(right),
  );
}
