import React from "react";

import "./login.scss";
import homeImg from "../../images/homeImg.jpg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormLogin from "../../components/form/form-login.component";

const LoginPage = () => {

  return (
    <>
    <img src={backgroundHome} className="bgfoot"/>
    <div className="container-fluid login-container">
      <div className="card shadow-sm card-form"><FormLogin /></div>
      <img src={homeImg} className="img-fluid homeImg" />
    </div>
    </>
  );
};

export default LoginPage;
