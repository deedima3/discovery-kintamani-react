import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col w-[415px] h-[630px]">
      <div className="w-4/5 h-8 mt-2 bg-gray-200 animate-pulse"></div>
      <div className="w-2/5 h-8 mt-2 bg-gray-200 animate-pulse"></div>
      <AspectRatio.Root
        ratio={1 / 1}
        className="mt-2 overflow-clip rounded-brand"
      >
        <div className="w-full h-full bg-gray-200 rounded animate-pulse"></div>
      </AspectRatio.Root>
      <div className="h-0 mt-2 bg-gray-200 animate-pulse rounded-brand aspect-w-1 aspect-h-1"></div>
      <div className="w-4/5 h-4 mt-2 bg-gray-200 animate-pulse"></div>
      <div className="w-3/5 h-4 mt-2 bg-gray-200 animate-pulse"></div>
      <div className="w-4/6 h-4 mt-2 bg-gray-200 animate-pulse"></div>
      <div className="w-1/6 h-4 mt-8 bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export default BlogCardSkeleton;
