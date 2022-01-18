import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouteProps } from "react-router-dom";

import LoginPage from "./pages/login/login.page";
import HomePage from "./pages/home/home.page";
import { AuthProvider } from "./providers/auth.provider";
import { PrivateRoute, ReserveRoute } from "./routes/auth.route";

interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  path?: string;
}

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent }: any) => {
//   const isAuthenticated = localStorage.getItem("accessToken");
//   if (isAuthenticated) {
//     return <RouteComponent />;
//   }

//   return <Navigate to="/" />;
// };

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/login" element={<ReserveRoute element={<LoginPage />} />} />
          <Route path="/dashboard" element={<PrivateRoute element={<HomePage />} />} />
          {/* <Route path="home" element={<PrivateRoute component={HomePage} />}></Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
