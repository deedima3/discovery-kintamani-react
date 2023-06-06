import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateDescription } from "@/utils/format";
import { DestinationQueryData } from "@/interfaces/data.interfaces";

const DestinationCard: FC<DestinationQueryData> = ({
  title,
  slug,
  images,
  shortDescription,
}) => {
  return (
    <div className="flex flex-col w-full h-auto">
      <AspectRatio.Root
        ratio={1 / 1}
        className="mt-2 overflow-clip rounded-brand"
      >
        <Image
          src={images.image.url}
          alt={images.alt ? images.alt : "image"}
          className="object-cover w-full"
          fill
          sizes="100%"
          priority
          // width={images.image.width}
          // height={images.image.height}
          // placeholder="blur"
          // blurDataURL=""
        />
      </AspectRatio.Root>
      <h5 className="text-[28px] font-semibold font-poppins mt-5">{title}</h5>

      <p className="w-full mt-2 text-black font-poppins text-md opacity-40">
        {truncateDescription(shortDescription)}
      </p>
      <Link
        href={`/destination/${slug}`}
        className="flex font-bold text-transparent from-brand-gradient-top to-brand-gradient-down bg-gradient-to-br bg-clip-text"
      >
        <p>Read More &#8594;</p>
      </Link>
    </div>
  );
};

export default DestinationCard;
