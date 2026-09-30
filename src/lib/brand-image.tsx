import { ImageResponse } from 'next/og';

import { designTokens } from '@/config/design-tokens';

export function createBrandImage(size: number, maskable = false) {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: designTokens.color.secondary,
        color: designTokens.color.surface,
        display: 'flex',
        fontSize: size * 0.32,
        fontWeight: 700,
        height: '100%',
        justifyContent: 'center',
        letterSpacing: '-0.06em',
        padding: maskable ? size * 0.12 : 0,
        width: '100%',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          background: designTokens.color.primary,
          borderRadius: size * 0.22,
          display: 'flex',
          height: maskable ? '76%' : '100%',
          justifyContent: 'center',
          width: maskable ? '76%' : '100%',
        }}
      >
        PF
      </div>
    </div>,
    { height: size, width: size },
  );
}
