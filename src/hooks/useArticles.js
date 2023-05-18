import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAdminArticles, getLatestArticles, getOneArticle, getPopularArticles } from "../services/api/ArticlesApi";
import { createArticle, updateArticle } from "../services/api/ArticlesApi";

export const useArticlesData = () => {
  return useQuery(["articles"], fetchAdminArticles);
};

export const useGetOneArticle = (slug) => {
  return useQuery(["article", slug], () => getOneArticle(slug));
};

export const useCreateArticle = () => {
  return useMutation(createArticle);
};

export const useUpdateArticle = () => {
  return useMutation(updateArticle);
};

export const useGetPopularArticles = () => {
  return useQuery(["populararticles"], getPopularArticles);
};

export const useGetLatestArticles = () => {
  return useQuery(["latestarticles"], getLatestArticles);
};