import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { putApi } from "../../service/axiosInterceptors";
import axios from "axios";

import useLang from "../../utils/useLang";
const Footer = () => {
  const [count, setCount] = useState(0);
  const [fetched, setFetched] = useState(true);

  const data = {
    link1: {
      marathi: "साइट मॅप",
      english: "Site map",
    },
    marathi: [
      {
        reserved: "कॉपीराइट  कंपनीचे नाव सर्व हक्क राखीव",
        Terms: "सेवा अटी",
        Privacy: " गोपनीयता धोरण",
        feedback: "अभिप्राय",
        Help: "मदत आणि समर्थन",
        visitor: "भेट देणाऱ्यांची संख्या :",
      },
    ],
    english: [
      {
        reserved: "Copyright Company  All Rights Reserved.",
        Terms: "Terms of service",
        Privacy: "Privacy policy",
        feedback: "Feedback ",
        Help: "Help & Support",
        visitor: "Visitors Count:",
      },
    ],
  };

  const { lang, checkLang } = useLang();

  const counterFooter = async () => {
    await axios
      .put("https://mlsapi.handsintechnology.in/api/visit")
      .then((res) => {
        setFetched(true);
        setCount(res.data.data.count);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!fetched) {
    }
    counterFooter();
  }, [fetched]);

  return (
    <>
      <footer className="footer ">
        <div className="container-fluid">
          <Row className="mt-2 mb-0 ">
            <Col
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className="  flex-column align-items-start"
            >
              &copy; {new Date().getFullYear()}
              {data[lang === "mr" ? "marathi" : "english"].map(
                (item) => item.reserved
              )}
            </Col>
            <Col lg={2} md={6} sm={12} xs={12} className="d-flex counter ">
              {data[lang === "mr" ? "marathi" : "english"].map(
                (item) => item.visitor
              )}
              <div style={{ backgroundColor: "black", borderRadius: "5px" }}>
                {count}
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className="text-center">
              <Row className="footer-links">
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="lg={4} md={4} sm={12} xs={12}"
                  style={{ paddingRight: 0 }}
                >
                  <a href="#" style={{ textDecoration: "none" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.Terms
                    )}
                  </a>
                </Col>
                <Col lg={3} md={3} sm={12} xs={12} style={{ paddingRight: 0 }}>
                  <a href="#" style={{ textDecoration: "none" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.Privacy
                    )}
                    <div className="vertical-lines p-0" />
                  </a>
                </Col>

                <Col lg={3} md={3} sm={12} xs={12} style={{ paddingRight: 0 }}>
                  <Link to="/FeedBack" style={{ textDecoration: "none" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.feedback
                    )}
                    <div className="vertical-lines p-0" />
                  </Link>
                </Col>

                <Col lg={3} md={3} sm={12} xs={12} className="text-center">
                  <Link to="/HelpDesk" style={{ textDecoration: "none" }}>
                    {data[lang === "mr" ? "marathi" : "english"].map(
                      (item) => item.Help
                    )}
                    <div className="vertical-lines p-0" />
                  </Link>
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
