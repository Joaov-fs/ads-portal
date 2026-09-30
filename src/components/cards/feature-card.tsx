import type { ReactNode } from 'react';

import { Card } from '@/components/ui/card';

import { CardLink } from './card-shared';

export type FeatureCardProps = Readonly<{
  description: string;
  eyebrow: string;
  href: string;
  icon?: ReactNode;
  title: string;
}>;

export function FeatureCard({
  description,
  eyebrow,
  href,
  icon,
  title,
}: FeatureCardProps) {
  return (
    <Card
      className="grid min-h-52 content-between gap-6 p-5 sm:p-6"
      interactive
    >
      <div className="grid gap-5">
        <div className="flex size-11 items-center justify-center rounded-ads-large bg-ads-primary-soft font-bold text-ads-primary-strong">
          {icon ?? '✦'}
        </div>
        <div className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
            {eyebrow}
          </span>
          <h3 className="text-xl font-bold text-ads-secondary">{title}</h3>
          <p className="text-sm leading-6 text-ads-muted">{description}</p>
        </div>
      </div>
      <CardLink href={href}>Ver conteúdo</CardLink>
    </Card>
  );
}
