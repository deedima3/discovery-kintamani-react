import {
  DestinationQueryData,
  PaginatedQueryParams,
} from "@/interfaces/data.interfaces";
import {
  ApiDataResponse,
  ApiNodeResponse,
  ApiPaginatedResponse,
  PaginatedDataWithMeta,
} from "@/interfaces/graphcms.interfaces";
import { graphQLClient } from "@/utils/query";
import { gql } from "graphql-request";

const getAllDestinationPaginated = async (params: PaginatedQueryParams) => {
  const query = gql`
    query DestinationQuery($search: String, $limit: Int, $offset: Int) {
      destinationsConnection(
        first: $limit
        skip: $offset
        where: { title_contains: $search }
      ) {
        edges {
          node {
            images {
              ... on Image {
                image {
                  size
                  height
                  url
                  width
                }
                alt
              }
            }
            slug
            title
            shortDescription
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  `;

  // const {data} = await graphQLClient.request(queryText, {search:search}) as ApiResponse<ApiDataResponse<Desti

  const { destinationsConnection } = (await graphQLClient.request(
    query,
    params
  )) as ApiDataResponse<
    ApiPaginatedResponse<ApiNodeResponse<DestinationQueryData>[]>
  >;
  console.log(destinationsConnection);
  return {
    data: destinationsConnection.edges.map((destinationData) => {
      return destinationData.node;
    }),
    meta: destinationsConnection.pageInfo,
  } as unknown as PaginatedDataWithMeta<DestinationQueryData[]>;
};

const getDestinationById = async (slug: string) => {
  const query = gql`
    query GetDestinationById($slug: String) {
      destination(where: { slug: $slug }) {
        images {
          ... on Image {
            image {
              url
            }
          }
        }
        title
        location
        openTime
        closeTime
        alwaysOpen
        description {
          markdown
        }
        coordinate {
          latitude
          longitude
        }
      }
    }
  `;

  const data = await graphQLClient.request(query, { slug: slug });
  console.log(data);
};

const destinationQueries = {
  getAllDestinationPaginated,
};

export default destinationQueries;
