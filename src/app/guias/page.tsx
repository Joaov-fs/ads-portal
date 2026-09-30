import { ContentIndexTemplate } from '@/components/content';
import { buildContentIndexMetadata } from '@/content';

export const metadata = buildContentIndexMetadata('guide');

export default function GuideIndexPage() {
  return <ContentIndexTemplate kind="guide" />;
}
