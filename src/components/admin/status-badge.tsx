import { mergeClassNames } from '@/lib/merge-class-names';
import {
  publishingStatusLabels,
  type PublishingStatus,
} from '@/features/publishing';

const statusClasses: Record<PublishingStatus, string> = {
  draft: 'bg-ads-background text-ads-muted ring-ads-border-strong',
  review: 'bg-ads-secondary-soft text-ads-secondary ring-ads-secondary/20',
  published: 'bg-ads-success-soft text-ads-success-strong ring-ads-success/20',
};

export function StatusBadge({
  status,
}: Readonly<{ status: PublishingStatus }>) {
  return (
    <span
      className={mergeClassNames(
        'inline-flex rounded-ads-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset',
        statusClasses[status],
      )}
    >
      {publishingStatusLabels[status]}
    </span>
  );
}
