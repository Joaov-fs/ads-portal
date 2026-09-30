import { Card } from '@/components/ui/card';
import { mergeClassNames } from '@/lib/merge-class-names';

type IndicatorTrend = 'up' | 'down' | 'neutral';

export type IndicatorCardProps = Readonly<{
  change: string;
  label: string;
  note?: string;
  trend?: IndicatorTrend;
  value: string;
}>;

const trendClassNames: Record<IndicatorTrend, string> = {
  up: 'bg-ads-success-soft text-ads-success-strong',
  down: 'bg-ads-danger-soft text-ads-danger-strong',
  neutral: 'bg-ads-secondary-soft text-ads-secondary',
};

const trendSymbols: Record<IndicatorTrend, string> = {
  up: '↑',
  down: '↓',
  neutral: '—',
};

export function IndicatorCard({
  change,
  label,
  note,
  trend = 'neutral',
  value,
}: IndicatorCardProps) {
  return (
    <Card className="grid gap-6 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm font-semibold text-ads-muted">{label}</span>
        <span
          className={mergeClassNames(
            'rounded-ads-full px-2.5 py-1 text-xs font-semibold',
            trendClassNames[trend],
          )}
        >
          <span aria-hidden="true">{trendSymbols[trend]} </span>
          {change}
        </span>
      </div>
      <div>
        <strong className="block text-3xl font-bold tracking-tight text-ads-secondary">
          {value}
        </strong>
        {note ? <span className="text-xs text-ads-muted">{note}</span> : null}
      </div>
    </Card>
  );
}
