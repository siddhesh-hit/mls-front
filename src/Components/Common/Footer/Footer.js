import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footer1 from "../../assets/footer/Item → Link → Meity_logo.png.png";
import footer2 from "../../assets/footer/logo1.png";
import footer3 from "../../assets/footer/Item → Link → data-gov-logo.png.png";
import footer4 from "../../assets/footer/Item → Link → india-gov-logo.png.png";
import footer5 from "../../assets/footer/Item → Link → pm-india-logo.png.png";
import footer6 from "../../assets/footer/Item → Link → GIGW.jpeg.jpg";
import footer7 from "../../assets/footer/Item → Link → WCAG.jpeg.jpg";
import footer8 from "../../assets/footer/Item → Link → SSLcertificate.png.jpg";
import footer9 from "../../assets/footer/Item → Link → w3c.png.jpg";
import footer10 from "../../assets/footer/Item → Link → kp_kn.jpeg.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-5 ">
        <div className="container-fluid">
          <Row>
            <Col className=" lg={1} md={1} sm={1} xs={1} mb-2 ">
              <a href="#">
                <img src={footer1} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2">
              <a href="#">
                <img src={footer2} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2 ">
              <a href="#">
                <img src={footer3} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2">
              <a href="#">
                <img src={footer4} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2">
              <a href="#">
                <img src={footer5} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2">
              <a href="#">
                <img src={footer6} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2 ">
              <a href="#">
                <img src={footer7} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2">
              <a href="#">
                <img src={footer8} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2 ">
              <a href="#">
                <img src={footer9} />
              </a>
            </Col>
            <Col className="lg={1} md={1} sm={1} xs={1} mb-2 ">
              <a href="#">
                <img src={footer10} />
              </a>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="  flex-column align-items-start"
            >
              &copy; {new Date().getFullYear()} कॉपीराइट © 2023 कंपनीचे नाव सर्व
              हक्क राखीव
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="lg={6} md={6} sm={12} xs={12}"
            >
              <Row className="footer-links">
                <Col
                  className="lg={4} md={4} sm={12} xs={12}"
                  style={{ paddingRight: 0 }}
                >
                  <a href="#">सेवा अटी</a>
                </Col>
                <Col
                  className="lg={4} md={4} sm={12} xs={12}"
                  style={{ paddingRight: 0 }}
                >
                  <a href="#">
                    गोपनीयता धोरण
                    <div className="vertical-lines" />
                  </a>
                </Col>

                <Col
                  className="lg={4} md={4} sm={12} xs={12}"
                  style={{ paddingRight: 0 }}
                >
                  <a href="Feedback">
                    अभिप्राय
                    <div className="vertical-lines" />
                  </a>
                </Col>

                <Col className="lg={4} md={4} sm={12} xs={12}">
                  <a href="/HelpDesk">
                    मदत आणि समर्थन
                    <div className="vertical-lines" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
