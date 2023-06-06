import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto px-3 py-10 sm:py-24 flex sm:flex-row sm:items-center justify-between max-w-screen-2xl text-white">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-8 md:gap-16 lg:gap-24">
          <div className="flex flex-col gap-4">
            <Link href={"/"} className="flex items-center gap-3">
              <Image src="/logo-white.svg" width={35} height={30} alt="logo" />
              <div className="text-white font-semibold leading-7 text-2xl">
                Kintamani <br /> Discovery
              </div>
            </Link>
            <p className="text-lg sm:text-base">
              Copyright &copy; 2023.
              <br />
              All Rights Reserved.
            </p>
          </div>

          <div className=" text-lg sm:text-base">
            <h1 className="font-bold mb-3">Page Menus</h1>
            <div className="flex flex-col gap-2">
              <Link href={""}>Discovery</Link>
              <Link href={""}>Destination</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Information</Link>
            </div>
          </div>

          <div className=" text-lg sm:text-base">
            <h1 className="font-bold mb-3">Social Media</h1>
            <div className="flex flex-col gap-2">
              <Link href={""}>Twitter</Link>
              <Link href={""}>Tiktok</Link>
              <Link href={""}>Facebook</Link>
              <Link href={""}>Instagram</Link>
            </div>
          </div>
        </div>

        <Image
          src={"/logo-white.svg"}
          width={160}
          height={100}
          style={{height: '100%', width: '100%'}}
          alt="white-logo"
          className="opacity-30"
        />
      </div>
    </div>
  );
};

export default Footer;
