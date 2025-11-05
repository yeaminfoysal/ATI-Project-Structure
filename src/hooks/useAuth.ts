import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
// import { storeUserInfo } from "@/src/services/auth.service";
import { authService } from "@/src/services/auth";
import { IGenericErrorResponse } from "../types";
import { setAuthCookies } from "../utils/setAuthCookies";

export const useAuth = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      console.log("data", data);

      // storeUserInfo({ accessToken: data.access_token });
      setAuthCookies(data.access_token, data.refresh_token)
      toast.success(data.message || "Loged in successful.");
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error: IGenericErrorResponse) => {
      toast.error(error.message);
    },
  });
};