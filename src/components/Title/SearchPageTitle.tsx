import React, { FC } from "react";

interface SearchPageTitleProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const SearchPageTitle: FC<SearchPageTitleProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-extrabold font-quicksand">{title}</h1>
        <h3 className="text-2xl font-normal text-black font-poppins opacity-30">
          {subtitle}
        </h3>
      </div>
      <>{children}</>
    </div>
  );
};

export default SearchPageTitle;
