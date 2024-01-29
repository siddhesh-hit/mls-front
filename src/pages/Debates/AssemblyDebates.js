import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getApi } from "../../service/axiosInterceptors";
import LoaderComponents from "../../pages/loader";

const AssemblyDebates = () => {
  const [lang, setLang] = useState("mr");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isClicked, setIsClicked] = useState(true);
  const [debate, setDebate] = useState([]);

  const [search, setSearch] = useState(null);
  const [loader, setLoader] = useState(null);
  const data = {
    title: {
      marathi: "विधानसभा सभागृहांचे कार्यवृत्त",
      english: "Debates Of Legislative Assembly",
    },
    titleselect: {
      marathi: "विधानसभा",
      english: "Legislative Assembly",
    },
    titleselect1: {
      marathi: "अर्थसंकल्पीय",
      english: "Budgetary",
    },
    button1: {
      marathi: " अर्ज करा",
      english: "Apply",
    },
    button2: {
      marathi: "कमी पर्याय",
      english: "Less Options",
    },
    button2op: {
      marathi: "अधिक पर्याय दाखवा",
      english: "Show More",
    },
    Link1: {
      marathi: "मुख्यपृष्ठ",
      english: "Home",
    },
    Link2: {
      marathi: "सभागृहांचे कार्यवृत्त",
      english: "Debate",
    },
    Link3: {
      marathi: "विधानसभा सभागृहांचे कार्यवृत्त",
      english: "Debates of Legislative Assembly",
    },
    search: {
      marathi: "शोध कीवर्ड प्रविष्ट करा",
      english: "Enter a Search Keyword",
    },
    marathi: {
      field1: "अधिवेशन निवडा:",
      field2: "वर्ष:",
      field3: "तारखेपासून: ",
      field4: "तारखेपर्यंत: ",
      field5: "वादविवाद विषय:",
      field6: "वादाचा प्रकार:",
      field7: "मंत्रीपद:",
      field8: "सदस्य:",
      field9: "डिव्हाइस:",
      field10: "सभागृह:",
      tableHead: {
        head1: "विषय",
        head2: " सभागृह",
        head3: "अधिवेशन ",
        head4: " तारीख",
        head5: "खंड",
        head6: "क्रमांक",
        head7: "वादाचा प्रकार",
        head8: " आयुधे",
        head9: "आयुधाचा प्रकार",
        head10: "आयुधाचा उपप्रकार ",
        head11: "प्रश्न क्रमांक",
        head12: "मंत्रालय",
        head13: "पृष्ठ क्रमांक",
      },
      tableHead: {
        head1: "विषय",
        head2: " सभागृह",
        head3: "अधिवेशन ",
        head4: " तारीख",
        head5: "खंड",
        head6: "क्रमांक",
        head7: "वादाचा प्रकार",
        head8: " आयुधे",
        head9: "आयुधाचा प्रकार",
        head10: "आयुधाचा उपप्रकार ",
        head11: "प्रश्न क्रमांक",
        head12: "मंत्रालय",
        head13: "पृष्ठ क्रमांक",
        head14: "तपशील",
      },
      placeholder: {
        field1: "अधिवेशन  निवडा",
        field2: "वर्ष निवडा",
        field3: "प्रकार",
        field4: "प्रकार",
        field5: "विषय / शीर्षक शोधा",
        field6: "वादविवाद प्रकार निवडा",
        field7: "मंत्रीपद निवडा",
        field8: "सदस्य शोधा",
        field9: "डिव्हाइस निवडा",
        field10: "सभागृह निवडा",
      },
    },
    english: {
      field1: "Select Session:",
      field2: "Year:",
      field3: " Date From: ",
      field4: "Date to: ",
      field5: "Debate Topic:",
      field6: "Debate Type:",
      field7: "Ministry:",
      field8: "Members:",
      field9: "Device:",
      field10: "Houses:",
      tableHead: {
        head1: "Topic",
        head2: "House",
        head3: "Session",
        head4: "Date",
        head5: "Volume",
        head6: "No.",
        head7: "Debate type",
        head8: "Device",
        head9: "Device type",
        head10: "Device subtype",
        head11: "Question no.",
        head12: "Ministry",
        head13: "Page no.",
        head14: "Detail",
      },
      placeholder: {
        field1: "select session",
        field2: "Year",
        field3: "Type",
        field4: "Type",
        field5: "Debate Topic",
        field6: "Debate Type",
        field7: "Select Ministry",
        field8: "Select Members",
        field9: "Device",
        field10: "House",
      },
    },
  };

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

  const buttonClick = () => {
    setIsClicked(!isClicked);
  };

  const years = Array.from(
    { length: 30 },
    (_, index) => new Date().getFullYear() - index
  );

  const fetchData = async () => {
    await getApi(`debate/houses?perPage=0&perLimit=10&id=विधानसभा`)
      .then((res) => setDebate(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchFetchData = async () => {
    setLoader(true);
    await getApi(`debate/search?id=${search}`)
      .then((res) => {
        setLoader(false);
        setDebate(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  if (loader) {
    return <LoaderComponents />;
  }

  return (
    <>
      <Header />
      <div>
        <section className=" justify-content-center section-top-space">
          <Container fluid>
            <ul className="breadcrumb">
              <li>
                <Link to="/">
                  {lang === "mr" ? data.Link1.marathi : data.Link1.english}
                </Link>
              </li>
              <li>{lang === "mr" ? data.Link2.marathi : data.Link2.english}</li>
              <li>{lang === "mr" ? data.Link3.marathi : data.Link3.english}</li>
            </ul>

            <div className="about-head text-center ">
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
            <div
              className="container mb-4 mt-4"
              style={{ backgroundColor: "white" }}
            >
              <Row style={{ justifyContent: "center" }}>
                <div className="col-lg-6">
                  <div className="search-boss">
                    <div className="search-input">
                      <input
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={
                          lang === "mr"
                            ? data.search.marathi
                            : data.search.english
                        }
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                    <span className="search-btn">
                      <button
                        style={{ right: "0", padding: "4px 0px" }}
                        onClick={searchFetchData}
                      >
                        <i className="fa fa-search" name="search-sharp"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </Row>
            </div>
            <Container>
              <div className="council-field p-2  text-center ">
                <Row className="p-3">
                  <Row className="p-3">
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-1"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field10
                            : data.english.field10}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Select aria-label="Default select example">
                            <option>
                              {lang === "mr"
                                ? data.marathi.placeholder.field10
                                : data.english.placeholder.field10}
                            </option>
                            <option value="1" selected>
                              {lang === "mr"
                                ? data.titleselect.marathi
                                : data.titleselect.english}
                            </option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-1"
                        controlId="formPlaintextYear"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field2
                            : data.english.field2}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Select
                            as="select"
                            name="selectedYear"
                            aria-label="Select a year"
                            aria-describedby="basic-addon1"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              {lang === "mr"
                                ? data.marathi.placeholder.field2
                                : data.english.placeholder.field2}
                            </option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                          <Form.Group
                            as={Row}
                            className="mb-1"
                            controlId="formPlaintextEmail"
                          >
                            <Form.Label
                              column
                              lg="7"
                              md="12"
                              sm="12"
                              xs="12"
                              className="labels_debate"
                            >
                              {lang === "mr"
                                ? data.marathi.field3
                                : data.english.field3}
                            </Form.Label>
                            <Col lg="5" md="12" sm="12" xs="12" className="p-0">
                              <DatePicker
                                className="form-control"
                                selected={startDate}
                                selectsStart
                                placeholder={
                                  lang === "mr"
                                    ? data.marathi.placeholder.field3
                                    : data.english.placeholder.field3
                                }
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </Col>
                          </Form.Group>
                        </Col>
                        {/* <Col lg={6} md={6} sm={12} xs={12}>
                          <Form.Group
                            as={Row}
                            className="mb-1 "
                            controlId="formPlaintextEmail"
                          >
                            <Form.Label
                              column
                              lg="7"
                              md="12"
                              sm="12"
                              xs="12"
                              className="labels_debate"
                            >
                              {lang === "mr"
                                ? data.marathi.field4
                                : data.english.field4}
                            </Form.Label>
                            <Col lg="5" md="12" sm="12" xs="12" className="p-0">
                              <DatePicker
                                className="form-control "
                                selected={endDate}
                                selectsEnd
                                placeholder={
                                  lang === "mr"
                                    ? data.marathi.placeholder.field4
                                    : data.english.placeholder.field4
                                }
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                onChange={(date) => setEndDate(date)}
                              />
                            </Col>
                          </Form.Group>
                        </Col> */}
                        <Col lg={4} md={4} sm={12} xs={12}>
                          <Form.Group
                            as={Row}
                            className="mb-1"
                            controlId="formPlaintextEmail"
                          >
                            <Form.Label column sm="4" className="labels_debate">
                              {lang === "mr"
                                ? data.marathi.field1
                                : data.english.field1}
                            </Form.Label>
                            <Col sm="7">
                              <Form.Select aria-label="Default select example">
                                <option>
                                  {lang === "mr"
                                    ? data.marathi.placeholder.field1
                                    : data.english.placeholder.field1}
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className={`p-3 pb-2 ${isClicked ? "d-none" : ""}`}>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-1"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field1
                            : data.english.field1}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Select aria-label="Default select example">
                            <option>
                              {lang === "mr"
                                ? data.marathi.placeholder.field1
                                : data.english.placeholder.field1}
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-1"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field5
                            : data.english.field5}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            type="text"
                            name="full_name"
                            placeholder={
                              lang === "mr"
                                ? data.marathi.placeholder.field5
                                : data.english.placeholder.field5
                            }
                            aria-label="Enter your full name"
                            aria-describedby="basic-addon1"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-1"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field6
                            : data.english.field6}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Control
                            type="text"
                            name="full_name"
                            placeholder={
                              lang === "mr"
                                ? data.marathi.placeholder.field6
                                : data.english.placeholder.field6
                            }
                            aria-label="Enter your full name"
                            aria-describedby="basic-addon1"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className={`p-3 ${isClicked ? "d-none" : ""}`}>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field7
                            : data.english.field7}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Select aria-label="Default select example">
                            <option>
                              {lang === "mr"
                                ? data.marathi.placeholder.field7
                                : data.english.placeholder.field7}
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field8
                            : data.english.field8}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Select aria-label="Default select example">
                            <option>
                              {lang === "mr"
                                ? data.marathi.placeholder.field8
                                : data.english.placeholder.field8}
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="4" className="labels_debate">
                          {lang === "mr"
                            ? data.marathi.field9
                            : data.english.field9}
                        </Form.Label>
                        <Col sm="7">
                          <Form.Select aria-label="Default select example">
                            <option>
                              {lang === "mr"
                                ? data.marathi.placeholder.field9
                                : data.english.placeholder.field9}
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
                <div
                  className={`button_less justify-content-center p-1 ${
                    isClicked ? "d-none" : ""
                  }`}
                >
                  <Button
                    style={{
                      width: "100px",
                      backgroundColor: "#000088",
                      color: "white",
                    }}
                    className="mt-2 mb-4 text-center"
                    id="applybutton"
                  >
                    {lang === "mr"
                      ? data.button1.marathi
                      : data.button1.english}
                  </Button>
                </div>
              </div>
            </Container>
            <div className="button_less justify-content-center mt-0">
              <button
                className="optionButton text-center mb-4"
                id="optionButton"
                onClick={buttonClick}
              >
                <span>
                  {isClicked ? (
                    <i className="fa fa-arrow-down"></i>
                  ) : (
                    <i className="fa fa-arrow-up"></i>
                  )}
                </span>
              </button>
            </div>
            <section className="container ">
              <Col>
                <Row>
                  <Col className="m-0 p-2">
                    <table className="table-box-col3 ">
                      <thead
                        className="table-col2 text-center"
                        style={{ backgroundColor: " #000088", color: "white" }}
                      >
                        <tr
                          className="table-head "
                          style={{ border: "1px solid white" }}
                        >
                          <th className="table-head size w-10">
                            {lang === "mr"
                              ? data.marathi.tableHead.head1
                              : data.english.tableHead.head1}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head2
                              : data.english.tableHead.head2}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head3
                              : data.english.tableHead.head3}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head4
                              : data.english.tableHead.head4}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head5
                              : data.english.tableHead.head5}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head6
                              : data.english.tableHead.head6}
                          </th>
                          {/* <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head7
                              : data.english.tableHead.head7}
                          </th> */}
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head8
                              : data.english.tableHead.head8}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head9
                              : data.english.tableHead.head9}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head10
                              : data.english.tableHead.head10}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head11
                              : data.english.tableHead.head11}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head12
                              : data.english.tableHead.head12}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head13
                              : data.english.tableHead.head13}
                          </th>
                          <th className="table-head  size">
                            {lang === "mr"
                              ? data.marathi.tableHead.head14
                              : data.english.tableHead.head14}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {debate && debate.length > 0 ? (
                          <>
                            {debate.map((item, index) => (
                              <tr key={index}>
                                <td className=" p-2">{item.topic}</td>
                                <td className=" p-1">{item.house}</td>
                                <td className=" p-1">{item.session}</td>
                                <td className=" p-2">{item.date}</td>
                                <td className=" p-1">{item.volume}</td>
                                <td className=" p-1">{item.page_no}</td>

                                <td className=" p-1">{item.method}</td>

                                <td className=" p-1">{item.method_type}</td>
                                <td className=" p-1">{item.method_sub_type}</td>
                                <td className=" p-1">Questiono</td>
                                <td className=" p-1">Ministry</td>
                                <td className=" p-1">{item.page_no}</td>

                                <td className=" p-2">
                                  <div
                                    className=" "
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link
                                      to={`/DebateDetails?id=${item._id}`}
                                      style={{ marginLeft: "auto" }}
                                    >
                                      <i
                                        className="fa fa-eye"
                                        style={{ color: "black" }}
                                      ></i>
                                    </Link>
                                  </div>
                                </td>
                                {/* <td className=" p-2">
                                  <div
                                    className=" "
                                    style={{ position: "relative" }}
                                  >
                                    <a
                                      href={
                                        "http://103.112.121.109:8000/" +
                                        item.fileurl
                                      }
                                      target="_blank"
                                      download
                                      rel="noreferrer"
                                      style={{ marginLeft: "auto" }}
                                    >
                                      <i
                                        className="fa fa-download icon-calender"
                                        style={{ top: "4px" }}
                                      ></i>
                                    </a>
                                  </div>
                                </td> */}
                              </tr>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Col>
            </section>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AssemblyDebates;
