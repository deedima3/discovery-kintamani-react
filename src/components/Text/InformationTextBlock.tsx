import React, { FC } from "react";

interface InformationTextBlock {
  title: string;
  text: string;
  subtext?: string;
}

const InformationTextBlock: FC<InformationTextBlock> = ({
  title,
  text,
  subtext,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 px-5 md:w-1/2">
      <h3 className="text-2xl font-bold text-black md:text-4xl font-quicksand">
        {title}
      </h3>
      <p className="mt-2 text-xl text-black md:text-2xl font-poppins opacity-30">
        {text}
      </p>
      {subtext && (
        <p className="mt-5 text-lg md:text-2xl font-poppins">{subtext}</p>
      )}
    </div>
  );
};

export default InformationTextBlock;
