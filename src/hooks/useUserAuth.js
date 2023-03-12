import { useMutation } from "@tanstack/react-query";
import { userLogin, userRegister } from "../services/api/UserAuth";

export const TOKEN_LOCAL_STORAGE = "dreamlab-token";
export const USER_DATA_LOCAL_STORAGE = "dreamlab-user";

export const useUserRegister = () => {
  return useMutation(userRegister, {
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
    },
  });
};

export const useUserLogin = () => {
  return useMutation(userLogin, {
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
    },
  });
};
