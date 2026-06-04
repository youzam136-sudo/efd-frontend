type PaginatedDocs<T = any> = {
  docs: T[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage?: null | number | undefined;
  page?: number;
  pagingCounter: number;
  prevPage?: null | number | undefined;
  totalDocs: number;
  totalPages: number;
};

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
}

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

export interface StrapiImageFormats {
  thumbnail?: StrapiImageFormat;
  small?: StrapiImageFormat;
  medium?: StrapiImageFormat;
  large?: StrapiImageFormat;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: string | null;
  width: number;
  height: number;
  formats: StrapiImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
}

export type Categories = PaginatedDocs<Category>;

export interface Tag {
  id: string;
  title: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
}

export type Tags = PaginatedDocs<Tag>;

export interface Blog {
  id: number;
  documentId: string;
  Title: string;
  Slug: string;
  Excerpt: string;
  Author: string | null;
  Date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Content: string;
  Feature_Image: StrapiImage;
}

export type Blogs = StrapiResponse<Blog>;

export interface Notice {
  id: number;
  documentId: string;
  Title: string;
  Author: string | null;
  Date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Content: string;
  Feature_Image: StrapiImage | null;
}

export type Notices = StrapiResponse<Notice>;

export interface Faq {
  id: number;
  documentId: string;
  Title: string;
  Author: string;
  Date: string;
  Content: string;
  updatedAt: string;
  publishedAt: string;
  createdAt: string;
}

export type Faqs = StrapiResponse<Faq>;

export interface Document {
  id: string;
  documentId: string;
  Title: string;
  PDF: StrapiImage;
  Image: StrapiImage;
  updatedAt: string;
  createdAt: string;
  publishedAt: string;
}

export type Documents = StrapiResponse<Document>;

export interface Patent {
  id: number;
  documentId: string;
  Title: string;
  Image: StrapiImage;
  updatedAt: string;
  createdAt: string;
  publishedAt: string;
}

export type Patents = StrapiResponse<Patent>;
