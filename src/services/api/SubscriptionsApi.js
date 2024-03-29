import { API_ENDPOINT } from "./api_endpoint";
import { getToken } from "../../utils/getToken";
import { date } from "yup";

//------- Get all subscriptions start -------//

export const fetchSubscriptions = async () => {
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
      `${API_ENDPOINT}subscriptions`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

// fetch user scription
export const fetchUserScription = async () => {
  var requestOptions = {
    mode: "cors",
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `${API_ENDPOINT}subscriptions`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

//------- Get all subscriptions end -------//

//------- Get single subscriptions start -------//

export const fetchSubscription = async (id) => {
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

//------- Get single subscriptions end -------//

//------- Create subscriptions start -------//

export const createSubscription = async (data) => {
  const token = getToken();
  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}subscriptions`,
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

//------- Create subscriptions end -------//

//------- Remove plan start -------//

export const removePlan = async (planId) => {
  const token = getToken();
  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "DELETE",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `${API_ENDPOINT}subscriptions/plan/${planId}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

//------- Remove plan end -------//

//------- Update subscription start -------//

export const updateSubscription = async (data) => {
  const token = getToken();
  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    body: JSON.stringify(data),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}subscriptions/${data.id}`,
      requestOptions
    );
    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};

//------- Update subscription end -------//

//------- Delete subscription start -------//

export const deleteSubscription = async (id) => {
  const token = getToken();

  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "DELETE",
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

//------- Delete subscription end -------//

//------- User subscribe start -------//

export const userSubscribe = async (formData) => {
  const token = getToken();
  // for (const [key, value] of formData.entries()) {
  //   console.log(`${key}: ${value}`);
  // }
  const startDate = formatDate();
  const id = formData.get("id");
  const image = formData.get("bankSlip");

  // console.log(startDate);

  const newFormData = new FormData();
  newFormData.append("subscriptionId", id);
  newFormData.append("paymentImage", image);
  newFormData.append("startDate", startDate);

  // console.log(typeof id);
  // const data = {
  //   subscriptionId: id,
  //   paymentImage: image,
  //   startDate: startDate,
  // };

  // console.log(typeof data.subscriptionId, data.startDate.length);

  var requestOptions = {
    headers: {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: newFormData,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}users/subscribe/subscription`,
      requestOptions
    );
    const data = await response.json();
    console.log(`data : ${data}`);

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

//------- User subscribe end -------//

export const fetchSubscribers = async (status, page, limit) => {
  const token = getToken();
  const filterLimit = limit ? "limit=" + limit : "";
  const filterPage = page ? `page=${page}` : "";
  const filterStatus = status ? `status=${status}` : "";

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
      `${API_ENDPOINT}users/subscription/request?${filterStatus}&${filterPage}&${filterLimit}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const userSubscriptionUpdate = async (data) => {
  const token = getToken();
  var requestOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${API_ENDPOINT}users/subscribe/subscription/${data.id}`,
      requestOptions
    );
    const result = await response.json();

    if (!response.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};

export const formatDate = () => {
  const dateObj = new Date();
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getUTCDate().toString().padStart(2, "0");
  const year = dateObj.getUTCFullYear();
  const startDate = `${year}-${month}-${day}`;
  return startDate;
};
