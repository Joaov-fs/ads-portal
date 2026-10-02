type LogoMarkProps = Readonly<{
  className?: string;
  size?: number;
}>;

/**
 * Símbolo do PortalFina: um "P" sobre fundo verde-petróleo, com uma moeda no bojo.
 * As cores são fixas para o símbolo ficar igual em qualquer fundo, no cabeçalho, no rodapé e no favicon.
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
      <rect fill="#163c3f" height="64" rx="15" width="64" />
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
  );
}
