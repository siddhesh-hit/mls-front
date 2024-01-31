import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { API } from "../../config";
import { getApi } from "../../service/axiosInterceptors";
import { home } from "../../constant";

import LoaderComponents from "../loader";
import useLang from "../../utils/useLang";

const HomeSection1 = () => {
  const [loading, setLoading] = useState(true);
  const [serverData, setServerData] = useState({
    marathi: {
      vidhanParishad: "",
      vidhanSabha: "",
      rajyaPal: "",
    },
    english: {
      vidhanParishad: "",
      vidhanSabha: "",
      rajyaPal: "",
    },
    banner: {
      vidhanParishad: {},
      vidhanSabha: {},
      rajyaPal: {},
    },
  });

  const { lang, checkLang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApi("parishad/active").then((res) => {
          setServerData((prev) => ({
            ...prev,
            marathi: {
              ...prev.marathi,
              vidhanParishad: res.data.data.marathi.description,
            },
            english: {
              ...prev.english,
              vidhanParishad: res.data.data.english.description,
            },
            banner: {
              ...prev.banner,
              vidhanParishad: res.data.data.banner_image,
            },
          }));
        });

        await getApi("sabha/active").then((res) => {
          setServerData((prev) => ({
            ...prev,
            marathi: {
              ...prev.marathi,
              vidhanSabha: res.data.data.marathi.description,
            },
            english: {
              ...prev.english,
              vidhanSabha: res.data.data.english.description,
            },
            banner: {
              ...prev.banner,
              vidhanSabha: res.data.data.banner_image,
            },
          }));
        });

        await getApi("rajyapal/current").then((res) => {
          setServerData((prev) => ({
            ...prev,
            marathi: {
              ...prev.marathi,
              rajyaPal: res.data.data.marathi.political_career.substring(
                0,
                300
              ),
            },
            english: {
              ...prev.english,
              rajyaPal: res.data.data.english.political_career.substring(
                0,
                300
              ),
            },
            banner: {
              ...prev.banner,
              rajyaPal: res.data.data.image,
            },
          }));
        });

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <div>
        <section className="Page-home justify-content-center ">
          <Container fluid>
            <Row className="justify-content-center  p-3 pt-2 ">
              <Col
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className=" leftside-block justify-content-center align-items-center m-3"
              >
                <div className="block-infoleft ">
                  <div className="text-center">
                    <img
                      src={
                        API.baseUrl +
                        serverData.banner.vidhanParishad.destination +
                        "/" +
                        serverData.banner.vidhanParishad.filename
                      }
                      alt=""
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="text-block">
                    <div
                      id="about-text"
                      style={{
                        display: "inline-block",
                        position: "relative",
                      }}
                    >
                      <b>{home[checkLang].vidhanParishad_title}</b>
                      <div
                        className="underline"
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: "0",
                          width: "100%",
                          height: "5px",
                          background:
                            "linear-gradient(to right, green, yellow)",
                          opacity: "1",
                        }}
                      />
                    </div>
                    <div className="info mt-2" style={{ color: "black" }}>
                      {serverData[checkLang].vidhanParishad}
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link
                          to="LegislativeCouncil"
                          style={{ textDecoration: "none" }}
                        >
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            {home[checkLang].describeLink}
                            <i className="fa fa-chevron-right "></i>
                            <i className="fa fa-chevron-right "></i>
                          </b>
                          <i
                            className="fa-solid fa-chevrons-right"
                            style={{ color: " #e11305" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className=" leftside-block  justify-content-center align-items-center m-3"
              >
                <div className="block-infoleft ">
                  <div className="text-center">
                    <img
                      // src={Governor}
                      src={
                        API.baseUrl +
                        serverData.banner.rajyaPal.destination +
                        "/" +
                        serverData.banner.rajyaPal.filename
                      }
                      alt=""
                      style={{
                        borderRadius: "10px",
                        objectFit: "contain",
                        height: "250px",
                      }}
                    />
                  </div>
                  <div className="text-block">
                    <div
                      id="about-text "
                      style={{
                        display: "inline-block",
                        position: "relative",
                      }}
                    >
                      <b>{home[checkLang].rajyapal_title}</b>
                      <div
                        className="underline"
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: "0",
                          width: "100%",
                          height: "5px",
                          background:
                            "linear-gradient(to right, green, yellow)",
                          opacity: "1",
                        }}
                      />
                    </div>
                    <div className="info mt-2" style={{ color: "black" }}>
                      {serverData[checkLang].rajyaPal}
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link to="/Governor" style={{ textDecoration: "none" }}>
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            {home[checkLang].describeLink}
                            <i className="fa fa-chevron-right "></i>
                            <i className="fa fa-chevron-right "></i>
                          </b>
                          <i
                            className="fa-solid fa-chevrons-right"
                            style={{ color: " #e11305" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className=" leftside-block justify-content-center align-items-center m-3"
              >
                <div className="block-infoleft">
                  <div>
                    <img
                      src={
                        API.baseUrl +
                        serverData.banner.vidhanSabha.destination +
                        "/" +
                        serverData.banner.vidhanSabha.filename
                      }
                      alt=""
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="text-block">
                    <div
                      id="about-text"
                      style={{
                        display: "inline-block",
                        position: "relative",
                      }}
                    >
                      <b>{home[checkLang].vidhanSabha_title}</b>
                      <div
                        className="underline"
                        style={{
                          position: "absolute",
                          bottom: "-5px",

                          left: "0",
                          width: "100%",
                          height: "5px",
                          background:
                            "linear-gradient(to right, green, yellow)",
                          opacity: "1",
                        }}
                      />
                    </div>
                    <div className="info mt-2" style={{ color: "black" }}>
                      {serverData[checkLang].vidhanSabha}
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link
                          to="LegislativeAssembly"
                          style={{ textDecoration: "none" }}
                        >
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            {home[checkLang].describeLink}
                            <i className="fa fa-chevron-right "></i>
                            <i className="fa fa-chevron-right "></i>
                          </b>
                          <i
                            className="fa-solid fa-chevrons-right"
                            style={{ color: " #e11305" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default HomeSection1;
