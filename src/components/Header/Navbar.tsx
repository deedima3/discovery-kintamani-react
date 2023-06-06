import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3, HiChevronRight } from "react-icons/hi";

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openBar, setOpenBar] = useState(false)

  const handleLinkClick = (idx) => {
    setActiveIdx(idx);
  };

  const handleBar = () => {
    openBar == false && setOpenBar(true)
    openBar == true && setOpenBar(false)
  }

  return (
    <div className="w-full h-36 fixed z-50 top-0 bg-white border-b-2 border-b-gray-200">
      <div className="h-full mx-auto px-4 max-w-screen-2xl flex justify-between items-center">
        <Link href={"/"} className="h-20 flex items-center gap-3">
          <Image src="/logo-colored.svg" width={35} height={30} style={{width:'auto', height:'auto'}} alt="logo" />
          <div className="text-slate-900 font-semibold leading-7 text-2xl">
            Kintamani <br /> Discovery
          </div>
        </Link>

        <button className="text-gray-700 lg:hidden" onClick={() => handleBar()}>
          <HiMenuAlt3 size={40} />
        </button>

        <div className={`${openBar == false && 'hidden lg:block'} flex flex-col lg:flex-row items-start absolute lg:static top-0 left-0 mt-36 lg:mt-0 bg-white lg:bg-transparent w-full lg:w-auto lg:flex lg:gap-8 text-gray-400 font-normal text-2xl`}>
          <Link
            href={""}
            onClick={() => handleLinkClick(0)}
            className={`link-hover h-16 lg:h-auto w-full lg:w-auto px-4 lg:px-0 border-b-[1px] lg:border-none border-b-gray-200 flex items-center justify-between duration-200 gap-1 ${
              activeIdx === 0 && "link-active"
            } flex lg:flex-col items-center`}
          >
            Discover{" "}
            <div className={`hidden lg:block ${activeIdx === 0 && "oval-active"}`} />
            <HiChevronRight size={30} className={`lg:hidden ${activeIdx === 0 && "text-[#FD900C]"}`}/>
          </Link>
          <Link
            href={""}
            onClick={() => handleLinkClick(1)}
            className={`link-hover h-16 lg:h-auto w-full lg:w-auto px-4 lg:px-0 border-b-[1px] lg:border-none border-b-gray-200 flex items-center justify-between duration-200 gap-1 ${
              activeIdx === 1 && "link-active"
            } flex lg:flex-col items-center`}
          >
            Destination{" "}
            <div className={`hidden lg:block ${activeIdx === 1 && "oval-active"}`} />
            <HiChevronRight size={30} className={`lg:hidden ${activeIdx === 1 && "text-[#FD900C]"}`}/>
          </Link>
          <Link
            href={""}
            onClick={() => handleLinkClick(2)}
            className={`link-hover h-16 lg:h-auto w-full lg:w-auto px-4 lg:px-0 border-b-[1px] lg:border-none border-b-gray-200 flex items-center justify-between duration-200 gap-1 ${
              activeIdx === 2 && "link-active"
            } flex lg:flex-col items-center`}
          >
            Blog{" "}
            <div className={`hidden lg:block ${activeIdx === 2 && "oval-active"}`} />
            <HiChevronRight size={30} className={`lg:hidden ${activeIdx === 2 && "text-[#FD900C]"}`}/>
          </Link>
          <Link
            href={""}
            onClick={() => handleLinkClick(3)}
            className={`link-hover h-16 lg:h-auto w-full lg:w-auto px-4 lg:px-0 border-b-[1px] lg:border-none border-b-gray-200 flex items-center justify-between duration-200 gap-1 ${
              activeIdx === 3 && "link-active"
            } flex lg:flex-col items-center`}
          >
            Information{" "}
            <div className={`hidden lg:block ${activeIdx === 3 && "oval-active"}`} />
            <HiChevronRight size={30} className={`lg:hidden ${activeIdx === 3 && "text-[#FD900C]"}`}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
