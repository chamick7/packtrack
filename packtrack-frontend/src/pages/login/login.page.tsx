import React from "react";

import "./login.scss";
import homeImg from "../../images/homeImg.svg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormLogin from "../../components/form/form-login.component";
import Header from "../../components/menu/header.component";

const LoginPage = () => {

  return (
    <>
    <div className="flex h-[8vh] w-full">
    <Header />
    </div>
    <img src={backgroundHome} className="hidden w-full top-[90%] md:fixed md:block"/>
    <div className="container flex flex-col justify-around h-full min-h-[90vh] w-screen items-center md:flex-row md:grid md:grid-cols-2 md:px-4 lg:px-20">
      <div className="md:shadow-lg md:px-5"><FormLogin /></div>
      <div className="flex justify-center w-100 h-auto "><img src={homeImg} className="w-[500px]"/></div>
    </div>
    </>
  );
};

export default LoginPage;
