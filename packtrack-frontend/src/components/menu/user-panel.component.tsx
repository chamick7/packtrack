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

  const [roleGroup , setRoleGroup] = useState("officers");
  // const adminGroup = () => {
  //   setRoleGroup("ADMIN")
  // }
  const ofcGroup = () => {
    setRoleGroup("officers")
  }
  const userGroup = () => {
    setRoleGroup("members")
  }

  return (
    <div className="flex flex-col justify-center w-full h-full shadow p-3 font-[kanit]">
      <div className="flex justify-end">
        <GetUser />
      </div>
      <div className="flex flex-col justify-evenly w-full h-full mt-4 md:flex-row md:justify-between">
        <div className="flex flex-col w-full h-full md:w-5/12 ">
          <span className="flex items-center w-full h-10 pl-2 rounded-md text-white bg-[#F0304A]">
            กลุ่มผู้ใช้งาน
          </span>
          <div className="flex flex-col justify-start items-center h-full md:items-start">
            <div className={roleGroup == "officers" ? "flex w-full rounded-md bg-[#F2F7FA] h-1/6" : "bg-white flex w-full h-1/6"}><button className="flex w-full items-center px-4" onClick={ofcGroup}>OFFICER</button></div>
            <div className={roleGroup == "members" ? "flex w-full rounded-md bg-[#F2F7FA]  h-1/6" : "bg-white flex w-full h-1/6"}><button className="flex w-full items-center px-4" onClick={userGroup}>USER</button></div>

          </div>
        </div>
        <div className="flex flex-col w-full md:w-6/12">
          <DashboardControlUser role={roleGroup} />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
