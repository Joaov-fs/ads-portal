'use client';

import { useEffect, useRef } from 'react';

type AdSenseUnitProps = Readonly<{
  format: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
  publisherId: string;
  responsive: boolean;
  slotId: string;
}>;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSenseUnit({
  format,
  publisherId,
  responsive,
  slotId,
}: AdSenseUnitProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      initialized.current = true;
    } catch {
      // The AdSense script can finish loading after this unit mounts.
    }
  }, []);

  return (
    <ins
      className="adsbygoogle block w-full"
      data-ad-client={publisherId}
      data-ad-format={format}
      data-ad-slot={slotId}
      data-full-width-responsive={responsive ? 'true' : undefined}
    />
  );
}
