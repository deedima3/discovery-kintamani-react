import dynamic from "next/dynamic";
import { MapContainer, Rectangle, TileLayer } from "react-leaflet";

const Map = dynamic(() => import("@components/Map/map"), { ssr: false });
const InteractiveMapPage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[58rem] mx-auto">
        <Map />
      </div>
    </div>
  );
};

export default InteractiveMapPage;
