import { useContext } from "react";
import { UserType } from "../types/user.type";
import AuthContext from "../providers/auth.provider";
import { storeAccessToken, storeRefreshToken } from "../services/token.service";
import { Credential } from "../types/credential";
import axiosApiInstance from "../utils/axios";

import { decodeToken } from "../services/token.service";

interface Coming {
  accessToken: string;
  refreshToken: string;
}

const useLogin = () => {
  const { setUser } = useContext(AuthContext);

  const getLogin = async (credential: Credential) => {
    try {
      let res = await axiosApiInstance.post<Coming>(
        "/api/auth/login",
        credential
      );
      if (res.status === 200 && res.data) {
        storeAccessToken(res.data.accessToken);

        const result = await axiosApiInstance.get<UserType>("api/user/me");

        localStorage.setItem("user", JSON.stringify(result.data));
        storeRefreshToken(res.data.refreshToken);
        setUser(result.data);
      }
    } catch (err) {
      return null;
    }
  };

  return { getLogin };
};

export default useLogin;
