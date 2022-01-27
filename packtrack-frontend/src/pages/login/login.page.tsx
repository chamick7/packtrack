import React from "react";

import "./login.scss";
import homeImg from "../../images/homeImg.jpg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormLogin from "../../components/form/form-login.component";
import Header from "../../components/menu/header.component";
import { Container } from "react-bootstrap";

const LoginPage = () => {

  return (
    <>
    <Header />
    <img src={backgroundHome} className="bgfoot"/>
    <div className="container-fluid px-5 login-container">
      <div className="card col mx-5 card-form"><FormLogin /></div>
      <div className="col d-flex justify-content-center homeImg"><img src={homeImg} className="image"/></div>
    </div>
    </>
  );
};

export default LoginPage;
