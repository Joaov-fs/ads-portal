const defaultSiteUrl = 'http://localhost:3000';

function normalizeUrl(value: string | undefined) {
  try {
    const url = new URL(value || defaultSiteUrl);
    if (
      !['http:', 'https:'].includes(url.protocol) ||
      url.pathname !== '/' ||
      url.username ||
      url.password ||
      url.search ||
      url.hash
    ) {
      return defaultSiteUrl;
    }
    return url.toString().replace(/\/$/, '');
  } catch {
    return defaultSiteUrl;
  }
}

const configuredSiteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL);

if (
  process.env.VERCEL_ENV === 'production' &&
  (configuredSiteUrl === defaultSiteUrl ||
    !configuredSiteUrl.startsWith('https://'))
) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL deve conter a origem HTTPS canônica no ambiente de produção.',
  );
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME?.trim() || 'PortalFina',
  description:
    'Ferramentas e informação clara para decisões financeiras, trabalhistas e econômicas.',
  url: configuredSiteUrl,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
  locale: 'pt_BR',
  language: 'pt-BR',
  keywords: [
    'calculadoras financeiras',
    'direitos trabalhistas',
    'finanças pessoais',
    'economia',
    'benefícios sociais',
  ],
  publisher: 'PortalFina',
  category: 'Finanças e economia',
} as const;
