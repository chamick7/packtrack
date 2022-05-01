import React, { useEffect, useState, useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { confirmDialog } from 'primereact/confirmdialog';

import AuthContext from "../../providers/auth.provider";
import DashboardOfficer from "../dashboard/dashboard-officer.component";
import UserPanel from "./user-panel.component";

import logoPackTrack from "../../images/logoPackTrack.svg";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("main");

  const changeButton = (nameButton: string) => {
    setActiveButton(nameButton);
  };

  const authContext = useContext(AuthContext);
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
      <div className="flex flex-row justify-evenly h-full w-full">
        <div className="flex flex-col h-full w-4/12 justify-between items-center shadow-lg p-2 rounded-l-xl md:w-2/12 md:p-4">
          <div className="flex flex-col justify-evenly w-full h-1/2">
            <div className="flex flex-col justify-center items-center">
              <img src={logoPackTrack} className="p-1 md:p-4" alt="Packtracklogo" />
              <div className="flex flex-row ">
                <span className="flex no-underline items-center justify-center font-[kanit] text-main text-sm md:text-xl">
                  Pack
                </span>
                <span className="flex no-underline items-center justify-center font-[kanit] text-black text-sm font-bold md:text-xl">
                  Track
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-1/2 items-center w-full">
              <button
                className={
                  activeButton === "main"
                    ? "flex flex-row justify-between items-center font-[kanit] w-10/12 bg-[#F0304A] text-white rounded-lg px-1 py-1 lg:px-4 lg:py-1"
                    : "flex flex-row justify-between items-center font-[kanit] w-10/12 bg-white text-black rounded-lg px-1 py-1 lg:px-4 lg:py-1"
                }
                onClick={() => changeButton("main")}
              >
                <RiHomeLine className="text-xl" />
                <span className="text-sm lg:text-lg">หน้าหลัก</span>
                <IoIosArrowDroprightCircle className="text-xl text-white" />
              </button>
              <button
                className={
                  activeButton === "users"
                    ? "flex flex-row justify-between items-center font-[kanit] w-10/12 bg-[#F0304A] text-white rounded-lg px-1 py-1 lg:px-4 lg:py-1"
                    : "flex flex-row justify-between items-center font-[kanit] w-10/12 bg-white text-black rounded-lg px-1 py-1 lg:px-4 lg:py-1"
                }
                onClick={() => changeButton("users")}
              >
                <FaUsers className="text-xl" />
                <span className="text-sm lg:text-lg">ผู้ใช้งาน</span>
                <IoIosArrowDroprightCircle className="text-xl text-white" />
              </button>
            </div>
          </div>
          <div>
            <button className="font-[kanit] bg-main rounded text-white px-3 py-1 text-sm lg:text-base" onClick={logOut}>
              ออกจากระบบ
            </button>
          </div>
        </div>
        <div className={activeButton === "main" ? "flex w-9/12" : "hidden"}>
          <DashboardOfficer />
        </div>
        <div className={activeButton === "users" ? "flex w-9/12" : "hidden"}>
          <UserPanel />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
