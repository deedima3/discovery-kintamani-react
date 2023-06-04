import { Blog, BlogQueryData, PaginatedQueryParams } from "@/interfaces/data.interfaces"
import { ApiDataResponse, ApiNodeResponse, ApiPaginatedResponse, ApiResponse, PaginatedDataWithMeta } from "@/interfaces/graphcms.interfaces"
import { graphQLClient } from "@/utils/query"
import { gql } from "graphql-request"

export const getAllBlog = async (search: string) => {
    const query = gql`
    query GetAllBlogs() {
        blogs(where: {title_contains: $search}) {
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
        }
        }
    `
    const { data } = await graphQLClient.request(query, { search: search }) as ApiResponse<ApiDataResponse<Blog[]>>
    return data.blog
}

export const getAllBlogPaginated = async (queryParams: PaginatedQueryParams) => {
    const query = gql`
        query GetAllBlog($search: String, $limit: Int, $offset: Int) {
                blogsConnection(
                    where: {title_contains: $search}
                    first: $limit
                    skip: $offset
                ) {
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        pageSize
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
                                url
                            }
                        }
                        shortDescription
                    }
                    }
                }
        }
    `
    const { blogsConnection } = await graphQLClient.request(query, queryParams) as ApiDataResponse<ApiPaginatedResponse<ApiNodeResponse<BlogQueryData>[]>>
    return {
        data: blogsConnection.edges.map((blogData) => {
            return blogData.node
        }),
        meta: blogsConnection.pageInfo
    } as unknown as PaginatedDataWithMeta<BlogQueryData[]>
}


export const getBlogByID = async (slug: string) => {
    const query = gql`
    query GetBlogByID {
        blog(where: {slug: $slug}) {
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
        }
        }
    `
    const data = await graphQLClient.request(query, { slug: slug }) as ApiResponse<ApiDataResponse<Blog>>
    console.log(data)
}