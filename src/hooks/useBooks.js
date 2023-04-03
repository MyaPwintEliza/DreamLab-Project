import { useMutation, useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

import {
  getBooks,
  getOneBook,
  createBook,
  updateBook,
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

export const useGetOneBook = (slug) => {
  return useQuery(["book", slug], () => getOneBook(slug));
};

export const useCreateBook = () => {
  return useMutation(createBook);
};

export const useUpdateBook = () => {
  return useMutation(updateBook);
};



