import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Row from "react-bootstrap/Row";
import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getApi, getApiById } from "../service/axiosInterceptors";
import { API } from "../config";
import { Link } from "react-router-dom";
import LoaderComponents from "./loader";

const HomePage = () => {
  const [gallery, setGallery] = useState([]);
  const [lang, setLang] = useState("mr");
  const [newData, setNewData] = useState({});
  const [textWidth, setTextWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    title: {
      marathi: "विधानमंडळ",
      english: "Vidhan Mandal",
    },
    view: {
      marathi: "PDF पहा",
      english: "View PDF",
    },
    Phototitle: {
      marathi: "फोटो आणि व्हिडिओ गॅलरी",
      english: "Photo and Video Gallery",
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
      marathi: "विधानमंडळ",
      english: "Vidhan Mandal",
    },
    marathi: [],
    english: [],
    mandal_image: [],
  });

  let currentSlide = 0;
  const galleryItems = document.querySelectorAll(".gallery-item");
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  function showSlide(index) {
    galleryItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

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

  const fetchData = async () => {
    try {
      await getApi("mandal/active").then((res) => {
        setNewData(res.data.data);
        setData((prev) => ({
          ...prev,
          marathi: res.data.data.marathi.about_us,
          english: res.data.data.english.about_us,
          mandal_image: res.data.data.mandal_image,
        }));
      });

      await getApi("gallery").then((res) => {
        setGallery(res.data.data);
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

  const handleLanguage = (newLang) => {
    queryParams.set("lang", newLang);
    navigate(`?${queryParams.toString()}`);
  };

  const updateLocalStorage = (newLang) => {
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const newLang = queryParams.get("lang") || storedLang || "mr";
    setLang(newLang);
    updateLocalStorage(newLang);
  }, [location.search]);

  useEffect(() => {
    const textElement = document.getElementById("about-text");
    if (textElement) {
      setTextWidth(textElement.offsetWidth);
    }
  }, [lang]);

  if (loading) {
    return <LoaderComponents />;
  }

  return (
    <>
      <div>
        <Header />
        <section>
          <div className="container-fluid justify-content-center section-top-space">
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
              <li>{lang === "mr" ? data.Link3.marathi : data.Link3.english}</li>
            </ul>

            <div className="about-head text-center ">
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

            <Container>
              {data[lang === "mr" ? "marathi" : "english"].map(
                (item, index, array) => (
                  <React.Fragment key={index}>
                    <Row
                      className={`justify-content-center mt-5 ${
                        index % 2 === 0 ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="col-lg-6 text-center mt-2">
                        <img
                          src={
                            data.mandal_image[index] &&
                            API.baseUrl +
                              data.mandal_image[index].image.destination +
                              "/" +
                              data.mandal_image[index].image.filename
                          }
                          alt=" "
                          className="image1"
                        />
                      </div>
                      <div className="col-lg-6 information-about">
                        <div
                          className="section-headtop"
                          style={{
                            display: "inline-block",
                            position: "relative",
                          }}
                        >
                          {item.title}
                          <div
                            className="underline mt-2"
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

                        <div className="about-info mt-3">
                          {item.description}
                        </div>
                        <a
                          href={
                            data.mandal_image[index] &&
                            API.baseUrl +
                              data.mandal_image[index].documents.destination +
                              "/" +
                              data.mandal_image[index].documents.filename
                          }
                          target="_blank"
                          rel="noreferrer"
                          // download={
                          //   data.mandal_image[index] &&
                          //   API.baseUrl +
                          //     data.mandal_image[index].image.destination +
                          //     "/" +
                          //     data.mandal_image[index].image.filename
                          // }
                        >
                          <Button
                            variant="primary"
                            className="pdf-btn mt-3"
                            style={{
                              width: "160px",
                              backgroundColor: "#000088",
                              borderRadius: "5px",
                              fontFamily: "Sakal Marathi",
                              padding: "1%",
                              fontSize: "16px",
                            }}
                            id="openPdfButton"
                          >
                            {lang === "mr"
                              ? data.view.marathi
                              : data.view.english}
                            <i
                              className="fa fa-eye "
                              style={{ paddingLeft: "5px" }}
                            ></i>
                          </Button>
                        </a>
                      </div>
                    </Row>
                    {array.length - 1 !== index && (
                      <hr
                        className="mt-5"
                        style={{
                          border: "none",
                          height: "1px",
                          opacity: "1",
                          margin: "auto",
                          background:
                            "repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px)",
                        }}
                      />
                    )}
                  </React.Fragment>
                )
              )}
            </Container>
          </div>

          <section>
            <div className="photo-galleryhome text-center mt-2 ">
              <div className="section-head text-center mt-5">
                {lang === "mr"
                  ? data.Phototitle.marathi
                  : data.Phototitle.english}
              </div>
              <hr
                className="button_less mt-2"
                style={{
                  width: "20%",
                  border: "none",
                  height: "3px",
                  opacity: "1",
                  background: "linear-gradient(to right, green, #FAD02C)",
                }}
              />
              <Container className="photo-video-container ">
                <div className="gallery-container">
                  <div className="gallery ">
                    {gallery.map((media, index) => (
                      <div className="media mb-4" key={index}>
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
        </section>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
