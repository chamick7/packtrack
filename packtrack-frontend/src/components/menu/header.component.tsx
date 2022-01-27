import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Navbar, Nav , NavDropdown , Container } from "react-bootstrap"

import AuthContext from "../../providers/auth.provider";

import "./header.scss";

import logoPackTrack from "../../images/logoPackTrack.jpg";
import userImg from "../../images/userImg.jpg"

const GetUser = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.user;
  const firstName = authContext.user?.firstName;
  return (
    <>
      {isAuthenticated ? (
        <Nav.Link href="/" className="d-flex justify-content-center text-blue mx-2">
          {firstName}
        </Nav.Link>
      ) : (
        <Nav.Link href="/login" className="d-flex justify-content-center text-blue mx-2" style={{ color:"#8CD8F9" }}>
          เข้าสู่ระบบ
        </Nav.Link>
      )}
    </>
  );
};

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="top-navbar">
    <Container>
      <Navbar.Brand href="/" className="col-6 d-flex flex-row">
        <img src={logoPackTrack} className="d-flex" height="50vw" />
        <div className="text-logo">
        <span className="text-maincolor" style={{ fontSize: "1.2vw" }}>
          Pack
        </span>
        <span
          className="text-black"
          style={{ fontWeight: "bold", fontSize: "1.2vw" }}
        >
          Track
        </span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" ><img src={userImg} style={{ height: "2rem" , border:"none"}} /></Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="d-flex justify-content-around">
          <Nav.Link
            href="/"
            className="d-flex justify-content-center mx-2 text-black"
          >
            เกี่ยวกับ Pack Track
          </Nav.Link>
          <Nav.Link
            href="/"
            className="d-flex justify-content-center mx-2 text-black"
          >
            การใช้งาน
          </Nav.Link>
          <GetUser />
          <div className="d-flex justify-content-center mx-2 text-black">
            <img src={userImg} className="userImg" style={{ height: "3vw" }} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
