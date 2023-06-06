import NormalLayout from "@/components/Layout/NormalLayout";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { HiOutlineGlobeAmericas, HiOutlineCamera } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="bg-white text-stone-800">
      <section className="h-screen w-full pt-36 flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h1 className="text-5xl text-stone-800 font-quicksand font-semibold leading-[58px]">
            Exploring Bali's <br /> Highland Treasures
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Discover the Enchanting Secrets of Kintamani
          </p>
        </div>
        <div className="h-full w-full md:w-1/2 flex md:items-center justify-end">
          <div className="w-full sm:w-[600px] h-full sm:h-[300px] md:h-[340px] sm:rounded-l-3xl md:rounded-3xl bg-stone-300" />
        </div>

        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="w-full flex flex-col gap-12 pb-12 mt-20">
        <div className="text-center">
          <h1 className="text-4xl font-quicksand font-semibold mb-2.5">
            Destination Treasures
          </h1>
          <p className="text-xl text-gray-400 font-light">
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
          className="mySwiper w-full cursor-pointer"
        >
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="w-full h-64 rounded-2xl bg-stone-300" />{" "}
            <div>
              <span>tag 1</span> <span>tag 2</span>
            </div>{" "}
            <h2 className=" text-2xl font-semibold font-quicksand">
              Name of Place
            </h2>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="w-full flex flex-col sm:flex-row items-center mt-20 gap-6 sm:gap-0">
        <div className="w-full sm:w-1/2 h-[45vh] sm:h-[509px] bg-stone-300 sm:rounded-2xl" />
        <div className="sm:pl-32 sm:w-1/2 text-center sm:text-left">
          <h1 className="w-full text-3xl font-quicksand font-bold mb-5">
            Interactive Map Odyssey
          </h1>
          <p className="text-xl text-gray-400 font-ligh mb-10">
            Unleash Your Inner Explorer and Chart <br /> Your Perfect Travel
            Path
          </p>
          <button className="bg-black rounded-lg">
            {" "}
            <div className="flex items-center link-active py-4 px-5 gap-2 text-2xl">
              <HiOutlineGlobeAmericas className="text-[#FD900C]" /> Navigate Me
            </div>{" "}
          </button>
        </div>
      </section>

      <section className="w-full py-28 flex flex-col gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-quicksand font-semibold mb-2.5">
            Visual Delights of Kintamani
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Gallery Showcasing the Magnificent Landscapes and Cultural Richness
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-3 gap-4">
          <div className="col-span-2 h-40 bg-gray-400 rounded-xl">
            <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl p-5 flex items-end text-white font-light text-sm">
              {" "}
              <div className="flex items-center gap-2">
                <HiOutlineCamera className="text-base" /> Photo by Kelvin Ananta
              </div>{" "}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 h-40 bg-gray-400 rounded-xl">
            <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl p-5 flex items-end text-white font-light text-sm">
              {" "}
              <div className="flex items-center gap-2">
                <HiOutlineCamera className="text-base" /> Photo by Kelvin Ananta
              </div>{" "}
            </div>
          </div>

          <div className="col-span-4 sm:col-span-1 h-40 bg-gray-400 rounded-xl">
            <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl p-5 flex items-end text-white font-light text-sm">
              {" "}
              <div className="flex items-center gap-2">
                <HiOutlineCamera className="text-base" /> Photo by Kelvin Ananta
              </div>{" "}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 h-40 bg-gray-400 rounded-xl">
            <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl p-5 flex items-end text-white font-light text-sm">
              {" "}
              <div className="flex items-center gap-2">
                <HiOutlineCamera className="text-base" /> Photo by Kelvin Ananta
              </div>{" "}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 h-40 bg-gray-400 rounded-xl">
            <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl p-5 flex items-end text-white font-light text-sm">
              {" "}
              <div className="flex items-center gap-2">
                <HiOutlineCamera className="text-base" /> Photo by Kelvin Ananta
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <NormalLayout pageTitle="Home">{page}</NormalLayout>;
};

export default Home;
