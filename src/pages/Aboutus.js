import React, { useEffect, useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Gallery from "../Components/Common/Gallery";
import LoaderComponents from "./loader";

import { getApi } from "../service/axiosInterceptors";
import { API } from "../config";
import { aboutUs } from "../constant";

import useLang from "../utils/useLang";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const { lang, checkLang } = useLang();

  const [data, setData] = useState({
    marathi: [],
    english: [],
    mandal_image: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApi("mandal/active").then((res) => {
          setData((prev) => ({
            ...prev,
            marathi: res.data.data.marathi.about_us,
            english: res.data.data.english.about_us,
            mandal_image: res.data.data.mandal_image,
          }));
        });
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

  return (
    <>
      <div>
        <section>
          <div className="container-fluid justify-content-center section-top-space">
            <ul className="breadcrumb">
              <li>
                <Link to="/">{aboutUs[checkLang].link1}</Link>
              </li>
              <li>{aboutUs[checkLang].link2}</li>
              <li>{aboutUs[checkLang].link3}</li>
            </ul>

            <div className="about-head text-center ">
              <div
                id="about-text"
                style={{
                  display: "inline-block",
                  position: "relative",
                }}
              >
                {aboutUs[checkLang].link3}
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
              {data[checkLang].map((item, index, array) => (
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

                      <div className="about-info mt-3">{item.description}</div>
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
                          {aboutUs[checkLang].view}
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
              ))}
            </Container>
          </div>

          <Gallery link="gallery" />
        </section>
      </div>
    </>
  );
};
export default HomePage;
