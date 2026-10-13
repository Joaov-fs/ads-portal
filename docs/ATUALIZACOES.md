# Calendário de atualização dos números

Projeto solo, baixa manutenção. Este é o único checklist recorrente.

## Todo mês (5 minutos)

- `monthlySelic` e fallbacks de indicadores: conferir Selic, IPCA e CDI no Banco Central e ajustar se mudaram.
- Base do impostômetro: ajustar só se a fonte mudou.

## Todo 1º de janeiro (1 a 2 horas)

- Salário mínimo, teto do INSS e tabela de contribuição.
- Tabela do IRRF, faixa de isenção, desconto por dependente.
- Seguro-desemprego, Bolsa Família, BPC, abono PIS (prazo), limite e DAS do MEI.
- Depois de ajustar `src/calculators`, rodar os testes e atualizar as datas de revisão (`reviewDates` em `mvp-catalog.ts`).
- Refazer as tabelas de referência das calculadoras: `npx tsx scripts/aprofundamento/gerar.mts` (revise antes os valores fixos citados no texto do script).
- Guias e notícias trazem valores no texto (R$ 1.621, R$ 8.475,55, R$ 81.000 etc.): busque por eles com `grep -rn "1.621" src/content/files` e ajuste os que mudaram.

## Quando sair norma nova

- Só mexer se afetar um número já publicado. Não é preciso acompanhar notícia.

## Depois da aprovação do AdSense

- Preencher os `slotId` dos anúncios.
