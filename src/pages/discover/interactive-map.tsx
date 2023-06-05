import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NormalLayout from "@/components/Layout/NormalLayout";
import UnborderedLayout from "@/components/Layout/UnborderedLayout";
import dynamic from "next/dynamic";
import React from "react";
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
const Map = dynamic(() => import("@components/Map/map"), { ssr: false });
const InteractiveMapPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto py-14">
        <Breadcrumb breadcrumbArray={breadCrumbsData} />
      </div>
      <div className="w-full h-[58rem] mx-auto">
        <Map />
      </div>
    </div>
  );
};

InteractiveMapPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <UnborderedLayout pageTitle="Interactive Map">{page}</UnborderedLayout>
  );
};
export default InteractiveMapPage;
