import React, { FC } from "react";
import { format } from "date-fns";

interface BlogDetailProps {
  publishTime: string;
  title: string;
  subtitle: string;
}

const BlogDetailTitle: FC<BlogDetailProps> = ({
  publishTime,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center w-full mt-5 text-center max-w-screen-2xl">
      <p className="text-sm md:text-lg font-poppins">
        Published {format(new Date(publishTime), "dd MMMM yyyy")} by Admin
      </p>
      <h1 className="text-2xl font-bold md:text-4xl font-quicksand">{title}</h1>
      <h3 className="text-md md:text-xl font-poppins">{subtitle}</h3>
    </div>
  );
};

export default BlogDetailTitle;
