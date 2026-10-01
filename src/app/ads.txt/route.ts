import { integrationConfig } from '@/config/integrations';

export function GET() {
  const publisherId = integrationConfig.adsense.publisherId;

  if (!publisherId?.startsWith('ca-pub-')) {
    return new Response(null, { status: 404 });
  }

  return new Response(
    `google.com, ${publisherId.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`,
    {
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    },
  );
}
