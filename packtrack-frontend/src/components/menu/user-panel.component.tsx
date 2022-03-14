import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../providers/auth.provider";
import userPicture from "../../images/user-picture.svg";

import DashboardControlUser from "../dashboard/dashboard-controluser.component";

const UserPanel = () => {
  const GetUser = () => {
    const authContext = useContext(AuthContext);
    const firstName = authContext.user?.firstName;
    const userId = authContext.user?.id;

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
        </div>
      </>
    );
  };

  const [roleGroup , setRoleGroup] = useState("ADMIN");
  const adminGroup = () => {
    setRoleGroup("ADMIN")
  }
  const ofcGroup = () => {
    setRoleGroup("OFFICER")
  }
  const userGroup = () => {
    setRoleGroup("USER")
  }

  return (
    <div className="flex flex-col justify-center w-full h-full shadow p-3 font-[kanit]">
      <div className="flex justify-end">
        <GetUser />
      </div>
      <div className="flex flex-col justify-between w-full h-full mt-4 md:flex-row">
        <div className="flex flex-col w-full md:w-5/12 ">
          <span className="flex items-center w-full h-10 pl-2 rounded-md text-white bg-[#F0304A]">
            กลุ่มผู้ใช้งาน
          </span>
          <div className="flex flex-col justify-center items-center md:items-start md:px-2">
            <button onClick={adminGroup}>ADMIN</button>
            <button onClick={ofcGroup}>OFFICER</button>
            <button onClick={userGroup}>USER</button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-6/12">
          <DashboardControlUser />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
