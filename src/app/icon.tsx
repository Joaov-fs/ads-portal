import { createBrandImage } from '@/lib/brand-image';

export const size = { height: 192, width: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return createBrandImage(size.width);
}
