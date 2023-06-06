import { getAllBlogPaginated } from "@/api/blog/blog.service";
import Breadcrumb, {
  BreadcrumbData,
} from "@/components/Breadcrumbs/Breadcrumb";
import BlogCard from "@/components/Card/BlogCard";
import NormalLayout from "@/components/Layout/NormalLayout";
import CustomPagination from "@/components/Pagination/CustomPagination";
import { PageSEO } from "@/components/SEO/CommonSEO";
import SearchBar from "@/components/Search/SearchBar";
import BlogCardSkeleton from "@/components/Skeleton/BlogCardSkeleton";
import SearchPageTitle from "@/components/Title/SearchPageTitle";
import { useQuerySearchPaginated } from "@/hooks/useQuerySearchPaginated";
import { BlogQueryData } from "@/interfaces/data.interfaces";
import React, { ReactElement, useState } from "react";

const breadcrumbs: BreadcrumbData[] = [
  {
    route: "/blog",
    label: "Blog",
    isBold: false,
  },
  {
    route: "/blog",
    label: "Article",
    isBold: true,
  },
];

const Blog = () => {
  const [search, setSearch] = useState<string>("");

  const {
    query: { data, isLoading },
    pagination: { currentPage, maxPage, setPage },
  } = useQuerySearchPaginated<BlogQueryData[]>({
    queryFn: getAllBlogPaginated,
    key: ["getAllPaginatedBlog"],
    search: search,
    limit: 6,
  });

  return (
    <>
      <PageSEO title="Blogs | Find some awesome articles that covers about Kintamani" />
      <section className="flex flex-col w-full gap-[50px] mt-[50px]">
        <Breadcrumb breadcrumbArray={breadcrumbs} />
        <SearchPageTitle
          title={"The Adventurer`s Guide"}
          subtitle={"A Blog of Boundless Travel and Tourism Experience"}
        >
          <SearchBar
            search={search}
            setSearch={setSearch}
            placeholder={"Search Blog"}
          />
        </SearchPageTitle>
        <div className="flex flex-wrap justify-center w-full lg:justify-between">
          {isLoading ? (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          ) : (
            data &&
            data.data.map((blogData) => {
              return <BlogCard {...blogData} key={blogData.slug} />;
            })
          )}
        </div>
        <div className="flex justify-center w-full text-black">
          <CustomPagination
            maxPage={maxPage}
            currentPage={currentPage}
            setPage={setPage}
          />
        </div>
      </section>
    </>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <NormalLayout pageTitle="Blog">{page}</NormalLayout>
    </>
  );
};

export default Blog;
