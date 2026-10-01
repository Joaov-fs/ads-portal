import type {
  CalculatorDecision,
  DecisionBreakdownItem,
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

const toneClassNames = {
  attention: 'border-ads-danger/25 bg-ads-danger-soft',
  neutral: 'border-ads-primary/25 bg-ads-primary-soft',
  positive: 'border-ads-success/25 bg-ads-success-soft',
} as const;

export function CalculatorDecisionOutput({
  decision,
}: Readonly<{ decision: CalculatorDecision }>) {
  return (
    <section
      className="grid gap-8 border-t border-ads-border pt-8"
      aria-labelledby="decision-output-title"
    >
      <div className="grid gap-3">
        <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
          Parecer da simulação
        </span>
        <h3
          className="text-2xl font-bold text-ads-secondary"
          id="decision-output-title"
        >
          O que este resultado indica para você
        </h3>
        <p className="leading-7 text-ads-text">{decision.summary}</p>
      </div>

      <section
        className={`grid gap-2 rounded-ads-xlarge border p-5 sm:p-6 ${toneClassNames[decision.recommendation.tone]}`}
        aria-labelledby="recommendation-title"
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
          Decisão em destaque
        </span>
        <h4
          className="text-xl font-bold text-ads-secondary"
          id="recommendation-title"
        >
          {decision.recommendation.title}
        </h4>
        <p className="leading-6 text-ads-text">
          {decision.recommendation.detail}
        </p>
      </section>

      <div className="grid gap-px overflow-hidden rounded-ads-xlarge border border-ads-border bg-ads-border sm:grid-cols-3">
        {decision.indicators.map((indicator) => (
          <div className="grid gap-1 bg-ads-surface p-5" key={indicator.label}>
            <span className="text-sm text-ads-muted">{indicator.label}</span>
            <strong className="text-xl text-ads-secondary">
              {indicator.value}
            </strong>
          </div>
        ))}
      </div>

      <section
        className="grid gap-3 border-l-4 border-ads-primary bg-ads-primary-soft p-5"
        aria-labelledby="decision-interpretation-title"
      >
        <h4
          className="text-lg font-bold text-ads-secondary"
          id="decision-interpretation-title"
        >
          Como interpretar
        </h4>
        <p className="text-sm leading-6 text-ads-text">
          {decision.interpretation}
        </p>
      </section>

      {decision.breakdown ? (
        <section className="grid gap-4" aria-labelledby="breakdown-title">
          <h4
            className="text-xl font-bold text-ads-secondary"
            id="breakdown-title"
          >
            {decision.breakdown.title}
          </h4>
          <div className="grid gap-px overflow-hidden rounded-ads-large border border-ads-border bg-ads-border">
            {decision.breakdown.items.map((item) => (
              <div
                className="flex items-center justify-between gap-4 bg-ads-surface p-4 text-sm"
                key={item.label}
              >
                <span className="text-ads-muted">{item.label}</span>
                <strong className="text-ads-secondary">
                  {formatMoney(item.value)}
                </strong>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {decision.chart ? (
        <section
          className="grid gap-4 rounded-ads-xlarge border border-ads-border bg-ads-surface p-5 sm:p-6"
          aria-labelledby="chart-title"
        >
          <h4 className="text-xl font-bold text-ads-secondary" id="chart-title">
            {decision.chart.title}
          </h4>
          <DecisionBars items={decision.chart.items} />
        </section>
      ) : null}

      {decision.table ? (
        <section
          className="grid gap-4 overflow-hidden rounded-ads-xlarge border border-ads-border"
          aria-labelledby="table-title"
        >
          <h4
            className="px-5 pt-5 text-xl font-bold text-ads-secondary"
            id="table-title"
          >
            {decision.table.title}
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full min-w-120 text-left text-sm">
              <thead className="bg-ads-secondary-soft text-ads-secondary">
                <tr>
                  {decision.table.columns.map((column) => (
                    <th className="px-5 py-3 font-bold" key={column}>
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
                    {row.map((cell) => (
                      <td
                        className="px-5 py-3 leading-6 text-ads-muted"
                        key={cell}
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

      {decision.timeline ? (
        <section className="grid gap-4" aria-labelledby="timeline-title">
          <h4
            className="text-xl font-bold text-ads-secondary"
            id="timeline-title"
          >
            Evolução projetada
          </h4>
          <ol className="grid gap-3 border-l-2 border-ads-primary pl-5">
            {decision.timeline.map((item) => (
              <li
                className="relative text-sm leading-6 text-ads-muted before:absolute before:-left-[1.78rem] before:top-2 before:size-3 before:rounded-ads-full before:bg-ads-primary"
                key={item}
              >
                {item}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-2">
        <section
          className="grid gap-3 rounded-ads-large bg-ads-danger-soft p-5"
          aria-labelledby="alerts-title"
        >
          <h4 className="font-bold text-ads-secondary" id="alerts-title">
            Cuidados importantes
          </h4>
          <ul className="grid gap-2 text-sm leading-6 text-ads-text">
            {decision.alerts.map((alert) => (
              <li key={alert}>! {alert}</li>
            ))}
          </ul>
        </section>
        <section
          className="grid gap-3 rounded-ads-large bg-ads-secondary-soft p-5"
          aria-labelledby="checklist-title"
        >
          <h4 className="font-bold text-ads-secondary" id="checklist-title">
            Checklist antes de decidir
          </h4>
          <ul className="grid gap-2 text-sm leading-6 text-ads-text">
            {decision.checklist.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section
        className="grid gap-4 rounded-ads-xlarge bg-ads-secondary p-5 text-white sm:p-7"
        aria-labelledby="decision-next-steps-title"
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
          Próximo passo
        </span>
        <h4
          className="font-ads-display text-2xl font-bold"
          id="decision-next-steps-title"
        >
          Transforme a simulação em ação
        </h4>
        <ol className="grid gap-3 text-sm leading-6 text-white/75 sm:grid-cols-3">
          {decision.nextSteps.map((step, index) => (
            <li key={step}>
              <strong className="block text-white">{index + 1}.</strong>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
