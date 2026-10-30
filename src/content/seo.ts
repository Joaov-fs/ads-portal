import type { ContentDocument } from './types';

/**
 * Títulos curtos para a aba do navegador e para o Google (até 52 caracteres,
 * antes do sufixo da marca). O título completo continua sendo o H1 da página.
 */
export const metaTitles: Readonly<Record<string, string>> = {
  'garantia-safra-bahia-inscricao-21-outubro-2026':
    'Garantia-Safra Bahia: inscrição termina em 21/10',
  'ir-2026-restituicoes-41-bilhoes-como-consultar':
    'IR 2026: R$ 41 bilhões restituídos; como consultar',
  'bolsa-familia-outubro-antecipado-21-de-outubro':
    'Bolsa Família: outubro antecipado para 21/10',
  // Guias
  'prorrogacao-do-auxilio-por-incapacidade-temporaria-quando-e-como-pedir':
    'Prorrogação do auxílio-doença: quando e como pedir',
  'auxilio-por-incapacidade-temporaria-valor-carencia-e-como-pedir':
    'Auxílio-doença do INSS: valor, carência e pedido',
  'retroativos-do-inss-o-que-sao-e-como-conferir-o-pagamento':
    'Retroativos do INSS: como calcular e conferir',
  'pericia-medica-do-inss-como-funciona-e-como-se-preparar':
    'Perícia do INSS: como funciona e como se preparar',
  'aposentadoria-por-idade-regras-valor-e-como-pedir':
    'Aposentadoria por idade: regras, valor e pedido',
  'qualidade-de-segurado-e-carencia-no-inss-como-funciona':
    'Qualidade de segurado e carência no INSS',
  'como-contar-prazos-dias-corridos-e-dias-uteis':
    'Como contar prazos: dias corridos e dias úteis',
  'ipva-como-calcular-valor-venal-aliquota-e-parcelas':
    'IPVA: como calcular valor venal, alíquota e parcelas',
  'vale-transporte-como-funciona-o-desconto-de-6':
    'Vale-transporte: desconto de 6% e parte da empresa',
  'adicional-de-insalubridade-como-calcular-os-graus':
    'Insalubridade: como calcular os graus de 10 a 40%',
  'adicional-de-periculosidade-quem-recebe-e-como-calcular':
    'Periculosidade: quem recebe e como calcular 30%',
  'banco-de-horas-como-funciona-e-como-calcular-o-saldo':
    'Banco de horas: prazos e como calcular o saldo',
  'salario-maternidade-quem-recebe-e-como-calcular':
    'Salário-maternidade: quem recebe e quanto',
  'como-calcular-a-pensao-alimenticia-percentual-e-base':
    'Pensão alimentícia: percentual, base e desconto',
  'pro-labore-como-calcular-inss-e-imposto-de-renda':
    'Pró-labore: INSS de 11% e Imposto de Renda',
  'mei-passou-do-limite-de-r-81-mil-o-que-acontece':
    'MEI passou de R$ 81 mil: o que acontece',
  'cdi-o-que-e-e-como-calcular-o-rendimento':
    'CDI: o que é e como calcular o rendimento',
  'plr-como-funciona-e-como-calcular-o-imposto':
    'PLR: como funciona e como calcular o imposto',
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
  'aneel-mantem-bandeira-verde-em-novembro-de-2026-conta-de-luz-sem-taxa-extra':
    'Bandeira verde em novembro: luz sem taxa extra',
  'pnad-desemprego-3o-trimestre-5-2-menor-desde-2012-103-6-milhoes-ocupados':
    'Desemprego cai a 5,2%, o menor desde 2012',
  'gasolina-cai-a-r-6-49-na-2a-semana-sem-tributos-federais-etanol-a-r-4-11':
    'Gasolina cai a R$ 6,49 e etanol fica em R$ 4,11',
  'tcu-aprova-cbs-de-11-3-para-2027-o-que-muda-para-o-consumidor':
    'TCU aprova CBS de 11,3% para 2027: o que muda',
  'pix-med-prazo-de-80-dias-e-nova-etapa-entre-bancos-vale-desde-26-de-outubro':
    'Pix: MED tem prazo de 80 dias para contestar golpe',
  'bolsa-familia-novembro-16-17-e-18-dezembro-10-11-e-14-calendario-do-nis':
    'Bolsa Família: datas de novembro e dezembro',
  'tesouro-recompra-ntn-b-leilao-de-tesouro-selic-cancelado-27-de-outubro':
    'Tesouro recompra NTN-B e cancela leilão de LFT',
  'imposto-seletivo-mp-sai-esta-semana-e-diesel-mantem-subvencao-de-r-2-12':
    'Imposto Seletivo: MP sai e diesel mantém R$ 2,12',
  'dolar-sobe-8-21-a-r-5-403-e-bolsa-cai-13-88-o-que-muda-para-o-seu-bolso':
    'Dólar a R$ 5,403 e bolsa -13,88%: o que muda',
  'copom-4-de-novembro-selic-13-75-focus-preve-13-25-no-fim-de-2026':
    'Copom decide a Selic em 4/11: o que esperar',
  'gasolina-na-bomba-quase-nao-cai-anp-mostra-r-6-53-na-1a-semana-sem-tributos-federais':
    'Gasolina a R$ 6,53: o corte de tributos chegou?',
  'aposentadoria-especial-de-agentes-de-saude-ec-140-idade-minima-de-57-e-60-anos':
    'Aposentadoria de agentes de saúde: 57 e 60 anos',
  'dolar-fecha-a-r-4-993-e-cai-1-58-na-semana-o-que-muda-para-quem-compra-e-viaja':
    'Dólar fecha a R$ 4,993 e cai 1,58% na semana',
  'restituicao-ir-lote-residual-184-mil-contribuintes-credito-em-30-de-outubro':
    'Restituição IR: lote residual paga em 30/10',
  '13o-salario-2026-primeira-parcela-ate-30-de-novembro-e-segunda-ate-18-de-dezembro':
    '13º salário 2026: 1ª parcela 30/11, 2ª 18/12',
  'ipca-15-de-outubro-sobe-0-32-e-inflacao-em-12-meses-vai-a-4-62-tomate-puxa-a-alta':
    'IPCA-15 de outubro: 0,32% e 4,62% em 12 meses',
  'gas-do-povo-recarga-todo-dia-10-proxima-em-10-de-novembro-quem-recebe-e-quanto-vale':
    'Gás do Povo: recarga todo dia 10, próxima em 10/11',
  'arrecadacao-federal-recorde-de-r-239-4-bilhoes-em-setembro-o-que-a-alta-de-5-62-significa-para-voce':
    'Arrecadação recorde: R$ 239,4 bi em setembro',
  'segundo-turno-25-de-outubro-quem-nao-votar-paga-multa-de-r-3-51-e-prazo-para-justificar':
    '2º turno: multa de R$ 3,51 e como justificar',
  'desenrola-3-0-edital-de-r-90-bi-em-dividas-de-ate-r-10-mil-desconto-minimo-de-90':
    'Desenrola 3.0: edital de R$ 90 bi, desconto de 90%',
  'antecipacao-do-saque-aniversario-do-fgts-cai-para-3-parcelas-e-r-1-500-em-1-de-novembro':
    'FGTS: antecipação cai para 3 parcelas em 1º/11',
  'prazo-do-simples-nacional-2027-termina-hoje-e-ibs-cbs-tem-escolha-ate-30-de-outubro':
    'Simples Nacional 2027: prazo até 15/10; IBS e CBS',
  'pacote-mei-perdao-de-r-12-6-bilhoes-pix-de-ate-r-5-mil-e-teto-de-r-110-mil':
    'Prospera MEI: sanção, limites e regras do Pix MEI',
  'gasolina-sem-tributos-federais-por-30-dias-desoneracao-de-r-0-89-por-litro':
    'Gasolina sem tributos federais: R$ 0,89 por litro',
  'pgfn-semana-regularizacao-tributaria-adesao-ate-9-de-outubro-desconto-ate-100-em-juros-e-multas':
    'PGFN: semana de regularização, desconto até 100%',
  'pix-por-aproximacao-sem-teto-de-r-500-como-ajustar-o-limite-no-app':
    'Pix por aproximação sem teto de R$ 500: ajuste',
  'focus-inflacao-5-01-selic-13-5-fim-de-2026-o-que-o-mercado-preve':
    'Focus: inflação de 5,01% e Selic de 13,5% em 2026',
  'pgfn-fgts-empregadores-negociar-divida-desconto-ate-29-de-janeiro':
    'PGFN: dívida de FGTS de empregadores, desconto',
  'quinto-dia-util-de-outubro-2026-prazo-do-salario-vai-ate-6-de-outubro':
    'Quinto dia útil de outubro 2026: prazo do salário',
  'vale-refeicao-e-alimentacao-cartao-em-qualquer-maquininha-prazo-termina-em-novembro-de-2026':
    'Vale-refeição: cartão em qualquer maquininha',
  'ipca-de-setembro-sobe-0-82-e-inflacao-em-12-meses-chega-a-4-58':
    'IPCA de setembro: 0,82% e 4,58% em 12 meses',
  'pix-automatico-na-conta-salario-a-partir-de-1-de-julho-de-2027':
    'Pix Automático na conta-salário a partir de 2027',
  'receita-envia-cartas-a-498-mil-contribuintes-na-malha-fina-ate-20-de-outubro':
    'Malha fina: Receita envia 498 mil cartas',
  'votar-vale-como-prova-de-vida-do-inss-veja-quem-nao-precisa-fazer':
    'Votar vale como prova de vida do INSS em 2026',
  'inss-outubro-2026-calendario-de-pagamento-26-de-outubro-a-9-de-novembro':
    'INSS: pagamento de outubro começa em 26/10',
  'inss-novembro-2026-calendario-24-de-novembro-e-13o-para-quem-comecou-em-maio':
    'INSS novembro: datas de 24/11 a 7/12 e 13º novo',
  'salario-minimo-2027-orcamento-preve-r-1-741-veja-o-que-muda':
    'Salário mínimo 2027: Orçamento prevê R$ 1.741',
  'saque-aniversario-fgts-outubro-2026-ate-31-de-dezembro-quanto-sai':
    'Saque-aniversário FGTS: nascidos em outubro',
  'bolsa-familia-691-outubro-2026-calendario':
    'Bolsa Família: mínimo de R$ 691 em outubro',
  'dinheiro-esquecido-em-bancos-chega-a-r-5-79-bilhoes-veja-como-consultar':
    'Dinheiro esquecido em bancos: R$ 5,79 bilhões',
  'selic-13-75-o-que-muda-para-quem-investe-e-para-quem-deve':
    'Selic em 13,75%: o que muda para você',
  'salario-minimo-2026-r-1-621-o-que-ele-muda-no-seu-bolso':
    'Salário mínimo de R$ 1.621: o que muda',
  'mei-2026-das-de-r-81-05-limite-de-r-81-mil-e-multa-por-atraso':
    'MEI 2026: DAS de R$ 81,05 e limite de R$ 81 mil',
  'inss-de-autonomo-e-socio-20-11-ou-5-qual-plano-vale-a-pena':
    'INSS de autônomo: 20%, 11% ou 5%? Veja o custo',
  'abono-salarial-2026-prazo-para-sacar-vai-ate-30-de-dezembro':
    'Abono salarial 2026: saque até 30 de dezembro',
  'desenrola-mei-pequeno-valor-desconto-dividas':
    'Desenrola MEI: desconto de 50% e como aderir',
  'inss-paga-afastamento-de-ate-6-meses-a-mulheres-com-medida-protetiva':
    'INSS paga afastamento de até 6 meses a vítimas',
  'pe-de-meia-7a-parcela-de-r-200-sai-de-19-a-26-de-outubro-veja-as-datas':
    'Pé-de-Meia: 7ª parcela de R$ 200 em 19 a 26/10',
  'fim-da-escala-6x1-senado-aprova-pec-veja-quando-comeca-e-o-que-muda':
    'Fim da escala 6x1: emenda promulgada e transição',
  'abono-salarial-lote-complementar-1-milhao-de-trabalhadores-recebe-desde-15-de-outubro':
    'Abono salarial: lote extra paga 1,03 milhão',
  'bc-ofertas-de-credito-novas-regras-2027':
    'BC muda ofertas de crédito: regras a partir de 2027',
  'pis-pasep-antigo-fundo-caixa-paga-26-de-outubro-e-pedido-ate-31-de-outubro-sai-em-25-de-novembro':
    'Antigo PIS/Pasep: Caixa paga hoje e abre lote de 25/11',
  'tarifa-zero-pec-18-fins-de-semana-e-feriados-r-12-bilhoes-em-2027':
    'PEC da tarifa zero: ônibus grátis em fins de semana',
  'bancos-fecham-no-feriado-de-finados-2-de-novembro-boletos-pagam-3-de-novembro':
    'Bancos fecham em Finados: boleto paga em 3/11',
  'inss-biometria-e-golpe-beneficio-nao-sera-bloqueado-para-quem-ja-recebe':
    'INSS desmente bloqueio por falta de biometria',
};

/** Título usado em <title>, Open Graph e Twitter; cai para o título completo. */
export function metaTitleOf(document: Pick<ContentDocument, 'slug' | 'title'>) {
  return metaTitles[document.slug] ?? document.title;
}
