import Script from 'next/script';

export const consentStorageKey = 'portalfina-cookies';

/**
 * Consent Mode v2 do Google: tudo começa negado e só muda depois da escolha da pessoa.
 * Com o consentimento negado, o AdSense exibe anúncios não personalizados, sem cookies de publicidade.
 */
const script = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
var denied={ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'};
gtag('consent','default',Object.assign({wait_for_update:500},denied));
try{if(localStorage.getItem('${consentStorageKey}')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'})}}catch(e){}`;

export function ConsentDefaults() {
  return (
    <Script id="consent-defaults" strategy="beforeInteractive">
      {script}
    </Script>
  );
}
