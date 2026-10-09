import { renderNewsSocialImage } from '@/components/content/news-social-image';
import { contentRepository } from '@/content';

export const alt = 'Capa da notícia no PortalFina';
export const size = { height: 630, width: 1200 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return contentRepository.list('news').map((item) => ({ slug: item.slug }));
}

export default async function NewsOpenGraphImage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  return renderNewsSocialImage(slug);
}
