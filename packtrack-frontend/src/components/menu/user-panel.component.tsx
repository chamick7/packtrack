import React , {useContext, useEffect, useState } from "react";

import AuthContext from "../../providers/auth.provider";
import userPicture from "../../images/user-picture.svg";

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

  return (
    <div className="flex flex-col justify-center w-full h-full shadow p-3">
      <div className="flex justify-end"><GetUser /></div>
      <div className="flex flex-row w-full h-full mt-4">
        <div className="flex w-5/12">กลุ่มผู้ใช้งาน</div>
        <div className="flex flex-col w-7/12">
          <div className="flex h-full">ผู้ใช้งาน</div>
          <div className="flex h-full">รหัสผู้ใช้งาน</div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
