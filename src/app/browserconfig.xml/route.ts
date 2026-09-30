import { designTokens } from '@/config/design-tokens';

export const dynamic = 'force-static';

export function GET() {
  const body = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/icons/mstile-150.png" />
      <TileColor>${designTokens.color.primary}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

  return new Response(body, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
