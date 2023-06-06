import { MapContainer, TileLayer } from "react-leaflet";

function OddyseyMap() {
  return (
    <MapContainer
      attributionControl={false}
      center={[-8.2500045, 115.344994]}
      zoom={12}
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
    </MapContainer>
  );
}

export default OddyseyMap;
