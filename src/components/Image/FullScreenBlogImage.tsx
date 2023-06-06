import { GraphCMSImage } from "@/interfaces/graphcms.interfaces";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";
import Image from "next/image";

interface FullScreenBlogImageProps {
  image: GraphCMSImage;
}

const FullScreenBlogImage = ({
  image: {
    image: { height, width, url },
    alt,
  },
}: FullScreenBlogImageProps) => {
  return (
    <div className="w-full h-[350px] lg:h-[752px]">
      <Image
        className="object-cover w-full h-full"
        width={width}
        height={height}
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default FullScreenBlogImage;
