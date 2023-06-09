export interface GraphCMSImage {
  image: {
    height: number;
    width: number;
    url: string;
  };
  alt: string;
}

export interface GraphCMSDescription {
  html: string;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ApiDataResponse<ResponseType> {
  [key: string]: ResponseType;
}

export interface GraphCMSPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
}

export interface ApiPaginatedResponse<T> {
  pageInfo: GraphCMSPageInfo;
  edges: T;
  aggregate: Aggregate;
}

export interface ApiNodeResponse<T> {
  node: T;
}

export interface PaginatedDataWithMeta<T> {
  data: T;
  meta: GraphCMSPageInfo;
  aggregate: Aggregate;
}

export interface ApiSlugsResponse<T> {
  destinations: T;
}

export interface Aggregate {
  count: number;
}
