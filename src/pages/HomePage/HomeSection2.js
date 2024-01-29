import React from "react";
import homevidhan from "../../assets/_MG_5418 1.jpg";
import { useEffect, useState } from "react";
import { Col, Row, Carousel } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Nagpur from "../../assets/nagpur.jpg";
import Mumbai from "../../assets/mumbai.jpg";
import { getApi } from "../../service/axiosInterceptors";
import LoaderComponents from "../loader";

const HomeSection1 = () => {
  const [lang, setLang] = useState("mr");
  const [loading, setLoading] = useState(true);
  
  const [data, setData] = useState({
    describelink: {
      marathi: "पुढे वाचा ",
      english: "Read More",
    },
    marathi: {
      title: " विधानमंडळ",
      description: "",
    },
    english: {
      title: "Vidhan Mandal",
      description: "",
    },
    banner: {},
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
      await getApi("mandal/active")
        .then((res) => {
          setData((prev) => ({
            ...prev,
            marathi: {
              ...prev.marathi,
              description: res.data.data.marathi.about_us[0].description,
            },
            english: {
              ...prev.english,
              description: res.data.data.english.about_us[0].description,
            },
            banner: res.data.data.mandal_image[0].image,
          }));
        })
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
        <section>
          <div className="container mb-4 " style={{ paddingTop: "258PX" }}>
            <Row>
              <Col
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className=" justify-content-center align-self-cen"
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={Mumbai}
                      alt="First slide"
                      style={{ marginTop: "5%", width: "100%" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={Nagpur}
                      alt="Second slide"
                      style={{ marginTop: "5%", width: "100%" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={homevidhan}
                      alt="Third slide"
                      style={{ marginTop: "5%", width: "100%" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>

              <Col
                lg={7}
                md={6}
                sm={12}
                xs={12}
                className="justify-content-center align-items-center mt-2"
              >
                <div className="topic-info text-center">
                  <div className="section-title d-flex justify-content-center align-items-center">
                    <b>
                      {lang === "mr" ? data.marathi.title : data.english.title}
                      <hr
                        className=" d-flex justify-content-center align-items-center mt-0"
                        style={{
                          width: "100%",
                          border: "none",
                          height: "3px",
                          opacity: "1",
                          background:
                            "linear-gradient(to right, green, #FAD02C)",
                        }}
                      />
                    </b>
                  </div>
                  <div className="info" style={{ lineHeight: "25px" }}>
                    {lang === "mr"
                      ? data.marathi.description
                      : data.english.description}
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#000088",
                      width: "max-content",
                      padding: "4px",
                      marginTop: "0",
                      borderRadius: "5px",
                    }}
                  >
                    <Link to="/Aboutus" style={{ textDecoration: "none" }}>
                      <b
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: "Sakal Marathi",fontWeight:"400"
                        }}
                      >
                        {lang === "mr"
                          ? data.describelink.marathi
                          : data.describelink.english}
                        <i className="fa fa-chevron-right "></i>
                        <i className="fa fa-chevron-right "></i>
                      </b>
                    </Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeSection1;
