import { Card } from '@/components/ui/card';

import { CardLink, CardTag } from './card-shared';

export type GuideCardProps = Readonly<{
  category: string;
  description: string;
  href: string;
  readingTime: string;
  title: string;
}>;

export function GuideCard({
  category,
  description,
  href,
  readingTime,
  title,
}: GuideCardProps) {
  return (
    <Card
      className="grid min-h-60 content-between gap-6 p-5 sm:p-6"
      interactive
    >
      <div className="grid gap-5">
        <div className="flex items-center justify-between gap-3">
          <CardTag>{category}</CardTag>
          <span className="text-xs text-ads-muted">{readingTime}</span>
        </div>
        <div className="grid gap-3">
          <h3 className="font-ads-display text-2xl font-bold leading-tight text-ads-secondary">
            {title}
          </h3>
          <p className="text-sm leading-6 text-ads-muted">{description}</p>
        </div>
      </div>
      <CardLink href={href}>Abrir guia</CardLink>
    </Card>
  );
}
