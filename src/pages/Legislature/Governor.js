import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import LoaderComponents from "../loader";
import Slider from "../../Components/Common/Slider";

import { getApi } from "../../service/axiosInterceptors";
import { API } from "../../config";
import { governor, slider } from "../../constant";

import useLang from "../../utils/useLang";

const Governor = () => {
  const [server, setServer] = useState({});
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  const { lang, checkLang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApi("rajyapal/current").then((res) =>
          setServer(res.data.data)
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
        <section className="container-fluid section-top-space">
          <div className="Page-back pb-4">
            <ul className="breadcrumb">
              <li>
                <Link to="/">{governor[checkLang].link1}</Link>
              </li>
              <li>{governor[checkLang].link2}</li>
              <li>{governor[checkLang].link3}</li>
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
                  {governor[checkLang].table2title}
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
                              <b>{governor[checkLang].namehead}</b>
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
                            <b>{governor[checkLang].genderhead}</b>
                            <span>
                              {
                                server[lang === "mr" ? "marathi" : "english"]
                                  .gender
                              }
                            </span>
                          </Col>

                          <Col className=" mb-3">
                            <b>{governor[checkLang].bDatehead}</b>
                            <span>{server.date_of_birth}</span>
                          </Col>

                          <Col className="mb-3">
                            <b>{governor[checkLang].birthPlace}</b>
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
                        <b>{governor[checkLang].political}:</b>
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
                        {governor[checkLang].table1head}
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
                          <b>{governor[checkLang].table1head2}</b>
                        </Link>
                      </Col>
                    </Col>
                  </Row>
                </div>
              )}
            </Container>
          </div>

          {/* make sure to upload the data in the given format, else modify the slider */}
          <Slider data={slider} field={"Latest Update"} key={"diff1"} />
        </section>
      </div>
    </>
  );
};
export default Governor;
