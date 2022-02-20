import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaTimes, FaRegUserCircle } from "react-icons/fa";

import AuthContext from "../../providers/auth.provider";

import logoPackTrack from "../../images/logoPackTrack.svg";

const GetUser = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.user;
  const firstName = authContext.user?.firstName;
  return (
    <>
      {isAuthenticated ? (
        <Link
          to="/"
          className="flex justify-center mx-2 items-center font-[kanit] text-[#8CD8F9] text-lg hover:text-[#8CD8F9]"
        >
          {firstName}
        </Link>
      ) : (
        <Link
          to="/login"
          className="flex justify-center mx-2 items-center font-[kanit] text-[#8CD8F9] text-lg hover:text-[#8CD8F9]"
        >
          เข้าสู่ระบบ
        </Link>
      )}
    </>
  );
};

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="flex flex-row justify-between h-full max-h-[10vh] px-10">
        <Link to="/" className="flex flex-row">
          <img src={logoPackTrack} className="flex h-10" />
          <div className="hidden sm:flex">
            <span className="flex no-underline items-center justify-center font-[kanit] text-main text-xl">
              Pack
            </span>
            <span className="flex no-underline items-center justify-center font-[kanit] text-black text-xl font-bold">
              Track
            </span>
          </div>
        </Link>
        {!mobile && (
          <ul className="flex flex-row justify-end items-center">
            <li>
              <Link
                to="/?section=about"
                className="flex justify-center mx-2 items-center font-[kanit] text-black hover:text-black text-lg"
              >
                เกี่ยวกับ Pack Track
              </Link>
            </li>
            <li>
              <Link
                to="/?section=manual"
                className="flex justify-center mx-2 items-center font-[kanit] text-black hover:text-black text-lg"
              >
                การใช้งาน
              </Link>
            </li>
            <li>
              <GetUser />
            </li>
          </ul>
        )}
        {mobile && (
          <div className="flex justify-center items-center">
            {sidebar ? (
              <FaTimes
                className="flex text-3xl"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <FaRegUserCircle
                className="flex text-3xl"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "flex flex-col w-2/3 h-screen absolute bg-white z-10 inset-y-0 right-0 transition ease-in-out duration-300" : "hidden"}>
        <div className="">
          <FaTimes
            className="flex text-xl"
            onClick={() => setSidebar(!sidebar)}
          />
          <div className="flex flex-col px-2">
            <div className="flex flex-col justify-center items-center py-2 border-b-2 border-b-black">
              <Link to="/login">
                <button className="bg-main rounded  font-[kanit] text-white px-8 py-1  text-md">
                  เข้าสู่ระบบ
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-start text-left">
              <Link
                to="/?section=about"
                className="flex [kanit] text-black text-md py-2"
              >
                เกี่ยวกับ Pack Track
              </Link>
              <Link
                to="/?section=manual"
                className="flex [kanit] text-black text-md py-2"
              >
                การใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

