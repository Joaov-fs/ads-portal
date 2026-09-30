import Link from 'next/link';

export type BreadcrumbItem = Readonly<{
  href?: string;
  label: string;
}>;

type BreadcrumbProps = Readonly<{
  items: readonly BreadcrumbItem[];
}>;

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-sm text-ads-muted">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li
              className="flex items-center gap-2"
              key={`${item.label}-${index}`}
            >
              {index > 0 ? (
                <span aria-hidden="true" className="text-ads-subtle">
                  /
                </span>
              ) : null}
              {item.href && !isCurrent ? (
                <Link
                  className="transition hover:text-ads-primary-strong"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isCurrent ? 'page' : undefined}
                  className={
                    isCurrent ? 'font-medium text-ads-text' : undefined
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
