'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type AnalyticsPageViewsProps = Readonly<{
  measurementId: string;
}>;

declare global {
  interface Window {
    gtag?: (command: string, ...parameters: unknown[]) => void;
  }
}

export function AnalyticsPageViews({ measurementId }: AnalyticsPageViewsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    const pagePath = search ? `${pathname}?${search}` : pathname;
    const gtag = window.gtag;

    if (!gtag) return;

    gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pagePath,
      send_to: measurementId,
    });
  }, [measurementId, pathname, search]);

  return null;
}
