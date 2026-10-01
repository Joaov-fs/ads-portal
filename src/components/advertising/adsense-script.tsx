import Script from 'next/script';

import { integrationConfig } from '@/config/integrations';

export function AdSenseScript() {
  const { enabled, publisherId } = integrationConfig.adsense;

  if (!enabled || !publisherId) return null;

  return (
    <Script
      async
      crossOrigin="anonymous"
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(publisherId)}`}
      strategy="afterInteractive"
    />
  );
}
