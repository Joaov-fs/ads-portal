type LogoMarkProps = Readonly<{
  className?: string;
  size?: number;
}>;

/**
 * Símbolo do PortalFina: um "P" sobre fundo verde-petróleo, com uma moeda no bojo.
 * O fundo e a moeda seguem a cor da editoria da página (variáveis --ads-logo-bg e --ads-logo-dot);
 * sem editoria, ficam no verde-petróleo da marca.
 */
export function LogoMark({ className, size = 36 }: LogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      height={size}
      viewBox="0 0 64 64"
      width={size}
    >
      <rect
        height="64"
        rx="15"
        style={{ fill: 'var(--ads-logo-bg, #163c3f)' }}
        width="64"
      />
      <path
        d="M21 47V17h12a9.5 9.5 0 0 1 0 19H21"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7"
      />
      <circle
        cx="33"
        cy="26.5"
        r="3"
        style={{ fill: 'var(--ads-logo-dot, #72d4b2)' }}
      />
    </svg>
  );
}
