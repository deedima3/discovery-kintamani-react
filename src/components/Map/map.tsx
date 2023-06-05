import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LeafletMarker from "./marker";
import L from "leaflet";
import * as ReactDOMServer from "react-dom/server";

function getIcon() {
  return L.divIcon({
    className: "leaflet-custom-icon",
    html: ReactDOMServer.renderToString(<LeafletMarker.blueMarker />),
  });
}

const InteractiveMap = () => {
  const mapCenterLat = -8.2388059;
  const mapCenterLng = 115.3787013;
  const zoomLevel = 13;
  return (
    <MapContainer
      attributionControl={false}
      center={[mapCenterLat, mapCenterLng]}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={getIcon()}
        position={[-8.234983354605264, 115.37775718879304]}
      >
        <Popup>
          <div>Hello</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;
