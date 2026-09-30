import { ContentIndexTemplate } from '@/components/content';
import { buildContentIndexMetadata } from '@/content';

export const metadata = buildContentIndexMetadata('calculator');

export default function CalculatorIndexPage() {
  return <ContentIndexTemplate kind="calculator" />;
}
