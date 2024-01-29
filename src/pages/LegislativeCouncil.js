import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import partiwise from "../assets/about/biograph- party.jpg";
import member4 from "../assets/image 24.png";
import councilgraph from "../assets/about/COUNCIL.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getApi } from "../service/axiosInterceptors";
import { API } from "../config";
import { Container } from "react-bootstrap";
import LoaderComponents from "./loader";

const LegislativeCouncil = () => {
  const [lang, setLang] = useState("mr");
  const [serverData, setServerData] = useState({});
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    title: {
      marathi: "विधानपरिषद",
      english: "Legislative Council",
    },
    describe: {
      marathi: "",
      english: "",
    },
    heading: {
      marathi: " महाराष्ट्र विधान परिषद",
      english: " Maharashtra Legislative Council",
    },
    bioSect: {
      marathi: "चरित्रात्मक माहिती",
      english: "Biographical Information",
    },
    biosect1: {
      marathi: "सदस्यांचे पक्षनिहाय प्रतिनिधीत्व",
      english: "Party-wise Representation of Members",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "विधानपरिषद",
      english: "Council",
    },
    member: {
      marathi: "",
      english: "",
    },
    headerImp: {
      marathi: "महत्वाची प्रकाशने",
      english: "Important Publications",
    },
    structure: {
      marathi: "रचना",
      english: "Structure",
    },
    name: {
      marathi: "महाराष्ट्र विधान परिषद",
      english: "Maharashtra VidhanParishad",
    },
    Type: {
      marathi: "प्रकार -  अपर  हाऊस ",
      english: "Type - Upper house",
    },
    Term: {
      marathi: "मुदत मर्यादा - 6 वर्षे",
      english: "Term Limit -6 Years",
    },
    seats: {
      marathi: "जागा-७८",
      english: "seats-78",
    },
  });

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

  const fetchData = async () => {
    try {
      await getApi("parishad/active").then((res) => {
        const newData = res.data.data;
        setServerData(newData);
        setData((prev) => {
          return {
            ...prev,
            describe: {
              marathi: newData.marathi.description,
              english: newData.english.description,
              legislative_council: newData.legislative_council,
            },
            member: {
              marathi: newData.marathi.legislative_council,
              english: newData.english.legislative_council,
              legislative_council: newData.legislative_council,
            },
          };
        });
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <div>
        <Header />
        <section className="background ">
          <div className="container-fluid justify-content-center section-top-space mb-0 ">
            <ul className="breadcrumb ">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
            </ul>
            <div className="about-head text-center pb-2">
              <div
                id="about-text"
                style={{
                  display: "inline-block",
                  position: "relative",
                }}
              >
                {lang === "mr" ? data.title.marathi : data.title.english}
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
              className=" mt-5"
              style={{ paddingRight: "45px", paddingLeft: "45px" }}
            >
              <Row className=" mb-0 mt-3">
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="box-shadow"
                  style={{ background: "white" }}
                >
                  <div
                    className="mt-4"
                    style={{
                      width: "100%",
                    }}
                  >
                    <img
                      src={
                        serverData &&
                        serverData.banner_image &&
                        API.baseUrl +
                          serverData.banner_image.destination +
                          "/" +
                          serverData.banner_image.filename
                      }
                      alt=" "
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="section-info mt-3 ">
                    <p style={{ padding: "2%" }}>
                      {lang === "mr"
                        ? data.describe.marathi
                        : data.describe.english}
                    </p>
                  </div>
                  <hr
                    className="m-0"
                    style={{ color: "green", width: "100%" }}
                  />
                  <div className="row p-2 m-1 mt-0">
                    <div
                      className="Bio-head mt-0 text-center justify-content-center "
                      style={{ fontSize: "16px", lineHeight: "22px" }}
                    >
                      {lang === "mr"
                        ? data.headerImp.marathi
                        : data.headerImp.english}
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
                        <Link style={{ textDecoration: "none" }}>मराठी</Link> /
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                      <Col lg={12} className="p-1 text-start">
                        २. विधान परिषद नियम पुस्तिका(
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                      <Col lg={12} className="p-1 text-start">
                        ३. सभापतींनी दिलेले निदेश(
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                      <Col lg={12} className="p-1 text-start">
                        ४. महाराष्ट्र विधानपरिषद सदस्य ( पक्षांतराच्या कारणावरून
                        निरर्हता ) नियम १९८६(
                        <Link style={{ textDecoration: "none" }}>मराठी</Link>/
                        <Link style={{ textDecoration: "none" }}>इंग्रजी</Link>)
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Row className="mb-3 mt-1 justify-content-center ">
                    {lang === "mr" && data.member.marathi !== "" ? (
                      <>
                        {data.member.marathi.slice(0, 1).map((item, index) => (
                          <Row style={{ justifyContent: "center" }} key={index}>
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
                                    data.member.legislative_council &&
                                    data.member.legislative_council.length > 0
                                      ? API.baseUrl +
                                        data.member.legislative_council[0]
                                          .council_profile.destination +
                                        "/" +
                                        data.member.legislative_council[0]
                                          .council_profile.filename
                                      : ""
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
                        ))}
                        {data.member.marathi.slice(1, 2).map((item, index) => (
                          <Row style={{ justifyContent: "center" }} key={index}>
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
                                    data.member.legislative_council &&
                                    data.member.legislative_council.length > 1
                                      ? API.baseUrl +
                                        data.member.legislative_council[1]
                                          .council_profile.destination +
                                        "/" +
                                        data.member.legislative_council[1]
                                          .council_profile.filename
                                      : ""
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
                        ))}

                        {data.member.marathi.slice(2, 4).map((item, index) => (
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
                                  data.member.legislative_council &&
                                  data.member.legislative_council.length > 0
                                    ? API.baseUrl +
                                      data.member.legislative_council[index + 2]
                                        .council_profile.destination +
                                      "/" +
                                      data.member.legislative_council[index + 2]
                                        .council_profile.filename
                                    : ""
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
                        ))}
                      </>
                    ) : data.member.marathi !== "" ? (
                      <>
                        <Row style={{ justifyContent: "center" }}>
                          {data.member.english
                            .slice(0, 1)
                            .map((item, index) => (
                              <Row
                                style={{ justifyContent: "center" }}
                                key={index}
                              >
                                <Col
                                  lg={4}
                                  md={5}
                                  sm={12}
                                  xs={12}
                                  key={index}
                                  className="mb-3"
                                  style={{ margin: 0, padding: "15px" }}
                                >
                                  <div className="img-boxing ">
                                    <img
                                      alt="img"
                                      src={
                                        data.member.legislative_council &&
                                        data.member.legislative_council.length >
                                          0
                                          ? API.baseUrl +
                                            data.member.legislative_council[
                                              index
                                            ].council_profile.destination +
                                            "/" +
                                            data.member.legislative_council[
                                              index
                                            ].council_profile.filename
                                          : ""
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
                            ))}
                          {data.member.english
                            .slice(1, 2)
                            .map((item, index) => (
                              <Row
                                style={{ justifyContent: "center" }}
                                key={index}
                              >
                                <Col
                                  lg={4}
                                  md={5}
                                  sm={12}
                                  xs={12}
                                  key={index}
                                  className="mb-3"
                                  style={{ margin: 0, padding: "15px" }}
                                >
                                  <div className="img-boxing ">
                                    <img
                                      alt="img"
                                      src={
                                        data.member.legislative_council &&
                                        data.member.legislative_council.length >
                                          1
                                          ? API.baseUrl +
                                            data.member.legislative_council[1]
                                              .council_profile.destination +
                                            "/" +
                                            data.member.legislative_council[1]
                                              .council_profile.filename
                                          : ""
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
                            ))}
                          {data.member.english
                            .slice(2, 4)
                            .map((item, index) => (
                              <Col
                                lg={4}
                                md={4}
                                sm={12}
                                xs={12}
                                style={{ margin: 0, padding: "15px" }}
                                key={index}
                              >
                                <div className="img-boxing ">
                                  <img
                                    alt="img"
                                    src={
                                      data.member.legislative_council &&
                                      data.member.legislative_council.length > 0
                                        ? API.baseUrl +
                                          data.member.legislative_council[
                                            index + 2
                                          ].council_profile.destination +
                                          "/" +
                                          data.member.legislative_council[
                                            index + 2
                                          ].council_profile.filename
                                        : ""
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
                            ))}
                        </Row>
                      </>
                    ) : (
                      <>No data found</>
                    )}
                  </Row>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="justify-content-end text-end mb-3"
                >
                  <div
                    className="box-shadow text-center justify-content-center "
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      background: "white",
                      display: "flex",
                    }}
                  >
                    <div className="Bio-head mt-0 text-center justify-content-center ">
                      {lang === "mr"
                        ? data.structure.marathi
                        : data.structure.english}
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
                      <img
                        src={member4}
                        className="image"
                        alt="Member"
                        style={{ width: "100px" }}
                      />
                    </div>
                    <div className="m-1">
                      {lang === "mr" ? data.name.marathi : data.name.english}
                    </div>
                    <div className="m-1">
                      {lang === "mr" ? data.Type.marathi : data.Type.english}
                    </div>
                    <div className="m-1">
                      {lang === "mr" ? data.Term.marathi : data.Term.english}
                    </div>
                    <div className="m-1">
                      {lang === "mr" ? data.seats.marathi : data.seats.english}
                    </div>
                    <hr style={{ color: "green", width: "100%" }} />
                    <div className="Bio-head  justify-content-center ">
                      {lang === "mr"
                        ? data.bioSect.marathi
                        : data.bioSect.english}

                      <hr
                        className="button_less"
                        style={{
                          width: "100%",
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
                    <div>
                      <Link to="#" style={{ color: "black", fontSize: "13px" }}>
                        {lang === "mr"
                          ? data.biosect1.marathi
                          : data.biosect1.english}
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
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        >
                          Political Group
                        </div>
                        <img
                          src={councilgraph}
                          alt="img"
                          className="mb-4 mt-1 justify-content-start"
                          // style={{ marginLeft: "-32%" }}
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
      <Footer />
    </>
  );
};
export default LegislativeCouncil;
