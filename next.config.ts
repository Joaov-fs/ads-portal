import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  /**
   * portalfina.com.br (sem www) vai para www, menos o /ads.txt: o AdSense lê o
   * arquivo no domínio cadastrado e não segue o 308 do redirecionamento de domínio.
   */
  redirects() {
    const apex = [{ type: 'host' as const, value: 'portalfina.com.br' }];
    return Promise.resolve([
      {
        source: '/',
        has: apex,
        destination: 'https://www.portalfina.com.br/',
        statusCode: 301 as const,
      },
      {
        source: '/:path((?!ads\\.txt$).*)',
        has: apex,
        destination: 'https://www.portalfina.com.br/:path',
        statusCode: 301 as const,
      },
      // Notícias fundidas nos guias correspondentes (conteúdo evergreen).
      {
        source: '/noticias/13o-salario-2026-datas-e-quanto-voce-recebe',
        destination: '/guias/como-calcular-o-13o-salario',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/demissao-sem-justa-causa-o-que-voce-recebe-exemplo-em-reais',
        destination: '/guias/como-calcular-a-rescisao-sem-justa-causa',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/ferias-2026-como-calcular-o-um-terco-vender-10-dias-e-dividir-em-periodos',
        destination: '/guias/como-calcular-ferias-passo-a-passo',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/financiamento-sac-ou-price-diferenca-de-r-135-mil-em-juros-no-exemplo',
        destination: '/guias/financiamento-sac-ou-price-qual-escolher',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/horas-extras-como-calcular-50-100-e-o-reflexo-no-dsr',
        destination: '/guias/como-calcular-horas-extras-e-dsr',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/imposto-de-renda-zero-ate-r-5-mil-quanto-voce-paga-no-contracheque',
        destination: '/guias/tabela-do-imposto-de-renda-2026-na-folha',
        statusCode: 301 as const,
      },
      {
        source: '/noticias/inss-2026-teto-de-r-8-475-55-e-aliquotas-por-faixa',
        destination: '/guias/como-funciona-o-desconto-do-inss',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/poupanca-rende-8-3-ao-ano-veja-quanto-cdb-e-lci-rendem-a-mais',
        destination: '/guias/poupanca-ou-cdb-qual-rende-mais',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/reajuste-do-aluguel-igp-m-3-35-ou-ipca-4-22-veja-quanto-fica',
        destination: '/guias/reajuste-do-aluguel-como-calcular-igp-m-ou-ipca',
        statusCode: 301 as const,
      },
      {
        source:
          '/noticias/seguro-desemprego-2026-valores-parcelas-e-como-pedir',
        destination: '/guias/como-pedir-o-seguro-desemprego',
        statusCode: 301 as const,
      },
    ]);
  },
  headers() {
    return Promise.resolve([
      {
        source: '/:path*',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
      {
        source: '/acesso-admin',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
      {
        source: '/design-system',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]);
  },
};

export default nextConfig;
