import React, { FC } from "react";
import Image from "next/image";

interface InformationImageProps {
  src: string;
}

const InformationImage: FC<InformationImageProps> = ({ src }) => {
  return (
    <div className="sm:w-1/2 h-[45vh] sm:h-[509px] overflow-clip rounded-brand">
      <Image
        src={src}
        alt="Image"
        className="object-cover w-full h-full"
        width={500}
        height={500}
      />
    </div>
  );
};

export default InformationImage;
