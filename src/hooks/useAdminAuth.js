import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/api/UserAuth";
import { TOKEN_LOCAL_STORAGE, USER_DATA_LOCAL_STORAGE } from "./useUserAuth";

export const useAdminLogin = () => {
  const navigate = useNavigate();
  return useMutation(userLogin, {
    onSuccess: (data) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
      navigate(0);
      navigate("/admin");
    },
  });
};
