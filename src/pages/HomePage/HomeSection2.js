import React from "react";
import { useEffect, useState } from "react";
import { Col, Row, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import homevidhan from "../../assets/_MG_5418 1.jpg";
import Nagpur from "../../assets/nagpur.jpg";
import Mumbai from "../../assets/mumbai.jpg";
import LoaderComponents from "../loader";

import { getApi } from "../../service/axiosInterceptors";
import { home } from "../../constant";

import useLang from "../../utils/useLang";

const HomeSection1 = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    marathi: {
      vidhanMandal: "",
    },
    english: {
      vidhanMandal: "",
    },
    banner: {},
  });

  const { checkLang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApi("mandal/active").then((res) => {
          setData((prev) => ({
            ...prev,
            marathi: {
              ...prev.marathi,
              vidhanMandal: res.data.data.marathi.about_us[0].description,
            },
            english: {
              ...prev.english,
              vidhanMandal: res.data.data.english.about_us[0].description,
            },
            banner: res.data.data.mandal_image[0].image,
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
                      {home[checkLang].vidhanMandal_title}
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
                    {data[checkLang].vidhanMandal}
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
                          fontFamily: "Sakal Marathi",
                          fontWeight: "400",
                        }}
                      >
                        {home[checkLang].describeLink}

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
