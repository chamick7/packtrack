import React from "react";
import { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {Link as ScrollLink}  from 'react-scroll'


import AuthContext from "../../providers/auth.provider";

import "./header.scss";

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
          className="d-flex justify-content-center text-blue mx-4 fs-6"
          style={{ color: "#8CD8F9" }}
        >
          {firstName}
        </Nav.Link>
      ) : (
        <Nav.Link
          href="/login"
          className="d-flex justify-content-center text-blue mx-4 fs-6"
          style={{ color: "#8CD8F9" }}
        >
          เข้าสู่ระบบ
        </Nav.Link>
      )}
    </>
  );
};

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="top-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex flex-row">
          <img src={logoPackTrack} className="d-flex" height="50vw" />
          <div className="text-logo">
            <span className="text-maincolor" style={{ fontSize: "1.4vw" }}>
              Pack
            </span>
            <span
              className="text-black"
              style={{ fontWeight: "bold", fontSize: "1.4vw" }}
            >
              Track
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="img-toggle">
          <img src={userImg} style={{ height: "2rem", border: "none" }} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="d-flex justify-content-around ms-auto">
            <Nav.Link className="d-flex justify-content-center mx-4 fs-6 text-black">
              <ScrollLink
                to="FourHome"
                smooth={true}
                offset={-50}
                duration={800}
              >เกี่ยวกับ Pack Track</ScrollLink>
            </Nav.Link>
            <Nav.Link
              className="d-flex justify-content-center mx-4 fs-6 text-black"
            >
              <ScrollLink
                to="FiveHome"
                smooth={true}
                offset={-50}
                duration={800}
              >การใช้งาน</ScrollLink>
            </Nav.Link>
            <GetUser />
            <div className="d-flex justify-content-center mx-4 fs-6 text-black">
              <img
                src={userImg}
                className="user-img"
                style={{ height: "3vw" }}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
