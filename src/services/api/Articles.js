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
    console.log(`fetch data : ${data.items}`);

    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};
