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

## Quando sair norma nova

- Só mexer se afetar um número já publicado. Não é preciso acompanhar notícia.

## Depois da aprovação do AdSense

- Preencher os `slotId` dos anúncios.
