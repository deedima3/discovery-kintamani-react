import NormalLayout from "@/components/Layout/NormalLayout";
import BlogCardSkeleton from "@/components/Skeleton/BlogCardSkeleton";
import React, { ReactElement } from "react";

const BlogDetail = () => {
  return (
    <div className="flex flex-col mt-24">
      <BlogCardSkeleton />
    </div>
  );
};

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <NormalLayout pageTitle="Blog">{page}</NormalLayout>
    </>
  );
};

export default BlogDetail;
