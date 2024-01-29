import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import { Row, Container } from "react-bootstrap";
import Footer from "../Components/Common/Footer";
import { Link, useLocation } from "react-router-dom";
const LinkSection = () => {
  const [lang, setLang] = useState("mr");

  const data = {
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "सर्व लिंक",
      english: " All Links",
    },
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const updateLocalStorage = (newLang) => {
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const newLang = queryParams.get("lang") || storedLang || "mr";
    setLang(newLang);
    updateLocalStorage(newLang);
  }, [location.search]);

  return (
    <>
      <div>
        <Header />
        <Container fluid className="section-top-space">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                {lang === "mr" ? data.Link1.marathi : data.Link1.english}
              </Link>
            </li>
            <li> {lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
          </ul>
          <section>
            <Container className="mb-5">
              <div className="container-fluid justify-content-center ">
                <div
                  className="about-head text-center"
                  style={{
                    color: "black",
                  }}
                >
                  {lang === "mr" ? data.Link2.marathi : data.Link2.english}
                  <hr
                    className="button_less"
                    style={{
                      width: "10%",
                      border: "none",
                      height: "5px",
                      background: "linear-gradient(to right, green, yellow)",
                      opacity: "1",
                      marginTop: "0",
                      marginBottom: "15px",
                    }}
                  />
                </div>
                <div>
                  <Row>
                    <div className="col-lg-12 link-section-container">
                      <div style={{ color: "white" }}>
                        <div className="row link-section-container">
                          <button className=" col-lg-1 link-Btn text-center  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="http://mls.org.in/"
                              className="text-center"
                            >
                              http://mls.org.in/
                            </Link>
                          </button>
                          <button className=" col-lg-1 link-Btn align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https://gr.maharashtra.gov.in"
                            >
                              https:// gr.maharashtra.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-1 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //gr.maharashtra.gov.in"
                            >
                              https:// gr.maharashtra.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-1 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //beams.mahakosh.gov.in"
                            >
                              https:// beams.mahakosh.gov.in
                            </Link>
                          </button>
                        </div>

                        <div className="row link-section-container">
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //directorate.marathi.gov.in"
                            >
                              https:// directorate.marathi.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link target="_blank" to="https://eci.gov.in/">
                              https://eci.gov.in/
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link target="_blank" to="https://main.sci.govin/">
                              https://main.sci.govin/
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //beams.mahakosh.gov.in"
                            >
                              https:// beams.mahakosh.gov.in
                            </Link>
                          </button>
                        </div>

                        <div className="row link-section-container">
                          <button className="col-lg-2 link-Btn align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //directorate.marathi.gov.in"
                            >
                              https:// directorate.marathi.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn align-items-center justify-content-center ">
                            <Link target="_blank" to="https://eci.gov.in/n">
                              https://eci.gov.in/n
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link target="_blank" to="https://main.sci.govin/">
                              https://main.sci.govin/
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //beams.mahakosh.gov.in"
                            >
                              https:// beams.mahakosh.gov.in
                            </Link>
                          </button>
                        </div>

                        <div className="row link-section-container">
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //directorate.marathi.gov.in"
                            >
                              https:// directorate.marathi.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //beams.mahakosh.gov.in"
                            >
                              https:// beams.mahakosh.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //beams.mahakosh.gov.in"
                            >
                              https:// beams.mahakosh.gov.in
                            </Link>
                          </button>
                          <button className="col-lg-2 link-Btn  align-items-center justify-content-center ">
                            <Link
                              target="_blank"
                              to="https: //beams.mahakosh.gov.in"
                            >
                              https:// beams.mahakosh.gov.in
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Container>
          </section>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default LinkSection;
