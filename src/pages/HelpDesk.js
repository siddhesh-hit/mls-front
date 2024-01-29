import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const HelpDesk = () => {
  const [lang, setLang] = useState("mr");
  const [errors, setErrors] = useState({});

  const data = {
    title: {
      marathi: "मदत कक्ष",
      english: "Help Desk",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "मदत आणि समर्थन",
      english: "Help & Support ",
    },
    marathi: {
      Heading: "तुमची क्वेरी येथे पाठवा, आमचे कार्यकारी तुम्हाला मदत करतील",
      Quest1: "तुमचे पुर्ण नाव",
      Quest2: "तुमचा ईमेल पत्ता",
      Quest3: "तुमचा दूरध्वनी क्रमांक",
      Quest4: "तुमचा पत्ता",
      Quest5: "तुमचा संदेश येथे प्रविष्ट करा...",
      Button: " सबमिट करा",
      Contact: {
        head: "संपर्काची माहिती",
        tel1head: "विधानमंडळ दूरध्वनी क्रमांक  ",
        tel1No1: "०२२-२२०२ ७३ ९९",
        tel1No2: "२२०२ ६३ ५४",
        tel2head: " फॅक्स क्रमांक",
        tel2No1: "०२२-२२०२ ४५ २४",
        tel2No2: "२२८२ ०८ २०",
      },
      chat: {
        head: "चॅट करा",
        quest: " तुम्हाला आणखी मदत हवी आहे का?",
        linkh: " कृपया",
        link: " चॅट पर्यायावर क्लिक करा",
      },
    },
    english: {
      Heading: "Send your query here, our executive will help you",
      Quest1: "Your Full Name",
      Quest2: "Your Email-id",
      Quest3: "Your Phone Number",
      Quest4: "Your Address",
      Quest5: "Enter your message Here...",
      Button: "Submit ",
      Contact: {
        head: "Contact Details",
        tel1head: "Legislature Telephone Number ",
        tel1No1: "022-2202 73 99",
        tel1No2: "2202 63 54",
        tel2head: "Fax Number",
        tel2No1: "022-2202 45 24",
        tel2No2: "2282 08 20",
      },
      chat: {
        head: "Chat with us",
        quest: "Do you need further help?",
        linkh: "Please",
        link: "click on chat icon",
      },
    },
  };

  const [formdata] = useState({
    email: "",
    full_name: "",
    phone_number: "",
    address: "",
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

  const validateForm = () => {
    const newErrors = {};
    if (formdata.full_name === "") {
      newErrors.full_name = "नाव अनिवार्य आहे";
    } else if (/\d/.test(formdata.full_name)) {
      newErrors.full_name = "नावात संख्या नसावी";
    } else if (formdata.full_name.trim().length < 5) {
      newErrors.full_name = "नाव अनिवार्य आहे";
    } else {
      newErrors.full_name = "";
    }

    if (formdata.address === "") {
      newErrors.address = "अनिवार्य आहे";
    } else {
      newErrors.address = "";
    }

    if (formdata.email === "") {
      newErrors.email = "ईमेल अनिवार्य आहे";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "कृपया वैध ईमेल पत्ता प्रविष्ट करा";
    } else {
      newErrors.email = "";
    }

    if (formdata.phone_number === "") {
      newErrors.phone_number = "कृपया फोन नंबर प्रविष्ट करा";
    } else if (!/^\d+$/.test(formdata.phone_number)) {
      newErrors.phone_number = " अवैध फोन नंबर";
    } else if (formdata.phone_number.length !== 10) {
      newErrors.phone_number = "कृपया १० अंकी फोन नंबर टाका";
    } else {
      newErrors.phone_number = "";
    }
    setErrors(newErrors);
  };

  const handleSubmit = async () => {
    validateForm();
  };

  return (
    <div className="help-deskpage " style={{ overflow: "hidden" }}>
      <Header />
      <section>
        <div className="container-fluid justify-content-center section-top-space">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                {lang === "mr" ? data.Link1.marathi : data.Link1.english}
              </Link>
            </li>
            <li> {lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
          </ul>

          <Container>
            <div
              className="about-head text-center mb-3"
              style={{
                color: "#2C21A4",
              }}
            >
              <div
                id="about-text"
                style={{ display: "inline-block", position: "relative" }}
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
            <div className="box1 p-4 mt-3">
              <Row className="m-2">
                <Col style={{ fontSize: "20px" }}>
                  <b>
                    {lang === "mr"
                      ? data.marathi.Heading
                      : data.english.Heading}
                  </b>
                </Col>
              </Row>
              <Row className="p-1 m-2">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Control
                    className="box1 p-3 help-form"
                    placeholder={
                      lang === "mr" ? data.marathi.Quest1 : data.english.Quest1
                    }
                    aria-label="तुमचे पुर्ण नाव"
                    aria-describedby="basic-addon1"
                  />
                  {errors.full_name && (
                    <p className="error m-3 mb-0 mt-0">{errors.full_name}</p>
                  )}
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Control
                    className="box1 p-3 help-form"
                    placeholder={
                      lang === "mr" ? data.marathi.Quest2 : data.english.Quest2
                    }
                    aria-label="तुमचा ईमेल पत्ता"
                    aria-describedby="basic-addon1"
                  />
                  {errors.email && (
                    <p className="error m-3 mb-0 mt-0">{errors.email}</p>
                  )}
                </Col>
              </Row>
              <Row className="p-1 m-2">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Control
                    className=" box1 p-3  help-form"
                    placeholder={
                      lang === "mr" ? data.marathi.Quest3 : data.english.Quest3
                    }
                    aria-label="तुझा दूरध्वनी क्रमांक"
                    aria-describedby="basic-addon1"
                  />
                  {errors.phone_number && (
                    <p className="error m-3 mb-0 mt-0">{errors.phone_number}</p>
                  )}
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Control
                    className="box1 p-3 help-form"
                    placeholder={
                      lang === "mr" ? data.marathi.Quest4 : data.english.Quest4
                    }
                    aria-label="तुमचा पत्ता"
                    aria-describedby="basic-addon1"
                  />
                  {errors.address && (
                    <p className="error m-3 mb-0 mt-0">{errors.address}</p>
                  )}
                </Col>
              </Row>

              <Row className="p-1 m-2" style={{ height: "max-content" }}>
                <Col>
                  <Form.Control
                    className=" box1 p-3 help-form mb-1"
                    placeholder={
                      lang === "mr" ? data.marathi.Quest5 : data.english.Quest5
                    }
                    type="textarea"
                    aria-label="तुमचा संदेश येथे प्रविष्ट करा..."
                    aria-describedby="basic-addon1"
                  />
                </Col>
              </Row>
              <Row className="p-2 m-3">
                <Button
                  className="p-2 m-3"
                  style={{
                    backgroundColor: "#000088",
                    width: "max-content",
                    marginTop: "3%",
                    left: "2px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => handleSubmit()}
                >
                  {lang === "mr" ? data.marathi.Button : data.english.Button}
                </Button>
              </Row>
            </div>
            <div className="box1 p-4 mt-5">
              <Row style={{ justifyContent: "space-between" }}>
                <Col className="ml-2">
                  <b>
                    {lang === "mr"
                      ? data.marathi.Contact.head
                      : data.english.Contact.head}
                  </b>
                  <Col style={{ fontWeight: "500", lineHeight: "30px" }}>
                    {lang === "mr"
                      ? data.marathi.Contact.tel1head
                      : data.english.Contact.tel1head}
                    :
                    <a href="tel:०२२-२२०२ ७३ ९९">
                      {lang === "mr"
                        ? data.marathi.Contact.tel1No1
                        : data.english.Contact.tel1No1}
                    </a>
                    /
                    <a href="tel:२२०२ ६३ ५४">
                      {lang === "mr"
                        ? data.marathi.Contact.tel1No2
                        : data.english.Contact.tel1No2}
                    </a>
                  </Col>
                  <Col style={{ fontWeight: "500", lineHeight: "30px" }}>
                    {lang === "mr"
                      ? data.marathi.Contact.tel2head
                      : data.english.Contact.tel2head}
                    :
                    <a href="tel:०२२-२२०२ ४५ २४">
                      {lang === "mr"
                        ? data.marathi.Contact.tel2No1
                        : data.english.Contact.tel2No1}
                    </a>
                    /
                    <a href="tel:२२८२ ०८ २०">
                      {lang === "mr"
                        ? data.marathi.Contact.tel2No2
                        : data.english.Contact.tel2No2}
                    </a>
                  </Col>
                </Col>
                {/* <Col lg={4} md={6} sm={12} xs={12}>
                  <Row className="chat">
                    <Col lg={8} md={8} sm={12} xs={12} className="mt-2">
                      <h6>
                         
                        <b>
                          {lang === "mr"
                            ? data.marathi.chat.head
                            : data.english.chat.head}
                        </b>
                      </h6>
                      <Col>
                        {lang === "mr"
                          ? data.marathi.chat.quest
                          : data.english.chat.quest}
                      </Col>
                      <Col>
                        {lang === "mr"
                          ? data.marathi.chat.linkh
                          : data.english.chat.linkh}
                        <Link style={{ textDecoration: "none" }}>
                          {lang === "mr"
                            ? data.marathi.chat.link
                            : data.english.chat.link}
                        </Link>
                      </Col>
                    </Col>
                    <Col lg={2} md={2} sm={12} xs={12} className="mt-4">
                      <img src={chat}/>
                    </Col>
                  </Row>
                </Col> */}
              </Row>
            </div>
          </Container>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default HelpDesk;
