import React, { useState } from "react";
import { Link } from "react-router-dom";

import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
// import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";

import ModalHome from "../../Components/Common/Modal";
import Gallery from "../../Components/Common/Gallery";

import { home, homeLink } from "../../constant";

import useLang from "../../utils/useLang";

const HomePage = () => {
  const { lang, checkLang } = useLang();
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <ModalHome show={modalShow} onHide={() => setModalShow(false)} />

      <HomeSection2 />
      <HomeSection1 />

      <Gallery link="gallery" />

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
                  {home[checkLang].linkTitle}
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
                {homeLink.slice(0, 4).map((item, index) => (
                  <button
                    className=" col-lg-2 link-Btn  align-content"
                    key={index}
                  >
                    <Link
                      to={item}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        padding: "2px",
                      }}
                    >
                      {item}
                    </Link>
                  </button>
                ))}
              </div>

              <div className="row align-content">
                {homeLink.slice(4, 7).map((item, index) => (
                  <button
                    className=" col-lg-2 link-Btn  align-content"
                    key={index}
                  >
                    <Link
                      to={item}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        padding: "2px",
                      }}
                    >
                      {item}
                    </Link>
                  </button>
                ))}
              </div>

              <br />
              <div className="mt-3 text-center mb-3">
                <Link to="/Link-section " style={{ textDecoration: "none" }}>
                  <b style={{ fontSize: "15px", color: "blue" }}>
                    {home[checkLang].view}
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
    </>
  );
};
export default HomePage;
