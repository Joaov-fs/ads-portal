import type { ComponentPropsWithoutRef } from 'react';

import { integrationConfig } from '@/config/integrations';
import { mergeClassNames } from '@/lib/merge-class-names';

type AdSlotSize = 'banner' | 'rectangle' | 'fluid';

type AdSlotProps = ComponentPropsWithoutRef<'aside'> &
  Readonly<{
    format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
    label?: string;
    placementId?: string;
    publisherId?: string;
    responsive?: boolean;
    size?: AdSlotSize;
  }>;

const sizeClassNames: Record<AdSlotSize, string> = {
  banner: 'min-h-24',
  rectangle: 'min-h-64 max-w-sm',
  fluid: 'min-h-40',
};

export function AdSlot({
  className,
  format = 'auto',
  label = 'Espaço publicitário',
  placementId,
  publisherId = integrationConfig.adsense.publisherId,
  responsive = true,
  size = 'fluid',
  ...props
}: AdSlotProps) {
  const isConfigured = Boolean(
    integrationConfig.adsense.enabled && publisherId && placementId,
  );

  if (!isConfigured) return null;

  return (
    <aside
      aria-label={label}
      className={mergeClassNames(
        'grid w-full place-items-center rounded-ads-large border border-ads-border bg-ads-surface p-6 text-center text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ads-subtle',
        sizeClassNames[size],
        className,
      )}
      data-ad-format={format}
      data-ad-placement={placementId}
      data-ad-publisher={publisherId}
      data-ad-responsive={responsive}
      data-ad-state="configured"
      {...props}
    >
      Publicidade
    </aside>
  );
}
