import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { getMarketIndicators } from '@/features/public-content';

import { HomeView } from './home-view';

export const metadata: Metadata = {
  title: {
    absolute: 'PortalFina | Notícias que mexem no seu bolso',
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PortalFina | Notícias que mexem no seu bolso',
    description: siteConfig.description,
    url: '/',
    type: 'website',
  },
};

/** A faixa de indicadores se atualiza sozinha a cada hora com os dados do Banco Central. */
export const revalidate = 3600;

export default async function Home() {
  return <HomeView marketIndicators={await getMarketIndicators()} />;
}
