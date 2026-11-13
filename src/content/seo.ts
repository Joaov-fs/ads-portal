import type { ContentDocument } from './types';

/**
 * Títulos curtos para a aba do navegador e para o Google (até 52 caracteres,
 * antes do sufixo da marca). O título completo continua sendo o H1 da página.
 */
export const metaTitles: Readonly<Record<string, string>> = {
  'focus-9-novembro-selic-13-75-fim-de-2026-mercado-nao-ve-mais-corte':
    'Focus: Selic de 13,75% no fim de 2026, sem corte',
  'focus-3-novembro-selic-13-50-fim-de-2026-dolar-r-5-34-copom-decide-dia-4':
    'Focus: Selic de 13,50% e dólar a R$ 5,34 em 2026',
  'lula-garante-programas-sociais-no-4o-mandato-bolsa-familia-paga-r-691-e-novembro-comeca-dia-16':
    'Lula mantém programas sociais no 4º mandato',
  'garantia-safra-bahia-inscricao-21-outubro-2026':
    'Garantia-Safra Bahia: inscrição termina em 21/10',
  'ir-2026-restituicoes-41-bilhoes-como-consultar':
    'IR 2026: R$ 41 bilhões restituídos; como consultar',
  'bolsa-familia-outubro-antecipado-21-de-outubro':
    'Bolsa Família: outubro antecipado para 21/10',
  // Calculadoras (títulos alinhados às buscas do Search Console)
  inss: 'Calculadora INSS 2026: quanto sai do seu salário?',
  'prazo-prorrogacao-auxilio-inss':
    'Auxílio do INSS acabando? Saiba quando prorrogar',
  'bolsa-familia': 'Bolsa Família 2026: simule quanto sua família recebe',
  'tesouro-selic': 'Tesouro Selic: simule quanto rende, já com IR',
  'das-mei-atraso': 'DAS do MEI atrasado? Calcule a multa e regularize',
  periculosidade: 'Calculadora de periculosidade: 30% e reflexos',
  insalubridade: 'Calculadora de insalubridade: 10%, 20% ou 40%',
  pis: 'Calculadora PIS/Pasep 2026: valor do abono',
  'decimo-proporcional': 'Calculadora de 13º proporcional 2026',
  cdi: 'Simulador CDI: quanto rende 100% do CDI',
  'plr-ppr-liquido': 'Calculadora PLR e PPR líquido com IR 2026',
  'ferias-proporcionais': 'Calculadora de férias proporcionais com 1/3',
  'retroativos-inss': 'Retroativos do INSS: calcule os atrasados',
  'reajuste-aluguel': 'Reajuste de aluguel: calcule pelo IGP-M ou IPCA',
  'salario-por-hora': 'Salário por hora: calcule o valor da sua hora',
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
    'CDB, LCI, LCA ou Tesouro: qual rende mais em 2026?',
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
    'PIS/Pasep 2026: quem tem direito, valor e saque',
  'quanto-custa-um-funcionario-clt': 'Quanto custa um funcionário CLT',
  'simples-nacional-e-fator-r-como-pagar-menos-imposto':
    'Simples Nacional e Fator R: como pagar menos',
  // Notícias
  'loterias-caixa-pagam-premios-de-ate-r-2-428-80-via-pix-em-apostas-digitais':
    'Loterias Caixa: prêmio de até R$ 2.428,80 no Pix',
  'cnu-3-2027-governo-estuda-prova-como-o-enem-e-1-3-mil-vagas-remanescentes':
    'CNU 3 em 2027: modelo como o Enem em estudo',
  'ipca-de-outubro-sobe-0-14-e-inflacao-em-12-meses-vai-a-4-63-conta-de-luz-cai':
    'IPCA de outubro: 0,14% e 4,63% em 12 meses',
  'mp-1376-senado-aprova-plv-16-2026-dividas-rurais-vai-a-sancao':
    'Senado aprova MP das dívidas rurais e vai à sanção',
  'pacote-fiscal-de-ate-r-60-bilhoes-limita-despesas-a-2-e-corta-incentivos-em-20':
    'Pacote fiscal de até R$ 60 bi: o que muda em 2027',
  'mp-1376-comissao-amplia-renegociacao-de-dividas-rurais-prazo-vai-a-31-10-plv-16-2026':
    'MP das dívidas rurais: prazo vai a 31/10 (PLV 16)',
  'saques-da-poupanca-superam-depositos-em-r-8-88-bilhoes-em-outubro-e-saida-no-ano-vai-a-r-75-3-bi':
    'Saques da poupança: saída de R$ 8,88 bi em outubro',
  'cbs-regra-de-transicao-opcional-primeira-apuracao-em-fevereiro-de-2027':
    'CBS: regra de transição opcional em fev/2027',
  'congresso-aprova-r-152-4-bi-em-creditos-pln-23-r-149-4-bi-beneficios':
    'Congresso aprova R$ 152,4 bi em créditos de 2026',
  'dolar-fecha-a-r-5-65-ibovespa-cai-0-43-a-171-mil-pontos-pacote-fiscal-12-11':
    'Dólar a R$ 5,65 e Ibovespa a 171 mil pontos',
  'dolar-fecha-a-r-5-5628-ibovespa-sobe-0-42-a-172-mil-pontos-e-petrobras-lucra-r-39-75-bi':
    'Dólar a R$ 5,56 e Ibovespa a 172 mil pontos',
  'dolar-fecha-a-r-5-586-ibovespa-cai-0-52-dolar-no-maior-valor-desde-julho-de-2025':
    'Dólar fecha a R$ 5,586, o maior desde jul/2025',
  'caixa-libera-extrato-do-fgts-para-bancos-autorizacao-vale-90-dias-e-mostra-12-meses':
    'Extrato do FGTS para bancos: vale 90 dias',
  'dinheiro-esquecido-sobe-para-r-6-03-bilhoes-veja-como-consultar-no-banco-central':
    'Dinheiro esquecido sobe a R$ 6,03 bi: consulte',
  'stf-audiencia-escala-6x1-10-novembro-adi-8041-e-8042':
    'Escala 6x1: Dino descarta 40h em 16/12 no STF',
  'justica-suspende-regra-que-ampliou-vr-e-va-em-qualquer-maquininha':
    'Justiça suspende regra do VR e VA nas maquininhas',
  'gasolina-sem-tributos-prorrogada-ate-9-12-decreto-13-159':
    'Gasolina sem tributos federais vai até 9/12',
  'mpox-25-mil-doses-garantidas-sus-vacina-so-para-grupos-de-risco':
    'Mpox: 25 mil doses e vacina só para grupos',
  'senado-aprova-por-72-a-0-acesso-da-anp-a-notas-fiscais-de-combustiveis-vai-a-sancao':
    'Senado aprova acesso da ANP a notas fiscais',
  'pe-de-meia-universitario-r-700-por-mes-e-r-10-mil-ao-formar-previsto-para-2027':
    'Pé-de-Meia Universitário: R$ 700 por mês em 2027',
  'cnu-2-novo-edital-300-2026-refaz-lista-de-espera-de-544-vagas-confira-no-diario-oficial':
    'CNU 2: novo edital refaz a lista de espera',
  'ata-do-copom-juros-restritivos-por-mais-tempo-ipca-de-2028-sobe-a-3-5':
    'Ata do Copom vê juros altos por mais tempo',
  'enem-reaplicacao-pedido-de-16-a-20-de-novembro-provas-em-15-e-16-de-dezembro':
    'Enem 2026: reaplicação, pedido de 16 a 20/11',
  'superavit-comercial-de-outubro-e-recorde-us-9-32-bi':
    'Superávit comercial de outubro: US$ 9,32 bi',
  'enem-2026-redacao-sobre-o-sus-nota-vai-ate-1-000-e-a-2a-prova-e-em-15-de-novembro':
    'Redação do Enem 2026 é sobre o SUS: nota até 1.000',
  'pec-da-seguranca-publica-aprovada-no-senado-por-75-a-0-falta-a-promulgacao':
    'PEC da Segurança aprovada no Senado por 75 a 0',
  'inss-atestmed-negado-tem-segunda-analise-em-10-dias-portaria-54-vale-desde-6-de-novembro':
    'Atestmed negado: 2ª análise em 10 dias, vale 6/11',
  'brasil-gera-121-3-mil-empregos-em-setembro-caged':
    'Caged: 121,3 mil vagas em setembro, 1,24 mi no ano',
  'black-friday-27-de-novembro-checklist-de-compra-segura-e-arrependimento-de-7-dias':
    'Black Friday 27/11: como conferir o desconto',
  'feriados-de-novembro-de-2026-sexta-20-e-feriadao-dia-15-cai-no-domingo-e-quem-trabalha-recebe-em-dobro':
    'Feriados de novembro 2026: 20/11 é feriadão (sexta)',
  'igp-m-outubro-1-47-acumulado-5-24-aluguel-de-r-2-000-vai-a-r-2-104-80':
    'IGP-M de outubro: 1,47% e 5,24% em 12 meses',
  'sac-novas-regras-valem-desde-2-de-novembro-atendente-humano-das-8h-as-20h-e-espera-de-20-segundos':
    'SAC: novas regras valem desde 2/11 (Decreto 13.135)',
  'nfs-e-nacional-obrigatoria-para-empresas-do-simples-a-partir-de-1-de-novembro':
    'NFS-e Nacional obrigatória no Simples em 1º/11',
  'fies-vagas-remanescentes-2026-inscricao-ate-3-de-novembro-50-mil-vagas-e-renda-de-ate-3-salarios':
    'Fies: 50 mil vagas com inscrição até 3/11',
  'aneel-mantem-bandeira-verde-em-novembro-de-2026-conta-de-luz-sem-taxa-extra':
    'Bandeira verde em novembro: luz sem taxa extra',
  'pnad-desemprego-3o-trimestre-5-2-menor-desde-2012-103-6-milhoes-ocupados':
    'Desemprego cai a 5,2%, o menor desde 2012',
  'gasolina-sem-tributos-vence-9-11-r-0-89-por-litro-prorrogacao-nao-confirmada':
    'Gasolina sem tributos vale até 9/11: R$ 0,89/L',
  'gasolina-sem-tributos-ate-9-12-decreto-13-159-corte-de-r-0-89-por-litro':
    'Gasolina sem tributos vai até 9/12: corte R$ 0,89/L',
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
  'dolar-fecha-a-r-5-486-e-ibovespa-tem-6a-queda-seguida-o-que-muda-no-seu-bolso':
    'Dólar a R$ 5,486 e Ibovespa em 6ª queda',
  'brasil-tem-o-maior-juro-real-do-mundo-9-05-contra-media-de-1-27-e-selic-esta-em-13-75':
    'Brasil tem o maior juro real: 9,05% ao ano',
  'anatel-manda-bloquear-sms-de-codigos-nao-registrados-prazo-de-ate-90-dias':
    'Anatel manda bloquear SMS de códigos sem registro',
  'dolar-fecha-a-r-5-511-sobe-1-20-na-semana-e-ibovespa-vai-a-168-mil-pontos':
    'Dólar a R$ 5,511 e +1,20% na semana: o que muda',
  'copom-4-de-novembro-selic-13-75-focus-preve-13-25-no-fim-de-2026':
    'Copom decide a Selic em 4/11: o que esperar',
  'copom-mantem-selic-em-13-75-por-unanimidade-o-que-muda-no-seu-bolso':
    'Copom mantém Selic em 13,75%: o que muda',
  'imposto-seletivo-mp-1-399-define-aliquotas-e-cobranca-comeca-em-2-de-fevereiro-de-2027':
    'Imposto Seletivo: MP define alíquotas para 2027',
  'decreto-escala-6x1-segunda-9-de-novembro-8-folgas-por-mes-o-que-muda':
    'Decreto da escala 6x1 sai em 9/11: 8 folgas por mês',
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
  'gas-do-povo-prorrogado-ate-19-11-2031-mp-1-400-e-3-1-milhoes-de-vales-em-10-11':
    'Gás do Povo prorrogado até 2031 pela MP 1.400',
  'gas-do-povo-recarga-todo-dia-10-proxima-em-10-de-novembro-quem-recebe-e-quanto-vale':
    'Gás do Povo: recarga todo dia 10, próxima em 10/11',
  'arrecadacao-federal-recorde-de-r-239-4-bilhoes-em-setembro-o-que-a-alta-de-5-62-significa-para-voce':
    'Arrecadação recorde: R$ 239,4 bi em setembro',
  'segundo-turno-25-de-outubro-quem-nao-votar-paga-multa-de-r-3-51-e-prazo-para-justificar':
    '2º turno: multa de R$ 3,51 e como justificar',
  'desenrola-3-0-edital-de-r-90-bi-em-dividas-de-ate-r-10-mil-desconto-minimo-de-90':
    'Desenrola 3.0: edital de R$ 90 bi, desconto de 90%',
  'antecipacao-do-saque-aniversario-do-fgts-cai-para-3-parcelas-e-r-1-500-em-1-de-novembro':
    'FGTS: corte para 3 parcelas foi adiado',
  'fgts-antecipacao-cinco-saques-adiada-ate-31-de-marco-de-2027':
    'FGTS: antecipação de 5 saques vai a 31/03/2027',
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
    'Antigo PIS/Pasep: pedido até 31/10, crédito em 25/11',
  'tarifa-zero-pec-18-fins-de-semana-e-feriados-r-12-bilhoes-em-2027':
    'PEC da tarifa zero: ônibus grátis em fins de semana',
  'bancos-fecham-no-feriado-de-finados-2-de-novembro-boletos-pagam-3-de-novembro':
    'Bancos fecham em Finados: boleto paga em 3/11',
  'inss-biometria-e-golpe-beneficio-nao-sera-bloqueado-para-quem-ja-recebe':
    'INSS desmente bloqueio por falta de biometria',
  'enem-2026-provas-8-e-15-de-novembro-portoes-fecham-as-13h-e-pe-de-meia-paga-r-200':
    'Enem 2026: provas 8 e 15/11, portões fecham 13h',
  'mp-das-bets-stf-audiencia-3-de-novembro-saldo-devolvido-ate-14-de-outubro':
    'MP das bets: STF ouve setor e governo em 3/11',
  'fux-suspende-acoes-contra-a-mp-das-bets-ate-o-stf-julgar-adi-8027':
    'Fux suspende ações contra a MP das bets no STF',
  'feirao-limpa-nome-2026-desconto-ate-99-e-prazo-ate-6-de-dezembro-em-7-mil-agencias':
    'Feirão Limpa Nome: até 99% de desconto até 6/12',
};

/** Título usado em <title>, Open Graph e Twitter; cai para o título completo. */
export function metaTitleOf(document: Pick<ContentDocument, 'slug' | 'title'>) {
  return metaTitles[document.slug] ?? document.title;
}
