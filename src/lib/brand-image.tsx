import { ImageResponse } from 'next/og';

/**
 * Ícones do site (favicon, ícone de aplicativo e manifesto) com o símbolo do PortalFina.
 * O desenho é o mesmo de `LogoMark`: um "P" branco com uma moeda verde no bojo, sobre verde-petróleo.
 */
export function createBrandImage(size: number, maskable = false) {
  const inner = maskable ? Math.round(size * 0.72) : size;

  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#163c3f',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <svg height={inner} viewBox="0 0 64 64" width={inner}>
        {maskable ? null : (
          <rect fill="#163c3f" height="64" rx="15" width="64" />
        )}
        <path
          d="M21 47V17h12a9.5 9.5 0 0 1 0 19H21"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
        />
        <circle cx="33" cy="26.5" fill="#72d4b2" r="3" />
      </svg>
    </div>,
    { height: size, width: size },
  );
}
