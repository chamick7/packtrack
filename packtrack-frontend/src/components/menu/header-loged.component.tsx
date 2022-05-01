import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';
import { BsBoxArrowRight } from "react-icons/bs"

import AuthContext from "../../providers/auth.provider";

import logoPackTrack from "../../images/logoPackTrack.svg";
import userPicture from "../../images/user-picture.svg";
import profileIMG from "../../images/profileIMG/profileIMG";

const GetUser = () => {
  const authContext = useContext(AuthContext);
  // const isAuthenticated = authContext.user;
  const firstName = authContext.user?.firstName;
  const userId = authContext.user?.id;

  const accept = authContext.logout

  const logOut = () =>{
    confirmDialog({
      message: 'คุณต้องการออกจากระบบหรือไม่ ?',
      header: 'ออกจากระบบ',
      accept
    })
  }

  return (
    <>
    <div className="flex items-center">
      <div className="flex flex-row justify-between items-center font-[kanit] px-2 border-r-4 border-r-[#8CD8F9] mr-6">
        <div className="flex flex-col">
          <div className="text-2xl text-[#8CD8F9]">{firstName}</div>
          <div className="text-sm">รหัสผู้ใช้งาน {userId}</div>
        </div>
        <img src={userPicture} className="h-12" />
      </div>
      <BsBoxArrowRight className="text-3xl text-[#D24337]" onClick={logOut}/>
    </div>
    </>
  );
};

const HeaderLoged = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-full w-screen px-10 shadow-sm">
      <Link to="/" className="flex flex-row">
        <img src={logoPackTrack} className="h-12 py-0.5" />
        <div className="hidden sm:flex">
          <span className="flex no-underline items-center justify-center font-[kanit] text-main text-xl">
            Pack
          </span>
          <span className="flex no-underline items-center justify-center font-[kanit] text-black text-xl font-bold">
            Track
          </span>
        </div>
      </Link>
      <GetUser />
    </nav>
  );
};

export default HeaderLoged;
