import React from 'react';

import homeImg from "../../images/homeImg.svg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormRegister from '../../components/form/form-register.component';
import Header from '../../components/menu/header.component';

const Register = () => {
  return (
    <>
    <div className="flex h-[8vh] w-full">
    <Header />
    </div>
    <div className="flex flex-col h-[90vh] md:flex-row">
    <img src={backgroundHome} className="hidden md:block fixed top-[90%] w-fit"/>
      <div className="flex flex-col justify-center items-center h-8/12 md:w-1/2 md:shadow-lg md:m-12 xl:mx-20"><FormRegister /></div>
      <div className="flex justify-center h-4/12 md:w-1/2"><img src={homeImg} className="w-8/12 p-2"/></div>
    </div>
    </>
  );
};

export default Register;
