import { createContentDetailRoute } from '@/content/next-route';

export const dynamicParams = false;

const route = createContentDetailRoute('calculator');

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
