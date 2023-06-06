import { MapMetadata, MapMetadataWrapper } from "@/interfaces/data.interfaces";
import { ApiDataResponse } from "@/interfaces/graphcms.interfaces";
import { graphQLClient } from "@/utils/query";
import { gql } from "graphql-request";

const getMapMarkerMetadata = async () => {
  const query = gql`
    query MyQuery {
      destinations {
        title
        shortDescription
        location
        category
        coordinate {
          latitude
          longitude
        }
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
      }
    }
  `;

  const data: ApiDataResponse<MapMetadataWrapper<MapMetadata>[]> =
    await graphQLClient.request(query);
  return {
    destinations: data.destinations,
  } as unknown as MapMetadataWrapper<MapMetadata[]>;
};

const mapQueries = {
  getMapMarkerMetadata,
};
export default mapQueries;
