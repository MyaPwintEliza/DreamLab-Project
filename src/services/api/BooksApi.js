import { getToken } from "../../utils/getToken";
import { API_ENDPOINT } from "./api_endpoint";

export const getBooks = async (
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

export const getOneBook = async (slug) => {
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
      `${API_ENDPOINT}books/admin/${slug}`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPopularBooks = async () => {
  const requestOption = {
    method: "GET",
    mode: "cors",
    redirect: "follow",
  };

  try {
    const res = await fetch(`${API_ENDPOINT}books/get/popular`,requestOption);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getLatestBooks = async () => {
  
  try {
    const res = await fetch(`${API_ENDPOINT}books?sorting=l&limit=4`, {
      method: "GET",
      mode: "cors",
      redirect: "follow"
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message);
    }
    
    return data;
  } catch (error) {
    throw error;
  }
}
 

export const createBook = async (formData) => {
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
    const res = await fetch(`${API_ENDPOINT}books`, requestOption);
    const result = await res.json();
    console.log("Book created ->" + result);

    if (!res.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async ({ formData, id }) => {
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
    const response = await fetch(`${API_ENDPOINT}books/${id}`, requestOptions);
    const data = await response.json();
    console.log("update book data ->", data);

    if (!response.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    throw error;
  }
};

// export const updateBook = async (data) => {
//   const {
//     id,
//     title,
//     defaultTitle,
//     readingTime,
//     shortDesc,
//     page,
//     isFree,
//     status,
//     categories,
//     bookAuthors,
//   } = data;

//   const token = getToken();
//   const formData = new FormData();

//   const image =
//     typeof data?.mainImage === "string" ? data.mainImage : data.mainImage[0];

//   if (title !== defaultTitle) {
//     formData.append("title", title);
//   }
//   formData.append("readingTime", readingTime);
//   formData.append("shortDesc", shortDesc);
//   formData.append("page", page);
//   formData.append("isFree", isFree);
//   formData.append("status", status);
//   formData.append("mainImage", image);
//   formData.append("categories", JSON.stringify(categories));
//   formData.append("bookAuthors", JSON.stringify(bookAuthors));

//   const requestOptions = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     mode: "cors",
//     method: "PATCH",
//     redirect: "follow",
//     body: formData,
//   };

//   try {
//     const response = await fetch(`${API_ENDPOINT}books/${id}`, requestOptions);
//     const data = await response.json();

//     if (!response.ok) throw new Error(data.message);

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// Chapters

export const addChapter = async (data) => {
  const token = getToken();
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
    const response = await fetch(`${API_ENDPOINT}books/chapter`, requestOption);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const editChapter = async (data) => {
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
      `${API_ENDPOINT}books/chapter/${data.id}`,
      requestOption
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteChapter = async (id) => {
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
      `${API_ENDPOINT}books/chapter/${id}`,
      requestOption
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
};
