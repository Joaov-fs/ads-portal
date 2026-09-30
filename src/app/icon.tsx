import { createBrandImage } from '@/lib/brand-image';

export const size = { height: 48, width: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return createBrandImage(size.width);
}
