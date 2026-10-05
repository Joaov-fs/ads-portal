import { ImageResponse } from 'next/og';

import { designTokens } from '@/config/design-tokens';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name}: ferramentas e informação clara`;
export const size = { height: 630, width: 1200 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: designTokens.color.secondary,
        color: designTokens.color.surface,
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: '72px',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '46px',
            fontWeight: 700,
            letterSpacing: '-2px',
          }}
        >
          <span>Portal</span>
          <span style={{ color: '#72d4b2' }}>Fina</span>
        </div>
        <div
          style={{
            fontSize: '70px',
            fontWeight: 700,
            letterSpacing: '-3px',
          }}
        >
          Decisões mais simples começam aqui.
        </div>
        <div style={{ color: '#d8e8e5', fontSize: '30px' }}>
          Ferramentas e informação clara para o seu dia a dia.
        </div>
      </div>
    </div>,
    size,
  );
}
