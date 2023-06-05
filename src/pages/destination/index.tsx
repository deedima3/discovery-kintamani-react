import destinationQueries from "@/api/destination/destination.service";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DestinationCard from "@/components/Card/DestinationCard";
import NormalLayout from "@/components/Layout/NormalLayout";
import CustomPagination from "@/components/Pagination/CustomPagination";
import SearchBar from "@/components/Search/SearchBar";
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
  });

  return (
    <div className="bg-white w-full h-full text-black font-poppins">
      <div className="container mx-auto bg-white py-14">
        <Breadcrumb breadcrumbArray={breadCrumbsData} />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="font-bold text-[40px] font-quicksand">
            The Traveler's Handbook
          </h1>
          <p className="text-2xl opacity-50">
            Essential Destination Information for Adventurous Explorers
          </p>
        </div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search destination"
        />
      </div>
      <div className="grid grid-flow-col grid-cols-3 place-items-center gap-5">
        {!isLoading &&
          data?.data.map((destinationData) => (
            <DestinationCard {...destinationData} key={destinationData.slug} />
          ))}
        {!isLoading &&
          data?.data.map((destinationData) => (
            <DestinationCard {...destinationData} key={destinationData.slug} />
          ))}
        {!isLoading &&
          data?.data.map((destinationData) => (
            <DestinationCard {...destinationData} key={destinationData.slug} />
          ))}
      </div>
      <CustomPagination
        maxPage={maxPage}
        setPage={setPage}
        currentPage={currentPage}
      />
    </div>
  );
};

DestinationIndexPage.getLayout = function getLayout(page: React.ReactNode) {
  return <NormalLayout pageTitle="Destination">{page}</NormalLayout>;
};

export default DestinationIndexPage;
