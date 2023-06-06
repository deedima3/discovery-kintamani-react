import {
    Blog,
    BlogQueryData,
    FeaturedBlogData,
    FeaturedBlogsWrapper,
    PaginatedQueryParams,
} from "@/interfaces/data.interfaces";
import {
    ApiDataResponse,
    ApiNodeResponse,
    ApiPaginatedResponse,
    ApiResponse,
    PaginatedDataWithMeta,
} from "@/interfaces/graphcms.interfaces";
import { graphQLClient } from "@/utils/query";
import { gql } from "graphql-request";

export const getAllBlog = async (search: string) => {
    const query = gql`
    query GetAllBlogs($search: String) {
      blogs(where: { title_contains: $search }) {
        image {
          alt
          image {
            url
            width
            height
          }
        }
        slug
        subtitle
        title
        updatedAt
        shortDescription
      }
    }
  `;
    const { blogs } = (await graphQLClient.request(query, {
        search: search,
    })) as ApiDataResponse<Blog[]>;
    return blogs;
};

export const getAllBlogLimited = async (limit: number) => {
    const query = gql`
    query GetAllBlogsLimited($limit: Int) {
      blogs(first: $limit) {
        image {
          alt
          image {
            url
            width
            height
          }
        }
        slug
        subtitle
        title
        updatedAt
        shortDescription
      }
    }
  `;
    const { blogs } = (await graphQLClient.request(query, {
        limit: limit,
    })) as ApiDataResponse<Blog[]>;
    return blogs;
};

export const getAllBlogPaginated = async (
    queryParams: PaginatedQueryParams
) => {
    const query = gql`
    query GetAllBlog($search: String, $limit: Int, $offset: Int) {
      blogsConnection(
        where: { title_contains: $search }
        first: $limit
        skip: $offset
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
        aggregate {
          count
        }
        edges {
          node {
            slug
            stage
            title
            image {
              alt
              image {
                height
                width
                url(
                  transformation: {
                    image: { resize: { width: 500, height: 500 } }
                  }
                )
              }
            }
            shortDescription
            updatedAt
          }
        }
      }
    }
  `;
    const { blogsConnection } = (await graphQLClient.request(
        query,
        queryParams
    )) as ApiDataResponse<ApiPaginatedResponse<ApiNodeResponse<BlogQueryData>[]>>;
    return {
        data: blogsConnection.edges.map((blogData) => {
            return blogData.node;
        }),
        meta: blogsConnection.pageInfo,
        aggregate: blogsConnection.aggregate,
    } as unknown as PaginatedDataWithMeta<BlogQueryData[]>;
};

export const getBlogByID = async (slug: string) => {
    const query = gql`
    query GetBlogByID($slug: String) {
      blog(where: { slug: $slug }) {
        description {
          html
        }
        image {
          alt
          image {
            height
            width
            url
          }
        }
        slug
        title
        subtitle
        updatedAt
      }
    }
  `;
    const { blog } = (await graphQLClient.request(query, {
        slug: slug,
    })) as ApiDataResponse<Blog>;
    return blog;
};

export const getAllBlogSlug = async () => {
    const query = gql`
    query GetAllBlogs {
      blogs {
        slug
      }
    }
  `;
    const { blogs } = (await graphQLClient.request(query)) as ApiDataResponse<
        { slug: string }[]
    >;
    return blogs;
};

export const getFirstBlogs = async (limit: number) => {
    const query = gql`
    query MyQuery($limit: Int) {
      blogs(first: $limit) {
        slug
        title
        image {
          alt
          image {
            width
            url
            height
          }
        }
      }
    }
  `;
    const data = (await graphQLClient.request(query, {
        limit: limit,
    })) as ApiDataResponse<FeaturedBlogsWrapper<FeaturedBlogData>[]>;
    return {
        blogs: data.blogs,
    } as unknown as FeaturedBlogsWrapper<FeaturedBlogData[]>;
};
