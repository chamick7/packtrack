import React from "react";
import { BrowserRouter ,Routes, Route , Navigate , RouteProps  } from "react-router-dom";

import LoginPage from "./pages/login/login.page";
import HomePage from "./pages/home/home.page";


interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  path?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: RouteComponent}: any) => {
  const isAuthenticated = localStorage.getItem("accessToken")
  if (isAuthenticated) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
};

const App: React.FC = ()  => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="home" element={<PrivateRoute component={HomePage} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
