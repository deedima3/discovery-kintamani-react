import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import LeafletMarker from "./marker";
import L from "leaflet";
import * as ReactDOMServer from "react-dom/server";
import Image from "next/image";
import { HiOutlineMap } from "react-icons/hi";
import MapLegendDropdown from "../Dropdown/MapLegendDropdown";
import { useState } from "react";
import { MapMetadata, MapMetadataWrapper } from "@/interfaces/data.interfaces";

interface IconProps {
  category: string;
}

function getIcon(props: IconProps) {
  let icon;
  if (props.category == "fnb") {
    icon = <LeafletMarker.redMarker />;
  } else if (props.category == "history") {
    icon = <LeafletMarker.greenMarker />;
  } else if (props.category == "tourism") {
    icon = <LeafletMarker.purpleMarker />;
  } else {
    icon = <LeafletMarker.blueMarker />;
  }
  return L.divIcon({
    className: "leaflet-custom-icon",
    html: ReactDOMServer.renderToString(icon),
    iconSize: [16, 16],
    popupAnchor: [0, 16],
  });
}

const InteractiveMap = ({ destinations }: any) => {
  console.log(destinations);
  const mapCenterLat = -8.2388059;
  const mapCenterLng = 115.3787013;
  const zoomLevel = 13;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative w-full h-full font-poppins">
      <div className="container relative mx-auto top-10">
        <div className="absolute top-0 left-0 font-poppins">
          <MapLegendDropdown
            isOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
      </div>
      <MapContainer
        attributionControl={false}
        center={[mapCenterLat, mapCenterLng]}
        zoom={zoomLevel}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
        // bounceAtZoomLimits={true}
        minZoom={11.5}
        maxZoom={18}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {destinations?.map(
          ({
            title,
            shortDescription,
            location,
            category,
            coordinate,
            images,
          }: MapMetadata) => {
            if (!coordinate) {
              return <div></div>;
            }
            return (
              <Marker
                icon={getIcon({ category: category })}
                position={[coordinate.latitude, coordinate.longitude]}
                eventHandlers={{
                  mouseover: (event) => {
                    event.target.openPopup();
                  },
                  mouseout: (event) => {
                    event.target.closePopup();
                  },
                }}
              >
                <Popup closeButton={false} maxWidth={500}>
                  <div className="grid grid-flow-col place-items-center gap-4">
                    <div className="w-[100px] h-[100px] rounded-[10px] relative overflow-hidden block">
                      <Image
                        src={images.image.url}
                        alt={images.alt}
                        style={{ objectFit: "cover" }}
                        fill
                      />
                    </div>
                    <div className="w-fit h-fit flex flex-col space-y-[20px]">
                      <p className="text-2xl font-bold w-full break-words m-0 block leading-none">
                        {title}
                      </p>
                      <div className="flex flex-row space-x-2 items-center">
                        <div className="text-white bg-black w-fit h-auto rounded-full p-[0.2rem]">
                          <HiOutlineMap size={16} />
                        </div>
                        <p className="text-sm m-0 block">{location}</p>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          }
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
