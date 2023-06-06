import { GraphCMSDescription, GraphCMSImage } from "./graphcms.interfaces";

export interface Blog {
  description: GraphCMSDescription;
  image: GraphCMSImage;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
}

export interface BlogQueryData {
  image: GraphCMSImage;
  slug: string;
  title: string;
  shortDescription: string;
}

export interface PaginatedQueryParams {
  [key: string]: string | number;
  limit: number;
  offset: number;
  search: string;
}

export interface DestinationQueryData {
  images: DestinationImages;
  slug: string;
  title: string;
  shortDescription: string;
}

export interface DestinationImages {
  image: GraphCMSDestinationImage;
  alt: string;
}

export interface GraphCMSDestinationImage {
  height: number;
  size: number;
  url: string;
  width: number;
}

export interface Destination {
  slug: string;
}

export interface DestinationResponse<Response> {
  destination: Response;
}

// export interface Destination {
//   description: GraphCMSDescription;
//   images: SingleImage;
//   slug: string;
//   title: string;
//   subtitle: string;
//   shortDescription: string;
// }

export interface DestinationData {
  alwaysOpen: boolean;
  closeTime: number;
  coordinate: CoordinateLngLat;
  description: MarkdownOnly;
  images: GraphCMSImage;
  location: string;
  openTime: number;
  title: string;
  category: string;
}

export interface MarkdownOnly {
  markdown: string;
}

export interface CoordinateLngLat {
  latitude: number;
  longitude: number;
}

export interface CategoryLinearData {
  [key: string]: string;
  tourism: string;
  religious: string;
  history: string;
  fnb: string;
}

export interface FeaturedBlogData {
  slug: string;
  title: string;
  image: GraphCMSImage;
}

export interface FeaturedBlogsWrapper<T> {
  blogs: T;
}
