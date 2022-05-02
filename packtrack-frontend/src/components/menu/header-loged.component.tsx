import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { confirmDialog } from "primereact/confirmdialog";
import { BsBoxArrowRight } from "react-icons/bs";

import AuthContext from "../../providers/auth.provider";

import logoPackTrack from "../../images/logoPackTrack.svg";
import userPicture from "../../images/user-picture.svg";

import profile1 from "../../images/profileIMG/profile1.svg";
import profile2 from "../../images/profileIMG/profile2.svg";
import profile3 from "../../images/profileIMG/profile3.svg";
import profile4 from "../../images/profileIMG/profile4.svg";
import profile5 from "../../images/profileIMG/profile5.svg";
import profile6 from "../../images/profileIMG/profile6.svg";
import profile7 from "../../images/profileIMG/profile7.svg";

const GetUser = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const accept = authContext.logout;

  const logOut = () => {
    confirmDialog({
      message: "คุณต้องการออกจากระบบหรือไม่ ?",
      header: "ออกจากระบบ",
      accept,
    });
  };

  const profileImage = () => {
    if (user?.profile.photo == 1) {
      return profile1;
    }
    if (user?.profile.photo == 2) {
      return profile2;
    }
    if (user?.profile.photo == 3) {
      return profile3;
    }
    if (user?.profile.photo == 4) {
      return profile4;
    }
    if (user?.profile.photo == 5) {
      return profile5;
    }
    if (user?.profile.photo == 6) {
      return profile6;
    }
    if (user?.profile.photo == 7) {
      return profile7;
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-row justify-between items-center font-[kanit] px-2 border-r-4 border-r-[#8CD8F9] mr-6">
          <div className="flex flex-col">
            <div className="text-2xl text-[#8CD8F9]">{user?.firstName}</div>
            <div className="text-sm">รหัสผู้ใช้งาน {user?.id}</div>
          </div>
          <img src={profileImage()} className="h-12" alt="" />
        </div>
        <BsBoxArrowRight className="text-3xl text-[#D24337]" onClick={logOut} />
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
