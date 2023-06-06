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
      <h5 className="mb-5 text-xl font-semibold lg:text-2xl font-poppins">
        {truncateTitle(title)}
      </h5>
      <div className="overflow-clip w-[313px] h-[286px] lg:w-[413px] lg:h-[386px] rounded-brand">
        <Image
          src={image.image.url}
          alt={image.alt}
          className="object-cover w-full h-full"
          width={image.image.width}
          height={image.image.height}
          priority
          placeholder="blur"
          blurDataURL="https://placehold.co/600x400.png"
        />
      </div>
      <p className="w-full mt-2 text-sm text-black font-poppins lg:text-lg opacity-30">
        {truncateDescription(shortDescription)}
      </p>
      <Link
        href={`/blog/${slug}`}
        className="text-[18px] flex font-bold text-transparent from-brand-gradient-top to-brand-gradient-down bg-gradient-to-br bg-clip-text"
      >
        <p>Read More &#8594;</p>
      </Link>
    </div>
  );
};

export default BlogCard;
