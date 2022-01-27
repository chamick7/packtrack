import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAuthToken, decodeToken, getAccessToken } from "../services/token.service";
import { User } from "../types/user.type";

interface AuthContextInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

const initialAuth = {
  user: null,
  setUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextInterface>(initialAuth);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string | null>(getAccessToken());
  const navigate = useNavigate();

  const logout = () => {
    clearAuthToken();
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    if (accessToken) {
      const decodedUser = decodeToken(accessToken!) as User;
      setUser(decodedUser);
      console.log(decodedUser);
    }
    
    setLoading(false);
  }, []);

  const initialProvider: AuthContextInterface = {
    user: user,
    setUser: setUser,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={initialProvider}>{loading ? null : children}</AuthContext.Provider>
  );
};

export default AuthContext;
