import { getToken } from "../../utils/getToken";
import { API_ENDPOINT } from "./api_endpoint";

export const fetchAdminArticles = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}articles/admin`,
      requestOption
    );
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createArticle = async (formData) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: formData,
  };

  try {
    const res = await fetch(`${API_ENDPOINT}articles`, requestOption);
    const result = await res.json();
    console.log("Posted data ->" + result);

    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};
