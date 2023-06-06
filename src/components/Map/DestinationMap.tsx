import Link from "next/link";
import { useRouter } from "next/router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface PageProps {
  href: string;
  lat: number;
  long: number;
}

const DestinationMap = ({ href, lat, long }: PageProps) => {
  const router = useRouter();
  const onClickNavigate = () => {
    router.push(href);
  };
  return (
    <Link href={href} target="__blank" rel="noopener noreferrer">
      <div
        className="w-full rounded-brand overflow-hidden relative hover:cursor-pointer"
        // onClick={onClickNavigate}
      >
        <div className="w-full h-full z-50 relative">
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
            <button
              className="bg-black py-4 px-5 rounded-brand text-sm md:text-md lg:text-xl font-poppins font-bold"
              // onClick={onClickNavigate}
            >
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFD809] to-[#FD900C]">
                Navigate Me To Google Maps
              </p>
            </button>
          </div>
          <div className="relative lg:h-[38rem] h-[24rem] md:h-[28rem] w-full -z-50">
            <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full z-40">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            </div>
            <MapContainer
              attributionControl={false}
              center={[lat, long]}
              zoom={15}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, long]}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationMap;
