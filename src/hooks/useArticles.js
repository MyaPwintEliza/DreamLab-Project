import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAdminArticles } from "../services/api/ArticlesApi";
import { createArticle } from "../services/api/ArticlesApi";

export const useArticlesData = () => {
  return useQuery(["articles"], fetchAdminArticles);
};

export const useCreateArticle = () => {
  return useMutation(createArticle);
};
