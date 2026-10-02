import { contentCategoryLabels, type ContentCategory } from '@/content';

import { coverThemes } from './cover-theme';

type NewsCoverProps = Readonly<{
  category: ContentCategory;
  className?: string;
  /** Texto curto abaixo do número (ex.: "Teto de contribuição"). */
  label: string;
  /** Número em destaque (ex.: "R$ 8.475,55"). */
  value: string;
}>;

/**
 * Capa visual de uma notícia, desenhada pelo próprio portal: o número que
 * importa em destaque, o ícone do assunto e as cores da categoria.
 */
export function NewsCover({
  category,
  className = '',
  label,
  value,
}: NewsCoverProps) {
  const theme = coverThemes[category];

  return (
    <div
      aria-label={`${value}: ${label}`}
      className={`relative isolate overflow-hidden ${className}`}
      role="img"
      style={{
        background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
        containerType: 'inline-size',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1.4px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(115deg, transparent 35%, black 100%)',
          WebkitMaskImage:
            'linear-gradient(115deg, transparent 35%, black 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-[12%] -top-[28%] -z-10 aspect-square w-[58%] rounded-full border-[1.5cqw] border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[34%] -right-[4%] -z-10 aspect-square w-[44%] rounded-full bg-white/[0.06]"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-[5cqw]">
        <div className="flex items-start justify-between gap-3">
          <span
            className="rounded-full bg-white/12 px-[2.4cqw] py-[0.9cqw] font-bold uppercase tracking-[0.14em] text-white/90"
            style={{ fontSize: 'clamp(0.6rem, 2.2cqw, 0.8rem)' }}
          >
            {contentCategoryLabels[category]}
          </span>
          <svg
            aria-hidden="true"
            className="shrink-0"
            fill="none"
            stroke={theme.accent}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            style={{ height: '11cqw', width: '11cqw' }}
            viewBox="0 0 24 24"
          >
            {theme.icon.map((path) => (
              <path d={path} key={path} />
            ))}
          </svg>
        </div>
        <div className="grid gap-[1cqw]">
          <strong
            className="font-ads-display font-extrabold leading-none tracking-tight"
            style={{
              color: theme.accent,
              fontSize: 'clamp(1.7rem, 11cqw, 4.2rem)',
            }}
          >
            {value}
          </strong>
          <span
            className="font-medium text-white/80"
            style={{ fontSize: 'clamp(0.7rem, 3.4cqw, 1.15rem)' }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
