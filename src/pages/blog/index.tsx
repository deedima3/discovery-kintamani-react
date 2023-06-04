import { getAllBlogPaginated } from "@/api/blog/blog.service";
import Breadcrumb, {
  BreadcrumbData,
} from "@/components/Breadcrumbs/Breadcrumb";
import BlogCard from "@/components/Card/BlogCard";
import NormalLayout from "@/components/Layout/NormalLayout";
import CustomPagination from "@/components/Pagination/CustomPagination";
import SearchBar from "@/components/Search/SearchBar";
import SearchPageTitle from "@/components/Title/SearchPageTitle";
import { useQuerySearchPaginated } from "@/hooks/useQuerySearchPaginated";
import { BlogQueryData } from "@/interfaces/data.interfaces";
import { PaginatedDataWithMeta } from "@/interfaces/graphcms.interfaces";
import React, { ReactElement, useState } from "react";

const Blog = () => {
  const breadcrumbs: BreadcrumbData[] = [
    {
      route: "/blog",
      label: "Blog",
      isBold: true,
    },
  ];
  const [search, setSearch] = useState<string>("");

  const {
    query: { data, isLoading, isError },
    pagination: { hasNextPage, hasPrevPage, currentPage, maxPage, setPage },
  } = useQuerySearchPaginated<BlogQueryData[]>({
    queryFn: getAllBlogPaginated,
    key: ["getAllPaginatedBlog"],
    search: search,
  });

  return (
    <section className="flex flex-col w-full gap-5">
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
      {data && !isLoading && (
        <div className="flex flex-wrap w-full gap-2">
          {data.data.map((blogData, index) => {
            return <BlogCard {...blogData} key={index} />;
          })}
        </div>
      )}
      <div className="flex justify-center w-full">
        <CustomPagination
          maxPage={maxPage}
          currentPage={currentPage}
          setPage={setPage}
        />
      </div>
    </section>
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
