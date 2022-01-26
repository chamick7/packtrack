import React from "react";

import SquareButton from "../button/square-button.component";

import { FaHome, FaEllipsisV , FaUsers } from "react-icons/fa";
import logoPackTrack from "../../images/logoPackTrack.jpg";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="container-fluid p-0 d-flex justify-content-center">
      <div className="card p-4 sidebar-card">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={logoPackTrack} style={{width:"4vw"}} />
          <div className="mt-3 mb-5 d-flex justify-content-center width-auto" style={{width:"100%"}}>
            <span className="text-maincolor">Pack</span>
            <span className="text-black" style={{ fontWeight: "bold" }}>
              Track
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <SquareButton
            style={{
              fontSize: "1.2vw",
              width: "14vw",
              height: "6vh",
              padding: "0 1vw",
              borderRadius:"10px",
              backgroundColor: "#F0304A",
              justifyContent: "space-between",
            }}
          >
            <FaHome style={{ fontSize: "1.2vw" }} />
            หน้าหลัก
            <FaEllipsisV style={{ fontSize: "1.2vw" }} />
          </SquareButton>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <SquareButton
            style={{
              fontSize: "1.2vw",
              width: "14vw",
              height: "6vh",
              padding: "0 1vw",
              borderRadius:"10px",
              color:"#C7C7C7",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <FaUsers style={{ fontSize: "1.2vw" }} />
            ผู้ใช้งาน
            <FaEllipsisV style={{ fontSize: "1.2vw" , color:"white"  }} />
          </SquareButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
