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