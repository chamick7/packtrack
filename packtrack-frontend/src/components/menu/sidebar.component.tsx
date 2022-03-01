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
    console.log("nameButton", nameButton);
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
        <div className="flex flex-col h-full w-2/12 justify-between items-center shadow-lg p-4 rounded-l-xl">
          <div className="flex flex-col justify-evenly w-full h-1/2">
            <div className="flex flex-col justify-center items-center">
              <img src={logoPackTrack} />
              <div className="flex flex-row ">
                <span className="flex no-underline items-center justify-center font-[kanit] text-main text-xl">
                  Pack
                </span>
                <span className="flex no-underline items-center justify-center font-[kanit] text-black text-xl font-bold">
                  Track
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-1/2 items-center w-full">
              <button
                className={
                  activeButton === "main"
                    ? "flex flex-row justify-between items-center font-[kanit] w-2/3 bg-[#F0304A] text-white rounded-lg text-lg px-3 py-1"
                    : "flex flex-row justify-between items-center font-[kanit] w-2/3 bg-white text-black rounded-lg text-lg px-3 py-1"
                }
                onClick={() => changeButton("main")}
              >
                <RiHomeLine className="text-lg" />
                หน้าหลัก
                <IoIosArrowDroprightCircle className="text-lg text-white" />
              </button>
              <button
                className={
                  activeButton === "users"
                    ? "flex flex-row justify-between items-center font-[kanit] w-2/3 bg-[#F0304A] text-white rounded-lg text-lg px-3 py-1"
                    : "flex flex-row justify-between items-center font-[kanit] w-2/3 bg-white text-black rounded-lg text-lg px-3 py-1"
                }
                onClick={() => changeButton("users")}
              >
                <FaUsers className="text-lg" />
                ผู้ใช้งาน
                <IoIosArrowDroprightCircle className="text-lg text-white" />
              </button>
            </div>
          </div>
          <div>
            <button className="font-[kanit] bg-main rounded text-white px-3 py-1" onClick={logOut}>
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
