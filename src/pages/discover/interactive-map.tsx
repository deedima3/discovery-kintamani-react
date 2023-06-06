import mapQueries from "@/api/discover/map.service";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NormalLayout from "@/components/Layout/NormalLayout";
import UnborderedLayout from "@/components/Layout/UnborderedLayout";
import { PageSEO } from "@/components/SEO/CommonSEO";
import { MapMetadata, MapMetadataWrapper } from "@/interfaces/data.interfaces";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { MapContainer, Rectangle, TileLayer } from "react-leaflet";

const breadCrumbsData = [
  {
    route: "/",
    label: "Discover",
    isBold: false,
  },
  {
    route: "/discover/interactive-map",
    label: "Interactive Maps",
    isBold: true,
  },
];
const Map = dynamic(() => import("@/components/Map/map"), { ssr: false });
const InteractiveMapPage = () => {
  const [destinations, setDestinations] =
    useState<MapMetadataWrapper<MapMetadata[]>>();
  useEffect(() => {
    (async () => {
      const data = await mapQueries.getMapMarkerMetadata();
      setDestinations(data);
    })();
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-2 md:px-0 bg-white py-6 md:py-10 lg:py-14">
        <Breadcrumb breadcrumbArray={breadCrumbsData} />
      </div>
      <div className="w-full h-[32rem] lg:h-[58rem] mx-auto">
        <Map destinations={destinations?.destinations} />
      </div>
    </div>
  );
};

InteractiveMapPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <PageSEO title="Interactive Maps | Play around with google maps alike map" />
      <UnborderedLayout pageTitle="Interactive Map">{page}</UnborderedLayout>
    </>
  );
};
export default InteractiveMapPage;
