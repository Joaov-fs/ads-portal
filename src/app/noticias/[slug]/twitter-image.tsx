import { ImageResponse } from 'next/og';

import { coverThemes } from '@/components/content/cover-theme';
import { contentCategoryLabels, contentRepository } from '@/content';

export const alt = 'Capa da notícia no PortalFina';
export const size = { height: 630, width: 1200 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return contentRepository.list('news').map((item) => ({ slug: item.slug }));
}

export default async function NewsOpenGraphImage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const news = contentRepository.findBySlug('news', slug);
  const theme = coverThemes[news?.category ?? 'financas'];
  const highlight = news?.highlights?.[0];
  const title = news?.title ?? 'PortalFina';

  return new ImageResponse(
    <div
      style={{
        background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '64px 72px',
        width: '100%',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.14)',
            borderRadius: '999px',
            display: 'flex',
            fontSize: '26px',
            fontWeight: 700,
            letterSpacing: '3px',
            padding: '10px 26px',
            textTransform: 'uppercase',
          }}
        >
          {contentCategoryLabels[news?.category ?? 'financas']}
        </div>
        <svg
          fill="none"
          height="96"
          stroke={theme.accent}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
          width="96"
        >
          {theme.icon.map((path) => (
            <path d={path} key={path} />
          ))}
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {highlight ? (
          <div
            style={{
              color: theme.accent,
              display: 'flex',
              fontSize: '132px',
              fontWeight: 800,
              letterSpacing: '-4px',
              lineHeight: 1,
            }}
          >
            {highlight.value}
          </div>
        ) : null}
        {highlight ? (
          <div
            style={{
              color: 'rgba(255,255,255,0.85)',
              display: 'flex',
              fontSize: '36px',
            }}
          >
            {highlight.label}
          </div>
        ) : null}
        <div
          style={{
            display: 'flex',
            fontSize: highlight ? '34px' : '58px',
            fontWeight: 700,
            lineHeight: 1.2,
            marginTop: '10px',
            maxWidth: '1000px',
          }}
        >
          {title.length > 96 ? `${title.slice(0, 93)}...` : title}
        </div>
      </div>

      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '40px',
          fontWeight: 700,
          letterSpacing: '-1px',
        }}
      >
        <span>Portal</span>
        <span style={{ color: theme.accent }}>Fina</span>
      </div>
    </div>,
    size,
  );
}
