import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouteProps } from "react-router-dom";

import Header from "./components/menu/header.component";
import LoginPage from "./pages/login/login.page";
import HomePage from "./pages/home/home.page";
import Officer from "./pages/dashboard/officer.page";
import Register from "./pages/register/register.page";
import User from "./pages/dashboard/user.page";

import { AuthProvider } from "./providers/auth.provider";
import { PrivateRoute, ReserveRoute } from "./routes/auth.route";
import { getAccessToken } from "./services/token.service";

const isLoggedIn = () => {
  return getAccessToken()
}


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      {/* {!isLoggedIn() && <Header />} */}
        <Routes>
          <Route path="/" element={<ReserveRoute element={<HomePage />} /> }/>
          <Route path="/login" element={<ReserveRoute element={<LoginPage />} />} />
          <Route path="/register" element={<PrivateRoute element={<Register />} />} />
          <Route path="/officer" element={<PrivateRoute element={<Officer />} />} />
          <Route path="/user" element={<PrivateRoute element={<User />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
