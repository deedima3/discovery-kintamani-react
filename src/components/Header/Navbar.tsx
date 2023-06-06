import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3, HiChevronRight } from "react-icons/hi";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState("/");
  const [openBar, setOpenBar] = useState(false);

  const { pathname } = useRouter();

  const handleBar = () => {
    openBar == false && setOpenBar(true);
    openBar == true && setOpenBar(false);
  };

  const dataMenu = [
    {
      name: "Discover",
      path: "/",
    },
    {
      name: "Destination",
      path: "/destination",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Information",
      path: "/information",
    },
    {
      name: "Interactive Map",
      path: "/interactive-map",
    },
  ];

  return (
    <div className="sticky top-0 z-[99999] w-full bg-white border-b-2 h-36 border-b-gray-200">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-screen-2xl">
        <Link href={"/"} className="flex items-center h-20 gap-3">
          <Image
            src="/logo-colored.svg"
            width={35}
            height={30}
            style={{ width: "auto", height: "auto" }}
            alt="logo"
          />
          <div className="text-2xl font-semibold leading-7 text-slate-900">
            Kintamani <br /> Discovery
          </div>
        </Link>

        <button className="text-gray-700 lg:hidden" onClick={() => handleBar()}>
          <HiMenuAlt3 size={40} />
        </button>

        <div
          className={`${
            openBar == false && "hidden lg:block"
          } flex flex-col lg:flex-row items-start absolute lg:static top-0 left-0 mt-36 lg:mt-0 bg-white lg:bg-transparent w-full lg:w-auto lg:flex lg:gap-8 text-gray-400 font-normal text-2xl`}
        >
          {dataMenu.map((data, key) => (
            <Link
              href={data.path}
              className={`link-hover h-16 lg:h-auto w-full lg:w-auto px-4 lg:px-0 border-b-[1px] lg:border-none border-b-gray-200 flex items-center justify-between duration-200 gap-1 ${
                pathname == data.path && "link-active"
              } flex lg:flex-col items-center`}
              key={key}
            >
              {data.name}
              <div
                className={`hidden lg:block ${
                  pathname == data.path && "oval-active"
                }`}
              />
              <HiChevronRight
                size={30}
                className={`lg:hidden ${
                  pathname == data.path && "text-[#FD900C]"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
