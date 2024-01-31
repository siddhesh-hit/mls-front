import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Container, InputGroup, Button } from "react-bootstrap";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import useLang from "../../utils/useLang";
// import { useState } from "react";
const SessionCalender = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const data = {
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "सत्र दिनदर्शिका",
      english: "Session Calender",
    },
    marathi: {
      field1: " सभागृह",
      field2: "सत्र",
      field3: " वर्ष",
      field4: "कडून:",
      field5: "ते:",
      button: " अर्ज करा",
      placeholder: "शोध कीवर्ड प्रविष्ट करा",
      field6: "तारीख श्रेणी",
      calender: "दिवसाचा क्रम",
    },
    english: {
      field1: "House",
      field2: "Session",
      field3: "Year",
      field4: "From:",
      field5: "To:",
      field6: "Date Range",
      button: "Apply",
      placeholder: "Enter the Search Keyword",
      calender: "Order of the Day",
    },
  };

  const { lang, checkLang } = useLang();

  return (
    <>
      <section className="section-top-space">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                {lang === "mr" ? data.Link1.marathi : data.Link1.english}
              </Link>
            </li>
            <li> {lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
          </ul>
          <Container className="justify-content-center">
            <div className="mb-3" style={{ backgroundColor: "white" }}>
              <div className="search-box ">
                <div className="search-input">
                  <input
                    type="search"
                    placeholder={
                      lang === "mr"
                        ? data.marathi.placeholder
                        : data.english.placeholder
                    }
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <span className="search-btn">
                  <button style={{ right: "0", padding: "4px 0px" }}>
                    <i className="fa fa-search" name="search-sharp"></i>
                  </button>
                </span>
              </div>
            </div>
            {/* Filter */}
            <div className="filter-box mb-3">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg={3} md={3} sm={12} xs={12} className="  ">
                    <div className="filter-container mt-4  ">
                      <div type="label" className="filter-title mb-3">
                        {lang === "mr"
                          ? data.marathi.field1
                          : data.english.field1}
                      </div>

                      <div className="box-bottom1">
                        <Form.Select
                          aria-label="User Type Selection"
                          // // value={userType}
                          // onChange={(e) => setUserType(e.target.value)}
                          // onBlur={validateForm} // Validate on blur
                        >
                          <option value="1">विधान परिषद</option>
                          <option value="2">One</option>
                          <option value="3">Two</option>
                          <option value="4">Three</option>
                        </Form.Select>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={3} sm={12} xs={12} className=" mb-3">
                    <div className="filter-container mt-4">
                      <div type="label" className="filter-title mb-3">
                        {lang === "mr"
                          ? data.marathi.field2
                          : data.english.field2}
                      </div>

                      <div className="box-bottom1">
                        <Form.Select
                          aria-label="User Type Selection"
                          // // value={userType}
                          // onChange={(e) => setUserType(e.target.value)}
                          // onBlur={validateForm} // Validate on blur
                        >
                          <option value="1">पावसाळा</option>
                          <option value="2">One</option>
                          <option value="3">Two</option>
                          <option value="4">Three</option>
                        </Form.Select>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={3} sm={12} xs={12} className=" mb-3">
                    <div className="filter-container mt-4">
                      <div type="label" className="filter-title mb-3">
                        {lang === "mr"
                          ? data.marathi.field3
                          : data.english.field3}
                      </div>

                      <div className="box-bottom1">
                        <Form.Select
                          aria-label="User Type Selection"
                          // // value={userType}
                          // onChange={(e) => setUserType(e.target.value)}
                          // onBlur={validateForm} // Validate on blur
                        >
                          <option value="1">2022</option>
                          <option value="2">One</option>
                          <option value="3">Two</option>
                          <option value="4">Three</option>
                        </Form.Select>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={3} sm={12} xs={12} className="date-range">
                    <div type="label" className="filter-title ">
                      {lang === "mr"
                        ? data.marathi.field6
                        : data.english.field6}
                    </div>
                    <Row>
                      <Col lg={6} md={6} sm={12} xs={12} mb-3>
                        <div className="filter-container ">
                          <div type="label" className="filter-subtitle ">
                            {lang === "mr"
                              ? data.marathi.field4
                              : data.english.field4}
                          </div>
                          <div className="box-bottom1">
                            <InputGroup className="">
                              <i className="fa fa-calender"></i>
                              <DatePicker
                                className="form-control"
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </InputGroup>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="filter-container ">
                          <div type="label" className="filter-subtitle ">
                            {lang === "mr"
                              ? data.marathi.field5
                              : data.english.field5}
                          </div>
                          <div className="box-bottom1">
                            <InputGroup>
                              <i className="fa fa-calender"></i>
                              <DatePicker
                                className="form-control"
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                onChange={(date) => setEndDate(date)}
                              />
                            </InputGroup>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>

            <div className=" button_less">
              <Button
                style={{
                  width: "150px",
                  backgroundColor: "#000088",
                  color: "white",
                }}
                className="mt-2 mb-2 text-center"
              >
                {lang === "mr" ? data.marathi.button : data.english.button}
              </Button>
            </div>
          </Container>
        </div>

        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Calendar
                className="calendar-session"
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                shouldHighlightWeekends
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="about-head text-center">
                {lang === "mr" ? data.marathi.calender : data.english.calender}
                <hr
                  className="button_less"
                  style={{
                    width: "30%",
                    border: "none",
                    height: "5px",
                    opacity: "1",
                    marginTop: "0",
                    marginBottom: "15px",
                    background: "linear-gradient(to right, green, yellow)",
                  }}
                />
              </div>
              <div className="scroll_effect">
                <div
                  className="filter-box p-2"
                  style={{ position: "relative" }}
                >
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div className=" p-2" style={{ position: "relative" }}>
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div
                  className="filter-box p-2"
                  style={{ position: "relative" }}
                >
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div className=" p-2" style={{ position: "relative" }}>
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div
                  className="filter-box p-2"
                  style={{ position: "relative" }}
                >
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div className=" p-2" style={{ position: "relative" }}>
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div
                  className="filter-box p-2"
                  style={{ position: "relative" }}
                >
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
                <div className=" p-2" style={{ position: "relative" }}>
                  <b>Model Code of Conduct-Photo Message</b>
                  <span style={{ marginLeft: "auto" }}>
                    <i className="fa fa-download icon-calender"></i>
                  </span>
                  <br />
                  Date: 23-Apr-2022 | 1.02 MB
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SessionCalender;
