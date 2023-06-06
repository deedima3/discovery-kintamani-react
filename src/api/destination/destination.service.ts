import {
  DestinationQueryData,
  PaginatedQueryParams,
  Destination,
  DestinationResponse,
  DestinationData,
  MapMetadataWrapper,
  DestinationsWrapper,
  FeaturedDestinationData,
} from "@/interfaces/data.interfaces";
import {
  ApiDataResponse,
  ApiNodeResponse,
  ApiPaginatedResponse,
  PaginatedDataWithMeta,
  ApiSlugsResponse,
} from "@/interfaces/graphcms.interfaces";
import { graphQLClient } from "@/utils/query";
import { gql } from "graphql-request";

export const getDestinations = async () => {
  const query = gql`
    query MyQuery {
      destinations(where: { isFeatured: true }) {
        alwaysOpen
        category
        closeTime
        coordinate {
          latitude
          longitude
        }
        images {
          ... on Image {
            alt
            image {
              width
              url
              height
            }
          }
        }
        isFeatured
        location
        openTime
        shortDescription
        slug
        title
      }
    }
  `;
  const data: ApiDataResponse<DestinationsWrapper<FeaturedDestinationData>[]> =
    await graphQLClient.request(query);
  return {
    destinations: data.destinations,
  } as unknown as DestinationsWrapper<FeaturedDestinationData[]>;
};

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
                  url(
                    transformation: {
                      image: { resize: { width: 1000, height: 1000 } }
                    }
                  )
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
        aggregate {
          count
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
  return {
    data: destinationsConnection.edges.map((destinationData) => {
      return destinationData.node;
    }),
    meta: destinationsConnection.pageInfo,
    aggregate: destinationsConnection.aggregate,
  } as unknown as PaginatedDataWithMeta<DestinationQueryData[]>;
};

const getDestinationBySlug = async (slug: any) => {
  const query = gql`
    query GetDestinationById($slug: String) {
      destination(where: { slug: $slug }) {
        images {
          ... on Image {
            image {
              url
              width
              height
            }
            alt
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
        category
      }
    }
  `;

  const { destination }: DestinationResponse<DestinationData> =
    await graphQLClient.request(query, { slug: slug });
  return {
    data: destination,
  } as unknown as ApiDataResponse<DestinationData>;
};

const getAllDestinationsSlug = async () => {
  const query = gql`
    query MyQuery {
      destinations {
        slug
      }
    }
  `;
  const { destinations }: ApiDataResponse<ApiSlugsResponse<Destination>[]> =
    await graphQLClient.request(query);
  return {
    data: destinations,
  } as unknown as ApiDataResponse<Destination[]>;
};

const destinationQueries = {
  getAllDestinationPaginated,
  getDestinationBySlug,
  getAllDestinationsSlug,
};

export default destinationQueries;
