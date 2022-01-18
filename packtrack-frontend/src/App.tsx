import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouteProps } from "react-router-dom";

import LoginPage from "./pages/login/login.page";
import HomePage from "./pages/home/home.page";
import Header from "./components/menu/header.component";

import { AuthProvider } from "./providers/auth.provider";
import { PrivateRoute, ReserveRoute } from "./routes/auth.route";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Header/>
        <Routes>
          <Route path="/" element={<ReserveRoute element={<LoginPage />} />}></Route>
          <Route path="/login" element={<ReserveRoute element={<LoginPage />} />} />
          <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
