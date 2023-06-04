import { Pagination } from "react-headless-pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const CustomPagination = ({
  maxPage,
  currentPage,
  setPage,
}: PaginationProps) => {
  return (
    <Pagination
      currentPage={currentPage - 1}
      setCurrentPage={(value) => setPage(value + 1)}
      className="flex gap-10"
      truncableText="..."
      truncableClassName=""
      totalPages={maxPage}
      edgePageCount={2}
      middlePagesSiblingCount={2}
    >
      <Pagination.PrevButton
        className=""
        onClick={() => setPage(currentPage - 2)}
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
      </Pagination.PrevButton>
      <nav className="flex justify-center flex-grow">
        <ul className="flex items-center gap-5">
          <Pagination.PageButton
            activeClassName="font-bold"
            inactiveClassName=""
            className="cursor-pointer"
          />
        </ul>
      </nav>
      <Pagination.NextButton
        className=""
        onClick={() => setPage(currentPage + 1)}
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
      </Pagination.NextButton>
    </Pagination>
  );
};

export default CustomPagination;
