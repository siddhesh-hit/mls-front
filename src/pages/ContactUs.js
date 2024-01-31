import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useLang from "../utils/useLang";
const ContactUs = () => {
  const data = {
    title: {
      marathi: "आमच्याशी संपर्क साधा",
      english: "Contact Us",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "संपर्क ",
      english: "Contact Us",
    },
    marathi: [
      {
        address: "पत्ता:-",
        VidhiTele: "विधानमंडळ दूरध्वनी क्रमांक:- ",
        Fax: "फॅक्स क्रमांक:-",
        addressField:
          "महाराष्ट्र विधानमंडळ, विधान भवन , बॅकबे रेक्लमेशन , विधान भवन मार्ग , मुंबई - ४०० ०३२.",
        TelePhoneNo:
          " ०२२-२२०२ ७३ ९९ / २२०२ ६३ ५४ / २२०२ ६८ ७९ / २२०२ ७७ ७५ / ७७",
        FaxNo: "०२२-२२०२ ४५ २४ / २२८२ ०८ २०",
        Email: "ई-मेल:-",
      },
    ],
    english: [
      {
        address: "Address:-",
        VidhiTele: "Legislature Telephone No:-",
        Fax: "Fax Number:-",
        addressField:
          "Maharashtra Legislature, Vidhan Bhavan, Backbay Reclamation, Vidhan Bhavan Marg, Mumbai - 400 032.",
        TelePhoneNo: "022-2202 73 99 / 2202 63 79 / 2202 77 75 / 77",
        FaxNo: "022-2202 45 24 /2282 08 20",
        Email: "E-Mail:-",
      },
    ],
  };

  const { lang, checkLang } = useLang();

  return (
    <>
      <div>
        <Container fluid className="section-top-space">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                {lang === "mr" ? data.Link1.marathi : data.Link1.english}
              </Link>
            </li>
            <li> {lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
          </ul>
          <Container>
            <div className="about-head text-center">
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
            <Row className="contact-section-col mt-5 mb-4">
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="address text-center p-4"
              >
                <Row className="p-2">
                  <Col>
                    <b>
                      {data[lang === "mr" ? "marathi" : "english"].map(
                        (item) => item.address
                      )}
                    </b>
                  </Col>
                  <Col style={{ textAlign: "start" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.addressField
                    )}
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    <b>
                      {data[lang === "mr" ? "marathi" : "english"].map(
                        (item) => item.VidhiTele
                      )}
                    </b>
                  </Col>
                  <Col style={{ textAlign: "start" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.TelePhoneNo
                    )}
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    <b>
                      {data[lang === "mr" ? "marathi" : "english"].map(
                        (item) => item.Fax
                      )}
                    </b>
                  </Col>
                  <Col style={{ textAlign: "start" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.FaxNo
                    )}
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    <b>
                      {data[lang === "mr" ? "marathi" : "english"].map(
                        (item) => item.Email
                      )}
                    </b>
                  </Col>
                  <Col style={{ textAlign: "start" }}>secy1-mls@mah.gov.in</Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="maps p-4 pt-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.107430801442!2d72.82118112424786!3d18.926638356646407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e96d790c07%3A0x5240aee242919df5!2sMaharashtra%20Vidhan%20Bhavan!5e0!3m2!1sen!2sin!4v1700648480582!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  title=""
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
