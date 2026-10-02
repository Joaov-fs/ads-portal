import { NewsCover } from '@/components/content/news-cover';
import { Card } from '@/components/ui/card';
import type { ContentCategory } from '@/content';

import { CardLink, CardTag } from './card-shared';

export type NewsCardProps = Readonly<{
  category: string;
  /** Capa visual: categoria, número em destaque e legenda. */
  cover?: Readonly<{
    category: ContentCategory;
    label: string;
    value: string;
  }>;
  date: string;
  description: string;
  href: string;
  readingTime: string;
  title: string;
}>;

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(parsedDate.getTime())
    ? date
    : dateFormatter.format(parsedDate);
}

export function NewsCard({
  category,
  cover,
  date,
  description,
  href,
  readingTime,
  title,
}: NewsCardProps) {
  return (
    <Card
      className="group grid h-full content-between overflow-hidden"
      interactive
    >
      {cover ? (
        <NewsCover
          category={cover.category}
          className="aspect-[1200/630] w-full"
          label={cover.label}
          value={cover.value}
        />
      ) : null}
      <div className="grid gap-4 p-5 sm:p-6">
        <CardTag>{category}</CardTag>
        <div className="grid gap-2">
          <h3 className="font-ads-display text-xl font-bold leading-tight text-ads-secondary">
            {title}
          </h3>
          <p className="text-sm leading-6 text-ads-muted">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-ads-border pt-4 text-xs text-ads-muted">
          <time dateTime={date}>{formatDate(date)}</time>
          <span>{readingTime}</span>
        </div>
        <CardLink href={href}>Ler notícia</CardLink>
      </div>
    </Card>
  );
}
