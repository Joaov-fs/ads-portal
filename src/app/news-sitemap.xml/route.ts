import { buildNewsSitemap } from '@/content/news-sitemap';

/** Atualiza a cada hora, para a janela de 2 dias andar mesmo sem novo deploy. */
export const revalidate = 3600;

export function GET() {
  return new Response(buildNewsSitemap(), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
}
