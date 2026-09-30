import type { ContentPageModel } from '@/content';

import { ContentPageTemplate } from './content-page-template';

export function GuideTemplate({
  model,
}: Readonly<{ model: ContentPageModel<'guide'> }>) {
  return <ContentPageTemplate model={model} />;
}
