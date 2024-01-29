import React from "react";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Accordion, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import news1 from "../../assets/Rectangle 6607.jpg";
import { getApi } from "../../service/axiosInterceptors";
import { API } from "../../config";
import LoaderComponents from "../loader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Governor = () => {
  const [lang, setLang] = useState("mr");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [server, setServer] = useState({});
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  const updateLocalStorage = (newLang) => {
    localStorage.setItem("lang", newLang);
  };

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
      namehead: "नाव:",
      Genderhead: "लिंग:",
      BDatehead: "जन्म दिनांक :",
      BirthPlaceH: "जन्म ठीकाण : ",
    },
    english: {
      table1title: "Honourable Governor",
      table1head: "Hon  . Governor Address",
      table2title: "Rajypal",
      political: "Political Career",
      table1head2: "Former Governor",
      namehead: "Name:",
      Genderhead: "Gender: ",
      BDatehead: "Date of Birth :",
      BirthPlaceH: "Place of Birth :",
    },
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % 8);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + 8) % 8);
  };

  const updateSlider = () => {
    const sliderContent = document.querySelector(".slider-content");
    const reviewCardMedia = document.querySelector(".review-card-media");

    if (sliderContent && reviewCardMedia) {
      const cardWidth = reviewCardMedia.offsetWidth + 20;
      sliderContent.style.transform = `translateX(${
        -currentIndex * cardWidth
      }px)`;
    } else {
      // console.error("Slider content or review card media not found");
    }
  };

  const fetchData = async () => {
    try {
      await getApi("rajyapal/current").then((res) => setServer(res.data.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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

  if (loading) {
    return <LoaderComponents />;
  }

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

  return (
    <>
      <div>
        <Header />
        <section className="container-fluid section-top-space">
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
                  <Row className="governor-section">
                    <Col
                      lg={9}
                      md={8}
                      sm={12}
                      xs={12}
                      className="actual-receipt"
                    >
                      <Row>
                        <Col lg={4} md={12} sm={12} xs={12} className="m-4">
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
                          md={12}
                          sm={12}
                          xs={12}
                          style={{ marginTop: "25px" }}
                        >
                          <Col>
                            <Col className="mb-2">
                              <b>
                                {lang === "mr"
                                  ? data.marathi.namehead
                                  : data.english.namehead}
                              </b>
                              <span>
                                <b>
                                  {
                                    server[
                                      lang === "mr" ? "marathi" : "english"
                                    ].name
                                  }
                                </b>
                              </span>
                            </Col>
                          </Col>
                          <Col>
                            <Row>
                              <Col className="mb-3">
                                {
                                  server[lang === "mr" ? "marathi" : "english"]
                                    .elected_date
                                }
                              </Col>
                            </Row>
                          </Col>
                          <Col className=" mb-3">
                            <b>
                              {lang === "mr"
                                ? data.marathi.Genderhead
                                : data.english.Genderhead}
                            </b>
                            <span>
                              {
                                server[lang === "mr" ? "marathi" : "english"]
                                  .gender
                              }
                            </span>
                          </Col>

                          <Col className=" mb-3">
                            <b>
                              {lang === "mr"
                                ? data.marathi.BDatehead
                                : data.english.BDatehead}
                            </b>
                            <span>{server.date_of_birth}</span>
                          </Col>

                          <Col className="mb-3">
                            <b>
                              {lang === "mr"
                                ? data.marathi.BirthPlaceH
                                : data.english.BirthPlaceH}
                            </b>
                            <span>
                              {
                                server[lang === "mr" ? "marathi" : "english"]
                                  .place_of_birth
                              }
                            </span>
                          </Col>

                          <Button
                            className=" mt-2"
                            style={{
                              background: "#000088",
                              width: "50px",
                              padding: "0",
                              color: "white",
                            }}
                            onClick={downloadPDF}
                            disabled={!(loader === false)}
                            title="Download PDF "
                          >
                            {loader ? <span></span> : <span></span>}
                            <i
                              className="fa fa-download "
                              style={{
                                fontSize: "20px",
                                color: "white",
                              }}
                            ></i>
                          </Button>
                        </Col>
                      </Row>
                      <div className="mt-3">
                        <b>
                          {lang === "mr"
                            ? data.marathi.political
                            : data.english.political}
                          :
                        </b>
                        <br />
                        <div
                          className="mt-4 tool-gover"
                          style={{ wordSpacing: "5px", wordBreak: "keep-all" }}
                        >
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
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={3}
                      md={4}
                      sm={10}
                      xs={10}
                      className="box-shadow p-0 former-table"
                      style={{ height: "max-content" }}
                    >
                      <Col
                        className="col1-head p-3 text-center"
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
          <Container fluid className="mt-4 mb-4">
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
export default Governor;
