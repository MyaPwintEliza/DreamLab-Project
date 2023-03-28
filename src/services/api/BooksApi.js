import { getToken } from "../../utils/getToken";
import { API_ENDPOINT } from "./api_endpoint";

export const getBooks= async (
  page,
  limit,
  search,
  status,
  authorId,
  isFree,
sorting
) => {
  const token = getToken();
  const isPage = page ? `page=${page}` : "";
  const isLimited = limit ? `limit=${limit}` : "";
  const isSearched = search ? `search=${search}` : "";
  const isStatus = status ? `status=${status}` : "";
  const isAuthorId = authorId ? `authorId=${authorId}` : "";
  const isFreeOrPremium = isFree ? `isFree=${isFree}` : "";
  const isSorting = sorting ? `sorting=${sorting}` : "";

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}books/admin?${isStatus}&${isPage}&${isLimited}&${isSearched}&${isFreeOrPremium}&${isSorting}&${isAuthorId}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
