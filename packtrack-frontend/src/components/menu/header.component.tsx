import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/auth.provider";

import "./header.scss";

import logoPackTrack from "../../images/logoPackTrack.jpg";

const GetUser = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.user;
  const firstName = authContext.user?.firstName;
  return (
    <>
      {isAuthenticated ? (
        <Link to="/logout" className="text-blue">
          {firstName}
        </Link>
      ) : (
        <Link to="/login" className="text-blue">
          เข้าสู่ระบบ
        </Link>
      )}
    </>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5 shadow-sm bg-body top-navbar">
      <div className="container-fluid">
        <div className="col-7">
          <Link to="/" className="text-black">
            <img src={logoPackTrack} height="60vh" />
            <span className="text-maincolor">Pack</span>
            <span className="text-black" style={{ fontWeight: "bold" }}>
              Track
            </span>
          </Link>
        </div>
        <div className="navbar-nav col justify-content-around">
          <Link to="/" className="text-black">
            เกี่ยวกับ Pack Track
          </Link>
          <Link to="/" className="text-black">
            การใช้งาน
          </Link>
          <GetUser />  
        </div>
      </div>
    </nav>
  );
};

export default Header;
