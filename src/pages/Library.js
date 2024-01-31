import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { getApi } from "../service/axiosInterceptors";
import { API } from "../config";
import LoaderComponents from "./loader";
import samplePDF1 from "../assets/Documents/02- Library Collection.pdf";
import samplePDF2 from "../assets/Documents/03- Library Work.pdf";
import samplePDF3 from "../assets/Documents/04- Library Software.pdf";
import samplePDF4 from "../assets/Documents/05- Library Committee.pdf";
import samplePDF5 from "../assets/Documents/06- Library Rules.pdf";
import samplePDF6 from "../assets/Documents/Library Contact.pdf";
import useLang from "../utils/useLang";
const Library = () => {
  const [gallery, setGallery] = useState([]);
  const [newData, setNewData] = useState({});
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    title: {
      marathi: "विधानमंडळ ग्रंथालय",
      english: "Library",
    },
    Phototitle: {
      marathi: "फोटो आणि व्हिडिओ गॅलरी",
      english: "Photo and Video Gallery",
    },
    banner: "",

    drop1: {
      marathi: "ग्रंथालय साहित्य संग्रह",
      english: "Library literature collection",
    },
    drop2: {
      marathi: "ग्रंथालयचे कार्य",
      english: "Library work",
    },
    drop3: {
      marathi: "ग्रंथालय आज्ञावली",
      english: "Ordered the library",
    },
    drop4: {
      marathi: "ग्रंथालय समिती",
      english: "Library Committee",
    },
    drop5: {
      marathi: "ग्रंथालय नियम",
      english: "Library Rules",
    },
    drop6: {
      marathi: "संपर्क",
      english: "Contact",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "ग्रंथालय",
      english: "Library",
    },
    describe: {
      marathi: "",
      english: "",
    },
  });

  let currentSlide = 0;
  const galleryItems = document.querySelectorAll(".gallery-item");

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  function nextSlide() {
    if (currentSlide < galleryItems.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  showSlide(currentSlide);

  const { lang, checkLang } = useLang();

  function showSlide(index) {
    galleryItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  const fetchData = async () => {
    try {
      await getApi("library/active")
        .then((res) => {
          setNewData(res.data.data);
          setData((prev) => ({
            ...prev,
            describe: {
              marathi: res.data.data.marathi.description,
              english: res.data.data.english.description,
            },
            banner: res.data.data.banner,
          }));
        })
        .catch((err) => console.log(err));
      await getApi("gallery")
        .then((res) => {
          setGallery(res.data.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  showSlide(currentSlide);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <div>
        <section className=" justify-content-center section-top-space">
          <Container fluid>
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
            </ul>
            <div
              style={{
                width: "100%",
              }}
            >
              <img
                src={
                  data.banner &&
                  API.baseUrl +
                    data.banner.destination +
                    "/" +
                    data.banner.filename
                }
                alt="library"
                style={{
                  width: "100%",
                  height: "41vh",
                  objectFit: "cover",
                }}
              />
            </div>
            <Container className="mt-2">
              <Row className="col-gap-library">
                <Col lg={3} md={4} sm={12} xs={12} className="mt-5 ">
                  <Row style={{ boxShadow: "0px 0px 4px 0px #00000040" }}>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-head p-3"
                      style={{ backgroundColor: "#CE5D3D", color: "white" }}
                    >
                      {lang === "mr" ? data.title.marathi : data.title.english}
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-filter p-2"
                      style={{ boxShadow: "0px 0px 1px 0px #00000040" }}
                    >
                      <div className=" p-2" style={{ position: "relative" }}>
                        <a
                          className="link-library"
                          href={samplePDF1}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "mr"
                            ? data.drop1.marathi
                            : data.drop1.english}
                          <span style={{ marginLeft: "auto" }}>
                            <i
                              className="fa fa-chevron-right icon-calender"
                              style={{ color: "#CE5D3D" }}
                            ></i>
                          </span>
                        </a>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-filter p-2"
                      style={{ boxShadow: "0px 0px 1px 0px #00000040" }}
                    >
                      <div className=" p-2" style={{ position: "relative" }}>
                        <a
                          className="link-library"
                          href={samplePDF2}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "mr"
                            ? data.drop2.marathi
                            : data.drop2.english}
                          <span style={{ marginLeft: "auto" }}>
                            <i
                              className="fa fa-chevron-right icon-calender"
                              style={{ color: "#CE5D3D" }}
                            ></i>
                          </span>
                        </a>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-filter p-2"
                      style={{ boxShadow: "0px 0px 1px 0px #00000040" }}
                    >
                      <div className=" p-2" style={{ position: "relative" }}>
                        <a
                          className="link-library"
                          href={samplePDF3}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "mr"
                            ? data.drop3.marathi
                            : data.drop3.english}
                          <span style={{ marginLeft: "auto" }}>
                            <i
                              className="fa fa-chevron-right icon-calender"
                              style={{ color: "#CE5D3D" }}
                            ></i>
                          </span>
                        </a>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-filter p-2"
                      style={{ boxShadow: "0px 0px 1px 0px #00000040" }}
                    >
                      <div className=" p-2" style={{ position: "relative" }}>
                        <a
                          className="link-library"
                          href={samplePDF4}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "mr"
                            ? data.drop4.marathi
                            : data.drop4.english}
                          <span style={{ marginLeft: "auto" }}>
                            <i
                              className="fa fa-chevron-right icon-calender"
                              style={{ color: "#CE5D3D" }}
                            ></i>
                          </span>
                        </a>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-filter p-2"
                      style={{ boxShadow: "0px 0px 1px 0px #00000040" }}
                    >
                      <div className=" p-2" style={{ position: "relative" }}>
                        <a
                          className="link-library"
                          href={samplePDF5}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "mr"
                            ? data.drop5.marathi
                            : data.drop5.english}
                          <span style={{ marginLeft: "auto" }}>
                            <i
                              className="fa fa-chevron-right icon-calender"
                              style={{ color: "#CE5D3D" }}
                            ></i>
                          </span>
                        </a>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="col1-filter  p-2"
                      style={{ boxShadow: "0px 0px 1px 0px #00000040" }}
                    >
                      <div className=" p-2" style={{ position: "relative" }}>
                        <a
                          className="link-library"
                          href={samplePDF6}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "mr"
                            ? data.drop6.marathi
                            : data.drop6.english}
                          <span style={{ marginLeft: "auto" }}>
                            <i
                              className="fa fa-chevron-right icon-calender"
                              style={{ color: "#CE5D3D" }}
                            ></i>
                          </span>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12} className="mt-5">
                  <Row className=" mt-0">
                    <div className="container-fluid justify-content-center mb-2">
                      <div className="about-head text-center">
                        <div
                          id="about-text"
                          style={{
                            display: "inline-block",
                            position: "relative", // Add this line
                          }}
                        >
                          {lang === "mr"
                            ? data.title.marathi
                            : data.title.english}
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
                      </div>
                    </div>
                    <p className="library mt-3">
                      {lang === "mr"
                        ? data.describe.marathi
                        : data.describe.english}
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>

            <section>
              <div className="photo-galleryhome  mt-2 mb-5">
                <div className="section-head text-center mt-5">
                  {lang === "mr"
                    ? data.Phototitle.marathi
                    : data.Phototitle.english}
                </div>
                <hr
                  className="button_less"
                  style={{
                    width: "20%",
                    border: "none",
                    height: "3px",
                    opacity: "1",
                    background: "linear-gradient(to right, green, #FAD02C)",
                  }}
                />
                <Container className="photo-video-container mb-5 ">
                  <div className="gallery-container">
                    <div className="gallery">
                      {gallery.map((media, index) => (
                        <div className="media" key={index}>
                          {media.mimetype.startsWith("image") && (
                            <img
                              src={`${API.baseUrl}${media.destination}/${media.filename}`}
                              alt={media.originalname}
                              style={{ width: "100%" }}
                            />
                          )}
                          {media.mimetype.startsWith("video") && (
                            <video controls>
                              <source
                                src={`${API.baseUrl}${media.destination}/${media.filename}`}
                                type={media.mimetype}
                              />
                            </video>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      className="prev"
                      style={{ transform: "translateY(-500%" }}
                      onClick={prevSlide}
                    >
                      <i className="fa fa-chevron-left"></i>
                    </button>
                    <button
                      className="next"
                      onClick={nextSlide}
                      style={{ transform: "translateY(-500%" }}
                    >
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </Container>
              </div>
            </section>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Library;
