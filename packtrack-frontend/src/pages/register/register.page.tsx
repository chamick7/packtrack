import React from 'react';

import "./register.page.tsx"
import homeImg from "../../images/homeImg.svg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormRegister from '../../components/form/form-register.component';
import Header from '../../components/menu/header.component';

const Register = () => {
  return (
    <>
    <Header />
    <img src={backgroundHome} className="bgfoot"/>
    <div className="container-fluid px-5 login-container">
      <div className="card col mx-5 shadow-sm card-form"><FormRegister /></div>
      <div className="col d-flex justify-content-center homeImg"><img src={homeImg} style={{width:"40vw"}}/></div>
    </div>
    </>
  );
};

export default Register;
