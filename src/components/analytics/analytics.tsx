import Script from 'next/script';

import { integrationConfig } from '@/config/integrations';

function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',${JSON.stringify(measurementId)},{anonymize_ip:true});`}
      </Script>
    </>
  );
}

function GoogleTagManager({ containerId }: { containerId: string }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(containerId)});`}
      </Script>
      <noscript>
        <iframe
          aria-hidden="true"
          height="0"
          src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(containerId)}`}
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
          width="0"
        />
      </noscript>
    </>
  );
}

function MicrosoftClarity({ projectId }: { projectId: string }) {
  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script',${JSON.stringify(projectId)});`}
    </Script>
  );
}

export function Analytics() {
  if (!integrationConfig.analyticsEnabled) return null;

  return (
    <>
      {integrationConfig.googleAnalyticsId ? (
        <GoogleAnalytics measurementId={integrationConfig.googleAnalyticsId} />
      ) : null}
      {integrationConfig.googleTagManagerId ? (
        <GoogleTagManager containerId={integrationConfig.googleTagManagerId} />
      ) : null}
      {integrationConfig.microsoftClarityId ? (
        <MicrosoftClarity projectId={integrationConfig.microsoftClarityId} />
      ) : null}
    </>
  );
}
