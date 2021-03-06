import { useContext } from "react";
import AuthContext from "../providers/auth.provider";
import { Navigate } from "react-router-dom";

// must login
export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.user;
  return <>{isAuthenticated ? element : <Navigate to="/login" />}</>;
};

export const ReserveRoute = ({ element }: { element: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  if (!user) return <>{element}</>;
  if (user.role === "admin")
    return (
      <>
        <Navigate to="/admin" />
      </>
    );
  if (user.role === "officer")
    return (
      <>
        <Navigate to="/officer" />
      </>
    );
  if (user.role === "member")
    return (
      <>
        <Navigate to="/user" />
      </>
    );

  return <></>;
};
