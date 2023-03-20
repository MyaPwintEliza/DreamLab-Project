import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategory,
  fetchCategories,
  fetchCategory,
  updateCategory,
} from "../services/api/CategoryApi";

export const useCategoriesData = () => {
  return useQuery(["categories"], fetchCategories);
};

export const useCategoryData = (id) => {
  return useQuery(["category", id], () => fetchCategory(id));
};

export const useCreateCategory = () => {
  return useMutation(createCategory);
};

export const useUpdateCategory = () => {
  return useMutation(updateCategory);
};
