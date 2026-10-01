export type ContentKind = 'calculator' | 'guide' | 'news';

export type ContentCategory =
  'beneficios' | 'economia' | 'financas' | 'trabalho' | 'utilidades';

export type Author = Readonly<{
  bio: string;
  id: string;
  name: string;
  role: string;
}>;

export type ContentSection = Readonly<{
  heading: string;
  paragraphs: readonly string[];
}>;

export type ContentFaq = Readonly<{
  answer: string;
  question: string;
}>;

export type ContentSource = Readonly<{
  label: string;
  url: string;
}>;

export type ContentCoverImage = Readonly<{
  alt: string;
  src: string;
}>;

export type CalculatorField = Readonly<{
  hint?: string;
  label: string;
  name: string;
  placeholder: string;
  type: 'money' | 'number' | 'percentage';
}>;

type BaseContentDocument = Readonly<{
  authorId: string;
  category: ContentCategory;
  coverImage?: ContentCoverImage;
  description: string;
  faq: readonly ContentFaq[];
  publishedAt: string;
  sections: readonly ContentSection[];
  slug: string;
  sources: readonly ContentSource[];
  tags: readonly string[];
  title: string;
  updatedAt: string;
}>;

export type NewsDocument = BaseContentDocument &
  Readonly<{
    kind: 'news';
  }>;

export type GuideDocument = BaseContentDocument &
  Readonly<{
    kind: 'guide';
  }>;

export type CalculatorDocument = BaseContentDocument &
  Readonly<{
    calculatorId: import('@/calculators/types').CalculatorId;
    fields: readonly CalculatorField[];
    kind: 'calculator';
    resultLabel: string;
    resultPlaceholder: string;
  }>;

export type ContentDocument = CalculatorDocument | GuideDocument | NewsDocument;

export type ContentDocumentByKind<K extends ContentKind> = Extract<
  ContentDocument,
  { kind: K }
>;

export type ContentSummary = Readonly<{
  category: ContentCategory;
  description: string;
  href: string;
  kind: ContentKind;
  readingTime: string;
  slug: string;
  title: string;
  updatedAt: string;
}>;

export type BreadcrumbEntry = Readonly<{
  href?: string;
  label: string;
}>;

export type JsonLd = Readonly<Record<string, unknown>>;

export type ContentPageModel<K extends ContentKind = ContentKind> = Readonly<{
  author: Author;
  breadcrumbSchema: JsonLd;
  breadcrumbs: readonly BreadcrumbEntry[];
  document: ContentDocumentByKind<K>;
  faqSchema?: JsonLd;
  mainSchema: JsonLd;
  pathname: string;
  readingMinutes: number;
  related: readonly ContentSummary[];
  relatedByKind: Readonly<{
    calculator: readonly ContentSummary[];
    guide: readonly ContentSummary[];
    news: readonly ContentSummary[];
  }>;
}>;
