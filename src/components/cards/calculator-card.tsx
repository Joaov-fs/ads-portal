import { Card } from '@/components/ui/card';

import { CardLink, CardTag } from './card-shared';

export type CalculatorCardProps = Readonly<{
  category: string;
  description: string;
  href: string;
  title: string;
}>;

export function CalculatorCard({
  category,
  description,
  href,
  title,
}: CalculatorCardProps) {
  return (
    <Card
      className="grid min-h-56 content-between gap-6 p-5 sm:p-6"
      interactive
    >
      <div className="grid gap-5">
        <div className="flex size-11 items-center justify-center rounded-ads-large bg-ads-secondary text-white">
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <rect
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.8"
              width="16"
              x="4"
              y="3"
            />
            <path
              d="M8 7h8M8 12h1m3 0h1m3 0h1M8 16h1m3 0h1m3 0h1"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </div>
        <div className="grid gap-3">
          <CardTag>{category}</CardTag>
          <h3 className="font-ads-display text-xl font-bold text-ads-secondary">
            {title}
          </h3>
          <p className="text-sm leading-6 text-ads-muted">{description}</p>
        </div>
      </div>
      <CardLink href={href}>Usar calculadora</CardLink>
    </Card>
  );
}
