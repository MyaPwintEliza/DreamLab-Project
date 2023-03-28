import { useQuery } from "@tanstack/react-query";

import {
  getBooks,
} from "../services/api/BooksApi";

export const useGetBooks = (
  page,
  limit,
  search,
  status,
  authorId,
  isFree,
  sorting
) => {
  return useQuery(
    ["books", page, limit, search, status, authorId, isFree, sorting],
    () =>
      getBooks(page, limit, search, status, authorId, isFree, sorting)
  );
};

export const useGetABook = (slug) => {
  return useQuery(["book", slug], () => getABook(slug));
};




