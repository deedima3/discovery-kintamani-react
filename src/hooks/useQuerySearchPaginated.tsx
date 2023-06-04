import { PaginatedQueryParams } from "@/interfaces/data.interfaces";
import { PaginatedDataWithMeta } from "@/interfaces/graphcms.interfaces";
import { MAX_QUERY_LIMIT } from "@/utils/constant";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface useQuerySearchPaginatedParams<QueryReturn> {
  search: string;
  key: string[];
  queryFn: (
    queryParams: PaginatedQueryParams
  ) => Promise<PaginatedDataWithMeta<QueryReturn>>;
  successFn?: (queryReturn: PaginatedDataWithMeta<QueryReturn>) => void;
  errorFn?: (queryError: Error) => void;
}

export function useQuerySearchPaginated<QueryReturn>({
  search,
  key,
  queryFn,
  successFn,
  errorFn,
}: useQuerySearchPaginatedParams<QueryReturn>) {
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [currentPage, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);
  const offset = useMemo(() => {
    return (currentPage - 1) * MAX_QUERY_LIMIT;
  }, [currentPage]);

  const { data, isLoading, isError } = useQuery({
    queryKey: [...key, search, hasPrevPage, hasNextPage, currentPage, maxPage],
    queryFn: () =>
      queryFn({ search: search, limit: MAX_QUERY_LIMIT, offset: offset }),
    onSuccess: (value: PaginatedDataWithMeta<QueryReturn>) => {
      if (successFn) {
        successFn(value);
      }
      setHasNextPage(value.meta.hasNextPage);
      setHasPrevPage(value.meta.hasPreviousPage);
      setMaxPage(value.meta.pageSize);
    },
    onError: (error: Error) => {
      if (errorFn) {
        errorFn(error);
      }
    },
  });

  return {
    query: { data, isLoading, isError },
    pagination: { hasNextPage, hasPrevPage, currentPage, maxPage, setPage },
  };
}