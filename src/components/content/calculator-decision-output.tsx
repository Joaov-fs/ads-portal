import type {
  CalculatorDecision,
  DecisionBreakdownItem,
  DecisionStatement,
} from '@/calculators/types';

const money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoney(value: number) {
  return money.format(value);
}

function DecisionBars({
  items,
}: Readonly<{ items: readonly DecisionBreakdownItem[] }>) {
  const maximum = Math.max(...items.map((item) => Math.abs(item.value)), 1);
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div className="grid gap-1.5" key={item.label}>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-ads-muted">{item.label}</span>
            <strong className="text-ads-secondary">
              {formatMoney(item.value)}
            </strong>
          </div>
          <div
            className="h-2 overflow-hidden rounded-ads-full bg-ads-secondary-soft"
            role="img"
            aria-label={`${item.label}: ${formatMoney(item.value)}`}
          >
            <div
              className="h-full rounded-ads-full bg-ads-primary"
              style={{
                width: `${Math.max(2, (Math.abs(item.value) / maximum) * 100)}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function StatementTable({
  statement,
}: Readonly<{ statement: DecisionStatement }>) {
  const hasReference = statement.rows.some((row) => row.reference);
  const hasDiscounts = statement.rows.some((row) => row.discount !== undefined);
  const totalEarnings = statement.rows.reduce(
    (sum, row) => sum + (row.earning ?? 0),
    0,
  );
  const totalDiscounts = statement.rows.reduce(
    (sum, row) => sum + (row.discount ?? 0),
    0,
  );
  const columnCount = 2 + (hasReference ? 1 : 0) + (hasDiscounts ? 1 : 0);

  return (
    <section
      className="grid gap-3 overflow-hidden rounded-ads-xlarge border border-ads-border bg-ads-surface"
      aria-labelledby="statement-title"
    >
      <h3
        className="px-5 pt-5 text-xl font-bold text-ads-secondary"
        id="statement-title"
      >
        {statement.title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-120 text-left text-sm">
          <thead className="bg-ads-secondary-soft text-ads-secondary">
            <tr>
              <th className="px-5 py-3 font-bold" scope="col">
                Descrição
              </th>
              {hasReference ? (
                <th className="px-5 py-3 font-bold" scope="col">
                  Referência
                </th>
              ) : null}
              <th className="px-5 py-3 text-right font-bold" scope="col">
                Proventos
              </th>
              {hasDiscounts ? (
                <th className="px-5 py-3 text-right font-bold" scope="col">
                  Descontos
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {statement.rows.map((row) => (
              <tr className="border-t border-ads-border" key={row.label}>
                <th className="px-5 py-3 font-medium text-ads-text" scope="row">
                  {row.label}
                </th>
                {hasReference ? (
                  <td className="px-5 py-3 text-ads-muted">
                    {row.reference ?? ''}
                  </td>
                ) : null}
                <td className="px-5 py-3 text-right tabular-nums text-ads-text">
                  {row.earning !== undefined ? formatMoney(row.earning) : ''}
                </td>
                {hasDiscounts ? (
                  <td className="px-5 py-3 text-right tabular-nums text-ads-danger">
                    {row.discount !== undefined
                      ? formatMoney(row.discount)
                      : ''}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {hasDiscounts ? (
              <tr className="border-t border-ads-border-strong bg-ads-background">
                <th
                  className="px-5 py-3 font-bold text-ads-secondary"
                  colSpan={hasReference ? 2 : 1}
                  scope="row"
                >
                  Totais
                </th>
                <td className="px-5 py-3 text-right font-bold tabular-nums text-ads-secondary">
                  {formatMoney(totalEarnings)}
                </td>
                <td className="px-5 py-3 text-right font-bold tabular-nums text-ads-danger">
                  {formatMoney(totalDiscounts)}
                </td>
              </tr>
            ) : null}
            <tr className="bg-ads-primary-soft">
              <th
                className="px-5 py-4 text-base font-bold text-ads-secondary"
                colSpan={columnCount - 1}
                scope="row"
              >
                {statement.netLabel}
              </th>
              <td className="px-5 py-4 text-right text-base font-bold tabular-nums text-ads-secondary">
                {formatMoney(totalEarnings - totalDiscounts)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {statement.note ? (
        <p className="px-5 pb-5 text-xs leading-5 text-ads-muted">
          {statement.note}
        </p>
      ) : null}
    </section>
  );
}

export function CalculatorDecisionOutput({
  decision,
}: Readonly<{ decision: CalculatorDecision }>) {
  return (
    <div className="grid gap-8">
      {decision.statement ? (
        <StatementTable statement={decision.statement} />
      ) : null}

      {decision.chart ? (
        <section
          className="grid gap-4 rounded-ads-xlarge border border-ads-border bg-ads-surface p-5 sm:p-6"
          aria-labelledby="chart-title"
        >
          <h3 className="text-xl font-bold text-ads-secondary" id="chart-title">
            {decision.chart.title}
          </h3>
          <DecisionBars items={decision.chart.items} />
        </section>
      ) : null}

      {decision.table ? (
        <section
          className="grid gap-4 overflow-hidden rounded-ads-xlarge border border-ads-border"
          aria-labelledby="table-title"
        >
          <h3
            className="px-5 pt-5 text-xl font-bold text-ads-secondary"
            id="table-title"
          >
            {decision.table.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-120 text-left text-sm">
              <thead className="bg-ads-secondary-soft text-ads-secondary">
                <tr>
                  {decision.table.columns.map((column) => (
                    <th
                      className="px-5 py-3 font-bold"
                      key={column}
                      scope="col"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {decision.table.rows.map((row) => (
                  <tr
                    className="border-t border-ads-border"
                    key={row.join('|')}
                  >
                    {row.map((cell, index) => (
                      <td
                        className="px-5 py-3 leading-6 text-ads-muted"
                        key={`${index}-${cell}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {decision.interpretation ? (
        <p className="border-l-4 border-ads-primary bg-ads-primary-soft p-5 text-sm leading-6 text-ads-text">
          {decision.interpretation}
        </p>
      ) : null}

      {decision.alerts.length > 0 ? (
        <ul className="grid gap-2 rounded-ads-large bg-ads-danger-soft p-5 text-sm leading-6 text-ads-text">
          {decision.alerts.map((alert) => (
            <li key={alert}>! {alert}</li>
          ))}
        </ul>
      ) : null}

      {decision.references && decision.references.length > 0 ? (
        <div className="grid gap-2 text-sm leading-6 text-ads-muted">
          <strong className="text-ads-secondary">
            Onde conferir os parâmetros usados
          </strong>
          <ul className="grid gap-1">
            {decision.references.map((reference) => (
              <li key={reference}>• {reference}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
