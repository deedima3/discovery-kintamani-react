import NormalLayout from "@/components/Layout/NormalLayout";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {
  HiOutlineGlobeAmericas,
  HiOutlineCamera,
  HiOutlineMap,
} from "react-icons/hi2";
import { GiBinoculars, GiGreekTemple, GiHourglass } from "react-icons/gi";

import { useQuery } from "@tanstack/react-query";
import { getDestinations } from "@/api/destination/destination.service";
import dynamic from "next/dynamic";
import { PageSEO } from "@/components/SEO/CommonSEO";
import { CATEGORY_VALUE } from "@/utils/constant";
import { DestinationData } from "@/interfaces/data.interfaces";

const Map = dynamic(() => import("@/components/Map/oddysey"), { ssr: false });

const Home = () => {
  const { data, isLoading } = useQuery(["destinations"], getDestinations);
  if (isLoading) {
    return null;
  }

  return (
    <div className="bg-white text-stone-800">
      <section className="flex flex-col w-full h-screen gap-10 pt-36 lg:pt-0 sm:flex-row md:gap-0">
        <div className="flex flex-col justify-center w-full gap-5 sm:w-1/2">
          <h1 className="text-5xl text-stone-800 font-quicksand font-semibold leading-[58px]">
            Exploring Bali`s <br /> Highland Treasures
          </h1>
          <p className="text-xl font-light text-gray-400 pr-14">
            Discover the Enchanting Secrets of Kintamani
          </p>
        </div>
        <div className="flex justify-end w-full h-full sm:w-1/2 sm:items-center">
          <div className="w-full sm:w-[650px] h-full sm:h-[300px] md:h-[400px]">
            <Image
              src={data?.destinations[7].images.image.url || ''}
              width={data?.destinations[7].images?.image?.width}
              height={data?.destinations[7].images?.image?.height}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              className="sm:rounded-l-3xl xl:rounded-3xl bg-stone-300"
              alt={"Headers"}
              priority
            />
          </div>
        </div>

        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="flex flex-col w-full gap-12 pb-12 mt-20">
        <div className="text-center">
          <h1 className="text-4xl font-quicksand font-semibold mb-2.5">
            Destination Treasures
          </h1>
          <p className="text-xl font-light text-gray-400">
            Showcasing the Spectacular Highlighted Destinations That Define
            Adventure
          </p>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.7,
            },
          }}
          freeMode={true}
          spaceBetween={30}
          modules={[FreeMode]}
          className="w-full cursor-pointer mySwiper"
        >
          {data?.destinations.map((destinationData: DestinationData, key) => (
            <SwiperSlide className="flex flex-col" key={key}>
              <div className="w-full mb-2 h-72">
                <Image
                  src={destinationData?.images?.image?.url}
                  width={destinationData?.images?.image?.width}
                  height={destinationData?.images?.image?.height}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  alt={destinationData?.images?.alt}
                  className="rounded-2xl bg-stone-300"
                />{" "}
              </div>
              <div className="flex gap-3">
                <div className="flex gap-2">
                  <HiOutlineMap className="p-1 text-2xl text-white bg-black rounded-3xl" />{" "}
                  {destinationData?.location}
                </div>{" "}
                <div className="flex gap-2">
                  {destinationData?.category == "religious" ? (
                    <GiGreekTemple className="p-1 text-2xl text-white bg-gradient-to-tl from-blue-800 to-purple-500 rounded-xl" />
                  ) : destinationData.category == "tourism" ? (
                    <GiBinoculars className="p-1 text-2xl text-white bg-gradient-to-tr from-blue-700 to-sky-400 rounded-xl " />
                  ) : (
                    destinationData.category == "history" && (
                      <GiHourglass className="p-1 text-2xl text-white bg-gradient-to-tr from-purple-400 to-red-400 rounded-xl " />
                    )
                  )}
                  {CATEGORY_VALUE[destinationData?.category]}
                </div>
              </div>
              <h2 className="text-2xl font-bold font-quicksand">
                {destinationData?.title}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="flex flex-col items-center w-full gap-6 mt-20 sm:flex-row sm:gap-0">
        <div className="w-full sm:w-1/2 h-[45vh] sm:h-[509px]">
          <div className="w-full h-full overflow-hidden sm:w-11/12 bg-stone-300 sm:rounded-r-2xl lg:rounded-2xl">
            <Map />
          </div>
        </div>
        <div className="text-center sm:pl-20 lg:pl-32 sm:w-1/2 sm:text-left">
          <h1 className="w-full mb-5 text-3xl font-bold font-quicksand">
            Interactive Map Odyssey
          </h1>
          <p className="mb-10 text-xl text-gray-400 font-ligh">
            Unleash Your Inner Explorer and Chart <br /> Your Perfect Travel
            Path
          </p>
          <button className="bg-black rounded-lg">
            {" "}
            <div className="flex items-center gap-2 px-5 py-4 text-2xl link-active">
              <HiOutlineGlobeAmericas className="text-[#FD900C]" /> Navigate Me
            </div>{" "}
          </button>
        </div>
      </section>

      <section className="flex flex-col w-full gap-12 py-28">
        <div className="text-center">
          <h1 className="text-4xl font-quicksand font-semibold mb-2.5">
            Visual Delights of Kintamani
          </h1>
          <p className="text-xl font-light text-gray-400">
            Gallery Showcasing the Magnificent Landscapes and Cultural Richness
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            className="col-span-2 bg-gray-400 bg-center bg-cover h-72 rounded-xl"
            style={{
              backgroundImage: `url(${
                data != null && data.destinations[4].images?.image?.url
              })`,
            }}
          >
            <div className="flex items-end w-full h-full p-5 text-sm font-light text-white bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl">
              <div className="flex items-center gap-2">
                <HiOutlineCamera className="text-base" /> Photo by Admin
              </div>
            </div>
          </div>

          {data?.destinations.slice(0, 4).map((dataDestination, key) => (
            <div
              className="col-span-2 bg-gray-400 bg-center bg-cover sm:col-span-1 h-72 rounded-xl"
              style={{
                backgroundImage: `url(${dataDestination?.images?.image?.url})`,
              }}
              key={key}
            >
              <div className="flex items-end w-full h-full p-5 text-sm font-light text-white bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl ">
                <div className="flex items-center gap-2">
                  <HiOutlineCamera className="text-base" /> Photo by Admin
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <PageSEO />
      <NormalLayout pageTitle="Home">{page}</NormalLayout>
    </>
  );
};

export default Home;
