import type { ContentDocument } from './types';

/**
 * Títulos curtos para a aba do navegador e para o Google (até 52 caracteres,
 * antes do sufixo da marca). O título completo continua sendo o H1 da página.
 */
export const metaTitles: Readonly<Record<string, string>> = {
  // Guias
  'como-consultar-a-restituicao-do-imposto-de-renda':
    'Como consultar a restituição do Imposto de Renda',
  'como-consultar-saldo-e-extrato-do-fgts':
    'Como consultar saldo e extrato do FGTS',
  'como-consultar-valores-a-receber-no-banco-central':
    'Valores a Receber do Banco Central: como resgatar',
  'como-usar-o-meu-inss-e-consultar-o-cnis':
    'Meu INSS: como consultar o CNIS passo a passo',
  'como-usar-o-pix-com-seguranca': 'Como usar o Pix com segurança',
  'saque-aniversario-do-fgts-como-funciona':
    'Saque-aniversário do FGTS: como funciona',
  'como-consultar-a-situacao-do-cpf':
    'Como consultar a situação do CPF e regularizar',
  'como-acessar-a-carteira-de-trabalho-digital':
    'Carteira de Trabalho Digital: como acessar',
  'como-criar-e-aumentar-o-nivel-da-conta-govbr':
    'Conta gov.br: como criar e subir de nível',
  'como-emitir-o-das-do-mei-e-fazer-a-declaracao-anual':
    'Como emitir o DAS do MEI e a DASN-SIMEI',
  'como-dar-baixa-no-mei': 'Como dar baixa no MEI e o que fazer com dívidas',
  'como-ler-o-extrato-bancario-e-contestar-cobrancas':
    'Como ler o extrato bancário e contestar cobranças',
  'como-montar-um-orcamento-mensal-simples':
    'Orçamento mensal simples: regra 50-30-20',
  'como-cancelar-assinaturas-e-compras-online':
    'Como cancelar assinaturas e compras online',
  'como-calcular-o-salario-liquido': 'Como calcular o salário líquido em 2026',
  'como-calcular-ferias-passo-a-passo':
    'Como calcular férias: 1/3, venda de 10 dias',
  'como-calcular-o-13o-salario':
    'Como calcular o 13º salário: parcelas e descontos',
  'como-calcular-a-rescisao-sem-justa-causa':
    'Como calcular a rescisão sem justa causa',
  'como-calcular-horas-extras-e-dsr':
    'Como calcular horas extras com adicional e DSR',
  'como-pedir-o-seguro-desemprego':
    'Como pedir o seguro-desemprego: prazo e valor',
  'como-abrir-um-mei-passo-a-passo':
    'Como abrir um MEI: requisitos e custo mensal',
  'mei-das-em-atraso-como-regularizar':
    'DAS do MEI em atraso: como regularizar',
  'tabela-do-imposto-de-renda-2026-na-folha':
    'Tabela do Imposto de Renda 2026 na folha',
  'como-funciona-o-desconto-do-inss':
    'Desconto do INSS: faixas, teto e exemplos',
  'cdb-lci-lca-ou-tesouro-selic-qual-escolher':
    'CDB, LCI, LCA ou Tesouro Selic: como escolher',
  'poupanca-ou-cdb-qual-rende-mais': 'Poupança ou CDB: qual rende mais?',
  'juros-compostos-na-pratica': 'Juros compostos na prática, com exemplos',
  'financiamento-sac-ou-price-qual-escolher':
    'Financiamento SAC ou Price: qual escolher',
  'como-sair-do-endividamento-passo-a-passo':
    'Como sair do endividamento passo a passo',
  'bolsa-familia-como-consultar-e-quanto-recebe':
    'Bolsa Família: como consultar e quanto recebe',
  'bpc-loas-quem-tem-direito-e-como-pedir':
    'BPC/LOAS: quem tem direito e como pedir',
  'abono-salarial-pis-pasep-quem-tem-direito':
    'Abono salarial PIS/Pasep: quem tem direito',
  'quanto-custa-um-funcionario-clt': 'Quanto custa um funcionário CLT',
  'simples-nacional-e-fator-r-como-pagar-menos-imposto':
    'Simples Nacional e Fator R: como pagar menos',
  // Notícias
  'inss-outubro-2026-calendario-de-pagamento-26-de-outubro-a-9-de-novembro':
    'INSS outubro 2026: calendário de pagamento',
  'salario-minimo-2027-orcamento-preve-r-1-741-veja-o-que-muda':
    'Salário mínimo 2027: Orçamento prevê R$ 1.741',
  'saque-aniversario-fgts-outubro-2026-ate-31-de-dezembro-quanto-sai':
    'Saque-aniversário FGTS: nascidos em outubro',
  'bolsa-familia-691-outubro-2026-calendario':
    'Bolsa Família: mínimo de R$ 691 em outubro',
  'selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve':
    'Selic em 13,75%: o que muda para você',
  'imposto-de-renda-zero-ate-r-5-mil-quanto-voce-paga-no-contracheque':
    'IR zero até R$ 5 mil: quanto você paga em 2026',
  '13o-salario-2026-datas-e-quanto-voce-recebe':
    '13º salário 2026: datas e quanto você recebe',
  'inss-2026-teto-de-r-8-475-55-e-aliquotas-por-faixa':
    'INSS 2026: teto de R$ 8.475,55 e alíquotas',
  'salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso':
    'Salário mínimo de R$ 1.621: o que muda',
  'seguro-desemprego-2026-valores-parcelas-e-como-pedir':
    'Seguro-desemprego 2026: valores e parcelas',
  'mei-2026-das-de-r-81-05-limite-de-r-81-mil-e-multa-por-atraso':
    'MEI 2026: DAS de R$ 81,05 e limite de R$ 81 mil',
  'reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica':
    'Reajuste do aluguel: IGP-M 3,35% ou IPCA 4,22%',
  'poupanca-rende-8-3-ao-ano-veja-quanto-cdb-e-lci-rendem-a-mais':
    'Poupança rende 8,3%; veja quanto CDB e LCI pagam',
  'ferias-2026-como-calcular-o-um-terco-vender-10-dias-e-dividir-em-periodos':
    'Férias 2026: 1/3, venda de 10 dias e períodos',
  'demissao-sem-justa-causa-o-que-voce-recebe-exemplo-em-reais':
    'Demissão sem justa causa: o que você recebe',
  'horas-extras-como-calcular-50-100-e-o-reflexo-no-dsr':
    'Horas extras: adicionais de 50%, 100% e o DSR',
  'inss-de-autonomo-e-socio-20-11-ou-5-qual-plano-vale-a-pena':
    'INSS de autônomo: 20%, 11% ou 5%? Veja o custo',
  'financiamento-sac-ou-price-diferenca-de-r-135-mil-em-juros-no-exemplo':
    'SAC ou Price: diferença de R$ 135 mil em juros',
  'abono-salarial-2026-prazo-para-sacar-vai-ate-30-de-dezembro':
    'Abono salarial 2026: saque até 30 de dezembro',
  'desenrola-mei-pequeno-valor-desconto-dividas':
    'Desenrola MEI: desconto de 50% e como aderir',
};

/** Título usado em <title>, Open Graph e Twitter; cai para o título completo. */
export function metaTitleOf(document: Pick<ContentDocument, 'slug' | 'title'>) {
  return metaTitles[document.slug] ?? document.title;
}
