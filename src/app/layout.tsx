import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { Analytics } from '@/components/analytics';
import { AdSenseScript } from '@/components/advertising';
import { JsonLdScript } from '@/components/content';
import { AppChrome } from '@/components/layout/app-chrome';
import { designTokens } from '@/config/design-tokens';
import { integrationConfig } from '@/config/integrations';
import { siteConfig } from '@/config/site';
import { organizationSchema, websiteSchema } from '@/config/structured-data';
import { ThemeProvider } from '@/shared/theme';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: 'Equipe Editorial PortalFina', url: '/autor' }],
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: integrationConfig.googleSiteVerification
    ? { google: integrationConfig.googleSiteVerification }
    : undefined,
  manifest: '/manifest.webmanifest',
  other: {
    ...(integrationConfig.adsense.publisherId
      ? { 'google-adsense-account': integrationConfig.adsense.publisherId }
      : {}),
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport: Viewport = {
  themeColor: designTokens.color.background,
  width: 'device-width',
  initialScale: 1,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-scroll-behavior="smooth" lang={siteConfig.language}>
      <body>
        <a
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-ads-medium bg-ads-secondary px-4 py-3 font-semibold text-white shadow-ads-raised transition-transform focus:translate-y-0"
          href="#conteudo-principal"
        >
          Pular para o conteúdo
        </a>
        <JsonLdScript data={organizationSchema} />
        <JsonLdScript data={websiteSchema} />
        <ThemeProvider>
          <AppChrome>{children}</AppChrome>
        </ThemeProvider>
        <Analytics />
        <AdSenseScript />
      </body>
    </html>
  );
}
