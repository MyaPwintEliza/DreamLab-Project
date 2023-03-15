import { API_ENDPOINT } from "./api_endpoint";
import { getToken } from "../../utils/getToken";

export const fetchPlan = async () => {
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
    const response = await fetch(`${API_ENDPOINT}plans`, requestOption);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createPlan = async (data) => {
  const token = getToken();
  console.log("create api called. ", data);
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API_ENDPOINT}plans`, requestOption);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePlan = async (data) => {
  console.log("data: ", data);
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}plans/${data.code}`,
      requestOption
    );
    const result = response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};

export const deletePlan = async (code) => {
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
    const response = await fetch(`${API_ENDPOINT}plans/${code}`, requestOption);
    const result = response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};
