import { getToken } from "../../utils/getToken";
import { API_ENDPOINT } from "./api_endpoint";

export const fetchCategories = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };

  try {
    const response = await fetch(`${API_ENDPOINT}categories`, requestOption);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchCategory = async (id) => {
  const token = getToken();
  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `${API_ENDPOINT}subscriptions/${id}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (data) => {
  const token = getToken();

  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: data,
  };

  try {
    const response = await fetch(`${API_ENDPOINT}categories`, requestOption);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (formData) => {
  const token = getToken();
  const id = formData.get("id");
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    body: formData,
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}categories/${id}`,
      requestOption
    );
    const result = response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}categories/${id}`,
      requestOption
    );
    const result = response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};
