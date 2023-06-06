import { getAllBlogLimited } from "@/api/blog/blog.service";
import Breadcrumb, {
  BreadcrumbData,
} from "@/components/Breadcrumbs/Breadcrumb";
import BlogCard from "@/components/Card/BlogCard";
import FullScreenBlogImage from "@/components/Image/FullScreenBlogImage";
import InformationImage from "@/components/Image/InformationImage";
import NormalLayout from "@/components/Layout/NormalLayout";
import UnborderedLayout from "@/components/Layout/UnborderedLayout";
import DestinationMap from "@/components/Map/DestinationMap";
import DestinationMarkdown from "@/components/Markdown/DestinationMarkdown";
import { PageSEO } from "@/components/SEO/CommonSEO";
import InformationTextBlock from "@/components/Text/InformationTextBlock";
import SearchPageTitle from "@/components/Title/SearchPageTitle";
import { Blog, InformationData } from "@/interfaces/data.interfaces";
import { GraphCMSImage } from "@/interfaces/graphcms.interfaces";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

const breadcrumbs: BreadcrumbData[] = [
  {
    route: "/information",
    label: "Information",
    isBold: true,
  },
  {
    route: `/information`,
    label: `General Information`,
    isBold: true,
  },
];

const image: GraphCMSImage = {
  image: {
    url: "/dummy/information-title.png",
    width: 3000,
    height: 4000,
  },
  alt: "Infomation Title Image",
};

const informationData = [
  {
    title: "Language Tapestry",
    text: "Amidst this linguistic diversity, visitors need not worry about communication barriers, as the friendly local residents of Kintamani are also adept at speaking English",
    src: "/dummy/tari-bali.png",
    reverse: true,
  },
  ,
  {
    title: "Kintamani's Healthcare",
    text: 'In Kintamani, the local pharmacies, known as "Apotek," and healthcare centers called "Puskesmas," are vital for the community\'s well-being. They provide essential medical assistance and dispense medications during regular business hours.',
    src: "/dummy/ambulance.png",
    subtext: "For information, call +62 (0366) 51039",
  },
  {
    title: "Goverment Authority",
    text: "Kintamani, nestled in the scenic landscapes of Bali, falls under the governance of the Indonesian government. As a part of this vibrant nation, Kintamani adheres to the laws, regulations, and policies set forth by the Indonesian authorities.",
    src: "/dummy/indonesia.png",
    subtext: "Currency : Rupiah - IDR",
    reverse: true,
  },
] as InformationData[];

const Map = dynamic(() => import("@/components/Map/oddysey"), { ssr: false });

export const getStaticProps: GetStaticProps = async () => {
  const otherBlog = await getAllBlogLimited(3);

  return {
    props: {
      otherBlog,
    },
  };
};

interface InformationApi {
  otherBlog: Blog[];
}

const Information = ({ otherBlog }: InformationApi) => {
  return (
    <>
      <PageSEO title="Information" />
      <div className="flex flex-col">
        <div className="w-full px-2 mx-auto max-w-screen-2xl">
          <Breadcrumb breadcrumbArray={breadcrumbs} />
        </div>
        <div className="w-full px-2 mx-auto max-w-screen-2xl">
          <SearchPageTitle
            title="Kintamani Revealed"
            subtitle="Essential infomation for an Unforgettable Kintamani Highlang Experience"
          />
        </div>
        <FullScreenBlogImage image={image} />
        <div className="flex flex-col w-full gap-20 px-2 mx-auto mt-16 max-w-screen-2xl">
          <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="w-full sm:w-1/2 h-[45vh] sm:h-[509px]">
              <div className="w-full h-full overflow-hidden sm:w-11/12 bg-stone-300 sm:rounded-r-2xl lg:rounded-2xl">
                <Map />
              </div>
            </div>
            <InformationTextBlock
              title="Setting Foot in Kintamani"
              text="Embark on a scenic adventure from Denpasar to Kintamani, covering 53 kilometers in just 1 hour and 37 minutes. Traverse winding roads and immerse yourself in the captivating landscapes as you journey towards the awe-inspiring beauty of Kintamani"
            />
          </div>
          {informationData.map(
            ({ title, text, subtext, src, reverse = false }, index) => {
              return (
                <div
                  className={`flex items-center justify-between w-full gap-20 flex-col md:flex-row ${
                    reverse ? "flex-row-reverse" : ""
                  }`}
                  key={index}
                >
                  <InformationImage src={src} />
                  <InformationTextBlock
                    title={title}
                    text={text}
                    subtext={subtext}
                  />
                </div>
              );
            }
          )}
        </div>
        <section
          aria-label="other-blog-post"
          className="w-full px-2 mx-auto mt-10 max-w-screen-2xl"
        >
          <h3 className="text-2xl font-bold md:text-4xl font-quicksand">
            You may also like
          </h3>
          <div className="flex flex-wrap justify-center w-full gap-2 mt-10 lg:justify-between">
            {otherBlog.map((blogData) => {
              return <BlogCard {...blogData} key={blogData.slug} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

Information.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <UnborderedLayout pageTitle="Blog">{page}</UnborderedLayout>
    </>
  );
};

export default Information;
