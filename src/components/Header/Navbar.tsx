import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const handleLinkClick = (idx) => {
    setActiveIdx(idx)
  }

  return (
    <div className="w-full h-36 fixed z-50 top-0 bg-white border-2 border-b-gray-200">
      <div className="h-full mx-auto max-w-screen-2xl flex justify-between items-center">
        <Link href={"/"} className="h-20 flex items-center gap-3">
          <Image src="/logo-colored.svg" width={35} height={30} alt="logo" priority />
          <div className="text-slate-900 font-semibold leading-7 text-2xl">Kintamani <br /> Discovery</div>
        </Link>

        <div className="flex gap-8 text-gray-400 font-light text-2xl">
          <Link href={""} onClick={() => handleLinkClick(0)} className={`link-hover duration-200 gap-1 ${activeIdx === 0 && 'link-active'} flex flex-col items-center`}>Discover <div className={`${activeIdx === 0 && 'oval-active'}`}/></Link>
          <Link href={""} onClick={() => handleLinkClick(1)} className={`link-hover duration-200 gap-1 ${activeIdx === 1 && 'link-active'} flex flex-col items-center`}>Destination <div className={`${activeIdx === 1 && 'oval-active'}`}/></Link>
          <Link href={""} onClick={() => handleLinkClick(2)} className={`link-hover duration-200 gap-1 ${activeIdx === 2 && 'link-active'} flex flex-col items-center`}>Blog <div className={`${activeIdx === 2 && 'oval-active'}`}/></Link>
          <Link href={""} onClick={() => handleLinkClick(3)} className={`link-hover duration-200 gap-1 ${activeIdx === 3 && 'link-active'} flex flex-col items-center`}>Information <div className={`${activeIdx === 3 && 'oval-active'}`}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;