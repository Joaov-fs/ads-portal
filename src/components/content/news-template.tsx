import type { ContentPageModel } from '@/content';

import { ContentPageTemplate } from './content-page-template';

export function NewsTemplate({
  model,
}: Readonly<{ model: ContentPageModel<'news'> }>) {
  return <ContentPageTemplate model={model} />;
}
