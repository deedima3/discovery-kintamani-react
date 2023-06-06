import { getFirstBlogs } from "@/api/blog/blog.service";
import destinationQueries from "@/api/destination/destination.service";
import DestinationDetailBadge from "@/components/Badge/DestinationDetailBadge";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NormalLayout from "@/components/Layout/NormalLayout";
import DestinationMap from "@/components/Map/DestinationMap";
import DestinationMarkdown from "@/components/Markdown/DestinationMarkdown";
import { PageSEO } from "@/components/SEO/CommonSEO";
import FeaturedBlogsSidebar from "@/components/Sidebar/FeaturedBlogsSidebar";
import {
  DestinationData,
  FeaturedBlogData,
} from "@/interfaces/data.interfaces";
import { CATEGORY_LINEAR_COLOR, CATEGORY_VALUE } from "@/utils/constant";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useQuery } from "@tanstack/react-query";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { FiClock } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";
import Sticky from "react-stickynode";

interface PageProps {
  data: DestinationData;
  slug: string;
  blogs: FeaturedBlogData[];
}

const Slug = ({ data, slug, blogs }: PageProps) => {
  const breadCrumbsData = [
    {
      route: "/",
      label: "Discover",
      isBold: false,
    },
    {
      route: "/destination",
      label: "Destination",
      isBold: false,
    },
    {
      route: "/destination/" + slug,
      label: "Place Information",
      isBold: true,
    },
  ];

  const Map = dynamic(() => import("@/components/Map/DestinationMap"), {
    ssr: false,
  });
  return (
    <>
      <PageSEO title={data.title + " | Kintamani Discovery"} />
      <div className="container mx-auto text-black">
        <div className="bg-white py-6 md:py-10 lg:py-14">
          <Breadcrumb breadcrumbArray={breadCrumbsData} />
        </div>
        <div className="w-full relative">
          <AspectRatio.Root ratio={20 / 9} className="overflow-hidden grid">
            <Image
              alt={data.images.alt ? data.images.alt : "image"}
              src={data.images.image.url}
              placeholder="blur"
              blurDataURL="https://placehold.co/600x400.png"
              // width={data.images.image.width}
              // height={data.images.image.height}
              priority
              sizes="100%"
              className="object-cover w-full rounded-brand"
              fill
            />
          </AspectRatio.Root>
        </div>
        <div>
          <div>
            <h1 className="font-quicksand font-bold md:text-4xl text-3xl lg:text-[44px] mt-[50px] mb-5">
              {data.title}
            </h1>
            <div className="flex flex-row space-x-5 mb-9 md:mb-[50px]">
              <DestinationDetailBadge
                extendedClass="bg-black w-fit flex items-center justify-center"
                iconSize={24}
                Icon={
                  <IconContext.Provider
                    value={{ size: "24px", color: "white" }}
                  >
                    <FiClock />
                  </IconContext.Provider>
                }
              >
                {data.alwaysOpen
                  ? "Open 24 Hours"
                  : "Open from " + data.openTime + " until " + data.closeTime}
              </DestinationDetailBadge>
              <DestinationDetailBadge
                extendedClass={
                  "w-fit flex items-center justify-center bg-linear-" +
                  CATEGORY_LINEAR_COLOR[data.category]
                }
                iconSize={24}
                Icon={
                  <IconContext.Provider
                    value={{ size: "24px", color: "white" }}
                  >
                    <FiClock />
                  </IconContext.Provider>
                }
              >
                {CATEGORY_VALUE[data.category]}
              </DestinationDetailBadge>
            </div>
          </div>
          <div className="mb-[50px] grid md:grid-cols-5 gap-[8rem] h-fit">
            <div className="w-full col-span-3">
              <DestinationMarkdown content={data.description.markdown} />
            </div>
            <div className="h-full md:block hidden" id="side-content">
              <Sticky bottomBoundary={"#side-content"} top={32}>
                <FeaturedBlogsSidebar blogs={blogs} />
              </Sticky>
            </div>
          </div>
          <div>
            <h5 className="text-xl md:text-2xl lg:text-[2rem] font-bold font-quicksand">
              Explore Map
            </h5>
            <p className="font-poppins text-base md:text-lg lg:text-2xl opacity-50 sm:mt-2 md:mt-4 mb-8 md:mb-[50px]">
              Exploring Tourism Destinations with Map in Hand
            </p>
            <Map
              href={
                "http://www.google.com/maps/place/" +
                data.coordinate.latitude +
                "," +
                data.coordinate.longitude
              }
              long={data.coordinate.longitude}
              lat={data.coordinate.latitude}
            />
            <div className="mb-[100px] mt-8">
              <h5 className="font-poppins text-xl md:text-2xl mb-5">
                Location
              </h5>
              <div className="flex flex-row space-x-2 items-center font-poppins">
                <div className="text-white bg-black w-fit h-auto rounded-full p-[0.3rem]">
                  <HiOutlineMap size={20} />
                </div>
                <p className="text-base md:text-xl m-0 block">
                  {data.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Slug.getLayout = function getLayout(page: React.ReactNode) {
  return <NormalLayout pageTitle="slug">{page}</NormalLayout>;
};
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { query } = context;
//   const destinations = await destinationQueries.getAllDestinationsSlug();
//   // console.log(destinations.data);
//   // const {data, isLoading, isError} = useQuery({
//   //   queryKey: []
//   // })

//   return {
//     props: {
//       slug: query.slug,
//     },
//   };
// }

export async function getStaticPaths() {
  const { data } = await destinationQueries.getAllDestinationsSlug();
  const paths = data.map(({ slug }) => ({ params: { slug: slug } }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { blogs } = await getFirstBlogs(5);
  const res = await destinationQueries.getDestinationBySlug(params?.slug);
  return {
    props: {
      data: res.data,
      slug: params?.slug,
      blogs: blogs,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
export default Slug;
