import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3, HiChevronRight } from "react-icons/hi";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState('/');
  const [openBar, setOpenBar] = useState(false)

  const { pathname } = useRouter()

  const handleBar = () => {
    openBar == false && setOpenBar(true)
    openBar == true && setOpenBar(false)
  }

  const dataMenu = [
    {
      'name': 'Discover',
      'path': '/'
    },
    {
      'name': 'Destination',
      'path': '/destination'
    },
    {
      'name': 'Blog',
      'path': '/blog'
    },
    {
      'name': 'Information',
      'path': '/information'
    },
    {
      'name': 'Interactive Map',
      'path': '/interactive-map'
    },
  ]

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
          {dataMenu.map((data, key) => (
            <Link
              href={data.path}
              className={`link-hover h-16 lg:h-auto w-full lg:w-auto px-4 lg:px-0 border-b-[1px] lg:border-none border-b-gray-200 flex items-center justify-between duration-200 gap-1 ${
                pathname == data.path && "link-active"
              } flex lg:flex-col items-center`}
              key={key}
            >
              {data.name}
              <div className={`hidden lg:block ${pathname == data.path && "oval-active"}`} />
              <HiChevronRight size={30} className={`lg:hidden ${pathname == data.path && "text-[#FD900C]"}`}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
