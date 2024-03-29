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
    // console.log("Posted data ->" + result);

    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getOneArticle = async (slug) => {
  const token = getToken();

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
      `${API_ENDPOINT}articles/admin/${slug}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPopularArticles = async () => {
  const requestOption = {
    method: "GET",
    mode: "cors",
    redirect: "follow",
  };

  try {
    const res = await fetch(`${API_ENDPOINT}articles/get/popular`,requestOption);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
}

export const getLatestArticles = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}articles?sorting=l&limit=4`,{
      method: "GET",
      mode: "cors",
      redirect: "follow",
    })

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error
  }
}

export const updateArticle = async ({ formData, id }) => {
  const token = getToken();

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    redirect: "follow",
    body: formData,
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}articles/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log("update data ->", data);

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};
