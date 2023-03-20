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
    console.log(data);

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
  const name = data.get("name");
  const icon = data.get("icon");
  const formData = new FormData();
  formData.append("name", name);
  formData.append("icon", icon[0]);

  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(formData),
  };

  try {
    const response = await fetch(`${API_ENDPOINT}categories`, requestOption);
    const data = await response.json();
    console.log(`create data ${data.name}`);

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (data) => {
  const token = getToken();
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("icon", data.icon[0], data.icon[0].name);
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    body: formData,
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}categories/${data.id}`,
      requestOption
    );
    const result = response.json();
    console.log("data id :" + data.id);

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};
