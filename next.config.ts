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
