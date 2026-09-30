import { createBrandImage } from '@/lib/brand-image';

export const size = { height: 180, width: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return createBrandImage(size.width);
}
