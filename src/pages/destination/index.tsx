import destinationQueries from "@/api/destination/destination.service";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DestinationCard from "@/components/Card/DestinationCard";
import NormalLayout from "@/components/Layout/NormalLayout";
import CustomPagination from "@/components/Pagination/CustomPagination";
import { PageSEO } from "@/components/SEO/CommonSEO";
import SearchBar from "@/components/Search/SearchBar";
import BlogCardSkeleton from "@/components/Skeleton/BlogCardSkeleton";
import { useQuerySearchPaginated } from "@/hooks/useQuerySearchPaginated";
import { DestinationQueryData } from "@/interfaces/data.interfaces";
import React from "react";

const breadCrumbsData = [
  {
    route: "/",
    label: "Discover",
    isBold: false,
  },
  {
    route: "/destination",
    label: "Destination",
    isBold: true,
  },
];

const DestinationIndexPage = () => {
  const [search, setSearch] = React.useState("");
  const {
    query: { data, isLoading },
    pagination: { currentPage, maxPage, setPage },
  } = useQuerySearchPaginated<DestinationQueryData[]>({
    queryFn: destinationQueries.getAllDestinationPaginated,
    key: ["getAllPaginatedDestination"],
    search: search,
    limit: 9,
  });

  return (
    <div className="w-full h-full text-black bg-white font-poppins">
      <div className="container mx-auto bg-white py-6 md:py-10 lg:py-14">
        <Breadcrumb breadcrumbArray={breadCrumbsData} />
      </div>
      <div className="flex flex-col  md:flex-row md:items-center md:justify-between">
        <div className="mb-2 md:mb-0">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-[40px] font-quicksand">
            The Traveler`s Handbook
          </h1>
          <p className="text-base lg:text-2xl opacity-50">
            Essential Destination Information for Adventurous Explorers
          </p>
        </div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search destination"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center md:gap-5 md:gap-y-12 gap-y-4 mt-10 lg:mt-[100px] mb-[50px]">
        {isLoading ? (
          <>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </>
        ) : (
          data?.data.map((destinationData) => (
            <DestinationCard {...destinationData} key={destinationData.slug} />
          ))
        )}
      </div>
      <div className="mb-[110px] w-full flex flex-row justify-center">
        {data && (
          <div className="w-fit">
            <CustomPagination
              maxPage={maxPage}
              setPage={setPage}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

DestinationIndexPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <PageSEO title="Destinations | Discover a whole new travel destinations" />
      <NormalLayout pageTitle="Destination">{page}</NormalLayout>
    </>
  );
};

export default DestinationIndexPage;
