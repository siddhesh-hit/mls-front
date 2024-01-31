import React from "react";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useLang from "../utils/useLang";

const FeedBack = () => {
  const data = {
    title: {
      marathi: "अभिप्राय",
      english: "Feedback",
    },
    button: {
      marathi: "सबमिट",
      english: "Submit",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "अभिप्राय",
      english: "Feedback",
    },
    marathi: {
      messagehead: "आम्हाला संदेश पाठवा",
      message: " आपल्या मौल्यवान सूचनांसह आम्हाला संदेश पाठवा",
      ContactHead: "आमच्याशी संपर्क साधा",
      address: "पत्ता ओळ , पत्ता ओळ ",
      Contactmessage: "contact-us@mlslibrary.com",
      numbercontact: "९१-२२-५५५-०१०८",
      subjecthead: "विषय",
      placeselect: "कृपया विषय निवडा",
      Quest1: "तुमचे पुर्ण नाव",
      Quest2: "तुमचा ईमेल पत्ता",
      feedbackPlace: "आपला अभिप्राय",
      dropdown: {
        one: "विधानमंडळ",
        two: " विधानपरिषद",
        three: "विधानसभा",
        four: "सत्र दिनदर्शिका",
        five: "ग्रंथालय",
        six: "इतर",
      },
    },
    english: {
      messagehead: "Send us a Message",
      message: " Send us a message with valuable suggestion",
      ContactHead: "Contact US",
      address: "Address line 1,Address line 2",
      Contactmessage: "contact-us@mlslibrary.com",
      numbercontact: "91-22-555-0108",
      subjecthead: "Subject",
      placeselect: "Please select Subject",
      Quest1: "Your Full Name",
      Quest2: "Your Email-id",
      feedbackPlace: "Your Feedback",
      dropdown: {
        one: "Vidhan Mandal",
        two: "Council",
        three: "Assembly",
        four: "Session Calender",
        five: "Library",
        six: "Other",
      },
    },
  };

  const { lang } = useLang();
  return (
    <div className="help-deskpage" style={{ overflow: "hidden" }}>
      <section>
        <div
          className="container-fluid justify-content-center "
          style={{ paddingTop: "200px" }}
        >
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
              className="about-head text-center"
              style={{ color: "#2C21A4" }}
            >
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
            <div className="box1 mt-3">
              <Row>
                <Col className="box1 p-4" lg={8} md={8} sm={12} xs={12}>
                  <Row className="m-2">
                    <Col style={{ fontSize: "20px" }}>
                      <b>
                        {lang === "mr"
                          ? data.marathi.messagehead
                          : data.english.messagehead}
                      </b>
                    </Col>
                  </Row>
                  <Row className="m-2 mb-3">
                    <Col style={{ fontSize: "13px", color: "grey" }}>
                      {lang === "mr"
                        ? data.marathi.message
                        : data.english.message}
                    </Col>
                  </Row>
                  <Row className="m-2 mb-4">
                    <Col lg={5} md={5} sm={12} xs={12}>
                      <Form.Label htmlFor="full_name" className=" p-2 m-0">
                        {lang === "mr"
                          ? data.marathi.Quest1
                          : data.english.Quest1}
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        className=" box1 p-3 "
                        placeholder={
                          lang === "mr"
                            ? data.marathi.Quest1
                            : data.english.Quest1
                        }
                        aria-label="तुमचे पुर्ण नाव"
                        aria-describedby="basic-addon1"
                      />
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12}>
                      <Form.Label htmlFor="full_name" className=" p-2 m-0">
                        {lang === "mr"
                          ? data.marathi.Quest2
                          : data.english.Quest2}
                        <span className="required p-2" style={{ color: "red" }}>
                          *
                        </span>
                      </Form.Label>
                      <Form.Control
                        className=" box1 p-3 "
                        placeholder={
                          lang === "mr"
                            ? data.marathi.Quest2
                            : data.english.Quest2
                        }
                        aria-label="तुमचा ईमेल पत्ता"
                        aria-describedby="basic-addon1"
                      />
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <Form.Label htmlFor="full_name">
                        {lang === "mr"
                          ? data.marathi.subjecthead
                          : data.english.subjecthead}
                      </Form.Label>
                      <InputGroup className="subject_textarea mb-4">
                        <Form.Select
                          aria-label="User Type Selection"
                          // value={formdata.designation}
                          name="designation"
                          // onChange={handleChange}
                          // onBlur={validateForm} // Validate on blur
                        >
                          <option>
                            {lang === "mr"
                              ? data.marathi.placeselect
                              : data.english.placeselect}
                          </option>
                          <option>
                            {lang === "mr"
                              ? data.marathi.dropdown.one
                              : data.english.dropdown.one}
                          </option>
                          <option>
                            {lang === "mr"
                              ? data.marathi.dropdown.two
                              : data.english.dropdown.two}
                          </option>
                          <option>
                            {lang === "mr"
                              ? data.marathi.dropdown.three
                              : data.english.dropdown.three}
                          </option>
                          <option>
                            {lang === "mr"
                              ? data.marathi.dropdown.four
                              : data.english.dropdown.four}
                          </option>
                          <option>
                            {lang === "mr"
                              ? data.marathi.dropdown.five
                              : data.english.dropdown.five}
                          </option>
                          <option>
                            {lang === "mr"
                              ? data.marathi.dropdown.six
                              : data.english.dropdown.six}
                          </option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col>
                      <InputGroup className="subject_textarea mb-4">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder={
                            lang === "mr"
                              ? data.marathi.feedbackPlace
                              : data.english.feedbackPlace
                          }
                        ></textarea>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Col className="m-4 text-start  ">
                    <Button
                      className="submit-feed ml-2 mt-0 "
                      style={{ width: "max-content", color: "white" }}
                    >
                      {lang === "mr"
                        ? data.button.marathi
                        : data.button.english}
                    </Button>
                  </Col>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Col className="m-4" style={{ fontSize: "22px" }}>
                    <b>
                      {lang === "mr"
                        ? data.marathi.ContactHead
                        : data.english.ContactHead}
                    </b>
                  </Col>
                  <hr />
                  <Col className="contact-info">
                    <ul type="none">
                      <li className="p-2">
                        <i className="fa-solid fa-location-dot"></i>
                        {lang === "mr"
                          ? data.marathi.address
                          : data.english.address}
                      </li>
                      <li className="p-2">
                        <i className="fa fa-envelope m-2"></i>
                        contact-us@mlslibrary.com
                      </li>
                      <li className="p-2">
                        <i className="fa fa-phone m-2"></i>
                        {lang === "mr"
                          ? data.marathi.numbercontact
                          : data.english.numbercontact}
                      </li>
                    </ul>
                  </Col>
                  <hr />
                  <Col>
                    <Row className="icons-contact mt-4">
                      <Col style={{ marginLeft: "25px" }}>
                        <i className="fa fa-twitter p-2 "></i>
                        <i className="fa fa-instagram p-2"></i>
                        <i className="fa fa-facebook p-2  text-center"></i>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};
export default FeedBack;
