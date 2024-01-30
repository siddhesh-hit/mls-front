import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";

import partiwise from "../assets/about/image 239.jpg";
import councilgraph from "../assets/assemblygroup.png";

import LoaderComponents from "./loader";

import { getApi } from "../service/axiosInterceptors";
import { API } from "../config";
import { assembly } from "../constant";

import useLang from "../utils/useLang";

const LegislativeCouncil = () => {
  const [serverData, setServerData] = useState({});
  const [loading, setLoading] = useState(true);

  const { lang, checkLang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      await getApi("sabha/active")
        .then((res) => setServerData(res.data.data))
        .catch((err) => console.log(err));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <div>
        <section className="background">
          <div className="container-fluid justify-content-center background mb-0 section-top-space">
            <ul className="breadcrumb">
              <li>
                <Link to="/">{assembly[checkLang].link1}</Link>
              </li>
              <li>{assembly[checkLang].link2}</li>
            </ul>
            <div className="about-head text-center pb-2">
              <div
                id="about-text"
                style={{
                  display: "inline-block",
                  position: "relative", // Add this line
                }}
              >
                {assembly[checkLang].title}
                <div
                  className="underline"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "0",
                    width: "100%",
                    height: "5px",
                    background: "linear-gradient(to right, green, yellow)",
                    opacity: "1",
                  }}
                />
              </div>
            </div>
            <Container
              fluid
              className=" mt-4"
              style={{ paddingRight: "45px", paddingLeft: "45px" }}
            >
              <Row className=" mb-0">
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="box-shadow mb-5"
                  style={{ background: "white" }}
                >
                  <div className="mt-4" style={{ width: "100%" }}>
                    <img
                      src={
                        API.baseUrl +
                        serverData?.banner_image?.destination +
                        "/" +
                        serverData?.banner_image?.filename
                      }
                      alt=" "
                      style={{
                        width: "100%",

                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="section-info justify-content-end mt-4 ">
                    <p style={{ padding: "2%" }}>
                      {serverData[checkLang].description}
                    </p>
                  </div>
                  <hr style={{ color: "green", width: "100%" }} />
                  <div className="row p-2 m-1">
                    <div
                      className="Bio-head mt-0 text-center justify-content-center "
                      style={{ fontSize: "16px", lineHeight: "22px" }}
                    >
                      {assembly[checkLang].headerImp}
                      <hr
                        className="button_less"
                        style={{
                          width: "75%",
                          border: "none",
                          height: "2px",
                          background:
                            "linear-gradient(to right, green, yellow)",
                          opacity: "1",
                          marginTop: "0",
                          marginBottom: "15px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Sakal Marathi",
                      }}
                    >
                      <Col lg={12} className="p-1 text-start">
                        १. भारताचे संविधान (
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                      <Col lg={12} className="p-1 text-start">
                        २. महाराष्ट्र विधानसभा नियम (
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                      <Col lg={12} className="p-1 text-start">
                        ३. अध्यक्षांनी दिलेले निदेश (
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                      <Col lg={12} className="p-1 text-start">
                        ४. महाराष्ट्र विधानसभा सदस्य ( पक्षांतराच्या कारणावरून
                        निरर्हता ) नियम १९८६ (
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Row className="mb-3 mt-1 justify-content-center">
                    {serverData[checkLang]?.legislative_council?.map(
                      (item, index) => {
                        if (index < 2) {
                          return (
                            <Row
                              style={{ justifyContent: "center" }}
                              key={index}
                            >
                              <Col
                                lg={4}
                                md={4}
                                sm={12}
                                xs={12}
                                style={{ margin: 0, padding: "15px" }}
                              >
                                <div className="img-boxing ">
                                  <img
                                    alt="img"
                                    src={
                                      API.baseUrl +
                                      serverData?.legislative_council[index]
                                        ?.council_profile?.destination +
                                      "/" +
                                      serverData?.legislative_council[index]
                                        ?.council_profile?.filename
                                    }
                                    style={{ width: "100%" }}
                                  />

                                  <div className="box-bottom text-center">
                                    <div className="nameHead">
                                      {item.council_name}
                                    </div>
                                    <div className="name-info">
                                      {item.council_description}
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          );
                        } else {
                          return (
                            <Col
                              lg={4}
                              md={4}
                              sm={12}
                              xs={12}
                              style={{ margin: 0, padding: "25px" }}
                              key={index}
                            >
                              <div className="img-boxing ">
                                <img
                                  alt="img"
                                  src={
                                    API.baseUrl +
                                    serverData?.legislative_council[index]
                                      ?.council_profile?.destination +
                                    "/" +
                                    serverData?.legislative_council[index]
                                      ?.council_profile?.filename
                                  }
                                  style={{ width: "100%" }}
                                />

                                <div className="box-bottom text-center">
                                  <div className="nameHead">
                                    {item.council_name}
                                  </div>
                                  <div className="name-info">
                                    {item.council_description}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          );
                        }
                      }
                    )}
                  </Row>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="justify-content-end text-end mb-4"
                >
                  <div
                    className="box-shadow text-center justify-content-center "
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      display: "flex",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="Bio-head mt-0 text-center justify-content-center ">
                      {assembly[checkLang].structure}
                      <hr
                        className="button_less"
                        style={{
                          width: "100%",
                          border: "none",
                          height: "5px",
                          background:
                            "linear-gradient(to right, green, yellow)",
                          opacity: "1",
                          marginTop: "0",
                          marginBottom: "15px",
                        }}
                      />
                    </div>
                    <div>
                      {/* <img
                        src={member4}
                        className="image"
                        alt="Member"
                        style={{ width: "100px" }}
                      /> */}
                    </div>
                    <div className="m-1">{assembly[checkLang].name}</div>
                    <div className="m-1">{assembly[checkLang].type}</div>
                    {/* <div className="m-1">{assembly[checkLang].terms}</div> */}
                    <div className="m-1">{assembly[checkLang].seats}</div>
                    <hr style={{ color: "green", width: "100%" }} />
                    <div
                      className="Bio-head  justify-content-center "
                      style={{ fontSize: "17px", lineHeight: "30px" }}
                    >
                      {assembly[checkLang].bioSect}
                      <hr
                        className="button_less"
                        style={{
                          width: "100%",
                          border: "none",
                          height: "5px",
                          background:
                            "linear-gradient(to right, green, yellow)",
                          opacity: "1",
                          marginTop: "0",
                          marginBottom: "15px",
                        }}
                      />
                    </div>
                    <div>
                      <Link to="#" style={{ color: "black", fontSize: "13px" }}>
                        {assembly[checkLang].bioSect1}
                      </Link>
                      <br />
                      <img
                        src={partiwise}
                        alt="img"
                        className="mt-3 mb-2"
                        style={{ width: "65%" }}
                      />
                      <div className=" justify-content-center">
                        <div
                          className="mb-0"
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          Political Group
                        </div>
                        <img
                          src={councilgraph}
                          alt="img"
                          className="mb-4 mt-1 justify-content-start"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};
export default LegislativeCouncil;
