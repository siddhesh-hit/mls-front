import React, { useState } from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Navbar, NavDropdown, Nav, Offcanvas } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useLang from "../../utils/useLang";

const Header = () => {
  const [show, setShow] = useState(false);

  const [search, setSearch] = useState(null);

  const location = useLocation();

  // const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

  const data = {
    search: {
      marathi: "शोध कीवर्ड प्रविष्ट करा",
      english: "Enter the search keyword",
    },
    link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    link2: {
      marathi: "विधानपरिषद",
      english: "Council",
    },
    link3: {
      marathi: "विधानसभा",
      english: "Assembly",
    },
    link4: {
      marathi: "सत्र दिनदर्शिका",
      english: "Session Calender",
    },
    link5: {
      marathi: "ग्रंथालय",
      english: "Library",
    },
    link6: {
      marathi: "विधिमंडळ",
      english: "Legislature",

      drop1: {
        marathi: "विधानमंडळ",
        english: "Vidhan Mandal",
      },
      drop2: {
        marathi: "राज्यपाल",
        english: "Governor",
      },
      drop3: {
        marathi: "विधानमंडळ सचिव",
        english: "Legislative Secretary",
      },
      drop4: {
        marathi: "मंत्रीमंडळ",
        english: "Council Of Ministers",
      },
    },
    link7: {
      marathi: "विधानमंडळ सदस्य",
      english: "Member of Legislature",

      drop1: {
        marathi: "विधानपरिषद सदस्य",
        english: " List of Legislative Council Members",
      },
      drop2: {
        marathi: "विधानसभा सदस्य",
        english: "List of Legislative Assembly Members",
      },
    },
    link8: {
      marathi: "सभागृहांचे कार्यवृत्त",
      english: "Debate",
      drop1: {
        marathi: "एकत्रित सभागृहांचे कार्यवृत्त",
        english: " Combined Debates",
      },
      drop2: {
        marathi: "विधानपरिषद सभागृहांचे कार्यवृत्त",
        english: "Debates of Legislative Council",
      },
      drop3: {
        marathi: " विधानसभा सभागृहांचे कार्यवृत्त",
        english: "Debates of Legislative Assembly ",
      },
    },
    link9: {
      marathi: "प्रकाशने",
      english: "Publication",
    },
    link10: {
      marathi: "इतर",
      english: "other",
      drop1: {
        marathi: "गॅलरी",
        english: "Gallery",
      },
      drop2: {
        marathi: "महत्वाचा सूचना",
        english: "Notification",
      },
    },
  };

  const { lang } = useLang();

  return (
    <>
      <div className="fixed-header ">
        <Topbar className="top-menu" />
        <div style={{ backgroundColor: "white" }}>
          <div
            className="navbar navbar-expand-lg"
            style={{
              justifyContent: "space-between",
            }}
          >
            <div className="container-fluid">
              <Link to="/">
                <img src={logo} alt="logo" className="loginbg" />
              </Link>

              <div className="search-box">
                <div className="search-input">
                  {/* <input
                    type="search"
                    placeholder={
                      lang === "mr" ? data.search.marathi : data.search.english
                    }
                    onChange={(e) => setSearch(e.target.value)}
                  /> */}
                  <input
                    type="search"
                    placeholder={
                      lang === "mr" ? data.search.marathi : data.search.english
                    }
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <Link to={`/Search?id=${search}`} className="searchh">
                  <i className="fa fa-search"></i>
                </Link>
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
              <Offcanvas.Header closeButton style={{ marginTop: "10px" }}>
                <Link to="/">
                  <div style={{ width: "230px" }}>
                    <img
                      src={logo}
                      alt="logo"
                      className="loginbg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Link>
              </Offcanvas.Header>

              <Nav
                className={`${location === "/" ? "active_url" : ""}`}
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
                  className="nav-link-top "
                  style={{ fontWeight: "400" }}
                >
                  {lang === "mr" ? data.link1.marathi : data.link1.english}
                </Link>

                <hr className="vertical-line" />

                <NavDropdown
                  title={
                    lang === "mr" ? data.link6.marathi : data.link6.english
                  }
                  id="basic-nav-dropdown"
                  style={{ borderRadius: 0 }}
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item
                    href="Aboutus"
                    className="css-drop"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(20px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link6.drop1.marathi
                      : data.link6.drop1.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="Governor"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(20px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link6.drop2.marathi
                      : data.link6.drop2.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(15px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link6.drop3.marathi
                      : data.link6.drop3.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="CouncilMinister"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(20px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link6.drop4.marathi
                      : data.link6.drop4.english}
                  </NavDropdown.Item>
                </NavDropdown>

                <hr className="vertical-line" />

                <div className="nav-link-top ">
                  <Link
                    to="/LegislativeCouncil"
                    className="nav-link-top "
                    style={{ fontWeight: "400" }}
                  >
                    {lang === "mr" ? data.link2.marathi : data.link2.english}
                  </Link>
                </div>

                <hr className="vertical-line" />

                <Link
                  to="/LegislativeAssembly"
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                >
                  {lang === "mr" ? data.link3.marathi : data.link3.english}
                </Link>

                <hr className="vertical-line" />

                <NavDropdown
                  title={
                    lang === "mr" ? data.link7.marathi : data.link7.english
                  }
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item
                    href="CouncilMemberEng"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(20px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link7.drop1.marathi
                      : data.link7.drop1.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="AssemblyMemberEng"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(15px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link7.drop2.marathi
                      : data.link7.drop2.english}
                  </NavDropdown.Item>
                </NavDropdown>

                <hr className="vertical-line" />

                <NavDropdown
                  title={
                    lang === "mr" ? data.link8.marathi : data.link8.english
                  }
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item
                    href="CombinedDebates"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(20px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link8.drop1.marathi
                      : data.link8.drop1.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="CouncilDebates"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(20px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link8.drop2.marathi
                      : data.link8.drop2.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="AssemblyDebates"
                    style={{
                      transition: "color 0.3s, transform 0.3s",
                      transform: "translateX(0)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ce5d3d";
                      e.target.style.transform = "translateX(15px)";
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "initial";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    {lang === "mr"
                      ? data.link8.drop3.marathi
                      : data.link8.drop3.english}
                  </NavDropdown.Item>
                </NavDropdown>

                <hr className="vertical-line" />

                <Link
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                  to="/SessionCalender"
                >
                  {lang === "mr" ? data.link4.marathi : data.link4.english}
                </Link>

                <hr className="vertical-line" />

                <Link
                  className="nav-link-top"
                  style={{ fontWeight: "400" }}
                  to="/Library"
                >
                  {lang === "mr" ? data.link5.marathi : data.link5.english}
                </Link>

                <hr className="vertical-line" />

                <NavDropdown
                  title={
                    lang === "mr" ? data.link9.marathi : data.link9.english
                  }
                  id="basic-nav-dropdown"
                  className="nav-link-top mt-0 mb-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    {lang === "mr"
                      ? data.link7.drop2.marathi
                      : data.link7.drop2.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    {lang === "mr"
                      ? data.link7.drop2.marathi
                      : data.link7.drop2.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                <hr className="vertical-line" />

                <NavDropdown
                  title={
                    lang === "mr" ? data.link10.marathi : data.link10.english
                  }
                  id="basic-nav-dropdown"
                  className="nav-link-top dropdown-last  mt-0 mb-0 "
                >
                  <NavDropdown.Item className="dropdown-last" href="Gallery">
                    {lang === "mr"
                      ? data.link10.drop1.marathi
                      : data.link10.drop1.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-last"
                    href="Notification"
                  >
                    {lang === "mr"
                      ? data.link10.drop2.marathi
                      : data.link10.drop2.english}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-last"
                    href="#action/3.3"
                  >
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
