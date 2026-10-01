import type { ComponentPropsWithoutRef } from 'react';

import { integrationConfig } from '@/config/integrations';
import { mergeClassNames } from '@/lib/merge-class-names';

import { AdSenseUnit } from '../adsense-unit';

type AdSlotSize = 'banner' | 'rectangle' | 'fluid';

type AdSlotProps = ComponentPropsWithoutRef<'aside'> &
  Readonly<{
    format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
    label?: string;
    placementId?: string;
    publisherId?: string;
    responsive?: boolean;
    size?: AdSlotSize;
    slotId?: string;
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
  slotId,
  ...props
}: AdSlotProps) {
  const isConfigured = Boolean(
    integrationConfig.adsense.enabled && publisherId && slotId,
  );
  const isPreview = !isConfigured && integrationConfig.adsense.preview;

  if (!isConfigured && !isPreview) return null;

  return (
    <aside
      aria-label={label}
      className={mergeClassNames(
        'grid w-full place-items-center rounded-ads-large border border-ads-border bg-ads-surface p-6 text-center text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ads-subtle',
        sizeClassNames[size],
        className,
      )}
      data-ad-format={isConfigured ? format : undefined}
      data-ad-placement={placementId}
      data-ad-publisher={isConfigured ? publisherId : undefined}
      data-ad-responsive={responsive}
      data-ad-state={isConfigured ? 'configured' : 'preview'}
      {...props}
    >
      {isConfigured && publisherId && slotId ? (
        <AdSenseUnit
          format={format}
          publisherId={publisherId}
          responsive={responsive}
          slotId={slotId}
        />
      ) : (
        'Espaço publicitário'
      )}
    </aside>
  );
}
