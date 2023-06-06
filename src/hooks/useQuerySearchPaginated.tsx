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
  limit?: number;
}

export function useQuerySearchPaginated<QueryReturn>({
  search,
  key,
  queryFn,
  successFn,
  errorFn,
  limit = MAX_QUERY_LIMIT,
}: useQuerySearchPaginatedParams<QueryReturn>) {
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [currentPage, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);
  const offset = useMemo(() => {
    return (currentPage - 1) * limit;
  }, [currentPage]);

  const { data, isLoading, isError } = useQuery({
    queryKey: [...key, search, hasPrevPage, hasNextPage, currentPage, maxPage],
    queryFn: () => queryFn({ search: search, limit: limit, offset: offset }),
    onSuccess: (value: PaginatedDataWithMeta<QueryReturn>) => {
      if (successFn) {
        successFn(value);
      }
      if (value.meta) {
        setHasNextPage(value.meta.hasNextPage);
        setHasPrevPage(value.meta.hasPreviousPage);
        setMaxPage(Math.ceil(value.aggregate.count / limit));
      }
    },
    onError: (error: Error) => {
      if (errorFn) {
        errorFn(error);
      }
      console.log(error);
    },
  });

  return {
    query: { data, isLoading, isError },
    pagination: { hasNextPage, hasPrevPage, currentPage, maxPage, setPage },
  };
}
