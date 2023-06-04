import { Blog, BlogQueryData } from "@/interfaces/data.interfaces";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateDescription } from "@/utils/format";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const BlogCard: FC<BlogQueryData> = ({
  title,
  slug,
  image,
  shortDescription,
}) => {
  return (
    <div className="flex flex-col w-[415px] h-[630px]">
      <h5 className="text-2xl font-semibold font-poppins">{title}</h5>
      <AspectRatio.Root
        ratio={1 / 1}
        className="mt-2 overflow-clip rounded-brand"
      >
        <Image
          src={image.image.url}
          alt={image.alt}
          className="object-cover w-full"
          width={image.image.width}
          height={image.image.height}
        />
      </AspectRatio.Root>
      <p className="w-full mt-2 text-black font-poppins text-md opacity-30">
        {truncateDescription(shortDescription)}
      </p>
      <Link
        href={`/blog/${slug}`}
        className="flex font-bold text-transparent from-brand-gradient-top to-brand-gradient-down bg-gradient-to-br bg-clip-text"
      >
        <p>Read Article -&gt;</p>
      </Link>
    </div>
  );
};

export default BlogCard;
