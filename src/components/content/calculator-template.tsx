import type { ContentPageModel } from '@/content';

import { ContentPageTemplate } from './content-page-template';

export function CalculatorTemplate({
  model,
}: Readonly<{ model: ContentPageModel<'calculator'> }>) {
  return <ContentPageTemplate model={model} />;
}
