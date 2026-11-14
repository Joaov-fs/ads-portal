import Image from 'next/image';

import { contentCategoryLabels, type ContentCategory } from '@/content';
import { isPhotoCredit } from '@/content/image-license';

import { coverThemes } from './cover-theme';

type NewsCoverProps = Readonly<{
  category: ContentCategory;
  className?: string;
  /** Crédito da imagem; o de foto ("Foto: ...") aparece no canto da capa. */
  credit?: string;
  /** Ilustração ou foto da notícia; sem ela, a capa é só tipográfica. */
  image?: string;
  /** Carrega a imagem com prioridade (capa acima da dobra). */
  priority?: boolean;
  /** Largura aproximada exibida, para o navegador escolher o tamanho certo. */
  sizes?: string;
  /** Texto curto abaixo do número (ex.: "Teto de contribuição"). */
  label: string;
  /** Número em destaque (ex.: "R$ 8.475,55"). */
  value: string;
}>;

/**
 * Capa de uma notícia. Com imagem (foto real ou ilustração), mostra só a
 * imagem e, se for foto, o crédito. Sem imagem, desenha a capa tipográfica:
 * o número que importa em destaque, o ícone do assunto e as cores da categoria.
 */
export function NewsCover({
  category,
  className = '',
  credit,
  image,
  label,
  priority = false,
  sizes = '(min-width: 1024px) 33vw, 100vw',
  value,
}: NewsCoverProps) {
  const theme = coverThemes[category];

  if (image) {
    // Com imagem, a capa mostra só a imagem: o título e a editoria já estão no
    // card, e números por cima da foto competem com a manchete.
    return (
      <div
        className={`editoria-${category} relative isolate overflow-hidden bg-ads-secondary ${className}`}
      >
        <Image
          alt=""
          className="-z-10 object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          priority={priority}
          sizes={sizes}
          src={image}
        />
        {isPhotoCredit(credit) ? (
          <span className="absolute bottom-0 right-0 max-w-[85%] truncate rounded-tl-ads-medium bg-black/55 px-2 py-0.5 text-[0.625rem] font-medium leading-4 text-white/90">
            {credit}
          </span>
        ) : null}
      </div>
    );
  }

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
