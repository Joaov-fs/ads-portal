import { createBrandImage } from '@/lib/brand-image';

export const dynamic = 'force-static';

export function GET() {
  return createBrandImage(512);
}
