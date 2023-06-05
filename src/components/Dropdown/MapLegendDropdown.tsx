import { IconContext } from "react-icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { mapLegendData } from "./dropdownData";

interface Props {
  isOpen: Boolean;
  setIsDropdownOpen: any;
}

const ArrowDown = (props: Props) => {
  return (
    <svg width={24} height={24} style={{ margin: "0px" }}>
      <linearGradient id="myGradient" gradientTransform="rotate(45)">
        <stop offset="25%" stopColor="#FFD809" />
        <stop offset="75%" stopColor="#FD900C" />
      </linearGradient>
      <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" } }}>
        {props.isOpen ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
      </IconContext.Provider>
    </svg>
  );
};

const MapLegendDropdown = (props: Props) => {
  return (
    <div className="z-50 absolute top-0 left-0">
      <button
        className="w-fit bg-black flex flex-row space-x-1 px-3 py-2 rounded-[4px] items-center justify-center hover:cursor-pointer"
        onClick={(e) => {
          props.setIsDropdownOpen(!props.isOpen);
        }}
      >
        <p className="text-linear-gold text-sm font-bold whitespace-nowrap font-poppins">
          Map Legend
        </p>
        <ArrowDown
          isOpen={props.isOpen}
          setIsDropdownOpen={props.setIsDropdownOpen}
        />
      </button>

      <div
        className={`transition bg-white rounded-[4px] mt-4 ${
          props.isOpen ? "block" : "hidden"
        } transition-all duration-300 shadow-lg`}
      >
        {mapLegendData.map(({ color, text }, idx) => (
          <div
            key={idx}
            className="flex flex-row space-x-4 p-4 items-center hover:bg-slate-400 transition-all duration-300 hover:cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full bg-linear-${color}`}></div>
            <p className="text-black whitespace-nowrap group-hover:text-white">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapLegendDropdown;
