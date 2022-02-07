import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";

import AuthContext from "../../providers/auth.provider";

import logoPackTrack from "../../images/logoPackTrack.jpg";
import userImg from "../../images/userImg.jpg";

const GetUser = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.user;
  const firstName = authContext.user?.firstName;
  return (
    <>
      {isAuthenticated ? (
        <Nav.Link
          href="/"
          className="flex justify-center mx-2 items-center font-[kanit] text-[#8CD8F9] text-lg  sm:text-[16px]"
          style={{ color: "#8CD8F9" }}
        >
          {firstName}
        </Nav.Link>
      ) : (
        <Nav.Link
          className="flex justify-center mx-2 items-center font-[kanit] text-[#8CD8F9] text-lg  sm:text-[16px]"
          style={{ color: "#8CD8F9" }}
        >
          เข้าสู่ระบบ
        </Nav.Link>
      )}
    </>
  );
};

const Header = () => {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Navbar bg="light" expand="lg" className="h-full max-h-[10vh]">
      <Container fluid>
        <Link to="/" className="flex flex-row">
          <img src={logoPackTrack} className="flex h-16" />
          <div className="flex sm:hidden">
            <span className="flex no-underline items-center font-[kanit] text-main">
              Pack
            </span>
            <span
              className="flex no-underline items-center font-[kanit] text-black">
              Track
            </span>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-none outline-none shadow-none active:outline-none active:shadow-none">
          <img src={userImg} className="h-8" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav  className="flex justify-around ms-auto">
            <Link to="/?section=about" className="flex justify-center mx-2 items-center font-[kanit] text-black hover:text-black text-lg sm:text-[16px]">
                เกี่ยวกับ Pack Track
            </Link>
            <Link to="/?section=manual" className="flex justify-center mx-2 items-center font-[kanit] text-black hover:text-black text-lg sm:text-[16px]">
                การใช้งาน
            </Link>
            <GetUser />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
