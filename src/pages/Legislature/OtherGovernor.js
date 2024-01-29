import React from "react";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Accordion, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import news1 from "../../assets/Rectangle 6607.jpg";
import { getApiById } from "../../service/axiosInterceptors";
import { API } from "../../config";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const OtherGovernor = () => {
  const [lang, setLang] = useState("mr");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [server, setServer] = useState({});
  const [loader, setLoader] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const data = {
    title: {
      marathi: "राज्यपाल",
      english: "Governor",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: " विधिमंडळ",
      english: "Legislature",
    },
    Link3: {
      marathi: "राज्यपाल",
      english: "Governor",
    },
    marathi: {
      table1title: "माननीय राज्यपाल",
      table1head: "मा. राज्यपालांचे अभिभाषण",
      table2title: "राज्यपाल",
      political: "राजकीय कारकीर्द",
      table1head2: "माजी राज्यपाल",
      Genderhead: "लिंग:",
      BDatehead: "जन्म दिनांक :",
      BirthPlaceH: "जन्म ठीकाण : ",
    },
    english: {
      table1title: "Honourable Governor",
      table1head: "Hons. Governor Address",
      table2title: "Rajypal",
      political: "Political Career",
      table1head2: "Former Governor",
      Genderhead: "Gender: ",
      BDatehead: "Date of Birth :",
      BirthPlaceH: "Place of Birth :",
    },
  };

  const handleSignupAction = () => {
    setIsSignedUp(true);
  };
  const location = useLocation();
  const id = location.search.split("=")[1];
  const queryParams = new URLSearchParams(location.search);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % 8);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + 8) % 8);
  };

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/jpg");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "jpg", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("Profile.pdf");
    });
  };

  const updateSlider = () => {
    const sliderContent = document.querySelector(".slider-content");
    const cardWidth =
      document.querySelector(".review-card-media").offsetWidth + 20;
    sliderContent.style.transform = `translateX(${
      -currentIndex * cardWidth
    }px)`;
  };

  const updateLocalStorage = (newLang) => {
    localStorage.setItem("lang", newLang);
  };

  const fetchData = async () => {
    await getApiById("rajyapal", id)
      .then((res) => setServer(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

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
        <section className="section-top-space">
          <div className="Page-back">
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
              <li>{lang === "mr" ? data.Link3.marathi : data.Link3.english}</li>
            </ul>

            <Container>
              <div className="about-head text-center pb-2">
                <div
                  id="about-text"
                  style={{
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  {lang === "mr"
                    ? data.marathi.table2title
                    : data.english.table2title}
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
              {server && server.marathi && server.english && (
                <div>
                  <Row>
                    <Col lg={9} md={9} sm={12} xs={12}>
                      <Row>
                        <Col lg={4} md={3} sm={4} xs={4} className="m-4">
                          <div style={{ width: "100%" }}>
                            <img
                              alt="img"
                              src={
                                API.baseUrl +
                                server.image.destination +
                                "/" +
                                server.image.filename
                              }
                            ></img>
                          </div>
                        </Col>
                        <Col
                          lg={5}
                          md={6}
                          sm={6}
                          xs={6}
                          style={{ marginTop: "25px" }}
                        >
                          <Col>
                            <Row>
                              <Col>
                                <b>
                                  {
                                    server[
                                      lang === "mr" ? "marathi" : "english"
                                    ].name
                                  }
                                </b>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                {
                                  server[lang === "mr" ? "marathi" : "english"]
                                    .elected_date
                                }
                              </Col>
                            </Row>
                          </Col>
                          <Col className="mt-3">
                            <b>
                              {lang === "mr"
                                ? data.marathi.Genderhead
                                : data.english.Genderhead}
                            </b>
                          </Col>
                          <Col>
                            {
                              server[lang === "mr" ? "marathi" : "english"]
                                .gender
                            }
                          </Col>
                          <Col className="mt-3">
                            <b>
                              {lang === "mr"
                                ? data.marathi.BDatehead
                                : data.english.BDatehead}
                            </b>
                          </Col>
                          <Col>{server.date_of_birth}</Col>
                          <Col className="mt-3">
                            <b>
                              {lang === "mr"
                                ? data.marathi.BirthPlaceH
                                : data.english.BirthPlaceH}
                            </b>
                          </Col>
                          <Col>
                            {
                              server[lang === "mr" ? "marathi" : "english"]
                                .place_of_birth
                            }
                          </Col>
                          <Button
                            className="mt-2"
                            style={{
                              background: "#000088",
                              width: "50px",
                              padding: "0",
                              color: "white",
                            }}
                            onClick={
                              isSignedUp ? downloadPDF : handleSignupAction
                            }
                            disabled={!isSignedUp || loader}
                            title={
                              isSignedUp
                                ? "Download PDF"
                                : "Sign Up to Download PDF"
                            }
                          >
                            {loader ? <span>Loading...</span> : <span> </span>}
                            <i
                              className="fa fa-download"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3">
                        <b>
                          {lang === "mr"
                            ? data.marathi.political
                            : data.english.political}
                          :
                        </b>
                        <br />
                        <p className="mt-4">
                          {
                            server[lang === "mr" ? "marathi" : "english"]
                              .political_career
                          }
                          <br />
                          <div style={{ marginTop: "3%" }}>
                            <b>
                              <Link
                                to={`/${server.url}`}
                                target="blank"
                                style={{
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                {server.url}
                              </Link>
                            </b>
                          </div>
                        </p>
                      </p>
                    </Col>
                    <Col
                      lg={3}
                      md={3}
                      sm={12}
                      xs={12}
                      className="year-box1 "
                      style={{ height: "max-content" }}
                    >
                      <Col
                        className="col1-head p-2 text-center"
                        style={{ backgroundColor: "#CE5D3D", color: "white" }}
                      >
                        {lang === "mr"
                          ? data.marathi.table1head
                          : data.english.table1head}
                      </Col>

                      <Accordion
                        defaultActiveKey="0"
                        flush
                        style={{ border: "none" }}
                      >
                        {server.speeches.map((item, index) => (
                          <Accordion.Item
                            eventKey={index}
                            key={index}
                            className="year-accordian-item"
                            style={{ borderBottom: "0" }}
                          >
                            <Accordion.Header className="year-accordian">
                              {item.year.split("-")[0]}
                            </Accordion.Header>
                            <Accordion.Body className="year-accordian-body">
                              <ul>
                                {item.values.map((i, n) => (
                                  <li key={n} className="mb-1">
                                    <a
                                      href={
                                        API.baseUrl +
                                        i.content.destination +
                                        "/" +
                                        i.content.filename
                                      }
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-capitalize"
                                    >
                                      {i.language}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                      <Col
                        className="text-center p-2"
                        style={{
                          borderBottom: "1px solid black",
                          borderTop: "1px solid black",
                        }}
                      >
                        <Link
                          to="/FormerGovernor"
                          style={{ color: "red", textDecoration: "none" }}
                        >
                          <b>
                            {lang === "mr"
                              ? data.marathi.table1head2
                              : data.english.table1head2}
                          </b>
                        </Link>
                      </Col>
                    </Col>
                  </Row>
                </div>
              )}
            </Container>
          </div>
          <Container fluid className="mt-4">
            <Row>
              <div
                className="head-mediascroll mb-3 "
                style={{ paddingLeft: "90px" }}
              >
                Latest Update
              </div>
              <div className="slider-section mt-0">
                <div
                  className="slider-container-media"
                  style={{ width: "87%" }}
                >
                  <div className="slider-content">
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                    <div className="review-card-media">
                      <div className="flex-profile">
                        <img src={news1} alt="img" style={{ width: "100%" }} />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        25 August
                        <div style={{ fontSize: "14px" }}>
                          PROBATIONERS OF INDIAN RAILWAYS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end " style={{ paddingRight: "100px" }}>
                <i
                  className="fa fa-arrow-left  m-2 button-scroll p-1"
                  onClick={prevSlide}
                ></i>
                <i
                  className="fa fa-arrow-right m-2 button-scroll p-1"
                  onClick={nextSlide}
                ></i>
              </div>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
};
export default OtherGovernor;
