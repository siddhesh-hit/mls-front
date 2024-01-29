import React from "react";
import { useEffect, useState } from "react";
import Governor from "../../assets/rajyapal.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { API } from "../../config";
import { getApi } from "../../service/axiosInterceptors";
import LoaderComponents from "../loader";
const HomeSection1 = () => {
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

  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("mr");

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
      await getApi("parishad/active")
        .then((res) => {
          setServerData((prev) => ({
            ...prev,
            vidhanParishad: {
              ...prev.vidhanParishad,
              marathi: {
                ...prev.vidhanParishad.marathi,
                description: res.data.data.marathi.description,
              },
              english: {
                ...prev.vidhanParishad.english,
                description: res.data.data.english.description,
              },
              banner: res.data.data.banner_image,
            },
          }));
        })
      await getApi("sabha/active")
        .then((res) => {
          setServerData((prev) => ({
            ...prev,
            vidhanSabha: {
              ...prev.vidhanSabha,
              marathi: {
                ...prev.vidhanSabha.marathi,
                description: res.data.data.marathi.description,
              },
              english: {
                ...prev.vidhanSabha.english,
                description: res.data.data.english.description,
              },
              banner: res.data.data.banner_image,
            },
          }));
        })
    }
    catch (err) {
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
                        serverData.vidhanParishad.banner.destination +
                        "/" +
                        serverData.vidhanParishad.banner.filename
                      }
                      alt=""
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="text-block">
                    <div id="about-text" style={{
                      display: "inline-block",
                      position: "relative",
                    }}>
                      <b>{lang === "mr"
                        ? serverData.vidhanParishad.marathi.title
                        : serverData.vidhanParishad.english.title}</b>
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
                    <div className="info mt-2" style={{ color: "black" }}>
                      {lang === "mr"
                        ? serverData.vidhanParishad.marathi.description
                        : serverData.vidhanParishad.english.description}
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link
                          to="LegislativeCouncil"
                          style={{ textDecoration: "none" }}
                        >
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            {lang === "mr"
                              ? serverData.describelink.marathi
                              : serverData.describelink.english}
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
                  <div style={{ height: "200px" }}>
                    <img
                      src={Governor}
                      // src={
                      //   API.baseUrl +
                      //   serverData.vidhanSabha.banner.destination +
                      //   "/" +
                      //   serverData.vidhanSabha.banner.filename
                      // }
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="text-block">
                    <div id="about-text " style={{
                      display: "inline-block",
                      position: "relative",
                    }}>
                      <b>{lang === "mr"
                        ? serverData.Rajyapal.marathi.title
                        : serverData.Rajyapal.english.title}</b>
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
                    <div className="info mt-2" style={{ color: "black" }}>
                      {lang === "mr"
                        ? serverData.Rajyapal.marathi.description
                        : serverData.Rajyapal.english.description}
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link to="/Governor" style={{ textDecoration: "none" }}>
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            {lang === "mr"
                              ? serverData.describelink.marathi
                              : serverData.describelink.english}
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
                        serverData.vidhanSabha.banner.destination +
                        "/" +
                        serverData.vidhanSabha.banner.filename
                      }
                      alt=""
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="text-block">
                    <div id="about-text" style={{
                      display: "inline-block",
                      position: "relative",
                    }}>
                      <b>{lang === "mr"
                        ? serverData.vidhanSabha.marathi.title
                        : serverData.vidhanSabha.english.title}</b>
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
                    <div className="info mt-2" style={{ color: "black" }}>
                      {lang === "mr"
                        ? serverData.vidhanSabha.marathi.description
                        : serverData.vidhanSabha.english.description}
                      <div style={{ marginTop: "3%", textDecoration: "none" }}>
                        <Link
                          to="LegislativeAssembly"
                          style={{ textDecoration: "none" }}
                        >
                          <b style={{ fontSize: "15px", color: "blue" }}>
                            {lang === "mr"
                              ? serverData.describelink.marathi
                              : serverData.describelink.english}
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
