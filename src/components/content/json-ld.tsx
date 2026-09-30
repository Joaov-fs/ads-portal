import type { JsonLd } from '@/content';

type JsonLdScriptProps = Readonly<{
  data: JsonLd;
}>;

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
      type="application/ld+json"
    />
  );
}
