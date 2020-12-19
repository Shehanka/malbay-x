import { useMemo } from "react";
import { usePagination } from "./usePagination";

// eslint-disable-next-line no-unused-vars
export type FilterRowsFn<T> = (rows: T[], searchText: string) => T[];

/**
 *
 * @param searchText
 * @param rows
 * @param filterFn function to filter rows by search value, should be memoized
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useFilterRows<T>(
  searchText = "",
  rows: T[],
  filterFn: FilterRowsFn<T>
) {
  const filteredData = useMemo(() => filterFn(rows, searchText.toLowerCase()), [
    filterFn,
    rows,
    searchText,
  ]);
  const { pageData, tableFooterProps } = usePagination(
    filteredData,
    3,
    searchText
  );
  const noMatchingItems = pageData.length === 0 && searchText !== "";
  return { pageData, tableFooterProps, noMatchingItems };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useFilterRowsSessions<T>(
  searchText = "",
  sortBy: string,
  rows: T[],
  filterFn: FilterRowsFn<T>
) {
  const filteredData = useMemo(() => filterFn(rows, searchText.toLowerCase()), [
    filterFn,
    rows,
    searchText,
    sortBy,
  ]);
  const { pageData, tableFooterProps } = usePagination(
    filteredData,
    3,
    searchText
  );
  const noMatchingItems = pageData.length === 0 && searchText !== "";
  return { pageData, tableFooterProps, noMatchingItems };
}
