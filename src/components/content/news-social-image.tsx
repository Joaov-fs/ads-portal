import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { ImageResponse } from 'next/og';

import { coverThemes } from '@/components/content/cover-theme';
import { contentCategoryLabels, contentRepository } from '@/content';

export const newsSocialImageSize = { height: 630, width: 1200 };

/** Lê a capa em /public e devolve como data URL (o gerador não busca arquivos sozinho). */
async function loadCover(src: string) {
  try {
    const file = await readFile(path.join(process.cwd(), 'public', src));
    const type = src.endsWith('.png') ? 'image/png' : 'image/jpeg';
    return `data:${type};base64,${file.toString('base64')}`;
  } catch {
    return undefined;
  }
}

function PhotoCard({
  category,
  image,
  title,
  value,
}: Readonly<{
  category: string;
  image: string;
  title: string;
  value?: string;
}>) {
  return (
    <div
      style={{
        color: '#ffffff',
        display: 'flex',
        height: '100%',
        position: 'relative',
        width: '100%',
      }}
    >
      <img
        alt=""
        height={630}
        src={image}
        style={{
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          width: '100%',
        }}
        width={1200}
      />
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.85) 100%)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '48px 64px',
          position: 'absolute',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: '14px' }}>
          <div
            style={{
              background: 'rgba(0,0,0,0.55)',
              borderRadius: '999px',
              display: 'flex',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '3px',
              padding: '10px 24px',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </div>
          {value ? (
            <div
              style={{
                background: '#6ee7b7',
                borderRadius: '999px',
                color: '#0c312b',
                display: 'flex',
                fontSize: '26px',
                fontWeight: 800,
                padding: '8px 24px',
              }}
            >
              {value}
            </div>
          ) : null}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '54px',
              fontWeight: 800,
              letterSpacing: '-1px',
              lineHeight: 1.12,
              maxWidth: '1060px',
            }}
          >
            {title.length > 90 ? `${title.slice(0, 87)}...` : title}
          </div>
          <div style={{ display: 'flex', fontSize: '32px', fontWeight: 700 }}>
            <span>Portal</span>
            <span style={{ color: '#6ee7b7' }}>Fina</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function renderNewsSocialImage(slug: string) {
  const news = contentRepository.findBySlug('news', slug);
  const theme = coverThemes[news?.category ?? 'financas'];
  const highlight = news?.highlights?.[0];
  const title = news?.title ?? 'PortalFina';
  const cover = news?.coverImage
    ? await loadCover(news.coverImage.src)
    : undefined;

  if (cover) {
    return new ImageResponse(
      <PhotoCard
        category={contentCategoryLabels[news?.category ?? 'financas']}
        image={cover}
        title={title}
        value={highlight?.value}
      />,
      newsSocialImageSize,
    );
  }

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
    newsSocialImageSize,
  );
}
