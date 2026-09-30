import Link from 'next/link';

export function Logo() {
  return (
    <Link
      aria-label="PortalFina — início"
      className="inline-flex items-baseline text-xl font-bold tracking-[-0.045em] text-ads-secondary sm:text-2xl"
      href="/"
    >
      <span>Portal</span>
      <span className="text-ads-primary">Fina</span>
    </Link>
  );
}
