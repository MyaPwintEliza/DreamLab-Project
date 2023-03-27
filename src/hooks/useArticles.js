import { useQuery } from "@tanstack/react-query";
import { fetchAdminArticles } from "../services/api/Articles";

export const useArticlesData = () => {
  return useQuery(["articles"], fetchAdminArticles);
};
