import { ContentIndexTemplate } from '@/components/content';
import { buildContentIndexMetadata } from '@/content';

export const metadata = buildContentIndexMetadata('news');

export default function NewsIndexPage() {
  return <ContentIndexTemplate kind="news" />;
}
