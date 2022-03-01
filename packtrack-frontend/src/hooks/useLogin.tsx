import { useContext } from "react";
import { UserType } from "../types/user.type";
import AuthContext from "../providers/auth.provider";
import { storeAccessToken, storeRefreshToken } from "../services/token.service";
import { Credential } from "../types/credential";
import axiosApiInstance from "../utils/axios";

interface Coming {
  user: UserType;
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
        localStorage.setItem("user", JSON.stringify(res.data.user));
        storeAccessToken(res.data.accessToken);
        storeRefreshToken(res.data.refreshToken);
        setUser(res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { getLogin };
};

export default useLogin;
