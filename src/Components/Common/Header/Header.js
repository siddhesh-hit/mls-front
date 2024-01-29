import React, { useState } from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Offcanvas,
} from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="fixed-header">
        <Topbar />
        <div style={{ backgroundColor: "white" }}>
          <div
            className="navbar navbar-expand-lg"
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className="container-fluid">
              <img src={logo} alt="logo" className="loginbg" />
              <div className="search-home">
                <span>
                  <form>
                    <input
                      type="search"
                      placeholder="शोध कीवर्ड प्रविष्ट करा"
                      className="Search_bar"
                    />
                    <i
                      className="fa fa-search"
                      aria-hidden="true"
                      style={{ color: "white" }}
                    ></i>
                  </form>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Navbar expand="lg" className=" bottom-navbar ">
          <div className="container-fluid">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              style={{ color: "white", backgroundColor: "#2c6747" }}
            >
              <Offcanvas.Header
                closeButton
                style={{ marginTop: "10px" }}
              ></Offcanvas.Header>
              <Nav
                // className="me-auto"
                style={{
                  color: "white",
                  backgroundColor: "#2c6747",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginRight: "20px",
                  fontFamily: " Poppins ,sans-serif",
                }}
              >
                <Link
                  to="/"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  मुख्यपृष्ठ
                </Link>
                <hr className="vertical-line" />
                <NavDropdown
                  title="विधिमंडळ"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    विधानमंडळ
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    राज्यपाल
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    विधानमंडळ सचिव
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    मंत्रीमंडळ
                  </NavDropdown.Item>
                </NavDropdown>
                <hr className="vertical-line" />
                <Link
                  to="/LegislativeCouncil"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  विधानपरिषद
                </Link>
                <hr className="vertical-line" />
                <Link
                  to="/LegislativeAssembly"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  विधानसभा
                </Link>
                <hr className="vertical-line" />
                <NavDropdown
                  title="विधानमंडळ सदस्य"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    विधानपरिषद सदस्य
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    विधानसभा सदस्य
                  </NavDropdown.Item>
                </NavDropdown>
                <hr className="vertical-line" />

                <NavDropdown
                  title="सभागृहांचे कार्यवृत्त"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    एकत्रित सभागृहांचे कार्यवृत्त
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    विधानपरिषद सभागृहांचे कार्यवृत्त
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    विधानसभा सभागृहांचे कार्यवृत्त
                  </NavDropdown.Item>
                </NavDropdown>
                <hr className="vertical-line" />

                <Link
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                  to="/Session-calender"
                >
                  सत्र दिनदर्शिका
                </Link>
                <hr className="vertical-line" />
                <Link
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                  to="/Session-calender"
                >
                  सत्र दिनदर्शिका
                </Link>

                <hr className="vertical-line" />

                <NavDropdown
                  title="प्रकाशाने"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    विधानमंडळ सदस्य
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                <hr className="vertical-line" />

                <NavDropdown
                  title=" इतर"
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    विधानमंडळ सदस्य
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
