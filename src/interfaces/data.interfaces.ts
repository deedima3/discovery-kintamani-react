import { GraphCMSDescription, GraphCMSImage } from "./graphcms.interfaces";

export interface Blog {
  description: GraphCMSDescription;
  image: GraphCMSImage;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  updatedAt: string;
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

interface DestinationImages {
  image: GraphCMSDestinationImage;
  alt: string;
}

interface GraphCMSDestinationImage {
  height: number;
  size: number;
  url: string;
  width: number;
}

// export interface Destination {
//   description: GraphCMSDescription;
//   images: SingleImage;
//   slug: string;
//   title: string;
//   subtitle: string;
//   shortDescription: string;
// }
