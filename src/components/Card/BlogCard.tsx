import { Blog, BlogQueryData } from "@/interfaces/data.interfaces";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateDescription, truncateTitle } from "@/utils/format";

const BlogCard: FC<BlogQueryData> = ({
  title,
  slug,
  image,
  shortDescription,
}) => {
  return (
    <div className="flex flex-col w-[315px] h-[530px] lg:w-[415px] lg:h-[630px]">
      <h5 className="text-xl font-semibold lg:text-2xl font-poppins mb-5">
        {truncateTitle(title)}
      </h5>
      <div className="overflow-clip w-[313px] h-[286px] lg:w-[413px] lg:h-[386px] rounded-brand">
        <Image
          src={image.image.url}
          alt={image.alt}
          className="object-cover w-full h-full"
          width={image.image.width}
          height={image.image.height}
        />
      </div>
      <p className="w-full mt-2 text-sm text-black font-poppins lg:text-lg opacity-30">
        {truncateDescription(shortDescription)}
      </p>
      <Link
        href={`/blog/${slug}`}
        className="flex text-sm font-bold text-transparent from-brand-gradient-top to-brand-gradient-down bg-gradient-to-br bg-clip-text lg:text-lg"
      >
        <p>Read Article -&gt;</p>
      </Link>
    </div>
  );
};

export default BlogCard;
