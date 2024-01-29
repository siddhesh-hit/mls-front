import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import { getApi } from "../../service/axiosInterceptors";
import { API } from "../../config";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [lang, setLang] = useState("mr");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gallery, setGallery] = useState([]);
  const [serverData, setServerData] = useState({
    describelink: {
      marathi: "पुढे वाचा ",
      english: "Read More",
    },
    vidhanSabha: {
      marathi: {
        title: "विधानसभा",
        description: "",
      },
      english: {
        title: "Vidhan Sabha",
        description: "",
      },
      banner: {},
    },
    Phototitle: {
      marathi: "फोटो आणि व्हिडिओ गॅलरी",
      english: "Photo and Video Gallery",
    },
    View: {
      marathi: " पुढे वाचा",
      english: "Read More",
    },
    linktitle: {
      marathi: "इतर महत्वाचा दुवा",
      english: "Other Important Link",
    },
    vidhanParishad: {
      marathi: {
        title: "विधानपरिषद",
        description: "",
        imageText: "विधान भवन, मुंबई",
      },
      english: {
        title: "Vidhan Parishad",
        description: "",
        imageText: "Vidhan Bhavan, Mumbai",
      },
      banner: {},
    },
    Rajyapal: {
      marathi: {
        title: "राज्यपाल",
        description:
          "महाराष्ट्राचे राज्यपाल हे महाराष्ट्र राज्याचे घटनात्मक प्रमुख आहेत आणि भारताच्या राज्यघटनेत परिभाषित केलेल्या अधिकारांचा वापर करतात. राज्यपाल हे राज्यातील विद्यापीठांचे माजी कुलगुरू देखील आहेत. राज्याच्या विविध क्षेत्रांच्या विकासाशी संबंधित राज्यघटनेच्या कलम ३७१(२) अन्वये आणि  ",
        imageText: "विधान भवन, मुंबई",
      },
      english: {
        title: "Governor",
        description:
          " The Governor of Maharashtra is the Constitutional Head of the State of Maharashtra and exercises powers as defined in the Constitution of India. The Governor is also the ex-official Chancellor of universities in the State.",
        imageText: "Vidhan Bhavan, Mumbai",
      },
      banner: {},
    },
  });

  function showSlide(index) {
    galleryItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  const galleryItems = document.querySelectorAll(".gallery-item");

  const fetchData = async () => {
    await getApi("gallery")
      .then((res) => {
        setGallery(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    showSlide(currentSlide);
  }, [currentSlide]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <HomeSection2 />
      <HomeSection1 />

      <section>
        <div className="photo-galleryhome  mb-5">
          <div className="section-head text-center mt-5">
            {lang === "mr"
              ? serverData.Phototitle.marathi
              : serverData.Phototitle.english}
          </div>
          <hr
            className="mt-0 button_less"
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
                // onClick={prevSlide}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="next"
                // onClick={nextSlide}
                style={{ transform: "translateY(-500%" }}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </Container>
        </div>
      </section>

      {/* <HomeSection3 /> */}
      <HomeSection4 />

      <section className="mb-5">
        <div className="block-link container mb-1 mt-5 pt-3 ">
          <div className="container-fluid justify-content-center">
            <div>
              <div
                className="about-head text-center"
                style={{
                  color: "#000000",
                }}
              >
                <div
                  id="about-text"
                  style={{
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  {lang === "mr"
                    ? serverData.linktitle.marathi
                    : serverData.linktitle.english}
                  <div
                    className="underline"
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: "0",
                      width: "100%",
                      height: "5px",
                      background: "linear-gradient(to right, green, yellow)",
                      opacity: "1",
                    }}
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <button className=" col-lg-2 link-Btn  align-content">
                  <Link
                    to="http://mls.org.in/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      padding: "2px",
                    }}
                  >
                    http://mls.org.in/
                  </Link>
                </button>
                <button className=" col-lg-2 link-Btn align-content">
                  <Link
                    to="https://gr.maharashtra.gov.in"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    https:// gr.maharashtra.gov.in
                  </Link>
                </button>
                <button className="col-lg-2 link-Btn  align-content">
                  <Link
                    target="_blank"
                    to="https://gr.maharashtra.gov.in"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    https:// gr.maharashtra.gov.in
                  </Link>
                </button>
                <button className="col-lg-2 link-Btn  align-content">
                  <Link
                    target="_blank"
                    to="https://beams.mahakosh.gov.in"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    https:// beams.mahakosh.gov.in
                  </Link>
                </button>
              </div>

              <div>
                <div className="row align-content">
                  <button className="col-lg-2 link-Btn align-content">
                    <Link
                      target="_blank"
                      to="https://directorate.marathi.gov.in"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "max-content",
                      }}
                    >
                      https:// directorate.marathi.gov.in
                    </Link>
                  </button>
                  <button className="col-lg-2 link-Btn align-content">
                    <Link
                      target="_blank"
                      to="https://eci.gov.in/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      https://eci.gov.in/
                    </Link>
                  </button>
                  <button className="col-lg-2 link-Btn align-content">
                    <Link
                      target="_blank"
                      to=" https://main.sci.govin/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      https://main.sci.govin/
                    </Link>
                  </button>
                </div>
              </div>
              <br />
              <div className="mt-3 text-center mb-3">
                <Link to="/Link-section " style={{ textDecoration: "none" }}>
                  <b style={{ fontSize: "15px", color: "blue" }}>
                    {lang === "mr"
                      ? serverData.View.marathi
                      : serverData.View.english}
                  </b>
                  <i
                    className="fa fa-chevron-right "
                    style={{ color: "blue" }}
                  ></i>
                  <i
                    className="fa fa-chevron-right "
                    style={{ color: "blue" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default HomePage;
